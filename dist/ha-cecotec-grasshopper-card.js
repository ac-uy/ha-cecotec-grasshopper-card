function t(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;let r=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&n.set(e,t))}return t}toString(){return this.cssText}};const o=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:a,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:l,getPrototypeOf:p}=Object,u=globalThis,_=u.trustedTypes,g=_?_.emptyScript:"",y=u.reactiveElementPolyfillSupport,f=(t,e)=>t,m={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},$=(t,e)=>!a(t,e),v={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:$};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const r=i?.call(this);n?.call(this,e),this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const t=this.properties,e=[...h(t),...l(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),n=e.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const n=(void 0!==s.converter?.toAttribute?s.converter:m).toAttribute(e,s.type);this._$Em=t,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:m;this._$Em=i;const r=n.fromAttribute(e,t.type);this[i]=r??this._$Ej?.get(i)??r,this._$Em=null}}requestUpdate(t,e,s,i=!1,n){if(void 0!==t){const r=this.constructor;if(!1===i&&(n=this[t]),s??=r.getPropertyOptions(t),!((s.hasChanged??$)(n,e)||s.useDefault&&s.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:n},r){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==n||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[f("elementProperties")]=new Map,b[f("finalized")]=new Map,y?.({ReactiveElement:b}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,A=t=>t,x=w.trustedTypes,E=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+C,P=`<${k}>`,M=document,U=()=>M.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,T="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,z=/>/g,D=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,I=/"/g,L=/^(?:script|style|textarea|title)$/i,F=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),B=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),q=new WeakMap,V=M.createTreeWalker(M,129);function G(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const J=(t,e)=>{const s=t.length-1,i=[];let n,r=2===e?"<svg>":3===e?"<math>":"",o=H;for(let e=0;e<s;e++){const s=t[e];let a,c,d=-1,h=0;for(;h<s.length&&(o.lastIndex=h,c=o.exec(s),null!==c);)h=o.lastIndex,o===H?"!--"===c[1]?o=N:void 0!==c[1]?o=z:void 0!==c[2]?(L.test(c[2])&&(n=RegExp("</"+c[2],"g")),o=D):void 0!==c[3]&&(o=D):o===D?">"===c[0]?(o=n??H,d=-1):void 0===c[1]?d=-2:(d=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?D:'"'===c[3]?I:j):o===I||o===j?o=D:o===N||o===z?o=H:(o=D,n=void 0);const l=o===D&&t[e+1].startsWith("/>")?" ":"";r+=o===H?s+P:d>=0?(i.push(a),s.slice(0,d)+S+s.slice(d)+C+l):s+C+(-2===d?e:l)}return[G(t,r+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class K{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[c,d]=J(t,e);if(this.el=K.createElement(c,s),V.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=V.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(S)){const e=d[r++],s=i.getAttribute(t).split(C),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:o[2],strings:s,ctor:"."===o[1]?tt:"?"===o[1]?et:"@"===o[1]?st:Y}),i.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:n}),i.removeAttribute(t));if(L.test(i.tagName)){const t=i.textContent.split(C),e=t.length-1;if(e>0){i.textContent=x?x.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],U()),V.nextNode(),a.push({type:2,index:++n});i.append(t[e],U())}}}else if(8===i.nodeType)if(i.data===k)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(C,t+1));)a.push({type:7,index:n}),t+=C.length-1}n++}}static createElement(t,e){const s=M.createElement("template");return s.innerHTML=t,s}}function Z(t,e,s=t,i){if(e===B)return e;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const r=O(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(e=Z(t,n._$AS(t,e.values),n,i)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??M).importNode(e,!0);V.currentNode=i;let n=V.nextNode(),r=0,o=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new X(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new it(n,this,t)),this._$AV.push(e),a=s[++o]}r!==a?.index&&(n=V.nextNode(),r++)}return V.currentNode=M,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),O(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=K.createElement(G(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Q(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new K(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new X(this.O(U()),this.O(U()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=W}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(void 0===n)t=Z(this,t,e,0),r=!O(t)||t!==this._$AH&&t!==B,r&&(this._$AH=t);else{const i=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=Z(this,i[s+o],e,o),a===B&&(a=this._$AH[o]),r||=!O(a)||a!==this._$AH[o],a===W?t=W:t!==W&&(t+=(a??"")+n[o+1]),this._$AH[o]=a}r&&!i&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class et extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class st extends Y{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??W)===B)return;const s=this._$AH,i=t===W&&s!==W||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==W&&(s===W||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const nt=w.litHtmlPolyfillSupport;nt?.(K,X),(w.litHtmlVersions??=[]).push("3.3.3");const rt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ot extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let n=i._$litPart$;if(void 0===n){const t=s?.renderBefore??null;i._$litPart$=n=new X(e.insertBefore(U(),t),t,void 0,s??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}ot._$litElement$=!0,ot.finalized=!0,rt.litElementHydrateSupport?.({LitElement:ot});const at=rt.litElementPolyfillSupport;at?.({LitElement:ot}),(rt.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:$},dt=(t=ct,e,s)=>{const{kind:i,metadata:n}=s;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),r.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const n=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,n,t,!0,s)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const n=this[i];e.call(this,s),this.requestUpdate(i,n,t,!0,s)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ht(t){return function(t){return(e,s)=>"object"==typeof s?dt(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}({...t,state:!0,attribute:!1})}const lt=["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];let pt=class extends ot{constructor(){super(...arguments),this._addingSchedule=!1,this._newDay=1,this._newStart="09:00",this._newEnd="12:00",this._newEdge=!0,this._pendingRemove=null,this._saving=!1}static getConfigElement(){return document.createElement("ha-cecotec-grasshopper-card-editor")}static getStubConfig(){return{type:"custom:ha-cecotec-grasshopper-card",entity:"lawn_mower.mymower"}}setConfig(t){if(!t.entity)throw new Error("Please define an entity");this._config=t}set hass(t){this._hass=t,this.requestUpdate()}getCardSize(){return 5}get _entity(){return this._hass?.states[this._config.entity]}get _batteryEntity(){const t=this._config.entity.replace("lawn_mower.","sensor.")+"_battery";return this._hass?.states[t]||this._hass?.states[t.replace("_battery","")+"_battery"]}get _scheduleEntity(){if(this._config.schedule_entity)return this._hass?.states[this._config.schedule_entity];const t=this._config.entity.replace("lawn_mower.",""),e=this._hass?.states||{},s=`sensor.${t}_next_schedule`;if(e[s])return e[s];if(e["sensor.next_schedule"])return e["sensor.next_schedule"];for(const[t,s]of Object.entries(e))if(t.startsWith("sensor.")&&void 0!==s.attributes?.schedule_entries)return s}get _rainEntity(){const t=this._config.entity.replace("lawn_mower.","binary_sensor.");return this._hass?.states[t+"_rain_detected"]}get _modeEntity(){const t=this._config.entity.replace("lawn_mower.",""),e=this._hass?.states||{};return e[`select.${t}`]||e[`select.${t}_mowing_mode`]}get _mowingMode(){return this._modeEntity?.state||"normal"}get _activity(){const t=this._entity?.state||"unknown",e=this._entity?.attributes?.detailed_status;return{mowing:"Mowing",docked:"charging"===e?"Charging":"fully_charged"===e?"Fully Charged":"Docked",paused:"Paused",returning:"Returning",error:"Error"}[t]||t}get _battery(){const t=this._batteryEntity;if(!t)return null;const e=parseInt(t.state);return isNaN(e)?null:e}get _schedule(){const t=this._scheduleEntity;if(!t)return[];if(t.attributes?.schedule&&Array.isArray(t.attributes.schedule)&&t.attributes.schedule.length>0)return t.attributes.schedule;const e=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],s=[];for(let i=0;i<e.length;i++){const n=t.attributes?.[e[i]];if(n&&"string"==typeof n){const t=n.match(/^(\d{2}:\d{2})-(\d{2}:\d{2})\s*\((?:edge|trim):\s*(✓|✗)\)/);t&&s.push({day:lt[i+1],day_number:i+1,start:t[1],end:t[2],edge:"✓"===t[3]})}}return s}get _isRaining(){return"on"===this._rainEntity?.state}async _refreshEntity(){await new Promise(t=>setTimeout(t,1e3)),await(this._hass?.callService("homeassistant","update_entity",{entity_id:this._config.entity})),await new Promise(t=>setTimeout(t,4e3)),await(this._hass?.callService("homeassistant","update_entity",{entity_id:this._config.entity}))}async _startMowing(){await(this._hass?.callService("lawn_mower","start_mowing",{entity_id:this._config.entity})),await this._refreshEntity()}async _toggleMode(){const t="normal"===this._mowingMode?"edge":"normal";await this._setMode(t)}async _setMode(t){const e=this._config.entity.replace("lawn_mower.","");await(this._hass?.callService("select","select_option",{entity_id:`select.${e}`,option:t}))}async _dock(){"paused"!==(this._entity?.state||"")&&(await(this._hass?.callService("lawn_mower","pause",{entity_id:this._config.entity})),await new Promise(t=>setTimeout(t,1e3))),await(this._hass?.callService("lawn_mower","dock",{entity_id:this._config.entity})),await this._refreshEntity()}async _pause(){await(this._hass?.callService("lawn_mower","pause",{entity_id:this._config.entity})),await this._refreshEntity()}async _refreshSchedule(){await new Promise(t=>setTimeout(t,3e3)),await(this._hass?.callService("homeassistant","update_entity",{entity_id:this._config.entity}))}async _removeScheduleEntry(t,e){const s=`${t}-${e}`;this._pendingRemove=s;try{const s=this._schedule.filter(s=>s.day_number!==t||!(!e||s.start===e)),i=s.map(t=>({day:t.day_number,start:t.start,end:t.end,edge:t.edge}));await(this._hass?.callService("cecotec_grasshopper","set_schedule",{entity_id:this._config.entity,schedule:i})),await this._refreshSchedule()}finally{this._pendingRemove=null}}async _addScheduleEntry(){this._saving=!0;try{const t=this._schedule.map(t=>({day:t.day_number,start:t.start,end:t.end,edge:t.edge}));t.push({day:this._newDay,start:this._newStart,end:this._newEnd,edge:this._newEdge}),await(this._hass?.callService("cecotec_grasshopper","set_schedule",{entity_id:this._config.entity,schedule:t})),await this._refreshSchedule(),this._addingSchedule=!1}finally{this._saving=!1}}render(){if(!this._config||!this._hass)return W;return this._entity?F`
      <ha-card .header=${this._config.title||"GrassHopper"}>
        <div class="card-content">
          ${this._renderStatus()}
          ${this._renderControls()}
          ${this._renderSchedule()}
        </div>
      </ha-card>
    `:F`<ha-card><div class="error">Entity ${this._config.entity} not found</div></ha-card>`}_renderStatus(){const t=this._battery,e=this._activity,s=this._isRaining;return F`
      <div class="status-section">
        <div class="status-row">
          <ha-icon icon="mdi:robot-mower"></ha-icon>
          <span class="status-text">${e}</span>
          ${null!==t?F`
            <span class="battery">
              <ha-icon icon="mdi:battery${t>75?"":t>25?"-50":"-10"}"></ha-icon>
              ${t}%
            </span>
          `:W}
          ${s?F`<span class="rain"><ha-icon icon="mdi:weather-rainy"></ha-icon> Rain</span>`:W}
        </div>
      </div>
    `}_renderControls(){const t=this._entity?.state||"",e="docked"===t||"idle"===t,s="paused"===t,i=this._mowingMode;return F`
      <div class="controls-section">
        ${e?F`
          <button class="ctrl-btn ctrl-btn--start" @click=${this._startMowing}>
            <ha-icon icon="mdi:play"></ha-icon> Start
          </button>
          <div class="mode-toggle">
            <button class="mode-opt ${"normal"===i?"active":""}" @click=${()=>this._setMode("normal")}>
              <ha-icon icon="mdi:grass"></ha-icon> Normal
            </button>
            <button class="mode-opt ${"edge"===i?"active":""}" @click=${()=>this._setMode("edge")}>
              <ha-icon icon="mdi:border-all-variant"></ha-icon> Edge
            </button>
          </div>
        `:s?F`
          <button class="ctrl-btn ctrl-btn--start" @click=${this._startMowing}>
            <ha-icon icon="mdi:play"></ha-icon> Resume
          </button>
          <button class="ctrl-btn ctrl-btn--dock" @click=${this._dock}>
            <ha-icon icon="mdi:home"></ha-icon> Dock
          </button>
        `:F`
          <button class="ctrl-btn ctrl-btn--pause" @click=${this._pause}>
            <ha-icon icon="mdi:pause"></ha-icon> Pause
          </button>
          <button class="ctrl-btn ctrl-btn--dock" @click=${this._dock}>
            <ha-icon icon="mdi:home"></ha-icon> Dock
          </button>
        `}
      </div>
    `}_renderSchedule(){const t=this._schedule;return F`
      <div class="schedule-section">
        <div class="schedule-header">
          <span class="schedule-title">Schedule</span>
          <button class="add-btn" @click=${()=>{this._addingSchedule=!this._addingSchedule}}>
            ${this._addingSchedule?"Cancel":"+ Add"}
          </button>
        </div>

        ${this._addingSchedule?this._renderAddForm():W}

        ${0===t.length?F`
          <div class="empty-schedule">No schedule configured</div>
        `:F`
          <div class="schedule-list">
            ${t.map(t=>{const e=`${t.day_number}-${t.start}`,s=this._pendingRemove===e;return F`
              <div class="schedule-entry ${s?"removing":""}">
                <span class="entry-day">${t.day||lt[t.day_number]||"?"}</span>
                <span class="entry-time">${t.start} - ${t.end}</span>
                ${t.edge?F`<span class="entry-edge-label">Edge</span>`:W}
                <button class="remove-btn" @click=${()=>this._removeScheduleEntry(t.day_number,t.start)} ?disabled=${s}>
                  ${s?F`<ha-icon icon="mdi:loading" class="spin"></ha-icon>`:F`<ha-icon icon="mdi:delete"></ha-icon>`}
                </button>
              </div>
            `})}
          </div>
        `}
      </div>
    `}_renderAddForm(){return F`
      <div class="add-form">
        <div class="form-row">
          <label>Day</label>
          <select @change=${t=>{this._newDay=parseInt(t.target.value)}}>
            ${[1,2,3,4,5,6,7].map(t=>F`<option value="${t}" ?selected=${this._newDay===t}>${lt[t]}</option>`)}
          </select>
        </div>
        <div class="form-row">
          <label>Start</label>
          <input type="time" .value=${this._newStart} @change=${t=>{this._newStart=t.target.value}} />
        </div>
        <div class="form-row">
          <label>End</label>
          <input type="time" .value=${this._newEnd} @change=${t=>{this._newEnd=t.target.value}} />
        </div>
        <div class="form-row">
          <label>Edge mowing</label>
          <input type="checkbox" ?checked=${this._newEdge} @change=${t=>{this._newEdge=t.target.checked}} />
        </div>
        <button class="save-btn" @click=${this._addScheduleEntry} ?disabled=${this._saving}>
          ${this._saving?"Saving...":"Save"}
        </button>
      </div>
    `}};pt.styles=((t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new r(s,t,i)})`
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
  `,t([ht()],pt.prototype,"_config",void 0),t([ht()],pt.prototype,"_addingSchedule",void 0),t([ht()],pt.prototype,"_newDay",void 0),t([ht()],pt.prototype,"_newStart",void 0),t([ht()],pt.prototype,"_newEnd",void 0),t([ht()],pt.prototype,"_newEdge",void 0),t([ht()],pt.prototype,"_pendingRemove",void 0),t([ht()],pt.prototype,"_saving",void 0),pt=t([(t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})("ha-cecotec-grasshopper-card")],pt),window.customCards=window.customCards||[],window.customCards.push({type:"ha-cecotec-grasshopper-card",name:"Cecotec GrassHopper",description:"Manage your Cecotec GrassHopper robot mower: status, controls, and schedule.",preview:!0});export{pt as HaCecotecGrasshopperCard};
