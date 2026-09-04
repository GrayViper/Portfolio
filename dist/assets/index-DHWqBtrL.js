(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Av(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Im={exports:{}},Yl={},Dm={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var so=Symbol.for("react.element"),bv=Symbol.for("react.portal"),Cv=Symbol.for("react.fragment"),Rv=Symbol.for("react.strict_mode"),Pv=Symbol.for("react.profiler"),Lv=Symbol.for("react.provider"),Iv=Symbol.for("react.context"),Dv=Symbol.for("react.forward_ref"),Nv=Symbol.for("react.suspense"),Uv=Symbol.for("react.memo"),Fv=Symbol.for("react.lazy"),Eh=Symbol.iterator;function Ov(t){return t===null||typeof t!="object"?null:(t=Eh&&t[Eh]||t["@@iterator"],typeof t=="function"?t:null)}var Nm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Um=Object.assign,Fm={};function Zs(t,e,n){this.props=t,this.context=e,this.refs=Fm,this.updater=n||Nm}Zs.prototype.isReactComponent={};Zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Om(){}Om.prototype=Zs.prototype;function af(t,e,n){this.props=t,this.context=e,this.refs=Fm,this.updater=n||Nm}var of=af.prototype=new Om;of.constructor=af;Um(of,Zs.prototype);of.isPureReactComponent=!0;var Th=Array.isArray,km=Object.prototype.hasOwnProperty,lf={current:null},Bm={key:!0,ref:!0,__self:!0,__source:!0};function zm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)km.call(e,i)&&!Bm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:so,type:t,key:s,ref:a,props:r,_owner:lf.current}}function kv(t,e){return{$$typeof:so,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function cf(t){return typeof t=="object"&&t!==null&&t.$$typeof===so}function Bv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var wh=/\/+/g;function pc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Bv(""+t.key):e.toString(36)}function el(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case so:case bv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+pc(a,0):i,Th(r)?(n="",t!=null&&(n=t.replace(wh,"$&/")+"/"),el(r,e,n,"",function(c){return c})):r!=null&&(cf(r)&&(r=kv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(wh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Th(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+pc(s,o);a+=el(s,e,n,l,r)}else if(l=Ov(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+pc(s,o++),a+=el(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function mo(t,e,n){if(t==null)return t;var i=[],r=0;return el(t,i,"","",function(s){return e.call(n,s,r++)}),i}function zv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dn={current:null},tl={transition:null},Vv={ReactCurrentDispatcher:dn,ReactCurrentBatchConfig:tl,ReactCurrentOwner:lf};function Vm(){throw Error("act(...) is not supported in production builds of React.")}He.Children={map:mo,forEach:function(t,e,n){mo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return mo(t,function(){e++}),e},toArray:function(t){return mo(t,function(e){return e})||[]},only:function(t){if(!cf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};He.Component=Zs;He.Fragment=Cv;He.Profiler=Pv;He.PureComponent=af;He.StrictMode=Rv;He.Suspense=Nv;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vv;He.act=Vm;He.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Um({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=lf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)km.call(e,l)&&!Bm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:so,type:t.type,key:r,ref:s,props:i,_owner:a}};He.createContext=function(t){return t={$$typeof:Iv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Lv,_context:t},t.Consumer=t};He.createElement=zm;He.createFactory=function(t){var e=zm.bind(null,t);return e.type=t,e};He.createRef=function(){return{current:null}};He.forwardRef=function(t){return{$$typeof:Dv,render:t}};He.isValidElement=cf;He.lazy=function(t){return{$$typeof:Fv,_payload:{_status:-1,_result:t},_init:zv}};He.memo=function(t,e){return{$$typeof:Uv,type:t,compare:e===void 0?null:e}};He.startTransition=function(t){var e=tl.transition;tl.transition={};try{t()}finally{tl.transition=e}};He.unstable_act=Vm;He.useCallback=function(t,e){return dn.current.useCallback(t,e)};He.useContext=function(t){return dn.current.useContext(t)};He.useDebugValue=function(){};He.useDeferredValue=function(t){return dn.current.useDeferredValue(t)};He.useEffect=function(t,e){return dn.current.useEffect(t,e)};He.useId=function(){return dn.current.useId()};He.useImperativeHandle=function(t,e,n){return dn.current.useImperativeHandle(t,e,n)};He.useInsertionEffect=function(t,e){return dn.current.useInsertionEffect(t,e)};He.useLayoutEffect=function(t,e){return dn.current.useLayoutEffect(t,e)};He.useMemo=function(t,e){return dn.current.useMemo(t,e)};He.useReducer=function(t,e,n){return dn.current.useReducer(t,e,n)};He.useRef=function(t){return dn.current.useRef(t)};He.useState=function(t){return dn.current.useState(t)};He.useSyncExternalStore=function(t,e,n){return dn.current.useSyncExternalStore(t,e,n)};He.useTransition=function(){return dn.current.useTransition()};He.version="18.3.1";Dm.exports=He;var je=Dm.exports;const Gv=Av(je);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hv=je,Wv=Symbol.for("react.element"),Xv=Symbol.for("react.fragment"),jv=Object.prototype.hasOwnProperty,Yv=Hv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qv={key:!0,ref:!0,__self:!0,__source:!0};function Gm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)jv.call(e,i)&&!qv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Wv,type:t,key:s,ref:a,props:r,_owner:Yv.current}}Yl.Fragment=Xv;Yl.jsx=Gm;Yl.jsxs=Gm;Im.exports=Yl;var C=Im.exports,Su={},Hm={exports:{}},Ln={},Wm={exports:{}},Xm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,q){var j=B.length;B.push(q);e:for(;0<j;){var te=j-1>>>1,ne=B[te];if(0<r(ne,q))B[te]=q,B[j]=ne,j=te;else break e}}function n(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var q=B[0],j=B.pop();if(j!==q){B[0]=j;e:for(var te=0,ne=B.length,ke=ne>>>1;te<ke;){var ze=2*(te+1)-1,Oe=B[ze],$=ze+1,le=B[$];if(0>r(Oe,j))$<ne&&0>r(le,Oe)?(B[te]=le,B[$]=j,te=$):(B[te]=Oe,B[ze]=j,te=ze);else if($<ne&&0>r(le,j))B[te]=le,B[$]=j,te=$;else break e}}return q}function r(B,q){var j=B.sortIndex-q.sortIndex;return j!==0?j:B.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],f=1,h=null,d=3,m=!1,y=!1,T=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(B){for(var q=n(c);q!==null;){if(q.callback===null)i(c);else if(q.startTime<=B)i(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function _(B){if(T=!1,S(B),!y)if(n(l)!==null)y=!0,Y(A);else{var q=n(c);q!==null&&H(_,q.startTime-B)}}function A(B,q){y=!1,T&&(T=!1,u(p),p=-1),m=!0;var j=d;try{for(S(q),h=n(l);h!==null&&(!(h.expirationTime>q)||B&&!I());){var te=h.callback;if(typeof te=="function"){h.callback=null,d=h.priorityLevel;var ne=te(h.expirationTime<=q);q=t.unstable_now(),typeof ne=="function"?h.callback=ne:h===n(l)&&i(l),S(q)}else i(l);h=n(l)}if(h!==null)var ke=!0;else{var ze=n(c);ze!==null&&H(_,ze.startTime-q),ke=!1}return ke}finally{h=null,d=j,m=!1}}var E=!1,w=null,p=-1,b=5,P=-1;function I(){return!(t.unstable_now()-P<b)}function O(){if(w!==null){var B=t.unstable_now();P=B;var q=!0;try{q=w(!0,B)}finally{q?L():(E=!1,w=null)}}else E=!1}var L;if(typeof x=="function")L=function(){x(O)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,V=Z.port2;Z.port1.onmessage=O,L=function(){V.postMessage(null)}}else L=function(){g(O,0)};function Y(B){w=B,E||(E=!0,L())}function H(B,q){p=g(function(){B(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,Y(A))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(B){switch(d){case 1:case 2:case 3:var q=3;break;default:q=d}var j=d;d=q;try{return B()}finally{d=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var j=d;d=B;try{return q()}finally{d=j}},t.unstable_scheduleCallback=function(B,q,j){var te=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?te+j:te):j=te,B){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=j+ne,B={id:f++,callback:q,priorityLevel:B,startTime:j,expirationTime:ne,sortIndex:-1},j>te?(B.sortIndex=j,e(c,B),n(l)===null&&B===n(c)&&(T?(u(p),p=-1):T=!0,H(_,j-te))):(B.sortIndex=ne,e(l,B),y||m||(y=!0,Y(A))),B},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(B){var q=d;return function(){var j=d;d=q;try{return B.apply(this,arguments)}finally{d=j}}}})(Xm);Wm.exports=Xm;var $v=Wm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kv=je,Pn=$v;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jm=new Set,Ba={};function $r(t,e){Bs(t,e),Bs(t+"Capture",e)}function Bs(t,e){for(Ba[t]=e,t=0;t<e.length;t++)jm.add(e[t])}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mu=Object.prototype.hasOwnProperty,Zv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ah={},bh={};function Jv(t){return Mu.call(bh,t)?!0:Mu.call(Ah,t)?!1:Zv.test(t)?bh[t]=!0:(Ah[t]=!0,!1)}function Qv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ex(t,e,n,i){if(e===null||typeof e>"u"||Qv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qt[t]=new fn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qt[e]=new fn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qt[t]=new fn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qt[t]=new fn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qt[t]=new fn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qt[t]=new fn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qt[t]=new fn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qt[t]=new fn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qt[t]=new fn(t,5,!1,t.toLowerCase(),null,!1,!1)});var uf=/[\-:]([a-z])/g;function df(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(uf,df);qt[e]=new fn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(uf,df);qt[e]=new fn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(uf,df);qt[e]=new fn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qt[t]=new fn(t,1,!1,t.toLowerCase(),null,!1,!1)});qt.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qt[t]=new fn(t,1,!1,t.toLowerCase(),null,!0,!0)});function ff(t,e,n,i){var r=qt.hasOwnProperty(e)?qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ex(e,n,r,i)&&(n=null),i||r===null?Jv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Vi=Kv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,go=Symbol.for("react.element"),xs=Symbol.for("react.portal"),_s=Symbol.for("react.fragment"),hf=Symbol.for("react.strict_mode"),Eu=Symbol.for("react.profiler"),Ym=Symbol.for("react.provider"),qm=Symbol.for("react.context"),pf=Symbol.for("react.forward_ref"),Tu=Symbol.for("react.suspense"),wu=Symbol.for("react.suspense_list"),mf=Symbol.for("react.memo"),Ji=Symbol.for("react.lazy"),$m=Symbol.for("react.offscreen"),Ch=Symbol.iterator;function oa(t){return t===null||typeof t!="object"?null:(t=Ch&&t[Ch]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Object.assign,mc;function Ma(t){if(mc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);mc=e&&e[1]||""}return`
`+mc+t}var gc=!1;function vc(t,e){if(!t||gc)return"";gc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{gc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ma(t):""}function tx(t){switch(t.tag){case 5:return Ma(t.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return t=vc(t.type,!1),t;case 11:return t=vc(t.type.render,!1),t;case 1:return t=vc(t.type,!0),t;default:return""}}function Au(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _s:return"Fragment";case xs:return"Portal";case Eu:return"Profiler";case hf:return"StrictMode";case Tu:return"Suspense";case wu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qm:return(t.displayName||"Context")+".Consumer";case Ym:return(t._context.displayName||"Context")+".Provider";case pf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case mf:return e=t.displayName||null,e!==null?e:Au(t.type)||"Memo";case Ji:e=t._payload,t=t._init;try{return Au(t(e))}catch{}}return null}function nx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Au(e);case 8:return e===hf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Km(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ix(t){var e=Km(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function vo(t){t._valueTracker||(t._valueTracker=ix(t))}function Zm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Km(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function vl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bu(t,e){var n=e.checked;return Mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Rh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jm(t,e){e=e.checked,e!=null&&ff(t,"checked",e,!1)}function Cu(t,e){Jm(t,e);var n=mr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ru(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ru(t,e.type,mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ph(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ru(t,e,n){(e!=="number"||vl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ea=Array.isArray;function Ps(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+mr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Pu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return Mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Lh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(Ea(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:mr(n)}}function Qm(t,e){var n=mr(e.value),i=mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ih(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function eg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?eg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xo,tg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xo=xo||document.createElement("div"),xo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function za(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ra={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rx=["Webkit","ms","Moz","O"];Object.keys(Ra).forEach(function(t){rx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ra[e]=Ra[t]})});function ng(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ra.hasOwnProperty(t)&&Ra[t]?(""+e).trim():e+"px"}function ig(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=ng(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var sx=Mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Iu(t,e){if(e){if(sx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function Du(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nu=null;function gf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Uu=null,Ls=null,Is=null;function Dh(t){if(t=lo(t)){if(typeof Uu!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=Jl(e),Uu(t.stateNode,t.type,e))}}function rg(t){Ls?Is?Is.push(t):Is=[t]:Ls=t}function sg(){if(Ls){var t=Ls,e=Is;if(Is=Ls=null,Dh(t),e)for(t=0;t<e.length;t++)Dh(e[t])}}function ag(t,e){return t(e)}function og(){}var xc=!1;function lg(t,e,n){if(xc)return t(e,n);xc=!0;try{return ag(t,e,n)}finally{xc=!1,(Ls!==null||Is!==null)&&(og(),sg())}}function Va(t,e){var n=t.stateNode;if(n===null)return null;var i=Jl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var Fu=!1;if(Ui)try{var la={};Object.defineProperty(la,"passive",{get:function(){Fu=!0}}),window.addEventListener("test",la,la),window.removeEventListener("test",la,la)}catch{Fu=!1}function ax(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Pa=!1,xl=null,_l=!1,Ou=null,ox={onError:function(t){Pa=!0,xl=t}};function lx(t,e,n,i,r,s,a,o,l){Pa=!1,xl=null,ax.apply(ox,arguments)}function cx(t,e,n,i,r,s,a,o,l){if(lx.apply(this,arguments),Pa){if(Pa){var c=xl;Pa=!1,xl=null}else throw Error(oe(198));_l||(_l=!0,Ou=c)}}function Kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function cg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Nh(t){if(Kr(t)!==t)throw Error(oe(188))}function ux(t){var e=t.alternate;if(!e){if(e=Kr(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Nh(r),t;if(s===i)return Nh(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function ug(t){return t=ux(t),t!==null?dg(t):null}function dg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=dg(t);if(e!==null)return e;t=t.sibling}return null}var fg=Pn.unstable_scheduleCallback,Uh=Pn.unstable_cancelCallback,dx=Pn.unstable_shouldYield,fx=Pn.unstable_requestPaint,Lt=Pn.unstable_now,hx=Pn.unstable_getCurrentPriorityLevel,vf=Pn.unstable_ImmediatePriority,hg=Pn.unstable_UserBlockingPriority,yl=Pn.unstable_NormalPriority,px=Pn.unstable_LowPriority,pg=Pn.unstable_IdlePriority,ql=null,hi=null;function mx(t){if(hi&&typeof hi.onCommitFiberRoot=="function")try{hi.onCommitFiberRoot(ql,t,void 0,(t.current.flags&128)===128)}catch{}}var Jn=Math.clz32?Math.clz32:xx,gx=Math.log,vx=Math.LN2;function xx(t){return t>>>=0,t===0?32:31-(gx(t)/vx|0)|0}var _o=64,yo=4194304;function Ta(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Sl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Ta(o):(s&=a,s!==0&&(i=Ta(s)))}else a=n&~r,a!==0?i=Ta(a):s!==0&&(i=Ta(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Jn(e),r=1<<n,i|=t[n],e&=~r;return i}function _x(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Jn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=_x(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function ku(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mg(){var t=_o;return _o<<=1,!(_o&4194240)&&(_o=64),t}function _c(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ao(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jn(e),t[e]=n}function Sx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function xf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var at=0;function gg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var vg,_f,xg,_g,yg,Bu=!1,So=[],or=null,lr=null,cr=null,Ga=new Map,Ha=new Map,tr=[],Mx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fh(t,e){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":Ga.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ha.delete(e.pointerId)}}function ca(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=lo(e),e!==null&&_f(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Ex(t,e,n,i,r){switch(e){case"focusin":return or=ca(or,t,e,n,i,r),!0;case"dragenter":return lr=ca(lr,t,e,n,i,r),!0;case"mouseover":return cr=ca(cr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ga.set(s,ca(Ga.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ha.set(s,ca(Ha.get(s)||null,t,e,n,i,r)),!0}return!1}function Sg(t){var e=Ur(t.target);if(e!==null){var n=Kr(e);if(n!==null){if(e=n.tag,e===13){if(e=cg(n),e!==null){t.blockedOn=e,yg(t.priority,function(){xg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=zu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Nu=i,n.target.dispatchEvent(i),Nu=null}else return e=lo(n),e!==null&&_f(e),t.blockedOn=n,!1;e.shift()}return!0}function Oh(t,e,n){nl(t)&&n.delete(e)}function Tx(){Bu=!1,or!==null&&nl(or)&&(or=null),lr!==null&&nl(lr)&&(lr=null),cr!==null&&nl(cr)&&(cr=null),Ga.forEach(Oh),Ha.forEach(Oh)}function ua(t,e){t.blockedOn===e&&(t.blockedOn=null,Bu||(Bu=!0,Pn.unstable_scheduleCallback(Pn.unstable_NormalPriority,Tx)))}function Wa(t){function e(r){return ua(r,t)}if(0<So.length){ua(So[0],t);for(var n=1;n<So.length;n++){var i=So[n];i.blockedOn===t&&(i.blockedOn=null)}}for(or!==null&&ua(or,t),lr!==null&&ua(lr,t),cr!==null&&ua(cr,t),Ga.forEach(e),Ha.forEach(e),n=0;n<tr.length;n++)i=tr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<tr.length&&(n=tr[0],n.blockedOn===null);)Sg(n),n.blockedOn===null&&tr.shift()}var Ds=Vi.ReactCurrentBatchConfig,Ml=!0;function wx(t,e,n,i){var r=at,s=Ds.transition;Ds.transition=null;try{at=1,yf(t,e,n,i)}finally{at=r,Ds.transition=s}}function Ax(t,e,n,i){var r=at,s=Ds.transition;Ds.transition=null;try{at=4,yf(t,e,n,i)}finally{at=r,Ds.transition=s}}function yf(t,e,n,i){if(Ml){var r=zu(t,e,n,i);if(r===null)Rc(t,e,i,El,n),Fh(t,i);else if(Ex(r,t,e,n,i))i.stopPropagation();else if(Fh(t,i),e&4&&-1<Mx.indexOf(t)){for(;r!==null;){var s=lo(r);if(s!==null&&vg(s),s=zu(t,e,n,i),s===null&&Rc(t,e,i,El,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Rc(t,e,i,null,n)}}var El=null;function zu(t,e,n,i){if(El=null,t=gf(i),t=Ur(t),t!==null)if(e=Kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=cg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return El=t,null}function Mg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hx()){case vf:return 1;case hg:return 4;case yl:case px:return 16;case pg:return 536870912;default:return 16}default:return 16}}var rr=null,Sf=null,il=null;function Eg(){if(il)return il;var t,e=Sf,n=e.length,i,r="value"in rr?rr.value:rr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return il=r.slice(t,1<i?1-i:void 0)}function rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Mo(){return!0}function kh(){return!1}function In(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Mo:kh,this.isPropagationStopped=kh,this}return Mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Mo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Mo)},persist:function(){},isPersistent:Mo}),e}var Js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mf=In(Js),oo=Mt({},Js,{view:0,detail:0}),bx=In(oo),yc,Sc,da,$l=Mt({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ef,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==da&&(da&&t.type==="mousemove"?(yc=t.screenX-da.screenX,Sc=t.screenY-da.screenY):Sc=yc=0,da=t),yc)},movementY:function(t){return"movementY"in t?t.movementY:Sc}}),Bh=In($l),Cx=Mt({},$l,{dataTransfer:0}),Rx=In(Cx),Px=Mt({},oo,{relatedTarget:0}),Mc=In(Px),Lx=Mt({},Js,{animationName:0,elapsedTime:0,pseudoElement:0}),Ix=In(Lx),Dx=Mt({},Js,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Nx=In(Dx),Ux=Mt({},Js,{data:0}),zh=In(Ux),Fx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ox={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=kx[t])?!!e[t]:!1}function Ef(){return Bx}var zx=Mt({},oo,{key:function(t){if(t.key){var e=Fx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ox[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ef,charCode:function(t){return t.type==="keypress"?rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Vx=In(zx),Gx=Mt({},$l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vh=In(Gx),Hx=Mt({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ef}),Wx=In(Hx),Xx=Mt({},Js,{propertyName:0,elapsedTime:0,pseudoElement:0}),jx=In(Xx),Yx=Mt({},$l,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qx=In(Yx),$x=[9,13,27,32],Tf=Ui&&"CompositionEvent"in window,La=null;Ui&&"documentMode"in document&&(La=document.documentMode);var Kx=Ui&&"TextEvent"in window&&!La,Tg=Ui&&(!Tf||La&&8<La&&11>=La),Gh=" ",Hh=!1;function wg(t,e){switch(t){case"keyup":return $x.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ag(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ys=!1;function Zx(t,e){switch(t){case"compositionend":return Ag(e);case"keypress":return e.which!==32?null:(Hh=!0,Gh);case"textInput":return t=e.data,t===Gh&&Hh?null:t;default:return null}}function Jx(t,e){if(ys)return t==="compositionend"||!Tf&&wg(t,e)?(t=Eg(),il=Sf=rr=null,ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Tg&&e.locale!=="ko"?null:e.data;default:return null}}var Qx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Qx[t.type]:e==="textarea"}function bg(t,e,n,i){rg(i),e=Tl(e,"onChange"),0<e.length&&(n=new Mf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ia=null,Xa=null;function e_(t){kg(t,0)}function Kl(t){var e=Es(t);if(Zm(e))return t}function t_(t,e){if(t==="change")return e}var Cg=!1;if(Ui){var Ec;if(Ui){var Tc="oninput"in document;if(!Tc){var Xh=document.createElement("div");Xh.setAttribute("oninput","return;"),Tc=typeof Xh.oninput=="function"}Ec=Tc}else Ec=!1;Cg=Ec&&(!document.documentMode||9<document.documentMode)}function jh(){Ia&&(Ia.detachEvent("onpropertychange",Rg),Xa=Ia=null)}function Rg(t){if(t.propertyName==="value"&&Kl(Xa)){var e=[];bg(e,Xa,t,gf(t)),lg(e_,e)}}function n_(t,e,n){t==="focusin"?(jh(),Ia=e,Xa=n,Ia.attachEvent("onpropertychange",Rg)):t==="focusout"&&jh()}function i_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Kl(Xa)}function r_(t,e){if(t==="click")return Kl(e)}function s_(t,e){if(t==="input"||t==="change")return Kl(e)}function a_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ei=typeof Object.is=="function"?Object.is:a_;function ja(t,e){if(ei(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Mu.call(e,r)||!ei(t[r],e[r]))return!1}return!0}function Yh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qh(t,e){var n=Yh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yh(n)}}function Pg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Pg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Lg(){for(var t=window,e=vl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vl(t.document)}return e}function wf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function o_(t){var e=Lg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Pg(n.ownerDocument.documentElement,n)){if(i!==null&&wf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=qh(n,s);var a=qh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var l_=Ui&&"documentMode"in document&&11>=document.documentMode,Ss=null,Vu=null,Da=null,Gu=!1;function $h(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gu||Ss==null||Ss!==vl(i)||(i=Ss,"selectionStart"in i&&wf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Da&&ja(Da,i)||(Da=i,i=Tl(Vu,"onSelect"),0<i.length&&(e=new Mf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ss)))}function Eo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ms={animationend:Eo("Animation","AnimationEnd"),animationiteration:Eo("Animation","AnimationIteration"),animationstart:Eo("Animation","AnimationStart"),transitionend:Eo("Transition","TransitionEnd")},wc={},Ig={};Ui&&(Ig=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Zl(t){if(wc[t])return wc[t];if(!Ms[t])return t;var e=Ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ig)return wc[t]=e[n];return t}var Dg=Zl("animationend"),Ng=Zl("animationiteration"),Ug=Zl("animationstart"),Fg=Zl("transitionend"),Og=new Map,Kh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(t,e){Og.set(t,e),$r(e,[t])}for(var Ac=0;Ac<Kh.length;Ac++){var bc=Kh[Ac],c_=bc.toLowerCase(),u_=bc[0].toUpperCase()+bc.slice(1);_r(c_,"on"+u_)}_r(Dg,"onAnimationEnd");_r(Ng,"onAnimationIteration");_r(Ug,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(Fg,"onTransitionEnd");Bs("onMouseEnter",["mouseout","mouseover"]);Bs("onMouseLeave",["mouseout","mouseover"]);Bs("onPointerEnter",["pointerout","pointerover"]);Bs("onPointerLeave",["pointerout","pointerover"]);$r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$r("onBeforeInput",["compositionend","keypress","textInput","paste"]);$r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d_=new Set("cancel close invalid load scroll toggle".split(" ").concat(wa));function Zh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,cx(i,e,void 0,t),t.currentTarget=null}function kg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Zh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Zh(r,o,c),s=l}}}if(_l)throw t=Ou,_l=!1,Ou=null,t}function pt(t,e){var n=e[Yu];n===void 0&&(n=e[Yu]=new Set);var i=t+"__bubble";n.has(i)||(Bg(e,t,2,!1),n.add(i))}function Cc(t,e,n){var i=0;e&&(i|=4),Bg(n,t,i,e)}var To="_reactListening"+Math.random().toString(36).slice(2);function Ya(t){if(!t[To]){t[To]=!0,jm.forEach(function(n){n!=="selectionchange"&&(d_.has(n)||Cc(n,!1,t),Cc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[To]||(e[To]=!0,Cc("selectionchange",!1,e))}}function Bg(t,e,n,i){switch(Mg(e)){case 1:var r=wx;break;case 4:r=Ax;break;default:r=yf}n=r.bind(null,e,n,t),r=void 0,!Fu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Rc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Ur(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}lg(function(){var c=s,f=gf(n),h=[];e:{var d=Og.get(t);if(d!==void 0){var m=Mf,y=t;switch(t){case"keypress":if(rl(n)===0)break e;case"keydown":case"keyup":m=Vx;break;case"focusin":y="focus",m=Mc;break;case"focusout":y="blur",m=Mc;break;case"beforeblur":case"afterblur":m=Mc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Bh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Rx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Wx;break;case Dg:case Ng:case Ug:m=Ix;break;case Fg:m=jx;break;case"scroll":m=bx;break;case"wheel":m=qx;break;case"copy":case"cut":case"paste":m=Nx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Vh}var T=(e&4)!==0,g=!T&&t==="scroll",u=T?d!==null?d+"Capture":null:d;T=[];for(var x=c,S;x!==null;){S=x;var _=S.stateNode;if(S.tag===5&&_!==null&&(S=_,u!==null&&(_=Va(x,u),_!=null&&T.push(qa(x,_,S)))),g)break;x=x.return}0<T.length&&(d=new m(d,y,null,n,f),h.push({event:d,listeners:T}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Nu&&(y=n.relatedTarget||n.fromElement)&&(Ur(y)||y[Fi]))break e;if((m||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=c,y=y?Ur(y):null,y!==null&&(g=Kr(y),y!==g||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=c),m!==y)){if(T=Bh,_="onMouseLeave",u="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(T=Vh,_="onPointerLeave",u="onPointerEnter",x="pointer"),g=m==null?d:Es(m),S=y==null?d:Es(y),d=new T(_,x+"leave",m,n,f),d.target=g,d.relatedTarget=S,_=null,Ur(f)===c&&(T=new T(u,x+"enter",y,n,f),T.target=S,T.relatedTarget=g,_=T),g=_,m&&y)t:{for(T=m,u=y,x=0,S=T;S;S=is(S))x++;for(S=0,_=u;_;_=is(_))S++;for(;0<x-S;)T=is(T),x--;for(;0<S-x;)u=is(u),S--;for(;x--;){if(T===u||u!==null&&T===u.alternate)break t;T=is(T),u=is(u)}T=null}else T=null;m!==null&&Jh(h,d,m,T,!1),y!==null&&g!==null&&Jh(h,g,y,T,!0)}}e:{if(d=c?Es(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var A=t_;else if(Wh(d))if(Cg)A=s_;else{A=i_;var E=n_}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=r_);if(A&&(A=A(t,c))){bg(h,A,n,f);break e}E&&E(t,d,c),t==="focusout"&&(E=d._wrapperState)&&E.controlled&&d.type==="number"&&Ru(d,"number",d.value)}switch(E=c?Es(c):window,t){case"focusin":(Wh(E)||E.contentEditable==="true")&&(Ss=E,Vu=c,Da=null);break;case"focusout":Da=Vu=Ss=null;break;case"mousedown":Gu=!0;break;case"contextmenu":case"mouseup":case"dragend":Gu=!1,$h(h,n,f);break;case"selectionchange":if(l_)break;case"keydown":case"keyup":$h(h,n,f)}var w;if(Tf)e:{switch(t){case"compositionstart":var p="onCompositionStart";break e;case"compositionend":p="onCompositionEnd";break e;case"compositionupdate":p="onCompositionUpdate";break e}p=void 0}else ys?wg(t,n)&&(p="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(p="onCompositionStart");p&&(Tg&&n.locale!=="ko"&&(ys||p!=="onCompositionStart"?p==="onCompositionEnd"&&ys&&(w=Eg()):(rr=f,Sf="value"in rr?rr.value:rr.textContent,ys=!0)),E=Tl(c,p),0<E.length&&(p=new zh(p,t,null,n,f),h.push({event:p,listeners:E}),w?p.data=w:(w=Ag(n),w!==null&&(p.data=w)))),(w=Kx?Zx(t,n):Jx(t,n))&&(c=Tl(c,"onBeforeInput"),0<c.length&&(f=new zh("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=w))}kg(h,e)})}function qa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Tl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Va(t,n),s!=null&&i.unshift(qa(t,s,r)),s=Va(t,e),s!=null&&i.push(qa(t,s,r))),t=t.return}return i}function is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Va(n,s),l!=null&&a.unshift(qa(n,l,o))):r||(l=Va(n,s),l!=null&&a.push(qa(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var f_=/\r\n?/g,h_=/\u0000|\uFFFD/g;function Qh(t){return(typeof t=="string"?t:""+t).replace(f_,`
`).replace(h_,"")}function wo(t,e,n){if(e=Qh(e),Qh(t)!==e&&n)throw Error(oe(425))}function wl(){}var Hu=null,Wu=null;function Xu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ju=typeof setTimeout=="function"?setTimeout:void 0,p_=typeof clearTimeout=="function"?clearTimeout:void 0,ep=typeof Promise=="function"?Promise:void 0,m_=typeof queueMicrotask=="function"?queueMicrotask:typeof ep<"u"?function(t){return ep.resolve(null).then(t).catch(g_)}:ju;function g_(t){setTimeout(function(){throw t})}function Pc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Wa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Wa(e)}function ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function tp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),ui="__reactFiber$"+Qs,$a="__reactProps$"+Qs,Fi="__reactContainer$"+Qs,Yu="__reactEvents$"+Qs,v_="__reactListeners$"+Qs,x_="__reactHandles$"+Qs;function Ur(t){var e=t[ui];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Fi]||n[ui]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=tp(t);t!==null;){if(n=t[ui])return n;t=tp(t)}return e}t=n,n=t.parentNode}return null}function lo(t){return t=t[ui]||t[Fi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function Jl(t){return t[$a]||null}var qu=[],Ts=-1;function yr(t){return{current:t}}function mt(t){0>Ts||(t.current=qu[Ts],qu[Ts]=null,Ts--)}function ht(t,e){Ts++,qu[Ts]=t.current,t.current=e}var gr={},sn=yr(gr),vn=yr(!1),Gr=gr;function zs(t,e){var n=t.type.contextTypes;if(!n)return gr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function xn(t){return t=t.childContextTypes,t!=null}function Al(){mt(vn),mt(sn)}function np(t,e,n){if(sn.current!==gr)throw Error(oe(168));ht(sn,e),ht(vn,n)}function zg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,nx(t)||"Unknown",r));return Mt({},n,i)}function bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gr,Gr=sn.current,ht(sn,t),ht(vn,vn.current),!0}function ip(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=zg(t,e,Gr),i.__reactInternalMemoizedMergedChildContext=t,mt(vn),mt(sn),ht(sn,t)):mt(vn),ht(vn,n)}var bi=null,Ql=!1,Lc=!1;function Vg(t){bi===null?bi=[t]:bi.push(t)}function __(t){Ql=!0,Vg(t)}function Sr(){if(!Lc&&bi!==null){Lc=!0;var t=0,e=at;try{var n=bi;for(at=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}bi=null,Ql=!1}catch(r){throw bi!==null&&(bi=bi.slice(t+1)),fg(vf,Sr),r}finally{at=e,Lc=!1}}return null}var ws=[],As=0,Cl=null,Rl=0,Fn=[],On=0,Hr=null,Ri=1,Pi="";function Pr(t,e){ws[As++]=Rl,ws[As++]=Cl,Cl=t,Rl=e}function Gg(t,e,n){Fn[On++]=Ri,Fn[On++]=Pi,Fn[On++]=Hr,Hr=t;var i=Ri;t=Pi;var r=32-Jn(i)-1;i&=~(1<<r),n+=1;var s=32-Jn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ri=1<<32-Jn(e)+r|n<<r|i,Pi=s+t}else Ri=1<<s|n<<r|i,Pi=t}function Af(t){t.return!==null&&(Pr(t,1),Gg(t,1,0))}function bf(t){for(;t===Cl;)Cl=ws[--As],ws[As]=null,Rl=ws[--As],ws[As]=null;for(;t===Hr;)Hr=Fn[--On],Fn[On]=null,Pi=Fn[--On],Fn[On]=null,Ri=Fn[--On],Fn[On]=null}var Rn=null,Cn=null,xt=!1,$n=null;function Hg(t,e){var n=kn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function rp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rn=t,Cn=ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rn=t,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hr!==null?{id:Ri,overflow:Pi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rn=t,Cn=null,!0):!1;default:return!1}}function $u(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ku(t){if(xt){var e=Cn;if(e){var n=e;if(!rp(t,e)){if($u(t))throw Error(oe(418));e=ur(n.nextSibling);var i=Rn;e&&rp(t,e)?Hg(i,n):(t.flags=t.flags&-4097|2,xt=!1,Rn=t)}}else{if($u(t))throw Error(oe(418));t.flags=t.flags&-4097|2,xt=!1,Rn=t}}}function sp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rn=t}function Ao(t){if(t!==Rn)return!1;if(!xt)return sp(t),xt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xu(t.type,t.memoizedProps)),e&&(e=Cn)){if($u(t))throw Wg(),Error(oe(418));for(;e;)Hg(t,e),e=ur(e.nextSibling)}if(sp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Cn=ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Cn=null}}else Cn=Rn?ur(t.stateNode.nextSibling):null;return!0}function Wg(){for(var t=Cn;t;)t=ur(t.nextSibling)}function Vs(){Cn=Rn=null,xt=!1}function Cf(t){$n===null?$n=[t]:$n.push(t)}var y_=Vi.ReactCurrentBatchConfig;function fa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function bo(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ap(t){var e=t._init;return e(t._payload)}function Xg(t){function e(u,x){if(t){var S=u.deletions;S===null?(u.deletions=[x],u.flags|=16):S.push(x)}}function n(u,x){if(!t)return null;for(;x!==null;)e(u,x),x=x.sibling;return null}function i(u,x){for(u=new Map;x!==null;)x.key!==null?u.set(x.key,x):u.set(x.index,x),x=x.sibling;return u}function r(u,x){return u=pr(u,x),u.index=0,u.sibling=null,u}function s(u,x,S){return u.index=S,t?(S=u.alternate,S!==null?(S=S.index,S<x?(u.flags|=2,x):S):(u.flags|=2,x)):(u.flags|=1048576,x)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,x,S,_){return x===null||x.tag!==6?(x=kc(S,u.mode,_),x.return=u,x):(x=r(x,S),x.return=u,x)}function l(u,x,S,_){var A=S.type;return A===_s?f(u,x,S.props.children,_,S.key):x!==null&&(x.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ji&&ap(A)===x.type)?(_=r(x,S.props),_.ref=fa(u,x,S),_.return=u,_):(_=dl(S.type,S.key,S.props,null,u.mode,_),_.ref=fa(u,x,S),_.return=u,_)}function c(u,x,S,_){return x===null||x.tag!==4||x.stateNode.containerInfo!==S.containerInfo||x.stateNode.implementation!==S.implementation?(x=Bc(S,u.mode,_),x.return=u,x):(x=r(x,S.children||[]),x.return=u,x)}function f(u,x,S,_,A){return x===null||x.tag!==7?(x=Vr(S,u.mode,_,A),x.return=u,x):(x=r(x,S),x.return=u,x)}function h(u,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return x=kc(""+x,u.mode,S),x.return=u,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case go:return S=dl(x.type,x.key,x.props,null,u.mode,S),S.ref=fa(u,null,x),S.return=u,S;case xs:return x=Bc(x,u.mode,S),x.return=u,x;case Ji:var _=x._init;return h(u,_(x._payload),S)}if(Ea(x)||oa(x))return x=Vr(x,u.mode,S,null),x.return=u,x;bo(u,x)}return null}function d(u,x,S,_){var A=x!==null?x.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return A!==null?null:o(u,x,""+S,_);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case go:return S.key===A?l(u,x,S,_):null;case xs:return S.key===A?c(u,x,S,_):null;case Ji:return A=S._init,d(u,x,A(S._payload),_)}if(Ea(S)||oa(S))return A!==null?null:f(u,x,S,_,null);bo(u,S)}return null}function m(u,x,S,_,A){if(typeof _=="string"&&_!==""||typeof _=="number")return u=u.get(S)||null,o(x,u,""+_,A);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case go:return u=u.get(_.key===null?S:_.key)||null,l(x,u,_,A);case xs:return u=u.get(_.key===null?S:_.key)||null,c(x,u,_,A);case Ji:var E=_._init;return m(u,x,S,E(_._payload),A)}if(Ea(_)||oa(_))return u=u.get(S)||null,f(x,u,_,A,null);bo(x,_)}return null}function y(u,x,S,_){for(var A=null,E=null,w=x,p=x=0,b=null;w!==null&&p<S.length;p++){w.index>p?(b=w,w=null):b=w.sibling;var P=d(u,w,S[p],_);if(P===null){w===null&&(w=b);break}t&&w&&P.alternate===null&&e(u,w),x=s(P,x,p),E===null?A=P:E.sibling=P,E=P,w=b}if(p===S.length)return n(u,w),xt&&Pr(u,p),A;if(w===null){for(;p<S.length;p++)w=h(u,S[p],_),w!==null&&(x=s(w,x,p),E===null?A=w:E.sibling=w,E=w);return xt&&Pr(u,p),A}for(w=i(u,w);p<S.length;p++)b=m(w,u,p,S[p],_),b!==null&&(t&&b.alternate!==null&&w.delete(b.key===null?p:b.key),x=s(b,x,p),E===null?A=b:E.sibling=b,E=b);return t&&w.forEach(function(I){return e(u,I)}),xt&&Pr(u,p),A}function T(u,x,S,_){var A=oa(S);if(typeof A!="function")throw Error(oe(150));if(S=A.call(S),S==null)throw Error(oe(151));for(var E=A=null,w=x,p=x=0,b=null,P=S.next();w!==null&&!P.done;p++,P=S.next()){w.index>p?(b=w,w=null):b=w.sibling;var I=d(u,w,P.value,_);if(I===null){w===null&&(w=b);break}t&&w&&I.alternate===null&&e(u,w),x=s(I,x,p),E===null?A=I:E.sibling=I,E=I,w=b}if(P.done)return n(u,w),xt&&Pr(u,p),A;if(w===null){for(;!P.done;p++,P=S.next())P=h(u,P.value,_),P!==null&&(x=s(P,x,p),E===null?A=P:E.sibling=P,E=P);return xt&&Pr(u,p),A}for(w=i(u,w);!P.done;p++,P=S.next())P=m(w,u,p,P.value,_),P!==null&&(t&&P.alternate!==null&&w.delete(P.key===null?p:P.key),x=s(P,x,p),E===null?A=P:E.sibling=P,E=P);return t&&w.forEach(function(O){return e(u,O)}),xt&&Pr(u,p),A}function g(u,x,S,_){if(typeof S=="object"&&S!==null&&S.type===_s&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case go:e:{for(var A=S.key,E=x;E!==null;){if(E.key===A){if(A=S.type,A===_s){if(E.tag===7){n(u,E.sibling),x=r(E,S.props.children),x.return=u,u=x;break e}}else if(E.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ji&&ap(A)===E.type){n(u,E.sibling),x=r(E,S.props),x.ref=fa(u,E,S),x.return=u,u=x;break e}n(u,E);break}else e(u,E);E=E.sibling}S.type===_s?(x=Vr(S.props.children,u.mode,_,S.key),x.return=u,u=x):(_=dl(S.type,S.key,S.props,null,u.mode,_),_.ref=fa(u,x,S),_.return=u,u=_)}return a(u);case xs:e:{for(E=S.key;x!==null;){if(x.key===E)if(x.tag===4&&x.stateNode.containerInfo===S.containerInfo&&x.stateNode.implementation===S.implementation){n(u,x.sibling),x=r(x,S.children||[]),x.return=u,u=x;break e}else{n(u,x);break}else e(u,x);x=x.sibling}x=Bc(S,u.mode,_),x.return=u,u=x}return a(u);case Ji:return E=S._init,g(u,x,E(S._payload),_)}if(Ea(S))return y(u,x,S,_);if(oa(S))return T(u,x,S,_);bo(u,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,x!==null&&x.tag===6?(n(u,x.sibling),x=r(x,S),x.return=u,u=x):(n(u,x),x=kc(S,u.mode,_),x.return=u,u=x),a(u)):n(u,x)}return g}var Gs=Xg(!0),jg=Xg(!1),Pl=yr(null),Ll=null,bs=null,Rf=null;function Pf(){Rf=bs=Ll=null}function Lf(t){var e=Pl.current;mt(Pl),t._currentValue=e}function Zu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ns(t,e){Ll=t,Rf=bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gn=!0),t.firstContext=null)}function zn(t){var e=t._currentValue;if(Rf!==t)if(t={context:t,memoizedValue:e,next:null},bs===null){if(Ll===null)throw Error(oe(308));bs=t,Ll.dependencies={lanes:0,firstContext:t}}else bs=bs.next=t;return e}var Fr=null;function If(t){Fr===null?Fr=[t]:Fr.push(t)}function Yg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,If(e)):(n.next=r.next,r.next=n),e.interleaved=n,Oi(t,i)}function Oi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qi=!1;function Df(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ii(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function dr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Oi(t,n)}return r=i.interleaved,r===null?(e.next=e,If(i)):(e.next=r.next,r.next=e),i.interleaved=e,Oi(t,n)}function sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,xf(t,n)}}function op(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Il(t,e,n,i){var r=t.updateQueue;Qi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,f=c=l=null,o=s;do{var d=o.lane,m=o.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=t,T=o;switch(d=e,m=n,T.tag){case 1:if(y=T.payload,typeof y=="function"){h=y.call(m,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=T.payload,d=typeof y=="function"?y.call(m,h,d):y,d==null)break e;h=Mt({},h,d);break e;case 2:Qi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else m={eventTime:m,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=m,l=h):f=f.next=m,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Xr|=a,t.lanes=a,t.memoizedState=h}}function lp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var co={},pi=yr(co),Ka=yr(co),Za=yr(co);function Or(t){if(t===co)throw Error(oe(174));return t}function Nf(t,e){switch(ht(Za,e),ht(Ka,t),ht(pi,co),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Lu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Lu(e,t)}mt(pi),ht(pi,e)}function Hs(){mt(pi),mt(Ka),mt(Za)}function $g(t){Or(Za.current);var e=Or(pi.current),n=Lu(e,t.type);e!==n&&(ht(Ka,t),ht(pi,n))}function Uf(t){Ka.current===t&&(mt(pi),mt(Ka))}var _t=yr(0);function Dl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ic=[];function Ff(){for(var t=0;t<Ic.length;t++)Ic[t]._workInProgressVersionPrimary=null;Ic.length=0}var al=Vi.ReactCurrentDispatcher,Dc=Vi.ReactCurrentBatchConfig,Wr=0,St=null,Ut=null,Vt=null,Nl=!1,Na=!1,Ja=0,S_=0;function Zt(){throw Error(oe(321))}function Of(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ei(t[n],e[n]))return!1;return!0}function kf(t,e,n,i,r,s){if(Wr=s,St=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,al.current=t===null||t.memoizedState===null?w_:A_,t=n(i,r),Na){s=0;do{if(Na=!1,Ja=0,25<=s)throw Error(oe(301));s+=1,Vt=Ut=null,e.updateQueue=null,al.current=b_,t=n(i,r)}while(Na)}if(al.current=Ul,e=Ut!==null&&Ut.next!==null,Wr=0,Vt=Ut=St=null,Nl=!1,e)throw Error(oe(300));return t}function Bf(){var t=Ja!==0;return Ja=0,t}function li(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?St.memoizedState=Vt=t:Vt=Vt.next=t,Vt}function Vn(){if(Ut===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=Ut.next;var e=Vt===null?St.memoizedState:Vt.next;if(e!==null)Vt=e,Ut=t;else{if(t===null)throw Error(oe(310));Ut=t,t={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},Vt===null?St.memoizedState=Vt=t:Vt=Vt.next=t}return Vt}function Qa(t,e){return typeof e=="function"?e(t):e}function Nc(t){var e=Vn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=Ut,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var f=c.lane;if((Wr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,St.lanes|=f,Xr|=f}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,ei(i,e.memoizedState)||(gn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,St.lanes|=s,Xr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Uc(t){var e=Vn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ei(s,e.memoizedState)||(gn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Kg(){}function Zg(t,e){var n=St,i=Vn(),r=e(),s=!ei(i.memoizedState,r);if(s&&(i.memoizedState=r,gn=!0),i=i.queue,zf(e0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Vt!==null&&Vt.memoizedState.tag&1){if(n.flags|=2048,eo(9,Qg.bind(null,n,i,r,e),void 0,null),Ht===null)throw Error(oe(349));Wr&30||Jg(n,e,r)}return r}function Jg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Qg(t,e,n,i){e.value=n,e.getSnapshot=i,t0(e)&&n0(t)}function e0(t,e,n){return n(function(){t0(e)&&n0(t)})}function t0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ei(t,n)}catch{return!0}}function n0(t){var e=Oi(t,1);e!==null&&Qn(e,t,1,-1)}function cp(t){var e=li();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:t},e.queue=t,t=t.dispatch=T_.bind(null,St,t),[e.memoizedState,t]}function eo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function i0(){return Vn().memoizedState}function ol(t,e,n,i){var r=li();St.flags|=t,r.memoizedState=eo(1|e,n,void 0,i===void 0?null:i)}function ec(t,e,n,i){var r=Vn();i=i===void 0?null:i;var s=void 0;if(Ut!==null){var a=Ut.memoizedState;if(s=a.destroy,i!==null&&Of(i,a.deps)){r.memoizedState=eo(e,n,s,i);return}}St.flags|=t,r.memoizedState=eo(1|e,n,s,i)}function up(t,e){return ol(8390656,8,t,e)}function zf(t,e){return ec(2048,8,t,e)}function r0(t,e){return ec(4,2,t,e)}function s0(t,e){return ec(4,4,t,e)}function a0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function o0(t,e,n){return n=n!=null?n.concat([t]):null,ec(4,4,a0.bind(null,e,t),n)}function Vf(){}function l0(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Of(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function c0(t,e){var n=Vn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Of(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function u0(t,e,n){return Wr&21?(ei(n,e)||(n=mg(),St.lanes|=n,Xr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gn=!0),t.memoizedState=n)}function M_(t,e){var n=at;at=n!==0&&4>n?n:4,t(!0);var i=Dc.transition;Dc.transition={};try{t(!1),e()}finally{at=n,Dc.transition=i}}function d0(){return Vn().memoizedState}function E_(t,e,n){var i=hr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},f0(t))h0(e,n);else if(n=Yg(t,e,n,i),n!==null){var r=cn();Qn(n,t,i,r),p0(n,e,i)}}function T_(t,e,n){var i=hr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(f0(t))h0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ei(o,a)){var l=e.interleaved;l===null?(r.next=r,If(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Yg(t,e,r,i),n!==null&&(r=cn(),Qn(n,t,i,r),p0(n,e,i))}}function f0(t){var e=t.alternate;return t===St||e!==null&&e===St}function h0(t,e){Na=Nl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function p0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,xf(t,n)}}var Ul={readContext:zn,useCallback:Zt,useContext:Zt,useEffect:Zt,useImperativeHandle:Zt,useInsertionEffect:Zt,useLayoutEffect:Zt,useMemo:Zt,useReducer:Zt,useRef:Zt,useState:Zt,useDebugValue:Zt,useDeferredValue:Zt,useTransition:Zt,useMutableSource:Zt,useSyncExternalStore:Zt,useId:Zt,unstable_isNewReconciler:!1},w_={readContext:zn,useCallback:function(t,e){return li().memoizedState=[t,e===void 0?null:e],t},useContext:zn,useEffect:up,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ol(4194308,4,a0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ol(4194308,4,t,e)},useInsertionEffect:function(t,e){return ol(4,2,t,e)},useMemo:function(t,e){var n=li();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=li();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=E_.bind(null,St,t),[i.memoizedState,t]},useRef:function(t){var e=li();return t={current:t},e.memoizedState=t},useState:cp,useDebugValue:Vf,useDeferredValue:function(t){return li().memoizedState=t},useTransition:function(){var t=cp(!1),e=t[0];return t=M_.bind(null,t[1]),li().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=St,r=li();if(xt){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Ht===null)throw Error(oe(349));Wr&30||Jg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,up(e0.bind(null,i,s,t),[t]),i.flags|=2048,eo(9,Qg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=li(),e=Ht.identifierPrefix;if(xt){var n=Pi,i=Ri;n=(i&~(1<<32-Jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ja++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=S_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},A_={readContext:zn,useCallback:l0,useContext:zn,useEffect:zf,useImperativeHandle:o0,useInsertionEffect:r0,useLayoutEffect:s0,useMemo:c0,useReducer:Nc,useRef:i0,useState:function(){return Nc(Qa)},useDebugValue:Vf,useDeferredValue:function(t){var e=Vn();return u0(e,Ut.memoizedState,t)},useTransition:function(){var t=Nc(Qa)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:Kg,useSyncExternalStore:Zg,useId:d0,unstable_isNewReconciler:!1},b_={readContext:zn,useCallback:l0,useContext:zn,useEffect:zf,useImperativeHandle:o0,useInsertionEffect:r0,useLayoutEffect:s0,useMemo:c0,useReducer:Uc,useRef:i0,useState:function(){return Uc(Qa)},useDebugValue:Vf,useDeferredValue:function(t){var e=Vn();return Ut===null?e.memoizedState=t:u0(e,Ut.memoizedState,t)},useTransition:function(){var t=Uc(Qa)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:Kg,useSyncExternalStore:Zg,useId:d0,unstable_isNewReconciler:!1};function Yn(t,e){if(t&&t.defaultProps){e=Mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ju(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tc={isMounted:function(t){return(t=t._reactInternals)?Kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=cn(),r=hr(t),s=Ii(i,r);s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,r),e!==null&&(Qn(e,t,r,i),sl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=cn(),r=hr(t),s=Ii(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,r),e!==null&&(Qn(e,t,r,i),sl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=cn(),i=hr(t),r=Ii(n,i);r.tag=2,e!=null&&(r.callback=e),e=dr(t,r,i),e!==null&&(Qn(e,t,i,n),sl(e,t,i))}};function dp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!ja(n,i)||!ja(r,s):!0}function m0(t,e,n){var i=!1,r=gr,s=e.contextType;return typeof s=="object"&&s!==null?s=zn(s):(r=xn(e)?Gr:sn.current,i=e.contextTypes,s=(i=i!=null)?zs(t,r):gr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function fp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&tc.enqueueReplaceState(e,e.state,null)}function Qu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Df(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=zn(s):(s=xn(e)?Gr:sn.current,r.context=zs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ju(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&tc.enqueueReplaceState(r,r.state,null),Il(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ws(t,e){try{var n="",i=e;do n+=tx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Fc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ed(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var C_=typeof WeakMap=="function"?WeakMap:Map;function g0(t,e,n){n=Ii(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ol||(Ol=!0,ud=i),ed(t,e)},n}function v0(t,e,n){n=Ii(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ed(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ed(t,e),typeof i!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function hp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new C_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=G_.bind(null,t,e,n),e.then(t,t))}function pp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function mp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ii(-1,1),e.tag=2,dr(n,e,1))),n.lanes|=1),t)}var R_=Vi.ReactCurrentOwner,gn=!1;function ln(t,e,n,i){e.child=t===null?jg(e,null,n,i):Gs(e,t.child,n,i)}function gp(t,e,n,i,r){n=n.render;var s=e.ref;return Ns(e,r),i=kf(t,e,n,i,s,r),n=Bf(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ki(t,e,r)):(xt&&n&&Af(e),e.flags|=1,ln(t,e,i,r),e.child)}function vp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!$f(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,x0(t,e,s,i,r)):(t=dl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ja,n(a,i)&&t.ref===e.ref)return ki(t,e,r)}return e.flags|=1,t=pr(s,i),t.ref=e.ref,t.return=e,e.child=t}function x0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ja(s,i)&&t.ref===e.ref)if(gn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(gn=!0);else return e.lanes=t.lanes,ki(t,e,r)}return td(t,e,n,i,r)}function _0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(Rs,wn),wn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(Rs,wn),wn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ht(Rs,wn),wn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ht(Rs,wn),wn|=i;return ln(t,e,r,n),e.child}function y0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function td(t,e,n,i,r){var s=xn(n)?Gr:sn.current;return s=zs(e,s),Ns(e,r),n=kf(t,e,n,i,s,r),i=Bf(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ki(t,e,r)):(xt&&i&&Af(e),e.flags|=1,ln(t,e,n,r),e.child)}function xp(t,e,n,i,r){if(xn(n)){var s=!0;bl(e)}else s=!1;if(Ns(e,r),e.stateNode===null)ll(t,e),m0(e,n,i),Qu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=zn(c):(c=xn(n)?Gr:sn.current,c=zs(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&fp(e,a,i,c),Qi=!1;var d=e.memoizedState;a.state=d,Il(e,i,a,r),l=e.memoizedState,o!==i||d!==l||vn.current||Qi?(typeof f=="function"&&(Ju(e,n,f,i),l=e.memoizedState),(o=Qi||dp(e,n,o,i,d,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,qg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Yn(e.type,o),a.props=c,h=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=zn(l):(l=xn(n)?Gr:sn.current,l=zs(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||d!==l)&&fp(e,a,i,l),Qi=!1,d=e.memoizedState,a.state=d,Il(e,i,a,r);var y=e.memoizedState;o!==h||d!==y||vn.current||Qi?(typeof m=="function"&&(Ju(e,n,m,i),y=e.memoizedState),(c=Qi||dp(e,n,c,i,d,y,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,y,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,y,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),a.props=i,a.state=y,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return nd(t,e,n,i,s,r)}function nd(t,e,n,i,r,s){y0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&ip(e,n,!1),ki(t,e,s);i=e.stateNode,R_.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Gs(e,t.child,null,s),e.child=Gs(e,null,o,s)):ln(t,e,o,s),e.memoizedState=i.state,r&&ip(e,n,!0),e.child}function S0(t){var e=t.stateNode;e.pendingContext?np(t,e.pendingContext,e.pendingContext!==e.context):e.context&&np(t,e.context,!1),Nf(t,e.containerInfo)}function _p(t,e,n,i,r){return Vs(),Cf(r),e.flags|=256,ln(t,e,n,i),e.child}var id={dehydrated:null,treeContext:null,retryLane:0};function rd(t){return{baseLanes:t,cachePool:null,transitions:null}}function M0(t,e,n){var i=e.pendingProps,r=_t.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(_t,r&1),t===null)return Ku(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=rc(a,i,0,null),t=Vr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=rd(n),e.memoizedState=id,t):Gf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return P_(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=pr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=pr(o,s):(s=Vr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?rd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=id,i}return s=t.child,t=s.sibling,i=pr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Gf(t,e){return e=rc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Co(t,e,n,i){return i!==null&&Cf(i),Gs(e,t.child,null,n),t=Gf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function P_(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Fc(Error(oe(422))),Co(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=rc({mode:"visible",children:i.children},r,0,null),s=Vr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Gs(e,t.child,null,a),e.child.memoizedState=rd(a),e.memoizedState=id,s);if(!(e.mode&1))return Co(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(oe(419)),i=Fc(s,i,void 0),Co(t,e,a,i)}if(o=(a&t.childLanes)!==0,gn||o){if(i=Ht,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Oi(t,r),Qn(i,t,r,-1))}return qf(),i=Fc(Error(oe(421))),Co(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=H_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Cn=ur(r.nextSibling),Rn=e,xt=!0,$n=null,t!==null&&(Fn[On++]=Ri,Fn[On++]=Pi,Fn[On++]=Hr,Ri=t.id,Pi=t.overflow,Hr=e),e=Gf(e,i.children),e.flags|=4096,e)}function yp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Zu(t.return,e,n)}function Oc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function E0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ln(t,e,i.children,n),i=_t.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&yp(t,n,e);else if(t.tag===19)yp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(_t,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Dl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Oc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Dl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Oc(e,!0,n,null,s);break;case"together":Oc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ll(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ki(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function L_(t,e,n){switch(e.tag){case 3:S0(e),Vs();break;case 5:$g(e);break;case 1:xn(e.type)&&bl(e);break;case 4:Nf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(Pl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(_t,_t.current&1),e.flags|=128,null):n&e.child.childLanes?M0(t,e,n):(ht(_t,_t.current&1),t=ki(t,e,n),t!==null?t.sibling:null);ht(_t,_t.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return E0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(_t,_t.current),i)break;return null;case 22:case 23:return e.lanes=0,_0(t,e,n)}return ki(t,e,n)}var T0,sd,w0,A0;T0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sd=function(){};w0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Or(pi.current);var s=null;switch(n){case"input":r=bu(t,r),i=bu(t,i),s=[];break;case"select":r=Mt({},r,{value:void 0}),i=Mt({},i,{value:void 0}),s=[];break;case"textarea":r=Pu(t,r),i=Pu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=wl)}Iu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ba.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ba.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&pt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};A0=function(t,e,n,i){n!==i&&(e.flags|=4)};function ha(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function I_(t,e,n){var i=e.pendingProps;switch(bf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(e),null;case 1:return xn(e.type)&&Al(),Jt(e),null;case 3:return i=e.stateNode,Hs(),mt(vn),mt(sn),Ff(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ao(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$n!==null&&(hd($n),$n=null))),sd(t,e),Jt(e),null;case 5:Uf(e);var r=Or(Za.current);if(n=e.type,t!==null&&e.stateNode!=null)w0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return Jt(e),null}if(t=Or(pi.current),Ao(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ui]=e,i[$a]=s,t=(e.mode&1)!==0,n){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<wa.length;r++)pt(wa[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":Rh(i,s),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},pt("invalid",i);break;case"textarea":Lh(i,s),pt("invalid",i)}Iu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&wo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&wo(i.textContent,o,t),r=["children",""+o]):Ba.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&pt("scroll",i)}switch(n){case"input":vo(i),Ph(i,s,!0);break;case"textarea":vo(i),Ih(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=wl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=eg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ui]=e,t[$a]=i,T0(t,e,!1,!1),e.stateNode=t;e:{switch(a=Du(n,i),n){case"dialog":pt("cancel",t),pt("close",t),r=i;break;case"iframe":case"object":case"embed":pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<wa.length;r++)pt(wa[r],t);r=i;break;case"source":pt("error",t),r=i;break;case"img":case"image":case"link":pt("error",t),pt("load",t),r=i;break;case"details":pt("toggle",t),r=i;break;case"input":Rh(t,i),r=bu(t,i),pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Mt({},i,{value:void 0}),pt("invalid",t);break;case"textarea":Lh(t,i),r=Pu(t,i),pt("invalid",t);break;default:r=i}Iu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?ig(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&tg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&za(t,l):typeof l=="number"&&za(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ba.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pt("scroll",t):l!=null&&ff(t,s,l,a))}switch(n){case"input":vo(t),Ph(t,i,!1);break;case"textarea":vo(t),Ih(t);break;case"option":i.value!=null&&t.setAttribute("value",""+mr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ps(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ps(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=wl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Jt(e),null;case 6:if(t&&e.stateNode!=null)A0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=Or(Za.current),Or(pi.current),Ao(e)){if(i=e.stateNode,n=e.memoizedProps,i[ui]=e,(s=i.nodeValue!==n)&&(t=Rn,t!==null))switch(t.tag){case 3:wo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ui]=e,e.stateNode=i}return Jt(e),null;case 13:if(mt(_t),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xt&&Cn!==null&&e.mode&1&&!(e.flags&128))Wg(),Vs(),e.flags|=98560,s=!1;else if(s=Ao(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[ui]=e}else Vs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Jt(e),s=!1}else $n!==null&&(hd($n),$n=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||_t.current&1?Ft===0&&(Ft=3):qf())),e.updateQueue!==null&&(e.flags|=4),Jt(e),null);case 4:return Hs(),sd(t,e),t===null&&Ya(e.stateNode.containerInfo),Jt(e),null;case 10:return Lf(e.type._context),Jt(e),null;case 17:return xn(e.type)&&Al(),Jt(e),null;case 19:if(mt(_t),s=e.memoizedState,s===null)return Jt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)ha(s,!1);else{if(Ft!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Dl(t),a!==null){for(e.flags|=128,ha(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(_t,_t.current&1|2),e.child}t=t.sibling}s.tail!==null&&Lt()>Xs&&(e.flags|=128,i=!0,ha(s,!1),e.lanes=4194304)}else{if(!i)if(t=Dl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ha(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!xt)return Jt(e),null}else 2*Lt()-s.renderingStartTime>Xs&&n!==1073741824&&(e.flags|=128,i=!0,ha(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Lt(),e.sibling=null,n=_t.current,ht(_t,i?n&1|2:n&1),e):(Jt(e),null);case 22:case 23:return Yf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?wn&1073741824&&(Jt(e),e.subtreeFlags&6&&(e.flags|=8192)):Jt(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function D_(t,e){switch(bf(e),e.tag){case 1:return xn(e.type)&&Al(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Hs(),mt(vn),mt(sn),Ff(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Uf(e),null;case 13:if(mt(_t),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));Vs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return mt(_t),null;case 4:return Hs(),null;case 10:return Lf(e.type._context),null;case 22:case 23:return Yf(),null;case 24:return null;default:return null}}var Ro=!1,tn=!1,N_=typeof WeakSet=="function"?WeakSet:Set,Te=null;function Cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){wt(t,e,i)}else n.current=null}function ad(t,e,n){try{n()}catch(i){wt(t,e,i)}}var Sp=!1;function U_(t,e){if(Hu=Ml,t=Lg(),wf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++c===r&&(o=a),d===s&&++f===i&&(l=a),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wu={focusedElem:t,selectionRange:n},Ml=!1,Te=e;Te!==null;)if(e=Te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Te=t;else for(;Te!==null;){e=Te;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var T=y.memoizedProps,g=y.memoizedState,u=e.stateNode,x=u.getSnapshotBeforeUpdate(e.elementType===e.type?T:Yn(e.type,T),g);u.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(_){wt(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}return y=Sp,Sp=!1,y}function Ua(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ad(e,n,s)}r=r.next}while(r!==i)}}function nc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function od(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function b0(t){var e=t.alternate;e!==null&&(t.alternate=null,b0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ui],delete e[$a],delete e[Yu],delete e[v_],delete e[x_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function C0(t){return t.tag===5||t.tag===3||t.tag===4}function Mp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||C0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ld(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wl));else if(i!==4&&(t=t.child,t!==null))for(ld(t,e,n),t=t.sibling;t!==null;)ld(t,e,n),t=t.sibling}function cd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(cd(t,e,n),t=t.sibling;t!==null;)cd(t,e,n),t=t.sibling}var Xt=null,qn=!1;function Xi(t,e,n){for(n=n.child;n!==null;)R0(t,e,n),n=n.sibling}function R0(t,e,n){if(hi&&typeof hi.onCommitFiberUnmount=="function")try{hi.onCommitFiberUnmount(ql,n)}catch{}switch(n.tag){case 5:tn||Cs(n,e);case 6:var i=Xt,r=qn;Xt=null,Xi(t,e,n),Xt=i,qn=r,Xt!==null&&(qn?(t=Xt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xt.removeChild(n.stateNode));break;case 18:Xt!==null&&(qn?(t=Xt,n=n.stateNode,t.nodeType===8?Pc(t.parentNode,n):t.nodeType===1&&Pc(t,n),Wa(t)):Pc(Xt,n.stateNode));break;case 4:i=Xt,r=qn,Xt=n.stateNode.containerInfo,qn=!0,Xi(t,e,n),Xt=i,qn=r;break;case 0:case 11:case 14:case 15:if(!tn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&ad(n,e,a),r=r.next}while(r!==i)}Xi(t,e,n);break;case 1:if(!tn&&(Cs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){wt(n,e,o)}Xi(t,e,n);break;case 21:Xi(t,e,n);break;case 22:n.mode&1?(tn=(i=tn)||n.memoizedState!==null,Xi(t,e,n),tn=i):Xi(t,e,n);break;default:Xi(t,e,n)}}function Ep(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new N_),e.forEach(function(i){var r=W_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Hn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Xt=o.stateNode,qn=!1;break e;case 3:Xt=o.stateNode.containerInfo,qn=!0;break e;case 4:Xt=o.stateNode.containerInfo,qn=!0;break e}o=o.return}if(Xt===null)throw Error(oe(160));R0(s,a,r),Xt=null,qn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){wt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)P0(e,t),e=e.sibling}function P0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Hn(e,t),si(t),i&4){try{Ua(3,t,t.return),nc(3,t)}catch(T){wt(t,t.return,T)}try{Ua(5,t,t.return)}catch(T){wt(t,t.return,T)}}break;case 1:Hn(e,t),si(t),i&512&&n!==null&&Cs(n,n.return);break;case 5:if(Hn(e,t),si(t),i&512&&n!==null&&Cs(n,n.return),t.flags&32){var r=t.stateNode;try{za(r,"")}catch(T){wt(t,t.return,T)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Jm(r,s),Du(o,a);var c=Du(o,s);for(a=0;a<l.length;a+=2){var f=l[a],h=l[a+1];f==="style"?ig(r,h):f==="dangerouslySetInnerHTML"?tg(r,h):f==="children"?za(r,h):ff(r,f,h,c)}switch(o){case"input":Cu(r,s);break;case"textarea":Qm(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ps(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ps(r,!!s.multiple,s.defaultValue,!0):Ps(r,!!s.multiple,s.multiple?[]:"",!1))}r[$a]=s}catch(T){wt(t,t.return,T)}}break;case 6:if(Hn(e,t),si(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(T){wt(t,t.return,T)}}break;case 3:if(Hn(e,t),si(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Wa(e.containerInfo)}catch(T){wt(t,t.return,T)}break;case 4:Hn(e,t),si(t);break;case 13:Hn(e,t),si(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Xf=Lt())),i&4&&Ep(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(tn=(c=tn)||f,Hn(e,t),tn=c):Hn(e,t),si(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Te=t,f=t.child;f!==null;){for(h=Te=f;Te!==null;){switch(d=Te,m=d.child,d.tag){case 0:case 11:case 14:case 15:Ua(4,d,d.return);break;case 1:Cs(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(T){wt(i,n,T)}}break;case 5:Cs(d,d.return);break;case 22:if(d.memoizedState!==null){wp(h);continue}}m!==null?(m.return=d,Te=m):wp(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=ng("display",a))}catch(T){wt(t,t.return,T)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(T){wt(t,t.return,T)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Hn(e,t),si(t),i&4&&Ep(t);break;case 21:break;default:Hn(e,t),si(t)}}function si(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(C0(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(za(r,""),i.flags&=-33);var s=Mp(t);cd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Mp(t);ld(t,o,a);break;default:throw Error(oe(161))}}catch(l){wt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function F_(t,e,n){Te=t,L0(t)}function L0(t,e,n){for(var i=(t.mode&1)!==0;Te!==null;){var r=Te,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Ro;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||tn;o=Ro;var c=tn;if(Ro=a,(tn=l)&&!c)for(Te=r;Te!==null;)a=Te,l=a.child,a.tag===22&&a.memoizedState!==null?Ap(r):l!==null?(l.return=a,Te=l):Ap(r);for(;s!==null;)Te=s,L0(s),s=s.sibling;Te=r,Ro=o,tn=c}Tp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Te=s):Tp(t)}}function Tp(t){for(;Te!==null;){var e=Te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tn||nc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!tn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Yn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&lp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}lp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Wa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}tn||e.flags&512&&od(e)}catch(d){wt(e,e.return,d)}}if(e===t){Te=null;break}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}}function wp(t){for(;Te!==null;){var e=Te;if(e===t){Te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Te=n;break}Te=e.return}}function Ap(t){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{nc(4,e)}catch(l){wt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){wt(e,r,l)}}var s=e.return;try{od(e)}catch(l){wt(e,s,l)}break;case 5:var a=e.return;try{od(e)}catch(l){wt(e,a,l)}}}catch(l){wt(e,e.return,l)}if(e===t){Te=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Te=o;break}Te=e.return}}var O_=Math.ceil,Fl=Vi.ReactCurrentDispatcher,Hf=Vi.ReactCurrentOwner,Bn=Vi.ReactCurrentBatchConfig,Qe=0,Ht=null,Dt=null,Yt=0,wn=0,Rs=yr(0),Ft=0,to=null,Xr=0,ic=0,Wf=0,Fa=null,mn=null,Xf=0,Xs=1/0,Ai=null,Ol=!1,ud=null,fr=null,Po=!1,sr=null,kl=0,Oa=0,dd=null,cl=-1,ul=0;function cn(){return Qe&6?Lt():cl!==-1?cl:cl=Lt()}function hr(t){return t.mode&1?Qe&2&&Yt!==0?Yt&-Yt:y_.transition!==null?(ul===0&&(ul=mg()),ul):(t=at,t!==0||(t=window.event,t=t===void 0?16:Mg(t.type)),t):1}function Qn(t,e,n,i){if(50<Oa)throw Oa=0,dd=null,Error(oe(185));ao(t,n,i),(!(Qe&2)||t!==Ht)&&(t===Ht&&(!(Qe&2)&&(ic|=n),Ft===4&&nr(t,Yt)),_n(t,i),n===1&&Qe===0&&!(e.mode&1)&&(Xs=Lt()+500,Ql&&Sr()))}function _n(t,e){var n=t.callbackNode;yx(t,e);var i=Sl(t,t===Ht?Yt:0);if(i===0)n!==null&&Uh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Uh(n),e===1)t.tag===0?__(bp.bind(null,t)):Vg(bp.bind(null,t)),m_(function(){!(Qe&6)&&Sr()}),n=null;else{switch(gg(i)){case 1:n=vf;break;case 4:n=hg;break;case 16:n=yl;break;case 536870912:n=pg;break;default:n=yl}n=B0(n,I0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function I0(t,e){if(cl=-1,ul=0,Qe&6)throw Error(oe(327));var n=t.callbackNode;if(Us()&&t.callbackNode!==n)return null;var i=Sl(t,t===Ht?Yt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Bl(t,i);else{e=i;var r=Qe;Qe|=2;var s=N0();(Ht!==t||Yt!==e)&&(Ai=null,Xs=Lt()+500,zr(t,e));do try{z_();break}catch(o){D0(t,o)}while(!0);Pf(),Fl.current=s,Qe=r,Dt!==null?e=0:(Ht=null,Yt=0,e=Ft)}if(e!==0){if(e===2&&(r=ku(t),r!==0&&(i=r,e=fd(t,r))),e===1)throw n=to,zr(t,0),nr(t,i),_n(t,Lt()),n;if(e===6)nr(t,i);else{if(r=t.current.alternate,!(i&30)&&!k_(r)&&(e=Bl(t,i),e===2&&(s=ku(t),s!==0&&(i=s,e=fd(t,s))),e===1))throw n=to,zr(t,0),nr(t,i),_n(t,Lt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:Lr(t,mn,Ai);break;case 3:if(nr(t,i),(i&130023424)===i&&(e=Xf+500-Lt(),10<e)){if(Sl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){cn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ju(Lr.bind(null,t,mn,Ai),e);break}Lr(t,mn,Ai);break;case 4:if(nr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Jn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*O_(i/1960))-i,10<i){t.timeoutHandle=ju(Lr.bind(null,t,mn,Ai),i);break}Lr(t,mn,Ai);break;case 5:Lr(t,mn,Ai);break;default:throw Error(oe(329))}}}return _n(t,Lt()),t.callbackNode===n?I0.bind(null,t):null}function fd(t,e){var n=Fa;return t.current.memoizedState.isDehydrated&&(zr(t,e).flags|=256),t=Bl(t,e),t!==2&&(e=mn,mn=n,e!==null&&hd(e)),t}function hd(t){mn===null?mn=t:mn.push.apply(mn,t)}function k_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ei(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nr(t,e){for(e&=~Wf,e&=~ic,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jn(e),i=1<<n;t[n]=-1,e&=~i}}function bp(t){if(Qe&6)throw Error(oe(327));Us();var e=Sl(t,0);if(!(e&1))return _n(t,Lt()),null;var n=Bl(t,e);if(t.tag!==0&&n===2){var i=ku(t);i!==0&&(e=i,n=fd(t,i))}if(n===1)throw n=to,zr(t,0),nr(t,e),_n(t,Lt()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Lr(t,mn,Ai),_n(t,Lt()),null}function jf(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(Xs=Lt()+500,Ql&&Sr())}}function jr(t){sr!==null&&sr.tag===0&&!(Qe&6)&&Us();var e=Qe;Qe|=1;var n=Bn.transition,i=at;try{if(Bn.transition=null,at=1,t)return t()}finally{at=i,Bn.transition=n,Qe=e,!(Qe&6)&&Sr()}}function Yf(){wn=Rs.current,mt(Rs)}function zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,p_(n)),Dt!==null)for(n=Dt.return;n!==null;){var i=n;switch(bf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Al();break;case 3:Hs(),mt(vn),mt(sn),Ff();break;case 5:Uf(i);break;case 4:Hs();break;case 13:mt(_t);break;case 19:mt(_t);break;case 10:Lf(i.type._context);break;case 22:case 23:Yf()}n=n.return}if(Ht=t,Dt=t=pr(t.current,null),Yt=wn=e,Ft=0,to=null,Wf=ic=Xr=0,mn=Fa=null,Fr!==null){for(e=0;e<Fr.length;e++)if(n=Fr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Fr=null}return t}function D0(t,e){do{var n=Dt;try{if(Pf(),al.current=Ul,Nl){for(var i=St.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Nl=!1}if(Wr=0,Vt=Ut=St=null,Na=!1,Ja=0,Hf.current=null,n===null||n.return===null){Ft=1,to=e,Dt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Yt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=o,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=pp(a);if(m!==null){m.flags&=-257,mp(m,a,o,s,e),m.mode&1&&hp(s,c,e),e=m,l=c;var y=e.updateQueue;if(y===null){var T=new Set;T.add(l),e.updateQueue=T}else y.add(l);break e}else{if(!(e&1)){hp(s,c,e),qf();break e}l=Error(oe(426))}}else if(xt&&o.mode&1){var g=pp(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),mp(g,a,o,s,e),Cf(Ws(l,o));break e}}s=l=Ws(l,o),Ft!==4&&(Ft=2),Fa===null?Fa=[s]:Fa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=g0(s,l,e);op(s,u);break e;case 1:o=l;var x=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(fr===null||!fr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=v0(s,o,e);op(s,_);break e}}s=s.return}while(s!==null)}F0(n)}catch(A){e=A,Dt===n&&n!==null&&(Dt=n=n.return);continue}break}while(!0)}function N0(){var t=Fl.current;return Fl.current=Ul,t===null?Ul:t}function qf(){(Ft===0||Ft===3||Ft===2)&&(Ft=4),Ht===null||!(Xr&268435455)&&!(ic&268435455)||nr(Ht,Yt)}function Bl(t,e){var n=Qe;Qe|=2;var i=N0();(Ht!==t||Yt!==e)&&(Ai=null,zr(t,e));do try{B_();break}catch(r){D0(t,r)}while(!0);if(Pf(),Qe=n,Fl.current=i,Dt!==null)throw Error(oe(261));return Ht=null,Yt=0,Ft}function B_(){for(;Dt!==null;)U0(Dt)}function z_(){for(;Dt!==null&&!dx();)U0(Dt)}function U0(t){var e=k0(t.alternate,t,wn);t.memoizedProps=t.pendingProps,e===null?F0(t):Dt=e,Hf.current=null}function F0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=D_(n,e),n!==null){n.flags&=32767,Dt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ft=6,Dt=null;return}}else if(n=I_(n,e,wn),n!==null){Dt=n;return}if(e=e.sibling,e!==null){Dt=e;return}Dt=e=t}while(e!==null);Ft===0&&(Ft=5)}function Lr(t,e,n){var i=at,r=Bn.transition;try{Bn.transition=null,at=1,V_(t,e,n,i)}finally{Bn.transition=r,at=i}return null}function V_(t,e,n,i){do Us();while(sr!==null);if(Qe&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Sx(t,s),t===Ht&&(Dt=Ht=null,Yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Po||(Po=!0,B0(yl,function(){return Us(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Bn.transition,Bn.transition=null;var a=at;at=1;var o=Qe;Qe|=4,Hf.current=null,U_(t,n),P0(n,t),o_(Wu),Ml=!!Hu,Wu=Hu=null,t.current=n,F_(n),fx(),Qe=o,at=a,Bn.transition=s}else t.current=n;if(Po&&(Po=!1,sr=t,kl=r),s=t.pendingLanes,s===0&&(fr=null),mx(n.stateNode),_n(t,Lt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ol)throw Ol=!1,t=ud,ud=null,t;return kl&1&&t.tag!==0&&Us(),s=t.pendingLanes,s&1?t===dd?Oa++:(Oa=0,dd=t):Oa=0,Sr(),null}function Us(){if(sr!==null){var t=gg(kl),e=Bn.transition,n=at;try{if(Bn.transition=null,at=16>t?16:t,sr===null)var i=!1;else{if(t=sr,sr=null,kl=0,Qe&6)throw Error(oe(331));var r=Qe;for(Qe|=4,Te=t.current;Te!==null;){var s=Te,a=s.child;if(Te.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Te=c;Te!==null;){var f=Te;switch(f.tag){case 0:case 11:case 15:Ua(8,f,s)}var h=f.child;if(h!==null)h.return=f,Te=h;else for(;Te!==null;){f=Te;var d=f.sibling,m=f.return;if(b0(f),f===c){Te=null;break}if(d!==null){d.return=m,Te=d;break}Te=m}}}var y=s.alternate;if(y!==null){var T=y.child;if(T!==null){y.child=null;do{var g=T.sibling;T.sibling=null,T=g}while(T!==null)}}Te=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Te=a;else e:for(;Te!==null;){if(s=Te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ua(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Te=u;break e}Te=s.return}}var x=t.current;for(Te=x;Te!==null;){a=Te;var S=a.child;if(a.subtreeFlags&2064&&S!==null)S.return=a,Te=S;else e:for(a=x;Te!==null;){if(o=Te,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:nc(9,o)}}catch(A){wt(o,o.return,A)}if(o===a){Te=null;break e}var _=o.sibling;if(_!==null){_.return=o.return,Te=_;break e}Te=o.return}}if(Qe=r,Sr(),hi&&typeof hi.onPostCommitFiberRoot=="function")try{hi.onPostCommitFiberRoot(ql,t)}catch{}i=!0}return i}finally{at=n,Bn.transition=e}}return!1}function Cp(t,e,n){e=Ws(n,e),e=g0(t,e,1),t=dr(t,e,1),e=cn(),t!==null&&(ao(t,1,e),_n(t,e))}function wt(t,e,n){if(t.tag===3)Cp(t,t,n);else for(;e!==null;){if(e.tag===3){Cp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(fr===null||!fr.has(i))){t=Ws(n,t),t=v0(e,t,1),e=dr(e,t,1),t=cn(),e!==null&&(ao(e,1,t),_n(e,t));break}}e=e.return}}function G_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=cn(),t.pingedLanes|=t.suspendedLanes&n,Ht===t&&(Yt&n)===n&&(Ft===4||Ft===3&&(Yt&130023424)===Yt&&500>Lt()-Xf?zr(t,0):Wf|=n),_n(t,e)}function O0(t,e){e===0&&(t.mode&1?(e=yo,yo<<=1,!(yo&130023424)&&(yo=4194304)):e=1);var n=cn();t=Oi(t,e),t!==null&&(ao(t,e,n),_n(t,n))}function H_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),O0(t,n)}function W_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),O0(t,n)}var k0;k0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vn.current)gn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gn=!1,L_(t,e,n);gn=!!(t.flags&131072)}else gn=!1,xt&&e.flags&1048576&&Gg(e,Rl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ll(t,e),t=e.pendingProps;var r=zs(e,sn.current);Ns(e,n),r=kf(null,e,i,t,r,n);var s=Bf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xn(i)?(s=!0,bl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Df(e),r.updater=tc,e.stateNode=r,r._reactInternals=e,Qu(e,i,t,n),e=nd(null,e,i,!0,s,n)):(e.tag=0,xt&&s&&Af(e),ln(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ll(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=j_(i),t=Yn(i,t),r){case 0:e=td(null,e,i,t,n);break e;case 1:e=xp(null,e,i,t,n);break e;case 11:e=gp(null,e,i,t,n);break e;case 14:e=vp(null,e,i,Yn(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),td(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),xp(t,e,i,r,n);case 3:e:{if(S0(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,qg(t,e),Il(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ws(Error(oe(423)),e),e=_p(t,e,i,n,r);break e}else if(i!==r){r=Ws(Error(oe(424)),e),e=_p(t,e,i,n,r);break e}else for(Cn=ur(e.stateNode.containerInfo.firstChild),Rn=e,xt=!0,$n=null,n=jg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vs(),i===r){e=ki(t,e,n);break e}ln(t,e,i,n)}e=e.child}return e;case 5:return $g(e),t===null&&Ku(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Xu(i,r)?a=null:s!==null&&Xu(i,s)&&(e.flags|=32),y0(t,e),ln(t,e,a,n),e.child;case 6:return t===null&&Ku(e),null;case 13:return M0(t,e,n);case 4:return Nf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Gs(e,null,i,n):ln(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),gp(t,e,i,r,n);case 7:return ln(t,e,e.pendingProps,n),e.child;case 8:return ln(t,e,e.pendingProps.children,n),e.child;case 12:return ln(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ht(Pl,i._currentValue),i._currentValue=a,s!==null)if(ei(s.value,a)){if(s.children===r.children&&!vn.current){e=ki(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ii(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Zu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(oe(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Zu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}ln(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ns(e,n),r=zn(r),i=i(r),e.flags|=1,ln(t,e,i,n),e.child;case 14:return i=e.type,r=Yn(i,e.pendingProps),r=Yn(i.type,r),vp(t,e,i,r,n);case 15:return x0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),ll(t,e),e.tag=1,xn(i)?(t=!0,bl(e)):t=!1,Ns(e,n),m0(e,i,r),Qu(e,i,r,n),nd(null,e,i,!0,t,n);case 19:return E0(t,e,n);case 22:return _0(t,e,n)}throw Error(oe(156,e.tag))};function B0(t,e){return fg(t,e)}function X_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,e,n,i){return new X_(t,e,n,i)}function $f(t){return t=t.prototype,!(!t||!t.isReactComponent)}function j_(t){if(typeof t=="function")return $f(t)?1:0;if(t!=null){if(t=t.$$typeof,t===pf)return 11;if(t===mf)return 14}return 2}function pr(t,e){var n=t.alternate;return n===null?(n=kn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function dl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")$f(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case _s:return Vr(n.children,r,s,e);case hf:a=8,r|=8;break;case Eu:return t=kn(12,n,e,r|2),t.elementType=Eu,t.lanes=s,t;case Tu:return t=kn(13,n,e,r),t.elementType=Tu,t.lanes=s,t;case wu:return t=kn(19,n,e,r),t.elementType=wu,t.lanes=s,t;case $m:return rc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ym:a=10;break e;case qm:a=9;break e;case pf:a=11;break e;case mf:a=14;break e;case Ji:a=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=kn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Vr(t,e,n,i){return t=kn(7,t,i,e),t.lanes=n,t}function rc(t,e,n,i){return t=kn(22,t,i,e),t.elementType=$m,t.lanes=n,t.stateNode={isHidden:!1},t}function kc(t,e,n){return t=kn(6,t,null,e),t.lanes=n,t}function Bc(t,e,n){return e=kn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Y_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_c(0),this.expirationTimes=_c(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_c(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Kf(t,e,n,i,r,s,a,o,l){return t=new Y_(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Df(s),t}function q_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function z0(t){if(!t)return gr;t=t._reactInternals;e:{if(Kr(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(xn(n))return zg(t,n,e)}return e}function V0(t,e,n,i,r,s,a,o,l){return t=Kf(n,i,!0,t,r,s,a,o,l),t.context=z0(null),n=t.current,i=cn(),r=hr(n),s=Ii(i,r),s.callback=e??null,dr(n,s,r),t.current.lanes=r,ao(t,r,i),_n(t,i),t}function sc(t,e,n,i){var r=e.current,s=cn(),a=hr(r);return n=z0(n),e.context===null?e.context=n:e.pendingContext=n,e=Ii(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=dr(r,e,a),t!==null&&(Qn(t,r,a,s),sl(t,r,a)),a}function zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Rp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Zf(t,e){Rp(t,e),(t=t.alternate)&&Rp(t,e)}function $_(){return null}var G0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Jf(t){this._internalRoot=t}ac.prototype.render=Jf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));sc(t,e,null,null)};ac.prototype.unmount=Jf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;jr(function(){sc(null,t,null,null)}),e[Fi]=null}};function ac(t){this._internalRoot=t}ac.prototype.unstable_scheduleHydration=function(t){if(t){var e=_g();t={blockedOn:null,target:t,priority:e};for(var n=0;n<tr.length&&e!==0&&e<tr[n].priority;n++);tr.splice(n,0,t),n===0&&Sg(t)}};function Qf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function oc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Pp(){}function K_(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=zl(a);s.call(c)}}var a=V0(e,i,t,0,null,!1,!1,"",Pp);return t._reactRootContainer=a,t[Fi]=a.current,Ya(t.nodeType===8?t.parentNode:t),jr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=zl(l);o.call(c)}}var l=Kf(t,0,!1,null,null,!1,!1,"",Pp);return t._reactRootContainer=l,t[Fi]=l.current,Ya(t.nodeType===8?t.parentNode:t),jr(function(){sc(e,l,n,i)}),l}function lc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=zl(a);o.call(l)}}sc(e,a,t,r)}else a=K_(n,e,t,r,i);return zl(a)}vg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ta(e.pendingLanes);n!==0&&(xf(e,n|1),_n(e,Lt()),!(Qe&6)&&(Xs=Lt()+500,Sr()))}break;case 13:jr(function(){var i=Oi(t,1);if(i!==null){var r=cn();Qn(i,t,1,r)}}),Zf(t,1)}};_f=function(t){if(t.tag===13){var e=Oi(t,134217728);if(e!==null){var n=cn();Qn(e,t,134217728,n)}Zf(t,134217728)}};xg=function(t){if(t.tag===13){var e=hr(t),n=Oi(t,e);if(n!==null){var i=cn();Qn(n,t,e,i)}Zf(t,e)}};_g=function(){return at};yg=function(t,e){var n=at;try{return at=t,e()}finally{at=n}};Uu=function(t,e,n){switch(e){case"input":if(Cu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Jl(i);if(!r)throw Error(oe(90));Zm(i),Cu(i,r)}}}break;case"textarea":Qm(t,n);break;case"select":e=n.value,e!=null&&Ps(t,!!n.multiple,e,!1)}};ag=jf;og=jr;var Z_={usingClientEntryPoint:!1,Events:[lo,Es,Jl,rg,sg,jf]},pa={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},J_={bundleType:pa.bundleType,version:pa.version,rendererPackageName:pa.rendererPackageName,rendererConfig:pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ug(t),t===null?null:t.stateNode},findFiberByHostInstance:pa.findFiberByHostInstance||$_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lo.isDisabled&&Lo.supportsFiber)try{ql=Lo.inject(J_),hi=Lo}catch{}}Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z_;Ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qf(e))throw Error(oe(200));return q_(t,e,null,n)};Ln.createRoot=function(t,e){if(!Qf(t))throw Error(oe(299));var n=!1,i="",r=G0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Kf(t,1,!1,null,null,n,!1,i,r),t[Fi]=e.current,Ya(t.nodeType===8?t.parentNode:t),new Jf(e)};Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=ug(e),t=t===null?null:t.stateNode,t};Ln.flushSync=function(t){return jr(t)};Ln.hydrate=function(t,e,n){if(!oc(e))throw Error(oe(200));return lc(null,t,e,!0,n)};Ln.hydrateRoot=function(t,e,n){if(!Qf(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=G0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=V0(e,null,t,1,n??null,r,!1,s,a),t[Fi]=e.current,Ya(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ac(e)};Ln.render=function(t,e,n){if(!oc(e))throw Error(oe(200));return lc(null,t,e,!1,n)};Ln.unmountComponentAtNode=function(t){if(!oc(t))throw Error(oe(40));return t._reactRootContainer?(jr(function(){lc(null,null,t,!1,function(){t._reactRootContainer=null,t[Fi]=null})}),!0):!1};Ln.unstable_batchedUpdates=jf;Ln.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!oc(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return lc(t,e,n,!1,i)};Ln.version="18.3.1-next-f1338f8080-20240426";function H0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(H0)}catch(t){console.error(t)}}H0(),Hm.exports=Ln;var Q_=Hm.exports,Lp=Q_;Su.createRoot=Lp.createRoot,Su.hydrateRoot=Lp.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ey={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),bt=(t,e)=>{const n=je.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:l,...c},f)=>je.createElement("svg",{ref:f,...ey,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${ty(t)}`,o].join(" "),...c},[...e.map(([h,d])=>je.createElement(h,d)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=bt("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=bt("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=bt("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=bt("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=bt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=bt("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=bt("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=bt("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=bt("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=bt("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=bt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=bt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=bt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=bt("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=bt("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=bt("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=bt("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=bt("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=bt("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=bt("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=bt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=bt("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function Sy({isVideoActive:t=!0}){const e=je.useRef(null),[n,i]=je.useState(.48);return je.useEffect(()=>{const r=e.current;r&&(t?(r.muted=!0,r.play().catch(s=>{console.log("Autoplay policy caught:",s)})):r.pause())},[t]),C.jsxs(C.Fragment,{children:[C.jsx("video",{ref:e,src:"/f1.mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"auto",style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",objectFit:"cover",zIndex:-10,opacity:t?n:0,filter:"saturate(1.15) brightness(0.85) contrast(1.15)",transition:"opacity 0.6s ease",pointerEvents:"none"}}),C.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",background:`
            radial-gradient(ellipse at 50% 20%, rgba(7, 10, 18, 0.40) 0%, rgba(7, 10, 18, 0.68) 60%, rgba(7, 10, 18, 0.88) 100%),
            linear-gradient(180deg, rgba(7, 10, 18, 0.35) 0%, rgba(7, 10, 18, 0.65) 50%, rgba(7, 10, 18, 0.85) 100%)
          `,zIndex:-9,pointerEvents:"none"}}),C.jsxs("div",{style:{position:"fixed",left:"24px",bottom:"24px",zIndex:50,display:"flex",alignItems:"center",gap:"8px",background:"rgba(13, 19, 33, 0.85)",backdropFilter:"blur(16px)",border:"1px solid rgba(255, 24, 1, 0.35)",boxShadow:"0 4px 20px rgba(0,0,0,0.6)",borderRadius:"12px",padding:"6px 12px"},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[C.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:t?"#10b981":"#ff1801",boxShadow:`0 0 8px ${t?"#10b981":"#ff1801"}`}}),C.jsx("span",{style:{fontSize:"0.72rem",fontFamily:"var(--font-mono)",color:"#fff",fontWeight:"700"},children:"🏎️ F1 BACKDROP:"})]}),C.jsx("div",{style:{display:"flex",gap:"4px"},children:[{label:"30%",val:.3},{label:"50%",val:.5},{label:"75%",val:.75}].map(r=>C.jsx("button",{onClick:()=>i(r.val),style:{background:Math.abs(n-r.val)<.05?"var(--f1-red)":"rgba(255,255,255,0.06)",color:"#fff",border:"none",borderRadius:"6px",padding:"2px 6px",fontSize:"0.68rem",fontFamily:"var(--font-mono)",fontWeight:"700",cursor:"pointer",transition:"all 0.2s"},title:`Set F1 video opacity to ${r.label}`,children:r.label},r.label))})]})]})}function My({isVideoActive:t,setIsVideoActive:e}){const[n,i]=je.useState(!1),r=(a,o)=>{a.preventDefault(),i(!1);const l=document.getElementById(o);l&&l.scrollIntoView({behavior:"smooth"})},s=[{id:"hero",num:"01",label:"RETRO 3D TERMINAL",desc:"Commodore PET 8296 Interactive Stage"},{id:"skills",num:"02",label:"SKILLS & CLOUD MATRIX",desc:"AWS, Kubernetes, Terraform, Docker, CI/CD, FastAPI"},{id:"projects",num:"03",label:"FEATURED PROJECTS",desc:"Career_Genie, hi_links, Cura-AI-Health"},{id:"terminal",num:"04",label:"DEVOPS CLI CONSOLE",desc:"Interactive Linux & GitOps terminal"},{id:"certs",num:"05",label:"EDUCATION & CERTS",desc:"LPU B.Tech CSE (7.2 CGPA) & Xebia Agentic AI"},{id:"contact",num:"06",label:"GET IN TOUCH",desc:"Hire Me / Contact Chinni Krishna"}];return C.jsxs(C.Fragment,{children:[C.jsxs("header",{style:{position:"fixed",top:0,left:0,right:0,zIndex:100,padding:"16px 28px",display:"flex",alignItems:"center",justifyContent:"space-between",pointerEvents:"none"},children:[C.jsxs("a",{href:"#hero",onClick:a=>r(a,"hero"),style:{textDecoration:"none",display:"flex",alignItems:"center",gap:"10px",pointerEvents:"auto",background:"rgba(7, 10, 18, 0.75)",backdropFilter:"blur(16px)",border:"1px solid var(--border-subtle)",borderRadius:"12px",padding:"6px 14px",transition:"all 0.2s"},children:[C.jsx("div",{style:{width:"28px",height:"28px",borderRadius:"8px",background:"linear-gradient(135deg, var(--f1-red) 0%, #0d1321 100%)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"900",fontSize:"0.78rem",color:"#fff",fontFamily:"var(--font-heading)"},children:"CK"}),C.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[C.jsx("span",{style:{fontFamily:"var(--font-heading)",fontWeight:"800",fontSize:"0.86rem",color:"#fff",letterSpacing:"-0.01em"},children:"Chinni Krishna"}),C.jsx("span",{style:{fontSize:"0.66rem",fontFamily:"var(--font-mono)",color:"var(--text-dim)"},children:"@GrayViper"})]})]}),C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",pointerEvents:"auto"},children:[C.jsxs("button",{onClick:()=>e(!t),style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"8px 14px",borderRadius:"12px",background:"rgba(7, 10, 18, 0.75)",backdropFilter:"blur(16px)",border:`1px solid ${t?"var(--f1-red)":"var(--border-subtle)"}`,color:t?"var(--f1-red)":"var(--text-dim)",fontSize:"0.76rem",fontFamily:"var(--font-mono)",fontWeight:"700",cursor:"pointer",transition:"all 0.2s"},title:t?"Pause F1 Cinematic Video":"Play F1 Cinematic Video",children:[C.jsx("span",{children:"🏎️"}),C.jsx("span",{children:t?"F1: ON":"F1: OFF"})]}),C.jsxs("button",{onClick:()=>i(!n),style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"12px",background:n?"var(--f1-red)":"rgba(7, 10, 18, 0.75)",backdropFilter:"blur(16px)",border:"1px solid var(--border-subtle)",color:"#fff",fontSize:"0.84rem",fontFamily:"var(--font-mono)",fontWeight:"700",cursor:"pointer",transition:"all 0.2s",boxShadow:n?"0 0 20px var(--f1-red-glow)":"none"},title:"Toggle Navigation Menu",children:[n?C.jsx(_y,{size:16}):C.jsx(dy,{size:16}),C.jsx("span",{children:n?"CLOSE":"MENU"})]})]})]}),n&&C.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:99,background:"rgba(5, 7, 13, 0.95)",backdropFilter:"blur(24px)",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"40px 20px",boxSizing:"border-box",animation:"fadeIn 0.25s ease"},children:C.jsxs("div",{style:{width:"100%",maxWidth:"720px",display:"flex",flexDirection:"column",gap:"12px"},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingBottom:"16px",borderBottom:"1px solid var(--border-subtle)",marginBottom:"8px"},children:[C.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"0.78rem",color:"var(--f1-yellow)",letterSpacing:"0.08em"},children:"*** DEVOPS PORTFOLIO NAVIGATION // INDEX ***"}),C.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"0.74rem",color:"var(--terminal-green)"},children:"● ONLINE (EKS 1.30)"})]}),s.map(a=>C.jsxs("a",{href:`#${a.id}`,onClick:o=>r(o,a.id),style:{textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 20px",borderRadius:"14px",background:"rgba(255, 255, 255, 0.03)",border:"1px solid var(--border-subtle)",transition:"all 0.2s",color:"#fff"},onMouseEnter:o=>{o.currentTarget.style.background="rgba(255, 24, 1, 0.12)",o.currentTarget.style.borderColor="var(--f1-red)",o.currentTarget.style.transform="translateX(6px)"},onMouseLeave:o=>{o.currentTarget.style.background="rgba(255, 255, 255, 0.03)",o.currentTarget.style.borderColor="var(--border-subtle)",o.currentTarget.style.transform="translateX(0px)"},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[C.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"0.84rem",color:"var(--f1-yellow)",fontWeight:"700"},children:a.num}),C.jsxs("div",{children:[C.jsx("div",{style:{fontFamily:"var(--font-heading)",fontSize:"1.05rem",fontWeight:"800",letterSpacing:"-0.01em"},children:a.label}),C.jsx("div",{style:{fontSize:"0.74rem",color:"var(--text-dim)",fontFamily:"var(--font-mono)",marginTop:"2px"},children:a.desc})]})]}),C.jsx(iy,{size:18,color:"var(--cyber-cyan)"})]},a.id)),C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"16px",paddingTop:"16px",borderTop:"1px solid var(--border-subtle)",flexWrap:"wrap",gap:"12px"},children:[C.jsxs("div",{style:{display:"flex",gap:"10px"},children:[C.jsxs("a",{href:"https://github.com/GrayViper",target:"_blank",rel:"noreferrer",style:{display:"inline-flex",alignItems:"center",gap:"6px",fontSize:"0.8rem",color:"var(--text-dim)",textDecoration:"none",padding:"6px 12px",borderRadius:"8px",border:"1px solid var(--border-subtle)",fontFamily:"var(--font-mono)"},children:[C.jsx(cc,{size:14})," GitHub"]}),C.jsxs("a",{href:"https://www.linkedin.com/in/chinni-krishna8",target:"_blank",rel:"noreferrer",style:{display:"inline-flex",alignItems:"center",gap:"6px",fontSize:"0.8rem",color:"var(--text-dim)",textDecoration:"none",padding:"6px 12px",borderRadius:"8px",border:"1px solid var(--border-subtle)",fontFamily:"var(--font-mono)"},children:[C.jsx(eh,{size:14})," LinkedIn"]})]}),C.jsxs("a",{href:"#contact",onClick:a=>r(a,"contact"),className:"btn-primary",style:{padding:"8px 20px",fontSize:"0.84rem"},children:[C.jsx(yy,{size:14})," Hire Chinni Krishna"]})]})]})})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const th="185",Ey=0,Ip=1,Ty=2,ka=1,wy=2,Aa=3,vr=0,yn=1,Ci=2,Di=0,Fs=1,Dp=2,Np=3,Up=4,Ay=5,Dr=100,by=101,Cy=102,Ry=103,Py=104,Ly=200,Iy=201,Dy=202,Ny=203,pd=204,md=205,Uy=206,Fy=207,Oy=208,ky=209,By=210,zy=211,Vy=212,Gy=213,Hy=214,gd=0,vd=1,xd=2,js=3,_d=4,yd=5,Sd=6,Md=7,X0=0,Wy=1,Xy=2,mi=0,j0=1,Y0=2,q0=3,$0=4,K0=5,Z0=6,J0=7,Q0=300,Yr=301,Ys=302,zc=303,Vc=304,uc=306,Ed=1e3,Li=1001,Td=1002,jt=1003,jy=1004,Io=1005,Gt=1006,Gc=1007,kr=1008,bn=1009,ev=1010,tv=1011,no=1012,nh=1013,xi=1014,di=1015,Bi=1016,ih=1017,rh=1018,io=1020,nv=35902,iv=35899,rv=1021,sv=1022,Zn=1023,zi=1026,Br=1027,av=1028,sh=1029,qr=1030,ah=1031,oh=1033,fl=33776,hl=33777,pl=33778,ml=33779,wd=35840,Ad=35841,bd=35842,Cd=35843,Rd=36196,Pd=37492,Ld=37496,Id=37488,Dd=37489,Vl=37490,Nd=37491,Ud=37808,Fd=37809,Od=37810,kd=37811,Bd=37812,zd=37813,Vd=37814,Gd=37815,Hd=37816,Wd=37817,Xd=37818,jd=37819,Yd=37820,qd=37821,$d=36492,Kd=36494,Zd=36495,Jd=36283,Qd=36284,Gl=36285,ef=36286,Yy=3200,tf=0,qy=1,ir="",Un="srgb",Hl="srgb-linear",Wl="linear",st="srgb",rs=7680,Fp=519,$y=512,Ky=513,Zy=514,lh=515,Jy=516,Qy=517,ch=518,eS=519,Op=35044,kp="300 es",fi=2e3,ro=2001;function tS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Xl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function nS(){const t=Xl("canvas");return t.style.display="block",t}const Bp={};function zp(...t){const e="THREE."+t.shift();console.log(e,...t)}function ov(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ne(...t){t=ov(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Ze(...t){t=ov(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Os(...t){const e=t.join(" ");e in Bp||(Bp[e]=!0,Ne(...t))}function iS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const rS={[gd]:vd,[xd]:Sd,[_d]:Md,[js]:yd,[vd]:gd,[Sd]:xd,[Md]:_d,[yd]:js};class Zr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hc=Math.PI/180,nf=180/Math.PI;function uo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[t&255]+Qt[t>>8&255]+Qt[t>>16&255]+Qt[t>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[n&63|128]+Qt[n>>8&255]+"-"+Qt[n>>16&255]+Qt[n>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function qe(t,e,n){return Math.max(e,Math.min(n,t))}function sS(t,e){return(t%e+e)%e}function Wc(t,e,n){return(1-n)*t+n*e}function ma(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const vh=class vh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vh.prototype.isVector2=!0;let $e=vh;class ea{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3],d=s[a+0],m=s[a+1],y=s[a+2],T=s[a+3];if(h!==T||l!==d||c!==m||f!==y){let g=l*d+c*m+f*y+h*T;g<0&&(d=-d,m=-m,y=-y,T=-T,g=-g);let u=1-o;if(g<.9995){const x=Math.acos(g),S=Math.sin(x);u=Math.sin(u*x)/S,o=Math.sin(o*x)/S,l=l*u+d*o,c=c*u+m*o,f=f*u+y*o,h=h*u+T*o}else{l=l*u+d*o,c=c*u+m*o,f=f*u+y*o,h=h*u+T*o;const x=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=x,c*=x,f*=x,h*=x}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[a],d=s[a+1],m=s[a+2],y=s[a+3];return e[n]=o*y+f*h+l*m-c*d,e[n+1]=l*y+f*d+c*h-o*m,e[n+2]=c*y+f*m+o*d-l*h,e[n+3]=f*y-o*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),h=o(s/2),d=l(i/2),m=l(r/2),y=l(s/2);switch(a){case"XYZ":this._x=d*f*h+c*m*y,this._y=c*m*h-d*f*y,this._z=c*f*y+d*m*h,this._w=c*f*h-d*m*y;break;case"YXZ":this._x=d*f*h+c*m*y,this._y=c*m*h-d*f*y,this._z=c*f*y-d*m*h,this._w=c*f*h+d*m*y;break;case"ZXY":this._x=d*f*h-c*m*y,this._y=c*m*h+d*f*y,this._z=c*f*y+d*m*h,this._w=c*f*h-d*m*y;break;case"ZYX":this._x=d*f*h-c*m*y,this._y=c*m*h+d*f*y,this._z=c*f*y-d*m*h,this._w=c*f*h+d*m*y;break;case"YZX":this._x=d*f*h+c*m*y,this._y=c*m*h+d*f*y,this._z=c*f*y-d*m*h,this._w=c*f*h-d*m*y;break;case"XZY":this._x=d*f*h-c*m*y,this._y=c*m*h-d*f*y,this._z=c*f*y+d*m*h,this._w=c*f*h+d*m*y;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(f-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const xh=class xh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Vp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Vp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*f,this.y=i+l*f+o*c-s*h,this.z=r+l*h+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xc.copy(this).projectOnVector(e),this.sub(Xc)}reflect(e){return this.sub(Xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xh.prototype.isVector3=!0;let W=xh;const Xc=new W,Vp=new ea,_h=class _h{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],m=i[5],y=i[8],T=r[0],g=r[3],u=r[6],x=r[1],S=r[4],_=r[7],A=r[2],E=r[5],w=r[8];return s[0]=a*T+o*x+l*A,s[3]=a*g+o*S+l*E,s[6]=a*u+o*_+l*w,s[1]=c*T+f*x+h*A,s[4]=c*g+f*S+h*E,s[7]=c*u+f*_+h*w,s[2]=d*T+m*x+y*A,s[5]=d*g+m*S+y*E,s[8]=d*u+m*_+y*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*a*f-n*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=f*a-o*c,d=o*l-f*s,m=c*s-a*l,y=n*h+i*d+r*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/y;return e[0]=h*T,e[1]=(r*c-f*i)*T,e[2]=(o*i-r*a)*T,e[3]=d*T,e[4]=(f*n-r*l)*T,e[5]=(r*s-o*n)*T,e[6]=m*T,e[7]=(i*l-c*n)*T,e[8]=(a*n-i*s)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return Os("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jc.makeScale(e,n)),this}rotate(e){return Os("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jc.makeRotation(-e)),this}translate(e,n){return Os("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};_h.prototype.isMatrix3=!0;let Fe=_h;const jc=new Fe,Gp=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hp=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aS(){const t={enabled:!0,workingColorSpace:Hl,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===st&&(r.r=Ni(r.r),r.g=Ni(r.g),r.b=Ni(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(r.r=ks(r.r),r.g=ks(r.g),r.b=ks(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ir?Wl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Os("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Os("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Hl]:{primaries:e,whitePoint:i,transfer:Wl,toXYZ:Gp,fromXYZ:Hp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Un},outputColorSpaceConfig:{drawingBufferColorSpace:Un}},[Un]:{primaries:e,whitePoint:i,transfer:st,toXYZ:Gp,fromXYZ:Hp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Un}}}),t}const Ye=aS();function Ni(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ks(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ss;class oS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ss===void 0&&(ss=Xl("canvas")),ss.width=e.width,ss.height=e.height;const r=ss.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ss}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Xl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ni(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ni(n[i]/255)*255):n[i]=Ni(n[i]);return{data:n,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lS=0;class uh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=uo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Yc(r[a].image)):s.push(Yc(r[a]))}else s=Yc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Yc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?oS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let cS=0;const qc=new W;class nn extends Zr{constructor(e=nn.DEFAULT_IMAGE,n=nn.DEFAULT_MAPPING,i=Li,r=Li,s=Gt,a=kr,o=Zn,l=bn,c=nn.DEFAULT_ANISOTROPY,f=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cS++}),this.uuid=uo(),this.name="",this.source=new uh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qc).x}get height(){return this.source.getSize(qc).y}get depth(){return this.source.getSize(qc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ne(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ne(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Q0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ed:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case Td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ed:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case Td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Q0;nn.DEFAULT_ANISOTROPY=1;const yh=class yh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],m=l[5],y=l[9],T=l[2],g=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-T)<.01&&Math.abs(y-g)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+T)<.1&&Math.abs(y+g)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,_=(m+1)/2,A=(u+1)/2,E=(f+d)/4,w=(h+T)/4,p=(y+g)/4;return S>_&&S>A?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=E/i,s=w/i):_>A?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=E/r,s=p/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=w/s,r=p/s),this.set(i,r,s,n),this}let x=Math.sqrt((g-y)*(g-y)+(h-T)*(h-T)+(d-f)*(d-f));return Math.abs(x)<.001&&(x=1),this.x=(g-y)/x,this.y=(h-T)/x,this.z=(d-f)/x,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this.w=qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this.w=qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yh.prototype.isVector4=!0;let yt=yh;class uS extends Zr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new yt(0,0,e,n),this.scissorTest=!1,this.viewport=new yt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new nn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new uh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends uS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class lv extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dS extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jl=class jl{constructor(e,n,i,r,s,a,o,l,c,f,h,d,m,y,T,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,f,h,d,m,y,T,g)}set(e,n,i,r,s,a,o,l,c,f,h,d,m,y,T,g){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=m,u[7]=y,u[11]=T,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jl().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/as.setFromMatrixColumn(e,0).length(),s=1/as.setFromMatrixColumn(e,1).length(),a=1/as.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*f,m=a*h,y=o*f,T=o*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=m+y*c,n[5]=d-T*c,n[9]=-o*l,n[2]=T-d*c,n[6]=y+m*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*f,m=l*h,y=c*f,T=c*h;n[0]=d+T*o,n[4]=y*o-m,n[8]=a*c,n[1]=a*h,n[5]=a*f,n[9]=-o,n[2]=m*o-y,n[6]=T+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*f,m=l*h,y=c*f,T=c*h;n[0]=d-T*o,n[4]=-a*h,n[8]=y+m*o,n[1]=m+y*o,n[5]=a*f,n[9]=T-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*f,m=a*h,y=o*f,T=o*h;n[0]=l*f,n[4]=y*c-m,n[8]=d*c+T,n[1]=l*h,n[5]=T*c+d,n[9]=m*c-y,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,y=o*l,T=o*c;n[0]=l*f,n[4]=T-d*h,n[8]=y*h+m,n[1]=h,n[5]=a*f,n[9]=-o*f,n[2]=-c*f,n[6]=m*h+y,n[10]=d-T*h}else if(e.order==="XZY"){const d=a*l,m=a*c,y=o*l,T=o*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+T,n[5]=a*f,n[9]=m*h-y,n[2]=y*h-m,n[6]=o*f,n[10]=T*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fS,e,hS)}lookAt(e,n,i){const r=this.elements;return En.subVectors(e,n),En.lengthSq()===0&&(En.z=1),En.normalize(),ji.crossVectors(i,En),ji.lengthSq()===0&&(Math.abs(i.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),ji.crossVectors(i,En)),ji.normalize(),Do.crossVectors(En,ji),r[0]=ji.x,r[4]=Do.x,r[8]=En.x,r[1]=ji.y,r[5]=Do.y,r[9]=En.y,r[2]=ji.z,r[6]=Do.z,r[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],m=i[13],y=i[2],T=i[6],g=i[10],u=i[14],x=i[3],S=i[7],_=i[11],A=i[15],E=r[0],w=r[4],p=r[8],b=r[12],P=r[1],I=r[5],O=r[9],L=r[13],Z=r[2],V=r[6],Y=r[10],H=r[14],B=r[3],q=r[7],j=r[11],te=r[15];return s[0]=a*E+o*P+l*Z+c*B,s[4]=a*w+o*I+l*V+c*q,s[8]=a*p+o*O+l*Y+c*j,s[12]=a*b+o*L+l*H+c*te,s[1]=f*E+h*P+d*Z+m*B,s[5]=f*w+h*I+d*V+m*q,s[9]=f*p+h*O+d*Y+m*j,s[13]=f*b+h*L+d*H+m*te,s[2]=y*E+T*P+g*Z+u*B,s[6]=y*w+T*I+g*V+u*q,s[10]=y*p+T*O+g*Y+u*j,s[14]=y*b+T*L+g*H+u*te,s[3]=x*E+S*P+_*Z+A*B,s[7]=x*w+S*I+_*V+A*q,s[11]=x*p+S*O+_*Y+A*j,s[15]=x*b+S*L+_*H+A*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],m=e[14],y=e[3],T=e[7],g=e[11],u=e[15],x=l*m-c*d,S=o*m-c*h,_=o*d-l*h,A=a*m-c*f,E=a*d-l*f,w=a*h-o*f;return n*(T*x-g*S+u*_)-i*(y*x-g*A+u*E)+r*(y*S-T*A+u*w)-s*(y*_-T*E+g*w)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],f=e[10];return n*(a*f-o*c)-i*(s*f-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],m=e[11],y=e[12],T=e[13],g=e[14],u=e[15],x=n*o-i*a,S=n*l-r*a,_=n*c-s*a,A=i*l-r*o,E=i*c-s*o,w=r*c-s*l,p=f*T-h*y,b=f*g-d*y,P=f*u-m*y,I=h*g-d*T,O=h*u-m*T,L=d*u-m*g,Z=x*L-S*O+_*I+A*P-E*b+w*p;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/Z;return e[0]=(o*L-l*O+c*I)*V,e[1]=(r*O-i*L-s*I)*V,e[2]=(T*w-g*E+u*A)*V,e[3]=(d*E-h*w-m*A)*V,e[4]=(l*P-a*L-c*b)*V,e[5]=(n*L-r*P+s*b)*V,e[6]=(g*_-y*w-u*S)*V,e[7]=(f*w-d*_+m*S)*V,e[8]=(a*O-o*P+c*p)*V,e[9]=(i*P-n*O-s*p)*V,e[10]=(y*E-T*_+u*x)*V,e[11]=(h*_-f*E-m*x)*V,e[12]=(o*b-a*I-l*p)*V,e[13]=(n*I-i*b+r*p)*V,e[14]=(T*S-y*A-g*x)*V,e[15]=(f*A-h*S+d*x)*V,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,f=a+a,h=o+o,d=s*c,m=s*f,y=s*h,T=a*f,g=a*h,u=o*h,x=l*c,S=l*f,_=l*h,A=i.x,E=i.y,w=i.z;return r[0]=(1-(T+u))*A,r[1]=(m+_)*A,r[2]=(y-S)*A,r[3]=0,r[4]=(m-_)*E,r[5]=(1-(d+u))*E,r[6]=(g+x)*E,r[7]=0,r[8]=(y+S)*w,r[9]=(g-x)*w,r[10]=(1-(d+T))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=as.set(r[0],r[1],r[2]).length();const o=as.set(r[4],r[5],r[6]).length(),l=as.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Wn.copy(this);const c=1/a,f=1/o,h=1/l;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=f,Wn.elements[5]*=f,Wn.elements[6]*=f,Wn.elements[8]*=h,Wn.elements[9]*=h,Wn.elements[10]*=h,n.setFromRotationMatrix(Wn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=fi,l=!1){const c=this.elements,f=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),m=(i+r)/(i-r);let y,T;if(l)y=s/(a-s),T=a*s/(a-s);else if(o===fi)y=-(a+s)/(a-s),T=-2*a*s/(a-s);else if(o===ro)y=-a/(a-s),T=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=T,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=fi,l=!1){const c=this.elements,f=2/(n-e),h=2/(i-r),d=-(n+e)/(n-e),m=-(i+r)/(i-r);let y,T;if(l)y=1/(a-s),T=a/(a-s);else if(o===fi)y=-2/(a-s),T=-(a+s)/(a-s);else if(o===ro)y=-1/(a-s),T=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=y,c[14]=T,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};jl.prototype.isMatrix4=!0;let At=jl;const as=new W,Wn=new At,fS=new W(0,0,0),hS=new W(1,1,1),ji=new W,Do=new W,En=new W,Wp=new At,Xp=new ea;class xr{constructor(e=0,n=0,i=0,r=xr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Wp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Xp.setFromEuler(this),this.setFromQuaternion(Xp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xr.DEFAULT_ORDER="XYZ";class cv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pS=0;const jp=new W,os=new ea,Si=new At,No=new W,ga=new W,mS=new W,gS=new ea,Yp=new W(1,0,0),qp=new W(0,1,0),$p=new W(0,0,1),Kp={type:"added"},vS={type:"removed"},ls={type:"childadded",child:null},$c={type:"childremoved",child:null};class rn extends Zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new W,n=new xr,i=new ea,r=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new Fe}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return os.setFromAxisAngle(e,n),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,n){return os.setFromAxisAngle(e,n),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(Yp,e)}rotateY(e){return this.rotateOnAxis(qp,e)}rotateZ(e){return this.rotateOnAxis($p,e)}translateOnAxis(e,n){return jp.copy(e).applyQuaternion(this.quaternion),this.position.add(jp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Yp,e)}translateY(e){return this.translateOnAxis(qp,e)}translateZ(e){return this.translateOnAxis($p,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?No.copy(e):No.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(ga,No,this.up):Si.lookAt(No,ga,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),os.setFromRotationMatrix(Si),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kp),ls.child=e,this.dispatchEvent(ls),ls.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(vS),$c.child=e,this.dispatchEvent($c),$c.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kp),ls.child=e,this.dispatchEvent(ls),ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,e,mS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,gS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),y=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),y.length>0&&(i.nodes=y)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}rn.DEFAULT_UP=new W(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ba extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xS={type:"move"};class Kc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ba,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ba,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ba,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const T of e.hand.values()){const g=n.getJointPose(T,i),u=this._getHandJoint(c,T);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),m=.02,y=.005;c.inputState.pinching&&d>m+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xS)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ba;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const uv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Uo={h:0,s:0,l:0};function Zc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ye.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ye.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ye.workingColorSpace){if(e=sS(e,1),n=qe(n,0,1),i=qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Zc(a,s,e+1/3),this.g=Zc(a,s,e),this.b=Zc(a,s,e-1/3)}return Ye.colorSpaceToWorking(this,r),this}setStyle(e,n=Un){function i(s){s!==void 0&&parseFloat(s)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ne("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Un){const i=uv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return Ye.workingToColorSpace(en.copy(this),e),Math.round(qe(en.r*255,0,255))*65536+Math.round(qe(en.g*255,0,255))*256+Math.round(qe(en.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ye.workingColorSpace){Ye.workingToColorSpace(en.copy(this),n);const i=en.r,r=en.g,s=en.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=f<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Ye.workingColorSpace){return Ye.workingToColorSpace(en.copy(this),n),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Un){Ye.workingToColorSpace(en.copy(this),e);const n=en.r,i=en.g,r=en.b;return e!==Un?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+n,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Yi),e.getHSL(Uo);const i=Wc(Yi.h,Uo.h,n),r=Wc(Yi.s,Uo.s,n),s=Wc(Yi.l,Uo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new Je;Je.NAMES=uv;class _S extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xr,this.environmentIntensity=1,this.environmentRotation=new xr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Xn=new W,Mi=new W,Jc=new W,Ei=new W,cs=new W,us=new W,Zp=new W,Qc=new W,eu=new W,tu=new W,nu=new yt,iu=new yt,ru=new yt;class Kn{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Xn.subVectors(e,n),r.cross(Xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Xn.subVectors(r,n),Mi.subVectors(i,n),Jc.subVectors(e,n);const a=Xn.dot(Xn),o=Xn.dot(Mi),l=Xn.dot(Jc),c=Mi.dot(Mi),f=Mi.dot(Jc),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(c*l-o*f)*d,y=(a*f-o*l)*d;return s.set(1-m-y,y,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(o,Ei.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return nu.setScalar(0),iu.setScalar(0),ru.setScalar(0),nu.fromBufferAttribute(e,n),iu.fromBufferAttribute(e,i),ru.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(nu,s.x),a.addScaledVector(iu,s.y),a.addScaledVector(ru,s.z),a}static isFrontFacing(e,n,i,r){return Xn.subVectors(i,n),Mi.subVectors(e,n),Xn.cross(Mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Xn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Kn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;cs.subVectors(r,i),us.subVectors(s,i),Qc.subVectors(e,i);const l=cs.dot(Qc),c=us.dot(Qc);if(l<=0&&c<=0)return n.copy(i);eu.subVectors(e,r);const f=cs.dot(eu),h=us.dot(eu);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(cs,a);tu.subVectors(e,s);const m=cs.dot(tu),y=us.dot(tu);if(y>=0&&m<=y)return n.copy(s);const T=m*c-l*y;if(T<=0&&c>=0&&y<=0)return o=c/(c-y),n.copy(i).addScaledVector(us,o);const g=f*y-m*h;if(g<=0&&h-f>=0&&m-y>=0)return Zp.subVectors(s,r),o=(h-f)/(h-f+(m-y)),n.copy(r).addScaledVector(Zp,o);const u=1/(g+T+d);return a=T*u,o=d*u,n.copy(i).addScaledVector(cs,a).addScaledVector(us,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class fo{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,jn):jn.fromBufferAttribute(s,a),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fo.copy(i.boundingBox)),Fo.applyMatrix4(e.matrixWorld),this.union(Fo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(va),Oo.subVectors(this.max,va),ds.subVectors(e.a,va),fs.subVectors(e.b,va),hs.subVectors(e.c,va),qi.subVectors(fs,ds),$i.subVectors(hs,fs),wr.subVectors(ds,hs);let n=[0,-qi.z,qi.y,0,-$i.z,$i.y,0,-wr.z,wr.y,qi.z,0,-qi.x,$i.z,0,-$i.x,wr.z,0,-wr.x,-qi.y,qi.x,0,-$i.y,$i.x,0,-wr.y,wr.x,0];return!su(n,ds,fs,hs,Oo)||(n=[1,0,0,0,1,0,0,0,1],!su(n,ds,fs,hs,Oo))?!1:(ko.crossVectors(qi,$i),n=[ko.x,ko.y,ko.z],su(n,ds,fs,hs,Oo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ti=[new W,new W,new W,new W,new W,new W,new W,new W],jn=new W,Fo=new fo,ds=new W,fs=new W,hs=new W,qi=new W,$i=new W,wr=new W,va=new W,Oo=new W,ko=new W,Ar=new W;function su(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Ar.fromArray(t,s);const o=r.x*Math.abs(Ar.x)+r.y*Math.abs(Ar.y)+r.z*Math.abs(Ar.z),l=e.dot(Ar),c=n.dot(Ar),f=i.dot(Ar);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const It=new W,Bo=new $e;let yS=0;class vi extends Zr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Op,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Bo.fromBufferAttribute(this,n),Bo.applyMatrix3(e),this.setXY(n,Bo.x,Bo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix3(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix4(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyNormalMatrix(e),this.setXYZ(n,It.x,It.y,It.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.transformDirection(e),this.setXYZ(n,It.x,It.y,It.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ma(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=pn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ma(n,this.array)),n}setX(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ma(n,this.array)),n}setY(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ma(n,this.array)),n}setZ(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ma(n,this.array)),n}setW(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array),s=pn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Op&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class dv extends vi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class fv extends vi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class un extends vi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const SS=new fo,xa=new W,au=new W;class dh{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):SS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xa.subVectors(e,this.center);const n=xa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(xa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(au.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xa.copy(e.center).add(au)),this.expandByPoint(xa.copy(e.center).sub(au))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let MS=0;const Nn=new At,ou=new rn,ps=new W,Tn=new fo,_a=new fo,Bt=new W;class ti extends Zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=uo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tS(e)?fv:dv)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,n,i){return Nn.makeTranslation(e,n,i),this.applyMatrix4(Nn),this}scale(e,n,i){return Nn.makeScale(e,n,i),this.applyMatrix4(Nn),this}lookAt(e){return ou.lookAt(e),ou.updateMatrix(),this.applyMatrix4(ou.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new un(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];_a.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(Tn.min,_a.min),Tn.expandByPoint(Bt),Bt.addVectors(Tn.max,_a.max),Tn.expandByPoint(Bt)):(Tn.expandByPoint(_a.min),Tn.expandByPoint(_a.max))}Tn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Bt.fromBufferAttribute(o,c),l&&(ps.fromBufferAttribute(e,c),Bt.add(ps)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new vi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let p=0;p<i.count;p++)o[p]=new W,l[p]=new W;const c=new W,f=new W,h=new W,d=new $e,m=new $e,y=new $e,T=new W,g=new W;function u(p,b,P){c.fromBufferAttribute(i,p),f.fromBufferAttribute(i,b),h.fromBufferAttribute(i,P),d.fromBufferAttribute(s,p),m.fromBufferAttribute(s,b),y.fromBufferAttribute(s,P),f.sub(c),h.sub(c),m.sub(d),y.sub(d);const I=1/(m.x*y.y-y.x*m.y);isFinite(I)&&(T.copy(f).multiplyScalar(y.y).addScaledVector(h,-m.y).multiplyScalar(I),g.copy(h).multiplyScalar(m.x).addScaledVector(f,-y.x).multiplyScalar(I),o[p].add(T),o[b].add(T),o[P].add(T),l[p].add(g),l[b].add(g),l[P].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let p=0,b=x.length;p<b;++p){const P=x[p],I=P.start,O=P.count;for(let L=I,Z=I+O;L<Z;L+=3)u(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const S=new W,_=new W,A=new W,E=new W;function w(p){A.fromBufferAttribute(r,p),E.copy(A);const b=o[p];S.copy(b),S.sub(A.multiplyScalar(A.dot(b))).normalize(),_.crossVectors(E,b);const I=_.dot(l[p])<0?-1:1;a.setXYZW(p,S.x,S.y,S.z,I)}for(let p=0,b=x.length;p<b;++p){const P=x[p],I=P.start,O=P.count;for(let L=I,Z=I+O;L<Z;L+=3)w(e.getX(L+0)),w(e.getX(L+1)),w(e.getX(L+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new vi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new W,s=new W,a=new W,o=new W,l=new W,c=new W,f=new W,h=new W;if(e)for(let d=0,m=e.count;d<m;d+=3){const y=e.getX(d+0),T=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,T),a.fromBufferAttribute(n,g),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),o.fromBufferAttribute(i,y),l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,g),o.add(f),l.add(f),c.add(f),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(T,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Bt.fromBufferAttribute(e,n),Bt.normalize(),e.setXYZ(n,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,h=o.normalized,d=new c.constructor(l.length*f);let m=0,y=0;for(let T=0,g=l.length;T<g;T++){o.isInterleavedBufferAttribute?m=l[T]*o.data.stride+o.offset:m=l[T]*f;for(let u=0;u<f;u++)d[y++]=c[m++]}return new vi(d,f,h)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ti,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,h=c.length;f<h;f++){const d=c[f],m=e(d,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,m=h.length;d<m;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ES=0;class ho extends Zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=uo(),this.name="",this.type="Material",this.blending=Fs,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pd,this.blendDst=md,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ne(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ne(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(i.blending=this.blending),this.side!==vr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pd&&(i.blendSrc=this.blendSrc),this.blendDst!==md&&(i.blendDst=this.blendDst),this.blendEquation!==Dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new $e().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $e().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const wi=new W,lu=new W,zo=new W,Ki=new W,cu=new W,Vo=new W,uu=new W;class TS{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=wi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,n),wi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){lu.copy(e).add(n).multiplyScalar(.5),zo.copy(n).sub(e).normalize(),Ki.copy(this.origin).sub(lu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(zo),o=Ki.dot(this.direction),l=-Ki.dot(zo),c=Ki.lengthSq(),f=Math.abs(1-a*a);let h,d,m,y;if(f>0)if(h=a*l-o,d=a*o-l,y=s*f,h>=0)if(d>=-y)if(d<=y){const T=1/f;h*=T,d*=T,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-y?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=y?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(lu).addScaledVector(zo,d),m}intersectSphere(e,n){wi.subVectors(e.center,this.origin);const i=wi.dot(this.direction),r=wi.dot(wi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,n,i,r,s){cu.subVectors(n,e),Vo.subVectors(i,e),uu.crossVectors(cu,Vo);let a=this.direction.dot(uu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ki.subVectors(this.origin,e);const l=o*this.direction.dot(Vo.crossVectors(Ki,Vo));if(l<0)return null;const c=o*this.direction.dot(cu.cross(Ki));if(c<0||l+c>a)return null;const f=-o*Ki.dot(uu);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class er extends ho{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xr,this.combine=X0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jp=new At,br=new TS,Go=new dh,Qp=new W,Ho=new W,Wo=new W,Xo=new W,du=new W,jo=new W,em=new W,Yo=new W;class rt extends rn{constructor(e=new ti,n=new er){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){jo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],h=s[l];f!==0&&(du.fromBufferAttribute(h,e),a?jo.addScaledVector(du,f):jo.addScaledVector(du.sub(n),f))}n.add(jo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Go.copy(i.boundingSphere),Go.applyMatrix4(s),br.copy(e.ray).recast(e.near),!(Go.containsPoint(br.origin)===!1&&(br.intersectSphere(Go,Qp)===null||br.origin.distanceToSquared(Qp)>(e.far-e.near)**2))&&(Jp.copy(s).invert(),br.copy(e.ray).applyMatrix4(Jp),!(i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,br)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,T=d.length;y<T;y++){const g=d[y],u=a[g.materialIndex],x=Math.max(g.start,m.start),S=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let _=x,A=S;_<A;_+=3){const E=o.getX(_),w=o.getX(_+1),p=o.getX(_+2);r=qo(this,u,e,i,c,f,h,E,w,p),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const y=Math.max(0,m.start),T=Math.min(o.count,m.start+m.count);for(let g=y,u=T;g<u;g+=3){const x=o.getX(g),S=o.getX(g+1),_=o.getX(g+2);r=qo(this,a,e,i,c,f,h,x,S,_),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,T=d.length;y<T;y++){const g=d[y],u=a[g.materialIndex],x=Math.max(g.start,m.start),S=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let _=x,A=S;_<A;_+=3){const E=_,w=_+1,p=_+2;r=qo(this,u,e,i,c,f,h,E,w,p),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const y=Math.max(0,m.start),T=Math.min(l.count,m.start+m.count);for(let g=y,u=T;g<u;g+=3){const x=g,S=g+1,_=g+2;r=qo(this,a,e,i,c,f,h,x,S,_),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function wS(t,e,n,i,r,s,a,o){let l;if(e.side===yn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===vr,o),l===null)return null;Yo.copy(o),Yo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Yo);return c<n.near||c>n.far?null:{distance:c,point:Yo.clone(),object:t}}function qo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Ho),t.getVertexPosition(l,Wo),t.getVertexPosition(c,Xo);const f=wS(t,e,n,i,Ho,Wo,Xo,em);if(f){const h=new W;Kn.getBarycoord(em,Ho,Wo,Xo,h),r&&(f.uv=Kn.getInterpolatedAttribute(r,o,l,c,h,new $e)),s&&(f.uv1=Kn.getInterpolatedAttribute(s,o,l,c,h,new $e)),a&&(f.normal=Kn.getInterpolatedAttribute(a,o,l,c,h,new W),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new W,materialIndex:0};Kn.getNormal(Ho,Wo,Xo,d.normal),f.face=d,f.barycoord=h}return f}class AS extends nn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=jt,f=jt,h,d){super(null,a,o,l,c,f,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fu=new W,bS=new W,CS=new Fe;class Ir{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=fu.subVectors(i,n).cross(bS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(fu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||CS.getNormalMatrix(e),r=this.coplanarPoint(fu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new dh,RS=new $e(.5,.5),$o=new W;class fh{constructor(e=new Ir,n=new Ir,i=new Ir,r=new Ir,s=new Ir,a=new Ir){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=fi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],h=s[5],d=s[6],m=s[7],y=s[8],T=s[9],g=s[10],u=s[11],x=s[12],S=s[13],_=s[14],A=s[15];if(r[0].setComponents(c-a,m-f,u-y,A-x).normalize(),r[1].setComponents(c+a,m+f,u+y,A+x).normalize(),r[2].setComponents(c+o,m+h,u+T,A+S).normalize(),r[3].setComponents(c-o,m-h,u-T,A-S).normalize(),i)r[4].setComponents(l,d,g,_).normalize(),r[5].setComponents(c-l,m-d,u-g,A-_).normalize();else if(r[4].setComponents(c-l,m-d,u-g,A-_).normalize(),n===fi)r[5].setComponents(c+l,m+d,u+g,A+_).normalize();else if(n===ro)r[5].setComponents(l,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){Cr.center.set(0,0,0);const n=RS.distanceTo(e.center);return Cr.radius=.7071067811865476+n,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if($o.x=r.normal.x>0?e.max.x:e.min.x,$o.y=r.normal.y>0?e.max.y:e.min.y,$o.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($o)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hv extends nn{constructor(e=[],n=Yr,i,r,s,a,o,l,c,f){super(e,n,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tm extends nn{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qs extends nn{constructor(e,n,i=xi,r,s,a,o=jt,l=jt,c,f=zi,h=1){if(f!==zi&&f!==Br)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:h};super(d,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new uh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class PS extends qs{constructor(e,n=xi,i=Yr,r,s,a=jt,o=jt,l,c=zi){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,n,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class pv extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class zt extends ti{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],h=[];let d=0,m=0;y("z","y","x",-1,-1,i,n,e,a,s,0),y("z","y","x",1,-1,i,n,-e,a,s,1),y("x","z","y",1,1,e,i,n,r,a,2),y("x","z","y",1,-1,e,i,-n,r,a,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new un(c,3)),this.setAttribute("normal",new un(f,3)),this.setAttribute("uv",new un(h,2));function y(T,g,u,x,S,_,A,E,w,p,b){const P=_/w,I=A/p,O=_/2,L=A/2,Z=E/2,V=w+1,Y=p+1;let H=0,B=0;const q=new W;for(let j=0;j<Y;j++){const te=j*I-L;for(let ne=0;ne<V;ne++){const ke=ne*P-O;q[T]=ke*x,q[g]=te*S,q[u]=Z,c.push(q.x,q.y,q.z),q[T]=0,q[g]=0,q[u]=E>0?1:-1,f.push(q.x,q.y,q.z),h.push(ne/w),h.push(1-j/p),H+=1}}for(let j=0;j<p;j++)for(let te=0;te<w;te++){const ne=d+te+V*j,ke=d+te+V*(j+1),ze=d+(te+1)+V*(j+1),Oe=d+(te+1)+V*j;l.push(ne,ke,Oe),l.push(ke,ze,Oe),B+=6}o.addGroup(m,B,b),m+=B,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class hh extends ti{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],h=[],d=[],m=[];let y=0;const T=[],g=i/2;let u=0;x(),a===!1&&(e>0&&S(!0),n>0&&S(!1)),this.setIndex(f),this.setAttribute("position",new un(h,3)),this.setAttribute("normal",new un(d,3)),this.setAttribute("uv",new un(m,2));function x(){const _=new W,A=new W;let E=0;const w=(n-e)/i;for(let p=0;p<=s;p++){const b=[],P=p/s,I=P*(n-e)+e;for(let O=0;O<=r;O++){const L=O/r,Z=L*l+o,V=Math.sin(Z),Y=Math.cos(Z);A.x=I*V,A.y=-P*i+g,A.z=I*Y,h.push(A.x,A.y,A.z),_.set(V,w,Y).normalize(),d.push(_.x,_.y,_.z),m.push(L,1-P),b.push(y++)}T.push(b)}for(let p=0;p<r;p++)for(let b=0;b<s;b++){const P=T[b][p],I=T[b+1][p],O=T[b+1][p+1],L=T[b][p+1];(e>0||b!==0)&&(f.push(P,I,L),E+=3),(n>0||b!==s-1)&&(f.push(I,O,L),E+=3)}c.addGroup(u,E,0),u+=E}function S(_){const A=y,E=new $e,w=new W;let p=0;const b=_===!0?e:n,P=_===!0?1:-1;for(let O=1;O<=r;O++)h.push(0,g*P,0),d.push(0,P,0),m.push(.5,.5),y++;const I=y;for(let O=0;O<=r;O++){const Z=O/r*l+o,V=Math.cos(Z),Y=Math.sin(Z);w.x=b*Y,w.y=g*P,w.z=b*V,h.push(w.x,w.y,w.z),d.push(0,P,0),E.x=V*.5+.5,E.y=Y*.5*P+.5,m.push(E.x,E.y),y++}for(let O=0;O<r;O++){const L=A+O,Z=I+O;_===!0?f.push(Z,Z+1,L):f.push(Z+1,Z,L),p+=3}c.addGroup(u,p,_===!0?1:2),u+=p}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $s extends ti{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,h=e/o,d=n/l,m=[],y=[],T=[],g=[];for(let u=0;u<f;u++){const x=u*d-a;for(let S=0;S<c;S++){const _=S*h-s;y.push(_,-x,0),T.push(0,0,1),g.push(S/o),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let x=0;x<o;x++){const S=x+c*u,_=x+c*(u+1),A=x+1+c*(u+1),E=x+1+c*u;m.push(S,_,E),m.push(_,A,E)}this.setIndex(m),this.setAttribute("position",new un(y,3)),this.setAttribute("normal",new un(T,3)),this.setAttribute("uv",new un(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.widthSegments,e.heightSegments)}}class ph extends ti{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const f=[],h=new W,d=new W,m=[],y=[],T=[],g=[];for(let u=0;u<=i;u++){const x=[],S=u/i,_=a+S*o,A=e*Math.cos(_),E=Math.sqrt(e*e-A*A);let w=0;u===0&&a===0?w=.5/n:u===i&&l===Math.PI&&(w=-.5/n);for(let p=0;p<=n;p++){const b=p/n,P=r+b*s;h.x=-E*Math.cos(P),h.y=A,h.z=E*Math.sin(P),y.push(h.x,h.y,h.z),d.copy(h).normalize(),T.push(d.x,d.y,d.z),g.push(b+w,1-S),x.push(c++)}f.push(x)}for(let u=0;u<i;u++)for(let x=0;x<n;x++){const S=f[u][x+1],_=f[u][x],A=f[u+1][x],E=f[u+1][x+1];(u!==0||a>0)&&m.push(S,_,E),(u!==i-1||l<Math.PI)&&m.push(_,A,E)}this.setIndex(m),this.setAttribute("position",new un(y,3)),this.setAttribute("normal",new un(T,3)),this.setAttribute("uv",new un(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ph(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ks(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(nm(r))r.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(nm(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function on(t){const e={};for(let n=0;n<t.length;n++){const i=Ks(t[n]);for(const r in i)e[r]=i[r]}return e}function nm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function LS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function mv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const IS={clone:Ks,merge:on};var DS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends ho{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DS,this.fragmentShader=NS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=LS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Je().setHex(r.value);break;case"v2":this.uniforms[i].value=new $e().fromArray(r.value);break;case"v3":this.uniforms[i].value=new W().fromArray(r.value);break;case"v4":this.uniforms[i].value=new yt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Fe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new At().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class US extends _i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Rr extends ho{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tf,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class FS extends ho{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class OS extends ho{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class mh extends rn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const hu=new At,im=new W,rm=new W;class gv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fh,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;im.setFromMatrixPosition(e.matrixWorld),n.position.copy(im),rm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(rm),n.updateMatrixWorld(),hu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hu,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===ro||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ko=new W,Zo=new ea,ai=new W;class vv extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ko,Zo,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ko,Zo,ai.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Ko,Zo,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ko,Zo,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new W,sm=new $e,am=new $e;class An extends vv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=nf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nf*2*Math.atan(Math.tan(Hc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,n){return this.getViewBounds(e,sm,am),n.subVectors(am,sm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Hc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class kS extends gv{constructor(){super(new An(90,1,.5,500)),this.isPointLightShadow=!0}}class BS extends mh{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new kS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class gh extends vv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class zS extends gv{constructor(){super(new gh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pu extends mh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new zS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class VS extends mh{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const ms=-90,gs=1;class GS extends rn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new An(ms,gs,e,n);r.layers=this.layers,this.add(r);const s=new An(ms,gs,e,n);s.layers=this.layers,this.add(s);const a=new An(ms,gs,e,n);a.layers=this.layers,this.add(a);const o=new An(ms,gs,e,n);o.layers=this.layers,this.add(o);const l=new An(ms,gs,e,n);l.layers=this.layers,this.add(l);const c=new An(ms,gs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ro)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=T,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(h,d,m),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class HS extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Sh=class Sh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Sh.prototype.isMatrix2=!0;let om=Sh;function lm(t,e,n,i){const r=WS(i);switch(n){case rv:return t*e;case av:return t*e/r.components*r.byteLength;case sh:return t*e/r.components*r.byteLength;case qr:return t*e*2/r.components*r.byteLength;case ah:return t*e*2/r.components*r.byteLength;case sv:return t*e*3/r.components*r.byteLength;case Zn:return t*e*4/r.components*r.byteLength;case oh:return t*e*4/r.components*r.byteLength;case fl:case hl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case pl:case ml:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ad:case Cd:return Math.max(t,16)*Math.max(e,8)/4;case wd:case bd:return Math.max(t,8)*Math.max(e,8)/2;case Rd:case Pd:case Id:case Dd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ld:case Vl:case Nd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Od:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case kd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case zd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Gd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Hd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Wd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Xd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case jd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Yd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case qd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case $d:case Kd:case Zd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Jd:case Qd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Gl:case ef:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function WS(t){switch(t){case bn:case ev:return{byteLength:1,components:1};case no:case tv:case Bi:return{byteLength:2,components:1};case ih:case rh:return{byteLength:2,components:4};case xi:case nh:case di:return{byteLength:4,components:1};case nv:case iv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:th}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=th);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function XS(t){const e=new WeakMap;function n(o,l){const c=o.array,f=o.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,f),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const f=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,f);else{h.sort((m,y)=>m.start-y.start);let d=0;for(let m=1;m<h.length;m++){const y=h[d],T=h[m];T.start<=y.start+y.count+1?y.count=Math.max(y.count,T.start+T.count-y.start):(++d,h[d]=T)}h.length=d+1;for(let m=0,y=h.length;m<y;m++){const T=h[m];t.bufferSubData(c,T.start*f.BYTES_PER_ELEMENT,f,T.start,T.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var jS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,YS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$S=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,QS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,tM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,aM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,mM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,xM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_M=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MM="gl_FragColor = linearToOutputTexel( gl_FragColor );",EM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,TM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,wM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,AM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,RM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,NM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,kM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,BM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,WM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,XM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,YM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$M=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,n1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,a1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,c1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,d1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,f1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,m1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,g1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,x1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,S1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,M1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,C1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,R1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,P1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,L1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,I1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,N1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,F1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,z1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,V1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,G1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,H1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,W1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,X1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const j1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Q1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,eE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,nE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,oE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_E=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,SE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ME=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:jS,alphahash_pars_fragment:YS,alphamap_fragment:qS,alphamap_pars_fragment:$S,alphatest_fragment:KS,alphatest_pars_fragment:ZS,aomap_fragment:JS,aomap_pars_fragment:QS,batching_pars_vertex:eM,batching_vertex:tM,begin_vertex:nM,beginnormal_vertex:iM,bsdfs:rM,iridescence_fragment:sM,bumpmap_pars_fragment:aM,clipping_planes_fragment:oM,clipping_planes_pars_fragment:lM,clipping_planes_pars_vertex:cM,clipping_planes_vertex:uM,color_fragment:dM,color_pars_fragment:fM,color_pars_vertex:hM,color_vertex:pM,common:mM,cube_uv_reflection_fragment:gM,defaultnormal_vertex:vM,displacementmap_pars_vertex:xM,displacementmap_vertex:_M,emissivemap_fragment:yM,emissivemap_pars_fragment:SM,colorspace_fragment:MM,colorspace_pars_fragment:EM,envmap_fragment:TM,envmap_common_pars_fragment:wM,envmap_pars_fragment:AM,envmap_pars_vertex:bM,envmap_physical_pars_fragment:kM,envmap_vertex:CM,fog_vertex:RM,fog_pars_vertex:PM,fog_fragment:LM,fog_pars_fragment:IM,gradientmap_pars_fragment:DM,lightmap_pars_fragment:NM,lights_lambert_fragment:UM,lights_lambert_pars_fragment:FM,lights_pars_begin:OM,lights_toon_fragment:BM,lights_toon_pars_fragment:zM,lights_phong_fragment:VM,lights_phong_pars_fragment:GM,lights_physical_fragment:HM,lights_physical_pars_fragment:WM,lights_fragment_begin:XM,lights_fragment_maps:jM,lights_fragment_end:YM,lightprobes_pars_fragment:qM,logdepthbuf_fragment:$M,logdepthbuf_pars_fragment:KM,logdepthbuf_pars_vertex:ZM,logdepthbuf_vertex:JM,map_fragment:QM,map_pars_fragment:e1,map_particle_fragment:t1,map_particle_pars_fragment:n1,metalnessmap_fragment:i1,metalnessmap_pars_fragment:r1,morphinstance_vertex:s1,morphcolor_vertex:a1,morphnormal_vertex:o1,morphtarget_pars_vertex:l1,morphtarget_vertex:c1,normal_fragment_begin:u1,normal_fragment_maps:d1,normal_pars_fragment:f1,normal_pars_vertex:h1,normal_vertex:p1,normalmap_pars_fragment:m1,clearcoat_normal_fragment_begin:g1,clearcoat_normal_fragment_maps:v1,clearcoat_pars_fragment:x1,iridescence_pars_fragment:_1,opaque_fragment:y1,packing:S1,premultiplied_alpha_fragment:M1,project_vertex:E1,dithering_fragment:T1,dithering_pars_fragment:w1,roughnessmap_fragment:A1,roughnessmap_pars_fragment:b1,shadowmap_pars_fragment:C1,shadowmap_pars_vertex:R1,shadowmap_vertex:P1,shadowmask_pars_fragment:L1,skinbase_vertex:I1,skinning_pars_vertex:D1,skinning_vertex:N1,skinnormal_vertex:U1,specularmap_fragment:F1,specularmap_pars_fragment:O1,tonemapping_fragment:k1,tonemapping_pars_fragment:B1,transmission_fragment:z1,transmission_pars_fragment:V1,uv_pars_fragment:G1,uv_pars_vertex:H1,uv_vertex:W1,worldpos_vertex:X1,background_vert:j1,background_frag:Y1,backgroundCube_vert:q1,backgroundCube_frag:$1,cube_vert:K1,cube_frag:Z1,depth_vert:J1,depth_frag:Q1,distance_vert:eE,distance_frag:tE,equirect_vert:nE,equirect_frag:iE,linedashed_vert:rE,linedashed_frag:sE,meshbasic_vert:aE,meshbasic_frag:oE,meshlambert_vert:lE,meshlambert_frag:cE,meshmatcap_vert:uE,meshmatcap_frag:dE,meshnormal_vert:fE,meshnormal_frag:hE,meshphong_vert:pE,meshphong_frag:mE,meshphysical_vert:gE,meshphysical_frag:vE,meshtoon_vert:xE,meshtoon_frag:_E,points_vert:yE,points_frag:SE,shadow_vert:ME,shadow_frag:EE,sprite_vert:TE,sprite_frag:wE},_e={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},ci={basic:{uniforms:on([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:on([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:on([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:on([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:on([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:on([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:on([_e.points,_e.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:on([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:on([_e.common,_e.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:on([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:on([_e.sprite,_e.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:on([_e.common,_e.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:on([_e.lights,_e.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};ci.physical={uniforms:on([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Jo={r:0,b:0,g:0},AE=new At,_v=new Fe;_v.set(-1,0,0,0,1,0,0,0,1);function bE(t,e,n,i,r,s){const a=new Je(0);let o=r===!0?0:1,l,c,f=null,h=0,d=null;function m(x){let S=x.isScene===!0?x.background:null;if(S&&S.isTexture){const _=x.backgroundBlurriness>0;S=e.get(S,_)}return S}function y(x){let S=!1;const _=m(x);_===null?g(a,o):_&&_.isColor&&(g(_,1),S=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function T(x,S){const _=m(S);_&&(_.isCubeTexture||_.mapping===uc)?(c===void 0&&(c=new rt(new zt(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:Ks(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(AE.makeRotationFromEuler(S.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_v),c.material.toneMapped=Ye.getTransfer(_.colorSpace)!==st,(f!==_||h!==_.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,f=_,h=_.version,d=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new rt(new $s(2,2),new _i({name:"BackgroundMaterial",uniforms:Ks(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(_.colorSpace)!==st,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,f=_,h=_.version,d=t.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,S){x.getRGB(Jo,mv(t)),n.buffers.color.setClear(Jo.r,Jo.g,Jo.b,S,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,S=1){a.set(x),o=S,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,g(a,o)},render:y,addToRenderList:T,dispose:u}}function CE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(I,O,L,Z,V){let Y=!1;const H=h(I,Z,L,O);s!==H&&(s=H,c(s.object)),Y=m(I,Z,L,V),Y&&y(I,Z,L,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,_(I,O,L,Z),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(I){return t.bindVertexArray(I)}function f(I){return t.deleteVertexArray(I)}function h(I,O,L,Z){const V=Z.wireframe===!0;let Y=i[O.id];Y===void 0&&(Y={},i[O.id]=Y);const H=I.isInstancedMesh===!0?I.id:0;let B=Y[H];B===void 0&&(B={},Y[H]=B);let q=B[L.id];q===void 0&&(q={},B[L.id]=q);let j=q[V];return j===void 0&&(j=d(l()),q[V]=j),j}function d(I){const O=[],L=[],Z=[];for(let V=0;V<n;V++)O[V]=0,L[V]=0,Z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:L,attributeDivisors:Z,object:I,attributes:{},index:null}}function m(I,O,L,Z){const V=s.attributes,Y=O.attributes;let H=0;const B=L.getAttributes();for(const q in B)if(B[q].location>=0){const te=V[q];let ne=Y[q];if(ne===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor)),te===void 0||te.attribute!==ne||ne&&te.data!==ne.data)return!0;H++}return s.attributesNum!==H||s.index!==Z}function y(I,O,L,Z){const V={},Y=O.attributes;let H=0;const B=L.getAttributes();for(const q in B)if(B[q].location>=0){let te=Y[q];te===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(te=I.instanceColor));const ne={};ne.attribute=te,te&&te.data&&(ne.data=te.data),V[q]=ne,H++}s.attributes=V,s.attributesNum=H,s.index=Z}function T(){const I=s.newAttributes;for(let O=0,L=I.length;O<L;O++)I[O]=0}function g(I){u(I,0)}function u(I,O){const L=s.newAttributes,Z=s.enabledAttributes,V=s.attributeDivisors;L[I]=1,Z[I]===0&&(t.enableVertexAttribArray(I),Z[I]=1),V[I]!==O&&(t.vertexAttribDivisor(I,O),V[I]=O)}function x(){const I=s.newAttributes,O=s.enabledAttributes;for(let L=0,Z=O.length;L<Z;L++)O[L]!==I[L]&&(t.disableVertexAttribArray(L),O[L]=0)}function S(I,O,L,Z,V,Y,H){H===!0?t.vertexAttribIPointer(I,O,L,V,Y):t.vertexAttribPointer(I,O,L,Z,V,Y)}function _(I,O,L,Z){T();const V=Z.attributes,Y=L.getAttributes(),H=O.defaultAttributeValues;for(const B in Y){const q=Y[B];if(q.location>=0){let j=V[B];if(j===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),j!==void 0){const te=j.normalized,ne=j.itemSize,ke=e.get(j);if(ke===void 0)continue;const ze=ke.buffer,Oe=ke.type,$=ke.bytesPerElement,le=Oe===t.INT||Oe===t.UNSIGNED_INT||j.gpuType===nh;if(j.isInterleavedBufferAttribute){const re=j.data,Pe=re.stride,De=j.offset;if(re.isInstancedInterleavedBuffer){for(let Ce=0;Ce<q.locationSize;Ce++)u(q.location+Ce,re.meshPerAttribute);I.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ce=0;Ce<q.locationSize;Ce++)g(q.location+Ce);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let Ce=0;Ce<q.locationSize;Ce++)S(q.location+Ce,ne/q.locationSize,Oe,te,Pe*$,(De+ne/q.locationSize*Ce)*$,le)}else{if(j.isInstancedBufferAttribute){for(let re=0;re<q.locationSize;re++)u(q.location+re,j.meshPerAttribute);I.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let re=0;re<q.locationSize;re++)g(q.location+re);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let re=0;re<q.locationSize;re++)S(q.location+re,ne/q.locationSize,Oe,te,ne*$,ne/q.locationSize*re*$,le)}}else if(H!==void 0){const te=H[B];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv(q.location,te);break;case 3:t.vertexAttrib3fv(q.location,te);break;case 4:t.vertexAttrib4fv(q.location,te);break;default:t.vertexAttrib1fv(q.location,te)}}}}x()}function A(){b();for(const I in i){const O=i[I];for(const L in O){const Z=O[L];for(const V in Z){const Y=Z[V];for(const H in Y)f(Y[H].object),delete Y[H];delete Z[V]}}delete i[I]}}function E(I){if(i[I.id]===void 0)return;const O=i[I.id];for(const L in O){const Z=O[L];for(const V in Z){const Y=Z[V];for(const H in Y)f(Y[H].object),delete Y[H];delete Z[V]}}delete i[I.id]}function w(I){for(const O in i){const L=i[O];for(const Z in L){const V=L[Z];if(V[I.id]===void 0)continue;const Y=V[I.id];for(const H in Y)f(Y[H].object),delete Y[H];delete V[I.id]}}}function p(I){for(const O in i){const L=i[O],Z=I.isInstancedMesh===!0?I.id:0,V=L[Z];if(V!==void 0){for(const Y in V){const H=V[Y];for(const B in H)f(H[B].object),delete H[B];delete V[Y]}delete L[Z],Object.keys(L).length===0&&delete i[O]}}}function b(){P(),a=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfObject:p,releaseStatesOfProgram:w,initAttributes:T,enableAttribute:g,disableUnusedAttributes:x}}function RE(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,f){f!==0&&(t.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function o(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let d=0;for(let m=0;m<f;m++)d+=c[m];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function PE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==Zn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const p=w===Bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==bn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==di&&!p)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(Ne("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),E=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:y,maxTextureSize:T,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:_,maxSamples:A,samples:E}}function LE(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Ir,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,m){const y=h.clippingPlanes,T=h.clipIntersection,g=h.clipShadows,u=t.get(h);if(!r||y===null||y.length===0||s&&!g)s?f(null):c();else{const x=s?0:i,S=x*4;let _=u.clippingState||null;l.value=_,_=f(y,d,S,m);for(let A=0;A!==S;++A)_[A]=n[A];u.clippingState=_,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,m,y){const T=h!==null?h.length:0;let g=null;if(T!==0){if(g=l.value,y!==!0||g===null){const u=m+T*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<u)&&(g=new Float32Array(u));for(let S=0,_=m;S!==T;++S,_+=4)a.copy(h[S]).applyMatrix4(x,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,g}}const ar=4,cm=[.125,.215,.35,.446,.526,.582],Nr=20,IE=256,ya=new gh,um=new Je;let mu=null,gu=0,vu=0,xu=!1;const DE=new W;class dm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=DE}=s;mu=this._renderer.getRenderTarget(),gu=this._renderer.getActiveCubeFace(),vu=this._renderer.getActiveMipmapLevel(),xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(mu,gu,vu),this._renderer.xr.enabled=xu,e.scissorTest=!1,vs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Yr||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mu=this._renderer.getRenderTarget(),gu=this._renderer.getActiveCubeFace(),vu=this._renderer.getActiveMipmapLevel(),xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:Bi,format:Zn,colorSpace:Hl,depthBuffer:!1},r=fm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fm(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=NE(s)),this._blurMaterial=FE(s,e,n),this._ggxMaterial=UE(s,e,n)}return r}_compileMaterial(e){const n=new rt(new ti,e);this._renderer.compile(n,ya)}_sceneToCubeUV(e,n,i,r,s){const l=new An(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,m=h.toneMapping;h.getClearColor(um),h.toneMapping=mi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new rt(new zt,new er({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,g=T.material;let u=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,u=!0):(g.color.copy(um),u=!0);for(let S=0;S<6;S++){const _=S%3;_===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[S],s.y,s.z)):_===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[S]));const A=this._cubeSize;vs(r,_*A,S>2?A:0,A,A),h.setRenderTarget(r),u&&h.render(T,l),h.render(e,l)}h.toneMapping=m,h.autoClear=d,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Yr||e.mapping===Ys;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;vs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ya)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),d=0+c*1.25,m=h*d,{_lodMax:y}=this,T=this._sizeLods[i],g=3*T*(i>y-ar?i-y+ar:0),u=4*(this._cubeSize-T);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=y-n,vs(s,g,u,3*T,2*T),r.setRenderTarget(s),r.render(o,ya),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=y-i,vs(e,g,u,3*T,2*T),r.setRenderTarget(e),r.render(o,ya)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const f=3,h=this._lodMeshes[r];h.material=c;const d=c.uniforms,m=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Nr-1),T=s/y,g=isFinite(s)?1+Math.floor(f*T):Nr;g>Nr&&Ne(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Nr}`);const u=[];let x=0;for(let w=0;w<Nr;++w){const p=w/T,b=Math.exp(-p*p/2);u.push(b),w===0?x+=b:w<g&&(x+=2*b)}for(let w=0;w<u.length;w++)u[w]=u[w]/x;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=y,d.mipInt.value=S-i;const _=this._sizeLods[r],A=3*_*(r>S-ar?r-S+ar:0),E=4*(this._cubeSize-_);vs(n,A,E,3*_,2*_),l.setRenderTarget(n),l.render(h,ya)}}function NE(t){const e=[],n=[],i=[];let r=t;const s=t-ar+1+cm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-ar?l=cm[a-t+ar-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,y=6,T=3,g=2,u=1,x=new Float32Array(T*y*m),S=new Float32Array(g*y*m),_=new Float32Array(u*y*m);for(let E=0;E<m;E++){const w=E%3*2/3-1,p=E>2?0:-1,b=[w,p,0,w+2/3,p,0,w+2/3,p+1,0,w,p,0,w+2/3,p+1,0,w,p+1,0];x.set(b,T*y*E),S.set(d,g*y*E);const P=[E,E,E,E,E,E];_.set(P,u*y*E)}const A=new ti;A.setAttribute("position",new vi(x,T)),A.setAttribute("uv",new vi(S,g)),A.setAttribute("faceIndex",new vi(_,u)),i.push(new rt(A,null)),r>ar&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function fm(t,e,n){const i=new gi(t,e,n);return i.texture.mapping=uc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function UE(t,e,n){return new _i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:IE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function FE(t,e,n){const i=new Float32Array(Nr),r=new W(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function hm(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function pm(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function dc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class yv extends gi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new hv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new zt(5,5,5),s=new _i({name:"CubemapFromEquirect",uniforms:Ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:Di});s.uniforms.tEquirect.value=n;const a=new rt(r,s),o=n.minFilter;return n.minFilter===kr&&(n.minFilter=Gt),new GS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function OE(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,m=!1){return d==null?null:m?a(d):s(d)}function s(d){if(d&&d.isTexture){const m=d.mapping;if(m===zc||m===Vc)if(e.has(d)){const y=e.get(d).texture;return o(y,d.mapping)}else{const y=d.image;if(y&&y.height>0){const T=new yv(y.height);return T.fromEquirectangularTexture(t,d),e.set(d,T),d.addEventListener("dispose",c),o(T.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const m=d.mapping,y=m===zc||m===Vc,T=m===Yr||m===Ys;if(y||T){let g=n.get(d);const u=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return i===null&&(i=new dm(t)),g=y?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),g.texture;if(g!==void 0)return g.texture;{const x=d.image;return y&&x&&x.height>0||T&&x&&l(x)?(i===null&&(i=new dm(t)),g=y?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),d.addEventListener("dispose",f),g.texture):null}}}return d}function o(d,m){return m===zc?d.mapping=Yr:m===Vc&&(d.mapping=Ys),d}function l(d){let m=0;const y=6;for(let T=0;T<y;T++)d[T]!==void 0&&m++;return m===y}function c(d){const m=d.target;m.removeEventListener("dispose",c);const y=e.get(m);y!==void 0&&(e.delete(m),y.dispose())}function f(d){const m=d.target;m.removeEventListener("dispose",f);const y=n.get(m);y!==void 0&&(n.delete(m),y.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function kE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Os("WebGLRenderer: "+i+" extension not supported."),r}}}function BE(t,e,n,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const y in d.attributes)e.remove(d.attributes[y]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const m in d)e.update(d[m],t.ARRAY_BUFFER)}function c(h){const d=[],m=h.index,y=h.attributes.position;let T=0;if(y===void 0)return;if(m!==null){const x=m.array;T=m.version;for(let S=0,_=x.length;S<_;S+=3){const A=x[S+0],E=x[S+1],w=x[S+2];d.push(A,E,E,w,w,A)}}else{const x=y.array;T=y.version;for(let S=0,_=x.length/3-1;S<_;S+=3){const A=S+0,E=S+1,w=S+2;d.push(A,E,E,w,w,A)}}const g=new(y.count>=65535?fv:dv)(d,1);g.version=T;const u=s.get(h);u&&e.remove(u),s.set(h,g)}function f(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function zE(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){t.drawElements(i,d,s,h*a),n.update(d,i,1)}function c(h,d,m){m!==0&&(t.drawElementsInstanced(i,d,s,h*a,m),n.update(d,i,m))}function f(h,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,m);let T=0;for(let g=0;g<m;g++)T+=d[g];n.update(T,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function VE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function GE(t,e,n){const i=new WeakMap,r=new yt;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let P=function(){p.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var m=P;d!==void 0&&d.texture.dispose();const y=o.morphAttributes.position!==void 0,T=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let _=0;y===!0&&(_=1),T===!0&&(_=2),g===!0&&(_=3);let A=o.attributes.position.count*_,E=1;A>e.maxTextureSize&&(E=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const w=new Float32Array(A*E*4*h),p=new lv(w,A,E,h);p.type=di,p.needsUpdate=!0;const b=_*4;for(let I=0;I<h;I++){const O=u[I],L=x[I],Z=S[I],V=A*E*4*I;for(let Y=0;Y<O.count;Y++){const H=Y*b;y===!0&&(r.fromBufferAttribute(O,Y),w[V+H+0]=r.x,w[V+H+1]=r.y,w[V+H+2]=r.z,w[V+H+3]=0),T===!0&&(r.fromBufferAttribute(L,Y),w[V+H+4]=r.x,w[V+H+5]=r.y,w[V+H+6]=r.z,w[V+H+7]=0),g===!0&&(r.fromBufferAttribute(Z,Y),w[V+H+8]=r.x,w[V+H+9]=r.y,w[V+H+10]=r.z,w[V+H+11]=Z.itemSize===4?r.w:1)}}d={count:h,texture:p,size:new $e(A,E)},i.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let y=0;for(let g=0;g<c.length;g++)y+=c[g];const T=o.morphTargetsRelative?1:1-y;l.getUniforms().setValue(t,"morphTargetBaseInfluence",T),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function HE(t,e,n,i,r){let s=new WeakMap;function a(c){const f=r.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==f&&(e.update(d),s.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return d}function o(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:a,dispose:o}}const WE={[j0]:"LINEAR_TONE_MAPPING",[Y0]:"REINHARD_TONE_MAPPING",[q0]:"CINEON_TONE_MAPPING",[$0]:"ACES_FILMIC_TONE_MAPPING",[Z0]:"AGX_TONE_MAPPING",[J0]:"NEUTRAL_TONE_MAPPING",[K0]:"CUSTOM_TONE_MAPPING"};function XE(t,e,n,i,r,s){const a=new gi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new qs(e,n):void 0}),o=new gi(e,n,{type:Bi,depthBuffer:!1,stencilBuffer:!1}),l=new ti;l.setAttribute("position",new un([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new un([0,2,0,0,2,0],2));const c=new US({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new rt(l,c),h=new gh(-1,1,1,-1,0,1);let d=null,m=null,y=!1,T,g=null,u=[],x=!1;this.setSize=function(S,_){a.setSize(S,_),o.setSize(S,_);for(let A=0;A<u.length;A++){const E=u[A];E.setSize&&E.setSize(S,_)}},this.setEffects=function(S){u=S,x=u.length>0&&u[0].isRenderPass===!0;const _=a.width,A=a.height;for(let E=0;E<u.length;E++){const w=u[E];w.setSize&&w.setSize(_,A)}},this.begin=function(S,_){if(y||S.toneMapping===mi&&u.length===0)return!1;if(g=_,_!==null){const A=_.width,E=_.height;(a.width!==A||a.height!==E)&&this.setSize(A,E)}return x===!1&&S.setRenderTarget(a),T=S.toneMapping,S.toneMapping=mi,!0},this.hasRenderPass=function(){return x},this.end=function(S,_){S.toneMapping=T,y=!0;let A=a,E=o;for(let w=0;w<u.length;w++){const p=u[w];if(p.enabled!==!1&&(p.render(S,E,A,_),p.needsSwap!==!1)){const b=A;A=E,E=b}}if(d!==S.outputColorSpace||m!==S.toneMapping){d=S.outputColorSpace,m=S.toneMapping,c.defines={},Ye.getTransfer(d)===st&&(c.defines.SRGB_TRANSFER="");const w=WE[m];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,S.setRenderTarget(g),S.render(f,h),g=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const Sv=new nn,rf=new qs(1,1),Mv=new lv,Ev=new dS,Tv=new hv,mm=[],gm=[],vm=new Float32Array(16),xm=new Float32Array(9),_m=new Float32Array(4);function ta(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=mm[r];if(s===void 0&&(s=new Float32Array(r),mm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function fc(t,e){let n=gm[e];n===void 0&&(n=new Int32Array(e),gm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function jE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function YE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function qE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function $E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function KE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(Ot(n,i))return;_m.set(i),t.uniformMatrix2fv(this.addr,!1,_m),kt(n,i)}}function ZE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(Ot(n,i))return;xm.set(i),t.uniformMatrix3fv(this.addr,!1,xm),kt(n,i)}}function JE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(Ot(n,i))return;vm.set(i),t.uniformMatrix4fv(this.addr,!1,vm),kt(n,i)}}function QE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function eT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function tT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function nT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function iT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function rT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function sT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function aT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function oT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(rf.compareFunction=n.isReversedDepthBuffer()?ch:lh,s=rf):s=Sv,n.setTexture2D(e||s,r)}function lT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ev,r)}function cT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Tv,r)}function uT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Mv,r)}function dT(t){switch(t){case 5126:return jE;case 35664:return YE;case 35665:return qE;case 35666:return $E;case 35674:return KE;case 35675:return ZE;case 35676:return JE;case 5124:case 35670:return QE;case 35667:case 35671:return eT;case 35668:case 35672:return tT;case 35669:case 35673:return nT;case 5125:return iT;case 36294:return rT;case 36295:return sT;case 36296:return aT;case 35678:case 36198:case 36298:case 36306:case 35682:return oT;case 35679:case 36299:case 36307:return lT;case 35680:case 36300:case 36308:case 36293:return cT;case 36289:case 36303:case 36311:case 36292:return uT}}function fT(t,e){t.uniform1fv(this.addr,e)}function hT(t,e){const n=ta(e,this.size,2);t.uniform2fv(this.addr,n)}function pT(t,e){const n=ta(e,this.size,3);t.uniform3fv(this.addr,n)}function mT(t,e){const n=ta(e,this.size,4);t.uniform4fv(this.addr,n)}function gT(t,e){const n=ta(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function vT(t,e){const n=ta(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function xT(t,e){const n=ta(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function _T(t,e){t.uniform1iv(this.addr,e)}function yT(t,e){t.uniform2iv(this.addr,e)}function ST(t,e){t.uniform3iv(this.addr,e)}function MT(t,e){t.uniform4iv(this.addr,e)}function ET(t,e){t.uniform1uiv(this.addr,e)}function TT(t,e){t.uniform2uiv(this.addr,e)}function wT(t,e){t.uniform3uiv(this.addr,e)}function AT(t,e){t.uniform4uiv(this.addr,e)}function bT(t,e,n){const i=this.cache,r=e.length,s=fc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=rf:a=Sv;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function CT(t,e,n){const i=this.cache,r=e.length,s=fc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Ev,s[a])}function RT(t,e,n){const i=this.cache,r=e.length,s=fc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Tv,s[a])}function PT(t,e,n){const i=this.cache,r=e.length,s=fc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Mv,s[a])}function LT(t){switch(t){case 5126:return fT;case 35664:return hT;case 35665:return pT;case 35666:return mT;case 35674:return gT;case 35675:return vT;case 35676:return xT;case 5124:case 35670:return _T;case 35667:case 35671:return yT;case 35668:case 35672:return ST;case 35669:case 35673:return MT;case 5125:return ET;case 36294:return TT;case 36295:return wT;case 36296:return AT;case 35678:case 36198:case 36298:case 36306:case 35682:return bT;case 35679:case 36299:case 36307:return CT;case 35680:case 36300:case 36308:case 36293:return RT;case 36289:case 36303:case 36311:case 36292:return PT}}class IT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=dT(n.type)}}class DT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=LT(n.type)}}class NT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const _u=/(\w+)(\])?(\[|\.)?/g;function ym(t,e){t.seq.push(e),t.map[e.id]=e}function UT(t,e,n){const i=t.name,r=i.length;for(_u.lastIndex=0;;){const s=_u.exec(i),a=_u.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ym(n,c===void 0?new IT(o,t,e):new DT(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new NT(o),ym(n,h)),n=h}}}class gl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);UT(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Sm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const FT=37297;let OT=0;function kT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Mm=new Fe;function BT(t){Ye._getMatrix(Mm,Ye.workingColorSpace,t);const e=`mat3( ${Mm.elements.map(n=>n.toFixed(4))} )`;switch(Ye.getTransfer(t)){case Wl:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Em(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+kT(t.getShaderSource(e),o)}else return s}function zT(t,e){const n=BT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const VT={[j0]:"Linear",[Y0]:"Reinhard",[q0]:"Cineon",[$0]:"ACESFilmic",[Z0]:"AgX",[J0]:"Neutral",[K0]:"Custom"};function GT(t,e){const n=VT[e];return n===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Qo=new W;function HT(){Ye.getLuminanceCoefficients(Qo);const t=Qo.x.toFixed(4),e=Qo.y.toFixed(4),n=Qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ca).join(`
`)}function XT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function jT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Ca(t){return t!==""}function Tm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YT=/^[ \t]*#include +<([\w\d./]+)>/gm;function sf(t){return t.replace(YT,$T)}const qT=new Map;function $T(t,e){let n=Ge[e];if(n===void 0){const i=qT.get(e);if(i!==void 0)n=Ge[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return sf(n)}const KT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Am(t){return t.replace(KT,ZT)}function ZT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const JT={[ka]:"SHADOWMAP_TYPE_PCF",[Aa]:"SHADOWMAP_TYPE_VSM"};function QT(t){return JT[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ew={[Yr]:"ENVMAP_TYPE_CUBE",[Ys]:"ENVMAP_TYPE_CUBE",[uc]:"ENVMAP_TYPE_CUBE_UV"};function tw(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":ew[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const nw={[Ys]:"ENVMAP_MODE_REFRACTION"};function iw(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":nw[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const rw={[X0]:"ENVMAP_BLENDING_MULTIPLY",[Wy]:"ENVMAP_BLENDING_MIX",[Xy]:"ENVMAP_BLENDING_ADD"};function sw(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":rw[t.combine]||"ENVMAP_BLENDING_NONE"}function aw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ow(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=QT(n),c=tw(n),f=iw(n),h=sw(n),d=aw(n),m=WT(n),y=XT(s),T=r.createProgram();let g,u,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ca).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ca).join(`
`),u.length>0&&(u+=`
`)):(g=[bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ca).join(`
`),u=[bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mi?"#define TONE_MAPPING":"",n.toneMapping!==mi?Ge.tonemapping_pars_fragment:"",n.toneMapping!==mi?GT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,zT("linearToOutputTexel",n.outputColorSpace),HT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ca).join(`
`)),a=sf(a),a=Tm(a,n),a=wm(a,n),o=sf(o),o=Tm(o,n),o=wm(o,n),a=Am(a),o=Am(o),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",n.glslVersion===kp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===kp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const S=x+g+a,_=x+u+o,A=Sm(r,r.VERTEX_SHADER,S),E=Sm(r,r.FRAGMENT_SHADER,_);r.attachShader(T,A),r.attachShader(T,E),n.index0AttributeName!==void 0?r.bindAttribLocation(T,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function w(I){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(T)||"",L=r.getShaderInfoLog(A)||"",Z=r.getShaderInfoLog(E)||"",V=O.trim(),Y=L.trim(),H=Z.trim();let B=!0,q=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,T,A,E);else{const j=Em(r,A,"vertex"),te=Em(r,E,"fragment");Ze("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+j+`
`+te)}else V!==""?Ne("WebGLProgram: Program Info Log:",V):(Y===""||H==="")&&(q=!1);q&&(I.diagnostics={runnable:B,programLog:V,vertexShader:{log:Y,prefix:g},fragmentShader:{log:H,prefix:u}})}r.deleteShader(A),r.deleteShader(E),p=new gl(r,T),b=jT(r,T)}let p;this.getUniforms=function(){return p===void 0&&w(this),p};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(T,FT)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=OT++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=A,this.fragmentShader=E,this}let lw=0;class cw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new uw(e),n.set(e,i)),i}}class uw{constructor(e){this.id=lw++,this.code=e,this.usedTimes=0}}function dw(t){return t===qr||t===Vl||t===Gl}function fw(t,e,n,i,r,s){const a=new cv,o=new cw,l=new Set,c=[],f=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(p){return l.add(p),p===0?"uv":`uv${p}`}function T(p,b,P,I,O,L){const Z=I.fog,V=O.geometry,Y=p.isMeshStandardMaterial||p.isMeshLambertMaterial||p.isMeshPhongMaterial?I.environment:null,H=p.isMeshStandardMaterial||p.isMeshLambertMaterial&&!p.envMap||p.isMeshPhongMaterial&&!p.envMap,B=e.get(p.envMap||Y,H),q=B&&B.mapping===uc?B.image.height:null,j=m[p.type];p.precision!==null&&(d=i.getMaxPrecision(p.precision),d!==p.precision&&Ne("WebGLProgram.getParameters:",p.precision,"not supported, using",d,"instead."));const te=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ne=te!==void 0?te.length:0;let ke=0;V.morphAttributes.position!==void 0&&(ke=1),V.morphAttributes.normal!==void 0&&(ke=2),V.morphAttributes.color!==void 0&&(ke=3);let ze,Oe,$,le;if(j){const we=ci[j];ze=we.vertexShader,Oe=we.fragmentShader}else{ze=p.vertexShader,Oe=p.fragmentShader;const we=o.getVertexShaderStage(p),nt=o.getFragmentShaderStage(p);o.update(p,we,nt),$=we.id,le=nt.id}const re=t.getRenderTarget(),Pe=t.state.buffers.depth.getReversed(),De=O.isInstancedMesh===!0,Ce=O.isBatchedMesh===!0,lt=!!p.map,Be=!!p.matcap,et=!!B,Ve=!!p.aoMap,We=!!p.lightMap,gt=!!p.bumpMap&&p.wireframe===!1,Ct=!!p.normalMap,vt=!!p.displacementMap,Nt=!!p.emissiveMap,dt=!!p.metalnessMap,Et=!!p.roughnessMap,k=p.anisotropy>0,$t=p.clearcoat>0,tt=p.dispersion>0,R=p.iridescence>0,v=p.sheen>0,G=p.transmission>0,X=k&&!!p.anisotropyMap,K=$t&&!!p.clearcoatMap,ce=$t&&!!p.clearcoatNormalMap,he=$t&&!!p.clearcoatRoughnessMap,J=R&&!!p.iridescenceMap,ee=R&&!!p.iridescenceThicknessMap,pe=v&&!!p.sheenColorMap,Re=v&&!!p.sheenRoughnessMap,ve=!!p.specularMap,me=!!p.specularColorMap,Le=!!p.specularIntensityMap,Ie=G&&!!p.transmissionMap,Ue=G&&!!p.thicknessMap,U=!!p.gradientMap,fe=!!p.alphaMap,Q=p.alphaTest>0,ge=!!p.alphaHash,xe=!!p.extensions;let ie=mi;p.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ie=t.toneMapping);const be={shaderID:j,shaderType:p.type,shaderName:p.name,vertexShader:ze,fragmentShader:Oe,defines:p.defines,customVertexShaderID:$,customFragmentShaderID:le,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:d,batching:Ce,batchingColor:Ce&&O._colorsTexture!==null,instancing:De,instancingColor:De&&O.instanceColor!==null,instancingMorph:De&&O.morphTexture!==null,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!p.alphaToCoverage,map:lt,matcap:Be,envMap:et,envMapMode:et&&B.mapping,envMapCubeUVHeight:q,aoMap:Ve,lightMap:We,bumpMap:gt,normalMap:Ct,displacementMap:vt,emissiveMap:Nt,normalMapObjectSpace:Ct&&p.normalMapType===qy,normalMapTangentSpace:Ct&&p.normalMapType===tf,packedNormalMap:Ct&&p.normalMapType===tf&&dw(p.normalMap.format),metalnessMap:dt,roughnessMap:Et,anisotropy:k,anisotropyMap:X,clearcoat:$t,clearcoatMap:K,clearcoatNormalMap:ce,clearcoatRoughnessMap:he,dispersion:tt,iridescence:R,iridescenceMap:J,iridescenceThicknessMap:ee,sheen:v,sheenColorMap:pe,sheenRoughnessMap:Re,specularMap:ve,specularColorMap:me,specularIntensityMap:Le,transmission:G,transmissionMap:Ie,thicknessMap:Ue,gradientMap:U,opaque:p.transparent===!1&&p.blending===Fs&&p.alphaToCoverage===!1,alphaMap:fe,alphaTest:Q,alphaHash:ge,combine:p.combine,mapUv:lt&&y(p.map.channel),aoMapUv:Ve&&y(p.aoMap.channel),lightMapUv:We&&y(p.lightMap.channel),bumpMapUv:gt&&y(p.bumpMap.channel),normalMapUv:Ct&&y(p.normalMap.channel),displacementMapUv:vt&&y(p.displacementMap.channel),emissiveMapUv:Nt&&y(p.emissiveMap.channel),metalnessMapUv:dt&&y(p.metalnessMap.channel),roughnessMapUv:Et&&y(p.roughnessMap.channel),anisotropyMapUv:X&&y(p.anisotropyMap.channel),clearcoatMapUv:K&&y(p.clearcoatMap.channel),clearcoatNormalMapUv:ce&&y(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&y(p.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&y(p.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&y(p.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&y(p.sheenColorMap.channel),sheenRoughnessMapUv:Re&&y(p.sheenRoughnessMap.channel),specularMapUv:ve&&y(p.specularMap.channel),specularColorMapUv:me&&y(p.specularColorMap.channel),specularIntensityMapUv:Le&&y(p.specularIntensityMap.channel),transmissionMapUv:Ie&&y(p.transmissionMap.channel),thicknessMapUv:Ue&&y(p.thicknessMap.channel),alphaMapUv:fe&&y(p.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ct||k),vertexNormals:!!V.attributes.normal,vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(lt||fe),fog:!!Z,useFog:p.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:p.wireframe===!1&&(p.flatShading===!0||V.attributes.normal===void 0&&Ct===!1&&(p.isMeshLambertMaterial||p.isMeshPhongMaterial||p.isMeshStandardMaterial||p.isMeshPhysicalMaterial)),sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Pe,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ke,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:p.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:ie,decodeVideoTexture:lt&&p.map.isVideoTexture===!0&&Ye.getTransfer(p.map.colorSpace)===st,decodeVideoTextureEmissive:Nt&&p.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(p.emissiveMap.colorSpace)===st,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===Ci,flipSided:p.side===yn,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionClipCullDistance:xe&&p.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&p.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function g(p){const b=[];if(p.shaderID?b.push(p.shaderID):(b.push(p.customVertexShaderID),b.push(p.customFragmentShaderID)),p.defines!==void 0)for(const P in p.defines)b.push(P),b.push(p.defines[P]);return p.isRawShaderMaterial===!1&&(u(b,p),x(b,p),b.push(t.outputColorSpace)),b.push(p.customProgramCacheKey),b.join()}function u(p,b){p.push(b.precision),p.push(b.outputColorSpace),p.push(b.envMapMode),p.push(b.envMapCubeUVHeight),p.push(b.mapUv),p.push(b.alphaMapUv),p.push(b.lightMapUv),p.push(b.aoMapUv),p.push(b.bumpMapUv),p.push(b.normalMapUv),p.push(b.displacementMapUv),p.push(b.emissiveMapUv),p.push(b.metalnessMapUv),p.push(b.roughnessMapUv),p.push(b.anisotropyMapUv),p.push(b.clearcoatMapUv),p.push(b.clearcoatNormalMapUv),p.push(b.clearcoatRoughnessMapUv),p.push(b.iridescenceMapUv),p.push(b.iridescenceThicknessMapUv),p.push(b.sheenColorMapUv),p.push(b.sheenRoughnessMapUv),p.push(b.specularMapUv),p.push(b.specularColorMapUv),p.push(b.specularIntensityMapUv),p.push(b.transmissionMapUv),p.push(b.thicknessMapUv),p.push(b.combine),p.push(b.fogExp2),p.push(b.sizeAttenuation),p.push(b.morphTargetsCount),p.push(b.morphAttributeCount),p.push(b.numDirLights),p.push(b.numPointLights),p.push(b.numSpotLights),p.push(b.numSpotLightMaps),p.push(b.numHemiLights),p.push(b.numRectAreaLights),p.push(b.numDirLightShadows),p.push(b.numPointLightShadows),p.push(b.numSpotLightShadows),p.push(b.numSpotLightShadowsWithMaps),p.push(b.numLightProbes),p.push(b.shadowMapType),p.push(b.toneMapping),p.push(b.numClippingPlanes),p.push(b.numClipIntersection),p.push(b.depthPacking)}function x(p,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),p.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),p.push(a.mask)}function S(p){const b=m[p.type];let P;if(b){const I=ci[b];P=IS.clone(I.uniforms)}else P=p.uniforms;return P}function _(p,b){let P=f.get(b);return P!==void 0?++P.usedTimes:(P=new ow(t,b,p,r),c.push(P),f.set(b,P)),P}function A(p){if(--p.usedTimes===0){const b=c.indexOf(p);c[b]=c[c.length-1],c.pop(),f.delete(p.cacheKey),p.destroy()}}function E(p){o.remove(p)}function w(){o.dispose()}return{getParameters:T,getProgramCacheKey:g,getUniforms:S,acquireProgram:_,releaseProgram:A,releaseShaderCache:E,programs:c,dispose:w}}function hw(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function pw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Cm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Rm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,y,T,g,u){let x=t[e];return x===void 0?(x={id:d.id,object:d,geometry:m,material:y,materialVariant:a(d),groupOrder:T,renderOrder:d.renderOrder,z:g,group:u},t[e]=x):(x.id=d.id,x.object=d,x.geometry=m,x.material=y,x.materialVariant=a(d),x.groupOrder=T,x.renderOrder=d.renderOrder,x.z=g,x.group=u),e++,x}function l(d,m,y,T,g,u){const x=o(d,m,y,T,g,u);y.transmission>0?i.push(x):y.transparent===!0?r.push(x):n.push(x)}function c(d,m,y,T,g,u){const x=o(d,m,y,T,g,u);y.transmission>0?i.unshift(x):y.transparent===!0?r.unshift(x):n.unshift(x)}function f(d,m,y){n.length>1&&n.sort(d||pw),i.length>1&&i.sort(m||Cm),r.length>1&&r.sort(m||Cm),y&&(n.reverse(),i.reverse(),r.reverse())}function h(){for(let d=e,m=t.length;d<m;d++){const y=t[d];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:f}}function mw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Rm,t.set(i,[a])):r>=s.length?(a=new Rm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function gw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new Je};break;case"SpotLight":n={position:new W,direction:new W,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function vw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let xw=0;function _w(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function yw(t){const e=new gw,n=vw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,s=new At,a=new At;function o(c){let f=0,h=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let m=0,y=0,T=0,g=0,u=0,x=0,S=0,_=0,A=0,E=0,w=0;c.sort(_w);for(let b=0,P=c.length;b<P;b++){const I=c[b],O=I.color,L=I.intensity,Z=I.distance;let V=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===qr?V=I.shadow.map.texture:V=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)f+=O.r*L,h+=O.g*L,d+=O.b*L;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(I.sh.coefficients[Y],L);w++}else if(I.isDirectionalLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const H=I.shadow,B=n.get(I);B.shadowIntensity=H.intensity,B.shadowBias=H.bias,B.shadowNormalBias=H.normalBias,B.shadowRadius=H.radius,B.shadowMapSize=H.mapSize,i.directionalShadow[m]=B,i.directionalShadowMap[m]=V,i.directionalShadowMatrix[m]=I.shadow.matrix,x++}i.directional[m]=Y,m++}else if(I.isSpotLight){const Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(O).multiplyScalar(L),Y.distance=Z,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,i.spot[T]=Y;const H=I.shadow;if(I.map&&(i.spotLightMap[A]=I.map,A++,H.updateMatrices(I),I.castShadow&&E++),i.spotLightMatrix[T]=H.matrix,I.castShadow){const B=n.get(I);B.shadowIntensity=H.intensity,B.shadowBias=H.bias,B.shadowNormalBias=H.normalBias,B.shadowRadius=H.radius,B.shadowMapSize=H.mapSize,i.spotShadow[T]=B,i.spotShadowMap[T]=V,_++}T++}else if(I.isRectAreaLight){const Y=e.get(I);Y.color.copy(O).multiplyScalar(L),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=Y,g++}else if(I.isPointLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const H=I.shadow,B=n.get(I);B.shadowIntensity=H.intensity,B.shadowBias=H.bias,B.shadowNormalBias=H.normalBias,B.shadowRadius=H.radius,B.shadowMapSize=H.mapSize,B.shadowCameraNear=H.camera.near,B.shadowCameraFar=H.camera.far,i.pointShadow[y]=B,i.pointShadowMap[y]=V,i.pointShadowMatrix[y]=I.shadow.matrix,S++}i.point[y]=Y,y++}else if(I.isHemisphereLight){const Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(L),Y.groundColor.copy(I.groundColor).multiplyScalar(L),i.hemi[u]=Y,u++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const p=i.hash;(p.directionalLength!==m||p.pointLength!==y||p.spotLength!==T||p.rectAreaLength!==g||p.hemiLength!==u||p.numDirectionalShadows!==x||p.numPointShadows!==S||p.numSpotShadows!==_||p.numSpotMaps!==A||p.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=T,i.rectArea.length=g,i.point.length=y,i.hemi.length=u,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=_+A-E,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=w,p.directionalLength=m,p.pointLength=y,p.spotLength=T,p.rectAreaLength=g,p.hemiLength=u,p.numDirectionalShadows=x,p.numPointShadows=S,p.numSpotShadows=_,p.numSpotMaps=A,p.numLightProbes=w,i.version=xw++)}function l(c,f){let h=0,d=0,m=0,y=0,T=0;const g=f.matrixWorldInverse;for(let u=0,x=c.length;u<x;u++){const S=c[u];if(S.isDirectionalLight){const _=i.directional[h];_.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),h++}else if(S.isSpotLight){const _=i.spot[m];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),m++}else if(S.isRectAreaLight){const _=i.rectArea[y];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(g),a.identity(),s.copy(S.matrixWorld),s.premultiply(g),a.extractRotation(s),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){const _=i.point[d];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(g),d++}else if(S.isHemisphereLight){const _=i.hemi[T];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(g),T++}}}return{setup:o,setupView:l,state:i}}function Pm(t){const e=new yw(t),n=[],i=[],r=[];function s(d){h.camera=d,n.length=0,i.length=0,r.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(n)}function f(d){e.setupView(n,d)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Sw(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Pm(t),e.set(r,[o])):s>=a.length?(o=new Pm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const Mw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ew=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Tw=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],ww=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Lm=new At,Sa=new W,yu=new W;function Aw(t,e,n){let i=new fh;const r=new $e,s=new $e,a=new yt,o=new FS,l=new OS,c={},f=n.maxTextureSize,h={[vr]:yn,[yn]:vr,[Ci]:Ci},d=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:Mw,fragmentShader:Ew}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const y=new ti;y.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new rt(y,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ka;let u=this.type;this.render=function(E,w,p){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===wy&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ka);const b=t.getRenderTarget(),P=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),O=t.state;O.setBlending(Di),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const L=u!==this.type;L&&w.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(V=>V.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,V=E.length;Z<V;Z++){const Y=E[Z],H=Y.shadow;if(H===void 0){Ne("WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const B=H.getFrameExtents();r.multiply(B),s.copy(H.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/B.x),r.x=s.x*B.x,H.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/B.y),r.y=s.y*B.y,H.mapSize.y=s.y));const q=t.state.buffers.depth.getReversed();if(H.camera._reversedDepth=q,H.map===null||L===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Aa){if(Y.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new gi(r.x,r.y,{format:qr,type:Bi,minFilter:Gt,magFilter:Gt,generateMipmaps:!1}),H.map.texture.name=Y.name+".shadowMap",H.map.depthTexture=new qs(r.x,r.y,di),H.map.depthTexture.name=Y.name+".shadowMapDepth",H.map.depthTexture.format=zi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=jt,H.map.depthTexture.magFilter=jt}else Y.isPointLight?(H.map=new yv(r.x),H.map.depthTexture=new PS(r.x,xi)):(H.map=new gi(r.x,r.y),H.map.depthTexture=new qs(r.x,r.y,xi)),H.map.depthTexture.name=Y.name+".shadowMap",H.map.depthTexture.format=zi,this.type===ka?(H.map.depthTexture.compareFunction=q?ch:lh,H.map.depthTexture.minFilter=Gt,H.map.depthTexture.magFilter=Gt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=jt,H.map.depthTexture.magFilter=jt);H.camera.updateProjectionMatrix()}const j=H.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<j;te++){if(H.map.isWebGLCubeRenderTarget)t.setRenderTarget(H.map,te),t.clear();else{te===0&&(t.setRenderTarget(H.map),t.clear());const ne=H.getViewport(te);a.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),O.viewport(a)}if(Y.isPointLight){const ne=H.camera,ke=H.matrix,ze=Y.distance||ne.far;ze!==ne.far&&(ne.far=ze,ne.updateProjectionMatrix()),Sa.setFromMatrixPosition(Y.matrixWorld),ne.position.copy(Sa),yu.copy(ne.position),yu.add(Tw[te]),ne.up.copy(ww[te]),ne.lookAt(yu),ne.updateMatrixWorld(),ke.makeTranslation(-Sa.x,-Sa.y,-Sa.z),Lm.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Lm,ne.coordinateSystem,ne.reversedDepth)}else H.updateMatrices(Y);i=H.getFrustum(),_(w,p,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===Aa&&x(H,p),H.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(b,P,I)};function x(E,w){const p=e.update(T);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new gi(r.x,r.y,{format:qr,type:Bi})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(w,null,p,d,T,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(w,null,p,m,T,null)}function S(E,w,p,b){let P=null;const I=p.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)P=I;else if(P=p.isPointLight===!0?l:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const O=P.uuid,L=w.uuid;let Z=c[O];Z===void 0&&(Z={},c[O]=Z);let V=Z[L];V===void 0&&(V=P.clone(),Z[L]=V,w.addEventListener("dispose",A)),P=V}if(P.visible=w.visible,P.wireframe=w.wireframe,b===Aa?P.side=w.shadowSide!==null?w.shadowSide:w.side:P.side=w.shadowSide!==null?w.shadowSide:h[w.side],P.alphaMap=w.alphaMap,P.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,P.map=w.map,P.clipShadows=w.clipShadows,P.clippingPlanes=w.clippingPlanes,P.clipIntersection=w.clipIntersection,P.displacementMap=w.displacementMap,P.displacementScale=w.displacementScale,P.displacementBias=w.displacementBias,P.wireframeLinewidth=w.wireframeLinewidth,P.linewidth=w.linewidth,p.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const O=t.properties.get(P);O.light=p}return P}function _(E,w,p,b,P){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===Aa)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(p.matrixWorldInverse,E.matrixWorld);const L=e.update(E),Z=E.material;if(Array.isArray(Z)){const V=L.groups;for(let Y=0,H=V.length;Y<H;Y++){const B=V[Y],q=Z[B.materialIndex];if(q&&q.visible){const j=S(E,q,b,P);E.onBeforeShadow(t,E,w,p,L,j,B),t.renderBufferDirect(p,null,L,j,E,B),E.onAfterShadow(t,E,w,p,L,j,B)}}}else if(Z.visible){const V=S(E,Z,b,P);E.onBeforeShadow(t,E,w,p,L,V,null),t.renderBufferDirect(p,null,L,V,E,null),E.onAfterShadow(t,E,w,p,L,V,null)}}const O=E.children;for(let L=0,Z=O.length;L<Z;L++)_(O[L],w,p,b,P)}function A(E){E.target.removeEventListener("dispose",A);for(const p in c){const b=c[p],P=E.target.uuid;P in b&&(b[P].dispose(),delete b[P])}}}function bw(t,e){function n(){let U=!1;const fe=new yt;let Q=null;const ge=new yt(0,0,0,0);return{setMask:function(xe){Q!==xe&&!U&&(t.colorMask(xe,xe,xe,xe),Q=xe)},setLocked:function(xe){U=xe},setClear:function(xe,ie,be,we,nt){nt===!0&&(xe*=we,ie*=we,be*=we),fe.set(xe,ie,be,we),ge.equals(fe)===!1&&(t.clearColor(xe,ie,be,we),ge.copy(fe))},reset:function(){U=!1,Q=null,ge.set(-1,0,0,0)}}}function i(){let U=!1,fe=!1,Q=null,ge=null,xe=null;return{setReversed:function(ie){if(fe!==ie){const be=e.get("EXT_clip_control");ie?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),fe=ie;const we=xe;xe=null,this.setClear(we)}},getReversed:function(){return fe},setTest:function(ie){ie?re(t.DEPTH_TEST):Pe(t.DEPTH_TEST)},setMask:function(ie){Q!==ie&&!U&&(t.depthMask(ie),Q=ie)},setFunc:function(ie){if(fe&&(ie=rS[ie]),ge!==ie){switch(ie){case gd:t.depthFunc(t.NEVER);break;case vd:t.depthFunc(t.ALWAYS);break;case xd:t.depthFunc(t.LESS);break;case js:t.depthFunc(t.LEQUAL);break;case _d:t.depthFunc(t.EQUAL);break;case yd:t.depthFunc(t.GEQUAL);break;case Sd:t.depthFunc(t.GREATER);break;case Md:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=ie}},setLocked:function(ie){U=ie},setClear:function(ie){xe!==ie&&(xe=ie,fe&&(ie=1-ie),t.clearDepth(ie))},reset:function(){U=!1,Q=null,ge=null,xe=null,fe=!1}}}function r(){let U=!1,fe=null,Q=null,ge=null,xe=null,ie=null,be=null,we=null,nt=null;return{setTest:function(Xe){U||(Xe?re(t.STENCIL_TEST):Pe(t.STENCIL_TEST))},setMask:function(Xe){fe!==Xe&&!U&&(t.stencilMask(Xe),fe=Xe)},setFunc:function(Xe,hn,Sn){(Q!==Xe||ge!==hn||xe!==Sn)&&(t.stencilFunc(Xe,hn,Sn),Q=Xe,ge=hn,xe=Sn)},setOp:function(Xe,hn,Sn){(ie!==Xe||be!==hn||we!==Sn)&&(t.stencilOp(Xe,hn,Sn),ie=Xe,be=hn,we=Sn)},setLocked:function(Xe){U=Xe},setClear:function(Xe){nt!==Xe&&(t.clearStencil(Xe),nt=Xe)},reset:function(){U=!1,fe=null,Q=null,ge=null,xe=null,ie=null,be=null,we=null,nt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let f={},h={},d={},m=new WeakMap,y=[],T=null,g=!1,u=null,x=null,S=null,_=null,A=null,E=null,w=null,p=new Je(0,0,0),b=0,P=!1,I=null,O=null,L=null,Z=null,V=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,B=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=B>=1):q.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=B>=2);let j=null,te={};const ne=t.getParameter(t.SCISSOR_BOX),ke=t.getParameter(t.VIEWPORT),ze=new yt().fromArray(ne),Oe=new yt().fromArray(ke);function $(U,fe,Q,ge){const xe=new Uint8Array(4),ie=t.createTexture();t.bindTexture(U,ie),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let be=0;be<Q;be++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,ge,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(fe+be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return ie}const le={};le[t.TEXTURE_2D]=$(t.TEXTURE_2D,t.TEXTURE_2D,1),le[t.TEXTURE_CUBE_MAP]=$(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[t.TEXTURE_2D_ARRAY]=$(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),le[t.TEXTURE_3D]=$(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(t.DEPTH_TEST),a.setFunc(js),gt(!1),Ct(Ip),re(t.CULL_FACE),Ve(Di);function re(U){f[U]!==!0&&(t.enable(U),f[U]=!0)}function Pe(U){f[U]!==!1&&(t.disable(U),f[U]=!1)}function De(U,fe){return d[U]!==fe?(t.bindFramebuffer(U,fe),d[U]=fe,U===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=fe),U===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function Ce(U,fe){let Q=y,ge=!1;if(U){Q=m.get(fe),Q===void 0&&(Q=[],m.set(fe,Q));const xe=U.textures;if(Q.length!==xe.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let ie=0,be=xe.length;ie<be;ie++)Q[ie]=t.COLOR_ATTACHMENT0+ie;Q.length=xe.length,ge=!0}}else Q[0]!==t.BACK&&(Q[0]=t.BACK,ge=!0);ge&&t.drawBuffers(Q)}function lt(U){return T!==U?(t.useProgram(U),T=U,!0):!1}const Be={[Dr]:t.FUNC_ADD,[by]:t.FUNC_SUBTRACT,[Cy]:t.FUNC_REVERSE_SUBTRACT};Be[Ry]=t.MIN,Be[Py]=t.MAX;const et={[Ly]:t.ZERO,[Iy]:t.ONE,[Dy]:t.SRC_COLOR,[pd]:t.SRC_ALPHA,[By]:t.SRC_ALPHA_SATURATE,[Oy]:t.DST_COLOR,[Uy]:t.DST_ALPHA,[Ny]:t.ONE_MINUS_SRC_COLOR,[md]:t.ONE_MINUS_SRC_ALPHA,[ky]:t.ONE_MINUS_DST_COLOR,[Fy]:t.ONE_MINUS_DST_ALPHA,[zy]:t.CONSTANT_COLOR,[Vy]:t.ONE_MINUS_CONSTANT_COLOR,[Gy]:t.CONSTANT_ALPHA,[Hy]:t.ONE_MINUS_CONSTANT_ALPHA};function Ve(U,fe,Q,ge,xe,ie,be,we,nt,Xe){if(U===Di){g===!0&&(Pe(t.BLEND),g=!1);return}if(g===!1&&(re(t.BLEND),g=!0),U!==Ay){if(U!==u||Xe!==P){if((x!==Dr||A!==Dr)&&(t.blendEquation(t.FUNC_ADD),x=Dr,A=Dr),Xe)switch(U){case Fs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dp:t.blendFunc(t.ONE,t.ONE);break;case Np:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Up:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ze("WebGLState: Invalid blending: ",U);break}else switch(U){case Fs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Np:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Up:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",U);break}S=null,_=null,E=null,w=null,p.set(0,0,0),b=0,u=U,P=Xe}return}xe=xe||fe,ie=ie||Q,be=be||ge,(fe!==x||xe!==A)&&(t.blendEquationSeparate(Be[fe],Be[xe]),x=fe,A=xe),(Q!==S||ge!==_||ie!==E||be!==w)&&(t.blendFuncSeparate(et[Q],et[ge],et[ie],et[be]),S=Q,_=ge,E=ie,w=be),(we.equals(p)===!1||nt!==b)&&(t.blendColor(we.r,we.g,we.b,nt),p.copy(we),b=nt),u=U,P=!1}function We(U,fe){U.side===Ci?Pe(t.CULL_FACE):re(t.CULL_FACE);let Q=U.side===yn;fe&&(Q=!Q),gt(Q),U.blending===Fs&&U.transparent===!1?Ve(Di):Ve(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const ge=U.stencilWrite;o.setTest(ge),ge&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Nt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):Pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function gt(U){I!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),I=U)}function Ct(U){U!==Ey?(re(t.CULL_FACE),U!==O&&(U===Ip?t.cullFace(t.BACK):U===Ty?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Pe(t.CULL_FACE),O=U}function vt(U){U!==L&&(H&&t.lineWidth(U),L=U)}function Nt(U,fe,Q){U?(re(t.POLYGON_OFFSET_FILL),(Z!==fe||V!==Q)&&(Z=fe,V=Q,a.getReversed()&&(fe=-fe),t.polygonOffset(fe,Q))):Pe(t.POLYGON_OFFSET_FILL)}function dt(U){U?re(t.SCISSOR_TEST):Pe(t.SCISSOR_TEST)}function Et(U){U===void 0&&(U=t.TEXTURE0+Y-1),j!==U&&(t.activeTexture(U),j=U)}function k(U,fe,Q){Q===void 0&&(j===null?Q=t.TEXTURE0+Y-1:Q=j);let ge=te[Q];ge===void 0&&(ge={type:void 0,texture:void 0},te[Q]=ge),(ge.type!==U||ge.texture!==fe)&&(j!==Q&&(t.activeTexture(Q),j=Q),t.bindTexture(U,fe||le[U]),ge.type=U,ge.texture=fe)}function $t(){const U=te[j];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function tt(){try{t.compressedTexImage2D(...arguments)}catch(U){Ze("WebGLState:",U)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(U){Ze("WebGLState:",U)}}function v(){try{t.texSubImage2D(...arguments)}catch(U){Ze("WebGLState:",U)}}function G(){try{t.texSubImage3D(...arguments)}catch(U){Ze("WebGLState:",U)}}function X(){try{t.compressedTexSubImage2D(...arguments)}catch(U){Ze("WebGLState:",U)}}function K(){try{t.compressedTexSubImage3D(...arguments)}catch(U){Ze("WebGLState:",U)}}function ce(){try{t.texStorage2D(...arguments)}catch(U){Ze("WebGLState:",U)}}function he(){try{t.texStorage3D(...arguments)}catch(U){Ze("WebGLState:",U)}}function J(){try{t.texImage2D(...arguments)}catch(U){Ze("WebGLState:",U)}}function ee(){try{t.texImage3D(...arguments)}catch(U){Ze("WebGLState:",U)}}function pe(U){return h[U]!==void 0?h[U]:t.getParameter(U)}function Re(U,fe){h[U]!==fe&&(t.pixelStorei(U,fe),h[U]=fe)}function ve(U){ze.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),ze.copy(U))}function me(U){Oe.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Oe.copy(U))}function Le(U,fe){let Q=c.get(fe);Q===void 0&&(Q=new WeakMap,c.set(fe,Q));let ge=Q.get(U);ge===void 0&&(ge=t.getUniformBlockIndex(fe,U.name),Q.set(U,ge))}function Ie(U,fe){const ge=c.get(fe).get(U);l.get(fe)!==ge&&(t.uniformBlockBinding(fe,ge,U.__bindingPointIndex),l.set(fe,ge))}function Ue(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},h={},j=null,te={},d={},m=new WeakMap,y=[],T=null,g=!1,u=null,x=null,S=null,_=null,A=null,E=null,w=null,p=new Je(0,0,0),b=0,P=!1,I=null,O=null,L=null,Z=null,V=null,ze.set(0,0,t.canvas.width,t.canvas.height),Oe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:Pe,bindFramebuffer:De,drawBuffers:Ce,useProgram:lt,setBlending:Ve,setMaterial:We,setFlipSided:gt,setCullFace:Ct,setLineWidth:vt,setPolygonOffset:Nt,setScissorTest:dt,activeTexture:Et,bindTexture:k,unbindTexture:$t,compressedTexImage2D:tt,compressedTexImage3D:R,texImage2D:J,texImage3D:ee,pixelStorei:Re,getParameter:pe,updateUBOMapping:Le,uniformBlockBinding:Ie,texStorage2D:ce,texStorage3D:he,texSubImage2D:v,texSubImage3D:G,compressedTexSubImage2D:X,compressedTexSubImage3D:K,scissor:ve,viewport:me,reset:Ue}}function Cw(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,f=new WeakMap,h=new Set;let d;const m=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(R,v){return y?new OffscreenCanvas(R,v):Xl("canvas")}function g(R,v,G){let X=1;const K=tt(R);if((K.width>G||K.height>G)&&(X=G/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ce=Math.floor(X*K.width),he=Math.floor(X*K.height);d===void 0&&(d=T(ce,he));const J=v?T(ce,he):d;return J.width=ce,J.height=he,J.getContext("2d").drawImage(R,0,0,ce,he),Ne("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ce+"x"+he+")."),J}else return"data"in R&&Ne("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function u(R){return R.generateMipmaps}function x(R){t.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(R,v,G,X,K,ce=!1){if(R!==null){if(t[R]!==void 0)return t[R];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let he;X&&(he=e.get("EXT_texture_norm16"),he||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=v;if(v===t.RED&&(G===t.FLOAT&&(J=t.R32F),G===t.HALF_FLOAT&&(J=t.R16F),G===t.UNSIGNED_BYTE&&(J=t.R8),G===t.UNSIGNED_SHORT&&he&&(J=he.R16_EXT),G===t.SHORT&&he&&(J=he.R16_SNORM_EXT)),v===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(J=t.R8UI),G===t.UNSIGNED_SHORT&&(J=t.R16UI),G===t.UNSIGNED_INT&&(J=t.R32UI),G===t.BYTE&&(J=t.R8I),G===t.SHORT&&(J=t.R16I),G===t.INT&&(J=t.R32I)),v===t.RG&&(G===t.FLOAT&&(J=t.RG32F),G===t.HALF_FLOAT&&(J=t.RG16F),G===t.UNSIGNED_BYTE&&(J=t.RG8),G===t.UNSIGNED_SHORT&&he&&(J=he.RG16_EXT),G===t.SHORT&&he&&(J=he.RG16_SNORM_EXT)),v===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(J=t.RG8UI),G===t.UNSIGNED_SHORT&&(J=t.RG16UI),G===t.UNSIGNED_INT&&(J=t.RG32UI),G===t.BYTE&&(J=t.RG8I),G===t.SHORT&&(J=t.RG16I),G===t.INT&&(J=t.RG32I)),v===t.RGB_INTEGER&&(G===t.UNSIGNED_BYTE&&(J=t.RGB8UI),G===t.UNSIGNED_SHORT&&(J=t.RGB16UI),G===t.UNSIGNED_INT&&(J=t.RGB32UI),G===t.BYTE&&(J=t.RGB8I),G===t.SHORT&&(J=t.RGB16I),G===t.INT&&(J=t.RGB32I)),v===t.RGBA_INTEGER&&(G===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),G===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),G===t.UNSIGNED_INT&&(J=t.RGBA32UI),G===t.BYTE&&(J=t.RGBA8I),G===t.SHORT&&(J=t.RGBA16I),G===t.INT&&(J=t.RGBA32I)),v===t.RGB&&(G===t.UNSIGNED_SHORT&&he&&(J=he.RGB16_EXT),G===t.SHORT&&he&&(J=he.RGB16_SNORM_EXT),G===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),G===t.UNSIGNED_INT_10F_11F_11F_REV&&(J=t.R11F_G11F_B10F)),v===t.RGBA){const ee=ce?Wl:Ye.getTransfer(K);G===t.FLOAT&&(J=t.RGBA32F),G===t.HALF_FLOAT&&(J=t.RGBA16F),G===t.UNSIGNED_BYTE&&(J=ee===st?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT&&he&&(J=he.RGBA16_EXT),G===t.SHORT&&he&&(J=he.RGBA16_SNORM_EXT),G===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function A(R,v){let G;return R?v===null||v===xi||v===io?G=t.DEPTH24_STENCIL8:v===di?G=t.DEPTH32F_STENCIL8:v===no&&(G=t.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===xi||v===io?G=t.DEPTH_COMPONENT24:v===di?G=t.DEPTH_COMPONENT32F:v===no&&(G=t.DEPTH_COMPONENT16),G}function E(R,v){return u(R)===!0||R.isFramebufferTexture&&R.minFilter!==jt&&R.minFilter!==Gt?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function w(R){const v=R.target;v.removeEventListener("dispose",w),b(v),v.isVideoTexture&&f.delete(v),v.isHTMLTexture&&h.delete(v)}function p(R){const v=R.target;v.removeEventListener("dispose",p),I(v)}function b(R){const v=i.get(R);if(v.__webglInit===void 0)return;const G=R.source,X=m.get(G);if(X){const K=X[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&P(R),Object.keys(X).length===0&&m.delete(G)}i.remove(R)}function P(R){const v=i.get(R);t.deleteTexture(v.__webglTexture);const G=R.source,X=m.get(G);delete X[v.__cacheKey],a.memory.textures--}function I(R){const v=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let K=0;K<v.__webglFramebuffer[X].length;K++)t.deleteFramebuffer(v.__webglFramebuffer[X][K]);else t.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)t.deleteFramebuffer(v.__webglFramebuffer[X]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const G=R.textures;for(let X=0,K=G.length;X<K;X++){const ce=i.get(G[X]);ce.__webglTexture&&(t.deleteTexture(ce.__webglTexture),a.memory.textures--),i.remove(G[X])}i.remove(R)}let O=0;function L(){O=0}function Z(){return O}function V(R){O=R}function Y(){const R=O;return R>=r.maxTextures&&Ne("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),O+=1,R}function H(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function B(R,v){const G=i.get(R);if(R.isVideoTexture&&k(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){const X=R.image;if(X===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(G,R,v);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+v)}function q(R,v){const G=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){Pe(G,R,v);return}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+v)}function j(R,v){const G=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){Pe(G,R,v);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+v)}function te(R,v){const G=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&G.__version!==R.version){De(G,R,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+v)}const ne={[Ed]:t.REPEAT,[Li]:t.CLAMP_TO_EDGE,[Td]:t.MIRRORED_REPEAT},ke={[jt]:t.NEAREST,[jy]:t.NEAREST_MIPMAP_NEAREST,[Io]:t.NEAREST_MIPMAP_LINEAR,[Gt]:t.LINEAR,[Gc]:t.LINEAR_MIPMAP_NEAREST,[kr]:t.LINEAR_MIPMAP_LINEAR},ze={[$y]:t.NEVER,[eS]:t.ALWAYS,[Ky]:t.LESS,[lh]:t.LEQUAL,[Zy]:t.EQUAL,[ch]:t.GEQUAL,[Jy]:t.GREATER,[Qy]:t.NOTEQUAL};function Oe(R,v){if(v.type===di&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Gt||v.magFilter===Gc||v.magFilter===Io||v.magFilter===kr||v.minFilter===Gt||v.minFilter===Gc||v.minFilter===Io||v.minFilter===kr)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,ne[v.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,ne[v.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,ne[v.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,ke[v.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,ke[v.minFilter]),v.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,ze[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===jt||v.minFilter!==Io&&v.minFilter!==kr||v.type===di&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function $(R,v){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",w));const X=v.source;let K=m.get(X);K===void 0&&(K={},m.set(X,K));const ce=H(v);if(ce!==R.__cacheKey){K[ce]===void 0&&(K[ce]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,G=!0),K[ce].usedTimes++;const he=K[R.__cacheKey];he!==void 0&&(K[R.__cacheKey].usedTimes--,he.usedTimes===0&&P(v)),R.__cacheKey=ce,R.__webglTexture=K[ce].texture}return G}function le(R,v,G){return Math.floor(Math.floor(R/G)/v)}function re(R,v,G,X){const ce=R.updateRanges;if(ce.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,v.width,v.height,G,X,v.data);else{ce.sort((Re,ve)=>Re.start-ve.start);let he=0;for(let Re=1;Re<ce.length;Re++){const ve=ce[he],me=ce[Re],Le=ve.start+ve.count,Ie=le(me.start,v.width,4),Ue=le(ve.start,v.width,4);me.start<=Le+1&&Ie===Ue&&le(me.start+me.count-1,v.width,4)===Ie?ve.count=Math.max(ve.count,me.start+me.count-ve.start):(++he,ce[he]=me)}ce.length=he+1;const J=n.getParameter(t.UNPACK_ROW_LENGTH),ee=n.getParameter(t.UNPACK_SKIP_PIXELS),pe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,v.width);for(let Re=0,ve=ce.length;Re<ve;Re++){const me=ce[Re],Le=Math.floor(me.start/4),Ie=Math.ceil(me.count/4),Ue=Le%v.width,U=Math.floor(Le/v.width),fe=Ie,Q=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ue),n.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,Ue,U,fe,Q,G,X,v.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,J),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ee),n.pixelStorei(t.UNPACK_SKIP_ROWS,pe)}}function Pe(R,v,G){let X=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=t.TEXTURE_3D);const K=$(R,v),ce=v.source;n.bindTexture(X,R.__webglTexture,t.TEXTURE0+G);const he=i.get(ce);if(ce.version!==he.__version||K===!0){if(n.activeTexture(t.TEXTURE0+G),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const Q=Ye.getPrimaries(Ye.workingColorSpace),ge=v.colorSpace===ir?null:Ye.getPrimaries(v.colorSpace),xe=v.colorSpace===ir||Q===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment);let ee=g(v.image,!1,r.maxTextureSize);ee=$t(v,ee);const pe=s.convert(v.format,v.colorSpace),Re=s.convert(v.type);let ve=_(v.internalFormat,pe,Re,v.normalized,v.colorSpace,v.isVideoTexture);Oe(X,v);let me;const Le=v.mipmaps,Ie=v.isVideoTexture!==!0,Ue=he.__version===void 0||K===!0,U=ce.dataReady,fe=E(v,ee);if(v.isDepthTexture)ve=A(v.format===Br,v.type),Ue&&(Ie?n.texStorage2D(t.TEXTURE_2D,1,ve,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,ve,ee.width,ee.height,0,pe,Re,null));else if(v.isDataTexture)if(Le.length>0){Ie&&Ue&&n.texStorage2D(t.TEXTURE_2D,fe,ve,Le[0].width,Le[0].height);for(let Q=0,ge=Le.length;Q<ge;Q++)me=Le[Q],Ie?U&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,me.width,me.height,pe,Re,me.data):n.texImage2D(t.TEXTURE_2D,Q,ve,me.width,me.height,0,pe,Re,me.data);v.generateMipmaps=!1}else Ie?(Ue&&n.texStorage2D(t.TEXTURE_2D,fe,ve,ee.width,ee.height),U&&re(v,ee,pe,Re)):n.texImage2D(t.TEXTURE_2D,0,ve,ee.width,ee.height,0,pe,Re,ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ie&&Ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,ve,Le[0].width,Le[0].height,ee.depth);for(let Q=0,ge=Le.length;Q<ge;Q++)if(me=Le[Q],v.format!==Zn)if(pe!==null)if(Ie){if(U)if(v.layerUpdates.size>0){const xe=lm(me.width,me.height,v.format,v.type);for(const ie of v.layerUpdates){const be=me.data.subarray(ie*xe/me.data.BYTES_PER_ELEMENT,(ie+1)*xe/me.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,ie,me.width,me.height,1,pe,be)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,me.width,me.height,ee.depth,pe,me.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,ve,me.width,me.height,ee.depth,0,me.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,me.width,me.height,ee.depth,pe,Re,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,ve,me.width,me.height,ee.depth,0,pe,Re,me.data)}else{Ie&&Ue&&n.texStorage2D(t.TEXTURE_2D,fe,ve,Le[0].width,Le[0].height);for(let Q=0,ge=Le.length;Q<ge;Q++)me=Le[Q],v.format!==Zn?pe!==null?Ie?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,me.width,me.height,pe,me.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,ve,me.width,me.height,0,me.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?U&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,me.width,me.height,pe,Re,me.data):n.texImage2D(t.TEXTURE_2D,Q,ve,me.width,me.height,0,pe,Re,me.data)}else if(v.isDataArrayTexture)if(Ie){if(Ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,ve,ee.width,ee.height,ee.depth),U)if(v.layerUpdates.size>0){const Q=lm(ee.width,ee.height,v.format,v.type);for(const ge of v.layerUpdates){const xe=ee.data.subarray(ge*Q/ee.data.BYTES_PER_ELEMENT,(ge+1)*Q/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ge,ee.width,ee.height,1,pe,Re,xe)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,pe,Re,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ve,ee.width,ee.height,ee.depth,0,pe,Re,ee.data);else if(v.isData3DTexture)Ie?(Ue&&n.texStorage3D(t.TEXTURE_3D,fe,ve,ee.width,ee.height,ee.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,pe,Re,ee.data)):n.texImage3D(t.TEXTURE_3D,0,ve,ee.width,ee.height,ee.depth,0,pe,Re,ee.data);else if(v.isFramebufferTexture){if(Ue)if(Ie)n.texStorage2D(t.TEXTURE_2D,fe,ve,ee.width,ee.height);else{let Q=ee.width,ge=ee.height;for(let xe=0;xe<fe;xe++)n.texImage2D(t.TEXTURE_2D,xe,ve,Q,ge,0,pe,Re,null),Q>>=1,ge>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in t){const Q=t.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),ee.parentNode!==Q){Q.appendChild(ee),h.add(v),Q.onpaint=ge=>{const xe=ge.changedElements;for(const ie of h)xe.includes(ie.image)&&(ie.needsUpdate=!0)},Q.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ee);else{const xe=t.RGBA,ie=t.RGBA,be=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,xe,ie,be,ee)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Ie&&Ue){const Q=tt(Le[0]);n.texStorage2D(t.TEXTURE_2D,fe,ve,Q.width,Q.height)}for(let Q=0,ge=Le.length;Q<ge;Q++)me=Le[Q],Ie?U&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,pe,Re,me):n.texImage2D(t.TEXTURE_2D,Q,ve,pe,Re,me);v.generateMipmaps=!1}else if(Ie){if(Ue){const Q=tt(ee);n.texStorage2D(t.TEXTURE_2D,fe,ve,Q.width,Q.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe,Re,ee)}else n.texImage2D(t.TEXTURE_2D,0,ve,pe,Re,ee);u(v)&&x(X),he.__version=ce.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function De(R,v,G){if(v.image.length!==6)return;const X=$(R,v),K=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+G);const ce=i.get(K);if(K.version!==ce.__version||X===!0){n.activeTexture(t.TEXTURE0+G);const he=Ye.getPrimaries(Ye.workingColorSpace),J=v.colorSpace===ir?null:Ye.getPrimaries(v.colorSpace),ee=v.colorSpace===ir||he===J?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const pe=v.isCompressedTexture||v.image[0].isCompressedTexture,Re=v.image[0]&&v.image[0].isDataTexture,ve=[];for(let ie=0;ie<6;ie++)!pe&&!Re?ve[ie]=g(v.image[ie],!0,r.maxCubemapSize):ve[ie]=Re?v.image[ie].image:v.image[ie],ve[ie]=$t(v,ve[ie]);const me=ve[0],Le=s.convert(v.format,v.colorSpace),Ie=s.convert(v.type),Ue=_(v.internalFormat,Le,Ie,v.normalized,v.colorSpace),U=v.isVideoTexture!==!0,fe=ce.__version===void 0||X===!0,Q=K.dataReady;let ge=E(v,me);Oe(t.TEXTURE_CUBE_MAP,v);let xe;if(pe){U&&fe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,Ue,me.width,me.height);for(let ie=0;ie<6;ie++){xe=ve[ie].mipmaps;for(let be=0;be<xe.length;be++){const we=xe[be];v.format!==Zn?Le!==null?U?Q&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be,0,0,we.width,we.height,Le,we.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be,Ue,we.width,we.height,0,we.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be,0,0,we.width,we.height,Le,Ie,we.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be,Ue,we.width,we.height,0,Le,Ie,we.data)}}}else{if(xe=v.mipmaps,U&&fe){xe.length>0&&ge++;const ie=tt(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,Ue,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Re){U?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ve[ie].width,ve[ie].height,Le,Ie,ve[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ue,ve[ie].width,ve[ie].height,0,Le,Ie,ve[ie].data);for(let be=0;be<xe.length;be++){const nt=xe[be].image[ie].image;U?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be+1,0,0,nt.width,nt.height,Le,Ie,nt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be+1,Ue,nt.width,nt.height,0,Le,Ie,nt.data)}}else{U?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Le,Ie,ve[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ue,Le,Ie,ve[ie]);for(let be=0;be<xe.length;be++){const we=xe[be];U?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be+1,0,0,Le,Ie,we.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be+1,Ue,Le,Ie,we.image[ie])}}}u(v)&&x(t.TEXTURE_CUBE_MAP),ce.__version=K.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Ce(R,v,G,X,K,ce){const he=s.convert(G.format,G.colorSpace),J=s.convert(G.type),ee=_(G.internalFormat,he,J,G.normalized,G.colorSpace),pe=i.get(v),Re=i.get(G);if(Re.__renderTarget=v,!pe.__hasExternalTextures){const ve=Math.max(1,v.width>>ce),me=Math.max(1,v.height>>ce);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,ce,ee,ve,me,v.depth,0,he,J,null):n.texImage2D(K,ce,ee,ve,me,0,he,J,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Et(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,K,Re.__webglTexture,0,dt(v)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,K,Re.__webglTexture,ce),n.bindFramebuffer(t.FRAMEBUFFER,null)}function lt(R,v,G){if(t.bindRenderbuffer(t.RENDERBUFFER,R),v.depthBuffer){const X=v.depthTexture,K=X&&X.isDepthTexture?X.type:null,ce=A(v.stencilBuffer,K),he=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Et(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,dt(v),ce,v.width,v.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,dt(v),ce,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,ce,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,he,t.RENDERBUFFER,R)}else{const X=v.textures;for(let K=0;K<X.length;K++){const ce=X[K],he=s.convert(ce.format,ce.colorSpace),J=s.convert(ce.type),ee=_(ce.internalFormat,he,J,ce.normalized,ce.colorSpace);Et(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,dt(v),ee,v.width,v.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,dt(v),ee,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,ee,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Be(R,v,G){const X=v.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=i.get(v.depthTexture);if(K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X){if(K.__webglInit===void 0&&(K.__webglInit=!0,v.depthTexture.addEventListener("dispose",w)),K.__webglTexture===void 0){K.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),Oe(t.TEXTURE_CUBE_MAP,v.depthTexture);const pe=s.convert(v.depthTexture.format),Re=s.convert(v.depthTexture.type);let ve;v.depthTexture.format===zi?ve=t.DEPTH_COMPONENT24:v.depthTexture.format===Br&&(ve=t.DEPTH24_STENCIL8);for(let me=0;me<6;me++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ve,v.width,v.height,0,pe,Re,null)}}else B(v.depthTexture,0);const ce=K.__webglTexture,he=dt(v),J=X?t.TEXTURE_CUBE_MAP_POSITIVE_X+G:t.TEXTURE_2D,ee=v.depthTexture.format===Br?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(v.depthTexture.format===zi)Et(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,J,ce,0,he):t.framebufferTexture2D(t.FRAMEBUFFER,ee,J,ce,0);else if(v.depthTexture.format===Br)Et(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,J,ce,0,he):t.framebufferTexture2D(t.FRAMEBUFFER,ee,J,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(R){const v=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const X=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){const K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=X}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(G)for(let X=0;X<6;X++)Be(v.__webglFramebuffer[X],R,X);else{const X=R.texture.mipmaps;X&&X.length>0?Be(v.__webglFramebuffer[0],R,0):Be(v.__webglFramebuffer,R,0)}else if(G){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=t.createRenderbuffer(),lt(v.__webglDepthbuffer[X],R,!1);else{const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=v.__webglDepthbuffer[X];t.bindRenderbuffer(t.RENDERBUFFER,ce),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,ce)}}else{const X=R.texture.mipmaps;if(X&&X.length>0?n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),lt(v.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ce),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,ce)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ve(R,v,G){const X=i.get(R);v!==void 0&&Ce(X.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&et(R)}function We(R){const v=R.texture,G=i.get(R),X=i.get(v);R.addEventListener("dispose",p);const K=R.textures,ce=R.isWebGLCubeRenderTarget===!0,he=K.length>1;if(he||(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=v.version,a.memory.textures++),ce){G.__webglFramebuffer=[];for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0){G.__webglFramebuffer[J]=[];for(let ee=0;ee<v.mipmaps.length;ee++)G.__webglFramebuffer[J][ee]=t.createFramebuffer()}else G.__webglFramebuffer[J]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){G.__webglFramebuffer=[];for(let J=0;J<v.mipmaps.length;J++)G.__webglFramebuffer[J]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(he)for(let J=0,ee=K.length;J<ee;J++){const pe=i.get(K[J]);pe.__webglTexture===void 0&&(pe.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&Et(R)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let J=0;J<K.length;J++){const ee=K[J];G.__webglColorRenderbuffer[J]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[J]);const pe=s.convert(ee.format,ee.colorSpace),Re=s.convert(ee.type),ve=_(ee.internalFormat,pe,Re,ee.normalized,ee.colorSpace,R.isXRRenderTarget===!0),me=dt(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,me,ve,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+J,t.RENDERBUFFER,G.__webglColorRenderbuffer[J])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),lt(G.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ce){n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),Oe(t.TEXTURE_CUBE_MAP,v);for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0)for(let ee=0;ee<v.mipmaps.length;ee++)Ce(G.__webglFramebuffer[J][ee],R,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ee);else Ce(G.__webglFramebuffer[J],R,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);u(v)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(he){for(let J=0,ee=K.length;J<ee;J++){const pe=K[J],Re=i.get(pe);let ve=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ve=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ve,Re.__webglTexture),Oe(ve,pe),Ce(G.__webglFramebuffer,R,pe,t.COLOR_ATTACHMENT0+J,ve,0),u(pe)&&x(ve)}n.unbindTexture()}else{let J=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(J=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(J,X.__webglTexture),Oe(J,v),v.mipmaps&&v.mipmaps.length>0)for(let ee=0;ee<v.mipmaps.length;ee++)Ce(G.__webglFramebuffer[ee],R,v,t.COLOR_ATTACHMENT0,J,ee);else Ce(G.__webglFramebuffer,R,v,t.COLOR_ATTACHMENT0,J,0);u(v)&&x(J),n.unbindTexture()}R.depthBuffer&&et(R)}function gt(R){const v=R.textures;for(let G=0,X=v.length;G<X;G++){const K=v[G];if(u(K)){const ce=S(R),he=i.get(K).__webglTexture;n.bindTexture(ce,he),x(ce),n.unbindTexture()}}}const Ct=[],vt=[];function Nt(R){if(R.samples>0){if(Et(R)===!1){const v=R.textures,G=R.width,X=R.height;let K=t.COLOR_BUFFER_BIT;const ce=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(R),J=v.length>1;if(J)for(let pe=0;pe<v.length;pe++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const ee=R.texture.mipmaps;ee&&ee.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let pe=0;pe<v.length;pe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),J){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[pe]);const Re=i.get(v[pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Re,0)}t.blitFramebuffer(0,0,G,X,0,0,G,X,K,t.NEAREST),l===!0&&(Ct.length=0,vt.length=0,Ct.push(t.COLOR_ATTACHMENT0+pe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ct.push(ce),vt.push(ce),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,vt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ct))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),J)for(let pe=0;pe<v.length;pe++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,he.__webglColorRenderbuffer[pe]);const Re=i.get(v[pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,Re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const v=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function dt(R){return Math.min(r.maxSamples,R.samples)}function Et(R){const v=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function k(R){const v=a.render.frame;f.get(R)!==v&&(f.set(R,v),R.update())}function $t(R,v){const G=R.colorSpace,X=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Hl&&G!==ir&&(Ye.getTransfer(G)===st?(X!==Zn||K!==bn)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",G)),v}function tt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=L,this.getTextureUnits=Z,this.setTextureUnits=V,this.setTexture2D=B,this.setTexture2DArray=q,this.setTexture3D=j,this.setTextureCube=te,this.rebindTextures=Ve,this.setupRenderTarget=We,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Et,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Rw(t,e){function n(i,r=ir){let s;const a=Ye.getTransfer(r);if(i===bn)return t.UNSIGNED_BYTE;if(i===ih)return t.UNSIGNED_SHORT_4_4_4_4;if(i===rh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===nv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===iv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===ev)return t.BYTE;if(i===tv)return t.SHORT;if(i===no)return t.UNSIGNED_SHORT;if(i===nh)return t.INT;if(i===xi)return t.UNSIGNED_INT;if(i===di)return t.FLOAT;if(i===Bi)return t.HALF_FLOAT;if(i===rv)return t.ALPHA;if(i===sv)return t.RGB;if(i===Zn)return t.RGBA;if(i===zi)return t.DEPTH_COMPONENT;if(i===Br)return t.DEPTH_STENCIL;if(i===av)return t.RED;if(i===sh)return t.RED_INTEGER;if(i===qr)return t.RG;if(i===ah)return t.RG_INTEGER;if(i===oh)return t.RGBA_INTEGER;if(i===fl||i===hl||i===pl||i===ml)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===fl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===fl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===hl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ml)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wd||i===Ad||i===bd||i===Cd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===wd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ad)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rd||i===Pd||i===Ld||i===Id||i===Dd||i===Vl||i===Nd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Rd||i===Pd)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ld)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Id)return s.COMPRESSED_R11_EAC;if(i===Dd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Vl)return s.COMPRESSED_RG11_EAC;if(i===Nd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ud||i===Fd||i===Od||i===kd||i===Bd||i===zd||i===Vd||i===Gd||i===Hd||i===Wd||i===Xd||i===jd||i===Yd||i===qd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ud)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fd)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Od)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kd)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bd)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zd)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vd)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Gd)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hd)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wd)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xd)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jd)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yd)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qd)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$d||i===Kd||i===Zd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===$d)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Kd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jd||i===Qd||i===Gl||i===ef)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Jd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Qd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ef)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===io?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const Pw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Iw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new pv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new _i({vertexShader:Pw,fragmentShader:Lw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new rt(new $s(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Dw extends Zr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,h=null,d=null,m=null,y=null;const T=typeof XRWebGLBinding<"u",g=new Iw,u={},x=n.getContextAttributes();let S=null,_=null;const A=[],E=[],w=new $e;let p=null;const b=new An;b.viewport=new yt;const P=new An;P.viewport=new yt;const I=[b,P],O=new HS;let L=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let le=A[$];return le===void 0&&(le=new Kc,A[$]=le),le.getTargetRaySpace()},this.getControllerGrip=function($){let le=A[$];return le===void 0&&(le=new Kc,A[$]=le),le.getGripSpace()},this.getHand=function($){let le=A[$];return le===void 0&&(le=new Kc,A[$]=le),le.getHandSpace()};function V($){const le=E.indexOf($.inputSource);if(le===-1)return;const re=A[le];re!==void 0&&(re.update($.inputSource,$.frame,c||a),re.dispatchEvent({type:$.type,data:$.inputSource}))}function Y(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",H);for(let $=0;$<A.length;$++){const le=E[$];le!==null&&(E[$]=null,A[$].disconnect(le))}L=null,Z=null,g.reset();for(const $ in u)delete u[$];e.setRenderTarget(S),m=null,d=null,h=null,r=null,_=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(p),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h===null&&T&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",H),x.xrCompatible!==!0&&await n.makeXRCompatible(),p=e.getPixelRatio(),e.getSize(w),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Pe=null,De=null;x.depth&&(De=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=x.stencil?Br:zi,Pe=x.stencil?io:xi);const Ce={colorFormat:n.RGBA8,depthFormat:De,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Ce),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new gi(d.textureWidth,d.textureHeight,{format:Zn,type:bn,depthTexture:new qs(d.textureWidth,d.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const re={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new gi(m.framebufferWidth,m.framebufferHeight,{format:Zn,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H($){for(let le=0;le<$.removed.length;le++){const re=$.removed[le],Pe=E.indexOf(re);Pe>=0&&(E[Pe]=null,A[Pe].disconnect(re))}for(let le=0;le<$.added.length;le++){const re=$.added[le];let Pe=E.indexOf(re);if(Pe===-1){for(let Ce=0;Ce<A.length;Ce++)if(Ce>=E.length){E.push(re),Pe=Ce;break}else if(E[Ce]===null){E[Ce]=re,Pe=Ce;break}if(Pe===-1)break}const De=A[Pe];De&&De.connect(re)}}const B=new W,q=new W;function j($,le,re){B.setFromMatrixPosition(le.matrixWorld),q.setFromMatrixPosition(re.matrixWorld);const Pe=B.distanceTo(q),De=le.projectionMatrix.elements,Ce=re.projectionMatrix.elements,lt=De[14]/(De[10]-1),Be=De[14]/(De[10]+1),et=(De[9]+1)/De[5],Ve=(De[9]-1)/De[5],We=(De[8]-1)/De[0],gt=(Ce[8]+1)/Ce[0],Ct=lt*We,vt=lt*gt,Nt=Pe/(-We+gt),dt=Nt*-We;if(le.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(dt),$.translateZ(Nt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),De[10]===-1)$.projectionMatrix.copy(le.projectionMatrix),$.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const Et=lt+Nt,k=Be+Nt,$t=Ct-dt,tt=vt+(Pe-dt),R=et*Be/k*Et,v=Ve*Be/k*Et;$.projectionMatrix.makePerspective($t,tt,R,v,Et,k),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function te($,le){le===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(le.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let le=$.near,re=$.far;g.texture!==null&&(g.depthNear>0&&(le=g.depthNear),g.depthFar>0&&(re=g.depthFar)),O.near=P.near=b.near=le,O.far=P.far=b.far=re,(L!==O.near||Z!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),L=O.near,Z=O.far),O.layers.mask=$.layers.mask|6,b.layers.mask=O.layers.mask&-5,P.layers.mask=O.layers.mask&-3;const Pe=$.parent,De=O.cameras;te(O,Pe);for(let Ce=0;Ce<De.length;Ce++)te(De[Ce],Pe);De.length===2?j(O,b,P):O.projectionMatrix.copy(b.projectionMatrix),ne($,O,Pe)};function ne($,le,re){re===null?$.matrix.copy(le.matrixWorld):($.matrix.copy(re.matrixWorld),$.matrix.invert(),$.matrix.multiply(le.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(le.projectionMatrix),$.projectionMatrixInverse.copy(le.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=nf*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function($){return u[$]};let ke=null;function ze($,le){if(f=le.getViewerPose(c||a),y=le,f!==null){const re=f.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let Pe=!1;re.length!==O.cameras.length&&(O.cameras.length=0,Pe=!0);for(let Be=0;Be<re.length;Be++){const et=re[Be];let Ve=null;if(m!==null)Ve=m.getViewport(et);else{const gt=h.getViewSubImage(d,et);Ve=gt.viewport,Be===0&&(e.setRenderTargetTextures(_,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(_))}let We=I[Be];We===void 0&&(We=new An,We.layers.enable(Be),We.viewport=new yt,I[Be]=We),We.matrix.fromArray(et.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(et.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),Be===0&&(O.matrix.copy(We.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Pe===!0&&O.cameras.push(We)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&T){h=i.getBinding();const Be=h.getDepthInformation(re[0]);Be&&Be.isValid&&Be.texture&&g.init(Be,r.renderState)}if(De&&De.includes("camera-access")&&T){e.state.unbindTexture(),h=i.getBinding();for(let Be=0;Be<re.length;Be++){const et=re[Be].camera;if(et){let Ve=u[et];Ve||(Ve=new pv,u[et]=Ve);const We=h.getCameraImage(et);Ve.sourceTexture=We}}}}for(let re=0;re<A.length;re++){const Pe=E[re],De=A[re];Pe!==null&&De!==void 0&&De.update(Pe,le,c||a)}ke&&ke($,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),y=null}const Oe=new xv;Oe.setAnimationLoop(ze),this.setAnimationLoop=function($){ke=$},this.dispose=function(){}}}const Nw=new At,wv=new Fe;wv.set(-1,0,0,0,1,0,0,0,1);function Uw(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,mv(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,x,S,_){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(g,u):u.isMeshLambertMaterial?(s(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(g,u),h(g,u)):u.isMeshPhongMaterial?(s(g,u),f(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(g,u),d(g,u),u.isMeshPhysicalMaterial&&m(g,u,_)):u.isMeshMatcapMaterial?(s(g,u),y(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),T(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(a(g,u),u.isLineDashedMaterial&&o(g,u)):u.isPointsMaterial?l(g,u,x,S):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===yn&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===yn&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const x=e.get(u),S=x.envMap,_=x.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(Nw.makeRotationFromEuler(_)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(wv),g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function a(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function o(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,x,S){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*x,g.scale.value=S*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function f(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function h(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function d(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function m(g,u,x){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===yn&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,u){u.matcap&&(g.matcap.value=u.matcap)}function T(g,u){const x=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Fw(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,A){const E=A.program;i.uniformBlockBinding(_,E)}function c(_,A){let E=r[_.id];E===void 0&&(g(_),E=f(_),r[_.id]=E,_.addEventListener("dispose",x));const w=A.program;i.updateUBOMapping(_,w);const p=e.render.frame;s[_.id]!==p&&(d(_),s[_.id]=p)}function f(_){const A=h();_.__bindingPointIndex=A;const E=t.createBuffer(),w=_.__size,p=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,w,p),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,A,E),E}function h(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const A=r[_.id],E=_.uniforms,w=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,A);for(let p=0,b=E.length;p<b;p++){const P=E[p];if(Array.isArray(P))for(let I=0,O=P.length;I<O;I++)m(P[I],p,I,w);else m(P,p,0,w)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,A,E,w){if(T(_,A,E,w)===!0){const p=_.__offset,b=_.value;if(Array.isArray(b)){let P=0;for(let I=0;I<b.length;I++){const O=b[I],L=u(O);y(O,_.__data,P),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(P+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else y(b,_.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,p,_.__data)}}function y(_,A,E){typeof _=="number"||typeof _=="boolean"?A[0]=_:_.isMatrix3?(A[0]=_.elements[0],A[1]=_.elements[1],A[2]=_.elements[2],A[3]=0,A[4]=_.elements[3],A[5]=_.elements[4],A[6]=_.elements[5],A[7]=0,A[8]=_.elements[6],A[9]=_.elements[7],A[10]=_.elements[8],A[11]=0):ArrayBuffer.isView(_)?A.set(new _.constructor(_.buffer,_.byteOffset,A.length)):_.toArray(A,E)}function T(_,A,E,w){const p=_.value,b=A+"_"+E;if(w[b]===void 0)return typeof p=="number"||typeof p=="boolean"?w[b]=p:ArrayBuffer.isView(p)?w[b]=p.slice():w[b]=p.clone(),!0;{const P=w[b];if(typeof p=="number"||typeof p=="boolean"){if(P!==p)return w[b]=p,!0}else{if(ArrayBuffer.isView(p))return!0;if(P.equals(p)===!1)return P.copy(p),!0}}return!1}function g(_){const A=_.uniforms;let E=0;const w=16;for(let b=0,P=A.length;b<P;b++){const I=Array.isArray(A[b])?A[b]:[A[b]];for(let O=0,L=I.length;O<L;O++){const Z=I[O],V=Array.isArray(Z.value)?Z.value:[Z.value];for(let Y=0,H=V.length;Y<H;Y++){const B=V[Y],q=u(B),j=E%w,te=j%q.boundary,ne=j+te;E+=te,ne!==0&&w-ne<q.storage&&(E+=w-ne),Z.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=E,E+=q.storage}}}const p=E%w;return p>0&&(E+=w-p),_.__size=E,_.__cache={},this}function u(_){const A={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(A.boundary=4,A.storage=4):_.isVector2?(A.boundary=8,A.storage=8):_.isVector3||_.isColor?(A.boundary=16,A.storage=12):_.isVector4?(A.boundary=16,A.storage=16):_.isMatrix3?(A.boundary=48,A.storage=48):_.isMatrix4?(A.boundary=64,A.storage=64):_.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(A.boundary=16,A.storage=_.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",_),A}function x(_){const A=_.target;A.removeEventListener("dispose",x);const E=a.indexOf(A.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function S(){for(const _ in r)t.deleteBuffer(r[_]);a=[],r={},s={}}return{bind:l,update:c,dispose:S}}const Ow=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let oi=null;function kw(){return oi===null&&(oi=new AS(Ow,16,16,qr,Bi),oi.name="DFG_LUT",oi.minFilter=Gt,oi.magFilter=Gt,oi.wrapS=Li,oi.wrapT=Li,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}class Bw{constructor(e={}){const{canvas:n=nS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:m=bn}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=a;const T=m,g=new Set([oh,ah,sh]),u=new Set([bn,xi,no,io,ih,rh]),x=new Uint32Array(4),S=new Int32Array(4),_=new W;let A=null,E=null;const w=[],p=[];let b=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let I=!1,O=null,L=null,Z=null,V=null;this._outputColorSpace=Un;let Y=0,H=0,B=null,q=-1,j=null;const te=new yt,ne=new yt;let ke=null;const ze=new Je(0);let Oe=0,$=n.width,le=n.height,re=1,Pe=null,De=null;const Ce=new yt(0,0,$,le),lt=new yt(0,0,$,le);let Be=!1;const et=new fh;let Ve=!1,We=!1;const gt=new At,Ct=new W,vt=new yt,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Et(){return B===null?re:1}let k=i;function $t(M,z){return n.getContext(M,z)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${th}`),n.addEventListener("webglcontextlost",nt,!1),n.addEventListener("webglcontextrestored",Xe,!1),n.addEventListener("webglcontextcreationerror",hn,!1),k===null){const z="webgl2";if(k=$t(z,M),k===null)throw $t(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(M){throw Ze("WebGLRenderer: "+M.message),M}let tt,R,v,G,X,K,ce,he,J,ee,pe,Re,ve,me,Le,Ie,Ue,U,fe,Q,ge,xe,ie;function be(){tt=new kE(k),tt.init(),ge=new Rw(k,tt),R=new PE(k,tt,e,ge),v=new bw(k,tt),R.reversedDepthBuffer&&d&&v.buffers.depth.setReversed(!0),L=k.createFramebuffer(),Z=k.createFramebuffer(),V=k.createFramebuffer(),G=new VE(k),X=new hw,K=new Cw(k,tt,v,X,R,ge,G),ce=new OE(P),he=new XS(k),xe=new CE(k,he),J=new BE(k,he,G,xe),ee=new HE(k,J,he,xe,G),U=new GE(k,R,K),Le=new LE(X),pe=new fw(P,ce,tt,R,xe,Le),Re=new Uw(P,X),ve=new mw,me=new Sw(tt),Ue=new bE(P,ce,v,ee,y,l),Ie=new Aw(P,ee,R),ie=new Fw(k,G,R,v),fe=new RE(k,tt,G),Q=new zE(k,tt,G),G.programs=pe.programs,P.capabilities=R,P.extensions=tt,P.properties=X,P.renderLists=ve,P.shadowMap=Ie,P.state=v,P.info=G}be(),T!==bn&&(b=new XE(T,n.width,n.height,o,r,s));const we=new Dw(P,k);this.xr=we,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const M=tt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=tt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(M){M!==void 0&&(re=M,this.setSize($,le,!1))},this.getSize=function(M){return M.set($,le)},this.setSize=function(M,z,N=!0){if(we.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}$=M,le=z,n.width=Math.floor(M*re),n.height=Math.floor(z*re),N===!0&&(n.style.width=M+"px",n.style.height=z+"px"),b!==null&&b.setSize(n.width,n.height),this.setViewport(0,0,M,z)},this.getDrawingBufferSize=function(M){return M.set($*re,le*re).floor()},this.setDrawingBufferSize=function(M,z,N){$=M,le=z,re=N,n.width=Math.floor(M*N),n.height=Math.floor(z*N),this.setViewport(0,0,M,z)},this.setEffects=function(M){if(T===bn){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let z=0;z<M.length;z++)if(M[z].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(te)},this.getViewport=function(M){return M.copy(Ce)},this.setViewport=function(M,z,N,D){M.isVector4?Ce.set(M.x,M.y,M.z,M.w):Ce.set(M,z,N,D),v.viewport(te.copy(Ce).multiplyScalar(re).round())},this.getScissor=function(M){return M.copy(lt)},this.setScissor=function(M,z,N,D){M.isVector4?lt.set(M.x,M.y,M.z,M.w):lt.set(M,z,N,D),v.scissor(ne.copy(lt).multiplyScalar(re).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(M){v.setScissorTest(Be=M)},this.setOpaqueSort=function(M){Pe=M},this.setTransparentSort=function(M){De=M},this.getClearColor=function(M){return M.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(M=!0,z=!0,N=!0){let D=0;if(M){let F=!1;if(B!==null){const se=B.texture.format;F=g.has(se)}if(F){const se=B.texture.type,de=u.has(se),ue=Ue.getClearColor(),Se=Ue.getClearAlpha(),ae=ue.r,ye=ue.g,Ee=ue.b;de?(x[0]=ae,x[1]=ye,x[2]=Ee,x[3]=Se,k.clearBufferuiv(k.COLOR,0,x)):(S[0]=ae,S[1]=ye,S[2]=Ee,S[3]=Se,k.clearBufferiv(k.COLOR,0,S))}else D|=k.COLOR_BUFFER_BIT}z&&(D|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),N&&(D|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D!==0&&k.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),O=M},this.dispose=function(){n.removeEventListener("webglcontextlost",nt,!1),n.removeEventListener("webglcontextrestored",Xe,!1),n.removeEventListener("webglcontextcreationerror",hn,!1),Ue.dispose(),ve.dispose(),me.dispose(),X.dispose(),ce.dispose(),ee.dispose(),xe.dispose(),ie.dispose(),pe.dispose(),we.dispose(),we.removeEventListener("sessionstart",na),we.removeEventListener("sessionend",Mr),ni.stop()};function nt(M){M.preventDefault(),zp("WebGLRenderer: Context Lost."),I=!0}function Xe(){zp("WebGLRenderer: Context Restored."),I=!1;const M=G.autoReset,z=Ie.enabled,N=Ie.autoUpdate,D=Ie.needsUpdate,F=Ie.type;be(),G.autoReset=M,Ie.enabled=z,Ie.autoUpdate=N,Ie.needsUpdate=D,Ie.type=F}function hn(M){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Sn(M){const z=M.target;z.removeEventListener("dispose",Sn),Wt(z)}function Wt(M){an(M),X.remove(M)}function an(M){const z=X.get(M).programs;z!==void 0&&(z.forEach(function(N){pe.releaseProgram(N)}),M.isShaderMaterial&&pe.releaseShaderCache(M))}this.renderBufferDirect=function(M,z,N,D,F,se){z===null&&(z=Nt);const de=F.isMesh&&F.matrixWorld.determinantAffine()<0,ue=yi(M,z,N,D,F);v.setMaterial(D,de);let Se=N.index,ae=1;if(D.wireframe===!0){if(Se=J.getWireframeAttribute(N),Se===void 0)return;ae=2}const ye=N.drawRange,Ee=N.attributes.position;let Ae=ye.start*ae,ot=(ye.start+ye.count)*ae;se!==null&&(Ae=Math.max(Ae,se.start*ae),ot=Math.min(ot,(se.start+se.count)*ae)),Se!==null?(Ae=Math.max(Ae,0),ot=Math.min(ot,Se.count)):Ee!=null&&(Ae=Math.max(Ae,0),ot=Math.min(ot,Ee.count));const Rt=ot-Ae;if(Rt<0||Rt===1/0)return;xe.setup(F,D,ue,N,Se);let Tt,ct=fe;if(Se!==null&&(Tt=he.get(Se),ct=Q,ct.setIndex(Tt)),F.isMesh)D.wireframe===!0?(v.setLineWidth(D.wireframeLinewidth*Et()),ct.setMode(k.LINES)):ct.setMode(k.TRIANGLES);else if(F.isLine){let Kt=D.linewidth;Kt===void 0&&(Kt=1),v.setLineWidth(Kt*Et()),F.isLineSegments?ct.setMode(k.LINES):F.isLineLoop?ct.setMode(k.LINE_LOOP):ct.setMode(k.LINE_STRIP)}else F.isPoints?ct.setMode(k.POINTS):F.isSprite&&ct.setMode(k.TRIANGLES);if(F.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))ct.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Kt=F._multiDrawStarts,Me=F._multiDrawCounts,Mn=F._multiDrawCount,Ke=Se?he.get(Se).bytesPerElement:1,Dn=X.get(D).currentProgram.getUniforms();for(let ri=0;ri<Mn;ri++)Dn.setValue(k,"_gl_DrawID",ri),ct.render(Kt[ri]/Ke,Me[ri])}else if(F.isInstancedMesh)ct.renderInstances(Ae,Rt,F.count);else if(N.isInstancedBufferGeometry){const Kt=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,Me=Math.min(N.instanceCount,Kt);ct.renderInstances(Ae,Rt,Me)}else ct.render(Ae,Rt)};function Jr(M,z,N){M.transparent===!0&&M.side===Ci&&M.forceSinglePass===!1?(M.side=yn,M.needsUpdate=!0,Tr(M,z,N),M.side=vr,M.needsUpdate=!0,Tr(M,z,N),M.side=Ci):Tr(M,z,N)}this.compile=function(M,z,N=null){N===null&&(N=M),E=me.get(N),E.init(z),p.push(E),N.traverseVisible(function(F){F.isLight&&F.layers.test(z.layers)&&(E.pushLight(F),F.castShadow&&E.pushShadow(F))}),M!==N&&M.traverseVisible(function(F){F.isLight&&F.layers.test(z.layers)&&(E.pushLight(F),F.castShadow&&E.pushShadow(F))}),E.setupLights();const D=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const se=F.material;if(se)if(Array.isArray(se))for(let de=0;de<se.length;de++){const ue=se[de];Jr(ue,N,F),D.add(ue)}else Jr(se,N,F),D.add(se)}),E=p.pop(),D},this.compileAsync=function(M,z,N=null){const D=this.compile(M,z,N);return new Promise(F=>{function se(){if(D.forEach(function(de){X.get(de).currentProgram.isReady()&&D.delete(de)}),D.size===0){F(M);return}setTimeout(se,10)}tt.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let it=null;function Gn(M){it&&it(M)}function na(){ni.stop()}function Mr(){ni.start()}const ni=new xv;ni.setAnimationLoop(Gn),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(M){it=M,we.setAnimationLoop(M),M===null?ni.stop():ni.start()},we.addEventListener("sessionstart",na),we.addEventListener("sessionend",Mr),this.render=function(M,z){if(z!==void 0&&z.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;O!==null&&O.renderStart(M,z);const N=we.enabled===!0&&we.isPresenting===!0,D=b!==null&&(B===null||N)&&b.begin(P,B);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(z),z=we.getCamera()),M.isScene===!0&&M.onBeforeRender(P,M,z,B),E=me.get(M,p.length),E.init(z),E.state.textureUnits=K.getTextureUnits(),p.push(E),gt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),et.setFromProjectionMatrix(gt,fi,z.reversedDepth),We=this.localClippingEnabled,Ve=Le.init(this.clippingPlanes,We),A=ve.get(M,w.length),A.init(),w.push(A),we.enabled===!0&&we.isPresenting===!0){const de=P.xr.getDepthSensingMesh();de!==null&&Qr(de,z,-1/0,P.sortObjects)}Qr(M,z,0,P.sortObjects),A.finish(),P.sortObjects===!0&&A.sort(Pe,De,z.reversedDepth),dt=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,dt&&Ue.addToRenderList(A,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ve===!0&&Le.beginShadows();const F=E.state.shadowsArray;if(Ie.render(F,M,z),Ve===!0&&Le.endShadows(),(D&&b.hasRenderPass())===!1){const de=A.opaque,ue=A.transmissive;if(E.setupLights(),z.isArrayCamera){const Se=z.cameras;if(ue.length>0)for(let ae=0,ye=Se.length;ae<ye;ae++){const Ee=Se[ae];es(de,ue,M,Ee)}dt&&Ue.render(M);for(let ae=0,ye=Se.length;ae<ye;ae++){const Ee=Se[ae];ia(A,M,Ee,Ee.viewport)}}else ue.length>0&&es(de,ue,M,z),dt&&Ue.render(M),ia(A,M,z)}B!==null&&H===0&&(K.updateMultisampleRenderTarget(B),K.updateRenderTargetMipmap(B)),D&&b.end(P),M.isScene===!0&&M.onAfterRender(P,M,z),xe.resetDefaultState(),q=-1,j=null,p.pop(),p.length>0?(E=p[p.length-1],K.setTextureUnits(E.state.textureUnits),Ve===!0&&Le.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,w.pop(),w.length>0?A=w[w.length-1]:A=null,O!==null&&O.renderEnd()};function Qr(M,z,N,D){if(M.visible===!1)return;if(M.layers.test(z.layers)){if(M.isGroup)N=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(z);else if(M.isLightProbeGrid)E.pushLightProbeGrid(M);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||et.intersectsSprite(M)){D&&vt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(gt);const de=ee.update(M),ue=M.material;ue.visible&&A.push(M,de,ue,N,vt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||et.intersectsObject(M))){const de=ee.update(M),ue=M.material;if(D&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),vt.copy(M.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),vt.copy(de.boundingSphere.center)),vt.applyMatrix4(M.matrixWorld).applyMatrix4(gt)),Array.isArray(ue)){const Se=de.groups;for(let ae=0,ye=Se.length;ae<ye;ae++){const Ee=Se[ae],Ae=ue[Ee.materialIndex];Ae&&Ae.visible&&A.push(M,de,Ae,N,vt.z,Ee)}}else ue.visible&&A.push(M,de,ue,N,vt.z,null)}}const se=M.children;for(let de=0,ue=se.length;de<ue;de++)Qr(se[de],z,N,D)}function ia(M,z,N,D){const{opaque:F,transmissive:se,transparent:de}=M;E.setupLightsView(N),Ve===!0&&Le.setGlobalState(P.clippingPlanes,N),D&&v.viewport(te.copy(D)),F.length>0&&Er(F,z,N),se.length>0&&Er(se,z,N),de.length>0&&Er(de,z,N),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function es(M,z,N,D){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[D.id]===void 0){const Ae=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[D.id]=new gi(1,1,{generateMipmaps:!0,type:Ae?Bi:bn,minFilter:kr,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const se=E.state.transmissionRenderTarget[D.id],de=D.viewport||te;se.setSize(de.z*P.transmissionResolutionScale,de.w*P.transmissionResolutionScale);const ue=P.getRenderTarget(),Se=P.getActiveCubeFace(),ae=P.getActiveMipmapLevel();P.setRenderTarget(se),P.getClearColor(ze),Oe=P.getClearAlpha(),Oe<1&&P.setClearColor(16777215,.5),P.clear(),dt&&Ue.render(N);const ye=P.toneMapping;P.toneMapping=mi;const Ee=D.viewport;if(D.viewport!==void 0&&(D.viewport=void 0),E.setupLightsView(D),Ve===!0&&Le.setGlobalState(P.clippingPlanes,D),Er(M,N,D),K.updateMultisampleRenderTarget(se),K.updateRenderTargetMipmap(se),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let ot=0,Rt=z.length;ot<Rt;ot++){const Tt=z[ot],{object:ct,geometry:Kt,material:Me,group:Mn}=Tt;if(Me.side===Ci&&ct.layers.test(D.layers)){const Ke=Me.side;Me.side=yn,Me.needsUpdate=!0,ra(ct,N,D,Kt,Me,Mn),Me.side=Ke,Me.needsUpdate=!0,Ae=!0}}Ae===!0&&(K.updateMultisampleRenderTarget(se),K.updateRenderTargetMipmap(se))}P.setRenderTarget(ue,Se,ae),P.setClearColor(ze,Oe),Ee!==void 0&&(D.viewport=Ee),P.toneMapping=ye}function Er(M,z,N){const D=z.isScene===!0?z.overrideMaterial:null;for(let F=0,se=M.length;F<se;F++){const de=M[F],{object:ue,geometry:Se,group:ae}=de;let ye=de.material;ye.allowOverride===!0&&D!==null&&(ye=D),ue.layers.test(N.layers)&&ra(ue,z,N,Se,ye,ae)}}function ra(M,z,N,D,F,se){M.onBeforeRender(P,z,N,D,F,se),M.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(P,z,N,D,M,se),F.transparent===!0&&F.side===Ci&&F.forceSinglePass===!1?(F.side=yn,F.needsUpdate=!0,P.renderBufferDirect(N,z,D,F,M,se),F.side=vr,F.needsUpdate=!0,P.renderBufferDirect(N,z,D,F,M,se),F.side=Ci):P.renderBufferDirect(N,z,D,F,M,se),M.onAfterRender(P,z,N,D,F,se)}function Tr(M,z,N){z.isScene!==!0&&(z=Nt);const D=X.get(M),F=E.state.lights,se=E.state.shadowsArray,de=F.state.version,ue=pe.getParameters(M,F.state,se,z,N,E.state.lightProbeGridArray),Se=pe.getProgramCacheKey(ue);let ae=D.programs;D.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?z.environment:null,D.fog=z.fog;const ye=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;D.envMap=ce.get(M.envMap||D.environment,ye),D.envMapRotation=D.environment!==null&&M.envMap===null?z.environmentRotation:M.envMapRotation,ae===void 0&&(M.addEventListener("dispose",Sn),ae=new Map,D.programs=ae);let Ee=ae.get(Se);if(Ee!==void 0){if(D.currentProgram===Ee&&D.lightsStateVersion===de)return aa(M,ue),Ee}else ue.uniforms=pe.getUniforms(M),O!==null&&M.isNodeMaterial&&O.build(M,N,ue),M.onBeforeCompile(ue,P),Ee=pe.acquireProgram(ue,Se),ae.set(Se,Ee),D.uniforms=ue.uniforms;const Ae=D.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ae.clippingPlanes=Le.uniform),aa(M,ue),D.needsLights=po(M),D.lightsStateVersion=de,D.needsLights&&(Ae.ambientLightColor.value=F.state.ambient,Ae.lightProbe.value=F.state.probe,Ae.directionalLights.value=F.state.directional,Ae.directionalLightShadows.value=F.state.directionalShadow,Ae.spotLights.value=F.state.spot,Ae.spotLightShadows.value=F.state.spotShadow,Ae.rectAreaLights.value=F.state.rectArea,Ae.ltc_1.value=F.state.rectAreaLTC1,Ae.ltc_2.value=F.state.rectAreaLTC2,Ae.pointLights.value=F.state.point,Ae.pointLightShadows.value=F.state.pointShadow,Ae.hemisphereLights.value=F.state.hemi,Ae.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ae.spotLightMatrix.value=F.state.spotLightMatrix,Ae.spotLightMap.value=F.state.spotLightMap,Ae.pointShadowMatrix.value=F.state.pointShadowMatrix),D.lightProbeGrid=E.state.lightProbeGridArray.length>0,D.currentProgram=Ee,D.uniformsList=null,Ee}function sa(M){if(M.uniformsList===null){const z=M.currentProgram.getUniforms();M.uniformsList=gl.seqWithValue(z.seq,M.uniforms)}return M.uniformsList}function aa(M,z){const N=X.get(M);N.outputColorSpace=z.outputColorSpace,N.batching=z.batching,N.batchingColor=z.batchingColor,N.instancing=z.instancing,N.instancingColor=z.instancingColor,N.instancingMorph=z.instancingMorph,N.skinning=z.skinning,N.morphTargets=z.morphTargets,N.morphNormals=z.morphNormals,N.morphColors=z.morphColors,N.morphTargetsCount=z.morphTargetsCount,N.numClippingPlanes=z.numClippingPlanes,N.numIntersection=z.numClipIntersection,N.vertexAlphas=z.vertexAlphas,N.vertexTangents=z.vertexTangents,N.toneMapping=z.toneMapping}function ii(M,z){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;_.setFromMatrixPosition(z.matrixWorld);for(let N=0,D=M.length;N<D;N++){const F=M[N];if(F.texture!==null&&F.boundingBox.containsPoint(_))return F}return null}function yi(M,z,N,D,F){z.isScene!==!0&&(z=Nt),K.resetTextureUnits();const se=z.fog,de=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?z.environment:null,ue=B===null?P.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ye.workingColorSpace,Se=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap,ae=ce.get(D.envMap||de,Se),ye=D.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Ee=!!N.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),Ae=!!N.morphAttributes.position,ot=!!N.morphAttributes.normal,Rt=!!N.morphAttributes.color;let Tt=mi;D.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Tt=P.toneMapping);const ct=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Kt=ct!==void 0?ct.length:0,Me=X.get(D),Mn=E.state.lights;if(Ve===!0&&(We===!0||M!==j)){const ft=M===j&&D.id===q;Le.setState(D,M,ft)}let Ke=!1;D.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Mn.state.version||Me.outputColorSpace!==ue||F.isBatchedMesh&&Me.batching===!1||!F.isBatchedMesh&&Me.batching===!0||F.isBatchedMesh&&Me.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Me.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Me.instancing===!1||!F.isInstancedMesh&&Me.instancing===!0||F.isSkinnedMesh&&Me.skinning===!1||!F.isSkinnedMesh&&Me.skinning===!0||F.isInstancedMesh&&Me.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Me.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Me.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Me.instancingMorph===!1&&F.morphTexture!==null||Me.envMap!==ae||D.fog===!0&&Me.fog!==se||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Le.numPlanes||Me.numIntersection!==Le.numIntersection)||Me.vertexAlphas!==ye||Me.vertexTangents!==Ee||Me.morphTargets!==Ae||Me.morphNormals!==ot||Me.morphColors!==Rt||Me.toneMapping!==Tt||Me.morphTargetsCount!==Kt||!!Me.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Ke=!0):(Ke=!0,Me.__version=D.version);let Dn=Me.currentProgram;Ke===!0&&(Dn=Tr(D,z,F),O&&D.isNodeMaterial&&O.onUpdateProgram(D,Dn,Me));let ri=!1,Gi=!1,ts=!1;const ut=Dn.getUniforms(),Pt=Me.uniforms;if(v.useProgram(Dn.program)&&(ri=!0,Gi=!0,ts=!0),D.id!==q&&(q=D.id,Gi=!0),Me.needsLights){const ft=ii(E.state.lightProbeGridArray,F);Me.lightProbeGrid!==ft&&(Me.lightProbeGrid=ft,Gi=!0)}if(ri||j!==M){v.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ut.setValue(k,"projectionMatrix",M.projectionMatrix),ut.setValue(k,"viewMatrix",M.matrixWorldInverse);const Wi=ut.map.cameraPosition;Wi!==void 0&&Wi.setValue(k,Ct.setFromMatrixPosition(M.matrixWorld)),R.logarithmicDepthBuffer&&ut.setValue(k,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&ut.setValue(k,"isOrthographic",M.isOrthographicCamera===!0),j!==M&&(j=M,Gi=!0,ts=!0)}if(Me.needsLights&&(Mn.state.directionalShadowMap.length>0&&ut.setValue(k,"directionalShadowMap",Mn.state.directionalShadowMap,K),Mn.state.spotShadowMap.length>0&&ut.setValue(k,"spotShadowMap",Mn.state.spotShadowMap,K),Mn.state.pointShadowMap.length>0&&ut.setValue(k,"pointShadowMap",Mn.state.pointShadowMap,K)),F.isSkinnedMesh){ut.setOptional(k,F,"bindMatrix"),ut.setOptional(k,F,"bindMatrixInverse");const ft=F.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),ut.setValue(k,"boneTexture",ft.boneTexture,K))}F.isBatchedMesh&&(ut.setOptional(k,F,"batchingTexture"),ut.setValue(k,"batchingTexture",F._matricesTexture,K),ut.setOptional(k,F,"batchingIdTexture"),ut.setValue(k,"batchingIdTexture",F._indirectTexture,K),ut.setOptional(k,F,"batchingColorTexture"),F._colorsTexture!==null&&ut.setValue(k,"batchingColorTexture",F._colorsTexture,K));const Hi=N.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0)&&U.update(F,N,Dn),(Gi||Me.receiveShadow!==F.receiveShadow)&&(Me.receiveShadow=F.receiveShadow,ut.setValue(k,"receiveShadow",F.receiveShadow)),(D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial)&&D.envMap===null&&z.environment!==null&&(Pt.envMapIntensity.value=z.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=kw()),Gi){if(ut.setValue(k,"toneMappingExposure",P.toneMappingExposure),Me.needsLights&&hc(Pt,ts),se&&D.fog===!0&&Re.refreshFogUniforms(Pt,se),Re.refreshMaterialUniforms(Pt,D,re,le,E.state.transmissionRenderTarget[M.id]),Me.needsLights&&Me.lightProbeGrid){const ft=Me.lightProbeGrid;Pt.probesSH.value=ft.texture,Pt.probesMin.value.copy(ft.boundingBox.min),Pt.probesMax.value.copy(ft.boundingBox.max),Pt.probesResolution.value.copy(ft.resolution)}gl.upload(k,sa(Me),Pt,K)}if(D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(gl.upload(k,sa(Me),Pt,K),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&ut.setValue(k,"center",F.center),ut.setValue(k,"modelViewMatrix",F.modelViewMatrix),ut.setValue(k,"normalMatrix",F.normalMatrix),ut.setValue(k,"modelMatrix",F.matrixWorld),D.uniformsGroups!==void 0){const ft=D.uniformsGroups;for(let Wi=0,ns=ft.length;Wi<ns;Wi++){const Mh=ft[Wi];ie.update(Mh,Dn),ie.bind(Mh,Dn)}}return Dn}function hc(M,z){M.ambientLightColor.needsUpdate=z,M.lightProbe.needsUpdate=z,M.directionalLights.needsUpdate=z,M.directionalLightShadows.needsUpdate=z,M.pointLights.needsUpdate=z,M.pointLightShadows.needsUpdate=z,M.spotLights.needsUpdate=z,M.spotLightShadows.needsUpdate=z,M.rectAreaLights.needsUpdate=z,M.hemisphereLights.needsUpdate=z}function po(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(M,z,N){const D=X.get(M);D.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,D.__autoAllocateDepthBuffer===!1&&(D.__useRenderToTexture=!1),X.get(M.texture).__webglTexture=z,X.get(M.depthTexture).__webglTexture=D.__autoAllocateDepthBuffer?void 0:N,D.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,z){const N=X.get(M);N.__webglFramebuffer=z,N.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(M,z=0,N=0){B=M,Y=z,H=N;let D=null,F=!1,se=!1;if(M){const ue=X.get(M);if(ue.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(k.FRAMEBUFFER,ue.__webglFramebuffer),te.copy(M.viewport),ne.copy(M.scissor),ke=M.scissorTest,v.viewport(te),v.scissor(ne),v.setScissorTest(ke),q=-1;return}else if(ue.__webglFramebuffer===void 0)K.setupRenderTarget(M);else if(ue.__hasExternalTextures)K.rebindTextures(M,X.get(M.texture).__webglTexture,X.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const ye=M.depthTexture;if(ue.__boundDepthTexture!==ye){if(ye!==null&&X.has(ye)&&(M.width!==ye.image.width||M.height!==ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(M)}}const Se=M.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(se=!0);const ae=X.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ae[z])?D=ae[z][N]:D=ae[z],F=!0):M.samples>0&&K.useMultisampledRTT(M)===!1?D=X.get(M).__webglMultisampledFramebuffer:Array.isArray(ae)?D=ae[N]:D=ae,te.copy(M.viewport),ne.copy(M.scissor),ke=M.scissorTest}else te.copy(Ce).multiplyScalar(re).floor(),ne.copy(lt).multiplyScalar(re).floor(),ke=Be;if(N!==0&&(D=L),v.bindFramebuffer(k.FRAMEBUFFER,D)&&v.drawBuffers(M,D),v.viewport(te),v.scissor(ne),v.setScissorTest(ke),F){const ue=X.get(M.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+z,ue.__webglTexture,N)}else if(se){const ue=z;for(let Se=0;Se<M.textures.length;Se++){const ae=X.get(M.textures[Se]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Se,ae.__webglTexture,N,ue)}}else if(M!==null&&N!==0){const ue=X.get(M.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ue.__webglTexture,N)}q=-1},this.readRenderTargetPixels=function(M,z,N,D,F,se,de,ue=0){if(!(M&&M.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=X.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&de!==void 0&&(Se=Se[de]),Se){v.bindFramebuffer(k.FRAMEBUFFER,Se);try{const ae=M.textures[ue],ye=ae.format,Ee=ae.type;if(M.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ue),!R.textureFormatReadable(ye)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(Ee)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=M.width-D&&N>=0&&N<=M.height-F&&k.readPixels(z,N,D,F,ge.convert(ye),ge.convert(Ee),se)}finally{const ae=B!==null?X.get(B).__webglFramebuffer:null;v.bindFramebuffer(k.FRAMEBUFFER,ae)}}},this.readRenderTargetPixelsAsync=async function(M,z,N,D,F,se,de,ue=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=X.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&de!==void 0&&(Se=Se[de]),Se)if(z>=0&&z<=M.width-D&&N>=0&&N<=M.height-F){v.bindFramebuffer(k.FRAMEBUFFER,Se);const ae=M.textures[ue],ye=ae.format,Ee=ae.type;if(M.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ue),!R.textureFormatReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ae),k.bufferData(k.PIXEL_PACK_BUFFER,se.byteLength,k.STREAM_READ),k.readPixels(z,N,D,F,ge.convert(ye),ge.convert(Ee),0);const ot=B!==null?X.get(B).__webglFramebuffer:null;v.bindFramebuffer(k.FRAMEBUFFER,ot);const Rt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await iS(k,Rt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ae),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,se),k.deleteBuffer(Ae),k.deleteSync(Rt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,z=null,N=0){const D=Math.pow(2,-N),F=Math.floor(M.image.width*D),se=Math.floor(M.image.height*D),de=z!==null?z.x:0,ue=z!==null?z.y:0;K.setTexture2D(M,0),k.copyTexSubImage2D(k.TEXTURE_2D,N,0,0,de,ue,F,se),v.unbindTexture()},this.copyTextureToTexture=function(M,z,N=null,D=null,F=0,se=0){let de,ue,Se,ae,ye,Ee,Ae,ot,Rt;const Tt=M.isCompressedTexture?M.mipmaps[se]:M.image;if(N!==null)de=N.max.x-N.min.x,ue=N.max.y-N.min.y,Se=N.isBox3?N.max.z-N.min.z:1,ae=N.min.x,ye=N.min.y,Ee=N.isBox3?N.min.z:0;else{const Pt=Math.pow(2,-F);de=Math.floor(Tt.width*Pt),ue=Math.floor(Tt.height*Pt),M.isDataArrayTexture?Se=Tt.depth:M.isData3DTexture?Se=Math.floor(Tt.depth*Pt):Se=1,ae=0,ye=0,Ee=0}D!==null?(Ae=D.x,ot=D.y,Rt=D.z):(Ae=0,ot=0,Rt=0);const ct=ge.convert(z.format),Kt=ge.convert(z.type);let Me;z.isData3DTexture?(K.setTexture3D(z,0),Me=k.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(K.setTexture2DArray(z,0),Me=k.TEXTURE_2D_ARRAY):(K.setTexture2D(z,0),Me=k.TEXTURE_2D),v.activeTexture(k.TEXTURE0),v.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,z.flipY),v.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),v.pixelStorei(k.UNPACK_ALIGNMENT,z.unpackAlignment);const Mn=v.getParameter(k.UNPACK_ROW_LENGTH),Ke=v.getParameter(k.UNPACK_IMAGE_HEIGHT),Dn=v.getParameter(k.UNPACK_SKIP_PIXELS),ri=v.getParameter(k.UNPACK_SKIP_ROWS),Gi=v.getParameter(k.UNPACK_SKIP_IMAGES);v.pixelStorei(k.UNPACK_ROW_LENGTH,Tt.width),v.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Tt.height),v.pixelStorei(k.UNPACK_SKIP_PIXELS,ae),v.pixelStorei(k.UNPACK_SKIP_ROWS,ye),v.pixelStorei(k.UNPACK_SKIP_IMAGES,Ee);const ts=M.isDataArrayTexture||M.isData3DTexture,ut=z.isDataArrayTexture||z.isData3DTexture;if(M.isDepthTexture){const Pt=X.get(M),Hi=X.get(z),ft=X.get(Pt.__renderTarget),Wi=X.get(Hi.__renderTarget);v.bindFramebuffer(k.READ_FRAMEBUFFER,ft.__webglFramebuffer),v.bindFramebuffer(k.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let ns=0;ns<Se;ns++)ts&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,X.get(M).__webglTexture,F,Ee+ns),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,X.get(z).__webglTexture,se,Rt+ns)),k.blitFramebuffer(ae,ye,de,ue,Ae,ot,de,ue,k.DEPTH_BUFFER_BIT,k.NEAREST);v.bindFramebuffer(k.READ_FRAMEBUFFER,null),v.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(F!==0||M.isRenderTargetTexture||X.has(M)){const Pt=X.get(M),Hi=X.get(z);v.bindFramebuffer(k.READ_FRAMEBUFFER,Z),v.bindFramebuffer(k.DRAW_FRAMEBUFFER,V);for(let ft=0;ft<Se;ft++)ts?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Pt.__webglTexture,F,Ee+ft):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Pt.__webglTexture,F),ut?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Hi.__webglTexture,se,Rt+ft):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Hi.__webglTexture,se),F!==0?k.blitFramebuffer(ae,ye,de,ue,Ae,ot,de,ue,k.COLOR_BUFFER_BIT,k.NEAREST):ut?k.copyTexSubImage3D(Me,se,Ae,ot,Rt+ft,ae,ye,de,ue):k.copyTexSubImage2D(Me,se,Ae,ot,ae,ye,de,ue);v.bindFramebuffer(k.READ_FRAMEBUFFER,null),v.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ut?M.isDataTexture||M.isData3DTexture?k.texSubImage3D(Me,se,Ae,ot,Rt,de,ue,Se,ct,Kt,Tt.data):z.isCompressedArrayTexture?k.compressedTexSubImage3D(Me,se,Ae,ot,Rt,de,ue,Se,ct,Tt.data):k.texSubImage3D(Me,se,Ae,ot,Rt,de,ue,Se,ct,Kt,Tt):M.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,se,Ae,ot,de,ue,ct,Kt,Tt.data):M.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,se,Ae,ot,Tt.width,Tt.height,ct,Tt.data):k.texSubImage2D(k.TEXTURE_2D,se,Ae,ot,de,ue,ct,Kt,Tt);v.pixelStorei(k.UNPACK_ROW_LENGTH,Mn),v.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ke),v.pixelStorei(k.UNPACK_SKIP_PIXELS,Dn),v.pixelStorei(k.UNPACK_SKIP_ROWS,ri),v.pixelStorei(k.UNPACK_SKIP_IMAGES,Gi),se===0&&z.generateMipmaps&&k.generateMipmap(Me),v.unbindTexture()},this.initRenderTarget=function(M){X.get(M).__webglFramebuffer===void 0&&K.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?K.setTextureCube(M,0):M.isData3DTexture?K.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?K.setTexture2DArray(M,0):K.setTexture2D(M,0),v.unbindTexture()},this.resetState=function(){Y=0,H=0,B=null,v.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ye._getUnpackColorSpace()}}function zw({isFullScreenLanding:t=!0,onEnterPortfolio:e}){const n=je.useRef(null),[i,r]=je.useState("green"),[s,a]=je.useState(!0),[o,l]=je.useState(""),[c,f]=je.useState(["COMMODORE PET 8296 DEVOPS OS v5.0 (CMATRIX EDITION)",'TYPE COMMANDS ON YOUR KEYBOARD ("skills", "projects", "status", "clear"):',""]),h=je.useRef(e);h.current=e;const d=je.useRef(i);d.current=i;const m=je.useRef(o);m.current=o;const y=je.useRef(c);y.current=c;const T=je.useRef(s);T.current=s;const g=je.useRef(null),u=je.useRef(null),x=je.useRef(null),S=(_=!1)=>{if(T.current)try{const A=window.AudioContext||window.webkitAudioContext;if(!A)return;const E=new A;E.state==="suspended"&&E.resume();const w=E.createOscillator(),p=E.createGain();w.type=_?"sawtooth":"square";const b=_?240:340+Math.random()*80;w.frequency.setValueAtTime(b,E.currentTime),w.frequency.exponentialRampToValueAtTime(110,E.currentTime+(_?.07:.035)),p.gain.setValueAtTime(.12,E.currentTime),p.gain.exponentialRampToValueAtTime(.001,E.currentTime+(_?.07:.035)),w.connect(p),p.connect(E.destination),w.start(),w.stop(E.currentTime+(_?.08:.04))}catch{}};return je.useEffect(()=>{const _=n.current;if(!_)return;let A=_.clientWidth||window.innerWidth,E=_.clientHeight||window.innerHeight;const w=new _S,p=new An(37,A/E,.1,100),b=new W(0,.2,5.75),P=new W(0,.3,6.65);p.position.copy(b);const I=new Bw({antialias:!0,alpha:!0,powerPreference:"high-performance"});I.setSize(A,E),I.setPixelRatio(Math.min(window.devicePixelRatio,2)),I.shadowMap.enabled=!0,I.shadowMap.type=ka,_.appendChild(I.domElement);const O=document.createElement("canvas");O.width=1024,O.height=768;const L=O.getContext("2d"),Z=new tm(O);Z.minFilter=Gt,Z.magFilter=Gt;const V=new Rr({color:1449518,roughness:.42,metalness:.28}),Y=new Rr({color:527638,roughness:.65,metalness:.15}),H=new er({map:Z,toneMapped:!1}),B=new Rr({color:2371652,roughness:.5,metalness:.2}),q=new Rr({color:16717825,roughness:.35,metalness:.35}),j=new Rr({color:1096065,roughness:.35,metalness:.35}),te=new Rr({color:9741240,roughness:.2,metalness:.85}),ne=new ba;ne.scale.set(.82,.82,.82),w.add(ne);const ke=new $s(4.8,4.2),ze=document.createElement("canvas");ze.width=256,ze.height=256;const Oe=ze.getContext("2d"),$=Oe.createRadialGradient(128,128,20,128,128,120);$.addColorStop(0,"rgba(0,0,0,0.92)"),$.addColorStop(.5,"rgba(0,0,0,0.45)"),$.addColorStop(1,"rgba(0,0,0,0)"),Oe.fillStyle=$,Oe.fillRect(0,0,256,256);const le=new tm(ze),re=new er({map:le,transparent:!0,opacity:.82,depthWrite:!1}),Pe=new rt(ke,re);Pe.rotation.x=-Math.PI/2,Pe.position.set(0,-1.18,.2),ne.add(Pe);const De=new zt(3.6,.55,3.2),Ce=new rt(De,V);Ce.position.set(0,-.9,.2),Ce.castShadow=!0,Ce.receiveShadow=!0,ne.add(Ce);const lt=new hh(.12,.12,.06,16),Be=new Rr({color:329744,roughness:.9});[[-1.6,-1.19,1.4],[1.6,-1.19,1.4],[-1.6,-1.19,-1.2],[1.6,-1.19,-1.2]].forEach(([N,D,F])=>{const se=new rt(lt,Be);se.position.set(N,D,F),ne.add(se)});const et=new zt(3.4,.28,1.4),Ve=new rt(et,V);Ve.position.set(0,-.73,1.1),Ve.rotation.x=.16,Ve.castShadow=!0,Ve.receiveShadow=!0,ne.add(Ve);const We=4,gt=12,Ct=new zt(.18,.12,.18),vt=[];for(let N=0;N<We;N++)for(let D=0;D<gt;D++){const F=N===2&&D===gt-1,se=N===3&&D>=4&&D<=7,de=N===0&&D===0;if(se&&D>4)continue;let ue;if(se){const Ee=new zt(.85,.12,.18);ue=new rt(Ee,B)}else ue=new rt(Ct,F?q:de?j:B);const Se=se?0:(D-(gt-1)/2)*.24,ae=.65+N*.24,ye=-.64-N*.035;ue.position.set(Se,ye,ae),ue.rotation.x=.16,ue.userData={originalY:ye,depressTimer:0,isEnter:F},ne.add(ue),vt.push(ue)}g.current=(N=!1)=>{if(N){const D=vt.find(F=>F.userData.isEnter);D&&(D.userData.depressTimer=8)}else{const D=vt[Math.floor(Math.random()*vt.length)];D&&(D.userData.depressTimer=6)}};const Nt=new zt(3.2,2.3,2.2),dt=new rt(Nt,V);dt.position.set(0,.55,-.2),dt.castShadow=!0,ne.add(dt);for(let N=0;N<6;N++){const D=new zt(2.4,.04,.04),F=new rt(D,Y);F.position.set(0,1.2-N*.14,-1.31),ne.add(F)}const Et=new zt(2.95,2.05,.2),k=new rt(Et,Y);k.position.set(0,.55,.9),ne.add(k);const $t=new $s(2.68,1.84),tt=new rt($t,H);tt.position.set(0,.55,1.01),ne.add(tt);const R=new zt(2.95,.11,.06),v=new rt(R,Y);v.position.set(0,1.51,1.03),ne.add(v);const G=new rt(R,Y);G.position.set(0,-.41,1.03),ne.add(G);const X=new zt(.14,2.05,.06),K=new rt(X,Y);K.position.set(-1.41,.55,1.03),ne.add(K);const ce=new rt(X,Y);ce.position.set(1.41,.55,1.03),ne.add(ce);const he=new zt(1.2,.22,.1),J=new rt(he,Y);J.position.set(-.85,-.88,1.76),ne.add(J);const ee=new zt(.3,.06,.02),pe=new rt(ee,te);pe.position.set(-1.25,-.84,1.82),ne.add(pe);const Re=new rt(ee,te);Re.position.set(-1.25,-.93,1.82),ne.add(Re);const ve=new zt(.7,.03,.02),me=new rt(ve,new er({color:197898}));me.position.set(-.75,-.84,1.82),ne.add(me);const Le=new rt(ve,new er({color:197898}));Le.position.set(-.75,-.93,1.82),ne.add(Le);const Ie=new ph(.032,16,16),Ue=new rt(Ie,new er({color:1096065}));Ue.position.set(-.35,-.84,1.82),ne.add(Ue);const U=new rt(Ie,new er({color:16717825}));U.position.set(-.35,-.93,1.82),ne.add(U);const fe=new zt(1,.14,.02),Q=new rt(fe,te);Q.position.set(.85,-.88,1.78),ne.add(Q);const ge=new VS(16777215,.95);w.add(ge);const xe=new pu(65382,2);xe.position.set(4,5,4),xe.castShadow=!0,w.add(xe);const ie=new pu(62206,1.3);ie.position.set(-4,3,2),w.add(ie);const be=new pu(16777215,1);be.position.set(0,6,-3),w.add(be);const we=new BS(65382,2.4,4.4);we.position.set(0,.6,1.3),w.add(we);let nt=!1,Xe={x:0,y:0},hn={x:0,y:0},Sn=0,Wt={x:0,y:0},an={x:.05,y:-.1},Jr={x:0,y:0},it=0,Gn=!1;const na=Array(32).fill(0).map(()=>Math.floor(Math.random()*768)),Mr="0123456789ABCDEF!@#$%^&*<>[]{}/\\~+=µ§λ∆¥¢";x.current=()=>{it=0,Gn=!1};const ni=N=>{nt=!0,Xe={x:N.clientX,y:N.clientY},hn={x:N.clientX,y:N.clientY},Sn=Date.now(),Wt={x:0,y:0}},Qr=N=>{const D=_.getBoundingClientRect(),F=(N.clientX-D.left)/D.width-.5,se=(N.clientY-D.top)/D.height-.5;if(Jr={x:F*.28,y:se*.2},!nt)return;const de=N.clientX-Xe.x,ue=N.clientY-Xe.y;Wt.y=de*.007,Wt.x=ue*.007,an.y+=Wt.y,an.x+=Wt.x,an.x=Math.max(-.45,Math.min(.5,an.x)),Xe={x:N.clientX,y:N.clientY}},ia=N=>{nt=!1;const D=Math.hypot(N.clientX-hn.x,N.clientY-hn.y),F=Date.now()-Sn;D<10&&F<500&&(!Gn&&it<550?(it=560,Gn=!0,S(!0)):(S(!0),h.current&&h.current()))};let es={x:0,y:0},Er=0;const ra=N=>{N.touches.length===1&&(nt=!0,Xe={x:N.touches[0].clientX,y:N.touches[0].clientY},es={x:N.touches[0].clientX,y:N.touches[0].clientY},Er=Date.now(),Wt={x:0,y:0})},Tr=N=>{if(!nt||N.touches.length!==1)return;const D=N.touches[0].clientX-Xe.x,F=N.touches[0].clientY-Xe.y;Wt.y=D*.007,Wt.x=F*.007,an.y+=Wt.y,an.x+=Wt.x,an.x=Math.max(-.45,Math.min(.5,an.x)),Xe={x:N.touches[0].clientX,y:N.touches[0].clientY}},sa=N=>{if(nt=!1,N.changedTouches&&N.changedTouches.length>0){const D=N.changedTouches[0],F=Math.hypot(D.clientX-es.x,D.clientY-es.y),se=Date.now()-Er;F<14&&se<500&&(!Gn&&it<550?(it=560,Gn=!0,S(!0)):(S(!0),h.current&&h.current()))}};_.addEventListener("mousedown",ni),window.addEventListener("mousemove",Qr),window.addEventListener("mouseup",ia),_.addEventListener("touchstart",ra,{passive:!0}),window.addEventListener("touchmove",Tr,{passive:!0}),window.addEventListener("touchend",sa);const aa=N=>{if(!(N.target.tagName==="INPUT"||N.target.tagName==="TEXTAREA"))if(g.current&&g.current(N.key==="Enter"),N.key==="Enter"){if(S(!0),!Gn&&it<550){it=560,Gn=!0;return}const D=m.current.trim().toLowerCase();!D||D==="enter"||D==="start"||D==="portfolio"||D==="scroll"?h.current&&h.current():D==="help"?(f(F=>[...F,"COMMANDS: skills, projects, status, certs, enter, clear, replay"]),l("")):D==="replay"?(x.current&&x.current(),l("")):D==="skills"?(f(F=>[...F,"STACK: AWS (EKS), Kubernetes, Docker, Terraform, FastAPI, Next.js"]),l("")):D==="projects"?(f(F=>[...F,"PROJECTS: Career_Genie, hi_links, Cura-AI-Health"]),l("")):D==="status"?(f(F=>[...F,"STATUS: 100% Cluster Health · 99.9% Uptime"]),l("")):D==="clear"?(f(["COMMODORE PET 8296 DEVOPS OS v5.0",""]),l("")):(f(F=>[...F,`devops@GrayViper:~$ ${m.current}`,`Executed: "${D}"`]),l(""))}else N.key==="Backspace"?(S(!1),l(D=>D.slice(0,-1))):N.key.length===1&&!N.ctrlKey&&!N.metaKey&&(S(!1),l(D=>D+N.key))};window.addEventListener("keydown",aa),u.current=()=>{an={x:.05,y:-.1},Wt={x:0,y:0}};const ii=(N,D,F,se=.85)=>{if(D<F)return{text:"",isDone:!1,isTyping:!1,decryptTail:""};const de=Math.floor((D-F)*se);if(de>=N.length)return{text:N,isDone:!0,isTyping:!1,decryptTail:""};const ue=N.substring(0,de);let Se="";const ae=Math.min(2,N.length-de);for(let ye=0;ye<ae;ye++)Se+=Mr[(D*3+ye*7)%Mr.length];return{text:ue,isDone:!1,isTyping:!0,decryptTail:Se}};let yi=0;const hc=()=>{yi++,it++,it>=560&&(Gn=!0),!Gn&&it<550&&it%5===0&&(g.current&&g.current(!1),it%10===0&&S(!1));const N=d.current;let D="#00ff66",F="#38ef7d",se="#a3ff00";N==="amber"?(D="#ffb000",F="#ff8800",se="#fdb813"):N==="cyan"?(D="#00f2fe",F="#ff1801",se="#10b981"):N==="red"&&(D="#ff1801",F="#fdb813",se="#00f2fe"),we.color.set(D),xe.color.set(D),L.fillStyle="#02050b",L.fillRect(0,0,1024,768),L.font='13px "Fira Code", monospace',L.fillStyle=`${D}12`;for(let ae=0;ae<32;ae++){const ye=32*ae+14,Ee=na[ae],Ae=Mr[(yi+ae*7)%Mr.length];L.fillText(Ae,ye,Ee),na[ae]=Ee+10>768?0:Ee+10}L.fillStyle=`${D}0e`;for(let ae=0;ae<768;ae+=8)L.fillRect(0,ae,1024,3);L.strokeStyle=`${D}45`,L.lineWidth=10,L.strokeRect(10,10,1004,748);const de=ii("*** COMMODORE PET 8296 DEVOPS OS (CMATRIX) // 64K RAM READY ***",it,15,.95);if(it>=15&&(L.fillStyle=`${D}24`,L.fillRect(20,20,984,52),L.strokeStyle=`${D}60`,L.lineWidth=1.5,L.strokeRect(20,20,984,52),L.fillStyle=D,L.font='bold 21px "Fira Code", monospace',L.fillText(de.text,36,54),de.isTyping&&(L.fillStyle="#ffffff",L.fillText(de.decryptTail+"█",36+L.measureText(de.text).width,54)),(de.isDone||it>=85)&&(L.fillStyle=se,L.font='bold 18px "Fira Code", monospace',L.fillText("● SYSTEM 100% HEALTHY",760,54))),it>=70){L.fillStyle="rgba(255, 255, 255, 0.04)",L.fillRect(20,82,984,114),L.strokeStyle=`${D}35`,L.strokeRect(20,82,984,114);const ae=ii("CHAKKA CHINNI KRISHNA",it,75,.85),ye=ii("(@GrayViper)",it,105,.85);L.fillStyle="#ffffff",L.font='bold 30px "Fira Code", monospace',L.fillText(ae.text,40,122),ae.isTyping&&(L.fillStyle=se,L.fillText(ae.decryptTail+"█",40+L.measureText(ae.text).width,122)),ae.isDone&&(L.fillStyle=F,L.font='bold 22px "Fira Code", monospace',L.fillText(ye.text,480,122),ye.isTyping&&(L.fillStyle="#ffffff",L.fillText(ye.decryptTail+"█",480+L.measureText(ye.text).width,122)));const Ee=ii("ROLE : DevOps Engineer · Cloud Infrastructure & Full-Stack Specialist",it,125,1);(Ee.text||Ee.isTyping)&&(L.fillStyle=D,L.font='20px "Fira Code", monospace',L.fillText(Ee.text,40,154),Ee.isTyping&&(L.fillStyle="#ffffff",L.fillText(Ee.decryptTail+"█",40+L.measureText(Ee.text).width,154)));const Ae=ii("EDU  : B.Tech CSE @ Lovely Professional University (CGPA 7.2)",it,185,1);(Ae.text||Ae.isTyping)&&(L.fillStyle="#cbd5e1",L.font='19px "Fira Code", monospace',L.fillText(Ae.text,40,182),Ae.isTyping&&(L.fillStyle="#ffffff",L.fillText(Ae.decryptTail+"█",40+L.measureText(Ae.text).width,182)))}const ue=["• AWS Cloud (EKS 1.30, EC2, S3, VPC, IAM)","• Kubernetes Cluster Management & Helm","• Terraform Infrastructure as Code (IaC)","• Docker Multi-Stage Builds & Optimization","• Prometheus Metrics & Grafana Dashboards","• Linux / Unix Administration & Bash Shell","• Zero-Downtime Rolling Release Strategies"],Se=["• GitHub Actions Automated CI/CD Pipelines","• ArgoCD GitOps Continuous Delivery","• FastAPI High-Performance Python APIs","• Next.js · React · TypeScript Frontends","• MongoDB Atlas & PostgreSQL Databases","• Agentic AI & Multi-Agent Systems (Xebia)","• RESTful APIs, JWT Auth & WebSockets"];if(it>=235&&(L.fillStyle="rgba(255, 255, 255, 0.02)",L.fillRect(20,206,482,336),L.strokeStyle=`${D}30`,L.strokeRect(20,206,482,336),L.fillStyle=D,L.font='bold 20px "Fira Code", monospace',L.fillText("⚡ [01] CLOUD, CONTAINERS & IaC",36,240),L.font='18px "Fira Code", monospace',ue.forEach((ae,ye)=>{const Ee=ii(ae,it,245+ye*24,1.1);(Ee.text||Ee.isTyping)&&(L.fillStyle=ye===0?se:ye===1?F:"#cbd5e1",L.fillText(Ee.text,36,280+ye*36),Ee.isTyping&&(L.fillStyle="#ffffff",L.fillText(Ee.decryptTail+"█",36+L.measureText(Ee.text).width,280+ye*36)))})),it>=250&&(L.fillStyle="rgba(255, 255, 255, 0.02)",L.fillRect(522,206,482,336),L.strokeStyle=`${D}30`,L.strokeRect(522,206,482,336),L.fillStyle=D,L.font='bold 20px "Fira Code", monospace',L.fillText("🚀 [02] CI/CD, DEV & AGENTIC AI",538,240),L.font='18px "Fira Code", monospace',Se.forEach((ae,ye)=>{const Ee=ii(ae,it,260+ye*24,1.1);(Ee.text||Ee.isTyping)&&(L.fillStyle=ye===0?se:ye===5?F:"#cbd5e1",L.fillText(Ee.text,538,280+ye*36),Ee.isTyping&&(L.fillStyle="#ffffff",L.fillText(Ee.decryptTail+"█",538+L.measureText(Ee.text).width,280+ye*36)))})),it>=430){L.fillStyle=`${D}18`,L.fillRect(20,552,984,60),L.strokeStyle=`${D}40`,L.strokeRect(20,552,984,60),L.fillStyle=se,L.font='bold 19px "Fira Code", monospace',L.fillText("● CLUSTER TELEMETRY:",36,588);const ae=ii("6/6 PODS RUNNING · 99.9% UPTIME · SLA 1.82s · GITOPS SYNCED",it,440,1.1);(ae.text||ae.isTyping)&&(L.fillStyle="#ffffff",L.font='18px "Fira Code", monospace',L.fillText(ae.text,280,588),ae.isTyping&&(L.fillStyle=se,L.fillText(ae.decryptTail+"█",280+L.measureText(ae.text).width,588)))}if(it>=500){if(L.fillStyle=`${D}24`,L.fillRect(20,624,984,114),L.strokeStyle=D,L.lineWidth=2.5,L.strokeRect(20,624,984,114),L.fillStyle=D,L.font='bold 22px "Fira Code", monospace',L.fillText(`devops@GrayViper:~$ ${m.current}`,40,666),Math.floor(yi/15)%2===0){const ae=L.measureText(`devops@GrayViper:~$ ${m.current}`).width;L.fillRect(44+ae,646,14,26)}Math.floor(yi/18)%2===0?L.fillStyle=D:L.fillStyle="#ffffff",L.font='bold 23px "Fira Code", monospace',L.fillText("▶ CLICK COMPUTER OR PRESS [ENTER] TO ACCESS FULL PORTFOLIO █",60,708)}Z.needsUpdate=!0,yi%24===0&&Ue.material.color.set(Math.random()>.35?1096065:339992),vt.forEach(ae=>{ae.userData.depressTimer>0?(ae.userData.depressTimer--,ae.position.y=ae.userData.originalY-.04):ae.position.y=ae.userData.originalY})};let po;const M=()=>{hc(),nt||(Wt.x*=.94,Wt.y*=.94,an.x+=Wt.x,an.y+=Wt.y);const N=window.scrollY||document.documentElement.scrollTop||0,D=Math.min(1,Math.max(0,N/450)),F=new W;F.lerpVectors(b,P,D),p.position.lerp(F,.08);const se=an.y+Jr.x+(nt?0:Math.sin(yi*.015)*.02),de=an.x-Jr.y;ne.rotation.y+=(se-ne.rotation.y)*.08,ne.rotation.x+=(de-ne.rotation.x)*.08,ne.position.y=-.06+Math.sin(yi*.02)*.025,I.render(w,p),po=requestAnimationFrame(M)};M();const z=()=>{_&&(A=_.clientWidth||window.innerWidth,E=_.clientHeight||window.innerHeight,p.aspect=A/E,p.aspect>1.8?p.fov=38:p.aspect<1?p.fov=48:p.fov=36,p.updateProjectionMatrix(),I.setSize(A,E))};return window.addEventListener("resize",z),z(),()=>{_.removeEventListener("mousedown",ni),window.removeEventListener("mousemove",Qr),window.removeEventListener("mouseup",ia),_.removeEventListener("touchstart",ra),window.removeEventListener("touchmove",Tr),window.removeEventListener("touchend",sa),window.removeEventListener("keydown",aa),window.removeEventListener("resize",z),cancelAnimationFrame(po),_&&I.domElement&&_.removeChild(I.domElement),I.dispose()}},[]),C.jsxs("div",{style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:[C.jsx("div",{ref:n,style:{width:"100%",height:"100%",cursor:t?"pointer":"grab",position:"relative",display:"flex",alignItems:"center",justifyContent:"center",userSelect:"none"},title:"Click to enter portfolio (or skip typing), or drag to rotate 3D computer in 360°!"}),C.jsxs("div",{style:{position:"absolute",right:"24px",bottom:"24px",zIndex:30,display:"flex",alignItems:"center",gap:"8px",background:"rgba(7, 10, 18, 0.75)",backdropFilter:"blur(16px)",border:"1px solid var(--border-subtle)",borderRadius:"12px",padding:"6px 10px",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.6)"},children:[C.jsxs("button",{onClick:()=>x.current&&x.current(),style:{background:"transparent",border:"none",color:"var(--terminal-green)",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",padding:"2px 6px",fontSize:"0.72rem",fontFamily:"var(--font-mono)",fontWeight:"700"},title:"Replay cmatrix Typewriter Sequence",children:[C.jsx(W0,{size:12})," Replay"]}),C.jsx("div",{style:{display:"flex",gap:"5px",paddingRight:"6px",borderRight:"1px solid var(--border-subtle)",borderLeft:"1px solid var(--border-subtle)",paddingLeft:"6px"},children:[{id:"green",color:"#00ff66",label:"Matrix Green"},{id:"amber",color:"#ffb000",label:"Amber Phosphor"},{id:"cyan",color:"#00f2fe",label:"Cyan Phosphor"},{id:"red",color:"#ff1801",label:"Red Phosphor"}].map(_=>C.jsx("button",{onClick:()=>{S(),r(_.id)},style:{width:"14px",height:"14px",borderRadius:"50%",background:_.color,border:i===_.id?"2px solid #fff":"none",cursor:"pointer",padding:0},title:_.label},_.id))}),C.jsx("button",{onClick:()=>a(!s),style:{background:"transparent",border:"none",color:s?"var(--terminal-green)":"var(--text-dim)",cursor:"pointer",display:"flex",alignItems:"center",padding:"2px"},title:s?"Mute Mechanical Key Clicks":"Enable Key Clicks",children:s?C.jsx(vy,{size:14}):C.jsx(xy,{size:14})}),C.jsx("button",{onClick:()=>u.current&&u.current(),style:{background:"transparent",border:"none",color:"var(--text-dim)",cursor:"pointer",display:"flex",alignItems:"center",padding:"2px"},title:"Reset 3D camera angle",children:C.jsx(hy,{size:13})})]})]})}function Vw(){const t=e=>{e&&e.preventDefault();const n=document.getElementById("skills");n&&n.scrollIntoView({behavior:"smooth"})};return C.jsxs("section",{id:"hero",style:{width:"100vw",height:"100vh",position:"relative",overflow:"hidden",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",background:"transparent"},children:[C.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100vw",height:"100vh",zIndex:10},children:C.jsx(zw,{isFullScreenLanding:!0,onEnterPortfolio:t})}),C.jsx("div",{onClick:t,style:{position:"absolute",bottom:"24px",left:"50%",transform:"translateX(-50%)",zIndex:30,display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",cursor:"pointer",background:"rgba(7, 10, 18, 0.75)",backdropFilter:"blur(16px)",border:"1px solid var(--border-subtle)",borderRadius:"9999px",padding:"8px 20px",boxShadow:"0 8px 30px rgba(0, 0, 0, 0.6)",transition:"all 0.25s"},onMouseEnter:e=>{e.currentTarget.style.borderColor="var(--cyber-cyan)",e.currentTarget.style.transform="translateX(-50%) translateY(-2px)"},onMouseLeave:e=>{e.currentTarget.style.borderColor="var(--border-subtle)",e.currentTarget.style.transform="translateX(-50%) translateY(0px)"},children:C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"0.78rem",fontFamily:"var(--font-mono)",color:"#fff",fontWeight:"700",letterSpacing:"0.04em"},children:[C.jsx("span",{style:{color:"var(--f1-yellow)"},children:"▼"}),C.jsx("span",{children:"SCROLL OR CLICK TO ENTER PORTFOLIO"}),C.jsx("span",{style:{color:"var(--f1-yellow)"},children:"▼"})]})})]})}function Gw(){const t=je.useRef(null);return je.useEffect(()=>{const e=t.current;if(!e)return;const n=e.getContext("2d");if(!n)return;let i,r=0,s=0,a=Math.min(window.devicePixelRatio||1,2),o=[],l=0,c=0,f={x:-1e3,y:-1e3},h=!1,d=0;const m=Array.from({length:28},(E,w)=>({t:Math.random(),speed:6e-4+Math.random()*.0012,size:1.5+Math.random()*2.5,alpha:.2+Math.random()*.7,color:w%3===0?"#38bdf8":w%3===1?"#2dd4bf":"#fbbf24",offset:(Math.random()-.5)*14})),y=()=>{const E=document.querySelector("main")||document.body,w=E.getBoundingClientRect(),p=window.scrollY||document.documentElement.scrollTop||0,b=w.top+p;r=E.clientWidth||window.innerWidth,s=E.scrollHeight||w.height,e.width=r*a,e.height=s*a,e.style.width=`${r}px`,e.style.height=`${s}px`;const P=[],I=j=>{if(!j)return null;const te=j.getBoundingClientRect();return{x:te.left+te.width/2-w.left,y:te.top+te.height/2+p-b}},O=document.getElementById("hero")||document.querySelector("section");let L=760;O&&(L=O.getBoundingClientRect().bottom+p-b-80),P.push({x:r*.5,y:Math.max(180,L)});const Z=document.querySelector("#skills .section-tag")||document.getElementById("skills");if(Z){const j=I(Z);j&&P.push(j)}const V=document.querySelectorAll('#skills .glass-card, #skills [style*="border-radius"]');if(V.length>=2){const j=I(V[0]),te=I(V[Math.min(3,V.length-1)]);j&&P.push(j),te&&P.push(te)}const Y=document.querySelectorAll('#projects .glass-card-web, #projects [class*="glass"]');if(Y&&Y.length>0)Y.forEach(j=>{const te=I(j);te&&P.push(te)});else{const j=document.getElementById("projects");if(j){const te=I(j);te&&P.push(te)}}const H=document.querySelector("#terminal .glass-card, #terminal")||document.getElementById("terminal");if(H){const j=I(H);j&&P.push(j)}const B=document.querySelectorAll('#certifications .glass-card-web, #certifications [class*="glass"]');if(B&&B.length>=2){const j=I(B[0]),te=I(B[B.length-1]);j&&P.push(j),te&&P.push(te)}const q=document.querySelector("#contact .glass-card, #contact form, #contact")||document.getElementById("contact");if(q){const j=I(q);j&&P.push(j)}if(P.push({x:r*.5,y:s-60}),P.length>=2){const j=[];for(let ne=0;ne<=140;ne++){const ke=ne/140,ze=P.length-1,Oe=ke*ze,$=Math.min(Math.floor(Oe),ze-1),le=Oe-$,re=P[Math.max(0,$-1)],Pe=P[$],De=P[Math.min(ze,$+1)],Ce=P[Math.min(ze,$+2)],lt=le*le,Be=lt*le,et=.5*(2*Pe.x+(-re.x+De.x)*le+(2*re.x-5*Pe.x+4*De.x-Ce.x)*lt+(-re.x+3*Pe.x-3*De.x+Ce.x)*Be),Ve=.5*(2*Pe.y+(-re.y+De.y)*le+(2*re.y-5*Pe.y+4*De.y-Ce.y)*lt+(-re.y+3*Pe.y-3*De.y+Ce.y)*Be);j.push({baseX:et,baseY:Ve,currX:et,currY:Ve,vx:0,vy:0,u:ke})}o=j}};y();const T=()=>{a=Math.min(window.devicePixelRatio||1,2),y()};window.addEventListener("resize",T),window.addEventListener("orientationchange",T);const g=new ResizeObserver(()=>{y()}),u=document.querySelector("main");u&&g.observe(u);const x=E=>{const p=(document.querySelector("main")||document.body).getBoundingClientRect(),b=window.scrollY||document.documentElement.scrollTop||0,P=p.top+b;f={x:E.clientX-p.left,y:E.clientY+b-P},h=!0},S=()=>{h=!1};window.addEventListener("mousemove",x,{passive:!0}),window.addEventListener("mouseleave",S);const _=()=>{const E=window.scrollY||document.documentElement.scrollTop||0,w=window.innerHeight,p=document.documentElement.scrollHeight-w,b=Math.max(0,(E-120)/(p-220));l=Math.min(1,Math.max(0,b))};window.addEventListener("scroll",_,{passive:!0}),_();const A=()=>{if(d+=.024,c+=(l-c)*.085,n.save(),n.scale(a,a),n.clearRect(0,0,r,s),o.length>2){const E=Math.floor(o.length*c);if(o.forEach((w,p)=>{const b=Math.sin(d*1.8+p*.18)*18,P=Math.cos(d*.9+p*.08)*12,I=Math.sin(d*3.2+p*.32)*4,O=b+P+I;let L=w.baseX+O,Z=w.baseY+Math.sin(d*1.4+p*.12)*6;if(h){const V=f.x-w.currX,Y=f.y-w.currY,H=Math.hypot(V,Y),B=220;if(H<B&&H>1){const q=(1-H/B)*48;L+=V/H*q,Z+=Y/H*q}}w.vx=(w.vx+(L-w.currX)*.12)*.82,w.vy=(w.vy+(Z-w.currY)*.12)*.82,w.currX+=w.vx,w.currY+=w.vy}),E>=2){const w=n.createLinearGradient(0,0,r,s);w.addColorStop(0,"#38bdf8"),w.addColorStop(.25,"#10b981"),w.addColorStop(.5,"#00f2fe"),w.addColorStop(.75,"#ff2a5f"),w.addColorStop(1,"#818cf8"),n.beginPath(),n.moveTo(o[0].currX,o[0].currY);for(let p=1;p<E;p++){const b=(o[p].currX+o[p-1].currX)/2,P=(o[p].currY+o[p-1].currY)/2;n.quadraticCurveTo(o[p-1].currX,o[p-1].currY,b,P)}n.strokeStyle=w,n.lineWidth=7,n.lineCap="round",n.lineJoin="round",n.shadowColor="#00f2fe",n.shadowBlur=18,n.globalAlpha=.45,n.stroke(),n.beginPath(),n.moveTo(o[0].currX,o[0].currY);for(let p=1;p<E;p++){const b=(o[p].currX+o[p-1].currX)/2,P=(o[p].currY+o[p-1].currY)/2;n.quadraticCurveTo(o[p-1].currX,o[p-1].currY,b,P)}if(n.strokeStyle="#ffffff",n.lineWidth=2.2,n.shadowColor="#38bdf8",n.shadowBlur=10,n.globalAlpha=.95,n.stroke(),E<o.length){const p=o[E-1];o[Math.max(0,E-2)];const b=n.createRadialGradient(p.currX,p.currY,2,p.currX,p.currY,26);b.addColorStop(0,"#ffffff"),b.addColorStop(.3,"#38bdf8"),b.addColorStop(.7,"rgba(0, 242, 254, 0.4)"),b.addColorStop(1,"rgba(0, 242, 254, 0)"),n.beginPath(),n.arc(p.currX,p.currY,26,0,Math.PI*2),n.fillStyle=b,n.globalAlpha=1,n.shadowColor="#00f2fe",n.shadowBlur=24,n.fill(),n.beginPath(),n.arc(p.currX,p.currY,4.5,0,Math.PI*2),n.fillStyle="#ffffff",n.shadowColor="#ffffff",n.shadowBlur=12,n.fill()}m.forEach(p=>{if(p.t=(p.t+p.speed)%1,p.t<c){const b=Math.floor(p.t*(o.length-1)),P=o[b];if(P){const I=P.currX+Math.sin(d*3+b)*p.offset,O=P.currY;n.beginPath(),n.arc(I,O,p.size,0,Math.PI*2),n.fillStyle=p.color,n.shadowColor=p.color,n.shadowBlur=8,n.globalAlpha=p.alpha*(.5+.5*Math.sin(d*4+p.t*10)),n.fill()}}})}}n.restore(),i=requestAnimationFrame(A)};return i=requestAnimationFrame(A),()=>{window.removeEventListener("resize",T),window.removeEventListener("orientationchange",T),window.removeEventListener("mousemove",x),window.removeEventListener("mouseleave",S),window.removeEventListener("scroll",_),g.disconnect(),cancelAnimationFrame(i)}},[]),C.jsx("canvas",{ref:t,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1,display:"block"},"aria-hidden":"true"})}function Hw(){const[t,e]=je.useState("all"),n=[{id:"all",label:"All Stack"},{id:"cloud",label:"Cloud & IaC"},{id:"cicd",label:"CI/CD & Linux"},{id:"dev",label:"Full-Stack & APIs"},{id:"data",label:"Observability & DBs"},{id:"ai",label:"Agentic AI & LLMs"}],i=[{name:"Kubernetes",cat:"cloud",level:"85%",icon:"☸️",desc:"AWS EKS clusters, Pod scheduling, Helm charts, ingress controllers, rolling updates",tag:"Orchestration"},{name:"Docker",cat:"cloud",level:"92%",icon:"🐳",desc:"Multi-stage Dockerfiles, image optimization, Trivy security scans, container networks",tag:"Containers"},{name:"AWS Cloud",cat:"cloud",level:"84%",icon:"☁️",desc:"EKS, EC2, S3, IAM policies, VPC networking, CloudWatch metrics & auto-scaling",tag:"Cloud"},{name:"Terraform",cat:"cloud",level:"82%",icon:"🏗️",desc:"Infrastructure as Code, modular configurations, remote S3 state & DynamoDB locking",tag:"IaC"},{name:"GitHub Actions",cat:"cicd",level:"90%",icon:"⚡",desc:"Automated CI/CD workflows, linting, unit testing, container build & deploy pipelines",tag:"CI/CD"},{name:"Linux & Shell Scripting",cat:"cicd",level:"88%",icon:"🐧",desc:"Bash scripting, system administration, process management, cron automation & permissions",tag:"OS & Scripting"},{name:"Git & GitOps",cat:"cicd",level:"90%",icon:"🐙",desc:"Git branching models, PR workflows, ArgoCD continuous delivery & commit hygiene",tag:"GitOps"},{name:"Postman",cat:"cicd",level:"88%",icon:"📮",desc:"API testing, automated collection runs, webhook integration & endpoint mocking",tag:"Testing"},{name:"FastAPI",cat:"dev",level:"88%",icon:"🚀",desc:"High-performance async Python REST APIs, Pydantic data validation & JWT auth",tag:"Backend"},{name:"Python",cat:"dev",level:"90%",icon:"🐍",desc:"Automation scripting, backend engineering, data modeling & AI integrations",tag:"Language"},{name:"React",cat:"dev",level:"92%",icon:"⚛️",desc:"Vite, hooks, component architecture, responsive UI & state management",tag:"Frontend"},{name:"Next.js",cat:"dev",level:"85%",icon:"▲",desc:"App Router, server-side rendering, API routes, TypeScript & Vercel deployment",tag:"Full-Stack"},{name:"TypeScript",cat:"dev",level:"84%",icon:"🔷",desc:"Type-safe full-stack engineering with Next.js and Drizzle ORM schemas",tag:"Type-Safety"},{name:"Flask",cat:"dev",level:"82%",icon:"🌶️",desc:"Python microservice backends, SQLite/MongoDB models, Jinja templating & auth",tag:"Microservices"},{name:"C++",cat:"dev",level:"80%",icon:"⚡",desc:"Object-oriented programming, data structures, algorithm efficiency & memory handling",tag:"Core"},{name:"Prometheus & Grafana",cat:"data",level:"82%",icon:"📊",desc:"Cluster metric scraping, telemetry dashboards, threshold alerts & monitoring",tag:"Observability"},{name:"MongoDB Atlas",cat:"data",level:"86%",icon:"🍃",desc:"NoSQL document schema design, Atlas cloud clusters, aggregation pipelines",tag:"NoSQL"},{name:"PostgreSQL & MySQL",cat:"data",level:"82%",icon:"🐬",desc:"Relational DB design, SQL queries, Drizzle ORM migrations & connection pooling",tag:"RDBMS"},{name:"Agentic AI Workflows",cat:"ai",level:"88%",icon:"🤖",desc:"Xebia industry training: designing multi-agent AI execution loops & LLM pipelines",tag:"Agentic AI"},{name:"Gemini API & LLMs",cat:"ai",level:"86%",icon:"✨",desc:"Context-augmented prompts, health diagnostics, structured JSON schemas & chat flows",tag:"GenAI"},{name:"Vercel & Render",cat:"ai",level:"90%",icon:"▲",desc:"Serverless deployment, edge functions, GitHub auto-deploy & environment config",tag:"Cloud Deploy"}],r=t==="all"?i:i.filter(s=>s.cat===t);return C.jsx("section",{id:"skills",style:{padding:"100px 0"},children:C.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[C.jsxs("div",{style:{textAlign:"center",marginBottom:"48px"},children:[C.jsx("span",{className:"section-tag section-tag-cyan",style:{marginBottom:"14px"},children:"⚡ DEVOPS & CLOUD INFRASTRUCTURE MATRIX"}),C.jsxs("h2",{style:{fontSize:"2.6rem",fontWeight:"900",letterSpacing:"-0.03em"},children:["Technical ",C.jsx("span",{className:"gradient-text",children:"Skills & Tooling"})]}),C.jsx("p",{style:{color:"var(--text-dim)",marginTop:"10px",fontSize:"0.96rem",maxWidth:"540px",margin:"10px auto 0"},children:"Engineered for high-availability cloud systems, containerization, CI/CD pipelines & full-stack platforms"})]}),C.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",justifyContent:"center",marginBottom:"40px"},children:n.map(s=>C.jsx("button",{onClick:()=>e(s.id),style:{background:t===s.id?"linear-gradient(135deg, var(--web-red) 0%, var(--web-red-dark) 100%)":"rgba(255,255,255,0.04)",color:t===s.id?"#ffffff":"var(--text-dim)",border:`1px solid ${t===s.id?"var(--web-red)":"var(--border-subtle)"}`,padding:"8px 20px",borderRadius:"10px",fontSize:"0.84rem",fontWeight:"700",cursor:"pointer",transition:"all 0.2s ease",fontFamily:"var(--font-body)",boxShadow:t===s.id?"0 4px 18px var(--web-red-glow)":"none"},children:s.label},s.id))}),C.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"18px"},children:r.map((s,a)=>C.jsxs("div",{className:"glass-card-web",style:{padding:"22px"},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[C.jsx("span",{style:{fontSize:"1.4rem",width:"40px",height:"40px",background:"rgba(255,42,95,0.1)",border:"1px solid rgba(255,42,95,0.25)",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center"},children:s.icon}),C.jsxs("div",{children:[C.jsx("h3",{style:{fontSize:"1.02rem",fontWeight:"800",color:"#fff"},children:s.name}),C.jsx("span",{style:{fontSize:"0.68rem",fontFamily:"var(--font-mono)",color:"var(--cyber-cyan)"},children:s.tag})]})]}),C.jsx("span",{style:{fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"var(--terminal-green)",fontWeight:"700",background:"rgba(16,185,129,0.1)",border:"1px solid rgba(16,185,129,0.25)",padding:"2px 8px",borderRadius:"6px"},children:s.level})]}),C.jsx("p",{style:{fontSize:"0.82rem",color:"var(--text-dim)",lineHeight:"1.6",marginBottom:"16px",minHeight:"44px"},children:s.desc}),C.jsx("div",{style:{height:"4px",width:"100%",background:"rgba(255,255,255,0.06)",borderRadius:"2px",overflow:"hidden"},children:C.jsx("div",{style:{height:"100%",width:s.level,background:"linear-gradient(90deg, var(--web-red) 0%, var(--cyber-cyan) 100%)",borderRadius:"2px",boxShadow:"0 0 8px var(--web-red-glow)"}})})]},a))})]})})}function Ww(){const t=[{id:"career-genie",title:"Career_Genie",subtitle:"AI Job & Scholarship Discovery Platform",date:"June 2026",status:"Live on Vercel & Render",statusColor:"#10b981",pipeline:"CI/CD Passed · Docker Ready",summary:"Full-stack web platform using React and Vite, integrating high-performance async REST APIs for job, internship, and scholarship discovery. Powered by FastAPI backend with MongoDB Atlas cloud database and JWT auth.",tags:["React","FastAPI","MongoDB Atlas","Vercel","Render","JWT Auth","CI/CD"],highlights:["Automated REST API integration for real-time job & scholarship discovery","JWT-based secure authentication & personalized application tracking","Multi-stage Docker deployment pipeline with Render backend & Vercel frontend"],githubUrl:"https://github.com/GrayViper/Carrier_Genie",demoUrl:null},{id:"hi-links",title:"hi_links",subtitle:"Scalable Full-Stack Link Management System",date:"May 2026",status:"Live on Vercel",statusColor:"#00f2fe",pipeline:"Next.js SSR · Neon Postgres · Drizzle",summary:"High-performance scalable web application built with Next.js, TypeScript, Drizzle ORM, and Neon PostgreSQL for structured link management, analytics, and instant sharing.",tags:["Next.js","TypeScript","Drizzle ORM","Neon Postgres","Vercel","Tailwind"],highlights:["Type-safe database operations with Drizzle ORM & serverless Postgres","Optimized server-side rendering (SSR) and edge-cached static pages","Automated Vercel CI/CD deployment on every GitHub repository push"],githubUrl:"https://github.com/GrayViper/hi_links",demoUrl:null},{id:"cura-ai-health",title:"Cura-AI-Health",subtitle:"AI-Powered Health Assistant & Diagnostic System",date:"August 2026",status:"Deployed & Live",statusColor:"#ff2a5f",pipeline:"Gemini 1.5 API · Flask · Chart.js",summary:"Full-stack AI health assistant application using Python Flask, SQLite, and Google Gemini API — providing real-time symptom analysis, interactive nutrition planning, and mental wellness tracking.",tags:["Python","Flask","Gemini API","SQLite","Chart.js","Bootstrap","Vercel"],highlights:["Context-aware symptom analysis & personalized diet generation via Gemini API","Crisis keyword detection, automated health risk alerts & Chart.js dashboards","Role-based authentication, admin dashboard, guest mode & session storage"],githubUrl:"https://github.com/GrayViper/cura-ai-health",demoUrl:"https://cura-ai-health.vercel.app"}];return C.jsx("section",{id:"projects",style:{padding:"100px 0"},children:C.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[C.jsxs("div",{style:{textAlign:"center",marginBottom:"48px"},children:[C.jsx("span",{className:"section-tag",style:{marginBottom:"14px"},children:"🚀 PRODUCTION SYSTEMS & REPOSITORIES"}),C.jsxs("h2",{style:{fontSize:"2.6rem",fontWeight:"900",letterSpacing:"-0.03em"},children:["Featured ",C.jsx("span",{className:"gradient-text",children:"DevOps Projects"})]}),C.jsxs("p",{style:{color:"var(--text-dim)",marginTop:"10px",fontSize:"0.96rem"},children:["Architected and deployed by ",C.jsx("a",{href:"https://github.com/GrayViper",target:"_blank",rel:"noreferrer",style:{color:"var(--cyber-cyan)",textDecoration:"none",fontWeight:"700"},children:"github.com/GrayViper"})]})]}),C.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(340px, 1fr))",gap:"26px"},children:t.map(e=>C.jsxs("div",{className:"glass-card-web",style:{padding:"28px",display:"flex",flexDirection:"column"},children:[C.jsx("div",{style:{height:"3px",background:`linear-gradient(90deg, ${e.statusColor}, var(--web-red))`,marginBottom:"20px",marginLeft:"-28px",marginRight:"-28px",marginTop:"-28px",borderRadius:"20px 20px 0 0"}}),C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"14px",flexWrap:"wrap",gap:"8px"},children:[C.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"5px",fontSize:"0.72rem",fontFamily:"var(--font-mono)",fontWeight:"700",color:e.statusColor,background:`${e.statusColor}18`,border:`1px solid ${e.statusColor}44`,padding:"3px 10px",borderRadius:"9999px"},children:[C.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:e.statusColor,display:"inline-block"}}),e.status]}),C.jsx("span",{style:{fontSize:"0.70rem",fontFamily:"var(--font-mono)",color:"var(--text-dim)",background:"rgba(255,255,255,0.04)",padding:"3px 8px",borderRadius:"6px",border:"1px solid var(--border-subtle)"},children:e.date})]}),C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"0.72rem",fontFamily:"var(--font-mono)",color:"var(--cyber-cyan)",background:"rgba(0, 242, 254, 0.08)",border:"1px solid rgba(0, 242, 254, 0.2)",padding:"4px 10px",borderRadius:"8px",marginBottom:"14px"},children:[C.jsx(ny,{size:13,color:"var(--cyber-cyan)"}),C.jsx("span",{children:e.pipeline})]}),C.jsx("h3",{style:{fontSize:"1.45rem",fontWeight:"800",color:"#fff",marginBottom:"4px"},children:e.title}),C.jsx("p",{style:{fontSize:"0.84rem",color:"var(--web-red)",fontWeight:"600",marginBottom:"12px",fontFamily:"var(--font-mono)"},children:e.subtitle}),C.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-dim)",lineHeight:"1.65",marginBottom:"18px"},children:e.summary}),C.jsx("div",{style:{marginBottom:"18px",flex:1},children:e.highlights.map((n,i)=>C.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"8px",fontSize:"0.82rem",color:"var(--text-muted)"},children:[C.jsx(sy,{size:14,color:"var(--terminal-green)",style:{marginTop:"3px",flexShrink:0}}),C.jsx("span",{children:n})]},i))}),C.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"22px"},children:e.tags.map((n,i)=>C.jsx("span",{style:{fontSize:"0.72rem",fontFamily:"var(--font-mono)",padding:"3px 9px",borderRadius:"6px",background:"rgba(255,42,95,0.08)",border:"1px solid rgba(255,42,95,0.2)",color:"var(--text-muted)"},children:n},i))}),C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",paddingTop:"16px",borderTop:"1px solid var(--border-subtle)"},children:[C.jsxs("a",{href:e.githubUrl,target:"_blank",rel:"noreferrer",className:"btn-primary",style:{padding:"8px 16px",fontSize:"0.82rem",flex:1,justifyContent:"center"},children:[C.jsx(cc,{size:15})," GitHub Code"]}),e.demoUrl&&C.jsxs("a",{href:e.demoUrl,target:"_blank",rel:"noreferrer",className:"btn-secondary",style:{padding:"8px 16px",fontSize:"0.82rem",flex:1,justifyContent:"center"},children:[C.jsx(ly,{size:14})," Live Web App"]})]})]},e.id))})]})})}function Xw(){const[t,e]=je.useState(""),[n,i]=je.useState([{type:"system",text:"🏁 CHINNI KRISHNA // DEVOPS & AGENTIC AI CONTROL PLANE v3.2 [Linux x86_64]"},{type:"system",text:"Engineer: @GrayViper (github.com/GrayViper) • B.Tech CSE @ Lovely Professional University"},{type:"info",text:'Type "help", "skills", "projects", "status", or click the quick command chips below.'}]),r=je.useRef(null);je.useEffect(()=>{var o;(o=r.current)==null||o.scrollIntoView({behavior:"smooth"})},[n]);const s=o=>{const l=o.trim().toLowerCase();if(!l)return;const c=[...n,{type:"user",text:`devops@GrayViper:~$ ${o}`}];switch(l){case"help":c.push({type:"output",text:`AVAILABLE DEVOPS CLI COMMANDS:
  • help           - Display this manual
  • skills         - Output Cloud, CI/CD, Container & Full-Stack tooling
  • projects       - Output production GrayViper GitHub repositories
  • status         - Perform real-time cluster health & connectivity diagnostic
  • certs          - Output B.Tech degree, Xebia training & credentials
  • f1             - Display telemetry vehicle & pipeline metrics
  • whoami         - Print engineer profile summary
  • cat resume.txt - Print complete developer bio & contact info
  • clear          - Clear terminal history`});break;case"skills":c.push({type:"cyan",text:`[DEVOPS & CLOUD INFRASTRUCTURE TELEMETRY]
  Orchestration: Kubernetes (AWS EKS 1.30), Docker, Docker Compose
  IaC & Cloud:   Terraform, AWS (EC2, S3, IAM, VPC), CloudWatch
  CI/CD & Linux: GitHub Actions, GitOps / ArgoCD, Linux (Bash), Postman
  Full-Stack:    FastAPI, Python, React, Next.js, TypeScript, Flask, C++
  Data & Alerts: Prometheus, Grafana, MongoDB Atlas, PostgreSQL, MySQL
  Agentic AI:    Google Gemini API, Xebia Agentic AI Workflows, Antigravity`});break;case"projects":c.push({type:"green",text:`[FEATURED GRAYVIPER REPOSITORIES]
  1. GrayViper/Carrier_Genie (June 2026)
     └─ Full-stack job & scholarship discovery (React, FastAPI, MongoDB Atlas, JWT Auth)
  2. GrayViper/hi_links (May 2026)
     └─ Scalable link manager (Next.js, TypeScript, Drizzle ORM, Neon Postgres)
  3. GrayViper/cura-ai-health (Aug 2026) → https://cura-ai-health.vercel.app
     └─ AI health assistant (Python, Flask, SQLite, Gemini API, Chart.js)`});break;case"status":c.push({type:"green",text:`[CLUSTER & SYSTEM DIAGNOSTIC]
  ✔ GitHub Profile: github.com/GrayViper (Connected)
  ✔ LinkedIn: linkedin.com/in/chinni-krishna8 (Active)
  ✔ Email: chakkaanil6@gmail.com
  ✔ Mobile: +91 8135839393
  ✔ AWS EKS Cluster: Online (v1.30)
  ✔ ArgoCD GitOps: Synced (1.82s SLA)
  ✔ CI/CD Pipelines: 99.9% Passing
  ✔ Role Status: Open for Internships & Full-Time DevOps Roles 🏁`});break;case"f1":c.push({type:"red",text:`[F1 TELEMETRY METRICS]
  🏎️ Top Speed: 328 km/h | DRS: OPEN
  ⚙️ Pitstop Pipeline: 1.82s Automated Deploy
  ⚡ Telemetry Feed: Real-time Prometheus Scraping`});break;case"certs":c.push({type:"output",text:`[EDUCATION & CREDENTIALS]
  🎓 B.Tech CSE — Lovely Professional University, Phagwara (Aug 2024 – Present) CGPA: 7.2
  🏫 Intermediate (XII) — Kendriya Vidyalaya NFR Maligaon, Guwahati (2022-2024) 84%
  📚 Matriculation (X) — St. Basil's Academy, Nagaon (June 2022) 80%
  🤖 Xebia Industry Training — Fullstack using Agentic AI (Jun-Jul 2026)
  🐍 Python: Basics to Advance — Edtechniketan (July 2026)
  🗄️  Database Management — Infosys Springboard (June 2026)
  🐧 Linux & Shell Scripting — Skillera (March 2025)
  💻 Introduction to C — Udemy (January 2025)`});break;case"whoami":case"cat resume.txt":c.push({type:"output",text:`[ENGINEER PROFILE - CHAKKA CHINNI KRISHNA]
Name:     Chakka Chinni Krishna
Handle:   @GrayViper
GitHub:   https://github.com/GrayViper
LinkedIn: https://www.linkedin.com/in/chinni-krishna8
Email:    chakkaanil6@gmail.com
Mobile:   +91 8135839393
Edu:      B.Tech CSE @ Lovely Professional University (Aug 2024–Present) | CGPA: 7.2
Role:     DevOps Engineer | Full-Stack & Agentic AI Specialist
Summary:  Automating cloud infrastructure with Docker, Kubernetes, Terraform, and GitHub Actions;
          building scalable REST APIs with FastAPI and Next.js, and implementing Agentic AI loops.`});break;case"clear":i([]),e("");return;default:c.push({type:"error",text:`Command not recognized: "${o}". Type "help" or click command buttons.`});break}i(c),e("")},a=o=>{o.preventDefault(),s(t)};return C.jsx("section",{id:"terminal",style:{padding:"80px 0"},children:C.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[C.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[C.jsx("span",{className:"section-tag section-tag-green",style:{marginBottom:"14px"},children:"💻 INTERACTIVE CLI PLAYGROUND"}),C.jsxs("h2",{style:{fontSize:"2.6rem",fontWeight:"900",letterSpacing:"-0.03em"},children:["DevOps ",C.jsx("span",{className:"gradient-text",children:"Terminal Engine"})]}),C.jsx("p",{style:{color:"var(--text-dim)",marginTop:"10px",fontSize:"0.96rem"},children:"Test commands, inspect cluster status & explore system telemetry in real time"})]}),C.jsxs("div",{className:"glass-card-web",style:{padding:"24px",maxWidth:"950px",margin:"0 auto"},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingBottom:"14px",borderBottom:"1px solid var(--border-subtle)"},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[C.jsx("span",{style:{width:"12px",height:"12px",borderRadius:"50%",background:"var(--f1-red)",boxShadow:"0 0 8px var(--f1-red)"}}),C.jsx("span",{style:{width:"12px",height:"12px",borderRadius:"50%",background:"var(--f1-yellow)",boxShadow:"0 0 8px var(--f1-yellow)"}}),C.jsx("span",{style:{width:"12px",height:"12px",borderRadius:"50%",background:"#10b981",boxShadow:"0 0 8px #10b981"}}),C.jsxs("span",{style:{fontFamily:"var(--font-mono)",fontSize:"0.84rem",color:"var(--text-muted)",marginLeft:"10px",display:"flex",alignItems:"center",gap:"6px"},children:[C.jsx(gy,{size:14,color:"var(--cyber-cyan)"})," devops@GrayViper:~/control-plane"]})]}),C.jsx("a",{href:"https://github.com/GrayViper",target:"_blank",rel:"noreferrer",style:{fontSize:"0.74rem",fontFamily:"var(--font-mono)",padding:"3px 12px",borderRadius:"9999px",background:"rgba(255, 24, 1, 0.12)",color:"var(--f1-red)",border:"1px solid rgba(255, 24, 1, 0.3)",fontWeight:"700",textDecoration:"none"},children:"@GrayViper ↗"})]}),C.jsxs("div",{style:{background:"#040711",borderRadius:"14px",border:"1px solid rgba(255, 24, 1, 0.2)",padding:"20px",marginTop:"16px",minHeight:"280px",maxHeight:"360px",overflowY:"auto",fontFamily:"var(--font-mono)",fontSize:"0.88rem",lineHeight:"1.65"},children:[n.map((o,l)=>C.jsxs("div",{style:{marginBottom:"6px",whiteSpace:"pre-wrap"},children:[o.type==="user"&&C.jsx("span",{style:{color:"var(--cyber-cyan)",fontWeight:"700"},children:o.text}),o.type==="system"&&C.jsx("span",{style:{color:"var(--text-dim)"},children:o.text}),o.type==="info"&&C.jsx("span",{style:{color:"var(--text-muted)"},children:o.text}),o.type==="cyan"&&C.jsx("span",{style:{color:"var(--cyber-cyan)"},children:o.text}),o.type==="green"&&C.jsx("span",{style:{color:"#10b981"},children:o.text}),o.type==="red"&&C.jsx("span",{style:{color:"var(--f1-red)",fontWeight:"bold"},children:o.text}),o.type==="output"&&C.jsx("span",{style:{color:"var(--text-main)"},children:o.text}),o.type==="error"&&C.jsx("span",{style:{color:"#ef4444"},children:o.text})]},l)),C.jsx("div",{ref:r})]}),C.jsxs("form",{onSubmit:a,style:{marginTop:"14px",display:"flex",gap:"10px"},children:[C.jsxs("div",{style:{flex:1,display:"flex",alignItems:"center",background:"#040711",border:"1px solid var(--border-subtle)",borderRadius:"12px",padding:"0 14px"},children:[C.jsx("span",{style:{color:"var(--f1-red)",fontFamily:"var(--font-mono)",fontSize:"0.85rem"},children:"devops@GrayViper:~$"}),C.jsx("input",{type:"text",value:t,onChange:o=>e(o.target.value),placeholder:"Type command ('help', 'skills', 'status', 'projects', 'f1')...",style:{width:"100%",background:"transparent",border:"none",outline:"none",color:"#fff",fontFamily:"var(--font-mono)",fontSize:"0.86rem",padding:"12px 8px"}})]}),C.jsxs("button",{type:"submit",className:"btn-primary",style:{padding:"0 22px",fontSize:"0.84rem",borderRadius:"12px"},children:[C.jsx(W0,{size:14})," Run"]})]}),C.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"16px",alignItems:"center"},children:[C.jsx("span",{style:{fontSize:"0.78rem",color:"var(--text-dim)",fontFamily:"var(--font-mono)"},children:"Quick Commands:"}),["skills","projects","status","f1","certs","whoami","clear"].map(o=>C.jsx("button",{onClick:()=>s(o),style:{background:"rgba(255, 255, 255, 0.04)",border:"1px solid var(--border-subtle)",color:"var(--cyber-cyan)",borderRadius:"8px",padding:"5px 12px",fontSize:"0.76rem",fontFamily:"var(--font-mono)",fontWeight:"700",cursor:"pointer",transition:"all 0.2s"},onMouseEnter:l=>{l.target.style.borderColor="var(--f1-red)",l.target.style.background="rgba(255, 24, 1, 0.15)"},onMouseLeave:l=>{l.target.style.borderColor="var(--border-subtle)",l.target.style.background="rgba(255, 255, 255, 0.04)"},children:o},o))]})]})]})})}function jw(){const t=[{title:"Python: Basics to Advance",issuer:"Edtechniketan",date:"July 2026",icon:"🐍",color:"var(--cyber-cyan)",colorBg:"rgba(0, 242, 254, 0.08)",colorBorder:"rgba(0, 242, 254, 0.25)"},{title:"Database Management",issuer:"Infosys Springboard",date:"June 2026",icon:"🗄️",color:"var(--terminal-green)",colorBg:"rgba(16, 185, 129, 0.08)",colorBorder:"rgba(16, 185, 129, 0.25)"},{title:"Linux Commands & Shell Scripting",issuer:"Skillera",date:"March 2025",icon:"🐧",color:"var(--web-red)",colorBg:"rgba(255, 42, 95, 0.08)",colorBorder:"rgba(255, 42, 95, 0.25)"},{title:"Introduction to C",issuer:"Udemy",date:"January 2025",icon:"💻",color:"var(--warning-amber)",colorBg:"rgba(253, 184, 19, 0.08)",colorBorder:"rgba(253, 184, 19, 0.25)"}],e=[{degree:"B.Tech — Computer Science & Engineering",institution:"Lovely Professional University",location:"Phagwara, Punjab",period:"Aug 2024 – Present",grade:"CGPA: 7.2",icon:"🎓",color:"var(--web-red)"},{degree:"Intermediate (Class XII)",institution:"Kendriya Vidyalaya NFR Maligaon",location:"Guwahati, Assam",period:"Aug 2022 – May 2024",grade:"84%",icon:"🏫",color:"var(--cyber-cyan)"},{degree:"Matriculation (Class X)",institution:"St. Basil's Academy",location:"Nagaon, Assam",period:"Completed June 2022",grade:"80%",icon:"📚",color:"var(--terminal-green)"}];return C.jsx("section",{id:"certs",style:{padding:"100px 0"},children:C.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[C.jsxs("div",{style:{textAlign:"center",marginBottom:"48px"},children:[C.jsx("span",{className:"section-tag section-tag-cyan",style:{marginBottom:"14px"},children:"🏆 ACADEMICS & CERTIFICATIONS"}),C.jsxs("h2",{style:{fontSize:"2.6rem",fontWeight:"900",letterSpacing:"-0.03em"},children:["Education & ",C.jsx("span",{className:"gradient-text",children:"Credentials"})]}),C.jsx("p",{style:{color:"var(--text-dim)",marginTop:"10px",fontSize:"0.96rem"},children:"Continuous learning across Cloud Infrastructure, Full-Stack and Agentic AI"})]}),C.jsx("div",{className:"glass-card-web",style:{padding:"28px",marginBottom:"36px",background:"linear-gradient(135deg, rgba(255, 42, 95, 0.08) 0%, rgba(0, 242, 254, 0.06) 100%)",border:"1px solid rgba(255, 42, 95, 0.25)"},children:C.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"20px",flexWrap:"wrap"},children:[C.jsx("div",{style:{width:"58px",height:"58px",borderRadius:"16px",flexShrink:0,background:"linear-gradient(135deg, rgba(255, 42, 95, 0.3), rgba(0, 242, 254, 0.3))",border:"1.5px solid rgba(255, 42, 95, 0.4)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.8rem"},children:"🤖"}),C.jsxs("div",{style:{flex:1},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap",marginBottom:"8px"},children:[C.jsx("h3",{style:{fontSize:"1.35rem",fontWeight:"800",color:"#fff"},children:"Fullstack using Agentic A.I"}),C.jsx("span",{style:{fontSize:"0.72rem",fontFamily:"var(--font-mono)",background:"rgba(255, 42, 95, 0.15)",border:"1px solid rgba(255, 42, 95, 0.35)",color:"var(--web-red)",padding:"3px 10px",borderRadius:"9999px",fontWeight:"700"},children:"Jun 2026 – Jul 2026"})]}),C.jsx("p",{style:{fontSize:"0.86rem",color:"var(--cyber-cyan)",fontFamily:"var(--font-mono)",fontWeight:"700",marginBottom:"10px"},children:"Xebia · Industry Training Specialization"}),C.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-dim)",lineHeight:"1.7",marginBottom:"14px"},children:"Worked with Notion, Notebook LLM, and Postman for designing Agentic AI workflows. Explored GitHub Copilot, Kiro, and Antigravity across platforms. Deployed containerized backends and microservices to MongoDB Atlas, Render, and Vercel with structured GitHub CI/CD commit pipelines."}),C.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:["Notion","Notebook LLM","Postman","GitHub Copilot","Antigravity","MongoDB Atlas","Render","Vercel","Agentic Workflows"].map((n,i)=>C.jsx("span",{style:{fontSize:"0.72rem",fontFamily:"var(--font-mono)",padding:"3px 9px",borderRadius:"6px",background:"rgba(255, 42, 95, 0.08)",border:"1px solid rgba(255, 42, 95, 0.2)",color:"var(--web-red)"},children:n},i))})]})]})}),C.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"28px"},children:[C.jsxs("div",{className:"glass-card-web",style:{padding:"28px"},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"22px"},children:[C.jsx("div",{style:{width:"44px",height:"44px",borderRadius:"12px",background:"linear-gradient(135deg, rgba(255, 42, 95, 0.25), rgba(0, 242, 254, 0.25))",border:"1px solid rgba(255, 42, 95, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--web-red)"},children:C.jsx(cy,{size:24})}),C.jsxs("div",{children:[C.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:"800",color:"#fff"},children:"Academic Journey"}),C.jsx("p",{style:{fontSize:"0.78rem",color:"var(--text-dim)",fontFamily:"var(--font-mono)"},children:"Education degrees & school record"})]})]}),C.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:e.map((n,i)=>C.jsxs("div",{style:{padding:"16px",borderRadius:"14px",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border-subtle)",display:"flex",gap:"12px"},children:[C.jsx("span",{style:{fontSize:"1.4rem",flexShrink:0},children:n.icon}),C.jsxs("div",{children:[C.jsx("h4",{style:{fontSize:"0.92rem",fontWeight:"700",color:"#fff",marginBottom:"3px"},children:n.degree}),C.jsx("p",{style:{fontSize:"0.80rem",color:n.color,fontFamily:"var(--font-mono)",fontWeight:"600"},children:n.institution}),C.jsx("p",{style:{fontSize:"0.74rem",color:"var(--text-faint)",fontFamily:"var(--font-mono)",marginTop:"2px"},children:n.location}),C.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"6px",flexWrap:"wrap"},children:[C.jsx("span",{style:{fontSize:"0.73rem",color:"var(--text-dim)",fontFamily:"var(--font-mono)"},children:n.period}),C.jsx("span",{style:{fontSize:"0.73rem",color:n.color,fontFamily:"var(--font-mono)",fontWeight:"700"},children:n.grade})]})]})]},i))})]}),C.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[C.jsx("h3",{style:{fontSize:"0.84rem",fontWeight:"700",color:"var(--text-dim)",fontFamily:"var(--font-mono)",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"6px"},children:"🏆 Verified Credentials"}),t.map((n,i)=>C.jsxs("div",{className:"glass-card-web",style:{padding:"18px",display:"flex",gap:"14px",alignItems:"flex-start",border:`1px solid ${n.colorBorder}`,background:n.colorBg},children:[C.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"11px",flexShrink:0,background:n.colorBg,border:`1px solid ${n.colorBorder}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.3rem"},children:n.icon}),C.jsxs("div",{style:{flex:1},children:[C.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"8px",flexWrap:"wrap"},children:[C.jsx("h4",{style:{fontSize:"0.94rem",fontWeight:"700",color:"#fff"},children:n.title}),C.jsx("span",{style:{fontSize:"0.72rem",fontFamily:"var(--font-mono)",color:n.color,background:n.colorBg,padding:"2px 8px",borderRadius:"6px",whiteSpace:"nowrap",border:`1px solid ${n.colorBorder}`,fontWeight:"700"},children:n.date})]}),C.jsx("p",{style:{fontSize:"0.80rem",color:"var(--text-dim)",fontFamily:"var(--font-mono)",marginTop:"4px"},children:n.issuer})]})]},i))]})]})]})})}function Yw(){const[t,e]=je.useState({name:"",email:"",subject:"Internship Opportunity",message:""}),[n,i]=je.useState(!1),[r,s]=je.useState(!1),a=()=>{navigator.clipboard.writeText("chakkaanil6@gmail.com"),i(!0),setTimeout(()=>i(!1),2e3)},o=l=>{l.preventDefault(),s(!0),setTimeout(()=>{s(!1),e({name:"",email:"",subject:"Internship Opportunity",message:""})},4e3)};return C.jsx("section",{id:"contact",style:{padding:"100px 0 120px"},children:C.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[C.jsxs("div",{style:{textAlign:"center",marginBottom:"48px"},children:[C.jsx("span",{className:"section-tag section-tag-cyan",style:{marginBottom:"14px"},children:"📬 GET IN TOUCH"}),C.jsxs("h2",{style:{fontSize:"2.6rem",fontWeight:"900",letterSpacing:"-0.03em"},children:["Contact ",C.jsx("span",{className:"gradient-text",children:"Chinni Krishna"})]}),C.jsx("p",{style:{color:"var(--text-dim)",marginTop:"10px",fontSize:"0.96rem"},children:"Available for DevOps & Cloud internships, graduate engineering roles & open source projects"})]}),C.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"28px",maxWidth:"920px",margin:"0 auto"},children:[C.jsxs("div",{className:"glass-card-web",style:{padding:"30px",display:"flex",flexDirection:"column",gap:"20px"},children:[C.jsxs("div",{children:[C.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:"800",color:"#fff",marginBottom:"8px"},children:"Direct Channels"}),C.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-dim)",lineHeight:"1.65"},children:"Feel free to connect for internships, cloud infrastructure projects, or technical collaboration."})]}),C.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid var(--border-subtle)",borderRadius:"12px",padding:"14px 18px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"10px"},children:[C.jsxs("div",{children:[C.jsx("span",{style:{fontSize:"0.70rem",color:"var(--text-faint)",fontFamily:"var(--font-mono)",display:"block",letterSpacing:"0.06em",textTransform:"uppercase"},children:"Email Address"}),C.jsx("span",{style:{fontSize:"0.88rem",fontFamily:"var(--font-mono)",color:"var(--cyber-cyan)",fontWeight:"700"},children:"chakkaanil6@gmail.com"})]}),C.jsxs("button",{onClick:a,style:{background:n?"rgba(16,185,129,0.15)":"rgba(255,255,255,0.06)",border:`1px solid ${n?"var(--terminal-green)":"var(--border-subtle)"}`,color:n?"var(--terminal-green)":"var(--text-muted)",borderRadius:"8px",padding:"7px 12px",cursor:"pointer",fontSize:"0.78rem",display:"flex",alignItems:"center",gap:"5px",transition:"all 0.2s",fontFamily:"var(--font-mono)"},children:[n?C.jsx(ay,{size:14}):C.jsx(oy,{size:14}),n?"Copied!":"Copy"]})]}),C.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid var(--border-subtle)",borderRadius:"12px",padding:"14px 18px",display:"flex",alignItems:"center",gap:"12px"},children:[C.jsx(fy,{size:16,color:"var(--f1-red)"}),C.jsxs("div",{children:[C.jsx("span",{style:{fontSize:"0.70rem",color:"var(--text-faint)",fontFamily:"var(--font-mono)",display:"block",letterSpacing:"0.06em",textTransform:"uppercase"},children:"Mobile Contact"}),C.jsx("span",{style:{fontSize:"0.88rem",fontFamily:"var(--font-mono)",color:"var(--f1-red)",fontWeight:"700"},children:"+91 8135839393"})]})]}),C.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[C.jsxs("a",{href:"https://github.com/GrayViper",target:"_blank",rel:"noreferrer",className:"btn-primary",style:{justifyContent:"center",padding:"11px 14px",fontSize:"0.86rem"},children:[C.jsx(cc,{size:16})," @GrayViper on GitHub"]}),C.jsxs("a",{href:"https://www.linkedin.com/in/chinni-krishna8",target:"_blank",rel:"noreferrer",className:"btn-secondary",style:{justifyContent:"center",padding:"11px 14px",fontSize:"0.86rem"},children:[C.jsx(eh,{size:16})," LinkedIn Profile"]})]})]}),C.jsx("div",{className:"glass-card-web",style:{padding:"30px"},children:r?C.jsxs("div",{style:{textAlign:"center",padding:"40px 10px"},children:[C.jsx("div",{style:{width:"64px",height:"64px",borderRadius:"50%",background:"linear-gradient(135deg, rgba(255,24,1,0.2), rgba(0,242,254,0.2))",border:"1.5px solid var(--f1-red)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 18px",color:"var(--f1-red)"},children:C.jsx(my,{size:28})}),C.jsx("h3",{style:{fontSize:"1.3rem",fontWeight:"800",color:"#fff",marginBottom:"8px"},children:"Message Transmitted! ⚡"}),C.jsx("p",{style:{color:"var(--text-dim)",fontSize:"0.88rem"},children:"Thanks for reaching out! I'll get back to your inbox as soon as possible."})]}):C.jsxs("form",{onSubmit:o,style:{display:"flex",flexDirection:"column",gap:"16px"},children:[[{label:"Your Name",key:"name",type:"text",placeholder:"e.g. Alex Mercer"},{label:"Email Address",key:"email",type:"email",placeholder:"alex@company.com"}].map(l=>C.jsxs("div",{children:[C.jsx("label",{style:{display:"block",fontSize:"0.76rem",fontFamily:"var(--font-mono)",color:"var(--text-dim)",marginBottom:"6px",letterSpacing:"0.04em",textTransform:"uppercase"},children:l.label}),C.jsx("input",{type:l.type,required:!0,value:t[l.key],onChange:c=>e({...t,[l.key]:c.target.value}),placeholder:l.placeholder,style:{width:"100%",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border-subtle)",borderRadius:"10px",padding:"10px 14px",color:"#fff",fontSize:"0.88rem",outline:"none",transition:"border-color 0.2s"}})]},l.key)),C.jsxs("div",{children:[C.jsx("label",{style:{display:"block",fontSize:"0.76rem",fontFamily:"var(--font-mono)",color:"var(--text-dim)",marginBottom:"6px",letterSpacing:"0.04em",textTransform:"uppercase"},children:"Purpose of Message"}),C.jsxs("select",{value:t.subject,onChange:l=>e({...t,subject:l.target.value}),style:{width:"100%",background:"#0b101c",border:"1px solid var(--border-subtle)",borderRadius:"10px",padding:"10px 14px",color:"#fff",fontSize:"0.88rem",outline:"none"},children:[C.jsx("option",{value:"Internship Opportunity",children:"DevOps / Cloud Internship Opportunity"}),C.jsx("option",{value:"Full-Time Role",children:"Full-Time / Graduate Engineering Role"}),C.jsx("option",{value:"Cloud Architecture",children:"Cloud Infrastructure & CI/CD Project"}),C.jsx("option",{value:"Collaboration",children:"Open Source Collaboration"}),C.jsx("option",{value:"General",children:"General Technical Inquiry"})]})]}),C.jsxs("div",{children:[C.jsx("label",{style:{display:"block",fontSize:"0.76rem",fontFamily:"var(--font-mono)",color:"var(--text-dim)",marginBottom:"6px",letterSpacing:"0.04em",textTransform:"uppercase"},children:"Message"}),C.jsx("textarea",{rows:4,required:!0,value:t.message,onChange:l=>e({...t,message:l.target.value}),placeholder:"Share role specifications, project requirements, or questions...",style:{width:"100%",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border-subtle)",borderRadius:"10px",padding:"10px 14px",color:"#fff",fontSize:"0.88rem",outline:"none",resize:"none",transition:"border-color 0.2s"}})]}),C.jsxs("button",{type:"submit",className:"btn-primary",style:{justifyContent:"center",marginTop:"4px"},children:[C.jsx(py,{size:16})," Send Message ⚡"]})]})})]})]})})}function qw(){const t=e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})};return C.jsx("footer",{style:{borderTop:"1px solid var(--border-subtle)",background:"rgba(7, 10, 18, 0.95)",padding:"44px 0 30px",position:"relative",zIndex:10},children:C.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[C.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"24px",paddingBottom:"28px",borderBottom:"1px solid var(--border-subtle)"},children:[C.jsxs("div",{children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"6px"},children:[C.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"10px",background:"linear-gradient(135deg, var(--f1-red) 0%, var(--cyber-cyan) 100%)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"900",fontSize:"0.92rem",color:"#fff",fontFamily:"var(--font-heading)"},children:"CK"}),C.jsxs("span",{style:{fontFamily:"var(--font-heading)",fontWeight:"900",fontSize:"1.15rem",color:"#fff"},children:["Chakka Chinni ",C.jsx("span",{className:"gradient-text",children:"Krishna"})]})]}),C.jsx("p",{style:{fontSize:"0.82rem",color:"var(--text-dim)",fontFamily:"var(--font-mono)"},children:"DevOps & Cloud Engineer · Full-Stack & Agentic AI Specialist · @GrayViper"})]}),C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"},children:[C.jsxs("span",{style:{fontSize:"0.74rem",fontFamily:"var(--font-mono)",background:"rgba(16, 185, 129, 0.12)",border:"1px solid rgba(16, 185, 129, 0.3)",color:"var(--terminal-green)",padding:"4px 10px",borderRadius:"8px",display:"flex",alignItems:"center",gap:"5px",fontWeight:"700"},children:[C.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#10b981",boxShadow:"0 0 6px #10b981"}}),"99.9% CLUSTER UPTIME"]}),C.jsx("span",{style:{fontSize:"0.74rem",fontFamily:"var(--font-mono)",background:"rgba(255, 24, 1, 0.1)",border:"1px solid rgba(255, 24, 1, 0.3)",color:"var(--f1-red)",padding:"4px 10px",borderRadius:"8px",fontWeight:"700"},children:"BUILD: v2.0.0-f1-retro"})]}),C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[[{href:"https://github.com/GrayViper",icon:C.jsx(cc,{size:17}),label:"GitHub"},{href:"https://www.linkedin.com/in/chinni-krishna8",icon:C.jsx(eh,{size:17}),label:"LinkedIn"},{href:"mailto:chakkaanil6@gmail.com",icon:C.jsx(uy,{size:17}),label:"Email"}].map((e,n)=>C.jsx("a",{href:e.href,target:"_blank",rel:"noreferrer",title:e.label,style:{width:"40px",height:"40px",borderRadius:"10px",background:"rgba(255,255,255,0.04)",border:"1px solid var(--border-subtle)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-dim)",transition:"all 0.2s",textDecoration:"none"},onMouseEnter:i=>{i.currentTarget.style.borderColor="var(--f1-red)",i.currentTarget.style.color="#fff",i.currentTarget.style.background="rgba(255,24,1,0.12)"},onMouseLeave:i=>{i.currentTarget.style.borderColor="var(--border-subtle)",i.currentTarget.style.color="var(--text-dim)",i.currentTarget.style.background="rgba(255,255,255,0.04)"},children:e.icon},n)),C.jsxs("button",{onClick:t,style:{display:"flex",alignItems:"center",gap:"6px",background:"rgba(255, 24, 1, 0.12)",border:"1px solid rgba(255, 24, 1, 0.35)",color:"var(--f1-red)",borderRadius:"10px",padding:"9px 18px",fontSize:"0.82rem",cursor:"pointer",fontFamily:"var(--font-heading)",fontWeight:"700",transition:"all 0.2s"},onMouseEnter:e=>{e.currentTarget.style.background="rgba(255, 24, 1, 0.22)",e.currentTarget.style.borderColor="var(--f1-red)"},onMouseLeave:e=>{e.currentTarget.style.background="rgba(255, 24, 1, 0.12)",e.currentTarget.style.borderColor="rgba(255, 24, 1, 0.35)"},children:[C.jsx(ry,{size:15})," Back to Top 🏁"]})]})]}),C.jsx("div",{style:{textAlign:"center",marginTop:"22px",fontSize:"0.80rem",color:"var(--text-faint)",fontFamily:"var(--font-mono)"},children:"© 2026 Chakka Chinni Krishna (@GrayViper) · Engineered with React + Vite + Three.js · Deployed on Vercel"})]})})}function $w(){const[t,e]=je.useState(!0);return C.jsxs("div",{className:"portfolio-app-root",children:[C.jsx(Sy,{isVideoActive:t}),C.jsx(My,{isVideoActive:t,setIsVideoActive:e}),C.jsxs("main",{style:{position:"relative",width:"100%",overflow:"hidden"},children:[C.jsx(Gw,{}),C.jsx(Vw,{}),C.jsx(Hw,{}),C.jsx(Ww,{}),C.jsx(Xw,{}),C.jsx(jw,{}),C.jsx(Yw,{})]}),C.jsx(qw,{})]})}Su.createRoot(document.getElementById("root")).render(C.jsx(Gv.StrictMode,{children:C.jsx($w,{})}));
