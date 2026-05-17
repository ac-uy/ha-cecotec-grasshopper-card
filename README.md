# Cecotec GrassHopper Card

A custom Home Assistant Lovelace card for managing the Cecotec GrassHopper robot mower. Shows mower status, provides controls, and lets you manage the mowing schedule — all in one card.

## Features

- **Mower status** — Activity state, battery level, rain sensor indicator
- **Controls** — Start, Pause, Dock, Resume buttons (context-aware based on mower state)
- **Schedule management** — View all scheduled entries, add new ones, remove individual days
- **Rain indicator** — Shows when rain delay is active

## Requirements

This card requires the [Cecotec GrassHopper integration](https://github.com/ac-uy/ha-cecotec-grasshopper) to be installed and configured. The integration provides the `lawn_mower` entity, schedule sensors, and mower control services.

## Installation

### HACS (Recommended)

1. Open HACS in your Home Assistant instance
2. Click the three dots menu (top right) → **Custom repositories**
3. Add `ac-uy/ha-cecotec-grasshopper-card` with category **Lovelace**
4. Search for "Cecotec GrassHopper Card" and click **Download**
5. Restart Home Assistant
6. Add the resource in **Settings → Dashboards → Resources**:
   - URL: `/hacsfiles/ha-cecotec-grasshopper-card/ha-cecotec-grasshopper-card.js`
   - Type: JavaScript Module

### Manual Installation

1. Download `ha-cecotec-grasshopper-card.js` from the [latest release](https://github.com/ac-uy/ha-cecotec-grasshopper-card/releases/latest)
2. Copy it to your `config/www/` directory
3. Add the resource in **Settings → Dashboards → Resources**:
   - URL: `/local/ha-cecotec-grasshopper-card.js`
   - Type: JavaScript Module

## Configuration

### Visual Editor

Add the card to your dashboard and search for "Cecotec GrassHopper" in the card picker.

### YAML

```yaml
type: custom:ha-cecotec-grasshopper-card
entity: lawn_mower.mymower
title: GrassHopper  # optional
```

### Options

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| `entity` | string | ✅ | Your `lawn_mower.*` entity ID |
| `title` | string | ❌ | Card title (default: "GrassHopper") |
| `schedule_entity` | string | ❌ | Schedule sensor entity (auto-detected if omitted) |

## Schedule Management

The card provides inline schedule management:

- **View** — All scheduled mowing sessions shown as a list with day, time range, and edge mowing indicator
- **Add** — Click "+ Add" to open the form: select day, start/end time, and edge mowing toggle
- **Remove** — Click the delete icon on any entry to remove it

Schedule changes are sent to the mower via the Cecotec GrassHopper integration services.

## Services Used

This card calls the following services:

| Service | Description |
|---------|-------------|
| `lawn_mower.start_mowing` | Start mowing (respects mowing mode selector) |
| `lawn_mower.dock` | Send mower home |
| `lawn_mower.pause` | Pause mowing |
| `cecotec_grasshopper.set_schedule` | Set the full mowing schedule (used for add/remove) |

## Development

```bash
git clone https://github.com/ac-uy/ha-cecotec-grasshopper-card.git
cd ha-cecotec-grasshopper-card
npm install
npm run build
```

## License

MIT
