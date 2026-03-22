var Ua={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=function(r){const t=[];let e=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},wd=function(r){const t=[];let e=0,n=0;for(;e<r.length;){const s=r[e++];if(s<128)t[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[e++];t[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[e++],a=r[e++],u=r[e++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|u&63)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(l&1023))}else{const i=r[e++],a=r[e++];t[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},hc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],a=s+1<r.length,u=a?r[s+1]:0,l=s+2<r.length,d=l?r[s+2]:0,f=i>>2,p=(i&3)<<4|u>>4;let I=(u&15)<<2|d>>6,b=d&63;l||(b=64,a||(I=64)),n.push(e[f],e[p],e[I],e[b])}return n.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(lc(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):wd(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=e[r.charAt(s++)],u=s<r.length?e[r.charAt(s)]:0;++s;const d=s<r.length?e[r.charAt(s)]:64;++s;const p=s<r.length?e[r.charAt(s)]:64;if(++s,i==null||u==null||d==null||p==null)throw new Ad;const I=i<<2|u>>4;if(n.push(I),d!==64){const b=u<<4&240|d>>2;if(n.push(b),p!==64){const V=d<<6&192|p;n.push(V)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Ad extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rd=function(r){const t=lc(r);return hc.encodeByteArray(t,!0)},os=function(r){return Rd(r).replace(/\./g,"")},bd=function(r){try{return hc.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd=()=>Pd().__FIREBASE_DEFAULTS__,Vd=()=>{if(typeof process>"u"||typeof Ua>"u")return;const r=Ua.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Dd=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&bd(r[1]);return t&&JSON.parse(t)},Qi=()=>{try{return Sd()||Vd()||Dd()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Cd=r=>{var t,e;return(e=(t=Qi())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[r]},dc=r=>{const t=Cd(r);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},fc=()=>{var r;return(r=Qi())===null||r===void 0?void 0:r.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},r);return[os(JSON.stringify(e)),os(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nd(){var r;const t=(r=Qi())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pc(){return!Nd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function gc(){try{return typeof indexedDB=="object"}catch{return!1}}function kd(){return new Promise((r,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od="FirebaseError";class je extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=Od,Object.setPrototypeOf(this,je.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_c.prototype.create)}}class _c{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?Md(i,n):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new je(s,u,n)}}function Md(r,t){return r.replace(Fd,(e,n)=>{const s=t[n];return s!=null?String(s):`<${n}?>`})}const Fd=/\{\$([^}]+)}/g;function us(r,t){if(r===t)return!0;const e=Object.keys(r),n=Object.keys(t);for(const s of e){if(!n.includes(s))return!1;const i=r[s],a=t[s];if(qa(i)&&qa(a)){if(!us(i,a))return!1}else if(i!==a)return!1}for(const s of n)if(!e.includes(s))return!1;return!0}function qa(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(r){return r&&r._delegate?r._delegate:r}class an{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new xd;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ud(t))try{this.getOrInitializeService({instanceIdentifier:Re})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(t=Re){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Re){return this.instances.has(t)}getOptions(t=Re){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(i);n===u&&a.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),i=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;i.add(t),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&t(a,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Bd(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=Re){return this.component?this.component.multipleInstances?t:Re:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bd(r){return r===Re?void 0:r}function Ud(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Ld(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(W||(W={}));const jd={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},zd=W.INFO,$d={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},Gd=(r,t,...e)=>{if(t<r.logLevel)return;const n=new Date().toISOString(),s=$d[t];if(s)console[s](`[${n}]  ${r.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class yc{constructor(t){this.name=t,this._logLevel=zd,this._logHandler=Gd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in W))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?jd[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...t),this._logHandler(this,W.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...t),this._logHandler(this,W.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,W.INFO,...t),this._logHandler(this,W.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,W.WARN,...t),this._logHandler(this,W.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...t),this._logHandler(this,W.ERROR,...t)}}const Kd=(r,t)=>t.some(e=>r instanceof e);let ja,za;function Qd(){return ja||(ja=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hd(){return za||(za=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ic=new WeakMap,Ei=new WeakMap,Ec=new WeakMap,li=new WeakMap,Hi=new WeakMap;function Wd(r){const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",a)},i=()=>{e(le(r.result)),s()},a=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Ic.set(e,r)}).catch(()=>{}),Hi.set(t,r),t}function Xd(r){if(Ei.has(r))return;const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",a),r.removeEventListener("abort",a)},i=()=>{e(),s()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",a),r.addEventListener("abort",a)});Ei.set(r,t)}let Ti={get(r,t,e){if(r instanceof IDBTransaction){if(t==="done")return Ei.get(r);if(t==="objectStoreNames")return r.objectStoreNames||Ec.get(r);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return le(r[t])},set(r,t,e){return r[t]=e,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function Jd(r){Ti=r(Ti)}function Yd(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=r.call(hi(this),t,...e);return Ec.set(n,t.sort?t.sort():[t]),le(n)}:Hd().includes(r)?function(...t){return r.apply(hi(this),t),le(Ic.get(this))}:function(...t){return le(r.apply(hi(this),t))}}function Zd(r){return typeof r=="function"?Yd(r):(r instanceof IDBTransaction&&Xd(r),Kd(r,Qd())?new Proxy(r,Ti):r)}function le(r){if(r instanceof IDBRequest)return Wd(r);if(li.has(r))return li.get(r);const t=Zd(r);return t!==r&&(li.set(r,t),Hi.set(t,r)),t}const hi=r=>Hi.get(r);function tf(r,t,{blocked:e,upgrade:n,blocking:s,terminated:i}={}){const a=indexedDB.open(r,t),u=le(a);return n&&a.addEventListener("upgradeneeded",l=>{n(le(a.result),l.oldVersion,l.newVersion,le(a.transaction),l)}),e&&a.addEventListener("blocked",l=>e(l.oldVersion,l.newVersion,l)),u.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const ef=["get","getKey","getAll","getAllKeys","count"],nf=["put","add","delete","clear"],di=new Map;function $a(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(di.get(t))return di.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,s=nf.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(s||ef.includes(e)))return;const i=async function(a,...u){const l=this.transaction(a,s?"readwrite":"readonly");let d=l.store;return n&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),s&&l.done]))[0]};return di.set(t,i),i}Jd(r=>({...r,get:(t,e,n)=>$a(t,e)||r.get(t,e,n),has:(t,e)=>!!$a(t,e)||r.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(sf(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function sf(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const vi="@firebase/app",Ga="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new yc("@firebase/app"),of="@firebase/app-compat",af="@firebase/analytics-compat",uf="@firebase/analytics",cf="@firebase/app-check-compat",lf="@firebase/app-check",hf="@firebase/auth",df="@firebase/auth-compat",ff="@firebase/database",mf="@firebase/data-connect",pf="@firebase/database-compat",gf="@firebase/functions",_f="@firebase/functions-compat",yf="@firebase/installations",If="@firebase/installations-compat",Ef="@firebase/messaging",Tf="@firebase/messaging-compat",vf="@firebase/performance",wf="@firebase/performance-compat",Af="@firebase/remote-config",Rf="@firebase/remote-config-compat",bf="@firebase/storage",Pf="@firebase/storage-compat",Sf="@firebase/firestore",Vf="@firebase/vertexai-preview",Df="@firebase/firestore-compat",Cf="firebase",xf="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="[DEFAULT]",Nf={[vi]:"fire-core",[of]:"fire-core-compat",[uf]:"fire-analytics",[af]:"fire-analytics-compat",[lf]:"fire-app-check",[cf]:"fire-app-check-compat",[hf]:"fire-auth",[df]:"fire-auth-compat",[ff]:"fire-rtdb",[mf]:"fire-data-connect",[pf]:"fire-rtdb-compat",[gf]:"fire-fn",[_f]:"fire-fn-compat",[yf]:"fire-iid",[If]:"fire-iid-compat",[Ef]:"fire-fcm",[Tf]:"fire-fcm-compat",[vf]:"fire-perf",[wf]:"fire-perf-compat",[Af]:"fire-rc",[Rf]:"fire-rc-compat",[bf]:"fire-gcs",[Pf]:"fire-gcs-compat",[Sf]:"fire-fst",[Df]:"fire-fst-compat",[Vf]:"fire-vertex","fire-js":"fire-js",[Cf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=new Map,kf=new Map,Ai=new Map;function Ka(r,t){try{r.container.addComponent(t)}catch(e){Jt.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,e)}}function sr(r){const t=r.name;if(Ai.has(t))return Jt.debug(`There were multiple attempts to register component ${t}.`),!1;Ai.set(t,r);for(const e of rr.values())Ka(e,r);for(const e of kf.values())Ka(e,r);return!0}function Wi(r,t){const e=r.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),r.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},he=new _c("app","Firebase",Of);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new an("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw he.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=xf;function Ff(r,t={}){let e=r;typeof t!="object"&&(t={name:t});const n=Object.assign({name:wi,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw he.create("bad-app-name",{appName:String(s)});if(e||(e=fc()),!e)throw he.create("no-options");const i=rr.get(s);if(i){if(us(e,i.options)&&us(n,i.config))return i;throw he.create("duplicate-app",{appName:s})}const a=new qd(s);for(const l of Ai.values())a.addComponent(l);const u=new Mf(e,n,a);return rr.set(s,u),u}function vc(r=wi){const t=rr.get(r);if(!t&&r===wi&&fc())return Ff();if(!t)throw he.create("no-app",{appName:r});return t}function Cy(){return Array.from(rr.values())}function de(r,t,e){var n;let s=(n=Nf[r])!==null&&n!==void 0?n:r;e&&(s+=`-${e}`);const i=s.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const u=[`Unable to register library "${s}" with version "${t}":`];i&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Jt.warn(u.join(" "));return}sr(new an(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf="firebase-heartbeat-database",Bf=1,ir="firebase-heartbeat-store";let fi=null;function wc(){return fi||(fi=tf(Lf,Bf,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(ir)}catch(e){console.warn(e)}}}}).catch(r=>{throw he.create("idb-open",{originalErrorMessage:r.message})})),fi}async function Uf(r){try{const e=(await wc()).transaction(ir),n=await e.objectStore(ir).get(Ac(r));return await e.done,n}catch(t){if(t instanceof je)Jt.warn(t.message);else{const e=he.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Jt.warn(e.message)}}}async function Qa(r,t){try{const n=(await wc()).transaction(ir,"readwrite");await n.objectStore(ir).put(t,Ac(r)),await n.done}catch(e){if(e instanceof je)Jt.warn(e.message);else{const n=he.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Jt.warn(n.message)}}}function Ac(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf=1024,jf=720*60*60*1e3;class zf{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Gf(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ha();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=jf}),this._storage.overwrite(this._heartbeatsCache))}catch(n){Jt.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ha(),{heartbeatsToSend:n,unsentEntries:s}=$f(this._heartbeatsCache.heartbeats),i=os(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return Jt.warn(e),""}}}function Ha(){return new Date().toISOString().substring(0,10)}function $f(r,t=qf){const e=[];let n=r.slice();for(const s of r){const i=e.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Wa(e)>t){i.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Wa(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class Gf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gc()?kd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Uf(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qa(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Wa(r){return os(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(r){sr(new an("platform-logger",t=>new rf(t),"PRIVATE")),sr(new an("heartbeat",t=>new zf(t),"PRIVATE")),de(vi,Ga,r),de(vi,Ga,"esm2017"),de("fire-js","")}Kf("");var Qf="firebase",Hf="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */de(Qf,Hf,"app");var Xa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ce,Rc;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,g){function y(){}y.prototype=g.prototype,E.D=g.prototype,E.prototype=new y,E.prototype.constructor=E,E.C=function(T,v,R){for(var _=Array(arguments.length-2),Qt=2;Qt<arguments.length;Qt++)_[Qt-2]=arguments[Qt];return g.prototype[v].apply(T,_)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,g,y){y||(y=0);var T=Array(16);if(typeof g=="string")for(var v=0;16>v;++v)T[v]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(v=0;16>v;++v)T[v]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=E.g[0],y=E.g[1],v=E.g[2];var R=E.g[3],_=g+(R^y&(v^R))+T[0]+3614090360&4294967295;g=y+(_<<7&4294967295|_>>>25),_=R+(v^g&(y^v))+T[1]+3905402710&4294967295,R=g+(_<<12&4294967295|_>>>20),_=v+(y^R&(g^y))+T[2]+606105819&4294967295,v=R+(_<<17&4294967295|_>>>15),_=y+(g^v&(R^g))+T[3]+3250441966&4294967295,y=v+(_<<22&4294967295|_>>>10),_=g+(R^y&(v^R))+T[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=R+(v^g&(y^v))+T[5]+1200080426&4294967295,R=g+(_<<12&4294967295|_>>>20),_=v+(y^R&(g^y))+T[6]+2821735955&4294967295,v=R+(_<<17&4294967295|_>>>15),_=y+(g^v&(R^g))+T[7]+4249261313&4294967295,y=v+(_<<22&4294967295|_>>>10),_=g+(R^y&(v^R))+T[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=R+(v^g&(y^v))+T[9]+2336552879&4294967295,R=g+(_<<12&4294967295|_>>>20),_=v+(y^R&(g^y))+T[10]+4294925233&4294967295,v=R+(_<<17&4294967295|_>>>15),_=y+(g^v&(R^g))+T[11]+2304563134&4294967295,y=v+(_<<22&4294967295|_>>>10),_=g+(R^y&(v^R))+T[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=R+(v^g&(y^v))+T[13]+4254626195&4294967295,R=g+(_<<12&4294967295|_>>>20),_=v+(y^R&(g^y))+T[14]+2792965006&4294967295,v=R+(_<<17&4294967295|_>>>15),_=y+(g^v&(R^g))+T[15]+1236535329&4294967295,y=v+(_<<22&4294967295|_>>>10),_=g+(v^R&(y^v))+T[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=R+(y^v&(g^y))+T[6]+3225465664&4294967295,R=g+(_<<9&4294967295|_>>>23),_=v+(g^y&(R^g))+T[11]+643717713&4294967295,v=R+(_<<14&4294967295|_>>>18),_=y+(R^g&(v^R))+T[0]+3921069994&4294967295,y=v+(_<<20&4294967295|_>>>12),_=g+(v^R&(y^v))+T[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=R+(y^v&(g^y))+T[10]+38016083&4294967295,R=g+(_<<9&4294967295|_>>>23),_=v+(g^y&(R^g))+T[15]+3634488961&4294967295,v=R+(_<<14&4294967295|_>>>18),_=y+(R^g&(v^R))+T[4]+3889429448&4294967295,y=v+(_<<20&4294967295|_>>>12),_=g+(v^R&(y^v))+T[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=R+(y^v&(g^y))+T[14]+3275163606&4294967295,R=g+(_<<9&4294967295|_>>>23),_=v+(g^y&(R^g))+T[3]+4107603335&4294967295,v=R+(_<<14&4294967295|_>>>18),_=y+(R^g&(v^R))+T[8]+1163531501&4294967295,y=v+(_<<20&4294967295|_>>>12),_=g+(v^R&(y^v))+T[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=R+(y^v&(g^y))+T[2]+4243563512&4294967295,R=g+(_<<9&4294967295|_>>>23),_=v+(g^y&(R^g))+T[7]+1735328473&4294967295,v=R+(_<<14&4294967295|_>>>18),_=y+(R^g&(v^R))+T[12]+2368359562&4294967295,y=v+(_<<20&4294967295|_>>>12),_=g+(y^v^R)+T[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=R+(g^y^v)+T[8]+2272392833&4294967295,R=g+(_<<11&4294967295|_>>>21),_=v+(R^g^y)+T[11]+1839030562&4294967295,v=R+(_<<16&4294967295|_>>>16),_=y+(v^R^g)+T[14]+4259657740&4294967295,y=v+(_<<23&4294967295|_>>>9),_=g+(y^v^R)+T[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=R+(g^y^v)+T[4]+1272893353&4294967295,R=g+(_<<11&4294967295|_>>>21),_=v+(R^g^y)+T[7]+4139469664&4294967295,v=R+(_<<16&4294967295|_>>>16),_=y+(v^R^g)+T[10]+3200236656&4294967295,y=v+(_<<23&4294967295|_>>>9),_=g+(y^v^R)+T[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=R+(g^y^v)+T[0]+3936430074&4294967295,R=g+(_<<11&4294967295|_>>>21),_=v+(R^g^y)+T[3]+3572445317&4294967295,v=R+(_<<16&4294967295|_>>>16),_=y+(v^R^g)+T[6]+76029189&4294967295,y=v+(_<<23&4294967295|_>>>9),_=g+(y^v^R)+T[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=R+(g^y^v)+T[12]+3873151461&4294967295,R=g+(_<<11&4294967295|_>>>21),_=v+(R^g^y)+T[15]+530742520&4294967295,v=R+(_<<16&4294967295|_>>>16),_=y+(v^R^g)+T[2]+3299628645&4294967295,y=v+(_<<23&4294967295|_>>>9),_=g+(v^(y|~R))+T[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=R+(y^(g|~v))+T[7]+1126891415&4294967295,R=g+(_<<10&4294967295|_>>>22),_=v+(g^(R|~y))+T[14]+2878612391&4294967295,v=R+(_<<15&4294967295|_>>>17),_=y+(R^(v|~g))+T[5]+4237533241&4294967295,y=v+(_<<21&4294967295|_>>>11),_=g+(v^(y|~R))+T[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=R+(y^(g|~v))+T[3]+2399980690&4294967295,R=g+(_<<10&4294967295|_>>>22),_=v+(g^(R|~y))+T[10]+4293915773&4294967295,v=R+(_<<15&4294967295|_>>>17),_=y+(R^(v|~g))+T[1]+2240044497&4294967295,y=v+(_<<21&4294967295|_>>>11),_=g+(v^(y|~R))+T[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=R+(y^(g|~v))+T[15]+4264355552&4294967295,R=g+(_<<10&4294967295|_>>>22),_=v+(g^(R|~y))+T[6]+2734768916&4294967295,v=R+(_<<15&4294967295|_>>>17),_=y+(R^(v|~g))+T[13]+1309151649&4294967295,y=v+(_<<21&4294967295|_>>>11),_=g+(v^(y|~R))+T[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=R+(y^(g|~v))+T[11]+3174756917&4294967295,R=g+(_<<10&4294967295|_>>>22),_=v+(g^(R|~y))+T[2]+718787259&4294967295,v=R+(_<<15&4294967295|_>>>17),_=y+(R^(v|~g))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(v+(_<<21&4294967295|_>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+R&4294967295}n.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var y=g-this.blockSize,T=this.B,v=this.h,R=0;R<g;){if(v==0)for(;R<=y;)s(this,E,R),R+=this.blockSize;if(typeof E=="string"){for(;R<g;)if(T[v++]=E.charCodeAt(R++),v==this.blockSize){s(this,T),v=0;break}}else for(;R<g;)if(T[v++]=E[R++],v==this.blockSize){s(this,T),v=0;break}}this.h=v,this.o+=g},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var y=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=y&255,y/=256;for(this.u(E),E=Array(16),g=y=0;4>g;++g)for(var T=0;32>T;T+=8)E[y++]=this.g[g]>>>T&255;return E};function i(E,g){var y=u;return Object.prototype.hasOwnProperty.call(y,E)?y[E]:y[E]=g(E)}function a(E,g){this.h=g;for(var y=[],T=!0,v=E.length-1;0<=v;v--){var R=E[v]|0;T&&R==g||(y[v]=R,T=!1)}this.g=y}var u={};function l(E){return-128<=E&&128>E?i(E,function(g){return new a([g|0],0>g?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return D(d(-E));for(var g=[],y=1,T=0;E>=y;T++)g[T]=E/y|0,y*=4294967296;return new a(g,0)}function f(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return D(f(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(g,8)),T=p,v=0;v<E.length;v+=8){var R=Math.min(8,E.length-v),_=parseInt(E.substring(v,v+R),g);8>R?(R=d(Math.pow(g,R)),T=T.j(R).add(d(_))):(T=T.j(y),T=T.add(d(_)))}return T}var p=l(0),I=l(1),b=l(16777216);r=a.prototype,r.m=function(){if(x(this))return-D(this).m();for(var E=0,g=1,y=0;y<this.g.length;y++){var T=this.i(y);E+=(0<=T?T:4294967296+T)*g,g*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(V(this))return"0";if(x(this))return"-"+D(this).toString(E);for(var g=d(Math.pow(E,6)),y=this,T="";;){var v=q(y,g).g;y=z(y,v.j(g));var R=((0<y.g.length?y.g[0]:y.h)>>>0).toString(E);if(y=v,V(y))return R+T;for(;6>R.length;)R="0"+R;T=R+T}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function V(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function x(E){return E.h==-1}r.l=function(E){return E=z(this,E),x(E)?-1:V(E)?0:1};function D(E){for(var g=E.g.length,y=[],T=0;T<g;T++)y[T]=~E.g[T];return new a(y,~E.h).add(I)}r.abs=function(){return x(this)?D(this):this},r.add=function(E){for(var g=Math.max(this.g.length,E.g.length),y=[],T=0,v=0;v<=g;v++){var R=T+(this.i(v)&65535)+(E.i(v)&65535),_=(R>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);T=_>>>16,R&=65535,_&=65535,y[v]=_<<16|R}return new a(y,y[y.length-1]&-2147483648?-1:0)};function z(E,g){return E.add(D(g))}r.j=function(E){if(V(this)||V(E))return p;if(x(this))return x(E)?D(this).j(D(E)):D(D(this).j(E));if(x(E))return D(this.j(D(E)));if(0>this.l(b)&&0>E.l(b))return d(this.m()*E.m());for(var g=this.g.length+E.g.length,y=[],T=0;T<2*g;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(var v=0;v<E.g.length;v++){var R=this.i(T)>>>16,_=this.i(T)&65535,Qt=E.i(v)>>>16,wn=E.i(v)&65535;y[2*T+2*v]+=_*wn,U(y,2*T+2*v),y[2*T+2*v+1]+=R*wn,U(y,2*T+2*v+1),y[2*T+2*v+1]+=_*Qt,U(y,2*T+2*v+1),y[2*T+2*v+2]+=R*Qt,U(y,2*T+2*v+2)}for(T=0;T<g;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=g;T<2*g;T++)y[T]=0;return new a(y,0)};function U(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function F(E,g){this.g=E,this.h=g}function q(E,g){if(V(g))throw Error("division by zero");if(V(E))return new F(p,p);if(x(E))return g=q(D(E),g),new F(D(g.g),D(g.h));if(x(g))return g=q(E,D(g)),new F(D(g.g),g.h);if(30<E.g.length){if(x(E)||x(g))throw Error("slowDivide_ only works with positive integers.");for(var y=I,T=g;0>=T.l(E);)y=J(y),T=J(T);var v=K(y,1),R=K(T,1);for(T=K(T,2),y=K(y,2);!V(T);){var _=R.add(T);0>=_.l(E)&&(v=v.add(y),R=_),T=K(T,1),y=K(y,1)}return g=z(E,v.j(g)),new F(v,g)}for(v=p;0<=E.l(g);){for(y=Math.max(1,Math.floor(E.m()/g.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),R=d(y),_=R.j(g);x(_)||0<_.l(E);)y-=T,R=d(y),_=R.j(g);V(R)&&(R=I),v=v.add(R),E=z(E,_)}return new F(v,E)}r.A=function(E){return q(this,E).h},r.and=function(E){for(var g=Math.max(this.g.length,E.g.length),y=[],T=0;T<g;T++)y[T]=this.i(T)&E.i(T);return new a(y,this.h&E.h)},r.or=function(E){for(var g=Math.max(this.g.length,E.g.length),y=[],T=0;T<g;T++)y[T]=this.i(T)|E.i(T);return new a(y,this.h|E.h)},r.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),y=[],T=0;T<g;T++)y[T]=this.i(T)^E.i(T);return new a(y,this.h^E.h)};function J(E){for(var g=E.g.length+1,y=[],T=0;T<g;T++)y[T]=E.i(T)<<1|E.i(T-1)>>>31;return new a(y,E.h)}function K(E,g){var y=g>>5;g%=32;for(var T=E.g.length-y,v=[],R=0;R<T;R++)v[R]=0<g?E.i(R+y)>>>g|E.i(R+y+1)<<32-g:E.i(R+y);return new a(v,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Rc=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,Ce=a}).apply(typeof Xa<"u"?Xa:typeof self<"u"?self:typeof window<"u"?window:{});var zr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bc,Kn,Pc,Jr,Ri,Sc,Vc,Dc;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof zr=="object"&&zr];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=e(this);function s(o,c){if(c)t:{var h=n;o=o.split(".");for(var m=0;m<o.length-1;m++){var w=o[m];if(!(w in h))break t;h=h[w]}o=o[o.length-1],m=h[o],c=c(m),c!=m&&c!=null&&t(h,o,{configurable:!0,writable:!0,value:c})}}function i(o,c){o instanceof String&&(o+="");var h=0,m=!1,w={next:function(){if(!m&&h<o.length){var P=h++;return{value:c(P,o[P]),done:!1}}return m=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}s("Array.prototype.values",function(o){return o||function(){return i(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function l(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,h){return o.call.apply(o.bind,arguments)}function p(o,c,h){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,m),o.apply(c,w)}}return function(){return o.apply(c,arguments)}}function I(o,c,h){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,I.apply(null,arguments)}function b(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function V(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(m,w,P){for(var N=Array(arguments.length-2),et=2;et<arguments.length;et++)N[et-2]=arguments[et];return c.prototype[w].apply(m,N)}}function x(o){const c=o.length;if(0<c){const h=Array(c);for(let m=0;m<c;m++)h[m]=o[m];return h}return[]}function D(o,c){for(let h=1;h<arguments.length;h++){const m=arguments[h];if(l(m)){const w=o.length||0,P=m.length||0;o.length=w+P;for(let N=0;N<P;N++)o[w+N]=m[N]}else o.push(m)}}class z{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function U(o){return/^[\s\xa0]*$/.test(o)}function F(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function q(o){return q[" "](o),o}q[" "]=function(){};var J=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function K(o,c,h){for(const m in o)c.call(h,o[m],m,o)}function E(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function g(o){const c={};for(const h in o)c[h]=o[h];return c}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,c){let h,m;for(let w=1;w<arguments.length;w++){m=arguments[w];for(h in m)o[h]=m[h];for(let P=0;P<y.length;P++)h=y[P],Object.prototype.hasOwnProperty.call(m,h)&&(o[h]=m[h])}}function v(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function R(o){u.setTimeout(()=>{throw o},0)}function _(){var o=Us;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class Qt{constructor(){this.h=this.g=null}add(c,h){const m=wn.get();m.set(c,h),this.h?this.h.next=m:this.g=m,this.h=m}}var wn=new z(()=>new jh,o=>o.reset());class jh{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let An,Rn=!1,Us=new Qt,Uo=()=>{const o=u.Promise.resolve(void 0);An=()=>{o.then(zh)}};var zh=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){R(h)}var c=wn;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}Rn=!1};function ee(){this.s=this.s,this.C=this.C}ee.prototype.s=!1,ee.prototype.ma=function(){this.s||(this.s=!0,this.N())},ee.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function yt(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}yt.prototype.h=function(){this.defaultPrevented=!0};var $h=(function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};u.addEventListener("test",h,c),u.removeEventListener("test",h,c)}catch{}return o})();function bn(o,c){if(yt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(J){t:{try{q(c.nodeName);var w=!0;break t}catch{}w=!1}w||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Gh[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&bn.aa.h.call(this)}}V(bn,yt);var Gh={2:"touch",3:"pen",4:"mouse"};bn.prototype.h=function(){bn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ar="closure_listenable_"+(1e6*Math.random()|0),Kh=0;function Qh(o,c,h,m,w){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!m,this.ha=w,this.key=++Kh,this.da=this.fa=!1}function Rr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function br(o){this.src=o,this.g={},this.h=0}br.prototype.add=function(o,c,h,m,w){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var N=js(o,c,m,w);return-1<N?(c=o[N],h||(c.fa=!1)):(c=new Qh(c,this.src,P,!!m,w),c.fa=h,o.push(c)),c};function qs(o,c){var h=c.type;if(h in o.g){var m=o.g[h],w=Array.prototype.indexOf.call(m,c,void 0),P;(P=0<=w)&&Array.prototype.splice.call(m,w,1),P&&(Rr(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function js(o,c,h,m){for(var w=0;w<o.length;++w){var P=o[w];if(!P.da&&P.listener==c&&P.capture==!!h&&P.ha==m)return w}return-1}var zs="closure_lm_"+(1e6*Math.random()|0),$s={};function qo(o,c,h,m,w){if(Array.isArray(c)){for(var P=0;P<c.length;P++)qo(o,c[P],h,m,w);return null}return h=$o(h),o&&o[Ar]?o.K(c,h,d(m)?!!m.capture:!1,w):Hh(o,c,h,!1,m,w)}function Hh(o,c,h,m,w,P){if(!c)throw Error("Invalid event type");var N=d(w)?!!w.capture:!!w,et=Ks(o);if(et||(o[zs]=et=new br(o)),h=et.add(c,h,m,N,P),h.proxy)return h;if(m=Wh(),h.proxy=m,m.src=o,m.listener=h,o.addEventListener)$h||(w=N),w===void 0&&(w=!1),o.addEventListener(c.toString(),m,w);else if(o.attachEvent)o.attachEvent(zo(c.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Wh(){function o(h){return c.call(o.src,o.listener,h)}const c=Xh;return o}function jo(o,c,h,m,w){if(Array.isArray(c))for(var P=0;P<c.length;P++)jo(o,c[P],h,m,w);else m=d(m)?!!m.capture:!!m,h=$o(h),o&&o[Ar]?(o=o.i,c=String(c).toString(),c in o.g&&(P=o.g[c],h=js(P,h,m,w),-1<h&&(Rr(P[h]),Array.prototype.splice.call(P,h,1),P.length==0&&(delete o.g[c],o.h--)))):o&&(o=Ks(o))&&(c=o.g[c.toString()],o=-1,c&&(o=js(c,h,m,w)),(h=-1<o?c[o]:null)&&Gs(h))}function Gs(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Ar])qs(c.i,o);else{var h=o.type,m=o.proxy;c.removeEventListener?c.removeEventListener(h,m,o.capture):c.detachEvent?c.detachEvent(zo(h),m):c.addListener&&c.removeListener&&c.removeListener(m),(h=Ks(c))?(qs(h,o),h.h==0&&(h.src=null,c[zs]=null)):Rr(o)}}}function zo(o){return o in $s?$s[o]:$s[o]="on"+o}function Xh(o,c){if(o.da)o=!0;else{c=new bn(c,this);var h=o.listener,m=o.ha||o.src;o.fa&&Gs(o),o=h.call(m,c)}return o}function Ks(o){return o=o[zs],o instanceof br?o:null}var Qs="__closure_events_fn_"+(1e9*Math.random()>>>0);function $o(o){return typeof o=="function"?o:(o[Qs]||(o[Qs]=function(c){return o.handleEvent(c)}),o[Qs])}function It(){ee.call(this),this.i=new br(this),this.M=this,this.F=null}V(It,ee),It.prototype[Ar]=!0,It.prototype.removeEventListener=function(o,c,h,m){jo(this,o,c,h,m)};function At(o,c){var h,m=o.F;if(m)for(h=[];m;m=m.F)h.push(m);if(o=o.M,m=c.type||c,typeof c=="string")c=new yt(c,o);else if(c instanceof yt)c.target=c.target||o;else{var w=c;c=new yt(m,o),T(c,w)}if(w=!0,h)for(var P=h.length-1;0<=P;P--){var N=c.g=h[P];w=Pr(N,m,!0,c)&&w}if(N=c.g=o,w=Pr(N,m,!0,c)&&w,w=Pr(N,m,!1,c)&&w,h)for(P=0;P<h.length;P++)N=c.g=h[P],w=Pr(N,m,!1,c)&&w}It.prototype.N=function(){if(It.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],m=0;m<h.length;m++)Rr(h[m]);delete o.g[c],o.h--}}this.F=null},It.prototype.K=function(o,c,h,m){return this.i.add(String(o),c,!1,h,m)},It.prototype.L=function(o,c,h,m){return this.i.add(String(o),c,!0,h,m)};function Pr(o,c,h,m){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var w=!0,P=0;P<c.length;++P){var N=c[P];if(N&&!N.da&&N.capture==h){var et=N.listener,pt=N.ha||N.src;N.fa&&qs(o.i,N),w=et.call(pt,m)!==!1&&w}}return w&&!m.defaultPrevented}function Go(o,c,h){if(typeof o=="function")h&&(o=I(o,h));else if(o&&typeof o.handleEvent=="function")o=I(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(o,c||0)}function Ko(o){o.g=Go(()=>{o.g=null,o.i&&(o.i=!1,Ko(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Jh extends ee{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ko(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pn(o){ee.call(this),this.h=o,this.g={}}V(Pn,ee);var Qo=[];function Ho(o){K(o.g,function(c,h){this.g.hasOwnProperty(h)&&Gs(c)},o),o.g={}}Pn.prototype.N=function(){Pn.aa.N.call(this),Ho(this)},Pn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hs=u.JSON.stringify,Yh=u.JSON.parse,Zh=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function Ws(){}Ws.prototype.h=null;function Wo(o){return o.h||(o.h=o.i())}function Xo(){}var Sn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Xs(){yt.call(this,"d")}V(Xs,yt);function Js(){yt.call(this,"c")}V(Js,yt);var Ee={},Jo=null;function Sr(){return Jo=Jo||new It}Ee.La="serverreachability";function Yo(o){yt.call(this,Ee.La,o)}V(Yo,yt);function Vn(o){const c=Sr();At(c,new Yo(c))}Ee.STAT_EVENT="statevent";function Zo(o,c){yt.call(this,Ee.STAT_EVENT,o),this.stat=c}V(Zo,yt);function Rt(o){const c=Sr();At(c,new Zo(c,o))}Ee.Ma="timingevent";function ta(o,c){yt.call(this,Ee.Ma,o),this.size=c}V(ta,yt);function Dn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},c)}function Cn(){this.g=!0}Cn.prototype.xa=function(){this.g=!1};function td(o,c,h,m,w,P){o.info(function(){if(o.g)if(P)for(var N="",et=P.split("&"),pt=0;pt<et.length;pt++){var X=et[pt].split("=");if(1<X.length){var Et=X[0];X=X[1];var Tt=Et.split("_");N=2<=Tt.length&&Tt[1]=="type"?N+(Et+"="+X+"&"):N+(Et+"=redacted&")}}else N=null;else N=P;return"XMLHTTP REQ ("+m+") [attempt "+w+"]: "+c+`
`+h+`
`+N})}function ed(o,c,h,m,w,P,N){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+w+"]: "+c+`
`+h+`
`+P+" "+N})}function Ke(o,c,h,m){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+rd(o,h)+(m?" "+m:"")})}function nd(o,c){o.info(function(){return"TIMEOUT: "+c})}Cn.prototype.info=function(){};function rd(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var m=h[o];if(!(2>m.length)){var w=m[1];if(Array.isArray(w)&&!(1>w.length)){var P=w[0];if(P!="noop"&&P!="stop"&&P!="close")for(var N=1;N<w.length;N++)w[N]=""}}}}return Hs(h)}catch{return c}}var Vr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ea={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ys;function Dr(){}V(Dr,Ws),Dr.prototype.g=function(){return new XMLHttpRequest},Dr.prototype.i=function(){return{}},Ys=new Dr;function ne(o,c,h,m){this.j=o,this.i=c,this.l=h,this.R=m||1,this.U=new Pn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new na}function na(){this.i=null,this.g="",this.h=!1}var ra={},Zs={};function ti(o,c,h){o.L=1,o.v=kr(Ht(c)),o.m=h,o.P=!0,sa(o,null)}function sa(o,c){o.F=Date.now(),Cr(o),o.A=Ht(o.v);var h=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),ya(h.i,"t",m),o.C=0,h=o.j.J,o.h=new na,o.g=Ma(o.j,h?c:null,!o.m),0<o.O&&(o.M=new Jh(I(o.Y,o,o.g),o.O)),c=o.U,h=o.g,m=o.ca;var w="readystatechange";Array.isArray(w)||(w&&(Qo[0]=w.toString()),w=Qo);for(var P=0;P<w.length;P++){var N=qo(h,w[P],m||c.handleEvent,!1,c.h||c);if(!N)break;c.g[N.key]=N}c=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Vn(),td(o.i,o.u,o.A,o.l,o.R,o.m)}ne.prototype.ca=function(o){o=o.target;const c=this.M;c&&Wt(o)==3?c.j():this.Y(o)},ne.prototype.Y=function(o){try{if(o==this.g)t:{const Tt=Wt(this.g);var c=this.g.Ba();const We=this.g.Z();if(!(3>Tt)&&(Tt!=3||this.g&&(this.h.h||this.g.oa()||Ra(this.g)))){this.J||Tt!=4||c==7||(c==8||0>=We?Vn(3):Vn(2)),ei(this);var h=this.g.Z();this.X=h;e:if(ia(this)){var m=Ra(this.g);o="";var w=m.length,P=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Te(this),xn(this);var N="";break e}this.h.i=new u.TextDecoder}for(c=0;c<w;c++)this.h.h=!0,o+=this.h.i.decode(m[c],{stream:!(P&&c==w-1)});m.length=0,this.h.g+=o,this.C=0,N=this.h.g}else N=this.g.oa();if(this.o=h==200,ed(this.i,this.u,this.A,this.l,this.R,Tt,h),this.o){if(this.T&&!this.K){e:{if(this.g){var et,pt=this.g;if((et=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(et)){var X=et;break e}}X=null}if(h=X)Ke(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ni(this,h);else{this.o=!1,this.s=3,Rt(12),Te(this),xn(this);break t}}if(this.P){h=!0;let qt;for(;!this.J&&this.C<N.length;)if(qt=sd(this,N),qt==Zs){Tt==4&&(this.s=4,Rt(14),h=!1),Ke(this.i,this.l,null,"[Incomplete Response]");break}else if(qt==ra){this.s=4,Rt(15),Ke(this.i,this.l,N,"[Invalid Chunk]"),h=!1;break}else Ke(this.i,this.l,qt,null),ni(this,qt);if(ia(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||N.length!=0||this.h.h||(this.s=1,Rt(16),h=!1),this.o=this.o&&h,!h)Ke(this.i,this.l,N,"[Invalid Chunked Response]"),Te(this),xn(this);else if(0<N.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+N.length),ui(Et),Et.M=!0,Rt(11))}}else Ke(this.i,this.l,N,null),ni(this,N);Tt==4&&Te(this),this.o&&!this.J&&(Tt==4?xa(this.j,this):(this.o=!1,Cr(this)))}else Td(this.g),h==400&&0<N.indexOf("Unknown SID")?(this.s=3,Rt(12)):(this.s=0,Rt(13)),Te(this),xn(this)}}}catch{}finally{}};function ia(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function sd(o,c){var h=o.C,m=c.indexOf(`
`,h);return m==-1?Zs:(h=Number(c.substring(h,m)),isNaN(h)?ra:(m+=1,m+h>c.length?Zs:(c=c.slice(m,m+h),o.C=m+h,c)))}ne.prototype.cancel=function(){this.J=!0,Te(this)};function Cr(o){o.S=Date.now()+o.I,oa(o,o.I)}function oa(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Dn(I(o.ba,o),c)}function ei(o){o.B&&(u.clearTimeout(o.B),o.B=null)}ne.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(nd(this.i,this.A),this.L!=2&&(Vn(),Rt(17)),Te(this),this.s=2,xn(this)):oa(this,this.S-o)};function xn(o){o.j.G==0||o.J||xa(o.j,o)}function Te(o){ei(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Ho(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function ni(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||ri(h.h,o))){if(!o.K&&ri(h.h,o)&&h.G==3){try{var m=h.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var w=m;if(w[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Ur(h),Lr(h);else break t;ai(h),Rt(18)}}else h.za=w[1],0<h.za-h.T&&37500>w[2]&&h.F&&h.v==0&&!h.C&&(h.C=Dn(I(h.Za,h),6e3));if(1>=ca(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else we(h,11)}else if((o.K||h.g==o)&&Ur(h),!U(c))for(w=h.Da.g.parse(c),c=0;c<w.length;c++){let X=w[c];if(h.T=X[0],X=X[1],h.G==2)if(X[0]=="c"){h.K=X[1],h.ia=X[2];const Et=X[3];Et!=null&&(h.la=Et,h.j.info("VER="+h.la));const Tt=X[4];Tt!=null&&(h.Aa=Tt,h.j.info("SVER="+h.Aa));const We=X[5];We!=null&&typeof We=="number"&&0<We&&(m=1.5*We,h.L=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;const qt=o.g;if(qt){const jr=qt.g?qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(jr){var P=m.h;P.g||jr.indexOf("spdy")==-1&&jr.indexOf("quic")==-1&&jr.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(si(P,P.h),P.h=null))}if(m.D){const ci=qt.g?qt.g.getResponseHeader("X-HTTP-Session-Id"):null;ci&&(m.ya=ci,nt(m.I,m.D,ci))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),m=h;var N=o;if(m.qa=Oa(m,m.J?m.ia:null,m.W),N.K){la(m.h,N);var et=N,pt=m.L;pt&&(et.I=pt),et.B&&(ei(et),Cr(et)),m.g=N}else Da(m);0<h.i.length&&Br(h)}else X[0]!="stop"&&X[0]!="close"||we(h,7);else h.G==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?we(h,7):oi(h):X[0]!="noop"&&h.l&&h.l.ta(X),h.v=0)}}Vn(4)}catch{}}var id=class{constructor(o,c){this.g=o,this.map=c}};function aa(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ua(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ca(o){return o.h?1:o.g?o.g.size:0}function ri(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function si(o,c){o.g?o.g.add(c):o.h=c}function la(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}aa.prototype.cancel=function(){if(this.i=ha(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ha(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return x(o.i)}function od(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var c=[],h=o.length,m=0;m<h;m++)c.push(o[m]);return c}c=[],h=0;for(m in o)c[h++]=o[m];return c}function ad(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const m in o)c[h++]=m;return c}}}function da(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=ad(o),m=od(o),w=m.length,P=0;P<w;P++)c.call(void 0,m[P],h&&h[P],o)}var fa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ud(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var m=o[h].indexOf("="),w=null;if(0<=m){var P=o[h].substring(0,m);w=o[h].substring(m+1)}else P=o[h];c(P,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function ve(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof ve){this.h=o.h,xr(this,o.j),this.o=o.o,this.g=o.g,Nr(this,o.s),this.l=o.l;var c=o.i,h=new On;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),ma(this,h),this.m=o.m}else o&&(c=String(o).match(fa))?(this.h=!1,xr(this,c[1]||"",!0),this.o=Nn(c[2]||""),this.g=Nn(c[3]||"",!0),Nr(this,c[4]),this.l=Nn(c[5]||"",!0),ma(this,c[6]||"",!0),this.m=Nn(c[7]||"")):(this.h=!1,this.i=new On(null,this.h))}ve.prototype.toString=function(){var o=[],c=this.j;c&&o.push(kn(c,pa,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(kn(c,pa,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(kn(h,h.charAt(0)=="/"?hd:ld,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",kn(h,fd)),o.join("")};function Ht(o){return new ve(o)}function xr(o,c,h){o.j=h?Nn(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Nr(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function ma(o,c,h){c instanceof On?(o.i=c,md(o.i,o.h)):(h||(c=kn(c,dd)),o.i=new On(c,o.h))}function nt(o,c,h){o.i.set(c,h)}function kr(o){return nt(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Nn(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function kn(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,cd),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function cd(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var pa=/[#\/\?@]/g,ld=/[#\?:]/g,hd=/[#\?]/g,dd=/[#\?@]/g,fd=/#/g;function On(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function re(o){o.g||(o.g=new Map,o.h=0,o.i&&ud(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}r=On.prototype,r.add=function(o,c){re(this),this.i=null,o=Qe(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function ga(o,c){re(o),c=Qe(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function _a(o,c){return re(o),c=Qe(o,c),o.g.has(c)}r.forEach=function(o,c){re(this),this.g.forEach(function(h,m){h.forEach(function(w){o.call(c,w,m,this)},this)},this)},r.na=function(){re(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let m=0;m<c.length;m++){const w=o[m];for(let P=0;P<w.length;P++)h.push(c[m])}return h},r.V=function(o){re(this);let c=[];if(typeof o=="string")_a(this,o)&&(c=c.concat(this.g.get(Qe(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},r.set=function(o,c){return re(this),this.i=null,o=Qe(this,o),_a(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},r.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function ya(o,c,h){ga(o,c),0<h.length&&(o.i=null,o.g.set(Qe(o,c),x(h)),o.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var m=c[h];const P=encodeURIComponent(String(m)),N=this.V(m);for(m=0;m<N.length;m++){var w=P;N[m]!==""&&(w+="="+encodeURIComponent(String(N[m]))),o.push(w)}}return this.i=o.join("&")};function Qe(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function md(o,c){c&&!o.j&&(re(o),o.i=null,o.g.forEach(function(h,m){var w=m.toLowerCase();m!=w&&(ga(this,m),ya(this,w,h))},o)),o.j=c}function pd(o,c){const h=new Cn;if(u.Image){const m=new Image;m.onload=b(se,h,"TestLoadImage: loaded",!0,c,m),m.onerror=b(se,h,"TestLoadImage: error",!1,c,m),m.onabort=b(se,h,"TestLoadImage: abort",!1,c,m),m.ontimeout=b(se,h,"TestLoadImage: timeout",!1,c,m),u.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else c(!1)}function gd(o,c){const h=new Cn,m=new AbortController,w=setTimeout(()=>{m.abort(),se(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:m.signal}).then(P=>{clearTimeout(w),P.ok?se(h,"TestPingServer: ok",!0,c):se(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),se(h,"TestPingServer: error",!1,c)})}function se(o,c,h,m,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),m(h)}catch{}}function _d(){this.g=new Zh}function yd(o,c,h){const m=h||"";try{da(o,function(w,P){let N=w;d(w)&&(N=Hs(w)),c.push(m+P+"="+encodeURIComponent(N))})}catch(w){throw c.push(m+"type="+encodeURIComponent("_badmap")),w}}function Or(o){this.l=o.Ub||null,this.j=o.eb||!1}V(Or,Ws),Or.prototype.g=function(){return new Mr(this.l,this.j)},Or.prototype.i=(function(o){return function(){return o}})({});function Mr(o,c){It.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Mr,It),r=Mr.prototype,r.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Fn(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mn(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Fn(this)),this.g&&(this.readyState=3,Fn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ia(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ia(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Mn(this):Fn(this),this.readyState==3&&Ia(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,Mn(this))},r.Qa=function(o){this.g&&(this.response=o,Mn(this))},r.ga=function(){this.g&&Mn(this)};function Mn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Fn(o)}r.setRequestHeader=function(o,c){this.u.append(o,c)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function Fn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Mr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ea(o){let c="";return K(o,function(h,m){c+=m,c+=":",c+=h,c+=`\r
`}),c}function ii(o,c,h){t:{for(m in h){var m=!1;break t}m=!0}m||(h=Ea(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):nt(o,c,h))}function at(o){It.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(at,It);var Id=/^https?$/i,Ed=["POST","PUT"];r=at.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,c,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ys.g(),this.v=this.o?Wo(this.o):Wo(Ys),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(P){Ta(this,P);return}if(o=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var w in m)h.set(w,m[w]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const P of m.keys())h.set(P,m.get(P));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(P=>P.toLowerCase()=="content-type"),w=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Ed,c,void 0))||m||w||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,N]of h)this.g.setRequestHeader(P,N);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Aa(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){Ta(this,P)}};function Ta(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,va(o),Fr(o)}function va(o){o.A||(o.A=!0,At(o,"complete"),At(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,At(this,"complete"),At(this,"abort"),Fr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fr(this,!0)),at.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?wa(this):this.bb())},r.bb=function(){wa(this)};function wa(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Wt(o)!=4||o.Z()!=2)){if(o.u&&Wt(o)==4)Go(o.Ea,0,o);else if(At(o,"readystatechange"),Wt(o)==4){o.h=!1;try{const N=o.Z();t:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var h;if(!(h=c)){var m;if(m=N===0){var w=String(o.D).match(fa)[1]||null;!w&&u.self&&u.self.location&&(w=u.self.location.protocol.slice(0,-1)),m=!Id.test(w?w.toLowerCase():"")}h=m}if(h)At(o,"complete"),At(o,"success");else{o.m=6;try{var P=2<Wt(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",va(o)}}finally{Fr(o)}}}}function Fr(o,c){if(o.g){Aa(o);const h=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||At(o,"ready");try{h.onreadystatechange=m}catch{}}}function Aa(o){o.I&&(u.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function Wt(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Yh(c)}};function Ra(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Td(o){const c={};o=(o.g&&2<=Wt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(U(o[m]))continue;var h=v(o[m]);const w=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const P=c[w]||[];c[w]=P,P.push(h)}E(c,function(m){return m.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ln(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function ba(o){this.Aa=0,this.i=[],this.j=new Cn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ln("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ln("baseRetryDelayMs",5e3,o),this.cb=Ln("retryDelaySeedMs",1e4,o),this.Wa=Ln("forwardChannelMaxRetries",2,o),this.wa=Ln("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new aa(o&&o.concurrentRequestLimit),this.Da=new _d,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ba.prototype,r.la=8,r.G=1,r.connect=function(o,c,h,m){Rt(0),this.W=o,this.H=c||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.I=Oa(this,null,this.W),Br(this)};function oi(o){if(Pa(o),o.G==3){var c=o.U++,h=Ht(o.I);if(nt(h,"SID",o.K),nt(h,"RID",c),nt(h,"TYPE","terminate"),Bn(o,h),c=new ne(o,o.j,c),c.L=2,c.v=kr(Ht(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=c.v,h=!0),h||(c.g=Ma(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Cr(c)}ka(o)}function Lr(o){o.g&&(ui(o),o.g.cancel(),o.g=null)}function Pa(o){Lr(o),o.u&&(u.clearTimeout(o.u),o.u=null),Ur(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function Br(o){if(!ua(o.h)&&!o.s){o.s=!0;var c=o.Ga;An||Uo(),Rn||(An(),Rn=!0),Us.add(c,o),o.B=0}}function vd(o,c){return ca(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Dn(I(o.Ga,o,c),Na(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const w=new ne(this,this.j,o);let P=this.o;if(this.S&&(P?(P=g(P),T(P,this.S)):P=this.S),this.m!==null||this.O||(w.H=P,P=null),this.P)t:{for(var c=0,h=0;h<this.i.length;h++){e:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break e}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=h;break t}if(c===4096||h===this.i.length-1){c=h+1;break t}}c=1e3}else c=1e3;c=Va(this,w,c),h=Ht(this.I),nt(h,"RID",o),nt(h,"CVER",22),this.D&&nt(h,"X-HTTP-Session-Id",this.D),Bn(this,h),P&&(this.O?c="headers="+encodeURIComponent(String(Ea(P)))+"&"+c:this.m&&ii(h,this.m,P)),si(this.h,w),this.Ua&&nt(h,"TYPE","init"),this.P?(nt(h,"$req",c),nt(h,"SID","null"),w.T=!0,ti(w,h,null)):ti(w,h,c),this.G=2}}else this.G==3&&(o?Sa(this,o):this.i.length==0||ua(this.h)||Sa(this))};function Sa(o,c){var h;c?h=c.l:h=o.U++;const m=Ht(o.I);nt(m,"SID",o.K),nt(m,"RID",h),nt(m,"AID",o.T),Bn(o,m),o.m&&o.o&&ii(m,o.m,o.o),h=new ne(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Va(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),si(o.h,h),ti(h,m,c)}function Bn(o,c){o.H&&K(o.H,function(h,m){nt(c,m,h)}),o.l&&da({},function(h,m){nt(c,m,h)})}function Va(o,c,h){h=Math.min(o.i.length,h);var m=o.l?I(o.l.Na,o.l,o):null;t:{var w=o.i;let P=-1;for(;;){const N=["count="+h];P==-1?0<h?(P=w[0].g,N.push("ofs="+P)):P=0:N.push("ofs="+P);let et=!0;for(let pt=0;pt<h;pt++){let X=w[pt].g;const Et=w[pt].map;if(X-=P,0>X)P=Math.max(0,w[pt].g-100),et=!1;else try{yd(Et,N,"req"+X+"_")}catch{m&&m(Et)}}if(et){m=N.join("&");break t}}}return o=o.i.splice(0,h),c.D=o,m}function Da(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;An||Uo(),Rn||(An(),Rn=!0),Us.add(c,o),o.v=0}}function ai(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Dn(I(o.Fa,o),Na(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,Ca(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Dn(I(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Rt(10),Lr(this),Ca(this))};function ui(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function Ca(o){o.g=new ne(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Ht(o.qa);nt(c,"RID","rpc"),nt(c,"SID",o.K),nt(c,"AID",o.T),nt(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&nt(c,"TO",o.ja),nt(c,"TYPE","xmlhttp"),Bn(o,c),o.m&&o.o&&ii(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=kr(Ht(c)),h.m=null,h.P=!0,sa(h,o)}r.Za=function(){this.C!=null&&(this.C=null,Lr(this),ai(this),Rt(19))};function Ur(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function xa(o,c){var h=null;if(o.g==c){Ur(o),ui(o),o.g=null;var m=2}else if(ri(o.h,c))h=c.D,la(o.h,c),m=1;else return;if(o.G!=0){if(c.o)if(m==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var w=o.B;m=Sr(),At(m,new ta(m,h)),Br(o)}else Da(o);else if(w=c.s,w==3||w==0&&0<c.X||!(m==1&&vd(o,c)||m==2&&ai(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),w){case 1:we(o,5);break;case 4:we(o,10);break;case 3:we(o,6);break;default:we(o,2)}}}function Na(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function we(o,c){if(o.j.info("Error code "+c),c==2){var h=I(o.fb,o),m=o.Xa;const w=!m;m=new ve(m||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||xr(m,"https"),kr(m),w?pd(m.toString(),h):gd(m.toString(),h)}else Rt(2);o.G=0,o.l&&o.l.sa(c),ka(o),Pa(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function ka(o){if(o.G=0,o.ka=[],o.l){const c=ha(o.h);(c.length!=0||o.i.length!=0)&&(D(o.ka,c),D(o.ka,o.i),o.h.i.length=0,x(o.i),o.i.length=0),o.l.ra()}}function Oa(o,c,h){var m=h instanceof ve?Ht(h):new ve(h);if(m.g!="")c&&(m.g=c+"."+m.g),Nr(m,m.s);else{var w=u.location;m=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;var P=new ve(null);m&&xr(P,m),c&&(P.g=c),w&&Nr(P,w),h&&(P.l=h),m=P}return h=o.D,c=o.ya,h&&c&&nt(m,h,c),nt(m,"VER",o.la),Bn(o,m),m}function Ma(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new at(new Or({eb:h})):new at(o.pa),c.Ha(o.J),c}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fa(){}r=Fa.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function qr(){}qr.prototype.g=function(o,c){return new kt(o,c)};function kt(o,c){It.call(this),this.g=new ba(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!U(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!U(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new He(this)}V(kt,It),kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},kt.prototype.close=function(){oi(this.g)},kt.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Hs(o),o=h);c.i.push(new id(c.Ya++,o)),c.G==3&&Br(c)},kt.prototype.N=function(){this.g.l=null,delete this.j,oi(this.g),delete this.g,kt.aa.N.call(this)};function La(o){Xs.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){t:{for(const h in c){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}V(La,Xs);function Ba(){Js.call(this),this.status=1}V(Ba,Js);function He(o){this.g=o}V(He,Fa),He.prototype.ua=function(){At(this.g,"a")},He.prototype.ta=function(o){At(this.g,new La(o))},He.prototype.sa=function(o){At(this.g,new Ba)},He.prototype.ra=function(){At(this.g,"b")},qr.prototype.createWebChannel=qr.prototype.g,kt.prototype.send=kt.prototype.o,kt.prototype.open=kt.prototype.m,kt.prototype.close=kt.prototype.close,Dc=function(){return new qr},Vc=function(){return Sr()},Sc=Ee,Ri={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Vr.NO_ERROR=0,Vr.TIMEOUT=8,Vr.HTTP_ERROR=6,Jr=Vr,ea.COMPLETE="complete",Pc=ea,Xo.EventType=Sn,Sn.OPEN="a",Sn.CLOSE="b",Sn.ERROR="c",Sn.MESSAGE="d",It.prototype.listen=It.prototype.K,Kn=Xo,at.prototype.listenOnce=at.prototype.L,at.prototype.getLastError=at.prototype.Ka,at.prototype.getLastErrorCode=at.prototype.Ba,at.prototype.getStatus=at.prototype.Z,at.prototype.getResponseJson=at.prototype.Oa,at.prototype.getResponseText=at.prototype.oa,at.prototype.send=at.prototype.ea,at.prototype.setWithCredentials=at.prototype.Ha,bc=at}).apply(typeof zr<"u"?zr:typeof self<"u"?self:typeof window<"u"?window:{});const Ja="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yn="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke=new yc("@firebase/firestore");function tn(){return ke.logLevel}function C(r,...t){if(ke.logLevel<=W.DEBUG){const e=t.map(Xi);ke.debug(`Firestore (${yn}): ${r}`,...e)}}function Pt(r,...t){if(ke.logLevel<=W.ERROR){const e=t.map(Xi);ke.error(`Firestore (${yn}): ${r}`,...e)}}function un(r,...t){if(ke.logLevel<=W.WARN){const e=t.map(Xi);ke.warn(`Firestore (${yn}): ${r}`,...e)}}function Xi(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(r="Unexpected state"){const t=`FIRESTORE (${yn}) INTERNAL ASSERTION FAILED: `+r;throw Pt(t),new Error(t)}function L(r,t){r||M()}function j(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends je{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Wf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(gt.UNAUTHENTICATED)))}shutdown(){}}class Xf{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Jf{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){L(this.o===void 0);let n=this.i;const s=l=>this.i!==n?(n=this.i,e(l)):Promise.resolve();let i=new Gt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Gt,t.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const l=i;t.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},u=l=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((l=>u(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?u(l):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Gt)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((n=>this.i!==t?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(L(typeof n.accessToken=="string"),new Cc(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return L(t===null||typeof t=="string"),new gt(t)}}class Yf{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Zf{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Yf(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(gt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class tm{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class em{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){L(this.o===void 0);const n=i=>{i.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,C("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable((()=>n(i)))};const s=i=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(L(typeof e.token=="string"),this.R=e.token,new tm(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=nm(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function $(r,t){return r<t?-1:r>t?1:0}function cn(r,t,e){return r.length===t.length&&r.every(((n,s)=>e(n,t[s])))}function Nc(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new k(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ot.fromMillis(Date.now())}static fromDate(t){return ot.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new ot(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?$(this.nanoseconds,t.nanoseconds):$(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t){this.timestamp=t}static fromTimestamp(t){return new B(t)}static min(){return new B(new ot(0,0))}static max(){return new B(new ot(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(t,e,n){e===void 0?e=0:e>t.length&&M(),n===void 0?n=t.length-e:n>t.length-e&&M(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return or.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof or?t.forEach((n=>{e.push(n)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const i=t.get(s),a=e.get(s);if(i<a)return-1;if(i>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Y extends or{construct(t,e,n){return new Y(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new k(S.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((s=>s.length>0)))}return new Y(e)}static emptyPath(){return new Y([])}}const rm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends or{construct(t,e,n){return new it(t,e,n)}static isValidIdentifier(t){return rm.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(n.length===0)throw new k(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new k(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new k(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=l,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(n+=u,s++):(i(),s++)}if(i(),a)throw new k(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new it(e)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(Y.fromString(t))}static fromName(t){return new O(Y.fromString(t).popFirst(5))}static empty(){return new O(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new Y(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}function bi(r){return r.fields.find((t=>t.kind===2))}function be(r){return r.fields.filter((t=>t.kind!==2))}cs.UNKNOWN_ID=-1;class Yr{constructor(t,e){this.fieldPath=t,this.kind=e}}class ar{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new ar(0,Lt.min())}}function sm(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=B.fromTimestamp(n===1e9?new ot(e+1,0):new ot(e,n));return new Lt(s,O.empty(),t)}function kc(r){return new Lt(r.readTime,r.key,-1)}class Lt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Lt(B.min(),O.empty(),-1)}static max(){return new Lt(B.max(),O.empty(),-1)}}function Ji(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(r.documentKey,t.documentKey),e!==0?e:$(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Mc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ze(r){if(r.code!==S.FAILED_PRECONDITION||r.message!==Oc)throw r;C("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new A(((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof A?e:A.resolve(e)}catch(e){return A.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):A.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):A.reject(e)}static resolve(t){return new A(((e,n)=>{e(t)}))}static reject(t){return new A(((e,n)=>{n(t)}))}static waitFor(t){return new A(((e,n)=>{let s=0,i=0,a=!1;t.forEach((u=>{++s,u.next((()=>{++i,a&&i===s&&e()}),(l=>n(l)))})),a=!0,i===s&&e()}))}static or(t){let e=A.resolve(!1);for(const n of t)e=e.next((s=>s?A.resolve(s):n()));return e}static forEach(t,e){const n=[];return t.forEach(((s,i)=>{n.push(e.call(this,s,i))})),this.waitFor(n)}static mapArray(t,e){return new A(((n,s)=>{const i=t.length,a=new Array(i);let u=0;for(let l=0;l<i;l++){const d=l;e(t[d]).next((f=>{a[d]=f,++u,u===i&&n(a)}),(f=>s(f)))}}))}static doWhile(t,e){return new A(((n,s)=>{const i=()=>{t()===!0?e().next((()=>{i()}),s):n()};i()}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.V=new Gt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{e.error?this.V.reject(new Jn(t,e.error)):this.V.resolve()},this.transaction.onerror=n=>{const s=Yi(n.target.error);this.V.reject(new Jn(t,s))}}static open(t,e,n,s){try{return new Ts(e,t.transaction(s,n))}catch(i){throw new Jn(e,i)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(C("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new om(e)}}class fe{constructor(t,e,n){this.name=t,this.version=e,this.p=n,fe.S(as())===12.2&&Pt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return C("SimpleDb","Removing database:",t),Pe(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!gc())return!1;if(fe.v())return!0;const t=as(),e=fe.S(t),n=0<e&&e<10,s=Fc(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||i)}static v(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.C)==="YES"}static F(t,e){return t.store(e)}static S(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}async M(t){return this.db||(C("SimpleDb","Opening database:",this.name),this.db=await new Promise(((e,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const a=i.target.result;e(a)},s.onblocked=()=>{n(new Jn(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const a=i.target.error;a.name==="VersionError"?n(new k(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new k(S.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new Jn(t,a))},s.onupgradeneeded=i=>{C("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const a=i.target.result;this.p.O(a,s.transaction,i.oldVersion,this.version).next((()=>{C("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.N&&(this.db.onversionchange=e=>this.N(e)),this.db}L(t){this.N=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,s){const i=e==="readonly";let a=0;for(;;){++a;try{this.db=await this.M(t);const u=Ts.open(this.db,t,i?"readonly":"readwrite",n),l=s(u).next((d=>(u.g(),d))).catch((d=>(u.abort(d),A.reject(d)))).toPromise();return l.catch((()=>{})),await u.m,l}catch(u){const l=u,d=l.name!=="FirebaseError"&&a<3;if(C("SimpleDb","Transaction failed with error:",l.message,"Retrying:",d),this.close(),!d)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Fc(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}class im{constructor(t){this.B=t,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(t){this.B=t}done(){this.k=!0}$(t){this.q=t}delete(){return Pe(this.B.delete())}}class Jn extends k{constructor(t,e){super(S.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function ye(r){return r.name==="IndexedDbTransactionError"}class om{constructor(t){this.store=t}put(t,e){let n;return e!==void 0?(C("SimpleDb","PUT",this.store.name,t,e),n=this.store.put(e,t)):(C("SimpleDb","PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),Pe(n)}add(t){return C("SimpleDb","ADD",this.store.name,t,t),Pe(this.store.add(t))}get(t){return Pe(this.store.get(t)).next((e=>(e===void 0&&(e=null),C("SimpleDb","GET",this.store.name,t,e),e)))}delete(t){return C("SimpleDb","DELETE",this.store.name,t),Pe(this.store.delete(t))}count(){return C("SimpleDb","COUNT",this.store.name),Pe(this.store.count())}U(t,e){const n=this.options(t,e),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new A(((a,u)=>{i.onerror=l=>{u(l.target.error)},i.onsuccess=l=>{a(l.target.result)}}))}{const i=this.cursor(n),a=[];return this.W(i,((u,l)=>{a.push(l)})).next((()=>a))}}G(t,e){const n=this.store.getAll(t,e===null?void 0:e);return new A(((s,i)=>{n.onerror=a=>{i(a.target.error)},n.onsuccess=a=>{s(a.target.result)}}))}j(t,e){C("SimpleDb","DELETE ALL",this.store.name);const n=this.options(t,e);n.H=!1;const s=this.cursor(n);return this.W(s,((i,a,u)=>u.delete()))}J(t,e){let n;e?n=t:(n={},e=t);const s=this.cursor(n);return this.W(s,e)}Y(t){const e=this.cursor({});return new A(((n,s)=>{e.onerror=i=>{const a=Yi(i.target.error);s(a)},e.onsuccess=i=>{const a=i.target.result;a?t(a.primaryKey,a.value).next((u=>{u?a.continue():n()})):n()}}))}W(t,e){const n=[];return new A(((s,i)=>{t.onerror=a=>{i(a.target.error)},t.onsuccess=a=>{const u=a.target.result;if(!u)return void s();const l=new im(u),d=e(u.primaryKey,u.value,l);if(d instanceof A){const f=d.catch((p=>(l.done(),A.reject(p))));n.push(f)}l.isDone?s():l.K===null?u.continue():u.continue(l.K)}})).next((()=>A.waitFor(n)))}options(t,e){let n;return t!==void 0&&(typeof t=="string"?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.H?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Pe(r){return new A(((t,e)=>{r.onsuccess=n=>{const s=n.target.result;t(s)},r.onerror=n=>{const s=Yi(n.target.error);e(s)}}))}let Ya=!1;function Yi(r){const t=fe.S(as());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(e)>=0){const n=new k("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ya||(Ya=!0,setTimeout((()=>{throw n}),0)),n}}return r}class am{constructor(t,e){this.asyncQueue=t,this.Z=e,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(t){C("IndexBackfiller",`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,(async()=>{this.task=null;try{C("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(e){ye(e)?C("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",e):await ze(e)}await this.X(6e4)}))}}class um{constructor(t,e){this.localStore=t,this.persistence=e}async ee(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(e=>this.te(e,t)))}te(t,e){const n=new Set;let s=e,i=!0;return A.doWhile((()=>i===!0&&s>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next((a=>{if(a!==null&&!n.has(a))return C("IndexBackfiller",`Processing collection: ${a}`),this.ne(t,a,s).next((u=>{s-=u,n.add(a)}));i=!1})))).next((()=>e-s))}ne(t,e,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next((s=>this.localStore.localDocuments.getNextDocuments(t,e,s,n).next((i=>{const a=i.changes;return this.localStore.indexManager.updateIndexEntries(t,a).next((()=>this.re(s,i))).next((u=>(C("IndexBackfiller",`Updating offset: ${u}`),this.localStore.indexManager.updateCollectionGroup(t,e,u)))).next((()=>a.size))}))))}re(t,e){let n=t;return e.changes.forEach(((s,i)=>{const a=kc(i);Ji(a,n)>0&&(n=a)})),new Lt(n.readTime,n.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Bt.oe=-1;function vs(r){return r==null}function ur(r){return r===0&&1/r==-1/0}function cm(r){return typeof r=="number"&&Number.isInteger(r)&&!ur(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=Za(t)),t=lm(r.get(e),t);return Za(t)}function lm(r,t){let e=t;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":e+="";break;case"":e+="";break;default:e+=i}}return e}function Za(r){return r+""}function jt(r){const t=r.length;if(L(t>=2),t===2)return L(r.charAt(0)===""&&r.charAt(1)===""),Y.emptyPath();const e=t-2,n=[];let s="";for(let i=0;i<t;){const a=r.indexOf("",i);switch((a<0||a>e)&&M(),r.charAt(a+1)){case"":const u=r.substring(i,a);let l;s.length===0?l=u:(s+=u,l=s,s=""),n.push(l);break;case"":s+=r.substring(i,a),s+="\0";break;case"":s+=r.substring(i,a+1);break;default:M()}i=a+2}return new Y(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(r,t){return[r,Vt(t)]}function Lc(r,t,e){return[r,Vt(t),e]}const hm={},dm=["prefixPath","collectionGroup","readTime","documentId"],fm=["prefixPath","collectionGroup","documentId"],mm=["collectionGroup","readTime","prefixPath","documentId"],pm=["canonicalId","targetId"],gm=["targetId","path"],_m=["path","targetId"],ym=["collectionId","parent"],Im=["indexId","uid"],Em=["uid","sequenceNumber"],Tm=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],vm=["indexId","uid","orderedDocumentKey"],wm=["userId","collectionPath","documentId"],Am=["userId","collectionPath","largestBatchId"],Rm=["userId","collectionGroup","largestBatchId"],Bc=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],bm=[...Bc,"documentOverlays"],Uc=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],qc=Uc,Zi=[...qc,"indexConfiguration","indexState","indexEntries"],Pm=Zi,Sm=[...Zi,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends Mc{constructor(t,e){super(),this._e=t,this.currentSequenceNumber=e}}function ft(r,t){const e=j(r);return fe.F(e._e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function $e(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function jc(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t,e){this.comparator=t,this.root=e||_t.EMPTY}insert(t,e){return new st(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,_t.BLACK,null,null))}remove(t){return new st(this.comparator,this.root.remove(t,this.comparator).copy(null,null,_t.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new $r(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new $r(this.root,t,this.comparator,!1)}getReverseIterator(){return new $r(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new $r(this.root,t,this.comparator,!0)}}class $r{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class _t{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=n??_t.RED,this.left=s??_t.EMPTY,this.right=i??_t.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new _t(t??this.key,e??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return _t.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return _t.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const t=this.left.check();if(t!==this.right.check())throw M();return t+(this.isRed()?0:1)}}_t.EMPTY=null,_t.RED=!0,_t.BLACK=!1;_t.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,n,s,i){return this}insert(t,e,n){return new _t(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.comparator=t,this.data=new st(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new nu(this.data.getIterator())}getIteratorFrom(t){return new nu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((n=>{e=e.add(n)})),e}isEqual(t){if(!(t instanceof tt)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new tt(this.comparator);return e.data=t,e}}class nu{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Xe(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t){this.fields=t,t.sort(it.comparator)}static empty(){return new xt([])}unionWith(t){let e=new tt(it.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new xt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return cn(this.fields,t.fields,((e,n)=>e.isEqual(n)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new zc("Invalid base64 string: "+i):i}})(t);return new dt(e)}static fromUint8Array(t){const e=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(t);return new dt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return $(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const Vm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yt(r){if(L(!!r),typeof r=="string"){let t=0;const e=Vm.exec(r);if(L(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:rt(r.seconds),nanos:rt(r.nanos)}}function rt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function pe(r){return typeof r=="string"?dt.fromBase64String(r):dt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function eo(r){const t=r.mapValue.fields.__previous_value__;return to(t)?eo(t):t}function cr(r){const t=Yt(r.mapValue.fields.__local_write_time__.timestampValue);return new ot(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(t,e,n,s,i,a,u,l,d){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=d}}class Oe{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Oe("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Oe&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},ts={nullValue:"NULL_VALUE"};function Me(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?to(r)?4:$c(r)?9007199254740991:ws(r)?10:11:M()}function Kt(r,t){if(r===t)return!0;const e=Me(r);if(e!==Me(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return cr(r).isEqual(cr(t));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Yt(s.timestampValue),u=Yt(i.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos})(r,t);case 5:return r.stringValue===t.stringValue;case 6:return(function(s,i){return pe(s.bytesValue).isEqual(pe(i.bytesValue))})(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return(function(s,i){return rt(s.geoPointValue.latitude)===rt(i.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(i.geoPointValue.longitude)})(r,t);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return rt(s.integerValue)===rt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=rt(s.doubleValue),u=rt(i.doubleValue);return a===u?ur(a)===ur(u):isNaN(a)&&isNaN(u)}return!1})(r,t);case 9:return cn(r.arrayValue.values||[],t.arrayValue.values||[],Kt);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},u=i.mapValue.fields||{};if(eu(a)!==eu(u))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(u[l]===void 0||!Kt(a[l],u[l])))return!1;return!0})(r,t);default:return M()}}function lr(r,t){return(r.values||[]).find((e=>Kt(e,t)))!==void 0}function ge(r,t){if(r===t)return 0;const e=Me(r),n=Me(t);if(e!==n)return $(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return $(r.booleanValue,t.booleanValue);case 2:return(function(i,a){const u=rt(i.integerValue||i.doubleValue),l=rt(a.integerValue||a.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1})(r,t);case 3:return ru(r.timestampValue,t.timestampValue);case 4:return ru(cr(r),cr(t));case 5:return $(r.stringValue,t.stringValue);case 6:return(function(i,a){const u=pe(i),l=pe(a);return u.compareTo(l)})(r.bytesValue,t.bytesValue);case 7:return(function(i,a){const u=i.split("/"),l=a.split("/");for(let d=0;d<u.length&&d<l.length;d++){const f=$(u[d],l[d]);if(f!==0)return f}return $(u.length,l.length)})(r.referenceValue,t.referenceValue);case 8:return(function(i,a){const u=$(rt(i.latitude),rt(a.latitude));return u!==0?u:$(rt(i.longitude),rt(a.longitude))})(r.geoPointValue,t.geoPointValue);case 9:return su(r.arrayValue,t.arrayValue);case 10:return(function(i,a){var u,l,d,f;const p=i.fields||{},I=a.fields||{},b=(u=p.value)===null||u===void 0?void 0:u.arrayValue,V=(l=I.value)===null||l===void 0?void 0:l.arrayValue,x=$(((d=b==null?void 0:b.values)===null||d===void 0?void 0:d.length)||0,((f=V==null?void 0:V.values)===null||f===void 0?void 0:f.length)||0);return x!==0?x:su(b,V)})(r.mapValue,t.mapValue);case 11:return(function(i,a){if(i===ce.mapValue&&a===ce.mapValue)return 0;if(i===ce.mapValue)return 1;if(a===ce.mapValue)return-1;const u=i.fields||{},l=Object.keys(u),d=a.fields||{},f=Object.keys(d);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const I=$(l[p],f[p]);if(I!==0)return I;const b=ge(u[l[p]],d[f[p]]);if(b!==0)return b}return $(l.length,f.length)})(r.mapValue,t.mapValue);default:throw M()}}function ru(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return $(r,t);const e=Yt(r),n=Yt(t),s=$(e.seconds,n.seconds);return s!==0?s:$(e.nanos,n.nanos)}function su(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const i=ge(e[s],n[s]);if(i)return i}return $(e.length,n.length)}function ln(r){return Si(r)}function Si(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(e){const n=Yt(e);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(e){return pe(e).toBase64()})(r.bytesValue):"referenceValue"in r?(function(e){return O.fromName(e).toString()})(r.referenceValue):"geoPointValue"in r?(function(e){return`geo(${e.latitude},${e.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(e){let n="[",s=!0;for(const i of e.values||[])s?s=!1:n+=",",n+=Si(i);return n+"]"})(r.arrayValue):"mapValue"in r?(function(e){const n=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const a of n)i?i=!1:s+=",",s+=`${a}:${Si(e.fields[a])}`;return s+"}"})(r.mapValue):M()}function hr(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function Vi(r){return!!r&&"integerValue"in r}function dr(r){return!!r&&"arrayValue"in r}function iu(r){return!!r&&"nullValue"in r}function ou(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function es(r){return!!r&&"mapValue"in r}function ws(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Yn(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return $e(r.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Yn(n))),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Yn(r.arrayValue.values[e]);return t}return Object.assign({},r)}function $c(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const Gc={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function Cm(r){return"nullValue"in r?ts:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?hr(Oe.empty(),O.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?ws(r)?Gc:{mapValue:{}}:M()}function xm(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?hr(Oe.empty(),O.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Gc:"mapValue"in r?ws(r)?{mapValue:{}}:ce:M()}function au(r,t){const e=ge(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?-1:!r.inclusive&&t.inclusive?1:0}function uu(r,t){const e=ge(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?1:!r.inclusive&&t.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!es(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Yn(e)}setAll(t){let e=it.emptyPath(),n={},s=[];t.forEach(((a,u)=>{if(!e.isImmediateParentOf(u)){const l=this.getFieldsMap(e);this.applyChanges(l,n,s),n={},s=[],e=u.popLast()}a?n[u.lastSegment()]=Yn(a):s.push(u.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());es(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Kt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];es(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){$e(e,((s,i)=>t[s]=i));for(const s of n)delete t[s]}clone(){return new wt(Yn(this.value))}}function Kc(r){const t=[];return $e(r.fields,((e,n)=>{const s=new it([e]);if(es(n)){const i=Kc(n.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)})),new xt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t,e,n,s,i,a,u){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=a,this.documentState=u}static newInvalidDocument(t){return new ut(t,0,B.min(),B.min(),B.min(),wt.empty(),0)}static newFoundDocument(t,e,n,s){return new ut(t,1,e,B.min(),n,s,0)}static newNoDocument(t,e){return new ut(t,2,e,B.min(),B.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new ut(t,3,e,B.min(),B.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ut&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(t,e){this.position=t,this.inclusive=e}}function cu(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const i=t[s],a=r.position[s];if(i.field.isKeyField()?n=O.comparator(O.fromName(a.referenceValue),e.key):n=ge(a,e.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function lu(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Kt(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(t,e="asc"){this.field=t,this.dir=e}}function Nm(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{}class Q extends Qc{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new km(t,e,n):e==="array-contains"?new Fm(t,n):e==="in"?new Zc(t,n):e==="not-in"?new Lm(t,n):e==="array-contains-any"?new Bm(t,n):new Q(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Om(t,n):new Mm(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ge(e,this.value)):e!==null&&Me(this.value)===Me(e)&&this.matchesComparison(ge(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Z extends Qc{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Z(t,e)}matches(t){return dn(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function dn(r){return r.op==="and"}function Di(r){return r.op==="or"}function no(r){return Hc(r)&&dn(r)}function Hc(r){for(const t of r.filters)if(t instanceof Z)return!1;return!0}function Ci(r){if(r instanceof Q)return r.field.canonicalString()+r.op.toString()+ln(r.value);if(no(r))return r.filters.map((t=>Ci(t))).join(",");{const t=r.filters.map((e=>Ci(e))).join(",");return`${r.op}(${t})`}}function Wc(r,t){return r instanceof Q?(function(n,s){return s instanceof Q&&n.op===s.op&&n.field.isEqual(s.field)&&Kt(n.value,s.value)})(r,t):r instanceof Z?(function(n,s){return s instanceof Z&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce(((i,a,u)=>i&&Wc(a,s.filters[u])),!0):!1})(r,t):void M()}function Xc(r,t){const e=r.filters.concat(t);return Z.create(e,r.op)}function Jc(r){return r instanceof Q?(function(e){return`${e.field.canonicalString()} ${e.op} ${ln(e.value)}`})(r):r instanceof Z?(function(e){return e.op.toString()+" {"+e.getFilters().map(Jc).join(" ,")+"}"})(r):"Filter"}class km extends Q{constructor(t,e,n){super(t,e,n),this.key=O.fromName(n.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Om extends Q{constructor(t,e){super(t,"in",e),this.keys=Yc("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Mm extends Q{constructor(t,e){super(t,"not-in",e),this.keys=Yc("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Yc(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map((n=>O.fromName(n.referenceValue)))}class Fm extends Q{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return dr(e)&&lr(e.arrayValue,this.value)}}class Zc extends Q{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&lr(this.value.arrayValue,e)}}class Lm extends Q{constructor(t,e){super(t,"not-in",e)}matches(t){if(lr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!lr(this.value.arrayValue,e)}}class Bm extends Q{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!dr(e)||!e.arrayValue.values)&&e.arrayValue.values.some((n=>lr(this.value.arrayValue,n)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(t,e=null,n=[],s=[],i=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=a,this.endAt=u,this.ue=null}}function xi(r,t=null,e=[],n=[],s=null,i=null,a=null){return new Um(r,t,e,n,s,i,a)}function Fe(r){const t=j(r);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((n=>Ci(n))).join(","),e+="|ob:",e+=t.orderBy.map((n=>(function(i){return i.field.canonicalString()+i.dir})(n))).join(","),vs(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((n=>ln(n))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((n=>ln(n))).join(",")),t.ue=e}return t.ue}function gr(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Nm(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Wc(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!lu(r.startAt,t.startAt)&&lu(r.endAt,t.endAt)}function hs(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function ds(r,t){return r.filters.filter((e=>e instanceof Q&&e.field.isEqual(t)))}function hu(r,t,e){let n=ts,s=!0;for(const i of ds(r,t)){let a=ts,u=!0;switch(i.op){case"<":case"<=":a=Cm(i.value);break;case"==":case"in":case">=":a=i.value;break;case">":a=i.value,u=!1;break;case"!=":case"not-in":a=ts}au({value:n,inclusive:s},{value:a,inclusive:u})<0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];au({value:n,inclusive:s},{value:a,inclusive:e.inclusive})<0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}function du(r,t,e){let n=ce,s=!0;for(const i of ds(r,t)){let a=ce,u=!0;switch(i.op){case">=":case">":a=xm(i.value),u=!1;break;case"==":case"in":case"<=":a=i.value;break;case"<":a=i.value,u=!1;break;case"!=":case"not-in":a=ce}uu({value:n,inclusive:s},{value:a,inclusive:u})>0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];uu({value:n,inclusive:s},{value:a,inclusive:e.inclusive})>0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t,e=null,n=[],s=[],i=null,a="F",u=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=a,this.startAt=u,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function qm(r,t,e,n,s,i,a,u){return new _r(r,t,e,n,s,i,a,u)}function As(r){return new _r(r)}function fu(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function tl(r){return r.collectionGroup!==null}function Zn(r){const t=j(r);if(t.ce===null){t.ce=[];const e=new Set;for(const i of t.explicitOrderBy)t.ce.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new tt(it.comparator);return a.filters.forEach((l=>{l.getFlattenedFilters().forEach((d=>{d.isInequality()&&(u=u.add(d.field))}))})),u})(t).forEach((i=>{e.has(i.canonicalString())||i.isKeyField()||t.ce.push(new ls(i,n))})),e.has(it.keyField().canonicalString())||t.ce.push(new ls(it.keyField(),n))}return t.ce}function Ut(r){const t=j(r);return t.le||(t.le=jm(t,Zn(r))),t.le}function jm(r,t){if(r.limitType==="F")return xi(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new ls(s.field,i)}));const e=r.endAt?new hn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new hn(r.startAt.position,r.startAt.inclusive):null;return xi(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Ni(r,t){const e=r.filters.concat([t]);return new _r(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function ki(r,t,e){return new _r(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function Rs(r,t){return gr(Ut(r),Ut(t))&&r.limitType===t.limitType}function el(r){return`${Fe(Ut(r))}|lt:${r.limitType}`}function en(r){return`Query(target=${(function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map((s=>Jc(s))).join(", ")}]`),vs(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>ln(s))).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>ln(s))).join(",")),`Target(${n})`})(Ut(r))}; limitType=${r.limitType})`}function yr(r,t){return t.isFoundDocument()&&(function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):O.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)})(r,t)&&(function(n,s){for(const i of Zn(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(r,t)&&(function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0})(r,t)&&(function(n,s){return!(n.startAt&&!(function(a,u,l){const d=cu(a,u,l);return a.inclusive?d<=0:d<0})(n.startAt,Zn(n),s)||n.endAt&&!(function(a,u,l){const d=cu(a,u,l);return a.inclusive?d>=0:d>0})(n.endAt,Zn(n),s))})(r,t)}function zm(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function nl(r){return(t,e)=>{let n=!1;for(const s of Zn(r)){const i=$m(s,t,e);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function $m(r,t,e){const n=r.field.isKeyField()?O.comparator(t.key,e.key):(function(i,a,u){const l=a.data.field(i),d=u.data.field(i);return l!==null&&d!==null?ge(l,d):M()})(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return M()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){$e(this.inner,((e,n)=>{for(const[s,i]of n)t(s,i)}))}isEmpty(){return jc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=new st(O.comparator);function Ot(){return Gm}const rl=new st(O.comparator);function Qn(...r){let t=rl;for(const e of r)t=t.insert(e.key,e);return t}function sl(r){let t=rl;return r.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function zt(){return tr()}function il(){return tr()}function tr(){return new Ie((r=>r.toString()),((r,t)=>r.isEqual(t)))}const Km=new st(O.comparator),Qm=new tt(O.comparator);function G(...r){let t=Qm;for(const e of r)t=t.add(e);return t}const Hm=new tt($);function Wm(){return Hm}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ur(t)?"-0":t}}function ol(r){return{integerValue:""+r}}function Xm(r,t){return cm(t)?ol(t):ro(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(){this._=void 0}}function Jm(r,t,e){return r instanceof fr?(function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&to(i)&&(i=eo(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}})(e,t):r instanceof fn?ul(r,t):r instanceof mn?cl(r,t):(function(s,i){const a=al(s,i),u=mu(a)+mu(s.Pe);return Vi(a)&&Vi(s.Pe)?ol(u):ro(s.serializer,u)})(r,t)}function Ym(r,t,e){return r instanceof fn?ul(r,t):r instanceof mn?cl(r,t):e}function al(r,t){return r instanceof mr?(function(n){return Vi(n)||(function(i){return!!i&&"doubleValue"in i})(n)})(t)?t:{integerValue:0}:null}class fr extends bs{}class fn extends bs{constructor(t){super(),this.elements=t}}function ul(r,t){const e=ll(t);for(const n of r.elements)e.some((s=>Kt(s,n)))||e.push(n);return{arrayValue:{values:e}}}class mn extends bs{constructor(t){super(),this.elements=t}}function cl(r,t){let e=ll(t);for(const n of r.elements)e=e.filter((s=>!Kt(s,n)));return{arrayValue:{values:e}}}class mr extends bs{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function mu(r){return rt(r.integerValue||r.doubleValue)}function ll(r){return dr(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(t,e){this.field=t,this.transform=e}}function tp(r,t){return r.field.isEqual(t.field)&&(function(n,s){return n instanceof fn&&s instanceof fn||n instanceof mn&&s instanceof mn?cn(n.elements,s.elements,Kt):n instanceof mr&&s instanceof mr?Kt(n.Pe,s.Pe):n instanceof fr&&s instanceof fr})(r.transform,t.transform)}class ep{constructor(t,e){this.version=t,this.transformResults=e}}class St{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new St}static exists(t){return new St(void 0,t)}static updateTime(t){return new St(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ns(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Ps{}function hl(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Ss(r.key,St.none()):new In(r.key,r.data,St.none());{const e=r.data,n=wt.empty();let s=new tt(it.comparator);for(let i of t.fields)if(!s.has(i)){let a=e.field(i);a===null&&i.length>1&&(i=i.popLast(),a=e.field(i)),a===null?n.delete(i):n.set(i,a),s=s.add(i)}return new te(r.key,n,new xt(s.toArray()),St.none())}}function np(r,t,e){r instanceof In?(function(s,i,a){const u=s.value.clone(),l=gu(s.fieldTransforms,i,a.transformResults);u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(r,t,e):r instanceof te?(function(s,i,a){if(!ns(s.precondition,i))return void i.convertToUnknownDocument(a.version);const u=gu(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(dl(s)),l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(r,t,e):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function er(r,t,e,n){return r instanceof In?(function(i,a,u,l){if(!ns(i.precondition,a))return u;const d=i.value.clone(),f=_u(i.fieldTransforms,l,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(r,t,e,n):r instanceof te?(function(i,a,u,l){if(!ns(i.precondition,a))return u;const d=_u(i.fieldTransforms,l,a),f=a.data;return f.setAll(dl(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(r,t,e,n):(function(i,a,u){return ns(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u})(r,t,e)}function rp(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),i=al(n.transform,s||null);i!=null&&(e===null&&(e=wt.empty()),e.set(n.field,i))}return e||null}function pu(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!(function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&cn(n,s,((i,a)=>tp(i,a)))})(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class In extends Ps{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class te extends Ps{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function dl(r){const t=new Map;return r.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}})),t}function gu(r,t,e){const n=new Map;L(r.length===e.length);for(let s=0;s<e.length;s++){const i=r[s],a=i.transform,u=t.data.field(i.field);n.set(i.field,Ym(a,u,e[s]))}return n}function _u(r,t,e){const n=new Map;for(const s of r){const i=s.transform,a=e.data.field(s.field);n.set(s.field,Jm(i,a,t))}return n}class Ss extends Ps{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fl extends Ps{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&np(i,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=er(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=er(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=il();return this.mutations.forEach((s=>{const i=t.get(s.key),a=i.overlayedDocument;let u=this.applyToLocalView(a,i.mutatedFields);u=e.has(s.key)?null:u;const l=hl(a,u);l!==null&&n.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(B.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),G())}isEqual(t){return this.batchId===t.batchId&&cn(this.mutations,t.mutations,((e,n)=>pu(e,n)))&&cn(this.baseMutations,t.baseMutations,((e,n)=>pu(e,n)))}}class io{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){L(t.mutations.length===n.length);let s=(function(){return Km})();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,n[a].version);return new io(t,e,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht,H;function ip(r){switch(r){default:return M();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function ml(r){if(r===void 0)return Pt("GRPC error has no .code"),S.UNKNOWN;switch(r){case ht.OK:return S.OK;case ht.CANCELLED:return S.CANCELLED;case ht.UNKNOWN:return S.UNKNOWN;case ht.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case ht.INTERNAL:return S.INTERNAL;case ht.UNAVAILABLE:return S.UNAVAILABLE;case ht.UNAUTHENTICATED:return S.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case ht.NOT_FOUND:return S.NOT_FOUND;case ht.ALREADY_EXISTS:return S.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return S.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case ht.ABORTED:return S.ABORTED;case ht.OUT_OF_RANGE:return S.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return S.UNIMPLEMENTED;case ht.DATA_LOSS:return S.DATA_LOSS;default:return M()}}(H=ht||(ht={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap=new Ce([4294967295,4294967295],0);function yu(r){const t=op().encode(r),e=new Rc;return e.update(t),new Uint8Array(e.digest())}function Iu(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Ce([e,n],0),new Ce([s,i],0)]}class ao{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Hn(`Invalid padding: ${e}`);if(n<0)throw new Hn(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Hn(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Hn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Ce.fromNumber(this.Ie)}Ee(t,e,n){let s=t.add(e.multiply(Ce.fromNumber(n)));return s.compare(ap)===1&&(s=new Ce([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=yu(t),[n,s]=Iu(e);for(let i=0;i<this.hashCount;i++){const a=this.Ee(n,s,i);if(!this.de(a))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new ao(i,s,e);return n.forEach((u=>a.insert(u))),a}insert(t){if(this.Ie===0)return;const e=yu(t),[n,s]=Iu(e);for(let i=0;i<this.hashCount;i++){const a=this.Ee(n,s,i);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Hn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,Ir.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Vs(B.min(),s,new st($),Ot(),G())}}class Ir{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Ir(n,e,G(),G(),G())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(t,e,n,s){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=s}}class pl{constructor(t,e){this.targetId=t,this.me=e}}class gl{constructor(t,e,n=dt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Eu{constructor(){this.fe=0,this.ge=vu(),this.pe=dt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=G(),e=G(),n=G();return this.ge.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:M()}})),new Ir(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=vu()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,L(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class up{constructor(t){this.Le=t,this.Be=new Map,this.ke=Ot(),this.qe=Tu(),this.Qe=new st($)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,(e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:M()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach(((n,s)=>{this.ze(s)&&e(s)}))}He(t){const e=t.targetId,n=t.me.count,s=this.Je(e);if(s){const i=s.target;if(hs(i))if(n===0){const a=new O(i.path);this.Ue(e,a,ut.newNoDocument(a,B.min()))}else L(n===1);else{const a=this.Ye(e);if(a!==n){const u=this.Ze(t),l=u?this.Xe(u,t,a):1;if(l!==0){this.je(e);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=e;let a,u;try{a=pe(n).toUint8Array()}catch(l){if(l instanceof zc)return un("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new ao(a,s,i)}catch(l){return un(l instanceof Hn?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.Ie===0?null:u}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let s=0;return n.forEach((i=>{const a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(u)||(this.Ue(e,i,null),s++)})),s}rt(t){const e=new Map;this.Be.forEach(((i,a)=>{const u=this.Je(a);if(u){if(i.current&&hs(u.target)){const l=new O(u.target.path);this.ke.get(l)!==null||this.it(a,l)||this.Ue(a,l,ut.newNoDocument(l,t))}i.be&&(e.set(a,i.ve()),i.Ce())}}));let n=G();this.qe.forEach(((i,a)=>{let u=!0;a.forEachWhile((l=>{const d=this.Je(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)})),u&&(n=n.add(i))})),this.ke.forEach(((i,a)=>a.setReadTime(t)));const s=new Vs(t,e,this.Qe,this.ke,n);return this.ke=Ot(),this.qe=Tu(),this.Qe=new st($),s}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Eu,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new tt($),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||C("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Eu),this.Le.getRemoteKeysForTarget(t).forEach((e=>{this.Ue(t,e,null)}))}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Tu(){return new st(O.comparator)}function vu(){return new st(O.comparator)}const cp={asc:"ASCENDING",desc:"DESCENDING"},lp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hp={and:"AND",or:"OR"};class dp{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Oi(r,t){return r.useProto3Json||vs(t)?t:{value:t}}function pn(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function _l(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function fp(r,t){return pn(r,t.toTimestamp())}function Dt(r){return L(!!r),B.fromTimestamp((function(e){const n=Yt(e);return new ot(n.seconds,n.nanos)})(r))}function uo(r,t){return Mi(r,t).canonicalString()}function Mi(r,t){const e=(function(s){return new Y(["projects",s.projectId,"databases",s.database])})(r).child("documents");return t===void 0?e:e.child(t)}function yl(r){const t=Y.fromString(r);return L(Pl(t)),t}function fs(r,t){return uo(r.databaseId,t.path)}function xe(r,t){const e=yl(t);if(e.get(1)!==r.databaseId.projectId)throw new k(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new k(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new O(Tl(e))}function Il(r,t){return uo(r.databaseId,t)}function El(r){const t=yl(r);return t.length===4?Y.emptyPath():Tl(t)}function Fi(r){return new Y(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Tl(r){return L(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function wu(r,t,e){return{name:fs(r,t),fields:e.value.mapValue.fields}}function mp(r,t,e){const n=xe(r,t.name),s=Dt(t.updateTime),i=t.createTime?Dt(t.createTime):B.min(),a=new wt({mapValue:{fields:t.fields}}),u=ut.newFoundDocument(n,s,i,a);return e&&u.setHasCommittedMutations(),e?u.setHasCommittedMutations():u}function pp(r,t){let e;if("targetChange"in t){t.targetChange;const n=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:M()})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=(function(d,f){return d.useProto3Json?(L(f===void 0||typeof f=="string"),dt.fromBase64String(f||"")):(L(f===void 0||f instanceof Buffer||f instanceof Uint8Array),dt.fromUint8Array(f||new Uint8Array))})(r,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&(function(d){const f=d.code===void 0?S.UNKNOWN:ml(d.code);return new k(f,d.message||"")})(a);e=new gl(n,s,i,u||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=xe(r,n.document.name),i=Dt(n.document.updateTime),a=n.document.createTime?Dt(n.document.createTime):B.min(),u=new wt({mapValue:{fields:n.document.fields}}),l=ut.newFoundDocument(s,i,a,u),d=n.targetIds||[],f=n.removedTargetIds||[];e=new rs(d,f,l.key,l)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=xe(r,n.document),i=n.readTime?Dt(n.readTime):B.min(),a=ut.newNoDocument(s,i),u=n.removedTargetIds||[];e=new rs([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=xe(r,n.document),i=n.removedTargetIds||[];e=new rs([],i,s,null)}else{if(!("filter"in t))return M();{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,a=new sp(s,i),u=n.targetId;e=new pl(u,a)}}return e}function ms(r,t){let e;if(t instanceof In)e={update:wu(r,t.key,t.value)};else if(t instanceof Ss)e={delete:fs(r,t.key)};else if(t instanceof te)e={update:wu(r,t.key,t.data),updateMask:Tp(t.fieldMask)};else{if(!(t instanceof fl))return M();e={verify:fs(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((n=>(function(i,a){const u=a.transform;if(u instanceof fr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof fn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof mn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof mr)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw M()})(0,n)))),t.precondition.isNone||(e.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:fp(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:M()})(r,t.precondition)),e}function Li(r,t){const e=t.currentDocument?(function(i){return i.updateTime!==void 0?St.updateTime(Dt(i.updateTime)):i.exists!==void 0?St.exists(i.exists):St.none()})(t.currentDocument):St.none(),n=t.updateTransforms?t.updateTransforms.map((s=>(function(a,u){let l=null;if("setToServerValue"in u)L(u.setToServerValue==="REQUEST_TIME"),l=new fr;else if("appendMissingElements"in u){const f=u.appendMissingElements.values||[];l=new fn(f)}else if("removeAllFromArray"in u){const f=u.removeAllFromArray.values||[];l=new mn(f)}else"increment"in u?l=new mr(a,u.increment):M();const d=it.fromServerFormat(u.fieldPath);return new Zm(d,l)})(r,s))):[];if(t.update){t.update.name;const s=xe(r,t.update.name),i=new wt({mapValue:{fields:t.update.fields}});if(t.updateMask){const a=(function(l){const d=l.fieldPaths||[];return new xt(d.map((f=>it.fromServerFormat(f))))})(t.updateMask);return new te(s,i,a,e,n)}return new In(s,i,e,n)}if(t.delete){const s=xe(r,t.delete);return new Ss(s,e)}if(t.verify){const s=xe(r,t.verify);return new fl(s,e)}return M()}function gp(r,t){return r&&r.length>0?(L(t!==void 0),r.map((e=>(function(s,i){let a=s.updateTime?Dt(s.updateTime):Dt(i);return a.isEqual(B.min())&&(a=Dt(i)),new ep(a,s.transformResults||[])})(e,t)))):[]}function vl(r,t){return{documents:[Il(r,t.path)]}}function wl(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Il(r,s);const i=(function(d){if(d.length!==0)return bl(Z.create(d,"and"))})(t.filters);i&&(e.structuredQuery.where=i);const a=(function(d){if(d.length!==0)return d.map((f=>(function(I){return{field:nn(I.field),direction:yp(I.dir)}})(f)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=Oi(r,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(t.endAt)),{_t:e,parent:s}}function Al(r){let t=El(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){L(n===1);const f=e.from[0];f.allDescendants?s=f.collectionId:t=t.child(f.collectionId)}let i=[];e.where&&(i=(function(p){const I=Rl(p);return I instanceof Z&&no(I)?I.getFilters():[I]})(e.where));let a=[];e.orderBy&&(a=(function(p){return p.map((I=>(function(V){return new ls(rn(V.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(I)))})(e.orderBy));let u=null;e.limit&&(u=(function(p){let I;return I=typeof p=="object"?p.value:p,vs(I)?null:I})(e.limit));let l=null;e.startAt&&(l=(function(p){const I=!!p.before,b=p.values||[];return new hn(b,I)})(e.startAt));let d=null;return e.endAt&&(d=(function(p){const I=!p.before,b=p.values||[];return new hn(b,I)})(e.endAt)),qm(t,s,a,i,u,"F",l,d)}function _p(r,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Rl(r){return r.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=rn(e.unaryFilter.field);return Q.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=rn(e.unaryFilter.field);return Q.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=rn(e.unaryFilter.field);return Q.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=rn(e.unaryFilter.field);return Q.create(a,"!=",{nullValue:"NULL_VALUE"});default:return M()}})(r):r.fieldFilter!==void 0?(function(e){return Q.create(rn(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}})(e.fieldFilter.op),e.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(e){return Z.create(e.compositeFilter.filters.map((n=>Rl(n))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M()}})(e.compositeFilter.op))})(r):M()}function yp(r){return cp[r]}function Ip(r){return lp[r]}function Ep(r){return hp[r]}function nn(r){return{fieldPath:r.canonicalString()}}function rn(r){return it.fromServerFormat(r.fieldPath)}function bl(r){return r instanceof Q?(function(e){if(e.op==="=="){if(ou(e.value))return{unaryFilter:{field:nn(e.field),op:"IS_NAN"}};if(iu(e.value))return{unaryFilter:{field:nn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ou(e.value))return{unaryFilter:{field:nn(e.field),op:"IS_NOT_NAN"}};if(iu(e.value))return{unaryFilter:{field:nn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nn(e.field),op:Ip(e.op),value:e.value}}})(r):r instanceof Z?(function(e){const n=e.getFilters().map((s=>bl(s)));return n.length===1?n[0]:{compositeFilter:{op:Ep(e.op),filters:n}}})(r):M()}function Tp(r){const t=[];return r.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Pl(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t,e,n,s,i=B.min(),a=B.min(),u=dt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(t){return new Xt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(t){this.ct=t}}function vp(r,t){let e;if(t.document)e=mp(r.ct,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const n=O.fromSegments(t.noDocument.path),s=Be(t.noDocument.readTime);e=ut.newNoDocument(n,s),t.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!t.unknownDocument)return M();{const n=O.fromSegments(t.unknownDocument.path),s=Be(t.unknownDocument.version);e=ut.newUnknownDocument(n,s)}}return t.readTime&&e.setReadTime((function(s){const i=new ot(s[0],s[1]);return B.fromTimestamp(i)})(t.readTime)),e}function Au(r,t){const e=t.key,n={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:ps(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())n.document=(function(i,a){return{name:fs(i,a.key),fields:a.data.value.mapValue.fields,updateTime:pn(i,a.version.toTimestamp()),createTime:pn(i,a.createTime.toTimestamp())}})(r.ct,t);else if(t.isNoDocument())n.noDocument={path:e.path.toArray(),readTime:Le(t.version)};else{if(!t.isUnknownDocument())return M();n.unknownDocument={path:e.path.toArray(),version:Le(t.version)}}return n}function ps(r){const t=r.toTimestamp();return[t.seconds,t.nanoseconds]}function Le(r){const t=r.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Be(r){const t=new ot(r.seconds,r.nanoseconds);return B.fromTimestamp(t)}function Se(r,t){const e=(t.baseMutations||[]).map((i=>Li(r.ct,i)));for(let i=0;i<t.mutations.length-1;++i){const a=t.mutations[i];if(i+1<t.mutations.length&&t.mutations[i+1].transform!==void 0){const u=t.mutations[i+1];a.updateTransforms=u.transform.fieldTransforms,t.mutations.splice(i+1,1),++i}}const n=t.mutations.map((i=>Li(r.ct,i))),s=ot.fromMillis(t.localWriteTimeMs);return new so(t.batchId,s,e,n)}function Wn(r){const t=Be(r.readTime),e=r.lastLimboFreeSnapshotVersion!==void 0?Be(r.lastLimboFreeSnapshotVersion):B.min();let n;return n=(function(i){return i.documents!==void 0})(r.query)?(function(i){return L(i.documents.length===1),Ut(As(El(i.documents[0])))})(r.query):(function(i){return Ut(Al(i))})(r.query),new Xt(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,t,e,dt.fromBase64String(r.resumeToken))}function Vl(r,t){const e=Le(t.snapshotVersion),n=Le(t.lastLimboFreeSnapshotVersion);let s;s=hs(t.target)?vl(r.ct,t.target):wl(r.ct,t.target)._t;const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Fe(t.target),readTime:e,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function Dl(r){const t=Al({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ki(t,t.limit,"L"):t}function mi(r,t){return new oo(t.largestBatchId,Li(r.ct,t.overlayMutation))}function Ru(r,t){const e=t.path.lastSegment();return[r,Vt(t.path.popLast()),e]}function bu(r,t,e,n){return{indexId:r,uid:t,sequenceNumber:e,readTime:Le(n.readTime),documentKey:Vt(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{getBundleMetadata(t,e){return Pu(t).get(e).next((n=>{if(n)return(function(i){return{id:i.bundleId,createTime:Be(i.createTime),version:i.version}})(n)}))}saveBundleMetadata(t,e){return Pu(t).put((function(s){return{bundleId:s.id,createTime:Le(Dt(s.createTime)),version:s.version}})(e))}getNamedQuery(t,e){return Su(t).get(e).next((n=>{if(n)return(function(i){return{name:i.name,query:Dl(i.bundledQuery),readTime:Be(i.readTime)}})(n)}))}saveNamedQuery(t,e){return Su(t).put((function(s){return{name:s.name,readTime:Le(Dt(s.readTime)),bundledQuery:s.bundledQuery}})(e))}}function Pu(r){return ft(r,"bundles")}function Su(r){return ft(r,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(t,e){this.serializer=t,this.userId=e}static lt(t,e){const n=e.uid||"";return new Ds(t,n)}getOverlay(t,e){return Un(t).get(Ru(this.userId,e)).next((n=>n?mi(this.serializer,n):null))}getOverlays(t,e){const n=zt();return A.forEach(e,(s=>this.getOverlay(t,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}saveOverlays(t,e,n){const s=[];return n.forEach(((i,a)=>{const u=new oo(e,a);s.push(this.ht(t,u))})),A.waitFor(s)}removeOverlaysForBatchId(t,e,n){const s=new Set;e.forEach((a=>s.add(Vt(a.getCollectionPath()))));const i=[];return s.forEach((a=>{const u=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);i.push(Un(t).j("collectionPathOverlayIndex",u))})),A.waitFor(i)}getOverlaysForCollection(t,e,n){const s=zt(),i=Vt(e),a=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Un(t).U("collectionPathOverlayIndex",a).next((u=>{for(const l of u){const d=mi(this.serializer,l);s.set(d.getKey(),d)}return s}))}getOverlaysForCollectionGroup(t,e,n,s){const i=zt();let a;const u=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return Un(t).J({index:"collectionGroupOverlayIndex",range:u},((l,d,f)=>{const p=mi(this.serializer,d);i.size()<s||p.largestBatchId===a?(i.set(p.getKey(),p),a=p.largestBatchId):f.done()})).next((()=>i))}ht(t,e){return Un(t).put((function(s,i,a){const[u,l,d]=Ru(i,a.mutation.key);return{userId:i,collectionPath:l,documentId:d,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:ms(s.ct,a.mutation)}})(this.serializer,this.userId,e))}}function Un(r){return ft(r,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{Pt(t){return ft(t,"globals")}getSessionToken(t){return this.Pt(t).get("sessionToken").next((e=>{const n=e==null?void 0:e.value;return n?dt.fromUint8Array(n):dt.EMPTY_BYTE_STRING}))}setSessionToken(t,e){return this.Pt(t).put({name:"sessionToken",value:e.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(){}It(t,e){this.Tt(t,e),e.Et()}Tt(t,e){if("nullValue"in t)this.dt(e,5);else if("booleanValue"in t)this.dt(e,10),e.At(t.booleanValue?1:0);else if("integerValue"in t)this.dt(e,15),e.At(rt(t.integerValue));else if("doubleValue"in t){const n=rt(t.doubleValue);isNaN(n)?this.dt(e,13):(this.dt(e,15),ur(n)?e.At(0):e.At(n))}else if("timestampValue"in t){let n=t.timestampValue;this.dt(e,20),typeof n=="string"&&(n=Yt(n)),e.Rt(`${n.seconds||""}`),e.At(n.nanos||0)}else if("stringValue"in t)this.Vt(t.stringValue,e),this.ft(e);else if("bytesValue"in t)this.dt(e,30),e.gt(pe(t.bytesValue)),this.ft(e);else if("referenceValue"in t)this.yt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.dt(e,45),e.At(n.latitude||0),e.At(n.longitude||0)}else"mapValue"in t?$c(t)?this.dt(e,Number.MAX_SAFE_INTEGER):ws(t)?this.wt(t.mapValue,e):(this.St(t.mapValue,e),this.ft(e)):"arrayValue"in t?(this.bt(t.arrayValue,e),this.ft(e)):M()}Vt(t,e){this.dt(e,25),this.Dt(t,e)}Dt(t,e){e.Rt(t)}St(t,e){const n=t.fields||{};this.dt(e,55);for(const s of Object.keys(n))this.Vt(s,e),this.Tt(n[s],e)}wt(t,e){var n,s;const i=t.fields||{};this.dt(e,53);const a="value",u=((s=(n=i[a].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.length)||0;this.dt(e,15),e.At(rt(u)),this.Vt(a,e),this.Tt(i[a],e)}bt(t,e){const n=t.values||[];this.dt(e,50);for(const s of n)this.Tt(s,e)}yt(t,e){this.dt(e,37),O.fromName(t).path.forEach((n=>{this.dt(e,60),this.Dt(n,e)}))}dt(t,e){t.At(e)}ft(t){t.At(2)}}Ve.vt=new Ve;function Rp(r){if(r===0)return 8;let t=0;return r>>4==0&&(t+=4,r<<=4),r>>6==0&&(t+=2,r<<=2),r>>7==0&&(t+=1),t}function Vu(r){const t=64-(function(n){let s=0;for(let i=0;i<8;++i){const a=Rp(255&n[i]);if(s+=a,a!==8)break}return s})(r);return Math.ceil(t/8)}class bp{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Ft(n.value),n=e.next();this.Mt()}xt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Ot(n.value),n=e.next();this.Nt()}Lt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Ft(n);else if(n<2048)this.Ft(960|n>>>6),this.Ft(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Ft(480|n>>>12),this.Ft(128|63&n>>>6),this.Ft(128|63&n);else{const s=e.codePointAt(0);this.Ft(240|s>>>18),this.Ft(128|63&s>>>12),this.Ft(128|63&s>>>6),this.Ft(128|63&s)}}this.Mt()}Bt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Ot(n);else if(n<2048)this.Ot(960|n>>>6),this.Ot(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Ot(480|n>>>12),this.Ot(128|63&n>>>6),this.Ot(128|63&n);else{const s=e.codePointAt(0);this.Ot(240|s>>>18),this.Ot(128|63&s>>>12),this.Ot(128|63&s>>>6),this.Ot(128|63&s)}}this.Nt()}kt(t){const e=this.qt(t),n=Vu(e);this.Qt(1+n),this.buffer[this.position++]=255&n;for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=255&e[s]}Kt(t){const e=this.qt(t),n=Vu(e);this.Qt(1+n),this.buffer[this.position++]=~(255&n);for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=~(255&e[s])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(t){this.Qt(t.length),this.buffer.set(t,this.position),this.position+=t.length}zt(){return this.buffer.slice(0,this.position)}qt(t){const e=(function(i){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,i,!1),new Uint8Array(a.buffer)})(t),n=(128&e[0])!=0;e[0]^=n?255:128;for(let s=1;s<e.length;++s)e[s]^=n?255:0;return e}Ft(t){const e=255&t;e===0?(this.Ut(0),this.Ut(255)):e===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}Ot(t){const e=255&t;e===0?(this.Gt(0),this.Gt(255)):e===255?(this.Gt(255),this.Gt(0)):this.Gt(t)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(t){this.Qt(1),this.buffer[this.position++]=t}Gt(t){this.Qt(1),this.buffer[this.position++]=~t}Qt(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class Pp{constructor(t){this.jt=t}gt(t){this.jt.Ct(t)}Rt(t){this.jt.Lt(t)}At(t){this.jt.kt(t)}Et(){this.jt.$t()}}class Sp{constructor(t){this.jt=t}gt(t){this.jt.xt(t)}Rt(t){this.jt.Bt(t)}At(t){this.jt.Kt(t)}Et(){this.jt.Wt()}}class qn{constructor(){this.jt=new bp,this.Ht=new Pp(this.jt),this.Jt=new Sp(this.jt)}seed(t){this.jt.seed(t)}Yt(t){return t===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t,e,n,s){this.indexId=t,this.documentKey=e,this.arrayValue=n,this.directionalValue=s}Zt(){const t=this.directionalValue.length,e=t===0||this.directionalValue[t-1]===255?t+1:t,n=new Uint8Array(e);return n.set(this.directionalValue,0),e!==t?n.set([0],this.directionalValue.length):++n[n.length-1],new De(this.indexId,this.documentKey,this.arrayValue,n)}}function ie(r,t){let e=r.indexId-t.indexId;return e!==0?e:(e=Du(r.arrayValue,t.arrayValue),e!==0?e:(e=Du(r.directionalValue,t.directionalValue),e!==0?e:O.comparator(r.documentKey,t.documentKey)))}function Du(r,t){for(let e=0;e<r.length&&e<t.length;++e){const n=r[e]-t[e];if(n!==0)return n}return r.length-t.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(t){this.Xt=new tt(((e,n)=>it.comparator(e.field,n.field))),this.collectionId=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment(),this.en=t.orderBy,this.tn=[];for(const e of t.filters){const n=e;n.isInequality()?this.Xt=this.Xt.add(n):this.tn.push(n)}}get nn(){return this.Xt.size>1}rn(t){if(L(t.collectionGroup===this.collectionId),this.nn)return!1;const e=bi(t);if(e!==void 0&&!this.sn(e))return!1;const n=be(t);let s=new Set,i=0,a=0;for(;i<n.length&&this.sn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Xt.size>0){const u=this.Xt.getIterator().getNext();if(!s.has(u.field.canonicalString())){const l=n[i];if(!this.on(u,l)||!this._n(this.en[a++],l))return!1}++i}for(;i<n.length;++i){const u=n[i];if(a>=this.en.length||!this._n(this.en[a++],u))return!1}return!0}an(){if(this.nn)return null;let t=new tt(it.comparator);const e=[];for(const n of this.tn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")e.push(new Yr(n.field,2));else{if(t.has(n.field))continue;t=t.add(n.field),e.push(new Yr(n.field,0))}for(const n of this.en)n.field.isKeyField()||t.has(n.field)||(t=t.add(n.field),e.push(new Yr(n.field,n.dir==="asc"?0:1)));return new cs(cs.UNKNOWN_ID,this.collectionId,e,ar.empty())}sn(t){for(const e of this.tn)if(this.on(e,t))return!0;return!1}on(t,e){if(t===void 0||!t.field.isEqual(e.fieldPath))return!1;const n=t.op==="array-contains"||t.op==="array-contains-any";return e.kind===2===n}_n(t,e){return!!t.field.isEqual(e.fieldPath)&&(e.kind===0&&t.dir==="asc"||e.kind===1&&t.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(r){var t,e;if(L(r instanceof Q||r instanceof Z),r instanceof Q){if(r instanceof Zc){const s=((e=(t=r.value.arrayValue)===null||t===void 0?void 0:t.values)===null||e===void 0?void 0:e.map((i=>Q.create(r.field,"==",i))))||[];return Z.create(s,"or")}return r}const n=r.filters.map((s=>Cl(s)));return Z.create(n,r.op)}function Vp(r){if(r.getFilters().length===0)return[];const t=qi(Cl(r));return L(xl(t)),Bi(t)||Ui(t)?[t]:t.getFilters()}function Bi(r){return r instanceof Q}function Ui(r){return r instanceof Z&&no(r)}function xl(r){return Bi(r)||Ui(r)||(function(e){if(e instanceof Z&&Di(e)){for(const n of e.getFilters())if(!Bi(n)&&!Ui(n))return!1;return!0}return!1})(r)}function qi(r){if(L(r instanceof Q||r instanceof Z),r instanceof Q)return r;if(r.filters.length===1)return qi(r.filters[0]);const t=r.filters.map((n=>qi(n)));let e=Z.create(t,r.op);return e=gs(e),xl(e)?e:(L(e instanceof Z),L(dn(e)),L(e.filters.length>1),e.filters.reduce(((n,s)=>co(n,s))))}function co(r,t){let e;return L(r instanceof Q||r instanceof Z),L(t instanceof Q||t instanceof Z),e=r instanceof Q?t instanceof Q?(function(s,i){return Z.create([s,i],"and")})(r,t):xu(r,t):t instanceof Q?xu(t,r):(function(s,i){if(L(s.filters.length>0&&i.filters.length>0),dn(s)&&dn(i))return Xc(s,i.getFilters());const a=Di(s)?s:i,u=Di(s)?i:s,l=a.filters.map((d=>co(d,u)));return Z.create(l,"or")})(r,t),gs(e)}function xu(r,t){if(dn(t))return Xc(t,r.getFilters());{const e=t.filters.map((n=>co(r,n)));return Z.create(e,"or")}}function gs(r){if(L(r instanceof Q||r instanceof Z),r instanceof Q)return r;const t=r.getFilters();if(t.length===1)return gs(t[0]);if(Hc(r))return r;const e=t.map((s=>gs(s))),n=[];return e.forEach((s=>{s instanceof Q?n.push(s):s instanceof Z&&(s.op===r.op?n.push(...s.filters):n.push(s))})),n.length===1?n[0]:Z.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(){this.un=new lo}addToCollectionParentIndex(t,e){return this.un.add(e),A.resolve()}getCollectionParents(t,e){return A.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return A.resolve()}deleteFieldIndex(t,e){return A.resolve()}deleteAllFieldIndexes(t){return A.resolve()}createTargetIndexes(t,e){return A.resolve()}getDocumentsMatchingTarget(t,e){return A.resolve(null)}getIndexType(t,e){return A.resolve(0)}getFieldIndexes(t,e){return A.resolve([])}getNextCollectionGroupToUpdate(t){return A.resolve(null)}getMinOffset(t,e){return A.resolve(Lt.min())}getMinOffsetFromCollectionGroup(t,e){return A.resolve(Lt.min())}updateCollectionGroup(t,e,n){return A.resolve()}updateIndexEntries(t,e){return A.resolve()}}class lo{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new tt(Y.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new tt(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=new Uint8Array(0);class Cp{constructor(t,e){this.databaseId=e,this.cn=new lo,this.ln=new Ie((n=>Fe(n)),((n,s)=>gr(n,s))),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.cn.has(e)){const n=e.lastSegment(),s=e.popLast();t.addOnCommittedListener((()=>{this.cn.add(e)}));const i={collectionId:n,parent:Vt(s)};return Nu(t).put(i)}return A.resolve()}getCollectionParents(t,e){const n=[],s=IDBKeyRange.bound([e,""],[Nc(e),""],!1,!0);return Nu(t).U(s).next((i=>{for(const a of i){if(a.collectionId!==e)break;n.push(jt(a.parent))}return n}))}addFieldIndex(t,e){const n=jn(t),s=(function(u){return{indexId:u.indexId,collectionGroup:u.collectionGroup,fields:u.fields.map((l=>[l.fieldPath.canonicalString(),l.kind]))}})(e);delete s.indexId;const i=n.add(s);if(e.indexState){const a=Ye(t);return i.next((u=>{a.put(bu(u,this.uid,e.indexState.sequenceNumber,e.indexState.offset))}))}return i.next()}deleteFieldIndex(t,e){const n=jn(t),s=Ye(t),i=Je(t);return n.delete(e.indexId).next((()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))))}deleteAllFieldIndexes(t){const e=jn(t),n=Je(t),s=Ye(t);return e.j().next((()=>n.j())).next((()=>s.j()))}createTargetIndexes(t,e){return A.forEach(this.hn(e),(n=>this.getIndexType(t,n).next((s=>{if(s===0||s===1){const i=new Cu(n).an();if(i!=null)return this.addFieldIndex(t,i)}}))))}getDocumentsMatchingTarget(t,e){const n=Je(t);let s=!0;const i=new Map;return A.forEach(this.hn(e),(a=>this.Pn(t,a).next((u=>{s&&(s=!!u),i.set(a,u)})))).next((()=>{if(s){let a=G();const u=[];return A.forEach(i,((l,d)=>{C("IndexedDbIndexManager",`Using index ${(function(F){return`id=${F.indexId}|cg=${F.collectionGroup}|f=${F.fields.map((q=>`${q.fieldPath}:${q.kind}`)).join(",")}`})(l)} to execute ${Fe(e)}`);const f=(function(F,q){const J=bi(q);if(J===void 0)return null;for(const K of ds(F,J.fieldPath))switch(K.op){case"array-contains-any":return K.value.arrayValue.values||[];case"array-contains":return[K.value]}return null})(d,l),p=(function(F,q){const J=new Map;for(const K of be(q))for(const E of ds(F,K.fieldPath))switch(E.op){case"==":case"in":J.set(K.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return J.set(K.fieldPath.canonicalString(),E.value),Array.from(J.values())}return null})(d,l),I=(function(F,q){const J=[];let K=!0;for(const E of be(q)){const g=E.kind===0?hu(F,E.fieldPath,F.startAt):du(F,E.fieldPath,F.startAt);J.push(g.value),K&&(K=g.inclusive)}return new hn(J,K)})(d,l),b=(function(F,q){const J=[];let K=!0;for(const E of be(q)){const g=E.kind===0?du(F,E.fieldPath,F.endAt):hu(F,E.fieldPath,F.endAt);J.push(g.value),K&&(K=g.inclusive)}return new hn(J,K)})(d,l),V=this.In(l,d,I),x=this.In(l,d,b),D=this.Tn(l,d,p),z=this.En(l.indexId,f,V,I.inclusive,x,b.inclusive,D);return A.forEach(z,(U=>n.G(U,e.limit).next((F=>{F.forEach((q=>{const J=O.fromSegments(q.documentKey);a.has(J)||(a=a.add(J),u.push(J))}))}))))})).next((()=>u))}return A.resolve(null)}))}hn(t){let e=this.ln.get(t);return e||(t.filters.length===0?e=[t]:e=Vp(Z.create(t.filters,"and")).map((n=>xi(t.path,t.collectionGroup,t.orderBy,n.getFilters(),t.limit,t.startAt,t.endAt))),this.ln.set(t,e),e)}En(t,e,n,s,i,a,u){const l=(e!=null?e.length:1)*Math.max(n.length,i.length),d=l/(e!=null?e.length:1),f=[];for(let p=0;p<l;++p){const I=e?this.dn(e[p/d]):Gr,b=this.An(t,I,n[p%d],s),V=this.Rn(t,I,i[p%d],a),x=u.map((D=>this.An(t,I,D,!0)));f.push(...this.createRange(b,V,x))}return f}An(t,e,n,s){const i=new De(t,O.empty(),e,n);return s?i:i.Zt()}Rn(t,e,n,s){const i=new De(t,O.empty(),e,n);return s?i.Zt():i}Pn(t,e){const n=new Cu(e),s=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,s).next((i=>{let a=null;for(const u of i)n.rn(u)&&(!a||u.fields.length>a.fields.length)&&(a=u);return a}))}getIndexType(t,e){let n=2;const s=this.hn(e);return A.forEach(s,(i=>this.Pn(t,i).next((a=>{a?n!==0&&a.fields.length<(function(l){let d=new tt(it.comparator),f=!1;for(const p of l.filters)for(const I of p.getFlattenedFilters())I.field.isKeyField()||(I.op==="array-contains"||I.op==="array-contains-any"?f=!0:d=d.add(I.field));for(const p of l.orderBy)p.field.isKeyField()||(d=d.add(p.field));return d.size+(f?1:0)})(i)&&(n=1):n=0})))).next((()=>(function(a){return a.limit!==null})(e)&&s.length>1&&n===2?1:n))}Vn(t,e){const n=new qn;for(const s of be(t)){const i=e.data.field(s.fieldPath);if(i==null)return null;const a=n.Yt(s.kind);Ve.vt.It(i,a)}return n.zt()}dn(t){const e=new qn;return Ve.vt.It(t,e.Yt(0)),e.zt()}mn(t,e){const n=new qn;return Ve.vt.It(hr(this.databaseId,e),n.Yt((function(i){const a=be(i);return a.length===0?0:a[a.length-1].kind})(t))),n.zt()}Tn(t,e,n){if(n===null)return[];let s=[];s.push(new qn);let i=0;for(const a of be(t)){const u=n[i++];for(const l of s)if(this.fn(e,a.fieldPath)&&dr(u))s=this.gn(s,a,u);else{const d=l.Yt(a.kind);Ve.vt.It(u,d)}}return this.pn(s)}In(t,e,n){return this.Tn(t,e,n.position)}pn(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].zt();return e}gn(t,e,n){const s=[...t],i=[];for(const a of n.arrayValue.values||[])for(const u of s){const l=new qn;l.seed(u.zt()),Ve.vt.It(a,l.Yt(e.kind)),i.push(l)}return i}fn(t,e){return!!t.filters.find((n=>n instanceof Q&&n.field.isEqual(e)&&(n.op==="in"||n.op==="not-in")))}getFieldIndexes(t,e){const n=jn(t),s=Ye(t);return(e?n.U("collectionGroupIndex",IDBKeyRange.bound(e,e)):n.U()).next((i=>{const a=[];return A.forEach(i,(u=>s.get([u.indexId,this.uid]).next((l=>{a.push((function(f,p){const I=p?new ar(p.sequenceNumber,new Lt(Be(p.readTime),new O(jt(p.documentKey)),p.largestBatchId)):ar.empty(),b=f.fields.map((([V,x])=>new Yr(it.fromServerFormat(V),x)));return new cs(f.indexId,f.collectionGroup,b,I)})(u,l))})))).next((()=>a))}))}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next((e=>e.length===0?null:(e.sort(((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:$(n.collectionGroup,s.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(t,e,n){const s=jn(t),i=Ye(t);return this.yn(t).next((a=>s.U("collectionGroupIndex",IDBKeyRange.bound(e,e)).next((u=>A.forEach(u,(l=>i.put(bu(l.indexId,this.uid,a,n))))))))}updateIndexEntries(t,e){const n=new Map;return A.forEach(e,((s,i)=>{const a=n.get(s.collectionGroup);return(a?A.resolve(a):this.getFieldIndexes(t,s.collectionGroup)).next((u=>(n.set(s.collectionGroup,u),A.forEach(u,(l=>this.wn(t,s,l).next((d=>{const f=this.Sn(i,l);return d.isEqual(f)?A.resolve():this.bn(t,i,l,d,f)})))))))}))}Dn(t,e,n,s){return Je(t).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.mn(n,e.key),documentKey:e.key.path.toArray()})}vn(t,e,n,s){return Je(t).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.mn(n,e.key),e.key.path.toArray()])}wn(t,e,n){const s=Je(t);let i=new tt(ie);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.mn(n,e)])},((a,u)=>{i=i.add(new De(n.indexId,e,u.arrayValue,u.directionalValue))})).next((()=>i))}Sn(t,e){let n=new tt(ie);const s=this.Vn(e,t);if(s==null)return n;const i=bi(e);if(i!=null){const a=t.data.field(i.fieldPath);if(dr(a))for(const u of a.arrayValue.values||[])n=n.add(new De(e.indexId,t.key,this.dn(u),s))}else n=n.add(new De(e.indexId,t.key,Gr,s));return n}bn(t,e,n,s,i){C("IndexedDbIndexManager","Updating index entries for document '%s'",e.key);const a=[];return(function(l,d,f,p,I){const b=l.getIterator(),V=d.getIterator();let x=Xe(b),D=Xe(V);for(;x||D;){let z=!1,U=!1;if(x&&D){const F=f(x,D);F<0?U=!0:F>0&&(z=!0)}else x!=null?U=!0:z=!0;z?(p(D),D=Xe(V)):U?(I(x),x=Xe(b)):(x=Xe(b),D=Xe(V))}})(s,i,ie,(u=>{a.push(this.Dn(t,e,n,u))}),(u=>{a.push(this.vn(t,e,n,u))})),A.waitFor(a)}yn(t){let e=1;return Ye(t).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((n,s,i)=>{i.done(),e=s.sequenceNumber+1})).next((()=>e))}createRange(t,e,n){n=n.sort(((a,u)=>ie(a,u))).filter(((a,u,l)=>!u||ie(a,l[u-1])!==0));const s=[];s.push(t);for(const a of n){const u=ie(a,t),l=ie(a,e);if(u===0)s[0]=t.Zt();else if(u>0&&l<0)s.push(a),s.push(a.Zt());else if(l>0)break}s.push(e);const i=[];for(let a=0;a<s.length;a+=2){if(this.Cn(s[a],s[a+1]))return[];const u=[s[a].indexId,this.uid,s[a].arrayValue,s[a].directionalValue,Gr,[]],l=[s[a+1].indexId,this.uid,s[a+1].arrayValue,s[a+1].directionalValue,Gr,[]];i.push(IDBKeyRange.bound(u,l))}return i}Cn(t,e){return ie(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(ku)}getMinOffset(t,e){return A.mapArray(this.hn(e),(n=>this.Pn(t,n).next((s=>s||M())))).next(ku)}}function Nu(r){return ft(r,"collectionParents")}function Je(r){return ft(r,"indexEntries")}function jn(r){return ft(r,"indexConfiguration")}function Ye(r){return ft(r,"indexState")}function ku(r){L(r.length!==0);let t=r[0].indexState.offset,e=t.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;Ji(s,t)<0&&(t=s),e<s.largestBatchId&&(e=s.largestBatchId)}return new Lt(t.readTime,t.documentKey,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ct{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Ct(t,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(r,t,e){const n=r.store("mutations"),s=r.store("documentMutations"),i=[],a=IDBKeyRange.only(e.batchId);let u=0;const l=n.J({range:a},((f,p,I)=>(u++,I.delete())));i.push(l.next((()=>{L(u===1)})));const d=[];for(const f of e.mutations){const p=Lc(t,f.key.path,e.batchId);i.push(s.delete(p)),d.push(f.key)}return A.waitFor(i).next((()=>d))}function _s(r){if(!r)return 0;let t;if(r.document)t=r.document;else if(r.unknownDocument)t=r.unknownDocument;else{if(!r.noDocument)throw M();t=r.noDocument}return JSON.stringify(t).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ct.DEFAULT_COLLECTION_PERCENTILE=10,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ct.DEFAULT=new Ct(41943040,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ct.DISABLED=new Ct(-1,0,0);class Cs{constructor(t,e,n,s){this.userId=t,this.serializer=e,this.indexManager=n,this.referenceDelegate=s,this.Fn={}}static lt(t,e,n,s){L(t.uid!=="");const i=t.isAuthenticated()?t.uid:"";return new Cs(i,e,n,s)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return oe(t).J({index:"userMutationsIndex",range:n},((s,i,a)=>{e=!1,a.done()})).next((()=>e))}addMutationBatch(t,e,n,s){const i=sn(t),a=oe(t);return a.add({}).next((u=>{L(typeof u=="number");const l=new so(u,e,n,s),d=(function(b,V,x){const D=x.baseMutations.map((U=>ms(b.ct,U))),z=x.mutations.map((U=>ms(b.ct,U)));return{userId:V,batchId:x.batchId,localWriteTimeMs:x.localWriteTime.toMillis(),baseMutations:D,mutations:z}})(this.serializer,this.userId,l),f=[];let p=new tt(((I,b)=>$(I.canonicalString(),b.canonicalString())));for(const I of s){const b=Lc(this.userId,I.key.path,u);p=p.add(I.key.path.popLast()),f.push(a.put(d)),f.push(i.put(b,hm))}return p.forEach((I=>{f.push(this.indexManager.addToCollectionParentIndex(t,I))})),t.addOnCommittedListener((()=>{this.Fn[u]=l.keys()})),A.waitFor(f).next((()=>l))}))}lookupMutationBatch(t,e){return oe(t).get(e).next((n=>n?(L(n.userId===this.userId),Se(this.serializer,n)):null))}Mn(t,e){return this.Fn[e]?A.resolve(this.Fn[e]):this.lookupMutationBatch(t,e).next((n=>{if(n){const s=n.keys();return this.Fn[e]=s,s}return null}))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return oe(t).J({index:"userMutationsIndex",range:s},((a,u,l)=>{u.userId===this.userId&&(L(u.batchId>=n),i=Se(this.serializer,u)),l.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return oe(t).J({index:"userMutationsIndex",range:e,reverse:!0},((s,i,a)=>{n=i.batchId,a.done()})).next((()=>n))}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return oe(t).U("userMutationsIndex",e).next((n=>n.map((s=>Se(this.serializer,s)))))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=Zr(this.userId,e.path),s=IDBKeyRange.lowerBound(n),i=[];return sn(t).J({range:s},((a,u,l)=>{const[d,f,p]=a,I=jt(f);if(d===this.userId&&e.path.isEqual(I))return oe(t).get(p).next((b=>{if(!b)throw M();L(b.userId===this.userId),i.push(Se(this.serializer,b))}));l.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new tt($);const s=[];return e.forEach((i=>{const a=Zr(this.userId,i.path),u=IDBKeyRange.lowerBound(a),l=sn(t).J({range:u},((d,f,p)=>{const[I,b,V]=d,x=jt(b);I===this.userId&&i.path.isEqual(x)?n=n.add(V):p.done()}));s.push(l)})),A.waitFor(s).next((()=>this.xn(t,n)))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1,i=Zr(this.userId,n),a=IDBKeyRange.lowerBound(i);let u=new tt($);return sn(t).J({range:a},((l,d,f)=>{const[p,I,b]=l,V=jt(I);p===this.userId&&n.isPrefixOf(V)?V.length===s&&(u=u.add(b)):f.done()})).next((()=>this.xn(t,u)))}xn(t,e){const n=[],s=[];return e.forEach((i=>{s.push(oe(t).get(i).next((a=>{if(a===null)throw M();L(a.userId===this.userId),n.push(Se(this.serializer,a))})))})),A.waitFor(s).next((()=>n))}removeMutationBatch(t,e){return Nl(t._e,this.userId,e).next((n=>(t.addOnCommittedListener((()=>{this.On(e.batchId)})),A.forEach(n,(s=>this.referenceDelegate.markPotentiallyOrphaned(t,s))))))}On(t){delete this.Fn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next((e=>{if(!e)return A.resolve();const n=IDBKeyRange.lowerBound((function(a){return[a]})(this.userId)),s=[];return sn(t).J({range:n},((i,a,u)=>{if(i[0]===this.userId){const l=jt(i[1]);s.push(l)}else u.done()})).next((()=>{L(s.length===0)}))}))}containsKey(t,e){return kl(t,this.userId,e)}Nn(t){return Ol(t).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function kl(r,t,e){const n=Zr(t,e.path),s=n[1],i=IDBKeyRange.lowerBound(n);let a=!1;return sn(r).J({range:i,H:!0},((u,l,d)=>{const[f,p,I]=u;f===t&&p===s&&(a=!0),d.done()})).next((()=>a))}function oe(r){return ft(r,"mutations")}function sn(r){return ft(r,"documentMutations")}function Ol(r){return ft(r,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ue(0)}static kn(){return new Ue(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.qn(t).next((e=>{const n=new Ue(e.highestTargetId);return e.highestTargetId=n.next(),this.Qn(t,e).next((()=>e.highestTargetId))}))}getLastRemoteSnapshotVersion(t){return this.qn(t).next((e=>B.fromTimestamp(new ot(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(t){return this.qn(t).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(t,e,n){return this.qn(t).next((s=>(s.highestListenSequenceNumber=e,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),e>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=e),this.Qn(t,s))))}addTargetData(t,e){return this.Kn(t,e).next((()=>this.qn(t).next((n=>(n.targetCount+=1,this.$n(e,n),this.Qn(t,n))))))}updateTargetData(t,e){return this.Kn(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next((()=>Ze(t).delete(e.targetId))).next((()=>this.qn(t))).next((n=>(L(n.targetCount>0),n.targetCount-=1,this.Qn(t,n))))}removeTargets(t,e,n){let s=0;const i=[];return Ze(t).J(((a,u)=>{const l=Wn(u);l.sequenceNumber<=e&&n.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(t,l)))})).next((()=>A.waitFor(i))).next((()=>s))}forEachTarget(t,e){return Ze(t).J(((n,s)=>{const i=Wn(s);e(i)}))}qn(t){return Mu(t).get("targetGlobalKey").next((e=>(L(e!==null),e)))}Qn(t,e){return Mu(t).put("targetGlobalKey",e)}Kn(t,e){return Ze(t).put(Vl(this.serializer,e))}$n(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.qn(t).next((e=>e.targetCount))}getTargetData(t,e){const n=Fe(e),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Ze(t).J({range:s,index:"queryTargetsIndex"},((a,u,l)=>{const d=Wn(u);gr(e,d.target)&&(i=d,l.done())})).next((()=>i))}addMatchingKeys(t,e,n){const s=[],i=ae(t);return e.forEach((a=>{const u=Vt(a.path);s.push(i.put({targetId:n,path:u})),s.push(this.referenceDelegate.addReference(t,n,a))})),A.waitFor(s)}removeMatchingKeys(t,e,n){const s=ae(t);return A.forEach(e,(i=>{const a=Vt(i.path);return A.waitFor([s.delete([n,a]),this.referenceDelegate.removeReference(t,n,i)])}))}removeMatchingKeysForTargetId(t,e){const n=ae(t),s=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),s=ae(t);let i=G();return s.J({range:n,H:!0},((a,u,l)=>{const d=jt(a[1]),f=new O(d);i=i.add(f)})).next((()=>i))}containsKey(t,e){const n=Vt(e.path),s=IDBKeyRange.bound([n],[Nc(n)],!1,!0);let i=0;return ae(t).J({index:"documentTargetsIndex",H:!0,range:s},(([a,u],l,d)=>{a!==0&&(i++,d.done())})).next((()=>i>0))}ot(t,e){return Ze(t).get(e).next((n=>n?Wn(n):null))}}function Ze(r){return ft(r,"targets")}function Mu(r){return ft(r,"targetGlobal")}function ae(r){return ft(r,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu([r,t],[e,n]){const s=$(r,e);return s===0?$(t,n):s}class Np{constructor(t){this.Un=t,this.buffer=new tt(Fu),this.Wn=0}Gn(){return++this.Wn}zn(t){const e=[t,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();Fu(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class kp{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(t){C("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ye(e)?C("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await ze(e)}await this.Hn(3e5)}))}}class Op{constructor(t,e){this.Jn=t,this.params=e}calculateTargetCount(t,e){return this.Jn.Yn(t).next((n=>Math.floor(e/100*n)))}nthSequenceNumber(t,e){if(e===0)return A.resolve(Bt.oe);const n=new Np(e);return this.Jn.forEachTarget(t,(s=>n.zn(s.sequenceNumber))).next((()=>this.Jn.Zn(t,(s=>n.zn(s))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.Jn.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Jn.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(C("LruGarbageCollector","Garbage collection skipped; disabled"),A.resolve(Ou)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(C("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ou):this.Xn(t,e)))}getCacheSize(t){return this.Jn.getCacheSize(t)}Xn(t,e){let n,s,i,a,u,l,d;const f=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(C("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(t,s)))).next((p=>(n=p,u=Date.now(),this.removeTargets(t,n,e)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(t,n)))).next((p=>(d=Date.now(),tn()<=W.DEBUG&&C("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${i} targets in `+(l-u)+`ms
	Removed ${p} documents in `+(d-l)+`ms
Total Duration: ${d-f}ms`),A.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function Mp(r,t){return new Op(r,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(t,e){this.db=t,this.garbageCollector=Mp(this,e)}Yn(t){const e=this.er(t);return this.db.getTargetCache().getTargetCount(t).next((n=>e.next((s=>n+s))))}er(t){let e=0;return this.Zn(t,(n=>{e++})).next((()=>e))}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}Zn(t,e){return this.tr(t,((n,s)=>e(s)))}addReference(t,e,n){return Kr(t,n)}removeReference(t,e,n){return Kr(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return Kr(t,e)}nr(t,e){return(function(s,i){let a=!1;return Ol(s).Y((u=>kl(s,u,i).next((l=>(l&&(a=!0),A.resolve(!l)))))).next((()=>a))})(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.tr(t,((a,u)=>{if(u<=e){const l=this.nr(t,a).next((d=>{if(!d)return i++,n.getEntry(t,a).next((()=>(n.removeEntry(a,B.min()),ae(t).delete((function(p){return[0,Vt(p.path)]})(a)))))}));s.push(l)}})).next((()=>A.waitFor(s))).next((()=>n.apply(t))).next((()=>i))}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return Kr(t,e)}tr(t,e){const n=ae(t);let s,i=Bt.oe;return n.J({index:"documentTargetsIndex"},(([a,u],{path:l,sequenceNumber:d})=>{a===0?(i!==Bt.oe&&e(new O(jt(s)),i),i=d,s=l):i=Bt.oe})).next((()=>{i!==Bt.oe&&e(new O(jt(s)),i)}))}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function Kr(r,t){return ae(r).put((function(n,s){return{targetId:0,path:Vt(n.path),sequenceNumber:s}})(t,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(){this.changes=new Ie((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ut.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?A.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return Ae(t).put(n)}removeEntry(t,e,n){return Ae(t).delete((function(i,a){const u=i.path.toArray();return[u.slice(0,u.length-2),u[u.length-2],ps(a),u[u.length-1]]})(e,n))}updateMetadata(t,e){return this.getMetadata(t).next((n=>(n.byteSize+=e,this.rr(t,n))))}getEntry(t,e){let n=ut.newInvalidDocument(e);return Ae(t).J({index:"documentKeyIndex",range:IDBKeyRange.only(zn(e))},((s,i)=>{n=this.ir(e,i)})).next((()=>n))}sr(t,e){let n={size:0,document:ut.newInvalidDocument(e)};return Ae(t).J({index:"documentKeyIndex",range:IDBKeyRange.only(zn(e))},((s,i)=>{n={document:this.ir(e,i),size:_s(i)}})).next((()=>n))}getEntries(t,e){let n=Ot();return this._r(t,e,((s,i)=>{const a=this.ir(s,i);n=n.insert(s,a)})).next((()=>n))}ar(t,e){let n=Ot(),s=new st(O.comparator);return this._r(t,e,((i,a)=>{const u=this.ir(i,a);n=n.insert(i,u),s=s.insert(i,_s(a))})).next((()=>({documents:n,ur:s})))}_r(t,e,n){if(e.isEmpty())return A.resolve();let s=new tt(Uu);e.forEach((l=>s=s.add(l)));const i=IDBKeyRange.bound(zn(s.first()),zn(s.last())),a=s.getIterator();let u=a.getNext();return Ae(t).J({index:"documentKeyIndex",range:i},((l,d,f)=>{const p=O.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;u&&Uu(u,p)<0;)n(u,null),u=a.getNext();u&&u.isEqual(p)&&(n(u,d),u=a.hasNext()?a.getNext():null),u?f.$(zn(u)):f.done()})).next((()=>{for(;u;)n(u,null),u=a.hasNext()?a.getNext():null}))}getDocumentsMatchingQuery(t,e,n,s,i){const a=e.path,u=[a.popLast().toArray(),a.lastSegment(),ps(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],l=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ae(t).U(IDBKeyRange.bound(u,l,!0)).next((d=>{i==null||i.incrementDocumentReadCount(d.length);let f=Ot();for(const p of d){const I=this.ir(O.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);I.isFoundDocument()&&(yr(e,I)||s.has(I.key))&&(f=f.insert(I.key,I))}return f}))}getAllFromCollectionGroup(t,e,n,s){let i=Ot();const a=Bu(e,n),u=Bu(e,Lt.max());return Ae(t).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(a,u,!0)},((l,d,f)=>{const p=this.ir(O.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);i=i.insert(p.key,p),i.size===s&&f.done()})).next((()=>i))}newChangeBuffer(t){return new Bp(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next((e=>e.byteSize))}getMetadata(t){return Lu(t).get("remoteDocumentGlobalKey").next((e=>(L(!!e),e)))}rr(t,e){return Lu(t).put("remoteDocumentGlobalKey",e)}ir(t,e){if(e){const n=vp(this.serializer,e);if(!(n.isNoDocument()&&n.version.isEqual(B.min())))return n}return ut.newInvalidDocument(t)}}function Fl(r){return new Lp(r)}class Bp extends Ml{constructor(t,e){super(),this.cr=t,this.trackRemovals=e,this.lr=new Ie((n=>n.toString()),((n,s)=>n.isEqual(s)))}applyChanges(t){const e=[];let n=0,s=new tt(((i,a)=>$(i.canonicalString(),a.canonicalString())));return this.changes.forEach(((i,a)=>{const u=this.lr.get(i);if(e.push(this.cr.removeEntry(t,i,u.readTime)),a.isValidDocument()){const l=Au(this.cr.serializer,a);s=s.add(i.path.popLast());const d=_s(l);n+=d-u.size,e.push(this.cr.addEntry(t,i,l))}else if(n-=u.size,this.trackRemovals){const l=Au(this.cr.serializer,a.convertToNoDocument(B.min()));e.push(this.cr.addEntry(t,i,l))}})),s.forEach((i=>{e.push(this.cr.indexManager.addToCollectionParentIndex(t,i))})),e.push(this.cr.updateMetadata(t,n)),A.waitFor(e)}getFromCache(t,e){return this.cr.sr(t,e).next((n=>(this.lr.set(e,{size:n.size,readTime:n.document.readTime}),n.document)))}getAllFromCache(t,e){return this.cr.ar(t,e).next((({documents:n,ur:s})=>(s.forEach(((i,a)=>{this.lr.set(i,{size:a,readTime:n.get(i).readTime})})),n)))}}function Lu(r){return ft(r,"remoteDocumentGlobal")}function Ae(r){return ft(r,"remoteDocumentsV14")}function zn(r){const t=r.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Bu(r,t){const e=t.documentKey.path.toArray();return[r,ps(t.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function Uu(r,t){const e=r.path.toArray(),n=t.path.toArray();let s=0;for(let i=0;i<e.length-2&&i<n.length-2;++i)if(s=$(e[i],n[i]),s)return s;return s=$(e.length,n.length),s||(s=$(e[e.length-2],n[n.length-2]),s||$(e[e.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(n!==null&&er(n.mutation,s,xt.empty(),ot.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.getLocalViewOfDocuments(t,n,G()).next((()=>n))))}getLocalViewOfDocuments(t,e,n=G()){const s=zt();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((i=>{let a=Qn();return i.forEach(((u,l)=>{a=a.insert(u,l.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const n=zt();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,G())))}populateOverlays(t,e,n){const s=[];return n.forEach((i=>{e.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(t,s).next((i=>{i.forEach(((a,u)=>{e.set(a,u)}))}))}computeViews(t,e,n,s){let i=Ot();const a=tr(),u=(function(){return tr()})();return e.forEach(((l,d)=>{const f=n.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof te)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),er(f.mutation,d,f.mutation.getFieldMask(),ot.now())):a.set(d.key,xt.empty())})),this.recalculateAndSaveOverlays(t,i).next((l=>(l.forEach(((d,f)=>a.set(d,f))),e.forEach(((d,f)=>{var p;return u.set(d,new Up(f,(p=a.get(d))!==null&&p!==void 0?p:null))})),u)))}recalculateAndSaveOverlays(t,e){const n=tr();let s=new st(((a,u)=>a-u)),i=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const u of a)u.keys().forEach((l=>{const d=e.get(l);if(d===null)return;let f=n.get(l)||xt.empty();f=u.applyToLocalView(d,f),n.set(l,f);const p=(s.get(u.batchId)||G()).add(l);s=s.insert(u.batchId,p)}))})).next((()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const l=u.getNext(),d=l.key,f=l.value,p=il();f.forEach((I=>{if(!i.has(I)){const b=hl(e.get(I),n.get(I));b!==null&&p.set(I,b),i=i.add(I)}})),a.push(this.documentOverlayCache.saveOverlays(t,d,p))}return A.waitFor(a)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.recalculateAndSaveOverlays(t,n)))}getDocumentsMatchingQuery(t,e,n,s){return(function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):tl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):A.resolve(zt());let u=-1,l=i;return a.next((d=>A.forEach(d,((f,p)=>(u<p.largestBatchId&&(u=p.largestBatchId),i.get(f)?A.resolve():this.remoteDocumentCache.getEntry(t,f).next((I=>{l=l.insert(f,I)}))))).next((()=>this.populateOverlays(t,d,i))).next((()=>this.computeViews(t,l,d,G()))).next((f=>({batchId:u,changes:sl(f)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next((n=>{let s=Qn();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const i=e.collectionGroup;let a=Qn();return this.indexManager.getCollectionParents(t,i).next((u=>A.forEach(u,(l=>{const d=(function(p,I){return new _r(I,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(e,l.child(i));return this.getDocumentsMatchingCollectionQuery(t,d,n,s).next((f=>{f.forEach(((p,I)=>{a=a.insert(p,I)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,s)))).next((a=>{i.forEach(((l,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,ut.newInvalidDocument(f)))}));let u=Qn();return a.forEach(((l,d)=>{const f=i.get(l);f!==void 0&&er(f.mutation,d,xt.empty(),ot.now()),yr(e,d)&&(u=u.insert(l,d))})),u}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return A.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:Dt(s.createTime)}})(e)),A.resolve()}getNamedQuery(t,e){return A.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,(function(s){return{name:s.name,query:Dl(s.bundledQuery),readTime:Dt(s.readTime)}})(e)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(){this.overlays=new st(O.comparator),this.Ir=new Map}getOverlay(t,e){return A.resolve(this.overlays.get(e))}getOverlays(t,e){const n=zt();return A.forEach(e,(s=>this.getOverlay(t,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((s,i)=>{this.ht(t,e,i)})),A.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Ir.get(n);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Ir.delete(n)),A.resolve()}getOverlaysForCollection(t,e,n){const s=zt(),i=e.length+1,a=new O(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const l=u.getNext().value,d=l.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>n&&s.set(l.getKey(),l)}return A.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new st(((d,f)=>d-f));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let f=i.get(d.largestBatchId);f===null&&(f=zt(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const u=zt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((d,f)=>u.set(d,f))),!(u.size()>=s)););return A.resolve(u)}ht(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(n.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new oo(e,n));let i=this.Ir.get(e);i===void 0&&(i=G(),this.Ir.set(e,i)),this.Ir.set(e,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(t){return A.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,A.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(){this.Tr=new tt(mt.Er),this.dr=new tt(mt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const n=new mt(t,e);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(t,e){t.forEach((n=>this.addReference(n,e)))}removeReference(t,e){this.Vr(new mt(t,e))}mr(t,e){t.forEach((n=>this.removeReference(n,e)))}gr(t){const e=new O(new Y([])),n=new mt(e,t),s=new mt(e,t+1),i=[];return this.dr.forEachInRange([n,s],(a=>{this.Vr(a),i.push(a.key)})),i}pr(){this.Tr.forEach((t=>this.Vr(t)))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new O(new Y([])),n=new mt(e,t),s=new mt(e,t+1);let i=G();return this.dr.forEachInRange([n,s],(a=>{i=i.add(a.key)})),i}containsKey(t){const e=new mt(t,0),n=this.Tr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class mt{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return O.comparator(t.key,e.key)||$(t.wr,e.wr)}static Ar(t,e){return $(t.wr,e.wr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new tt(mt.Er)}checkEmpty(t){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new so(i,e,n,s);this.mutationQueue.push(a);for(const u of s)this.br=this.br.add(new mt(u.key,i)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return A.resolve(a)}lookupMutationBatch(t,e){return A.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.vr(n),i=s<0?0:s;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new mt(e,0),s=new mt(e,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([n,s],(a=>{const u=this.Dr(a.wr);i.push(u)})),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new tt($);return e.forEach((s=>{const i=new mt(s,0),a=new mt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],(u=>{n=n.add(u.wr)}))})),A.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;O.isDocumentKey(i)||(i=i.child(""));const a=new mt(new O(i),0);let u=new tt($);return this.br.forEachWhile((l=>{const d=l.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(u=u.add(l.wr)),!0)}),a),A.resolve(this.Cr(u))}Cr(t){const e=[];return t.forEach((n=>{const s=this.Dr(n);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){L(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return A.forEach(e.mutations,(s=>{const i=new mt(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.br=n}))}On(t){}containsKey(t,e){const n=new mt(e,0),s=this.br.firstAfterOrEqual(n);return A.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,A.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(t){this.Mr=t,this.docs=(function(){return new st(O.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,a=this.Mr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return A.resolve(n?n.document.mutableCopy():ut.newInvalidDocument(e))}getEntries(t,e){let n=Ot();return e.forEach((s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():ut.newInvalidDocument(s))})),A.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=Ot();const a=e.path,u=new O(a.child("")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:d,value:{document:f}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Ji(kc(f),n)<=0||(s.has(f.key)||yr(e,f))&&(i=i.insert(f.key,f.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(t,e,n,s){M()}Or(t,e){return A.forEach(this.docs,(n=>e(n)))}newChangeBuffer(t){return new Kp(this)}getSize(t){return A.resolve(this.size)}}class Kp extends Ml{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(n)})),A.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(t){this.persistence=t,this.Nr=new Ie((e=>Fe(e)),gr),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ho,this.targetCount=0,this.kr=Ue.Bn()}forEachTarget(t,e){return this.Nr.forEach(((n,s)=>e(s))),A.resolve()}getLastRemoteSnapshotVersion(t){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return A.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Lr&&(this.Lr=e),A.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Ue(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,A.resolve()}updateTargetData(t,e){return this.Kn(e),A.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,A.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Nr.forEach(((a,u)=>{u.sequenceNumber<=e&&n.get(u.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)})),A.waitFor(i).next((()=>s))}getTargetCount(t){return A.resolve(this.targetCount)}getTargetData(t,e){const n=this.Nr.get(e)||null;return A.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Rr(e,n),A.resolve()}removeMatchingKeys(t,e,n){this.Br.mr(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((a=>{i.push(s.markPotentiallyOrphaned(t,a))})),A.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),A.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.yr(e);return A.resolve(n)}containsKey(t,e){return A.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Bt(0),this.Kr=!1,this.Kr=!0,this.$r=new zp,this.referenceDelegate=t(this),this.Ur=new Qp(this),this.indexManager=new Dp,this.remoteDocumentCache=(function(s){return new Gp(s)})((n=>this.referenceDelegate.Wr(n))),this.serializer=new Sl(e),this.Gr=new qp(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new jp,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.qr[t.toKey()];return n||(n=new $p(e,this.referenceDelegate),this.qr[t.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,n){C("MemoryPersistence","Starting transaction:",t);const s=new Hp(this.Qr.next());return this.referenceDelegate.zr(),n(s).next((i=>this.referenceDelegate.jr(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Hr(t,e){return A.or(Object.values(this.qr).map((n=>()=>n.containsKey(t,e))))}}class Hp extends Mc{constructor(t){super(),this.currentSequenceNumber=t}}class xs{constructor(t){this.persistence=t,this.Jr=new ho,this.Yr=null}static Zr(t){return new xs(t)}get Xr(){if(this.Yr)return this.Yr;throw M()}addReference(t,e,n){return this.Jr.addReference(n,e),this.Xr.delete(n.toString()),A.resolve()}removeReference(t,e,n){return this.Jr.removeReference(n,e),this.Xr.add(n.toString()),A.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),A.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach((s=>this.Xr.add(s.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((i=>this.Xr.add(i.toString())))})).next((()=>n.removeTargetData(t,e)))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Xr,(n=>{const s=O.fromPath(n);return this.ei(t,s).next((i=>{i||e.removeEntry(s,B.min())}))})).next((()=>(this.Yr=null,e.apply(t))))}updateLimboDocument(t,e){return this.ei(t,e).next((n=>{n?this.Xr.delete(e.toString()):this.Xr.add(e.toString())}))}Wr(t){return 0}ei(t,e){return A.or([()=>A.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(t){this.serializer=t}O(t,e,n,s){const i=new Ts("createOrUpgrade",e);n<1&&s>=1&&((function(l){l.createObjectStore("owner")})(t),(function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",tu,{unique:!0}),l.createObjectStore("documentMutations")})(t),qu(t),(function(l){l.createObjectStore("remoteDocuments")})(t));let a=A.resolve();return n<3&&s>=3&&(n!==0&&((function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")})(t),qu(t)),a=a.next((()=>(function(l){const d=l.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:B.min().toTimestamp(),targetCount:0};return d.put("targetGlobalKey",f)})(i)))),n<4&&s>=4&&(n!==0&&(a=a.next((()=>(function(l,d){return d.store("mutations").U().next((f=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",tu,{unique:!0});const p=d.store("mutations"),I=f.map((b=>p.put(b)));return A.waitFor(I)}))})(t,i)))),a=a.next((()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(t)}))),n<5&&s>=5&&(a=a.next((()=>this.ni(i)))),n<6&&s>=6&&(a=a.next((()=>((function(l){l.createObjectStore("remoteDocumentGlobal")})(t),this.ri(i))))),n<7&&s>=7&&(a=a.next((()=>this.ii(i)))),n<8&&s>=8&&(a=a.next((()=>this.si(t,i)))),n<9&&s>=9&&(a=a.next((()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(t)}))),n<10&&s>=10&&(a=a.next((()=>this.oi(i)))),n<11&&s>=11&&(a=a.next((()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(t),(function(l){l.createObjectStore("namedQueries",{keyPath:"name"})})(t)}))),n<12&&s>=12&&(a=a.next((()=>{(function(l){const d=l.createObjectStore("documentOverlays",{keyPath:wm});d.createIndex("collectionPathOverlayIndex",Am,{unique:!1}),d.createIndex("collectionGroupOverlayIndex",Rm,{unique:!1})})(t)}))),n<13&&s>=13&&(a=a.next((()=>(function(l){const d=l.createObjectStore("remoteDocumentsV14",{keyPath:dm});d.createIndex("documentKeyIndex",fm),d.createIndex("collectionGroupIndex",mm)})(t))).next((()=>this._i(t,i))).next((()=>t.deleteObjectStore("remoteDocuments")))),n<14&&s>=14&&(a=a.next((()=>this.ai(t,i)))),n<15&&s>=15&&(a=a.next((()=>(function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:Im}).createIndex("sequenceNumberIndex",Em,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:Tm}).createIndex("documentKeyIndex",vm,{unique:!1})})(t)))),n<16&&s>=16&&(a=a.next((()=>{e.objectStore("indexState").clear()})).next((()=>{e.objectStore("indexEntries").clear()}))),n<17&&s>=17&&(a=a.next((()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(t)}))),a}ri(t){let e=0;return t.store("remoteDocuments").J(((n,s)=>{e+=_s(s)})).next((()=>{const n={byteSize:e};return t.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}ni(t){const e=t.store("mutationQueues"),n=t.store("mutations");return e.U().next((s=>A.forEach(s,(i=>{const a=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",a).next((u=>A.forEach(u,(l=>{L(l.userId===i.userId);const d=Se(this.serializer,l);return Nl(t,i.userId,d).next((()=>{}))}))))}))))}ii(t){const e=t.store("targetDocuments"),n=t.store("remoteDocuments");return t.store("targetGlobal").get("targetGlobalKey").next((s=>{const i=[];return n.J(((a,u)=>{const l=new Y(a),d=(function(p){return[0,Vt(p)]})(l);i.push(e.get(d).next((f=>f?A.resolve():(p=>e.put({targetId:0,path:Vt(p),sequenceNumber:s.highestListenSequenceNumber}))(l))))})).next((()=>A.waitFor(i)))}))}si(t,e){t.createObjectStore("collectionParents",{keyPath:ym});const n=e.store("collectionParents"),s=new lo,i=a=>{if(s.add(a)){const u=a.lastSegment(),l=a.popLast();return n.put({collectionId:u,parent:Vt(l)})}};return e.store("remoteDocuments").J({H:!0},((a,u)=>{const l=new Y(a);return i(l.popLast())})).next((()=>e.store("documentMutations").J({H:!0},(([a,u,l],d)=>{const f=jt(u);return i(f.popLast())}))))}oi(t){const e=t.store("targets");return e.J(((n,s)=>{const i=Wn(s),a=Vl(this.serializer,i);return e.put(a)}))}_i(t,e){const n=e.store("remoteDocuments"),s=[];return n.J(((i,a)=>{const u=e.store("remoteDocumentsV14"),l=(function(p){return p.document?new O(Y.fromString(p.document.name).popFirst(5)):p.noDocument?O.fromSegments(p.noDocument.path):p.unknownDocument?O.fromSegments(p.unknownDocument.path):M()})(a).path.toArray(),d={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};s.push(u.put(d))})).next((()=>A.waitFor(s)))}ai(t,e){const n=e.store("mutations"),s=Fl(this.serializer),i=new Bl(xs.Zr,this.serializer.ct);return n.U().next((a=>{const u=new Map;return a.forEach((l=>{var d;let f=(d=u.get(l.userId))!==null&&d!==void 0?d:G();Se(this.serializer,l).keys().forEach((p=>f=f.add(p))),u.set(l.userId,f)})),A.forEach(u,((l,d)=>{const f=new gt(d),p=Ds.lt(this.serializer,f),I=i.getIndexManager(f),b=Cs.lt(f,this.serializer,I,i.referenceDelegate);return new Ll(s,b,p,I).recalculateAndSaveOverlaysForDocumentKeys(new Pi(e,Bt.oe),l).next()}))}))}}function qu(r){r.createObjectStore("targetDocuments",{keyPath:gm}).createIndex("documentTargetsIndex",_m,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",pm,{unique:!0}),r.createObjectStore("targetGlobal")}const pi="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class fo{constructor(t,e,n,s,i,a,u,l,d,f,p=17){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.ui=i,this.window=a,this.document=u,this.ci=d,this.li=f,this.hi=p,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=I=>Promise.resolve(),!fo.D())throw new k(S.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Fp(this,s),this.Ai=e+"main",this.serializer=new Sl(l),this.Ri=new fe(this.Ai,this.hi,new Wp(this.serializer)),this.$r=new Ap,this.Ur=new xp(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Fl(this.serializer),this.Gr=new wp,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,f===!1&&Pt("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new k(S.FAILED_PRECONDITION,pi);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(t=>this.Ur.getHighestSequenceNumber(t)))})).then((t=>{this.Qr=new Bt(t,this.ci)})).then((()=>{this.Kr=!0})).catch((t=>(this.Ri&&this.Ri.close(),Promise.reject(t))))}yi(t){return this.di=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.Ri.L((async e=>{e.newVersion===null&&await t()}))}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.ui.enqueueAndForget((async()=>{this.started&&await this.mi()})))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(t=>Qr(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.wi(t).next((e=>{e||(this.isPrimary=!1,this.ui.enqueueRetryable((()=>this.di(!1))))}))})).next((()=>this.Si(t))).next((e=>this.isPrimary&&!e?this.bi(t).next((()=>!1)):!!e&&this.Di(t).next((()=>!0)))))).catch((t=>{if(ye(t))return C("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return C("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1})).then((t=>{this.isPrimary!==t&&this.ui.enqueueRetryable((()=>this.di(t))),this.isPrimary=t}))}wi(t){return $n(t).get("owner").next((e=>A.resolve(this.vi(e))))}Ci(t){return Qr(t).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const n=ft(e,"clientMetadata");return n.U().next((s=>{const i=this.xi(s,18e5),a=s.filter((u=>i.indexOf(u)===-1));return A.forEach(a,(u=>n.delete(u.clientId))).next((()=>a))}))})).catch((()=>[]));if(this.Vi)for(const e of t)this.Vi.removeItem(this.Oi(e.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.mi().then((()=>this.Fi())).then((()=>this.pi()))))}vi(t){return!!t&&t.ownerId===this.clientId}Si(t){return this.li?A.resolve(!0):$n(t).get("owner").next((e=>{if(e!==null&&this.Mi(e.leaseTimestampMs,5e3)&&!this.Ni(e.ownerId)){if(this.vi(e)&&this.networkEnabled)return!0;if(!this.vi(e)){if(!e.allowTabSynchronization)throw new k(S.FAILED_PRECONDITION,pi);return!1}}return!(!this.networkEnabled||!this.inForeground)||Qr(t).U().next((n=>this.xi(n,5e3).find((s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,a=!this.inForeground&&s.inForeground,u=this.networkEnabled===s.networkEnabled;if(i||a&&u)return!0}return!1}))===void 0))})).next((e=>(this.isPrimary!==e&&C("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(t=>{const e=new Pi(t,Bt.oe);return this.bi(e).next((()=>this.Ci(e)))})),this.Ri.close(),this.qi()}xi(t,e){return t.filter((n=>this.Mi(n.updateTimeMs,e)&&!this.Ni(n.clientId)))}Qi(){return this.runTransaction("getActiveClients","readonly",(t=>Qr(t).U().next((e=>this.xi(e,18e5).map((n=>n.clientId))))))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(t,e){return Cs.lt(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new Cp(t,this.serializer.ct.databaseId)}getDocumentOverlayCache(t){return Ds.lt(this.serializer,t)}getBundleCache(){return this.Gr}runTransaction(t,e,n){C("IndexedDbPersistence","Starting transaction:",t);const s=e==="readonly"?"readonly":"readwrite",i=(function(l){return l===17?Sm:l===16?Pm:l===15?Zi:l===14?qc:l===13?Uc:l===12?bm:l===11?Bc:void M()})(this.hi);let a;return this.Ri.runTransaction(t,s,i,(u=>(a=new Pi(u,this.Qr?this.Qr.next():Bt.oe),e==="readwrite-primary"?this.wi(a).next((l=>!!l||this.Si(a))).next((l=>{if(!l)throw Pt(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.ui.enqueueRetryable((()=>this.di(!1))),new k(S.FAILED_PRECONDITION,Oc);return n(a)})).next((l=>this.Di(a).next((()=>l)))):this.Ki(a).next((()=>n(a)))))).then((u=>(a.raiseOnCommittedEvent(),u)))}Ki(t){return $n(t).get("owner").next((e=>{if(e!==null&&this.Mi(e.leaseTimestampMs,5e3)&&!this.Ni(e.ownerId)&&!this.vi(e)&&!(this.li||this.allowTabSynchronization&&e.allowTabSynchronization))throw new k(S.FAILED_PRECONDITION,pi)}))}Di(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return $n(t).put("owner",e)}static D(){return fe.D()}bi(t){const e=$n(t);return e.get("owner").next((n=>this.vi(n)?(C("IndexedDbPersistence","Releasing primary lease."),e.delete("owner")):A.resolve()))}Mi(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(Pt(`Detected an update time that is in the future: ${t} > ${n}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.mi())))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var t;typeof((t=this.window)===null||t===void 0?void 0:t.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const e=/(?:Version|Mobile)\/1[456]/;pc()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(t){var e;try{const n=((e=this.Vi)===null||e===void 0?void 0:e.getItem(this.Oi(t)))!==null;return C("IndexedDbPersistence",`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return Pt("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(t){Pt("Failed to set zombie client id.",t)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function $n(r){return ft(r,"owner")}function Qr(r){return ft(r,"clientMetadata")}function Xp(r,t){let e=r.projectId;return r.isDefaultDatabase||(e+="."+r.database),"firestore/"+t+"/"+e+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.$i=n,this.Ui=s}static Wi(t,e){let n=G(),s=G();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new mo(t,e.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=(function(){return pc()?8:Fc(as())>0?6:4})()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,n,s){const i={result:null};return this.Yi(t,e).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.Zi(t,e,s,n).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new Jp;return this.Xi(t,e,a).next((u=>{if(i.result=u,this.zi)return this.es(t,e,a,u.size)}))})).next((()=>i.result))}es(t,e,n,s){return n.documentReadCount<this.ji?(tn()<=W.DEBUG&&C("QueryEngine","SDK will not create cache indexes for query:",en(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),A.resolve()):(tn()<=W.DEBUG&&C("QueryEngine","Query:",en(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Hi*s?(tn()<=W.DEBUG&&C("QueryEngine","The SDK decides to create cache indexes for query:",en(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ut(e))):A.resolve())}Yi(t,e){if(fu(e))return A.resolve(null);let n=Ut(e);return this.indexManager.getIndexType(t,n).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=ki(e,null,"F"),n=Ut(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const a=G(...i);return this.Ji.getDocuments(t,a).next((u=>this.indexManager.getMinOffset(t,n).next((l=>{const d=this.ts(e,u);return this.ns(e,d,a,l.readTime)?this.Yi(t,ki(e,null,"F")):this.rs(t,d,e,l)}))))})))))}Zi(t,e,n,s){return fu(e)||s.isEqual(B.min())?A.resolve(null):this.Ji.getDocuments(t,n).next((i=>{const a=this.ts(e,i);return this.ns(e,a,n,s)?A.resolve(null):(tn()<=W.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),en(e)),this.rs(t,a,e,sm(s,-1)).next((u=>u)))}))}ts(t,e){let n=new tt(nl(t));return e.forEach(((s,i)=>{yr(t,i)&&(n=n.add(i))})),n}ns(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(t,e,n){return tn()<=W.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",en(e)),this.Ji.getDocumentsMatchingQuery(t,e,Lt.min(),n)}rs(t,e,n,s){return this.Ji.getDocumentsMatchingQuery(t,n,s).next((i=>(e.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(t,e,n,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new st($),this._s=new Ie((i=>Fe(i)),gr),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(n)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ll(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.os)))}}function ql(r,t,e,n){return new Yp(r,t,e,n)}async function jl(r,t){const e=j(r);return await e.persistence.runTransaction("Handle user change","readonly",(n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next((i=>(s=i,e.ls(t),e.mutationQueue.getAllMutationBatches(n)))).next((i=>{const a=[],u=[];let l=G();for(const d of s){a.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}for(const d of i){u.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}return e.localDocuments.getDocuments(n,l).next((d=>({hs:d,removedBatchIds:a,addedBatchIds:u})))}))}))}function Zp(r,t){const e=j(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const s=t.batch.keys(),i=e.cs.newChangeBuffer({trackRemovals:!0});return(function(u,l,d,f){const p=d.batch,I=p.keys();let b=A.resolve();return I.forEach((V=>{b=b.next((()=>f.getEntry(l,V))).next((x=>{const D=d.docVersions.get(V);L(D!==null),x.version.compareTo(D)<0&&(p.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),f.addEntry(x)))}))})),b.next((()=>u.mutationQueue.removeMutationBatch(l,p)))})(e,n,t,i).next((()=>i.apply(n))).next((()=>e.mutationQueue.performConsistencyCheck(n))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(u){let l=G();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(l=l.add(u.batch.mutations[d].key));return l})(t)))).next((()=>e.localDocuments.getDocuments(n,s)))}))}function zl(r){const t=j(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Ur.getLastRemoteSnapshotVersion(e)))}function tg(r,t){const e=j(r),n=t.snapshotVersion;let s=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});s=e.os;const u=[];t.targetChanges.forEach(((f,p)=>{const I=s.get(p);if(!I)return;u.push(e.Ur.removeMatchingKeys(i,f.removedDocuments,p).next((()=>e.Ur.addMatchingKeys(i,f.addedDocuments,p))));let b=I.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(p)!==null?b=b.withResumeToken(dt.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):f.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(f.resumeToken,n)),s=s.insert(p,b),(function(x,D,z){return x.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0})(I,b,f)&&u.push(e.Ur.updateTargetData(i,b))}));let l=Ot(),d=G();if(t.documentUpdates.forEach((f=>{t.resolvedLimboDocuments.has(f)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,f))})),u.push(eg(i,a,t.documentUpdates).next((f=>{l=f.Ps,d=f.Is}))),!n.isEqual(B.min())){const f=e.Ur.getLastRemoteSnapshotVersion(i).next((p=>e.Ur.setTargetsMetadata(i,i.currentSequenceNumber,n)));u.push(f)}return A.waitFor(u).next((()=>a.apply(i))).next((()=>e.localDocuments.getLocalViewOfDocuments(i,l,d))).next((()=>l))})).then((i=>(e.os=s,i)))}function eg(r,t,e){let n=G(),s=G();return e.forEach((i=>n=n.add(i))),t.getEntries(r,n).next((i=>{let a=Ot();return e.forEach(((u,l)=>{const d=i.get(u);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),l.isNoDocument()&&l.version.isEqual(B.min())?(t.removeEntry(u,l.readTime),a=a.insert(u,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(l),a=a.insert(u,l)):C("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",l.version)})),{Ps:a,Is:s}}))}function ng(r,t){const e=j(r);return e.persistence.runTransaction("Get next mutation batch","readonly",(n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t))))}function rg(r,t){const e=j(r);return e.persistence.runTransaction("Allocate target","readwrite",(n=>{let s;return e.Ur.getTargetData(n,t).next((i=>i?(s=i,A.resolve(s)):e.Ur.allocateTargetId(n).next((a=>(s=new Xt(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.Ur.addTargetData(n,s).next((()=>s)))))))})).then((n=>{const s=e.os.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.os=e.os.insert(n.targetId,n),e._s.set(t,n.targetId)),n}))}async function ji(r,t,e){const n=j(r),s=n.os.get(t),i=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",i,(a=>n.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!ye(a))throw a;C("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}n.os=n.os.remove(t),n._s.delete(s.target)}function ju(r,t,e){const n=j(r);let s=B.min(),i=G();return n.persistence.runTransaction("Execute query","readwrite",(a=>(function(l,d,f){const p=j(l),I=p._s.get(f);return I!==void 0?A.resolve(p.os.get(I)):p.Ur.getTargetData(d,f)})(n,a,Ut(t)).next((u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(a,u.targetId).next((l=>{i=l}))})).next((()=>n.ss.getDocumentsMatchingQuery(a,t,e?s:B.min(),e?i:G()))).next((u=>(sg(n,zm(t),u),{documents:u,Ts:i})))))}function sg(r,t,e){let n=r.us.get(t)||B.min();e.forEach(((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)})),r.us.set(t,n)}class zu{constructor(){this.activeTargetIds=Wm()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class $l{constructor(){this.so=new zu,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,n){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new zu,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hr=null;function gi(){return Hr===null?Hr=(function(){return 268435456+Math.round(2147483648*Math.random())})():Hr++,"0x"+Hr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="WebChannelConnection";class ug extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+e.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(e,n,s,i,a){const u=gi(),l=this.xo(e,n.toUriEncodedString());C("RestConnection",`Sending RPC '${e}' ${u}:`,l,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,a),this.No(e,l,d,s).then((f=>(C("RestConnection",`Received RPC '${e}' ${u}: `,f),f)),(f=>{throw un("RestConnection",`RPC '${e}' ${u} failed with error: `,f,"url: ",l,"request:",s),f}))}Lo(e,n,s,i,a,u){return this.Mo(e,n,s,i,a)}Oo(e,n,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+yn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((i,a)=>e[a]=i)),s&&s.headers.forEach(((i,a)=>e[a]=i))}xo(e,n){const s=og[e];return`${this.Do}/v1/${n}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,n,s){const i=gi();return new Promise(((a,u)=>{const l=new bc;l.setWithCredentials(!0),l.listenOnce(Pc.COMPLETE,(()=>{try{switch(l.getLastErrorCode()){case Jr.NO_ERROR:const f=l.getResponseJson();C(vt,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(f)),a(f);break;case Jr.TIMEOUT:C(vt,`RPC '${t}' ${i} timed out`),u(new k(S.DEADLINE_EXCEEDED,"Request time out"));break;case Jr.HTTP_ERROR:const p=l.getStatus();if(C(vt,`RPC '${t}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let I=l.getResponseJson();Array.isArray(I)&&(I=I[0]);const b=I==null?void 0:I.error;if(b&&b.status&&b.message){const V=(function(D){const z=D.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(z)>=0?z:S.UNKNOWN})(b.status);u(new k(V,b.message))}else u(new k(S.UNKNOWN,"Server responded with status "+l.getStatus()))}else u(new k(S.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{C(vt,`RPC '${t}' ${i} completed.`)}}));const d=JSON.stringify(s);C(vt,`RPC '${t}' ${i} sending request:`,s),l.send(e,"POST",d,n,15)}))}Bo(t,e,n){const s=gi(),i=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Dc(),u=Vc(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,e,n),l.encodeInitMessageHeaders=!0;const f=i.join("");C(vt,`Creating RPC '${t}' stream ${s}: ${f}`,l);const p=a.createWebChannel(f,l);let I=!1,b=!1;const V=new ag({Io:D=>{b?C(vt,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(I||(C(vt,`Opening RPC '${t}' stream ${s} transport.`),p.open(),I=!0),C(vt,`RPC '${t}' stream ${s} sending:`,D),p.send(D))},To:()=>p.close()}),x=(D,z,U)=>{D.listen(z,(F=>{try{U(F)}catch(q){setTimeout((()=>{throw q}),0)}}))};return x(p,Kn.EventType.OPEN,(()=>{b||(C(vt,`RPC '${t}' stream ${s} transport opened.`),V.yo())})),x(p,Kn.EventType.CLOSE,(()=>{b||(b=!0,C(vt,`RPC '${t}' stream ${s} transport closed`),V.So())})),x(p,Kn.EventType.ERROR,(D=>{b||(b=!0,un(vt,`RPC '${t}' stream ${s} transport errored:`,D),V.So(new k(S.UNAVAILABLE,"The operation could not be completed")))})),x(p,Kn.EventType.MESSAGE,(D=>{var z;if(!b){const U=D.data[0];L(!!U);const F=U,q=F.error||((z=F[0])===null||z===void 0?void 0:z.error);if(q){C(vt,`RPC '${t}' stream ${s} received error:`,q);const J=q.status;let K=(function(y){const T=ht[y];if(T!==void 0)return ml(T)})(J),E=q.message;K===void 0&&(K=S.INTERNAL,E="Unknown error status: "+J+" with message "+q.message),b=!0,V.So(new k(K,E)),p.close()}else C(vt,`RPC '${t}' stream ${s} received:`,U),V.bo(U)}})),x(u,Sc.STAT_EVENT,(D=>{D.stat===Ri.PROXY?C(vt,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===Ri.NOPROXY&&C(vt,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{V.wo()}),0),V}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(){return typeof window<"u"?window:null}function ss(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(r){return new dp(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(t,e,n=1e3,s=1.5,i=6e4){this.ui=t,this.timerId=e,this.ko=n,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-n);s>0&&C("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,(()=>(this.Uo=Date.now(),t()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(t,e,n,s,i,a,u,l){this.ui=t,this.Ho=n,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Gl(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(Pt(e.toString()),Pt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,s])=>{this.Yo===e&&this.P_(n,s)}),(n=>{t((()=>{const s=new k(S.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(s)}))}))}P_(t,e){const n=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo((()=>{n((()=>this.listener.Eo()))})),this.stream.Ro((()=>{n((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((s=>{n((()=>this.I_(s)))})),this.stream.onMessage((s=>{n((()=>++this.e_==1?this.E_(s):this.onNext(s)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(t){return C("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget((()=>this.Yo===t?e():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class lg extends Kl{constructor(t,e,n,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=pp(this.serializer,t),n=(function(i){if(!("targetChange"in i))return B.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?Dt(a.readTime):B.min()})(t);return this.listener.d_(e,n)}A_(t){const e={};e.database=Fi(this.serializer),e.addTarget=(function(i,a){let u;const l=a.target;if(u=hs(l)?{documents:vl(i,l)}:{query:wl(i,l)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=_l(i,a.resumeToken);const d=Oi(i,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(B.min())>0){u.readTime=pn(i,a.snapshotVersion.toTimestamp());const d=Oi(i,a.expectedCount);d!==null&&(u.expectedCount=d)}return u})(this.serializer,t);const n=_p(this.serializer,t);n&&(e.labels=n),this.a_(e)}R_(t){const e={};e.database=Fi(this.serializer),e.removeTarget=t,this.a_(e)}}class hg extends Kl{constructor(t,e,n,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return L(!!t.streamToken),this.lastStreamToken=t.streamToken,L(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){L(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=gp(t.writeResults,t.commitTime),n=Dt(t.commitTime);return this.listener.g_(n,e)}p_(){const t={};t.database=Fi(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map((n=>ms(this.serializer,n)))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new k(S.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,n,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Mo(t,Mi(e,n),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new k(S.UNKNOWN,i.toString())}))}Lo(t,e,n,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Lo(t,Mi(e,n),s,a,u,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new k(S.UNKNOWN,a.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class fg{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Pt(e),this.D_=!1):C("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o((a=>{n.enqueueAndForget((async()=>{Ge(this)&&(C("RemoteStore","Restarting streams for network reachability change."),await(async function(l){const d=j(l);d.L_.add(4),await Er(d),d.q_.set("Unknown"),d.L_.delete(4),await ks(d)})(this))}))})),this.q_=new fg(n,s)}}async function ks(r){if(Ge(r))for(const t of r.B_)await t(!0)}async function Er(r){for(const t of r.B_)await t(!1)}function Ql(r,t){const e=j(r);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),yo(e)?_o(e):En(e).r_()&&go(e,t))}function po(r,t){const e=j(r),n=En(e);e.N_.delete(t),n.r_()&&Hl(e,t),e.N_.size===0&&(n.r_()?n.o_():Ge(e)&&e.q_.set("Unknown"))}function go(r,t){if(r.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(B.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}En(r).A_(t)}function Hl(r,t){r.Q_.xe(t),En(r).R_(t)}function _o(r){r.Q_=new up({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>r.N_.get(t)||null,tt:()=>r.datastore.serializer.databaseId}),En(r).start(),r.q_.v_()}function yo(r){return Ge(r)&&!En(r).n_()&&r.N_.size>0}function Ge(r){return j(r).L_.size===0}function Wl(r){r.Q_=void 0}async function pg(r){r.q_.set("Online")}async function gg(r){r.N_.forEach(((t,e)=>{go(r,t)}))}async function _g(r,t){Wl(r),yo(r)?(r.q_.M_(t),_o(r)):r.q_.set("Unknown")}async function yg(r,t,e){if(r.q_.set("Online"),t instanceof gl&&t.state===2&&t.cause)try{await(async function(s,i){const a=i.cause;for(const u of i.targetIds)s.N_.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.N_.delete(u),s.Q_.removeTarget(u))})(r,t)}catch(n){C("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ys(r,n)}else if(t instanceof rs?r.Q_.Ke(t):t instanceof pl?r.Q_.He(t):r.Q_.We(t),!e.isEqual(B.min()))try{const n=await zl(r.localStore);e.compareTo(n)>=0&&await(function(i,a){const u=i.Q_.rt(a);return u.targetChanges.forEach(((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.N_.get(d);f&&i.N_.set(d,f.withResumeToken(l.resumeToken,a))}})),u.targetMismatches.forEach(((l,d)=>{const f=i.N_.get(l);if(!f)return;i.N_.set(l,f.withResumeToken(dt.EMPTY_BYTE_STRING,f.snapshotVersion)),Hl(i,l);const p=new Xt(f.target,l,d,f.sequenceNumber);go(i,p)})),i.remoteSyncer.applyRemoteEvent(u)})(r,e)}catch(n){C("RemoteStore","Failed to raise snapshot:",n),await ys(r,n)}}async function ys(r,t,e){if(!ye(t))throw t;r.L_.add(1),await Er(r),r.q_.set("Offline"),e||(e=()=>zl(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{C("RemoteStore","Retrying IndexedDB access"),await e(),r.L_.delete(1),await ks(r)}))}function Xl(r,t){return t().catch((e=>ys(r,e,t)))}async function Tr(r){const t=j(r),e=_e(t);let n=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;Ig(t);)try{const s=await ng(t.localStore,n);if(s===null){t.O_.length===0&&e.o_();break}n=s.batchId,Eg(t,s)}catch(s){await ys(t,s)}Jl(t)&&Yl(t)}function Ig(r){return Ge(r)&&r.O_.length<10}function Eg(r,t){r.O_.push(t);const e=_e(r);e.r_()&&e.V_&&e.m_(t.mutations)}function Jl(r){return Ge(r)&&!_e(r).n_()&&r.O_.length>0}function Yl(r){_e(r).start()}async function Tg(r){_e(r).p_()}async function vg(r){const t=_e(r);for(const e of r.O_)t.m_(e.mutations)}async function wg(r,t,e){const n=r.O_.shift(),s=io.from(n,t,e);await Xl(r,(()=>r.remoteSyncer.applySuccessfulWrite(s))),await Tr(r)}async function Ag(r,t){t&&_e(r).V_&&await(async function(n,s){if((function(a){return ip(a)&&a!==S.ABORTED})(s.code)){const i=n.O_.shift();_e(n).s_(),await Xl(n,(()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Tr(n)}})(r,t),Jl(r)&&Yl(r)}async function Gu(r,t){const e=j(r);e.asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials");const n=Ge(e);e.L_.add(3),await Er(e),n&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await ks(e)}async function Rg(r,t){const e=j(r);t?(e.L_.delete(2),await ks(e)):t||(e.L_.add(2),await Er(e),e.q_.set("Unknown"))}function En(r){return r.K_||(r.K_=(function(e,n,s){const i=j(e);return i.w_(),new lg(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{Eo:pg.bind(null,r),Ro:gg.bind(null,r),mo:_g.bind(null,r),d_:yg.bind(null,r)}),r.B_.push((async t=>{t?(r.K_.s_(),yo(r)?_o(r):r.q_.set("Unknown")):(await r.K_.stop(),Wl(r))}))),r.K_}function _e(r){return r.U_||(r.U_=(function(e,n,s){const i=j(e);return i.w_(),new hg(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Tg.bind(null,r),mo:Ag.bind(null,r),f_:vg.bind(null,r),g_:wg.bind(null,r)}),r.B_.push((async t=>{t?(r.U_.s_(),await Tr(r)):(await r.U_.stop(),r.O_.length>0&&(C("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))}))),r.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,i){const a=Date.now()+n,u=new Io(t,e,a,s,i);return u.start(n),u}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Eo(r,t){if(Pt("AsyncQueue",`${t}: ${r}`),ye(r))return new k(S.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t){this.comparator=t?(e,n)=>t(e,n)||O.comparator(e.key,n.key):(e,n)=>O.comparator(e.key,n.key),this.keyedMap=Qn(),this.sortedSet=new st(this.comparator)}static emptySet(t){return new on(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof on)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new on;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(){this.W_=new st(O.comparator)}track(t){const e=t.doc.key,n=this.W_.get(e);n?t.type!==0&&n.type===3?this.W_=this.W_.insert(e,t):t.type===3&&n.type!==1?this.W_=this.W_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.W_=this.W_.remove(e):t.type===1&&n.type===2?this.W_=this.W_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):M():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class gn{constructor(t,e,n,s,i,a,u,l,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,s,i){const a=[];return e.forEach((u=>{a.push({type:0,doc:u})})),new gn(t,e,on.emptySet(e),a,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Rs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((t=>t.J_()))}}class Pg{constructor(){this.queries=Qu(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,n){const s=j(e),i=s.queries;s.queries=Qu(),i.forEach(((a,u)=>{for(const l of u.j_)l.onError(n)}))})(this,new k(S.ABORTED,"Firestore shutting down"))}}function Qu(){return new Ie((r=>el(r)),Rs)}async function Zl(r,t){const e=j(r);let n=3;const s=t.query;let i=e.queries.get(s);i?!i.H_()&&t.J_()&&(n=2):(i=new bg,n=t.J_()?0:1);try{switch(n){case 0:i.z_=await e.onListen(s,!0);break;case 1:i.z_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=Eo(a,`Initialization of query '${en(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,i),i.j_.push(t),t.Z_(e.onlineState),i.z_&&t.X_(i.z_)&&To(e)}async function th(r,t){const e=j(r),n=t.query;let s=3;const i=e.queries.get(n);if(i){const a=i.j_.indexOf(t);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=t.J_()?0:1:!i.H_()&&t.J_()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Sg(r,t){const e=j(r);let n=!1;for(const s of t){const i=s.query,a=e.queries.get(i);if(a){for(const u of a.j_)u.X_(s)&&(n=!0);a.z_=s}}n&&To(e)}function Vg(r,t,e){const n=j(r),s=n.queries.get(t);if(s)for(const i of s.j_)i.onError(e);n.queries.delete(t)}function To(r){r.Y_.forEach((t=>{t.next()}))}var zi,Hu;(Hu=zi||(zi={})).ea="default",Hu.Cache="cache";class eh{constructor(t,e,n){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new gn(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const n=e!=="Offline";return(!this.options._a||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=gn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==zi.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(t){this.key=t}}class rh{constructor(t){this.key=t}}class Dg{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=G(),this.mutatedKeys=G(),this.Aa=nl(t),this.Ra=new on(this.Aa)}get Va(){return this.Ta}ma(t,e){const n=e?e.fa:new Ku,s=e?e.Ra:this.Ra;let i=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((f,p)=>{const I=s.get(f),b=yr(this.query,p)?p:null,V=!!I&&this.mutatedKeys.has(I.key),x=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let D=!1;I&&b?I.data.isEqual(b.data)?V!==x&&(n.track({type:3,doc:b}),D=!0):this.ga(I,b)||(n.track({type:2,doc:b}),D=!0,(l&&this.Aa(b,l)>0||d&&this.Aa(b,d)<0)&&(u=!0)):!I&&b?(n.track({type:0,doc:b}),D=!0):I&&!b&&(n.track({type:1,doc:I}),D=!0,(l||d)&&(u=!0)),D&&(b?(a=a.add(b),i=x?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),n.track({type:1,doc:f})}return{Ra:a,fa:n,ns:u,mutatedKeys:i}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const i=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort(((f,p)=>(function(b,V){const x=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return x(b)-x(V)})(f.type,p.type)||this.Aa(f.doc,p.doc))),this.pa(n),s=s!=null&&s;const u=e&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,d=l!==this.Ea;return this.Ea=l,a.length!==0||d?{snapshot:new gn(this.query,t.Ra,i,a,t.mutatedKeys,l===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:u}:{wa:u}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ku,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach((e=>this.Ta=this.Ta.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ta=this.Ta.delete(e))),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=G(),this.Ra.forEach((n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))}));const e=[];return t.forEach((n=>{this.da.has(n)||e.push(new rh(n))})),this.da.forEach((n=>{t.has(n)||e.push(new nh(n))})),e}ba(t){this.Ta=t.Ts,this.da=G();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return gn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Cg{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class xg{constructor(t){this.key=t,this.va=!1}}class Ng{constructor(t,e,n,s,i,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Ie((u=>el(u)),Rs),this.Ma=new Map,this.xa=new Set,this.Oa=new st(O.comparator),this.Na=new Map,this.La=new ho,this.Ba={},this.ka=new Map,this.qa=Ue.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function kg(r,t,e=!0){const n=ch(r);let s;const i=n.Fa.get(t);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await sh(n,t,e,!0),s}async function Og(r,t){const e=ch(r);await sh(e,t,!0,!1)}async function sh(r,t,e,n){const s=await rg(r.localStore,Ut(t)),i=s.targetId,a=r.sharedClientState.addLocalQueryTarget(i,e);let u;return n&&(u=await Mg(r,t,i,a==="current",s.resumeToken)),r.isPrimaryClient&&e&&Ql(r.remoteStore,s),u}async function Mg(r,t,e,n,s){r.Ka=(p,I,b)=>(async function(x,D,z,U){let F=D.view.ma(z);F.ns&&(F=await ju(x.localStore,D.query,!1).then((({documents:E})=>D.view.ma(E,F))));const q=U&&U.targetChanges.get(D.targetId),J=U&&U.targetMismatches.get(D.targetId)!=null,K=D.view.applyChanges(F,x.isPrimaryClient,q,J);return Xu(x,D.targetId,K.wa),K.snapshot})(r,p,I,b);const i=await ju(r.localStore,t,!0),a=new Dg(t,i.Ts),u=a.ma(i.documents),l=Ir.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),d=a.applyChanges(u,r.isPrimaryClient,l);Xu(r,e,d.wa);const f=new Cg(t,e,a);return r.Fa.set(t,f),r.Ma.has(e)?r.Ma.get(e).push(t):r.Ma.set(e,[t]),d.snapshot}async function Fg(r,t,e){const n=j(r),s=n.Fa.get(t),i=n.Ma.get(s.targetId);if(i.length>1)return n.Ma.set(s.targetId,i.filter((a=>!Rs(a,t)))),void n.Fa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await ji(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),e&&po(n.remoteStore,s.targetId),$i(n,s.targetId)})).catch(ze)):($i(n,s.targetId),await ji(n.localStore,s.targetId,!0))}async function Lg(r,t){const e=j(r),n=e.Fa.get(t),s=e.Ma.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),po(e.remoteStore,n.targetId))}async function Bg(r,t,e){const n=lh(r);try{const s=await(function(a,u){const l=j(a),d=ot.now(),f=u.reduce(((b,V)=>b.add(V.key)),G());let p,I;return l.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let V=Ot(),x=G();return l.cs.getEntries(b,f).next((D=>{V=D,V.forEach(((z,U)=>{U.isValidDocument()||(x=x.add(z))}))})).next((()=>l.localDocuments.getOverlayedDocuments(b,V))).next((D=>{p=D;const z=[];for(const U of u){const F=rp(U,p.get(U.key).overlayedDocument);F!=null&&z.push(new te(U.key,F,Kc(F.value.mapValue),St.exists(!0)))}return l.mutationQueue.addMutationBatch(b,d,z,u)})).next((D=>{I=D;const z=D.applyToLocalDocumentSet(p,x);return l.documentOverlayCache.saveOverlays(b,D.batchId,z)}))})).then((()=>({batchId:I.batchId,changes:sl(p)})))})(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),(function(a,u,l){let d=a.Ba[a.currentUser.toKey()];d||(d=new st($)),d=d.insert(u,l),a.Ba[a.currentUser.toKey()]=d})(n,s.batchId,e),await vr(n,s.changes),await Tr(n.remoteStore)}catch(s){const i=Eo(s,"Failed to persist write");e.reject(i)}}async function ih(r,t){const e=j(r);try{const n=await tg(e.localStore,t);t.targetChanges.forEach(((s,i)=>{const a=e.Na.get(i);a&&(L(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?L(a.va):s.removedDocuments.size>0&&(L(a.va),a.va=!1))})),await vr(e,n,t)}catch(n){await ze(n)}}function Wu(r,t,e){const n=j(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.Fa.forEach(((i,a)=>{const u=a.view.Z_(t);u.snapshot&&s.push(u.snapshot)})),(function(a,u){const l=j(a);l.onlineState=u;let d=!1;l.queries.forEach(((f,p)=>{for(const I of p.j_)I.Z_(u)&&(d=!0)})),d&&To(l)})(n.eventManager,t),s.length&&n.Ca.d_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function Ug(r,t,e){const n=j(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Na.get(t),i=s&&s.key;if(i){let a=new st(O.comparator);a=a.insert(i,ut.newNoDocument(i,B.min()));const u=G().add(i),l=new Vs(B.min(),new Map,new st($),a,u);await ih(n,l),n.Oa=n.Oa.remove(i),n.Na.delete(t),vo(n)}else await ji(n.localStore,t,!1).then((()=>$i(n,t,e))).catch(ze)}async function qg(r,t){const e=j(r),n=t.batch.batchId;try{const s=await Zp(e.localStore,t);ah(e,n,null),oh(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await vr(e,s)}catch(s){await ze(s)}}async function jg(r,t,e){const n=j(r);try{const s=await(function(a,u){const l=j(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let f;return l.mutationQueue.lookupMutationBatch(d,u).next((p=>(L(p!==null),f=p.keys(),l.mutationQueue.removeMutationBatch(d,p)))).next((()=>l.mutationQueue.performConsistencyCheck(d))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(d,f,u))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f))).next((()=>l.localDocuments.getDocuments(d,f)))}))})(n.localStore,t);ah(n,t,e),oh(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await vr(n,s)}catch(s){await ze(s)}}function oh(r,t){(r.ka.get(t)||[]).forEach((e=>{e.resolve()})),r.ka.delete(t)}function ah(r,t,e){const n=j(r);let s=n.Ba[n.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),n.Ba[n.currentUser.toKey()]=s}}function $i(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Ma.get(t))r.Fa.delete(n),e&&r.Ca.$a(n,e);r.Ma.delete(t),r.isPrimaryClient&&r.La.gr(t).forEach((n=>{r.La.containsKey(n)||uh(r,n)}))}function uh(r,t){r.xa.delete(t.path.canonicalString());const e=r.Oa.get(t);e!==null&&(po(r.remoteStore,e),r.Oa=r.Oa.remove(t),r.Na.delete(e),vo(r))}function Xu(r,t,e){for(const n of e)n instanceof nh?(r.La.addReference(n.key,t),zg(r,n)):n instanceof rh?(C("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,t),r.La.containsKey(n.key)||uh(r,n.key)):M()}function zg(r,t){const e=t.key,n=e.path.canonicalString();r.Oa.get(e)||r.xa.has(n)||(C("SyncEngine","New document in limbo: "+e),r.xa.add(n),vo(r))}function vo(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const t=r.xa.values().next().value;r.xa.delete(t);const e=new O(Y.fromString(t)),n=r.qa.next();r.Na.set(n,new xg(e)),r.Oa=r.Oa.insert(e,n),Ql(r.remoteStore,new Xt(Ut(As(e.path)),n,"TargetPurposeLimboResolution",Bt.oe))}}async function vr(r,t,e){const n=j(r),s=[],i=[],a=[];n.Fa.isEmpty()||(n.Fa.forEach(((u,l)=>{a.push(n.Ka(l,t,e).then((d=>{var f;if((d||e)&&n.isPrimaryClient){const p=d?!d.fromCache:(f=e==null?void 0:e.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(d){s.push(d);const p=mo.Wi(l.targetId,d);i.push(p)}})))})),await Promise.all(a),n.Ca.d_(s),await(async function(l,d){const f=j(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>A.forEach(d,(I=>A.forEach(I.$i,(b=>f.persistence.referenceDelegate.addReference(p,I.targetId,b))).next((()=>A.forEach(I.Ui,(b=>f.persistence.referenceDelegate.removeReference(p,I.targetId,b)))))))))}catch(p){if(!ye(p))throw p;C("LocalStore","Failed to update sequence numbers: "+p)}for(const p of d){const I=p.targetId;if(!p.fromCache){const b=f.os.get(I),V=b.snapshotVersion,x=b.withLastLimboFreeSnapshotVersion(V);f.os=f.os.insert(I,x)}}})(n.localStore,i))}async function $g(r,t){const e=j(r);if(!e.currentUser.isEqual(t)){C("SyncEngine","User change. New user:",t.toKey());const n=await jl(e.localStore,t);e.currentUser=t,(function(i,a){i.ka.forEach((u=>{u.forEach((l=>{l.reject(new k(S.CANCELLED,a))}))})),i.ka.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await vr(e,n.hs)}}function Gg(r,t){const e=j(r),n=e.Na.get(t);if(n&&n.va)return G().add(n.key);{let s=G();const i=e.Ma.get(t);if(!i)return s;for(const a of i){const u=e.Fa.get(a);s=s.unionWith(u.view.Va)}return s}}function ch(r){const t=j(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=ih.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Gg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Ug.bind(null,t),t.Ca.d_=Sg.bind(null,t.eventManager),t.Ca.$a=Vg.bind(null,t.eventManager),t}function lh(r){const t=j(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=qg.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=jg.bind(null,t),t}class pr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Ns(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return ql(this.persistence,new Ul,t.initialUser,this.serializer)}Ga(t){return new Bl(xs.Zr,this.serializer)}Wa(t){return new $l}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}pr.provider={build:()=>new pr};class Kg extends pr{constructor(t,e,n){super(),this.Ja=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.Ja.initialize(this,t),await lh(this.Ja.syncEngine),await Tr(this.Ja.remoteStore),await this.persistence.yi((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}za(t){return ql(this.persistence,new Ul,t.initialUser,this.serializer)}ja(t,e){const n=this.persistence.referenceDelegate.garbageCollector;return new kp(n,t.asyncQueue,e)}Ha(t,e){const n=new um(e,this.persistence);return new am(t.asyncQueue,n)}Ga(t){const e=Xp(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Ct.withCacheSize(this.cacheSizeBytes):Ct.DEFAULT;return new fo(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,cg(),ss(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(t){return new $l}}class Is{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Wu(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=$g.bind(null,this.syncEngine),await Rg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new Pg})()}createDatastore(t){const e=Ns(t.databaseInfo.databaseId),n=(function(i){return new ug(i)})(t.databaseInfo);return(function(i,a,u,l){return new dg(i,a,u,l)})(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return(function(n,s,i,a,u){return new mg(n,s,i,a,u)})(this.localStore,this.datastore,t.asyncQueue,(e=>Wu(this.syncEngine,e,0)),(function(){return $u.D()?new $u:new ig})())}createSyncEngine(t,e){return(function(s,i,a,u,l,d,f){const p=new Ng(s,i,a,u,l,d);return f&&(p.Qa=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(s){const i=j(s);C("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Er(i),i.k_.shutdown(),i.q_.set("Unknown")})(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Is.provider={build:()=>new Is};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Pt("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(t,e,n,s,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=xc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async a=>{C("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(n,(a=>(C("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Eo(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function _i(r,t){r.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener((async s=>{n.isEqual(s)||(await jl(t.localStore,s),n=s)})),t.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=t}async function Ju(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Hg(r);C("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener((n=>Gu(t.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,s)=>Gu(t.remoteStore,s))),r._onlineComponents=t}async function Hg(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){C("FirestoreClient","Using user provided OfflineComponentProvider");try{await _i(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;un("Error using user provided cache. Falling back to memory cache: "+e),await _i(r,new pr)}}else C("FirestoreClient","Using default OfflineComponentProvider"),await _i(r,new pr);return r._offlineComponents}async function dh(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(C("FirestoreClient","Using user provided OnlineComponentProvider"),await Ju(r,r._uninitializedComponentsProvider._online)):(C("FirestoreClient","Using default OnlineComponentProvider"),await Ju(r,new Is))),r._onlineComponents}function Wg(r){return dh(r).then((t=>t.syncEngine))}async function fh(r){const t=await dh(r),e=t.eventManager;return e.onListen=kg.bind(null,t.syncEngine),e.onUnlisten=Fg.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Og.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Lg.bind(null,t.syncEngine),e}function Xg(r,t,e={}){const n=new Gt;return r.asyncQueue.enqueueAndForget((async()=>(function(i,a,u,l,d){const f=new hh({next:I=>{f.Za(),a.enqueueAndForget((()=>th(i,p)));const b=I.docs.has(u);!b&&I.fromCache?d.reject(new k(S.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&I.fromCache&&l&&l.source==="server"?d.reject(new k(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(I)},error:I=>d.reject(I)}),p=new eh(As(u.path),f,{includeMetadataChanges:!0,_a:!0});return Zl(i,p)})(await fh(r),r.asyncQueue,t,e,n))),n.promise}function Jg(r,t,e={}){const n=new Gt;return r.asyncQueue.enqueueAndForget((async()=>(function(i,a,u,l,d){const f=new hh({next:I=>{f.Za(),a.enqueueAndForget((()=>th(i,p))),I.fromCache&&l.source==="server"?d.reject(new k(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(I)},error:I=>d.reject(I)}),p=new eh(u,f,{includeMetadataChanges:!0,_a:!0});return Zl(i,p)})(await fh(r),r.asyncQueue,t,e,n))),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(r,t,e){if(!e)throw new k(S.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Yg(r,t,e,n){if(t===!0&&n===!0)throw new k(S.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function Zu(r){if(!O.isDocumentKey(r))throw new k(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function tc(r){if(O.isDocumentKey(r))throw new k(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Os(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=(function(n){return n.constructor?n.constructor.name:null})(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":M()}function Zt(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new k(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Os(r);throw new k(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new k(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new k(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Yg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mh((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new k(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new k(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new k(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(n,s){return n.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ms{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ec({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new k(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ec(t),t.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new Wf;switch(n.type){case"firstParty":return new Zf(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new k(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const n=Yu.get(e);n&&(C("ComponentProvider","Removing Datastore"),Yu.delete(e),n.terminate())})(this),Promise.resolve()}}function Zg(r,t,e,n={}){var s;const i=(r=Zt(r,Ms))._getSettings(),a=`${t}:${e}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&un("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),n.mockUserToken){let u,l;if(typeof n.mockUserToken=="string")u=n.mockUserToken,l=gt.MOCK_USER;else{u=mc(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const d=n.mockUserToken.sub||n.mockUserToken.user_id;if(!d)throw new k(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new gt(d)}r._authCredentials=new Xf(new Cc(u,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Tn(this.firestore,t,this._query)}}class Nt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new me(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Nt(this.firestore,t,this._key)}}class me extends Tn{constructor(t,e,n){super(t,e,As(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Nt(this.firestore,null,new O(t))}withConverter(t){return new me(this.firestore,t,this._path)}}function Oy(r,t,...e){if(r=Ft(r),ph("collection","path",t),r instanceof Ms){const n=Y.fromString(t,...e);return tc(n),new me(r,null,n)}{if(!(r instanceof Nt||r instanceof me))throw new k(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Y.fromString(t,...e));return tc(n),new me(r.firestore,null,n)}}function t_(r,t,...e){if(r=Ft(r),arguments.length===1&&(t=xc.newId()),ph("doc","path",t),r instanceof Ms){const n=Y.fromString(t,...e);return Zu(n),new Nt(r,null,new O(n))}{if(!(r instanceof Nt||r instanceof me))throw new k(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Y.fromString(t,...e));return Zu(n),new Nt(r.firestore,r instanceof me?r.converter:null,new O(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Gl(this,"async_queue_retry"),this.Vu=()=>{const n=ss();n&&C("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=t;const e=ss();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=ss();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise((()=>{}));const e=new Gt;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Pu.push(t),this.pu())))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!ye(t))throw t;C("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}gu(t){const e=this.mu.then((()=>(this.du=!0,t().catch((n=>{this.Eu=n,this.du=!1;const s=(function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u})(n);throw Pt("INTERNAL UNHANDLED ERROR: ",s),n})).then((n=>(this.du=!1,n))))));return this.mu=e,e}enqueueAfterDelay(t,e,n){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const s=Io.createAndSchedule(this,t,e,n,(i=>this.yu(i)));return this.Tu.push(s),s}fu(){this.Eu&&M()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then((()=>{this.Tu.sort(((e,n)=>e.targetTimeMs-n.targetTimeMs));for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()}))}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class vn extends Ms{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new nc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new nc(t),this._firestoreClient=void 0,await t}}}function My(r,t,e){e||(e="(default)");const n=Wi(r,"firestore");if(n.isInitialized(e)){const s=n.getImmediate({identifier:e}),i=n.getOptions(e);if(us(i,t))return s;throw new k(S.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(t.cacheSizeBytes!==void 0&&t.localCache!==void 0)throw new k(S.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(t.cacheSizeBytes!==void 0&&t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new k(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:t,instanceIdentifier:e})}function Fy(r,t){const e=typeof r=="object"?r:vc(),n=typeof r=="string"?r:"(default)",s=Wi(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=dc("firestore");i&&Zg(s,...i)}return s}function wo(r){if(r._terminated)throw new k(S.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||e_(r),r._firestoreClient}function e_(r){var t,e,n;const s=r._freezeSettings(),i=(function(u,l,d,f){return new Dm(u,l,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,mh(f.experimentalLongPollingOptions),f.useFetchStreams)})(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new Qg(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&(function(u){const l=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(l),_online:l}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(t){this._byteString=t}static fromBase64String(t){try{return new _n(dt.fromBase64String(t))}catch(e){throw new k(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new _n(dt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return $(this._lat,t._lat)||$(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0})(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=/^__.*__$/;class r_{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new te(t,this.data,this.fieldMask,e,this.fieldTransforms):new In(t,this.data,e,this.fieldTransforms)}}class gh{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new te(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function _h(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class Po{constructor(t,e,n,s,i,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Po(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:n,xu:!1});return s.Ou(t),s}Nu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:n,xu:!1});return s.vu(),s}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Es(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(_h(this.Cu)&&n_.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class s_{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Ns(t)}Qu(t,e,n,s=!1){return new Po({Cu:t,methodName:e,qu:n,path:it.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function So(r){const t=r._freezeSettings(),e=Ns(r._databaseId);return new s_(r._databaseId,!!t.ignoreUndefinedProperties,e)}function i_(r,t,e,n,s,i={}){const a=r.Qu(i.merge||i.mergeFields?2:0,t,e,s);Vo("Data must be an object, but it was:",a,n);const u=yh(n,a);let l,d;if(i.merge)l=new xt(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const I=Gi(t,p,e);if(!a.contains(I))throw new k(S.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);Eh(f,I)||f.push(I)}l=new xt(f),d=a.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,d=a.fieldTransforms;return new r_(new wt(u),l,d)}class Ls extends Ao{_toFieldTransform(t){if(t.Cu!==2)throw t.Cu===1?t.Bu(`${this._methodName}() can only appear at the top level of your update data`):t.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ls}}function o_(r,t,e,n){const s=r.Qu(1,t,e);Vo("Data must be an object, but it was:",s,n);const i=[],a=wt.empty();$e(n,((l,d)=>{const f=Do(t,l,e);d=Ft(d);const p=s.Nu(f);if(d instanceof Ls)i.push(f);else{const I=wr(d,p);I!=null&&(i.push(f),a.set(f,I))}}));const u=new xt(i);return new gh(a,u,s.fieldTransforms)}function a_(r,t,e,n,s,i){const a=r.Qu(1,t,e),u=[Gi(t,n,e)],l=[s];if(i.length%2!=0)throw new k(S.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<i.length;I+=2)u.push(Gi(t,i[I])),l.push(i[I+1]);const d=[],f=wt.empty();for(let I=u.length-1;I>=0;--I)if(!Eh(d,u[I])){const b=u[I];let V=l[I];V=Ft(V);const x=a.Nu(b);if(V instanceof Ls)d.push(b);else{const D=wr(V,x);D!=null&&(d.push(b),f.set(b,D))}}const p=new xt(d);return new gh(f,p,a.fieldTransforms)}function u_(r,t,e,n=!1){return wr(e,r.Qu(n?4:3,t))}function wr(r,t){if(Ih(r=Ft(r)))return Vo("Unsupported field value:",t,r),yh(r,t);if(r instanceof Ao)return(function(n,s){if(!_h(s.Cu))throw s.Bu(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return(function(n,s){const i=[];let a=0;for(const u of n){let l=wr(u,s.Lu(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}})(r,t)}return(function(n,s){if((n=Ft(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Xm(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ot.fromDate(n);return{timestampValue:pn(s.serializer,i)}}if(n instanceof ot){const i=new ot(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:pn(s.serializer,i)}}if(n instanceof Ro)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof _n)return{bytesValue:_l(s.serializer,n._byteString)};if(n instanceof Nt){const i=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:uo(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof bo)return(function(a,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map((l=>{if(typeof l!="number")throw u.Bu("VectorValues must only contain numeric values.");return ro(u.serializer,l)}))}}}}}})(n,s);throw s.Bu(`Unsupported field value: ${Os(n)}`)})(r,t)}function yh(r,t){const e={};return jc(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):$e(r,((n,s)=>{const i=wr(s,t.Mu(n));i!=null&&(e[n]=i)})),{mapValue:{fields:e}}}function Ih(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ot||r instanceof Ro||r instanceof _n||r instanceof Nt||r instanceof Ao||r instanceof bo)}function Vo(r,t,e){if(!Ih(e)||!(function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)})(e)){const n=Os(e);throw n==="an object"?t.Bu(r+" a custom object"):t.Bu(r+" "+n)}}function Gi(r,t,e){if((t=Ft(t))instanceof Fs)return t._internalPath;if(typeof t=="string")return Do(r,t);throw Es("Field path arguments must be of type string or ",r,!1,void 0,e)}const c_=new RegExp("[~\\*/\\[\\]]");function Do(r,t,e){if(t.search(c_)>=0)throw Es(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new Fs(...t.split("."))._internalPath}catch{throw Es(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function Es(r,t,e,n,s){const i=n&&!n.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${n}`),a&&(l+=` in document ${s}`),l+=")"),new k(S.INVALID_ARGUMENT,u+r+l)}function Eh(r,t){return r.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new l_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Co("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class l_ extends Th{data(){return super.data()}}function Co(r,t){return typeof t=="string"?Do(r,t):t instanceof Fs?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new k(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xo{}class d_ extends xo{}function Ly(r,t,...e){let n=[];t instanceof xo&&n.push(t),n=n.concat(e),(function(i){const a=i.filter((l=>l instanceof No)).length,u=i.filter((l=>l instanceof Bs)).length;if(a>1||a>0&&u>0)throw new k(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const s of n)r=s._apply(r);return r}class Bs extends d_{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Bs(t,e,n)}_apply(t){const e=this._parse(t);return vh(t._query,e),new Tn(t.firestore,t.converter,Ni(t._query,e))}_parse(t){const e=So(t.firestore);return(function(i,a,u,l,d,f,p){let I;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new k(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){sc(p,f);const b=[];for(const V of p)b.push(rc(l,i,V));I={arrayValue:{values:b}}}else I=rc(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||sc(p,f),I=u_(u,a,p,f==="in"||f==="not-in");return Q.create(d,f,I)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function By(r,t,e){const n=t,s=Co("where",r);return Bs._create(s,n,e)}class No extends xo{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new No(t,e)}_parse(t){const e=this._queryConstraints.map((n=>n._parse(t))).filter((n=>n.getFilters().length>0));return e.length===1?e[0]:Z.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(s,i){let a=s;const u=i.getFlattenedFilters();for(const l of u)vh(a,l),a=Ni(a,l)})(t._query,e),new Tn(t.firestore,t.converter,Ni(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function rc(r,t,e){if(typeof(e=Ft(e))=="string"){if(e==="")throw new k(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tl(t)&&e.indexOf("/")!==-1)throw new k(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(Y.fromString(e));if(!O.isDocumentKey(n))throw new k(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return hr(r,new O(n))}if(e instanceof Nt)return hr(r,e._key);throw new k(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Os(e)}.`)}function sc(r,t){if(!Array.isArray(r)||r.length===0)throw new k(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function vh(r,t){const e=(function(s,i){for(const a of s)for(const u of a.getFlattenedFilters())if(i.indexOf(u.op)>=0)return u.op;return null})(r.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new k(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new k(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class f_{convertValue(t,e="none"){switch(Me(t)){case 0:return null;case 1:return t.booleanValue;case 2:return rt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(pe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return $e(t,((s,i)=>{n[s]=this.convertValue(i,e)})),n}convertVectorValue(t){var e,n,s;const i=(s=(n=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map((a=>rt(a.doubleValue)));return new bo(i)}convertGeoPoint(t){return new Ro(rt(t.latitude),rt(t.longitude))}convertArray(t,e){return(t.values||[]).map((n=>this.convertValue(n,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=eo(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(cr(t));default:return null}}convertTimestamp(t){const e=Yt(t);return new ot(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Y.fromString(t);L(Pl(n));const s=new Oe(n.get(1),n.get(3)),i=new O(n.popFirst(5));return s.isEqual(e)||Pt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(r,t,e){let n;return n=r?r.toFirestore(t):t,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class wh extends Th{constructor(t,e,n,s,i,a){super(t,e,n,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new is(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Co("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class is extends wh{data(t={}){return super.data(t)}}class p_{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Xn(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new is(this._firestore,this._userDataWriter,n.key,n,new Xn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new k(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((u=>{const l=new is(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Xn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((u=>i||u.type!==3)).map((u=>{const l=new is(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Xn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),f=a.indexOf(u.doc.key)),{type:g_(u.type),doc:l,oldIndex:d,newIndex:f}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function g_(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(r){r=Zt(r,Nt);const t=Zt(r.firestore,vn);return Xg(wo(t),r._key).then((e=>__(t,r,e)))}class Ah extends f_{constructor(t){super(),this.firestore=t}convertBytes(t){return new _n(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Nt(this.firestore,null,e)}}function qy(r){r=Zt(r,Tn);const t=Zt(r.firestore,vn),e=wo(t),n=new Ah(t);return h_(r._query),Jg(e,r._query).then((s=>new p_(t,n,r,s)))}function jy(r,t,e,...n){r=Zt(r,Nt);const s=Zt(r.firestore,vn),i=So(s);let a;return a=typeof(t=Ft(t))=="string"||t instanceof Fs?a_(i,"updateDoc",r._key,t,e,n):o_(i,"updateDoc",r._key,t),ko(s,[a.toMutation(r._key,St.exists(!0))])}function zy(r){return ko(Zt(r.firestore,vn),[new Ss(r._key,St.none())])}function $y(r,t){const e=Zt(r.firestore,vn),n=t_(r),s=m_(r.converter,t);return ko(e,[i_(So(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,St.exists(!1))]).then((()=>n))}function ko(r,t){return(function(n,s){const i=new Gt;return n.asyncQueue.enqueueAndForget((async()=>Bg(await Wg(n),s,i))),i.promise})(wo(r),t)}function __(r,t,e){const n=e.docs.get(t._key),s=new Ah(r);return new wh(r,s,t._key,n,new Xn(e.hasPendingWrites,e.fromCache),t.converter)}class y_{constructor(t){let e;this.kind="persistent",t!=null&&t.tabManager?(t.tabManager._initialize(t),e=t.tabManager):(e=E_(void 0),e._initialize(t)),this._onlineComponentProvider=e._onlineComponentProvider,this._offlineComponentProvider=e._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function Gy(r){return new y_(r)}class I_{constructor(t){this.forceOwnership=t,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=Is.provider,this._offlineComponentProvider={build:e=>new Kg(e,t==null?void 0:t.cacheSizeBytes,this.forceOwnership)}}}function E_(r){return new I_(r==null?void 0:r.forceOwnership)}(function(t,e=!0){(function(s){yn=s})(Tc),sr(new an("firestore",((n,{instanceIdentifier:s,options:i})=>{const a=n.getProvider("app").getImmediate(),u=new vn(new Jf(n.getProvider("auth-internal")),new em(n.getProvider("app-check-internal")),(function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new k(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oe(d.options.projectId,f)})(a,s),a);return i=Object.assign({useFetchStreams:e},i),u._setSettings(i),u}),"PUBLIC").setMultipleInstances(!0)),de(Ja,"4.7.3",t),de(Ja,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh="firebasestorage.googleapis.com",bh="storageBucket",T_=120*1e3,v_=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends je{constructor(t,e,n=0){super(yi(t),`Firebase Storage: ${e} (${yi(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,lt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return yi(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ct;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ct||(ct={}));function yi(r){return"storage/"+r}function Oo(){const r="An unknown error occurred, please check the error payload for server response.";return new lt(ct.UNKNOWN,r)}function w_(r){return new lt(ct.OBJECT_NOT_FOUND,"Object '"+r+"' does not exist.")}function A_(r){return new lt(ct.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function R_(){const r="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new lt(ct.UNAUTHENTICATED,r)}function b_(){return new lt(ct.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function P_(r){return new lt(ct.UNAUTHORIZED,"User does not have permission to access '"+r+"'.")}function S_(){return new lt(ct.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function V_(){return new lt(ct.CANCELED,"User canceled the upload/download.")}function D_(r){return new lt(ct.INVALID_URL,"Invalid URL '"+r+"'.")}function C_(r){return new lt(ct.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function x_(){return new lt(ct.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+bh+"' property when initializing the app?")}function N_(){return new lt(ct.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function k_(){return new lt(ct.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function O_(r){return new lt(ct.UNSUPPORTED_ENVIRONMENT,`${r} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ki(r){return new lt(ct.INVALID_ARGUMENT,r)}function Ph(){return new lt(ct.APP_DELETED,"The Firebase app was deleted.")}function M_(r){return new lt(ct.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function nr(r,t){return new lt(ct.INVALID_FORMAT,"String does not match format '"+r+"': "+t)}function Gn(r){throw new lt(ct.INTERNAL_ERROR,"Internal error: "+r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=Mt.makeFromUrl(t,e)}catch{return new Mt(t,"")}if(n.path==="")return n;throw C_(t)}static makeFromUrl(t,e){let n=null;const s="([A-Za-z0-9.\\-_]+)";function i(q){q.path.charAt(q.path.length-1)==="/"&&(q.path_=q.path_.slice(0,-1))}const a="(/(.*))?$",u=new RegExp("^gs://"+s+a,"i"),l={bucket:1,path:3};function d(q){q.path_=decodeURIComponent(q.path)}const f="v[A-Za-z0-9_]+",p=e.replace(/[.]/g,"\\."),I="(/([^?#]*).*)?$",b=new RegExp(`^https?://${p}/${f}/b/${s}/o${I}`,"i"),V={bucket:1,path:3},x=e===Rh?"(?:storage.googleapis.com|storage.cloud.google.com)":e,D="([^?#]*)",z=new RegExp(`^https?://${x}/${s}/${D}`,"i"),F=[{regex:u,indices:l,postModify:i},{regex:b,indices:V,postModify:d},{regex:z,indices:{bucket:1,path:2},postModify:d}];for(let q=0;q<F.length;q++){const J=F[q],K=J.regex.exec(t);if(K){const E=K[J.indices.bucket];let g=K[J.indices.path];g||(g=""),n=new Mt(E,g),J.postModify(n);break}}if(n==null)throw D_(t);return n}}class F_{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(r,t,e){let n=1,s=null,i=null,a=!1,u=0;function l(){return u===2}let d=!1;function f(...D){d||(d=!0,t.apply(null,D))}function p(D){s=setTimeout(()=>{s=null,r(b,l())},D)}function I(){i&&clearTimeout(i)}function b(D,...z){if(d){I();return}if(D){I(),f.call(null,D,...z);return}if(l()||a){I(),f.call(null,D,...z);return}n<64&&(n*=2);let F;u===1?(u=2,F=0):F=(n+Math.random())*1e3,p(F)}let V=!1;function x(D){V||(V=!0,I(),!d&&(s!==null?(D||(u=2),clearTimeout(s),p(0)):D||(u=1)))}return p(0),i=setTimeout(()=>{a=!0,x(!0)},e),x}function B_(r){r(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(r){return r!==void 0}function q_(r){return typeof r=="object"&&!Array.isArray(r)}function Mo(r){return typeof r=="string"||r instanceof String}function ic(r){return Fo()&&r instanceof Blob}function Fo(){return typeof Blob<"u"}function oc(r,t,e,n){if(n<t)throw Ki(`Invalid value for '${r}'. Expected ${t} or greater.`);if(n>e)throw Ki(`Invalid value for '${r}'. Expected ${e} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(r,t,e){let n=t;return e==null&&(n=`https://${t}`),`${e}://${n}/v0${r}`}function Sh(r){const t=encodeURIComponent;let e="?";for(const n in r)if(r.hasOwnProperty(n)){const s=t(n)+"="+t(r[n]);e=e+s+"&"}return e=e.slice(0,-1),e}var Ne;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(Ne||(Ne={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(r,t){const e=r>=500&&r<600,s=[408,429].indexOf(r)!==-1,i=t.indexOf(r)!==-1;return e||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(t,e,n,s,i,a,u,l,d,f,p,I=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=u,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=p,this.retry=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((b,V)=>{this.resolve_=b,this.reject_=V,this.start_()})}start_(){const t=(n,s)=>{if(s){n(!1,new Wr(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=u=>{const l=u.loaded,d=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const u=i.getErrorCode()===Ne.NO_ERROR,l=i.getStatus();if(!u||j_(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Ne.ABORT;n(!1,new Wr(!1,null,f));return}const d=this.successCodes_.indexOf(l)!==-1;n(!0,new Wr(d,i))})},e=(n,s)=>{const i=this.resolve_,a=this.reject_,u=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(u,u.getResponse());U_(l)?i(l):i()}catch(l){a(l)}else if(u!==null){const l=Oo();l.serverResponse=u.getErrorText(),this.errorCallback_?a(this.errorCallback_(u,l)):a(l)}else if(s.canceled){const l=this.appDelete_?Ph():V_();a(l)}else{const l=S_();a(l)}};this.canceled_?e(!1,new Wr(!1,null,!0)):this.backoffId_=L_(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&B_(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Wr{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function $_(r,t){t!==null&&t.length>0&&(r.Authorization="Firebase "+t)}function G_(r,t){r["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function K_(r,t){t&&(r["X-Firebase-GMPID"]=t)}function Q_(r,t){t!==null&&(r["X-Firebase-AppCheck"]=t)}function H_(r,t,e,n,s,i,a=!0){const u=Sh(r.urlParams),l=r.url+u,d=Object.assign({},r.headers);return K_(d,t),$_(d,e),G_(d,i),Q_(d,n),new z_(l,r.method,d,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function X_(...r){const t=W_();if(t!==void 0){const e=new t;for(let n=0;n<r.length;n++)e.append(r[n]);return e.getBlob()}else{if(Fo())return new Blob(r);throw new lt(ct.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function J_(r,t,e){return r.webkitSlice?r.webkitSlice(t,e):r.mozSlice?r.mozSlice(t,e):r.slice?r.slice(t,e):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(r){if(typeof atob>"u")throw O_("base-64");return atob(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ii{constructor(t,e){this.data=t,this.contentType=e||null}}function Z_(r,t){switch(r){case $t.RAW:return new Ii(Vh(t));case $t.BASE64:case $t.BASE64URL:return new Ii(Dh(r,t));case $t.DATA_URL:return new Ii(ey(t),ny(t))}throw Oo()}function Vh(r){const t=[];for(let e=0;e<r.length;e++){let n=r.charCodeAt(e);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(e<r.length-1&&(r.charCodeAt(e+1)&64512)===56320))t.push(239,191,189);else{const i=n,a=r.charCodeAt(++e);n=65536|(i&1023)<<10|a&1023,t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(t)}function ty(r){let t;try{t=decodeURIComponent(r)}catch{throw nr($t.DATA_URL,"Malformed data URL.")}return Vh(t)}function Dh(r,t){switch(r){case $t.BASE64:{const s=t.indexOf("-")!==-1,i=t.indexOf("_")!==-1;if(s||i)throw nr(r,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case $t.BASE64URL:{const s=t.indexOf("+")!==-1,i=t.indexOf("/")!==-1;if(s||i)throw nr(r,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let e;try{e=Y_(t)}catch(s){throw s.message.includes("polyfill")?s:nr(r,"Invalid character found")}const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}class Ch{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(e===null)throw nr($t.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;n!=null&&(this.base64=ry(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=t.substring(t.indexOf(",")+1)}}function ey(r){const t=new Ch(r);return t.base64?Dh($t.BASE64,t.rest):ty(t.rest)}function ny(r){return new Ch(r).contentType}function ry(r,t){return r.length>=t.length?r.substring(r.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t,e){let n=0,s="";ic(t)?(this.data_=t,n=t.size,s=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=s}size(){return this.size_}type(){return this.type_}slice(t,e){if(ic(this.data_)){const n=this.data_,s=J_(n,t,e);return s===null?null:new ue(s)}else{const n=new Uint8Array(this.data_.buffer,t,e-t);return new ue(n,!0)}}static getBlob(...t){if(Fo()){const e=t.map(n=>n instanceof ue?n.data_:n);return new ue(X_.apply(null,e))}else{const e=t.map(a=>Mo(a)?Z_($t.RAW,a).data:a.data_);let n=0;e.forEach(a=>{n+=a.byteLength});const s=new Uint8Array(n);let i=0;return e.forEach(a=>{for(let u=0;u<a.length;u++)s[i++]=a[u]}),new ue(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(r){let t;try{t=JSON.parse(r)}catch{return null}return q_(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(r){if(r.length===0)return null;const t=r.lastIndexOf("/");return t===-1?"":r.slice(0,t)}function iy(r,t){const e=t.split("/").filter(n=>n.length>0).join("/");return r.length===0?e:r+"/"+e}function Nh(r){const t=r.lastIndexOf("/",r.length-2);return t===-1?r:r.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(r,t){return t}class bt{constructor(t,e,n,s){this.server=t,this.local=e||t,this.writable=!!n,this.xform=s||oy}}let Xr=null;function ay(r){return!Mo(r)||r.length<2?r:Nh(r)}function kh(){if(Xr)return Xr;const r=[];r.push(new bt("bucket")),r.push(new bt("generation")),r.push(new bt("metageneration")),r.push(new bt("name","fullPath",!0));function t(i,a){return ay(a)}const e=new bt("name");e.xform=t,r.push(e);function n(i,a){return a!==void 0?Number(a):a}const s=new bt("size");return s.xform=n,r.push(s),r.push(new bt("timeCreated")),r.push(new bt("updated")),r.push(new bt("md5Hash",null,!0)),r.push(new bt("cacheControl",null,!0)),r.push(new bt("contentDisposition",null,!0)),r.push(new bt("contentEncoding",null,!0)),r.push(new bt("contentLanguage",null,!0)),r.push(new bt("contentType",null,!0)),r.push(new bt("metadata","customMetadata",!0)),Xr=r,Xr}function uy(r,t){function e(){const n=r.bucket,s=r.fullPath,i=new Mt(n,s);return t._makeStorageReference(i)}Object.defineProperty(r,"ref",{get:e})}function cy(r,t,e){const n={};n.type="file";const s=e.length;for(let i=0;i<s;i++){const a=e[i];n[a.local]=a.xform(n,t[a.server])}return uy(n,r),n}function Oh(r,t,e){const n=xh(t);return n===null?null:cy(r,n,e)}function ly(r,t,e,n){const s=xh(t);if(s===null||!Mo(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(d=>{const f=r.bucket,p=r.fullPath,I="/b/"+a(f)+"/o/"+a(p),b=Lo(I,e,n),V=Sh({alt:"media",token:d});return b+V})[0]}function hy(r,t){const e={},n=t.length;for(let s=0;s<n;s++){const i=t[s];i.writable&&(e[i.server]=r[i.local])}return JSON.stringify(e)}class Mh{constructor(t,e,n,s){this.url=t,this.method=e,this.handler=n,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(r){if(!r)throw Oo()}function dy(r,t){function e(n,s){const i=Oh(r,s,t);return Fh(i!==null),i}return e}function fy(r,t){function e(n,s){const i=Oh(r,s,t);return Fh(i!==null),ly(i,s,r.host,r._protocol)}return e}function Lh(r){function t(e,n){let s;return e.getStatus()===401?e.getErrorText().includes("Firebase App Check token is invalid")?s=b_():s=R_():e.getStatus()===402?s=A_(r.bucket):e.getStatus()===403?s=P_(r.path):s=n,s.status=e.getStatus(),s.serverResponse=n.serverResponse,s}return t}function my(r){const t=Lh(r);function e(n,s){let i=t(n,s);return n.getStatus()===404&&(i=w_(r.path)),i.serverResponse=s.serverResponse,i}return e}function py(r,t,e){const n=t.fullServerUrl(),s=Lo(n,r.host,r._protocol),i="GET",a=r.maxOperationRetryTime,u=new Mh(s,i,fy(r,e),a);return u.errorHandler=my(t),u}function gy(r,t){return r&&r.contentType||t&&t.type()||"application/octet-stream"}function _y(r,t,e){const n=Object.assign({},e);return n.fullPath=r.path,n.size=t.size(),n.contentType||(n.contentType=gy(null,t)),n}function yy(r,t,e,n,s){const i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function u(){let F="";for(let q=0;q<2;q++)F=F+Math.random().toString().slice(2);return F}const l=u();a["Content-Type"]="multipart/related; boundary="+l;const d=_y(t,n,s),f=hy(d,e),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+d.contentType+`\r
\r
`,I=`\r
--`+l+"--",b=ue.getBlob(p,n,I);if(b===null)throw N_();const V={name:d.fullPath},x=Lo(i,r.host,r._protocol),D="POST",z=r.maxUploadRetryTime,U=new Mh(x,D,dy(r,e),z);return U.urlParams=V,U.headers=a,U.body=b.uploadData(),U.errorHandler=Lh(t),U}class Iy{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ne.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ne.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ne.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,n,s){if(this.sent_)throw Gn("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Gn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Gn("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Gn("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Gn("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Ey extends Iy{initXhr(){this.xhr_.responseType="text"}}function Bh(){return new Ey}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t,e){this._service=t,e instanceof Mt?this._location=e:this._location=Mt.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new qe(t,e)}get root(){const t=new Mt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Nh(this._location.path)}get storage(){return this._service}get parent(){const t=sy(this._location.path);if(t===null)return null;const e=new Mt(this._location.bucket,t);return new qe(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw M_(t)}}function Ty(r,t,e){r._throwIfRoot("uploadBytes");const n=yy(r.storage,r._location,kh(),new ue(t,!0),e);return r.storage.makeRequestWithTokens(n,Bh).then(s=>({metadata:s,ref:r}))}function vy(r){r._throwIfRoot("getDownloadURL");const t=py(r.storage,r._location,kh());return r.storage.makeRequestWithTokens(t,Bh).then(e=>{if(e===null)throw k_();return e})}function wy(r,t){const e=iy(r._location.path,t),n=new Mt(r._location.bucket,e);return new qe(r.storage,n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(r){return/^[A-Za-z]+:\/\//.test(r)}function Ry(r,t){return new qe(r,t)}function Uh(r,t){if(r instanceof Bo){const e=r;if(e._bucket==null)throw x_();const n=new qe(e,e._bucket);return t!=null?Uh(n,t):n}else return t!==void 0?wy(r,t):r}function by(r,t){if(t&&Ay(t)){if(r instanceof Bo)return Ry(r,t);throw Ki("To use ref(service, url), the first argument must be a Storage instance.")}else return Uh(r,t)}function ac(r,t){const e=t==null?void 0:t[bh];return e==null?null:Mt.makeFromBucketSpec(e,r)}function Py(r,t,e,n={}){r.host=`${t}:${e}`,r._protocol="http";const{mockUserToken:s}=n;s&&(r._overrideAuthToken=typeof s=="string"?s:mc(s,r.app.options.projectId))}class Bo{constructor(t,e,n,s,i){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Rh,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=T_,this._maxUploadRetryTime=v_,this._requests=new Set,s!=null?this._bucket=Mt.makeFromBucketSpec(s,this._host):this._bucket=ac(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Mt.makeFromBucketSpec(this._url,t):this._bucket=ac(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){oc("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){oc("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new qe(this,t)}_makeRequest(t,e,n,s,i=!0){if(this._deleted)return new F_(Ph());{const a=H_(t,this._appId,n,s,e,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,e){const[n,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,s).getPromise()}}const uc="@firebase/storage",cc="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh="storage";function Ky(r,t,e){return r=Ft(r),Ty(r,t,e)}function Qy(r){return r=Ft(r),vy(r)}function Hy(r,t){return r=Ft(r),by(r,t)}function Wy(r=vc(),t){r=Ft(r);const n=Wi(r,qh).getImmediate({identifier:t}),s=dc("storage");return s&&Sy(n,...s),n}function Sy(r,t,e,n={}){Py(r,t,e,n)}function Vy(r,{instanceIdentifier:t}){const e=r.getProvider("app").getImmediate(),n=r.getProvider("auth-internal"),s=r.getProvider("app-check-internal");return new Bo(e,n,s,t,Tc)}function Dy(){sr(new an(qh,Vy,"PUBLIC").setMultipleInstances(!0)),de(uc,cc,""),de(uc,cc,"esm2017")}Dy();export{vc as a,Fy as b,My as c,E_ as d,Wy as e,zy as f,Cy as g,t_ as h,Ff as i,$y as j,Oy as k,Uy as l,qy as m,Ky as n,Qy as o,Gy as p,Ly as q,Hy as r,jy as u,By as w};
