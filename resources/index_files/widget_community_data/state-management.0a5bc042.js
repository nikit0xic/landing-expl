﻿"use strict";(self.webpackChunkvkwidgets=self.webpackChunkvkwidgets||[]).push([[3140],{53934:(e,t,r)=>{r.d(t,{produce:()=>Q});var n=Object.defineProperty,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,l=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&s(e,r,t[r]);if(a)for(var r of a(t))i.call(t,r)&&s(e,r,t[r]);return e},u=Symbol.for("immer-nothing"),c=Symbol.for("immer-draftable"),f=Symbol.for("immer-state");function d(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var p=Object.getPrototypeOf;function m(e){return!!e&&!!e[f]}function h(e){var t;return!!e&&(g(e)||Array.isArray(e)||!!e[c]||!!(null==(t=e.constructor)?void 0:t[c])||w(e)||k(e))}var y=Object.prototype.constructor.toString();function g(e){if(!e||"object"!=typeof e)return!1;const t=p(e);if(null===t)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===y}function b(e,t){0===v(e)?Object.entries(e).forEach((([r,n])=>{t(r,n,e)})):e.forEach(((r,n)=>t(n,r,e)))}function v(e){const t=e[f];return t?t.type_:Array.isArray(e)?1:w(e)?2:k(e)?3:0}function _(e,t){return 2===v(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function S(e,t,r){const n=v(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function w(e){return e instanceof Map}function k(e){return e instanceof Set}function j(e){return e.copy_||e.base_}function O(e,t){if(w(e))return new Map(e);if(k(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&g(e)){if(!p(e)){const t=Object.create(null);return Object.assign(t,e)}return l({},e)}const r=Object.getOwnPropertyDescriptors(e);delete r[f];let n=Reflect.ownKeys(r);for(let t=0;t<n.length;t++){const a=n[t],o=r[a];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[a]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[a]})}return Object.create(p(e),r)}function P(e,t=!1){return z(e)||m(e)||!h(e)||(v(e)>1&&(e.set=e.add=e.clear=e.delete=A),Object.freeze(e),t&&b(e,((e,t)=>P(t,!0)))),e}function A(){d(2)}function z(e){return Object.isFrozen(e)}var $,x={};function C(e){const t=x[e];return t||d(0),t}function N(){return $}function M(e,t){t&&(C("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function E(e){F(e),e.drafts_.forEach(R),e.drafts_=null}function F(e){e===$&&($=e.parent_)}function D(e){return $={drafts_:[],parent_:$,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function R(e){const t=e[f];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function q(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return void 0!==e&&e!==r?(r[f].modified_&&(E(t),d(4)),h(e)&&(e=I(t,e),t.parent_||K(t,e)),t.patches_&&C("Patches").generateReplacementPatches_(r[f].base_,e,t.patches_,t.inversePatches_)):e=I(t,r,[]),E(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==u?e:void 0}function I(e,t,r){if(z(t))return t;const n=t[f];if(!n)return b(t,((a,o)=>B(e,n,t,a,o,r))),t;if(n.scope_!==e)return t;if(!n.modified_)return K(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const t=n.copy_;let a=t,o=!1;3===n.type_&&(a=new Set(t),t.clear(),o=!0),b(a,((a,i)=>B(e,n,t,a,i,r,o))),K(e,t,!1),r&&e.patches_&&C("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function B(e,t,r,n,a,o,i){if(m(a)){const i=I(e,a,o&&t&&3!==t.type_&&!_(t.assigned_,n)?o.concat(n):void 0);if(S(r,n,i),!m(i))return;e.canAutoFreeze_=!1}else i&&r.add(a);if(h(a)&&!z(a)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;I(e,a),t&&t.scope_.parent_||K(e,a)}}function K(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&P(t,r)}var W={get(e,t){if(t===f)return e;const r=j(e);if(!_(r,t))return function(e,t,r){var n;const a=T(t,r);return a?"value"in a?a.value:null==(n=a.get)?void 0:n.call(e.draft_):void 0}(e,r,t);const n=r[t];return e.finalized_||!h(n)?n:n===U(e.base_,t)?(G(e),e.copy_[t]=X(n,e)):n},has(e,t){return t in j(e)},ownKeys(e){return Reflect.ownKeys(j(e))},set(e,t,r){const n=T(j(e),t);if(null==n?void 0:n.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const n=U(j(e),t),i=null==n?void 0:n[f];if(i&&i.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(((a=r)===(o=n)?0!==a||1/a==1/o:a!=a&&o!=o)&&(void 0!==r||_(e.base_,t)))return!0;G(e),V(e)}var a,o;return e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return void 0!==U(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,G(e),V(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=j(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){d(11)},getPrototypeOf(e){return p(e.base_)},setPrototypeOf(){d(12)}},L={};function U(e,t){const r=e[f];return(r?j(r):e)[t]}function T(e,t){if(!(t in e))return;let r=p(e);for(;r;){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=p(r)}}function V(e){e.modified_||(e.modified_=!0,e.parent_&&V(e.parent_))}function G(e){e.copy_||(e.copy_=O(e.base_,e.scope_.immer_.useStrictShallowCopy_))}b(W,((e,t)=>{L[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),L.deleteProperty=function(e,t){return L.set.call(this,e,t,void 0)},L.set=function(e,t,r){return W.set.call(this,e[0],t,r,e[0])};function X(e,t){const r=w(e)?C("MapSet").proxyMap_(e,t):k(e)?C("MapSet").proxySet_(e,t):function(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:N(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let a=n,o=W;r&&(a=[n],o=L);const{revoke:i,proxy:s}=Proxy.revocable(a,o);return n.draft_=s,n.revoke_=i,s}(e,t);return(t?t.scope_:N()).drafts_.push(r),r}function H(e){if(!h(e)||z(e))return e;const t=e[f];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=O(e,t.scope_.immer_.useStrictShallowCopy_)}else r=O(e,!0);return b(r,((e,t)=>{S(r,e,H(t))})),t&&(t.finalized_=!1),r}var J=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if("function"==typeof e&&"function"!=typeof t){const r=t;t=e;const n=this;return function(e=r,...a){return n.produce(e,(e=>t.call(this,e,...a)))}}let n;if("function"!=typeof t&&d(6),void 0!==r&&"function"!=typeof r&&d(7),h(e)){const a=D(this),o=X(e,void 0);let i=!0;try{n=t(o),i=!1}finally{i?E(a):F(a)}return M(a,r),q(n,a)}if(!e||"object"!=typeof e){if(n=t(e),void 0===n&&(n=e),n===u&&(n=void 0),this.autoFreeze_&&P(n,!0),r){const t=[],a=[];C("Patches").generateReplacementPatches_(e,n,t,a),r(t,a)}return n}d(1)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)));let r,n;return[this.produce(e,t,((e,t)=>{r=e,n=t})),r,n]},"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof(null==e?void 0:e.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){h(e)||d(8),m(e)&&(e=function(e){m(e)||d(10);return H(e)}(e));const t=D(this),r=X(e,void 0);return r[f].isManual_=!0,F(t),r}finishDraft(e,t){const r=e&&e[f];r&&r.isManual_||d(9);const{scope_:n}=r;return M(n,t),q(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));const n=C("Patches").applyPatches_;return m(e)?n(e,t):this.produce(e,(e=>n(e,t)))}},Q=J.produce;J.produceWithPatches.bind(J),J.setAutoFreeze.bind(J),J.setUseStrictShallowCopy.bind(J),J.applyPatches.bind(J),J.createDraft.bind(J),J.finishDraft.bind(J)},4190:(e,t,r)=>{r.d(t,{createGate:()=>S,useEvent:()=>h,useGate:()=>v,useStore:()=>y,useStoreMap:()=>b,useUnit:()=>g});var n=r(67294),a=r(98116),o=r(52798),i=r(61688);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function l(e,t,r,n){let o=[a.step.run({fn:e=>t(e)})];if(n&&o.unshift(n),r){let t=(0,a.createNode)({node:o}),n=e.graphite.id,i=r.additionalLinks,s=i[n]||[];return i[n]=s,s.push(t),()=>{let e=s.indexOf(t);-1!==e&&s.splice(e,1),(0,a.clearNode)(t)}}{let t=(0,a.createNode)({node:o,parent:[e],family:{owners:e}});return()=>{(0,a.clearNode)(t)}}}function u(e,t){return t.displayName=e,t}function c(e,t){a.is.store(e)||w("expect useStore argument to be a store");let r=n.useCallback((r=>l(e,r,t)),[e,t]),o=n.useCallback((()=>P(e,t)),[e,t]);return j(r,o,o)}function f(e,t){let r=a.is.unit(e),o={};r?o={unit:e}:"@@unitShape"in e?"function"==typeof e["@@unitShape"]?o=e["@@unitShape"]():w("expect @@unitShape to be a function"):o=e;let i=Array.isArray(o),u=n.useRef({stale:1,justSubscribed:0,scope:t}),[c,f,d,p,m]=n.useMemo((()=>{u.current.stale=1;let e=Array.isArray(o)?[]:{},r=[],n=[],i=[],s=[];for(let l in o){let u=o[l];a.is.unit(u)||w("expect useUnit argument to be a unit"),a.is.event(u)||a.is.effect(u)?(e[l]=t?(0,a.scopeBind)(u,{scope:t}):u,i.push(l),s.push(u)):(e[l]=null,r.push(l),n.push(u))}return[e,r,n,i,s]}),[u,t,...Object.keys(o),...Object.values(o)]),h=n.useRef({value:c,storeKeys:f,eventKeys:p,eventValues:m}),y=n.useCallback((e=>{let r=u.current;r.justSubscribed=1;let n=()=>{r.stale||(r.stale=1,e())},o=a.step.compute({priority:"sampler",batch:1}),i=d.map((e=>l(e,n,t,o)));return()=>{i.forEach((e=>e()))}}),[d,t,h,u]),g=n.useCallback((()=>{let e,n=h.current,a=u.current,o=0,l=n.value,y=n.storeKeys,g=n.eventKeys,b=n.eventValues,v=t!==a.scope;if(a.stale||a.justSubscribed||v){o=!a.justSubscribed||v,e=i?[...c]:s({},c),y.length===f.length&&g.length===p.length||(o=1);for(let r=0;r<f.length;r++){let n=P(d[r],t),a=f[r];o||(o=y.includes(a)?l[a]!==n:1),e[a]=n}for(let e=0;e<p.length;e++){let t=m[e],r=p[e];o||(o=g.includes(r)?b[g.indexOf(r)]!==t:1)}}return o&&(n.value=e),n.storeKeys=f,n.eventKeys=p,n.eventValues=m,a.stale=0,a.justSubscribed=!o,a.scope=t,r?n.value.unit:n.value}),[y,d,m,t,h,u]);return j(y,g,g)}function d([e,t],r){let o,i,s,u,c=A;t?(o=t,s=e,u=[]):({fn:o,store:s,keys:u,defaultValue:i,updateFilter:c=A}=e),a.is.store(s)||w("useStoreMap expects a store"),Array.isArray(u)||w("useStoreMap expects an array as keys"),"function"!=typeof o&&w("useStoreMap expects a function");let f=n.useCallback((e=>l(s,e,r)),[s,r]),d=n.useCallback((()=>P(s,r)),[s,r]),p=n.useRef(),m=n.useRef(),h=n.useRef(u);return O(f,d,d,(e=>{if(p.current!==e||!((e,t)=>{if(!e||!t||e.length!==t.length)return 0;let r=1;for(let n=0;n<e.length;n++)if(e[n]!==t[n]){r=0;break}return r})(h.current,u)){let t=o(e,u);void 0===t&&void 0!==i&&(t=i),p.current=e,h.current=u,void 0!==t&&(m.current=t)}return m.current}),((e,t)=>!c(t,e)))}function p(e,t={},r){let{open:a,close:o,set:i}=f({open:e.open,close:e.close,set:e.set},r),s=n.useMemo((()=>({open:a,close:o,set:i})),[e,a]),l=n.useRef({value:null,count:0});k((()=>(s.open(l.current.value),()=>s.close(l.current.value))),[s]),((e,t)=>{if(e===t)return 1;if("object"==typeof e&&null!==e&&"object"==typeof t&&null!==t){let r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return 0;for(let n=0;n<r.length;n++){let a=r[n];if(e[a]!==t[a])return 0}return 1}return 0})(l.current.value,t)||(l.current.value=t,l.current.count+=1),k((()=>{s.set(l.current.value)}),[l.current.count])}function m(e){let t=n.useContext(z);return e&&!t&&w("No scope found, consider adding <Provider> to app root"),t}function h(e,t){return((e,t)=>{if(!t)return e;let r=a.is.unit(e)||"object"!=typeof e?{event:e}:e;return n.useMemo((()=>{if(a.is.unit(e))return(0,a.scopeBind)(e,{scope:t});let r=Array.isArray(e)?[]:{};for(let n in e)r[n]=(0,a.scopeBind)(e[n],{scope:t});return r}),[t,...Object.keys(r),...Object.values(r)])})(e,m(null==t?void 0:t.forceScope))}function y(e,t){return c(e,m(null==t?void 0:t.forceScope))}function g(e,t){return f(e,m(null==t?void 0:t.forceScope))}function b(e,t){return d([e,t],m(null==e?void 0:e.forceScope))}function v(e,t={},r){return p(e,t,m(null==r?void 0:r.forceScope))}function _(e,t){let r=t?e:e[0];var n;(e=>{if(!e)throw Error("expect first argument be an object")})(x(n=r)||(e=>"function"==typeof e)(n));let a=r.or,o=r.and;if(o){let r=t?o:o[0];if(x(r)&&"and"in r){let r=_(o,t);e=r[0],a=s({},a,r[1])}else e=o}return[e,a]}function S(...e){return(({domain:e,defaultState:t,hook:r,mainConfig:n,maybeConfig:o})=>{function i(e){return r(i,e,m()),null}let s=C({or:o,and:n}),l=`${e?`${e.compositeName.fullName}/`:""}${s.name||"gate"}`,c=(0,a.createEvent)({name:`${l}.set`,sid:s.sid?`${s.sid}|set`:void 0}),f=(0,a.createEvent)({name:`${l}.open`,sid:s.sid?`${s.sid}|open`:void 0}),d=(0,a.createEvent)({name:`${l}.close`,sid:s.sid?`${s.sid}|close`:void 0}),p=(0,a.createStore)(Boolean(0),{name:`${l}.status`,serialize:"ignore"}).on(f,(()=>Boolean(1))).on(d,(()=>Boolean(0))),h=(0,a.createStore)(t,{name:`${l}.state`,sid:s.sid}).on(c,((e,t)=>t)).on(f,((e,t)=>t)).reset(d);if(e){let{hooks:t}=e;(0,a.launch)({target:[t.store,t.store,t.event,t.event,t.event],params:[p,h,f,d,c]})}return i.open=f,i.close=d,i.status=p,i.state=h,i.set=c,u(`Gate:${l}`,i)})(function(e,t){let r=t&&x(n=t[0])&&(n.and||n.or)?t:[{and:t}];var n;let a,[[o,i],s]=_(r),l={},u={},c=s;var f;return"string"==typeof o?(u={name:o},x(f=i)&&"sid"in f||(l=i||{})):(e=>x(e)&&("domain"in e||"defaultState"in e||"name"in e))(o)&&(u=o,l=o.defaultState||{},a=o.domain),{hook:e,domain:a,defaultState:l,mainConfig:u,maybeConfig:c}}(p,e))}let w=e=>{throw Error(e)},k="undefined"!=typeof window?n.useLayoutEffect:n.useEffect;const{useSyncExternalStore:j}=i,{useSyncExternalStoreWithSelector:O}=o,P=(e,t)=>t?t.getState(e):e.getState(),A=(e,t)=>e!==t,z=n.createContext(null);let{Provider:$}=z,x=e=>"object"==typeof e&&null!==e,C=(e,t={})=>(x(e)&&(C(e.or,t),(e=>{for(let a in e)n=a,(e=>void 0===e)(r=e[a])||"or"===n||"and"===n||(t[n]=r);var r,n})(e),C(e.and,t)),t)},98116:(e,t,r)=>{function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}function a(e,t){for(let r in e)t(e[r],r)}function o(e,t){e.forEach(t)}function i(e,t){if(!e)throw Error(t)}function s({node:e=[],from:t,source:r,parent:n=t||r,to:a,target:i,child:s=a||i,scope:l={},meta:u={},family:c={type:"regular"},regional:f}={}){let d=de(n),p=de(c.links),m=de(c.owners),h=[];o(e,(e=>e&&Z(h,e)));let y={id:oe(),seq:h,next:de(s),meta:u,scope:l,family:{type:c.type||"crosslink",links:p,owners:m}};return o(p,(e=>Z(M(e),y))),o(m,(e=>Z(E(e),y))),o(d,(e=>Z(e.next,y))),f&&se&&fe(D(se),[y]),y}function l(e,t,r){let n,a=Xe,i=null,s=Ue;if(e.target&&(t=e.params,r=e.defer,n=e.meta,a="page"in e?e.page:a,e.stack&&(i=e.stack),s=I(e)||s,e=e.target),s&&Ue&&s!==Ue&&(Ue=null),Array.isArray(e))for(let r=0;r<e.length;r++)Be("pure",a,N(e[r]),i,t[r],s,n);else Be("pure",a,N(e),i,t,s,n);if(r&&!Te)return;let l,u,c,f,d,p,m={isRoot:Te,currentPage:Xe,scope:Ue,isWatch:Ve,isPure:Ge};Te=0;e:for(;f=Ie();){let{idx:e,stack:t,type:r}=f;c=t.node,Xe=d=t.page,Ue=I(t),d?p=d.reg:Ue&&(p=Ue.reg);let n=!!d,a=!!Ue,i={fail:0,scope:c.scope};l=u=0;for(let o=e;o<c.seq.length&&!l;o++){let s=c.seq[o];if(s.order){let{priority:n,barrierID:a}=s.order,i=a?d?`${d.fullID}_${a}`:a:0;if(o!==e||r!==n){a?Le.has(i)||(Le.add(i),Ke(o,t,n,a)):Ke(o,t,n);continue e}a&&Le.delete(i)}switch(s.type){case"mov":{let e,r=s.data;switch(r.from){case C:e=D(t);break;case"a":case"b":e=t[r.from];break;case"value":e=r.store;break;case"store":if(p&&!p[r.store.id])if(n){let e=Qe(d,r.store.id);t.page=d=e,e?p=e.reg:a?(tt(Ue,r.store,0,1,r.softRead),p=Ue.reg):p=void 0}else a&&tt(Ue,r.store,0,1,r.softRead);e=Me(p&&p[r.store.id]||r.store)}switch(r.to){case C:t.value=e;break;case"a":case"b":t[r.to]=e;break;case"store":Ze(d,Ue,c,r.target).current=e}break}case"compute":let e=s.data;if(e.fn){Ve="watch"===B(c,"op"),Ge=e.pure;let r=e.safe?(0,e.fn)(D(t),i.scope,t):rt(i,e.fn,t);e.filter?u=!r:t.value=r,Ve=m.isWatch,Ge=m.isPure}}l=i.fail||u}if(Ye&&Ye(t,i),!l){let e=D(t),r=I(t);if(o(c.next,(n=>{Be("child",d,n,t,e,r)})),r){B(c,"needFxCounter")&&Be("child",d,r.fxCount,t,e,r),B(c,"storeChange")&&Be("child",d,r.storeChange,t,e,r),B(c,"warnSerialize")&&Be("child",d,r.warnSerializeNode,t,e,r);let n=r.additionalLinks[c.id];n&&o(n,(n=>{Be("child",d,n,t,e,r)}))}}}Te=m.isRoot,Xe=m.currentPage,Ue=I(m)}function u(e,t="combine"){let r=t+"(",n="",o=0;return a(e,(e=>{o<25&&(null!=e&&(r+=n,r+=L(e)?W(e).fullName:e.toString()),o+=1,n=", ")})),r+")"}function c(e,t){let r,n,a=e;if(t){let a=W(t);0===e.length?(r=a.path,n=a.fullName):(r=a.path.concat([e]),n=0===a.fullName.length?e:a.fullName+"/"+e)}else r=0===e.length?[]:[e],n=e;return{shortName:a,fullName:n,path:r}}function f(e,t){let r=t?e:e[0];ye(r);let a=r.or,o=r.and;if(o){let r=t?o:o[0];if(pe(r)&&"and"in r){let r=f(o,t);e=r[0],a=n({},a,r[1])}else e=o}return[e,a]}function d(e,...t){let r=ue();if(r){let n=r.handlers[e];if(n)return n(r,...t)}}function p(e,t){let r=nt({or:t,and:"string"==typeof e?{name:e}:e}),n=(e,...t)=>(ee(!B(n,"derived"),"call of derived event","createEvent"),ee(!Ge,"unit call from pure function","operators like sample"),Xe?((e,t,r,n)=>{let a=Xe,o=null;if(t)for(o=Xe;o&&o.template!==t;)o=q(o);Je(o);let i=e.create(r,n);return Je(a),i})(n,a,e,t):n.create(e,t)),a=ue(),o=Object.assign(n,{graphite:s({meta:pt(r.actualOp||"event",n,r),regional:1}),create:e=>(l({target:n,params:e,scope:Ue}),e),watch:e=>ft(n,e),map:e=>mt(n,x,e,[xe()]),filter:e=>mt(n,"filter",e.fn?e:e.fn,[xe(we,1)]),filterMap:e=>mt(n,"filterMap",e,[xe(),ze((e=>!he(e)),1)]),prepend(e){let t=p("* ? "+n.shortName,{parent:q(n)});return d("eventPrepend",N(t)),ut(t,n,[xe()],"prepend",e),dt(n,t),t}});return null!=r&&r.domain&&r.domain.hooks.event(o),K(o,"id",o.graphite.id),le(o.graphite),o}function m(e,t,r,n){return be(r,t,"first argument"),i(me(n),"second argument should be a function"),ee(!B(e,"derived"),`${t} in derived store`,`${t} in store created via createStore`),o(Array.isArray(r)?r:[r],(t=>{e.off(t),R(e).set(t,lt(ht(t,e,"on",Se,n)))})),e}function h(e,t){let r=nt(t),a=Ne(e),u=p({named:"updates",derived:1});d("storeBase",a);let c=a.id,f={subscribers:new Map,updates:u,defaultState:e,stateRef:a,getState(){let e,t=a;if(Xe){let t=Xe;for(;t&&!t.reg[c];)t=q(t);t&&(e=t)}return!e&&Ue&&(tt(Ue,a,1),e=Ue),e&&(t=e.reg[c]),Me(t)},setState:e=>l({target:f,params:e,defer:1,scope:Ue}),reset:(...e)=>(o(e,(e=>m(f,".reset",e,(()=>f.defaultState)))),f),on:(e,t)=>m(f,".on",e,t),off(e){let t=R(f).get(e);return t&&(t(),R(f).delete(e)),f},map(e,t){let r,n;pe(e)&&(r=e,e=e.fn),ee(he(t),"second argument of store.map","updateFilter");let o=f.getState();ue()?n=null:he(o)||(n=e(o,t));let i=h(n,{name:`${f.shortName} ? *`,derived:1,and:r}),s=ht(f,i,x,_e,e);return Ee(F(i),{type:x,fn:e,from:a}),F(i).noInit=1,d("storeMap",a,s),i},watch(e,t){if(!t||!L(e)){let t=ft(f,e);return d("storeWatch",a,e)||e(f.getState()),t}return i(me(t),"second argument should be a function"),e.watch((e=>t(f.getState(),e)))}},y=pt("store",f,r),g=f.defaultConfig.updateFilter;f.graphite=s({scope:{state:a,fn:g},node:[ze(((e,t,r)=>(r.scope&&!r.scope.reg[a.id]&&(r.b=1),e))),$e(a),ze(((e,t,{a:r,b:n})=>!he(e)&&(e!==r||n)),1),g&&xe(_e,1),Oe({from:C,target:a})],child:u,meta:n({},y,{defaultState:e}),regional:1}),K(f,"id",f.graphite.id),K(f,"rootStateRefId",c);let b=B(f,"serialize"),v=B(f,"derived"),_="ignore"===b,S=B(f,"sid");return S&&(K(f,"storeChange",1),a.sid=S),S||_||v||K(f,"warnSerialize",1),i(v||!he(e),"current state can't be undefined, use null instead"),fe(f,[u]),null!=r&&r.domain&&r.domain.hooks.store(f),v||(f.reinit=p({named:"reinit"}),f.reset(f.reinit)),a.meta=f.graphite.meta,le(f.graphite),f}function y(...e){let t,r,n;[e,n]=f(e);let a,o,s,l=e[e.length-1];if(me(l)?(r=e.slice(0,-1),t=l):r=e,1===r.length){let e=r[0];T(e)||(a=e,o=1)}if(!o&&(a=r,t)){s=1;let e=t;t=t=>e(...t)}return i(pe(a),"shape should be an object"),yt(Array.isArray(a),!s,a,n,t)}function g(){let e={};return e.req=new Promise(((t,r)=>{e.rs=t,e.rj=r})),e.req.catch((()=>{})),e}function b(e,t={}){let r=nt(me(e)?{handler:e}:e,t),a=p(me(e)?{handler:e}:e,n({},t,{actualOp:"effect"})),o=N(a);K(o,"op",a.kind="effect"),a.use=e=>(i(me(e),".use argument should be a function"),y.scope.handler=e,a),a.use.getCurrent=()=>y.scope.handler;let u=a.finally=p({named:"finally",derived:1}),c=a.done=u.filterMap({named:"done",fn({status:e,params:t,result:r}){if("done"===e)return{params:t,result:r}}}),f=a.fail=u.filterMap({named:"fail",fn({status:e,params:t,error:r}){if("fail"===e)return{params:t,error:r}}}),d=a.doneData=c.map({named:"doneData",fn:({result:e})=>e}),m=a.failData=f.map({named:"failData",fn:({error:e})=>e}),y=s({scope:{handler:a.defaultConfig.handler||(()=>i(0,`no handler used in ${a.getType()}`))},node:[ze(((e,t,r)=>{let n=t.handler,o=I(r);if(o){let e=o.handlers.unitMap.get(a)||o.handlers.sidMap[a.sid];e&&(n=e)}return e.handler=n,e}),0,1),ze((({params:e,req:t,handler:r,args:n=[e]},a,o)=>{let i=bt(o),s=vt(e,t,1,u,o,i),l=vt(e,t,0,u,o,i),[c,f]=gt(r,l,n);c&&(pe(f)&&me(f.then)?f.then(s,l):s(f))}),0,1)],meta:{op:"fx",fx:"runner"}});o.scope.runner=y,Z(o.seq,ze(((e,{runner:t},r)=>{let n=q(r)?{params:e,req:{rs(e){},rj(e){}}}:e;return r.meta||(r.meta={fxID:ie()}),l({target:t,params:n,defer:1,scope:I(r),meta:r.meta}),n.params}),0,1)),a.create=e=>{let t=g(),r={params:e,req:t};if(Ue&&!Ve){let e=Ue;t.req.finally((()=>{He(e)})).catch((()=>{}))}return l({target:a,params:r,scope:Ue}),t.req};let b=a.inFlight=h(0,{serialize:"ignore",named:(B(a,"name")||a.graphite.id)+".inFlight"}).on(a,(e=>e+1)).on(u,(e=>e-1)).map({fn:e=>e,named:"inFlight"});K(u,"needFxCounter","dec"),K(a,"needFxCounter",1);let v=a.pending=b.map({fn:e=>e>0,named:"pending"});return fe(a,[u,c,f,d,m,v,b]),null!=r&&r.domain&&r.domain.hooks.effect(a),a}function v(e){let t;[e,t]=f(e,1);let{source:r,effect:n,mapParams:a}=e,o=b(e,t);K(o,"attached",1);let i,{runner:s}=N(o).scope,u=ze(((e,t,n)=>{let i,{params:s,req:u,handler:c}=e,f=o.finally,d=bt(n),p=vt(s,u,0,f,n,d),m=n.a,h=G(c),y=1;if(a?[y,i]=gt(a,p,[s,m]):i=r&&h?m:s,y){if(!h)return e.args=[m,i],1;l({target:c,params:{params:i,req:{rs:vt(s,u,1,f,n,d),rj:p}},page:n.page,defer:1,meta:n.meta})}}),1,1);if(r){let e;T(r)?(e=r,fe(e,[o])):(e=y(r),fe(o,[e])),i=[$e(F(e)),u]}else i=[u];s.seq.splice(1,0,...i),o.use(n);let d=q(n);return d&&(Object.assign(W(o),c(o.shortName,d)),o.defaultConfig.parent=d),dt(n,o,"effect"),o}function _(...e){let[[t,r],n]=f(e),o={};return a(r,((e,r)=>{let a=o[r]=p(r,{parent:q(t),config:n});t.on(a,e),dt(t,a)})),o}function S(e,t){let r=nt({or:t,and:"string"==typeof e?{name:e}:e}),n=s({family:{type:"domain"},regional:1,parent:(null==r?void 0:r.domain)||(null==r?void 0:r.parent)}),i={history:{},graphite:n,hooks:{}};n.meta=pt("domain",i,{parent:(null==r?void 0:r.domain)||(null==r?void 0:r.parent),or:r}),a({Event:p,Effect:b,Store:h,Domain:S},((e,t)=>{let r=t.toLowerCase(),n=p({named:`on${t}`});i.hooks[r]=n;let a=new Set;i.history[`${r}s`]=a,n.create=e=>(l(n,e),e),Z(N(n).seq,ze(((e,t,r)=>(r.scope=null,e)))),n.watch((e=>{fe(i,[e]),a.add(e),e.ownerSet||(e.ownerSet=a),q(e)||(e.parent=i)})),fe(i,[n]),i[`onCreate${t}`]=e=>(o(a,e),n.watch(e)),i[`create${t}`]=i[r]=(t,r)=>{let a=nt({and:r,or:t});return null!=a&&a.domain?e(t,r):n(e(t,{parent:i,or:a}))}}));let u=q(i);return u&&a(i.hooks,((e,t)=>ut(e,u.hooks[t]))),null!=r&&r.domain&&r.domain.hooks.domain(i),i}function w(e,t){be(e,"merge","first argument");let r=p({name:u(e,"merge"),derived:1,and:t});return ut(e,r,[],"merge"),r}function k(e,t){let r=0;return o(St,(n=>{n in e&&(i(null!=e[n],wt(t,n)),r=1)})),r}function j(...e){let t,r,n,a,[[o,i,s],l]=f(e),u=1;return he(i)&&pe(o)&&k(o,"sample")&&(i=o.clock,s=o.fn,u=!o.greedy,a=o.filter,t=o.target,r=o.name,n=o.sid,o=o.source),kt("sample",i,o,a,t,s,r,l,u,1,0,n)}function O(...e){let[[t,r],n]=f(e);return r||(r=t,t=r.source),k(r,"guard"),kt("guard",r.clock,t,r.filter,r.target,null,r.name,n,!r.greedy,0,1)}function P(e,t,r){if(T(e))return ee(0,"restore($store)"),e;if(V(e)||G(e)){let n=q(e),a=h(t,{parent:n,name:e.shortName,and:r});return ut(G(e)?e.doneData:e,a),n&&n.hooks.store(a),a}let n=Array.isArray(e)?[]:{};return a(e,((e,t)=>n[t]=T(e)?e:h(e,{name:t}))),n}function A(...e){let t,r,n="split",[[o,l],u]=f(e),c=!l;c&&(t=o.cases,l=o.match,r=o.clock,o=o.source);let m=T(l),h=!L(l)&&me(l),y=!m&&!h&&pe(l);i(L(o),"source must be a unit"),t||(t={}),c?a(t,((e,t)=>ve(n,e,`cases.${t}`))):(i(y,"match should be an object"),a(l,((e,r)=>t[r]=p({derived:1,named:`cases.${r}`,and:u}))),t.__=p({derived:1,named:"cases.__",and:u}));let g,b=new Set([].concat(o,r||[],Object.values(t))),v=Object.keys(m||h?t:l);if(m||h)m&&b.add(l),g=[m&&$e(F(l),0,1),Pe({safe:m,filter:1,pure:!m,fn(e,t,r){let n=String(m?r.a:l(e));Pt(t,Q(v,n)?n:"__",e,r)}})];else if(y){let e=Ne({});e.type="shape";let t,r=[];a(l,((n,a)=>{if(L(n)){t=1,Z(r,a),b.add(n);let o=ut(n,[],[$e(e),ze(((e,t,{a:r})=>r[a]=e))]);if(T(n)){e.current[a]=n.getState();let t=F(n);Ee(e,{from:t,field:a,type:"field"}),d("splitMatchStore",t,o)}}})),t&&d("splitBase",e),g=[t&&$e(e,0,1),xe(((e,t,n)=>{for(let a=0;a<v.length;a++){let o=v[a];if(Q(r,o)?n.a[o]:l[o](e))return void Pt(t,o,e,n)}Pt(t,"__",e,n)}),1)]}else i(0,"expect match to be unit, function or object");let _=s({meta:{op:n},parent:r?[]:o,scope:t,node:g,family:{owners:Array.from(b)},regional:1});if(r&&kt(n,r,o,null,_,null,n,u,0,0,0),!c)return t}function z(e,{scope:t,safe:r}={}){i(t||Ue||r,"scopeBind cannot be called outside of forked .watch");let n=t||Ue;return G(e)?t=>{let r=g();return l({target:e,params:{params:t,req:r},scope:n}),r.req}:t=>(l({target:e,params:t,scope:n}),t)}r.d(t,{attach:()=>v,clearNode:()=>st,combine:()=>y,createApi:()=>_,createDomain:()=>S,createEffect:()=>b,createEvent:()=>p,createNode:()=>s,createStore:()=>h,forward:()=>ct,guard:()=>O,is:()=>J,launch:()=>l,restore:()=>P,sample:()=>j,scopeBind:()=>z,split:()=>A,step:()=>Ce});let $="undefined"!=typeof Symbol&&Symbol.observable||"@@observable",x="map",C="stack",N=e=>e.graphite||e,M=e=>e.family.owners,E=e=>e.family.links,F=e=>e.stateRef,D=e=>e.value,R=e=>e.subscribers,q=e=>e.parent,I=e=>e.scope,B=(e,t)=>N(e).meta[t],K=(e,t,r)=>N(e).meta[t]=r,W=e=>e.compositeName,L=e=>(me(e)||pe(e))&&"kind"in e;const U=e=>t=>L(t)&&t.kind===e;let T=U("store"),V=U("event"),G=U("effect"),X=U("domain"),H=U("scope");var J={__proto__:null,unit:L,store:T,event:V,effect:G,domain:X,scope:H,attached:e=>G(e)&&1==B(e,"attached")};let Q=(e,t)=>e.includes(t),Y=(e,t)=>{let r=e.indexOf(t);-1!==r&&e.splice(r,1)},Z=(e,t)=>e.push(t),ee=(e,t,r)=>!e&&console.error(`${t} is deprecated${r?`, use ${r} instead`:""}`);const te=()=>{let e=0;return()=>""+ ++e};let re,ne=te(),ae=te(),oe=te(),ie=te(),se=null,le=e=>{re&&re(e,se)},ue=()=>se&&se.template,ce=e=>(e&&se&&se.sidRoot&&(e=`${se.sidRoot}|${e}`),e),fe=(e,t)=>{let r=N(e);o(t,(e=>{let t=N(e);"domain"!==r.family.type&&(t.family.type="crosslink"),Z(M(t),r),Z(E(r),t)}))},de=(e=[])=>(Array.isArray(e)?e:[e]).flat().map(N),pe=e=>"object"==typeof e&&null!==e,me=e=>"function"==typeof e,he=e=>void 0===e,ye=e=>i(pe(e)||me(e),"expect first argument be an object");const ge=(e,t,r,n)=>i(!(!pe(e)&&!me(e)||!("family"in e)&&!("graphite"in e)),`${t}: expect ${r} to be a unit (store, event or effect)${n}`);let be=(e,t,r)=>{Array.isArray(e)?o(e,((e,n)=>ge(e,t,`${n} item of ${r}`,""))):ge(e,t,r," or array of units")},ve=(e,t,r="target")=>o(de(t),(t=>ee(!B(t,"derived"),`${e}: derived unit in "${r}"`,"createEvent/createStore"))),_e=(e,{fn:t},{a:r})=>t(e,r),Se=(e,{fn:t},{a:r})=>t(r,e),we=(e,{fn:t})=>t(e);const ke=(e,t,r,n)=>{let a={id:ae(),type:e,data:t};return r&&(a.order={priority:r},n&&(a.order.barrierID=++je)),a};let je=0,Oe=({from:e="store",store:t,target:r,to:n=(r?"store":C),batch:a,priority:o})=>ke("mov",{from:e,store:t,to:n,target:r},o,a),Pe=({fn:e,batch:t,priority:r,safe:n=0,filter:a=0,pure:o=0})=>ke("compute",{fn:e,safe:n,filter:a,pure:o},r,t),Ae=({fn:e})=>Pe({fn:e,priority:"effect"}),ze=(e,t,r)=>Pe({fn:e,safe:1,filter:t,priority:r&&"effect"}),$e=(e,t,r)=>Oe({store:e,to:t?C:"a",priority:r&&"sampler",batch:1}),xe=(e=we,t)=>Pe({fn:e,pure:1,filter:t}),Ce={mov:Oe,compute:Pe,filter:({fn:e,pure:t})=>Pe({fn:e,filter:1,pure:t}),run:Ae},Ne=e=>({id:ae(),current:e}),Me=({current:e})=>e,Ee=(e,t)=>{e.before||(e.before=[]),Z(e.before,t)},Fe=null;const De=(e,t)=>{if(!e)return t;if(!t)return e;let r;return(e.v.type===t.v.type&&e.v.id>t.v.id||We(e.v.type)>We(t.v.type))&&(r=e,e=t,t=r),r=De(e.r,t),e.r=e.l,e.l=r,e},Re=[];let qe=0;for(;qe<6;)Z(Re,{first:null,last:null,size:0}),qe+=1;const Ie=()=>{for(let e=0;e<6;e++){let t=Re[e];if(t.size>0){if(3===e||4===e){t.size-=1;let e=Fe.v;return Fe=De(Fe.l,Fe.r),e}1===t.size&&(t.last=null);let r=t.first;return t.first=r.r,t.size-=1,r.v}}},Be=(e,t,r,n,a,o,i)=>Ke(0,{a:null,b:null,node:r,parent:n,value:a,page:t,scope:o,meta:i},e),Ke=(e,t,r,n=0)=>{let a=We(r),o=Re[a],i={v:{idx:e,stack:t,type:r,id:n},l:null,r:null};3===a||4===a?Fe=De(Fe,i):(0===o.size?o.first=i:o.last.r=i,o.last=i),o.size+=1},We=e=>{switch(e){case"child":return 0;case"pure":return 1;case"read":return 2;case"barrier":return 3;case"sampler":return 4;case"effect":return 5;default:return-1}},Le=new Set;let Ue,Te=1,Ve=0,Ge=0,Xe=null,He=e=>{Ue=e},Je=e=>{Xe=e};const Qe=(e,t)=>{if(e){for(;e&&!e.reg[t];)e=q(e);if(e)return e}return null};let Ye,Ze=(e,t,r,n,a)=>{let o=Qe(e,n.id);return o?o.reg[n.id]:t?(tt(t,n,a),t.reg[n.id]):n};const et=e=>e;let tt=(e,t,r,a,i)=>{var s;let l=e.reg,u=t.sid,c=null==t||null===(s=t.meta)||void 0===s?void 0:s.serialize,f=e.fromSerialize&&"ignore"!==c&&(null==c?void 0:c.read)||et;if(l[t.id])return;let d={id:t.id,current:t.current,meta:t.meta};if(d.id in e.values.idMap)d.current=e.values.idMap[d.id];else if(u&&u in e.values.sidMap&&!(u in e.sidIdMap))d.current=f(e.values.sidMap[u]);else if(t.before&&!i){let i=0,s=r||!t.noInit||a;o(t.before,(t=>{switch(t.type){case x:{let n=t.from;if(n||t.fn){n&&tt(e,n,r,a);let o=n&&l[n.id].current;s&&(d.current=t.fn?t.fn(o):o)}break}case"field":i||(i=1,d.current=Array.isArray(d.current)?[...d.current]:n({},d.current)),tt(e,t.from,r,a),s&&(d.current[t.field]=l[l[t.from.id].id].current)}}))}u&&(e.sidIdMap[u]=t.id),l[t.id]=d};const rt=(e,t,r)=>{try{return t(D(r),e.scope,r)}catch(t){console.error(t),e.fail=1,e.failReason=t}};let nt=(e,t={})=>(pe(e)&&(nt(e.or,t),a(e,((e,r)=>{he(e)||"or"===r||"and"===r||(t[r]=e)})),nt(e.and,t)),t);const at=(e,t)=>{Y(e.next,t),Y(M(e),t),Y(E(e),t)},ot=(e,t,r)=>{let n;e.next.length=0,e.seq.length=0,e.scope=null;let a=E(e);for(;n=a.pop();)at(n,e),(t||r&&"sample"!==B(e,"op")||"crosslink"===n.family.type)&&ot(n,t,"on"!==B(n,"op")&&r);for(a=M(e);n=a.pop();)at(n,e),r&&"crosslink"===n.family.type&&ot(n,t,"on"!==B(n,"op")&&r)},it=e=>e.clear();let st=(e,{deep:t}={})=>{let r=0;if(e.ownerSet&&e.ownerSet.delete(e),T(e))it(R(e));else if(X(e)){r=1;let t=e.history;it(t.events),it(t.effects),it(t.stores),it(t.domains)}ot(N(e),!!t,r)},lt=e=>{let t=()=>st(e);return t.unsubscribe=t,t},ut=(e,t,r,n,a)=>s({node:r,parent:e,child:t,scope:{fn:a},meta:{op:n},family:{owners:[e,t],links:t},regional:1}),ct=e=>{let t="forward",[{from:r,to:n},a]=f(e,1);return be(r,t,'"from"'),be(n,t,'"to"'),ve(t,n,"to"),lt(s({parent:r,child:n,meta:{op:t,config:a},family:{},regional:1}))},ft=(e,t)=>(i(me(t),".watch argument should be a function"),lt(s({scope:{fn:t},node:[Ae({fn:we})],parent:e,meta:{op:"watch"},family:{owners:e},regional:1}))),dt=(e,t,r="event")=>{q(e)&&q(e).hooks[r](t)},pt=(e,t,r)=>{let n=nt(r),a="domain"===e,o=ne(),{sid:i=null,named:s=null,domain:l=null,parent:u=l}=n,f=s||n.name||(a?"":o),d=c(f,u),p={op:t.kind=e,name:t.shortName=f,sid:t.sid=ce(i),named:s,unitId:t.id=o,serialize:n.serialize,derived:n.derived,config:n};if(t.parent=u,t.compositeName=d,t.defaultConfig=n,t.thru=e=>(ee(0,"thru","js pipe"),e(t)),t.getType=()=>d.fullName,!a){t.subscribe=e=>(ye(e),t.watch(me(e)?e:t=>e.next&&e.next(t))),t[$]=()=>t;let e=ue();e&&(p.nativeTemplate=e)}return p};const mt=(e,t,r,n)=>{let a;pe(r)&&(a=r,r=r.fn);let o=p({name:`${e.shortName} ? *`,derived:1,and:a});return ut(e,o,n,t,r),o},ht=(e,t,r,n,a)=>{let o=F(t),i=Oe({store:o,to:"a",priority:"read"});r===x&&(i.data.softRead=1);let s=[i,xe(n)];return d("storeOnMap",o,s,T(e)&&F(e)),ut(e,t,s,r,a)},yt=(e,t,r,o,s)=>{let l=e?e=>[...e]:e=>n({},e),c=e?[]:{},f=l(c),p=Ne(f),m=Ne(1);p.type=e?"list":"shape",p.noInit=1,d("combineBase",p,m);let y=h(f,{name:u(r),derived:1,and:o}),g=F(y);g.noInit=1,K(y,"isCombine",1);let b=$e(p);b.order={priority:"barrier"};let v=[ze(((e,t,r)=>(r.scope&&!r.scope.reg[p.id]&&(r.c=1),e))),b,Oe({store:m,to:"b"}),ze(((e,{key:r},n)=>{if(n.c||e!==n.a[r])return t&&n.b&&(n.a=l(n.a)),n.a[r]=e,1}),1),Oe({from:"a",target:p}),Oe({from:"value",store:0,target:m}),Oe({from:"value",store:1,target:m,priority:"barrier",batch:1}),$e(p,1),s&&xe()];return a(r,((e,t)=>{if(!T(e))return i(!L(e)&&!he(e),`combine expects a store in a field ${t}`),void(f[t]=c[t]=e);c[t]=e.defaultState,f[t]=e.getState();let r=ut(e,y,v,"combine",s);r.scope.key=t;let n=F(e);Ee(p,{type:"field",field:t,from:n}),d("combineField",n,r)})),y.defaultShape=r,Ee(g,{type:x,from:p,fn:s}),ue()||(y.defaultState=s?g.current=s(f):c),y};let gt=(e,t,r)=>{try{return[1,e(...r)]}catch(e){return t(e),[0,null]}},bt=e=>{let t=I(e),r={ref:t};return t&&Z(t.activeEffects,r),r},vt=(e,t,r,n,a,o)=>i=>{o.ref&&Y(o.ref.activeEffects,o),l({target:[n,_t],params:[r?{status:"done",params:e,result:i}:{status:"fail",params:e,error:i},{value:i,fn:r?t.rs:t.rj}],defer:1,page:a.page,scope:o.ref,meta:a.meta})};const _t=s({node:[Ae({fn:({fn:e,value:t})=>e(t)})],meta:{op:"fx",fx:"sidechain"}}),St=["source","clock","target"],wt=(e,t)=>e+`: ${t} should be defined`;let kt=(e,t,r,n,a,o,s,l,u,c,f,m)=>{let g=!!a;i(!he(r)||!he(t),wt(e,"either source or clock"));let b=0;he(r)?b=1:L(r)||(r=y(r)),he(t)?t=r:(be(t,e,"clock"),Array.isArray(t)&&(t=w(t))),b&&(r=t),l||s||(s=r.shortName);let v="none";(f||n)&&(L(n)?v="unit":(i(me(n),"`filter` should be function or unit"),v="fn")),a?(be(a,e,"target"),ve(e,a)):"none"===v&&c&&T(r)&&T(t)?a=h(o?o(Me(F(r)),Me(F(t))):Me(F(r)),{name:s,sid:m,or:l}):(a=p({name:s,derived:1,or:l}),d("sampleTarget",N(a)));let _=Ne(),S=[];if("unit"===v){let[r,o]=Ot(n,a,t,_,e);S=[...jt(o),...jt(r)]}let[k,j]=Ot(r,a,t,_,e),O=ut(t,a,[d("sampleSourceLoader"),Oe({from:C,target:_}),...jt(j),$e(k,1,u),...S,$e(_),"fn"===v&&xe(((e,t,{a:r})=>n(e,r)),1),o&&xe(_e),d("sampleSourceUpward",g)],e,o);return fe(r,[O]),Object.assign(O.meta,l,{joint:1}),a};const jt=e=>[$e(e),ze(((e,t,{a:r})=>r),1)],Ot=(e,t,r,n,a)=>{let o=T(e),i=o?F(e):Ne(),l=Ne(o);return o||s({parent:e,node:[Oe({from:C,target:i}),Oe({from:"value",store:1,target:l})],family:{owners:[e,t,r],links:t},meta:{op:a},regional:1}),d("sampleSource",l,i,n),[i,l]},Pt=(e,t,r,n)=>{let a=e[t];a&&l({target:a,params:Array.isArray(a)?a.map((()=>r)):r,defer:1,stack:n})}}}]);try{stManager.done("dist/api/widgets/chunks/state-management.0a5bc042.js")}catch(e){}