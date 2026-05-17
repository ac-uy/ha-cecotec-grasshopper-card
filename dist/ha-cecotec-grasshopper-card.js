function t(t,e,s,i){var r,n=arguments.length,o=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,s,o):r(e,s))||o);return n>3&&o&&Object.defineProperty(e,s,o),o}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;let n=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&r.set(e,t))}return t}toString(){return this.cssText}};const o=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:a,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:l,getPrototypeOf:p}=Object,u=globalThis,_=u.trustedTypes,y=_?_.emptyScript:"",g=u.reactiveElementPolyfillSupport,f=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?y:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},m=(t,e)=>!a(t,e),v={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:m};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const n=i?.call(this);r?.call(this,e),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const t=this.properties,e=[...d(t),...l(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),r=e.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:$).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=i;const n=r.fromAttribute(e,t.type);this[i]=n??this._$Ej?.get(i)??n,this._$Em=null}}requestUpdate(t,e,s,i=!1,r){if(void 0!==t){const n=this.constructor;if(!1===i&&(r=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??m)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[f("elementProperties")]=new Map,b[f("finalized")]=new Map,g?.({ReactiveElement:b}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,A=t=>t,x=w.trustedTypes,E=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+C,k=`<${P}>`,U=document,O=()=>U.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,R="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,z=/>/g,D=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,I=/"/g,L=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),F=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),W=new WeakMap,V=U.createTreeWalker(U,129);function G(t,e){if(!H(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const J=(t,e)=>{const s=t.length-1,i=[];let r,n=2===e?"<svg>":3===e?"<math>":"",o=T;for(let e=0;e<s;e++){const s=t[e];let a,c,h=-1,d=0;for(;d<s.length&&(o.lastIndex=d,c=o.exec(s),null!==c);)d=o.lastIndex,o===T?"!--"===c[1]?o=N:void 0!==c[1]?o=z:void 0!==c[2]?(L.test(c[2])&&(r=RegExp("</"+c[2],"g")),o=D):void 0!==c[3]&&(o=D):o===D?">"===c[0]?(o=r??T,h=-1):void 0===c[1]?h=-2:(h=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?D:'"'===c[3]?I:j):o===I||o===j?o=D:o===N||o===z?o=T:(o=D,r=void 0);const l=o===D&&t[e+1].startsWith("/>")?" ":"";n+=o===T?s+k:h>=0?(i.push(a),s.slice(0,h)+S+s.slice(h)+C+l):s+C+(-2===h?e:l)}return[G(t,n+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class K{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[c,h]=J(t,e);if(this.el=K.createElement(c,s),V.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=V.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(S)){const e=h[n++],s=i.getAttribute(t).split(C),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:o[2],strings:s,ctor:"."===o[1]?tt:"?"===o[1]?et:"@"===o[1]?st:Y}),i.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(L.test(i.tagName)){const t=i.textContent.split(C),e=t.length-1;if(e>0){i.textContent=x?x.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],O()),V.nextNode(),a.push({type:2,index:++r});i.append(t[e],O())}}}else if(8===i.nodeType)if(i.data===P)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(C,t+1));)a.push({type:7,index:r}),t+=C.length-1}r++}}static createElement(t,e){const s=U.createElement("template");return s.innerHTML=t,s}}function Z(t,e,s=t,i){if(e===F)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const n=M(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=Z(t,r._$AS(t,e.values),r,i)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??U).importNode(e,!0);V.currentNode=i;let r=V.nextNode(),n=0,o=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new X(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new it(r,this,t)),this._$AV.push(e),a=s[++o]}n!==a?.index&&(r=V.nextNode(),n++)}return V.currentNode=U,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),M(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>H(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=K.createElement(G(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Q(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new K(t)),e}k(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new X(this.O(O()),this.O(O()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=q}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(void 0===r)t=Z(this,t,e,0),n=!M(t)||t!==this._$AH&&t!==F,n&&(this._$AH=t);else{const i=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=Z(this,i[s+o],e,o),a===F&&(a=this._$AH[o]),n||=!M(a)||a!==this._$AH[o],a===q?t=q:t!==q&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!i&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class et extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class st extends Y{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??q)===F)return;const s=this._$AH,i=t===q&&s!==q||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==q&&(s===q||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const rt=w.litHtmlPolyfillSupport;rt?.(K,X),(w.litHtmlVersions??=[]).push("3.3.3");const nt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ot extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new X(e.insertBefore(O(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}ot._$litElement$=!0,ot.finalized=!0,nt.litElementHydrateSupport?.({LitElement:ot});const at=nt.litElementPolyfillSupport;at?.({LitElement:ot}),(nt.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:m},ht=(t=ct,e,s)=>{const{kind:i,metadata:r}=s;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),n.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t,!0,s)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];e.call(this,s),this.requestUpdate(i,r,t,!0,s)}}throw Error("Unsupported decorator location: "+i)};
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
function dt(t){return function(t){return(e,s)=>"object"==typeof s?ht(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}({...t,state:!0,attribute:!1})}const lt=["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];let pt=class extends ot{constructor(){super(...arguments),this._addingSchedule=!1,this._newDay=1,this._newStart="09:00",this._newEnd="12:00",this._newEdge=!0}static getConfigElement(){return document.createElement("ha-cecotec-grasshopper-card-editor")}static getStubConfig(){return{type:"custom:ha-cecotec-grasshopper-card",entity:"lawn_mower.mymower"}}setConfig(t){if(!t.entity)throw new Error("Please define an entity");this._config=t}set hass(t){this._hass=t,this.requestUpdate()}getCardSize(){return 5}get _entity(){return this._hass?.states[this._config.entity]}get _batteryEntity(){const t=this._config.entity.replace("lawn_mower.","sensor.")+"_battery";return this._hass?.states[t]||this._hass?.states[t.replace("_battery","")+"_battery"]}get _scheduleEntity(){const t=this._config.entity.replace("lawn_mower.","sensor.");return this._hass?.states[t+"_next_schedule"]}get _rainEntity(){const t=this._config.entity.replace("lawn_mower.","binary_sensor.");return this._hass?.states[t+"_rain_detected"]}get _activity(){const t=this._entity?.state||"unknown";return{mowing:"Mowing",docked:"Docked",paused:"Paused",returning:"Returning",error:"Error"}[t]||t}get _battery(){const t=this._batteryEntity;if(!t)return null;const e=parseInt(t.state);return isNaN(e)?null:e}get _schedule(){return this._scheduleEntity?.attributes?.schedule||[]}get _isRaining(){return"on"===this._rainEntity?.state}async _startMowing(){await(this._hass?.callService("lawn_mower","start_mowing",{entity_id:this._config.entity}))}async _dock(){await(this._hass?.callService("lawn_mower","dock",{entity_id:this._config.entity}))}async _pause(){await(this._hass?.callService("lawn_mower","pause",{entity_id:this._config.entity}))}async _startBorder(){await(this._hass?.callService("cecotec_grasshopper","start_border_mowing",{entity_id:this._config.entity}))}async _removeScheduleEntry(t){await(this._hass?.callService("cecotec_grasshopper","remove_schedule_entry",{entity_id:this._config.entity,day:t}))}async _addScheduleEntry(){await(this._hass?.callService("cecotec_grasshopper","add_schedule_entry",{entity_id:this._config.entity,day:this._newDay,start:this._newStart,end:this._newEnd,edge:this._newEdge})),this._addingSchedule=!1}render(){if(!this._config||!this._hass)return q;return this._entity?B`
      <ha-card .header=${this._config.title||"GrassHopper"}>
        <div class="card-content">
          ${this._renderStatus()}
          ${this._renderControls()}
          ${this._renderSchedule()}
        </div>
      </ha-card>
    `:B`<ha-card><div class="error">Entity ${this._config.entity} not found</div></ha-card>`}_renderStatus(){const t=this._battery,e=this._activity,s=this._isRaining;return B`
      <div class="status-section">
        <div class="status-row">
          <ha-icon icon="mdi:robot-mower"></ha-icon>
          <span class="status-text">${e}</span>
          ${null!==t?B`
            <span class="battery">
              <ha-icon icon="mdi:battery${t>75?"":t>25?"-50":"-10"}"></ha-icon>
              ${t}%
            </span>
          `:q}
          ${s?B`<span class="rain"><ha-icon icon="mdi:weather-rainy"></ha-icon> Rain</span>`:q}
        </div>
      </div>
    `}_renderControls(){const t=this._entity?.state||"";return B`
      <div class="controls-section">
        ${"docked"===t||"idle"===t?B`
          <button class="ctrl-btn ctrl-btn--start" @click=${this._startMowing}>
            <ha-icon icon="mdi:play"></ha-icon> Start
          </button>
          <button class="ctrl-btn ctrl-btn--border" @click=${this._startBorder}>
            <ha-icon icon="mdi:border-all-variant"></ha-icon> Edge
          </button>
        `:B`
          <button class="ctrl-btn ctrl-btn--pause" @click=${this._pause}>
            <ha-icon icon="mdi:pause"></ha-icon> Pause
          </button>
          <button class="ctrl-btn ctrl-btn--dock" @click=${this._dock}>
            <ha-icon icon="mdi:home"></ha-icon> Dock
          </button>
        `}
      </div>
    `}_renderSchedule(){const t=this._schedule;return B`
      <div class="schedule-section">
        <div class="schedule-header">
          <span class="schedule-title">Schedule</span>
          <button class="add-btn" @click=${()=>{this._addingSchedule=!this._addingSchedule}}>
            ${this._addingSchedule?"Cancel":"+ Add"}
          </button>
        </div>

        ${this._addingSchedule?this._renderAddForm():q}

        ${0===t.length?B`
          <div class="empty-schedule">No schedule configured</div>
        `:B`
          <div class="schedule-list">
            ${t.map(t=>B`
              <div class="schedule-entry">
                <span class="entry-day">${t.day||lt[t.day_number]||"?"}</span>
                <span class="entry-time">${t.start} - ${t.end}</span>
                ${t.edge?B`<ha-icon icon="mdi:border-all-variant" class="entry-edge"></ha-icon>`:q}
                <button class="remove-btn" @click=${()=>this._removeScheduleEntry(t.day_number)}>
                  <ha-icon icon="mdi:delete"></ha-icon>
                </button>
              </div>
            `)}
          </div>
        `}
      </div>
    `}_renderAddForm(){return B`
      <div class="add-form">
        <div class="form-row">
          <label>Day</label>
          <select @change=${t=>{this._newDay=parseInt(t.target.value)}}>
            ${[1,2,3,4,5,6,7].map(t=>B`<option value="${t}" ?selected=${this._newDay===t}>${lt[t]}</option>`)}
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
        <button class="save-btn" @click=${this._addScheduleEntry}>Save</button>
      </div>
    `}};pt.styles=((t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new n(s,t,i)})`
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
    .ctrl-btn--border { background: var(--secondary-text-color, #757575); color: white; }
    .ctrl-btn--pause { background: var(--warning-color, #FF9800); color: white; }
    .ctrl-btn--dock { background: var(--secondary-text-color, #757575); color: white; }

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
    .entry-edge { --mdc-icon-size: 16px; color: var(--secondary-text-color); }
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
  `,t([dt()],pt.prototype,"_config",void 0),t([dt()],pt.prototype,"_addingSchedule",void 0),t([dt()],pt.prototype,"_newDay",void 0),t([dt()],pt.prototype,"_newStart",void 0),t([dt()],pt.prototype,"_newEnd",void 0),t([dt()],pt.prototype,"_newEdge",void 0),pt=t([(t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})("ha-cecotec-grasshopper-card")],pt),window.customCards=window.customCards||[],window.customCards.push({type:"ha-cecotec-grasshopper-card",name:"Cecotec GrassHopper",description:"Manage your Cecotec GrassHopper robot mower: status, controls, and schedule.",preview:!0});export{pt as HaCecotecGrasshopperCard};
