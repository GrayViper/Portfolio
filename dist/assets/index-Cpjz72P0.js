(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Rx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Im={exports:{}},ql={},Dm={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var io=Symbol.for("react.element"),Px=Symbol.for("react.portal"),Lx=Symbol.for("react.fragment"),Ix=Symbol.for("react.strict_mode"),Dx=Symbol.for("react.profiler"),Nx=Symbol.for("react.provider"),Ux=Symbol.for("react.context"),Fx=Symbol.for("react.forward_ref"),Ox=Symbol.for("react.suspense"),kx=Symbol.for("react.memo"),Bx=Symbol.for("react.lazy"),Eh=Symbol.iterator;function zx(t){return t===null||typeof t!="object"?null:(t=Eh&&t[Eh]||t["@@iterator"],typeof t=="function"?t:null)}var Nm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Um=Object.assign,Fm={};function $s(t,e,n){this.props=t,this.context=e,this.refs=Fm,this.updater=n||Nm}$s.prototype.isReactComponent={};$s.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};$s.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Om(){}Om.prototype=$s.prototype;function af(t,e,n){this.props=t,this.context=e,this.refs=Fm,this.updater=n||Nm}var of=af.prototype=new Om;of.constructor=af;Um(of,$s.prototype);of.isPureReactComponent=!0;var Th=Array.isArray,km=Object.prototype.hasOwnProperty,lf={current:null},Bm={key:!0,ref:!0,__self:!0,__source:!0};function zm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)km.call(e,i)&&!Bm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:io,type:t,key:s,ref:a,props:r,_owner:lf.current}}function Vx(t,e){return{$$typeof:io,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function cf(t){return typeof t=="object"&&t!==null&&t.$$typeof===io}function Gx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var wh=/\/+/g;function pc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Gx(""+t.key):e.toString(36)}function tl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case io:case Px:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+pc(a,0):i,Th(r)?(n="",t!=null&&(n=t.replace(wh,"$&/")+"/"),tl(r,e,n,"",function(c){return c})):r!=null&&(cf(r)&&(r=Vx(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(wh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Th(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+pc(s,o);a+=tl(s,e,n,l,r)}else if(l=zx(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+pc(s,o++),a+=tl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function go(t,e,n){if(t==null)return t;var i=[],r=0;return tl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Hx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pn={current:null},nl={transition:null},Wx={ReactCurrentDispatcher:pn,ReactCurrentBatchConfig:nl,ReactCurrentOwner:lf};function Vm(){throw Error("act(...) is not supported in production builds of React.")}He.Children={map:go,forEach:function(t,e,n){go(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return go(t,function(){e++}),e},toArray:function(t){return go(t,function(e){return e})||[]},only:function(t){if(!cf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};He.Component=$s;He.Fragment=Lx;He.Profiler=Dx;He.PureComponent=af;He.StrictMode=Ix;He.Suspense=Ox;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wx;He.act=Vm;He.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Um({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=lf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)km.call(e,l)&&!Bm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:io,type:t.type,key:r,ref:s,props:i,_owner:a}};He.createContext=function(t){return t={$$typeof:Ux,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Nx,_context:t},t.Consumer=t};He.createElement=zm;He.createFactory=function(t){var e=zm.bind(null,t);return e.type=t,e};He.createRef=function(){return{current:null}};He.forwardRef=function(t){return{$$typeof:Fx,render:t}};He.isValidElement=cf;He.lazy=function(t){return{$$typeof:Bx,_payload:{_status:-1,_result:t},_init:Hx}};He.memo=function(t,e){return{$$typeof:kx,type:t,compare:e===void 0?null:e}};He.startTransition=function(t){var e=nl.transition;nl.transition={};try{t()}finally{nl.transition=e}};He.unstable_act=Vm;He.useCallback=function(t,e){return pn.current.useCallback(t,e)};He.useContext=function(t){return pn.current.useContext(t)};He.useDebugValue=function(){};He.useDeferredValue=function(t){return pn.current.useDeferredValue(t)};He.useEffect=function(t,e){return pn.current.useEffect(t,e)};He.useId=function(){return pn.current.useId()};He.useImperativeHandle=function(t,e,n){return pn.current.useImperativeHandle(t,e,n)};He.useInsertionEffect=function(t,e){return pn.current.useInsertionEffect(t,e)};He.useLayoutEffect=function(t,e){return pn.current.useLayoutEffect(t,e)};He.useMemo=function(t,e){return pn.current.useMemo(t,e)};He.useReducer=function(t,e,n){return pn.current.useReducer(t,e,n)};He.useRef=function(t){return pn.current.useRef(t)};He.useState=function(t){return pn.current.useState(t)};He.useSyncExternalStore=function(t,e,n){return pn.current.useSyncExternalStore(t,e,n)};He.useTransition=function(){return pn.current.useTransition()};He.version="18.3.1";Dm.exports=He;var Ke=Dm.exports;const Xx=Rx(Ke);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jx=Ke,Yx=Symbol.for("react.element"),qx=Symbol.for("react.fragment"),$x=Object.prototype.hasOwnProperty,Kx=jx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zx={key:!0,ref:!0,__self:!0,__source:!0};function Gm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)$x.call(e,i)&&!Zx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Yx,type:t,key:s,ref:a,props:r,_owner:Kx.current}}ql.Fragment=qx;ql.jsx=Gm;ql.jsxs=Gm;Im.exports=ql;var w=Im.exports,Su={},Hm={exports:{}},In={},Wm={exports:{}},Xm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,N){var ee=k.length;k.push(N);e:for(;0<ee;){var ie=ee-1>>>1,oe=k[ie];if(0<r(oe,N))k[ie]=N,k[ee]=oe,ee=ie;else break e}}function n(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var N=k[0],ee=k.pop();if(ee!==N){k[0]=ee;e:for(var ie=0,oe=k.length,ze=oe>>>1;ie<ze;){var Ze=2*(ie+1)-1,Ge=k[Ze],Z=Ze+1,ae=k[Z];if(0>r(Ge,ee))Z<oe&&0>r(ae,Ge)?(k[ie]=ae,k[Z]=ee,ie=Z):(k[ie]=Ge,k[Ze]=ee,ie=Ze);else if(Z<oe&&0>r(ae,ee))k[ie]=ae,k[Z]=ee,ie=Z;else break e}}return N}function r(k,N){var ee=k.sortIndex-N.sortIndex;return ee!==0?ee:k.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],f=1,h=null,d=3,p=!1,_=!1,E=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(k){for(var N=n(c);N!==null;){if(N.callback===null)i(c);else if(N.startTime<=k)i(c),N.sortIndex=N.expirationTime,e(l,N);else break;N=n(c)}}function y(k){if(E=!1,M(k),!_)if(n(l)!==null)_=!0,K(A);else{var N=n(c);N!==null&&G(y,N.startTime-k)}}function A(k,N){_=!1,E&&(E=!1,u(g),g=-1),p=!0;var ee=d;try{for(M(N),h=n(l);h!==null&&(!(h.expirationTime>N)||k&&!L());){var ie=h.callback;if(typeof ie=="function"){h.callback=null,d=h.priorityLevel;var oe=ie(h.expirationTime<=N);N=t.unstable_now(),typeof oe=="function"?h.callback=oe:h===n(l)&&i(l),M(N)}else i(l);h=n(l)}if(h!==null)var ze=!0;else{var Ze=n(c);Ze!==null&&G(y,Ze.startTime-N),ze=!1}return ze}finally{h=null,d=ee,p=!1}}var T=!1,C=null,g=-1,b=5,P=-1;function L(){return!(t.unstable_now()-P<b)}function F(){if(C!==null){var k=t.unstable_now();P=k;var N=!0;try{N=C(!0,k)}finally{N?j():(T=!1,C=null)}}else T=!1}var j;if(typeof v=="function")j=function(){v(F)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,V=q.port2;q.port1.onmessage=F,j=function(){V.postMessage(null)}}else j=function(){m(F,0)};function K(k){C=k,T||(T=!0,j())}function G(k,N){g=m(function(){k(t.unstable_now())},N)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,K(A))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(d){case 1:case 2:case 3:var N=3;break;default:N=d}var ee=d;d=N;try{return k()}finally{d=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,N){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var ee=d;d=k;try{return N()}finally{d=ee}},t.unstable_scheduleCallback=function(k,N,ee){var ie=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ie+ee:ie):ee=ie,k){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=ee+oe,k={id:f++,callback:N,priorityLevel:k,startTime:ee,expirationTime:oe,sortIndex:-1},ee>ie?(k.sortIndex=ee,e(c,k),n(l)===null&&k===n(c)&&(E?(u(g),g=-1):E=!0,G(y,ee-ie))):(k.sortIndex=oe,e(l,k),_||p||(_=!0,K(A))),k},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(k){var N=d;return function(){var ee=d;d=N;try{return k.apply(this,arguments)}finally{d=ee}}}})(Xm);Wm.exports=Xm;var Jx=Wm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qx=Ke,Ln=Jx;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jm=new Set,Oa={};function jr(t,e){Os(t,e),Os(t+"Capture",e)}function Os(t,e){for(Oa[t]=e,t=0;t<e.length;t++)jm.add(e[t])}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mu=Object.prototype.hasOwnProperty,ev=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ah={},bh={};function tv(t){return Mu.call(bh,t)?!0:Mu.call(Ah,t)?!1:ev.test(t)?bh[t]=!0:(Ah[t]=!0,!1)}function nv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function iv(t,e,n,i){if(e===null||typeof e>"u"||nv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Kt[t]=new mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Kt[e]=new mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Kt[t]=new mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Kt[t]=new mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Kt[t]=new mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Kt[t]=new mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Kt[t]=new mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Kt[t]=new mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Kt[t]=new mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var uf=/[\-:]([a-z])/g;function df(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(uf,df);Kt[e]=new mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(uf,df);Kt[e]=new mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(uf,df);Kt[e]=new mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Kt[t]=new mn(t,1,!1,t.toLowerCase(),null,!1,!1)});Kt.xlinkHref=new mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Kt[t]=new mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function ff(t,e,n,i){var r=Kt.hasOwnProperty(e)?Kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(iv(e,n,r,i)&&(n=null),i||r===null?tv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var zi=Qx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xo=Symbol.for("react.element"),gs=Symbol.for("react.portal"),xs=Symbol.for("react.fragment"),hf=Symbol.for("react.strict_mode"),Eu=Symbol.for("react.profiler"),Ym=Symbol.for("react.provider"),qm=Symbol.for("react.context"),pf=Symbol.for("react.forward_ref"),Tu=Symbol.for("react.suspense"),wu=Symbol.for("react.suspense_list"),mf=Symbol.for("react.memo"),Ji=Symbol.for("react.lazy"),$m=Symbol.for("react.offscreen"),Ch=Symbol.iterator;function sa(t){return t===null||typeof t!="object"?null:(t=Ch&&t[Ch]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,mc;function ya(t){if(mc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);mc=e&&e[1]||""}return`
`+mc+t}var gc=!1;function xc(t,e){if(!t||gc)return"";gc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{gc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ya(t):""}function rv(t){switch(t.tag){case 5:return ya(t.type);case 16:return ya("Lazy");case 13:return ya("Suspense");case 19:return ya("SuspenseList");case 0:case 2:case 15:return t=xc(t.type,!1),t;case 11:return t=xc(t.type.render,!1),t;case 1:return t=xc(t.type,!0),t;default:return""}}function Au(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xs:return"Fragment";case gs:return"Portal";case Eu:return"Profiler";case hf:return"StrictMode";case Tu:return"Suspense";case wu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qm:return(t.displayName||"Context")+".Consumer";case Ym:return(t._context.displayName||"Context")+".Provider";case pf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case mf:return e=t.displayName||null,e!==null?e:Au(t.type)||"Memo";case Ji:e=t._payload,t=t._init;try{return Au(t(e))}catch{}}return null}function sv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Au(e);case 8:return e===hf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Km(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function av(t){var e=Km(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function vo(t){t._valueTracker||(t._valueTracker=av(t))}function Zm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Km(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function vl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bu(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Rh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jm(t,e){e=e.checked,e!=null&&ff(t,"checked",e,!1)}function Cu(t,e){Jm(t,e);var n=mr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ru(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ru(t,e.type,mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ph(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ru(t,e,n){(e!=="number"||vl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Sa=Array.isArray;function Cs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+mr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Pu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Lh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(Sa(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:mr(n)}}function Qm(t,e){var n=mr(e.value),i=mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ih(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function eg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?eg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var _o,tg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(_o=_o||document.createElement("div"),_o.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=_o.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ka(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ba={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ov=["Webkit","ms","Moz","O"];Object.keys(ba).forEach(function(t){ov.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ba[e]=ba[t]})});function ng(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ba.hasOwnProperty(t)&&ba[t]?(""+e).trim():e+"px"}function ig(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=ng(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var lv=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Iu(t,e){if(e){if(lv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function Du(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nu=null;function gf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Uu=null,Rs=null,Ps=null;function Dh(t){if(t=ao(t)){if(typeof Uu!="function")throw Error(re(280));var e=t.stateNode;e&&(e=Ql(e),Uu(t.stateNode,t.type,e))}}function rg(t){Rs?Ps?Ps.push(t):Ps=[t]:Rs=t}function sg(){if(Rs){var t=Rs,e=Ps;if(Ps=Rs=null,Dh(t),e)for(t=0;t<e.length;t++)Dh(e[t])}}function ag(t,e){return t(e)}function og(){}var vc=!1;function lg(t,e,n){if(vc)return t(e,n);vc=!0;try{return ag(t,e,n)}finally{vc=!1,(Rs!==null||Ps!==null)&&(og(),sg())}}function Ba(t,e){var n=t.stateNode;if(n===null)return null;var i=Ql(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var Fu=!1;if(Ni)try{var aa={};Object.defineProperty(aa,"passive",{get:function(){Fu=!0}}),window.addEventListener("test",aa,aa),window.removeEventListener("test",aa,aa)}catch{Fu=!1}function cv(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Ca=!1,_l=null,yl=!1,Ou=null,uv={onError:function(t){Ca=!0,_l=t}};function dv(t,e,n,i,r,s,a,o,l){Ca=!1,_l=null,cv.apply(uv,arguments)}function fv(t,e,n,i,r,s,a,o,l){if(dv.apply(this,arguments),Ca){if(Ca){var c=_l;Ca=!1,_l=null}else throw Error(re(198));yl||(yl=!0,Ou=c)}}function Yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function cg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Nh(t){if(Yr(t)!==t)throw Error(re(188))}function hv(t){var e=t.alternate;if(!e){if(e=Yr(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Nh(r),t;if(s===i)return Nh(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function ug(t){return t=hv(t),t!==null?dg(t):null}function dg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=dg(t);if(e!==null)return e;t=t.sibling}return null}var fg=Ln.unstable_scheduleCallback,Uh=Ln.unstable_cancelCallback,pv=Ln.unstable_shouldYield,mv=Ln.unstable_requestPaint,Lt=Ln.unstable_now,gv=Ln.unstable_getCurrentPriorityLevel,xf=Ln.unstable_ImmediatePriority,hg=Ln.unstable_UserBlockingPriority,Sl=Ln.unstable_NormalPriority,xv=Ln.unstable_LowPriority,pg=Ln.unstable_IdlePriority,$l=null,hi=null;function vv(t){if(hi&&typeof hi.onCommitFiberRoot=="function")try{hi.onCommitFiberRoot($l,t,void 0,(t.current.flags&128)===128)}catch{}}var Qn=Math.clz32?Math.clz32:Sv,_v=Math.log,yv=Math.LN2;function Sv(t){return t>>>=0,t===0?32:31-(_v(t)/yv|0)|0}var yo=64,So=4194304;function Ma(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ml(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Ma(o):(s&=a,s!==0&&(i=Ma(s)))}else a=n&~r,a!==0?i=Ma(a):s!==0&&(i=Ma(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Qn(e),r=1<<n,i|=t[n],e&=~r;return i}function Mv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ev(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Qn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Mv(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function ku(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mg(){var t=yo;return yo<<=1,!(yo&4194240)&&(yo=64),t}function _c(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ro(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qn(e),t[e]=n}function Tv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Qn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function vf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var st=0;function gg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var xg,_f,vg,_g,yg,Bu=!1,Mo=[],or=null,lr=null,cr=null,za=new Map,Va=new Map,tr=[],wv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fh(t,e){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":za.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Va.delete(e.pointerId)}}function oa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ao(e),e!==null&&_f(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Av(t,e,n,i,r){switch(e){case"focusin":return or=oa(or,t,e,n,i,r),!0;case"dragenter":return lr=oa(lr,t,e,n,i,r),!0;case"mouseover":return cr=oa(cr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return za.set(s,oa(za.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Va.set(s,oa(Va.get(s)||null,t,e,n,i,r)),!0}return!1}function Sg(t){var e=Ir(t.target);if(e!==null){var n=Yr(e);if(n!==null){if(e=n.tag,e===13){if(e=cg(n),e!==null){t.blockedOn=e,yg(t.priority,function(){vg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function il(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=zu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Nu=i,n.target.dispatchEvent(i),Nu=null}else return e=ao(n),e!==null&&_f(e),t.blockedOn=n,!1;e.shift()}return!0}function Oh(t,e,n){il(t)&&n.delete(e)}function bv(){Bu=!1,or!==null&&il(or)&&(or=null),lr!==null&&il(lr)&&(lr=null),cr!==null&&il(cr)&&(cr=null),za.forEach(Oh),Va.forEach(Oh)}function la(t,e){t.blockedOn===e&&(t.blockedOn=null,Bu||(Bu=!0,Ln.unstable_scheduleCallback(Ln.unstable_NormalPriority,bv)))}function Ga(t){function e(r){return la(r,t)}if(0<Mo.length){la(Mo[0],t);for(var n=1;n<Mo.length;n++){var i=Mo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(or!==null&&la(or,t),lr!==null&&la(lr,t),cr!==null&&la(cr,t),za.forEach(e),Va.forEach(e),n=0;n<tr.length;n++)i=tr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<tr.length&&(n=tr[0],n.blockedOn===null);)Sg(n),n.blockedOn===null&&tr.shift()}var Ls=zi.ReactCurrentBatchConfig,El=!0;function Cv(t,e,n,i){var r=st,s=Ls.transition;Ls.transition=null;try{st=1,yf(t,e,n,i)}finally{st=r,Ls.transition=s}}function Rv(t,e,n,i){var r=st,s=Ls.transition;Ls.transition=null;try{st=4,yf(t,e,n,i)}finally{st=r,Ls.transition=s}}function yf(t,e,n,i){if(El){var r=zu(t,e,n,i);if(r===null)Rc(t,e,i,Tl,n),Fh(t,i);else if(Av(r,t,e,n,i))i.stopPropagation();else if(Fh(t,i),e&4&&-1<wv.indexOf(t)){for(;r!==null;){var s=ao(r);if(s!==null&&xg(s),s=zu(t,e,n,i),s===null&&Rc(t,e,i,Tl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Rc(t,e,i,null,n)}}var Tl=null;function zu(t,e,n,i){if(Tl=null,t=gf(i),t=Ir(t),t!==null)if(e=Yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=cg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Tl=t,null}function Mg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gv()){case xf:return 1;case hg:return 4;case Sl:case xv:return 16;case pg:return 536870912;default:return 16}default:return 16}}var rr=null,Sf=null,rl=null;function Eg(){if(rl)return rl;var t,e=Sf,n=e.length,i,r="value"in rr?rr.value:rr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return rl=r.slice(t,1<i?1-i:void 0)}function sl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Eo(){return!0}function kh(){return!1}function Dn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Eo:kh,this.isPropagationStopped=kh,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Eo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Eo)},persist:function(){},isPersistent:Eo}),e}var Ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mf=Dn(Ks),so=Et({},Ks,{view:0,detail:0}),Pv=Dn(so),yc,Sc,ca,Kl=Et({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ef,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ca&&(ca&&t.type==="mousemove"?(yc=t.screenX-ca.screenX,Sc=t.screenY-ca.screenY):Sc=yc=0,ca=t),yc)},movementY:function(t){return"movementY"in t?t.movementY:Sc}}),Bh=Dn(Kl),Lv=Et({},Kl,{dataTransfer:0}),Iv=Dn(Lv),Dv=Et({},so,{relatedTarget:0}),Mc=Dn(Dv),Nv=Et({},Ks,{animationName:0,elapsedTime:0,pseudoElement:0}),Uv=Dn(Nv),Fv=Et({},Ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ov=Dn(Fv),kv=Et({},Ks,{data:0}),zh=Dn(kv),Bv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Vv[t])?!!e[t]:!1}function Ef(){return Gv}var Hv=Et({},so,{key:function(t){if(t.key){var e=Bv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ef,charCode:function(t){return t.type==="keypress"?sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Wv=Dn(Hv),Xv=Et({},Kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vh=Dn(Xv),jv=Et({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ef}),Yv=Dn(jv),qv=Et({},Ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),$v=Dn(qv),Kv=Et({},Kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Zv=Dn(Kv),Jv=[9,13,27,32],Tf=Ni&&"CompositionEvent"in window,Ra=null;Ni&&"documentMode"in document&&(Ra=document.documentMode);var Qv=Ni&&"TextEvent"in window&&!Ra,Tg=Ni&&(!Tf||Ra&&8<Ra&&11>=Ra),Gh=" ",Hh=!1;function wg(t,e){switch(t){case"keyup":return Jv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ag(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vs=!1;function e_(t,e){switch(t){case"compositionend":return Ag(e);case"keypress":return e.which!==32?null:(Hh=!0,Gh);case"textInput":return t=e.data,t===Gh&&Hh?null:t;default:return null}}function t_(t,e){if(vs)return t==="compositionend"||!Tf&&wg(t,e)?(t=Eg(),rl=Sf=rr=null,vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Tg&&e.locale!=="ko"?null:e.data;default:return null}}var n_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!n_[t.type]:e==="textarea"}function bg(t,e,n,i){rg(i),e=wl(e,"onChange"),0<e.length&&(n=new Mf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Pa=null,Ha=null;function i_(t){kg(t,0)}function Zl(t){var e=Ss(t);if(Zm(e))return t}function r_(t,e){if(t==="change")return e}var Cg=!1;if(Ni){var Ec;if(Ni){var Tc="oninput"in document;if(!Tc){var Xh=document.createElement("div");Xh.setAttribute("oninput","return;"),Tc=typeof Xh.oninput=="function"}Ec=Tc}else Ec=!1;Cg=Ec&&(!document.documentMode||9<document.documentMode)}function jh(){Pa&&(Pa.detachEvent("onpropertychange",Rg),Ha=Pa=null)}function Rg(t){if(t.propertyName==="value"&&Zl(Ha)){var e=[];bg(e,Ha,t,gf(t)),lg(i_,e)}}function s_(t,e,n){t==="focusin"?(jh(),Pa=e,Ha=n,Pa.attachEvent("onpropertychange",Rg)):t==="focusout"&&jh()}function a_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zl(Ha)}function o_(t,e){if(t==="click")return Zl(e)}function l_(t,e){if(t==="input"||t==="change")return Zl(e)}function c_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ti=typeof Object.is=="function"?Object.is:c_;function Wa(t,e){if(ti(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Mu.call(e,r)||!ti(t[r],e[r]))return!1}return!0}function Yh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qh(t,e){var n=Yh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yh(n)}}function Pg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Pg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Lg(){for(var t=window,e=vl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vl(t.document)}return e}function wf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function u_(t){var e=Lg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Pg(n.ownerDocument.documentElement,n)){if(i!==null&&wf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=qh(n,s);var a=qh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var d_=Ni&&"documentMode"in document&&11>=document.documentMode,_s=null,Vu=null,La=null,Gu=!1;function $h(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gu||_s==null||_s!==vl(i)||(i=_s,"selectionStart"in i&&wf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),La&&Wa(La,i)||(La=i,i=wl(Vu,"onSelect"),0<i.length&&(e=new Mf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=_s)))}function To(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ys={animationend:To("Animation","AnimationEnd"),animationiteration:To("Animation","AnimationIteration"),animationstart:To("Animation","AnimationStart"),transitionend:To("Transition","TransitionEnd")},wc={},Ig={};Ni&&(Ig=document.createElement("div").style,"AnimationEvent"in window||(delete ys.animationend.animation,delete ys.animationiteration.animation,delete ys.animationstart.animation),"TransitionEvent"in window||delete ys.transitionend.transition);function Jl(t){if(wc[t])return wc[t];if(!ys[t])return t;var e=ys[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ig)return wc[t]=e[n];return t}var Dg=Jl("animationend"),Ng=Jl("animationiteration"),Ug=Jl("animationstart"),Fg=Jl("transitionend"),Og=new Map,Kh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(t,e){Og.set(t,e),jr(e,[t])}for(var Ac=0;Ac<Kh.length;Ac++){var bc=Kh[Ac],f_=bc.toLowerCase(),h_=bc[0].toUpperCase()+bc.slice(1);_r(f_,"on"+h_)}_r(Dg,"onAnimationEnd");_r(Ng,"onAnimationIteration");_r(Ug,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(Fg,"onTransitionEnd");Os("onMouseEnter",["mouseout","mouseover"]);Os("onMouseLeave",["mouseout","mouseover"]);Os("onPointerEnter",["pointerout","pointerover"]);Os("onPointerLeave",["pointerout","pointerover"]);jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ea));function Zh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,fv(i,e,void 0,t),t.currentTarget=null}function kg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Zh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Zh(r,o,c),s=l}}}if(yl)throw t=Ou,yl=!1,Ou=null,t}function gt(t,e){var n=e[Yu];n===void 0&&(n=e[Yu]=new Set);var i=t+"__bubble";n.has(i)||(Bg(e,t,2,!1),n.add(i))}function Cc(t,e,n){var i=0;e&&(i|=4),Bg(n,t,i,e)}var wo="_reactListening"+Math.random().toString(36).slice(2);function Xa(t){if(!t[wo]){t[wo]=!0,jm.forEach(function(n){n!=="selectionchange"&&(p_.has(n)||Cc(n,!1,t),Cc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wo]||(e[wo]=!0,Cc("selectionchange",!1,e))}}function Bg(t,e,n,i){switch(Mg(e)){case 1:var r=Cv;break;case 4:r=Rv;break;default:r=yf}n=r.bind(null,e,n,t),r=void 0,!Fu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Rc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Ir(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}lg(function(){var c=s,f=gf(n),h=[];e:{var d=Og.get(t);if(d!==void 0){var p=Mf,_=t;switch(t){case"keypress":if(sl(n)===0)break e;case"keydown":case"keyup":p=Wv;break;case"focusin":_="focus",p=Mc;break;case"focusout":_="blur",p=Mc;break;case"beforeblur":case"afterblur":p=Mc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Bh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Iv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Yv;break;case Dg:case Ng:case Ug:p=Uv;break;case Fg:p=$v;break;case"scroll":p=Pv;break;case"wheel":p=Zv;break;case"copy":case"cut":case"paste":p=Ov;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Vh}var E=(e&4)!==0,m=!E&&t==="scroll",u=E?d!==null?d+"Capture":null:d;E=[];for(var v=c,M;v!==null;){M=v;var y=M.stateNode;if(M.tag===5&&y!==null&&(M=y,u!==null&&(y=Ba(v,u),y!=null&&E.push(ja(v,y,M)))),m)break;v=v.return}0<E.length&&(d=new p(d,_,null,n,f),h.push({event:d,listeners:E}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Nu&&(_=n.relatedTarget||n.fromElement)&&(Ir(_)||_[Ui]))break e;if((p||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?Ir(_):null,_!==null&&(m=Yr(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(E=Bh,y="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(E=Vh,y="onPointerLeave",u="onPointerEnter",v="pointer"),m=p==null?d:Ss(p),M=_==null?d:Ss(_),d=new E(y,v+"leave",p,n,f),d.target=m,d.relatedTarget=M,y=null,Ir(f)===c&&(E=new E(u,v+"enter",_,n,f),E.target=M,E.relatedTarget=m,y=E),m=y,p&&_)t:{for(E=p,u=_,v=0,M=E;M;M=ts(M))v++;for(M=0,y=u;y;y=ts(y))M++;for(;0<v-M;)E=ts(E),v--;for(;0<M-v;)u=ts(u),M--;for(;v--;){if(E===u||u!==null&&E===u.alternate)break t;E=ts(E),u=ts(u)}E=null}else E=null;p!==null&&Jh(h,d,p,E,!1),_!==null&&m!==null&&Jh(h,m,_,E,!0)}}e:{if(d=c?Ss(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var A=r_;else if(Wh(d))if(Cg)A=l_;else{A=a_;var T=s_}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=o_);if(A&&(A=A(t,c))){bg(h,A,n,f);break e}T&&T(t,d,c),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Ru(d,"number",d.value)}switch(T=c?Ss(c):window,t){case"focusin":(Wh(T)||T.contentEditable==="true")&&(_s=T,Vu=c,La=null);break;case"focusout":La=Vu=_s=null;break;case"mousedown":Gu=!0;break;case"contextmenu":case"mouseup":case"dragend":Gu=!1,$h(h,n,f);break;case"selectionchange":if(d_)break;case"keydown":case"keyup":$h(h,n,f)}var C;if(Tf)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else vs?wg(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(Tg&&n.locale!=="ko"&&(vs||g!=="onCompositionStart"?g==="onCompositionEnd"&&vs&&(C=Eg()):(rr=f,Sf="value"in rr?rr.value:rr.textContent,vs=!0)),T=wl(c,g),0<T.length&&(g=new zh(g,t,null,n,f),h.push({event:g,listeners:T}),C?g.data=C:(C=Ag(n),C!==null&&(g.data=C)))),(C=Qv?e_(t,n):t_(t,n))&&(c=wl(c,"onBeforeInput"),0<c.length&&(f=new zh("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=C))}kg(h,e)})}function ja(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ba(t,n),s!=null&&i.unshift(ja(t,s,r)),s=Ba(t,e),s!=null&&i.push(ja(t,s,r))),t=t.return}return i}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ba(n,s),l!=null&&a.unshift(ja(n,l,o))):r||(l=Ba(n,s),l!=null&&a.push(ja(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var m_=/\r\n?/g,g_=/\u0000|\uFFFD/g;function Qh(t){return(typeof t=="string"?t:""+t).replace(m_,`
`).replace(g_,"")}function Ao(t,e,n){if(e=Qh(e),Qh(t)!==e&&n)throw Error(re(425))}function Al(){}var Hu=null,Wu=null;function Xu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ju=typeof setTimeout=="function"?setTimeout:void 0,x_=typeof clearTimeout=="function"?clearTimeout:void 0,ep=typeof Promise=="function"?Promise:void 0,v_=typeof queueMicrotask=="function"?queueMicrotask:typeof ep<"u"?function(t){return ep.resolve(null).then(t).catch(__)}:ju;function __(t){setTimeout(function(){throw t})}function Pc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ga(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ga(e)}function ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function tp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zs=Math.random().toString(36).slice(2),ui="__reactFiber$"+Zs,Ya="__reactProps$"+Zs,Ui="__reactContainer$"+Zs,Yu="__reactEvents$"+Zs,y_="__reactListeners$"+Zs,S_="__reactHandles$"+Zs;function Ir(t){var e=t[ui];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ui]||n[ui]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=tp(t);t!==null;){if(n=t[ui])return n;t=tp(t)}return e}t=n,n=t.parentNode}return null}function ao(t){return t=t[ui]||t[Ui],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function Ql(t){return t[Ya]||null}var qu=[],Ms=-1;function yr(t){return{current:t}}function xt(t){0>Ms||(t.current=qu[Ms],qu[Ms]=null,Ms--)}function ht(t,e){Ms++,qu[Ms]=t.current,t.current=e}var gr={},ln=yr(gr),_n=yr(!1),Br=gr;function ks(t,e){var n=t.type.contextTypes;if(!n)return gr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function yn(t){return t=t.childContextTypes,t!=null}function bl(){xt(_n),xt(ln)}function np(t,e,n){if(ln.current!==gr)throw Error(re(168));ht(ln,e),ht(_n,n)}function zg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,sv(t)||"Unknown",r));return Et({},n,i)}function Cl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gr,Br=ln.current,ht(ln,t),ht(_n,_n.current),!0}function ip(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=zg(t,e,Br),i.__reactInternalMemoizedMergedChildContext=t,xt(_n),xt(ln),ht(ln,t)):xt(_n),ht(_n,n)}var Ai=null,ec=!1,Lc=!1;function Vg(t){Ai===null?Ai=[t]:Ai.push(t)}function M_(t){ec=!0,Vg(t)}function Sr(){if(!Lc&&Ai!==null){Lc=!0;var t=0,e=st;try{var n=Ai;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ai=null,ec=!1}catch(r){throw Ai!==null&&(Ai=Ai.slice(t+1)),fg(xf,Sr),r}finally{st=e,Lc=!1}}return null}var Es=[],Ts=0,Rl=null,Pl=0,kn=[],Bn=0,zr=null,Ci=1,Ri="";function br(t,e){Es[Ts++]=Pl,Es[Ts++]=Rl,Rl=t,Pl=e}function Gg(t,e,n){kn[Bn++]=Ci,kn[Bn++]=Ri,kn[Bn++]=zr,zr=t;var i=Ci;t=Ri;var r=32-Qn(i)-1;i&=~(1<<r),n+=1;var s=32-Qn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ci=1<<32-Qn(e)+r|n<<r|i,Ri=s+t}else Ci=1<<s|n<<r|i,Ri=t}function Af(t){t.return!==null&&(br(t,1),Gg(t,1,0))}function bf(t){for(;t===Rl;)Rl=Es[--Ts],Es[Ts]=null,Pl=Es[--Ts],Es[Ts]=null;for(;t===zr;)zr=kn[--Bn],kn[Bn]=null,Ri=kn[--Bn],kn[Bn]=null,Ci=kn[--Bn],kn[Bn]=null}var Pn=null,Rn=null,vt=!1,Kn=null;function Hg(t,e){var n=zn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function rp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pn=t,Rn=ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pn=t,Rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zr!==null?{id:Ci,overflow:Ri}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=zn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pn=t,Rn=null,!0):!1;default:return!1}}function $u(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ku(t){if(vt){var e=Rn;if(e){var n=e;if(!rp(t,e)){if($u(t))throw Error(re(418));e=ur(n.nextSibling);var i=Pn;e&&rp(t,e)?Hg(i,n):(t.flags=t.flags&-4097|2,vt=!1,Pn=t)}}else{if($u(t))throw Error(re(418));t.flags=t.flags&-4097|2,vt=!1,Pn=t}}}function sp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pn=t}function bo(t){if(t!==Pn)return!1;if(!vt)return sp(t),vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xu(t.type,t.memoizedProps)),e&&(e=Rn)){if($u(t))throw Wg(),Error(re(418));for(;e;)Hg(t,e),e=ur(e.nextSibling)}if(sp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rn=ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rn=null}}else Rn=Pn?ur(t.stateNode.nextSibling):null;return!0}function Wg(){for(var t=Rn;t;)t=ur(t.nextSibling)}function Bs(){Rn=Pn=null,vt=!1}function Cf(t){Kn===null?Kn=[t]:Kn.push(t)}var E_=zi.ReactCurrentBatchConfig;function ua(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function Co(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ap(t){var e=t._init;return e(t._payload)}function Xg(t){function e(u,v){if(t){var M=u.deletions;M===null?(u.deletions=[v],u.flags|=16):M.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=pr(u,v),u.index=0,u.sibling=null,u}function s(u,v,M){return u.index=M,t?(M=u.alternate,M!==null?(M=M.index,M<v?(u.flags|=2,v):M):(u.flags|=2,v)):(u.flags|=1048576,v)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,v,M,y){return v===null||v.tag!==6?(v=kc(M,u.mode,y),v.return=u,v):(v=r(v,M),v.return=u,v)}function l(u,v,M,y){var A=M.type;return A===xs?f(u,v,M.props.children,y,M.key):v!==null&&(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ji&&ap(A)===v.type)?(y=r(v,M.props),y.ref=ua(u,v,M),y.return=u,y):(y=fl(M.type,M.key,M.props,null,u.mode,y),y.ref=ua(u,v,M),y.return=u,y)}function c(u,v,M,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==M.containerInfo||v.stateNode.implementation!==M.implementation?(v=Bc(M,u.mode,y),v.return=u,v):(v=r(v,M.children||[]),v.return=u,v)}function f(u,v,M,y,A){return v===null||v.tag!==7?(v=kr(M,u.mode,y,A),v.return=u,v):(v=r(v,M),v.return=u,v)}function h(u,v,M){if(typeof v=="string"&&v!==""||typeof v=="number")return v=kc(""+v,u.mode,M),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case xo:return M=fl(v.type,v.key,v.props,null,u.mode,M),M.ref=ua(u,null,v),M.return=u,M;case gs:return v=Bc(v,u.mode,M),v.return=u,v;case Ji:var y=v._init;return h(u,y(v._payload),M)}if(Sa(v)||sa(v))return v=kr(v,u.mode,M,null),v.return=u,v;Co(u,v)}return null}function d(u,v,M,y){var A=v!==null?v.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return A!==null?null:o(u,v,""+M,y);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case xo:return M.key===A?l(u,v,M,y):null;case gs:return M.key===A?c(u,v,M,y):null;case Ji:return A=M._init,d(u,v,A(M._payload),y)}if(Sa(M)||sa(M))return A!==null?null:f(u,v,M,y,null);Co(u,M)}return null}function p(u,v,M,y,A){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(M)||null,o(v,u,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case xo:return u=u.get(y.key===null?M:y.key)||null,l(v,u,y,A);case gs:return u=u.get(y.key===null?M:y.key)||null,c(v,u,y,A);case Ji:var T=y._init;return p(u,v,M,T(y._payload),A)}if(Sa(y)||sa(y))return u=u.get(M)||null,f(v,u,y,A,null);Co(v,y)}return null}function _(u,v,M,y){for(var A=null,T=null,C=v,g=v=0,b=null;C!==null&&g<M.length;g++){C.index>g?(b=C,C=null):b=C.sibling;var P=d(u,C,M[g],y);if(P===null){C===null&&(C=b);break}t&&C&&P.alternate===null&&e(u,C),v=s(P,v,g),T===null?A=P:T.sibling=P,T=P,C=b}if(g===M.length)return n(u,C),vt&&br(u,g),A;if(C===null){for(;g<M.length;g++)C=h(u,M[g],y),C!==null&&(v=s(C,v,g),T===null?A=C:T.sibling=C,T=C);return vt&&br(u,g),A}for(C=i(u,C);g<M.length;g++)b=p(C,u,g,M[g],y),b!==null&&(t&&b.alternate!==null&&C.delete(b.key===null?g:b.key),v=s(b,v,g),T===null?A=b:T.sibling=b,T=b);return t&&C.forEach(function(L){return e(u,L)}),vt&&br(u,g),A}function E(u,v,M,y){var A=sa(M);if(typeof A!="function")throw Error(re(150));if(M=A.call(M),M==null)throw Error(re(151));for(var T=A=null,C=v,g=v=0,b=null,P=M.next();C!==null&&!P.done;g++,P=M.next()){C.index>g?(b=C,C=null):b=C.sibling;var L=d(u,C,P.value,y);if(L===null){C===null&&(C=b);break}t&&C&&L.alternate===null&&e(u,C),v=s(L,v,g),T===null?A=L:T.sibling=L,T=L,C=b}if(P.done)return n(u,C),vt&&br(u,g),A;if(C===null){for(;!P.done;g++,P=M.next())P=h(u,P.value,y),P!==null&&(v=s(P,v,g),T===null?A=P:T.sibling=P,T=P);return vt&&br(u,g),A}for(C=i(u,C);!P.done;g++,P=M.next())P=p(C,u,g,P.value,y),P!==null&&(t&&P.alternate!==null&&C.delete(P.key===null?g:P.key),v=s(P,v,g),T===null?A=P:T.sibling=P,T=P);return t&&C.forEach(function(F){return e(u,F)}),vt&&br(u,g),A}function m(u,v,M,y){if(typeof M=="object"&&M!==null&&M.type===xs&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case xo:e:{for(var A=M.key,T=v;T!==null;){if(T.key===A){if(A=M.type,A===xs){if(T.tag===7){n(u,T.sibling),v=r(T,M.props.children),v.return=u,u=v;break e}}else if(T.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ji&&ap(A)===T.type){n(u,T.sibling),v=r(T,M.props),v.ref=ua(u,T,M),v.return=u,u=v;break e}n(u,T);break}else e(u,T);T=T.sibling}M.type===xs?(v=kr(M.props.children,u.mode,y,M.key),v.return=u,u=v):(y=fl(M.type,M.key,M.props,null,u.mode,y),y.ref=ua(u,v,M),y.return=u,u=y)}return a(u);case gs:e:{for(T=M.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===M.containerInfo&&v.stateNode.implementation===M.implementation){n(u,v.sibling),v=r(v,M.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=Bc(M,u.mode,y),v.return=u,u=v}return a(u);case Ji:return T=M._init,m(u,v,T(M._payload),y)}if(Sa(M))return _(u,v,M,y);if(sa(M))return E(u,v,M,y);Co(u,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,M),v.return=u,u=v):(n(u,v),v=kc(M,u.mode,y),v.return=u,u=v),a(u)):n(u,v)}return m}var zs=Xg(!0),jg=Xg(!1),Ll=yr(null),Il=null,ws=null,Rf=null;function Pf(){Rf=ws=Il=null}function Lf(t){var e=Ll.current;xt(Ll),t._currentValue=e}function Zu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Is(t,e){Il=t,Rf=ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vn=!0),t.firstContext=null)}function Gn(t){var e=t._currentValue;if(Rf!==t)if(t={context:t,memoizedValue:e,next:null},ws===null){if(Il===null)throw Error(re(308));ws=t,Il.dependencies={lanes:0,firstContext:t}}else ws=ws.next=t;return e}var Dr=null;function If(t){Dr===null?Dr=[t]:Dr.push(t)}function Yg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,If(e)):(n.next=r.next,r.next=n),e.interleaved=n,Fi(t,i)}function Fi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qi=!1;function Df(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Li(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function dr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Fi(t,n)}return r=i.interleaved,r===null?(e.next=e,If(i)):(e.next=r.next,r.next=e),i.interleaved=e,Fi(t,n)}function al(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,vf(t,n)}}function op(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Dl(t,e,n,i){var r=t.updateQueue;Qi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,f=c=l=null,o=s;do{var d=o.lane,p=o.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,E=o;switch(d=e,p=n,E.tag){case 1:if(_=E.payload,typeof _=="function"){h=_.call(p,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=E.payload,d=typeof _=="function"?_.call(p,h,d):_,d==null)break e;h=Et({},h,d);break e;case 2:Qi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else p={eventTime:p,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=p,l=h):f=f.next=p,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Gr|=a,t.lanes=a,t.memoizedState=h}}function lp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var oo={},pi=yr(oo),qa=yr(oo),$a=yr(oo);function Nr(t){if(t===oo)throw Error(re(174));return t}function Nf(t,e){switch(ht($a,e),ht(qa,t),ht(pi,oo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Lu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Lu(e,t)}xt(pi),ht(pi,e)}function Vs(){xt(pi),xt(qa),xt($a)}function $g(t){Nr($a.current);var e=Nr(pi.current),n=Lu(e,t.type);e!==n&&(ht(qa,t),ht(pi,n))}function Uf(t){qa.current===t&&(xt(pi),xt(qa))}var yt=yr(0);function Nl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ic=[];function Ff(){for(var t=0;t<Ic.length;t++)Ic[t]._workInProgressVersionPrimary=null;Ic.length=0}var ol=zi.ReactCurrentDispatcher,Dc=zi.ReactCurrentBatchConfig,Vr=0,Mt=null,kt=null,Ht=null,Ul=!1,Ia=!1,Ka=0,T_=0;function Qt(){throw Error(re(321))}function Of(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ti(t[n],e[n]))return!1;return!0}function kf(t,e,n,i,r,s){if(Vr=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ol.current=t===null||t.memoizedState===null?C_:R_,t=n(i,r),Ia){s=0;do{if(Ia=!1,Ka=0,25<=s)throw Error(re(301));s+=1,Ht=kt=null,e.updateQueue=null,ol.current=P_,t=n(i,r)}while(Ia)}if(ol.current=Fl,e=kt!==null&&kt.next!==null,Vr=0,Ht=kt=Mt=null,Ul=!1,e)throw Error(re(300));return t}function Bf(){var t=Ka!==0;return Ka=0,t}function li(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?Mt.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function Hn(){if(kt===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var e=Ht===null?Mt.memoizedState:Ht.next;if(e!==null)Ht=e,kt=t;else{if(t===null)throw Error(re(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Ht===null?Mt.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function Za(t,e){return typeof e=="function"?e(t):e}function Nc(t){var e=Hn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=kt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var f=c.lane;if((Vr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,Mt.lanes|=f,Gr|=f}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,ti(i,e.memoizedState)||(vn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,Gr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Uc(t){var e=Hn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ti(s,e.memoizedState)||(vn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Kg(){}function Zg(t,e){var n=Mt,i=Hn(),r=e(),s=!ti(i.memoizedState,r);if(s&&(i.memoizedState=r,vn=!0),i=i.queue,zf(e0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ht!==null&&Ht.memoizedState.tag&1){if(n.flags|=2048,Ja(9,Qg.bind(null,n,i,r,e),void 0,null),Xt===null)throw Error(re(349));Vr&30||Jg(n,e,r)}return r}function Jg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Qg(t,e,n,i){e.value=n,e.getSnapshot=i,t0(e)&&n0(t)}function e0(t,e,n){return n(function(){t0(e)&&n0(t)})}function t0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ti(t,n)}catch{return!0}}function n0(t){var e=Fi(t,1);e!==null&&ei(e,t,1,-1)}function cp(t){var e=li();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:t},e.queue=t,t=t.dispatch=b_.bind(null,Mt,t),[e.memoizedState,t]}function Ja(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function i0(){return Hn().memoizedState}function ll(t,e,n,i){var r=li();Mt.flags|=t,r.memoizedState=Ja(1|e,n,void 0,i===void 0?null:i)}function tc(t,e,n,i){var r=Hn();i=i===void 0?null:i;var s=void 0;if(kt!==null){var a=kt.memoizedState;if(s=a.destroy,i!==null&&Of(i,a.deps)){r.memoizedState=Ja(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=Ja(1|e,n,s,i)}function up(t,e){return ll(8390656,8,t,e)}function zf(t,e){return tc(2048,8,t,e)}function r0(t,e){return tc(4,2,t,e)}function s0(t,e){return tc(4,4,t,e)}function a0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function o0(t,e,n){return n=n!=null?n.concat([t]):null,tc(4,4,a0.bind(null,e,t),n)}function Vf(){}function l0(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Of(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function c0(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Of(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function u0(t,e,n){return Vr&21?(ti(n,e)||(n=mg(),Mt.lanes|=n,Gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vn=!0),t.memoizedState=n)}function w_(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=Dc.transition;Dc.transition={};try{t(!1),e()}finally{st=n,Dc.transition=i}}function d0(){return Hn().memoizedState}function A_(t,e,n){var i=hr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},f0(t))h0(e,n);else if(n=Yg(t,e,n,i),n!==null){var r=fn();ei(n,t,i,r),p0(n,e,i)}}function b_(t,e,n){var i=hr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(f0(t))h0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ti(o,a)){var l=e.interleaved;l===null?(r.next=r,If(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Yg(t,e,r,i),n!==null&&(r=fn(),ei(n,t,i,r),p0(n,e,i))}}function f0(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function h0(t,e){Ia=Ul=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function p0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,vf(t,n)}}var Fl={readContext:Gn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},C_={readContext:Gn,useCallback:function(t,e){return li().memoizedState=[t,e===void 0?null:e],t},useContext:Gn,useEffect:up,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ll(4194308,4,a0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ll(4194308,4,t,e)},useInsertionEffect:function(t,e){return ll(4,2,t,e)},useMemo:function(t,e){var n=li();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=li();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=A_.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=li();return t={current:t},e.memoizedState=t},useState:cp,useDebugValue:Vf,useDeferredValue:function(t){return li().memoizedState=t},useTransition:function(){var t=cp(!1),e=t[0];return t=w_.bind(null,t[1]),li().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=li();if(vt){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Xt===null)throw Error(re(349));Vr&30||Jg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,up(e0.bind(null,i,s,t),[t]),i.flags|=2048,Ja(9,Qg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=li(),e=Xt.identifierPrefix;if(vt){var n=Ri,i=Ci;n=(i&~(1<<32-Qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ka++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=T_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},R_={readContext:Gn,useCallback:l0,useContext:Gn,useEffect:zf,useImperativeHandle:o0,useInsertionEffect:r0,useLayoutEffect:s0,useMemo:c0,useReducer:Nc,useRef:i0,useState:function(){return Nc(Za)},useDebugValue:Vf,useDeferredValue:function(t){var e=Hn();return u0(e,kt.memoizedState,t)},useTransition:function(){var t=Nc(Za)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:Kg,useSyncExternalStore:Zg,useId:d0,unstable_isNewReconciler:!1},P_={readContext:Gn,useCallback:l0,useContext:Gn,useEffect:zf,useImperativeHandle:o0,useInsertionEffect:r0,useLayoutEffect:s0,useMemo:c0,useReducer:Uc,useRef:i0,useState:function(){return Uc(Za)},useDebugValue:Vf,useDeferredValue:function(t){var e=Hn();return kt===null?e.memoizedState=t:u0(e,kt.memoizedState,t)},useTransition:function(){var t=Uc(Za)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:Kg,useSyncExternalStore:Zg,useId:d0,unstable_isNewReconciler:!1};function qn(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ju(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var nc={isMounted:function(t){return(t=t._reactInternals)?Yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=fn(),r=hr(t),s=Li(i,r);s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,r),e!==null&&(ei(e,t,r,i),al(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=fn(),r=hr(t),s=Li(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,r),e!==null&&(ei(e,t,r,i),al(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=fn(),i=hr(t),r=Li(n,i);r.tag=2,e!=null&&(r.callback=e),e=dr(t,r,i),e!==null&&(ei(e,t,i,n),al(e,t,i))}};function dp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Wa(n,i)||!Wa(r,s):!0}function m0(t,e,n){var i=!1,r=gr,s=e.contextType;return typeof s=="object"&&s!==null?s=Gn(s):(r=yn(e)?Br:ln.current,i=e.contextTypes,s=(i=i!=null)?ks(t,r):gr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=nc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function fp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&nc.enqueueReplaceState(e,e.state,null)}function Qu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Df(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Gn(s):(s=yn(e)?Br:ln.current,r.context=ks(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ju(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&nc.enqueueReplaceState(r,r.state,null),Dl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Gs(t,e){try{var n="",i=e;do n+=rv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Fc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ed(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var L_=typeof WeakMap=="function"?WeakMap:Map;function g0(t,e,n){n=Li(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){kl||(kl=!0,ud=i),ed(t,e)},n}function x0(t,e,n){n=Li(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ed(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ed(t,e),typeof i!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function hp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new L_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=X_.bind(null,t,e,n),e.then(t,t))}function pp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function mp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Li(-1,1),e.tag=2,dr(n,e,1))),n.lanes|=1),t)}var I_=zi.ReactCurrentOwner,vn=!1;function dn(t,e,n,i){e.child=t===null?jg(e,null,n,i):zs(e,t.child,n,i)}function gp(t,e,n,i,r){n=n.render;var s=e.ref;return Is(e,r),i=kf(t,e,n,i,s,r),n=Bf(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Oi(t,e,r)):(vt&&n&&Af(e),e.flags|=1,dn(t,e,i,r),e.child)}function xp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!$f(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,v0(t,e,s,i,r)):(t=fl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wa,n(a,i)&&t.ref===e.ref)return Oi(t,e,r)}return e.flags|=1,t=pr(s,i),t.ref=e.ref,t.return=e,e.child=t}function v0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Wa(s,i)&&t.ref===e.ref)if(vn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(vn=!0);else return e.lanes=t.lanes,Oi(t,e,r)}return td(t,e,n,i,r)}function _0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(bs,An),An|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(bs,An),An|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ht(bs,An),An|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ht(bs,An),An|=i;return dn(t,e,r,n),e.child}function y0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function td(t,e,n,i,r){var s=yn(n)?Br:ln.current;return s=ks(e,s),Is(e,r),n=kf(t,e,n,i,s,r),i=Bf(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Oi(t,e,r)):(vt&&i&&Af(e),e.flags|=1,dn(t,e,n,r),e.child)}function vp(t,e,n,i,r){if(yn(n)){var s=!0;Cl(e)}else s=!1;if(Is(e,r),e.stateNode===null)cl(t,e),m0(e,n,i),Qu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Gn(c):(c=yn(n)?Br:ln.current,c=ks(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&fp(e,a,i,c),Qi=!1;var d=e.memoizedState;a.state=d,Dl(e,i,a,r),l=e.memoizedState,o!==i||d!==l||_n.current||Qi?(typeof f=="function"&&(Ju(e,n,f,i),l=e.memoizedState),(o=Qi||dp(e,n,o,i,d,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,qg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:qn(e.type,o),a.props=c,h=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Gn(l):(l=yn(n)?Br:ln.current,l=ks(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||d!==l)&&fp(e,a,i,l),Qi=!1,d=e.memoizedState,a.state=d,Dl(e,i,a,r);var _=e.memoizedState;o!==h||d!==_||_n.current||Qi?(typeof p=="function"&&(Ju(e,n,p,i),_=e.memoizedState),(c=Qi||dp(e,n,c,i,d,_,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return nd(t,e,n,i,s,r)}function nd(t,e,n,i,r,s){y0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&ip(e,n,!1),Oi(t,e,s);i=e.stateNode,I_.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=zs(e,t.child,null,s),e.child=zs(e,null,o,s)):dn(t,e,o,s),e.memoizedState=i.state,r&&ip(e,n,!0),e.child}function S0(t){var e=t.stateNode;e.pendingContext?np(t,e.pendingContext,e.pendingContext!==e.context):e.context&&np(t,e.context,!1),Nf(t,e.containerInfo)}function _p(t,e,n,i,r){return Bs(),Cf(r),e.flags|=256,dn(t,e,n,i),e.child}var id={dehydrated:null,treeContext:null,retryLane:0};function rd(t){return{baseLanes:t,cachePool:null,transitions:null}}function M0(t,e,n){var i=e.pendingProps,r=yt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(yt,r&1),t===null)return Ku(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=sc(a,i,0,null),t=kr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=rd(n),e.memoizedState=id,t):Gf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return D_(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=pr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=pr(o,s):(s=kr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?rd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=id,i}return s=t.child,t=s.sibling,i=pr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Gf(t,e){return e=sc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ro(t,e,n,i){return i!==null&&Cf(i),zs(e,t.child,null,n),t=Gf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function D_(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Fc(Error(re(422))),Ro(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=sc({mode:"visible",children:i.children},r,0,null),s=kr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&zs(e,t.child,null,a),e.child.memoizedState=rd(a),e.memoizedState=id,s);if(!(e.mode&1))return Ro(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(re(419)),i=Fc(s,i,void 0),Ro(t,e,a,i)}if(o=(a&t.childLanes)!==0,vn||o){if(i=Xt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Fi(t,r),ei(i,t,r,-1))}return qf(),i=Fc(Error(re(421))),Ro(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=j_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Rn=ur(r.nextSibling),Pn=e,vt=!0,Kn=null,t!==null&&(kn[Bn++]=Ci,kn[Bn++]=Ri,kn[Bn++]=zr,Ci=t.id,Ri=t.overflow,zr=e),e=Gf(e,i.children),e.flags|=4096,e)}function yp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Zu(t.return,e,n)}function Oc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function E0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(dn(t,e,i.children,n),i=yt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&yp(t,n,e);else if(t.tag===19)yp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Nl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Oc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Nl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Oc(e,!0,n,null,s);break;case"together":Oc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function cl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Oi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function N_(t,e,n){switch(e.tag){case 3:S0(e),Bs();break;case 5:$g(e);break;case 1:yn(e.type)&&Cl(e);break;case 4:Nf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(Ll,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(yt,yt.current&1),e.flags|=128,null):n&e.child.childLanes?M0(t,e,n):(ht(yt,yt.current&1),t=Oi(t,e,n),t!==null?t.sibling:null);ht(yt,yt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return E0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(yt,yt.current),i)break;return null;case 22:case 23:return e.lanes=0,_0(t,e,n)}return Oi(t,e,n)}var T0,sd,w0,A0;T0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sd=function(){};w0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Nr(pi.current);var s=null;switch(n){case"input":r=bu(t,r),i=bu(t,i),s=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),s=[];break;case"textarea":r=Pu(t,r),i=Pu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Al)}Iu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Oa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Oa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&gt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};A0=function(t,e,n,i){n!==i&&(e.flags|=4)};function da(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function en(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function U_(t,e,n){var i=e.pendingProps;switch(bf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return yn(e.type)&&bl(),en(e),null;case 3:return i=e.stateNode,Vs(),xt(_n),xt(ln),Ff(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(bo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Kn!==null&&(hd(Kn),Kn=null))),sd(t,e),en(e),null;case 5:Uf(e);var r=Nr($a.current);if(n=e.type,t!==null&&e.stateNode!=null)w0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return en(e),null}if(t=Nr(pi.current),bo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ui]=e,i[Ya]=s,t=(e.mode&1)!==0,n){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<Ea.length;r++)gt(Ea[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":Rh(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":Lh(i,s),gt("invalid",i)}Iu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Ao(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Ao(i.textContent,o,t),r=["children",""+o]):Oa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&gt("scroll",i)}switch(n){case"input":vo(i),Ph(i,s,!0);break;case"textarea":vo(i),Ih(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Al)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=eg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ui]=e,t[Ya]=i,T0(t,e,!1,!1),e.stateNode=t;e:{switch(a=Du(n,i),n){case"dialog":gt("cancel",t),gt("close",t),r=i;break;case"iframe":case"object":case"embed":gt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ea.length;r++)gt(Ea[r],t);r=i;break;case"source":gt("error",t),r=i;break;case"img":case"image":case"link":gt("error",t),gt("load",t),r=i;break;case"details":gt("toggle",t),r=i;break;case"input":Rh(t,i),r=bu(t,i),gt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),gt("invalid",t);break;case"textarea":Lh(t,i),r=Pu(t,i),gt("invalid",t);break;default:r=i}Iu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?ig(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&tg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ka(t,l):typeof l=="number"&&ka(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Oa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",t):l!=null&&ff(t,s,l,a))}switch(n){case"input":vo(t),Ph(t,i,!1);break;case"textarea":vo(t),Ih(t);break;case"option":i.value!=null&&t.setAttribute("value",""+mr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Cs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Cs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Al)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(t&&e.stateNode!=null)A0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=Nr($a.current),Nr(pi.current),bo(e)){if(i=e.stateNode,n=e.memoizedProps,i[ui]=e,(s=i.nodeValue!==n)&&(t=Pn,t!==null))switch(t.tag){case 3:Ao(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ao(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ui]=e,e.stateNode=i}return en(e),null;case 13:if(xt(yt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(vt&&Rn!==null&&e.mode&1&&!(e.flags&128))Wg(),Bs(),e.flags|=98560,s=!1;else if(s=bo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[ui]=e}else Bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),s=!1}else Kn!==null&&(hd(Kn),Kn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||yt.current&1?Bt===0&&(Bt=3):qf())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return Vs(),sd(t,e),t===null&&Xa(e.stateNode.containerInfo),en(e),null;case 10:return Lf(e.type._context),en(e),null;case 17:return yn(e.type)&&bl(),en(e),null;case 19:if(xt(yt),s=e.memoizedState,s===null)return en(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)da(s,!1);else{if(Bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Nl(t),a!==null){for(e.flags|=128,da(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(yt,yt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Lt()>Hs&&(e.flags|=128,i=!0,da(s,!1),e.lanes=4194304)}else{if(!i)if(t=Nl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),da(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!vt)return en(e),null}else 2*Lt()-s.renderingStartTime>Hs&&n!==1073741824&&(e.flags|=128,i=!0,da(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Lt(),e.sibling=null,n=yt.current,ht(yt,i?n&1|2:n&1),e):(en(e),null);case 22:case 23:return Yf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?An&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function F_(t,e){switch(bf(e),e.tag){case 1:return yn(e.type)&&bl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vs(),xt(_n),xt(ln),Ff(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Uf(e),null;case 13:if(xt(yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));Bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xt(yt),null;case 4:return Vs(),null;case 10:return Lf(e.type._context),null;case 22:case 23:return Yf(),null;case 24:return null;default:return null}}var Po=!1,sn=!1,O_=typeof WeakSet=="function"?WeakSet:Set,ye=null;function As(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){At(t,e,i)}else n.current=null}function ad(t,e,n){try{n()}catch(i){At(t,e,i)}}var Sp=!1;function k_(t,e){if(Hu=El,t=Lg(),wf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++c===r&&(o=a),d===s&&++f===i&&(l=a),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wu={focusedElem:t,selectionRange:n},El=!1,ye=e;ye!==null;)if(e=ye,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ye=t;else for(;ye!==null;){e=ye;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var E=_.memoizedProps,m=_.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?E:qn(e.type,E),m);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var M=e.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(y){At(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,ye=t;break}ye=e.return}return _=Sp,Sp=!1,_}function Da(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ad(e,n,s)}r=r.next}while(r!==i)}}function ic(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function od(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function b0(t){var e=t.alternate;e!==null&&(t.alternate=null,b0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ui],delete e[Ya],delete e[Yu],delete e[y_],delete e[S_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function C0(t){return t.tag===5||t.tag===3||t.tag===4}function Mp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||C0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ld(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Al));else if(i!==4&&(t=t.child,t!==null))for(ld(t,e,n),t=t.sibling;t!==null;)ld(t,e,n),t=t.sibling}function cd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(cd(t,e,n),t=t.sibling;t!==null;)cd(t,e,n),t=t.sibling}var Yt=null,$n=!1;function Xi(t,e,n){for(n=n.child;n!==null;)R0(t,e,n),n=n.sibling}function R0(t,e,n){if(hi&&typeof hi.onCommitFiberUnmount=="function")try{hi.onCommitFiberUnmount($l,n)}catch{}switch(n.tag){case 5:sn||As(n,e);case 6:var i=Yt,r=$n;Yt=null,Xi(t,e,n),Yt=i,$n=r,Yt!==null&&($n?(t=Yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Yt.removeChild(n.stateNode));break;case 18:Yt!==null&&($n?(t=Yt,n=n.stateNode,t.nodeType===8?Pc(t.parentNode,n):t.nodeType===1&&Pc(t,n),Ga(t)):Pc(Yt,n.stateNode));break;case 4:i=Yt,r=$n,Yt=n.stateNode.containerInfo,$n=!0,Xi(t,e,n),Yt=i,$n=r;break;case 0:case 11:case 14:case 15:if(!sn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&ad(n,e,a),r=r.next}while(r!==i)}Xi(t,e,n);break;case 1:if(!sn&&(As(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){At(n,e,o)}Xi(t,e,n);break;case 21:Xi(t,e,n);break;case 22:n.mode&1?(sn=(i=sn)||n.memoizedState!==null,Xi(t,e,n),sn=i):Xi(t,e,n);break;default:Xi(t,e,n)}}function Ep(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new O_),e.forEach(function(i){var r=Y_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Wn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Yt=o.stateNode,$n=!1;break e;case 3:Yt=o.stateNode.containerInfo,$n=!0;break e;case 4:Yt=o.stateNode.containerInfo,$n=!0;break e}o=o.return}if(Yt===null)throw Error(re(160));R0(s,a,r),Yt=null,$n=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){At(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)P0(e,t),e=e.sibling}function P0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wn(e,t),si(t),i&4){try{Da(3,t,t.return),ic(3,t)}catch(E){At(t,t.return,E)}try{Da(5,t,t.return)}catch(E){At(t,t.return,E)}}break;case 1:Wn(e,t),si(t),i&512&&n!==null&&As(n,n.return);break;case 5:if(Wn(e,t),si(t),i&512&&n!==null&&As(n,n.return),t.flags&32){var r=t.stateNode;try{ka(r,"")}catch(E){At(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Jm(r,s),Du(o,a);var c=Du(o,s);for(a=0;a<l.length;a+=2){var f=l[a],h=l[a+1];f==="style"?ig(r,h):f==="dangerouslySetInnerHTML"?tg(r,h):f==="children"?ka(r,h):ff(r,f,h,c)}switch(o){case"input":Cu(r,s);break;case"textarea":Qm(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Cs(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Cs(r,!!s.multiple,s.defaultValue,!0):Cs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ya]=s}catch(E){At(t,t.return,E)}}break;case 6:if(Wn(e,t),si(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){At(t,t.return,E)}}break;case 3:if(Wn(e,t),si(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ga(e.containerInfo)}catch(E){At(t,t.return,E)}break;case 4:Wn(e,t),si(t);break;case 13:Wn(e,t),si(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Xf=Lt())),i&4&&Ep(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(sn=(c=sn)||f,Wn(e,t),sn=c):Wn(e,t),si(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(ye=t,f=t.child;f!==null;){for(h=ye=f;ye!==null;){switch(d=ye,p=d.child,d.tag){case 0:case 11:case 14:case 15:Da(4,d,d.return);break;case 1:As(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(E){At(i,n,E)}}break;case 5:As(d,d.return);break;case 22:if(d.memoizedState!==null){wp(h);continue}}p!==null?(p.return=d,ye=p):wp(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=ng("display",a))}catch(E){At(t,t.return,E)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(E){At(t,t.return,E)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Wn(e,t),si(t),i&4&&Ep(t);break;case 21:break;default:Wn(e,t),si(t)}}function si(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(C0(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ka(r,""),i.flags&=-33);var s=Mp(t);cd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Mp(t);ld(t,o,a);break;default:throw Error(re(161))}}catch(l){At(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function B_(t,e,n){ye=t,L0(t)}function L0(t,e,n){for(var i=(t.mode&1)!==0;ye!==null;){var r=ye,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Po;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||sn;o=Po;var c=sn;if(Po=a,(sn=l)&&!c)for(ye=r;ye!==null;)a=ye,l=a.child,a.tag===22&&a.memoizedState!==null?Ap(r):l!==null?(l.return=a,ye=l):Ap(r);for(;s!==null;)ye=s,L0(s),s=s.sibling;ye=r,Po=o,sn=c}Tp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ye=s):Tp(t)}}function Tp(t){for(;ye!==null;){var e=ye;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:sn||ic(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!sn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:qn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&lp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}lp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Ga(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}sn||e.flags&512&&od(e)}catch(d){At(e,e.return,d)}}if(e===t){ye=null;break}if(n=e.sibling,n!==null){n.return=e.return,ye=n;break}ye=e.return}}function wp(t){for(;ye!==null;){var e=ye;if(e===t){ye=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ye=n;break}ye=e.return}}function Ap(t){for(;ye!==null;){var e=ye;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ic(4,e)}catch(l){At(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){At(e,r,l)}}var s=e.return;try{od(e)}catch(l){At(e,s,l)}break;case 5:var a=e.return;try{od(e)}catch(l){At(e,a,l)}}}catch(l){At(e,e.return,l)}if(e===t){ye=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ye=o;break}ye=e.return}}var z_=Math.ceil,Ol=zi.ReactCurrentDispatcher,Hf=zi.ReactCurrentOwner,Vn=zi.ReactCurrentBatchConfig,tt=0,Xt=null,Nt=null,$t=0,An=0,bs=yr(0),Bt=0,Qa=null,Gr=0,rc=0,Wf=0,Na=null,xn=null,Xf=0,Hs=1/0,wi=null,kl=!1,ud=null,fr=null,Lo=!1,sr=null,Bl=0,Ua=0,dd=null,ul=-1,dl=0;function fn(){return tt&6?Lt():ul!==-1?ul:ul=Lt()}function hr(t){return t.mode&1?tt&2&&$t!==0?$t&-$t:E_.transition!==null?(dl===0&&(dl=mg()),dl):(t=st,t!==0||(t=window.event,t=t===void 0?16:Mg(t.type)),t):1}function ei(t,e,n,i){if(50<Ua)throw Ua=0,dd=null,Error(re(185));ro(t,n,i),(!(tt&2)||t!==Xt)&&(t===Xt&&(!(tt&2)&&(rc|=n),Bt===4&&nr(t,$t)),Sn(t,i),n===1&&tt===0&&!(e.mode&1)&&(Hs=Lt()+500,ec&&Sr()))}function Sn(t,e){var n=t.callbackNode;Ev(t,e);var i=Ml(t,t===Xt?$t:0);if(i===0)n!==null&&Uh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Uh(n),e===1)t.tag===0?M_(bp.bind(null,t)):Vg(bp.bind(null,t)),v_(function(){!(tt&6)&&Sr()}),n=null;else{switch(gg(i)){case 1:n=xf;break;case 4:n=hg;break;case 16:n=Sl;break;case 536870912:n=pg;break;default:n=Sl}n=B0(n,I0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function I0(t,e){if(ul=-1,dl=0,tt&6)throw Error(re(327));var n=t.callbackNode;if(Ds()&&t.callbackNode!==n)return null;var i=Ml(t,t===Xt?$t:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=zl(t,i);else{e=i;var r=tt;tt|=2;var s=N0();(Xt!==t||$t!==e)&&(wi=null,Hs=Lt()+500,Or(t,e));do try{H_();break}catch(o){D0(t,o)}while(!0);Pf(),Ol.current=s,tt=r,Nt!==null?e=0:(Xt=null,$t=0,e=Bt)}if(e!==0){if(e===2&&(r=ku(t),r!==0&&(i=r,e=fd(t,r))),e===1)throw n=Qa,Or(t,0),nr(t,i),Sn(t,Lt()),n;if(e===6)nr(t,i);else{if(r=t.current.alternate,!(i&30)&&!V_(r)&&(e=zl(t,i),e===2&&(s=ku(t),s!==0&&(i=s,e=fd(t,s))),e===1))throw n=Qa,Or(t,0),nr(t,i),Sn(t,Lt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:Cr(t,xn,wi);break;case 3:if(nr(t,i),(i&130023424)===i&&(e=Xf+500-Lt(),10<e)){if(Ml(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){fn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ju(Cr.bind(null,t,xn,wi),e);break}Cr(t,xn,wi);break;case 4:if(nr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Qn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*z_(i/1960))-i,10<i){t.timeoutHandle=ju(Cr.bind(null,t,xn,wi),i);break}Cr(t,xn,wi);break;case 5:Cr(t,xn,wi);break;default:throw Error(re(329))}}}return Sn(t,Lt()),t.callbackNode===n?I0.bind(null,t):null}function fd(t,e){var n=Na;return t.current.memoizedState.isDehydrated&&(Or(t,e).flags|=256),t=zl(t,e),t!==2&&(e=xn,xn=n,e!==null&&hd(e)),t}function hd(t){xn===null?xn=t:xn.push.apply(xn,t)}function V_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ti(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nr(t,e){for(e&=~Wf,e&=~rc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qn(e),i=1<<n;t[n]=-1,e&=~i}}function bp(t){if(tt&6)throw Error(re(327));Ds();var e=Ml(t,0);if(!(e&1))return Sn(t,Lt()),null;var n=zl(t,e);if(t.tag!==0&&n===2){var i=ku(t);i!==0&&(e=i,n=fd(t,i))}if(n===1)throw n=Qa,Or(t,0),nr(t,e),Sn(t,Lt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Cr(t,xn,wi),Sn(t,Lt()),null}function jf(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(Hs=Lt()+500,ec&&Sr())}}function Hr(t){sr!==null&&sr.tag===0&&!(tt&6)&&Ds();var e=tt;tt|=1;var n=Vn.transition,i=st;try{if(Vn.transition=null,st=1,t)return t()}finally{st=i,Vn.transition=n,tt=e,!(tt&6)&&Sr()}}function Yf(){An=bs.current,xt(bs)}function Or(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,x_(n)),Nt!==null)for(n=Nt.return;n!==null;){var i=n;switch(bf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&bl();break;case 3:Vs(),xt(_n),xt(ln),Ff();break;case 5:Uf(i);break;case 4:Vs();break;case 13:xt(yt);break;case 19:xt(yt);break;case 10:Lf(i.type._context);break;case 22:case 23:Yf()}n=n.return}if(Xt=t,Nt=t=pr(t.current,null),$t=An=e,Bt=0,Qa=null,Wf=rc=Gr=0,xn=Na=null,Dr!==null){for(e=0;e<Dr.length;e++)if(n=Dr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Dr=null}return t}function D0(t,e){do{var n=Nt;try{if(Pf(),ol.current=Fl,Ul){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ul=!1}if(Vr=0,Ht=kt=Mt=null,Ia=!1,Ka=0,Hf.current=null,n===null||n.return===null){Bt=1,Qa=e,Nt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=$t,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=o,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=pp(a);if(p!==null){p.flags&=-257,mp(p,a,o,s,e),p.mode&1&&hp(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var E=new Set;E.add(l),e.updateQueue=E}else _.add(l);break e}else{if(!(e&1)){hp(s,c,e),qf();break e}l=Error(re(426))}}else if(vt&&o.mode&1){var m=pp(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),mp(m,a,o,s,e),Cf(Gs(l,o));break e}}s=l=Gs(l,o),Bt!==4&&(Bt=2),Na===null?Na=[s]:Na.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=g0(s,l,e);op(s,u);break e;case 1:o=l;var v=s.type,M=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(fr===null||!fr.has(M)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=x0(s,o,e);op(s,y);break e}}s=s.return}while(s!==null)}F0(n)}catch(A){e=A,Nt===n&&n!==null&&(Nt=n=n.return);continue}break}while(!0)}function N0(){var t=Ol.current;return Ol.current=Fl,t===null?Fl:t}function qf(){(Bt===0||Bt===3||Bt===2)&&(Bt=4),Xt===null||!(Gr&268435455)&&!(rc&268435455)||nr(Xt,$t)}function zl(t,e){var n=tt;tt|=2;var i=N0();(Xt!==t||$t!==e)&&(wi=null,Or(t,e));do try{G_();break}catch(r){D0(t,r)}while(!0);if(Pf(),tt=n,Ol.current=i,Nt!==null)throw Error(re(261));return Xt=null,$t=0,Bt}function G_(){for(;Nt!==null;)U0(Nt)}function H_(){for(;Nt!==null&&!pv();)U0(Nt)}function U0(t){var e=k0(t.alternate,t,An);t.memoizedProps=t.pendingProps,e===null?F0(t):Nt=e,Hf.current=null}function F0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=F_(n,e),n!==null){n.flags&=32767,Nt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Bt=6,Nt=null;return}}else if(n=U_(n,e,An),n!==null){Nt=n;return}if(e=e.sibling,e!==null){Nt=e;return}Nt=e=t}while(e!==null);Bt===0&&(Bt=5)}function Cr(t,e,n){var i=st,r=Vn.transition;try{Vn.transition=null,st=1,W_(t,e,n,i)}finally{Vn.transition=r,st=i}return null}function W_(t,e,n,i){do Ds();while(sr!==null);if(tt&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Tv(t,s),t===Xt&&(Nt=Xt=null,$t=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Lo||(Lo=!0,B0(Sl,function(){return Ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Vn.transition,Vn.transition=null;var a=st;st=1;var o=tt;tt|=4,Hf.current=null,k_(t,n),P0(n,t),u_(Wu),El=!!Hu,Wu=Hu=null,t.current=n,B_(n),mv(),tt=o,st=a,Vn.transition=s}else t.current=n;if(Lo&&(Lo=!1,sr=t,Bl=r),s=t.pendingLanes,s===0&&(fr=null),vv(n.stateNode),Sn(t,Lt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(kl)throw kl=!1,t=ud,ud=null,t;return Bl&1&&t.tag!==0&&Ds(),s=t.pendingLanes,s&1?t===dd?Ua++:(Ua=0,dd=t):Ua=0,Sr(),null}function Ds(){if(sr!==null){var t=gg(Bl),e=Vn.transition,n=st;try{if(Vn.transition=null,st=16>t?16:t,sr===null)var i=!1;else{if(t=sr,sr=null,Bl=0,tt&6)throw Error(re(331));var r=tt;for(tt|=4,ye=t.current;ye!==null;){var s=ye,a=s.child;if(ye.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(ye=c;ye!==null;){var f=ye;switch(f.tag){case 0:case 11:case 15:Da(8,f,s)}var h=f.child;if(h!==null)h.return=f,ye=h;else for(;ye!==null;){f=ye;var d=f.sibling,p=f.return;if(b0(f),f===c){ye=null;break}if(d!==null){d.return=p,ye=d;break}ye=p}}}var _=s.alternate;if(_!==null){var E=_.child;if(E!==null){_.child=null;do{var m=E.sibling;E.sibling=null,E=m}while(E!==null)}}ye=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ye=a;else e:for(;ye!==null;){if(s=ye,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Da(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,ye=u;break e}ye=s.return}}var v=t.current;for(ye=v;ye!==null;){a=ye;var M=a.child;if(a.subtreeFlags&2064&&M!==null)M.return=a,ye=M;else e:for(a=v;ye!==null;){if(o=ye,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:ic(9,o)}}catch(A){At(o,o.return,A)}if(o===a){ye=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,ye=y;break e}ye=o.return}}if(tt=r,Sr(),hi&&typeof hi.onPostCommitFiberRoot=="function")try{hi.onPostCommitFiberRoot($l,t)}catch{}i=!0}return i}finally{st=n,Vn.transition=e}}return!1}function Cp(t,e,n){e=Gs(n,e),e=g0(t,e,1),t=dr(t,e,1),e=fn(),t!==null&&(ro(t,1,e),Sn(t,e))}function At(t,e,n){if(t.tag===3)Cp(t,t,n);else for(;e!==null;){if(e.tag===3){Cp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(fr===null||!fr.has(i))){t=Gs(n,t),t=x0(e,t,1),e=dr(e,t,1),t=fn(),e!==null&&(ro(e,1,t),Sn(e,t));break}}e=e.return}}function X_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=fn(),t.pingedLanes|=t.suspendedLanes&n,Xt===t&&($t&n)===n&&(Bt===4||Bt===3&&($t&130023424)===$t&&500>Lt()-Xf?Or(t,0):Wf|=n),Sn(t,e)}function O0(t,e){e===0&&(t.mode&1?(e=So,So<<=1,!(So&130023424)&&(So=4194304)):e=1);var n=fn();t=Fi(t,e),t!==null&&(ro(t,e,n),Sn(t,n))}function j_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),O0(t,n)}function Y_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),O0(t,n)}var k0;k0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_n.current)vn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vn=!1,N_(t,e,n);vn=!!(t.flags&131072)}else vn=!1,vt&&e.flags&1048576&&Gg(e,Pl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;cl(t,e),t=e.pendingProps;var r=ks(e,ln.current);Is(e,n),r=kf(null,e,i,t,r,n);var s=Bf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yn(i)?(s=!0,Cl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Df(e),r.updater=nc,e.stateNode=r,r._reactInternals=e,Qu(e,i,t,n),e=nd(null,e,i,!0,s,n)):(e.tag=0,vt&&s&&Af(e),dn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(cl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=$_(i),t=qn(i,t),r){case 0:e=td(null,e,i,t,n);break e;case 1:e=vp(null,e,i,t,n);break e;case 11:e=gp(null,e,i,t,n);break e;case 14:e=xp(null,e,i,qn(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),td(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),vp(t,e,i,r,n);case 3:e:{if(S0(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,qg(t,e),Dl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Gs(Error(re(423)),e),e=_p(t,e,i,n,r);break e}else if(i!==r){r=Gs(Error(re(424)),e),e=_p(t,e,i,n,r);break e}else for(Rn=ur(e.stateNode.containerInfo.firstChild),Pn=e,vt=!0,Kn=null,n=jg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bs(),i===r){e=Oi(t,e,n);break e}dn(t,e,i,n)}e=e.child}return e;case 5:return $g(e),t===null&&Ku(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Xu(i,r)?a=null:s!==null&&Xu(i,s)&&(e.flags|=32),y0(t,e),dn(t,e,a,n),e.child;case 6:return t===null&&Ku(e),null;case 13:return M0(t,e,n);case 4:return Nf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=zs(e,null,i,n):dn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),gp(t,e,i,r,n);case 7:return dn(t,e,e.pendingProps,n),e.child;case 8:return dn(t,e,e.pendingProps.children,n),e.child;case 12:return dn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ht(Ll,i._currentValue),i._currentValue=a,s!==null)if(ti(s.value,a)){if(s.children===r.children&&!_n.current){e=Oi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Li(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Zu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(re(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Zu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}dn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Is(e,n),r=Gn(r),i=i(r),e.flags|=1,dn(t,e,i,n),e.child;case 14:return i=e.type,r=qn(i,e.pendingProps),r=qn(i.type,r),xp(t,e,i,r,n);case 15:return v0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),cl(t,e),e.tag=1,yn(i)?(t=!0,Cl(e)):t=!1,Is(e,n),m0(e,i,r),Qu(e,i,r,n),nd(null,e,i,!0,t,n);case 19:return E0(t,e,n);case 22:return _0(t,e,n)}throw Error(re(156,e.tag))};function B0(t,e){return fg(t,e)}function q_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zn(t,e,n,i){return new q_(t,e,n,i)}function $f(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $_(t){if(typeof t=="function")return $f(t)?1:0;if(t!=null){if(t=t.$$typeof,t===pf)return 11;if(t===mf)return 14}return 2}function pr(t,e){var n=t.alternate;return n===null?(n=zn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function fl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")$f(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case xs:return kr(n.children,r,s,e);case hf:a=8,r|=8;break;case Eu:return t=zn(12,n,e,r|2),t.elementType=Eu,t.lanes=s,t;case Tu:return t=zn(13,n,e,r),t.elementType=Tu,t.lanes=s,t;case wu:return t=zn(19,n,e,r),t.elementType=wu,t.lanes=s,t;case $m:return sc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ym:a=10;break e;case qm:a=9;break e;case pf:a=11;break e;case mf:a=14;break e;case Ji:a=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=zn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function kr(t,e,n,i){return t=zn(7,t,i,e),t.lanes=n,t}function sc(t,e,n,i){return t=zn(22,t,i,e),t.elementType=$m,t.lanes=n,t.stateNode={isHidden:!1},t}function kc(t,e,n){return t=zn(6,t,null,e),t.lanes=n,t}function Bc(t,e,n){return e=zn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function K_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_c(0),this.expirationTimes=_c(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_c(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Kf(t,e,n,i,r,s,a,o,l){return t=new K_(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=zn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Df(s),t}function Z_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function z0(t){if(!t)return gr;t=t._reactInternals;e:{if(Yr(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(yn(n))return zg(t,n,e)}return e}function V0(t,e,n,i,r,s,a,o,l){return t=Kf(n,i,!0,t,r,s,a,o,l),t.context=z0(null),n=t.current,i=fn(),r=hr(n),s=Li(i,r),s.callback=e??null,dr(n,s,r),t.current.lanes=r,ro(t,r,i),Sn(t,i),t}function ac(t,e,n,i){var r=e.current,s=fn(),a=hr(r);return n=z0(n),e.context===null?e.context=n:e.pendingContext=n,e=Li(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=dr(r,e,a),t!==null&&(ei(t,r,a,s),al(t,r,a)),a}function Vl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Rp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Zf(t,e){Rp(t,e),(t=t.alternate)&&Rp(t,e)}function J_(){return null}var G0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Jf(t){this._internalRoot=t}oc.prototype.render=Jf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));ac(t,e,null,null)};oc.prototype.unmount=Jf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Hr(function(){ac(null,t,null,null)}),e[Ui]=null}};function oc(t){this._internalRoot=t}oc.prototype.unstable_scheduleHydration=function(t){if(t){var e=_g();t={blockedOn:null,target:t,priority:e};for(var n=0;n<tr.length&&e!==0&&e<tr[n].priority;n++);tr.splice(n,0,t),n===0&&Sg(t)}};function Qf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function lc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Pp(){}function Q_(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Vl(a);s.call(c)}}var a=V0(e,i,t,0,null,!1,!1,"",Pp);return t._reactRootContainer=a,t[Ui]=a.current,Xa(t.nodeType===8?t.parentNode:t),Hr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Vl(l);o.call(c)}}var l=Kf(t,0,!1,null,null,!1,!1,"",Pp);return t._reactRootContainer=l,t[Ui]=l.current,Xa(t.nodeType===8?t.parentNode:t),Hr(function(){ac(e,l,n,i)}),l}function cc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Vl(a);o.call(l)}}ac(e,a,t,r)}else a=Q_(n,e,t,r,i);return Vl(a)}xg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ma(e.pendingLanes);n!==0&&(vf(e,n|1),Sn(e,Lt()),!(tt&6)&&(Hs=Lt()+500,Sr()))}break;case 13:Hr(function(){var i=Fi(t,1);if(i!==null){var r=fn();ei(i,t,1,r)}}),Zf(t,1)}};_f=function(t){if(t.tag===13){var e=Fi(t,134217728);if(e!==null){var n=fn();ei(e,t,134217728,n)}Zf(t,134217728)}};vg=function(t){if(t.tag===13){var e=hr(t),n=Fi(t,e);if(n!==null){var i=fn();ei(n,t,e,i)}Zf(t,e)}};_g=function(){return st};yg=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};Uu=function(t,e,n){switch(e){case"input":if(Cu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ql(i);if(!r)throw Error(re(90));Zm(i),Cu(i,r)}}}break;case"textarea":Qm(t,n);break;case"select":e=n.value,e!=null&&Cs(t,!!n.multiple,e,!1)}};ag=jf;og=Hr;var ey={usingClientEntryPoint:!1,Events:[ao,Ss,Ql,rg,sg,jf]},fa={findFiberByHostInstance:Ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ty={bundleType:fa.bundleType,version:fa.version,rendererPackageName:fa.rendererPackageName,rendererConfig:fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ug(t),t===null?null:t.stateNode},findFiberByHostInstance:fa.findFiberByHostInstance||J_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Io.isDisabled&&Io.supportsFiber)try{$l=Io.inject(ty),hi=Io}catch{}}In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ey;In.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qf(e))throw Error(re(200));return Z_(t,e,null,n)};In.createRoot=function(t,e){if(!Qf(t))throw Error(re(299));var n=!1,i="",r=G0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Kf(t,1,!1,null,null,n,!1,i,r),t[Ui]=e.current,Xa(t.nodeType===8?t.parentNode:t),new Jf(e)};In.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=ug(e),t=t===null?null:t.stateNode,t};In.flushSync=function(t){return Hr(t)};In.hydrate=function(t,e,n){if(!lc(e))throw Error(re(200));return cc(null,t,e,!0,n)};In.hydrateRoot=function(t,e,n){if(!Qf(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=G0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=V0(e,null,t,1,n??null,r,!1,s,a),t[Ui]=e.current,Xa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new oc(e)};In.render=function(t,e,n){if(!lc(e))throw Error(re(200));return cc(null,t,e,!1,n)};In.unmountComponentAtNode=function(t){if(!lc(t))throw Error(re(40));return t._reactRootContainer?(Hr(function(){cc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ui]=null})}),!0):!1};In.unstable_batchedUpdates=jf;In.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!lc(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return cc(t,e,n,!1,i)};In.version="18.3.1-next-f1338f8080-20240426";function H0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(H0)}catch(t){console.error(t)}}H0(),Hm.exports=In;var ny=Hm.exports,Lp=ny;Su.createRoot=Lp.createRoot,Su.hydrateRoot=Lp.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var iy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),_t=(t,e)=>{const n=Ke.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:l,...c},f)=>Ke.createElement("svg",{ref:f,...iy,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${ry(t)}`,o].join(" "),...c},[...e.map(([h,d])=>Ke.createElement(h,d)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=_t("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=_t("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=_t("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=_t("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=_t("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=_t("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=_t("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=_t("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=_t("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=_t("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=_t("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=_t("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=_t("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=_t("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=_t("Move3d",[["path",{d:"M5 3v16h16",key:"1mqmf9"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}],["path",{d:"m2 6 3-3 3 3",key:"tkyvxa"}],["path",{d:"m18 16 3 3-3 3",key:"1d4glt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=_t("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=_t("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=_t("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=_t("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=_t("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=_t("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=_t("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=_t("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=_t("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function Ey({isVideoActive:t=!0}){const e=Ke.useRef(null),[n,i]=Ke.useState(.48);return Ke.useEffect(()=>{const r=e.current;r&&(t?(r.muted=!0,r.play().catch(s=>{console.log("Autoplay policy caught:",s)})):r.pause())},[t]),w.jsxs(w.Fragment,{children:[w.jsx("video",{ref:e,src:"/f1.mp4",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"auto",style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",objectFit:"cover",zIndex:-10,opacity:t?n:0,filter:"saturate(1.15) brightness(0.85) contrast(1.15)",transition:"opacity 0.6s ease",pointerEvents:"none"}}),w.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",background:`
            radial-gradient(ellipse at 50% 20%, rgba(7, 10, 18, 0.40) 0%, rgba(7, 10, 18, 0.68) 60%, rgba(7, 10, 18, 0.88) 100%),
            linear-gradient(180deg, rgba(7, 10, 18, 0.35) 0%, rgba(7, 10, 18, 0.65) 50%, rgba(7, 10, 18, 0.85) 100%)
          `,zIndex:-9,pointerEvents:"none"}}),w.jsxs("div",{style:{position:"fixed",left:"24px",bottom:"24px",zIndex:50,display:"flex",alignItems:"center",gap:"8px",background:"rgba(13, 19, 33, 0.85)",backdropFilter:"blur(16px)",border:"1px solid rgba(255, 24, 1, 0.35)",boxShadow:"0 4px 20px rgba(0,0,0,0.6)",borderRadius:"12px",padding:"6px 12px"},children:[w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[w.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:t?"#10b981":"#ff1801",boxShadow:`0 0 8px ${t?"#10b981":"#ff1801"}`}}),w.jsx("span",{style:{fontSize:"0.72rem",fontFamily:"var(--font-mono)",color:"#fff",fontWeight:"700"},children:"🏎️ F1 BACKDROP:"})]}),w.jsx("div",{style:{display:"flex",gap:"4px"},children:[{label:"30%",val:.3},{label:"50%",val:.5},{label:"75%",val:.75}].map(r=>w.jsx("button",{onClick:()=>i(r.val),style:{background:Math.abs(n-r.val)<.05?"var(--f1-red)":"rgba(255,255,255,0.06)",color:"#fff",border:"none",borderRadius:"6px",padding:"2px 6px",fontSize:"0.68rem",fontFamily:"var(--font-mono)",fontWeight:"700",cursor:"pointer",transition:"all 0.2s"},title:`Set F1 video opacity to ${r.label}`,children:r.label},r.label))})]})]})}function Ty({isVideoActive:t,setIsVideoActive:e}){const n=(i,r)=>{i.preventDefault();const s=document.getElementById(r);s&&s.scrollIntoView({behavior:"smooth"})};return w.jsx("header",{className:"glass-nav",style:{position:"fixed",top:0,left:0,right:0,zIndex:100,padding:"0 28px",height:"70px",display:"flex",alignItems:"center"},children:w.jsxs("div",{className:"max-w-7xl mx-auto",style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[w.jsxs("a",{href:"#hero",onClick:i=>n(i,"hero"),style:{textDecoration:"none",display:"flex",alignItems:"center",gap:"12px"},children:[w.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"12px",background:"linear-gradient(135deg, var(--f1-red) 0%, #0d1321 100%)",border:"1.5px solid rgba(255, 24, 1, 0.45)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 18px var(--f1-red-glow)",fontWeight:"900",fontSize:"1rem",color:"#fff",fontFamily:"var(--font-heading)"},children:"CK"}),w.jsxs("div",{children:[w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[w.jsxs("span",{style:{fontFamily:"var(--font-heading)",fontWeight:"900",fontSize:"1.15rem",color:"#fff",letterSpacing:"-0.02em"},children:["Chinni ",w.jsx("span",{className:"gradient-text",children:"Krishna"})]}),w.jsxs("span",{style:{fontSize:"0.66rem",fontFamily:"var(--font-mono)",background:"rgba(16, 185, 129, 0.12)",border:"1px solid rgba(16, 185, 129, 0.35)",color:"var(--terminal-green)",padding:"2px 8px",borderRadius:"9999px",fontWeight:"700",letterSpacing:"0.04em",display:"flex",alignItems:"center",gap:"4px"},children:[w.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#10b981",boxShadow:"0 0 6px #10b981"}}),"SYSTEMS OPERATIONAL"]})]}),w.jsx("p",{style:{fontSize:"0.72rem",color:"var(--text-dim)",fontFamily:"var(--font-mono)",marginTop:"1px"},children:"DevOps Engineer & Full-Stack Specialist · @GrayViper"})]})]}),w.jsx("nav",{style:{display:"flex",alignItems:"center",gap:"26px"},children:[{id:"skills",label:"Skills Matrix"},{id:"projects",label:"Projects"},{id:"terminal",label:"CLI Console"},{id:"certs",label:"Education"},{id:"contact",label:"Contact"}].map(i=>w.jsx("a",{href:`#${i.id}`,onClick:r=>n(r,i.id),style:{color:"var(--text-dim)",textDecoration:"none",fontSize:"0.86rem",fontWeight:"600",transition:"all 0.2s",fontFamily:"var(--font-body)",position:"relative"},onMouseEnter:r=>{r.target.style.color="var(--cyber-cyan)",r.target.style.textShadow="0 0 10px var(--cyber-cyan-glow)"},onMouseLeave:r=>{r.target.style.color="var(--text-dim)",r.target.style.textShadow="none"},children:i.label},i.id))}),w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[w.jsxs("button",{onClick:()=>e(!t),style:{display:"inline-flex",alignItems:"center",gap:"6px",padding:"7px 14px",borderRadius:"10px",background:t?"rgba(255, 24, 1, 0.15)":"rgba(255, 255, 255, 0.05)",border:`1px solid ${t?"var(--f1-red)":"var(--border-subtle)"}`,color:t?"var(--f1-red)":"var(--text-dim)",fontSize:"0.78rem",fontFamily:"var(--font-mono)",fontWeight:"700",cursor:"pointer",transition:"all 0.2s"},title:t?"Pause F1 Background Video":"Resume F1 Background Video",children:[w.jsx("span",{children:"🏎️"}),w.jsx("span",{children:t?"F1 VIDEO: ON":"F1 VIDEO: OFF"})]}),w.jsxs("a",{href:"#contact",onClick:i=>n(i,"contact"),className:"btn-primary",style:{padding:"8px 20px",fontSize:"0.84rem"},children:[w.jsx(Y0,{size:15})," Hire Me"]})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const th="185",wy=0,Ip=1,Ay=2,Fa=1,by=2,Ta=3,xr=0,Mn=1,bi=2,Ii=0,Ns=1,Dp=2,Np=3,Up=4,Cy=5,Pr=100,Ry=101,Py=102,Ly=103,Iy=104,Dy=200,Ny=201,Uy=202,Fy=203,pd=204,md=205,Oy=206,ky=207,By=208,zy=209,Vy=210,Gy=211,Hy=212,Wy=213,Xy=214,gd=0,xd=1,vd=2,Ws=3,_d=4,yd=5,Sd=6,Md=7,q0=0,jy=1,Yy=2,mi=0,$0=1,K0=2,Z0=3,J0=4,Q0=5,ex=6,tx=7,nx=300,Wr=301,Xs=302,zc=303,Vc=304,dc=306,Ed=1e3,Pi=1001,Td=1002,qt=1003,qy=1004,Do=1005,Wt=1006,Gc=1007,Ur=1008,Cn=1009,ix=1010,rx=1011,eo=1012,nh=1013,vi=1014,di=1015,ki=1016,ih=1017,rh=1018,to=1020,sx=35902,ax=35899,ox=1021,lx=1022,Jn=1023,Bi=1026,Fr=1027,cx=1028,sh=1029,Xr=1030,ah=1031,oh=1033,hl=33776,pl=33777,ml=33778,gl=33779,wd=35840,Ad=35841,bd=35842,Cd=35843,Rd=36196,Pd=37492,Ld=37496,Id=37488,Dd=37489,Gl=37490,Nd=37491,Ud=37808,Fd=37809,Od=37810,kd=37811,Bd=37812,zd=37813,Vd=37814,Gd=37815,Hd=37816,Wd=37817,Xd=37818,jd=37819,Yd=37820,qd=37821,$d=36492,Kd=36494,Zd=36495,Jd=36283,Qd=36284,Hl=36285,ef=36286,$y=3200,tf=0,Ky=1,ir="",On="srgb",Wl="srgb-linear",Xl="linear",rt="srgb",ns=7680,Fp=519,Zy=512,Jy=513,Qy=514,lh=515,eS=516,tS=517,ch=518,nS=519,Op=35044,kp="300 es",fi=2e3,no=2001;function iS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function jl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function rS(){const t=jl("canvas");return t.style.display="block",t}const Bp={};function zp(...t){const e="THREE."+t.shift();console.log(e,...t)}function ux(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ne(...t){t=ux(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Qe(...t){t=ux(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Us(...t){const e=t.join(" ");e in Bp||(Bp[e]=!0,Ne(...t))}function sS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const aS={[gd]:xd,[vd]:Sd,[_d]:Md,[Ws]:yd,[xd]:gd,[Sd]:vd,[Md]:_d,[yd]:Ws};class qr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hc=Math.PI/180,nf=180/Math.PI;function lo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function Ye(t,e,n){return Math.max(e,Math.min(n,t))}function oS(t,e){return(t%e+e)%e}function Wc(t,e,n){return(1-n)*t+n*e}function ha(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function gn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const xh=class xh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xh.prototype.isVector2=!0;let qe=xh;class Js{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3],d=s[a+0],p=s[a+1],_=s[a+2],E=s[a+3];if(h!==E||l!==d||c!==p||f!==_){let m=l*d+c*p+f*_+h*E;m<0&&(d=-d,p=-p,_=-_,E=-E,m=-m);let u=1-o;if(m<.9995){const v=Math.acos(m),M=Math.sin(v);u=Math.sin(u*v)/M,o=Math.sin(o*v)/M,l=l*u+d*o,c=c*u+p*o,f=f*u+_*o,h=h*u+E*o}else{l=l*u+d*o,c=c*u+p*o,f=f*u+_*o,h=h*u+E*o;const v=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=v,c*=v,f*=v,h*=v}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[a],d=s[a+1],p=s[a+2],_=s[a+3];return e[n]=o*_+f*h+l*p-c*d,e[n+1]=l*_+f*d+c*h-o*p,e[n+2]=c*_+f*p+o*d-l*h,e[n+3]=f*_-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),h=o(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*f*h+c*p*_,this._y=c*p*h-d*f*_,this._z=c*f*_+d*p*h,this._w=c*f*h-d*p*_;break;case"YXZ":this._x=d*f*h+c*p*_,this._y=c*p*h-d*f*_,this._z=c*f*_-d*p*h,this._w=c*f*h+d*p*_;break;case"ZXY":this._x=d*f*h-c*p*_,this._y=c*p*h+d*f*_,this._z=c*f*_+d*p*h,this._w=c*f*h-d*p*_;break;case"ZYX":this._x=d*f*h-c*p*_,this._y=c*p*h+d*f*_,this._z=c*f*_-d*p*h,this._w=c*f*h+d*p*_;break;case"YZX":this._x=d*f*h+c*p*_,this._y=c*p*h+d*f*_,this._z=c*f*_-d*p*h,this._w=c*f*h-d*p*_;break;case"XZY":this._x=d*f*h-c*p*_,this._y=c*p*h-d*f*_,this._z=c*f*_+d*p*h,this._w=c*f*h+d*p*_;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(f-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const vh=class vh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Vp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Vp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*f,this.y=i+l*f+o*c-s*h,this.z=r+l*h+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this.z=Ye(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this.z=Ye(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xc.copy(this).projectOnVector(e),this.sub(Xc)}reflect(e){return this.sub(Xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vh.prototype.isVector3=!0;let H=vh;const Xc=new H,Vp=new Js,_h=class _h{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],p=i[5],_=i[8],E=r[0],m=r[3],u=r[6],v=r[1],M=r[4],y=r[7],A=r[2],T=r[5],C=r[8];return s[0]=a*E+o*v+l*A,s[3]=a*m+o*M+l*T,s[6]=a*u+o*y+l*C,s[1]=c*E+f*v+h*A,s[4]=c*m+f*M+h*T,s[7]=c*u+f*y+h*C,s[2]=d*E+p*v+_*A,s[5]=d*m+p*M+_*T,s[8]=d*u+p*y+_*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*a*f-n*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=f*a-o*c,d=o*l-f*s,p=c*s-a*l,_=n*h+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/_;return e[0]=h*E,e[1]=(r*c-f*i)*E,e[2]=(o*i-r*a)*E,e[3]=d*E,e[4]=(f*n-r*l)*E,e[5]=(r*s-o*n)*E,e[6]=p*E,e[7]=(i*l-c*n)*E,e[8]=(a*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return Us("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jc.makeScale(e,n)),this}rotate(e){return Us("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jc.makeRotation(-e)),this}translate(e,n){return Us("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};_h.prototype.isMatrix3=!0;let Fe=_h;const jc=new Fe,Gp=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hp=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lS(){const t={enabled:!0,workingColorSpace:Wl,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===rt&&(r.r=Di(r.r),r.g=Di(r.g),r.b=Di(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(r.r=Fs(r.r),r.g=Fs(r.g),r.b=Fs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ir?Xl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Us("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Us("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Wl]:{primaries:e,whitePoint:i,transfer:Xl,toXYZ:Gp,fromXYZ:Hp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:Gp,fromXYZ:Hp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),t}const je=lS();function Di(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Fs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let is;class cS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{is===void 0&&(is=jl("canvas")),is.width=e.width,is.height=e.height;const r=is.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=is}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=jl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Di(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Di(n[i]/255)*255):n[i]=Di(n[i]);return{data:n,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uS=0;class uh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uS++}),this.uuid=lo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Yc(r[a].image)):s.push(Yc(r[a]))}else s=Yc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Yc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?cS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let dS=0;const qc=new H;class an extends qr{constructor(e=an.DEFAULT_IMAGE,n=an.DEFAULT_MAPPING,i=Pi,r=Pi,s=Wt,a=Ur,o=Jn,l=Cn,c=an.DEFAULT_ANISOTROPY,f=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=lo(),this.name="",this.source=new uh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qc).x}get height(){return this.source.getSize(qc).y}get depth(){return this.source.getSize(qc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ne(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ne(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ed:e.x=e.x-Math.floor(e.x);break;case Pi:e.x=e.x<0?0:1;break;case Td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ed:e.y=e.y-Math.floor(e.y);break;case Pi:e.y=e.y<0?0:1;break;case Td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=nx;an.DEFAULT_ANISOTROPY=1;const yh=class yh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],p=l[5],_=l[9],E=l[2],m=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-E)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+E)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(c+1)/2,y=(p+1)/2,A=(u+1)/2,T=(f+d)/4,C=(h+E)/4,g=(_+m)/4;return M>y&&M>A?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=T/i,s=C/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=g/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=C/s,r=g/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-_)*(m-_)+(h-E)*(h-E)+(d-f)*(d-f));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(h-E)/v,this.z=(d-f)/v,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this.z=Ye(this.z,e.z,n.z),this.w=Ye(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this.z=Ye(this.z,e,n),this.w=Ye(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yh.prototype.isVector4=!0;let St=yh;class fS extends qr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new St(0,0,e,n),this.scissorTest=!1,this.viewport=new St(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new an(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new uh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends fS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class dx extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hS extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yl=class Yl{constructor(e,n,i,r,s,a,o,l,c,f,h,d,p,_,E,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,f,h,d,p,_,E,m)}set(e,n,i,r,s,a,o,l,c,f,h,d,p,_,E,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=p,u[7]=_,u[11]=E,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yl().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/rs.setFromMatrixColumn(e,0).length(),s=1/rs.setFromMatrixColumn(e,1).length(),a=1/rs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*f,p=a*h,_=o*f,E=o*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=p+_*c,n[5]=d-E*c,n[9]=-o*l,n[2]=E-d*c,n[6]=_+p*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*f,p=l*h,_=c*f,E=c*h;n[0]=d+E*o,n[4]=_*o-p,n[8]=a*c,n[1]=a*h,n[5]=a*f,n[9]=-o,n[2]=p*o-_,n[6]=E+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*f,p=l*h,_=c*f,E=c*h;n[0]=d-E*o,n[4]=-a*h,n[8]=_+p*o,n[1]=p+_*o,n[5]=a*f,n[9]=E-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*f,p=a*h,_=o*f,E=o*h;n[0]=l*f,n[4]=_*c-p,n[8]=d*c+E,n[1]=l*h,n[5]=E*c+d,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,_=o*l,E=o*c;n[0]=l*f,n[4]=E-d*h,n[8]=_*h+p,n[1]=h,n[5]=a*f,n[9]=-o*f,n[2]=-c*f,n[6]=p*h+_,n[10]=d-E*h}else if(e.order==="XZY"){const d=a*l,p=a*c,_=o*l,E=o*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+E,n[5]=a*f,n[9]=p*h-_,n[2]=_*h-p,n[6]=o*f,n[10]=E*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pS,e,mS)}lookAt(e,n,i){const r=this.elements;return Tn.subVectors(e,n),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),ji.crossVectors(i,Tn),ji.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),ji.crossVectors(i,Tn)),ji.normalize(),No.crossVectors(Tn,ji),r[0]=ji.x,r[4]=No.x,r[8]=Tn.x,r[1]=ji.y,r[5]=No.y,r[9]=Tn.y,r[2]=ji.z,r[6]=No.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],p=i[13],_=i[2],E=i[6],m=i[10],u=i[14],v=i[3],M=i[7],y=i[11],A=i[15],T=r[0],C=r[4],g=r[8],b=r[12],P=r[1],L=r[5],F=r[9],j=r[13],q=r[2],V=r[6],K=r[10],G=r[14],k=r[3],N=r[7],ee=r[11],ie=r[15];return s[0]=a*T+o*P+l*q+c*k,s[4]=a*C+o*L+l*V+c*N,s[8]=a*g+o*F+l*K+c*ee,s[12]=a*b+o*j+l*G+c*ie,s[1]=f*T+h*P+d*q+p*k,s[5]=f*C+h*L+d*V+p*N,s[9]=f*g+h*F+d*K+p*ee,s[13]=f*b+h*j+d*G+p*ie,s[2]=_*T+E*P+m*q+u*k,s[6]=_*C+E*L+m*V+u*N,s[10]=_*g+E*F+m*K+u*ee,s[14]=_*b+E*j+m*G+u*ie,s[3]=v*T+M*P+y*q+A*k,s[7]=v*C+M*L+y*V+A*N,s[11]=v*g+M*F+y*K+A*ee,s[15]=v*b+M*j+y*G+A*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],p=e[14],_=e[3],E=e[7],m=e[11],u=e[15],v=l*p-c*d,M=o*p-c*h,y=o*d-l*h,A=a*p-c*f,T=a*d-l*f,C=a*h-o*f;return n*(E*v-m*M+u*y)-i*(_*v-m*A+u*T)+r*(_*M-E*A+u*C)-s*(_*y-E*T+m*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],f=e[10];return n*(a*f-o*c)-i*(s*f-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],p=e[11],_=e[12],E=e[13],m=e[14],u=e[15],v=n*o-i*a,M=n*l-r*a,y=n*c-s*a,A=i*l-r*o,T=i*c-s*o,C=r*c-s*l,g=f*E-h*_,b=f*m-d*_,P=f*u-p*_,L=h*m-d*E,F=h*u-p*E,j=d*u-p*m,q=v*j-M*F+y*L+A*P-T*b+C*g;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/q;return e[0]=(o*j-l*F+c*L)*V,e[1]=(r*F-i*j-s*L)*V,e[2]=(E*C-m*T+u*A)*V,e[3]=(d*T-h*C-p*A)*V,e[4]=(l*P-a*j-c*b)*V,e[5]=(n*j-r*P+s*b)*V,e[6]=(m*y-_*C-u*M)*V,e[7]=(f*C-d*y+p*M)*V,e[8]=(a*F-o*P+c*g)*V,e[9]=(i*P-n*F-s*g)*V,e[10]=(_*T-E*y+u*v)*V,e[11]=(h*y-f*T-p*v)*V,e[12]=(o*b-a*L-l*g)*V,e[13]=(n*L-i*b+r*g)*V,e[14]=(E*M-_*A-m*v)*V,e[15]=(f*A-h*M+d*v)*V,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,f=a+a,h=o+o,d=s*c,p=s*f,_=s*h,E=a*f,m=a*h,u=o*h,v=l*c,M=l*f,y=l*h,A=i.x,T=i.y,C=i.z;return r[0]=(1-(E+u))*A,r[1]=(p+y)*A,r[2]=(_-M)*A,r[3]=0,r[4]=(p-y)*T,r[5]=(1-(d+u))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(_+M)*C,r[9]=(m-v)*C,r[10]=(1-(d+E))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=rs.set(r[0],r[1],r[2]).length();const o=rs.set(r[4],r[5],r[6]).length(),l=rs.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Xn.copy(this);const c=1/a,f=1/o,h=1/l;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=f,Xn.elements[5]*=f,Xn.elements[6]*=f,Xn.elements[8]*=h,Xn.elements[9]*=h,Xn.elements[10]*=h,n.setFromRotationMatrix(Xn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=fi,l=!1){const c=this.elements,f=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),p=(i+r)/(i-r);let _,E;if(l)_=s/(a-s),E=a*s/(a-s);else if(o===fi)_=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(o===no)_=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=fi,l=!1){const c=this.elements,f=2/(n-e),h=2/(i-r),d=-(n+e)/(n-e),p=-(i+r)/(i-r);let _,E;if(l)_=1/(a-s),E=a/(a-s);else if(o===fi)_=-2/(a-s),E=-(a+s)/(a-s);else if(o===no)_=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Yl.prototype.isMatrix4=!0;let bt=Yl;const rs=new H,Xn=new bt,pS=new H(0,0,0),mS=new H(1,1,1),ji=new H,No=new H,Tn=new H,Wp=new bt,Xp=new Js;class vr{constructor(e=0,n=0,i=0,r=vr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Wp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Xp.setFromEuler(this),this.setFromQuaternion(Xp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vr.DEFAULT_ORDER="XYZ";class fx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gS=0;const jp=new H,ss=new Js,yi=new bt,Uo=new H,pa=new H,xS=new H,vS=new Js,Yp=new H(1,0,0),qp=new H(0,1,0),$p=new H(0,0,1),Kp={type:"added"},_S={type:"removed"},as={type:"childadded",child:null},$c={type:"childremoved",child:null};class on extends qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new H,n=new vr,i=new Js,r=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new Fe}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ss.setFromAxisAngle(e,n),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,n){return ss.setFromAxisAngle(e,n),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(Yp,e)}rotateY(e){return this.rotateOnAxis(qp,e)}rotateZ(e){return this.rotateOnAxis($p,e)}translateOnAxis(e,n){return jp.copy(e).applyQuaternion(this.quaternion),this.position.add(jp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Yp,e)}translateY(e){return this.translateOnAxis(qp,e)}translateZ(e){return this.translateOnAxis($p,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Uo.copy(e):Uo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(pa,Uo,this.up):yi.lookAt(Uo,pa,this.up),this.quaternion.setFromRotationMatrix(yi),r&&(yi.extractRotation(r.matrixWorld),ss.setFromRotationMatrix(yi),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kp),as.child=e,this.dispatchEvent(as),as.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(_S),$c.child=e,this.dispatchEvent($c),$c.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kp),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,e,xS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,vS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}on.DEFAULT_UP=new H(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class wa extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yS={type:"move"};class Kc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const E of e.hand.values()){const m=n.getJointPose(E,i),u=this._getHandJoint(c,E);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yS)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new wa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const hx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Fo={h:0,s:0,l:0};function Zc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=je.workingColorSpace){return this.r=e,this.g=n,this.b=i,je.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=je.workingColorSpace){if(e=oS(e,1),n=Ye(n,0,1),i=Ye(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Zc(a,s,e+1/3),this.g=Zc(a,s,e),this.b=Zc(a,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,n=On){function i(s){s!==void 0&&parseFloat(s)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ne("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=On){const i=hx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return je.workingToColorSpace(nn.copy(this),e),Math.round(Ye(nn.r*255,0,255))*65536+Math.round(Ye(nn.g*255,0,255))*256+Math.round(Ye(nn.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=je.workingColorSpace){je.workingToColorSpace(nn.copy(this),n);const i=nn.r,r=nn.g,s=nn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=f<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=je.workingColorSpace){return je.workingToColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=On){je.workingToColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,r=nn.b;return e!==On?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+n,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Yi),e.getHSL(Fo);const i=Wc(Yi.h,Fo.h,n),r=Wc(Yi.s,Fo.s,n),s=Wc(Yi.l,Fo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new et;et.NAMES=hx;class SS extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vr,this.environmentIntensity=1,this.environmentRotation=new vr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const jn=new H,Si=new H,Jc=new H,Mi=new H,os=new H,ls=new H,Zp=new H,Qc=new H,eu=new H,tu=new H,nu=new St,iu=new St,ru=new St;class Zn{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),jn.subVectors(e,n),r.cross(jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){jn.subVectors(r,n),Si.subVectors(i,n),Jc.subVectors(e,n);const a=jn.dot(jn),o=jn.dot(Si),l=jn.dot(Jc),c=Si.dot(Si),f=Si.dot(Jc),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-o*f)*d,_=(a*f-o*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Mi.x),l.addScaledVector(a,Mi.y),l.addScaledVector(o,Mi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return nu.setScalar(0),iu.setScalar(0),ru.setScalar(0),nu.fromBufferAttribute(e,n),iu.fromBufferAttribute(e,i),ru.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(nu,s.x),a.addScaledVector(iu,s.y),a.addScaledVector(ru,s.z),a}static isFrontFacing(e,n,i,r){return jn.subVectors(i,n),Si.subVectors(e,n),jn.cross(Si).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),jn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Zn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;os.subVectors(r,i),ls.subVectors(s,i),Qc.subVectors(e,i);const l=os.dot(Qc),c=ls.dot(Qc);if(l<=0&&c<=0)return n.copy(i);eu.subVectors(e,r);const f=os.dot(eu),h=ls.dot(eu);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(os,a);tu.subVectors(e,s);const p=os.dot(tu),_=ls.dot(tu);if(_>=0&&p<=_)return n.copy(s);const E=p*c-l*_;if(E<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(ls,o);const m=f*_-p*h;if(m<=0&&h-f>=0&&p-_>=0)return Zp.subVectors(s,r),o=(h-f)/(h-f+(p-_)),n.copy(r).addScaledVector(Zp,o);const u=1/(m+E+d);return a=E*u,o=d*u,n.copy(i).addScaledVector(os,a).addScaledVector(ls,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class co{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Yn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Yn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Yn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yn):Yn.fromBufferAttribute(s,a),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oo.copy(i.boundingBox)),Oo.applyMatrix4(e.matrixWorld),this.union(Oo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),ko.subVectors(this.max,ma),cs.subVectors(e.a,ma),us.subVectors(e.b,ma),ds.subVectors(e.c,ma),qi.subVectors(us,cs),$i.subVectors(ds,us),Mr.subVectors(cs,ds);let n=[0,-qi.z,qi.y,0,-$i.z,$i.y,0,-Mr.z,Mr.y,qi.z,0,-qi.x,$i.z,0,-$i.x,Mr.z,0,-Mr.x,-qi.y,qi.x,0,-$i.y,$i.x,0,-Mr.y,Mr.x,0];return!su(n,cs,us,ds,ko)||(n=[1,0,0,0,1,0,0,0,1],!su(n,cs,us,ds,ko))?!1:(Bo.crossVectors(qi,$i),n=[Bo.x,Bo.y,Bo.z],su(n,cs,us,ds,ko))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ei=[new H,new H,new H,new H,new H,new H,new H,new H],Yn=new H,Oo=new co,cs=new H,us=new H,ds=new H,qi=new H,$i=new H,Mr=new H,ma=new H,ko=new H,Bo=new H,Er=new H;function su(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Er.fromArray(t,s);const o=r.x*Math.abs(Er.x)+r.y*Math.abs(Er.y)+r.z*Math.abs(Er.z),l=e.dot(Er),c=n.dot(Er),f=i.dot(Er);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const Dt=new H,zo=new qe;let MS=0;class xi extends qr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:MS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Op,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)zo.fromBufferAttribute(this,n),zo.applyMatrix3(e),this.setXY(n,zo.x,zo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix3(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix4(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyNormalMatrix(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.transformDirection(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ha(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=gn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ha(n,this.array)),n}setX(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ha(n,this.array)),n}setY(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ha(n,this.array)),n}setZ(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ha(n,this.array)),n}setW(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array),s=gn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Op&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class px extends xi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class mx extends xi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class hn extends xi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const ES=new co,ga=new H,au=new H;class dh{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ES.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);const n=ga.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ga,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(au.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(au)),this.expandByPoint(ga.copy(e.center).sub(au))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let TS=0;const Fn=new bt,ou=new on,fs=new H,wn=new co,xa=new co,Gt=new H;class ni extends qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=lo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(iS(e)?mx:px)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,n,i){return Fn.makeTranslation(e,n,i),this.applyMatrix4(Fn),this}scale(e,n,i){return Fn.makeScale(e,n,i),this.applyMatrix4(Fn),this}lookAt(e){return ou.lookAt(e),ou.updateMatrix(),this.applyMatrix4(ou.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new hn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new co);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];xa.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(wn.min,xa.min),wn.expandByPoint(Gt),Gt.addVectors(wn.max,xa.max),wn.expandByPoint(Gt)):(wn.expandByPoint(xa.min),wn.expandByPoint(xa.max))}wn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Gt.fromBufferAttribute(o,c),l&&(fs.fromBufferAttribute(e,c),Gt.add(fs)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new xi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let g=0;g<i.count;g++)o[g]=new H,l[g]=new H;const c=new H,f=new H,h=new H,d=new qe,p=new qe,_=new qe,E=new H,m=new H;function u(g,b,P){c.fromBufferAttribute(i,g),f.fromBufferAttribute(i,b),h.fromBufferAttribute(i,P),d.fromBufferAttribute(s,g),p.fromBufferAttribute(s,b),_.fromBufferAttribute(s,P),f.sub(c),h.sub(c),p.sub(d),_.sub(d);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(E.copy(f).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(L),m.copy(h).multiplyScalar(p.x).addScaledVector(f,-_.x).multiplyScalar(L),o[g].add(E),o[b].add(E),o[P].add(E),l[g].add(m),l[b].add(m),l[P].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let g=0,b=v.length;g<b;++g){const P=v[g],L=P.start,F=P.count;for(let j=L,q=L+F;j<q;j+=3)u(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const M=new H,y=new H,A=new H,T=new H;function C(g){A.fromBufferAttribute(r,g),T.copy(A);const b=o[g];M.copy(b),M.sub(A.multiplyScalar(A.dot(b))).normalize(),y.crossVectors(T,b);const L=y.dot(l[g])<0?-1:1;a.setXYZW(g,M.x,M.y,M.z,L)}for(let g=0,b=v.length;g<b;++g){const P=v[g],L=P.start,F=P.count;for(let j=L,q=L+F;j<q;j+=3)C(e.getX(j+0)),C(e.getX(j+1)),C(e.getX(j+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new xi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new H,s=new H,a=new H,o=new H,l=new H,c=new H,f=new H,h=new H;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),E=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,E),a.fromBufferAttribute(n,m),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Gt.fromBufferAttribute(e,n),Gt.normalize(),e.setXYZ(n,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,h=o.normalized,d=new c.constructor(l.length*f);let p=0,_=0;for(let E=0,m=l.length;E<m;E++){o.isInterleavedBufferAttribute?p=l[E]*o.data.stride+o.offset:p=l[E]*f;for(let u=0;u<f;u++)d[_++]=c[p++]}return new xi(d,f,h)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ni,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,h=c.length;f<h;f++){const d=c[f],p=e(d,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,p=h.length;d<p;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let wS=0;class uo extends qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=lo(),this.name="",this.type="Material",this.blending=Ns,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pd,this.blendDst=md,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ne(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ne(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(i.blending=this.blending),this.side!==xr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pd&&(i.blendSrc=this.blendSrc),this.blendDst!==md&&(i.blendDst=this.blendDst),this.blendEquation!==Pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new qe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ti=new H,lu=new H,Vo=new H,Ki=new H,cu=new H,Go=new H,uu=new H;class AS{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,n),Ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){lu.copy(e).add(n).multiplyScalar(.5),Vo.copy(n).sub(e).normalize(),Ki.copy(this.origin).sub(lu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Vo),o=Ki.dot(this.direction),l=-Ki.dot(Vo),c=Ki.lengthSq(),f=Math.abs(1-a*a);let h,d,p,_;if(f>0)if(h=a*l-o,d=a*o-l,_=s*f,h>=0)if(d>=-_)if(d<=_){const E=1/f;h*=E,d*=E,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(lu).addScaledVector(Vo,d),p}intersectSphere(e,n){Ti.subVectors(e.center,this.origin);const i=Ti.dot(this.direction),r=Ti.dot(Ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,n,i,r,s){cu.subVectors(n,e),Go.subVectors(i,e),uu.crossVectors(cu,Go);let a=this.direction.dot(uu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ki.subVectors(this.origin,e);const l=o*this.direction.dot(Go.crossVectors(Ki,Go));if(l<0)return null;const c=o*this.direction.dot(cu.cross(Ki));if(c<0||l+c>a)return null;const f=-o*Ki.dot(uu);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class er extends uo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vr,this.combine=q0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jp=new bt,Tr=new AS,Ho=new dh,Qp=new H,Wo=new H,Xo=new H,jo=new H,du=new H,Yo=new H,em=new H,qo=new H;class ut extends on{constructor(e=new ni,n=new er){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Yo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],h=s[l];f!==0&&(du.fromBufferAttribute(h,e),a?Yo.addScaledVector(du,f):Yo.addScaledVector(du.sub(n),f))}n.add(Yo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(s),Tr.copy(e.ray).recast(e.near),!(Ho.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(Ho,Qp)===null||Tr.origin.distanceToSquared(Qp)>(e.far-e.near)**2))&&(Jp.copy(s).invert(),Tr.copy(e.ray).applyMatrix4(Jp),!(i.boundingBox!==null&&Tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Tr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,E=d.length;_<E;_++){const m=d[_],u=a[m.materialIndex],v=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,A=M;y<A;y+=3){const T=o.getX(y),C=o.getX(y+1),g=o.getX(y+2);r=$o(this,u,e,i,c,f,h,T,C,g),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),E=Math.min(o.count,p.start+p.count);for(let m=_,u=E;m<u;m+=3){const v=o.getX(m),M=o.getX(m+1),y=o.getX(m+2);r=$o(this,a,e,i,c,f,h,v,M,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,E=d.length;_<E;_++){const m=d[_],u=a[m.materialIndex],v=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,A=M;y<A;y+=3){const T=y,C=y+1,g=y+2;r=$o(this,u,e,i,c,f,h,T,C,g),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),E=Math.min(l.count,p.start+p.count);for(let m=_,u=E;m<u;m+=3){const v=m,M=m+1,y=m+2;r=$o(this,a,e,i,c,f,h,v,M,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function bS(t,e,n,i,r,s,a,o){let l;if(e.side===Mn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===xr,o),l===null)return null;qo.copy(o),qo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(qo);return c<n.near||c>n.far?null:{distance:c,point:qo.clone(),object:t}}function $o(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Wo),t.getVertexPosition(l,Xo),t.getVertexPosition(c,jo);const f=bS(t,e,n,i,Wo,Xo,jo,em);if(f){const h=new H;Zn.getBarycoord(em,Wo,Xo,jo,h),r&&(f.uv=Zn.getInterpolatedAttribute(r,o,l,c,h,new qe)),s&&(f.uv1=Zn.getInterpolatedAttribute(s,o,l,c,h,new qe)),a&&(f.normal=Zn.getInterpolatedAttribute(a,o,l,c,h,new H),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new H,materialIndex:0};Zn.getNormal(Wo,Xo,jo,d.normal),f.face=d,f.barycoord=h}return f}class CS extends an{constructor(e=null,n=1,i=1,r,s,a,o,l,c=qt,f=qt,h,d){super(null,a,o,l,c,f,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fu=new H,RS=new H,PS=new Fe;class Rr{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=fu.subVectors(i,n).cross(RS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(fu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||PS.getNormalMatrix(e),r=this.coplanarPoint(fu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new dh,LS=new qe(.5,.5),Ko=new H;class fh{constructor(e=new Rr,n=new Rr,i=new Rr,r=new Rr,s=new Rr,a=new Rr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=fi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],h=s[5],d=s[6],p=s[7],_=s[8],E=s[9],m=s[10],u=s[11],v=s[12],M=s[13],y=s[14],A=s[15];if(r[0].setComponents(c-a,p-f,u-_,A-v).normalize(),r[1].setComponents(c+a,p+f,u+_,A+v).normalize(),r[2].setComponents(c+o,p+h,u+E,A+M).normalize(),r[3].setComponents(c-o,p-h,u-E,A-M).normalize(),i)r[4].setComponents(l,d,m,y).normalize(),r[5].setComponents(c-l,p-d,u-m,A-y).normalize();else if(r[4].setComponents(c-l,p-d,u-m,A-y).normalize(),n===fi)r[5].setComponents(c+l,p+d,u+m,A+y).normalize();else if(n===no)r[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){wr.center.set(0,0,0);const n=LS.distanceTo(e.center);return wr.radius=.7071067811865476+n,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ko.x=r.normal.x>0?e.max.x:e.min.x,Ko.y=r.normal.y>0?e.max.y:e.min.y,Ko.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ko)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gx extends an{constructor(e=[],n=Wr,i,r,s,a,o,l,c,f){super(e,n,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tm extends an{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class js extends an{constructor(e,n,i=vi,r,s,a,o=qt,l=qt,c,f=Bi,h=1){if(f!==Bi&&f!==Fr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:h};super(d,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new uh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class IS extends js{constructor(e,n=vi,i=Wr,r,s,a=qt,o=qt,l,c=Bi){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,n,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class xx extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class rn extends ni{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new hn(c,3)),this.setAttribute("normal",new hn(f,3)),this.setAttribute("uv",new hn(h,2));function _(E,m,u,v,M,y,A,T,C,g,b){const P=y/C,L=A/g,F=y/2,j=A/2,q=T/2,V=C+1,K=g+1;let G=0,k=0;const N=new H;for(let ee=0;ee<K;ee++){const ie=ee*L-j;for(let oe=0;oe<V;oe++){const ze=oe*P-F;N[E]=ze*v,N[m]=ie*M,N[u]=q,c.push(N.x,N.y,N.z),N[E]=0,N[m]=0,N[u]=T>0?1:-1,f.push(N.x,N.y,N.z),h.push(oe/C),h.push(1-ee/g),G+=1}}for(let ee=0;ee<g;ee++)for(let ie=0;ie<C;ie++){const oe=d+ie+V*ee,ze=d+ie+V*(ee+1),Ze=d+(ie+1)+V*(ee+1),Ge=d+(ie+1)+V*ee;l.push(oe,ze,Ge),l.push(ze,Ze,Ge),k+=6}o.addGroup(p,k,b),p+=k,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class hh extends ni{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],h=[],d=[],p=[];let _=0;const E=[],m=i/2;let u=0;v(),a===!1&&(e>0&&M(!0),n>0&&M(!1)),this.setIndex(f),this.setAttribute("position",new hn(h,3)),this.setAttribute("normal",new hn(d,3)),this.setAttribute("uv",new hn(p,2));function v(){const y=new H,A=new H;let T=0;const C=(n-e)/i;for(let g=0;g<=s;g++){const b=[],P=g/s,L=P*(n-e)+e;for(let F=0;F<=r;F++){const j=F/r,q=j*l+o,V=Math.sin(q),K=Math.cos(q);A.x=L*V,A.y=-P*i+m,A.z=L*K,h.push(A.x,A.y,A.z),y.set(V,C,K).normalize(),d.push(y.x,y.y,y.z),p.push(j,1-P),b.push(_++)}E.push(b)}for(let g=0;g<r;g++)for(let b=0;b<s;b++){const P=E[b][g],L=E[b+1][g],F=E[b+1][g+1],j=E[b][g+1];(e>0||b!==0)&&(f.push(P,L,j),T+=3),(n>0||b!==s-1)&&(f.push(L,F,j),T+=3)}c.addGroup(u,T,0),u+=T}function M(y){const A=_,T=new qe,C=new H;let g=0;const b=y===!0?e:n,P=y===!0?1:-1;for(let F=1;F<=r;F++)h.push(0,m*P,0),d.push(0,P,0),p.push(.5,.5),_++;const L=_;for(let F=0;F<=r;F++){const q=F/r*l+o,V=Math.cos(q),K=Math.sin(q);C.x=b*K,C.y=m*P,C.z=b*V,h.push(C.x,C.y,C.z),d.push(0,P,0),T.x=V*.5+.5,T.y=K*.5*P+.5,p.push(T.x,T.y),_++}for(let F=0;F<r;F++){const j=A+F,q=L+F;y===!0?f.push(q,q+1,j):f.push(q+1,q,j),g+=3}c.addGroup(u,g,y===!0?1:2),u+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ys extends ni{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,h=e/o,d=n/l,p=[],_=[],E=[],m=[];for(let u=0;u<f;u++){const v=u*d-a;for(let M=0;M<c;M++){const y=M*h-s;_.push(y,-v,0),E.push(0,0,1),m.push(M/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<o;v++){const M=v+c*u,y=v+c*(u+1),A=v+1+c*(u+1),T=v+1+c*u;p.push(M,y,T),p.push(y,A,T)}this.setIndex(p),this.setAttribute("position",new hn(_,3)),this.setAttribute("normal",new hn(E,3)),this.setAttribute("uv",new hn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.widthSegments,e.heightSegments)}}class ph extends ni{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const f=[],h=new H,d=new H,p=[],_=[],E=[],m=[];for(let u=0;u<=i;u++){const v=[],M=u/i,y=a+M*o,A=e*Math.cos(y),T=Math.sqrt(e*e-A*A);let C=0;u===0&&a===0?C=.5/n:u===i&&l===Math.PI&&(C=-.5/n);for(let g=0;g<=n;g++){const b=g/n,P=r+b*s;h.x=-T*Math.cos(P),h.y=A,h.z=T*Math.sin(P),_.push(h.x,h.y,h.z),d.copy(h).normalize(),E.push(d.x,d.y,d.z),m.push(b+C,1-M),v.push(c++)}f.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const M=f[u][v+1],y=f[u][v],A=f[u+1][v],T=f[u+1][v+1];(u!==0||a>0)&&p.push(M,y,T),(u!==i-1||l<Math.PI)&&p.push(y,A,T)}this.setIndex(p),this.setAttribute("position",new hn(_,3)),this.setAttribute("normal",new hn(E,3)),this.setAttribute("uv",new hn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ph(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function qs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(nm(r))r.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(nm(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function un(t){const e={};for(let n=0;n<t.length;n++){const i=qs(t[n]);for(const r in i)e[r]=i[r]}return e}function nm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function DS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function vx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const NS={clone:qs,merge:un};var US=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends uo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=US,this.fragmentShader=FS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=DS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new et().setHex(r.value);break;case"v2":this.uniforms[i].value=new qe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new H().fromArray(r.value);break;case"v4":this.uniforms[i].value=new St().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Fe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new bt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class OS extends _i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ar extends uo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tf,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kS extends uo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$y,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class BS extends uo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class mh extends on{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const hu=new bt,im=new H,rm=new H;class _x{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fh,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;im.setFromMatrixPosition(e.matrixWorld),n.position.copy(im),rm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(rm),n.updateMatrixWorld(),hu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hu,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===no||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Zo=new H,Jo=new Js,ai=new H;class yx extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Zo,Jo,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zo,Jo,ai.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Zo,Jo,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zo,Jo,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new H,sm=new qe,am=new qe;class bn extends yx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=nf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nf*2*Math.atan(Math.tan(Hc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,n){return this.getViewBounds(e,sm,am),n.subVectors(am,sm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Hc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class zS extends _x{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0}}class VS extends mh{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new zS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class gh extends yx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class GS extends _x{constructor(){super(new gh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pu extends mh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new GS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class HS extends mh{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const hs=-90,ps=1;class WS extends on{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(hs,ps,e,n);r.layers=this.layers,this.add(r);const s=new bn(hs,ps,e,n);s.layers=this.layers,this.add(s);const a=new bn(hs,ps,e,n);a.layers=this.layers,this.add(a);const o=new bn(hs,ps,e,n);o.layers=this.layers,this.add(o);const l=new bn(hs,ps,e,n);l.layers=this.layers,this.add(l);const c=new bn(hs,ps,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===no)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(h,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class XS extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Sh=class Sh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Sh.prototype.isMatrix2=!0;let om=Sh;function lm(t,e,n,i){const r=jS(i);switch(n){case ox:return t*e;case cx:return t*e/r.components*r.byteLength;case sh:return t*e/r.components*r.byteLength;case Xr:return t*e*2/r.components*r.byteLength;case ah:return t*e*2/r.components*r.byteLength;case lx:return t*e*3/r.components*r.byteLength;case Jn:return t*e*4/r.components*r.byteLength;case oh:return t*e*4/r.components*r.byteLength;case hl:case pl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ml:case gl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ad:case Cd:return Math.max(t,16)*Math.max(e,8)/4;case wd:case bd:return Math.max(t,8)*Math.max(e,8)/2;case Rd:case Pd:case Id:case Dd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ld:case Gl:case Nd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Od:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case kd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case zd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Gd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Hd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Wd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Xd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case jd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Yd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case qd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case $d:case Kd:case Zd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Jd:case Qd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Hl:case ef:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function jS(t){switch(t){case Cn:case ix:return{byteLength:1,components:1};case eo:case rx:case ki:return{byteLength:2,components:1};case ih:case rh:return{byteLength:2,components:4};case vi:case nh:case di:return{byteLength:4,components:1};case sx:case ax:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:th}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=th);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sx(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function YS(t){const e=new WeakMap;function n(o,l){const c=o.array,f=o.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,f),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const f=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,f);else{h.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<h.length;p++){const _=h[d],E=h[p];E.start<=_.start+_.count+1?_.count=Math.max(_.count,E.start+E.count-_.start):(++d,h[d]=E)}h.length=d+1;for(let p=0,_=h.length;p<_;p++){const E=h[p];t.bufferSubData(c,E.start*f.BYTES_PER_ELEMENT,f,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var qS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$S=`#ifdef USE_ALPHAHASH
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
#endif`,KS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ZS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,QS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eM=`#ifdef USE_AOMAP
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
#endif`,tM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nM=`#ifdef USE_BATCHING
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
#endif`,iM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,oM=`#ifdef USE_IRIDESCENCE
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
#endif`,lM=`#ifdef USE_BUMPMAP
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
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,xM=`#define PI 3.141592653589793
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
} // validated`,vM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_M=`vec3 transformedNormal = objectNormal;
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
#endif`,yM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,MM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,EM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TM="gl_FragColor = linearToOutputTexel( gl_FragColor );",wM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,AM=`#ifdef USE_ENVMAP
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
#endif`,bM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,CM=`#ifdef USE_ENVMAP
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
#endif`,RM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PM=`#ifdef USE_ENVMAP
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
#endif`,LM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UM=`#ifdef USE_GRADIENTMAP
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
}`,FM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,zM=`#ifdef USE_ENVMAP
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
#endif`,VM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,GM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XM=`PhysicalMaterial material;
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
#endif`,jM=`uniform sampler2D dfgLUT;
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
}`,YM=`
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
#endif`,qM=`#if defined( RE_IndirectDiffuse )
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
#endif`,$M=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,KM=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ZM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,t1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,r1=`#if defined( USE_POINTS_UV )
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
#endif`,s1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u1=`#ifdef USE_MORPHTARGETS
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
#endif`,d1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,h1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,p1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,x1=`#ifdef USE_NORMALMAP
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
#endif`,v1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,M1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,T1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,R1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,D1=`float getShadowMask() {
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
}`,N1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U1=`#ifdef USE_SKINNING
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
#endif`,F1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O1=`#ifdef USE_SKINNING
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
#endif`,k1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,z1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,G1=`#ifdef USE_TRANSMISSION
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
#endif`,H1=`#ifdef USE_TRANSMISSION
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
#endif`,W1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const q1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$1=`uniform sampler2D t2D;
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
}`,K1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,J1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eE=`#include <common>
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
}`,tE=`#if DEPTH_PACKING == 3200
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
}`,nE=`#define DISTANCE
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
}`,iE=`#define DISTANCE
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
}`,rE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aE=`uniform float scale;
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
}`,oE=`uniform vec3 diffuse;
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
}`,lE=`#include <common>
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
}`,cE=`uniform vec3 diffuse;
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
}`,uE=`#define LAMBERT
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
}`,dE=`#define LAMBERT
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
}`,fE=`#define MATCAP
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
}`,hE=`#define MATCAP
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
}`,pE=`#define NORMAL
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
}`,mE=`#define NORMAL
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
}`,gE=`#define PHONG
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
}`,xE=`#define PHONG
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
}`,vE=`#define STANDARD
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
}`,_E=`#define STANDARD
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
}`,yE=`#define TOON
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
}`,SE=`#define TOON
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
}`,ME=`uniform float size;
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
}`,EE=`uniform vec3 diffuse;
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
}`,TE=`#include <common>
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
}`,wE=`uniform vec3 color;
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
}`,AE=`uniform float rotation;
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
}`,bE=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:qS,alphahash_pars_fragment:$S,alphamap_fragment:KS,alphamap_pars_fragment:ZS,alphatest_fragment:JS,alphatest_pars_fragment:QS,aomap_fragment:eM,aomap_pars_fragment:tM,batching_pars_vertex:nM,batching_vertex:iM,begin_vertex:rM,beginnormal_vertex:sM,bsdfs:aM,iridescence_fragment:oM,bumpmap_pars_fragment:lM,clipping_planes_fragment:cM,clipping_planes_pars_fragment:uM,clipping_planes_pars_vertex:dM,clipping_planes_vertex:fM,color_fragment:hM,color_pars_fragment:pM,color_pars_vertex:mM,color_vertex:gM,common:xM,cube_uv_reflection_fragment:vM,defaultnormal_vertex:_M,displacementmap_pars_vertex:yM,displacementmap_vertex:SM,emissivemap_fragment:MM,emissivemap_pars_fragment:EM,colorspace_fragment:TM,colorspace_pars_fragment:wM,envmap_fragment:AM,envmap_common_pars_fragment:bM,envmap_pars_fragment:CM,envmap_pars_vertex:RM,envmap_physical_pars_fragment:zM,envmap_vertex:PM,fog_vertex:LM,fog_pars_vertex:IM,fog_fragment:DM,fog_pars_fragment:NM,gradientmap_pars_fragment:UM,lightmap_pars_fragment:FM,lights_lambert_fragment:OM,lights_lambert_pars_fragment:kM,lights_pars_begin:BM,lights_toon_fragment:VM,lights_toon_pars_fragment:GM,lights_phong_fragment:HM,lights_phong_pars_fragment:WM,lights_physical_fragment:XM,lights_physical_pars_fragment:jM,lights_fragment_begin:YM,lights_fragment_maps:qM,lights_fragment_end:$M,lightprobes_pars_fragment:KM,logdepthbuf_fragment:ZM,logdepthbuf_pars_fragment:JM,logdepthbuf_pars_vertex:QM,logdepthbuf_vertex:e1,map_fragment:t1,map_pars_fragment:n1,map_particle_fragment:i1,map_particle_pars_fragment:r1,metalnessmap_fragment:s1,metalnessmap_pars_fragment:a1,morphinstance_vertex:o1,morphcolor_vertex:l1,morphnormal_vertex:c1,morphtarget_pars_vertex:u1,morphtarget_vertex:d1,normal_fragment_begin:f1,normal_fragment_maps:h1,normal_pars_fragment:p1,normal_pars_vertex:m1,normal_vertex:g1,normalmap_pars_fragment:x1,clearcoat_normal_fragment_begin:v1,clearcoat_normal_fragment_maps:_1,clearcoat_pars_fragment:y1,iridescence_pars_fragment:S1,opaque_fragment:M1,packing:E1,premultiplied_alpha_fragment:T1,project_vertex:w1,dithering_fragment:A1,dithering_pars_fragment:b1,roughnessmap_fragment:C1,roughnessmap_pars_fragment:R1,shadowmap_pars_fragment:P1,shadowmap_pars_vertex:L1,shadowmap_vertex:I1,shadowmask_pars_fragment:D1,skinbase_vertex:N1,skinning_pars_vertex:U1,skinning_vertex:F1,skinnormal_vertex:O1,specularmap_fragment:k1,specularmap_pars_fragment:B1,tonemapping_fragment:z1,tonemapping_pars_fragment:V1,transmission_fragment:G1,transmission_pars_fragment:H1,uv_pars_fragment:W1,uv_pars_vertex:X1,uv_vertex:j1,worldpos_vertex:Y1,background_vert:q1,background_frag:$1,backgroundCube_vert:K1,backgroundCube_frag:Z1,cube_vert:J1,cube_frag:Q1,depth_vert:eE,depth_frag:tE,distance_vert:nE,distance_frag:iE,equirect_vert:rE,equirect_frag:sE,linedashed_vert:aE,linedashed_frag:oE,meshbasic_vert:lE,meshbasic_frag:cE,meshlambert_vert:uE,meshlambert_frag:dE,meshmatcap_vert:fE,meshmatcap_frag:hE,meshnormal_vert:pE,meshnormal_frag:mE,meshphong_vert:gE,meshphong_frag:xE,meshphysical_vert:vE,meshphysical_frag:_E,meshtoon_vert:yE,meshtoon_frag:SE,points_vert:ME,points_frag:EE,shadow_vert:TE,shadow_frag:wE,sprite_vert:AE,sprite_frag:bE},xe={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},ci={basic:{uniforms:un([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:un([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:un([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:un([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:un([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new et(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:un([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:un([xe.points,xe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:un([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:un([xe.common,xe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:un([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:un([xe.sprite,xe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:un([xe.common,xe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:un([xe.lights,xe.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};ci.physical={uniforms:un([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Qo={r:0,b:0,g:0},CE=new bt,Mx=new Fe;Mx.set(-1,0,0,0,1,0,0,0,1);function RE(t,e,n,i,r,s){const a=new et(0);let o=r===!0?0:1,l,c,f=null,h=0,d=null;function p(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){const y=v.backgroundBlurriness>0;M=e.get(M,y)}return M}function _(v){let M=!1;const y=p(v);y===null?m(a,o):y&&y.isColor&&(m(y,1),M=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(v,M){const y=p(M);y&&(y.isCubeTexture||y.mapping===dc)?(c===void 0&&(c=new ut(new rn(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:qs(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(CE.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Mx),c.material.toneMapped=je.getTransfer(y.colorSpace)!==rt,(f!==y||h!==y.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,d=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ut(new Ys(2,2),new _i({name:"BackgroundMaterial",uniforms:qs(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=je.getTransfer(y.colorSpace)!==rt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,f=y,h=y.version,d=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,M){v.getRGB(Qo,vx(t)),n.buffers.color.setClear(Qo.r,Qo.g,Qo.b,M,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:_,addToRenderList:E,dispose:u}}function PE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(L,F,j,q,V){let K=!1;const G=h(L,q,j,F);s!==G&&(s=G,c(s.object)),K=p(L,q,j,V),K&&_(L,q,j,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,y(L,F,j,q),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(L){return t.bindVertexArray(L)}function f(L){return t.deleteVertexArray(L)}function h(L,F,j,q){const V=q.wireframe===!0;let K=i[F.id];K===void 0&&(K={},i[F.id]=K);const G=L.isInstancedMesh===!0?L.id:0;let k=K[G];k===void 0&&(k={},K[G]=k);let N=k[j.id];N===void 0&&(N={},k[j.id]=N);let ee=N[V];return ee===void 0&&(ee=d(l()),N[V]=ee),ee}function d(L){const F=[],j=[],q=[];for(let V=0;V<n;V++)F[V]=0,j[V]=0,q[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:j,attributeDivisors:q,object:L,attributes:{},index:null}}function p(L,F,j,q){const V=s.attributes,K=F.attributes;let G=0;const k=j.getAttributes();for(const N in k)if(k[N].location>=0){const ie=V[N];let oe=K[N];if(oe===void 0&&(N==="instanceMatrix"&&L.instanceMatrix&&(oe=L.instanceMatrix),N==="instanceColor"&&L.instanceColor&&(oe=L.instanceColor)),ie===void 0||ie.attribute!==oe||oe&&ie.data!==oe.data)return!0;G++}return s.attributesNum!==G||s.index!==q}function _(L,F,j,q){const V={},K=F.attributes;let G=0;const k=j.getAttributes();for(const N in k)if(k[N].location>=0){let ie=K[N];ie===void 0&&(N==="instanceMatrix"&&L.instanceMatrix&&(ie=L.instanceMatrix),N==="instanceColor"&&L.instanceColor&&(ie=L.instanceColor));const oe={};oe.attribute=ie,ie&&ie.data&&(oe.data=ie.data),V[N]=oe,G++}s.attributes=V,s.attributesNum=G,s.index=q}function E(){const L=s.newAttributes;for(let F=0,j=L.length;F<j;F++)L[F]=0}function m(L){u(L,0)}function u(L,F){const j=s.newAttributes,q=s.enabledAttributes,V=s.attributeDivisors;j[L]=1,q[L]===0&&(t.enableVertexAttribArray(L),q[L]=1),V[L]!==F&&(t.vertexAttribDivisor(L,F),V[L]=F)}function v(){const L=s.newAttributes,F=s.enabledAttributes;for(let j=0,q=F.length;j<q;j++)F[j]!==L[j]&&(t.disableVertexAttribArray(j),F[j]=0)}function M(L,F,j,q,V,K,G){G===!0?t.vertexAttribIPointer(L,F,j,V,K):t.vertexAttribPointer(L,F,j,q,V,K)}function y(L,F,j,q){E();const V=q.attributes,K=j.getAttributes(),G=F.defaultAttributeValues;for(const k in K){const N=K[k];if(N.location>=0){let ee=V[k];if(ee===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor)),ee!==void 0){const ie=ee.normalized,oe=ee.itemSize,ze=e.get(ee);if(ze===void 0)continue;const Ze=ze.buffer,Ge=ze.type,Z=ze.bytesPerElement,ae=Ge===t.INT||Ge===t.UNSIGNED_INT||ee.gpuType===nh;if(ee.isInterleavedBufferAttribute){const te=ee.data,Ie=te.stride,De=ee.offset;if(te.isInstancedInterleavedBuffer){for(let Pe=0;Pe<N.locationSize;Pe++)u(N.location+Pe,te.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Pe=0;Pe<N.locationSize;Pe++)m(N.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let Pe=0;Pe<N.locationSize;Pe++)M(N.location+Pe,oe/N.locationSize,Ge,ie,Ie*Z,(De+oe/N.locationSize*Pe)*Z,ae)}else{if(ee.isInstancedBufferAttribute){for(let te=0;te<N.locationSize;te++)u(N.location+te,ee.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let te=0;te<N.locationSize;te++)m(N.location+te);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let te=0;te<N.locationSize;te++)M(N.location+te,oe/N.locationSize,Ge,ie,oe*Z,oe/N.locationSize*te*Z,ae)}}else if(G!==void 0){const ie=G[k];if(ie!==void 0)switch(ie.length){case 2:t.vertexAttrib2fv(N.location,ie);break;case 3:t.vertexAttrib3fv(N.location,ie);break;case 4:t.vertexAttrib4fv(N.location,ie);break;default:t.vertexAttrib1fv(N.location,ie)}}}}v()}function A(){b();for(const L in i){const F=i[L];for(const j in F){const q=F[j];for(const V in q){const K=q[V];for(const G in K)f(K[G].object),delete K[G];delete q[V]}}delete i[L]}}function T(L){if(i[L.id]===void 0)return;const F=i[L.id];for(const j in F){const q=F[j];for(const V in q){const K=q[V];for(const G in K)f(K[G].object),delete K[G];delete q[V]}}delete i[L.id]}function C(L){for(const F in i){const j=i[F];for(const q in j){const V=j[q];if(V[L.id]===void 0)continue;const K=V[L.id];for(const G in K)f(K[G].object),delete K[G];delete V[L.id]}}}function g(L){for(const F in i){const j=i[F],q=L.isInstancedMesh===!0?L.id:0,V=j[q];if(V!==void 0){for(const K in V){const G=V[K];for(const k in G)f(G[k].object),delete G[k];delete V[K]}delete j[q],Object.keys(j).length===0&&delete i[F]}}}function b(){P(),a=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:g,releaseStatesOfProgram:C,initAttributes:E,enableAttribute:m,disableUnusedAttributes:v}}function LE(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,f){f!==0&&(t.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function o(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let d=0;for(let p=0;p<f;p++)d+=c[p];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function IE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Jn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const g=C===ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Cn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==di&&!g)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(Ne("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:E,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,maxSamples:A,samples:T}}function DE(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Rr,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,E=h.clipIntersection,m=h.clipShadows,u=t.get(h);if(!r||_===null||_.length===0||s&&!m)s?f(null):c();else{const v=s?0:i,M=v*4;let y=u.clippingState||null;l.value=y,y=f(_,d,M,p);for(let A=0;A!==M;++A)y[A]=n[A];u.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,p,_){const E=h!==null?h.length:0;let m=null;if(E!==0){if(m=l.value,_!==!0||m===null){const u=p+E*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let M=0,y=p;M!==E;++M,y+=4)a.copy(h[M]).applyMatrix4(v,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,m}}const ar=4,cm=[.125,.215,.35,.446,.526,.582],Lr=20,NE=256,va=new gh,um=new et;let mu=null,gu=0,xu=0,vu=!1;const UE=new H;class dm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=UE}=s;mu=this._renderer.getRenderTarget(),gu=this._renderer.getActiveCubeFace(),xu=this._renderer.getActiveMipmapLevel(),vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(mu,gu,xu),this._renderer.xr.enabled=vu,e.scissorTest=!1,ms(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Wr||e.mapping===Xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mu=this._renderer.getRenderTarget(),gu=this._renderer.getActiveCubeFace(),xu=this._renderer.getActiveMipmapLevel(),vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:ki,format:Jn,colorSpace:Wl,depthBuffer:!1},r=fm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fm(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=FE(s)),this._blurMaterial=kE(s,e,n),this._ggxMaterial=OE(s,e,n)}return r}_compileMaterial(e){const n=new ut(new ni,e);this._renderer.compile(n,va)}_sceneToCubeUV(e,n,i,r,s){const l=new bn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(um),h.toneMapping=mi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ut(new rn,new er({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,m=E.material;let u=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,u=!0):(m.color.copy(um),u=!0);for(let M=0;M<6;M++){const y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[M],s.y,s.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[M]));const A=this._cubeSize;ms(r,y*A,M>2?A:0,A,A),h.setRenderTarget(r),u&&h.render(E,l),h.render(e,l)}h.toneMapping=p,h.autoClear=d,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Wr||e.mapping===Xs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ms(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,va)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),d=0+c*1.25,p=h*d,{_lodMax:_}=this,E=this._sizeLods[i],m=3*E*(i>_-ar?i-_+ar:0),u=4*(this._cubeSize-E);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-n,ms(s,m,u,3*E,2*E),r.setRenderTarget(s),r.render(o,va),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,ms(e,m,u,3*E,2*E),r.setRenderTarget(e),r.render(o,va)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Qe("blur direction must be either latitudinal or longitudinal!");const f=3,h=this._lodMeshes[r];h.material=c;const d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Lr-1),E=s/_,m=isFinite(s)?1+Math.floor(f*E):Lr;m>Lr&&Ne(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Lr}`);const u=[];let v=0;for(let C=0;C<Lr;++C){const g=C/E,b=Math.exp(-g*g/2);u.push(b),C===0?v+=b:C<m&&(v+=2*b)}for(let C=0;C<u.length;C++)u[C]=u[C]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-i;const y=this._sizeLods[r],A=3*y*(r>M-ar?r-M+ar:0),T=4*(this._cubeSize-y);ms(n,A,T,3*y,2*y),l.setRenderTarget(n),l.render(h,va)}}function FE(t){const e=[],n=[],i=[];let r=t;const s=t-ar+1+cm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-ar?l=cm[a-t+ar-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,_=6,E=3,m=2,u=1,v=new Float32Array(E*_*p),M=new Float32Array(m*_*p),y=new Float32Array(u*_*p);for(let T=0;T<p;T++){const C=T%3*2/3-1,g=T>2?0:-1,b=[C,g,0,C+2/3,g,0,C+2/3,g+1,0,C,g,0,C+2/3,g+1,0,C,g+1,0];v.set(b,E*_*T),M.set(d,m*_*T);const P=[T,T,T,T,T,T];y.set(P,u*_*T)}const A=new ni;A.setAttribute("position",new xi(v,E)),A.setAttribute("uv",new xi(M,m)),A.setAttribute("faceIndex",new xi(y,u)),i.push(new ut(A,null)),r>ar&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function fm(t,e,n){const i=new gi(t,e,n);return i.texture.mapping=dc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ms(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function OE(t,e,n){return new _i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:NE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fc(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function kE(t,e,n){const i=new Float32Array(Lr),r=new H(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fc(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function hm(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fc(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function pm(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function fc(){return`

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
	`}class Ex extends gi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new gx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new rn(5,5,5),s=new _i({name:"CubemapFromEquirect",uniforms:qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:Ii});s.uniforms.tEquirect.value=n;const a=new ut(r,s),o=n.minFilter;return n.minFilter===Ur&&(n.minFilter=Wt),new WS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function BE(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,p=!1){return d==null?null:p?a(d):s(d)}function s(d){if(d&&d.isTexture){const p=d.mapping;if(p===zc||p===Vc)if(e.has(d)){const _=e.get(d).texture;return o(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const E=new Ex(_.height);return E.fromEquirectangularTexture(t,d),e.set(d,E),d.addEventListener("dispose",c),o(E.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const p=d.mapping,_=p===zc||p===Vc,E=p===Wr||p===Xs;if(_||E){let m=n.get(d);const u=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return i===null&&(i=new dm(t)),m=_?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),m.texture;if(m!==void 0)return m.texture;{const v=d.image;return _&&v&&v.height>0||E&&v&&l(v)?(i===null&&(i=new dm(t)),m=_?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),d.addEventListener("dispose",f),m.texture):null}}}return d}function o(d,p){return p===zc?d.mapping=Wr:p===Vc&&(d.mapping=Xs),d}function l(d){let p=0;const _=6;for(let E=0;E<_;E++)d[E]!==void 0&&p++;return p===_}function c(d){const p=d.target;p.removeEventListener("dispose",c);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function f(d){const p=d.target;p.removeEventListener("dispose",f);const _=n.get(p);_!==void 0&&(n.delete(p),_.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function zE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Us("WebGLRenderer: "+i+" extension not supported."),r}}}function VE(t,e,n,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,_=h.attributes.position;let E=0;if(_===void 0)return;if(p!==null){const v=p.array;E=p.version;for(let M=0,y=v.length;M<y;M+=3){const A=v[M+0],T=v[M+1],C=v[M+2];d.push(A,T,T,C,C,A)}}else{const v=_.array;E=_.version;for(let M=0,y=v.length/3-1;M<y;M+=3){const A=M+0,T=M+1,C=M+2;d.push(A,T,T,C,C,A)}}const m=new(_.count>=65535?mx:px)(d,1);m.version=E;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function f(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function GE(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){t.drawElements(i,d,s,h*a),n.update(d,i,1)}function c(h,d,p){p!==0&&(t.drawElementsInstanced(i,d,s,h*a,p),n.update(d,i,p))}function f(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,p);let E=0;for(let m=0;m<p;m++)E+=d[m];n.update(E,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function HE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Qe("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function WE(t,e,n){const i=new WeakMap,r=new St;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let P=function(){g.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var p=P;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let y=0;_===!0&&(y=1),E===!0&&(y=2),m===!0&&(y=3);let A=o.attributes.position.count*y,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*T*4*h),g=new dx(C,A,T,h);g.type=di,g.needsUpdate=!0;const b=y*4;for(let L=0;L<h;L++){const F=u[L],j=v[L],q=M[L],V=A*T*4*L;for(let K=0;K<F.count;K++){const G=K*b;_===!0&&(r.fromBufferAttribute(F,K),C[V+G+0]=r.x,C[V+G+1]=r.y,C[V+G+2]=r.z,C[V+G+3]=0),E===!0&&(r.fromBufferAttribute(j,K),C[V+G+4]=r.x,C[V+G+5]=r.y,C[V+G+6]=r.z,C[V+G+7]=0),m===!0&&(r.fromBufferAttribute(q,K),C[V+G+8]=r.x,C[V+G+9]=r.y,C[V+G+10]=r.z,C[V+G+11]=q.itemSize===4?r.w:1)}}d={count:h,texture:g,size:new qe(A,T)},i.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const E=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",E),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function XE(t,e,n,i,r){let s=new WeakMap;function a(c){const f=r.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==f&&(e.update(d),s.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==f&&(p.update(),s.set(p,f))}return d}function o(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:a,dispose:o}}const jE={[$0]:"LINEAR_TONE_MAPPING",[K0]:"REINHARD_TONE_MAPPING",[Z0]:"CINEON_TONE_MAPPING",[J0]:"ACES_FILMIC_TONE_MAPPING",[ex]:"AGX_TONE_MAPPING",[tx]:"NEUTRAL_TONE_MAPPING",[Q0]:"CUSTOM_TONE_MAPPING"};function YE(t,e,n,i,r,s){const a=new gi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new js(e,n):void 0}),o=new gi(e,n,{type:ki,depthBuffer:!1,stencilBuffer:!1}),l=new ni;l.setAttribute("position",new hn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new hn([0,2,0,0,2,0],2));const c=new OS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ut(l,c),h=new gh(-1,1,1,-1,0,1);let d=null,p=null,_=!1,E,m=null,u=[],v=!1;this.setSize=function(M,y){a.setSize(M,y),o.setSize(M,y);for(let A=0;A<u.length;A++){const T=u[A];T.setSize&&T.setSize(M,y)}},this.setEffects=function(M){u=M,v=u.length>0&&u[0].isRenderPass===!0;const y=a.width,A=a.height;for(let T=0;T<u.length;T++){const C=u[T];C.setSize&&C.setSize(y,A)}},this.begin=function(M,y){if(_||M.toneMapping===mi&&u.length===0)return!1;if(m=y,y!==null){const A=y.width,T=y.height;(a.width!==A||a.height!==T)&&this.setSize(A,T)}return v===!1&&M.setRenderTarget(a),E=M.toneMapping,M.toneMapping=mi,!0},this.hasRenderPass=function(){return v},this.end=function(M,y){M.toneMapping=E,_=!0;let A=a,T=o;for(let C=0;C<u.length;C++){const g=u[C];if(g.enabled!==!1&&(g.render(M,T,A,y),g.needsSwap!==!1)){const b=A;A=T,T=b}}if(d!==M.outputColorSpace||p!==M.toneMapping){d=M.outputColorSpace,p=M.toneMapping,c.defines={},je.getTransfer(d)===rt&&(c.defines.SRGB_TRANSFER="");const C=jE[p];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,M.setRenderTarget(m),M.render(f,h),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const Tx=new an,rf=new js(1,1),wx=new dx,Ax=new hS,bx=new gx,mm=[],gm=[],xm=new Float32Array(16),vm=new Float32Array(9),_m=new Float32Array(4);function Qs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=mm[r];if(s===void 0&&(s=new Float32Array(r),mm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Vt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function hc(t,e){let n=gm[e];n===void 0&&(n=new Int32Array(e),gm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function qE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function $E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2fv(this.addr,e),Vt(n,e)}}function KE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zt(n,e))return;t.uniform3fv(this.addr,e),Vt(n,e)}}function ZE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4fv(this.addr,e),Vt(n,e)}}function JE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;_m.set(i),t.uniformMatrix2fv(this.addr,!1,_m),Vt(n,i)}}function QE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;vm.set(i),t.uniformMatrix3fv(this.addr,!1,vm),Vt(n,i)}}function eT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Vt(n,e)}else{if(zt(n,i))return;xm.set(i),t.uniformMatrix4fv(this.addr,!1,xm),Vt(n,i)}}function tT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function nT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2iv(this.addr,e),Vt(n,e)}}function iT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3iv(this.addr,e),Vt(n,e)}}function rT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4iv(this.addr,e),Vt(n,e)}}function sT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function aT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2uiv(this.addr,e),Vt(n,e)}}function oT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3uiv(this.addr,e),Vt(n,e)}}function lT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4uiv(this.addr,e),Vt(n,e)}}function cT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(rf.compareFunction=n.isReversedDepthBuffer()?ch:lh,s=rf):s=Tx,n.setTexture2D(e||s,r)}function uT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ax,r)}function dT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||bx,r)}function fT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||wx,r)}function hT(t){switch(t){case 5126:return qE;case 35664:return $E;case 35665:return KE;case 35666:return ZE;case 35674:return JE;case 35675:return QE;case 35676:return eT;case 5124:case 35670:return tT;case 35667:case 35671:return nT;case 35668:case 35672:return iT;case 35669:case 35673:return rT;case 5125:return sT;case 36294:return aT;case 36295:return oT;case 36296:return lT;case 35678:case 36198:case 36298:case 36306:case 35682:return cT;case 35679:case 36299:case 36307:return uT;case 35680:case 36300:case 36308:case 36293:return dT;case 36289:case 36303:case 36311:case 36292:return fT}}function pT(t,e){t.uniform1fv(this.addr,e)}function mT(t,e){const n=Qs(e,this.size,2);t.uniform2fv(this.addr,n)}function gT(t,e){const n=Qs(e,this.size,3);t.uniform3fv(this.addr,n)}function xT(t,e){const n=Qs(e,this.size,4);t.uniform4fv(this.addr,n)}function vT(t,e){const n=Qs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function _T(t,e){const n=Qs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function yT(t,e){const n=Qs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ST(t,e){t.uniform1iv(this.addr,e)}function MT(t,e){t.uniform2iv(this.addr,e)}function ET(t,e){t.uniform3iv(this.addr,e)}function TT(t,e){t.uniform4iv(this.addr,e)}function wT(t,e){t.uniform1uiv(this.addr,e)}function AT(t,e){t.uniform2uiv(this.addr,e)}function bT(t,e){t.uniform3uiv(this.addr,e)}function CT(t,e){t.uniform4uiv(this.addr,e)}function RT(t,e,n){const i=this.cache,r=e.length,s=hc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=rf:a=Tx;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function PT(t,e,n){const i=this.cache,r=e.length,s=hc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Ax,s[a])}function LT(t,e,n){const i=this.cache,r=e.length,s=hc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||bx,s[a])}function IT(t,e,n){const i=this.cache,r=e.length,s=hc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||wx,s[a])}function DT(t){switch(t){case 5126:return pT;case 35664:return mT;case 35665:return gT;case 35666:return xT;case 35674:return vT;case 35675:return _T;case 35676:return yT;case 5124:case 35670:return ST;case 35667:case 35671:return MT;case 35668:case 35672:return ET;case 35669:case 35673:return TT;case 5125:return wT;case 36294:return AT;case 36295:return bT;case 36296:return CT;case 35678:case 36198:case 36298:case 36306:case 35682:return RT;case 35679:case 36299:case 36307:return PT;case 35680:case 36300:case 36308:case 36293:return LT;case 36289:case 36303:case 36311:case 36292:return IT}}class NT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=hT(n.type)}}class UT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=DT(n.type)}}class FT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const _u=/(\w+)(\])?(\[|\.)?/g;function ym(t,e){t.seq.push(e),t.map[e.id]=e}function OT(t,e,n){const i=t.name,r=i.length;for(_u.lastIndex=0;;){const s=_u.exec(i),a=_u.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ym(n,c===void 0?new NT(o,t,e):new UT(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new FT(o),ym(n,h)),n=h}}}class xl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);OT(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Sm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const kT=37297;let BT=0;function zT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Mm=new Fe;function VT(t){je._getMatrix(Mm,je.workingColorSpace,t);const e=`mat3( ${Mm.elements.map(n=>n.toFixed(4))} )`;switch(je.getTransfer(t)){case Xl:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Em(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+zT(t.getShaderSource(e),o)}else return s}function GT(t,e){const n=VT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const HT={[$0]:"Linear",[K0]:"Reinhard",[Z0]:"Cineon",[J0]:"ACESFilmic",[ex]:"AgX",[tx]:"Neutral",[Q0]:"Custom"};function WT(t,e){const n=HT[e];return n===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const el=new H;function XT(){je.getLuminanceCoefficients(el);const t=el.x.toFixed(4),e=el.y.toFixed(4),n=el.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Aa).join(`
`)}function YT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function qT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Aa(t){return t!==""}function Tm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $T=/^[ \t]*#include +<([\w\d./]+)>/gm;function sf(t){return t.replace($T,ZT)}const KT=new Map;function ZT(t,e){let n=ke[e];if(n===void 0){const i=KT.get(e);if(i!==void 0)n=ke[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return sf(n)}const JT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Am(t){return t.replace(JT,QT)}function QT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const ew={[Fa]:"SHADOWMAP_TYPE_PCF",[Ta]:"SHADOWMAP_TYPE_VSM"};function tw(t){return ew[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const nw={[Wr]:"ENVMAP_TYPE_CUBE",[Xs]:"ENVMAP_TYPE_CUBE",[dc]:"ENVMAP_TYPE_CUBE_UV"};function iw(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":nw[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const rw={[Xs]:"ENVMAP_MODE_REFRACTION"};function sw(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":rw[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const aw={[q0]:"ENVMAP_BLENDING_MULTIPLY",[jy]:"ENVMAP_BLENDING_MIX",[Yy]:"ENVMAP_BLENDING_ADD"};function ow(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":aw[t.combine]||"ENVMAP_BLENDING_NONE"}function lw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function cw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=tw(n),c=iw(n),f=sw(n),h=ow(n),d=lw(n),p=jT(n),_=YT(s),E=r.createProgram();let m,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Aa).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Aa).join(`
`),u.length>0&&(u+=`
`)):(m=[bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Aa).join(`
`),u=[bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mi?"#define TONE_MAPPING":"",n.toneMapping!==mi?ke.tonemapping_pars_fragment:"",n.toneMapping!==mi?WT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,GT("linearToOutputTexel",n.outputColorSpace),XT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Aa).join(`
`)),a=sf(a),a=Tm(a,n),a=wm(a,n),o=sf(o),o=Tm(o,n),o=wm(o,n),a=Am(a),o=Am(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===kp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===kp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const M=v+m+a,y=v+u+o,A=Sm(r,r.VERTEX_SHADER,M),T=Sm(r,r.FRAGMENT_SHADER,y);r.attachShader(E,A),r.attachShader(E,T),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function C(L){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(E)||"",j=r.getShaderInfoLog(A)||"",q=r.getShaderInfoLog(T)||"",V=F.trim(),K=j.trim(),G=q.trim();let k=!0,N=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,A,T);else{const ee=Em(r,A,"vertex"),ie=Em(r,T,"fragment");Qe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+ee+`
`+ie)}else V!==""?Ne("WebGLProgram: Program Info Log:",V):(K===""||G==="")&&(N=!1);N&&(L.diagnostics={runnable:k,programLog:V,vertexShader:{log:K,prefix:m},fragmentShader:{log:G,prefix:u}})}r.deleteShader(A),r.deleteShader(T),g=new xl(r,E),b=qT(r,E)}let g;this.getUniforms=function(){return g===void 0&&C(this),g};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(E,kT)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=BT++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=A,this.fragmentShader=T,this}let uw=0;class dw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new fw(e),n.set(e,i)),i}}class fw{constructor(e){this.id=uw++,this.code=e,this.usedTimes=0}}function hw(t){return t===Xr||t===Gl||t===Hl}function pw(t,e,n,i,r,s){const a=new fx,o=new dw,l=new Set,c=[],f=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(g){return l.add(g),g===0?"uv":`uv${g}`}function E(g,b,P,L,F,j){const q=L.fog,V=F.geometry,K=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?L.environment:null,G=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,k=e.get(g.envMap||K,G),N=k&&k.mapping===dc?k.image.height:null,ee=p[g.type];g.precision!==null&&(d=i.getMaxPrecision(g.precision),d!==g.precision&&Ne("WebGLProgram.getParameters:",g.precision,"not supported, using",d,"instead."));const ie=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,oe=ie!==void 0?ie.length:0;let ze=0;V.morphAttributes.position!==void 0&&(ze=1),V.morphAttributes.normal!==void 0&&(ze=2),V.morphAttributes.color!==void 0&&(ze=3);let Ze,Ge,Z,ae;if(ee){const Se=ci[ee];Ze=Se.vertexShader,Ge=Se.fragmentShader}else{Ze=g.vertexShader,Ge=g.fragmentShader;const Se=o.getVertexShaderStage(g),mt=o.getFragmentShaderStage(g);o.update(g,Se,mt),Z=Se.id,ae=mt.id}const te=t.getRenderTarget(),Ie=t.state.buffers.depth.getReversed(),De=F.isInstancedMesh===!0,Pe=F.isBatchedMesh===!0,dt=!!g.map,Ve=!!g.matcap,it=!!k,We=!!g.aoMap,Xe=!!g.lightMap,pt=!!g.bumpMap&&g.wireframe===!1,Ct=!!g.normalMap,It=!!g.displacementMap,Ut=!!g.emissiveMap,at=!!g.metalnessMap,Tt=!!g.roughnessMap,O=g.anisotropy>0,Zt=g.clearcoat>0,$e=g.dispersion>0,R=g.iridescence>0,x=g.sheen>0,B=g.transmission>0,X=O&&!!g.anisotropyMap,Y=Zt&&!!g.clearcoatMap,se=Zt&&!!g.clearcoatNormalMap,ue=Zt&&!!g.clearcoatRoughnessMap,$=R&&!!g.iridescenceMap,Q=R&&!!g.iridescenceThicknessMap,fe=x&&!!g.sheenColorMap,Te=x&&!!g.sheenRoughnessMap,me=!!g.specularMap,he=!!g.specularColorMap,be=!!g.specularIntensityMap,Le=B&&!!g.transmissionMap,Ue=B&&!!g.thicknessMap,U=!!g.gradientMap,le=!!g.alphaMap,J=g.alphaTest>0,pe=!!g.alphaHash,ge=!!g.extensions;let ne=mi;g.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ne=t.toneMapping);const Me={shaderID:ee,shaderType:g.type,shaderName:g.name,vertexShader:Ze,fragmentShader:Ge,defines:g.defines,customVertexShaderID:Z,customFragmentShaderID:ae,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:d,batching:Pe,batchingColor:Pe&&F._colorsTexture!==null,instancing:De,instancingColor:De&&F.instanceColor!==null,instancingMorph:De&&F.morphTexture!==null,outputColorSpace:te===null?t.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:dt,matcap:Ve,envMap:it,envMapMode:it&&k.mapping,envMapCubeUVHeight:N,aoMap:We,lightMap:Xe,bumpMap:pt,normalMap:Ct,displacementMap:It,emissiveMap:Ut,normalMapObjectSpace:Ct&&g.normalMapType===Ky,normalMapTangentSpace:Ct&&g.normalMapType===tf,packedNormalMap:Ct&&g.normalMapType===tf&&hw(g.normalMap.format),metalnessMap:at,roughnessMap:Tt,anisotropy:O,anisotropyMap:X,clearcoat:Zt,clearcoatMap:Y,clearcoatNormalMap:se,clearcoatRoughnessMap:ue,dispersion:$e,iridescence:R,iridescenceMap:$,iridescenceThicknessMap:Q,sheen:x,sheenColorMap:fe,sheenRoughnessMap:Te,specularMap:me,specularColorMap:he,specularIntensityMap:be,transmission:B,transmissionMap:Le,thicknessMap:Ue,gradientMap:U,opaque:g.transparent===!1&&g.blending===Ns&&g.alphaToCoverage===!1,alphaMap:le,alphaTest:J,alphaHash:pe,combine:g.combine,mapUv:dt&&_(g.map.channel),aoMapUv:We&&_(g.aoMap.channel),lightMapUv:Xe&&_(g.lightMap.channel),bumpMapUv:pt&&_(g.bumpMap.channel),normalMapUv:Ct&&_(g.normalMap.channel),displacementMapUv:It&&_(g.displacementMap.channel),emissiveMapUv:Ut&&_(g.emissiveMap.channel),metalnessMapUv:at&&_(g.metalnessMap.channel),roughnessMapUv:Tt&&_(g.roughnessMap.channel),anisotropyMapUv:X&&_(g.anisotropyMap.channel),clearcoatMapUv:Y&&_(g.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&_(g.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&_(g.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(g.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&_(g.sheenColorMap.channel),sheenRoughnessMapUv:Te&&_(g.sheenRoughnessMap.channel),specularMapUv:me&&_(g.specularMap.channel),specularColorMapUv:he&&_(g.specularColorMap.channel),specularIntensityMapUv:be&&_(g.specularIntensityMap.channel),transmissionMapUv:Le&&_(g.transmissionMap.channel),thicknessMapUv:Ue&&_(g.thicknessMap.channel),alphaMapUv:le&&_(g.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ct||O),vertexNormals:!!V.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(dt||le),fog:!!q,useFog:g.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||V.attributes.normal===void 0&&Ct===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ie,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ze,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:ne,decodeVideoTexture:dt&&g.map.isVideoTexture===!0&&je.getTransfer(g.map.colorSpace)===rt,decodeVideoTextureEmissive:Ut&&g.emissiveMap.isVideoTexture===!0&&je.getTransfer(g.emissiveMap.colorSpace)===rt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===bi,flipSided:g.side===Mn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ge&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&g.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function m(g){const b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(const P in g.defines)b.push(P),b.push(g.defines[P]);return g.isRawShaderMaterial===!1&&(u(b,g),v(b,g),b.push(t.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function u(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapCubeUVHeight),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.morphAttributeCount),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function v(g,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function M(g){const b=p[g.type];let P;if(b){const L=ci[b];P=NS.clone(L.uniforms)}else P=g.uniforms;return P}function y(g,b){let P=f.get(b);return P!==void 0?++P.usedTimes:(P=new cw(t,b,g,r),c.push(P),f.set(b,P)),P}function A(g){if(--g.usedTimes===0){const b=c.indexOf(g);c[b]=c[c.length-1],c.pop(),f.delete(g.cacheKey),g.destroy()}}function T(g){o.remove(g)}function C(){o.dispose()}return{getParameters:E,getProgramCacheKey:m,getUniforms:M,acquireProgram:y,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:C}}function mw(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function gw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Cm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Rm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,_,E,m,u){let v=t[e];return v===void 0?(v={id:d.id,object:d,geometry:p,material:_,materialVariant:a(d),groupOrder:E,renderOrder:d.renderOrder,z:m,group:u},t[e]=v):(v.id=d.id,v.object=d,v.geometry=p,v.material=_,v.materialVariant=a(d),v.groupOrder=E,v.renderOrder=d.renderOrder,v.z=m,v.group=u),e++,v}function l(d,p,_,E,m,u){const v=o(d,p,_,E,m,u);_.transmission>0?i.push(v):_.transparent===!0?r.push(v):n.push(v)}function c(d,p,_,E,m,u){const v=o(d,p,_,E,m,u);_.transmission>0?i.unshift(v):_.transparent===!0?r.unshift(v):n.unshift(v)}function f(d,p,_){n.length>1&&n.sort(d||gw),i.length>1&&i.sort(p||Cm),r.length>1&&r.sort(p||Cm),_&&(n.reverse(),i.reverse(),r.reverse())}function h(){for(let d=e,p=t.length;d<p;d++){const _=t[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:f}}function xw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Rm,t.set(i,[a])):r>=s.length?(a=new Rm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function vw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new et};break;case"SpotLight":n={position:new H,direction:new H,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function _w(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let yw=0;function Sw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Mw(t){const e=new vw,n=_w(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new bt,a=new bt;function o(c){let f=0,h=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,_=0,E=0,m=0,u=0,v=0,M=0,y=0,A=0,T=0,C=0;c.sort(Sw);for(let b=0,P=c.length;b<P;b++){const L=c[b],F=L.color,j=L.intensity,q=L.distance;let V=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Xr?V=L.shadow.map.texture:V=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)f+=F.r*j,h+=F.g*j,d+=F.b*j;else if(L.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(L.sh.coefficients[K],j);C++}else if(L.isDirectionalLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const G=L.shadow,k=n.get(L);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=V,i.directionalShadowMatrix[p]=L.shadow.matrix,v++}i.directional[p]=K,p++}else if(L.isSpotLight){const K=e.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(F).multiplyScalar(j),K.distance=q,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,i.spot[E]=K;const G=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,G.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[E]=G.matrix,L.castShadow){const k=n.get(L);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,i.spotShadow[E]=k,i.spotShadowMap[E]=V,y++}E++}else if(L.isRectAreaLight){const K=e.get(L);K.color.copy(F).multiplyScalar(j),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=K,m++}else if(L.isPointLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){const G=L.shadow,k=n.get(L);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,k.shadowCameraNear=G.camera.near,k.shadowCameraFar=G.camera.far,i.pointShadow[_]=k,i.pointShadowMap[_]=V,i.pointShadowMatrix[_]=L.shadow.matrix,M++}i.point[_]=K,_++}else if(L.isHemisphereLight){const K=e.get(L);K.skyColor.copy(L.color).multiplyScalar(j),K.groundColor.copy(L.groundColor).multiplyScalar(j),i.hemi[u]=K,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const g=i.hash;(g.directionalLength!==p||g.pointLength!==_||g.spotLength!==E||g.rectAreaLength!==m||g.hemiLength!==u||g.numDirectionalShadows!==v||g.numPointShadows!==M||g.numSpotShadows!==y||g.numSpotMaps!==A||g.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=E,i.rectArea.length=m,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=y+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,g.directionalLength=p,g.pointLength=_,g.spotLength=E,g.rectAreaLength=m,g.hemiLength=u,g.numDirectionalShadows=v,g.numPointShadows=M,g.numSpotShadows=y,g.numSpotMaps=A,g.numLightProbes=C,i.version=yw++)}function l(c,f){let h=0,d=0,p=0,_=0,E=0;const m=f.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const M=c[u];if(M.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(M.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const y=i.hemi[E];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),E++}}}return{setup:o,setupView:l,state:i}}function Pm(t){const e=new Mw(t),n=[],i=[],r=[];function s(d){h.camera=d,n.length=0,i.length=0,r.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(n)}function f(d){e.setupView(n,d)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Ew(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Pm(t),e.set(r,[o])):s>=a.length?(o=new Pm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const Tw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ww=`uniform sampler2D shadow_pass;
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
}`,Aw=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],bw=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Lm=new bt,_a=new H,yu=new H;function Cw(t,e,n){let i=new fh;const r=new qe,s=new qe,a=new St,o=new kS,l=new BS,c={},f=n.maxTextureSize,h={[xr]:Mn,[Mn]:xr,[bi]:bi},d=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:Tw,fragmentShader:ww}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new ni;_.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new ut(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fa;let u=this.type;this.render=function(T,C,g){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===by&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Fa);const b=t.getRenderTarget(),P=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Ii),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const j=u!==this.type;j&&C.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(V=>V.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,V=T.length;q<V;q++){const K=T[q],G=K.shadow;if(G===void 0){Ne("WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const k=G.getFrameExtents();r.multiply(k),s.copy(G.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/k.x),r.x=s.x*k.x,G.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/k.y),r.y=s.y*k.y,G.mapSize.y=s.y));const N=t.state.buffers.depth.getReversed();if(G.camera._reversedDepth=N,G.map===null||j===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ta){if(K.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new gi(r.x,r.y,{format:Xr,type:ki,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),G.map.texture.name=K.name+".shadowMap",G.map.depthTexture=new js(r.x,r.y,di),G.map.depthTexture.name=K.name+".shadowMapDepth",G.map.depthTexture.format=Bi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=qt,G.map.depthTexture.magFilter=qt}else K.isPointLight?(G.map=new Ex(r.x),G.map.depthTexture=new IS(r.x,vi)):(G.map=new gi(r.x,r.y),G.map.depthTexture=new js(r.x,r.y,vi)),G.map.depthTexture.name=K.name+".shadowMap",G.map.depthTexture.format=Bi,this.type===Fa?(G.map.depthTexture.compareFunction=N?ch:lh,G.map.depthTexture.minFilter=Wt,G.map.depthTexture.magFilter=Wt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=qt,G.map.depthTexture.magFilter=qt);G.camera.updateProjectionMatrix()}const ee=G.map.isWebGLCubeRenderTarget?6:1;for(let ie=0;ie<ee;ie++){if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,ie),t.clear();else{ie===0&&(t.setRenderTarget(G.map),t.clear());const oe=G.getViewport(ie);a.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),F.viewport(a)}if(K.isPointLight){const oe=G.camera,ze=G.matrix,Ze=K.distance||oe.far;Ze!==oe.far&&(oe.far=Ze,oe.updateProjectionMatrix()),_a.setFromMatrixPosition(K.matrixWorld),oe.position.copy(_a),yu.copy(oe.position),yu.add(Aw[ie]),oe.up.copy(bw[ie]),oe.lookAt(yu),oe.updateMatrixWorld(),ze.makeTranslation(-_a.x,-_a.y,-_a.z),Lm.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Lm,oe.coordinateSystem,oe.reversedDepth)}else G.updateMatrices(K);i=G.getFrustum(),y(C,g,G.camera,K,this.type)}G.isPointLightShadow!==!0&&this.type===Ta&&v(G,g),G.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(b,P,L)};function v(T,C){const g=e.update(E);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new gi(r.x,r.y,{format:Xr,type:ki})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,g,d,E,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,g,p,E,null)}function M(T,C,g,b){let P=null;const L=g.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)P=L;else if(P=g.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=P.uuid,j=C.uuid;let q=c[F];q===void 0&&(q={},c[F]=q);let V=q[j];V===void 0&&(V=P.clone(),q[j]=V,C.addEventListener("dispose",A)),P=V}if(P.visible=C.visible,P.wireframe=C.wireframe,b===Ta?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:h[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,g.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const F=t.properties.get(P);F.light=g}return P}function y(T,C,g,b,P){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Ta)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,T.matrixWorld);const j=e.update(T),q=T.material;if(Array.isArray(q)){const V=j.groups;for(let K=0,G=V.length;K<G;K++){const k=V[K],N=q[k.materialIndex];if(N&&N.visible){const ee=M(T,N,b,P);T.onBeforeShadow(t,T,C,g,j,ee,k),t.renderBufferDirect(g,null,j,ee,T,k),T.onAfterShadow(t,T,C,g,j,ee,k)}}}else if(q.visible){const V=M(T,q,b,P);T.onBeforeShadow(t,T,C,g,j,V,null),t.renderBufferDirect(g,null,j,V,T,null),T.onAfterShadow(t,T,C,g,j,V,null)}}const F=T.children;for(let j=0,q=F.length;j<q;j++)y(F[j],C,g,b,P)}function A(T){T.target.removeEventListener("dispose",A);for(const g in c){const b=c[g],P=T.target.uuid;P in b&&(b[P].dispose(),delete b[P])}}}function Rw(t,e){function n(){let U=!1;const le=new St;let J=null;const pe=new St(0,0,0,0);return{setMask:function(ge){J!==ge&&!U&&(t.colorMask(ge,ge,ge,ge),J=ge)},setLocked:function(ge){U=ge},setClear:function(ge,ne,Me,Se,mt){mt===!0&&(ge*=Se,ne*=Se,Me*=Se),le.set(ge,ne,Me,Se),pe.equals(le)===!1&&(t.clearColor(ge,ne,Me,Se),pe.copy(le))},reset:function(){U=!1,J=null,pe.set(-1,0,0,0)}}}function i(){let U=!1,le=!1,J=null,pe=null,ge=null;return{setReversed:function(ne){if(le!==ne){const Me=e.get("EXT_clip_control");ne?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),le=ne;const Se=ge;ge=null,this.setClear(Se)}},getReversed:function(){return le},setTest:function(ne){ne?te(t.DEPTH_TEST):Ie(t.DEPTH_TEST)},setMask:function(ne){J!==ne&&!U&&(t.depthMask(ne),J=ne)},setFunc:function(ne){if(le&&(ne=aS[ne]),pe!==ne){switch(ne){case gd:t.depthFunc(t.NEVER);break;case xd:t.depthFunc(t.ALWAYS);break;case vd:t.depthFunc(t.LESS);break;case Ws:t.depthFunc(t.LEQUAL);break;case _d:t.depthFunc(t.EQUAL);break;case yd:t.depthFunc(t.GEQUAL);break;case Sd:t.depthFunc(t.GREATER);break;case Md:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}pe=ne}},setLocked:function(ne){U=ne},setClear:function(ne){ge!==ne&&(ge=ne,le&&(ne=1-ne),t.clearDepth(ne))},reset:function(){U=!1,J=null,pe=null,ge=null,le=!1}}}function r(){let U=!1,le=null,J=null,pe=null,ge=null,ne=null,Me=null,Se=null,mt=null;return{setTest:function(nt){U||(nt?te(t.STENCIL_TEST):Ie(t.STENCIL_TEST))},setMask:function(nt){le!==nt&&!U&&(t.stencilMask(nt),le=nt)},setFunc:function(nt,Ft,Ot){(J!==nt||pe!==Ft||ge!==Ot)&&(t.stencilFunc(nt,Ft,Ot),J=nt,pe=Ft,ge=Ot)},setOp:function(nt,Ft,Ot){(ne!==nt||Me!==Ft||Se!==Ot)&&(t.stencilOp(nt,Ft,Ot),ne=nt,Me=Ft,Se=Ot)},setLocked:function(nt){U=nt},setClear:function(nt){mt!==nt&&(t.clearStencil(nt),mt=nt)},reset:function(){U=!1,le=null,J=null,pe=null,ge=null,ne=null,Me=null,Se=null,mt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let f={},h={},d={},p=new WeakMap,_=[],E=null,m=!1,u=null,v=null,M=null,y=null,A=null,T=null,C=null,g=new et(0,0,0),b=0,P=!1,L=null,F=null,j=null,q=null,V=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,k=0;const N=t.getParameter(t.VERSION);N.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(N)[1]),G=k>=1):N.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),G=k>=2);let ee=null,ie={};const oe=t.getParameter(t.SCISSOR_BOX),ze=t.getParameter(t.VIEWPORT),Ze=new St().fromArray(oe),Ge=new St().fromArray(ze);function Z(U,le,J,pe){const ge=new Uint8Array(4),ne=t.createTexture();t.bindTexture(U,ne),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Me=0;Me<J;Me++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(le,0,t.RGBA,1,1,pe,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(le+Me,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return ne}const ae={};ae[t.TEXTURE_2D]=Z(t.TEXTURE_2D,t.TEXTURE_2D,1),ae[t.TEXTURE_CUBE_MAP]=Z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[t.TEXTURE_2D_ARRAY]=Z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ae[t.TEXTURE_3D]=Z(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(t.DEPTH_TEST),a.setFunc(Ws),pt(!1),Ct(Ip),te(t.CULL_FACE),We(Ii);function te(U){f[U]!==!0&&(t.enable(U),f[U]=!0)}function Ie(U){f[U]!==!1&&(t.disable(U),f[U]=!1)}function De(U,le){return d[U]!==le?(t.bindFramebuffer(U,le),d[U]=le,U===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=le),U===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=le),!0):!1}function Pe(U,le){let J=_,pe=!1;if(U){J=p.get(le),J===void 0&&(J=[],p.set(le,J));const ge=U.textures;if(J.length!==ge.length||J[0]!==t.COLOR_ATTACHMENT0){for(let ne=0,Me=ge.length;ne<Me;ne++)J[ne]=t.COLOR_ATTACHMENT0+ne;J.length=ge.length,pe=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,pe=!0);pe&&t.drawBuffers(J)}function dt(U){return E!==U?(t.useProgram(U),E=U,!0):!1}const Ve={[Pr]:t.FUNC_ADD,[Ry]:t.FUNC_SUBTRACT,[Py]:t.FUNC_REVERSE_SUBTRACT};Ve[Ly]=t.MIN,Ve[Iy]=t.MAX;const it={[Dy]:t.ZERO,[Ny]:t.ONE,[Uy]:t.SRC_COLOR,[pd]:t.SRC_ALPHA,[Vy]:t.SRC_ALPHA_SATURATE,[By]:t.DST_COLOR,[Oy]:t.DST_ALPHA,[Fy]:t.ONE_MINUS_SRC_COLOR,[md]:t.ONE_MINUS_SRC_ALPHA,[zy]:t.ONE_MINUS_DST_COLOR,[ky]:t.ONE_MINUS_DST_ALPHA,[Gy]:t.CONSTANT_COLOR,[Hy]:t.ONE_MINUS_CONSTANT_COLOR,[Wy]:t.CONSTANT_ALPHA,[Xy]:t.ONE_MINUS_CONSTANT_ALPHA};function We(U,le,J,pe,ge,ne,Me,Se,mt,nt){if(U===Ii){m===!0&&(Ie(t.BLEND),m=!1);return}if(m===!1&&(te(t.BLEND),m=!0),U!==Cy){if(U!==u||nt!==P){if((v!==Pr||A!==Pr)&&(t.blendEquation(t.FUNC_ADD),v=Pr,A=Pr),nt)switch(U){case Ns:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dp:t.blendFunc(t.ONE,t.ONE);break;case Np:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Up:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Qe("WebGLState: Invalid blending: ",U);break}else switch(U){case Ns:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Np:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Up:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",U);break}M=null,y=null,T=null,C=null,g.set(0,0,0),b=0,u=U,P=nt}return}ge=ge||le,ne=ne||J,Me=Me||pe,(le!==v||ge!==A)&&(t.blendEquationSeparate(Ve[le],Ve[ge]),v=le,A=ge),(J!==M||pe!==y||ne!==T||Me!==C)&&(t.blendFuncSeparate(it[J],it[pe],it[ne],it[Me]),M=J,y=pe,T=ne,C=Me),(Se.equals(g)===!1||mt!==b)&&(t.blendColor(Se.r,Se.g,Se.b,mt),g.copy(Se),b=mt),u=U,P=!1}function Xe(U,le){U.side===bi?Ie(t.CULL_FACE):te(t.CULL_FACE);let J=U.side===Mn;le&&(J=!J),pt(J),U.blending===Ns&&U.transparent===!1?We(Ii):We(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const pe=U.stencilWrite;o.setTest(pe),pe&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ut(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?te(t.SAMPLE_ALPHA_TO_COVERAGE):Ie(t.SAMPLE_ALPHA_TO_COVERAGE)}function pt(U){L!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),L=U)}function Ct(U){U!==wy?(te(t.CULL_FACE),U!==F&&(U===Ip?t.cullFace(t.BACK):U===Ay?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ie(t.CULL_FACE),F=U}function It(U){U!==j&&(G&&t.lineWidth(U),j=U)}function Ut(U,le,J){U?(te(t.POLYGON_OFFSET_FILL),(q!==le||V!==J)&&(q=le,V=J,a.getReversed()&&(le=-le),t.polygonOffset(le,J))):Ie(t.POLYGON_OFFSET_FILL)}function at(U){U?te(t.SCISSOR_TEST):Ie(t.SCISSOR_TEST)}function Tt(U){U===void 0&&(U=t.TEXTURE0+K-1),ee!==U&&(t.activeTexture(U),ee=U)}function O(U,le,J){J===void 0&&(ee===null?J=t.TEXTURE0+K-1:J=ee);let pe=ie[J];pe===void 0&&(pe={type:void 0,texture:void 0},ie[J]=pe),(pe.type!==U||pe.texture!==le)&&(ee!==J&&(t.activeTexture(J),ee=J),t.bindTexture(U,le||ae[U]),pe.type=U,pe.texture=le)}function Zt(){const U=ie[ee];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function $e(){try{t.compressedTexImage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function x(){try{t.texSubImage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function B(){try{t.texSubImage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function X(){try{t.compressedTexSubImage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function Y(){try{t.compressedTexSubImage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function se(){try{t.texStorage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function ue(){try{t.texStorage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function $(){try{t.texImage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function Q(){try{t.texImage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function fe(U){return h[U]!==void 0?h[U]:t.getParameter(U)}function Te(U,le){h[U]!==le&&(t.pixelStorei(U,le),h[U]=le)}function me(U){Ze.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),Ze.copy(U))}function he(U){Ge.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Ge.copy(U))}function be(U,le){let J=c.get(le);J===void 0&&(J=new WeakMap,c.set(le,J));let pe=J.get(U);pe===void 0&&(pe=t.getUniformBlockIndex(le,U.name),J.set(U,pe))}function Le(U,le){const pe=c.get(le).get(U);l.get(le)!==pe&&(t.uniformBlockBinding(le,pe,U.__bindingPointIndex),l.set(le,pe))}function Ue(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},h={},ee=null,ie={},d={},p=new WeakMap,_=[],E=null,m=!1,u=null,v=null,M=null,y=null,A=null,T=null,C=null,g=new et(0,0,0),b=0,P=!1,L=null,F=null,j=null,q=null,V=null,Ze.set(0,0,t.canvas.width,t.canvas.height),Ge.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:Ie,bindFramebuffer:De,drawBuffers:Pe,useProgram:dt,setBlending:We,setMaterial:Xe,setFlipSided:pt,setCullFace:Ct,setLineWidth:It,setPolygonOffset:Ut,setScissorTest:at,activeTexture:Tt,bindTexture:O,unbindTexture:Zt,compressedTexImage2D:$e,compressedTexImage3D:R,texImage2D:$,texImage3D:Q,pixelStorei:Te,getParameter:fe,updateUBOMapping:be,uniformBlockBinding:Le,texStorage2D:se,texStorage3D:ue,texSubImage2D:x,texSubImage3D:B,compressedTexSubImage2D:X,compressedTexSubImage3D:Y,scissor:me,viewport:he,reset:Ue}}function Pw(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,f=new WeakMap,h=new Set;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(R,x){return _?new OffscreenCanvas(R,x):jl("canvas")}function m(R,x,B){let X=1;const Y=$e(R);if((Y.width>B||Y.height>B)&&(X=B/Math.max(Y.width,Y.height)),X<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const se=Math.floor(X*Y.width),ue=Math.floor(X*Y.height);d===void 0&&(d=E(se,ue));const $=x?E(se,ue):d;return $.width=se,$.height=ue,$.getContext("2d").drawImage(R,0,0,se,ue),Ne("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+se+"x"+ue+")."),$}else return"data"in R&&Ne("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),R;return R}function u(R){return R.generateMipmaps}function v(R){t.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(R,x,B,X,Y,se=!1){if(R!==null){if(t[R]!==void 0)return t[R];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ue;X&&(ue=e.get("EXT_texture_norm16"),ue||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=x;if(x===t.RED&&(B===t.FLOAT&&($=t.R32F),B===t.HALF_FLOAT&&($=t.R16F),B===t.UNSIGNED_BYTE&&($=t.R8),B===t.UNSIGNED_SHORT&&ue&&($=ue.R16_EXT),B===t.SHORT&&ue&&($=ue.R16_SNORM_EXT)),x===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.R8UI),B===t.UNSIGNED_SHORT&&($=t.R16UI),B===t.UNSIGNED_INT&&($=t.R32UI),B===t.BYTE&&($=t.R8I),B===t.SHORT&&($=t.R16I),B===t.INT&&($=t.R32I)),x===t.RG&&(B===t.FLOAT&&($=t.RG32F),B===t.HALF_FLOAT&&($=t.RG16F),B===t.UNSIGNED_BYTE&&($=t.RG8),B===t.UNSIGNED_SHORT&&ue&&($=ue.RG16_EXT),B===t.SHORT&&ue&&($=ue.RG16_SNORM_EXT)),x===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.RG8UI),B===t.UNSIGNED_SHORT&&($=t.RG16UI),B===t.UNSIGNED_INT&&($=t.RG32UI),B===t.BYTE&&($=t.RG8I),B===t.SHORT&&($=t.RG16I),B===t.INT&&($=t.RG32I)),x===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.RGB8UI),B===t.UNSIGNED_SHORT&&($=t.RGB16UI),B===t.UNSIGNED_INT&&($=t.RGB32UI),B===t.BYTE&&($=t.RGB8I),B===t.SHORT&&($=t.RGB16I),B===t.INT&&($=t.RGB32I)),x===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.RGBA8UI),B===t.UNSIGNED_SHORT&&($=t.RGBA16UI),B===t.UNSIGNED_INT&&($=t.RGBA32UI),B===t.BYTE&&($=t.RGBA8I),B===t.SHORT&&($=t.RGBA16I),B===t.INT&&($=t.RGBA32I)),x===t.RGB&&(B===t.UNSIGNED_SHORT&&ue&&($=ue.RGB16_EXT),B===t.SHORT&&ue&&($=ue.RGB16_SNORM_EXT),B===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&($=t.R11F_G11F_B10F)),x===t.RGBA){const Q=se?Xl:je.getTransfer(Y);B===t.FLOAT&&($=t.RGBA32F),B===t.HALF_FLOAT&&($=t.RGBA16F),B===t.UNSIGNED_BYTE&&($=Q===rt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT&&ue&&($=ue.RGBA16_EXT),B===t.SHORT&&ue&&($=ue.RGBA16_SNORM_EXT),B===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function A(R,x){let B;return R?x===null||x===vi||x===to?B=t.DEPTH24_STENCIL8:x===di?B=t.DEPTH32F_STENCIL8:x===eo&&(B=t.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===vi||x===to?B=t.DEPTH_COMPONENT24:x===di?B=t.DEPTH_COMPONENT32F:x===eo&&(B=t.DEPTH_COMPONENT16),B}function T(R,x){return u(R)===!0||R.isFramebufferTexture&&R.minFilter!==qt&&R.minFilter!==Wt?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function C(R){const x=R.target;x.removeEventListener("dispose",C),b(x),x.isVideoTexture&&f.delete(x),x.isHTMLTexture&&h.delete(x)}function g(R){const x=R.target;x.removeEventListener("dispose",g),L(x)}function b(R){const x=i.get(R);if(x.__webglInit===void 0)return;const B=R.source,X=p.get(B);if(X){const Y=X[x.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&P(R),Object.keys(X).length===0&&p.delete(B)}i.remove(R)}function P(R){const x=i.get(R);t.deleteTexture(x.__webglTexture);const B=R.source,X=p.get(B);delete X[x.__cacheKey],a.memory.textures--}function L(R){const x=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let Y=0;Y<x.__webglFramebuffer[X].length;Y++)t.deleteFramebuffer(x.__webglFramebuffer[X][Y]);else t.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)t.deleteFramebuffer(x.__webglFramebuffer[X]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=R.textures;for(let X=0,Y=B.length;X<Y;X++){const se=i.get(B[X]);se.__webglTexture&&(t.deleteTexture(se.__webglTexture),a.memory.textures--),i.remove(B[X])}i.remove(R)}let F=0;function j(){F=0}function q(){return F}function V(R){F=R}function K(){const R=F;return R>=r.maxTextures&&Ne("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),F+=1,R}function G(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function k(R,x){const B=i.get(R);if(R.isVideoTexture&&O(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){const X=R.image;if(X===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(B,R,x);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+x)}function N(R,x){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){Ie(B,R,x);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+x)}function ee(R,x){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){Ie(B,R,x);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+x)}function ie(R,x){const B=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){De(B,R,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+x)}const oe={[Ed]:t.REPEAT,[Pi]:t.CLAMP_TO_EDGE,[Td]:t.MIRRORED_REPEAT},ze={[qt]:t.NEAREST,[qy]:t.NEAREST_MIPMAP_NEAREST,[Do]:t.NEAREST_MIPMAP_LINEAR,[Wt]:t.LINEAR,[Gc]:t.LINEAR_MIPMAP_NEAREST,[Ur]:t.LINEAR_MIPMAP_LINEAR},Ze={[Zy]:t.NEVER,[nS]:t.ALWAYS,[Jy]:t.LESS,[lh]:t.LEQUAL,[Qy]:t.EQUAL,[ch]:t.GEQUAL,[eS]:t.GREATER,[tS]:t.NOTEQUAL};function Ge(R,x){if(x.type===di&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Wt||x.magFilter===Gc||x.magFilter===Do||x.magFilter===Ur||x.minFilter===Wt||x.minFilter===Gc||x.minFilter===Do||x.minFilter===Ur)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,oe[x.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,oe[x.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,oe[x.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,ze[x.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,ze[x.minFilter]),x.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Ze[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===qt||x.minFilter!==Do&&x.minFilter!==Ur||x.type===di&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Z(R,x){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",C));const X=x.source;let Y=p.get(X);Y===void 0&&(Y={},p.set(X,Y));const se=G(x);if(se!==R.__cacheKey){Y[se]===void 0&&(Y[se]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Y[se].usedTimes++;const ue=Y[R.__cacheKey];ue!==void 0&&(Y[R.__cacheKey].usedTimes--,ue.usedTimes===0&&P(x)),R.__cacheKey=se,R.__webglTexture=Y[se].texture}return B}function ae(R,x,B){return Math.floor(Math.floor(R/B)/x)}function te(R,x,B,X){const se=R.updateRanges;if(se.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,B,X,x.data);else{se.sort((Te,me)=>Te.start-me.start);let ue=0;for(let Te=1;Te<se.length;Te++){const me=se[ue],he=se[Te],be=me.start+me.count,Le=ae(he.start,x.width,4),Ue=ae(me.start,x.width,4);he.start<=be+1&&Le===Ue&&ae(he.start+he.count-1,x.width,4)===Le?me.count=Math.max(me.count,he.start+he.count-me.start):(++ue,se[ue]=he)}se.length=ue+1;const $=n.getParameter(t.UNPACK_ROW_LENGTH),Q=n.getParameter(t.UNPACK_SKIP_PIXELS),fe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let Te=0,me=se.length;Te<me;Te++){const he=se[Te],be=Math.floor(he.start/4),Le=Math.ceil(he.count/4),Ue=be%x.width,U=Math.floor(be/x.width),le=Le,J=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ue),n.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,Ue,U,le,J,B,X,x.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,$),n.pixelStorei(t.UNPACK_SKIP_PIXELS,Q),n.pixelStorei(t.UNPACK_SKIP_ROWS,fe)}}function Ie(R,x,B){let X=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=t.TEXTURE_3D);const Y=Z(R,x),se=x.source;n.bindTexture(X,R.__webglTexture,t.TEXTURE0+B);const ue=i.get(se);if(se.version!==ue.__version||Y===!0){if(n.activeTexture(t.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const J=je.getPrimaries(je.workingColorSpace),pe=x.colorSpace===ir?null:je.getPrimaries(x.colorSpace),ge=x.colorSpace===ir||J===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment);let Q=m(x.image,!1,r.maxTextureSize);Q=Zt(x,Q);const fe=s.convert(x.format,x.colorSpace),Te=s.convert(x.type);let me=y(x.internalFormat,fe,Te,x.normalized,x.colorSpace,x.isVideoTexture);Ge(X,x);let he;const be=x.mipmaps,Le=x.isVideoTexture!==!0,Ue=ue.__version===void 0||Y===!0,U=se.dataReady,le=T(x,Q);if(x.isDepthTexture)me=A(x.format===Fr,x.type),Ue&&(Le?n.texStorage2D(t.TEXTURE_2D,1,me,Q.width,Q.height):n.texImage2D(t.TEXTURE_2D,0,me,Q.width,Q.height,0,fe,Te,null));else if(x.isDataTexture)if(be.length>0){Le&&Ue&&n.texStorage2D(t.TEXTURE_2D,le,me,be[0].width,be[0].height);for(let J=0,pe=be.length;J<pe;J++)he=be[J],Le?U&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,he.width,he.height,fe,Te,he.data):n.texImage2D(t.TEXTURE_2D,J,me,he.width,he.height,0,fe,Te,he.data);x.generateMipmaps=!1}else Le?(Ue&&n.texStorage2D(t.TEXTURE_2D,le,me,Q.width,Q.height),U&&te(x,Q,fe,Te)):n.texImage2D(t.TEXTURE_2D,0,me,Q.width,Q.height,0,fe,Te,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Le&&Ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,me,be[0].width,be[0].height,Q.depth);for(let J=0,pe=be.length;J<pe;J++)if(he=be[J],x.format!==Jn)if(fe!==null)if(Le){if(U)if(x.layerUpdates.size>0){const ge=lm(he.width,he.height,x.format,x.type);for(const ne of x.layerUpdates){const Me=he.data.subarray(ne*ge/he.data.BYTES_PER_ELEMENT,(ne+1)*ge/he.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,ne,he.width,he.height,1,fe,Me)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,he.width,he.height,Q.depth,fe,he.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,me,he.width,he.height,Q.depth,0,he.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,he.width,he.height,Q.depth,fe,Te,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,me,he.width,he.height,Q.depth,0,fe,Te,he.data)}else{Le&&Ue&&n.texStorage2D(t.TEXTURE_2D,le,me,be[0].width,be[0].height);for(let J=0,pe=be.length;J<pe;J++)he=be[J],x.format!==Jn?fe!==null?Le?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,he.width,he.height,fe,he.data):n.compressedTexImage2D(t.TEXTURE_2D,J,me,he.width,he.height,0,he.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?U&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,he.width,he.height,fe,Te,he.data):n.texImage2D(t.TEXTURE_2D,J,me,he.width,he.height,0,fe,Te,he.data)}else if(x.isDataArrayTexture)if(Le){if(Ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,me,Q.width,Q.height,Q.depth),U)if(x.layerUpdates.size>0){const J=lm(Q.width,Q.height,x.format,x.type);for(const pe of x.layerUpdates){const ge=Q.data.subarray(pe*J/Q.data.BYTES_PER_ELEMENT,(pe+1)*J/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,pe,Q.width,Q.height,1,fe,Te,ge)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,fe,Te,Q.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,me,Q.width,Q.height,Q.depth,0,fe,Te,Q.data);else if(x.isData3DTexture)Le?(Ue&&n.texStorage3D(t.TEXTURE_3D,le,me,Q.width,Q.height,Q.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,fe,Te,Q.data)):n.texImage3D(t.TEXTURE_3D,0,me,Q.width,Q.height,Q.depth,0,fe,Te,Q.data);else if(x.isFramebufferTexture){if(Ue)if(Le)n.texStorage2D(t.TEXTURE_2D,le,me,Q.width,Q.height);else{let J=Q.width,pe=Q.height;for(let ge=0;ge<le;ge++)n.texImage2D(t.TEXTURE_2D,ge,me,J,pe,0,fe,Te,null),J>>=1,pe>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in t){const J=t.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),Q.parentNode!==J){J.appendChild(Q),h.add(x),J.onpaint=pe=>{const ge=pe.changedElements;for(const ne of h)ge.includes(ne.image)&&(ne.needsUpdate=!0)},J.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,Q);else{const ge=t.RGBA,ne=t.RGBA,Me=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ge,ne,Me,Q)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(be.length>0){if(Le&&Ue){const J=$e(be[0]);n.texStorage2D(t.TEXTURE_2D,le,me,J.width,J.height)}for(let J=0,pe=be.length;J<pe;J++)he=be[J],Le?U&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,fe,Te,he):n.texImage2D(t.TEXTURE_2D,J,me,fe,Te,he);x.generateMipmaps=!1}else if(Le){if(Ue){const J=$e(Q);n.texStorage2D(t.TEXTURE_2D,le,me,J.width,J.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe,Te,Q)}else n.texImage2D(t.TEXTURE_2D,0,me,fe,Te,Q);u(x)&&v(X),ue.__version=se.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function De(R,x,B){if(x.image.length!==6)return;const X=Z(R,x),Y=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+B);const se=i.get(Y);if(Y.version!==se.__version||X===!0){n.activeTexture(t.TEXTURE0+B);const ue=je.getPrimaries(je.workingColorSpace),$=x.colorSpace===ir?null:je.getPrimaries(x.colorSpace),Q=x.colorSpace===ir||ue===$?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const fe=x.isCompressedTexture||x.image[0].isCompressedTexture,Te=x.image[0]&&x.image[0].isDataTexture,me=[];for(let ne=0;ne<6;ne++)!fe&&!Te?me[ne]=m(x.image[ne],!0,r.maxCubemapSize):me[ne]=Te?x.image[ne].image:x.image[ne],me[ne]=Zt(x,me[ne]);const he=me[0],be=s.convert(x.format,x.colorSpace),Le=s.convert(x.type),Ue=y(x.internalFormat,be,Le,x.normalized,x.colorSpace),U=x.isVideoTexture!==!0,le=se.__version===void 0||X===!0,J=Y.dataReady;let pe=T(x,he);Ge(t.TEXTURE_CUBE_MAP,x);let ge;if(fe){U&&le&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Ue,he.width,he.height);for(let ne=0;ne<6;ne++){ge=me[ne].mipmaps;for(let Me=0;Me<ge.length;Me++){const Se=ge[Me];x.format!==Jn?be!==null?U?J&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,0,0,Se.width,Se.height,be,Se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,Ue,Se.width,Se.height,0,Se.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,0,0,Se.width,Se.height,be,Le,Se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me,Ue,Se.width,Se.height,0,be,Le,Se.data)}}}else{if(ge=x.mipmaps,U&&le){ge.length>0&&pe++;const ne=$e(me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Ue,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Te){U?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,me[ne].width,me[ne].height,be,Le,me[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ue,me[ne].width,me[ne].height,0,be,Le,me[ne].data);for(let Me=0;Me<ge.length;Me++){const mt=ge[Me].image[ne].image;U?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,0,0,mt.width,mt.height,be,Le,mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,Ue,mt.width,mt.height,0,be,Le,mt.data)}}else{U?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,be,Le,me[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ue,be,Le,me[ne]);for(let Me=0;Me<ge.length;Me++){const Se=ge[Me];U?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,0,0,be,Le,Se.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Me+1,Ue,be,Le,Se.image[ne])}}}u(x)&&v(t.TEXTURE_CUBE_MAP),se.__version=Y.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Pe(R,x,B,X,Y,se){const ue=s.convert(B.format,B.colorSpace),$=s.convert(B.type),Q=y(B.internalFormat,ue,$,B.normalized,B.colorSpace),fe=i.get(x),Te=i.get(B);if(Te.__renderTarget=x,!fe.__hasExternalTextures){const me=Math.max(1,x.width>>se),he=Math.max(1,x.height>>se);Y===t.TEXTURE_3D||Y===t.TEXTURE_2D_ARRAY?n.texImage3D(Y,se,Q,me,he,x.depth,0,ue,$,null):n.texImage2D(Y,se,Q,me,he,0,ue,$,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Tt(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,Y,Te.__webglTexture,0,at(x)):(Y===t.TEXTURE_2D||Y>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,Y,Te.__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function dt(R,x,B){if(t.bindRenderbuffer(t.RENDERBUFFER,R),x.depthBuffer){const X=x.depthTexture,Y=X&&X.isDepthTexture?X.type:null,se=A(x.stencilBuffer,Y),ue=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Tt(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,at(x),se,x.width,x.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,at(x),se,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,se,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,R)}else{const X=x.textures;for(let Y=0;Y<X.length;Y++){const se=X[Y],ue=s.convert(se.format,se.colorSpace),$=s.convert(se.type),Q=y(se.internalFormat,ue,$,se.normalized,se.colorSpace);Tt(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,at(x),Q,x.width,x.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,at(x),Q,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,Q,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ve(R,x,B){const X=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Y=i.get(x.depthTexture);if(Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),Y.__webglTexture===void 0){Y.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),Ge(t.TEXTURE_CUBE_MAP,x.depthTexture);const fe=s.convert(x.depthTexture.format),Te=s.convert(x.depthTexture.type);let me;x.depthTexture.format===Bi?me=t.DEPTH_COMPONENT24:x.depthTexture.format===Fr&&(me=t.DEPTH24_STENCIL8);for(let he=0;he<6;he++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,me,x.width,x.height,0,fe,Te,null)}}else k(x.depthTexture,0);const se=Y.__webglTexture,ue=at(x),$=X?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,Q=x.depthTexture.format===Fr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(x.depthTexture.format===Bi)Tt(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,$,se,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,Q,$,se,0);else if(x.depthTexture.format===Fr)Tt(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,$,se,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,Q,$,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(R){const x=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const X=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){const Y=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",Y)};X.addEventListener("dispose",Y),x.__depthDisposeCallback=Y}x.__boundDepthTexture=X}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let X=0;X<6;X++)Ve(x.__webglFramebuffer[X],R,X);else{const X=R.texture.mipmaps;X&&X.length>0?Ve(x.__webglFramebuffer[0],R,0):Ve(x.__webglFramebuffer,R,0)}else if(B){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=t.createRenderbuffer(),dt(x.__webglDepthbuffer[X],R,!1);else{const Y=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer[X];t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,Y,t.RENDERBUFFER,se)}}else{const X=R.texture.mipmaps;if(X&&X.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),dt(x.__webglDepthbuffer,R,!1);else{const Y=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,Y,t.RENDERBUFFER,se)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function We(R,x,B){const X=i.get(R);x!==void 0&&Pe(X.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&it(R)}function Xe(R){const x=R.texture,B=i.get(R),X=i.get(x);R.addEventListener("dispose",g);const Y=R.textures,se=R.isWebGLCubeRenderTarget===!0,ue=Y.length>1;if(ue||(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=x.version,a.memory.textures++),se){B.__webglFramebuffer=[];for(let $=0;$<6;$++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[$]=[];for(let Q=0;Q<x.mipmaps.length;Q++)B.__webglFramebuffer[$][Q]=t.createFramebuffer()}else B.__webglFramebuffer[$]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let $=0;$<x.mipmaps.length;$++)B.__webglFramebuffer[$]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(ue)for(let $=0,Q=Y.length;$<Q;$++){const fe=i.get(Y[$]);fe.__webglTexture===void 0&&(fe.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&Tt(R)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let $=0;$<Y.length;$++){const Q=Y[$];B.__webglColorRenderbuffer[$]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[$]);const fe=s.convert(Q.format,Q.colorSpace),Te=s.convert(Q.type),me=y(Q.internalFormat,fe,Te,Q.normalized,Q.colorSpace,R.isXRRenderTarget===!0),he=at(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,he,me,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+$,t.RENDERBUFFER,B.__webglColorRenderbuffer[$])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),dt(B.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(se){n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),Ge(t.TEXTURE_CUBE_MAP,x);for(let $=0;$<6;$++)if(x.mipmaps&&x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)Pe(B.__webglFramebuffer[$][Q],R,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q);else Pe(B.__webglFramebuffer[$],R,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);u(x)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){for(let $=0,Q=Y.length;$<Q;$++){const fe=Y[$],Te=i.get(fe);let me=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(me=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(me,Te.__webglTexture),Ge(me,fe),Pe(B.__webglFramebuffer,R,fe,t.COLOR_ATTACHMENT0+$,me,0),u(fe)&&v(me)}n.unbindTexture()}else{let $=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&($=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture($,X.__webglTexture),Ge($,x),x.mipmaps&&x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)Pe(B.__webglFramebuffer[Q],R,x,t.COLOR_ATTACHMENT0,$,Q);else Pe(B.__webglFramebuffer,R,x,t.COLOR_ATTACHMENT0,$,0);u(x)&&v($),n.unbindTexture()}R.depthBuffer&&it(R)}function pt(R){const x=R.textures;for(let B=0,X=x.length;B<X;B++){const Y=x[B];if(u(Y)){const se=M(R),ue=i.get(Y).__webglTexture;n.bindTexture(se,ue),v(se),n.unbindTexture()}}}const Ct=[],It=[];function Ut(R){if(R.samples>0){if(Tt(R)===!1){const x=R.textures,B=R.width,X=R.height;let Y=t.COLOR_BUFFER_BIT;const se=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(R),$=x.length>1;if($)for(let fe=0;fe<x.length;fe++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const Q=R.texture.mipmaps;Q&&Q.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let fe=0;fe<x.length;fe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Y|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Y|=t.STENCIL_BUFFER_BIT)),$){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const Te=i.get(x[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Te,0)}t.blitFramebuffer(0,0,B,X,0,0,B,X,Y,t.NEAREST),l===!0&&(Ct.length=0,It.length=0,Ct.push(t.COLOR_ATTACHMENT0+fe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ct.push(se),It.push(se),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,It)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ct))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),$)for(let fe=0;fe<x.length;fe++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const Te=i.get(x[fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,Te,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const x=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function at(R){return Math.min(r.maxSamples,R.samples)}function Tt(R){const x=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function O(R){const x=a.render.frame;f.get(R)!==x&&(f.set(R,x),R.update())}function Zt(R,x){const B=R.colorSpace,X=R.format,Y=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Wl&&B!==ir&&(je.getTransfer(B)===rt?(X!==Jn||Y!==Cn)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",B)),x}function $e(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=j,this.getTextureUnits=q,this.setTextureUnits=V,this.setTexture2D=k,this.setTexture2DArray=N,this.setTexture3D=ee,this.setTextureCube=ie,this.rebindTextures=We,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=Tt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Lw(t,e){function n(i,r=ir){let s;const a=je.getTransfer(r);if(i===Cn)return t.UNSIGNED_BYTE;if(i===ih)return t.UNSIGNED_SHORT_4_4_4_4;if(i===rh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===sx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ax)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===ix)return t.BYTE;if(i===rx)return t.SHORT;if(i===eo)return t.UNSIGNED_SHORT;if(i===nh)return t.INT;if(i===vi)return t.UNSIGNED_INT;if(i===di)return t.FLOAT;if(i===ki)return t.HALF_FLOAT;if(i===ox)return t.ALPHA;if(i===lx)return t.RGB;if(i===Jn)return t.RGBA;if(i===Bi)return t.DEPTH_COMPONENT;if(i===Fr)return t.DEPTH_STENCIL;if(i===cx)return t.RED;if(i===sh)return t.RED_INTEGER;if(i===Xr)return t.RG;if(i===ah)return t.RG_INTEGER;if(i===oh)return t.RGBA_INTEGER;if(i===hl||i===pl||i===ml||i===gl)if(a===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===hl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===hl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ml)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wd||i===Ad||i===bd||i===Cd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===wd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ad)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rd||i===Pd||i===Ld||i===Id||i===Dd||i===Gl||i===Nd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Rd||i===Pd)return a===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ld)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Id)return s.COMPRESSED_R11_EAC;if(i===Dd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Gl)return s.COMPRESSED_RG11_EAC;if(i===Nd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ud||i===Fd||i===Od||i===kd||i===Bd||i===zd||i===Vd||i===Gd||i===Hd||i===Wd||i===Xd||i===jd||i===Yd||i===qd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ud)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Od)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Vd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Gd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$d||i===Kd||i===Zd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===$d)return a===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Kd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jd||i===Qd||i===Hl||i===ef)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Jd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Qd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ef)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===to?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const Iw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dw=`
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

}`;class Nw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new xx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new _i({vertexShader:Iw,fragmentShader:Dw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ut(new Ys(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Uw extends qr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,h=null,d=null,p=null,_=null;const E=typeof XRWebGLBinding<"u",m=new Nw,u={},v=n.getContextAttributes();let M=null,y=null;const A=[],T=[],C=new qe;let g=null;const b=new bn;b.viewport=new St;const P=new bn;P.viewport=new St;const L=[b,P],F=new XS;let j=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ae=A[Z];return ae===void 0&&(ae=new Kc,A[Z]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Z){let ae=A[Z];return ae===void 0&&(ae=new Kc,A[Z]=ae),ae.getGripSpace()},this.getHand=function(Z){let ae=A[Z];return ae===void 0&&(ae=new Kc,A[Z]=ae),ae.getHandSpace()};function V(Z){const ae=T.indexOf(Z.inputSource);if(ae===-1)return;const te=A[ae];te!==void 0&&(te.update(Z.inputSource,Z.frame,c||a),te.dispatchEvent({type:Z.type,data:Z.inputSource}))}function K(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",G);for(let Z=0;Z<A.length;Z++){const ae=T[Z];ae!==null&&(T[Z]=null,A[Z].disconnect(ae))}j=null,q=null,m.reset();for(const Z in u)delete u[Z];e.setRenderTarget(M),p=null,d=null,h=null,r=null,y=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(g),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&E&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",K),r.addEventListener("inputsourceschange",G),v.xrCompatible!==!0&&await n.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(C),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,Ie=null,De=null;v.depth&&(De=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=v.stencil?Fr:Bi,Ie=v.stencil?to:vi);const Pe={colorFormat:n.RGBA8,depthFormat:De,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Pe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new gi(d.textureWidth,d.textureHeight,{format:Jn,type:Cn,depthTexture:new js(d.textureWidth,d.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const te={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new gi(p.framebufferWidth,p.framebufferHeight,{format:Jn,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(Z){for(let ae=0;ae<Z.removed.length;ae++){const te=Z.removed[ae],Ie=T.indexOf(te);Ie>=0&&(T[Ie]=null,A[Ie].disconnect(te))}for(let ae=0;ae<Z.added.length;ae++){const te=Z.added[ae];let Ie=T.indexOf(te);if(Ie===-1){for(let Pe=0;Pe<A.length;Pe++)if(Pe>=T.length){T.push(te),Ie=Pe;break}else if(T[Pe]===null){T[Pe]=te,Ie=Pe;break}if(Ie===-1)break}const De=A[Ie];De&&De.connect(te)}}const k=new H,N=new H;function ee(Z,ae,te){k.setFromMatrixPosition(ae.matrixWorld),N.setFromMatrixPosition(te.matrixWorld);const Ie=k.distanceTo(N),De=ae.projectionMatrix.elements,Pe=te.projectionMatrix.elements,dt=De[14]/(De[10]-1),Ve=De[14]/(De[10]+1),it=(De[9]+1)/De[5],We=(De[9]-1)/De[5],Xe=(De[8]-1)/De[0],pt=(Pe[8]+1)/Pe[0],Ct=dt*Xe,It=dt*pt,Ut=Ie/(-Xe+pt),at=Ut*-Xe;if(ae.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(at),Z.translateZ(Ut),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),De[10]===-1)Z.projectionMatrix.copy(ae.projectionMatrix),Z.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Tt=dt+Ut,O=Ve+Ut,Zt=Ct-at,$e=It+(Ie-at),R=it*Ve/O*Tt,x=We*Ve/O*Tt;Z.projectionMatrix.makePerspective(Zt,$e,R,x,Tt,O),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ie(Z,ae){ae===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ae.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let ae=Z.near,te=Z.far;m.texture!==null&&(m.depthNear>0&&(ae=m.depthNear),m.depthFar>0&&(te=m.depthFar)),F.near=P.near=b.near=ae,F.far=P.far=b.far=te,(j!==F.near||q!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),j=F.near,q=F.far),F.layers.mask=Z.layers.mask|6,b.layers.mask=F.layers.mask&-5,P.layers.mask=F.layers.mask&-3;const Ie=Z.parent,De=F.cameras;ie(F,Ie);for(let Pe=0;Pe<De.length;Pe++)ie(De[Pe],Ie);De.length===2?ee(F,b,P):F.projectionMatrix.copy(b.projectionMatrix),oe(Z,F,Ie)};function oe(Z,ae,te){te===null?Z.matrix.copy(ae.matrixWorld):(Z.matrix.copy(te.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ae.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ae.projectionMatrix),Z.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=nf*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Z){return u[Z]};let ze=null;function Ze(Z,ae){if(f=ae.getViewerPose(c||a),_=ae,f!==null){const te=f.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Ie=!1;te.length!==F.cameras.length&&(F.cameras.length=0,Ie=!0);for(let Ve=0;Ve<te.length;Ve++){const it=te[Ve];let We=null;if(p!==null)We=p.getViewport(it);else{const pt=h.getViewSubImage(d,it);We=pt.viewport,Ve===0&&(e.setRenderTargetTextures(y,pt.colorTexture,pt.depthStencilTexture),e.setRenderTarget(y))}let Xe=L[Ve];Xe===void 0&&(Xe=new bn,Xe.layers.enable(Ve),Xe.viewport=new St,L[Ve]=Xe),Xe.matrix.fromArray(it.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(it.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(We.x,We.y,We.width,We.height),Ve===0&&(F.matrix.copy(Xe.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ie===!0&&F.cameras.push(Xe)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){h=i.getBinding();const Ve=h.getDepthInformation(te[0]);Ve&&Ve.isValid&&Ve.texture&&m.init(Ve,r.renderState)}if(De&&De.includes("camera-access")&&E){e.state.unbindTexture(),h=i.getBinding();for(let Ve=0;Ve<te.length;Ve++){const it=te[Ve].camera;if(it){let We=u[it];We||(We=new xx,u[it]=We);const Xe=h.getCameraImage(it);We.sourceTexture=Xe}}}}for(let te=0;te<A.length;te++){const Ie=T[te],De=A[te];Ie!==null&&De!==void 0&&De.update(Ie,ae,c||a)}ze&&ze(Z,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),_=null}const Ge=new Sx;Ge.setAnimationLoop(Ze),this.setAnimationLoop=function(Z){ze=Z},this.dispose=function(){}}}const Fw=new bt,Cx=new Fe;Cx.set(-1,0,0,0,1,0,0,0,1);function Ow(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,vx(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,v,M,y){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(m,u):u.isMeshLambertMaterial?(s(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),f(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,y)):u.isMeshMatcapMaterial?(s(m,u),_(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),E(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,v,M):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Mn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Mn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const v=e.get(u),M=v.envMap,y=v.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(Fw.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Cx),m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,v,M){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=M*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Mn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function E(m,u){const v=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function kw(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,A){const T=A.program;i.uniformBlockBinding(y,T)}function c(y,A){let T=r[y.id];T===void 0&&(m(y),T=f(y),r[y.id]=T,y.addEventListener("dispose",v));const C=A.program;i.updateUBOMapping(y,C);const g=e.render.frame;s[y.id]!==g&&(d(y),s[y.id]=g)}function f(y){const A=h();y.__bindingPointIndex=A;const T=t.createBuffer(),C=y.__size,g=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,C,g),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,A,T),T}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const A=r[y.id],T=y.uniforms,C=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,A);for(let g=0,b=T.length;g<b;g++){const P=T[g];if(Array.isArray(P))for(let L=0,F=P.length;L<F;L++)p(P[L],g,L,C);else p(P,g,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(y,A,T,C){if(E(y,A,T,C)===!0){const g=y.__offset,b=y.value;if(Array.isArray(b)){let P=0;for(let L=0;L<b.length;L++){const F=b[L],j=u(F);_(F,y.__data,P),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(P+=j.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(b,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,g,y.__data)}}function _(y,A,T){typeof y=="number"||typeof y=="boolean"?A[0]=y:y.isMatrix3?(A[0]=y.elements[0],A[1]=y.elements[1],A[2]=y.elements[2],A[3]=0,A[4]=y.elements[3],A[5]=y.elements[4],A[6]=y.elements[5],A[7]=0,A[8]=y.elements[6],A[9]=y.elements[7],A[10]=y.elements[8],A[11]=0):ArrayBuffer.isView(y)?A.set(new y.constructor(y.buffer,y.byteOffset,A.length)):y.toArray(A,T)}function E(y,A,T,C){const g=y.value,b=A+"_"+T;if(C[b]===void 0)return typeof g=="number"||typeof g=="boolean"?C[b]=g:ArrayBuffer.isView(g)?C[b]=g.slice():C[b]=g.clone(),!0;{const P=C[b];if(typeof g=="number"||typeof g=="boolean"){if(P!==g)return C[b]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(P.equals(g)===!1)return P.copy(g),!0}}return!1}function m(y){const A=y.uniforms;let T=0;const C=16;for(let b=0,P=A.length;b<P;b++){const L=Array.isArray(A[b])?A[b]:[A[b]];for(let F=0,j=L.length;F<j;F++){const q=L[F],V=Array.isArray(q.value)?q.value:[q.value];for(let K=0,G=V.length;K<G;K++){const k=V[K],N=u(k),ee=T%C,ie=ee%N.boundary,oe=ee+ie;T+=ie,oe!==0&&C-oe<N.storage&&(T+=C-oe),q.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=T,T+=N.storage}}}const g=T%C;return g>0&&(T+=C-g),y.__size=T,y.__cache={},this}function u(y){const A={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(A.boundary=4,A.storage=4):y.isVector2?(A.boundary=8,A.storage=8):y.isVector3||y.isColor?(A.boundary=16,A.storage=12):y.isVector4?(A.boundary=16,A.storage=16):y.isMatrix3?(A.boundary=48,A.storage=48):y.isMatrix4?(A.boundary=64,A.storage=64):y.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(A.boundary=16,A.storage=y.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",y),A}function v(y){const A=y.target;A.removeEventListener("dispose",v);const T=a.indexOf(A.__bindingPointIndex);a.splice(T,1),t.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function M(){for(const y in r)t.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:M}}const Bw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let oi=null;function zw(){return oi===null&&(oi=new CS(Bw,16,16,Xr,ki),oi.name="DFG_LUT",oi.minFilter=Wt,oi.magFilter=Wt,oi.wrapS=Pi,oi.wrapT=Pi,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}class Vw{constructor(e={}){const{canvas:n=rS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Cn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const E=p,m=new Set([oh,ah,sh]),u=new Set([Cn,vi,eo,to,ih,rh]),v=new Uint32Array(4),M=new Int32Array(4),y=new H;let A=null,T=null;const C=[],g=[];let b=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let L=!1,F=null,j=null,q=null,V=null;this._outputColorSpace=On;let K=0,G=0,k=null,N=-1,ee=null;const ie=new St,oe=new St;let ze=null;const Ze=new et(0);let Ge=0,Z=n.width,ae=n.height,te=1,Ie=null,De=null;const Pe=new St(0,0,Z,ae),dt=new St(0,0,Z,ae);let Ve=!1;const it=new fh;let We=!1,Xe=!1;const pt=new bt,Ct=new H,It=new St,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function Tt(){return k===null?te:1}let O=i;function Zt(S,I){return n.getContext(S,I)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${th}`),n.addEventListener("webglcontextlost",mt,!1),n.addEventListener("webglcontextrestored",nt,!1),n.addEventListener("webglcontextcreationerror",Ft,!1),O===null){const I="webgl2";if(O=Zt(I,S),O===null)throw Zt(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(S){throw Qe("WebGLRenderer: "+S.message),S}let $e,R,x,B,X,Y,se,ue,$,Q,fe,Te,me,he,be,Le,Ue,U,le,J,pe,ge,ne;function Me(){$e=new zE(O),$e.init(),pe=new Lw(O,$e),R=new IE(O,$e,e,pe),x=new Rw(O,$e),R.reversedDepthBuffer&&d&&x.buffers.depth.setReversed(!0),j=O.createFramebuffer(),q=O.createFramebuffer(),V=O.createFramebuffer(),B=new HE(O),X=new mw,Y=new Pw(O,$e,x,X,R,pe,B),se=new BE(P),ue=new YS(O),ge=new PE(O,ue),$=new VE(O,ue,B,ge),Q=new XE(O,$,ue,ge,B),U=new WE(O,R,Y),be=new DE(X),fe=new pw(P,se,$e,R,ge,be),Te=new Ow(P,X),me=new xw,he=new Ew($e),Ue=new RE(P,se,x,Q,_,l),Le=new Cw(P,Q,R),ne=new kw(O,B,R,x),le=new LE(O,$e,B),J=new GE(O,$e,B),B.programs=fe.programs,P.capabilities=R,P.extensions=$e,P.properties=X,P.renderLists=me,P.shadowMap=Le,P.state=x,P.info=B}Me(),E!==Cn&&(b=new YE(E,n.width,n.height,o,r,s));const Se=new Uw(P,O);this.xr=Se,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const S=$e.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=$e.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(S){S!==void 0&&(te=S,this.setSize(Z,ae,!1))},this.getSize=function(S){return S.set(Z,ae)},this.setSize=function(S,I,W=!0){if(Se.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=S,ae=I,n.width=Math.floor(S*te),n.height=Math.floor(I*te),W===!0&&(n.style.width=S+"px",n.style.height=I+"px"),b!==null&&b.setSize(n.width,n.height),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(Z*te,ae*te).floor()},this.setDrawingBufferSize=function(S,I,W){Z=S,ae=I,te=W,n.width=Math.floor(S*W),n.height=Math.floor(I*W),this.setViewport(0,0,S,I)},this.setEffects=function(S){if(E===Cn){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let I=0;I<S.length;I++)if(S[I].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ie)},this.getViewport=function(S){return S.copy(Pe)},this.setViewport=function(S,I,W,D){S.isVector4?Pe.set(S.x,S.y,S.z,S.w):Pe.set(S,I,W,D),x.viewport(ie.copy(Pe).multiplyScalar(te).round())},this.getScissor=function(S){return S.copy(dt)},this.setScissor=function(S,I,W,D){S.isVector4?dt.set(S.x,S.y,S.z,S.w):dt.set(S,I,W,D),x.scissor(oe.copy(dt).multiplyScalar(te).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(S){x.setScissorTest(Ve=S)},this.setOpaqueSort=function(S){Ie=S},this.setTransparentSort=function(S){De=S},this.getClearColor=function(S){return S.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(S=!0,I=!0,W=!0){let D=0;if(S){let z=!1;if(k!==null){const de=k.texture.format;z=m.has(de)}if(z){const de=k.texture.type,ve=u.has(de),ce=Ue.getClearColor(),Ae=Ue.getClearAlpha(),Ce=ce.r,Oe=ce.g,Be=ce.b;ve?(v[0]=Ce,v[1]=Oe,v[2]=Be,v[3]=Ae,O.clearBufferuiv(O.COLOR,0,v)):(M[0]=Ce,M[1]=Oe,M[2]=Be,M[3]=Ae,O.clearBufferiv(O.COLOR,0,M))}else D|=O.COLOR_BUFFER_BIT}I&&(D|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(D|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D!==0&&O.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),F=S},this.dispose=function(){n.removeEventListener("webglcontextlost",mt,!1),n.removeEventListener("webglcontextrestored",nt,!1),n.removeEventListener("webglcontextcreationerror",Ft,!1),Ue.dispose(),me.dispose(),he.dispose(),X.dispose(),se.dispose(),Q.dispose(),ge.dispose(),ne.dispose(),fe.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",ea),Se.removeEventListener("sessionend",ta),ii.stop()};function mt(S){S.preventDefault(),zp("WebGLRenderer: Context Lost."),L=!0}function nt(){zp("WebGLRenderer: Context Restored."),L=!1;const S=B.autoReset,I=Le.enabled,W=Le.autoUpdate,D=Le.needsUpdate,z=Le.type;Me(),B.autoReset=S,Le.enabled=I,Le.autoUpdate=W,Le.needsUpdate=D,Le.type=z}function Ft(S){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ot(S){const I=S.target;I.removeEventListener("dispose",Ot),jt(I)}function jt(S){cn(S),X.remove(S)}function cn(S){const I=X.get(S).programs;I!==void 0&&(I.forEach(function(W){fe.releaseProgram(W)}),S.isShaderMaterial&&fe.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,W,D,z,de){I===null&&(I=Ut);const ve=z.isMesh&&z.matrixWorld.determinantAffine()<0,ce=mo(S,I,W,D,z);x.setMaterial(D,ve);let Ae=W.index,Ce=1;if(D.wireframe===!0){if(Ae=$.getWireframeAttribute(W),Ae===void 0)return;Ce=2}const Oe=W.drawRange,Be=W.attributes.position;let Re=Oe.start*Ce,ot=(Oe.start+Oe.count)*Ce;de!==null&&(Re=Math.max(Re,de.start*Ce),ot=Math.min(ot,(de.start+de.count)*Ce)),Ae!==null?(Re=Math.max(Re,0),ot=Math.min(ot,Ae.count)):Be!=null&&(Re=Math.max(Re,0),ot=Math.min(ot,Be.count));const Rt=ot-Re;if(Rt<0||Rt===1/0)return;ge.setup(z,D,ce,W,Ae);let wt,lt=le;if(Ae!==null&&(wt=ue.get(Ae),lt=J,lt.setIndex(wt)),z.isMesh)D.wireframe===!0?(x.setLineWidth(D.wireframeLinewidth*Tt()),lt.setMode(O.LINES)):lt.setMode(O.TRIANGLES);else if(z.isLine){let Jt=D.linewidth;Jt===void 0&&(Jt=1),x.setLineWidth(Jt*Tt()),z.isLineSegments?lt.setMode(O.LINES):z.isLineLoop?lt.setMode(O.LINE_LOOP):lt.setMode(O.LINE_STRIP)}else z.isPoints?lt.setMode(O.POINTS):z.isSprite&&lt.setMode(O.TRIANGLES);if(z.isBatchedMesh)if($e.get("WEBGL_multi_draw"))lt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Jt=z._multiDrawStarts,_e=z._multiDrawCounts,En=z._multiDrawCount,Je=Ae?ue.get(Ae).bytesPerElement:1,Un=X.get(D).currentProgram.getUniforms();for(let ri=0;ri<En;ri++)Un.setValue(O,"_gl_DrawID",ri),lt.render(Jt[ri]/Je,_e[ri])}else if(z.isInstancedMesh)lt.renderInstances(Re,Rt,z.count);else if(W.isInstancedBufferGeometry){const Jt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,_e=Math.min(W.instanceCount,Jt);lt.renderInstances(Re,Rt,_e)}else lt.render(Re,Rt)};function $r(S,I,W){S.transparent===!0&&S.side===bi&&S.forceSinglePass===!1?(S.side=Mn,S.needsUpdate=!0,Jr(S,I,W),S.side=xr,S.needsUpdate=!0,Jr(S,I,W),S.side=bi):Jr(S,I,W)}this.compile=function(S,I,W=null){W===null&&(W=S),T=he.get(W),T.init(I),g.push(T),W.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),S!==W&&S.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights();const D=new Set;return S.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const de=z.material;if(de)if(Array.isArray(de))for(let ve=0;ve<de.length;ve++){const ce=de[ve];$r(ce,W,z),D.add(ce)}else $r(de,W,z),D.add(de)}),T=g.pop(),D},this.compileAsync=function(S,I,W=null){const D=this.compile(S,I,W);return new Promise(z=>{function de(){if(D.forEach(function(ve){X.get(ve).currentProgram.isReady()&&D.delete(ve)}),D.size===0){z(S);return}setTimeout(de,10)}$e.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Kr=null;function fo(S){Kr&&Kr(S)}function ea(){ii.stop()}function ta(){ii.start()}const ii=new Sx;ii.setAnimationLoop(fo),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(S){Kr=S,Se.setAnimationLoop(S),S===null?ii.stop():ii.start()},Se.addEventListener("sessionstart",ea),Se.addEventListener("sessionend",ta),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(S,I);const W=Se.enabled===!0&&Se.isPresenting===!0,D=b!==null&&(k===null||W)&&b.begin(P,k);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(I),I=Se.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,I,k),T=he.get(S,g.length),T.init(I),T.state.textureUnits=Y.getTextureUnits(),g.push(T),pt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),it.setFromProjectionMatrix(pt,fi,I.reversedDepth),Xe=this.localClippingEnabled,We=be.init(this.clippingPlanes,Xe),A=me.get(S,C.length),A.init(),C.push(A),Se.enabled===!0&&Se.isPresenting===!0){const ve=P.xr.getDepthSensingMesh();ve!==null&&Zr(ve,I,-1/0,P.sortObjects)}Zr(S,I,0,P.sortObjects),A.finish(),P.sortObjects===!0&&A.sort(Ie,De,I.reversedDepth),at=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,at&&Ue.addToRenderList(A,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),We===!0&&be.beginShadows();const z=T.state.shadowsArray;if(Le.render(z,S,I),We===!0&&be.endShadows(),(D&&b.hasRenderPass())===!1){const ve=A.opaque,ce=A.transmissive;if(T.setupLights(),I.isArrayCamera){const Ae=I.cameras;if(ce.length>0)for(let Ce=0,Oe=Ae.length;Ce<Oe;Ce++){const Be=Ae[Ce];Nn(ve,ce,S,Be)}at&&Ue.render(S);for(let Ce=0,Oe=Ae.length;Ce<Oe;Ce++){const Be=Ae[Ce];na(A,S,Be,Be.viewport)}}else ce.length>0&&Nn(ve,ce,S,I),at&&Ue.render(S),na(A,S,I)}k!==null&&G===0&&(Y.updateMultisampleRenderTarget(k),Y.updateRenderTargetMipmap(k)),D&&b.end(P),S.isScene===!0&&S.onAfterRender(P,S,I),ge.resetDefaultState(),N=-1,ee=null,g.pop(),g.length>0?(T=g[g.length-1],Y.setTextureUnits(T.state.textureUnits),We===!0&&be.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?A=C[C.length-1]:A=null,F!==null&&F.renderEnd()};function Zr(S,I,W,D){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||it.intersectsSprite(S)){D&&It.setFromMatrixPosition(S.matrixWorld).applyMatrix4(pt);const ve=Q.update(S),ce=S.material;ce.visible&&A.push(S,ve,ce,W,It.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||it.intersectsObject(S))){const ve=Q.update(S),ce=S.material;if(D&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),It.copy(S.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),It.copy(ve.boundingSphere.center)),It.applyMatrix4(S.matrixWorld).applyMatrix4(pt)),Array.isArray(ce)){const Ae=ve.groups;for(let Ce=0,Oe=Ae.length;Ce<Oe;Ce++){const Be=Ae[Ce],Re=ce[Be.materialIndex];Re&&Re.visible&&A.push(S,ve,Re,W,It.z,Be)}}else ce.visible&&A.push(S,ve,ce,W,It.z,null)}}const de=S.children;for(let ve=0,ce=de.length;ve<ce;ve++)Zr(de[ve],I,W,D)}function na(S,I,W,D){const{opaque:z,transmissive:de,transparent:ve}=S;T.setupLightsView(W),We===!0&&be.setGlobalState(P.clippingPlanes,W),D&&x.viewport(ie.copy(D)),z.length>0&&Vi(z,I,W),de.length>0&&Vi(de,I,W),ve.length>0&&Vi(ve,I,W),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Nn(S,I,W,D){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[D.id]===void 0){const Re=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[D.id]=new gi(1,1,{generateMipmaps:!0,type:Re?ki:Cn,minFilter:Ur,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}const de=T.state.transmissionRenderTarget[D.id],ve=D.viewport||ie;de.setSize(ve.z*P.transmissionResolutionScale,ve.w*P.transmissionResolutionScale);const ce=P.getRenderTarget(),Ae=P.getActiveCubeFace(),Ce=P.getActiveMipmapLevel();P.setRenderTarget(de),P.getClearColor(Ze),Ge=P.getClearAlpha(),Ge<1&&P.setClearColor(16777215,.5),P.clear(),at&&Ue.render(W);const Oe=P.toneMapping;P.toneMapping=mi;const Be=D.viewport;if(D.viewport!==void 0&&(D.viewport=void 0),T.setupLightsView(D),We===!0&&be.setGlobalState(P.clippingPlanes,D),Vi(S,W,D),Y.updateMultisampleRenderTarget(de),Y.updateRenderTargetMipmap(de),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ot=0,Rt=I.length;ot<Rt;ot++){const wt=I[ot],{object:lt,geometry:Jt,material:_e,group:En}=wt;if(_e.side===bi&&lt.layers.test(D.layers)){const Je=_e.side;_e.side=Mn,_e.needsUpdate=!0,ia(lt,W,D,Jt,_e,En),_e.side=Je,_e.needsUpdate=!0,Re=!0}}Re===!0&&(Y.updateMultisampleRenderTarget(de),Y.updateRenderTargetMipmap(de))}P.setRenderTarget(ce,Ae,Ce),P.setClearColor(Ze,Ge),Be!==void 0&&(D.viewport=Be),P.toneMapping=Oe}function Vi(S,I,W){const D=I.isScene===!0?I.overrideMaterial:null;for(let z=0,de=S.length;z<de;z++){const ve=S[z],{object:ce,geometry:Ae,group:Ce}=ve;let Oe=ve.material;Oe.allowOverride===!0&&D!==null&&(Oe=D),ce.layers.test(W.layers)&&ia(ce,I,W,Ae,Oe,Ce)}}function ia(S,I,W,D,z,de){S.onBeforeRender(P,I,W,D,z,de),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(P,I,W,D,S,de),z.transparent===!0&&z.side===bi&&z.forceSinglePass===!1?(z.side=Mn,z.needsUpdate=!0,P.renderBufferDirect(W,I,D,z,S,de),z.side=xr,z.needsUpdate=!0,P.renderBufferDirect(W,I,D,z,S,de),z.side=bi):P.renderBufferDirect(W,I,D,z,S,de),S.onAfterRender(P,I,W,D,z,de)}function Jr(S,I,W){I.isScene!==!0&&(I=Ut);const D=X.get(S),z=T.state.lights,de=T.state.shadowsArray,ve=z.state.version,ce=fe.getParameters(S,z.state,de,I,W,T.state.lightProbeGridArray),Ae=fe.getProgramCacheKey(ce);let Ce=D.programs;D.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?I.environment:null,D.fog=I.fog;const Oe=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;D.envMap=se.get(S.envMap||D.environment,Oe),D.envMapRotation=D.environment!==null&&S.envMap===null?I.environmentRotation:S.envMapRotation,Ce===void 0&&(S.addEventListener("dispose",Ot),Ce=new Map,D.programs=Ce);let Be=Ce.get(Ae);if(Be!==void 0){if(D.currentProgram===Be&&D.lightsStateVersion===ve)return ra(S,ce),Be}else ce.uniforms=fe.getUniforms(S),F!==null&&S.isNodeMaterial&&F.build(S,W,ce),S.onBeforeCompile(ce,P),Be=fe.acquireProgram(ce,Ae),Ce.set(Ae,Be),D.uniforms=ce.uniforms;const Re=D.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Re.clippingPlanes=be.uniform),ra(S,ce),D.needsLights=we(S),D.lightsStateVersion=ve,D.needsLights&&(Re.ambientLightColor.value=z.state.ambient,Re.lightProbe.value=z.state.probe,Re.directionalLights.value=z.state.directional,Re.directionalLightShadows.value=z.state.directionalShadow,Re.spotLights.value=z.state.spot,Re.spotLightShadows.value=z.state.spotShadow,Re.rectAreaLights.value=z.state.rectArea,Re.ltc_1.value=z.state.rectAreaLTC1,Re.ltc_2.value=z.state.rectAreaLTC2,Re.pointLights.value=z.state.point,Re.pointLightShadows.value=z.state.pointShadow,Re.hemisphereLights.value=z.state.hemi,Re.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Re.spotLightMatrix.value=z.state.spotLightMatrix,Re.spotLightMap.value=z.state.spotLightMap,Re.pointShadowMatrix.value=z.state.pointShadowMatrix),D.lightProbeGrid=T.state.lightProbeGridArray.length>0,D.currentProgram=Be,D.uniformsList=null,Be}function ho(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=xl.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function ra(S,I){const W=X.get(S);W.outputColorSpace=I.outputColorSpace,W.batching=I.batching,W.batchingColor=I.batchingColor,W.instancing=I.instancing,W.instancingColor=I.instancingColor,W.instancingMorph=I.instancingMorph,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function po(S,I){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(I.matrixWorld);for(let W=0,D=S.length;W<D;W++){const z=S[W];if(z.texture!==null&&z.boundingBox.containsPoint(y))return z}return null}function mo(S,I,W,D,z){I.isScene!==!0&&(I=Ut),Y.resetTextureUnits();const de=I.fog,ve=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?I.environment:null,ce=k===null?P.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:je.workingColorSpace,Ae=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap,Ce=se.get(D.envMap||ve,Ae),Oe=D.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Be=!!W.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),Re=!!W.morphAttributes.position,ot=!!W.morphAttributes.normal,Rt=!!W.morphAttributes.color;let wt=mi;D.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(wt=P.toneMapping);const lt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Jt=lt!==void 0?lt.length:0,_e=X.get(D),En=T.state.lights;if(We===!0&&(Xe===!0||S!==ee)){const ft=S===ee&&D.id===N;be.setState(D,S,ft)}let Je=!1;D.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==En.state.version||_e.outputColorSpace!==ce||z.isBatchedMesh&&_e.batching===!1||!z.isBatchedMesh&&_e.batching===!0||z.isBatchedMesh&&_e.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&_e.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&_e.instancing===!1||!z.isInstancedMesh&&_e.instancing===!0||z.isSkinnedMesh&&_e.skinning===!1||!z.isSkinnedMesh&&_e.skinning===!0||z.isInstancedMesh&&_e.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&_e.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&_e.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&_e.instancingMorph===!1&&z.morphTexture!==null||_e.envMap!==Ce||D.fog===!0&&_e.fog!==de||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==be.numPlanes||_e.numIntersection!==be.numIntersection)||_e.vertexAlphas!==Oe||_e.vertexTangents!==Be||_e.morphTargets!==Re||_e.morphNormals!==ot||_e.morphColors!==Rt||_e.toneMapping!==wt||_e.morphTargetsCount!==Jt||!!_e.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Je=!0):(Je=!0,_e.__version=D.version);let Un=_e.currentProgram;Je===!0&&(Un=Jr(D,I,z),F&&D.isNodeMaterial&&F.onUpdateProgram(D,Un,_e));let ri=!1,Gi=!1,Qr=!1;const ct=Un.getUniforms(),Pt=_e.uniforms;if(x.useProgram(Un.program)&&(ri=!0,Gi=!0,Qr=!0),D.id!==N&&(N=D.id,Gi=!0),_e.needsLights){const ft=po(T.state.lightProbeGridArray,z);_e.lightProbeGrid!==ft&&(_e.lightProbeGrid=ft,Gi=!0)}if(ri||ee!==S){x.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ct.setValue(O,"projectionMatrix",S.projectionMatrix),ct.setValue(O,"viewMatrix",S.matrixWorldInverse);const Wi=ct.map.cameraPosition;Wi!==void 0&&Wi.setValue(O,Ct.setFromMatrixPosition(S.matrixWorld)),R.logarithmicDepthBuffer&&ct.setValue(O,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&ct.setValue(O,"isOrthographic",S.isOrthographicCamera===!0),ee!==S&&(ee=S,Gi=!0,Qr=!0)}if(_e.needsLights&&(En.state.directionalShadowMap.length>0&&ct.setValue(O,"directionalShadowMap",En.state.directionalShadowMap,Y),En.state.spotShadowMap.length>0&&ct.setValue(O,"spotShadowMap",En.state.spotShadowMap,Y),En.state.pointShadowMap.length>0&&ct.setValue(O,"pointShadowMap",En.state.pointShadowMap,Y)),z.isSkinnedMesh){ct.setOptional(O,z,"bindMatrix"),ct.setOptional(O,z,"bindMatrixInverse");const ft=z.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),ct.setValue(O,"boneTexture",ft.boneTexture,Y))}z.isBatchedMesh&&(ct.setOptional(O,z,"batchingTexture"),ct.setValue(O,"batchingTexture",z._matricesTexture,Y),ct.setOptional(O,z,"batchingIdTexture"),ct.setValue(O,"batchingIdTexture",z._indirectTexture,Y),ct.setOptional(O,z,"batchingColorTexture"),z._colorsTexture!==null&&ct.setValue(O,"batchingColorTexture",z._colorsTexture,Y));const Hi=W.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0)&&U.update(z,W,Un),(Gi||_e.receiveShadow!==z.receiveShadow)&&(_e.receiveShadow=z.receiveShadow,ct.setValue(O,"receiveShadow",z.receiveShadow)),(D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial)&&D.envMap===null&&I.environment!==null&&(Pt.envMapIntensity.value=I.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=zw()),Gi){if(ct.setValue(O,"toneMappingExposure",P.toneMappingExposure),_e.needsLights&&Ee(Pt,Qr),de&&D.fog===!0&&Te.refreshFogUniforms(Pt,de),Te.refreshMaterialUniforms(Pt,D,te,ae,T.state.transmissionRenderTarget[S.id]),_e.needsLights&&_e.lightProbeGrid){const ft=_e.lightProbeGrid;Pt.probesSH.value=ft.texture,Pt.probesMin.value.copy(ft.boundingBox.min),Pt.probesMax.value.copy(ft.boundingBox.max),Pt.probesResolution.value.copy(ft.resolution)}xl.upload(O,ho(_e),Pt,Y)}if(D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(xl.upload(O,ho(_e),Pt,Y),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&ct.setValue(O,"center",z.center),ct.setValue(O,"modelViewMatrix",z.modelViewMatrix),ct.setValue(O,"normalMatrix",z.normalMatrix),ct.setValue(O,"modelMatrix",z.matrixWorld),D.uniformsGroups!==void 0){const ft=D.uniformsGroups;for(let Wi=0,es=ft.length;Wi<es;Wi++){const Mh=ft[Wi];ne.update(Mh,Un),ne.bind(Mh,Un)}}return Un}function Ee(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function we(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(S,I,W){const D=X.get(S);D.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,D.__autoAllocateDepthBuffer===!1&&(D.__useRenderToTexture=!1),X.get(S.texture).__webglTexture=I,X.get(S.depthTexture).__webglTexture=D.__autoAllocateDepthBuffer?void 0:W,D.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,I){const W=X.get(S);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,W=0){k=S,K=I,G=W;let D=null,z=!1,de=!1;if(S){const ce=X.get(S);if(ce.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(O.FRAMEBUFFER,ce.__webglFramebuffer),ie.copy(S.viewport),oe.copy(S.scissor),ze=S.scissorTest,x.viewport(ie),x.scissor(oe),x.setScissorTest(ze),N=-1;return}else if(ce.__webglFramebuffer===void 0)Y.setupRenderTarget(S);else if(ce.__hasExternalTextures)Y.rebindTextures(S,X.get(S.texture).__webglTexture,X.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Oe=S.depthTexture;if(ce.__boundDepthTexture!==Oe){if(Oe!==null&&X.has(Oe)&&(S.width!==Oe.image.width||S.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(S)}}const Ae=S.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(de=!0);const Ce=X.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ce[I])?D=Ce[I][W]:D=Ce[I],z=!0):S.samples>0&&Y.useMultisampledRTT(S)===!1?D=X.get(S).__webglMultisampledFramebuffer:Array.isArray(Ce)?D=Ce[W]:D=Ce,ie.copy(S.viewport),oe.copy(S.scissor),ze=S.scissorTest}else ie.copy(Pe).multiplyScalar(te).floor(),oe.copy(dt).multiplyScalar(te).floor(),ze=Ve;if(W!==0&&(D=j),x.bindFramebuffer(O.FRAMEBUFFER,D)&&x.drawBuffers(S,D),x.viewport(ie),x.scissor(oe),x.setScissorTest(ze),z){const ce=X.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+I,ce.__webglTexture,W)}else if(de){const ce=I;for(let Ae=0;Ae<S.textures.length;Ae++){const Ce=X.get(S.textures[Ae]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ae,Ce.__webglTexture,W,ce)}}else if(S!==null&&W!==0){const ce=X.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ce.__webglTexture,W)}N=-1},this.readRenderTargetPixels=function(S,I,W,D,z,de,ve,ce=0){if(!(S&&S.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=X.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(Ae=Ae[ve]),Ae){x.bindFramebuffer(O.FRAMEBUFFER,Ae);try{const Ce=S.textures[ce],Oe=Ce.format,Be=Ce.type;if(S.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ce),!R.textureFormatReadable(Oe)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(Be)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-D&&W>=0&&W<=S.height-z&&O.readPixels(I,W,D,z,pe.convert(Oe),pe.convert(Be),de)}finally{const Ce=k!==null?X.get(k).__webglFramebuffer:null;x.bindFramebuffer(O.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(S,I,W,D,z,de,ve,ce=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=X.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(Ae=Ae[ve]),Ae)if(I>=0&&I<=S.width-D&&W>=0&&W<=S.height-z){x.bindFramebuffer(O.FRAMEBUFFER,Ae);const Ce=S.textures[ce],Oe=Ce.format,Be=Ce.type;if(S.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ce),!R.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Re),O.bufferData(O.PIXEL_PACK_BUFFER,de.byteLength,O.STREAM_READ),O.readPixels(I,W,D,z,pe.convert(Oe),pe.convert(Be),0);const ot=k!==null?X.get(k).__webglFramebuffer:null;x.bindFramebuffer(O.FRAMEBUFFER,ot);const Rt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await sS(O,Rt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Re),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,de),O.deleteBuffer(Re),O.deleteSync(Rt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,I=null,W=0){const D=Math.pow(2,-W),z=Math.floor(S.image.width*D),de=Math.floor(S.image.height*D),ve=I!==null?I.x:0,ce=I!==null?I.y:0;Y.setTexture2D(S,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,ve,ce,z,de),x.unbindTexture()},this.copyTextureToTexture=function(S,I,W=null,D=null,z=0,de=0){let ve,ce,Ae,Ce,Oe,Be,Re,ot,Rt;const wt=S.isCompressedTexture?S.mipmaps[de]:S.image;if(W!==null)ve=W.max.x-W.min.x,ce=W.max.y-W.min.y,Ae=W.isBox3?W.max.z-W.min.z:1,Ce=W.min.x,Oe=W.min.y,Be=W.isBox3?W.min.z:0;else{const Pt=Math.pow(2,-z);ve=Math.floor(wt.width*Pt),ce=Math.floor(wt.height*Pt),S.isDataArrayTexture?Ae=wt.depth:S.isData3DTexture?Ae=Math.floor(wt.depth*Pt):Ae=1,Ce=0,Oe=0,Be=0}D!==null?(Re=D.x,ot=D.y,Rt=D.z):(Re=0,ot=0,Rt=0);const lt=pe.convert(I.format),Jt=pe.convert(I.type);let _e;I.isData3DTexture?(Y.setTexture3D(I,0),_e=O.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Y.setTexture2DArray(I,0),_e=O.TEXTURE_2D_ARRAY):(Y.setTexture2D(I,0),_e=O.TEXTURE_2D),x.activeTexture(O.TEXTURE0),x.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,I.flipY),x.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),x.pixelStorei(O.UNPACK_ALIGNMENT,I.unpackAlignment);const En=x.getParameter(O.UNPACK_ROW_LENGTH),Je=x.getParameter(O.UNPACK_IMAGE_HEIGHT),Un=x.getParameter(O.UNPACK_SKIP_PIXELS),ri=x.getParameter(O.UNPACK_SKIP_ROWS),Gi=x.getParameter(O.UNPACK_SKIP_IMAGES);x.pixelStorei(O.UNPACK_ROW_LENGTH,wt.width),x.pixelStorei(O.UNPACK_IMAGE_HEIGHT,wt.height),x.pixelStorei(O.UNPACK_SKIP_PIXELS,Ce),x.pixelStorei(O.UNPACK_SKIP_ROWS,Oe),x.pixelStorei(O.UNPACK_SKIP_IMAGES,Be);const Qr=S.isDataArrayTexture||S.isData3DTexture,ct=I.isDataArrayTexture||I.isData3DTexture;if(S.isDepthTexture){const Pt=X.get(S),Hi=X.get(I),ft=X.get(Pt.__renderTarget),Wi=X.get(Hi.__renderTarget);x.bindFramebuffer(O.READ_FRAMEBUFFER,ft.__webglFramebuffer),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let es=0;es<Ae;es++)Qr&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(S).__webglTexture,z,Be+es),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(I).__webglTexture,de,Rt+es)),O.blitFramebuffer(Ce,Oe,ve,ce,Re,ot,ve,ce,O.DEPTH_BUFFER_BIT,O.NEAREST);x.bindFramebuffer(O.READ_FRAMEBUFFER,null),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(z!==0||S.isRenderTargetTexture||X.has(S)){const Pt=X.get(S),Hi=X.get(I);x.bindFramebuffer(O.READ_FRAMEBUFFER,q),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,V);for(let ft=0;ft<Ae;ft++)Qr?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pt.__webglTexture,z,Be+ft):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Pt.__webglTexture,z),ct?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Hi.__webglTexture,de,Rt+ft):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Hi.__webglTexture,de),z!==0?O.blitFramebuffer(Ce,Oe,ve,ce,Re,ot,ve,ce,O.COLOR_BUFFER_BIT,O.NEAREST):ct?O.copyTexSubImage3D(_e,de,Re,ot,Rt+ft,Ce,Oe,ve,ce):O.copyTexSubImage2D(_e,de,Re,ot,Ce,Oe,ve,ce);x.bindFramebuffer(O.READ_FRAMEBUFFER,null),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ct?S.isDataTexture||S.isData3DTexture?O.texSubImage3D(_e,de,Re,ot,Rt,ve,ce,Ae,lt,Jt,wt.data):I.isCompressedArrayTexture?O.compressedTexSubImage3D(_e,de,Re,ot,Rt,ve,ce,Ae,lt,wt.data):O.texSubImage3D(_e,de,Re,ot,Rt,ve,ce,Ae,lt,Jt,wt):S.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,de,Re,ot,ve,ce,lt,Jt,wt.data):S.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,de,Re,ot,wt.width,wt.height,lt,wt.data):O.texSubImage2D(O.TEXTURE_2D,de,Re,ot,ve,ce,lt,Jt,wt);x.pixelStorei(O.UNPACK_ROW_LENGTH,En),x.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Je),x.pixelStorei(O.UNPACK_SKIP_PIXELS,Un),x.pixelStorei(O.UNPACK_SKIP_ROWS,ri),x.pixelStorei(O.UNPACK_SKIP_IMAGES,Gi),de===0&&I.generateMipmaps&&O.generateMipmap(_e),x.unbindTexture()},this.initRenderTarget=function(S){X.get(S).__webglFramebuffer===void 0&&Y.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Y.setTextureCube(S,0):S.isData3DTexture?Y.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Y.setTexture2DArray(S,0):Y.setTexture2D(S,0),x.unbindTexture()},this.resetState=function(){K=0,G=0,k=null,x.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),n.unpackColorSpace=je._getUnpackColorSpace()}}function Gw({isFullScreenLanding:t=!1}){const e=Ke.useRef(null),[n,i]=Ke.useState("telemetry"),[r,s]=Ke.useState("cyan"),[a,o]=Ke.useState(!0),[l,c]=Ke.useState(!1),[f,h]=Ke.useState(""),[d,p]=Ke.useState(["COMMODORE PET 8296 DEVOPS OS v5.0",'TYPE COMMANDS ON YOUR KEYBOARD ("skills", "projects", "status", "f1", "clear"):',""]),_=Ke.useRef(n);_.current=n;const E=Ke.useRef(r);E.current=r;const m=Ke.useRef(l);m.current=l;const u=Ke.useRef(f);u.current=f;const v=Ke.useRef(d);v.current=d;const M=Ke.useRef(a);M.current=a;const y=Ke.useRef(null),A=Ke.useRef(null),T=(P=!1)=>{if(M.current)try{const L=window.AudioContext||window.webkitAudioContext;if(!L)return;const F=new L;F.state==="suspended"&&F.resume();const j=F.createOscillator(),q=F.createGain();j.type=P?"sawtooth":"square";const V=P?240:360+Math.random()*80;j.frequency.setValueAtTime(V,F.currentTime),j.frequency.exponentialRampToValueAtTime(110,F.currentTime+(P?.07:.04)),q.gain.setValueAtTime(.14,F.currentTime),q.gain.exponentialRampToValueAtTime(.001,F.currentTime+(P?.07:.04)),j.connect(q),q.connect(F.destination),j.start(),j.stop(F.currentTime+(P?.08:.05))}catch{}};Ke.useEffect(()=>{const P=e.current;if(!P)return;const L=P.clientWidth||540,F=P.clientHeight||420,j=new SS,q=new bn(38,L/F,.1,100),V=new H(0,.35,6.2),K=new H(0,.55,3.1);q.position.copy(V);const G=new Vw({antialias:!0,alpha:!0,powerPreference:"high-performance"});G.setSize(L,F),G.setPixelRatio(Math.min(window.devicePixelRatio,2)),G.shadowMap.enabled=!0,G.shadowMap.type=Fa,P.appendChild(G.domElement);const k=document.createElement("canvas");k.width=512,k.height=384;const N=k.getContext("2d"),ee=new tm(k);ee.minFilter=Wt,ee.magFilter=Wt;const ie=new Ar({color:1713206,roughness:.42,metalness:.28}),oe=new Ar({color:593690,roughness:.65,metalness:.15}),ze=new er({map:ee,toneMapped:!1}),Ze=new Ar({color:3029582,roughness:.48,metalness:.22}),Ge=new Ar({color:16717825,roughness:.35,metalness:.35}),Z=new Ar({color:62206,roughness:.35,metalness:.35}),ae=new Ar({color:9741240,roughness:.2,metalness:.85}),te=new wa;j.add(te);const Ie=new Ys(4.2,3.8),De=document.createElement("canvas");De.width=128,De.height=128;const Pe=De.getContext("2d"),dt=Pe.createRadialGradient(64,64,10,64,64,60);dt.addColorStop(0,"rgba(0,0,0,0.85)"),dt.addColorStop(.5,"rgba(0,0,0,0.4)"),dt.addColorStop(1,"rgba(0,0,0,0)"),Pe.fillStyle=dt,Pe.fillRect(0,0,128,128);const Ve=new tm(De),it=new er({map:Ve,transparent:!0,opacity:.75,depthWrite:!1}),We=new ut(Ie,it);We.rotation.x=-Math.PI/2,We.position.set(0,-1.18,.2),te.add(We);const Xe=new rn(3.6,.55,3.2),pt=new ut(Xe,ie);pt.position.set(0,-.9,.2),pt.castShadow=!0,pt.receiveShadow=!0,te.add(pt);const Ct=new hh(.12,.12,.06,16),It=new Ar({color:329744,roughness:.9});[[-1.6,-1.19,1.4],[1.6,-1.19,1.4],[-1.6,-1.19,-1.2],[1.6,-1.19,-1.2]].forEach(([Ee,we,S])=>{const I=new ut(Ct,It);I.position.set(Ee,we,S),te.add(I)});const Ut=new rn(3.4,.28,1.4),at=new ut(Ut,ie);at.position.set(0,-.73,1.1),at.rotation.x=.16,at.castShadow=!0,at.receiveShadow=!0,te.add(at);const Tt=4,O=12,Zt=new rn(.18,.12,.18),$e=[];for(let Ee=0;Ee<Tt;Ee++)for(let we=0;we<O;we++){const S=Ee===2&&we===O-1,I=Ee===3&&we>=4&&we<=7,W=Ee===0&&we===0;if(I&&we>4)continue;let D;if(I){const ce=new rn(.85,.12,.18);D=new ut(ce,Ze)}else D=new ut(Zt,S?Ge:W?Z:Ze);const z=I?0:(we-(O-1)/2)*.24,de=.65+Ee*.24,ve=-.64-Ee*.035;D.position.set(z,ve,de),D.rotation.x=.16,D.userData={originalY:ve,depressTimer:0},te.add(D),$e.push(D)}y.current=()=>{const Ee=$e[Math.floor(Math.random()*$e.length)];Ee&&(Ee.userData.depressTimer=8)};const R=new rn(3.2,2.3,2.2),x=new ut(R,ie);x.position.set(0,.55,-.2),x.castShadow=!0,te.add(x);for(let Ee=0;Ee<6;Ee++){const we=new rn(2.4,.04,.04),S=new ut(we,oe);S.position.set(0,1.2-Ee*.14,-1.31),te.add(S)}const B=new rn(2.9,2,.25),X=new ut(B,oe);X.position.set(0,.55,.9),te.add(X);const Y=new Ys(2.4,1.6,8,8),se=Y.attributes.position;for(let Ee=0;Ee<se.count;Ee++){const we=se.getX(Ee),S=se.getY(Ee),I=Math.sqrt(we*we+S*S);se.setZ(Ee,Math.cos(I*.7)*.06-.06)}Y.computeVertexNormals();const ue=new ut(Y,ze);ue.position.set(0,.58,1.04),te.add(ue);const $=new rn(1.2,.22,.1),Q=new ut($,oe);Q.position.set(-.85,-.88,1.76),te.add(Q);const fe=new rn(.3,.06,.02),Te=new ut(fe,ae);Te.position.set(-1.25,-.84,1.82),te.add(Te);const me=new ut(fe,ae);me.position.set(-1.25,-.93,1.82),te.add(me);const he=new rn(.7,.03,.02),be=new ut(he,new er({color:197898}));be.position.set(-.75,-.84,1.82),te.add(be);const Le=new ut(he,new er({color:197898}));Le.position.set(-.75,-.93,1.82),te.add(Le);const Ue=new ph(.032,16,16),U=new er({color:1096065}),le=new ut(Ue,U);le.position.set(-.35,-.84,1.82),te.add(le);const J=new ut(Ue,new er({color:16717825}));J.position.set(-.35,-.93,1.82),te.add(J);const pe=new rn(1,.14,.02),ge=new ut(pe,ae);ge.position.set(.85,-.88,1.78),te.add(ge);const ne=new HS(16777215,.85);j.add(ne);const Me=new pu(62206,1.9);Me.position.set(4,5,4),Me.castShadow=!0,j.add(Me);const Se=new pu(16717825,1.3);Se.position.set(-4,3,2),j.add(Se);const mt=new pu(16777215,.9);mt.position.set(0,6,-3),j.add(mt);const nt=new VS(62206,1.8,3.8);nt.position.set(0,.6,1.3),j.add(nt);let Ft=!1,Ot={x:0,y:0},jt={x:0,y:0},cn={x:.06,y:-.15},$r={x:0,y:0};const Kr=Ee=>{Ft=!0,Ot={x:Ee.clientX,y:Ee.clientY},jt={x:0,y:0}},fo=Ee=>{const we=P.getBoundingClientRect(),S=(Ee.clientX-we.left)/we.width-.5,I=(Ee.clientY-we.top)/we.height-.5;if($r={x:S*.35,y:I*.25},!Ft)return;const W=Ee.clientX-Ot.x,D=Ee.clientY-Ot.y;jt.y=W*.007,jt.x=D*.007,cn.y+=jt.y,cn.x+=jt.x,cn.x=Math.max(-.45,Math.min(.5,cn.x)),Ot={x:Ee.clientX,y:Ee.clientY}},ea=()=>{Ft=!1},ta=Ee=>{Ee.touches.length===1&&(Ft=!0,Ot={x:Ee.touches[0].clientX,y:Ee.touches[0].clientY},jt={x:0,y:0})},ii=Ee=>{if(!Ft||Ee.touches.length!==1)return;const we=Ee.touches[0].clientX-Ot.x,S=Ee.touches[0].clientY-Ot.y;jt.y=we*.007,jt.x=S*.007,cn.y+=jt.y,cn.x+=jt.x,cn.x=Math.max(-.45,Math.min(.5,cn.x)),Ot={x:Ee.touches[0].clientX,y:Ee.touches[0].clientY}},Zr=()=>{Ft=!1};P.addEventListener("mousedown",Kr),window.addEventListener("mousemove",fo),window.addEventListener("mouseup",ea),P.addEventListener("touchstart",ta,{passive:!0}),window.addEventListener("touchmove",ii,{passive:!0}),window.addEventListener("touchend",Zr);const na=Ee=>{if(!(Ee.target.tagName==="INPUT"||Ee.target.tagName==="TEXTAREA"))if(y.current&&y.current(),Ee.key==="Enter"){if(T(!0),_.current==="shell"){const we=u.current.trim().toLowerCase(),S=[...v.current,`devops@GrayViper:~$ ${u.current}`];if(we==="help")S.push("COMMANDS: skills, projects, status, f1, whoami, clear");else if(we==="skills")S.push("STACK: Kubernetes, Docker, Terraform, FastAPI, Next.js");else if(we==="projects")S.push("REPOS: Career_Genie, hi_links, Cura-AI-Health");else if(we==="status")S.push("STATUS: 100% Cluster Health · 99.9% Uptime · 6/6 Pods");else if(we==="f1")S.push("F1 SPEED: 328 km/h · DRS OPEN · 1.82s Pitstop Deploy");else if(we==="whoami")S.push("USER: Chakka Chinni Krishna (@GrayViper) · LPU B.Tech CSE");else if(we==="clear"){p(["COMMODORE PET 8296 DEVOPS OS v5.0",""]),h("");return}else we&&S.push(`COMMAND EXECUTED: "${we}"`);p(S),h("")}}else Ee.key==="Backspace"?(T(!1),_.current==="shell"&&h(we=>we.slice(0,-1))):Ee.key.length===1&&!Ee.ctrlKey&&!Ee.metaKey&&(T(!1),_.current==="shell"&&h(we=>we+Ee.key))};window.addEventListener("keydown",na),A.current=()=>{cn={x:.06,y:-.15},jt={x:0,y:0}};let Nn=0;const Vi=["> COMMODORE PET 8296 DEVOPS OS [ONLINE]","> OPERATOR: CHINNI KRISHNA (@GrayViper)","> ORCHESTRATION: AWS EKS 1.30 (ACTIVE)","> GITOPS: ARGOCD SYNCHRONIZED [1.82s SLA]","> CI/CD: GITHUB ACTIONS PIPELINES (99.9%)","> BACKEND: FASTAPI REST + MONGODB ATLAS","> AGENTIC AI: MULTI-AGENT WORKFLOWS (XEBIA)","> READY FOR COMMAND INPUT..."],ia=["NODE-EKS-01 [READY] 2.4GHz / 8GB RAM","NODE-EKS-02 [READY] 2.4GHz / 8GB RAM","POD-CAREER-GENIE [RUNNING] 100% HEALTH","POD-HI-LINKS-WEB [RUNNING] 100% HEALTH","POD-CURA-AI-SVC [RUNNING] 100% HEALTH","INGRESS-ALB [HEALTHY] 0 DOWNTIME"],Jr="01010110 K8S DOCKER TF AWS NEXT FASTAPI REPO GITHUB 01",ho=()=>{Nn++;const Ee=E.current;let we="#00f2fe",S="#ff1801",I="#10b981";Ee==="green"?(we="#10b981",S="#4ade80",I="#22c55e"):Ee==="amber"?(we="#fdb813",S="#ff8800",I="#fbbf24"):Ee==="red"&&(we="#ff1801",S="#fdb813",I="#00f2fe"),nt.color.set(we),N.fillStyle="#03060f",N.fillRect(0,0,512,384),N.fillStyle="rgba(0, 242, 254, 0.04)";for(let D=0;D<384;D+=4)N.fillRect(0,D,512,1.5);N.strokeStyle=`${we}40`,N.lineWidth=6,N.strokeRect(8,8,496,368);const W=_.current;if(W==="telemetry"){N.fillStyle=`${we}25`,N.fillRect(14,14,484,32),N.fillStyle=we,N.font='bold 15px "Fira Code", monospace',N.fillText("🏁 DEVOPS & FULL-STACK TELEMETRY HUD",24,36),N.font='14px "Fira Code", monospace';const D=Math.min(Vi.length,Math.floor(Nn/16)+1);for(let z=0;z<D;z++){const de=76+z*28;z===0?N.fillStyle=I:z===1?N.fillStyle=S:z===2?N.fillStyle=we:N.fillStyle="#cbd5e1",N.fillText(Vi[z],24,de)}if(Math.floor(Nn/15)%2===0){N.fillStyle=we;const z=76+Math.min(D,Vi.length-1)*28;N.fillRect(470,z-12,10,15)}}else if(W==="cluster"){N.fillStyle=`${we}25`,N.fillRect(14,14,484,32),N.fillStyle=we,N.font='bold 15px "Fira Code", monospace',N.fillText("☸️ KUBERNETES CLUSTER & POD TOPOLOGY",24,36),N.font='13px "Fira Code", monospace';for(let D=0;D<ia.length;D++)N.fillStyle=I,N.fillText(`✔ ${ia[D]}`,24,80+D*32);N.fillStyle=S,N.fillText("> ALL 6/6 MICROSERVICES HEALTHY",24,300)}else if(W==="f1")N.fillStyle="rgba(255, 24, 1, 0.25)",N.fillRect(14,14,484,32),N.fillStyle="#ff1801",N.font='bold 15px "Fira Code", monospace',N.fillText("🏎️ ORACLE RED BULL TELEMETRY FEED",24,36),N.fillStyle="#fff",N.font='bold 36px "Fira Code", monospace',N.fillText("328 KM/H",24,110),N.fillStyle=we,N.font='14px "Fira Code", monospace',N.fillText("GEAR: 7 | RPM: 11,400 | DRS: ACTIVE",24,150),N.fillText("PITSTOP DEPLOYMENT SLA: 1.82s",24,185),N.fillText("PROMETHEUS SCRAPING: 60 FPS",24,220),N.fillText("DRIVER: @GrayViper (CHINNI KRISHNA)",24,255);else if(W==="matrix"){N.fillStyle=I,N.font='13px "Fira Code", monospace',N.fillText("// STREAMING LIVE CLOUD LOGS...",24,40);for(let D=0;D<10;D++){const z=Jr.substring((Nn+D*5)%30,(Nn+D*5)%30+26);N.fillStyle=D%2===0?I:we,N.fillText(`> [LOG_${D+100}] ${z}`,24,75+D*28)}}else{N.fillStyle=`${we}25`,N.fillRect(14,14,484,32),N.fillStyle=we,N.font='bold 15px "Fira Code", monospace',N.fillText("💻 DIRECT KEYBOARD SHELL (TYPE ANYWHERE)",24,36);const D=v.current;N.font='13px "Fira Code", monospace';const z=7,de=Math.max(0,D.length-z);for(let ce=de;ce<D.length;ce++)N.fillStyle="#94a3b8",N.fillText(D[ce],24,76+(ce-de)*26);const ve=76+Math.min(D.length-de,z)*26;if(N.fillStyle=we,N.fillText(`devops@GrayViper:~$ ${u.current}`,24,ve),Math.floor(Nn/15)%2===0){const ce=N.measureText(`devops@GrayViper:~$ ${u.current}`).width;N.fillRect(26+ce,ve-12,9,15)}}ee.needsUpdate=!0,Nn%20===0&&le.material.color.set(Math.random()>.35?1096065:339992),$e.forEach(D=>{D.userData.depressTimer>0?(D.userData.depressTimer--,D.position.y=D.userData.originalY-.04):D.position.y=D.userData.originalY})};let ra;const po=()=>{ho(),Ft||(jt.x*=.94,jt.y*=.94,cn.x+=jt.x,cn.y+=jt.y);const Ee=m.current?K:V;q.position.lerp(Ee,.08);const we=cn.y+$r.x+(Ft||m.current?0:Math.sin(Nn*.015)*.035),S=cn.x-$r.y;te.rotation.y+=(we-te.rotation.y)*.08,te.rotation.x+=(S-te.rotation.x)*.08,te.position.y=-.08+Math.sin(Nn*.025)*.04,G.render(j,q),ra=requestAnimationFrame(po)};po();const mo=()=>{if(!P)return;const Ee=P.clientWidth||540,we=P.clientHeight||420;q.aspect=Ee/we,q.updateProjectionMatrix(),G.setSize(Ee,we)};return window.addEventListener("resize",mo),()=>{P.removeEventListener("mousedown",Kr),window.removeEventListener("mousemove",fo),window.removeEventListener("mouseup",ea),P.removeEventListener("touchstart",ta),window.removeEventListener("touchmove",ii),window.removeEventListener("touchend",Zr),window.removeEventListener("keydown",na),window.removeEventListener("resize",mo),cancelAnimationFrame(ra),P&&G.domElement&&P.removeChild(G.domElement),G.dispose()}},[]);const C=P=>{T(),i(P)},g=P=>{T(),s(P)},b=()=>{T(),c(!l)};return w.jsxs("div",{className:"glass-card-web",style:{padding:"24px",borderRadius:"24px",position:"relative",overflow:"hidden"},children:[w.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"14px",flexWrap:"wrap",gap:"10px"},children:[w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[w.jsx("span",{className:"section-tag",style:{fontSize:"0.72rem",padding:"3px 10px"},children:"🖥️ COMMODORE PET 8296 (EDH.DEV 3D)"}),w.jsx("span",{style:{fontSize:"0.72rem",fontFamily:"var(--font-mono)",color:"var(--cyber-cyan)"},children:"THREE.JS INTERACTIVE"})]}),w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[w.jsx("div",{style:{display:"flex",gap:"4px",background:"rgba(255,255,255,0.05)",padding:"3px 6px",borderRadius:"8px",border:"1px solid var(--border-subtle)"},children:[{id:"cyan",color:"#00f2fe"},{id:"green",color:"#10b981"},{id:"amber",color:"#fdb813"},{id:"red",color:"#ff1801"}].map(P=>w.jsx("button",{onClick:()=>g(P.id),style:{width:"14px",height:"14px",borderRadius:"50%",background:P.color,border:r===P.id?"2px solid #fff":"none",cursor:"pointer",padding:0},title:`${P.id} phosphor CRT mode`},P.id))}),w.jsxs("button",{onClick:b,style:{background:l?"var(--f1-red)":"rgba(255,255,255,0.05)",border:`1px solid ${l?"var(--f1-red)":"var(--border-subtle)"}`,color:"#fff",borderRadius:"8px",padding:"5px 8px",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",fontSize:"0.7rem",fontFamily:"var(--font-mono)"},title:l?"Zoom Out to Full Computer":"Inspect Screen Up Close",children:[l?w.jsx(my,{size:12}):w.jsx(py,{size:12}),w.jsx("span",{children:l?"Zoom Out":"Inspect"})]}),w.jsx("button",{onClick:()=>o(!a),style:{background:"rgba(255,255,255,0.05)",border:"1px solid var(--border-subtle)",color:a?"var(--cyber-cyan)":"var(--text-dim)",borderRadius:"8px",padding:"5px 8px",cursor:"pointer",display:"flex",alignItems:"center"},title:a?"Mute Key Clicks":"Enable Key Clicks",children:a?w.jsx(Sy,{size:13}):w.jsx(My,{size:13})}),w.jsx("button",{onClick:()=>A.current&&A.current(),style:{background:"rgba(255,255,255,0.05)",border:"1px solid var(--border-subtle)",color:"var(--text-dim)",borderRadius:"8px",padding:"5px 8px",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",fontSize:"0.7rem",fontFamily:"var(--font-mono)"},title:"Reset 3D camera angle",children:w.jsx(_y,{size:12})})]})]}),w.jsx("div",{ref:e,style:{width:"100%",height:t?"clamp(400px, 54vh, 580px)":"440px",cursor:"grab",position:"relative",display:"flex",alignItems:"center",justifyContent:"center",userSelect:"none"},title:"Click and drag to rotate the 3D computer in 360°!"}),w.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:"6px",marginTop:"12px"},children:[{id:"telemetry",label:"Telemetry",icon:w.jsx(j0,{size:12})},{id:"shell",label:"Shell (Type)",icon:w.jsx(W0,{size:12})},{id:"cluster",label:"Cluster",icon:w.jsx(uy,{size:12})},{id:"f1",label:"F1 Speed",icon:w.jsx(Y0,{size:12})},{id:"matrix",label:"Logs",icon:w.jsx(X0,{size:12})}].map(P=>w.jsxs("button",{onClick:()=>C(P.id),style:{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"4px",background:n===P.id?"var(--f1-red)":"rgba(255,255,255,0.04)",color:n===P.id?"#fff":"var(--text-dim)",border:`1px solid ${n===P.id?"var(--f1-red)":"var(--border-subtle)"}`,padding:"7px 0",borderRadius:"8px",fontSize:"0.72rem",fontFamily:"var(--font-mono)",fontWeight:"700",cursor:"pointer",transition:"all 0.2s"},children:[P.icon," ",P.label]},P.id))}),w.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"12px",paddingTop:"12px",borderTop:"1px solid var(--border-subtle)",fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"var(--text-dim)"},children:[w.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[w.jsx(gy,{size:13,color:"var(--cyber-cyan)"})," Drag to spin 3D model · Type on keyboard to interact"]}),w.jsx("span",{style:{color:"var(--terminal-green)",fontWeight:"700"},children:"● THREE.JS 3D WEBGL"})]})]})}function Hw(){const t=e=>{e&&e.preventDefault();const n=document.getElementById("skills");n&&n.scrollIntoView({behavior:"smooth"})};return w.jsxs("section",{id:"hero",style:{width:"100vw",minHeight:"100vh",position:"relative",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",padding:"75px 20px 24px",boxSizing:"border-box",overflow:"hidden"},children:[w.jsxs("div",{style:{width:"100%",maxWidth:"1280px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"12px",zIndex:20},children:[w.jsxs("div",{style:{background:"rgba(7, 10, 18, 0.85)",backdropFilter:"blur(16px)",border:"1px solid rgba(0, 242, 254, 0.3)",borderRadius:"12px",padding:"6px 14px",display:"flex",alignItems:"center",gap:"10px"},children:[w.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#10b981",boxShadow:"0 0 8px #10b981"}}),w.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"0.78rem",color:"var(--cyber-cyan)",fontWeight:"700"},children:"*** COMMODORE PET 8296 DEVOPS OS // 64K RAM READY ***"})]}),w.jsxs("div",{style:{background:"rgba(7, 10, 18, 0.85)",backdropFilter:"blur(16px)",border:"1px solid rgba(255, 24, 1, 0.3)",borderRadius:"12px",padding:"6px 14px",display:"flex",alignItems:"center",gap:"12px",fontFamily:"var(--font-mono)",fontSize:"0.76rem"},children:[w.jsxs("span",{style:{color:"#fff"},children:["OPERATOR: ",w.jsx("strong",{style:{color:"var(--f1-red)"},children:"CHINNI KRISHNA"})," (@GrayViper)"]}),w.jsx("span",{style:{color:"var(--text-dim)"},children:"|"}),w.jsx("span",{style:{color:"var(--terminal-green)"},children:"B.TECH CSE @ LPU (CGPA 7.2)"})]})]}),w.jsx("div",{style:{width:"100%",maxWidth:"1200px",flex:1,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"relative",zIndex:10,margin:"10px 0"},children:w.jsx(Gw,{isFullScreenLanding:!0})}),w.jsxs("div",{style:{width:"100%",maxWidth:"1280px",display:"flex",flexDirection:"column",alignItems:"center",gap:"14px",zIndex:20},children:[w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",flexWrap:"wrap",justifyContent:"center"},children:[w.jsxs("button",{onClick:t,className:"btn-primary",style:{padding:"14px 36px",fontSize:"1rem",letterSpacing:"0.04em",boxShadow:"0 8px 30px var(--f1-red-glow)",display:"flex",alignItems:"center",gap:"10px"},children:[w.jsx("span",{children:"▶ ENTER FULL PORTFOLIO"}),w.jsx(sy,{size:18,className:"animate-bounce"})]}),w.jsxs("div",{style:{display:"flex",gap:"8px"},children:[w.jsxs("a",{href:"https://github.com/GrayViper",target:"_blank",rel:"noreferrer",style:{display:"inline-flex",alignItems:"center",gap:"6px",fontSize:"0.82rem",fontWeight:"600",color:"var(--text-dim)",textDecoration:"none",padding:"10px 16px",border:"1px solid var(--border-subtle)",borderRadius:"12px",background:"rgba(7, 10, 18, 0.85)",backdropFilter:"blur(12px)",transition:"all 0.2s"},onMouseEnter:e=>{e.currentTarget.style.borderColor="var(--f1-red)",e.currentTarget.style.color="#fff"},onMouseLeave:e=>{e.currentTarget.style.borderColor="var(--border-subtle)",e.currentTarget.style.color="var(--text-dim)"},children:[w.jsx(uc,{size:16})," @GrayViper"]}),w.jsxs("a",{href:"https://www.linkedin.com/in/chinni-krishna8",target:"_blank",rel:"noreferrer",style:{display:"inline-flex",alignItems:"center",gap:"6px",fontSize:"0.82rem",fontWeight:"600",color:"var(--text-dim)",textDecoration:"none",padding:"10px 16px",border:"1px solid var(--border-subtle)",borderRadius:"12px",background:"rgba(7, 10, 18, 0.85)",backdropFilter:"blur(12px)",transition:"all 0.2s"},onMouseEnter:e=>{e.currentTarget.style.borderColor="var(--cyber-cyan)",e.currentTarget.style.color="#fff"},onMouseLeave:e=>{e.currentTarget.style.borderColor="var(--border-subtle)",e.currentTarget.style.color="var(--text-dim)"},children:[w.jsx(eh,{size:16})," LinkedIn"]})]})]}),w.jsxs("div",{style:{fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"var(--text-dim)",letterSpacing:"0.08em",display:"flex",alignItems:"center",gap:"6px",cursor:"pointer"},onClick:t,children:[w.jsx("span",{style:{color:"var(--cyber-cyan)"},children:"▼"}),w.jsx("span",{children:"SCROLL OR CLICK TO ENTER SYSTEM"}),w.jsx("span",{style:{color:"var(--cyber-cyan)"},children:"▼"})]})]})]})}function Ww(){const[t,e]=Ke.useState("all"),n=[{id:"all",label:"All Stack"},{id:"cloud",label:"Cloud & IaC"},{id:"cicd",label:"CI/CD & Linux"},{id:"dev",label:"Full-Stack & APIs"},{id:"data",label:"Observability & DBs"},{id:"ai",label:"Agentic AI & LLMs"}],i=[{name:"Kubernetes",cat:"cloud",level:"85%",icon:"☸️",desc:"AWS EKS clusters, Pod scheduling, Helm charts, ingress controllers, rolling updates",tag:"Orchestration"},{name:"Docker",cat:"cloud",level:"92%",icon:"🐳",desc:"Multi-stage Dockerfiles, image optimization, Trivy security scans, container networks",tag:"Containers"},{name:"AWS Cloud",cat:"cloud",level:"84%",icon:"☁️",desc:"EKS, EC2, S3, IAM policies, VPC networking, CloudWatch metrics & auto-scaling",tag:"Cloud"},{name:"Terraform",cat:"cloud",level:"82%",icon:"🏗️",desc:"Infrastructure as Code, modular configurations, remote S3 state & DynamoDB locking",tag:"IaC"},{name:"GitHub Actions",cat:"cicd",level:"90%",icon:"⚡",desc:"Automated CI/CD workflows, linting, unit testing, container build & deploy pipelines",tag:"CI/CD"},{name:"Linux & Shell Scripting",cat:"cicd",level:"88%",icon:"🐧",desc:"Bash scripting, system administration, process management, cron automation & permissions",tag:"OS & Scripting"},{name:"Git & GitOps",cat:"cicd",level:"90%",icon:"🐙",desc:"Git branching models, PR workflows, ArgoCD continuous delivery & commit hygiene",tag:"GitOps"},{name:"Postman",cat:"cicd",level:"88%",icon:"📮",desc:"API testing, automated collection runs, webhook integration & endpoint mocking",tag:"Testing"},{name:"FastAPI",cat:"dev",level:"88%",icon:"🚀",desc:"High-performance async Python REST APIs, Pydantic data validation & JWT auth",tag:"Backend"},{name:"Python",cat:"dev",level:"90%",icon:"🐍",desc:"Automation scripting, backend engineering, data modeling & AI integrations",tag:"Language"},{name:"React",cat:"dev",level:"92%",icon:"⚛️",desc:"Vite, hooks, component architecture, responsive UI & state management",tag:"Frontend"},{name:"Next.js",cat:"dev",level:"85%",icon:"▲",desc:"App Router, server-side rendering, API routes, TypeScript & Vercel deployment",tag:"Full-Stack"},{name:"TypeScript",cat:"dev",level:"84%",icon:"🔷",desc:"Type-safe full-stack engineering with Next.js and Drizzle ORM schemas",tag:"Type-Safety"},{name:"Flask",cat:"dev",level:"82%",icon:"🌶️",desc:"Python microservice backends, SQLite/MongoDB models, Jinja templating & auth",tag:"Microservices"},{name:"C++",cat:"dev",level:"80%",icon:"⚡",desc:"Object-oriented programming, data structures, algorithm efficiency & memory handling",tag:"Core"},{name:"Prometheus & Grafana",cat:"data",level:"82%",icon:"📊",desc:"Cluster metric scraping, telemetry dashboards, threshold alerts & monitoring",tag:"Observability"},{name:"MongoDB Atlas",cat:"data",level:"86%",icon:"🍃",desc:"NoSQL document schema design, Atlas cloud clusters, aggregation pipelines",tag:"NoSQL"},{name:"PostgreSQL & MySQL",cat:"data",level:"82%",icon:"🐬",desc:"Relational DB design, SQL queries, Drizzle ORM migrations & connection pooling",tag:"RDBMS"},{name:"Agentic AI Workflows",cat:"ai",level:"88%",icon:"🤖",desc:"Xebia industry training: designing multi-agent AI execution loops & LLM pipelines",tag:"Agentic AI"},{name:"Gemini API & LLMs",cat:"ai",level:"86%",icon:"✨",desc:"Context-augmented prompts, health diagnostics, structured JSON schemas & chat flows",tag:"GenAI"},{name:"Vercel & Render",cat:"ai",level:"90%",icon:"▲",desc:"Serverless deployment, edge functions, GitHub auto-deploy & environment config",tag:"Cloud Deploy"}],r=t==="all"?i:i.filter(s=>s.cat===t);return w.jsx("section",{id:"skills",style:{padding:"100px 0"},children:w.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[w.jsxs("div",{style:{textAlign:"center",marginBottom:"48px"},children:[w.jsx("span",{className:"section-tag section-tag-cyan",style:{marginBottom:"14px"},children:"⚡ DEVOPS & CLOUD INFRASTRUCTURE MATRIX"}),w.jsxs("h2",{style:{fontSize:"2.6rem",fontWeight:"900",letterSpacing:"-0.03em"},children:["Technical ",w.jsx("span",{className:"gradient-text",children:"Skills & Tooling"})]}),w.jsx("p",{style:{color:"var(--text-dim)",marginTop:"10px",fontSize:"0.96rem",maxWidth:"540px",margin:"10px auto 0"},children:"Engineered for high-availability cloud systems, containerization, CI/CD pipelines & full-stack platforms"})]}),w.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",justifyContent:"center",marginBottom:"40px"},children:n.map(s=>w.jsx("button",{onClick:()=>e(s.id),style:{background:t===s.id?"linear-gradient(135deg, var(--web-red) 0%, var(--web-red-dark) 100%)":"rgba(255,255,255,0.04)",color:t===s.id?"#ffffff":"var(--text-dim)",border:`1px solid ${t===s.id?"var(--web-red)":"var(--border-subtle)"}`,padding:"8px 20px",borderRadius:"10px",fontSize:"0.84rem",fontWeight:"700",cursor:"pointer",transition:"all 0.2s ease",fontFamily:"var(--font-body)",boxShadow:t===s.id?"0 4px 18px var(--web-red-glow)":"none"},children:s.label},s.id))}),w.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"18px"},children:r.map((s,a)=>w.jsxs("div",{className:"glass-card-web",style:{padding:"22px"},children:[w.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"},children:[w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[w.jsx("span",{style:{fontSize:"1.4rem",width:"40px",height:"40px",background:"rgba(255,42,95,0.1)",border:"1px solid rgba(255,42,95,0.25)",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center"},children:s.icon}),w.jsxs("div",{children:[w.jsx("h3",{style:{fontSize:"1.02rem",fontWeight:"800",color:"#fff"},children:s.name}),w.jsx("span",{style:{fontSize:"0.68rem",fontFamily:"var(--font-mono)",color:"var(--cyber-cyan)"},children:s.tag})]})]}),w.jsx("span",{style:{fontSize:"0.74rem",fontFamily:"var(--font-mono)",color:"var(--terminal-green)",fontWeight:"700",background:"rgba(16,185,129,0.1)",border:"1px solid rgba(16,185,129,0.25)",padding:"2px 8px",borderRadius:"6px"},children:s.level})]}),w.jsx("p",{style:{fontSize:"0.82rem",color:"var(--text-dim)",lineHeight:"1.6",marginBottom:"16px",minHeight:"44px"},children:s.desc}),w.jsx("div",{style:{height:"4px",width:"100%",background:"rgba(255,255,255,0.06)",borderRadius:"2px",overflow:"hidden"},children:w.jsx("div",{style:{height:"100%",width:s.level,background:"linear-gradient(90deg, var(--web-red) 0%, var(--cyber-cyan) 100%)",borderRadius:"2px",boxShadow:"0 0 8px var(--web-red-glow)"}})})]},a))})]})})}function Xw(){const t=[{id:"career-genie",title:"Career_Genie",subtitle:"AI Job & Scholarship Discovery Platform",date:"June 2026",status:"Live on Vercel & Render",statusColor:"#10b981",pipeline:"CI/CD Passed · Docker Ready",summary:"Full-stack web platform using React and Vite, integrating high-performance async REST APIs for job, internship, and scholarship discovery. Powered by FastAPI backend with MongoDB Atlas cloud database and JWT auth.",tags:["React","FastAPI","MongoDB Atlas","Vercel","Render","JWT Auth","CI/CD"],highlights:["Automated REST API integration for real-time job & scholarship discovery","JWT-based secure authentication & personalized application tracking","Multi-stage Docker deployment pipeline with Render backend & Vercel frontend"],githubUrl:"https://github.com/GrayViper/Carrier_Genie",demoUrl:null},{id:"hi-links",title:"hi_links",subtitle:"Scalable Full-Stack Link Management System",date:"May 2026",status:"Live on Vercel",statusColor:"#00f2fe",pipeline:"Next.js SSR · Neon Postgres · Drizzle",summary:"High-performance scalable web application built with Next.js, TypeScript, Drizzle ORM, and Neon PostgreSQL for structured link management, analytics, and instant sharing.",tags:["Next.js","TypeScript","Drizzle ORM","Neon Postgres","Vercel","Tailwind"],highlights:["Type-safe database operations with Drizzle ORM & serverless Postgres","Optimized server-side rendering (SSR) and edge-cached static pages","Automated Vercel CI/CD deployment on every GitHub repository push"],githubUrl:"https://github.com/GrayViper/hi_links",demoUrl:null},{id:"cura-ai-health",title:"Cura-AI-Health",subtitle:"AI-Powered Health Assistant & Diagnostic System",date:"August 2026",status:"Deployed & Live",statusColor:"#ff2a5f",pipeline:"Gemini 1.5 API · Flask · Chart.js",summary:"Full-stack AI health assistant application using Python Flask, SQLite, and Google Gemini API — providing real-time symptom analysis, interactive nutrition planning, and mental wellness tracking.",tags:["Python","Flask","Gemini API","SQLite","Chart.js","Bootstrap","Vercel"],highlights:["Context-aware symptom analysis & personalized diet generation via Gemini API","Crisis keyword detection, automated health risk alerts & Chart.js dashboards","Role-based authentication, admin dashboard, guest mode & session storage"],githubUrl:"https://github.com/GrayViper/cura-ai-health",demoUrl:"https://cura-ai-health.vercel.app"}];return w.jsx("section",{id:"projects",style:{padding:"100px 0"},children:w.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[w.jsxs("div",{style:{textAlign:"center",marginBottom:"48px"},children:[w.jsx("span",{className:"section-tag",style:{marginBottom:"14px"},children:"🚀 PRODUCTION SYSTEMS & REPOSITORIES"}),w.jsxs("h2",{style:{fontSize:"2.6rem",fontWeight:"900",letterSpacing:"-0.03em"},children:["Featured ",w.jsx("span",{className:"gradient-text",children:"DevOps Projects"})]}),w.jsxs("p",{style:{color:"var(--text-dim)",marginTop:"10px",fontSize:"0.96rem"},children:["Architected and deployed by ",w.jsx("a",{href:"https://github.com/GrayViper",target:"_blank",rel:"noreferrer",style:{color:"var(--cyber-cyan)",textDecoration:"none",fontWeight:"700"},children:"github.com/GrayViper"})]})]}),w.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(340px, 1fr))",gap:"26px"},children:t.map(e=>w.jsxs("div",{className:"glass-card-web",style:{padding:"28px",display:"flex",flexDirection:"column"},children:[w.jsx("div",{style:{height:"3px",background:`linear-gradient(90deg, ${e.statusColor}, var(--web-red))`,marginBottom:"20px",marginLeft:"-28px",marginRight:"-28px",marginTop:"-28px",borderRadius:"20px 20px 0 0"}}),w.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"14px",flexWrap:"wrap",gap:"8px"},children:[w.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"5px",fontSize:"0.72rem",fontFamily:"var(--font-mono)",fontWeight:"700",color:e.statusColor,background:`${e.statusColor}18`,border:`1px solid ${e.statusColor}44`,padding:"3px 10px",borderRadius:"9999px"},children:[w.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:e.statusColor,display:"inline-block"}}),e.status]}),w.jsx("span",{style:{fontSize:"0.70rem",fontFamily:"var(--font-mono)",color:"var(--text-dim)",background:"rgba(255,255,255,0.04)",padding:"3px 8px",borderRadius:"6px",border:"1px solid var(--border-subtle)"},children:e.date})]}),w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"0.72rem",fontFamily:"var(--font-mono)",color:"var(--cyber-cyan)",background:"rgba(0, 242, 254, 0.08)",border:"1px solid rgba(0, 242, 254, 0.2)",padding:"4px 10px",borderRadius:"8px",marginBottom:"14px"},children:[w.jsx(W0,{size:13,color:"var(--cyber-cyan)"}),w.jsx("span",{children:e.pipeline})]}),w.jsx("h3",{style:{fontSize:"1.45rem",fontWeight:"800",color:"#fff",marginBottom:"4px"},children:e.title}),w.jsx("p",{style:{fontSize:"0.84rem",color:"var(--web-red)",fontWeight:"600",marginBottom:"12px",fontFamily:"var(--font-mono)"},children:e.subtitle}),w.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-dim)",lineHeight:"1.65",marginBottom:"18px"},children:e.summary}),w.jsx("div",{style:{marginBottom:"18px",flex:1},children:e.highlights.map((n,i)=>w.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"8px",marginBottom:"8px",fontSize:"0.82rem",color:"var(--text-muted)"},children:[w.jsx(oy,{size:14,color:"var(--terminal-green)",style:{marginTop:"3px",flexShrink:0}}),w.jsx("span",{children:n})]},i))}),w.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"22px"},children:e.tags.map((n,i)=>w.jsx("span",{style:{fontSize:"0.72rem",fontFamily:"var(--font-mono)",padding:"3px 9px",borderRadius:"6px",background:"rgba(255,42,95,0.08)",border:"1px solid rgba(255,42,95,0.2)",color:"var(--text-muted)"},children:n},i))}),w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",paddingTop:"16px",borderTop:"1px solid var(--border-subtle)"},children:[w.jsxs("a",{href:e.githubUrl,target:"_blank",rel:"noreferrer",className:"btn-primary",style:{padding:"8px 16px",fontSize:"0.82rem",flex:1,justifyContent:"center"},children:[w.jsx(uc,{size:15})," GitHub Code"]}),e.demoUrl&&w.jsxs("a",{href:e.demoUrl,target:"_blank",rel:"noreferrer",className:"btn-secondary",style:{padding:"8px 16px",fontSize:"0.82rem",flex:1,justifyContent:"center"},children:[w.jsx(dy,{size:14})," Live Web App"]})]})]},e.id))})]})})}function jw(){const[t,e]=Ke.useState(""),[n,i]=Ke.useState([{type:"system",text:"🏁 CHINNI KRISHNA // DEVOPS & AGENTIC AI CONTROL PLANE v3.2 [Linux x86_64]"},{type:"system",text:"Engineer: @GrayViper (github.com/GrayViper) • B.Tech CSE @ Lovely Professional University"},{type:"info",text:'Type "help", "skills", "projects", "status", or click the quick command chips below.'}]),r=Ke.useRef(null);Ke.useEffect(()=>{var o;(o=r.current)==null||o.scrollIntoView({behavior:"smooth"})},[n]);const s=o=>{const l=o.trim().toLowerCase();if(!l)return;const c=[...n,{type:"user",text:`devops@GrayViper:~$ ${o}`}];switch(l){case"help":c.push({type:"output",text:`AVAILABLE DEVOPS CLI COMMANDS:
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
          building scalable REST APIs with FastAPI and Next.js, and implementing Agentic AI loops.`});break;case"clear":i([]),e("");return;default:c.push({type:"error",text:`Command not recognized: "${o}". Type "help" or click command buttons.`});break}i(c),e("")},a=o=>{o.preventDefault(),s(t)};return w.jsx("section",{id:"terminal",style:{padding:"80px 0"},children:w.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[w.jsxs("div",{style:{textAlign:"center",marginBottom:"40px"},children:[w.jsx("span",{className:"section-tag section-tag-green",style:{marginBottom:"14px"},children:"💻 INTERACTIVE CLI PLAYGROUND"}),w.jsxs("h2",{style:{fontSize:"2.6rem",fontWeight:"900",letterSpacing:"-0.03em"},children:["DevOps ",w.jsx("span",{className:"gradient-text",children:"Terminal Engine"})]}),w.jsx("p",{style:{color:"var(--text-dim)",marginTop:"10px",fontSize:"0.96rem"},children:"Test commands, inspect cluster status & explore system telemetry in real time"})]}),w.jsxs("div",{className:"glass-card-web",style:{padding:"24px",maxWidth:"950px",margin:"0 auto"},children:[w.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingBottom:"14px",borderBottom:"1px solid var(--border-subtle)"},children:[w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[w.jsx("span",{style:{width:"12px",height:"12px",borderRadius:"50%",background:"var(--f1-red)",boxShadow:"0 0 8px var(--f1-red)"}}),w.jsx("span",{style:{width:"12px",height:"12px",borderRadius:"50%",background:"var(--f1-yellow)",boxShadow:"0 0 8px var(--f1-yellow)"}}),w.jsx("span",{style:{width:"12px",height:"12px",borderRadius:"50%",background:"#10b981",boxShadow:"0 0 8px #10b981"}}),w.jsxs("span",{style:{fontFamily:"var(--font-mono)",fontSize:"0.84rem",color:"var(--text-muted)",marginLeft:"10px",display:"flex",alignItems:"center",gap:"6px"},children:[w.jsx(j0,{size:14,color:"var(--cyber-cyan)"})," devops@GrayViper:~/control-plane"]})]}),w.jsx("a",{href:"https://github.com/GrayViper",target:"_blank",rel:"noreferrer",style:{fontSize:"0.74rem",fontFamily:"var(--font-mono)",padding:"3px 12px",borderRadius:"9999px",background:"rgba(255, 24, 1, 0.12)",color:"var(--f1-red)",border:"1px solid rgba(255, 24, 1, 0.3)",fontWeight:"700",textDecoration:"none"},children:"@GrayViper ↗"})]}),w.jsxs("div",{style:{background:"#040711",borderRadius:"14px",border:"1px solid rgba(255, 24, 1, 0.2)",padding:"20px",marginTop:"16px",minHeight:"280px",maxHeight:"360px",overflowY:"auto",fontFamily:"var(--font-mono)",fontSize:"0.88rem",lineHeight:"1.65"},children:[n.map((o,l)=>w.jsxs("div",{style:{marginBottom:"6px",whiteSpace:"pre-wrap"},children:[o.type==="user"&&w.jsx("span",{style:{color:"var(--cyber-cyan)",fontWeight:"700"},children:o.text}),o.type==="system"&&w.jsx("span",{style:{color:"var(--text-dim)"},children:o.text}),o.type==="info"&&w.jsx("span",{style:{color:"var(--text-muted)"},children:o.text}),o.type==="cyan"&&w.jsx("span",{style:{color:"var(--cyber-cyan)"},children:o.text}),o.type==="green"&&w.jsx("span",{style:{color:"#10b981"},children:o.text}),o.type==="red"&&w.jsx("span",{style:{color:"var(--f1-red)",fontWeight:"bold"},children:o.text}),o.type==="output"&&w.jsx("span",{style:{color:"var(--text-main)"},children:o.text}),o.type==="error"&&w.jsx("span",{style:{color:"#ef4444"},children:o.text})]},l)),w.jsx("div",{ref:r})]}),w.jsxs("form",{onSubmit:a,style:{marginTop:"14px",display:"flex",gap:"10px"},children:[w.jsxs("div",{style:{flex:1,display:"flex",alignItems:"center",background:"#040711",border:"1px solid var(--border-subtle)",borderRadius:"12px",padding:"0 14px"},children:[w.jsx("span",{style:{color:"var(--f1-red)",fontFamily:"var(--font-mono)",fontSize:"0.85rem"},children:"devops@GrayViper:~$"}),w.jsx("input",{type:"text",value:t,onChange:o=>e(o.target.value),placeholder:"Type command ('help', 'skills', 'status', 'projects', 'f1')...",style:{width:"100%",background:"transparent",border:"none",outline:"none",color:"#fff",fontFamily:"var(--font-mono)",fontSize:"0.86rem",padding:"12px 8px"}})]}),w.jsxs("button",{type:"submit",className:"btn-primary",style:{padding:"0 22px",fontSize:"0.84rem",borderRadius:"12px"},children:[w.jsx(vy,{size:14})," Run"]})]}),w.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"16px",alignItems:"center"},children:[w.jsx("span",{style:{fontSize:"0.78rem",color:"var(--text-dim)",fontFamily:"var(--font-mono)"},children:"Quick Commands:"}),["skills","projects","status","f1","certs","whoami","clear"].map(o=>w.jsx("button",{onClick:()=>s(o),style:{background:"rgba(255, 255, 255, 0.04)",border:"1px solid var(--border-subtle)",color:"var(--cyber-cyan)",borderRadius:"8px",padding:"5px 12px",fontSize:"0.76rem",fontFamily:"var(--font-mono)",fontWeight:"700",cursor:"pointer",transition:"all 0.2s"},onMouseEnter:l=>{l.target.style.borderColor="var(--f1-red)",l.target.style.background="rgba(255, 24, 1, 0.15)"},onMouseLeave:l=>{l.target.style.borderColor="var(--border-subtle)",l.target.style.background="rgba(255, 255, 255, 0.04)"},children:o},o))]})]})]})})}function Yw(){const t=[{title:"Python: Basics to Advance",issuer:"Edtechniketan",date:"July 2026",icon:"🐍",color:"var(--cyber-cyan)",colorBg:"rgba(0, 242, 254, 0.08)",colorBorder:"rgba(0, 242, 254, 0.25)"},{title:"Database Management",issuer:"Infosys Springboard",date:"June 2026",icon:"🗄️",color:"var(--terminal-green)",colorBg:"rgba(16, 185, 129, 0.08)",colorBorder:"rgba(16, 185, 129, 0.25)"},{title:"Linux Commands & Shell Scripting",issuer:"Skillera",date:"March 2025",icon:"🐧",color:"var(--web-red)",colorBg:"rgba(255, 42, 95, 0.08)",colorBorder:"rgba(255, 42, 95, 0.25)"},{title:"Introduction to C",issuer:"Udemy",date:"January 2025",icon:"💻",color:"var(--warning-amber)",colorBg:"rgba(253, 184, 19, 0.08)",colorBorder:"rgba(253, 184, 19, 0.25)"}],e=[{degree:"B.Tech — Computer Science & Engineering",institution:"Lovely Professional University",location:"Phagwara, Punjab",period:"Aug 2024 – Present",grade:"CGPA: 7.2",icon:"🎓",color:"var(--web-red)"},{degree:"Intermediate (Class XII)",institution:"Kendriya Vidyalaya NFR Maligaon",location:"Guwahati, Assam",period:"Aug 2022 – May 2024",grade:"84%",icon:"🏫",color:"var(--cyber-cyan)"},{degree:"Matriculation (Class X)",institution:"St. Basil's Academy",location:"Nagaon, Assam",period:"Completed June 2022",grade:"80%",icon:"📚",color:"var(--terminal-green)"}];return w.jsx("section",{id:"certs",style:{padding:"100px 0"},children:w.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[w.jsxs("div",{style:{textAlign:"center",marginBottom:"48px"},children:[w.jsx("span",{className:"section-tag section-tag-cyan",style:{marginBottom:"14px"},children:"🏆 ACADEMICS & CERTIFICATIONS"}),w.jsxs("h2",{style:{fontSize:"2.6rem",fontWeight:"900",letterSpacing:"-0.03em"},children:["Education & ",w.jsx("span",{className:"gradient-text",children:"Credentials"})]}),w.jsx("p",{style:{color:"var(--text-dim)",marginTop:"10px",fontSize:"0.96rem"},children:"Continuous learning across Cloud Infrastructure, Full-Stack and Agentic AI"})]}),w.jsx("div",{className:"glass-card-web",style:{padding:"28px",marginBottom:"36px",background:"linear-gradient(135deg, rgba(255, 42, 95, 0.08) 0%, rgba(0, 242, 254, 0.06) 100%)",border:"1px solid rgba(255, 42, 95, 0.25)"},children:w.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"20px",flexWrap:"wrap"},children:[w.jsx("div",{style:{width:"58px",height:"58px",borderRadius:"16px",flexShrink:0,background:"linear-gradient(135deg, rgba(255, 42, 95, 0.3), rgba(0, 242, 254, 0.3))",border:"1.5px solid rgba(255, 42, 95, 0.4)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.8rem"},children:"🤖"}),w.jsxs("div",{style:{flex:1},children:[w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap",marginBottom:"8px"},children:[w.jsx("h3",{style:{fontSize:"1.35rem",fontWeight:"800",color:"#fff"},children:"Fullstack using Agentic A.I"}),w.jsx("span",{style:{fontSize:"0.72rem",fontFamily:"var(--font-mono)",background:"rgba(255, 42, 95, 0.15)",border:"1px solid rgba(255, 42, 95, 0.35)",color:"var(--web-red)",padding:"3px 10px",borderRadius:"9999px",fontWeight:"700"},children:"Jun 2026 – Jul 2026"})]}),w.jsx("p",{style:{fontSize:"0.86rem",color:"var(--cyber-cyan)",fontFamily:"var(--font-mono)",fontWeight:"700",marginBottom:"10px"},children:"Xebia · Industry Training Specialization"}),w.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-dim)",lineHeight:"1.7",marginBottom:"14px"},children:"Worked with Notion, Notebook LLM, and Postman for designing Agentic AI workflows. Explored GitHub Copilot, Kiro, and Antigravity across platforms. Deployed containerized backends and microservices to MongoDB Atlas, Render, and Vercel with structured GitHub CI/CD commit pipelines."}),w.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:["Notion","Notebook LLM","Postman","GitHub Copilot","Antigravity","MongoDB Atlas","Render","Vercel","Agentic Workflows"].map((n,i)=>w.jsx("span",{style:{fontSize:"0.72rem",fontFamily:"var(--font-mono)",padding:"3px 9px",borderRadius:"6px",background:"rgba(255, 42, 95, 0.08)",border:"1px solid rgba(255, 42, 95, 0.2)",color:"var(--web-red)"},children:n},i))})]})]})}),w.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"28px"},children:[w.jsxs("div",{className:"glass-card-web",style:{padding:"28px"},children:[w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"22px"},children:[w.jsx("div",{style:{width:"44px",height:"44px",borderRadius:"12px",background:"linear-gradient(135deg, rgba(255, 42, 95, 0.25), rgba(0, 242, 254, 0.25))",border:"1px solid rgba(255, 42, 95, 0.3)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--web-red)"},children:w.jsx(fy,{size:24})}),w.jsxs("div",{children:[w.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:"800",color:"#fff"},children:"Academic Journey"}),w.jsx("p",{style:{fontSize:"0.78rem",color:"var(--text-dim)",fontFamily:"var(--font-mono)"},children:"Education degrees & school record"})]})]}),w.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:e.map((n,i)=>w.jsxs("div",{style:{padding:"16px",borderRadius:"14px",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border-subtle)",display:"flex",gap:"12px"},children:[w.jsx("span",{style:{fontSize:"1.4rem",flexShrink:0},children:n.icon}),w.jsxs("div",{children:[w.jsx("h4",{style:{fontSize:"0.92rem",fontWeight:"700",color:"#fff",marginBottom:"3px"},children:n.degree}),w.jsx("p",{style:{fontSize:"0.80rem",color:n.color,fontFamily:"var(--font-mono)",fontWeight:"600"},children:n.institution}),w.jsx("p",{style:{fontSize:"0.74rem",color:"var(--text-faint)",fontFamily:"var(--font-mono)",marginTop:"2px"},children:n.location}),w.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"6px",flexWrap:"wrap"},children:[w.jsx("span",{style:{fontSize:"0.73rem",color:"var(--text-dim)",fontFamily:"var(--font-mono)"},children:n.period}),w.jsx("span",{style:{fontSize:"0.73rem",color:n.color,fontFamily:"var(--font-mono)",fontWeight:"700"},children:n.grade})]})]})]},i))})]}),w.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[w.jsx("h3",{style:{fontSize:"0.84rem",fontWeight:"700",color:"var(--text-dim)",fontFamily:"var(--font-mono)",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"6px"},children:"🏆 Verified Credentials"}),t.map((n,i)=>w.jsxs("div",{className:"glass-card-web",style:{padding:"18px",display:"flex",gap:"14px",alignItems:"flex-start",border:`1px solid ${n.colorBorder}`,background:n.colorBg},children:[w.jsx("div",{style:{width:"42px",height:"42px",borderRadius:"11px",flexShrink:0,background:n.colorBg,border:`1px solid ${n.colorBorder}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.3rem"},children:n.icon}),w.jsxs("div",{style:{flex:1},children:[w.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"8px",flexWrap:"wrap"},children:[w.jsx("h4",{style:{fontSize:"0.94rem",fontWeight:"700",color:"#fff"},children:n.title}),w.jsx("span",{style:{fontSize:"0.72rem",fontFamily:"var(--font-mono)",color:n.color,background:n.colorBg,padding:"2px 8px",borderRadius:"6px",whiteSpace:"nowrap",border:`1px solid ${n.colorBorder}`,fontWeight:"700"},children:n.date})]}),w.jsx("p",{style:{fontSize:"0.80rem",color:"var(--text-dim)",fontFamily:"var(--font-mono)",marginTop:"4px"},children:n.issuer})]})]},i))]})]})]})})}function qw(){const[t,e]=Ke.useState({name:"",email:"",subject:"Internship Opportunity",message:""}),[n,i]=Ke.useState(!1),[r,s]=Ke.useState(!1),a=()=>{navigator.clipboard.writeText("chakkaanil6@gmail.com"),i(!0),setTimeout(()=>i(!1),2e3)},o=l=>{l.preventDefault(),s(!0),setTimeout(()=>{s(!1),e({name:"",email:"",subject:"Internship Opportunity",message:""})},4e3)};return w.jsx("section",{id:"contact",style:{padding:"100px 0 120px"},children:w.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[w.jsxs("div",{style:{textAlign:"center",marginBottom:"48px"},children:[w.jsx("span",{className:"section-tag section-tag-cyan",style:{marginBottom:"14px"},children:"📬 GET IN TOUCH"}),w.jsxs("h2",{style:{fontSize:"2.6rem",fontWeight:"900",letterSpacing:"-0.03em"},children:["Contact ",w.jsx("span",{className:"gradient-text",children:"Chinni Krishna"})]}),w.jsx("p",{style:{color:"var(--text-dim)",marginTop:"10px",fontSize:"0.96rem"},children:"Available for DevOps & Cloud internships, graduate engineering roles & open source projects"})]}),w.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"28px",maxWidth:"920px",margin:"0 auto"},children:[w.jsxs("div",{className:"glass-card-web",style:{padding:"30px",display:"flex",flexDirection:"column",gap:"20px"},children:[w.jsxs("div",{children:[w.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:"800",color:"#fff",marginBottom:"8px"},children:"Direct Channels"}),w.jsx("p",{style:{fontSize:"0.88rem",color:"var(--text-dim)",lineHeight:"1.65"},children:"Feel free to connect for internships, cloud infrastructure projects, or technical collaboration."})]}),w.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid var(--border-subtle)",borderRadius:"12px",padding:"14px 18px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"10px"},children:[w.jsxs("div",{children:[w.jsx("span",{style:{fontSize:"0.70rem",color:"var(--text-faint)",fontFamily:"var(--font-mono)",display:"block",letterSpacing:"0.06em",textTransform:"uppercase"},children:"Email Address"}),w.jsx("span",{style:{fontSize:"0.88rem",fontFamily:"var(--font-mono)",color:"var(--cyber-cyan)",fontWeight:"700"},children:"chakkaanil6@gmail.com"})]}),w.jsxs("button",{onClick:a,style:{background:n?"rgba(16,185,129,0.15)":"rgba(255,255,255,0.06)",border:`1px solid ${n?"var(--terminal-green)":"var(--border-subtle)"}`,color:n?"var(--terminal-green)":"var(--text-muted)",borderRadius:"8px",padding:"7px 12px",cursor:"pointer",fontSize:"0.78rem",display:"flex",alignItems:"center",gap:"5px",transition:"all 0.2s",fontFamily:"var(--font-mono)"},children:[n?w.jsx(ly,{size:14}):w.jsx(cy,{size:14}),n?"Copied!":"Copy"]})]}),w.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid var(--border-subtle)",borderRadius:"12px",padding:"14px 18px",display:"flex",alignItems:"center",gap:"12px"},children:[w.jsx(xy,{size:16,color:"var(--f1-red)"}),w.jsxs("div",{children:[w.jsx("span",{style:{fontSize:"0.70rem",color:"var(--text-faint)",fontFamily:"var(--font-mono)",display:"block",letterSpacing:"0.06em",textTransform:"uppercase"},children:"Mobile Contact"}),w.jsx("span",{style:{fontSize:"0.88rem",fontFamily:"var(--font-mono)",color:"var(--f1-red)",fontWeight:"700"},children:"+91 8135839393"})]})]}),w.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[w.jsxs("a",{href:"https://github.com/GrayViper",target:"_blank",rel:"noreferrer",className:"btn-primary",style:{justifyContent:"center",padding:"11px 14px",fontSize:"0.86rem"},children:[w.jsx(uc,{size:16})," @GrayViper on GitHub"]}),w.jsxs("a",{href:"https://www.linkedin.com/in/chinni-krishna8",target:"_blank",rel:"noreferrer",className:"btn-secondary",style:{justifyContent:"center",padding:"11px 14px",fontSize:"0.86rem"},children:[w.jsx(eh,{size:16})," LinkedIn Profile"]})]})]}),w.jsx("div",{className:"glass-card-web",style:{padding:"30px"},children:r?w.jsxs("div",{style:{textAlign:"center",padding:"40px 10px"},children:[w.jsx("div",{style:{width:"64px",height:"64px",borderRadius:"50%",background:"linear-gradient(135deg, rgba(255,24,1,0.2), rgba(0,242,254,0.2))",border:"1.5px solid var(--f1-red)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 18px",color:"var(--f1-red)"},children:w.jsx(X0,{size:28})}),w.jsx("h3",{style:{fontSize:"1.3rem",fontWeight:"800",color:"#fff",marginBottom:"8px"},children:"Message Transmitted! ⚡"}),w.jsx("p",{style:{color:"var(--text-dim)",fontSize:"0.88rem"},children:"Thanks for reaching out! I'll get back to your inbox as soon as possible."})]}):w.jsxs("form",{onSubmit:o,style:{display:"flex",flexDirection:"column",gap:"16px"},children:[[{label:"Your Name",key:"name",type:"text",placeholder:"e.g. Alex Mercer"},{label:"Email Address",key:"email",type:"email",placeholder:"alex@company.com"}].map(l=>w.jsxs("div",{children:[w.jsx("label",{style:{display:"block",fontSize:"0.76rem",fontFamily:"var(--font-mono)",color:"var(--text-dim)",marginBottom:"6px",letterSpacing:"0.04em",textTransform:"uppercase"},children:l.label}),w.jsx("input",{type:l.type,required:!0,value:t[l.key],onChange:c=>e({...t,[l.key]:c.target.value}),placeholder:l.placeholder,style:{width:"100%",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border-subtle)",borderRadius:"10px",padding:"10px 14px",color:"#fff",fontSize:"0.88rem",outline:"none",transition:"border-color 0.2s"}})]},l.key)),w.jsxs("div",{children:[w.jsx("label",{style:{display:"block",fontSize:"0.76rem",fontFamily:"var(--font-mono)",color:"var(--text-dim)",marginBottom:"6px",letterSpacing:"0.04em",textTransform:"uppercase"},children:"Purpose of Message"}),w.jsxs("select",{value:t.subject,onChange:l=>e({...t,subject:l.target.value}),style:{width:"100%",background:"#0b101c",border:"1px solid var(--border-subtle)",borderRadius:"10px",padding:"10px 14px",color:"#fff",fontSize:"0.88rem",outline:"none"},children:[w.jsx("option",{value:"Internship Opportunity",children:"DevOps / Cloud Internship Opportunity"}),w.jsx("option",{value:"Full-Time Role",children:"Full-Time / Graduate Engineering Role"}),w.jsx("option",{value:"Cloud Architecture",children:"Cloud Infrastructure & CI/CD Project"}),w.jsx("option",{value:"Collaboration",children:"Open Source Collaboration"}),w.jsx("option",{value:"General",children:"General Technical Inquiry"})]})]}),w.jsxs("div",{children:[w.jsx("label",{style:{display:"block",fontSize:"0.76rem",fontFamily:"var(--font-mono)",color:"var(--text-dim)",marginBottom:"6px",letterSpacing:"0.04em",textTransform:"uppercase"},children:"Message"}),w.jsx("textarea",{rows:4,required:!0,value:t.message,onChange:l=>e({...t,message:l.target.value}),placeholder:"Share role specifications, project requirements, or questions...",style:{width:"100%",background:"rgba(255,255,255,0.03)",border:"1px solid var(--border-subtle)",borderRadius:"10px",padding:"10px 14px",color:"#fff",fontSize:"0.88rem",outline:"none",resize:"none",transition:"border-color 0.2s"}})]}),w.jsxs("button",{type:"submit",className:"btn-primary",style:{justifyContent:"center",marginTop:"4px"},children:[w.jsx(yy,{size:16})," Send Message ⚡"]})]})})]})]})})}function $w(){const t=e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})};return w.jsx("footer",{style:{borderTop:"1px solid var(--border-subtle)",background:"rgba(7, 10, 18, 0.95)",padding:"44px 0 30px",position:"relative",zIndex:10},children:w.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[w.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"24px",paddingBottom:"28px",borderBottom:"1px solid var(--border-subtle)"},children:[w.jsxs("div",{children:[w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"6px"},children:[w.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"10px",background:"linear-gradient(135deg, var(--f1-red) 0%, var(--cyber-cyan) 100%)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"900",fontSize:"0.92rem",color:"#fff",fontFamily:"var(--font-heading)"},children:"CK"}),w.jsxs("span",{style:{fontFamily:"var(--font-heading)",fontWeight:"900",fontSize:"1.15rem",color:"#fff"},children:["Chakka Chinni ",w.jsx("span",{className:"gradient-text",children:"Krishna"})]})]}),w.jsx("p",{style:{fontSize:"0.82rem",color:"var(--text-dim)",fontFamily:"var(--font-mono)"},children:"DevOps & Cloud Engineer · Full-Stack & Agentic AI Specialist · @GrayViper"})]}),w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"},children:[w.jsxs("span",{style:{fontSize:"0.74rem",fontFamily:"var(--font-mono)",background:"rgba(16, 185, 129, 0.12)",border:"1px solid rgba(16, 185, 129, 0.3)",color:"var(--terminal-green)",padding:"4px 10px",borderRadius:"8px",display:"flex",alignItems:"center",gap:"5px",fontWeight:"700"},children:[w.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#10b981",boxShadow:"0 0 6px #10b981"}}),"99.9% CLUSTER UPTIME"]}),w.jsx("span",{style:{fontSize:"0.74rem",fontFamily:"var(--font-mono)",background:"rgba(255, 24, 1, 0.1)",border:"1px solid rgba(255, 24, 1, 0.3)",color:"var(--f1-red)",padding:"4px 10px",borderRadius:"8px",fontWeight:"700"},children:"BUILD: v2.0.0-f1-retro"})]}),w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[[{href:"https://github.com/GrayViper",icon:w.jsx(uc,{size:17}),label:"GitHub"},{href:"https://www.linkedin.com/in/chinni-krishna8",icon:w.jsx(eh,{size:17}),label:"LinkedIn"},{href:"mailto:chakkaanil6@gmail.com",icon:w.jsx(hy,{size:17}),label:"Email"}].map((e,n)=>w.jsx("a",{href:e.href,target:"_blank",rel:"noreferrer",title:e.label,style:{width:"40px",height:"40px",borderRadius:"10px",background:"rgba(255,255,255,0.04)",border:"1px solid var(--border-subtle)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-dim)",transition:"all 0.2s",textDecoration:"none"},onMouseEnter:i=>{i.currentTarget.style.borderColor="var(--f1-red)",i.currentTarget.style.color="#fff",i.currentTarget.style.background="rgba(255,24,1,0.12)"},onMouseLeave:i=>{i.currentTarget.style.borderColor="var(--border-subtle)",i.currentTarget.style.color="var(--text-dim)",i.currentTarget.style.background="rgba(255,255,255,0.04)"},children:e.icon},n)),w.jsxs("button",{onClick:t,style:{display:"flex",alignItems:"center",gap:"6px",background:"rgba(255, 24, 1, 0.12)",border:"1px solid rgba(255, 24, 1, 0.35)",color:"var(--f1-red)",borderRadius:"10px",padding:"9px 18px",fontSize:"0.82rem",cursor:"pointer",fontFamily:"var(--font-heading)",fontWeight:"700",transition:"all 0.2s"},onMouseEnter:e=>{e.currentTarget.style.background="rgba(255, 24, 1, 0.22)",e.currentTarget.style.borderColor="var(--f1-red)"},onMouseLeave:e=>{e.currentTarget.style.background="rgba(255, 24, 1, 0.12)",e.currentTarget.style.borderColor="rgba(255, 24, 1, 0.35)"},children:[w.jsx(ay,{size:15})," Back to Top 🏁"]})]})]}),w.jsx("div",{style:{textAlign:"center",marginTop:"22px",fontSize:"0.80rem",color:"var(--text-faint)",fontFamily:"var(--font-mono)"},children:"© 2026 Chakka Chinni Krishna (@GrayViper) · Engineered with React + Vite + Three.js · Deployed on Vercel"})]})})}function Kw(){const[t,e]=Ke.useState(!0);return w.jsxs("div",{className:"portfolio-app-root",children:[w.jsx(Ey,{isVideoActive:t}),w.jsx(Ty,{isVideoActive:t,setIsVideoActive:e}),w.jsxs("main",{children:[w.jsx(Hw,{}),w.jsx(Ww,{}),w.jsx(Xw,{}),w.jsx(jw,{}),w.jsx(Yw,{}),w.jsx(qw,{})]}),w.jsx($w,{})]})}Su.createRoot(document.getElementById("root")).render(w.jsx(Xx.StrictMode,{children:w.jsx(Kw,{})}));
