/**
 * HA Cecotec GrassHopper Card
 * 
 * A custom Lovelace card for managing the Cecotec GrassHopper robot mower.
 * Shows status, controls, and schedule management in one card.
 */

import { LitElement, html, css, nothing } from "lit";
import { customElement, state } from "lit/decorators.js";

interface HassEntity {
  state: string;
  attributes: Record<string, any>;
  last_changed: string;
}

interface HomeAssistant {
  states: Record<string, HassEntity>;
  callService(domain: string, service: string, data?: Record<string, any>): Promise<void>;
  themes: { darkMode: boolean };
}

interface CardConfig {
  type: string;
  entity: string;
  title?: string;
  schedule_entity?: string;
}

const DAY_NAMES = ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const DAY_FULL = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

@customElement("ha-cecotec-grasshopper-card")
export class HaCecotecGrasshopperCard extends LitElement {
  @state() private _config!: CardConfig;
  @state() private _addingSchedule = false;
  @state() private _newDay = 1;
  @state() private _newStart = "09:00";
  @state() private _newEnd = "12:00";
  @state() private _newEdge = true;
  @state() private _pendingRemove: string | null = null;
  @state() private _saving = false;

  private _hass?: HomeAssistant;

  static getConfigElement() {
    return document.createElement("ha-cecotec-grasshopper-card-editor");
  }

  static getStubConfig() {
    return { type: "custom:ha-cecotec-grasshopper-card", entity: "lawn_mower.mymower" };
  }

  setConfig(config: CardConfig) {
    if (!config.entity) {
      throw new Error("Please define an entity");
    }
    this._config = config;
  }

  set hass(hass: HomeAssistant) {
    this._hass = hass;
    this.requestUpdate();
  }

  getCardSize() {
    return 5;
  }

  private get _entity(): HassEntity | undefined {
    return this._hass?.states[this._config.entity];
  }

  private get _batteryEntity(): HassEntity | undefined {
    const id = this._config.entity.replace("lawn_mower.", "sensor.") + "_battery";
    // Try common patterns
    return this._hass?.states[id] || this._hass?.states[id.replace("_battery", "") + "_battery"];
  }

  private get _scheduleEntity(): HassEntity | undefined {
    // Use explicit config if provided
    if (this._config.schedule_entity) {
      return this._hass?.states[this._config.schedule_entity];
    }
    // Try to auto-detect: look for sensor with "next_schedule" that belongs to this mower
    const mowerName = this._config.entity.replace("lawn_mower.", "");
    const states = this._hass?.states || {};
    
    // Try: sensor.<mowername>_next_schedule
    const prefixed = `sensor.${mowerName}_next_schedule`;
    if (states[prefixed]) return states[prefixed];
    
    // Try: sensor.next_schedule (generic)
    if (states["sensor.next_schedule"]) return states["sensor.next_schedule"];
    
    // Search for any sensor with schedule_entries attribute from this integration
    for (const [id, entity] of Object.entries(states)) {
      if (id.startsWith("sensor.") && entity.attributes?.schedule_entries !== undefined) {
        return entity;
      }
    }
    return undefined;
  }

  private get _rainEntity(): HassEntity | undefined {
    const prefix = this._config.entity.replace("lawn_mower.", "binary_sensor.");
    return this._hass?.states[prefix + "_rain_detected"];
  }

  private get _modeEntity(): HassEntity | undefined {
    const mowerName = this._config.entity.replace("lawn_mower.", "");
    const states = this._hass?.states || {};
    // Try select.<mowername> or select.<mowername>_mowing_mode
    return states[`select.${mowerName}`] || states[`select.${mowerName}_mowing_mode`];
  }

  private get _mowingMode(): string {
    return this._modeEntity?.state || "normal";
  }

  private get _activity(): string {
    const state = this._entity?.state || "unknown";
    // Use detailed_status attribute for more info when docked
    const detail = this._entity?.attributes?.detailed_status;
    const map: Record<string, string> = {
      mowing: "Mowing",
      docked: detail === "charging" ? "Charging" : detail === "fully_charged" ? "Fully Charged" : "Docked",
      paused: "Paused",
      returning: "Returning",
      error: "Error",
    };
    return map[state] || state;
  }

  private get _battery(): number | null {
    const entity = this._batteryEntity;
    if (!entity) return null;
    const val = parseInt(entity.state);
    return isNaN(val) ? null : val;
  }

  private get _schedule(): any[] {
    const entity = this._scheduleEntity;
    if (!entity) return [];
    
    // Try the schedule array attribute first
    if (entity.attributes?.schedule && Array.isArray(entity.attributes.schedule) && entity.attributes.schedule.length > 0) {
      return entity.attributes.schedule;
    }
    
    // Fallback: parse from day-name attributes (e.g. tuesday: "18:00-21:00 (edge: ✓)")
    const dayNames = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    const entries: any[] = [];
    for (let i = 0; i < dayNames.length; i++) {
      const dayAttr = entity.attributes?.[dayNames[i]];
      if (dayAttr && typeof dayAttr === "string") {
        // Parse "18:00-21:00 (edge: ✓)" or "18:00-21:00 (trim: ✓)"
        const match = dayAttr.match(/^(\d{2}:\d{2})-(\d{2}:\d{2})\s*\((?:edge|trim):\s*(✓|✗)\)/);
        if (match) {
          entries.push({
            day: DAY_FULL[i + 1],
            day_number: i + 1,
            start: match[1],
            end: match[2],
            edge: match[3] === "✓",
          });
        }
      }
    }
    return entries;
  }

  private get _isRaining(): boolean {
    return this._rainEntity?.state === "on";
  }

  // ── Actions ──

  private async _refreshEntity() {
    // Double refresh: quick check + delayed fallback for slow cloud updates
    await new Promise(r => setTimeout(r, 1000));
    await this._hass?.callService("homeassistant", "update_entity", {
      entity_id: this._config.entity,
    });
    await new Promise(r => setTimeout(r, 4000));
    await this._hass?.callService("homeassistant", "update_entity", {
      entity_id: this._config.entity,
    });
  }

  private async _startMowing() {
    await this._hass?.callService("lawn_mower", "start_mowing", { entity_id: this._config.entity });
    await this._refreshEntity();
  }

  private async _toggleMode() {
    const newMode = this._mowingMode === "normal" ? "edge" : "normal";
    await this._setMode(newMode);
  }

  private async _setMode(mode: string) {
    const mowerName = this._config.entity.replace("lawn_mower.", "");
    await this._hass?.callService("select", "select_option", {
      entity_id: `select.${mowerName}`,
      option: mode,
    });
  }

  private async _dock() {
    // Mower must be paused before docking
    const state = this._entity?.state || "";
    if (state !== "paused") {
      await this._hass?.callService("lawn_mower", "pause", { entity_id: this._config.entity });
      await new Promise(r => setTimeout(r, 1000));
    }
    await this._hass?.callService("lawn_mower", "dock", { entity_id: this._config.entity });
    await this._refreshEntity();
  }

  private async _pause() {
    await this._hass?.callService("lawn_mower", "pause", { entity_id: this._config.entity });
    await this._refreshEntity();
  }

  private async _refreshSchedule() {
    // Wait for API to persist, then force coordinator refresh
    await new Promise(r => setTimeout(r, 3000));
    await this._hass?.callService("homeassistant", "update_entity", {
      entity_id: this._config.entity,
    });
  }

  private async _removeScheduleEntry(day: number, start?: string) {
    const key = `${day}-${start}`;
    this._pendingRemove = key;
    try {
      const current = this._schedule;
      const filtered = current.filter((e: any) => {
        if (e.day_number !== day) return true;
        if (start && e.start !== start) return true;
        return false;
      });
      const apiSchedule = filtered.map((e: any) => ({
        day: e.day_number,
        start: e.start,
        end: e.end,
        edge: e.edge,
      }));
      await this._hass?.callService("cecotec_grasshopper", "set_schedule", {
        entity_id: this._config.entity,
        schedule: apiSchedule,
      });
      await this._refreshSchedule();
    } finally {
      this._pendingRemove = null;
    }
  }

  private async _addScheduleEntry() {
    this._saving = true;
    try {
      const current = this._schedule;
      const apiSchedule = current.map((e: any) => ({
        day: e.day_number,
        start: e.start,
        end: e.end,
        edge: e.edge,
      }));
      apiSchedule.push({
        day: this._newDay,
        start: this._newStart,
        end: this._newEnd,
        edge: this._newEdge,
      });
      await this._hass?.callService("cecotec_grasshopper", "set_schedule", {
        entity_id: this._config.entity,
        schedule: apiSchedule,
      });
      await this._refreshSchedule();
      this._addingSchedule = false;
    } finally {
      this._saving = false;
    }
  }

  // ── Render ──

  render() {
    if (!this._config || !this._hass) return nothing;

    const entity = this._entity;
    if (!entity) {
      return html`<ha-card><div class="error">Entity ${this._config.entity} not found</div></ha-card>`;
    }

    return html`
      <ha-card .header=${this._config.title || "GrassHopper"}>
        <div class="card-content">
          ${this._renderStatus()}
          ${this._renderControls()}
          ${this._renderSchedule()}
        </div>
      </ha-card>
    `;
  }

  private _renderStatus() {
    const battery = this._battery;
    const activity = this._activity;
    const isRaining = this._isRaining;

    return html`
      <div class="status-section">
        <div class="status-row">
          <ha-icon icon="mdi:robot-mower"></ha-icon>
          <span class="status-text">${activity}</span>
          ${battery !== null ? html`
            <span class="battery">
              <ha-icon icon="mdi:battery${battery > 75 ? '' : battery > 25 ? '-50' : '-10'}"></ha-icon>
              ${battery}%
            </span>
          ` : nothing}
          ${isRaining ? html`<span class="rain"><ha-icon icon="mdi:weather-rainy"></ha-icon> Rain</span>` : nothing}
        </div>
      </div>
    `;
  }

  private _renderControls() {
    const state = this._entity?.state || "";
    const isDocked = state === "docked" || state === "idle";
    const isPaused = state === "paused";
    const mode = this._mowingMode;

    return html`
      <div class="controls-section">
        ${isDocked ? html`
          <button class="ctrl-btn ctrl-btn--start" @click=${this._startMowing}>
            <ha-icon icon="mdi:play"></ha-icon> Start
          </button>
          <div class="mode-toggle">
            <button class="mode-opt ${mode === 'normal' ? 'active' : ''}" @click=${() => this._setMode('normal')}>
              <ha-icon icon="mdi:grass"></ha-icon> Normal
            </button>
            <button class="mode-opt ${mode === 'edge' ? 'active' : ''}" @click=${() => this._setMode('edge')}>
              <ha-icon icon="mdi:border-all-variant"></ha-icon> Edge
            </button>
          </div>
        ` : isPaused ? html`
          <button class="ctrl-btn ctrl-btn--start" @click=${this._startMowing}>
            <ha-icon icon="mdi:play"></ha-icon> Resume
          </button>
          <button class="ctrl-btn ctrl-btn--dock" @click=${this._dock}>
            <ha-icon icon="mdi:home"></ha-icon> Dock
          </button>
        ` : html`
          <button class="ctrl-btn ctrl-btn--pause" @click=${this._pause}>
            <ha-icon icon="mdi:pause"></ha-icon> Pause
          </button>
          <button class="ctrl-btn ctrl-btn--dock" @click=${this._dock}>
            <ha-icon icon="mdi:home"></ha-icon> Dock
          </button>
        `}
      </div>
    `;
  }

  private _renderSchedule() {
    const schedule = this._schedule;

    return html`
      <div class="schedule-section">
        <div class="schedule-header">
          <span class="schedule-title">Schedule</span>
          <button class="add-btn" @click=${() => { this._addingSchedule = !this._addingSchedule; }}>
            ${this._addingSchedule ? "Cancel" : "+ Add"}
          </button>
        </div>

        ${this._addingSchedule ? this._renderAddForm() : nothing}

        ${schedule.length === 0 ? html`
          <div class="empty-schedule">No schedule configured</div>
        ` : html`
          <div class="schedule-list">
            ${schedule.map((entry: any) => {
              const key = `${entry.day_number}-${entry.start}`;
              const removing = this._pendingRemove === key;
              return html`
              <div class="schedule-entry ${removing ? 'removing' : ''}">
                <span class="entry-day">${entry.day || DAY_FULL[entry.day_number] || "?"}</span>
                <span class="entry-time">${entry.start} - ${entry.end}</span>
                ${entry.edge ? html`<span class="entry-edge-label">Edge</span>` : nothing}
                <button class="remove-btn" @click=${() => this._removeScheduleEntry(entry.day_number, entry.start)} ?disabled=${removing}>
                  ${removing ? html`<ha-icon icon="mdi:loading" class="spin"></ha-icon>` : html`<ha-icon icon="mdi:delete"></ha-icon>`}
                </button>
              </div>
            `})}
          </div>
        `}
      </div>
    `;
  }

  private _renderAddForm() {
    return html`
      <div class="add-form">
        <div class="form-row">
          <label>Day</label>
          <select @change=${(e: Event) => { this._newDay = parseInt((e.target as HTMLSelectElement).value); }}>
            ${[1,2,3,4,5,6,7].map(d => html`<option value="${d}" ?selected=${this._newDay === d}>${DAY_FULL[d]}</option>`)}
          </select>
        </div>
        <div class="form-row">
          <label>Start</label>
          <input type="time" .value=${this._newStart} @change=${(e: Event) => { this._newStart = (e.target as HTMLInputElement).value; }} />
        </div>
        <div class="form-row">
          <label>End</label>
          <input type="time" .value=${this._newEnd} @change=${(e: Event) => { this._newEnd = (e.target as HTMLInputElement).value; }} />
        </div>
        <div class="form-row">
          <label>Edge mowing</label>
          <input type="checkbox" ?checked=${this._newEdge} @change=${(e: Event) => { this._newEdge = (e.target as HTMLInputElement).checked; }} />
        </div>
        <button class="save-btn" @click=${this._addScheduleEntry} ?disabled=${this._saving}>
          ${this._saving ? "Saving..." : "Save"}
        </button>
      </div>
    `;
  }

  static styles = css`
    :host { display: block; }

    .card-content { padding: 16px; }

    .error { padding: 16px; color: var(--error-color, red); }

    /* Status */
    .status-section { margin-bottom: 16px; }
    .status-row {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      border-radius: 12px;
      background: var(--primary-background-color, #f5f5f5);
    }
    .status-text { font-size: 16px; font-weight: 500; flex: 1; }
    .battery { display: flex; align-items: center; gap: 4px; font-size: 14px; color: var(--secondary-text-color); }
    .rain { display: flex; align-items: center; gap: 4px; font-size: 13px; color: var(--info-color, #2196F3); }

    /* Controls */
    .controls-section {
      display: flex;
      gap: 8px;
      margin-bottom: 16px;
    }
    .ctrl-btn {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 10px;
      border: none;
      border-radius: 12px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      min-height: 44px;
      transition: opacity 200ms;
    }
    .ctrl-btn:active { opacity: 0.7; }
    .ctrl-btn--start { background: var(--primary-color, #4CAF50); color: white; }
    .ctrl-btn--pause { background: var(--warning-color, #FF9800); color: white; }
    .ctrl-btn--dock { background: var(--secondary-text-color, #757575); color: white; }

    /* Mode toggle (segmented control) */
    .mode-toggle {
      display: flex;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 12px;
      overflow: hidden;
    }
    .mode-opt {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      padding: 10px 12px;
      border: none;
      background: transparent;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      color: var(--secondary-text-color);
      transition: all 200ms;
      --mdc-icon-size: 18px;
    }
    .mode-opt.active {
      background: var(--primary-color, #4CAF50);
      color: white;
    }
    .mode-opt:not(.active):hover {
      background: var(--secondary-background-color, #f5f5f5);
    }

    /* Schedule */
    .schedule-section { }
    .schedule-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
    }
    .schedule-title { font-size: 14px; font-weight: 600; color: var(--primary-text-color); }
    .add-btn {
      padding: 4px 12px;
      border: 1px solid var(--primary-color, #4CAF50);
      border-radius: 8px;
      background: transparent;
      color: var(--primary-color, #4CAF50);
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
    }
    .empty-schedule {
      padding: 12px;
      text-align: center;
      color: var(--secondary-text-color);
      font-size: 13px;
      font-style: italic;
    }
    .schedule-list { display: flex; flex-direction: column; gap: 6px; }
    .schedule-entry {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      border-radius: 8px;
      background: var(--primary-background-color, #f5f5f5);
    }
    .entry-day { font-weight: 500; min-width: 80px; font-size: 13px; }
    .entry-time { flex: 1; font-size: 13px; color: var(--secondary-text-color); }
    .entry-edge-label {
      font-size: 11px;
      font-weight: 500;
      color: var(--primary-color, #4CAF50);
      background: rgba(76, 175, 80, 0.1);
      padding: 2px 6px;
      border-radius: 4px;
    }
    .remove-btn {
      border: none;
      background: transparent;
      cursor: pointer;
      color: var(--error-color, #f44336);
      padding: 4px;
      border-radius: 4px;
      --mdc-icon-size: 18px;
    }
    .remove-btn:hover { background: rgba(244, 67, 54, 0.1); }
    .schedule-entry.removing { opacity: 0.4; transition: opacity 200ms; }
    .spin { animation: spin 1s linear infinite; }
    @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

    /* Add form */
    .add-form {
      padding: 12px;
      border-radius: 8px;
      background: var(--primary-background-color, #f5f5f5);
      margin-bottom: 12px;
    }
    .form-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
    }
    .form-row label { font-size: 13px; font-weight: 500; }
    .form-row select, .form-row input[type="time"] {
      padding: 6px 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 6px;
      font-size: 13px;
      background: var(--card-background-color, white);
    }
    .form-row input[type="checkbox"] { width: 18px; height: 18px; }
    .save-btn {
      width: 100%;
      padding: 8px;
      border: none;
      border-radius: 8px;
      background: var(--primary-color, #4CAF50);
      color: white;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      margin-top: 4px;
    }
  `;
}

// Register card
window.customCards = window.customCards || [];
window.customCards.push({
  type: "ha-cecotec-grasshopper-card",
  name: "Cecotec GrassHopper",
  description: "Manage your Cecotec GrassHopper robot mower: status, controls, and schedule.",
  preview: true,
});

declare global {
  interface Window { customCards?: any[]; }
}
