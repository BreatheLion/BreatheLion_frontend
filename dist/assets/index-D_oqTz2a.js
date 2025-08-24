(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))l(f);new MutationObserver(f=>{for(const d of f)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function o(f){const d={};return f.integrity&&(d.integrity=f.integrity),f.referrerPolicy&&(d.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?d.credentials="include":f.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(f){if(f.ep)return;f.ep=!0;const d=o(f);fetch(f.href,d)}})();function np(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Gu={exports:{}},ll={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hg;function Zv(){if(hg)return ll;hg=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function o(l,f,d){var h=null;if(d!==void 0&&(h=""+d),f.key!==void 0&&(h=""+f.key),"key"in f){d={};for(var v in f)v!=="key"&&(d[v]=f[v])}else d=f;return f=d.ref,{$$typeof:a,type:l,key:h,ref:f!==void 0?f:null,props:d}}return ll.Fragment=i,ll.jsx=o,ll.jsxs=o,ll}var mg;function Kv(){return mg||(mg=1,Gu.exports=Zv()),Gu.exports}var c=Kv(),Yu={exports:{}},Oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gg;function Qv(){if(gg)return Oe;gg=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),h=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),S=Symbol.iterator;function j(R){return R===null||typeof R!="object"?null:(R=S&&R[S]||R["@@iterator"],typeof R=="function"?R:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,E={};function A(R,q,te){this.props=R,this.context=q,this.refs=E,this.updater=te||_}A.prototype.isReactComponent={},A.prototype.setState=function(R,q){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,q,"setState")},A.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function D(){}D.prototype=A.prototype;function H(R,q,te){this.props=R,this.context=q,this.refs=E,this.updater=te||_}var z=H.prototype=new D;z.constructor=H,C(z,A.prototype),z.isPureReactComponent=!0;var K=Array.isArray,Z={H:null,A:null,T:null,S:null,V:null},ee=Object.prototype.hasOwnProperty;function P(R,q,te,ae,ie,Se){return te=Se.ref,{$$typeof:a,type:R,key:q,ref:te!==void 0?te:null,props:Se}}function I(R,q){return P(R.type,q,void 0,void 0,void 0,R.props)}function ne(R){return typeof R=="object"&&R!==null&&R.$$typeof===a}function ce(R){var q={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(te){return q[te]})}var pe=/\/+/g;function se(R,q){return typeof R=="object"&&R!==null&&R.key!=null?ce(""+R.key):q.toString(36)}function xe(){}function be(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(xe,xe):(R.status="pending",R.then(function(q){R.status==="pending"&&(R.status="fulfilled",R.value=q)},function(q){R.status==="pending"&&(R.status="rejected",R.reason=q)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function re(R,q,te,ae,ie){var Se=typeof R;(Se==="undefined"||Se==="boolean")&&(R=null);var B=!1;if(R===null)B=!0;else switch(Se){case"bigint":case"string":case"number":B=!0;break;case"object":switch(R.$$typeof){case a:case i:B=!0;break;case b:return B=R._init,re(B(R._payload),q,te,ae,ie)}}if(B)return ie=ie(R),B=ae===""?"."+se(R,0):ae,K(ie)?(te="",B!=null&&(te=B.replace(pe,"$&/")+"/"),re(ie,q,te,"",function(ue){return ue})):ie!=null&&(ne(ie)&&(ie=I(ie,te+(ie.key==null||R&&R.key===ie.key?"":(""+ie.key).replace(pe,"$&/")+"/")+B)),q.push(ie)),1;B=0;var V=ae===""?".":ae+":";if(K(R))for(var Y=0;Y<R.length;Y++)ae=R[Y],Se=V+se(ae,Y),B+=re(ae,q,te,Se,ie);else if(Y=j(R),typeof Y=="function")for(R=Y.call(R),Y=0;!(ae=R.next()).done;)ae=ae.value,Se=V+se(ae,Y++),B+=re(ae,q,te,Se,ie);else if(Se==="object"){if(typeof R.then=="function")return re(be(R),q,te,ae,ie);throw q=String(R),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return B}function O(R,q,te){if(R==null)return R;var ae=[],ie=0;return re(R,ae,"","",function(Se){return q.call(te,Se,ie++)}),ae}function J(R){if(R._status===-1){var q=R._result;q=q(),q.then(function(te){(R._status===0||R._status===-1)&&(R._status=1,R._result=te)},function(te){(R._status===0||R._status===-1)&&(R._status=2,R._result=te)}),R._status===-1&&(R._status=0,R._result=q)}if(R._status===1)return R._result.default;throw R._result}var le=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)};function de(){}return Oe.Children={map:O,forEach:function(R,q,te){O(R,function(){q.apply(this,arguments)},te)},count:function(R){var q=0;return O(R,function(){q++}),q},toArray:function(R){return O(R,function(q){return q})||[]},only:function(R){if(!ne(R))throw Error("React.Children.only expected to receive a single React element child.");return R}},Oe.Component=A,Oe.Fragment=o,Oe.Profiler=f,Oe.PureComponent=H,Oe.StrictMode=l,Oe.Suspense=m,Oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,Oe.__COMPILER_RUNTIME={__proto__:null,c:function(R){return Z.H.useMemoCache(R)}},Oe.cache=function(R){return function(){return R.apply(null,arguments)}},Oe.cloneElement=function(R,q,te){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var ae=C({},R.props),ie=R.key,Se=void 0;if(q!=null)for(B in q.ref!==void 0&&(Se=void 0),q.key!==void 0&&(ie=""+q.key),q)!ee.call(q,B)||B==="key"||B==="__self"||B==="__source"||B==="ref"&&q.ref===void 0||(ae[B]=q[B]);var B=arguments.length-2;if(B===1)ae.children=te;else if(1<B){for(var V=Array(B),Y=0;Y<B;Y++)V[Y]=arguments[Y+2];ae.children=V}return P(R.type,ie,void 0,void 0,Se,ae)},Oe.createContext=function(R){return R={$$typeof:h,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:d,_context:R},R},Oe.createElement=function(R,q,te){var ae,ie={},Se=null;if(q!=null)for(ae in q.key!==void 0&&(Se=""+q.key),q)ee.call(q,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(ie[ae]=q[ae]);var B=arguments.length-2;if(B===1)ie.children=te;else if(1<B){for(var V=Array(B),Y=0;Y<B;Y++)V[Y]=arguments[Y+2];ie.children=V}if(R&&R.defaultProps)for(ae in B=R.defaultProps,B)ie[ae]===void 0&&(ie[ae]=B[ae]);return P(R,Se,void 0,void 0,null,ie)},Oe.createRef=function(){return{current:null}},Oe.forwardRef=function(R){return{$$typeof:v,render:R}},Oe.isValidElement=ne,Oe.lazy=function(R){return{$$typeof:b,_payload:{_status:-1,_result:R},_init:J}},Oe.memo=function(R,q){return{$$typeof:g,type:R,compare:q===void 0?null:q}},Oe.startTransition=function(R){var q=Z.T,te={};Z.T=te;try{var ae=R(),ie=Z.S;ie!==null&&ie(te,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(de,le)}catch(Se){le(Se)}finally{Z.T=q}},Oe.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},Oe.use=function(R){return Z.H.use(R)},Oe.useActionState=function(R,q,te){return Z.H.useActionState(R,q,te)},Oe.useCallback=function(R,q){return Z.H.useCallback(R,q)},Oe.useContext=function(R){return Z.H.useContext(R)},Oe.useDebugValue=function(){},Oe.useDeferredValue=function(R,q){return Z.H.useDeferredValue(R,q)},Oe.useEffect=function(R,q,te){var ae=Z.H;if(typeof te=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ae.useEffect(R,q)},Oe.useId=function(){return Z.H.useId()},Oe.useImperativeHandle=function(R,q,te){return Z.H.useImperativeHandle(R,q,te)},Oe.useInsertionEffect=function(R,q){return Z.H.useInsertionEffect(R,q)},Oe.useLayoutEffect=function(R,q){return Z.H.useLayoutEffect(R,q)},Oe.useMemo=function(R,q){return Z.H.useMemo(R,q)},Oe.useOptimistic=function(R,q){return Z.H.useOptimistic(R,q)},Oe.useReducer=function(R,q,te){return Z.H.useReducer(R,q,te)},Oe.useRef=function(R){return Z.H.useRef(R)},Oe.useState=function(R){return Z.H.useState(R)},Oe.useSyncExternalStore=function(R,q,te){return Z.H.useSyncExternalStore(R,q,te)},Oe.useTransition=function(){return Z.H.useTransition()},Oe.version="19.1.1",Oe}var pg;function ed(){return pg||(pg=1,Yu.exports=Qv()),Yu.exports}var w=ed();const Ir=np(w);var Fu={exports:{}},ol={},Xu={exports:{}},Zu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg;function Iv(){return yg||(yg=1,function(a){function i(O,J){var le=O.length;O.push(J);e:for(;0<le;){var de=le-1>>>1,R=O[de];if(0<f(R,J))O[de]=J,O[le]=R,le=de;else break e}}function o(O){return O.length===0?null:O[0]}function l(O){if(O.length===0)return null;var J=O[0],le=O.pop();if(le!==J){O[0]=le;e:for(var de=0,R=O.length,q=R>>>1;de<q;){var te=2*(de+1)-1,ae=O[te],ie=te+1,Se=O[ie];if(0>f(ae,le))ie<R&&0>f(Se,ae)?(O[de]=Se,O[ie]=le,de=ie):(O[de]=ae,O[te]=le,de=te);else if(ie<R&&0>f(Se,le))O[de]=Se,O[ie]=le,de=ie;else break e}}return J}function f(O,J){var le=O.sortIndex-J.sortIndex;return le!==0?le:O.id-J.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;a.unstable_now=function(){return d.now()}}else{var h=Date,v=h.now();a.unstable_now=function(){return h.now()-v}}var m=[],g=[],b=1,S=null,j=3,_=!1,C=!1,E=!1,A=!1,D=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function K(O){for(var J=o(g);J!==null;){if(J.callback===null)l(g);else if(J.startTime<=O)l(g),J.sortIndex=J.expirationTime,i(m,J);else break;J=o(g)}}function Z(O){if(E=!1,K(O),!C)if(o(m)!==null)C=!0,ee||(ee=!0,se());else{var J=o(g);J!==null&&re(Z,J.startTime-O)}}var ee=!1,P=-1,I=5,ne=-1;function ce(){return A?!0:!(a.unstable_now()-ne<I)}function pe(){if(A=!1,ee){var O=a.unstable_now();ne=O;var J=!0;try{e:{C=!1,E&&(E=!1,H(P),P=-1),_=!0;var le=j;try{t:{for(K(O),S=o(m);S!==null&&!(S.expirationTime>O&&ce());){var de=S.callback;if(typeof de=="function"){S.callback=null,j=S.priorityLevel;var R=de(S.expirationTime<=O);if(O=a.unstable_now(),typeof R=="function"){S.callback=R,K(O),J=!0;break t}S===o(m)&&l(m),K(O)}else l(m);S=o(m)}if(S!==null)J=!0;else{var q=o(g);q!==null&&re(Z,q.startTime-O),J=!1}}break e}finally{S=null,j=le,_=!1}J=void 0}}finally{J?se():ee=!1}}}var se;if(typeof z=="function")se=function(){z(pe)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,be=xe.port2;xe.port1.onmessage=pe,se=function(){be.postMessage(null)}}else se=function(){D(pe,0)};function re(O,J){P=D(function(){O(a.unstable_now())},J)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(O){O.callback=null},a.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<O?Math.floor(1e3/O):5},a.unstable_getCurrentPriorityLevel=function(){return j},a.unstable_next=function(O){switch(j){case 1:case 2:case 3:var J=3;break;default:J=j}var le=j;j=J;try{return O()}finally{j=le}},a.unstable_requestPaint=function(){A=!0},a.unstable_runWithPriority=function(O,J){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var le=j;j=O;try{return J()}finally{j=le}},a.unstable_scheduleCallback=function(O,J,le){var de=a.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?de+le:de):le=de,O){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=le+R,O={id:b++,callback:J,priorityLevel:O,startTime:le,expirationTime:R,sortIndex:-1},le>de?(O.sortIndex=le,i(g,O),o(m)===null&&O===o(g)&&(E?(H(P),P=-1):E=!0,re(Z,le-de))):(O.sortIndex=R,i(m,O),C||_||(C=!0,ee||(ee=!0,se()))),O},a.unstable_shouldYield=ce,a.unstable_wrapCallback=function(O){var J=j;return function(){var le=j;j=J;try{return O.apply(this,arguments)}finally{j=le}}}}(Zu)),Zu}var vg;function Jv(){return vg||(vg=1,Xu.exports=Iv()),Xu.exports}var Ku={exports:{}},Dt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xg;function Wv(){if(xg)return Dt;xg=1;var a=ed();function i(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)g+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var l={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},f=Symbol.for("react.portal");function d(m,g,b){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:S==null?null:""+S,children:m,containerInfo:g,implementation:b}}var h=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,Dt.createPortal=function(m,g){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(i(299));return d(m,g,null,b)},Dt.flushSync=function(m){var g=h.T,b=l.p;try{if(h.T=null,l.p=2,m)return m()}finally{h.T=g,l.p=b,l.d.f()}},Dt.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,l.d.C(m,g))},Dt.prefetchDNS=function(m){typeof m=="string"&&l.d.D(m)},Dt.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var b=g.as,S=v(b,g.crossOrigin),j=typeof g.integrity=="string"?g.integrity:void 0,_=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;b==="style"?l.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:j,fetchPriority:_}):b==="script"&&l.d.X(m,{crossOrigin:S,integrity:j,fetchPriority:_,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Dt.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var b=v(g.as,g.crossOrigin);l.d.M(m,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&l.d.M(m)},Dt.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var b=g.as,S=v(b,g.crossOrigin);l.d.L(m,b,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Dt.preloadModule=function(m,g){if(typeof m=="string")if(g){var b=v(g.as,g.crossOrigin);l.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else l.d.m(m)},Dt.requestFormReset=function(m){l.d.r(m)},Dt.unstable_batchedUpdates=function(m,g){return m(g)},Dt.useFormState=function(m,g,b){return h.H.useFormState(m,g,b)},Dt.useFormStatus=function(){return h.H.useHostTransitionStatus()},Dt.version="19.1.1",Dt}var bg;function ap(){if(bg)return Ku.exports;bg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Ku.exports=Wv(),Ku.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg;function e5(){if(wg)return ol;wg=1;var a=Jv(),i=ed(),o=ap();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(d(e)!==e)throw Error(l(188))}function m(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var u=s.alternate;if(u===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===u.child){for(u=s.child;u;){if(u===n)return v(s),e;if(u===r)return v(s),t;u=u.sibling}throw Error(l(188))}if(n.return!==r.return)n=s,r=u;else{for(var p=!1,x=s.child;x;){if(x===n){p=!0,n=s,r=u;break}if(x===r){p=!0,r=s,n=u;break}x=x.sibling}if(!p){for(x=u.child;x;){if(x===n){p=!0,n=u,r=s;break}if(x===r){p=!0,r=u,n=s;break}x=x.sibling}if(!p)throw Error(l(189))}}if(n.alternate!==r)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,S=Symbol.for("react.element"),j=Symbol.for("react.transitional.element"),_=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),H=Symbol.for("react.consumer"),z=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),ne=Symbol.for("react.activity"),ce=Symbol.for("react.memo_cache_sentinel"),pe=Symbol.iterator;function se(e){return e===null||typeof e!="object"?null:(e=pe&&e[pe]||e["@@iterator"],typeof e=="function"?e:null)}var xe=Symbol.for("react.client.reference");function be(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===xe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case A:return"Profiler";case E:return"StrictMode";case Z:return"Suspense";case ee:return"SuspenseList";case ne:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case _:return"Portal";case z:return(e.displayName||"Context")+".Provider";case H:return(e._context.displayName||"Context")+".Consumer";case K:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return t=e.displayName||null,t!==null?t:be(e.type)||"Memo";case I:t=e._payload,e=e._init;try{return be(e(t))}catch{}}return null}var re=Array.isArray,O=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},de=[],R=-1;function q(e){return{current:e}}function te(e){0>R||(e.current=de[R],de[R]=null,R--)}function ae(e,t){R++,de[R]=e.current,e.current=t}var ie=q(null),Se=q(null),B=q(null),V=q(null);function Y(e,t){switch(ae(B,t),ae(Se,e),ae(ie,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Pm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Pm(t),e=qm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}te(ie),ae(ie,e)}function ue(){te(ie),te(Se),te(B)}function Ce(e){e.memoizedState!==null&&ae(V,e);var t=ie.current,n=qm(t,e.type);t!==n&&(ae(Se,e),ae(ie,n))}function he(e){Se.current===e&&(te(ie),te(Se)),V.current===e&&(te(V),tl._currentValue=le)}var fe=Object.prototype.hasOwnProperty,ge=a.unstable_scheduleCallback,qe=a.unstable_cancelCallback,ut=a.unstable_shouldYield,an=a.unstable_requestPaint,Ye=a.unstable_now,Qe=a.unstable_getCurrentPriorityLevel,_e=a.unstable_ImmediatePriority,it=a.unstable_UserBlockingPriority,F=a.unstable_NormalPriority,me=a.unstable_LowPriority,Ae=a.unstable_IdlePriority,oe=a.log,ye=a.unstable_setDisableYieldValue,Re=null,$e=null;function Ht(e){if(typeof oe=="function"&&ye(e),$e&&typeof $e.setStrictMode=="function")try{$e.setStrictMode(Re,e)}catch{}}var mt=Math.clz32?Math.clz32:ui,rr=Math.log,Et=Math.LN2;function ui(e){return e>>>=0,e===0?32:31-(rr(e)/Et|0)|0}var ir=256,ra=4194304;function $n(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function lr(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var s=0,u=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var x=r&134217727;return x!==0?(r=x&~u,r!==0?s=$n(r):(p&=x,p!==0?s=$n(p):n||(n=x&~e,n!==0&&(s=$n(n))))):(x=r&~u,x!==0?s=$n(x):p!==0?s=$n(p):n||(n=r&~e,n!==0&&(s=$n(n)))),s===0?0:t!==0&&t!==s&&(t&u)===0&&(u=s&-s,n=t&-t,u>=n||u===32&&(n&4194048)!==0)?t:s}function _a(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function L2(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jd(){var e=ir;return ir<<=1,(ir&4194048)===0&&(ir=256),e}function Ed(){var e=ra;return ra<<=1,(ra&62914560)===0&&(ra=4194304),e}function zs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function N2(e,t,n,r,s,u){var p=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var x=e.entanglements,T=e.expirationTimes,N=e.hiddenUpdates;for(n=p&~n;0<n;){var X=31-mt(n),W=1<<X;x[X]=0,T[X]=-1;var $=N[X];if($!==null)for(N[X]=null,X=0;X<$.length;X++){var U=$[X];U!==null&&(U.lane&=-536870913)}n&=~W}r!==0&&Td(e,r,0),u!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=u&~(p&~t))}function Td(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-mt(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&4194090}function Ad(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-mt(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}function ks(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ls(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Rd(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:og(e.type))}function $2(e,t){var n=J.p;try{return J.p=e,t()}finally{J.p=n}}var ia=Math.random().toString(36).slice(2),Mt="__reactFiber$"+ia,Bt="__reactProps$"+ia,or="__reactContainer$"+ia,Ns="__reactEvents$"+ia,U2="__reactListeners$"+ia,H2="__reactHandles$"+ia,_d="__reactResources$"+ia,di="__reactMarker$"+ia;function $s(e){delete e[Mt],delete e[Bt],delete e[Ns],delete e[U2],delete e[H2]}function sr(e){var t=e[Mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[or]||n[Mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Fm(e);e!==null;){if(n=e[Mt])return n;e=Fm(e)}return t}e=n,n=e.parentNode}return null}function cr(e){if(e=e[Mt]||e[or]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function hi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function ur(e){var t=e[_d];return t||(t=e[_d]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function vt(e){e[di]=!0}var Md=new Set,Od={};function Ma(e,t){fr(e,t),fr(e+"Capture",t)}function fr(e,t){for(Od[e]=t,e=0;e<t.length;e++)Md.add(t[e])}var B2=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Dd={},zd={};function P2(e){return fe.call(zd,e)?!0:fe.call(Dd,e)?!1:B2.test(e)?zd[e]=!0:(Dd[e]=!0,!1)}function _l(e,t,n){if(P2(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ml(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Un(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+r)}}var Us,kd;function dr(e){if(Us===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Us=t&&t[1]||"",kd=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Us+e+kd}var Hs=!1;function Bs(e,t){if(!e||Hs)return"";Hs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(U){var $=U}Reflect.construct(e,[],W)}else{try{W.call()}catch(U){$=U}e.call(W.prototype)}}else{try{throw Error()}catch(U){$=U}(W=e())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(U){if(U&&$&&typeof U.stack=="string")return[U.stack,$.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),p=u[0],x=u[1];if(p&&x){var T=p.split(`
`),N=x.split(`
`);for(s=r=0;r<T.length&&!T[r].includes("DetermineComponentFrameRoot");)r++;for(;s<N.length&&!N[s].includes("DetermineComponentFrameRoot");)s++;if(r===T.length||s===N.length)for(r=T.length-1,s=N.length-1;1<=r&&0<=s&&T[r]!==N[s];)s--;for(;1<=r&&0<=s;r--,s--)if(T[r]!==N[s]){if(r!==1||s!==1)do if(r--,s--,0>s||T[r]!==N[s]){var X=`
`+T[r].replace(" at new "," at ");return e.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",e.displayName)),X}while(1<=r&&0<=s);break}}}finally{Hs=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?dr(n):""}function q2(e){switch(e.tag){case 26:case 27:case 5:return dr(e.type);case 16:return dr("Lazy");case 13:return dr("Suspense");case 19:return dr("SuspenseList");case 0:case 15:return Bs(e.type,!1);case 11:return Bs(e.type.render,!1);case 1:return Bs(e.type,!0);case 31:return dr("Activity");default:return""}}function Ld(e){try{var t="";do t+=q2(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function rn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function V2(e){var t=Nd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(p){r=""+p,u.call(this,p)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(p){r=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ol(e){e._valueTracker||(e._valueTracker=V2(e))}function $d(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Nd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Dl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var G2=/[\n"\\]/g;function ln(e){return e.replace(G2,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ps(e,t,n,r,s,u,p,x){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),t!=null?p==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+rn(t)):e.value!==""+rn(t)&&(e.value=""+rn(t)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),t!=null?qs(e,p,rn(t)):n!=null?qs(e,p,rn(n)):r!=null&&e.removeAttribute("value"),s==null&&u!=null&&(e.defaultChecked=!!u),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.name=""+rn(x):e.removeAttribute("name")}function Ud(e,t,n,r,s,u,p,x){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null))return;n=n!=null?""+rn(n):"",t=t!=null?""+rn(t):n,x||t===e.value||(e.value=t),e.defaultValue=t}r=r??s,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=x?e.checked:!!r,e.defaultChecked=!!r,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p)}function qs(e,t,n){t==="number"&&Dl(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function hr(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+rn(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Hd(e,t,n){if(t!=null&&(t=""+rn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+rn(n):""}function Bd(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(l(92));if(re(r)){if(1<r.length)throw Error(l(93));r=r[0]}n=r}n==null&&(n=""),t=n}n=rn(t),e.defaultValue=n,r=e.textContent,r===n&&r!==""&&r!==null&&(e.value=r)}function mr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Y2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pd(e,t,n){var r=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,n):typeof n!="number"||n===0||Y2.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function qd(e,t,n){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var s in t)r=t[s],t.hasOwnProperty(s)&&n[s]!==r&&Pd(e,s,r)}else for(var u in t)t.hasOwnProperty(u)&&Pd(e,u,t[u])}function Vs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var F2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),X2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zl(e){return X2.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Gs=null;function Ys(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gr=null,pr=null;function Vd(e){var t=cr(e);if(t&&(e=t.stateNode)){var n=e[Bt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ps(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ln(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=r[Bt]||null;if(!s)throw Error(l(90));Ps(r,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&$d(r)}break e;case"textarea":Hd(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&hr(e,!!n.multiple,t,!1)}}}var Fs=!1;function Gd(e,t,n){if(Fs)return e(t,n);Fs=!0;try{var r=e(t);return r}finally{if(Fs=!1,(gr!==null||pr!==null)&&(xo(),gr&&(t=gr,e=pr,pr=gr=null,Vd(t),e)))for(t=0;t<e.length;t++)Vd(e[t])}}function mi(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Bt]||null;if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var Hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xs=!1;if(Hn)try{var gi={};Object.defineProperty(gi,"passive",{get:function(){Xs=!0}}),window.addEventListener("test",gi,gi),window.removeEventListener("test",gi,gi)}catch{Xs=!1}var la=null,Zs=null,kl=null;function Yd(){if(kl)return kl;var e,t=Zs,n=t.length,r,s="value"in la?la.value:la.textContent,u=s.length;for(e=0;e<n&&t[e]===s[e];e++);var p=n-e;for(r=1;r<=p&&t[n-r]===s[u-r];r++);return kl=s.slice(e,1<r?1-r:void 0)}function Ll(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nl(){return!0}function Fd(){return!1}function Pt(e){function t(n,r,s,u,p){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=u,this.target=p,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(n=e[x],this[x]=n?n(u):u[x]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Nl:Fd,this.isPropagationStopped=Fd,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nl)},persist:function(){},isPersistent:Nl}),t}var Oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$l=Pt(Oa),pi=b({},Oa,{view:0,detail:0}),Z2=Pt(pi),Ks,Qs,yi,Ul=b({},pi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Js,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yi&&(yi&&e.type==="mousemove"?(Ks=e.screenX-yi.screenX,Qs=e.screenY-yi.screenY):Qs=Ks=0,yi=e),Ks)},movementY:function(e){return"movementY"in e?e.movementY:Qs}}),Xd=Pt(Ul),K2=b({},Ul,{dataTransfer:0}),Q2=Pt(K2),I2=b({},pi,{relatedTarget:0}),Is=Pt(I2),J2=b({},Oa,{animationName:0,elapsedTime:0,pseudoElement:0}),W2=Pt(J2),ey=b({},Oa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ty=Pt(ey),ny=b({},Oa,{data:0}),Zd=Pt(ny),ay={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ry={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ly(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=iy[e])?!!t[e]:!1}function Js(){return ly}var oy=b({},pi,{key:function(e){if(e.key){var t=ay[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ll(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ry[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Js,charCode:function(e){return e.type==="keypress"?Ll(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ll(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sy=Pt(oy),cy=b({},Ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kd=Pt(cy),uy=b({},pi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Js}),fy=Pt(uy),dy=b({},Oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),hy=Pt(dy),my=b({},Ul,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gy=Pt(my),py=b({},Oa,{newState:0,oldState:0}),yy=Pt(py),vy=[9,13,27,32],Ws=Hn&&"CompositionEvent"in window,vi=null;Hn&&"documentMode"in document&&(vi=document.documentMode);var xy=Hn&&"TextEvent"in window&&!vi,Qd=Hn&&(!Ws||vi&&8<vi&&11>=vi),Id=" ",Jd=!1;function Wd(e,t){switch(e){case"keyup":return vy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function e0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yr=!1;function by(e,t){switch(e){case"compositionend":return e0(t);case"keypress":return t.which!==32?null:(Jd=!0,Id);case"textInput":return e=t.data,e===Id&&Jd?null:e;default:return null}}function wy(e,t){if(yr)return e==="compositionend"||!Ws&&Wd(e,t)?(e=Yd(),kl=Zs=la=null,yr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qd&&t.locale!=="ko"?null:t.data;default:return null}}var Sy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function t0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sy[e.type]:t==="textarea"}function n0(e,t,n,r){gr?pr?pr.push(r):pr=[r]:gr=r,t=Eo(t,"onChange"),0<t.length&&(n=new $l("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var xi=null,bi=null;function Cy(e){Nm(e,0)}function Hl(e){var t=hi(e);if($d(t))return e}function a0(e,t){if(e==="change")return t}var r0=!1;if(Hn){var ec;if(Hn){var tc="oninput"in document;if(!tc){var i0=document.createElement("div");i0.setAttribute("oninput","return;"),tc=typeof i0.oninput=="function"}ec=tc}else ec=!1;r0=ec&&(!document.documentMode||9<document.documentMode)}function l0(){xi&&(xi.detachEvent("onpropertychange",o0),bi=xi=null)}function o0(e){if(e.propertyName==="value"&&Hl(bi)){var t=[];n0(t,bi,e,Ys(e)),Gd(Cy,t)}}function jy(e,t,n){e==="focusin"?(l0(),xi=t,bi=n,xi.attachEvent("onpropertychange",o0)):e==="focusout"&&l0()}function Ey(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hl(bi)}function Ty(e,t){if(e==="click")return Hl(t)}function Ay(e,t){if(e==="input"||e==="change")return Hl(t)}function Ry(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Kt=typeof Object.is=="function"?Object.is:Ry;function wi(e,t){if(Kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!fe.call(t,s)||!Kt(e[s],t[s]))return!1}return!0}function s0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function c0(e,t){var n=s0(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=s0(n)}}function u0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?u0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function f0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Dl(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Dl(e.document)}return t}function nc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var _y=Hn&&"documentMode"in document&&11>=document.documentMode,vr=null,ac=null,Si=null,rc=!1;function d0(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rc||vr==null||vr!==Dl(r)||(r=vr,"selectionStart"in r&&nc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Si&&wi(Si,r)||(Si=r,r=Eo(ac,"onSelect"),0<r.length&&(t=new $l("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=vr)))}function Da(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xr={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionrun:Da("Transition","TransitionRun"),transitionstart:Da("Transition","TransitionStart"),transitioncancel:Da("Transition","TransitionCancel"),transitionend:Da("Transition","TransitionEnd")},ic={},h0={};Hn&&(h0=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function za(e){if(ic[e])return ic[e];if(!xr[e])return e;var t=xr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in h0)return ic[e]=t[n];return e}var m0=za("animationend"),g0=za("animationiteration"),p0=za("animationstart"),My=za("transitionrun"),Oy=za("transitionstart"),Dy=za("transitioncancel"),y0=za("transitionend"),v0=new Map,lc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lc.push("scrollEnd");function pn(e,t){v0.set(e,t),Ma(t,[e])}var x0=new WeakMap;function on(e,t){if(typeof e=="object"&&e!==null){var n=x0.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Ld(t)},x0.set(e,t),t)}return{value:e,source:t,stack:Ld(t)}}var sn=[],br=0,oc=0;function Bl(){for(var e=br,t=oc=br=0;t<e;){var n=sn[t];sn[t++]=null;var r=sn[t];sn[t++]=null;var s=sn[t];sn[t++]=null;var u=sn[t];if(sn[t++]=null,r!==null&&s!==null){var p=r.pending;p===null?s.next=s:(s.next=p.next,p.next=s),r.pending=s}u!==0&&b0(n,s,u)}}function Pl(e,t,n,r){sn[br++]=e,sn[br++]=t,sn[br++]=n,sn[br++]=r,oc|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function sc(e,t,n,r){return Pl(e,t,n,r),ql(e)}function wr(e,t){return Pl(e,null,null,t),ql(e)}function b0(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var s=!1,u=e.return;u!==null;)u.childLanes|=n,r=u.alternate,r!==null&&(r.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(s=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,s&&t!==null&&(s=31-mt(n),e=u.hiddenUpdates,r=e[s],r===null?e[s]=[t]:r.push(t),t.lane=n|536870912),u):null}function ql(e){if(50<Xi)throw Xi=0,mu=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Sr={};function zy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qt(e,t,n,r){return new zy(e,t,n,r)}function cc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bn(e,t){var n=e.alternate;return n===null?(n=Qt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function w0(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Vl(e,t,n,r,s,u){var p=0;if(r=e,typeof e=="function")cc(e)&&(p=1);else if(typeof e=="string")p=Lv(e,n,ie.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ne:return e=Qt(31,n,t,s),e.elementType=ne,e.lanes=u,e;case C:return ka(n.children,s,u,t);case E:p=8,s|=24;break;case A:return e=Qt(12,n,t,s|2),e.elementType=A,e.lanes=u,e;case Z:return e=Qt(13,n,t,s),e.elementType=Z,e.lanes=u,e;case ee:return e=Qt(19,n,t,s),e.elementType=ee,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:case z:p=10;break e;case H:p=9;break e;case K:p=11;break e;case P:p=14;break e;case I:p=16,r=null;break e}p=29,n=Error(l(130,e===null?"null":typeof e,"")),r=null}return t=Qt(p,n,t,s),t.elementType=e,t.type=r,t.lanes=u,t}function ka(e,t,n,r){return e=Qt(7,e,r,t),e.lanes=n,e}function uc(e,t,n){return e=Qt(6,e,null,t),e.lanes=n,e}function fc(e,t,n){return t=Qt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Cr=[],jr=0,Gl=null,Yl=0,cn=[],un=0,La=null,Pn=1,qn="";function Na(e,t){Cr[jr++]=Yl,Cr[jr++]=Gl,Gl=e,Yl=t}function S0(e,t,n){cn[un++]=Pn,cn[un++]=qn,cn[un++]=La,La=e;var r=Pn;e=qn;var s=32-mt(r)-1;r&=~(1<<s),n+=1;var u=32-mt(t)+s;if(30<u){var p=s-s%5;u=(r&(1<<p)-1).toString(32),r>>=p,s-=p,Pn=1<<32-mt(t)+s|n<<s|r,qn=u+e}else Pn=1<<u|n<<s|r,qn=e}function dc(e){e.return!==null&&(Na(e,1),S0(e,1,0))}function hc(e){for(;e===Gl;)Gl=Cr[--jr],Cr[jr]=null,Yl=Cr[--jr],Cr[jr]=null;for(;e===La;)La=cn[--un],cn[un]=null,qn=cn[--un],cn[un]=null,Pn=cn[--un],cn[un]=null}var Nt=null,at=null,Be=!1,$a=null,jn=!1,mc=Error(l(519));function Ua(e){var t=Error(l(418,""));throw Ei(on(t,e)),mc}function C0(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Mt]=e,t[Bt]=r,n){case"dialog":Ne("cancel",t),Ne("close",t);break;case"iframe":case"object":case"embed":Ne("load",t);break;case"video":case"audio":for(n=0;n<Ki.length;n++)Ne(Ki[n],t);break;case"source":Ne("error",t);break;case"img":case"image":case"link":Ne("error",t),Ne("load",t);break;case"details":Ne("toggle",t);break;case"input":Ne("invalid",t),Ud(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),Ol(t);break;case"select":Ne("invalid",t);break;case"textarea":Ne("invalid",t),Bd(t,r.value,r.defaultValue,r.children),Ol(t)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||r.suppressHydrationWarning===!0||Bm(t.textContent,n)?(r.popover!=null&&(Ne("beforetoggle",t),Ne("toggle",t)),r.onScroll!=null&&Ne("scroll",t),r.onScrollEnd!=null&&Ne("scrollend",t),r.onClick!=null&&(t.onclick=To),t=!0):t=!1,t||Ua(e)}function j0(e){for(Nt=e.return;Nt;)switch(Nt.tag){case 5:case 13:jn=!1;return;case 27:case 3:jn=!0;return;default:Nt=Nt.return}}function Ci(e){if(e!==Nt)return!1;if(!Be)return j0(e),Be=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Mu(e.type,e.memoizedProps)),n=!n),n&&at&&Ua(e),j0(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){at=vn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}at=null}}else t===27?(t=at,Sa(e.type)?(e=ku,ku=null,at=e):at=t):at=Nt?vn(e.stateNode.nextSibling):null;return!0}function ji(){at=Nt=null,Be=!1}function E0(){var e=$a;return e!==null&&(Gt===null?Gt=e:Gt.push.apply(Gt,e),$a=null),e}function Ei(e){$a===null?$a=[e]:$a.push(e)}var gc=q(null),Ha=null,Vn=null;function oa(e,t,n){ae(gc,t._currentValue),t._currentValue=n}function Gn(e){e._currentValue=gc.current,te(gc)}function pc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function yc(e,t,n,r){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var u=s.dependencies;if(u!==null){var p=s.child;u=u.firstContext;e:for(;u!==null;){var x=u;u=s;for(var T=0;T<t.length;T++)if(x.context===t[T]){u.lanes|=n,x=u.alternate,x!==null&&(x.lanes|=n),pc(u.return,n,e),r||(p=null);break e}u=x.next}}else if(s.tag===18){if(p=s.return,p===null)throw Error(l(341));p.lanes|=n,u=p.alternate,u!==null&&(u.lanes|=n),pc(p,n,e),p=null}else p=s.child;if(p!==null)p.return=s;else for(p=s;p!==null;){if(p===e){p=null;break}if(s=p.sibling,s!==null){s.return=p.return,p=s;break}p=p.return}s=p}}function Ti(e,t,n,r){e=null;for(var s=t,u=!1;s!==null;){if(!u){if((s.flags&524288)!==0)u=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var p=s.alternate;if(p===null)throw Error(l(387));if(p=p.memoizedProps,p!==null){var x=s.type;Kt(s.pendingProps.value,p.value)||(e!==null?e.push(x):e=[x])}}else if(s===V.current){if(p=s.alternate,p===null)throw Error(l(387));p.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(tl):e=[tl])}s=s.return}e!==null&&yc(t,e,n,r),t.flags|=262144}function Fl(e){for(e=e.firstContext;e!==null;){if(!Kt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ba(e){Ha=e,Vn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ot(e){return T0(Ha,e)}function Xl(e,t){return Ha===null&&Ba(e),T0(e,t)}function T0(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Vn===null){if(e===null)throw Error(l(308));Vn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Vn=Vn.next=t;return n}var ky=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Ly=a.unstable_scheduleCallback,Ny=a.unstable_NormalPriority,gt={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vc(){return{controller:new ky,data:new Map,refCount:0}}function Ai(e){e.refCount--,e.refCount===0&&Ly(Ny,function(){e.controller.abort()})}var Ri=null,xc=0,Er=0,Tr=null;function $y(e,t){if(Ri===null){var n=Ri=[];xc=0,Er=wu(),Tr={status:"pending",value:void 0,then:function(r){n.push(r)}}}return xc++,t.then(A0,A0),t}function A0(){if(--xc===0&&Ri!==null){Tr!==null&&(Tr.status="fulfilled");var e=Ri;Ri=null,Er=0,Tr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Uy(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(r.status="rejected",r.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),r}var R0=O.S;O.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&$y(e,t),R0!==null&&R0(e,t)};var Pa=q(null);function bc(){var e=Pa.current;return e!==null?e:Ie.pooledCache}function Zl(e,t){t===null?ae(Pa,Pa.current):ae(Pa,t.pool)}function _0(){var e=bc();return e===null?null:{parent:gt._currentValue,pool:e}}var _i=Error(l(460)),M0=Error(l(474)),Kl=Error(l(542)),wc={then:function(){}};function O0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ql(){}function D0(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ql,Ql),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,k0(e),e;default:if(typeof t.status=="string")t.then(Ql,Ql);else{if(e=Ie,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=r}},function(r){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,k0(e),e}throw Mi=t,_i}}var Mi=null;function z0(){if(Mi===null)throw Error(l(459));var e=Mi;return Mi=null,e}function k0(e){if(e===_i||e===Kl)throw Error(l(483))}var sa=!1;function Sc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ca(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ua(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ve&2)!==0){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,t=ql(e),b0(e,null,n),t}return Pl(e,r,t,n),ql(e)}function Oi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ad(e,n)}}function jc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var p={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?s=u=p:u=u.next=p,n=n.next}while(n!==null);u===null?s=u=t:u=u.next=t}else s=u=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ec=!1;function Di(){if(Ec){var e=Tr;if(e!==null)throw e}}function zi(e,t,n,r){Ec=!1;var s=e.updateQueue;sa=!1;var u=s.firstBaseUpdate,p=s.lastBaseUpdate,x=s.shared.pending;if(x!==null){s.shared.pending=null;var T=x,N=T.next;T.next=null,p===null?u=N:p.next=N,p=T;var X=e.alternate;X!==null&&(X=X.updateQueue,x=X.lastBaseUpdate,x!==p&&(x===null?X.firstBaseUpdate=N:x.next=N,X.lastBaseUpdate=T))}if(u!==null){var W=s.baseState;p=0,X=N=T=null,x=u;do{var $=x.lane&-536870913,U=$!==x.lane;if(U?(Ue&$)===$:(r&$)===$){$!==0&&$===Er&&(Ec=!0),X!==null&&(X=X.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});e:{var Te=e,je=x;$=t;var Ze=n;switch(je.tag){case 1:if(Te=je.payload,typeof Te=="function"){W=Te.call(Ze,W,$);break e}W=Te;break e;case 3:Te.flags=Te.flags&-65537|128;case 0:if(Te=je.payload,$=typeof Te=="function"?Te.call(Ze,W,$):Te,$==null)break e;W=b({},W,$);break e;case 2:sa=!0}}$=x.callback,$!==null&&(e.flags|=64,U&&(e.flags|=8192),U=s.callbacks,U===null?s.callbacks=[$]:U.push($))}else U={lane:$,tag:x.tag,payload:x.payload,callback:x.callback,next:null},X===null?(N=X=U,T=W):X=X.next=U,p|=$;if(x=x.next,x===null){if(x=s.shared.pending,x===null)break;U=x,x=U.next,U.next=null,s.lastBaseUpdate=U,s.shared.pending=null}}while(!0);X===null&&(T=W),s.baseState=T,s.firstBaseUpdate=N,s.lastBaseUpdate=X,u===null&&(s.shared.lanes=0),va|=p,e.lanes=p,e.memoizedState=W}}function L0(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function N0(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)L0(n[e],t)}var Ar=q(null),Il=q(0);function $0(e,t){e=In,ae(Il,e),ae(Ar,t),In=e|t.baseLanes}function Tc(){ae(Il,In),ae(Ar,Ar.current)}function Ac(){In=Il.current,te(Ar),te(Il)}var fa=0,ze=null,Fe=null,ft=null,Jl=!1,Rr=!1,qa=!1,Wl=0,ki=0,_r=null,Hy=0;function lt(){throw Error(l(321))}function Rc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Kt(e[n],t[n]))return!1;return!0}function _c(e,t,n,r,s,u){return fa=u,ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?bh:wh,qa=!1,u=n(r,s),qa=!1,Rr&&(u=H0(t,n,r,s)),U0(e),u}function U0(e){O.H=io;var t=Fe!==null&&Fe.next!==null;if(fa=0,ft=Fe=ze=null,Jl=!1,ki=0,_r=null,t)throw Error(l(300));e===null||xt||(e=e.dependencies,e!==null&&Fl(e)&&(xt=!0))}function H0(e,t,n,r){ze=e;var s=0;do{if(Rr&&(_r=null),ki=0,Rr=!1,25<=s)throw Error(l(301));if(s+=1,ft=Fe=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}O.H=Fy,u=t(n,r)}while(Rr);return u}function By(){var e=O.H,t=e.useState()[0];return t=typeof t.then=="function"?Li(t):t,e=e.useState()[0],(Fe!==null?Fe.memoizedState:null)!==e&&(ze.flags|=1024),t}function Mc(){var e=Wl!==0;return Wl=0,e}function Oc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Dc(e){if(Jl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Jl=!1}fa=0,ft=Fe=ze=null,Rr=!1,ki=Wl=0,_r=null}function qt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?ze.memoizedState=ft=e:ft=ft.next=e,ft}function dt(){if(Fe===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=ft===null?ze.memoizedState:ft.next;if(t!==null)ft=t,Fe=e;else{if(e===null)throw ze.alternate===null?Error(l(467)):Error(l(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},ft===null?ze.memoizedState=ft=e:ft=ft.next=e}return ft}function zc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Li(e){var t=ki;return ki+=1,_r===null&&(_r=[]),e=D0(_r,e,t),t=ze,(ft===null?t.memoizedState:ft.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?bh:wh),e}function eo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Li(e);if(e.$$typeof===z)return Ot(e)}throw Error(l(438,String(e)))}function kc(e){var t=null,n=ze.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=ze.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=zc(),ze.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ce;return t.index++,n}function Yn(e,t){return typeof t=="function"?t(e):t}function to(e){var t=dt();return Lc(t,Fe,e)}function Lc(e,t,n){var r=e.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=n;var s=e.baseQueue,u=r.pending;if(u!==null){if(s!==null){var p=s.next;s.next=u.next,u.next=p}t.baseQueue=s=u,r.pending=null}if(u=e.baseState,s===null)e.memoizedState=u;else{t=s.next;var x=p=null,T=null,N=t,X=!1;do{var W=N.lane&-536870913;if(W!==N.lane?(Ue&W)===W:(fa&W)===W){var $=N.revertLane;if($===0)T!==null&&(T=T.next={lane:0,revertLane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),W===Er&&(X=!0);else if((fa&$)===$){N=N.next,$===Er&&(X=!0);continue}else W={lane:0,revertLane:N.revertLane,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},T===null?(x=T=W,p=u):T=T.next=W,ze.lanes|=$,va|=$;W=N.action,qa&&n(u,W),u=N.hasEagerState?N.eagerState:n(u,W)}else $={lane:W,revertLane:N.revertLane,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},T===null?(x=T=$,p=u):T=T.next=$,ze.lanes|=W,va|=W;N=N.next}while(N!==null&&N!==t);if(T===null?p=u:T.next=x,!Kt(u,e.memoizedState)&&(xt=!0,X&&(n=Tr,n!==null)))throw n;e.memoizedState=u,e.baseState=p,e.baseQueue=T,r.lastRenderedState=u}return s===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Nc(e){var t=dt(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,u=t.memoizedState;if(s!==null){n.pending=null;var p=s=s.next;do u=e(u,p.action),p=p.next;while(p!==s);Kt(u,t.memoizedState)||(xt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,r]}function B0(e,t,n){var r=ze,s=dt(),u=Be;if(u){if(n===void 0)throw Error(l(407));n=n()}else n=t();var p=!Kt((Fe||s).memoizedState,n);p&&(s.memoizedState=n,xt=!0),s=s.queue;var x=V0.bind(null,r,s,e);if(Ni(2048,8,x,[e]),s.getSnapshot!==t||p||ft!==null&&ft.memoizedState.tag&1){if(r.flags|=2048,Mr(9,no(),q0.bind(null,r,s,n,t),null),Ie===null)throw Error(l(349));u||(fa&124)!==0||P0(r,t,n)}return n}function P0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ze.updateQueue,t===null?(t=zc(),ze.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function q0(e,t,n,r){t.value=n,t.getSnapshot=r,G0(t)&&Y0(e)}function V0(e,t,n){return n(function(){G0(t)&&Y0(e)})}function G0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Kt(e,n)}catch{return!0}}function Y0(e){var t=wr(e,2);t!==null&&tn(t,e,2)}function $c(e){var t=qt();if(typeof e=="function"){var n=e;if(e=n(),qa){Ht(!0);try{n()}finally{Ht(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:e},t}function F0(e,t,n,r){return e.baseState=n,Lc(e,Fe,typeof r=="function"?r:Yn)}function Py(e,t,n,r,s){if(ro(e))throw Error(l(485));if(e=t.action,e!==null){var u={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){u.listeners.push(p)}};O.T!==null?n(!0):u.isTransition=!1,r(u),n=t.pending,n===null?(u.next=t.pending=u,X0(t,u)):(u.next=n.next,t.pending=n.next=u)}}function X0(e,t){var n=t.action,r=t.payload,s=e.state;if(t.isTransition){var u=O.T,p={};O.T=p;try{var x=n(s,r),T=O.S;T!==null&&T(p,x),Z0(e,t,x)}catch(N){Uc(e,t,N)}finally{O.T=u}}else try{u=n(s,r),Z0(e,t,u)}catch(N){Uc(e,t,N)}}function Z0(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){K0(e,t,r)},function(r){return Uc(e,t,r)}):K0(e,t,n)}function K0(e,t,n){t.status="fulfilled",t.value=n,Q0(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,X0(e,n)))}function Uc(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=n,Q0(t),t=t.next;while(t!==r)}e.action=null}function Q0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function I0(e,t){return t}function J0(e,t){if(Be){var n=Ie.formState;if(n!==null){e:{var r=ze;if(Be){if(at){t:{for(var s=at,u=jn;s.nodeType!==8;){if(!u){s=null;break t}if(s=vn(s.nextSibling),s===null){s=null;break t}}u=s.data,s=u==="F!"||u==="F"?s:null}if(s){at=vn(s.nextSibling),r=s.data==="F!";break e}}Ua(r)}r=!1}r&&(t=n[0])}}return n=qt(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:I0,lastRenderedState:t},n.queue=r,n=yh.bind(null,ze,r),r.dispatch=n,r=$c(!1),u=Vc.bind(null,ze,!1,r.queue),r=qt(),s={state:t,dispatch:null,action:e,pending:null},r.queue=s,n=Py.bind(null,ze,s,u,n),s.dispatch=n,r.memoizedState=e,[t,n,!1]}function W0(e){var t=dt();return eh(t,Fe,e)}function eh(e,t,n){if(t=Lc(e,t,I0)[0],e=to(Yn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var r=Li(t)}catch(p){throw p===_i?Kl:p}else r=t;t=dt();var s=t.queue,u=s.dispatch;return n!==t.memoizedState&&(ze.flags|=2048,Mr(9,no(),qy.bind(null,s,n),null)),[r,u,e]}function qy(e,t){e.action=t}function th(e){var t=dt(),n=Fe;if(n!==null)return eh(t,n,e);dt(),t=t.memoizedState,n=dt();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Mr(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=ze.updateQueue,t===null&&(t=zc(),ze.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function no(){return{destroy:void 0,resource:void 0}}function nh(){return dt().memoizedState}function ao(e,t,n,r){var s=qt();r=r===void 0?null:r,ze.flags|=e,s.memoizedState=Mr(1|t,no(),n,r)}function Ni(e,t,n,r){var s=dt();r=r===void 0?null:r;var u=s.memoizedState.inst;Fe!==null&&r!==null&&Rc(r,Fe.memoizedState.deps)?s.memoizedState=Mr(t,u,n,r):(ze.flags|=e,s.memoizedState=Mr(1|t,u,n,r))}function ah(e,t){ao(8390656,8,e,t)}function rh(e,t){Ni(2048,8,e,t)}function ih(e,t){return Ni(4,2,e,t)}function lh(e,t){return Ni(4,4,e,t)}function oh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sh(e,t,n){n=n!=null?n.concat([e]):null,Ni(4,4,oh.bind(null,t,e),n)}function Hc(){}function ch(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Rc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function uh(e,t){var n=dt();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Rc(t,r[1]))return r[0];if(r=e(),qa){Ht(!0);try{e()}finally{Ht(!1)}}return n.memoizedState=[r,t],r}function Bc(e,t,n){return n===void 0||(fa&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=hm(),ze.lanes|=e,va|=e,n)}function fh(e,t,n,r){return Kt(n,t)?n:Ar.current!==null?(e=Bc(e,n,r),Kt(e,t)||(xt=!0),e):(fa&42)===0?(xt=!0,e.memoizedState=n):(e=hm(),ze.lanes|=e,va|=e,t)}function dh(e,t,n,r,s){var u=J.p;J.p=u!==0&&8>u?u:8;var p=O.T,x={};O.T=x,Vc(e,!1,t,n);try{var T=s(),N=O.S;if(N!==null&&N(x,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var X=Uy(T,r);$i(e,t,X,en(e))}else $i(e,t,r,en(e))}catch(W){$i(e,t,{then:function(){},status:"rejected",reason:W},en())}finally{J.p=u,O.T=p}}function Vy(){}function Pc(e,t,n,r){if(e.tag!==5)throw Error(l(476));var s=hh(e).queue;dh(e,s,t,le,n===null?Vy:function(){return mh(e),n(r)})}function hh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:le},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function mh(e){var t=hh(e).next.queue;$i(e,t,{},en())}function qc(){return Ot(tl)}function gh(){return dt().memoizedState}function ph(){return dt().memoizedState}function Gy(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=en();e=ca(n);var r=ua(t,e,n);r!==null&&(tn(r,t,n),Oi(r,t,n)),t={cache:vc()},e.payload=t;return}t=t.return}}function Yy(e,t,n){var r=en();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},ro(e)?vh(t,n):(n=sc(e,t,n,r),n!==null&&(tn(n,e,r),xh(n,t,r)))}function yh(e,t,n){var r=en();$i(e,t,n,r)}function $i(e,t,n,r){var s={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(ro(e))vh(t,s);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var p=t.lastRenderedState,x=u(p,n);if(s.hasEagerState=!0,s.eagerState=x,Kt(x,p))return Pl(e,t,s,0),Ie===null&&Bl(),!1}catch{}finally{}if(n=sc(e,t,s,r),n!==null)return tn(n,e,r),xh(n,t,r),!0}return!1}function Vc(e,t,n,r){if(r={lane:2,revertLane:wu(),action:r,hasEagerState:!1,eagerState:null,next:null},ro(e)){if(t)throw Error(l(479))}else t=sc(e,n,r,2),t!==null&&tn(t,e,2)}function ro(e){var t=e.alternate;return e===ze||t!==null&&t===ze}function vh(e,t){Rr=Jl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function xh(e,t,n){if((n&4194048)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ad(e,n)}}var io={readContext:Ot,use:eo,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useLayoutEffect:lt,useInsertionEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useSyncExternalStore:lt,useId:lt,useHostTransitionStatus:lt,useFormState:lt,useActionState:lt,useOptimistic:lt,useMemoCache:lt,useCacheRefresh:lt},bh={readContext:Ot,use:eo,useCallback:function(e,t){return qt().memoizedState=[e,t===void 0?null:t],e},useContext:Ot,useEffect:ah,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ao(4194308,4,oh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ao(4194308,4,e,t)},useInsertionEffect:function(e,t){ao(4,2,e,t)},useMemo:function(e,t){var n=qt();t=t===void 0?null:t;var r=e();if(qa){Ht(!0);try{e()}finally{Ht(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=qt();if(n!==void 0){var s=n(t);if(qa){Ht(!0);try{n(t)}finally{Ht(!1)}}}else s=t;return r.memoizedState=r.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},r.queue=e,e=e.dispatch=Yy.bind(null,ze,e),[r.memoizedState,e]},useRef:function(e){var t=qt();return e={current:e},t.memoizedState=e},useState:function(e){e=$c(e);var t=e.queue,n=yh.bind(null,ze,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Hc,useDeferredValue:function(e,t){var n=qt();return Bc(n,e,t)},useTransition:function(){var e=$c(!1);return e=dh.bind(null,ze,e.queue,!0,!1),qt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=ze,s=qt();if(Be){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),Ie===null)throw Error(l(349));(Ue&124)!==0||P0(r,t,n)}s.memoizedState=n;var u={value:n,getSnapshot:t};return s.queue=u,ah(V0.bind(null,r,u,e),[e]),r.flags|=2048,Mr(9,no(),q0.bind(null,r,u,n,t),null),n},useId:function(){var e=qt(),t=Ie.identifierPrefix;if(Be){var n=qn,r=Pn;n=(r&~(1<<32-mt(r)-1)).toString(32)+n,t="«"+t+"R"+n,n=Wl++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=Hy++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:qc,useFormState:J0,useActionState:J0,useOptimistic:function(e){var t=qt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Vc.bind(null,ze,!0,n),n.dispatch=t,[e,t]},useMemoCache:kc,useCacheRefresh:function(){return qt().memoizedState=Gy.bind(null,ze)}},wh={readContext:Ot,use:eo,useCallback:ch,useContext:Ot,useEffect:rh,useImperativeHandle:sh,useInsertionEffect:ih,useLayoutEffect:lh,useMemo:uh,useReducer:to,useRef:nh,useState:function(){return to(Yn)},useDebugValue:Hc,useDeferredValue:function(e,t){var n=dt();return fh(n,Fe.memoizedState,e,t)},useTransition:function(){var e=to(Yn)[0],t=dt().memoizedState;return[typeof e=="boolean"?e:Li(e),t]},useSyncExternalStore:B0,useId:gh,useHostTransitionStatus:qc,useFormState:W0,useActionState:W0,useOptimistic:function(e,t){var n=dt();return F0(n,Fe,e,t)},useMemoCache:kc,useCacheRefresh:ph},Fy={readContext:Ot,use:eo,useCallback:ch,useContext:Ot,useEffect:rh,useImperativeHandle:sh,useInsertionEffect:ih,useLayoutEffect:lh,useMemo:uh,useReducer:Nc,useRef:nh,useState:function(){return Nc(Yn)},useDebugValue:Hc,useDeferredValue:function(e,t){var n=dt();return Fe===null?Bc(n,e,t):fh(n,Fe.memoizedState,e,t)},useTransition:function(){var e=Nc(Yn)[0],t=dt().memoizedState;return[typeof e=="boolean"?e:Li(e),t]},useSyncExternalStore:B0,useId:gh,useHostTransitionStatus:qc,useFormState:th,useActionState:th,useOptimistic:function(e,t){var n=dt();return Fe!==null?F0(n,Fe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:kc,useCacheRefresh:ph},Or=null,Ui=0;function lo(e){var t=Ui;return Ui+=1,Or===null&&(Or=[]),D0(Or,e,t)}function Hi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function oo(e,t){throw t.$$typeof===S?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Sh(e){var t=e._init;return t(e._payload)}function Ch(e){function t(k,M){if(e){var L=k.deletions;L===null?(k.deletions=[M],k.flags|=16):L.push(M)}}function n(k,M){if(!e)return null;for(;M!==null;)t(k,M),M=M.sibling;return null}function r(k){for(var M=new Map;k!==null;)k.key!==null?M.set(k.key,k):M.set(k.index,k),k=k.sibling;return M}function s(k,M){return k=Bn(k,M),k.index=0,k.sibling=null,k}function u(k,M,L){return k.index=L,e?(L=k.alternate,L!==null?(L=L.index,L<M?(k.flags|=67108866,M):L):(k.flags|=67108866,M)):(k.flags|=1048576,M)}function p(k){return e&&k.alternate===null&&(k.flags|=67108866),k}function x(k,M,L,Q){return M===null||M.tag!==6?(M=uc(L,k.mode,Q),M.return=k,M):(M=s(M,L),M.return=k,M)}function T(k,M,L,Q){var ve=L.type;return ve===C?X(k,M,L.props.children,Q,L.key):M!==null&&(M.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===I&&Sh(ve)===M.type)?(M=s(M,L.props),Hi(M,L),M.return=k,M):(M=Vl(L.type,L.key,L.props,null,k.mode,Q),Hi(M,L),M.return=k,M)}function N(k,M,L,Q){return M===null||M.tag!==4||M.stateNode.containerInfo!==L.containerInfo||M.stateNode.implementation!==L.implementation?(M=fc(L,k.mode,Q),M.return=k,M):(M=s(M,L.children||[]),M.return=k,M)}function X(k,M,L,Q,ve){return M===null||M.tag!==7?(M=ka(L,k.mode,Q,ve),M.return=k,M):(M=s(M,L),M.return=k,M)}function W(k,M,L){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=uc(""+M,k.mode,L),M.return=k,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case j:return L=Vl(M.type,M.key,M.props,null,k.mode,L),Hi(L,M),L.return=k,L;case _:return M=fc(M,k.mode,L),M.return=k,M;case I:var Q=M._init;return M=Q(M._payload),W(k,M,L)}if(re(M)||se(M))return M=ka(M,k.mode,L,null),M.return=k,M;if(typeof M.then=="function")return W(k,lo(M),L);if(M.$$typeof===z)return W(k,Xl(k,M),L);oo(k,M)}return null}function $(k,M,L,Q){var ve=M!==null?M.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return ve!==null?null:x(k,M,""+L,Q);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case j:return L.key===ve?T(k,M,L,Q):null;case _:return L.key===ve?N(k,M,L,Q):null;case I:return ve=L._init,L=ve(L._payload),$(k,M,L,Q)}if(re(L)||se(L))return ve!==null?null:X(k,M,L,Q,null);if(typeof L.then=="function")return $(k,M,lo(L),Q);if(L.$$typeof===z)return $(k,M,Xl(k,L),Q);oo(k,L)}return null}function U(k,M,L,Q,ve){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return k=k.get(L)||null,x(M,k,""+Q,ve);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case j:return k=k.get(Q.key===null?L:Q.key)||null,T(M,k,Q,ve);case _:return k=k.get(Q.key===null?L:Q.key)||null,N(M,k,Q,ve);case I:var ke=Q._init;return Q=ke(Q._payload),U(k,M,L,Q,ve)}if(re(Q)||se(Q))return k=k.get(L)||null,X(M,k,Q,ve,null);if(typeof Q.then=="function")return U(k,M,L,lo(Q),ve);if(Q.$$typeof===z)return U(k,M,L,Xl(M,Q),ve);oo(M,Q)}return null}function Te(k,M,L,Q){for(var ve=null,ke=null,we=M,Ee=M=0,wt=null;we!==null&&Ee<L.length;Ee++){we.index>Ee?(wt=we,we=null):wt=we.sibling;var He=$(k,we,L[Ee],Q);if(He===null){we===null&&(we=wt);break}e&&we&&He.alternate===null&&t(k,we),M=u(He,M,Ee),ke===null?ve=He:ke.sibling=He,ke=He,we=wt}if(Ee===L.length)return n(k,we),Be&&Na(k,Ee),ve;if(we===null){for(;Ee<L.length;Ee++)we=W(k,L[Ee],Q),we!==null&&(M=u(we,M,Ee),ke===null?ve=we:ke.sibling=we,ke=we);return Be&&Na(k,Ee),ve}for(we=r(we);Ee<L.length;Ee++)wt=U(we,k,Ee,L[Ee],Q),wt!==null&&(e&&wt.alternate!==null&&we.delete(wt.key===null?Ee:wt.key),M=u(wt,M,Ee),ke===null?ve=wt:ke.sibling=wt,ke=wt);return e&&we.forEach(function(Aa){return t(k,Aa)}),Be&&Na(k,Ee),ve}function je(k,M,L,Q){if(L==null)throw Error(l(151));for(var ve=null,ke=null,we=M,Ee=M=0,wt=null,He=L.next();we!==null&&!He.done;Ee++,He=L.next()){we.index>Ee?(wt=we,we=null):wt=we.sibling;var Aa=$(k,we,He.value,Q);if(Aa===null){we===null&&(we=wt);break}e&&we&&Aa.alternate===null&&t(k,we),M=u(Aa,M,Ee),ke===null?ve=Aa:ke.sibling=Aa,ke=Aa,we=wt}if(He.done)return n(k,we),Be&&Na(k,Ee),ve;if(we===null){for(;!He.done;Ee++,He=L.next())He=W(k,He.value,Q),He!==null&&(M=u(He,M,Ee),ke===null?ve=He:ke.sibling=He,ke=He);return Be&&Na(k,Ee),ve}for(we=r(we);!He.done;Ee++,He=L.next())He=U(we,k,Ee,He.value,Q),He!==null&&(e&&He.alternate!==null&&we.delete(He.key===null?Ee:He.key),M=u(He,M,Ee),ke===null?ve=He:ke.sibling=He,ke=He);return e&&we.forEach(function(Xv){return t(k,Xv)}),Be&&Na(k,Ee),ve}function Ze(k,M,L,Q){if(typeof L=="object"&&L!==null&&L.type===C&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case j:e:{for(var ve=L.key;M!==null;){if(M.key===ve){if(ve=L.type,ve===C){if(M.tag===7){n(k,M.sibling),Q=s(M,L.props.children),Q.return=k,k=Q;break e}}else if(M.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===I&&Sh(ve)===M.type){n(k,M.sibling),Q=s(M,L.props),Hi(Q,L),Q.return=k,k=Q;break e}n(k,M);break}else t(k,M);M=M.sibling}L.type===C?(Q=ka(L.props.children,k.mode,Q,L.key),Q.return=k,k=Q):(Q=Vl(L.type,L.key,L.props,null,k.mode,Q),Hi(Q,L),Q.return=k,k=Q)}return p(k);case _:e:{for(ve=L.key;M!==null;){if(M.key===ve)if(M.tag===4&&M.stateNode.containerInfo===L.containerInfo&&M.stateNode.implementation===L.implementation){n(k,M.sibling),Q=s(M,L.children||[]),Q.return=k,k=Q;break e}else{n(k,M);break}else t(k,M);M=M.sibling}Q=fc(L,k.mode,Q),Q.return=k,k=Q}return p(k);case I:return ve=L._init,L=ve(L._payload),Ze(k,M,L,Q)}if(re(L))return Te(k,M,L,Q);if(se(L)){if(ve=se(L),typeof ve!="function")throw Error(l(150));return L=ve.call(L),je(k,M,L,Q)}if(typeof L.then=="function")return Ze(k,M,lo(L),Q);if(L.$$typeof===z)return Ze(k,M,Xl(k,L),Q);oo(k,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,M!==null&&M.tag===6?(n(k,M.sibling),Q=s(M,L),Q.return=k,k=Q):(n(k,M),Q=uc(L,k.mode,Q),Q.return=k,k=Q),p(k)):n(k,M)}return function(k,M,L,Q){try{Ui=0;var ve=Ze(k,M,L,Q);return Or=null,ve}catch(we){if(we===_i||we===Kl)throw we;var ke=Qt(29,we,null,k.mode);return ke.lanes=Q,ke.return=k,ke}finally{}}}var Dr=Ch(!0),jh=Ch(!1),fn=q(null),En=null;function da(e){var t=e.alternate;ae(pt,pt.current&1),ae(fn,e),En===null&&(t===null||Ar.current!==null||t.memoizedState!==null)&&(En=e)}function Eh(e){if(e.tag===22){if(ae(pt,pt.current),ae(fn,e),En===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(En=e)}}else ha()}function ha(){ae(pt,pt.current),ae(fn,fn.current)}function Fn(e){te(fn),En===e&&(En=null),te(pt)}var pt=q(0);function so(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||zu(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Gc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:b({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=en(),s=ca(r);s.payload=t,n!=null&&(s.callback=n),t=ua(e,s,r),t!==null&&(tn(t,e,r),Oi(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=en(),s=ca(r);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ua(e,s,r),t!==null&&(tn(t,e,r),Oi(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=en(),r=ca(n);r.tag=2,t!=null&&(r.callback=t),t=ua(e,r,n),t!==null&&(tn(t,e,n),Oi(t,e,n))}};function Th(e,t,n,r,s,u,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,u,p):t.prototype&&t.prototype.isPureReactComponent?!wi(n,r)||!wi(s,u):!0}function Ah(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Yc.enqueueReplaceState(t,t.state,null)}function Va(e,t){var n=t;if("ref"in t){n={};for(var r in t)r!=="ref"&&(n[r]=t[r])}if(e=e.defaultProps){n===t&&(n=b({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}var co=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Rh(e){co(e)}function _h(e){console.error(e)}function Mh(e){co(e)}function uo(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function Oh(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Fc(e,t,n){return n=ca(n),n.tag=3,n.payload={element:null},n.callback=function(){uo(e,t)},n}function Dh(e){return e=ca(e),e.tag=3,e}function zh(e,t,n,r){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var u=r.value;e.payload=function(){return s(u)},e.callback=function(){Oh(t,n,r)}}var p=n.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){Oh(t,n,r),typeof s!="function"&&(xa===null?xa=new Set([this]):xa.add(this));var x=r.stack;this.componentDidCatch(r.value,{componentStack:x!==null?x:""})})}function Xy(e,t,n,r,s){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=n.alternate,t!==null&&Ti(t,n,s,!0),n=fn.current,n!==null){switch(n.tag){case 13:return En===null?pu():n.alternate===null&&rt===0&&(rt=3),n.flags&=-257,n.flags|=65536,n.lanes=s,r===wc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),vu(e,r,s)),!1;case 22:return n.flags|=65536,r===wc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),vu(e,r,s)),!1}throw Error(l(435,n.tag))}return vu(e,r,s),pu(),!1}if(Be)return t=fn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,r!==mc&&(e=Error(l(422),{cause:r}),Ei(on(e,n)))):(r!==mc&&(t=Error(l(423),{cause:r}),Ei(on(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,r=on(r,n),s=Fc(e.stateNode,r,s),jc(e,s),rt!==4&&(rt=2)),!1;var u=Error(l(520),{cause:r});if(u=on(u,n),Fi===null?Fi=[u]:Fi.push(u),rt!==4&&(rt=2),t===null)return!0;r=on(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=Fc(n.stateNode,r,e),jc(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(xa===null||!xa.has(u))))return n.flags|=65536,s&=-s,n.lanes|=s,s=Dh(s),zh(s,e,n,r),jc(n,s),!1}n=n.return}while(n!==null);return!1}var kh=Error(l(461)),xt=!1;function Tt(e,t,n,r){t.child=e===null?jh(t,null,n,r):Dr(t,e.child,n,r)}function Lh(e,t,n,r,s){n=n.render;var u=t.ref;if("ref"in r){var p={};for(var x in r)x!=="ref"&&(p[x]=r[x])}else p=r;return Ba(t),r=_c(e,t,n,p,u,s),x=Mc(),e!==null&&!xt?(Oc(e,t,s),Xn(e,t,s)):(Be&&x&&dc(t),t.flags|=1,Tt(e,t,r,s),t.child)}function Nh(e,t,n,r,s){if(e===null){var u=n.type;return typeof u=="function"&&!cc(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,$h(e,t,u,r,s)):(e=Vl(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!eu(e,s)){var p=u.memoizedProps;if(n=n.compare,n=n!==null?n:wi,n(p,r)&&e.ref===t.ref)return Xn(e,t,s)}return t.flags|=1,e=Bn(u,r),e.ref=t.ref,e.return=t,t.child=e}function $h(e,t,n,r,s){if(e!==null){var u=e.memoizedProps;if(wi(u,r)&&e.ref===t.ref)if(xt=!1,t.pendingProps=r=u,eu(e,s))(e.flags&131072)!==0&&(xt=!0);else return t.lanes=e.lanes,Xn(e,t,s)}return Xc(e,t,n,r,s)}function Uh(e,t,n){var r=t.pendingProps,s=r.children,u=e!==null?e.memoizedState:null;if(r.mode==="hidden"){if((t.flags&128)!==0){if(r=u!==null?u.baseLanes|n:n,e!==null){for(s=t.child=e.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;t.childLanes=u&~r}else t.childLanes=0,t.child=null;return Hh(e,t,r,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Zl(t,u!==null?u.cachePool:null),u!==null?$0(t,u):Tc(),Eh(t);else return t.lanes=t.childLanes=536870912,Hh(e,t,u!==null?u.baseLanes|n:n,n)}else u!==null?(Zl(t,u.cachePool),$0(t,u),ha(),t.memoizedState=null):(e!==null&&Zl(t,null),Tc(),ha());return Tt(e,t,s,n),t.child}function Hh(e,t,n,r){var s=bc();return s=s===null?null:{parent:gt._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&Zl(t,null),Tc(),Eh(t),e!==null&&Ti(e,t,r,!0),null}function fo(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(l(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Xc(e,t,n,r,s){return Ba(t),n=_c(e,t,n,r,void 0,s),r=Mc(),e!==null&&!xt?(Oc(e,t,s),Xn(e,t,s)):(Be&&r&&dc(t),t.flags|=1,Tt(e,t,n,s),t.child)}function Bh(e,t,n,r,s,u){return Ba(t),t.updateQueue=null,n=H0(t,r,n,s),U0(e),r=Mc(),e!==null&&!xt?(Oc(e,t,u),Xn(e,t,u)):(Be&&r&&dc(t),t.flags|=1,Tt(e,t,n,u),t.child)}function Ph(e,t,n,r,s){if(Ba(t),t.stateNode===null){var u=Sr,p=n.contextType;typeof p=="object"&&p!==null&&(u=Ot(p)),u=new n(r,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Yc,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=r,u.state=t.memoizedState,u.refs={},Sc(t),p=n.contextType,u.context=typeof p=="object"&&p!==null?Ot(p):Sr,u.state=t.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(Gc(t,n,p,r),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(p=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),p!==u.state&&Yc.enqueueReplaceState(u,u.state,null),zi(t,r,u,s),Di(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){u=t.stateNode;var x=t.memoizedProps,T=Va(n,x);u.props=T;var N=u.context,X=n.contextType;p=Sr,typeof X=="object"&&X!==null&&(p=Ot(X));var W=n.getDerivedStateFromProps;X=typeof W=="function"||typeof u.getSnapshotBeforeUpdate=="function",x=t.pendingProps!==x,X||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(x||N!==p)&&Ah(t,u,r,p),sa=!1;var $=t.memoizedState;u.state=$,zi(t,r,u,s),Di(),N=t.memoizedState,x||$!==N||sa?(typeof W=="function"&&(Gc(t,n,W,r),N=t.memoizedState),(T=sa||Th(t,n,T,r,$,N,p))?(X||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=N),u.props=r,u.state=N,u.context=p,r=T):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{u=t.stateNode,Cc(e,t),p=t.memoizedProps,X=Va(n,p),u.props=X,W=t.pendingProps,$=u.context,N=n.contextType,T=Sr,typeof N=="object"&&N!==null&&(T=Ot(N)),x=n.getDerivedStateFromProps,(N=typeof x=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(p!==W||$!==T)&&Ah(t,u,r,T),sa=!1,$=t.memoizedState,u.state=$,zi(t,r,u,s),Di();var U=t.memoizedState;p!==W||$!==U||sa||e!==null&&e.dependencies!==null&&Fl(e.dependencies)?(typeof x=="function"&&(Gc(t,n,x,r),U=t.memoizedState),(X=sa||Th(t,n,X,r,$,U,T)||e!==null&&e.dependencies!==null&&Fl(e.dependencies))?(N||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,U,T),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,U,T)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||p===e.memoizedProps&&$===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&$===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=U),u.props=r,u.state=U,u.context=T,r=X):(typeof u.componentDidUpdate!="function"||p===e.memoizedProps&&$===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&$===e.memoizedState||(t.flags|=1024),r=!1)}return u=r,fo(e,t),r=(t.flags&128)!==0,u||r?(u=t.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&r?(t.child=Dr(t,e.child,null,s),t.child=Dr(t,null,n,s)):Tt(e,t,n,s),t.memoizedState=u.state,e=t.child):e=Xn(e,t,s),e}function qh(e,t,n,r){return ji(),t.flags|=256,Tt(e,t,n,r),t.child}var Zc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Kc(e){return{baseLanes:e,cachePool:_0()}}function Qc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=dn),e}function Vh(e,t,n){var r=t.pendingProps,s=!1,u=(t.flags&128)!==0,p;if((p=u)||(p=e!==null&&e.memoizedState===null?!1:(pt.current&2)!==0),p&&(s=!0,t.flags&=-129),p=(t.flags&32)!==0,t.flags&=-33,e===null){if(Be){if(s?da(t):ha(),Be){var x=at,T;if(T=x){e:{for(T=x,x=jn;T.nodeType!==8;){if(!x){x=null;break e}if(T=vn(T.nextSibling),T===null){x=null;break e}}x=T}x!==null?(t.memoizedState={dehydrated:x,treeContext:La!==null?{id:Pn,overflow:qn}:null,retryLane:536870912,hydrationErrors:null},T=Qt(18,null,null,0),T.stateNode=x,T.return=t,t.child=T,Nt=t,at=null,T=!0):T=!1}T||Ua(t)}if(x=t.memoizedState,x!==null&&(x=x.dehydrated,x!==null))return zu(x)?t.lanes=32:t.lanes=536870912,null;Fn(t)}return x=r.children,r=r.fallback,s?(ha(),s=t.mode,x=ho({mode:"hidden",children:x},s),r=ka(r,s,n,null),x.return=t,r.return=t,x.sibling=r,t.child=x,s=t.child,s.memoizedState=Kc(n),s.childLanes=Qc(e,p,n),t.memoizedState=Zc,r):(da(t),Ic(t,x))}if(T=e.memoizedState,T!==null&&(x=T.dehydrated,x!==null)){if(u)t.flags&256?(da(t),t.flags&=-257,t=Jc(e,t,n)):t.memoizedState!==null?(ha(),t.child=e.child,t.flags|=128,t=null):(ha(),s=r.fallback,x=t.mode,r=ho({mode:"visible",children:r.children},x),s=ka(s,x,n,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,Dr(t,e.child,null,n),r=t.child,r.memoizedState=Kc(n),r.childLanes=Qc(e,p,n),t.memoizedState=Zc,t=s);else if(da(t),zu(x)){if(p=x.nextSibling&&x.nextSibling.dataset,p)var N=p.dgst;p=N,r=Error(l(419)),r.stack="",r.digest=p,Ei({value:r,source:null,stack:null}),t=Jc(e,t,n)}else if(xt||Ti(e,t,n,!1),p=(n&e.childLanes)!==0,xt||p){if(p=Ie,p!==null&&(r=n&-n,r=(r&42)!==0?1:ks(r),r=(r&(p.suspendedLanes|n))!==0?0:r,r!==0&&r!==T.retryLane))throw T.retryLane=r,wr(e,r),tn(p,e,r),kh;x.data==="$?"||pu(),t=Jc(e,t,n)}else x.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=T.treeContext,at=vn(x.nextSibling),Nt=t,Be=!0,$a=null,jn=!1,e!==null&&(cn[un++]=Pn,cn[un++]=qn,cn[un++]=La,Pn=e.id,qn=e.overflow,La=t),t=Ic(t,r.children),t.flags|=4096);return t}return s?(ha(),s=r.fallback,x=t.mode,T=e.child,N=T.sibling,r=Bn(T,{mode:"hidden",children:r.children}),r.subtreeFlags=T.subtreeFlags&65011712,N!==null?s=Bn(N,s):(s=ka(s,x,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,x=e.child.memoizedState,x===null?x=Kc(n):(T=x.cachePool,T!==null?(N=gt._currentValue,T=T.parent!==N?{parent:N,pool:N}:T):T=_0(),x={baseLanes:x.baseLanes|n,cachePool:T}),s.memoizedState=x,s.childLanes=Qc(e,p,n),t.memoizedState=Zc,r):(da(t),n=e.child,e=n.sibling,n=Bn(n,{mode:"visible",children:r.children}),n.return=t,n.sibling=null,e!==null&&(p=t.deletions,p===null?(t.deletions=[e],t.flags|=16):p.push(e)),t.child=n,t.memoizedState=null,n)}function Ic(e,t){return t=ho({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ho(e,t){return e=Qt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Jc(e,t,n){return Dr(t,e.child,null,n),e=Ic(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Gh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),pc(e.return,t,n)}function Wc(e,t,n,r,s){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=r,u.tail=n,u.tailMode=s)}function Yh(e,t,n){var r=t.pendingProps,s=r.revealOrder,u=r.tail;if(Tt(e,t,r.children,n),r=pt.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gh(e,n,t);else if(e.tag===19)Gh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(ae(pt,r),s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&so(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Wc(t,!1,s,n,u);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&so(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Wc(t,!0,n,null,u);break;case"together":Wc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),va|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ti(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=Bn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Bn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function eu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Fl(e)))}function Zy(e,t,n){switch(t.tag){case 3:Y(t,t.stateNode.containerInfo),oa(t,gt,e.memoizedState.cache),ji();break;case 27:case 5:Ce(t);break;case 4:Y(t,t.stateNode.containerInfo);break;case 10:oa(t,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated!==null?(da(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Vh(e,t,n):(da(t),e=Xn(e,t,n),e!==null?e.sibling:null);da(t);break;case 19:var s=(e.flags&128)!==0;if(r=(n&t.childLanes)!==0,r||(Ti(e,t,n,!1),r=(n&t.childLanes)!==0),s){if(r)return Yh(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ae(pt,pt.current),r)break;return null;case 22:case 23:return t.lanes=0,Uh(e,t,n);case 24:oa(t,gt,e.memoizedState.cache)}return Xn(e,t,n)}function Fh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)xt=!0;else{if(!eu(e,n)&&(t.flags&128)===0)return xt=!1,Zy(e,t,n);xt=(e.flags&131072)!==0}else xt=!1,Be&&(t.flags&1048576)!==0&&S0(t,Yl,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,s=r._init;if(r=s(r._payload),t.type=r,typeof r=="function")cc(r)?(e=Va(r,e),t.tag=1,t=Ph(null,t,r,e,n)):(t.tag=0,t=Xc(null,t,r,e,n));else{if(r!=null){if(s=r.$$typeof,s===K){t.tag=11,t=Lh(null,t,r,e,n);break e}else if(s===P){t.tag=14,t=Nh(null,t,r,e,n);break e}}throw t=be(r)||r,Error(l(306,t,""))}}return t;case 0:return Xc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,s=Va(r,t.pendingProps),Ph(e,t,r,s,n);case 3:e:{if(Y(t,t.stateNode.containerInfo),e===null)throw Error(l(387));r=t.pendingProps;var u=t.memoizedState;s=u.element,Cc(e,t),zi(t,r,null,n);var p=t.memoizedState;if(r=p.cache,oa(t,gt,r),r!==u.cache&&yc(t,[gt],n,!0),Di(),r=p.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:p.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=qh(e,t,r,n);break e}else if(r!==s){s=on(Error(l(424)),t),Ei(s),t=qh(e,t,r,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(at=vn(e.firstChild),Nt=t,Be=!0,$a=null,jn=!0,n=jh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ji(),r===s){t=Xn(e,t,n);break e}Tt(e,t,r,n)}t=t.child}return t;case 26:return fo(e,t),e===null?(n=Qm(t.type,null,t.pendingProps,null))?t.memoizedState=n:Be||(n=t.type,e=t.pendingProps,r=Ao(B.current).createElement(n),r[Mt]=t,r[Bt]=e,Rt(r,n,e),vt(r),t.stateNode=r):t.memoizedState=Qm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ce(t),e===null&&Be&&(r=t.stateNode=Xm(t.type,t.pendingProps,B.current),Nt=t,jn=!0,s=at,Sa(t.type)?(ku=s,at=vn(r.firstChild)):at=s),Tt(e,t,t.pendingProps.children,n),fo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Be&&((s=r=at)&&(r=Sv(r,t.type,t.pendingProps,jn),r!==null?(t.stateNode=r,Nt=t,at=vn(r.firstChild),jn=!1,s=!0):s=!1),s||Ua(t)),Ce(t),s=t.type,u=t.pendingProps,p=e!==null?e.memoizedProps:null,r=u.children,Mu(s,u)?r=null:p!==null&&Mu(s,p)&&(t.flags|=32),t.memoizedState!==null&&(s=_c(e,t,By,null,null,n),tl._currentValue=s),fo(e,t),Tt(e,t,r,n),t.child;case 6:return e===null&&Be&&((e=n=at)&&(n=Cv(n,t.pendingProps,jn),n!==null?(t.stateNode=n,Nt=t,at=null,e=!0):e=!1),e||Ua(t)),null;case 13:return Vh(e,t,n);case 4:return Y(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Dr(t,null,r,n):Tt(e,t,r,n),t.child;case 11:return Lh(e,t,t.type,t.pendingProps,n);case 7:return Tt(e,t,t.pendingProps,n),t.child;case 8:return Tt(e,t,t.pendingProps.children,n),t.child;case 12:return Tt(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,oa(t,t.type,r.value),Tt(e,t,r.children,n),t.child;case 9:return s=t.type._context,r=t.pendingProps.children,Ba(t),s=Ot(s),r=r(s),t.flags|=1,Tt(e,t,r,n),t.child;case 14:return Nh(e,t,t.type,t.pendingProps,n);case 15:return $h(e,t,t.type,t.pendingProps,n);case 19:return Yh(e,t,n);case 31:return r=t.pendingProps,n=t.mode,r={mode:r.mode,children:r.children},e===null?(n=ho(r,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Bn(e.child,r),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Uh(e,t,n);case 24:return Ba(t),r=Ot(gt),e===null?(s=bc(),s===null&&(s=Ie,u=vc(),s.pooledCache=u,u.refCount++,u!==null&&(s.pooledCacheLanes|=n),s=u),t.memoizedState={parent:r,cache:s},Sc(t),oa(t,gt,s)):((e.lanes&n)!==0&&(Cc(e,t),zi(t,null,null,n),Di()),s=e.memoizedState,u=t.memoizedState,s.parent!==r?(s={parent:r,cache:r},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),oa(t,gt,r)):(r=u.cache,oa(t,gt,r),r!==s.cache&&yc(t,[gt],n,!0))),Tt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function Zn(e){e.flags|=4}function Xh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!tg(t)){if(t=fn.current,t!==null&&((Ue&4194048)===Ue?En!==null:(Ue&62914560)!==Ue&&(Ue&536870912)===0||t!==En))throw Mi=wc,M0;e.flags|=8192}}function mo(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ed():536870912,e.lanes|=t,Nr|=t)}function Bi(e,t){if(!Be)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&65011712,r|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ky(e,t,n){var r=t.pendingProps;switch(hc(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return nt(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Gn(gt),ue(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ci(t)?Zn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,E0())),nt(t),null;case 26:return n=t.memoizedState,e===null?(Zn(t),n!==null?(nt(t),Xh(t,n)):(nt(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Zn(t),nt(t),Xh(t,n)):(nt(t),t.flags&=-16777217):(e.memoizedProps!==r&&Zn(t),nt(t),t.flags&=-16777217),null;case 27:he(t),n=B.current;var s=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Zn(t);else{if(!r){if(t.stateNode===null)throw Error(l(166));return nt(t),null}e=ie.current,Ci(t)?C0(t):(e=Xm(s,r,n),t.stateNode=e,Zn(t))}return nt(t),null;case 5:if(he(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Zn(t);else{if(!r){if(t.stateNode===null)throw Error(l(166));return nt(t),null}if(e=ie.current,Ci(t))C0(t);else{switch(s=Ao(B.current),e){case 1:e=s.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=s.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof r.is=="string"?s.createElement("select",{is:r.is}):s.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e=typeof r.is=="string"?s.createElement(n,{is:r.is}):s.createElement(n)}}e[Mt]=t,e[Bt]=r;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=e;e:switch(Rt(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Zn(t)}}return nt(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Zn(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(l(166));if(e=B.current,Ci(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,s=Nt,s!==null)switch(s.tag){case 27:case 5:r=s.memoizedProps}e[Mt]=t,e=!!(e.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||Bm(e.nodeValue,n)),e||Ua(t)}else e=Ao(e).createTextNode(r),e[Mt]=t,t.stateNode=e}return nt(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Ci(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(l(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(l(317));s[Mt]=t}else ji(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;nt(t),s=!1}else s=E0(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Fn(t),t):(Fn(t),null)}if(Fn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=r!==null,e=e!==null&&e.memoizedState!==null,n){r=t.child,s=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(s=r.alternate.memoizedState.cachePool.pool);var u=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==s&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),mo(t,t.updateQueue),nt(t),null;case 4:return ue(),e===null&&Eu(t.stateNode.containerInfo),nt(t),null;case 10:return Gn(t.type),nt(t),null;case 19:if(te(pt),s=t.memoizedState,s===null)return nt(t),null;if(r=(t.flags&128)!==0,u=s.rendering,u===null)if(r)Bi(s,!1);else{if(rt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=so(e),u!==null){for(t.flags|=128,Bi(s,!1),e=u.updateQueue,t.updateQueue=e,mo(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)w0(n,e),n=n.sibling;return ae(pt,pt.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ye()>yo&&(t.flags|=128,r=!0,Bi(s,!1),t.lanes=4194304)}else{if(!r)if(e=so(u),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,mo(t,e),Bi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!u.alternate&&!Be)return nt(t),null}else 2*Ye()-s.renderingStartTime>yo&&n!==536870912&&(t.flags|=128,r=!0,Bi(s,!1),t.lanes=4194304);s.isBackwards?(u.sibling=t.child,t.child=u):(e=s.last,e!==null?e.sibling=u:t.child=u,s.last=u)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ye(),t.sibling=null,e=pt.current,ae(pt,r?e&1|2:e&1),t):(nt(t),null);case 22:case 23:return Fn(t),Ac(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(n&536870912)!==0&&(t.flags&128)===0&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),n=t.updateQueue,n!==null&&mo(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&te(Pa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Gn(gt),nt(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function Qy(e,t){switch(hc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gn(gt),ue(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return he(t),null;case 13:if(Fn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(pt),null;case 4:return ue(),null;case 10:return Gn(t.type),null;case 22:case 23:return Fn(t),Ac(),e!==null&&te(Pa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Gn(gt),null;case 25:return null;default:return null}}function Zh(e,t){switch(hc(t),t.tag){case 3:Gn(gt),ue();break;case 26:case 27:case 5:he(t);break;case 4:ue();break;case 13:Fn(t);break;case 19:te(pt);break;case 10:Gn(t.type);break;case 22:case 23:Fn(t),Ac(),e!==null&&te(Pa);break;case 24:Gn(gt)}}function Pi(e,t){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var s=r.next;n=s;do{if((n.tag&e)===e){r=void 0;var u=n.create,p=n.inst;r=u(),p.destroy=r}n=n.next}while(n!==s)}}catch(x){Ke(t,t.return,x)}}function ma(e,t,n){try{var r=t.updateQueue,s=r!==null?r.lastEffect:null;if(s!==null){var u=s.next;r=u;do{if((r.tag&e)===e){var p=r.inst,x=p.destroy;if(x!==void 0){p.destroy=void 0,s=t;var T=n,N=x;try{N()}catch(X){Ke(s,T,X)}}}r=r.next}while(r!==u)}}catch(X){Ke(t,t.return,X)}}function Kh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{N0(t,n)}catch(r){Ke(e,e.return,r)}}}function Qh(e,t,n){n.props=Va(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){Ke(e,t,r)}}function qi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n=="function"?e.refCleanup=n(r):n.current=r}}catch(s){Ke(e,t,s)}}function Tn(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(s){Ke(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){Ke(e,t,s)}else n.current=null}function Ih(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(s){Ke(e,e.return,s)}}function tu(e,t,n){try{var r=e.stateNode;yv(r,e.type,n,t),r[Bt]=t}catch(s){Ke(e,e.return,s)}}function Jh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sa(e.type)||e.tag===4}function nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function au(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=To));else if(r!==4&&(r===27&&Sa(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(au(e,t,n),e=e.sibling;e!==null;)au(e,t,n),e=e.sibling}function go(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Sa(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(go(e,t,n),e=e.sibling;e!==null;)go(e,t,n),e=e.sibling}function Wh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Rt(t,r,n),t[Mt]=e,t[Bt]=n}catch(u){Ke(e,e.return,u)}}var Kn=!1,ot=!1,ru=!1,em=typeof WeakSet=="function"?WeakSet:Set,bt=null;function Iy(e,t){if(e=e.containerInfo,Ru=zo,e=f0(e),nc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,u=r.focusNode;r=r.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var p=0,x=-1,T=-1,N=0,X=0,W=e,$=null;t:for(;;){for(var U;W!==n||s!==0&&W.nodeType!==3||(x=p+s),W!==u||r!==0&&W.nodeType!==3||(T=p+r),W.nodeType===3&&(p+=W.nodeValue.length),(U=W.firstChild)!==null;)$=W,W=U;for(;;){if(W===e)break t;if($===n&&++N===s&&(x=p),$===u&&++X===r&&(T=p),(U=W.nextSibling)!==null)break;W=$,$=W.parentNode}W=U}n=x===-1||T===-1?null:{start:x,end:T}}else n=null}n=n||{start:0,end:0}}else n=null;for(_u={focusedElem:e,selectionRange:n},zo=!1,bt=t;bt!==null;)if(t=bt,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,bt=e;else for(;bt!==null;){switch(t=bt,u=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,s=u.memoizedProps,u=u.memoizedState,r=n.stateNode;try{var Te=Va(n.type,s,n.elementType===n.type);e=r.getSnapshotBeforeUpdate(Te,u),r.__reactInternalSnapshotBeforeUpdate=e}catch(je){Ke(n,n.return,je)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Du(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Du(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,bt=e;break}bt=t.return}}function tm(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:ga(e,n),r&4&&Pi(5,n);break;case 1:if(ga(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(p){Ke(n,n.return,p)}else{var s=Va(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(p){Ke(n,n.return,p)}}r&64&&Kh(n),r&512&&qi(n,n.return);break;case 3:if(ga(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{N0(e,t)}catch(p){Ke(n,n.return,p)}}break;case 27:t===null&&r&4&&Wh(n);case 26:case 5:ga(e,n),t===null&&r&4&&Ih(n),r&512&&qi(n,n.return);break;case 12:ga(e,n);break;case 13:ga(e,n),r&4&&rm(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=lv.bind(null,n),jv(e,n))));break;case 22:if(r=n.memoizedState!==null||Kn,!r){t=t!==null&&t.memoizedState!==null||ot,s=Kn;var u=ot;Kn=r,(ot=t)&&!u?pa(e,n,(n.subtreeFlags&8772)!==0):ga(e,n),Kn=s,ot=u}break;case 30:break;default:ga(e,n)}}function nm(e){var t=e.alternate;t!==null&&(e.alternate=null,nm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&$s(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,Vt=!1;function Qn(e,t,n){for(n=n.child;n!==null;)am(e,t,n),n=n.sibling}function am(e,t,n){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(Re,n)}catch{}switch(n.tag){case 26:ot||Tn(n,t),Qn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ot||Tn(n,t);var r=We,s=Vt;Sa(n.type)&&(We=n.stateNode,Vt=!1),Qn(e,t,n),Ii(n.stateNode),We=r,Vt=s;break;case 5:ot||Tn(n,t);case 6:if(r=We,s=Vt,We=null,Qn(e,t,n),We=r,Vt=s,We!==null)if(Vt)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(n.stateNode)}catch(u){Ke(n,t,u)}else try{We.removeChild(n.stateNode)}catch(u){Ke(n,t,u)}break;case 18:We!==null&&(Vt?(e=We,Ym(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),il(e)):Ym(We,n.stateNode));break;case 4:r=We,s=Vt,We=n.stateNode.containerInfo,Vt=!0,Qn(e,t,n),We=r,Vt=s;break;case 0:case 11:case 14:case 15:ot||ma(2,n,t),ot||ma(4,n,t),Qn(e,t,n);break;case 1:ot||(Tn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"&&Qh(n,t,r)),Qn(e,t,n);break;case 21:Qn(e,t,n);break;case 22:ot=(r=ot)||n.memoizedState!==null,Qn(e,t,n),ot=r;break;default:Qn(e,t,n)}}function rm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{il(e)}catch(n){Ke(t,t.return,n)}}function Jy(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new em),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new em),t;default:throw Error(l(435,e.tag))}}function iu(e,t){var n=Jy(e);t.forEach(function(r){var s=ov.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}function It(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r],u=e,p=t,x=p;e:for(;x!==null;){switch(x.tag){case 27:if(Sa(x.type)){We=x.stateNode,Vt=!1;break e}break;case 5:We=x.stateNode,Vt=!1;break e;case 3:case 4:We=x.stateNode.containerInfo,Vt=!0;break e}x=x.return}if(We===null)throw Error(l(160));am(u,p,s),We=null,Vt=!1,u=s.alternate,u!==null&&(u.return=null),s.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)im(t,e),t=t.sibling}var yn=null;function im(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:It(t,e),Jt(e),r&4&&(ma(3,e,e.return),Pi(3,e),ma(5,e,e.return));break;case 1:It(t,e),Jt(e),r&512&&(ot||n===null||Tn(n,n.return)),r&64&&Kn&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var s=yn;if(It(t,e),Jt(e),r&512&&(ot||n===null||Tn(n,n.return)),r&4){var u=n!==null?n.memoizedState:null;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){e:{r=e.type,n=e.memoizedProps,s=s.ownerDocument||s;t:switch(r){case"title":u=s.getElementsByTagName("title")[0],(!u||u[di]||u[Mt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=s.createElement(r),s.head.insertBefore(u,s.querySelector("head > title"))),Rt(u,r,n),u[Mt]=e,vt(u),r=u;break e;case"link":var p=Wm("link","href",s).get(r+(n.href||""));if(p){for(var x=0;x<p.length;x++)if(u=p[x],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){p.splice(x,1);break t}}u=s.createElement(r),Rt(u,r,n),s.head.appendChild(u);break;case"meta":if(p=Wm("meta","content",s).get(r+(n.content||""))){for(x=0;x<p.length;x++)if(u=p[x],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){p.splice(x,1);break t}}u=s.createElement(r),Rt(u,r,n),s.head.appendChild(u);break;default:throw Error(l(468,r))}u[Mt]=e,vt(u),r=u}e.stateNode=r}else eg(s,e.type,e.stateNode);else e.stateNode=Jm(s,r,e.memoizedProps);else u!==r?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,r===null?eg(s,e.type,e.stateNode):Jm(s,r,e.memoizedProps)):r===null&&e.stateNode!==null&&tu(e,e.memoizedProps,n.memoizedProps)}break;case 27:It(t,e),Jt(e),r&512&&(ot||n===null||Tn(n,n.return)),n!==null&&r&4&&tu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(It(t,e),Jt(e),r&512&&(ot||n===null||Tn(n,n.return)),e.flags&32){s=e.stateNode;try{mr(s,"")}catch(U){Ke(e,e.return,U)}}r&4&&e.stateNode!=null&&(s=e.memoizedProps,tu(e,s,n!==null?n.memoizedProps:s)),r&1024&&(ru=!0);break;case 6:if(It(t,e),Jt(e),r&4){if(e.stateNode===null)throw Error(l(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(U){Ke(e,e.return,U)}}break;case 3:if(Mo=null,s=yn,yn=Ro(t.containerInfo),It(t,e),yn=s,Jt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{il(t.containerInfo)}catch(U){Ke(e,e.return,U)}ru&&(ru=!1,lm(e));break;case 4:r=yn,yn=Ro(e.stateNode.containerInfo),It(t,e),Jt(e),yn=r;break;case 12:It(t,e),Jt(e);break;case 13:It(t,e),Jt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(fu=Ye()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,iu(e,r)));break;case 22:s=e.memoizedState!==null;var T=n!==null&&n.memoizedState!==null,N=Kn,X=ot;if(Kn=N||s,ot=X||T,It(t,e),ot=X,Kn=N,Jt(e),r&8192)e:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||T||Kn||ot||Ga(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){T=n=t;try{if(u=T.stateNode,s)p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{x=T.stateNode;var W=T.memoizedProps.style,$=W!=null&&W.hasOwnProperty("display")?W.display:null;x.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(U){Ke(T,T.return,U)}}}else if(t.tag===6){if(n===null){T=t;try{T.stateNode.nodeValue=s?"":T.memoizedProps}catch(U){Ke(T,T.return,U)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,iu(e,n))));break;case 19:It(t,e),Jt(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,iu(e,r)));break;case 30:break;case 21:break;default:It(t,e),Jt(e)}}function Jt(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Jh(r)){n=r;break}r=r.return}if(n==null)throw Error(l(160));switch(n.tag){case 27:var s=n.stateNode,u=nu(e);go(e,u,s);break;case 5:var p=n.stateNode;n.flags&32&&(mr(p,""),n.flags&=-33);var x=nu(e);go(e,x,p);break;case 3:case 4:var T=n.stateNode.containerInfo,N=nu(e);au(e,N,T);break;default:throw Error(l(161))}}catch(X){Ke(e,e.return,X)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function lm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;lm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ga(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)tm(e,t.alternate,t),t=t.sibling}function Ga(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ma(4,t,t.return),Ga(t);break;case 1:Tn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Qh(t,t.return,n),Ga(t);break;case 27:Ii(t.stateNode);case 26:case 5:Tn(t,t.return),Ga(t);break;case 22:t.memoizedState===null&&Ga(t);break;case 30:Ga(t);break;default:Ga(t)}e=e.sibling}}function pa(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var r=t.alternate,s=e,u=t,p=u.flags;switch(u.tag){case 0:case 11:case 15:pa(s,u,n),Pi(4,u);break;case 1:if(pa(s,u,n),r=u,s=r.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(N){Ke(r,r.return,N)}if(r=u,s=r.updateQueue,s!==null){var x=r.stateNode;try{var T=s.shared.hiddenCallbacks;if(T!==null)for(s.shared.hiddenCallbacks=null,s=0;s<T.length;s++)L0(T[s],x)}catch(N){Ke(r,r.return,N)}}n&&p&64&&Kh(u),qi(u,u.return);break;case 27:Wh(u);case 26:case 5:pa(s,u,n),n&&r===null&&p&4&&Ih(u),qi(u,u.return);break;case 12:pa(s,u,n);break;case 13:pa(s,u,n),n&&p&4&&rm(s,u);break;case 22:u.memoizedState===null&&pa(s,u,n),qi(u,u.return);break;case 30:break;default:pa(s,u,n)}t=t.sibling}}function lu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ai(n))}function ou(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ai(e))}function An(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)om(e,t,n,r),t=t.sibling}function om(e,t,n,r){var s=t.flags;switch(t.tag){case 0:case 11:case 15:An(e,t,n,r),s&2048&&Pi(9,t);break;case 1:An(e,t,n,r);break;case 3:An(e,t,n,r),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ai(e)));break;case 12:if(s&2048){An(e,t,n,r),e=t.stateNode;try{var u=t.memoizedProps,p=u.id,x=u.onPostCommit;typeof x=="function"&&x(p,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(T){Ke(t,t.return,T)}}else An(e,t,n,r);break;case 13:An(e,t,n,r);break;case 23:break;case 22:u=t.stateNode,p=t.alternate,t.memoizedState!==null?u._visibility&2?An(e,t,n,r):Vi(e,t):u._visibility&2?An(e,t,n,r):(u._visibility|=2,zr(e,t,n,r,(t.subtreeFlags&10256)!==0)),s&2048&&lu(p,t);break;case 24:An(e,t,n,r),s&2048&&ou(t.alternate,t);break;default:An(e,t,n,r)}}function zr(e,t,n,r,s){for(s=s&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var u=e,p=t,x=n,T=r,N=p.flags;switch(p.tag){case 0:case 11:case 15:zr(u,p,x,T,s),Pi(8,p);break;case 23:break;case 22:var X=p.stateNode;p.memoizedState!==null?X._visibility&2?zr(u,p,x,T,s):Vi(u,p):(X._visibility|=2,zr(u,p,x,T,s)),s&&N&2048&&lu(p.alternate,p);break;case 24:zr(u,p,x,T,s),s&&N&2048&&ou(p.alternate,p);break;default:zr(u,p,x,T,s)}t=t.sibling}}function Vi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,s=r.flags;switch(r.tag){case 22:Vi(n,r),s&2048&&lu(r.alternate,r);break;case 24:Vi(n,r),s&2048&&ou(r.alternate,r);break;default:Vi(n,r)}t=t.sibling}}var Gi=8192;function kr(e){if(e.subtreeFlags&Gi)for(e=e.child;e!==null;)sm(e),e=e.sibling}function sm(e){switch(e.tag){case 26:kr(e),e.flags&Gi&&e.memoizedState!==null&&$v(yn,e.memoizedState,e.memoizedProps);break;case 5:kr(e);break;case 3:case 4:var t=yn;yn=Ro(e.stateNode.containerInfo),kr(e),yn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Gi,Gi=16777216,kr(e),Gi=t):kr(e));break;default:kr(e)}}function cm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Yi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];bt=r,fm(r,e)}cm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)um(e),e=e.sibling}function um(e){switch(e.tag){case 0:case 11:case 15:Yi(e),e.flags&2048&&ma(9,e,e.return);break;case 3:Yi(e);break;case 12:Yi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,po(e)):Yi(e);break;default:Yi(e)}}function po(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];bt=r,fm(r,e)}cm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ma(8,t,t.return),po(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,po(t));break;default:po(t)}e=e.sibling}}function fm(e,t){for(;bt!==null;){var n=bt;switch(n.tag){case 0:case 11:case 15:ma(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ai(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,bt=r;else e:for(n=e;bt!==null;){r=bt;var s=r.sibling,u=r.return;if(nm(r),r===n){bt=null;break e}if(s!==null){s.return=u,bt=s;break e}bt=u}}}var Wy={getCacheForType:function(e){var t=Ot(gt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},ev=typeof WeakMap=="function"?WeakMap:Map,Ve=0,Ie=null,Le=null,Ue=0,Ge=0,Wt=null,ya=!1,Lr=!1,su=!1,In=0,rt=0,va=0,Ya=0,cu=0,dn=0,Nr=0,Fi=null,Gt=null,uu=!1,fu=0,yo=1/0,vo=null,xa=null,At=0,ba=null,$r=null,Ur=0,du=0,hu=null,dm=null,Xi=0,mu=null;function en(){if((Ve&2)!==0&&Ue!==0)return Ue&-Ue;if(O.T!==null){var e=Er;return e!==0?e:wu()}return Rd()}function hm(){dn===0&&(dn=(Ue&536870912)===0||Be?jd():536870912);var e=fn.current;return e!==null&&(e.flags|=32),dn}function tn(e,t,n){(e===Ie&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)&&(Hr(e,0),wa(e,Ue,dn,!1)),fi(e,n),((Ve&2)===0||e!==Ie)&&(e===Ie&&((Ve&2)===0&&(Ya|=n),rt===4&&wa(e,Ue,dn,!1)),Rn(e))}function mm(e,t,n){if((Ve&6)!==0)throw Error(l(327));var r=!n&&(t&124)===0&&(t&e.expiredLanes)===0||_a(e,t),s=r?av(e,t):yu(e,t,!0),u=r;do{if(s===0){Lr&&!r&&wa(e,t,0,!1);break}else{if(n=e.current.alternate,u&&!tv(n)){s=yu(e,t,!1),u=!1;continue}if(s===2){if(u=t,e.errorRecoveryDisabledLanes&u)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){t=p;e:{var x=e;s=Fi;var T=x.current.memoizedState.isDehydrated;if(T&&(Hr(x,p).flags|=256),p=yu(x,p,!1),p!==2){if(su&&!T){x.errorRecoveryDisabledLanes|=u,Ya|=u,s=4;break e}u=Gt,Gt=s,u!==null&&(Gt===null?Gt=u:Gt.push.apply(Gt,u))}s=p}if(u=!1,s!==2)continue}}if(s===1){Hr(e,0),wa(e,t,0,!0);break}e:{switch(r=e,u=s,u){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:wa(r,t,dn,!ya);break e;case 2:Gt=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(s=fu+300-Ye(),10<s)){if(wa(r,t,dn,!ya),lr(r,0,!0)!==0)break e;r.timeoutHandle=Vm(gm.bind(null,r,n,Gt,vo,uu,t,dn,Ya,Nr,ya,u,2,-0,0),s);break e}gm(r,n,Gt,vo,uu,t,dn,Ya,Nr,ya,u,0,-0,0)}}break}while(!0);Rn(e)}function gm(e,t,n,r,s,u,p,x,T,N,X,W,$,U){if(e.timeoutHandle=-1,W=t.subtreeFlags,(W&8192||(W&16785408)===16785408)&&(el={stylesheets:null,count:0,unsuspend:Nv},sm(t),W=Uv(),W!==null)){e.cancelPendingCommit=W(Sm.bind(null,e,t,u,n,r,s,p,x,T,X,1,$,U)),wa(e,u,p,!N);return}Sm(e,t,u,n,r,s,p,x,T)}function tv(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var s=n[r],u=s.getSnapshot;s=s.value;try{if(!Kt(u(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wa(e,t,n,r){t&=~cu,t&=~Ya,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var s=t;0<s;){var u=31-mt(s),p=1<<u;r[u]=-1,s&=~p}n!==0&&Td(e,n,t)}function xo(){return(Ve&6)===0?(Zi(0),!1):!0}function gu(){if(Le!==null){if(Ge===0)var e=Le.return;else e=Le,Vn=Ha=null,Dc(e),Or=null,Ui=0,e=Le;for(;e!==null;)Zh(e.alternate,e),e=e.return;Le=null}}function Hr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,xv(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),gu(),Ie=e,Le=n=Bn(e.current,null),Ue=t,Ge=0,Wt=null,ya=!1,Lr=_a(e,t),su=!1,Nr=dn=cu=Ya=va=rt=0,Gt=Fi=null,uu=!1,(t&8)!==0&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var s=31-mt(r),u=1<<s;t|=e[s],r&=~u}return In=t,Bl(),n}function pm(e,t){ze=null,O.H=io,t===_i||t===Kl?(t=z0(),Ge=3):t===M0?(t=z0(),Ge=4):Ge=t===kh?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Wt=t,Le===null&&(rt=1,uo(e,on(t,e.current)))}function ym(){var e=O.H;return O.H=io,e===null?io:e}function vm(){var e=O.A;return O.A=Wy,e}function pu(){rt=4,ya||(Ue&4194048)!==Ue&&fn.current!==null||(Lr=!0),(va&134217727)===0&&(Ya&134217727)===0||Ie===null||wa(Ie,Ue,dn,!1)}function yu(e,t,n){var r=Ve;Ve|=2;var s=ym(),u=vm();(Ie!==e||Ue!==t)&&(vo=null,Hr(e,t)),t=!1;var p=rt;e:do try{if(Ge!==0&&Le!==null){var x=Le,T=Wt;switch(Ge){case 8:gu(),p=6;break e;case 3:case 2:case 9:case 6:fn.current===null&&(t=!0);var N=Ge;if(Ge=0,Wt=null,Br(e,x,T,N),n&&Lr){p=0;break e}break;default:N=Ge,Ge=0,Wt=null,Br(e,x,T,N)}}nv(),p=rt;break}catch(X){pm(e,X)}while(!0);return t&&e.shellSuspendCounter++,Vn=Ha=null,Ve=r,O.H=s,O.A=u,Le===null&&(Ie=null,Ue=0,Bl()),p}function nv(){for(;Le!==null;)xm(Le)}function av(e,t){var n=Ve;Ve|=2;var r=ym(),s=vm();Ie!==e||Ue!==t?(vo=null,yo=Ye()+500,Hr(e,t)):Lr=_a(e,t);e:do try{if(Ge!==0&&Le!==null){t=Le;var u=Wt;t:switch(Ge){case 1:Ge=0,Wt=null,Br(e,t,u,1);break;case 2:case 9:if(O0(u)){Ge=0,Wt=null,bm(t);break}t=function(){Ge!==2&&Ge!==9||Ie!==e||(Ge=7),Rn(e)},u.then(t,t);break e;case 3:Ge=7;break e;case 4:Ge=5;break e;case 7:O0(u)?(Ge=0,Wt=null,bm(t)):(Ge=0,Wt=null,Br(e,t,u,7));break;case 5:var p=null;switch(Le.tag){case 26:p=Le.memoizedState;case 5:case 27:var x=Le;if(!p||tg(p)){Ge=0,Wt=null;var T=x.sibling;if(T!==null)Le=T;else{var N=x.return;N!==null?(Le=N,bo(N)):Le=null}break t}}Ge=0,Wt=null,Br(e,t,u,5);break;case 6:Ge=0,Wt=null,Br(e,t,u,6);break;case 8:gu(),rt=6;break e;default:throw Error(l(462))}}rv();break}catch(X){pm(e,X)}while(!0);return Vn=Ha=null,O.H=r,O.A=s,Ve=n,Le!==null?0:(Ie=null,Ue=0,Bl(),rt)}function rv(){for(;Le!==null&&!ut();)xm(Le)}function xm(e){var t=Fh(e.alternate,e,In);e.memoizedProps=e.pendingProps,t===null?bo(e):Le=t}function bm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Bh(n,t,t.pendingProps,t.type,void 0,Ue);break;case 11:t=Bh(n,t,t.pendingProps,t.type.render,t.ref,Ue);break;case 5:Dc(t);default:Zh(n,t),t=Le=w0(t,In),t=Fh(n,t,In)}e.memoizedProps=e.pendingProps,t===null?bo(e):Le=t}function Br(e,t,n,r){Vn=Ha=null,Dc(t),Or=null,Ui=0;var s=t.return;try{if(Xy(e,s,t,n,Ue)){rt=1,uo(e,on(n,e.current)),Le=null;return}}catch(u){if(s!==null)throw Le=s,u;rt=1,uo(e,on(n,e.current)),Le=null;return}t.flags&32768?(Be||r===1?e=!0:Lr||(Ue&536870912)!==0?e=!1:(ya=e=!0,(r===2||r===9||r===3||r===6)&&(r=fn.current,r!==null&&r.tag===13&&(r.flags|=16384))),wm(t,e)):bo(t)}function bo(e){var t=e;do{if((t.flags&32768)!==0){wm(t,ya);return}e=t.return;var n=Ky(t.alternate,t,In);if(n!==null){Le=n;return}if(t=t.sibling,t!==null){Le=t;return}Le=t=e}while(t!==null);rt===0&&(rt=5)}function wm(e,t){do{var n=Qy(e.alternate,e);if(n!==null){n.flags&=32767,Le=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Le=e;return}Le=e=n}while(e!==null);rt=6,Le=null}function Sm(e,t,n,r,s,u,p,x,T){e.cancelPendingCommit=null;do wo();while(At!==0);if((Ve&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(u=t.lanes|t.childLanes,u|=oc,N2(e,n,u,p,x,T),e===Ie&&(Le=Ie=null,Ue=0),$r=t,ba=e,Ur=n,du=u,hu=s,dm=r,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,sv(F,function(){return Am(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||r){r=O.T,O.T=null,s=J.p,J.p=2,p=Ve,Ve|=4;try{Iy(e,t,n)}finally{Ve=p,J.p=s,O.T=r}}At=1,Cm(),jm(),Em()}}function Cm(){if(At===1){At=0;var e=ba,t=$r,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=O.T,O.T=null;var r=J.p;J.p=2;var s=Ve;Ve|=4;try{im(t,e);var u=_u,p=f0(e.containerInfo),x=u.focusedElem,T=u.selectionRange;if(p!==x&&x&&x.ownerDocument&&u0(x.ownerDocument.documentElement,x)){if(T!==null&&nc(x)){var N=T.start,X=T.end;if(X===void 0&&(X=N),"selectionStart"in x)x.selectionStart=N,x.selectionEnd=Math.min(X,x.value.length);else{var W=x.ownerDocument||document,$=W&&W.defaultView||window;if($.getSelection){var U=$.getSelection(),Te=x.textContent.length,je=Math.min(T.start,Te),Ze=T.end===void 0?je:Math.min(T.end,Te);!U.extend&&je>Ze&&(p=Ze,Ze=je,je=p);var k=c0(x,je),M=c0(x,Ze);if(k&&M&&(U.rangeCount!==1||U.anchorNode!==k.node||U.anchorOffset!==k.offset||U.focusNode!==M.node||U.focusOffset!==M.offset)){var L=W.createRange();L.setStart(k.node,k.offset),U.removeAllRanges(),je>Ze?(U.addRange(L),U.extend(M.node,M.offset)):(L.setEnd(M.node,M.offset),U.addRange(L))}}}}for(W=[],U=x;U=U.parentNode;)U.nodeType===1&&W.push({element:U,left:U.scrollLeft,top:U.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<W.length;x++){var Q=W[x];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}zo=!!Ru,_u=Ru=null}finally{Ve=s,J.p=r,O.T=n}}e.current=t,At=2}}function jm(){if(At===2){At=0;var e=ba,t=$r,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=O.T,O.T=null;var r=J.p;J.p=2;var s=Ve;Ve|=4;try{tm(e,t.alternate,t)}finally{Ve=s,J.p=r,O.T=n}}At=3}}function Em(){if(At===4||At===3){At=0,an();var e=ba,t=$r,n=Ur,r=dm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?At=5:(At=0,$r=ba=null,Tm(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(xa=null),Ls(n),t=t.stateNode,$e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(Re,t,void 0,(t.current.flags&128)===128)}catch{}if(r!==null){t=O.T,s=J.p,J.p=2,O.T=null;try{for(var u=e.onRecoverableError,p=0;p<r.length;p++){var x=r[p];u(x.value,{componentStack:x.stack})}}finally{O.T=t,J.p=s}}(Ur&3)!==0&&wo(),Rn(e),s=e.pendingLanes,(n&4194090)!==0&&(s&42)!==0?e===mu?Xi++:(Xi=0,mu=e):Xi=0,Zi(0)}}function Tm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ai(t)))}function wo(e){return Cm(),jm(),Em(),Am()}function Am(){if(At!==5)return!1;var e=ba,t=du;du=0;var n=Ls(Ur),r=O.T,s=J.p;try{J.p=32>n?32:n,O.T=null,n=hu,hu=null;var u=ba,p=Ur;if(At=0,$r=ba=null,Ur=0,(Ve&6)!==0)throw Error(l(331));var x=Ve;if(Ve|=4,um(u.current),om(u,u.current,p,n),Ve=x,Zi(0,!1),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(Re,u)}catch{}return!0}finally{J.p=s,O.T=r,Tm(e,t)}}function Rm(e,t,n){t=on(n,t),t=Fc(e.stateNode,t,2),e=ua(e,t,2),e!==null&&(fi(e,2),Rn(e))}function Ke(e,t,n){if(e.tag===3)Rm(e,e,n);else for(;t!==null;){if(t.tag===3){Rm(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xa===null||!xa.has(r))){e=on(n,e),n=Dh(2),r=ua(t,n,2),r!==null&&(zh(n,r,t,e),fi(r,2),Rn(r));break}}t=t.return}}function vu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ev;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(su=!0,s.add(n),e=iv.bind(null,e,t,n),t.then(e,e))}function iv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ie===e&&(Ue&n)===n&&(rt===4||rt===3&&(Ue&62914560)===Ue&&300>Ye()-fu?(Ve&2)===0&&Hr(e,0):cu|=n,Nr===Ue&&(Nr=0)),Rn(e)}function _m(e,t){t===0&&(t=Ed()),e=wr(e,t),e!==null&&(fi(e,t),Rn(e))}function lv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_m(e,n)}function ov(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(l(314))}r!==null&&r.delete(t),_m(e,n)}function sv(e,t){return ge(e,t)}var So=null,Pr=null,xu=!1,Co=!1,bu=!1,Fa=0;function Rn(e){e!==Pr&&e.next===null&&(Pr===null?So=Pr=e:Pr=Pr.next=e),Co=!0,xu||(xu=!0,uv())}function Zi(e,t){if(!bu&&Co){bu=!0;do for(var n=!1,r=So;r!==null;){if(e!==0){var s=r.pendingLanes;if(s===0)var u=0;else{var p=r.suspendedLanes,x=r.pingedLanes;u=(1<<31-mt(42|e)+1)-1,u&=s&~(p&~x),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,zm(r,u))}else u=Ue,u=lr(r,r===Ie?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(u&3)===0||_a(r,u)||(n=!0,zm(r,u));r=r.next}while(n);bu=!1}}function cv(){Mm()}function Mm(){Co=xu=!1;var e=0;Fa!==0&&(vv()&&(e=Fa),Fa=0);for(var t=Ye(),n=null,r=So;r!==null;){var s=r.next,u=Om(r,t);u===0?(r.next=null,n===null?So=s:n.next=s,s===null&&(Pr=n)):(n=r,(e!==0||(u&3)!==0)&&(Co=!0)),r=s}Zi(e)}function Om(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var p=31-mt(u),x=1<<p,T=s[p];T===-1?((x&n)===0||(x&r)!==0)&&(s[p]=L2(x,t)):T<=t&&(e.expiredLanes|=x),u&=~x}if(t=Ie,n=Ue,n=lr(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&qe(r),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||_a(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&qe(r),Ls(n)){case 2:case 8:n=it;break;case 32:n=F;break;case 268435456:n=Ae;break;default:n=F}return r=Dm.bind(null,e),n=ge(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&qe(r),e.callbackPriority=2,e.callbackNode=null,2}function Dm(e,t){if(At!==0&&At!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(wo()&&e.callbackNode!==n)return null;var r=Ue;return r=lr(e,e===Ie?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(mm(e,r,t),Om(e,Ye()),e.callbackNode!=null&&e.callbackNode===n?Dm.bind(null,e):null)}function zm(e,t){if(wo())return null;mm(e,t,!0)}function uv(){bv(function(){(Ve&6)!==0?ge(_e,cv):Mm()})}function wu(){return Fa===0&&(Fa=jd()),Fa}function km(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:zl(""+e)}function Lm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function fv(e,t,n,r,s){if(t==="submit"&&n&&n.stateNode===s){var u=km((s[Bt]||null).action),p=r.submitter;p&&(t=(t=p[Bt]||null)?km(t.formAction):p.getAttribute("formAction"),t!==null&&(u=t,p=null));var x=new $l("action","action",null,r,s);e.push({event:x,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Fa!==0){var T=p?Lm(s,p):new FormData(s);Pc(n,{pending:!0,data:T,method:s.method,action:u},null,T)}}else typeof u=="function"&&(x.preventDefault(),T=p?Lm(s,p):new FormData(s),Pc(n,{pending:!0,data:T,method:s.method,action:u},u,T))},currentTarget:s}]})}}for(var Su=0;Su<lc.length;Su++){var Cu=lc[Su],dv=Cu.toLowerCase(),hv=Cu[0].toUpperCase()+Cu.slice(1);pn(dv,"on"+hv)}pn(m0,"onAnimationEnd"),pn(g0,"onAnimationIteration"),pn(p0,"onAnimationStart"),pn("dblclick","onDoubleClick"),pn("focusin","onFocus"),pn("focusout","onBlur"),pn(My,"onTransitionRun"),pn(Oy,"onTransitionStart"),pn(Dy,"onTransitionCancel"),pn(y0,"onTransitionEnd"),fr("onMouseEnter",["mouseout","mouseover"]),fr("onMouseLeave",["mouseout","mouseover"]),fr("onPointerEnter",["pointerout","pointerover"]),fr("onPointerLeave",["pointerout","pointerover"]),Ma("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ma("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ma("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ma("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ma("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ma("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ki="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ki));function Nm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var u=void 0;if(t)for(var p=r.length-1;0<=p;p--){var x=r[p],T=x.instance,N=x.currentTarget;if(x=x.listener,T!==u&&s.isPropagationStopped())break e;u=x,s.currentTarget=N;try{u(s)}catch(X){co(X)}s.currentTarget=null,u=T}else for(p=0;p<r.length;p++){if(x=r[p],T=x.instance,N=x.currentTarget,x=x.listener,T!==u&&s.isPropagationStopped())break e;u=x,s.currentTarget=N;try{u(s)}catch(X){co(X)}s.currentTarget=null,u=T}}}}function Ne(e,t){var n=t[Ns];n===void 0&&(n=t[Ns]=new Set);var r=e+"__bubble";n.has(r)||($m(t,e,2,!1),n.add(r))}function ju(e,t,n){var r=0;t&&(r|=4),$m(n,e,r,t)}var jo="_reactListening"+Math.random().toString(36).slice(2);function Eu(e){if(!e[jo]){e[jo]=!0,Md.forEach(function(n){n!=="selectionchange"&&(mv.has(n)||ju(n,!1,e),ju(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[jo]||(t[jo]=!0,ju("selectionchange",!1,t))}}function $m(e,t,n,r){switch(og(t)){case 2:var s=Pv;break;case 8:s=qv;break;default:s=Hu}n=s.bind(null,t,n,e),s=void 0,!Xs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Tu(e,t,n,r,s){var u=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var p=r.tag;if(p===3||p===4){var x=r.stateNode.containerInfo;if(x===s)break;if(p===4)for(p=r.return;p!==null;){var T=p.tag;if((T===3||T===4)&&p.stateNode.containerInfo===s)return;p=p.return}for(;x!==null;){if(p=sr(x),p===null)return;if(T=p.tag,T===5||T===6||T===26||T===27){r=u=p;continue e}x=x.parentNode}}r=r.return}Gd(function(){var N=u,X=Ys(n),W=[];e:{var $=v0.get(e);if($!==void 0){var U=$l,Te=e;switch(e){case"keypress":if(Ll(n)===0)break e;case"keydown":case"keyup":U=sy;break;case"focusin":Te="focus",U=Is;break;case"focusout":Te="blur",U=Is;break;case"beforeblur":case"afterblur":U=Is;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=Xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=Q2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=fy;break;case m0:case g0:case p0:U=W2;break;case y0:U=hy;break;case"scroll":case"scrollend":U=Z2;break;case"wheel":U=gy;break;case"copy":case"cut":case"paste":U=ty;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=Kd;break;case"toggle":case"beforetoggle":U=yy}var je=(t&4)!==0,Ze=!je&&(e==="scroll"||e==="scrollend"),k=je?$!==null?$+"Capture":null:$;je=[];for(var M=N,L;M!==null;){var Q=M;if(L=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||L===null||k===null||(Q=mi(M,k),Q!=null&&je.push(Qi(M,Q,L))),Ze)break;M=M.return}0<je.length&&($=new U($,Te,null,n,X),W.push({event:$,listeners:je}))}}if((t&7)===0){e:{if($=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",$&&n!==Gs&&(Te=n.relatedTarget||n.fromElement)&&(sr(Te)||Te[or]))break e;if((U||$)&&($=X.window===X?X:($=X.ownerDocument)?$.defaultView||$.parentWindow:window,U?(Te=n.relatedTarget||n.toElement,U=N,Te=Te?sr(Te):null,Te!==null&&(Ze=d(Te),je=Te.tag,Te!==Ze||je!==5&&je!==27&&je!==6)&&(Te=null)):(U=null,Te=N),U!==Te)){if(je=Xd,Q="onMouseLeave",k="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(je=Kd,Q="onPointerLeave",k="onPointerEnter",M="pointer"),Ze=U==null?$:hi(U),L=Te==null?$:hi(Te),$=new je(Q,M+"leave",U,n,X),$.target=Ze,$.relatedTarget=L,Q=null,sr(X)===N&&(je=new je(k,M+"enter",Te,n,X),je.target=L,je.relatedTarget=Ze,Q=je),Ze=Q,U&&Te)t:{for(je=U,k=Te,M=0,L=je;L;L=qr(L))M++;for(L=0,Q=k;Q;Q=qr(Q))L++;for(;0<M-L;)je=qr(je),M--;for(;0<L-M;)k=qr(k),L--;for(;M--;){if(je===k||k!==null&&je===k.alternate)break t;je=qr(je),k=qr(k)}je=null}else je=null;U!==null&&Um(W,$,U,je,!1),Te!==null&&Ze!==null&&Um(W,Ze,Te,je,!0)}}e:{if($=N?hi(N):window,U=$.nodeName&&$.nodeName.toLowerCase(),U==="select"||U==="input"&&$.type==="file")var ve=a0;else if(t0($))if(r0)ve=Ay;else{ve=Ey;var ke=jy}else U=$.nodeName,!U||U.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?N&&Vs(N.elementType)&&(ve=a0):ve=Ty;if(ve&&(ve=ve(e,N))){n0(W,ve,n,X);break e}ke&&ke(e,$,N),e==="focusout"&&N&&$.type==="number"&&N.memoizedProps.value!=null&&qs($,"number",$.value)}switch(ke=N?hi(N):window,e){case"focusin":(t0(ke)||ke.contentEditable==="true")&&(vr=ke,ac=N,Si=null);break;case"focusout":Si=ac=vr=null;break;case"mousedown":rc=!0;break;case"contextmenu":case"mouseup":case"dragend":rc=!1,d0(W,n,X);break;case"selectionchange":if(_y)break;case"keydown":case"keyup":d0(W,n,X)}var we;if(Ws)e:{switch(e){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else yr?Wd(e,n)&&(Ee="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ee="onCompositionStart");Ee&&(Qd&&n.locale!=="ko"&&(yr||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&yr&&(we=Yd()):(la=X,Zs="value"in la?la.value:la.textContent,yr=!0)),ke=Eo(N,Ee),0<ke.length&&(Ee=new Zd(Ee,e,null,n,X),W.push({event:Ee,listeners:ke}),we?Ee.data=we:(we=e0(n),we!==null&&(Ee.data=we)))),(we=xy?by(e,n):wy(e,n))&&(Ee=Eo(N,"onBeforeInput"),0<Ee.length&&(ke=new Zd("onBeforeInput","beforeinput",null,n,X),W.push({event:ke,listeners:Ee}),ke.data=we)),fv(W,e,N,n,X)}Nm(W,t)})}function Qi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Eo(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,u=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||u===null||(s=mi(e,n),s!=null&&r.unshift(Qi(e,s,u)),s=mi(e,t),s!=null&&r.push(Qi(e,s,u))),e.tag===3)return r;e=e.return}return[]}function qr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Um(e,t,n,r,s){for(var u=t._reactName,p=[];n!==null&&n!==r;){var x=n,T=x.alternate,N=x.stateNode;if(x=x.tag,T!==null&&T===r)break;x!==5&&x!==26&&x!==27||N===null||(T=N,s?(N=mi(n,u),N!=null&&p.unshift(Qi(n,N,T))):s||(N=mi(n,u),N!=null&&p.push(Qi(n,N,T)))),n=n.return}p.length!==0&&e.push({event:t,listeners:p})}var gv=/\r\n?/g,pv=/\u0000|\uFFFD/g;function Hm(e){return(typeof e=="string"?e:""+e).replace(gv,`
`).replace(pv,"")}function Bm(e,t){return t=Hm(t),Hm(e)===t}function To(){}function Xe(e,t,n,r,s,u){switch(n){case"children":typeof r=="string"?t==="body"||t==="textarea"&&r===""||mr(e,r):(typeof r=="number"||typeof r=="bigint")&&t!=="body"&&mr(e,""+r);break;case"className":Ml(e,"class",r);break;case"tabIndex":Ml(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ml(e,n,r);break;case"style":qd(e,r,u);break;case"data":if(t!=="object"){Ml(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=zl(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&Xe(e,t,"name",s.name,s,null),Xe(e,t,"formEncType",s.formEncType,s,null),Xe(e,t,"formMethod",s.formMethod,s,null),Xe(e,t,"formTarget",s.formTarget,s,null)):(Xe(e,t,"encType",s.encType,s,null),Xe(e,t,"method",s.method,s,null),Xe(e,t,"target",s.target,s,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=zl(""+r),e.setAttribute(n,r);break;case"onClick":r!=null&&(e.onclick=To);break;case"onScroll":r!=null&&Ne("scroll",e);break;case"onScrollEnd":r!=null&&Ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(n=r.__html,n!=null){if(s.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}n=zl(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":r===!0?e.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Ne("beforetoggle",e),Ne("toggle",e),_l(e,"popover",r);break;case"xlinkActuate":Un(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Un(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Un(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Un(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Un(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Un(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Un(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Un(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Un(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":_l(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=F2.get(n)||n,_l(e,n,r))}}function Au(e,t,n,r,s,u){switch(n){case"style":qd(e,r,u);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(n=r.__html,n!=null){if(s.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"children":typeof r=="string"?mr(e,r):(typeof r=="number"||typeof r=="bigint")&&mr(e,""+r);break;case"onScroll":r!=null&&Ne("scroll",e);break;case"onScrollEnd":r!=null&&Ne("scrollend",e);break;case"onClick":r!=null&&(e.onclick=To);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Od.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),u=e[Bt]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,s),typeof r=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,s);break e}n in e?e[n]=r:r===!0?e.setAttribute(n,""):_l(e,n,r)}}}function Rt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ne("error",e),Ne("load",e);var r=!1,s=!1,u;for(u in n)if(n.hasOwnProperty(u)){var p=n[u];if(p!=null)switch(u){case"src":r=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Xe(e,t,u,p,n,null)}}s&&Xe(e,t,"srcSet",n.srcSet,n,null),r&&Xe(e,t,"src",n.src,n,null);return;case"input":Ne("invalid",e);var x=u=p=s=null,T=null,N=null;for(r in n)if(n.hasOwnProperty(r)){var X=n[r];if(X!=null)switch(r){case"name":s=X;break;case"type":p=X;break;case"checked":T=X;break;case"defaultChecked":N=X;break;case"value":u=X;break;case"defaultValue":x=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(l(137,t));break;default:Xe(e,t,r,X,n,null)}}Ud(e,u,x,T,N,p,s,!1),Ol(e);return;case"select":Ne("invalid",e),r=p=u=null;for(s in n)if(n.hasOwnProperty(s)&&(x=n[s],x!=null))switch(s){case"value":u=x;break;case"defaultValue":p=x;break;case"multiple":r=x;default:Xe(e,t,s,x,n,null)}t=u,n=p,e.multiple=!!r,t!=null?hr(e,!!r,t,!1):n!=null&&hr(e,!!r,n,!0);return;case"textarea":Ne("invalid",e),u=s=r=null;for(p in n)if(n.hasOwnProperty(p)&&(x=n[p],x!=null))switch(p){case"value":r=x;break;case"defaultValue":s=x;break;case"children":u=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(l(91));break;default:Xe(e,t,p,x,n,null)}Bd(e,r,s,u),Ol(e);return;case"option":for(T in n)if(n.hasOwnProperty(T)&&(r=n[T],r!=null))switch(T){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Xe(e,t,T,r,n,null)}return;case"dialog":Ne("beforetoggle",e),Ne("toggle",e),Ne("cancel",e),Ne("close",e);break;case"iframe":case"object":Ne("load",e);break;case"video":case"audio":for(r=0;r<Ki.length;r++)Ne(Ki[r],e);break;case"image":Ne("error",e),Ne("load",e);break;case"details":Ne("toggle",e);break;case"embed":case"source":case"link":Ne("error",e),Ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in n)if(n.hasOwnProperty(N)&&(r=n[N],r!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Xe(e,t,N,r,n,null)}return;default:if(Vs(t)){for(X in n)n.hasOwnProperty(X)&&(r=n[X],r!==void 0&&Au(e,t,X,r,n,void 0));return}}for(x in n)n.hasOwnProperty(x)&&(r=n[x],r!=null&&Xe(e,t,x,r,n,null))}function yv(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,u=null,p=null,x=null,T=null,N=null,X=null;for(U in n){var W=n[U];if(n.hasOwnProperty(U)&&W!=null)switch(U){case"checked":break;case"value":break;case"defaultValue":T=W;default:r.hasOwnProperty(U)||Xe(e,t,U,null,r,W)}}for(var $ in r){var U=r[$];if(W=n[$],r.hasOwnProperty($)&&(U!=null||W!=null))switch($){case"type":u=U;break;case"name":s=U;break;case"checked":N=U;break;case"defaultChecked":X=U;break;case"value":p=U;break;case"defaultValue":x=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(l(137,t));break;default:U!==W&&Xe(e,t,$,U,r,W)}}Ps(e,p,x,T,N,X,u,s);return;case"select":U=p=x=$=null;for(u in n)if(T=n[u],n.hasOwnProperty(u)&&T!=null)switch(u){case"value":break;case"multiple":U=T;default:r.hasOwnProperty(u)||Xe(e,t,u,null,r,T)}for(s in r)if(u=r[s],T=n[s],r.hasOwnProperty(s)&&(u!=null||T!=null))switch(s){case"value":$=u;break;case"defaultValue":x=u;break;case"multiple":p=u;default:u!==T&&Xe(e,t,s,u,r,T)}t=x,n=p,r=U,$!=null?hr(e,!!n,$,!1):!!r!=!!n&&(t!=null?hr(e,!!n,t,!0):hr(e,!!n,n?[]:"",!1));return;case"textarea":U=$=null;for(x in n)if(s=n[x],n.hasOwnProperty(x)&&s!=null&&!r.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:Xe(e,t,x,null,r,s)}for(p in r)if(s=r[p],u=n[p],r.hasOwnProperty(p)&&(s!=null||u!=null))switch(p){case"value":$=s;break;case"defaultValue":U=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(l(91));break;default:s!==u&&Xe(e,t,p,s,r,u)}Hd(e,$,U);return;case"option":for(var Te in n)if($=n[Te],n.hasOwnProperty(Te)&&$!=null&&!r.hasOwnProperty(Te))switch(Te){case"selected":e.selected=!1;break;default:Xe(e,t,Te,null,r,$)}for(T in r)if($=r[T],U=n[T],r.hasOwnProperty(T)&&$!==U&&($!=null||U!=null))switch(T){case"selected":e.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:Xe(e,t,T,$,r,U)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var je in n)$=n[je],n.hasOwnProperty(je)&&$!=null&&!r.hasOwnProperty(je)&&Xe(e,t,je,null,r,$);for(N in r)if($=r[N],U=n[N],r.hasOwnProperty(N)&&$!==U&&($!=null||U!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(l(137,t));break;default:Xe(e,t,N,$,r,U)}return;default:if(Vs(t)){for(var Ze in n)$=n[Ze],n.hasOwnProperty(Ze)&&$!==void 0&&!r.hasOwnProperty(Ze)&&Au(e,t,Ze,void 0,r,$);for(X in r)$=r[X],U=n[X],!r.hasOwnProperty(X)||$===U||$===void 0&&U===void 0||Au(e,t,X,$,r,U);return}}for(var k in n)$=n[k],n.hasOwnProperty(k)&&$!=null&&!r.hasOwnProperty(k)&&Xe(e,t,k,null,r,$);for(W in r)$=r[W],U=n[W],!r.hasOwnProperty(W)||$===U||$==null&&U==null||Xe(e,t,W,$,r,U)}var Ru=null,_u=null;function Ao(e){return e.nodeType===9?e:e.ownerDocument}function Pm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Mu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ou=null;function vv(){var e=window.event;return e&&e.type==="popstate"?e===Ou?!1:(Ou=e,!0):(Ou=null,!1)}var Vm=typeof setTimeout=="function"?setTimeout:void 0,xv=typeof clearTimeout=="function"?clearTimeout:void 0,Gm=typeof Promise=="function"?Promise:void 0,bv=typeof queueMicrotask=="function"?queueMicrotask:typeof Gm<"u"?function(e){return Gm.resolve(null).then(e).catch(wv)}:Vm;function wv(e){setTimeout(function(){throw e})}function Sa(e){return e==="head"}function Ym(e,t){var n=t,r=0,s=0;do{var u=n.nextSibling;if(e.removeChild(n),u&&u.nodeType===8)if(n=u.data,n==="/$"){if(0<r&&8>r){n=r;var p=e.ownerDocument;if(n&1&&Ii(p.documentElement),n&2&&Ii(p.body),n&4)for(n=p.head,Ii(n),p=n.firstChild;p;){var x=p.nextSibling,T=p.nodeName;p[di]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&p.rel.toLowerCase()==="stylesheet"||n.removeChild(p),p=x}}if(s===0){e.removeChild(u),il(t);return}s--}else n==="$"||n==="$?"||n==="$!"?s++:r=n.charCodeAt(0)-48;else r=0;n=u}while(n);il(t)}function Du(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Du(n),$s(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Sv(e,t,n,r){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[di])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=vn(e.nextSibling),e===null)break}return null}function Cv(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=vn(e.nextSibling),e===null))return null;return e}function zu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function jv(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function vn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var ku=null;function Fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Xm(e,t,n){switch(t=Ao(n),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function Ii(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);$s(e)}var hn=new Map,Zm=new Set;function Ro(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Jn=J.d;J.d={f:Ev,r:Tv,D:Av,C:Rv,L:_v,m:Mv,X:Dv,S:Ov,M:zv};function Ev(){var e=Jn.f(),t=xo();return e||t}function Tv(e){var t=cr(e);t!==null&&t.tag===5&&t.type==="form"?mh(t):Jn.r(e)}var Vr=typeof document>"u"?null:document;function Km(e,t,n){var r=Vr;if(r&&typeof t=="string"&&t){var s=ln(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Zm.has(s)||(Zm.add(s),e={rel:e,crossOrigin:n,href:t},r.querySelector(s)===null&&(t=r.createElement("link"),Rt(t,"link",e),vt(t),r.head.appendChild(t)))}}function Av(e){Jn.D(e),Km("dns-prefetch",e,null)}function Rv(e,t){Jn.C(e,t),Km("preconnect",e,t)}function _v(e,t,n){Jn.L(e,t,n);var r=Vr;if(r&&e&&t){var s='link[rel="preload"][as="'+ln(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+ln(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+ln(n.imageSizes)+'"]')):s+='[href="'+ln(e)+'"]';var u=s;switch(t){case"style":u=Gr(e);break;case"script":u=Yr(e)}hn.has(u)||(e=b({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),hn.set(u,e),r.querySelector(s)!==null||t==="style"&&r.querySelector(Ji(u))||t==="script"&&r.querySelector(Wi(u))||(t=r.createElement("link"),Rt(t,"link",e),vt(t),r.head.appendChild(t)))}}function Mv(e,t){Jn.m(e,t);var n=Vr;if(n&&e){var r=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+ln(r)+'"][href="'+ln(e)+'"]',u=s;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Yr(e)}if(!hn.has(u)&&(e=b({rel:"modulepreload",href:e},t),hn.set(u,e),n.querySelector(s)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Wi(u)))return}r=n.createElement("link"),Rt(r,"link",e),vt(r),n.head.appendChild(r)}}}function Ov(e,t,n){Jn.S(e,t,n);var r=Vr;if(r&&e){var s=ur(r).hoistableStyles,u=Gr(e);t=t||"default";var p=s.get(u);if(!p){var x={loading:0,preload:null};if(p=r.querySelector(Ji(u)))x.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},n),(n=hn.get(u))&&Lu(e,n);var T=p=r.createElement("link");vt(T),Rt(T,"link",e),T._p=new Promise(function(N,X){T.onload=N,T.onerror=X}),T.addEventListener("load",function(){x.loading|=1}),T.addEventListener("error",function(){x.loading|=2}),x.loading|=4,_o(p,t,r)}p={type:"stylesheet",instance:p,count:1,state:x},s.set(u,p)}}}function Dv(e,t){Jn.X(e,t);var n=Vr;if(n&&e){var r=ur(n).hoistableScripts,s=Yr(e),u=r.get(s);u||(u=n.querySelector(Wi(s)),u||(e=b({src:e,async:!0},t),(t=hn.get(s))&&Nu(e,t),u=n.createElement("script"),vt(u),Rt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(s,u))}}function zv(e,t){Jn.M(e,t);var n=Vr;if(n&&e){var r=ur(n).hoistableScripts,s=Yr(e),u=r.get(s);u||(u=n.querySelector(Wi(s)),u||(e=b({src:e,async:!0,type:"module"},t),(t=hn.get(s))&&Nu(e,t),u=n.createElement("script"),vt(u),Rt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(s,u))}}function Qm(e,t,n,r){var s=(s=B.current)?Ro(s):null;if(!s)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Gr(n.href),n=ur(s).hoistableStyles,r=n.get(t),r||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Gr(n.href);var u=ur(s).hoistableStyles,p=u.get(e);if(p||(s=s.ownerDocument||s,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,p),(u=s.querySelector(Ji(e)))&&!u._p&&(p.instance=u,p.state.loading=5),hn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},hn.set(e,n),u||kv(s,e,n,p.state))),t&&r===null)throw Error(l(528,""));return p}if(t&&r!==null)throw Error(l(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Yr(n),n=ur(s).hoistableScripts,r=n.get(t),r||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function Gr(e){return'href="'+ln(e)+'"'}function Ji(e){return'link[rel="stylesheet"]['+e+"]"}function Im(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function kv(e,t,n,r){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?r.loading=1:(t=e.createElement("link"),r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2}),Rt(t,"link",n),vt(t),e.head.appendChild(t))}function Yr(e){return'[src="'+ln(e)+'"]'}function Wi(e){return"script[async]"+e}function Jm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+ln(n.href)+'"]');if(r)return t.instance=r,vt(r),r;var s=b({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),vt(r),Rt(r,"style",s),_o(r,n.precedence,e),t.instance=r;case"stylesheet":s=Gr(n.href);var u=e.querySelector(Ji(s));if(u)return t.state.loading|=4,t.instance=u,vt(u),u;r=Im(n),(s=hn.get(s))&&Lu(r,s),u=(e.ownerDocument||e).createElement("link"),vt(u);var p=u;return p._p=new Promise(function(x,T){p.onload=x,p.onerror=T}),Rt(u,"link",r),t.state.loading|=4,_o(u,n.precedence,e),t.instance=u;case"script":return u=Yr(n.src),(s=e.querySelector(Wi(u)))?(t.instance=s,vt(s),s):(r=n,(s=hn.get(u))&&(r=b({},n),Nu(r,s)),e=e.ownerDocument||e,s=e.createElement("script"),vt(s),Rt(s,"link",r),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,_o(r,n.precedence,e));return t.instance}function _o(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=r.length?r[r.length-1]:null,u=s,p=0;p<r.length;p++){var x=r[p];if(x.dataset.precedence===t)u=x;else if(u!==s)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Lu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Nu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Mo=null;function Wm(e,t,n){if(Mo===null){var r=new Map,s=Mo=new Map;s.set(n,r)}else s=Mo,r=s.get(n),r||(r=new Map,s.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var u=n[s];if(!(u[di]||u[Mt]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var p=u.getAttribute(t)||"";p=e+p;var x=r.get(p);x?x.push(u):r.set(p,[u])}}return r}function eg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Lv(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function tg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var el=null;function Nv(){}function $v(e,t,n){if(el===null)throw Error(l(475));var r=el;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var s=Gr(n.href),u=e.querySelector(Ji(s));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(r.count++,r=Oo.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=u,vt(u);return}u=e.ownerDocument||e,n=Im(n),(s=hn.get(s))&&Lu(n,s),u=u.createElement("link"),vt(u);var p=u;p._p=new Promise(function(x,T){p.onload=x,p.onerror=T}),Rt(u,"link",n),t.instance=u}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(r.count++,t=Oo.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}function Uv(){if(el===null)throw Error(l(475));var e=el;return e.stylesheets&&e.count===0&&$u(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&$u(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Oo(){if(this.count--,this.count===0){if(this.stylesheets)$u(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Do=null;function $u(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Do=new Map,t.forEach(Hv,e),Do=null,Oo.call(e))}function Hv(e,t){if(!(t.state.loading&4)){var n=Do.get(e);if(n)var r=n.get(null);else{n=new Map,Do.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<s.length;u++){var p=s[u];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(n.set(p.dataset.precedence,p),r=p)}r&&n.set(null,r)}s=t.instance,p=s.getAttribute("data-precedence"),u=n.get(p)||r,u===r&&n.set(null,s),n.set(p,s),this.count++,r=Oo.bind(this),s.addEventListener("load",r),s.addEventListener("error",r),u?u.parentNode.insertBefore(s,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var tl={$$typeof:z,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function Bv(e,t,n,r,s,u,p,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=zs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zs(0),this.hiddenUpdates=zs(null),this.identifierPrefix=r,this.onUncaughtError=s,this.onCaughtError=u,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function ng(e,t,n,r,s,u,p,x,T,N,X,W){return e=new Bv(e,t,n,p,x,T,N,W),t=1,u===!0&&(t|=24),u=Qt(3,null,null,t),e.current=u,u.stateNode=e,t=vc(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:r,isDehydrated:n,cache:t},Sc(u),e}function ag(e){return e?(e=Sr,e):Sr}function rg(e,t,n,r,s,u){s=ag(s),r.context===null?r.context=s:r.pendingContext=s,r=ca(t),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=ua(e,r,t),n!==null&&(tn(n,e,t),Oi(n,e,t))}function ig(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Uu(e,t){ig(e,t),(e=e.alternate)&&ig(e,t)}function lg(e){if(e.tag===13){var t=wr(e,67108864);t!==null&&tn(t,e,67108864),Uu(e,67108864)}}var zo=!0;function Pv(e,t,n,r){var s=O.T;O.T=null;var u=J.p;try{J.p=2,Hu(e,t,n,r)}finally{J.p=u,O.T=s}}function qv(e,t,n,r){var s=O.T;O.T=null;var u=J.p;try{J.p=8,Hu(e,t,n,r)}finally{J.p=u,O.T=s}}function Hu(e,t,n,r){if(zo){var s=Bu(r);if(s===null)Tu(e,t,r,ko,n),sg(e,r);else if(Gv(s,e,t,n,r))r.stopPropagation();else if(sg(e,r),t&4&&-1<Vv.indexOf(e)){for(;s!==null;){var u=cr(s);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var p=$n(u.pendingLanes);if(p!==0){var x=u;for(x.pendingLanes|=2,x.entangledLanes|=2;p;){var T=1<<31-mt(p);x.entanglements[1]|=T,p&=~T}Rn(u),(Ve&6)===0&&(yo=Ye()+500,Zi(0))}}break;case 13:x=wr(u,2),x!==null&&tn(x,u,2),xo(),Uu(u,2)}if(u=Bu(r),u===null&&Tu(e,t,r,ko,n),u===s)break;s=u}s!==null&&r.stopPropagation()}else Tu(e,t,r,null,n)}}function Bu(e){return e=Ys(e),Pu(e)}var ko=null;function Pu(e){if(ko=null,e=sr(e),e!==null){var t=d(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ko=e,null}function og(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qe()){case _e:return 2;case it:return 8;case F:case me:return 32;case Ae:return 268435456;default:return 32}default:return 32}}var qu=!1,Ca=null,ja=null,Ea=null,nl=new Map,al=new Map,Ta=[],Vv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sg(e,t){switch(e){case"focusin":case"focusout":Ca=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":Ea=null;break;case"pointerover":case"pointerout":nl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":al.delete(t.pointerId)}}function rl(e,t,n,r,s,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:u,targetContainers:[s]},t!==null&&(t=cr(t),t!==null&&lg(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Gv(e,t,n,r,s){switch(t){case"focusin":return Ca=rl(Ca,e,t,n,r,s),!0;case"dragenter":return ja=rl(ja,e,t,n,r,s),!0;case"mouseover":return Ea=rl(Ea,e,t,n,r,s),!0;case"pointerover":var u=s.pointerId;return nl.set(u,rl(nl.get(u)||null,e,t,n,r,s)),!0;case"gotpointercapture":return u=s.pointerId,al.set(u,rl(al.get(u)||null,e,t,n,r,s)),!0}return!1}function cg(e){var t=sr(e.target);if(t!==null){var n=d(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,$2(e.priority,function(){if(n.tag===13){var r=en();r=ks(r);var s=wr(n,r);s!==null&&tn(s,n,r),Uu(n,r)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Bu(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Gs=r,n.target.dispatchEvent(r),Gs=null}else return t=cr(n),t!==null&&lg(t),e.blockedOn=n,!1;t.shift()}return!0}function ug(e,t,n){Lo(e)&&n.delete(t)}function Yv(){qu=!1,Ca!==null&&Lo(Ca)&&(Ca=null),ja!==null&&Lo(ja)&&(ja=null),Ea!==null&&Lo(Ea)&&(Ea=null),nl.forEach(ug),al.forEach(ug)}function No(e,t){e.blockedOn===t&&(e.blockedOn=null,qu||(qu=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Yv)))}var $o=null;function fg(e){$o!==e&&($o=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){$o===e&&($o=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],s=e[t+2];if(typeof r!="function"){if(Pu(r||n)===null)continue;break}var u=cr(n);u!==null&&(e.splice(t,3),t-=3,Pc(u,{pending:!0,data:s,method:n.method,action:r},r,s))}}))}function il(e){function t(T){return No(T,e)}Ca!==null&&No(Ca,e),ja!==null&&No(ja,e),Ea!==null&&No(Ea,e),nl.forEach(t),al.forEach(t);for(var n=0;n<Ta.length;n++){var r=Ta[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ta.length&&(n=Ta[0],n.blockedOn===null);)cg(n),n.blockedOn===null&&Ta.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var s=n[r],u=n[r+1],p=s[Bt]||null;if(typeof u=="function")p||fg(n);else if(p){var x=null;if(u&&u.hasAttribute("formAction")){if(s=u,p=u[Bt]||null)x=p.formAction;else if(Pu(s)!==null)continue}else x=p.action;typeof x=="function"?n[r+1]=x:(n.splice(r,3),r-=3),fg(n)}}}function Vu(e){this._internalRoot=e}Uo.prototype.render=Vu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var n=t.current,r=en();rg(n,r,e,t,null,null)},Uo.prototype.unmount=Vu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rg(e.current,2,null,e,null,null),xo(),t[or]=null}};function Uo(e){this._internalRoot=e}Uo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Rd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ta.length&&t!==0&&t<Ta[n].priority;n++);Ta.splice(n,0,e),n===0&&cg(e)}};var dg=i.version;if(dg!=="19.1.1")throw Error(l(527,dg,"19.1.1"));J.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=m(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Fv={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ho.isDisabled&&Ho.supportsFiber)try{Re=Ho.inject(Fv),$e=Ho}catch{}}return ol.createRoot=function(e,t){if(!f(e))throw Error(l(299));var n=!1,r="",s=Rh,u=_h,p=Mh,x=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(x=t.unstable_transitionCallbacks)),t=ng(e,1,!1,null,null,n,r,s,u,p,x,null),e[or]=t.current,Eu(e),new Vu(t)},ol.hydrateRoot=function(e,t,n){if(!f(e))throw Error(l(299));var r=!1,s="",u=Rh,p=_h,x=Mh,T=null,N=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks),n.formState!==void 0&&(N=n.formState)),t=ng(e,1,!0,t,n??null,r,s,u,p,x,T,N),t.context=ag(null),n=t.current,r=en(),r=ks(r),s=ca(r),s.callback=null,ua(n,s,r),n=r,t.current.lanes=n,fi(t,n),Rn(t),e[or]=t.current,Eu(e),new Uo(t)},ol.version="19.1.1",ol}var Sg;function t5(){if(Sg)return Fu.exports;Sg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Fu.exports=e5(),Fu.exports}var n5=t5();/**
 * react-router v7.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Cg="popstate";function a5(a={}){function i(l,f){let{pathname:d,search:h,hash:v}=l.location;return Nf("",{pathname:d,search:h,hash:v},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function o(l,f){return typeof f=="string"?f:pl(f)}return i5(i,o,null,a)}function tt(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function bn(a,i){if(!a){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function r5(){return Math.random().toString(36).substring(2,10)}function jg(a,i){return{usr:a.state,key:a.key,idx:i}}function Nf(a,i,o=null,l){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof i=="string"?ai(i):i,state:o,key:i&&i.key||l||r5()}}function pl({pathname:a="/",search:i="",hash:o=""}){return i&&i!=="?"&&(a+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(a+=o.charAt(0)==="#"?o:"#"+o),a}function ai(a){let i={};if(a){let o=a.indexOf("#");o>=0&&(i.hash=a.substring(o),a=a.substring(0,o));let l=a.indexOf("?");l>=0&&(i.search=a.substring(l),a=a.substring(0,l)),a&&(i.pathname=a)}return i}function i5(a,i,o,l={}){let{window:f=document.defaultView,v5Compat:d=!1}=l,h=f.history,v="POP",m=null,g=b();g==null&&(g=0,h.replaceState({...h.state,idx:g},""));function b(){return(h.state||{idx:null}).idx}function S(){v="POP";let A=b(),D=A==null?null:A-g;g=A,m&&m({action:v,location:E.location,delta:D})}function j(A,D){v="PUSH";let H=Nf(E.location,A,D);g=b()+1;let z=jg(H,g),K=E.createHref(H);try{h.pushState(z,"",K)}catch(Z){if(Z instanceof DOMException&&Z.name==="DataCloneError")throw Z;f.location.assign(K)}d&&m&&m({action:v,location:E.location,delta:1})}function _(A,D){v="REPLACE";let H=Nf(E.location,A,D);g=b();let z=jg(H,g),K=E.createHref(H);h.replaceState(z,"",K),d&&m&&m({action:v,location:E.location,delta:0})}function C(A){return l5(A)}let E={get action(){return v},get location(){return a(f,h)},listen(A){if(m)throw new Error("A history only accepts one active listener");return f.addEventListener(Cg,S),m=A,()=>{f.removeEventListener(Cg,S),m=null}},createHref(A){return i(f,A)},createURL:C,encodeLocation(A){let D=C(A);return{pathname:D.pathname,search:D.search,hash:D.hash}},push:j,replace:_,go(A){return h.go(A)}};return E}function l5(a,i=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),tt(o,"No window.location.(origin|href) available to create URL");let l=typeof a=="string"?a:pl(a);return l=l.replace(/ $/,"%20"),!i&&l.startsWith("//")&&(l=o+l),new URL(l,o)}function rp(a,i,o="/"){return o5(a,i,o,!1)}function o5(a,i,o,l){let f=typeof i=="string"?ai(i):i,d=na(f.pathname||"/",o);if(d==null)return null;let h=ip(a);s5(h);let v=null;for(let m=0;v==null&&m<h.length;++m){let g=x5(d);v=y5(h[m],g,l)}return v}function ip(a,i=[],o=[],l="",f=!1){let d=(h,v,m=f,g)=>{let b={relativePath:g===void 0?h.path||"":g,caseSensitive:h.caseSensitive===!0,childrenIndex:v,route:h};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(l)&&m)return;tt(b.relativePath.startsWith(l),`Absolute route path "${b.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(l.length)}let S=ea([l,b.relativePath]),j=o.concat(b);h.children&&h.children.length>0&&(tt(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${S}".`),ip(h.children,i,j,S,m)),!(h.path==null&&!h.index)&&i.push({path:S,score:g5(S,h.index),routesMeta:j})};return a.forEach((h,v)=>{if(h.path===""||!h.path?.includes("?"))d(h,v);else for(let m of lp(h.path))d(h,v,!0,m)}),i}function lp(a){let i=a.split("/");if(i.length===0)return[];let[o,...l]=i,f=o.endsWith("?"),d=o.replace(/\?$/,"");if(l.length===0)return f?[d,""]:[d];let h=lp(l.join("/")),v=[];return v.push(...h.map(m=>m===""?d:[d,m].join("/"))),f&&v.push(...h),v.map(m=>a.startsWith("/")&&m===""?"/":m)}function s5(a){a.sort((i,o)=>i.score!==o.score?o.score-i.score:p5(i.routesMeta.map(l=>l.childrenIndex),o.routesMeta.map(l=>l.childrenIndex)))}var c5=/^:[\w-]+$/,u5=3,f5=2,d5=1,h5=10,m5=-2,Eg=a=>a==="*";function g5(a,i){let o=a.split("/"),l=o.length;return o.some(Eg)&&(l+=m5),i&&(l+=f5),o.filter(f=>!Eg(f)).reduce((f,d)=>f+(c5.test(d)?u5:d===""?d5:h5),l)}function p5(a,i){return a.length===i.length&&a.slice(0,-1).every((l,f)=>l===i[f])?a[a.length-1]-i[i.length-1]:0}function y5(a,i,o=!1){let{routesMeta:l}=a,f={},d="/",h=[];for(let v=0;v<l.length;++v){let m=l[v],g=v===l.length-1,b=d==="/"?i:i.slice(d.length)||"/",S=os({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},b),j=m.route;if(!S&&g&&o&&!l[l.length-1].route.index&&(S=os({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},b)),!S)return null;Object.assign(f,S.params),h.push({params:f,pathname:ea([d,S.pathname]),pathnameBase:C5(ea([d,S.pathnameBase])),route:j}),S.pathnameBase!=="/"&&(d=ea([d,S.pathnameBase]))}return h}function os(a,i){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[o,l]=v5(a.path,a.caseSensitive,a.end),f=i.match(o);if(!f)return null;let d=f[0],h=d.replace(/(.)\/+$/,"$1"),v=f.slice(1);return{params:l.reduce((g,{paramName:b,isOptional:S},j)=>{if(b==="*"){let C=v[j]||"";h=d.slice(0,d.length-C.length).replace(/(.)\/+$/,"$1")}const _=v[j];return S&&!_?g[b]=void 0:g[b]=(_||"").replace(/%2F/g,"/"),g},{}),pathname:d,pathnameBase:h,pattern:a}}function v5(a,i=!1,o=!0){bn(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let l=[],f="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,v,m)=>(l.push({paramName:v,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(l.push({paramName:"*"}),f+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?f+="\\/*$":a!==""&&a!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,i?void 0:"i"),l]}function x5(a){try{return a.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return bn(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),a}}function na(a,i){if(i==="/")return a;if(!a.toLowerCase().startsWith(i.toLowerCase()))return null;let o=i.endsWith("/")?i.length-1:i.length,l=a.charAt(o);return l&&l!=="/"?null:a.slice(o)||"/"}function b5(a,i="/"){let{pathname:o,search:l="",hash:f=""}=typeof a=="string"?ai(a):a;return{pathname:o?o.startsWith("/")?o:w5(o,i):i,search:j5(l),hash:E5(f)}}function w5(a,i){let o=i.replace(/\/+$/,"").split("/");return a.split("/").forEach(f=>{f===".."?o.length>1&&o.pop():f!=="."&&o.push(f)}),o.length>1?o.join("/"):"/"}function Qu(a,i,o,l){return`Cannot include a '${a}' character in a manually specified \`to.${i}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function S5(a){return a.filter((i,o)=>o===0||i.route.path&&i.route.path.length>0)}function td(a){let i=S5(a);return i.map((o,l)=>l===i.length-1?o.pathname:o.pathnameBase)}function nd(a,i,o,l=!1){let f;typeof a=="string"?f=ai(a):(f={...a},tt(!f.pathname||!f.pathname.includes("?"),Qu("?","pathname","search",f)),tt(!f.pathname||!f.pathname.includes("#"),Qu("#","pathname","hash",f)),tt(!f.search||!f.search.includes("#"),Qu("#","search","hash",f)));let d=a===""||f.pathname==="",h=d?"/":f.pathname,v;if(h==null)v=o;else{let S=i.length-1;if(!l&&h.startsWith("..")){let j=h.split("/");for(;j[0]==="..";)j.shift(),S-=1;f.pathname=j.join("/")}v=S>=0?i[S]:"/"}let m=b5(f,v),g=h&&h!=="/"&&h.endsWith("/"),b=(d||h===".")&&o.endsWith("/");return!m.pathname.endsWith("/")&&(g||b)&&(m.pathname+="/"),m}var ea=a=>a.join("/").replace(/\/\/+/g,"/"),C5=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),j5=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,E5=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function T5(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var op=["POST","PUT","PATCH","DELETE"];new Set(op);var A5=["GET",...op];new Set(A5);var ri=w.createContext(null);ri.displayName="DataRouter";var gs=w.createContext(null);gs.displayName="DataRouterState";w.createContext(!1);var sp=w.createContext({isTransitioning:!1});sp.displayName="ViewTransition";var R5=w.createContext(new Map);R5.displayName="Fetchers";var _5=w.createContext(null);_5.displayName="Await";var wn=w.createContext(null);wn.displayName="Navigation";var wl=w.createContext(null);wl.displayName="Location";var Sn=w.createContext({outlet:null,matches:[],isDataRoute:!1});Sn.displayName="Route";var ad=w.createContext(null);ad.displayName="RouteError";function M5(a,{relative:i}={}){tt(ii(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:l}=w.useContext(wn),{hash:f,pathname:d,search:h}=Sl(a,{relative:i}),v=d;return o!=="/"&&(v=d==="/"?o:ea([o,d])),l.createHref({pathname:v,search:h,hash:f})}function ii(){return w.useContext(wl)!=null}function gn(){return tt(ii(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(wl).location}var cp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function up(a){w.useContext(wn).static||w.useLayoutEffect(a)}function Ut(){let{isDataRoute:a}=w.useContext(Sn);return a?V5():O5()}function O5(){tt(ii(),"useNavigate() may be used only in the context of a <Router> component.");let a=w.useContext(ri),{basename:i,navigator:o}=w.useContext(wn),{matches:l}=w.useContext(Sn),{pathname:f}=gn(),d=JSON.stringify(td(l)),h=w.useRef(!1);return up(()=>{h.current=!0}),w.useCallback((m,g={})=>{if(bn(h.current,cp),!h.current)return;if(typeof m=="number"){o.go(m);return}let b=nd(m,JSON.parse(d),f,g.relative==="path");a==null&&i!=="/"&&(b.pathname=b.pathname==="/"?i:ea([i,b.pathname])),(g.replace?o.replace:o.push)(b,g.state,g)},[i,o,d,f,a])}w.createContext(null);function Iu(){let{matches:a}=w.useContext(Sn),i=a[a.length-1];return i?i.params:{}}function Sl(a,{relative:i}={}){let{matches:o}=w.useContext(Sn),{pathname:l}=gn(),f=JSON.stringify(td(o));return w.useMemo(()=>nd(a,JSON.parse(f),l,i==="path"),[a,f,l,i])}function D5(a,i){return fp(a,i)}function fp(a,i,o,l){tt(ii(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=w.useContext(wn),{matches:d}=w.useContext(Sn),h=d[d.length-1],v=h?h.params:{},m=h?h.pathname:"/",g=h?h.pathnameBase:"/",b=h&&h.route;{let D=b&&b.path||"";dp(m,!b||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let S=gn(),j;if(i){let D=typeof i=="string"?ai(i):i;tt(g==="/"||D.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${D.pathname}" was given in the \`location\` prop.`),j=D}else j=S;let _=j.pathname||"/",C=_;if(g!=="/"){let D=g.replace(/^\//,"").split("/");C="/"+_.replace(/^\//,"").split("/").slice(D.length).join("/")}let E=rp(a,{pathname:C});bn(b||E!=null,`No routes matched location "${j.pathname}${j.search}${j.hash}" `),bn(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${j.pathname}${j.search}${j.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let A=$5(E&&E.map(D=>Object.assign({},D,{params:Object.assign({},v,D.params),pathname:ea([g,f.encodeLocation?f.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?g:ea([g,f.encodeLocation?f.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),d,o,l);return i&&A?w.createElement(wl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...j},navigationType:"POP"}},A):A}function z5(){let a=q5(),i=T5(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),o=a instanceof Error?a.stack:null,l="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:l},d={padding:"2px 4px",backgroundColor:l},h=null;return console.error("Error handled by React Router default ErrorBoundary:",a),h=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:d},"ErrorBoundary")," or"," ",w.createElement("code",{style:d},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},i),o?w.createElement("pre",{style:f},o):null,h)}var k5=w.createElement(z5,null),L5=class extends w.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,i){return i.location!==a.location||i.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:i.error,location:i.location,revalidation:a.revalidation||i.revalidation}}componentDidCatch(a,i){console.error("React Router caught the following error during render",a,i)}render(){return this.state.error!==void 0?w.createElement(Sn.Provider,{value:this.props.routeContext},w.createElement(ad.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function N5({routeContext:a,match:i,children:o}){let l=w.useContext(ri);return l&&l.static&&l.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=i.route.id),w.createElement(Sn.Provider,{value:a},o)}function $5(a,i=[],o=null,l=null){if(a==null){if(!o)return null;if(o.errors)a=o.matches;else if(i.length===0&&!o.initialized&&o.matches.length>0)a=o.matches;else return null}let f=a,d=o?.errors;if(d!=null){let m=f.findIndex(g=>g.route.id&&d?.[g.route.id]!==void 0);tt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),f=f.slice(0,Math.min(f.length,m+1))}let h=!1,v=-1;if(o)for(let m=0;m<f.length;m++){let g=f[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(v=m),g.route.id){let{loaderData:b,errors:S}=o,j=g.route.loader&&!b.hasOwnProperty(g.route.id)&&(!S||S[g.route.id]===void 0);if(g.route.lazy||j){h=!0,v>=0?f=f.slice(0,v+1):f=[f[0]];break}}}return f.reduceRight((m,g,b)=>{let S,j=!1,_=null,C=null;o&&(S=d&&g.route.id?d[g.route.id]:void 0,_=g.route.errorElement||k5,h&&(v<0&&b===0?(dp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),j=!0,C=null):v===b&&(j=!0,C=g.route.hydrateFallbackElement||null)));let E=i.concat(f.slice(0,b+1)),A=()=>{let D;return S?D=_:j?D=C:g.route.Component?D=w.createElement(g.route.Component,null):g.route.element?D=g.route.element:D=m,w.createElement(N5,{match:g,routeContext:{outlet:m,matches:E,isDataRoute:o!=null},children:D})};return o&&(g.route.ErrorBoundary||g.route.errorElement||b===0)?w.createElement(L5,{location:o.location,revalidation:o.revalidation,component:_,error:S,children:A(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):A()},null)}function rd(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function U5(a){let i=w.useContext(ri);return tt(i,rd(a)),i}function H5(a){let i=w.useContext(gs);return tt(i,rd(a)),i}function B5(a){let i=w.useContext(Sn);return tt(i,rd(a)),i}function id(a){let i=B5(a),o=i.matches[i.matches.length-1];return tt(o.route.id,`${a} can only be used on routes that contain a unique "id"`),o.route.id}function P5(){return id("useRouteId")}function q5(){let a=w.useContext(ad),i=H5("useRouteError"),o=id("useRouteError");return a!==void 0?a:i.errors?.[o]}function V5(){let{router:a}=U5("useNavigate"),i=id("useNavigate"),o=w.useRef(!1);return up(()=>{o.current=!0}),w.useCallback(async(f,d={})=>{bn(o.current,cp),o.current&&(typeof f=="number"?a.navigate(f):await a.navigate(f,{fromRouteId:i,...d}))},[a,i])}var Tg={};function dp(a,i,o){!i&&!Tg[a]&&(Tg[a]=!0,bn(!1,o))}w.memo(G5);function G5({routes:a,future:i,state:o}){return fp(a,void 0,o,i)}function Y5({to:a,replace:i,state:o,relative:l}){tt(ii(),"<Navigate> may be used only in the context of a <Router> component.");let{static:f}=w.useContext(wn);bn(!f,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:d}=w.useContext(Sn),{pathname:h}=gn(),v=Ut(),m=nd(a,td(d),h,l==="path"),g=JSON.stringify(m);return w.useEffect(()=>{v(JSON.parse(g),{replace:i,state:o,relative:l})},[v,g,l,i,o]),null}function kt(a){tt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function F5({basename:a="/",children:i=null,location:o,navigationType:l="POP",navigator:f,static:d=!1}){tt(!ii(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=a.replace(/^\/*/,"/"),v=w.useMemo(()=>({basename:h,navigator:f,static:d,future:{}}),[h,f,d]);typeof o=="string"&&(o=ai(o));let{pathname:m="/",search:g="",hash:b="",state:S=null,key:j="default"}=o,_=w.useMemo(()=>{let C=na(m,h);return C==null?null:{location:{pathname:C,search:g,hash:b,state:S,key:j},navigationType:l}},[h,m,g,b,S,j,l]);return bn(_!=null,`<Router basename="${h}"> is not able to match the URL "${m}${g}${b}" because it does not start with the basename, so the <Router> won't render anything.`),_==null?null:w.createElement(wn.Provider,{value:v},w.createElement(wl.Provider,{children:i,value:_}))}function X5({children:a,location:i}){return D5($f(a),i)}function $f(a,i=[]){let o=[];return w.Children.forEach(a,(l,f)=>{if(!w.isValidElement(l))return;let d=[...i,f];if(l.type===w.Fragment){o.push.apply(o,$f(l.props.children,d));return}tt(l.type===kt,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),tt(!l.props.index||!l.props.children,"An index route cannot have child routes.");let h={id:l.props.id||d.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(h.children=$f(l.props.children,d)),o.push(h)}),o}var Qo="get",Io="application/x-www-form-urlencoded";function ps(a){return a!=null&&typeof a.tagName=="string"}function Z5(a){return ps(a)&&a.tagName.toLowerCase()==="button"}function K5(a){return ps(a)&&a.tagName.toLowerCase()==="form"}function Q5(a){return ps(a)&&a.tagName.toLowerCase()==="input"}function I5(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function J5(a,i){return a.button===0&&(!i||i==="_self")&&!I5(a)}var Bo=null;function W5(){if(Bo===null)try{new FormData(document.createElement("form"),0),Bo=!1}catch{Bo=!0}return Bo}var ex=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ju(a){return a!=null&&!ex.has(a)?(bn(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Io}"`),null):a}function tx(a,i){let o,l,f,d,h;if(K5(a)){let v=a.getAttribute("action");l=v?na(v,i):null,o=a.getAttribute("method")||Qo,f=Ju(a.getAttribute("enctype"))||Io,d=new FormData(a)}else if(Z5(a)||Q5(a)&&(a.type==="submit"||a.type==="image")){let v=a.form;if(v==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=a.getAttribute("formaction")||v.getAttribute("action");if(l=m?na(m,i):null,o=a.getAttribute("formmethod")||v.getAttribute("method")||Qo,f=Ju(a.getAttribute("formenctype"))||Ju(v.getAttribute("enctype"))||Io,d=new FormData(v,a),!W5()){let{name:g,type:b,value:S}=a;if(b==="image"){let j=g?`${g}.`:"";d.append(`${j}x`,"0"),d.append(`${j}y`,"0")}else g&&d.append(g,S)}}else{if(ps(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Qo,l=null,f=Io,h=a}return d&&f==="text/plain"&&(h=d,d=void 0),{action:l,method:o.toLowerCase(),encType:f,formData:d,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ld(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function nx(a,i,o){let l=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return l.pathname==="/"?l.pathname=`_root.${o}`:i&&na(l.pathname,i)==="/"?l.pathname=`${i.replace(/\/$/,"")}/_root.${o}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${o}`,l}async function ax(a,i){if(a.id in i)return i[a.id];try{let o=await import(a.module);return i[a.id]=o,o}catch(o){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function rx(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function ix(a,i,o){let l=await Promise.all(a.map(async f=>{let d=i.routes[f.route.id];if(d){let h=await ax(d,o);return h.links?h.links():[]}return[]}));return cx(l.flat(1).filter(rx).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Ag(a,i,o,l,f,d){let h=(m,g)=>o[g]?m.route.id!==o[g].route.id:!0,v=(m,g)=>o[g].pathname!==m.pathname||o[g].route.path?.endsWith("*")&&o[g].params["*"]!==m.params["*"];return d==="assets"?i.filter((m,g)=>h(m,g)||v(m,g)):d==="data"?i.filter((m,g)=>{let b=l.routes[m.route.id];if(!b||!b.hasLoader)return!1;if(h(m,g)||v(m,g))return!0;if(m.route.shouldRevalidate){let S=m.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:o[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function lx(a,i,{includeHydrateFallback:o}={}){return ox(a.map(l=>{let f=i.routes[l.route.id];if(!f)return[];let d=[f.module];return f.clientActionModule&&(d=d.concat(f.clientActionModule)),f.clientLoaderModule&&(d=d.concat(f.clientLoaderModule)),o&&f.hydrateFallbackModule&&(d=d.concat(f.hydrateFallbackModule)),f.imports&&(d=d.concat(f.imports)),d}).flat(1))}function ox(a){return[...new Set(a)]}function sx(a){let i={},o=Object.keys(a).sort();for(let l of o)i[l]=a[l];return i}function cx(a,i){let o=new Set;return new Set(i),a.reduce((l,f)=>{let d=JSON.stringify(sx(f));return o.has(d)||(o.add(d),l.push({key:d,link:f})),l},[])}function hp(){let a=w.useContext(ri);return ld(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function ux(){let a=w.useContext(gs);return ld(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var od=w.createContext(void 0);od.displayName="FrameworkContext";function mp(){let a=w.useContext(od);return ld(a,"You must render this element inside a <HydratedRouter> element"),a}function fx(a,i){let o=w.useContext(od),[l,f]=w.useState(!1),[d,h]=w.useState(!1),{onFocus:v,onBlur:m,onMouseEnter:g,onMouseLeave:b,onTouchStart:S}=i,j=w.useRef(null);w.useEffect(()=>{if(a==="render"&&h(!0),a==="viewport"){let E=D=>{D.forEach(H=>{h(H.isIntersecting)})},A=new IntersectionObserver(E,{threshold:.5});return j.current&&A.observe(j.current),()=>{A.disconnect()}}},[a]),w.useEffect(()=>{if(l){let E=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(E)}}},[l]);let _=()=>{f(!0)},C=()=>{f(!1),h(!1)};return o?a!=="intent"?[d,j,{}]:[d,j,{onFocus:sl(v,_),onBlur:sl(m,C),onMouseEnter:sl(g,_),onMouseLeave:sl(b,C),onTouchStart:sl(S,_)}]:[!1,j,{}]}function sl(a,i){return o=>{a&&a(o),o.defaultPrevented||i(o)}}function dx({page:a,...i}){let{router:o}=hp(),l=w.useMemo(()=>rp(o.routes,a,o.basename),[o.routes,a,o.basename]);return l?w.createElement(mx,{page:a,matches:l,...i}):null}function hx(a){let{manifest:i,routeModules:o}=mp(),[l,f]=w.useState([]);return w.useEffect(()=>{let d=!1;return ix(a,i,o).then(h=>{d||f(h)}),()=>{d=!0}},[a,i,o]),l}function mx({page:a,matches:i,...o}){let l=gn(),{manifest:f,routeModules:d}=mp(),{basename:h}=hp(),{loaderData:v,matches:m}=ux(),g=w.useMemo(()=>Ag(a,i,m,f,l,"data"),[a,i,m,f,l]),b=w.useMemo(()=>Ag(a,i,m,f,l,"assets"),[a,i,m,f,l]),S=w.useMemo(()=>{if(a===l.pathname+l.search+l.hash)return[];let C=new Set,E=!1;if(i.forEach(D=>{let H=f.routes[D.route.id];!H||!H.hasLoader||(!g.some(z=>z.route.id===D.route.id)&&D.route.id in v&&d[D.route.id]?.shouldRevalidate||H.hasClientLoader?E=!0:C.add(D.route.id))}),C.size===0)return[];let A=nx(a,h,"data");return E&&C.size>0&&A.searchParams.set("_routes",i.filter(D=>C.has(D.route.id)).map(D=>D.route.id).join(",")),[A.pathname+A.search]},[h,v,l,f,g,i,a,d]),j=w.useMemo(()=>lx(b,f),[b,f]),_=hx(b);return w.createElement(w.Fragment,null,S.map(C=>w.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...o})),j.map(C=>w.createElement("link",{key:C,rel:"modulepreload",href:C,...o})),_.map(({key:C,link:E})=>w.createElement("link",{key:C,nonce:o.nonce,...E})))}function gx(...a){return i=>{a.forEach(o=>{typeof o=="function"?o(i):o!=null&&(o.current=i)})}}var gp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{gp&&(window.__reactRouterVersion="7.8.1")}catch{}function px({basename:a,children:i,window:o}){let l=w.useRef();l.current==null&&(l.current=a5({window:o,v5Compat:!0}));let f=l.current,[d,h]=w.useState({action:f.action,location:f.location}),v=w.useCallback(m=>{w.startTransition(()=>h(m))},[h]);return w.useLayoutEffect(()=>f.listen(v),[f,v]),w.createElement(F5,{basename:a,children:i,location:d.location,navigationType:d.action,navigator:f})}var pp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yp=w.forwardRef(function({onClick:i,discover:o="render",prefetch:l="none",relative:f,reloadDocument:d,replace:h,state:v,target:m,to:g,preventScrollReset:b,viewTransition:S,...j},_){let{basename:C}=w.useContext(wn),E=typeof g=="string"&&pp.test(g),A,D=!1;if(typeof g=="string"&&E&&(A=g,gp))try{let ne=new URL(window.location.href),ce=g.startsWith("//")?new URL(ne.protocol+g):new URL(g),pe=na(ce.pathname,C);ce.origin===ne.origin&&pe!=null?g=pe+ce.search+ce.hash:D=!0}catch{bn(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let H=M5(g,{relative:f}),[z,K,Z]=fx(l,j),ee=bx(g,{replace:h,state:v,target:m,preventScrollReset:b,relative:f,viewTransition:S});function P(ne){i&&i(ne),ne.defaultPrevented||ee(ne)}let I=w.createElement("a",{...j,...Z,href:A||H,onClick:D||d?i:P,ref:gx(_,K),target:m,"data-discover":!E&&o==="render"?"true":void 0});return z&&!E?w.createElement(w.Fragment,null,I,w.createElement(dx,{page:H})):I});yp.displayName="Link";var yx=w.forwardRef(function({"aria-current":i="page",caseSensitive:o=!1,className:l="",end:f=!1,style:d,to:h,viewTransition:v,children:m,...g},b){let S=Sl(h,{relative:g.relative}),j=gn(),_=w.useContext(gs),{navigator:C,basename:E}=w.useContext(wn),A=_!=null&&Ex(S)&&v===!0,D=C.encodeLocation?C.encodeLocation(S).pathname:S.pathname,H=j.pathname,z=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;o||(H=H.toLowerCase(),z=z?z.toLowerCase():null,D=D.toLowerCase()),z&&E&&(z=na(z,E)||z);const K=D!=="/"&&D.endsWith("/")?D.length-1:D.length;let Z=H===D||!f&&H.startsWith(D)&&H.charAt(K)==="/",ee=z!=null&&(z===D||!f&&z.startsWith(D)&&z.charAt(D.length)==="/"),P={isActive:Z,isPending:ee,isTransitioning:A},I=Z?i:void 0,ne;typeof l=="function"?ne=l(P):ne=[l,Z?"active":null,ee?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let ce=typeof d=="function"?d(P):d;return w.createElement(yp,{...g,"aria-current":I,className:ne,ref:b,style:ce,to:h,viewTransition:v},typeof m=="function"?m(P):m)});yx.displayName="NavLink";var vx=w.forwardRef(({discover:a="render",fetcherKey:i,navigate:o,reloadDocument:l,replace:f,state:d,method:h=Qo,action:v,onSubmit:m,relative:g,preventScrollReset:b,viewTransition:S,...j},_)=>{let C=Cx(),E=jx(v,{relative:g}),A=h.toLowerCase()==="get"?"get":"post",D=typeof v=="string"&&pp.test(v),H=z=>{if(m&&m(z),z.defaultPrevented)return;z.preventDefault();let K=z.nativeEvent.submitter,Z=K?.getAttribute("formmethod")||h;C(K||z.currentTarget,{fetcherKey:i,method:Z,navigate:o,replace:f,state:d,relative:g,preventScrollReset:b,viewTransition:S})};return w.createElement("form",{ref:_,method:A,action:E,onSubmit:l?m:H,...j,"data-discover":!D&&a==="render"?"true":void 0})});vx.displayName="Form";function xx(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vp(a){let i=w.useContext(ri);return tt(i,xx(a)),i}function bx(a,{target:i,replace:o,state:l,preventScrollReset:f,relative:d,viewTransition:h}={}){let v=Ut(),m=gn(),g=Sl(a,{relative:d});return w.useCallback(b=>{if(J5(b,i)){b.preventDefault();let S=o!==void 0?o:pl(m)===pl(g);v(a,{replace:S,state:l,preventScrollReset:f,relative:d,viewTransition:h})}},[m,v,g,o,l,i,a,f,d,h])}var wx=0,Sx=()=>`__${String(++wx)}__`;function Cx(){let{router:a}=vp("useSubmit"),{basename:i}=w.useContext(wn),o=P5();return w.useCallback(async(l,f={})=>{let{action:d,method:h,encType:v,formData:m,body:g}=tx(l,i);if(f.navigate===!1){let b=f.fetcherKey||Sx();await a.fetch(b,o,f.action||d,{preventScrollReset:f.preventScrollReset,formData:m,body:g,formMethod:f.method||h,formEncType:f.encType||v,flushSync:f.flushSync})}else await a.navigate(f.action||d,{preventScrollReset:f.preventScrollReset,formData:m,body:g,formMethod:f.method||h,formEncType:f.encType||v,replace:f.replace,state:f.state,fromRouteId:o,flushSync:f.flushSync,viewTransition:f.viewTransition})},[a,i,o])}function jx(a,{relative:i}={}){let{basename:o}=w.useContext(wn),l=w.useContext(Sn);tt(l,"useFormAction must be used inside a RouteContext");let[f]=l.matches.slice(-1),d={...Sl(a||".",{relative:i})},h=gn();if(a==null){d.search=h.search;let v=new URLSearchParams(d.search),m=v.getAll("index");if(m.some(b=>b==="")){v.delete("index"),m.filter(S=>S).forEach(S=>v.append("index",S));let b=v.toString();d.search=b?`?${b}`:""}}return(!a||a===".")&&f.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(d.pathname=d.pathname==="/"?o:ea([o,d.pathname])),pl(d)}function Ex(a,{relative:i}={}){let o=w.useContext(sp);tt(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=vp("useViewTransitionState"),f=Sl(a,{relative:i});if(!o.isTransitioning)return!1;let d=na(o.currentLocation.pathname,l)||o.currentLocation.pathname,h=na(o.nextLocation.pathname,l)||o.nextLocation.pathname;return os(f.pathname,h)!=null||os(f.pathname,d)!=null}var Jo=ap(),Ft=function(){return Ft=Object.assign||function(i){for(var o,l=1,f=arguments.length;l<f;l++){o=arguments[l];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(i[d]=o[d])}return i},Ft.apply(this,arguments)};function yl(a,i,o){if(o||arguments.length===2)for(var l=0,f=i.length,d;l<f;l++)(d||!(l in i))&&(d||(d=Array.prototype.slice.call(i,0,l)),d[l]=i[l]);return a.concat(d||Array.prototype.slice.call(i))}var Je="-ms-",ml="-moz-",Pe="-webkit-",xp="comm",ys="rule",sd="decl",Tx="@import",bp="@keyframes",Ax="@layer",wp=Math.abs,cd=String.fromCharCode,Uf=Object.assign;function Rx(a,i){return Ct(a,0)^45?(((i<<2^Ct(a,0))<<2^Ct(a,1))<<2^Ct(a,2))<<2^Ct(a,3):0}function Sp(a){return a.trim()}function Wn(a,i){return(a=i.exec(a))?a[0]:a}function De(a,i,o){return a.replace(i,o)}function Wo(a,i,o){return a.indexOf(i,o)}function Ct(a,i){return a.charCodeAt(i)|0}function Jr(a,i,o){return a.slice(i,o)}function Ln(a){return a.length}function Cp(a){return a.length}function hl(a,i){return i.push(a),a}function _x(a,i){return a.map(i).join("")}function Rg(a,i){return a.filter(function(o){return!Wn(o,i)})}var vs=1,Wr=1,jp=0,mn=0,ht=0,li="";function xs(a,i,o,l,f,d,h,v){return{value:a,root:i,parent:o,type:l,props:f,children:d,line:vs,column:Wr,length:h,return:"",siblings:v}}function Ra(a,i){return Uf(xs("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},i)}function Fr(a){for(;a.root;)a=Ra(a.root,{children:[a]});hl(a,a.siblings)}function Mx(){return ht}function Ox(){return ht=mn>0?Ct(li,--mn):0,Wr--,ht===10&&(Wr=1,vs--),ht}function xn(){return ht=mn<jp?Ct(li,mn++):0,Wr++,ht===10&&(Wr=1,vs++),ht}function Ja(){return Ct(li,mn)}function es(){return mn}function bs(a,i){return Jr(li,a,i)}function Hf(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Dx(a){return vs=Wr=1,jp=Ln(li=a),mn=0,[]}function zx(a){return li="",a}function Wu(a){return Sp(bs(mn-1,Bf(a===91?a+2:a===40?a+1:a)))}function kx(a){for(;(ht=Ja())&&ht<33;)xn();return Hf(a)>2||Hf(ht)>3?"":" "}function Lx(a,i){for(;--i&&xn()&&!(ht<48||ht>102||ht>57&&ht<65||ht>70&&ht<97););return bs(a,es()+(i<6&&Ja()==32&&xn()==32))}function Bf(a){for(;xn();)switch(ht){case a:return mn;case 34:case 39:a!==34&&a!==39&&Bf(ht);break;case 40:a===41&&Bf(a);break;case 92:xn();break}return mn}function Nx(a,i){for(;xn()&&a+ht!==57;)if(a+ht===84&&Ja()===47)break;return"/*"+bs(i,mn-1)+"*"+cd(a===47?a:xn())}function $x(a){for(;!Hf(Ja());)xn();return bs(a,mn)}function Ux(a){return zx(ts("",null,null,null,[""],a=Dx(a),0,[0],a))}function ts(a,i,o,l,f,d,h,v,m){for(var g=0,b=0,S=h,j=0,_=0,C=0,E=1,A=1,D=1,H=0,z="",K=f,Z=d,ee=l,P=z;A;)switch(C=H,H=xn()){case 40:if(C!=108&&Ct(P,S-1)==58){Wo(P+=De(Wu(H),"&","&\f"),"&\f",wp(g?v[g-1]:0))!=-1&&(D=-1);break}case 34:case 39:case 91:P+=Wu(H);break;case 9:case 10:case 13:case 32:P+=kx(C);break;case 92:P+=Lx(es()-1,7);continue;case 47:switch(Ja()){case 42:case 47:hl(Hx(Nx(xn(),es()),i,o,m),m);break;default:P+="/"}break;case 123*E:v[g++]=Ln(P)*D;case 125*E:case 59:case 0:switch(H){case 0:case 125:A=0;case 59+b:D==-1&&(P=De(P,/\f/g,"")),_>0&&Ln(P)-S&&hl(_>32?Mg(P+";",l,o,S-1,m):Mg(De(P," ","")+";",l,o,S-2,m),m);break;case 59:P+=";";default:if(hl(ee=_g(P,i,o,g,b,f,v,z,K=[],Z=[],S,d),d),H===123)if(b===0)ts(P,i,ee,ee,K,d,S,v,Z);else switch(j===99&&Ct(P,3)===110?100:j){case 100:case 108:case 109:case 115:ts(a,ee,ee,l&&hl(_g(a,ee,ee,0,0,f,v,z,f,K=[],S,Z),Z),f,Z,S,v,l?K:Z);break;default:ts(P,ee,ee,ee,[""],Z,0,v,Z)}}g=b=_=0,E=D=1,z=P="",S=h;break;case 58:S=1+Ln(P),_=C;default:if(E<1){if(H==123)--E;else if(H==125&&E++==0&&Ox()==125)continue}switch(P+=cd(H),H*E){case 38:D=b>0?1:(P+="\f",-1);break;case 44:v[g++]=(Ln(P)-1)*D,D=1;break;case 64:Ja()===45&&(P+=Wu(xn())),j=Ja(),b=S=Ln(z=P+=$x(es())),H++;break;case 45:C===45&&Ln(P)==2&&(E=0)}}return d}function _g(a,i,o,l,f,d,h,v,m,g,b,S){for(var j=f-1,_=f===0?d:[""],C=Cp(_),E=0,A=0,D=0;E<l;++E)for(var H=0,z=Jr(a,j+1,j=wp(A=h[E])),K=a;H<C;++H)(K=Sp(A>0?_[H]+" "+z:De(z,/&\f/g,_[H])))&&(m[D++]=K);return xs(a,i,o,f===0?ys:v,m,g,b,S)}function Hx(a,i,o,l){return xs(a,i,o,xp,cd(Mx()),Jr(a,2,-2),0,l)}function Mg(a,i,o,l,f){return xs(a,i,o,sd,Jr(a,0,l),Jr(a,l+1,-1),l,f)}function Ep(a,i,o){switch(Rx(a,i)){case 5103:return Pe+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Pe+a+a;case 4789:return ml+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return Pe+a+ml+a+Je+a+a;case 5936:switch(Ct(a,i+11)){case 114:return Pe+a+Je+De(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return Pe+a+Je+De(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return Pe+a+Je+De(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return Pe+a+Je+a+a;case 6165:return Pe+a+Je+"flex-"+a+a;case 5187:return Pe+a+De(a,/(\w+).+(:[^]+)/,Pe+"box-$1$2"+Je+"flex-$1$2")+a;case 5443:return Pe+a+Je+"flex-item-"+De(a,/flex-|-self/g,"")+(Wn(a,/flex-|baseline/)?"":Je+"grid-row-"+De(a,/flex-|-self/g,""))+a;case 4675:return Pe+a+Je+"flex-line-pack"+De(a,/align-content|flex-|-self/g,"")+a;case 5548:return Pe+a+Je+De(a,"shrink","negative")+a;case 5292:return Pe+a+Je+De(a,"basis","preferred-size")+a;case 6060:return Pe+"box-"+De(a,"-grow","")+Pe+a+Je+De(a,"grow","positive")+a;case 4554:return Pe+De(a,/([^-])(transform)/g,"$1"+Pe+"$2")+a;case 6187:return De(De(De(a,/(zoom-|grab)/,Pe+"$1"),/(image-set)/,Pe+"$1"),a,"")+a;case 5495:case 3959:return De(a,/(image-set\([^]*)/,Pe+"$1$`$1");case 4968:return De(De(a,/(.+:)(flex-)?(.*)/,Pe+"box-pack:$3"+Je+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Pe+a+a;case 4200:if(!Wn(a,/flex-|baseline/))return Je+"grid-column-align"+Jr(a,i)+a;break;case 2592:case 3360:return Je+De(a,"template-","")+a;case 4384:case 3616:return o&&o.some(function(l,f){return i=f,Wn(l.props,/grid-\w+-end/)})?~Wo(a+(o=o[i].value),"span",0)?a:Je+De(a,"-start","")+a+Je+"grid-row-span:"+(~Wo(o,"span",0)?Wn(o,/\d+/):+Wn(o,/\d+/)-+Wn(a,/\d+/))+";":Je+De(a,"-start","")+a;case 4896:case 4128:return o&&o.some(function(l){return Wn(l.props,/grid-\w+-start/)})?a:Je+De(De(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return De(a,/(.+)-inline(.+)/,Pe+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ln(a)-1-i>6)switch(Ct(a,i+1)){case 109:if(Ct(a,i+4)!==45)break;case 102:return De(a,/(.+:)(.+)-([^]+)/,"$1"+Pe+"$2-$3$1"+ml+(Ct(a,i+3)==108?"$3":"$2-$3"))+a;case 115:return~Wo(a,"stretch",0)?Ep(De(a,"stretch","fill-available"),i,o)+a:a}break;case 5152:case 5920:return De(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,f,d,h,v,m,g){return Je+f+":"+d+g+(h?Je+f+"-span:"+(v?m:+m-+d)+g:"")+a});case 4949:if(Ct(a,i+6)===121)return De(a,":",":"+Pe)+a;break;case 6444:switch(Ct(a,Ct(a,14)===45?18:11)){case 120:return De(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Pe+(Ct(a,14)===45?"inline-":"")+"box$3$1"+Pe+"$2$3$1"+Je+"$2box$3")+a;case 100:return De(a,":",":"+Je)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return De(a,"scroll-","scroll-snap-")+a}return a}function ss(a,i){for(var o="",l=0;l<a.length;l++)o+=i(a[l],l,a,i)||"";return o}function Bx(a,i,o,l){switch(a.type){case Ax:if(a.children.length)break;case Tx:case sd:return a.return=a.return||a.value;case xp:return"";case bp:return a.return=a.value+"{"+ss(a.children,l)+"}";case ys:if(!Ln(a.value=a.props.join(",")))return""}return Ln(o=ss(a.children,l))?a.return=a.value+"{"+o+"}":""}function Px(a){var i=Cp(a);return function(o,l,f,d){for(var h="",v=0;v<i;v++)h+=a[v](o,l,f,d)||"";return h}}function qx(a){return function(i){i.root||(i=i.return)&&a(i)}}function Vx(a,i,o,l){if(a.length>-1&&!a.return)switch(a.type){case sd:a.return=Ep(a.value,a.length,o);return;case bp:return ss([Ra(a,{value:De(a.value,"@","@"+Pe)})],l);case ys:if(a.length)return _x(o=a.props,function(f){switch(Wn(f,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Fr(Ra(a,{props:[De(f,/:(read-\w+)/,":"+ml+"$1")]})),Fr(Ra(a,{props:[f]})),Uf(a,{props:Rg(o,l)});break;case"::placeholder":Fr(Ra(a,{props:[De(f,/:(plac\w+)/,":"+Pe+"input-$1")]})),Fr(Ra(a,{props:[De(f,/:(plac\w+)/,":"+ml+"$1")]})),Fr(Ra(a,{props:[De(f,/:(plac\w+)/,Je+"input-$1")]})),Fr(Ra(a,{props:[f]})),Uf(a,{props:Rg(o,l)});break}return""})}}var Gx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},nn={},ei=typeof process<"u"&&nn!==void 0&&(nn.REACT_APP_SC_ATTR||nn.SC_ATTR)||"data-styled",Tp="active",Ap="data-styled-version",ws="6.1.19",ud=`/*!sc*/
`,cs=typeof window<"u"&&typeof document<"u",Yx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&nn!==void 0&&nn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&nn.REACT_APP_SC_DISABLE_SPEEDY!==""?nn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&nn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&nn!==void 0&&nn.SC_DISABLE_SPEEDY!==void 0&&nn.SC_DISABLE_SPEEDY!==""&&nn.SC_DISABLE_SPEEDY!=="false"&&nn.SC_DISABLE_SPEEDY),Ss=Object.freeze([]),ti=Object.freeze({});function Fx(a,i,o){return o===void 0&&(o=ti),a.theme!==o.theme&&a.theme||i||o.theme}var Rp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Xx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Zx=/(^-|-$)/g;function Og(a){return a.replace(Xx,"-").replace(Zx,"")}var Kx=/(a)(d)/gi,Po=52,Dg=function(a){return String.fromCharCode(a+(a>25?39:97))};function Pf(a){var i,o="";for(i=Math.abs(a);i>Po;i=i/Po|0)o=Dg(i%Po)+o;return(Dg(i%Po)+o).replace(Kx,"$1-$2")}var ef,_p=5381,Kr=function(a,i){for(var o=i.length;o;)a=33*a^i.charCodeAt(--o);return a},Mp=function(a){return Kr(_p,a)};function Op(a){return Pf(Mp(a)>>>0)}function Qx(a){return a.displayName||a.name||"Component"}function tf(a){return typeof a=="string"&&!0}var Dp=typeof Symbol=="function"&&Symbol.for,zp=Dp?Symbol.for("react.memo"):60115,Ix=Dp?Symbol.for("react.forward_ref"):60112,Jx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Wx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},kp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},e3=((ef={})[Ix]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ef[zp]=kp,ef);function zg(a){return("type"in(i=a)&&i.type.$$typeof)===zp?kp:"$$typeof"in a?e3[a.$$typeof]:Jx;var i}var t3=Object.defineProperty,n3=Object.getOwnPropertyNames,kg=Object.getOwnPropertySymbols,a3=Object.getOwnPropertyDescriptor,r3=Object.getPrototypeOf,Lg=Object.prototype;function Lp(a,i,o){if(typeof i!="string"){if(Lg){var l=r3(i);l&&l!==Lg&&Lp(a,l,o)}var f=n3(i);kg&&(f=f.concat(kg(i)));for(var d=zg(a),h=zg(i),v=0;v<f.length;++v){var m=f[v];if(!(m in Wx||o&&o[m]||h&&m in h||d&&m in d)){var g=a3(i,m);try{t3(a,m,g)}catch{}}}}return a}function ni(a){return typeof a=="function"}function fd(a){return typeof a=="object"&&"styledComponentId"in a}function Qa(a,i){return a&&i?"".concat(a," ").concat(i):a||i||""}function qf(a,i){if(a.length===0)return"";for(var o=a[0],l=1;l<a.length;l++)o+=a[l];return o}function vl(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function Vf(a,i,o){if(o===void 0&&(o=!1),!o&&!vl(a)&&!Array.isArray(a))return i;if(Array.isArray(i))for(var l=0;l<i.length;l++)a[l]=Vf(a[l],i[l]);else if(vl(i))for(var l in i)a[l]=Vf(a[l],i[l]);return a}function dd(a,i){Object.defineProperty(a,"toString",{value:i})}function Cl(a){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var i3=function(){function a(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return a.prototype.indexOfGroup=function(i){for(var o=0,l=0;l<i;l++)o+=this.groupSizes[l];return o},a.prototype.insertRules=function(i,o){if(i>=this.groupSizes.length){for(var l=this.groupSizes,f=l.length,d=f;i>=d;)if((d<<=1)<0)throw Cl(16,"".concat(i));this.groupSizes=new Uint32Array(d),this.groupSizes.set(l),this.length=d;for(var h=f;h<d;h++)this.groupSizes[h]=0}for(var v=this.indexOfGroup(i+1),m=(h=0,o.length);h<m;h++)this.tag.insertRule(v,o[h])&&(this.groupSizes[i]++,v++)},a.prototype.clearGroup=function(i){if(i<this.length){var o=this.groupSizes[i],l=this.indexOfGroup(i),f=l+o;this.groupSizes[i]=0;for(var d=l;d<f;d++)this.tag.deleteRule(l)}},a.prototype.getGroup=function(i){var o="";if(i>=this.length||this.groupSizes[i]===0)return o;for(var l=this.groupSizes[i],f=this.indexOfGroup(i),d=f+l,h=f;h<d;h++)o+="".concat(this.tag.getRule(h)).concat(ud);return o},a}(),ns=new Map,us=new Map,as=1,qo=function(a){if(ns.has(a))return ns.get(a);for(;us.has(as);)as++;var i=as++;return ns.set(a,i),us.set(i,a),i},l3=function(a,i){as=i+1,ns.set(a,i),us.set(i,a)},o3="style[".concat(ei,"][").concat(Ap,'="').concat(ws,'"]'),s3=new RegExp("^".concat(ei,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),c3=function(a,i,o){for(var l,f=o.split(","),d=0,h=f.length;d<h;d++)(l=f[d])&&a.registerName(i,l)},u3=function(a,i){for(var o,l=((o=i.textContent)!==null&&o!==void 0?o:"").split(ud),f=[],d=0,h=l.length;d<h;d++){var v=l[d].trim();if(v){var m=v.match(s3);if(m){var g=0|parseInt(m[1],10),b=m[2];g!==0&&(l3(b,g),c3(a,b,m[3]),a.getTag().insertRules(g,f)),f.length=0}else f.push(v)}}},Ng=function(a){for(var i=document.querySelectorAll(o3),o=0,l=i.length;o<l;o++){var f=i[o];f&&f.getAttribute(ei)!==Tp&&(u3(a,f),f.parentNode&&f.parentNode.removeChild(f))}};function f3(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Np=function(a){var i=document.head,o=a||i,l=document.createElement("style"),f=function(v){var m=Array.from(v.querySelectorAll("style[".concat(ei,"]")));return m[m.length-1]}(o),d=f!==void 0?f.nextSibling:null;l.setAttribute(ei,Tp),l.setAttribute(Ap,ws);var h=f3();return h&&l.setAttribute("nonce",h),o.insertBefore(l,d),l},d3=function(){function a(i){this.element=Np(i),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var l=document.styleSheets,f=0,d=l.length;f<d;f++){var h=l[f];if(h.ownerNode===o)return h}throw Cl(17)}(this.element),this.length=0}return a.prototype.insertRule=function(i,o){try{return this.sheet.insertRule(o,i),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},a.prototype.getRule=function(i){var o=this.sheet.cssRules[i];return o&&o.cssText?o.cssText:""},a}(),h3=function(){function a(i){this.element=Np(i),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(i,o){if(i<=this.length&&i>=0){var l=document.createTextNode(o);return this.element.insertBefore(l,this.nodes[i]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},a.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},a}(),m3=function(){function a(i){this.rules=[],this.length=0}return a.prototype.insertRule=function(i,o){return i<=this.length&&(this.rules.splice(i,0,o),this.length++,!0)},a.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},a.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},a}(),$g=cs,g3={isServer:!cs,useCSSOMInjection:!Yx},$p=function(){function a(i,o,l){i===void 0&&(i=ti),o===void 0&&(o={});var f=this;this.options=Ft(Ft({},g3),i),this.gs=o,this.names=new Map(l),this.server=!!i.isServer,!this.server&&cs&&$g&&($g=!1,Ng(this)),dd(this,function(){return function(d){for(var h=d.getTag(),v=h.length,m="",g=function(S){var j=function(D){return us.get(D)}(S);if(j===void 0)return"continue";var _=d.names.get(j),C=h.getGroup(S);if(_===void 0||!_.size||C.length===0)return"continue";var E="".concat(ei,".g").concat(S,'[id="').concat(j,'"]'),A="";_!==void 0&&_.forEach(function(D){D.length>0&&(A+="".concat(D,","))}),m+="".concat(C).concat(E,'{content:"').concat(A,'"}').concat(ud)},b=0;b<v;b++)g(b);return m}(f)})}return a.registerId=function(i){return qo(i)},a.prototype.rehydrate=function(){!this.server&&cs&&Ng(this)},a.prototype.reconstructWithOptions=function(i,o){return o===void 0&&(o=!0),new a(Ft(Ft({},this.options),i),this.gs,o&&this.names||void 0)},a.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(i=function(o){var l=o.useCSSOMInjection,f=o.target;return o.isServer?new m3(f):l?new d3(f):new h3(f)}(this.options),new i3(i)));var i},a.prototype.hasNameForId=function(i,o){return this.names.has(i)&&this.names.get(i).has(o)},a.prototype.registerName=function(i,o){if(qo(i),this.names.has(i))this.names.get(i).add(o);else{var l=new Set;l.add(o),this.names.set(i,l)}},a.prototype.insertRules=function(i,o,l){this.registerName(i,o),this.getTag().insertRules(qo(i),l)},a.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},a.prototype.clearRules=function(i){this.getTag().clearGroup(qo(i)),this.clearNames(i)},a.prototype.clearTag=function(){this.tag=void 0},a}(),p3=/&/g,y3=/^\s*\/\/.*$/gm;function Up(a,i){return a.map(function(o){return o.type==="rule"&&(o.value="".concat(i," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(i," ")),o.props=o.props.map(function(l){return"".concat(i," ").concat(l)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=Up(o.children,i)),o})}function v3(a){var i,o,l,f=ti,d=f.options,h=d===void 0?ti:d,v=f.plugins,m=v===void 0?Ss:v,g=function(j,_,C){return C.startsWith(o)&&C.endsWith(o)&&C.replaceAll(o,"").length>0?".".concat(i):j},b=m.slice();b.push(function(j){j.type===ys&&j.value.includes("&")&&(j.props[0]=j.props[0].replace(p3,o).replace(l,g))}),h.prefix&&b.push(Vx),b.push(Bx);var S=function(j,_,C,E){_===void 0&&(_=""),C===void 0&&(C=""),E===void 0&&(E="&"),i=E,o=_,l=new RegExp("\\".concat(o,"\\b"),"g");var A=j.replace(y3,""),D=Ux(C||_?"".concat(C," ").concat(_," { ").concat(A," }"):A);h.namespace&&(D=Up(D,h.namespace));var H=[];return ss(D,Px(b.concat(qx(function(z){return H.push(z)})))),H};return S.hash=m.length?m.reduce(function(j,_){return _.name||Cl(15),Kr(j,_.name)},_p).toString():"",S}var x3=new $p,Gf=v3(),Hp=Ir.createContext({shouldForwardProp:void 0,styleSheet:x3,stylis:Gf});Hp.Consumer;Ir.createContext(void 0);function Ug(){return w.useContext(Hp)}var Bp=function(){function a(i,o){var l=this;this.inject=function(f,d){d===void 0&&(d=Gf);var h=l.name+d.hash;f.hasNameForId(l.id,h)||f.insertRules(l.id,h,d(l.rules,h,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=o,dd(this,function(){throw Cl(12,String(l.name))})}return a.prototype.getName=function(i){return i===void 0&&(i=Gf),this.name+i.hash},a}(),b3=function(a){return a>="A"&&a<="Z"};function Hg(a){for(var i="",o=0;o<a.length;o++){var l=a[o];if(o===1&&l==="-"&&a[0]==="-")return a;b3(l)?i+="-"+l.toLowerCase():i+=l}return i.startsWith("ms-")?"-"+i:i}var Pp=function(a){return a==null||a===!1||a===""},qp=function(a){var i,o,l=[];for(var f in a){var d=a[f];a.hasOwnProperty(f)&&!Pp(d)&&(Array.isArray(d)&&d.isCss||ni(d)?l.push("".concat(Hg(f),":"),d,";"):vl(d)?l.push.apply(l,yl(yl(["".concat(f," {")],qp(d),!1),["}"],!1)):l.push("".concat(Hg(f),": ").concat((i=f,(o=d)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||i in Gx||i.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return l};function Wa(a,i,o,l){if(Pp(a))return[];if(fd(a))return[".".concat(a.styledComponentId)];if(ni(a)){if(!ni(d=a)||d.prototype&&d.prototype.isReactComponent||!i)return[a];var f=a(i);return Wa(f,i,o,l)}var d;return a instanceof Bp?o?(a.inject(o,l),[a.getName(l)]):[a]:vl(a)?qp(a):Array.isArray(a)?Array.prototype.concat.apply(Ss,a.map(function(h){return Wa(h,i,o,l)})):[a.toString()]}function w3(a){for(var i=0;i<a.length;i+=1){var o=a[i];if(ni(o)&&!fd(o))return!1}return!0}var S3=Mp(ws),C3=function(){function a(i,o,l){this.rules=i,this.staticRulesId="",this.isStatic=(l===void 0||l.isStatic)&&w3(i),this.componentId=o,this.baseHash=Kr(S3,o),this.baseStyle=l,$p.registerId(o)}return a.prototype.generateAndInjectStyles=function(i,o,l){var f=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,o,l):"";if(this.isStatic&&!l.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))f=Qa(f,this.staticRulesId);else{var d=qf(Wa(this.rules,i,o,l)),h=Pf(Kr(this.baseHash,d)>>>0);if(!o.hasNameForId(this.componentId,h)){var v=l(d,".".concat(h),void 0,this.componentId);o.insertRules(this.componentId,h,v)}f=Qa(f,h),this.staticRulesId=h}else{for(var m=Kr(this.baseHash,l.hash),g="",b=0;b<this.rules.length;b++){var S=this.rules[b];if(typeof S=="string")g+=S;else if(S){var j=qf(Wa(S,i,o,l));m=Kr(m,j+b),g+=j}}if(g){var _=Pf(m>>>0);o.hasNameForId(this.componentId,_)||o.insertRules(this.componentId,_,l(g,".".concat(_),void 0,this.componentId)),f=Qa(f,_)}}return f},a}(),Vp=Ir.createContext(void 0);Vp.Consumer;var nf={};function j3(a,i,o){var l=fd(a),f=a,d=!tf(a),h=i.attrs,v=h===void 0?Ss:h,m=i.componentId,g=m===void 0?function(K,Z){var ee=typeof K!="string"?"sc":Og(K);nf[ee]=(nf[ee]||0)+1;var P="".concat(ee,"-").concat(Op(ws+ee+nf[ee]));return Z?"".concat(Z,"-").concat(P):P}(i.displayName,i.parentComponentId):m,b=i.displayName,S=b===void 0?function(K){return tf(K)?"styled.".concat(K):"Styled(".concat(Qx(K),")")}(a):b,j=i.displayName&&i.componentId?"".concat(Og(i.displayName),"-").concat(i.componentId):i.componentId||g,_=l&&f.attrs?f.attrs.concat(v).filter(Boolean):v,C=i.shouldForwardProp;if(l&&f.shouldForwardProp){var E=f.shouldForwardProp;if(i.shouldForwardProp){var A=i.shouldForwardProp;C=function(K,Z){return E(K,Z)&&A(K,Z)}}else C=E}var D=new C3(o,j,l?f.componentStyle:void 0);function H(K,Z){return function(ee,P,I){var ne=ee.attrs,ce=ee.componentStyle,pe=ee.defaultProps,se=ee.foldedComponentIds,xe=ee.styledComponentId,be=ee.target,re=Ir.useContext(Vp),O=Ug(),J=ee.shouldForwardProp||O.shouldForwardProp,le=Fx(P,re,pe)||ti,de=function(Se,B,V){for(var Y,ue=Ft(Ft({},B),{className:void 0,theme:V}),Ce=0;Ce<Se.length;Ce+=1){var he=ni(Y=Se[Ce])?Y(ue):Y;for(var fe in he)ue[fe]=fe==="className"?Qa(ue[fe],he[fe]):fe==="style"?Ft(Ft({},ue[fe]),he[fe]):he[fe]}return B.className&&(ue.className=Qa(ue.className,B.className)),ue}(ne,P,le),R=de.as||be,q={};for(var te in de)de[te]===void 0||te[0]==="$"||te==="as"||te==="theme"&&de.theme===le||(te==="forwardedAs"?q.as=de.forwardedAs:J&&!J(te,R)||(q[te]=de[te]));var ae=function(Se,B){var V=Ug(),Y=Se.generateAndInjectStyles(B,V.styleSheet,V.stylis);return Y}(ce,de),ie=Qa(se,xe);return ae&&(ie+=" "+ae),de.className&&(ie+=" "+de.className),q[tf(R)&&!Rp.has(R)?"class":"className"]=ie,I&&(q.ref=I),w.createElement(R,q)}(z,K,Z)}H.displayName=S;var z=Ir.forwardRef(H);return z.attrs=_,z.componentStyle=D,z.displayName=S,z.shouldForwardProp=C,z.foldedComponentIds=l?Qa(f.foldedComponentIds,f.styledComponentId):"",z.styledComponentId=j,z.target=l?f.target:a,Object.defineProperty(z,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(K){this._foldedDefaultProps=l?function(Z){for(var ee=[],P=1;P<arguments.length;P++)ee[P-1]=arguments[P];for(var I=0,ne=ee;I<ne.length;I++)Vf(Z,ne[I],!0);return Z}({},f.defaultProps,K):K}}),dd(z,function(){return".".concat(z.styledComponentId)}),d&&Lp(z,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),z}function Bg(a,i){for(var o=[a[0]],l=0,f=i.length;l<f;l+=1)o.push(i[l],a[l+1]);return o}var Pg=function(a){return Object.assign(a,{isCss:!0})};function Gp(a){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];if(ni(a)||vl(a))return Pg(Wa(Bg(Ss,yl([a],i,!0))));var l=a;return i.length===0&&l.length===1&&typeof l[0]=="string"?Wa(l):Pg(Wa(Bg(l,i)))}function Yf(a,i,o){if(o===void 0&&(o=ti),!i)throw Cl(1,i);var l=function(f){for(var d=[],h=1;h<arguments.length;h++)d[h-1]=arguments[h];return a(i,o,Gp.apply(void 0,yl([f],d,!1)))};return l.attrs=function(f){return Yf(a,i,Ft(Ft({},o),{attrs:Array.prototype.concat(o.attrs,f).filter(Boolean)}))},l.withConfig=function(f){return Yf(a,i,Ft(Ft({},o),f))},l}var Yp=function(a){return Yf(j3,a)},y=Yp;Rp.forEach(function(a){y[a]=Yp(a)});function jl(a){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];var l=qf(Gp.apply(void 0,yl([a],i,!1))),f=Op(l);return new Bp(f,l)}const hd="/assets/iconSymbol-D2jawRdC.svg",E3=y.div`
  display: flex;
  align-items: center;
  gap: 1.125rem;
`,T3=y.img`
  width: 1.8125rem;
  height: 1.8125rem;
`,A3=y.span`
  color: var(--seconday, #688ae0);
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.06rem;
`;function R3(){return c.jsxs(E3,{children:[c.jsx(T3,{src:hd,alt:"로고 아이콘"}),c.jsx(A3,{children:"숨쉬어"})]})}const _3=y.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 2.5rem;
  z-index: 10;
  border-bottom: 1px solid #f2f2f2;
  background: #fff;
`,M3=y.div`
  display: flex;
  align-items: center;
  margin-right: 3.12rem;
`,O3=y.div`
  display: flex;
  align-items: center;
  gap: 0;
  flex-direction: row;
`,af=y.button`
  background: transparent;
  border: none;
  padding: 0.625rem 1.5rem;
  border-radius: 0.5rem;
  font-family: "Pretendard", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  height: 2.5rem;
  min-width: 5rem;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${a=>a.$active?"#313131":"#acacac"};

  &:hover {
    background-color: ${a=>a.$active?"rgba(49, 49, 49, 0.1)":"rgba(172, 172, 172, 0.1)"};
  }
`;y.button`
  background: transparent;
  border: none;
  padding: 0.625rem 1.5rem;
  border-radius: 0.5rem;
  font-family: "Pretendard", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  height: 2.5rem;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #acacac;

  &:hover {
    background-color: rgba(172, 172, 172, 0.1);
  }
`;function jt({currentPage:a}){const i=()=>{window.navigation.navigateToMain&&window.navigation.navigateToMain()},o=()=>{window.navigation.navigateToMain&&window.navigation.navigateToMain()},l=()=>{window.navigation.navigateToDrawer&&window.navigation.navigateToDrawer()},f=()=>{window.navigation.navigateToConsultant&&window.navigation.navigateToConsultant()};return c.jsxs(_3,{children:[c.jsx(M3,{onClick:i,style:{cursor:"pointer"},children:c.jsx(R3,{})}),c.jsxs(O3,{children:[c.jsx(af,{$active:a==="chat",onClick:o,children:"기록하기"}),c.jsx(af,{$active:a==="drawer",onClick:l,children:"서랍장"}),c.jsx(af,{$active:a==="consultant",onClick:f,children:"상담"})]})]})}const D3="data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.00046%2019.4249C4.66713%2019.5582%204.35046%2019.5289%204.05046%2019.3369C3.75046%2019.1449%203.60046%2018.8659%203.60046%2018.4999V13.9999L11.6005%2011.9999L3.60046%209.99989V5.49989C3.60046%205.13323%203.75046%204.85423%204.05046%204.66289C4.35046%204.47156%204.66713%204.44222%205.00046%204.57489L20.4005%2011.0749C20.8171%2011.2582%2021.0255%2011.5666%2021.0255%2011.9999C21.0255%2012.4332%2020.8171%2012.7416%2020.4005%2012.9249L5.00046%2019.4249Z'%20fill='%23688AE0'/%3e%3c/svg%3e",z3={REAL_API_BASE:"https://api.breathelion.site"},k3=z3,Fp=()=>k3.REAL_API_BASE,L3=Fp(),St=()=>L3,st={CHATS_START:()=>`${St()}/api/chats/start/`,CHATS_ATTACH:()=>`${St()}/api/chats/attach/`,CHATS_END:()=>`${St()}/api/chats/end/`,CHATS_LIST:a=>`${St()}/api/chats/${a}/list/`,RECORDS_DETAIL:a=>`${St()}/api/records/${a}/`,RECORDS_TITLE:a=>`${St()}/api/records/${a}/title/`,RECORDS_DELETE:a=>`${St()}/api/records/${a}/delete/`,RECORDS_DRAWER:(a,i)=>`${St()}/api/records/${a}/new/${i}/`,RECORDS_RECENT:()=>`${St()}/api/records/recent/`,RECORDS_SAVE:()=>`${St()}/api/records/save/`,DRAWERS_LIST:()=>`${St()}/api/drawers/list/`,DRAWERS_CREATE:()=>`${St()}/api/drawers/create/`,DRAWERS_DELETE:()=>`${St()}/api/drawers/delete/`,DRAWERS_HELPAI:a=>`${St()}/api/drawers/${a}/helpai/`,DRAWERS_TIMELINE:a=>`${St()}/api/drawers/${a}/timeline/`,RECORDS_CONTENT_PROVE_PDF:a=>`${St()}/api/records/${a}/noticepdf/`,DRAWERS_PDF_DOWNLOAD:a=>`${St()}/api/drawers/${a}/pdf/`,RECORDS_CONSULTATION_PDF:a=>`${St()}/api/records/${a}/consultpdf/`},yt=async(a,i={})=>{const o=typeof a=="function"?a():a;console.log("🔍 API 호출 URL:",o),console.log("🔍 API 호출 옵션:",i);try{const l=await fetch(o,{headers:{"Content-Type":"application/json",...i.headers},...i});if(!l.ok)throw new Error(`API 호출 실패: ${l.status}`);const f=l.headers.get("content-type");return f&&f.includes("application/pdf")?await l.blob():await l.json()}catch(l){throw console.error("API 호출 중 오류:",l),l}},et={startChat:async a=>await yt(st.CHATS_START(),{method:"POST",body:JSON.stringify({message:a})}),sendMessage:async(a,i,o=null)=>{console.log("apiHelpers.sendMessage 호출:",{chatSessionId:a,text:i,evidences:o});const l={chat_session_id:a,text:i,evidences:o};console.log("apiHelpers.sendMessage 요청 데이터:",l),console.log("apiHelpers.sendMessage 엔드포인트:",st.CHATS_ATTACH());const f=await yt(st.CHATS_ATTACH(),{method:"POST",body:JSON.stringify(l)});return console.log("apiHelpers.sendMessage 응답:",f),f},endChat:async(a,i)=>await yt(st.CHATS_END(),{method:"PUT",body:JSON.stringify({chat_session_id:a,record_id:i})}),getChatList:async a=>await yt(st.CHATS_LIST(a),{method:"GET"}),getRecordDetail:async a=>await yt(st.RECORDS_DETAIL(a),{method:"GET"}),updateRecordTitle:async(a,i)=>await yt(st.RECORDS_TITLE(a),{method:"PATCH",body:JSON.stringify({title:i})}),deleteRecord:async a=>await yt(st.RECORDS_DELETE(a),{method:"DELETE"}),updateRecordDrawer:async(a,i)=>await yt(st.RECORDS_DRAWER(a,i),{method:"PATCH"}),getRecentRecords:async()=>await yt(st.RECORDS_RECENT(),{method:"GET"}),saveRecord:async a=>await yt(st.RECORDS_SAVE(),{method:"PATCH",body:JSON.stringify(a)}),getDrawersList:async()=>await yt(st.DRAWERS_LIST(),{method:"GET"}),createDrawer:async a=>await yt(st.DRAWERS_CREATE(),{method:"POST",body:JSON.stringify({drawer_name:a})}),deleteDrawers:async a=>await yt(st.DRAWERS_DELETE(),{method:"PATCH",body:JSON.stringify({delete_list:a})}),getHelpai:async a=>await yt(st.DRAWERS_HELPAI(a),{method:"GET"}),getTimeline:async(a,i="")=>{let o=st.DRAWERS_TIMELINE(a);return i&&i.trim()&&(o=`${o}?keyword=${encodeURIComponent(i.trim())}`),await yt(o,{method:"GET"})},createContentProvePdf:async(a,i)=>await yt(st.RECORDS_CONTENT_PROVE_PDF(a),{method:"POST",body:JSON.stringify(i)}),downloadPdf:async a=>await yt(st.DRAWERS_PDF_DOWNLOAD(a),{method:"GET"}),createConsultationPdf:async a=>await yt(st.RECORDS_CONSULTATION_PDF(a),{method:"GET"})},Xp="/assets/smile-Dll3upXn.mp4",N3=y.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1500;
`,$3=y.div`
  display: flex;
  width: 21.125rem;
  padding: 3.75rem 0 1.875rem 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.25rem;
  border-radius: 1.875rem;
  background: #fff;
`,U3=y.div`
  color: var(--80, #313131);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
`,H3=y.div`
  color: var(--30, #acacac);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
`,B3=y.div`
  width: 11.0625rem;
  height: 11.0625rem;
  aspect-ratio: 1 / 1;
  border-radius: 0.75rem;
  overflow: hidden;
  background: #e9f6ff;
`,P3=y.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,q3=y.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;function Cs({mediaSrc:a,titleText:i,subText:o,autoCloseMs:l,onDone:f,chatSessionId:d,apiEndpoint:h,apiData:v,fallbackData:m,showAutoClose:g=!0}){w.useEffect(()=>{if(!g)return;let j=!0;const _=async()=>{try{h&&v?(console.log("API 호출 시뮬레이션:",h,v),j&&m&&f?.(m)):f&&f()}catch(E){console.error("데이터 가져오기 실패:",E),j&&m&&f?.(m)}},C=setTimeout(()=>{j&&_()},l||5e3);return()=>{j=!1,clearTimeout(C)}},[l,f,d,h,v,m,g]);const b=a||Xp,S=/\.(mp4|webm)(\?.*)?$/i.test(b);return c.jsx(N3,{"data-modal":"open",children:c.jsxs($3,{children:[c.jsx(U3,{children:i}),c.jsx(H3,{children:o}),c.jsx(B3,{children:S?c.jsx(P3,{src:b,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"auto"}):c.jsx(q3,{src:b,alt:"loading"})})]})})}const V3=y.div`
  background: var(
    --BP-Gradation,
    linear-gradient(
      267deg,
      var(--Color, #68b8ea) -67.73%,
      #688ae0 48.44%,
      #8c68e0 122.38%
    )
  );
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`,G3=y.div`
  max-width: 1280px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;y.h1`
  color: var(--70, #4a4a4a);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.25rem;
  text-align: center;
`;y.p`
  font-size: 1.125rem;
  font-weight: 400;
  color: #666;
  margin: 0 0 4.5rem 0;
  line-height: 1.5;
`;const Y3=y.div`
  position: relative;
  width: 100%;
  max-width: 41.875rem;
  margin: 0 auto;
`,F3=y.input`
  width: 100%;
  height: 3.125rem;
  background: #fff;
  border: none;
  border-radius: 3.125rem;
  padding: 0 4rem 0 1.5rem;
  font-family: "Pretendard", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: var(--seconday, #688ae0);
  line-height: 1.375rem;
  box-sizing: border-box;
  outline: none;

  &::placeholder {
    color: var(--seconday, #688ae0);
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(104, 184, 234, 0.3);
  }
`,X3=y.button`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  aspect-ratio: 1/1;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }

  &:hover {
    opacity: 0.9;
    transform: translateY(-50%) scale(1.05);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,Z3=()=>c.jsx("img",{src:D3,alt:"전송 버튼"});y.span`
  color: #68b8ea;
  font-size: 0.75rem;
  font-weight: 500;
`;const K3=y.div`
  color: rgba(255, 255, 255, 0.37);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.375rem;
  margin-bottom: 2.06rem;
`,Q3=y.div`
  position: absolute;
  left: 3.63rem;
  top: 7.38rem;
  color: #fff;
  font-family: Pretendard;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3.125rem;
  white-space: pre-line;
`;function I3({onNavigateToChat:a}){const[i,o]=w.useState(""),[l,f]=w.useState(!1),[d,h]=w.useState(!1),v=async()=>{const g=i.trim();if(!g)return;(()=>{const S=[];for(let j=0;j<localStorage.length;j++){const _=localStorage.key(j);_&&_.startsWith("chat_messages_")&&S.push(_)}S.forEach(j=>localStorage.removeItem(j))})(),f(!0),h(!0),o("");try{const S={message:g};console.log("API 요청 데이터:",S),console.log("API 엔드포인트:",st.CHATS_START());const j=await yt(st.CHATS_START(),{method:"POST",body:JSON.stringify(S)});console.log("API 응답 데이터:",j);const _=j;if(_&&_.isSuccess&&_.data){const C={chat_session_id:_.data.session_id,record_id:_.data.record_id,answer:_.data.answer,time:_.data.message_time,date:_.data.message_date};a({userMessage:g,serverResponse:C,isLoading:!1})}else throw new Error("서버 응답이 올바르지 않습니다.")}catch(S){console.log("API 호출 실패, 목업 데이터 사용:",S);const j={isSuccess:!0,code:"200",message:"채팅성공",data:{session_id:1,record_id:3,answer:"안녕하세요. 오늘 있으셨던 사건에 대해 이야기해 주셔서 감사합니다. 어떤 일이 있었는지 조금 더 자세히 말씀해 주실 수 있을까요? 어떤 감정을 느끼셨는지도 함께 이야기해 주시면 도움이 될 것 같아요.",message_time:new Date().toLocaleTimeString("ko-KR",{hour:"2-digit",minute:"2-digit",hour12:!1}),message_date:new Date().toISOString().split("T")[0]}};console.log("목업 응답 데이터:",j);const _={chat_session_id:j.data.session_id,record_id:j.data.record_id,answer:j.data.answer,time:j.data.message_time,date:j.data.message_date};a({userMessage:g,serverResponse:_,isLoading:!1})}finally{f(!1),h(!1)}},m=g=>{g.key==="Enter"&&v()};return c.jsxs(V3,{children:[c.jsx(jt,{currentPage:"main"}),c.jsxs(Q3,{children:["당신의 상처가",`
`,"잊히지 않도록,",`
`,"왜곡되지 않도록."]}),c.jsxs(G3,{children:[c.jsx(K3,{children:"숨쉬어와 함께 기록해보세요"}),c.jsxs(Y3,{children:[c.jsx(F3,{type:"text",placeholder:"천천히 기억나는 것부터 말해주세요",value:i,onChange:g=>o(g.target.value),onKeyPress:m,disabled:l}),c.jsx(X3,{onClick:v,disabled:l,children:c.jsx(Z3,{})})]})]}),d&&c.jsx(Cs,{titleText:"AI가 당신의 이야기를 듣고 있어요",subText:"잠시 후 채팅 화면으로 이동해요",autoCloseMs:3e3,onDone:()=>h(!1),showAutoClose:!1})]})}function Zp(a){var i,o,l="";if(typeof a=="string"||typeof a=="number")l+=a;else if(typeof a=="object")if(Array.isArray(a)){var f=a.length;for(i=0;i<f;i++)a[i]&&(o=Zp(a[i]))&&(l&&(l+=" "),l+=o)}else for(o in a)a[o]&&(l&&(l+=" "),l+=o);return l}function xl(){for(var a,i,o=0,l="",f=arguments.length;o<f;o++)(a=arguments[o])&&(i=Zp(a))&&(l&&(l+=" "),l+=i);return l}const J3=["onCopy","onCut","onPaste"],W3=["onCompositionEnd","onCompositionStart","onCompositionUpdate"],eb=["onFocus","onBlur"],tb=["onInput","onInvalid","onReset","onSubmit"],nb=["onLoad","onError"],ab=["onKeyDown","onKeyPress","onKeyUp"],rb=["onAbort","onCanPlay","onCanPlayThrough","onDurationChange","onEmptied","onEncrypted","onEnded","onError","onLoadedData","onLoadedMetadata","onLoadStart","onPause","onPlay","onPlaying","onProgress","onRateChange","onSeeked","onSeeking","onStalled","onSuspend","onTimeUpdate","onVolumeChange","onWaiting"],ib=["onClick","onContextMenu","onDoubleClick","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp"],lb=["onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop"],ob=["onSelect"],sb=["onTouchCancel","onTouchEnd","onTouchMove","onTouchStart"],cb=["onPointerDown","onPointerMove","onPointerUp","onPointerCancel","onGotPointerCapture","onLostPointerCapture","onPointerEnter","onPointerLeave","onPointerOver","onPointerOut"],ub=["onScroll"],fb=["onWheel"],db=["onAnimationStart","onAnimationEnd","onAnimationIteration"],hb=["onTransitionEnd"],mb=["onToggle"],gb=["onChange"],pb=[...J3,...W3,...eb,...tb,...nb,...ab,...rb,...ib,...lb,...ob,...sb,...cb,...ub,...fb,...db,...hb,...gb,...mb];function yb(a,i){const o={};for(const l of pb){const f=a[l];f&&(o[l]=f)}return o}function $t(a){if(a instanceof Date)return a.getHours();if(typeof a=="string"){const i=a.split(":");if(i.length>=2){const o=i[0];if(o){const l=Number.parseInt(o,10);if(!Number.isNaN(l))return l}}}throw new Error(`Failed to get hours from date: ${a}.`)}function ta(a){if(a instanceof Date)return a.getMinutes();if(typeof a=="string"){const i=a.split(":");if(i.length>=2){const o=i[1]||"0",l=Number.parseInt(o,10);if(!Number.isNaN(l))return l}}throw new Error(`Failed to get minutes from date: ${a}.`)}function er(a){if(a instanceof Date)return a.getSeconds();if(typeof a=="string"){const i=a.split(":");if(i.length>=2){const o=i[2]||"0",l=Number.parseInt(o,10);if(!Number.isNaN(l))return l}}throw new Error(`Failed to get seconds from date: ${a}.`)}function rf(a){if(a instanceof Date)return a.getMilliseconds();if(typeof a=="string"){const i=a.split(":");if(i.length>=2){const l=(i[2]||"0").split(".")[1]||"0",f=Number.parseInt(l,10);if(!Number.isNaN(f))return f}}throw new Error(`Failed to get seconds from date: ${a}.`)}function gl(a,i=2){const o=`${a}`;return o.length>=i?a:`0000${o}`.slice(-i)}function Kp(a){const i=gl($t(a)),o=gl(ta(a));return`${i}:${o}`}function Qp(a){const i=gl($t(a)),o=gl(ta(a)),l=gl(er(a));return`${i}:${o}:${l}`}function lf(a){var i=a.angle,o=i===void 0?0:i,l=a.name,f=a.length,d=f===void 0?100:f,h=a.oppositeLength,v=h===void 0?10:h,m=a.width,g=m===void 0?1:m;return c.jsx("div",{className:"react-clock__hand react-clock__".concat(l,"-hand"),style:{transform:"rotate(".concat(o,"deg)")},children:c.jsx("div",{className:"react-clock__hand__body react-clock__".concat(l,"-hand__body"),style:{width:"".concat(g,"px"),top:"".concat(50-d/2,"%"),bottom:"".concat(50-v/2,"%")}})})}var qg=w.memo(function(i){var o=i.angle,l=o===void 0?0:o,f=i.length,d=f===void 0?10:f,h=i.name,v=i.width,m=v===void 0?1:v;return c.jsx("div",{className:"react-clock__mark react-clock__".concat(h,"-mark"),style:{transform:"rotate(".concat(l,"deg)")},children:c.jsx("div",{className:"react-clock__mark__body react-clock__".concat(h,"-mark__body"),style:{width:"".concat(m,"px"),top:0,bottom:"".concat(100-d/2,"%")}})})}),vb=w.memo(function(i){var o=i.angle,l=o===void 0?0:o,f=i.length,d=f===void 0?10:f,h=i.name,v=i.number;return c.jsx("div",{className:"react-clock__mark react-clock__".concat(h,"-mark"),style:{transform:"rotate(".concat(l,"deg)")},children:c.jsx("div",{className:"react-clock__mark__number",style:{transform:"rotate(-".concat(l,"deg)"),top:"".concat(d/2,"%")},children:v})})});const xb=(a,i,o,l)=>{if(o==="length"||o==="prototype"||o==="arguments"||o==="caller")return;const f=Object.getOwnPropertyDescriptor(a,o),d=Object.getOwnPropertyDescriptor(i,o);!bb(f,d)&&l||Object.defineProperty(a,o,d)},bb=function(a,i){return a===void 0||a.configurable||a.writable===i.writable&&a.enumerable===i.enumerable&&a.configurable===i.configurable&&(a.writable||a.value===i.value)},wb=(a,i)=>{const o=Object.getPrototypeOf(i);o!==Object.getPrototypeOf(a)&&Object.setPrototypeOf(a,o)},Sb=(a,i)=>`/* Wrapped ${a}*/
${i}`,Cb=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),jb=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),Eb=(a,i,o)=>{const l=o===""?"":`with ${o.trim()}() `,f=Sb.bind(null,l,i.toString());Object.defineProperty(f,"name",jb);const{writable:d,enumerable:h,configurable:v}=Cb;Object.defineProperty(a,"toString",{value:f,writable:d,enumerable:h,configurable:v})};function Tb(a,i,{ignoreNonConfigurable:o=!1}={}){const{name:l}=a;for(const f of Reflect.ownKeys(i))xb(a,i,f,o);return wb(a,i),Eb(a,i,l),a}const Ab=new WeakMap,Vg=new WeakMap;function Ip(a,{cacheKey:i,cache:o=new Map,maxAge:l}={}){if(l===0)return a;if(typeof l=="number"){if(l>2147483647)throw new TypeError("The `maxAge` option cannot exceed 2147483647.");if(l<0)throw new TypeError("The `maxAge` option should not be a negative number.")}const f=function(...d){const h=i?i(d):d[0],v=o.get(h);if(v)return v.data;const m=a.apply(this,d),g=typeof l=="function"?l(...d):l;if(o.set(h,{data:m,maxAge:g?Date.now()+g:Number.POSITIVE_INFINITY}),g&&g>0&&g!==Number.POSITIVE_INFINITY){const b=setTimeout(()=>{o.delete(h)},g);b.unref?.();const S=Vg.get(a)??new Set;S.add(b),Vg.set(a,S)}return m};return Tb(f,a,{ignoreNonConfigurable:!0}),Ab.set(f,o),f}function Rb(a){return typeof a=="string"}function _b(a,i,o){return o.indexOf(a)===i}function Mb(a){return a.toLowerCase()===a}function Gg(a){return a.indexOf(",")===-1?a:a.split(",")}function Ff(a){if(!a)return a;if(a==="C"||a==="posix"||a==="POSIX")return"en-US";if(a.indexOf(".")!==-1){var i=a.split(".")[0],o=i===void 0?"":i;return Ff(o)}if(a.indexOf("@")!==-1){var l=a.split("@")[0],o=l===void 0?"":l;return Ff(o)}if(a.indexOf("-")===-1||!Mb(a))return a;var f=a.split("-"),d=f[0],h=f[1],v=h===void 0?"":h;return"".concat(d,"-").concat(v.toUpperCase())}function Ob(a){var i=a===void 0?{}:a,o=i.useFallbackLocale,l=o===void 0?!0:o,f=i.fallbackLocale,d=f===void 0?"en-US":f,h=[];if(typeof navigator<"u"){for(var v=navigator.languages||[],m=[],g=0,b=v;g<b.length;g++){var S=b[g];m=m.concat(Gg(S))}var j=navigator.language,_=j&&Gg(j);h=h.concat(m,_)}return l&&h.push(d),h.filter(Rb).map(Ff).filter(_b)}var Db=Ip(Ob,{cacheKey:JSON.stringify});function zb(a){return Db(a)[0]||null}var md=Ip(zb,{cacheKey:JSON.stringify});function kb(a,i){return i.toLocaleString(a||md()||void 0)}function Lb(a){return a!==null&&a!==!1&&!Number.isNaN(Number(a))}function Nb(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];return Math.max.apply(Math,a.filter(Lb))}function $b(a){var i=a.className,o=a.formatHour,l=o===void 0?kb:o,f=a.hourHandLength,d=f===void 0?50:f,h=a.hourHandOppositeLength,v=a.hourHandWidth,m=v===void 0?4:v,g=a.hourMarksLength,b=g===void 0?10:g,S=a.hourMarksWidth,j=S===void 0?3:S,_=a.locale,C=a.minuteHandLength,E=C===void 0?70:C,A=a.minuteHandOppositeLength,D=a.minuteHandWidth,H=D===void 0?2:D,z=a.minuteMarksLength,K=z===void 0?6:z,Z=a.minuteMarksWidth,ee=Z===void 0?1:Z,P=a.renderHourMarks,I=P===void 0?!0:P,ne=a.renderMinuteHand,ce=ne===void 0?!0:ne,pe=a.renderMinuteMarks,se=pe===void 0?!0:pe,xe=a.renderNumbers,be=a.renderSecondHand,re=be===void 0?!0:be,O=a.secondHandLength,J=O===void 0?90:O,le=a.secondHandOppositeLength,de=a.secondHandWidth,R=de===void 0?1:de,q=a.size,te=q===void 0?150:q,ae=a.useMillisecondPrecision,ie=a.value;function Se(){if(!se)return null;for(var fe=[],ge=1;ge<=60;ge+=1){var qe=I&&!(ge%5);qe||fe.push(c.jsx(qg,{angle:ge*6,length:K,name:"minute",width:ee},"minute_".concat(ge)))}return fe}function B(){if(!I)return null;for(var fe=[],ge=1;ge<=12;ge+=1)fe.push(c.jsx(qg,{angle:ge*30,length:b,name:"hour",width:j},"hour_".concat(ge)));return fe}function V(){if(!xe)return null;for(var fe=[],ge=1;ge<=12;ge+=1)fe.push(c.jsx(vb,{angle:ge*30,length:Nb(I&&b,se&&K,0),name:"number",number:l(_,ge)},"number_".concat(ge)));return fe}function Y(){return c.jsxs("div",{className:"react-clock__face",children:[Se(),B(),V()]})}function ue(){var fe=ie?$t(ie)*30+ta(ie)/2+er(ie)/120+(ae?rf(ie)/12e4:0):0;return c.jsx(lf,{angle:fe,length:d,name:"hour",oppositeLength:h,width:m})}function Ce(){if(!ce)return null;var fe=ie?$t(ie)*360+ta(ie)*6+er(ie)/10+(ae?rf(ie)/1e4:0):0;return c.jsx(lf,{angle:fe,length:E,name:"minute",oppositeLength:A,width:H})}function he(){if(!re)return null;var fe=ie?ta(ie)*360+er(ie)*6+(ae?rf(ie)*.006:0):0;return c.jsx(lf,{angle:fe,length:J,name:"second",oppositeLength:le,width:R})}return c.jsxs("time",{className:xl("react-clock",i),dateTime:ie instanceof Date?ie.toLocaleTimeString("en",{hourCycle:"h23",hour:"2-digit",minute:ce?"2-digit":void 0,second:re?"2-digit":void 0}):ie||void 0,style:{width:te,height:te},children:[Y(),ue(),Ce(),he()]})}function zt(a){return a.getBoundingClientRect()}function Yg(a,i){return{get collidedTop(){return zt(a).top<zt(i).top},get collidedBottom(){return zt(a).bottom>zt(i).bottom},get collidedLeft(){return zt(a).left<zt(i).left},get collidedRight(){return zt(a).right>zt(i).right},get overflowTop(){return zt(i).top-zt(a).top},get overflowBottom(){return zt(a).bottom-zt(i).bottom},get overflowLeft(){return zt(i).left-zt(a).left},get overflowRight(){return zt(a).right-zt(i).right}}}var of,Fg;function Ub(){if(Fg)return of;Fg=1;var a=function(){};return of=a,of}var Hb=Ub();const Xg=np(Hb);var Bb=function(a,i){var o={};for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&i.indexOf(l)<0&&(o[l]=a[l]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,l=Object.getOwnPropertySymbols(a);f<l.length;f++)i.indexOf(l[f])<0&&Object.prototype.propertyIsEnumerable.call(a,l[f])&&(o[l[f]]=a[l[f]]);return o};const Pb=typeof window<"u",qb=Pb&&"MutationObserver"in window;function Vo(a){return a.charAt(0).toUpperCase()+a.slice(1)}function Vb(a){let i=a.parentElement;for(;i;){const{overflow:o}=window.getComputedStyle(i);if(o.split(" ").every(l=>l==="auto"||l==="scroll"))return i;i=i.parentElement}return document.documentElement}function Jp({axis:a,container:i,element:o,invertAxis:l,scrollContainer:f,secondary:d,spacing:h}){const v=window.getComputedStyle(o),m=i.parentElement;if(!m)return;const g=Yg(m,f),b=Yg(m,document.documentElement),S=a==="x",j=S?"left":"top",_=S?"right":"bottom",C=S?"width":"height",E=`overflow${Vo(j)}`,A=`overflow${Vo(_)}`,D=`scroll${Vo(j)}`,H=Vo(C),z=`offset${H}`,K=`client${H}`,Z=`min-${C}`,ee=f[z]-f[K],P=typeof h=="object"?h[j]:h;let I=-Math.max(g[E],b[E]+document.documentElement[D])-P;const ne=typeof h=="object"?h[_]:h;let ce=-Math.max(g[A],b[A]-document.documentElement[D])-ne-ee;d&&(I+=m[K],ce+=m[K]);const pe=o[z];function se(){o.style[j]="auto",o.style[_]=d?"0":"100%"}function xe(){o.style[j]=d?"0":"100%",o.style[_]="auto"}function be(de,R){const q=pe<=de;return q&&R(),q}function re(){return be(I,se)}function O(){return be(ce,xe)}function J(){const de=I>ce,R=v.getPropertyValue(Z),q=R?Number.parseInt(R,10):null;function te(ae){Xg(!q||ae>=q,`<Fit />'s child will not fit anywhere with its current ${Z} of ${q}px.`);const ie=Math.max(ae,q||0);Xg(!1,`<Fit />'s child needed to have its ${C} decreased to ${ie}px.`),o.style[C]=`${ie}px`}de?(te(I),se()):(te(ce),xe())}let le;l?le=re()||O():le=O()||re(),le||J()}function Gb(a){Jp(a)}function Yb(a){Jp(Object.assign(Object.assign({},a),{axis:a.axis==="x"?"y":"x",secondary:!0}))}function Fb(a){const{invertAxis:i,invertSecondaryAxis:o}=a,l=Bb(a,["invertAxis","invertSecondaryAxis"]);Gb(Object.assign(Object.assign({},l),{invertAxis:i})),Yb(Object.assign(Object.assign({},l),{invertAxis:o}))}function Xb({children:a,invertAxis:i,invertSecondaryAxis:o,mainAxis:l="y",spacing:f=8}){const d=w.useRef(void 0),h=w.useRef(void 0),v=w.useRef(void 0),m=w.useRef(void 0),g=w.useRef(void 0),b=w.useCallback(()=>{if(!g.current||!d.current||!h.current)return;const _=h.current.clientWidth,C=h.current.clientHeight;if(v.current===_&&m.current===C)return;v.current=_,m.current=C;const E=d.current.parentElement;if(!E)return;const A=window.getComputedStyle(h.current),{position:D}=A;D!=="absolute"&&(h.current.style.position="absolute");const H=window.getComputedStyle(E),{position:z}=H;z!=="relative"&&z!=="absolute"&&(E.style.position="relative"),Fb({axis:l,container:d.current,element:h.current,invertAxis:i,invertSecondaryAxis:o,scrollContainer:g.current,spacing:f})},[i,o,l,f]),S=w.Children.only(a);w.useEffect(()=>{b();function _(){b()}qb&&h.current&&new MutationObserver(_).observe(h.current,{attributes:!0,attributeFilter:["class","style"]})},[b]);function j(_){!_||!(_ instanceof HTMLElement)||(h.current=_,g.current=Vb(_))}return c.jsx("span",{ref:_=>{if(!_)return;d.current=_;const C=_?.firstElementChild;j(C)},style:{display:"contents"},children:S})}function Zb({children:a}){return c.jsx("span",{className:"react-time-picker__inputGroup__divider",children:a})}function Zg(a,i){let o=Number(a);return i==="am"&&o===12?o=0:i==="pm"&&o<12&&(o+=12),o}function Qr(a){return[Number(a)%12||12,Number(a)<12?"am":"pm"]}const sf=new Map;function Wp(a){return function(o,l){const f=o||md();sf.has(f)||sf.set(f,new Map);const d=sf.get(f);return d.has(a)||d.set(a,new Intl.DateTimeFormat(f||void 0,a).format),d.get(a)(l)}}const cf=new Map;function Kb(a){return(i,o)=>{const l=i||md();cf.has(l)||cf.set(l,new Map);const f=cf.get(l);return f.has(a)||f.set(a,new Intl.NumberFormat(l||void 0,a).format),f.get(a)(o)}}const Qb=["9","٩"],Kg=new RegExp(`[${Qb.join("")}]`),Qg=Wp({hour:"numeric"});function e2(a){const i=Qg(a,new Date(2017,0,1,9)),o=Qg(a,new Date(2017,0,1,21)),[l,f]=i.split(Kg),[d,h]=o.split(Kg);if(h!==void 0){if(l!==d)return[l,d].map(v=>v.trim());if(f!==h)return[f,h].map(v=>v.trim())}return["AM","PM"]}function t2(a){return a!==null&&a!==!1&&!Number.isNaN(Number(a))}function js(...a){return Math.min(...a.filter(t2))}function Es(...a){return Math.max(...a.filter(t2))}function Ib({ariaLabel:a,autoFocus:i,className:o,disabled:l,inputRef:f,locale:d,maxTime:h,minTime:v,onChange:m,onKeyDown:g,required:b,value:S}){const j=v?Qr($t(v))[1]==="pm":!1,_=h?Qr($t(h))[1]==="am":!1,C="amPm",[E,A]=e2(d);return c.jsxs("select",{"aria-label":a,autoFocus:i,className:xl(`${o}__input`,`${o}__${C}`),"data-input":"true","data-select":"true",disabled:l,name:C,onChange:m,onKeyDown:g,ref:f,required:b,value:S!==null?S:"",children:[!S&&c.jsx("option",{value:"",children:"--"}),c.jsx("option",{disabled:j,value:"am",children:E}),c.jsx("option",{disabled:_,value:"pm",children:A})]})}var Jb=["normal","small-caps"];function n2(a){if(!a)return"";var i=window.getComputedStyle(a);if(i.font)return i.font;var o=i.fontFamily!=="";if(!o)return"";var l=Jb.includes(i.fontVariant)?i.fontVariant:"normal";return"".concat(i.fontStyle," ").concat(l," ").concat(i.fontWeight," ").concat(i.fontSize," / ").concat(i.lineHeight," ").concat(i.fontFamily)}var Ig;function Wb(a,i){var o=Ig||(Ig=document.createElement("canvas")),l=o.getContext("2d");if(!l)return null;l.font=i;var f=l.measureText(a).width;return Math.ceil(f)}function fs(a){if(typeof document>"u"||!a)return null;var i=n2(a),o=a.value||a.placeholder,l=Wb(o,i);return l===null?null:(a.style.width="".concat(l,"px"),l)}const gd=typeof window<"u",ew=gd?w.useLayoutEffect:w.useEffect,tw=gd&&/(MSIE|Trident\/|Edge\/)/.test(navigator.userAgent),nw=gd&&/Firefox/.test(navigator.userAgent);function aw(a){const{target:i}=a;tw?requestAnimationFrame(()=>i.select()):i.select()}function rw(a){if(document.readyState==="complete")return;function i(){fs(a)}window.addEventListener("load",i)}function iw(a){if(!document.fonts)return;const i=n2(a);if(!i||document.fonts.check(i))return;function l(){fs(a)}document.fonts.addEventListener("loadingdone",l)}function lw(a){if(a&&"selectionStart"in a&&a.selectionStart!==null&&"selectionEnd"in a&&a.selectionEnd!==null)return a.value.slice(a.selectionStart,a.selectionEnd);if("getSelection"in window){const i=window.getSelection();return i?.toString()}return null}function ow(a){if(a!==null)return function(o){if(nw)return;const{key:l,target:f}=o,{value:d}=f,h=l.length===1&&/\d/.test(l),v=lw(f);(!h||!(v||d.length<a))&&o.preventDefault()}}function Ts({ariaLabel:a,autoFocus:i,className:o,disabled:l,inputRef:f,max:d,min:h,name:v,nameForClass:m,onChange:g,onKeyDown:b,onKeyUp:S,placeholder:j="--",required:_,showLeadingZeros:C,step:E,value:A}){ew(()=>{!f||!f.current||(fs(f.current),rw(f.current),iw(f.current))},[f,A]);const D=C&&A&&Number(A)<10&&(A==="0"||!A.toString().startsWith("0")),H=d?d.toString().length:null;return c.jsxs(c.Fragment,{children:[D?c.jsx("span",{className:`${o}__leadingZero`,children:"0"}):null,c.jsx("input",{"aria-label":a,autoComplete:"off",autoFocus:i,className:xl(`${o}__input`,`${o}__${m||v}`,D&&`${o}__input--hasLeadingZero`),"data-input":"true",disabled:l,inputMode:"numeric",max:d,min:h,name:v,onChange:g,onFocus:aw,onKeyDown:b,onKeyPress:ow(H),onKeyUp:z=>{fs(z.target),S&&S(z)},placeholder:j,ref:f,required:_,step:E,type:"number",value:A!==null?A:""})]})}function sw({amPm:a,maxTime:i,minTime:o,value:l,...f}){const d=js(12,i&&(()=>{const[m,g]=Qr($t(i));return g!==a?null:m})()),h=Es(1,o&&(()=>{const[m,g]=Qr($t(o));return g!==a||m===12?null:m})()),v=l?Qr(l)[0].toString():"";return c.jsx(Ts,{max:d,min:h,name:"hour12",nameForClass:"hour",value:v,...f})}function cw({maxTime:a,minTime:i,...o}){const l=js(23,a&&$t(a)),f=Es(0,i&&$t(i));return c.jsx(Ts,{max:l,min:f,name:"hour24",nameForClass:"hour",...o})}function uw({hour:a,maxTime:i,minTime:o,showLeadingZeros:l=!0,...f}){function d(m){return a===$t(m).toString()}const h=js(59,i&&d(i)&&ta(i)),v=Es(0,o&&d(o)&&ta(o));return c.jsx(Ts,{max:h,min:v,name:"minute",showLeadingZeros:l,...f})}function fw({ariaLabel:a,disabled:i,maxTime:o,minTime:l,name:f,onChange:d,required:h,value:v,valueType:m}){const g=(()=>{switch(m){case"hour":return j=>`${$t(j)}:00`;case"minute":return Kp;case"second":return Qp;default:throw new Error("Invalid valueType")}})(),b=(()=>{switch(m){case"hour":return 3600;case"minute":return 60;case"second":return 1;default:throw new Error("Invalid valueType")}})();function S(j){j.stopPropagation()}return c.jsx("input",{"aria-label":a,disabled:i,hidden:!0,max:o?g(o):void 0,min:l?g(l):void 0,name:f,onChange:d,onFocus:S,required:h,step:b,style:{visibility:"hidden",position:"absolute",zIndex:"-999"},type:"time",value:v?g(v):""})}function dw({hour:a,maxTime:i,minTime:o,minute:l,showLeadingZeros:f=!0,...d}){function h(g){return a===$t(g).toString()&&l===ta(g).toString()}const v=js(59,i&&h(i)&&er(i)),m=Es(0,o&&h(o)&&er(o));return c.jsx(Ts,{max:v,min:m,name:"second",showLeadingZeros:f,...d})}const Jg={},hw=["hour","minute","second"];function mw(a){return a.dataset.input==="true"}function Wg(a,i){let o=a;do o=o[i];while(o&&!mw(o));return o}function uf(a){a&&a.focus()}function gw(a,i,o){const l=[],f=new RegExp(Object.keys(i).map(h=>`${h}+`).join("|"),"g"),d=a.match(f);return a.split(f).reduce((h,v,m)=>{const g=v&&c.jsx(Zb,{children:v},`separator_${m}`);h.push(g);const b=d?.[m];if(b){const S=i[b]||i[Object.keys(i).find(j=>b.match(j))];if(!S)return h;!o&&l.includes(S)?h.push(b):(h.push(S(b,m)),l.push(S))}return h},[])}const Go=Kb({useGrouping:!1});function pw({amPmAriaLabel:a,autoFocus:i,className:o,disabled:l,format:f,hourAriaLabel:d,hourPlaceholder:h,isClockOpen:v=null,locale:m,maxDetail:g="minute",maxTime:b,minTime:S,minuteAriaLabel:j,minutePlaceholder:_,name:C="time",nativeInputAriaLabel:E,onChange:A,onInvalidChange:D,required:H,secondAriaLabel:z,secondPlaceholder:K,value:Z}){const[ee,P]=w.useState(null),[I,ne]=w.useState(null),[ce,pe]=w.useState(null),[se,xe]=w.useState(null),[be,re]=w.useState(null),O=w.useRef(null),J=w.useRef(null),le=w.useRef(null),de=w.useRef(null),R=w.useRef(null),[q,te]=w.useState(v),ae=w.useRef(void 0);w.useEffect(()=>{te(v)},[v]),w.useEffect(()=>{const oe=Z;oe?(P(Qr($t(oe))[1]),ne($t(oe).toString()),pe(ta(oe).toString()),xe(er(oe).toString()),re(oe)):(P(null),ne(null),pe(null),xe(null),re(null))},[Z,S,b,g,q]);const ie=g,Se=(()=>{const oe=hw.indexOf(g),ye=Jg[oe]||(()=>{const Re={hour:"numeric"};return oe>=1&&(Re.minute="numeric"),oe>=2&&(Re.second="numeric"),Jg[oe]=Re,Re})();return Wp(ye)})();function B(oe){return(()=>{switch(ie){case"hour":case"minute":return Kp;case"second":return Qp;default:throw new Error("Invalid valueType")}})()(oe)}const V=f||(()=>{const Ht=new Date(2017,0,1,21,13,14);return Se(m,Ht).replace(Go(m,9),"h").replace(Go(m,21),"H").replace(Go(m,13),"mm").replace(Go(m,14),"ss").replace(new RegExp(e2(m).join("|")),"a")})(),Y=(()=>{const oe=V.match(/[^0-9a-z]/i);return oe?oe[0]:null})();function ue(oe){if(oe.target===oe.currentTarget){const ye=oe.target.children[1];uf(ye)}}function Ce(oe){switch(ae.current=oe.key,oe.key){case"ArrowLeft":case"ArrowRight":case Y:{oe.preventDefault();const{target:ye}=oe,Re=oe.key==="ArrowLeft"?"previousElementSibling":"nextElementSibling",$e=Wg(ye,Re);uf($e);break}}}function he(oe){const{key:ye,target:Re}=oe;if(!(ae.current===ye)||!!Number.isNaN(Number(ye)))return;const mt=Re.getAttribute("max");if(!mt)return;const{value:rr}=Re;if(Number(rr)*10>Number(mt)||rr.length>=mt.length){const ui=Wg(Re,"nextElementSibling");uf(ui)}}function fe(){if(!A)return;function oe(Et){return!!Et}const ye=[O.current,J.current,le.current,de.current,R.current].filter(oe),Re=ye.slice(1),$e={};for(const Et of ye)$e[Et.name]=Et.type==="number"?Et.valueAsNumber:Et.value;if(Re.every(Et=>!Et.value)){A(null,!1);return}const mt=ye.every(Et=>Et.value),rr=ye.every(Et=>Et.validity.valid);if(mt&&rr){const Et=Number($e.hour24||$e.hour12&&$e.amPm&&Zg($e.hour12,$e.amPm)||0),ui=Number($e.minute||0),ir=Number($e.second||0),ra=_a=>`0${_a}`.slice(-2),$n=`${ra(Et)}:${ra(ui)}:${ra(ir)}`,lr=B($n);A(lr,!1);return}D&&D()}function ge(oe){const{name:ye,value:Re}=oe.target;switch(ye){case"amPm":P(Re);break;case"hour12":ne(Re?Zg(Re,ee||"am").toString():"");break;case"hour24":ne(Re);break;case"minute":pe(Re);break;case"second":xe(Re);break}fe()}function qe(oe){const{value:ye}=oe.target;if(!A)return;A(ye||null,!1)}const ut={className:o,disabled:l,maxTime:b,minTime:S,onChange:ge,onKeyDown:Ce,onKeyUp:he,required:!!(H||q)};function an(oe,ye){if(oe&&oe.length>2)throw new Error(`Unsupported token: ${oe}`);const Re=oe?oe.length===2:!1;return c.jsx(sw,{...ut,amPm:ee,ariaLabel:d,autoFocus:ye===0&&i,inputRef:J,placeholder:h,showLeadingZeros:Re,value:I},"hour12")}function Ye(oe,ye){if(oe&&oe.length>2)throw new Error(`Unsupported token: ${oe}`);const Re=oe?oe.length===2:!1;return c.jsx(cw,{...ut,ariaLabel:d,autoFocus:ye===0&&i,inputRef:le,placeholder:h,showLeadingZeros:Re,value:I},"hour24")}function Qe(oe,ye){return/h/.test(oe)?an(oe,ye):Ye(oe,ye)}function _e(oe,ye){if(oe&&oe.length>2)throw new Error(`Unsupported token: ${oe}`);const Re=oe?oe.length===2:!1;return c.jsx(uw,{...ut,ariaLabel:j,autoFocus:ye===0&&i,hour:I,inputRef:de,placeholder:_,showLeadingZeros:Re,value:ce},"minute")}function it(oe,ye){if(oe&&oe.length>2)throw new Error(`Unsupported token: ${oe}`);const Re=oe?oe.length===2:!0;return c.jsx(dw,{...ut,ariaLabel:z,autoFocus:ye===0&&i,hour:I,inputRef:R,minute:ce,placeholder:K,showLeadingZeros:Re,value:se},"second")}function F(oe,ye){return c.jsx(Ib,{...ut,ariaLabel:a,autoFocus:ye===0&&i,inputRef:O,locale:m,onChange:ge,value:ee},"ampm")}function me(){return gw(V,{h:Qe,H:Qe,m:_e,s:it,a:F},typeof f<"u")}function Ae(){return c.jsx(fw,{ariaLabel:E,disabled:l,maxTime:b,minTime:S,name:C,onChange:qe,required:H,value:be,valueType:ie},"time")}return c.jsxs("div",{className:o,onClick:ue,children:[Ae(),me()]})}const Yt="react-time-picker",yw=["mousedown","focusin","touchstart"],a2={xmlns:"http://www.w3.org/2000/svg",width:19,height:19,viewBox:"0 0 19 19",stroke:"black",strokeWidth:2},vw=c.jsxs("svg",{...a2,"aria-hidden":"true",className:`${Yt}__clock-button__icon ${Yt}__button__icon`,fill:"none",children:[c.jsx("circle",{cx:"9.5",cy:"9.5",r:"7.5"}),c.jsx("path",{d:"M9.5 4.5 v5 h4"})]}),xw=c.jsxs("svg",{...a2,"aria-hidden":"true",className:`${Yt}__clear-button__icon ${Yt}__button__icon`,children:[c.jsx("line",{x1:"4",x2:"15",y1:"4",y2:"15"}),c.jsx("line",{x1:"15",x2:"4",y1:"4",y2:"15"})]});function bw(a){const{amPmAriaLabel:i,autoFocus:o,className:l,clearAriaLabel:f,clearIcon:d=xw,clockAriaLabel:h,clockIcon:v=vw,closeClock:m=!0,"data-testid":g,hourAriaLabel:b,hourPlaceholder:S,disableClock:j,disabled:_,format:C,id:E,isOpen:A=null,locale:D,maxTime:H,maxDetail:z="minute",minTime:K,minuteAriaLabel:Z,minutePlaceholder:ee,name:P="time",nativeInputAriaLabel:I,onClockClose:ne,onClockOpen:ce,onChange:pe,onFocus:se,onInvalidChange:xe,openClockOnFocus:be=!0,required:re,value:O,secondAriaLabel:J,secondPlaceholder:le,shouldCloseClock:de,shouldOpenClock:R,...q}=a,[te,ae]=w.useState(A),ie=w.useRef(null),Se=w.useRef(null);w.useEffect(()=>{ae(A)},[A]);function B({reason:_e}){R&&!R({reason:_e})||(ae(!0),ce&&ce())}const V=w.useCallback(({reason:_e})=>{de&&!de({reason:_e})||(ae(!1),ne&&ne())},[ne,de]);function Y(){te?V({reason:"buttonClick"}):B({reason:"buttonClick"})}function ue(_e,it=m){it&&V({reason:"select"}),pe&&pe(_e)}function Ce(_e){se&&se(_e),!(_||te||!be||_e.target.dataset.select==="true")&&B({reason:"focus"})}const he=w.useCallback(_e=>{_e.key==="Escape"&&V({reason:"escape"})},[V]);function fe(){ue(null)}function ge(_e){_e.stopPropagation()}const qe=w.useCallback(_e=>{const{current:it}=ie,{current:F}=Se,me="composedPath"in _e?_e.composedPath()[0]:_e.target;me&&it&&!it.contains(me)&&(!F||!F.contains(me))&&V({reason:"outsideAction"})},[V]),ut=w.useCallback((_e=te)=>{for(const it of yw)_e?document.addEventListener(it,qe):document.removeEventListener(it,qe);_e?document.addEventListener("keydown",he):document.removeEventListener("keydown",he)},[te,qe,he]);w.useEffect(()=>(ut(),()=>{ut(!1)}),[ut]);function an(){const[_e]=Array.isArray(O)?O:[O],it={amPmAriaLabel:i,hourAriaLabel:b,minuteAriaLabel:Z,nativeInputAriaLabel:I,secondAriaLabel:J},F={hourPlaceholder:S,minutePlaceholder:ee,secondPlaceholder:le};return c.jsxs("div",{className:`${Yt}__wrapper`,children:[c.jsx(pw,{...it,...F,autoFocus:o,className:`${Yt}__inputGroup`,disabled:_,format:C,isClockOpen:te,locale:D,maxDetail:z,maxTime:H,minTime:K,name:P,onChange:ue,onInvalidChange:xe,required:re,value:_e}),d!==null&&c.jsx("button",{"aria-label":f,className:`${Yt}__clear-button ${Yt}__button`,disabled:_,onClick:fe,onFocus:ge,type:"button",children:typeof d=="function"?w.createElement(d):d}),v!==null&&!j&&c.jsx("button",{"aria-expanded":te||!1,"aria-label":h,className:`${Yt}__clock-button ${Yt}__button`,disabled:_,onClick:Y,onFocus:ge,type:"button",children:typeof v=="function"?w.createElement(v):v})]})}function Ye(){if(te===null||j)return null;const{clockProps:_e,portalContainer:it,value:F}=a,me=`${Yt}__clock`,Ae=xl(me,`${me}--${te?"open":"closed"}`),[oe]=Array.isArray(F)?F:[F],ye=c.jsx($b,{locale:D,value:oe,..._e});return it?Jo.createPortal(c.jsx("div",{ref:Se,className:Ae,children:ye}),it):c.jsx(Xb,{children:c.jsx("div",{ref:Re=>{Re&&!te&&Re.removeAttribute("style")},className:Ae,children:ye})})}const Qe=w.useMemo(()=>yb(q),[q]);return c.jsxs("div",{className:xl(Yt,`${Yt}--${te?"open":"closed"}`,`${Yt}--${_?"disabled":"enabled"}`,l),"data-testid":g,id:E,...Qe,onFocus:Ce,ref:ie,children:[an(),Ye()]})}const ww=y.button.withConfig({shouldForwardProp:a=>a!=="variant"})`
  display: flex;
  width: 11.25rem;
  height: 2.75rem;
  padding: 0.625rem 1.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  /* Primary variant (기본값) */
  ${({variant:a})=>a==="primary"&&`
    border: 1px solid #4fb2ef;
    background: var(
      --BP-Gradation,
      radial-gradient(
        480.82% 193.78% at 131.5% -43.24%,
        #8c68e0 0%,
        #688ae0 31.38%,
        var(--Color, #68b8ea) 87.56%
      )
    );
    color: white;

    &:hover {
      opacity: 0.9;
    }
  `}

  /* Secondary variant */
  ${({variant:a})=>a==="secondary"&&`
    border: 1px solid var(--10, #ddd);
    background: #fff;
    color: #313131;

    &:hover {
      border-color: #4a4a4a;
    }
  `}

  &:disabled {
    border-radius: 0.5rem;
    border: 1px solid var(--10, #ddd);
    background: var(--5, #e9e9e9);
    color: var(--30, #acacac);
    text-align: center;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25rem;
    cursor: not-allowed;
  }
`;function tr({children:a,onClick:i,disabled:o,variant:l="primary",...f}){return c.jsx(ww,{onClick:i,disabled:o,variant:l,...f,children:a})}const Sw=y.button`
  display: flex;
  width: 8.75rem;
  height: 2.75rem;
  padding: 0.625rem 2.6875rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.5rem;
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  /* Primary variant (기본값) */
  ${({$variant:a})=>a==="primary"&&`
    border: 1px solid #4fb2ef;
    background: var(
      --BP-Gradation,
      radial-gradient(
        480.82% 193.78% at 131.5% -43.24%,
        #8c68e0 0%,
        #688ae0 31.38%,
        var(--Color, #68b8ea) 87.56%
      )
    );
    color: white;

    &:hover {
      opacity: 0.9;
    }
  `}

  /* Secondary variant */
  ${({$variant:a})=>a==="secondary"&&`
    border: 1px solid var(--10, #ddd);
    background: #fff;
    color: #313131;

    &:hover {
      border-color: #4a4a4a;
    }
  `}

  &:disabled {
    border-radius: 0.5rem;
    border: 1px solid var(--10, #ddd);
    background: var(--5, #e9e9e9);
    color: var(--30, #acacac);
    cursor: not-allowed;
  }
`;function _t({children:a,onClick:i,disabled:o,variant:l="primary",...f}){return c.jsx(Sw,{onClick:i,disabled:o,$variant:l,...f,children:a})}const Cw=y.button`
  display: flex;
  width: 12.5rem;
  height: 2.625rem;
  padding: 0.5625rem 1rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.625rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  /* 텍스트 스타일 */
  text-align: center;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 120% */
  white-space: nowrap;

  /* 상태에 따른 스타일 */
  ${({selected:a})=>a?`
        background: var(--70, #4A4A4A);
        color: #fff;
      `:`
        background: transparent;
        color: var(--30, #ACACAC);
      `}

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;function e1({children:a,selected:i=!1,onClick:o,disabled:l=!1,...f}){return c.jsx(Cw,{selected:i,onClick:o,disabled:l,...f,children:a})}const jw="/assets/iconConfigureStore-B8R33_Eq.svg",Ew=y.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`,Tw=y.div`
  display: flex;
  width: 21.125rem;
  padding: 3.75rem 0 3.125rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  border-radius: 1.875rem;
  background: #fff;
`,Aw=y.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  text-align: center;
`,Rw=y.h2`
  color: #313131;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.5rem;
  margin: 0;
`,_w=y.p`
  color: #acacac;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  margin: 0;
`,Mw=y.div`
  width: 9.375rem;
  height: 10.8125rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ow=y.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,Dw=y.div`
  display: flex;
  gap: 0.625rem;
  justify-content: center;
`;function r2({isOpen:a,onClose:i,onConfirm:o,title:l="정말로 저장하시겠습니까?",subtitle:f="저장된 내용은 수정할 수 없습니다."}){return a?c.jsx(Ew,{onClick:i,"data-modal":"open",children:c.jsxs(Tw,{onClick:d=>d.stopPropagation(),children:[c.jsxs(Aw,{children:[c.jsx(Rw,{children:l}),c.jsx(_w,{children:f})]}),c.jsx(Mw,{children:c.jsx(Ow,{src:jw,alt:"문서 아이콘"})}),c.jsxs(Dw,{children:[c.jsx(_t,{variant:"secondary",onClick:i,children:"취소"}),c.jsx(_t,{variant:"primary",onClick:o,children:"저장"})]})]})}):null}const zw="/assets/savingDocumentAnimation-eV3LbPLM.mp4";function kw({isOpen:a,onDone:i}){return a?c.jsx(Cs,{mediaSrc:zw,titleText:"기록을 서랍에 저장하고 있어요",subText:"잠시 후 메인 화면으로 돌아가요",autoCloseMs:3e3,onDone:i,showAutoClose:!0}):null}const Lw=y.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`,Nw=y.div`
  display: inline-flex;
  padding: 2.5rem 2.5rem 1.875rem 1.875rem;
  flex-direction: column;
  align-items: center;
  gap: 1.875rem;
  border-radius: 1.25rem;
  background: #fff;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);
  max-width: 90vw;
  max-height: 90vh;
  overflow: hidden;
`,$w=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 15rem;
  border-radius: 0.5rem;
  background: #f5f5f5;
  border: 1px solid #e0e0e0;
  overflow: hidden;
  position: relative;
`,t1=y.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #fff;
`,Uw=y.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #000;
`,Hw=y.audio`
  width: 100%;
  max-width: 400px;
  height: 50px;
  margin: 1rem 0;
  display: block;
`,Bw=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  border-radius: 0.5rem;
  padding: 2rem;
`;y.div`
  font-size: 4rem;
  color: #4a4a4a;
  margin-bottom: 1rem;
`;const Pw=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #4a4a4a;
  font-family: Pretendard;
  font-size: 0.875rem;
`,qw=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #e44343;
  font-family: Pretendard;
  font-size: 0.875rem;
  text-align: center;
  padding: 1rem;
`,Vw=y.div`
  display: flex;
  gap: 0.94rem;
  justify-content: center;
`;function pd({isOpen:a,onClose:i,file:o,fileUrl:l}){const[f,d]=w.useState(!0),[h,v]=w.useState(!1),[m,g]=w.useState(null);if(w.useEffect(()=>{if(a){d(!0),v(!1),console.log("FileShowModal opened with:",{file:o,fileUrl:l});const C=setTimeout(()=>{console.log("Auto-loading timeout reached"),d(!1)},5e3);return()=>clearTimeout(C)}},[a,o,l]),w.useEffect(()=>{if(!a||!l)return;const E=(()=>{const A=o?.type||"",H=(o?.filename||"").split(".").pop()?.toLowerCase(),z=["mp4","avi","mov","wmv","flv","webm"],K=["mp3","wav","m4a","aac","ogg"];return A==="VIDEO"||z.includes(H)?"VIDEO":A==="AUDIO"||K.includes(H)?"AUDIO":"IMAGE"})();return m&&m.startsWith("blob:")&&window.URL.revokeObjectURL(m),g(null),E==="IMAGE"&&d(!1),()=>{m&&m.startsWith("blob:")&&(console.log("Blob URL 정리:",m),window.URL.revokeObjectURL(m))}},[a,l,o,m]),!a)return null;const b=()=>{console.log("handleLoad called - file loaded successfully"),d(!1),v(!1)},S=C=>{if(console.error("handleError called - file failed to load:",C),console.error("File details:",{file:o,fileUrl:l,mediaBlobUrl:m,error:C.target?.error||C}),C.target&&console.error("Media element error details:",{networkState:C.target.networkState,readyState:C.target.readyState,error:C.target.error}),m&&m.startsWith("blob:")){console.log("Blob URL 에러 발생, 원본 URL로 fallback"),g(null),d(!1),v(!1);return}d(!1),v(!0)},j=async()=>{const C=o?.presigned_url||l;if(C)try{console.log("다운로드 시작:",C);const E=window.open(C,"_blank");if(!E||E.closed||typeof E.closed>"u"){console.log("팝업이 차단됨, 직접 다운로드 시도");const A=await fetch(C,{mode:"cors",credentials:"omit"});if(!A.ok)throw new Error(`HTTP error! status: ${A.status}`);const D=await A.blob();console.log("Blob 생성됨:",D.size,"bytes");const H=window.URL.createObjectURL(D),z=document.createElement("a");z.href=H,z.download=o?.filename||"download",z.style.display="none",document.body.appendChild(z),z.click(),document.body.removeChild(z),window.URL.revokeObjectURL(H),console.log("다운로드 완료")}else console.log("새 탭에서 파일 열기 성공")}catch(E){console.error("다운로드 중 오류:",E),window.open(C,"_blank")}},_=()=>{if(console.log("renderContent called with:",{file:o,fileUrl:l,isLoading:f,hasError:h}),f)return c.jsx(Pw,{children:"로딩 중..."});if(h)return c.jsx(qw,{children:"파일을 불러올 수 없습니다."});const E=(()=>{const D=o?.type||"",H=o?.mimeType||"",z=o?.filename||"",K=pe=>{if(!pe)return null;const se=pe.toUpperCase();return["IMAGE","VIDEO","AUDIO"].includes(se)?se:null},Z=pe=>pe.startsWith("image/")?"IMAGE":pe.startsWith("video/")?"VIDEO":pe.startsWith("audio/")?"AUDIO":null,ee=pe=>{const se=pe.split(".").pop()?.toLowerCase(),xe=["jpg","jpeg","png","gif","bmp","webp"],be=["mp4","avi","mov","wmv","flv","webm"],re=["mp3","wav","m4a","aac","ogg"];return xe.includes(se)?"IMAGE":be.includes(se)?"VIDEO":re.includes(se)?"AUDIO":null},P=K(D),I=Z(H),ne=ee(z),ce=P||I||ne;return console.log("File type detection:",{apiType:D,normalizedApiType:P,mimeType:H,mimeTypeResult:I,extensionType:ne,finalType:ce,filename:z}),ce})();console.log("Final file type:",E),console.log("File object for debugging:",{file:o,fileUrl:l,mediaBlobUrl:m,mediaUrl:o?.presigned_url||m||l});const A=o?.presigned_url||(m&&m.startsWith("blob:")?m:null)||l;return E==="IMAGE"||E==="PHOTO"?(console.log("Rendering image with URL:",A),c.jsx(t1,{src:A,alt:o?.filename||"이미지",onLoad:b,onError:S})):E==="VIDEO"?(console.log("Rendering video with URL:",A),c.jsx(Uw,{src:A,controls:!0,onLoadedData:b,onError:S,onLoadStart:()=>{console.log("Video load started")},onCanPlay:()=>{console.log("Video can play"),d(!1)},onCanPlayThrough:()=>{console.log("Video can play through"),d(!1)},onLoadedMetadata:()=>{console.log("Video metadata loaded"),d(!1)}})):E==="AUDIO"?(console.log("Rendering audio with URL:",A),console.log("Audio rendering details:",{file:o,fileUrl:l,mediaBlobUrl:m,mediaUrl:A,isLoading:f,hasError:h}),c.jsx(Bw,{children:c.jsx(Hw,{src:A,controls:!0,preload:"metadata",onLoadedData:b,onError:S,onLoadStart:()=>{console.log("Audio load started")},onCanPlay:()=>{console.log("Audio can play"),d(!1)},onCanPlayThrough:()=>{console.log("Audio can play through"),d(!1)},onLoadedMetadata:()=>{console.log("Audio metadata loaded"),d(!1)},onLoad:()=>{console.log("Audio load event"),d(!1)},onProgress:()=>{console.log("Audio progress event")}})})):(console.warn("파일 타입을 감지할 수 없음, fallback으로 이미지로 처리:",{file:o,fileType:E}),c.jsx(t1,{src:A,alt:o?.filename||"파일",onLoad:b,onError:S}))};return c.jsx(Lw,{onClick:i,"data-modal":"open",children:c.jsxs(Nw,{onClick:C=>C.stopPropagation(),children:[c.jsx($w,{children:_()}),c.jsxs(Vw,{children:[c.jsx(_t,{variant:"secondary",onClick:i,children:"닫기"}),c.jsx(_t,{variant:"primary",onClick:j,children:"다운로드"})]})]})})}const i2="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='12'%20cy='12'%20r='12'%20fill='%23F57474'/%3e%3cline%20x1='12'%20y1='6'%20x2='12'%20y2='13'%20stroke='white'%20stroke-width='4'%20stroke-linecap='round'/%3e%3ccircle%20cx='12'%20cy='18'%20r='2'%20fill='white'/%3e%3c/svg%3e",Gw=jl`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Yw=jl`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`,Fw=y.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 20000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: calc(4rem + 1.25rem);
`,Xw=y.div`
  display: flex;
  width: 26.875rem;
  padding: 1.25rem 1.875rem;
  flex-direction: row;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.625rem;
  border: 1px solid #f57474;
  background: #fff;
  box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.08);
  animation: ${a=>a.isVisible?Gw:Yw} 0.3s ease-in-out;
`,Zw=y.img`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
`,Kw=y.div`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
`;function aa({isOpen:a,onClose:i,message:o="작업에 실패했습니다."}){const[l,f]=w.useState(!1);return w.useEffect(()=>{if(a){f(!0);const d=setTimeout(()=>{f(!1),setTimeout(()=>{i()},300)},3e3);return()=>clearTimeout(d)}},[a,i]),a?c.jsx(Fw,{children:c.jsxs(Xw,{isVisible:l,children:[c.jsx(Zw,{src:i2,alt:"경고"}),c.jsx(Kw,{children:o})]})}):null}const Yo=(a,i)=>a?`${a}T${i||"00:00"}:00`:"",Qw=y.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,Iw=y.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  width: 90%;
  max-width: 60rem;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* 내부 스크롤 영역으로 위임 */
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`,Jw=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.3rem;
`,Ww=y.div`
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 2;
  padding-bottom: 0rem;
`,eS=y.div`
  flex: 1;
  overflow-y: auto; /* 내용만 스크롤 */
  padding-top: 0.5rem;
`,tS=y.h1`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  margin: 0;
`,nS=y.p`
  color: var(--30, #acacac);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  margin: 0.75rem 0 2rem 0;
`,aS=y.span`
  color: var(--70, #4a4a4a);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
`,rS=y.span`
  color: var(--MAIN, var(--Color, #68b8ea));
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
`,iS=y.div`
  display: flex;
  flex-direction: column;
  gap: 1.78rem;
  margin-bottom: 2rem;
`,Xa=y.div`
  display: grid;
  grid-template-columns: 1fr; /* 한 줄에 하나의 항목만 */
  row-gap: 1.78rem; /* 상하 간격 유지 */
  column-gap: 0; /* 좌우 간격 제거 */
`,_n=y.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`,Mn=y.label`
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: #313131;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  min-width: 5rem;

  &::after {
    content: ${({$showMark:a})=>a?'"*"':'""'};
    color: #68b8ea;
  }
`,Xf=y.input`
  display: flex;
  width: 34.6875rem;
  padding: 0.625rem 0.9375rem;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.625rem;
  border: 1px solid ${a=>a.$highlighted?"#68b8ea":"#ddd"};
  background: ${a=>a.$highlighted?"#e6f6ff":"#fff"};
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  outline: none;

  &:focus {
    border: 1px solid #68b8ea;
    background: #e6f6ff;
  }

  &:disabled {
    background: #f5f5f5;
    color: #666;
  }
`;y.select`
  display: flex;
  width: 34.6875rem;
  padding: 0.625rem 0.9375rem;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.625rem;
  border: 1px solid ${a=>a.$highlighted?"#68b8ea":"#ddd"};
  background: ${a=>a.$highlighted?"#e6f6ff":"#fff"};
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  outline: none;

  &:focus {
    border: 1px solid #68b8ea;
    background: #e6f6ff;
  }

  &:disabled {
    background: #f5f5f5;
    color: #666;
  }
`;const lS=y.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,oS=y(Xf)`
  width: 17rem;
`,sS=y.div`
  .react-time-picker {
    display: inline-flex;
    width: 17rem;
    height: 2.625rem;
    border-radius: 0.625rem;
    border: 1px solid #ddd;
    background: #fff;
    font-family: "Pretendard", sans-serif;
    font-size: 0.875rem;
    outline: none;
    padding: 0.125rem 0.5rem;
  }

  .react-time-picker__wrapper {
    border: none;
  }

  .react-time-picker:focus-within {
    border: 1px solid #68b8ea;
    background: #e6f6ff;
  }
`,cS=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: flex-start;
  width: 34.6875rem;
`,uS=y.div`
  width: 16rem;
  height: 12rem;
  border-radius: 0.5rem;
  background: #f5f5f5;
  border: 1px solid #e0e0e0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`,fS=y.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,dS=y.div`
  font-size: 3rem;
  color: #4a4a4a;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`,hS=y.div`
  color: #acacac;
  font-family: Pretendard;
  font-size: 0.875rem;
`,mS=y.textarea`
  display: flex;
  width: 34.6875rem;
  padding: 0.625rem 0.9375rem;
  align-items: flex-start;
  gap: 0.625rem;
  border-radius: 0.625rem;
  border: 1px solid ${a=>a.$highlighted?"#68b8ea":"#ddd"};
  background: ${a=>a.$highlighted?"#e6f6ff":"#fff"};
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  outline: none;
  resize: vertical;
  min-height: 4rem;

  &:focus {
    border: 1px solid #68b8ea;
    background: #e6f6ff;
  }

  &:disabled {
    background: #f5f5f5;
    color: #666;
  }
`,gS=y.div`
  display: flex;
  gap: 0.5rem;
`,ff=y.button`
  padding: 0.5rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 1rem;
  background: ${a=>a.selected?a.$isHighSeverity?"#FF6D6D":"#4a4a4a":"white"};
  color: ${a=>a.selected?"white":"#666"};
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #4a4a4a;
  }
`,df=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  flex: 1;
`,n1=y.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: #4a4a4a;
  border-radius: 1rem;
  font-family: "Pretendard", sans-serif;
  font-size: 0.75rem;
  color: white;
  position: relative;

  &:hover .remove-btn {
    opacity: 1;
  }
`,a1=y.button`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background: #4a4a4a;
  border: none;
  color: white;
  font-size: 0.875rem;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  &:hover {
    background: #333333;
  }
`,r1=y.button`
  background: none;
  border: none;
  color: #7a7a7a;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.25rem;

  &:hover {
    color: #7a7a7a;
  }
`,hf=y.input`
  padding: 0.5rem 0.75rem;
  border: 1px solid #e9e9e9;
  border-radius: 1.875rem;
  background: #f2f2f2;
  font-family: "Pretendard", sans-serif;
  font-size: 0.75rem;
  outline: none;
  color: #313131;
  min-width: 4rem;
  max-width: 20rem;
  width: ${({$widthCh:a})=>a?`${a}ch`:"8rem"};

  &:focus {
    border-color: #7a7a7a;
    background: #f2f2f2;
  }
`,pS=y.div`
  color: #a9a9a9;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.5rem;
  margin: 2rem 0 0rem 0;
`,yS=y.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 0.7rem;
`,vS={0:"낮음",1:"보통",2:"높음"},xS={VERBAL_ABUSE:"언어폭력",PHYSICAL_ABUSE:"신체폭력",SEXUAL_HARASSMENT:"성희롱",SEXUAL_VIOLENCE:"성폭력",DISCRIMINATION:"차별행위",OSTRACISM:"따돌림",BULLYING:"괴롭힘",STALKING:"스토킹",ETC:"기타"},bS=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,wS=y.button`
  padding: 0.5rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 1rem;
  background: ${a=>a.selected?"#4a4a4a":"white"};
  color: ${a=>a.selected?"white":"#666"};
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #4a4a4a;
  }
`,SS=["언어폭력","신체폭력","성희롱","성폭력","차별행위","따돌림","괴롭힘","스토킹","기타"],CS=a=>xS[a]||a;function jS({data:a,attachments:i,messageAttachments:o,onClose:l}){const h=(F,me=[])=>{console.log("DetailModifyModal - convertAttachmentsToEvidences 호출:",{attachments:F,messageAttachments:me});const Ae=[...F||[],...me||[]];if(Ae.length===0)return console.log("DetailModifyModal - attachments와 messageAttachments가 없음"),[];const oe=Ae.map(ye=>({filename:ye.filename||ye.name,type:ye.type,url:ye.previewUrl,s3Key:ye.s3Key,mimeType:ye.mimeType,size:ye.size}));return console.log("DetailModifyModal - 변환된 evidences:",oe),oe},v=a.evidences||a.evidence||h(i,o);console.log("DetailModifyModal - 초기 evidences 설정:",{dataEvidences:a.evidences,dataEvidence:a.evidence,convertedAttachments:h(i,o),finalEvidences:v,messageAttachmentsCount:o?.length||0});const[m,g]=w.useState({title:a.record_detail?.title||a.title||"",assailant:a.record_detail?.assailant||a.assailant||[],severity:a.record_detail?.severity||a.severity||null,occurred_at:"",location:a.record_detail?.location||a.location||"",content:a.record_detail?.content||a.content||"",category:CS(a.record_detail?.category||a.category||""),drawer_id:a.record_detail?.drawer_id||a.drawer_id||null,evidences:v,witness:a.record_detail?.witness||a.witness||[],created_at:a.record_detail?.created_at||a.created_at||""}),b=w.useRef(null),S=w.useRef(null),j=w.useRef(null),_=w.useRef(null),C=w.useRef(null),E=w.useRef(null),A=w.useRef(null),D=w.useRef(null),[H,z]=w.useState(""),[K,Z]=w.useState(""),[ee,P]=w.useState(!1),[I,ne]=w.useState(null),[ce,pe]=w.useState({field:null,value:""}),[se,xe]=w.useState(!1),[be,re]=w.useState("새로운 폴더 입력"),[O,J]=w.useState(new Set),[le,de]=w.useState(!1),[R,q]=w.useState(!1),[te,ae]=w.useState(!1),[ie,Se]=w.useState(""),[B,V]=w.useState([]);w.useEffect(()=>{const F=()=>{const Ae=a.drawers||[];return Array.isArray(Ae)&&Ae.length>0&&typeof Ae[0]=="object"?Ae.filter(ye=>ye&&(ye.drawer_id||ye.id)).map(ye=>({drawer_id:ye.drawer_id??ye.id,name:ye.name??ye.drawer??""})):null};(async()=>{const Ae=F();if(Ae){V(Ae);return}try{const Re=((await et.getDrawersList())?.data?.drawers||[]||[]).map($e=>({drawer_id:$e.drawer_id,name:$e.name}));V(Re)}catch{V([])}})()},[a]);const Y=F=>{g(me=>({...me,severity:F}))},ue=F=>{pe({field:F,value:""})},Ce=async F=>{if(F.key==="Enter"&&ce.value.trim())if(ce.field==="drawer")try{const me=await et.createDrawer(ce.value.trim());if(me.isSuccess){const Ae={drawer_id:me.data.drawer_id,name:me.data.name};V(oe=>[...oe,Ae]),g(oe=>({...oe,drawer_id:Ae.drawer_id})),pe({field:null,value:""})}else throw new Error(me.message||"폴더 생성에 실패했습니다.")}catch(me){console.error("폴더 생성 중 오류:",me),window.handleApiError(me,"새 폴더 생성에 실패했습니다.")}else g(me=>({...me,[ce.field]:[...me[ce.field],ce.value.trim()]})),pe({field:null,value:""})},he=(F,me)=>{g(Ae=>({...Ae,[F]:Ae[F].filter((oe,ye)=>ye!==me)}))},fe=()=>{const F=new Set;return m.title?.trim()||F.add("title"),m.category?.trim()||F.add("category"),m.assailant?.length||F.add("assailant"),(m.severity===null||m.severity===void 0)&&F.add("severity"),m.occurred_at||F.add("occurred_at"),m.location?.trim()||F.add("location"),m.content?.trim()||F.add("content"),m.drawer_id||F.add("drawer"),F},ge=F=>{J(me=>{const Ae=new Set(me);return Ae.delete(F),Ae})},qe=F=>{const me=["title","category","assailant","severity","occurred_at","location","content","drawer"];for(const Ae of me)if(F.has(Ae)){const ye={title:b,category:S,assailant:j,severity:_,occurred_at:C,location:E,content:A,drawer:D}[Ae];if(ye?.current){ye.current.scrollIntoView({behavior:"smooth",block:"start"}),setTimeout(()=>{(Ae==="title"||Ae==="location"||Ae==="content")&&ye.current.focus()},500);break}}},ut=()=>{const F=fe();if(F.size>0){J(F),qe(F);return}de(!0)},an=async()=>{de(!1),q(!0);try{const F=B.find($e=>$e.drawer_id===m.drawer_id),me=F?F.name:m.drawer_id,Ae={record_id:a.record_id,title:m.title,category:m.category||"",content:m.content,severity:m.severity,location:m.location,occurred_at:m.occurred_at||"",assailant:m.assailant||[],witness:m.witness||[],drawer:me||null},oe=new Promise(($e,Ht)=>{setTimeout(()=>Ht(new Error("요청 시간이 초과되었습니다.")),2e4)}),ye=et.saveRecord(Ae),Re=await Promise.race([ye,oe]);if(Re.isSuccess)window.navigation&&window.navigation.navigateToMain&&window.navigation.navigateToMain();else throw new Error(Re.message||"저장 실패")}catch(F){const me=F.message||"저장 중 오류가 발생했습니다.";Se(me),ae(!0)}finally{q(!1)}},Ye=F=>{z(F),g(me=>({...me,occurred_at:F&&K?Yo(F,K):F?Yo(F,"00:00"):""}))},Qe=F=>{const me=F||"";Z(me),g(Ae=>({...Ae,occurred_at:H&&me?Yo(H,me):H?Yo(H,"00:00"):""}))},_e=F=>{console.log("DetailModifyModal - handleFileClick 호출:",F),ne({filename:F.filename,type:F.type,url:F.url,mimeType:F.mimeType}),P(!0)},it=()=>{P(!1),ne(null)};return c.jsxs(Qw,{children:[c.jsxs(Iw,{children:[c.jsxs(Ww,{children:[c.jsx(Jw,{children:c.jsx(tS,{children:"상세 내용"})}),c.jsxs(nS,{children:["작성하신 내용은 법적으로 의미 있는 증거가 될 수 있으므로 ‘서랍’에 넣으면 ",c.jsx(aS,{children:"더 이상 수정할 수 없어요."}),c.jsx("br",{}),"빠진 내용은 없는지, 사실과 다른 부분은 없는지 천천히 확인해 주세요.",c.jsx("br",{}),c.jsx(rS,{children:"필요하다면 지금 바로 수정해 주세요."})]})]}),c.jsxs(eS,{children:[c.jsxs(iS,{children:[c.jsxs(Xa,{children:[c.jsxs(_n,{children:[c.jsx(Mn,{$showMark:!m.title,children:"제목"}),c.jsx(Xf,{ref:b,value:m.title,$highlighted:O.has("title"),onChange:F=>{g(me=>({...me,title:F.target.value})),ge("title")}})]}),c.jsxs(_n,{children:[c.jsx(Mn,{$showMark:!m.category,children:"카테고리"}),c.jsx(bS,{ref:S,style:{border:O.has("category")?"1px solid #68b8ea":"none",borderRadius:O.has("category")?"0.625rem":"0",background:O.has("category")?"#e6f6ff":"transparent",padding:O.has("category")?"0.5rem":"0"},children:SS.map(F=>{const me=(m.category||"")===F;return c.jsx(wS,{selected:me,onClick:()=>{g(Ae=>({...Ae,category:me?"":F})),ge("category")},children:F},F)})})]})]}),c.jsxs(Xa,{children:[c.jsxs(_n,{children:[c.jsx(Mn,{$showMark:!m.assailant||m.assailant.length===0,children:"가해자"}),c.jsxs(df,{ref:j,style:{border:O.has("assailant")?"1px solid #68b8ea":"none",borderRadius:O.has("assailant")?"0.625rem":"0",background:O.has("assailant")?"#e6f6ff":"transparent",padding:O.has("assailant")?"0.5rem":"0"},children:[m.assailant.length>0&&m.assailant.map((F,me)=>c.jsxs(n1,{children:[F,c.jsx(a1,{className:"remove-btn",onClick:()=>{he("assailant",me),ge("assailant")},children:"×"})]},me)),ce.field==="assailant"?c.jsx(hf,{$widthCh:Math.min(Math.max((ce.value?.length||0)+1,6),30),value:ce.value,onChange:F=>pe(me=>({...me,value:F.target.value})),onKeyPress:F=>{Ce(F),ge("assailant")},onBlur:()=>pe({field:null,value:""}),autoFocus:!0,placeholder:"가해자 입력"}):c.jsx(r1,{onClick:()=>{ue("assailant"),ge("assailant")},children:"+"})]})]}),c.jsxs(_n,{children:[c.jsx(Mn,{$showMark:!m.drawer_id,children:"저장 폴더"}),c.jsxs(df,{ref:D,style:{border:O.has("drawer")?"1px solid #68b8ea":"none",borderRadius:O.has("drawer")?"0.625rem":"0",background:O.has("drawer")?"#e6f6ff":"transparent",padding:O.has("drawer")?"0.5rem":"0"},children:[(B||[]).length>0&&(B||[]).map(F=>{const me=m.drawer_id===F.drawer_id;return c.jsx(ff,{selected:me,onClick:()=>{g(Ae=>({...Ae,drawer_id:me?null:F.drawer_id})),ge("drawer")},children:F.name},F.drawer_id)}),se?c.jsx(hf,{$widthCh:Math.min(Math.max((be?.length||0)+1,8),30),value:be,onChange:F=>re(F.target.value),onKeyPress:F=>{F.key==="Enter"&&be.trim()&&(xe(!1),g(me=>({...me,drawer_id:be.trim()})),ge("drawer"))},onBlur:()=>{xe(!1),be.trim()&&(g(F=>({...F,drawer_id:be.trim()})),ge("drawer"))},autoFocus:!0}):c.jsxs(ff,{selected:m.drawer_id===be,onClick:()=>{g(F=>({...F,drawer_id:m.drawer_id===be?null:be})),ge("drawer")},onDoubleClick:()=>xe(!0),style:{position:"relative"},children:[be,c.jsx("input",{type:"text",value:be,onChange:F=>re(F.target.value),onKeyPress:F=>{F.key==="Enter"&&be.trim()&&xe(!1)},onBlur:()=>xe(!1),style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"transparent",border:"none",outline:"none",color:"inherit",fontFamily:"inherit",fontSize:"inherit",cursor:"text",opacity:0},onClick:F=>{F.stopPropagation(),xe(!0)}})]})]})]})]}),c.jsx(Xa,{children:c.jsxs(_n,{children:[c.jsx(Mn,{$showMark:m.severity===null||m.severity===void 0,children:"심각도"}),c.jsx(gS,{ref:_,style:{border:O.has("severity")?"1px solid #68b8ea":"none",borderRadius:O.has("severity")?"0.625rem":"0",background:O.has("severity")?"#e6f6ff":"transparent",padding:O.has("severity")?"0.5rem":"0"},children:[0,1,2].map(F=>c.jsx(ff,{selected:m.severity===F,$isHighSeverity:F===2,onClick:()=>{Y(F),ge("severity")},children:vS[F]},F))})]})}),c.jsxs(Xa,{children:[c.jsxs(_n,{children:[c.jsx(Mn,{$showMark:!m.occurred_at,children:"발생 일시"}),c.jsxs(lS,{ref:C,style:{border:O.has("occurred_at")?"1px solid #68b8ea":"none",borderRadius:O.has("occurred_at")?"0.625rem":"0",background:O.has("occurred_at")?"#e6f6ff":"transparent",padding:O.has("occurred_at")?"0.5rem":"0"},children:[c.jsx(oS,{type:"date",value:H,max:"9999-12-31",onChange:F=>{Ye(F.target.value),ge("occurred_at")}}),c.jsx(sS,{children:c.jsx(bw,{onChange:F=>{Qe(F),ge("occurred_at")},value:K,format:"HH:mm",disableClock:!0,clearIcon:null})})]})]}),c.jsxs(_n,{children:[c.jsx(Mn,{$showMark:!1,children:"목격자"}),c.jsxs(df,{children:[m.witness.length>0&&m.witness.map((F,me)=>c.jsxs(n1,{children:[F,c.jsx(a1,{className:"remove-btn",onClick:()=>he("witness",me),children:"×"})]},me)),ce.field==="witness"?c.jsx(hf,{$widthCh:Math.min(Math.max((ce.value?.length||0)+1,6),30),value:ce.value,onChange:F=>pe(me=>({...me,value:F.target.value})),onKeyPress:Ce,onBlur:()=>pe({field:null,value:""}),autoFocus:!0,placeholder:"목격자 입력"}):c.jsx(r1,{onClick:()=>ue("witness"),children:"+"})]})]})]}),c.jsx(Xa,{children:c.jsxs(_n,{children:[c.jsx(Mn,{$showMark:!m.location,children:"발생 장소"}),c.jsx(Xf,{ref:E,value:m.location,$highlighted:O.has("location"),onChange:F=>{g(me=>({...me,location:F.target.value})),ge("location")}})]})}),c.jsx(Xa,{children:c.jsxs(_n,{children:[c.jsx(Mn,{$showMark:!1,children:"발생 정황"}),c.jsx(mS,{ref:A,value:m.content,$highlighted:O.has("content"),onChange:F=>{g(me=>({...me,content:F.target.value})),ge("content")}})]})}),c.jsx(Xa,{children:c.jsxs(_n,{children:[c.jsx(Mn,{$showMark:!1,children:"자료"}),c.jsx(cS,{children:(console.log("DetailModifyModal - 자료 필드 렌더링:",{recordDataEvidences:m?.evidences,evidencesLength:(m?.evidences||[]).length}),(m?.evidences||[]).length===0?c.jsx(hS,{children:"첨부 파일 없음"}):(m?.evidences||[]).map((F,me)=>{const Ae=String(F.type||"").toLowerCase(),oe=Ae.includes("image")||Ae==="photo",ye=Ae.includes("video"),Re=Ae.includes("audio"),$e=F.url||F.s3Url||"";return console.log("DetailModifyModal - evidence 렌더링:",{index:me,evidence:F,type:Ae,isImage:oe,isVideo:ye,isAudio:Re,src:$e}),c.jsxs(uS,{onClick:()=>_e(F),style:{cursor:"pointer"},children:[oe&&c.jsx(fS,{src:$e,alt:F.filename}),ye&&c.jsx("video",{src:$e,style:{width:"100%",height:"100%",objectFit:"cover"}}),Re&&c.jsx(dS,{children:"🎵"})]},me)}))})]})})]}),c.jsx(pS,{children:"공정한 절차를 위해 기록은 사실에 기반해야 하며, 허위 기록은 신뢰와 법적 보호를 어렵게 할 수 있습니다."}),c.jsxs(yS,{children:[c.jsx(tr,{variant:"secondary",onClick:l,children:"대화로 돌아가기"}),c.jsx(tr,{variant:"primary",onClick:ut,children:"저장하기"})]})]})]}),c.jsx(r2,{isOpen:le,onClose:()=>de(!1),onConfirm:an,title:"정말로 저장할까요?",subtitle:"서랍에 들어가면 수정이 불가능해요"}),c.jsx(kw,{isOpen:R}),c.jsx(aa,{isOpen:te,onClose:()=>ae(!1),message:ie}),c.jsx(pd,{isOpen:ee,onClose:it,file:I,fileUrl:I?.url||I&&m?.evidences?.find(F=>F.filename===I.filename)?.url||""})]})}const ES="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='12'%20cy='12'%20r='12'%20fill='url(%23paint0_linear_672_6289)'/%3e%3cpath%20d='M4.80005%2012.4382L9.77036%2016.8L18.5704%207.99995'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_672_6289'%20x1='69.9'%20y1='-44.7568'%20x2='-8.65397'%20y2='-41.0982'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.393417'%20stop-color='%2368B8EA'/%3e%3cstop%20offset='0.764085'%20stop-color='%23688AE0'/%3e%3cstop%20offset='1'%20stop-color='%238C68E0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",TS=jl`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,AS=jl`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`,RS=y.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 20000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: calc(4rem + 1.25rem);
`,_S=y.div`
  display: flex;
  width: 26.875rem;
  padding: 1.25rem 1.875rem;
  flex-direction: row;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.625rem;
  border: 1px solid var(--seconday, #688ae0);
  background: #fff;
  box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.08);
  animation: ${a=>a.isVisible?TS:AS} 0.3s ease-in-out;
`,MS=y.img`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
`,OS=y.div`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
`;function oi({isOpen:a,onClose:i,title:o="성공",message:l="작업이 완료되었습니다."}){const[f,d]=w.useState(!1);return w.useEffect(()=>{if(a){d(!0);const h=setTimeout(()=>{d(!1),setTimeout(()=>{i()},300)},2e3);return()=>clearTimeout(h)}},[a,i]),a?c.jsx(RS,{children:c.jsxs(_S,{isVisible:f,children:[c.jsx(MS,{src:ES,alt:"성공"}),c.jsx(OS,{children:l})]})}):null}const yd=Fp(),DS=100*1024*1024,zS=a=>{if(!a)return!1;const i=a.type||"",o=i.startsWith("image/")||i.startsWith("video/")||i.startsWith("audio/"),l=typeof a.size=="number"?a.size<=DS:!0;return o&&l},kS=a=>{const i=(a?.type||"").toLowerCase();return i.startsWith("image/")?"IMAGE":i.startsWith("video/")?"VIDEO":i.startsWith("audio/")?"AUDIO":"OTHER"},LS=async({prefix:a,contentType:i,contentLength:o})=>{const l=await fetch(`${yd}/api/evidence/presigned-url`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prefix:a,contentType:i,contentLength:o})});if(!l.ok)throw new Error(`presigned-url 발급 실패: ${l.status}`);return l.json()},NS=async({url:a,file:i,contentType:o})=>{const l=await fetch(a,{method:"PUT",headers:{"Content-Type":o},body:i});if(!l.ok)throw new Error(`S3 업로드 실패: ${l.status}`)},i1=async(a,i=10)=>{const o=await fetch(`${yd}/api/evidence/presigned-url/read?s3Key=${encodeURIComponent(a)}&minutes=${i}`);if(!o.ok)throw new Error(`read-url 발급 실패: ${o.status}`);return o.json()},$S=async a=>{const i=await fetch(`${yd}/api/evidence/delete-by-key?s3Key=${encodeURIComponent(a)}`,{method:"POST"});if(!i.ok)throw new Error(`S3 객체 삭제 실패: ${i.status}`);return i.json()},US={uploadAndGetPreview:async({prefix:a,file:i,readMinutes:o=10})=>{if(!zS(i))throw new Error("지원하지 않는 파일 형식이거나 용량 초과입니다.");const{url:l,s3Key:f}=await LS({prefix:a,contentType:i.type,contentLength:i.size});await NS({url:l,file:i,contentType:i.type});const d=await i1(f,o);return{s3Key:f,previewUrl:d?.url||"",filename:i.name,mimeType:i.type,type:kS(i),size:i.size}},getReadUrl:i1,deleteByKey:$S};function HS({mediaSrc:a,titleText:i="대화 내용을 정리하고 있어요",subText:o="잠시 한숨 돌리고 계세요!",autoCloseMs:l=3e3,onDone:f,chatSessionId:d}){const h={record_id:3,title:"동방에서 일어난 무시무시한 사건",category:"괴롭힘",content:"오늘 해승이가 해원이를 괴롭혔다",severity:1,location:"동방",created_at:"2025-08-05T10:00:00",occurred_at:"2025-08-01T14:30:00",assailant:[],witness:[],drawers:["00 커피 폭언","기차역 살인사건"],evidences:[{filename:"해원이 욕설 파일",type:"AUDIO",url:"url~~"},{filename:"폭행 당시 사진",type:"IMAGE",url:"url2~~"}]};return c.jsx(Cs,{mediaSrc:a||Xp,titleText:i,subText:o,autoCloseMs:l,onDone:f,chatSessionId:d,apiEndpoint:"/api/records/start/",apiData:{chat_session_id:d},fallbackData:h,showAutoClose:!0})}const BS=y.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: #f2f2f2;
  color: #313131;
  font-size: 0.75rem;
  position: relative;
  box-sizing: border-box;
  width: 12rem;
  height: 7rem;
  flex: 0 0 12rem;

  &:hover .remove-btn {
    opacity: 1;
  }
`,mf=y.div`
  width: 100%;
  height: 7rem;
  border-radius: 0.25rem;
  overflow: hidden;
  background: #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: center;
  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,PS=y.button`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  border: none;
  background: #4a4a4a;
  color: #fff;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  opacity: 0;
  transition: opacity 0.2s;

  &:hover {
    background: #333333;
  }
`;function qS({file:a,previewUrl:i,onRemove:o,name:l,kind:f,mimeType:d}){const h=a?.type||d||f||"",v=typeof h=="string"?h:"",m=l||a?.name,g=hd,b=v.startsWith("image/")||v==="image"||v==="photo",S=v.startsWith("video/")||v==="video",j=v.startsWith("audio/")||v==="audio";return console.log("AttachmentChip props:",{file:a?.name,previewUrl:i,mimeType:d,type:v,isImage:b,isVideo:S,isAudio:j}),c.jsxs(BS,{children:[b&&c.jsx(mf,{children:c.jsx("img",{src:i||g,alt:m,onLoad:()=>console.log("Image loaded successfully:",i||g),onError:_=>{console.error("Image failed to load:",_.target.src),console.error("Error details:",_)}})}),S&&c.jsx(mf,{children:c.jsx("video",{src:i||g})}),j&&c.jsx(mf,{children:c.jsx("span",{style:{fontSize:"1.5rem",color:"#4a4a4a"},children:"🎵"})}),o&&c.jsx(PS,{className:"remove-btn",onClick:o,"aria-label":"remove",children:"×"})]})}const VS=jl`
  0%, 80%, 100% {
    transform: scale(0);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
`,GS=y.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 0;
`,gf=y.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: var(--50, #7a7a7a);
  animation: ${VS} 1.4s ease-in-out infinite both;

  &:nth-child(1) {
    animation-delay: -0.32s;
  }

  &:nth-child(2) {
    animation-delay: -0.16s;
  }

  &:nth-child(3) {
    animation-delay: 0s;
  }
`,YS=()=>c.jsxs(GS,{children:[c.jsx(gf,{}),c.jsx(gf,{}),c.jsx(gf,{})]}),FS="data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_528_1723)'%3e%3cpath%20d='M1%207H13'%20stroke='url(%23paint0_linear_528_1723)'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M7%201L7%2013'%20stroke='url(%23paint1_linear_528_1723)'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_528_1723'%20x1='35.95'%20y1='5.13514'%20x2='5.95642'%20y2='21.8981'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.393417'%20stop-color='%2368B8EA'/%3e%3cstop%20offset='0.764085'%20stop-color='%23688AE0'/%3e%3cstop%20offset='1'%20stop-color='%238C68E0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_528_1723'%20x1='8.86486'%20y1='35.95'%20x2='-7.89813'%20y2='5.95642'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.393417'%20stop-color='%2368B8EA'/%3e%3cstop%20offset='0.764085'%20stop-color='%23688AE0'/%3e%3cstop%20offset='1'%20stop-color='%238C68E0'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_528_1723'%3e%3crect%20width='14'%20height='14'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",XS="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='16'%20cy='16'%20r='16'%20fill='url(%23paint0_linear_528_1726)'/%3e%3cpath%20d='M9.4004%2023.4249C9.06706%2023.5582%208.7504%2023.5289%208.4504%2023.3369C8.1504%2023.1449%208.0004%2022.8659%208.0004%2022.4999V17.9999L16.0004%2015.9999L8.0004%2013.9999V9.49989C8.0004%209.13323%208.1504%208.85423%208.4504%208.66289C8.7504%208.47156%209.06706%208.44222%209.4004%208.57489L24.8004%2015.0749C25.2171%2015.2582%2025.4254%2015.5666%2025.4254%2015.9999C25.4254%2016.4332%2025.2171%2016.7416%2024.8004%2016.9249L9.4004%2023.4249Z'%20fill='white'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_528_1726'%20x1='93.2'%20y1='-59.6757'%20x2='-11.5386'%20y2='-54.7976'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.393417'%20stop-color='%2368B8EA'/%3e%3cstop%20offset='0.764085'%20stop-color='%23688AE0'/%3e%3cstop%20offset='1'%20stop-color='%238C68E0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",ZS=y.div`
  background: #ffffff;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`,KS=y.div`
  max-width: 1280px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding-top: 4rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`,QS=y.div`
  position: fixed;
  top: calc(4rem + 1.44rem);
  left: 1.44rem;
  display: flex;
  width: 9.75rem;
  padding: 1.25rem 0;
  flex-direction: column;
  align-items: center;
  gap: 0.8125rem;
  flex-shrink: 0;
  border-radius: 0.9375rem;
  background: var(--Main-bk, #f8faff);
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.09);
  z-index: 10;
`,IS=y.div`
  color: var(--seconday, #688ae0);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
`,JS=y.div`
  display: flex;
  width: 7.5rem;
  height: 2.75rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;y.div`
  text-align: center;
  padding: 0.625rem 2.6875rem;
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: #b4b4b4;
  line-height: 1.5rem;
`;const WS=y.div`
  flex: 1;
  padding: 0 12.5rem;
  padding-top: 1.44rem;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  scroll-behavior: smooth;
`,e6=y.div`
  display: flex;
  gap: 0.9375rem;
  position: relative;

  &.user {
    justify-content: flex-end;
  }

  &.ai {
    justify-content: flex-start;
    align-items: flex-start;
  }
`,t6=y.div`
  display: flex;
  gap: 0.5rem;

  &.user {
    align-items: flex-end;
  }

  &.ai {
    align-items: flex-start;
  }
`,n6=y.div`
  max-width: 25rem;
  padding: 1.25rem;
  border-radius: 1.25rem;
  font-family: "Pretendard", sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem;
  white-space: pre-line;
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word;
  box-sizing: border-box;

  &.user {
    background: linear-gradient(
      267deg,
      var(--Color, #68b8ea) -99.74%,
      #688ae0 37.78%,
      #8c68e0 177.79%
    );
    color: #fff;
    border-radius: 1.25rem;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  }

  &.ai {
    background: #fbfbfb;
    color: #313131;
    border: none;
    padding: 1.25rem;
    position: relative;
    border-radius: 1.25rem;
  }
`,a6=y.div`
  width: 1.8125rem;
  height: 1.8125rem;
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-right: 1rem;
`,r6=y.div`
  font-family: "Pretendard", sans-serif;
  font-size: 0.625rem;
  color: #acacac;
  line-height: 0.8125rem;
  flex-shrink: 0;
  margin-bottom: 0.5rem;
  white-space: nowrap;
`,i6=y.div`
  padding: 0 12.5rem 2rem 12.5rem;
  display: flex;
  justify-content: center;
  align-items: flex-end; /* 하단 정렬로 라인 일치 */
  gap: 1rem;
`,l6=y.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 60rem;
  padding: 0.9375rem 1.25rem 0 1.25rem; /* 하단 패딩 제거 */
  flex-direction: column;
  align-items: stretch;
  border-radius: 1.25rem;
  border: 2px solid transparent;
  background: linear-gradient(#fff, #fff) padding-box,
    linear-gradient(
        267deg,
        var(--Color, #68b8ea) -67.73%,
        #688ae0 48.44%,
        #8c68e0 122.38%
      )
      border-box;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);
`,o6=y.textarea`
  width: 100%;
  align-self: stretch;
  box-sizing: border-box;
  background: transparent;
  border: none;
  padding: 0; /* 한 줄 기준 컴팩트 */
  margin: 0;
  color: #313131;
  font-family: "Pretendard", sans-serif;
  font-size: 1rem;
  line-height: 1.25rem;
  height: 1.25rem; /* 기본 1줄 높이 */
  min-height: 1.25rem; /* 최소 1줄 */
  outline: none;
  resize: none; /* 수동 리사이즈 금지 */
  max-height: calc(1.25rem * 4); /* 최대 4줄 */
  overflow-y: auto;

  &::placeholder {
    color: #acacac;
  }
`,s6=y.div`
  display: flex;
  margin-top: 0.625rem;
  margin-bottom: 0.625rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  width: 100%;
`,c6=y.button`
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    opacity: 0.9;
  }
`,u6=y.div`
  width: 0.875rem;
  height: 0.875rem;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 0.875rem;
    height: 0.875rem;
  }

  &:hover {
    opacity: 0.9;
  }
`,f6=y.button`
  height: 2.75rem;
  width: 7rem;
  border-radius: 0.5rem;
  border: 1px solid var(--seconday, #688ae0);
  background: linear-gradient(
    267deg,
    var(--Color, #68b8ea) -99.74%,
    #688ae0 37.78%,
    #8c68e0 177.79%
  );
  font-family: "Pretendard", sans-serif;
  font-size: 0.9375rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  line-height: 1.125rem;
`,d6=y.input`
  display: none;
`,h6=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0 12.5rem 0 12.5rem; /* 하단 여백 제거로 겹침 방지 */
`,m6=y.div`
  padding: 0 0 0 0;
  height: 16rem; /* 최대: InputArea 최대 + AttachmentsBar 1줄 보장 (여유 증가) */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* 내용은 하단 정렬 */
  gap: 0.5rem;
  overflow: hidden; /* 내부 스クロ롤 금지, 초과분은 잘림 */
`;y.div`
  flex: 1;
`;y.button`
  border: none;
  background: #4a4a4a;
  color: #fff;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.625rem;
`;y.div`
  width: 10rem; /* 고정 크기 */
  height: 6rem; /* 고정 크기 */
  border-radius: 0.25rem;
  overflow: hidden;
  background: #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: center;
  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;y.video`
  width: 10rem; /* 이미지 썸네일과 동일 */
  height: 6rem; /* 이미지 썸네일과 동일 */
  border-radius: 0.25rem;
  background: #000;
  object-fit: cover;
`;y.audio`
  width: 12rem;
  height: 2rem;
`;const g6=y.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
`,p6=y.img`
  width: 20rem; /* 고정 크기 */
  height: 12rem; /* 고정 크기 */
  border-radius: 0.5rem;
  object-fit: cover;
  background: #e9e9e9;
  display: block;
`,y6=y.video`
  width: 20rem; /* 메시지 이미지와 동일 */
  height: 12rem; /* 메시지 이미지와 동일 */
  border-radius: 0.5rem;
  background: #000;
  object-fit: cover;
`,v6=y.audio`
  width: 20rem;
  height: 2rem;
`;function x6({initialChatData:a}){const i=()=>{try{const B=localStorage.getItem(`chat_messages_${a?.serverResponse?.chat_session_id||1}`);return B?JSON.parse(B):null}catch(B){return console.error("localStorage에서 메시지 복원 실패:",B),null}},[o,l]=w.useState(()=>{const B=i();if(B&&B.length>0)return B;if(a){const{userMessage:V,serverResponse:Y}=a,ue=[{id:1,type:"user",content:V,time:new Date().toLocaleTimeString("ko-KR",{hour:"numeric",minute:"2-digit",hour12:!0})}];return Y&&ue.push({id:2,type:"ai",content:Y.answer,time:Y.time}),ue}return[]}),[f,d]=w.useState(""),[h,v]=w.useState(!1),[m,g]=w.useState(!1),[b,S]=w.useState(!1),[j,_]=w.useState(null),[C,E]=w.useState(!1),[A,D]=w.useState(""),[H,z]=w.useState([]),[K,Z]=w.useState([]),[ee,P]=w.useState(!1),I=w.useRef(null),ne=w.useRef(null),ce=w.useRef(null),pe=w.useRef(null),se=w.useRef(null),xe=10,be=300*1024*1024,re=a?.serverResponse?.chat_session_id||1,O=a?.serverResponse?.record_id||null;w.useEffect(()=>{a&&a.isLoading===!1&&l(B=>{const V=[...B],Y=V.findIndex(ue=>ue.type==="ai"&&ue.content==="응답 중입니다");return Y!==-1&&(V[Y]={...V[Y],content:a.serverResponse.answer,time:a.serverResponse.time}),V})},[a]),w.useEffect(()=>{const B=V=>{const Y=V?.detail||{},ue=Y.answer,Ce=Y.time||"";ue&&(l(he=>{const fe=[...he],ge=fe.findIndex(qe=>qe.type==="ai"&&qe.content==="응답 중입니다");return ge!==-1?(fe[ge]={...fe[ge],content:ue,time:Ce},fe):[...fe,{id:fe.length+1,type:"ai",content:ue,time:Ce}]}),v(!1))};return window.addEventListener("chat_server_response",B),()=>window.removeEventListener("chat_server_response",B)},[]),w.useEffect(()=>{const B=()=>{try{const V=a?.serverResponse?.chat_session_id||1;localStorage.setItem(`chat_messages_${V}`,JSON.stringify(o))}catch(V){console.error("페이지 떠날 때 메시지 저장 실패:",V)}};return window.addEventListener("beforeunload",B),()=>{window.removeEventListener("beforeunload",B)}},[o,a?.serverResponse?.chat_session_id]),w.useEffect(()=>{try{const V=a?.serverResponse?.chat_session_id||1;localStorage.setItem(`chat_messages_${V}`,JSON.stringify(o))}catch(V){console.error("localStorage에 메시지 저장 실패:",V)}const B=[];o.forEach(V=>{V.type==="user"&&V.attachments&&V.attachments.length>0&&V.attachments.forEach(Y=>{B.push({id:Y.id,name:Y.name,type:Y.type,previewUrl:Y.previewUrl})})}),Z(B),ce.current&&(ce.current.scrollTop=ce.current.scrollHeight)},[o,a?.serverResponse?.chat_session_id]),w.useEffect(()=>{if(!pe.current)return;const B=pe.current;B.style.height="auto";const V=window.getComputedStyle(B),Y=parseFloat(V.lineHeight)||20,ue=parseFloat(V.paddingTop)||0,Ce=parseFloat(V.paddingBottom)||0,he=Y+ue+Ce,fe=Y*4+ue+Ce,ge=Math.max(he,Math.min(B.scrollHeight,fe));B.style.height=`${ge}px`},[f]),w.useEffect(()=>()=>{se.current&&(clearTimeout(se.current),se.current=null)},[]);const J=()=>{ne.current&&ne.current.click()},le=async B=>{const V=Array.from(B.target.files||[]);if(V.length===0)return;const Y=/^(image|audio|video)\//,ue=H.length,Ce=Math.max(0,xe-ue),he=V.filter(Qe=>Y.test(Qe.type)).slice(0,Ce),fe=H.reduce((Qe,_e)=>Qe+(_e.size||0),0),ge=[];let qe=fe;for(const Qe of he)if(qe+Qe.size<=be)ge.push(Qe),qe+=Qe.size;else{alert(`파일 크기 제한을 초과했습니다. (최대 ${be/(1024*1024)}MB)`);break}if(ge.length===0){B.target.value="";return}P(!0);const an=`${`records/${j?.record_id||O}`}/evidence`,Ye=[];for(const Qe of ge)try{const _e=await US.uploadAndGetPreview({prefix:an,file:Qe,readMinutes:10});Ye.push({id:`${Date.now()}_${Qe.name}`,filename:_e.filename,type:_e.type,s3Key:_e.s3Key,previewUrl:_e.previewUrl,mimeType:_e.mimeType,size:_e.size,file:Qe})}catch(_e){console.error("첨부 업로드 실패",_e)}Ye.length>0&&z(Qe=>[...Qe,...Ye]),P(!1),B.target.value=""},de=B=>{z(V=>V.filter(Y=>Y.id!==B))},R=()=>{z(B=>(B.forEach(V=>V.previewUrl&&URL.revokeObjectURL(V.previewUrl)),[]))},q=async()=>{if(!m){g(!0);try{const B=await et.endChat(re,O);if(B.isSuccess)_(B.data),S(!0);else throw new Error(B.message||"채팅 종료 실패")}catch(B){console.error("채팅 종료 중 오류:",B),alert("채팅 종료에 실패했습니다. 다시 시도해주세요.")}finally{g(!1)}}},te=B=>{_(B),S(!0),g(!1)},ae=()=>{S(!1),_(null)},ie=async()=>{if(h)return;const B=f.trim();if(!B)return;v(!0);const V={id:o.length+1,type:"user",content:B,time:new Date().toLocaleTimeString("ko-KR",{hour:"numeric",minute:"2-digit",hour12:!0}),attachments:H.map(Ce=>({id:Ce.id,name:Ce.filename,type:Ce.mimeType,previewUrl:Ce.previewUrl}))},Y={id:o.length+2,type:"ai",content:"응답 중입니다",time:""};if(l(Ce=>[...Ce,V,Y]),H.length>0){const Ce=H.map(he=>({id:he.id,name:he.filename,type:he.mimeType,previewUrl:he.previewUrl,s3Key:he.s3Key,size:he.size}));Z(he=>[...he,...Ce])}d("");const ue=H.length>0?H.map(Ce=>({type:Ce.type,filename:Ce.filename,s3Key:Ce.s3Key})):null;try{console.log("ChatPage API 호출 시작:",{chatSessionId:re,trimmed:B,attachments:H.length,evidences:ue?ue.length:0});const Ce=new AbortController;I.current=Ce,console.log("ChatPage API 호출 실행:",{chatSessionId:re,text:B,evidences:ue});const he=await et.sendMessage(re,B,ue);if(he&&he.isSuccess&&he.data)l(fe=>{const ge=[...fe],qe=ge.findIndex(ut=>ut.type==="ai"&&ut.content==="응답 중입니다");return qe!==-1&&(ge[qe]={...ge[qe],content:he.data.answer,time:he.data.message_time||"",date:he.data.message_date||new Date().toISOString().split("T")[0]}),ge});else throw new Error("서버 응답이 올바르지 않습니다.");d(""),R()}catch(Ce){console.error("ChatPage API 호출 실패:",Ce),console.log("API 호출 실패 상세:",{chatSessionId:re,trimmed:B,evidences:ue?ue.length:0}),D("메시지 전송에 실패했습니다. 다시 시도해주세요."),E(!0),l(he=>{const fe=[...he],ge=fe.findIndex(qe=>qe.type==="ai"&&qe.content==="응답 중입니다");return ge!==-1&&fe.splice(ge,1),fe})}finally{v(!1),I.current=null}},Se=B=>{B.key==="Enter"&&!B.shiftKey&&(B.preventDefault(),ie())};return c.jsxs(ZS,{children:[c.jsx(jt,{currentPage:"chat"}),c.jsxs(QS,{children:[c.jsx(f6,{onClick:q,disabled:m,children:m?"기록 완료 중...":"기록 마치기"}),c.jsx(JS,{children:c.jsx(IS,{children:new Date().toLocaleDateString("ko-KR")})})]}),c.jsxs(KS,{children:[c.jsx(WS,{ref:ce,children:o.map(B=>c.jsx(e6,{className:B.type,children:c.jsxs(t6,{className:B.type,children:[B.type==="ai"&&c.jsx(a6,{children:c.jsx("img",{src:hd,alt:"AI 아이콘",style:{width:"1.8125rem",height:"1.8125rem"}})}),B.type==="user"&&B.time&&c.jsx(r6,{children:B.time}),c.jsxs(n6,{className:B.type,children:[B.content==="응답 중입니다"?c.jsx(YS,{}):B.content,B.type==="user"&&B.attachments&&B.attachments.length>0&&c.jsx(g6,{children:B.attachments.map(V=>c.jsxs("div",{children:[V.type&&V.type.startsWith("image/")&&c.jsx(p6,{src:V.previewUrl,alt:V.name}),V.type&&V.type.startsWith("video/")&&c.jsx(y6,{src:V.previewUrl,controls:!0}),V.type&&V.type.startsWith("audio/")&&c.jsx(v6,{src:V.previewUrl,controls:!0})]},V.id))})]})]})},B.id))}),c.jsxs(m6,{children:[H.length>0&&c.jsx(h6,{children:H.map(B=>c.jsx(qS,{file:B.file,previewUrl:B.previewUrl,mimeType:B.mimeType,name:B.filename,onRemove:()=>de(B.id)},B.id))}),c.jsx(i6,{children:c.jsxs(l6,{children:[c.jsx(o6,{ref:pe,placeholder:"",value:f,onChange:B=>d(B.target.value),onKeyDown:Se,disabled:h,rows:1}),c.jsxs(s6,{children:[c.jsx(u6,{onClick:J,children:c.jsx("img",{src:FS,alt:"파일 첨부"})}),c.jsx(c6,{onClick:ie,disabled:h,children:c.jsx("img",{src:XS,alt:"전송"})})]}),c.jsx(d6,{ref:ne,type:"file",accept:"image/*,audio/*,video/*",multiple:!0,onChange:le})]})})]})]}),m&&!j&&c.jsx(HS,{chatSessionId:re,onDone:te}),ee&&c.jsx(Cs,{titleText:"데이터를 저장하고 있어요",subText:"잠시 한숨 돌리고 계세요!",autoCloseMs:3e3,onDone:()=>P(!1),showAutoClose:!1}),b&&j&&(console.log("ChatPage - DetailModifyModal 호출:",{finishResponse:j,attachments:H,attachmentsLength:H.length,messageAttachments:K,messageAttachmentsLength:K.length}),c.jsx(jS,{data:j,attachments:H,messageAttachments:K,onClose:ae})),c.jsx(aa,{isOpen:C,onClose:()=>E(!1),title:"작업 실패",message:A})]})}const b6=y.div`
  display: flex;
  width: 100%;
  max-width: 55rem;
  align-items: center;
  background: linear-gradient(
    270deg,
    var(--Color, #68b8ea) -39.67%,
    #688ae0 74.83%,
    #8c68e0 128.22%
  );
  margin: 0 auto;
  margin-bottom: 1.13rem;
  height: 2.5rem;
  border-radius: 0.625rem;
  box-sizing: border-box;
  overflow: hidden;
`,Za=y.div`
  width: ${a=>a.$width||"1.25rem"};
  flex-shrink: 0;
  box-sizing: border-box;
`,w6=y.div`
  display: flex;
  width: 2.1875rem;
  height: 2.5rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
  box-sizing: border-box;
`,S6=y.div`
  display: flex;
  width: 14.375rem;
  height: 2.5rem;
  padding: 0 1.25rem 0 0;
  align-items: center;
  color: #fff;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
  flex-shrink: 0;
  box-sizing: border-box;
`,C6=y.div`
  display: flex;
  width: 7.5rem;
  height: 2.5rem;
  align-items: center;
  color: #fff;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
  flex-shrink: 0;
  box-sizing: border-box;
`,j6=y.div`
  display: flex;
  width: 11.25rem;
  height: 2.5rem;
  padding: 0 1.25rem 0 0;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
  flex-shrink: 0;
  box-sizing: border-box;
`,E6=y.div`
  display: flex;
  width: 7.5rem;
  height: 2.5rem;
  padding: 0 1.25rem 0 0;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
  flex-shrink: 0;
  box-sizing: border-box;
`,T6=y.div`
  display: flex;
  width: 1.5rem;
  height: 2.5rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  box-sizing: border-box;
`;function A6(){return c.jsxs(b6,{children:[c.jsx(Za,{$width:"1.25rem"}),c.jsx(w6,{children:"순"}),c.jsx(Za,{$width:"3.12rem"}),c.jsx(S6,{children:"사건 제목"}),c.jsx(Za,{$width:"0.62rem"}),c.jsx(C6,{children:"사건 날짜"}),c.jsx(Za,{$width:"0.62rem"}),c.jsx(j6,{children:"장소"}),c.jsx(Za,{$width:"0.62rem"}),c.jsx(E6,{children:"폴더명"}),c.jsx(Za,{$width:"3.12rem"}),c.jsx(T6,{}),c.jsx(Za,{$width:"1.25rem"})]})}const l2="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='12'%20cy='6'%20r='2'%20fill='%237A7A7A'/%3e%3ccircle%20cx='12'%20cy='12'%20r='2'%20fill='%237A7A7A'/%3e%3ccircle%20cx='12'%20cy='18'%20r='2'%20fill='%237A7A7A'/%3e%3c/svg%3e",o2="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.99992%2012.9791C9.88881%2012.9791%209.78464%2012.9619%209.68742%2012.9274C9.5902%2012.893%209.49992%2012.8338%209.41659%2012.7499L6.41658%209.74992C6.24992%209.58325%206.16992%209.38881%206.17659%209.16659C6.18325%208.94437%206.26325%208.74992%206.41658%208.58325C6.58325%208.41659%206.78131%208.32992%207.01075%208.32325C7.2402%208.31659%207.43797%208.39631%207.60408%208.56242L9.16658%2010.1249V4.16659C9.16658%203.93048%209.24659%203.7327%209.40659%203.57325C9.56659%203.41381%209.76436%203.33381%209.99992%203.33325C10.2355%203.3327%2010.4335%203.4127%2010.5941%203.57325C10.7546%203.73381%2010.8344%203.93159%2010.8333%204.16659V10.1249L12.3958%208.56242C12.5624%208.39575%2012.7605%208.31575%2012.9899%208.32242C13.2194%208.32909%2013.4171%208.41603%2013.5833%208.58325C13.736%208.74992%2013.816%208.94437%2013.8233%209.16659C13.8305%209.38881%2013.7505%209.58325%2013.5833%209.74992L10.5833%2012.7499C10.4999%2012.8333%2010.4096%2012.8924%2010.3124%2012.9274C10.2152%2012.9624%2010.111%2012.9796%209.99992%2012.9791ZM4.99992%2016.6666C4.54159%2016.6666%204.14936%2016.5035%203.82325%2016.1774C3.49714%2015.8513%203.33381%2015.4588%203.33325%2014.9999V13.3333C3.33325%2013.0971%203.41325%2012.8994%203.57325%2012.7399C3.73325%2012.5805%203.93103%2012.5005%204.16659%2012.4999C4.40214%2012.4994%204.6002%2012.5794%204.76075%2012.7399C4.92131%2012.9005%205.00103%2013.0983%204.99992%2013.3333V14.9999H14.9999V13.3333C14.9999%2013.0971%2015.0799%2012.8994%2015.2399%2012.7399C15.3999%2012.5805%2015.5977%2012.5005%2015.8333%2012.4999C16.0688%2012.4994%2016.2669%2012.5794%2016.4274%2012.7399C16.588%2012.9005%2016.6677%2013.0983%2016.6666%2013.3333V14.9999C16.6666%2015.4583%2016.5035%2015.8508%2016.1774%2016.1774C15.8513%2016.5041%2015.4588%2016.6671%2014.9999%2016.6666H4.99992Z'%20fill='%237A7A7A'/%3e%3c/svg%3e",R6="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.5%2017.5V13.9583L13.5%202.97917C13.6667%202.82639%2013.8508%202.70833%2014.0525%202.625C14.2542%202.54167%2014.4658%202.5%2014.6875%202.5C14.9092%202.5%2015.1244%202.54167%2015.3333%202.625C15.5422%202.70833%2015.7228%202.83333%2015.875%203L17.0208%204.16667C17.1875%204.31944%2017.3092%204.5%2017.3858%204.70833C17.4625%204.91667%2017.5006%205.125%2017.5%205.33333C17.5%205.55556%2017.4619%205.7675%2017.3858%205.96917C17.3097%206.17083%2017.1881%206.35472%2017.0208%206.52083L6.04167%2017.5H2.5ZM14.6667%206.5L15.8333%205.33333L14.6667%204.16667L13.5%205.33333L14.6667%206.5Z'%20fill='%237A7A7A'/%3e%3c/svg%3e",_6="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.33341%2016.6666C2.87508%2016.6666%202.48286%2016.5035%202.15675%2016.1774C1.83064%2015.8513%201.6673%2015.4588%201.66675%2014.9999V4.99992C1.66675%204.54159%201.83008%204.14936%202.15675%203.82325C2.48341%203.49714%202.87564%203.33381%203.33341%203.33325H8.33341L10.0001%204.99992H16.6667C17.1251%204.99992%2017.5176%205.16325%2017.8442%205.48992C18.1709%205.81659%2018.334%206.20881%2018.3334%206.66659V14.9999C18.3334%2015.4583%2018.1704%2015.8508%2017.8442%2016.1774C17.5181%2016.5041%2017.1256%2016.6671%2016.6667%2016.6666H3.33341Z'%20fill='%237A7A7A'/%3e%3c/svg%3e",M6=y.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`,O6=y.div`
  background: #ffffff;
  border-radius: 1.25rem;
  padding: 3.125rem;
  width: 90%;
  max-width: 22rem;
  display: flex;
  flex-direction: column;
  gap: 3.125rem;
  box-shadow: 0 0.25rem 1.875rem 0 rgba(0, 0, 0, 0.08);
`,D6=y.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  align-items: center;
  text-align: center;
`,z6=y.h2`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  margin: 0;
`,k6=y.p`
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  margin: 0;
`,L6=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.875rem;
  padding: 0.5625rem 0;
  border-radius: 0.625rem;
  min-height: 3rem;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  max-width: 100%;
  text-align: center;
`,N6=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.125rem 0.625rem;
  border-radius: 1.875rem;
  height: 1.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({selected:a})=>a?`
        background: var(--70, #4a4a4a);
        color: var(--1, #f2f2f2);
      `:`
        background: var(--1, #f2f2f2);
        color: var(--50, #7a7a7a);
        border: 1px solid var(--5, #e9e9e9);
      `}

  &:hover {
    opacity: 0.8;
  }
`,$6=y.div`
  display: flex;
  gap: 0.9375rem;
  justify-content: center;
`;function s2({isOpen:a,onClose:i,onConfirm:o,onSuccess:l,currentFolder:f,recordId:d,recordData:h}){const[v,m]=w.useState(f||""),[g,b]=w.useState(null),[S,j]=w.useState([]),[_,C]=w.useState(!1),[E,A]=w.useState(!1),[D,H]=w.useState("");w.useEffect(()=>{a&&z()},[a]),w.useEffect(()=>{m(f||"")},[f,a]);const z=async()=>{C(!0);try{const P=await et.getDrawersList();P&&P.data&&P.data.drawers&&Array.isArray(P.data.drawers)?(console.log("API 응답 폴더:",P.data.drawers),j(P.data.drawers)):j([])}catch(P){console.log("API 호출 실패, 목업 데이터 사용:",P),j({data:{drawers:[{drawer_id:1,name:"상도동 커피 폭언",record_count:3,create_at:"2025.08.16",update_at:"2025.08.20"},{drawer_id:2,name:"회기동 함박",record_count:8,create_at:"2025.08.06",update_at:"2025.08.19"},{drawer_id:3,name:"동방에서 벌어진 일",record_count:5,create_at:"2025.08.10",update_at:"2025.08.18"}]}}.data.drawers)}finally{C(!1)}},K=P=>{m(P.name),b(P.drawer_id)},Z=async()=>{if(v&&v!==f&&g)try{const P=await et.updateRecordDrawer(d,g);if(P.isSuccess)o(v,g),i(),l&&l(v);else throw new Error(P.message||"폴더 변경에 실패했습니다.")}catch(P){console.error("폴더 변경 중 오류:",P),P.name==="TypeError"&&P.message.includes("fetch")?(console.log("네트워크 오류로 인해 목업 데이터로 처리합니다."),o(v,g),i(),l&&l(v)):(P.message.includes("폴더 변경에 실패했습니다")?H(P.message):H("폴더 변경 중 오류가 발생했습니다. 다시 시도해주세요."),A(!0))}},ee=()=>{i()};return a?c.jsxs(M6,{onClick:ee,"data-modal":"open",children:[c.jsxs(O6,{onClick:P=>P.stopPropagation(),children:[c.jsxs(D6,{children:[c.jsx(z6,{children:"폴더 변경"}),c.jsx(k6,{children:"변경할 폴더를 선택하세요"})]}),c.jsxs(L6,{children:[console.log("렌더링 상태:",{isLoading:_,availableFolders:S.length}),_?c.jsx("div",{children:"폴더 목록을 불러오는 중..."}):S.length>0?S.map(P=>c.jsx(N6,{selected:v===P.name,onClick:()=>K(P),children:P.name},P.drawer_id)):c.jsx("div",{children:"사용 가능한 폴더가 없습니다."})]}),c.jsxs($6,{children:[c.jsx(_t,{variant:"secondary",onClick:ee,children:"취소"}),c.jsx(_t,{variant:"primary",onClick:Z,disabled:!v||v===f,children:"변경"})]})]}),c.jsx(aa,{isOpen:E,onClose:()=>A(!1),title:"폴더 변경 실패",message:D})]}):null}const U6=y.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`,H6=y.div`
  background: #ffffff;
  border-radius: 1.25rem;
  padding: 3.125rem;
  width: 90%;
  max-width: 34.6875rem;
  display: flex;
  flex-direction: column;
  gap: 3.125rem;
  box-shadow: 0 0.25rem 1.875rem 0 rgba(0, 0, 0, 0.08);
`,B6=y.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  align-items: center;
  text-align: center;
`,P6=y.h2`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  margin: 0;
`,q6=y.p`
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  margin: 0;
`,V6=y.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  width: 100%;
  align-items: center;
`,G6=y.input`
  width: 34.6875rem;
  padding: 0.625rem 0.625rem;
  border-radius: 0.625rem;
  border: 1px solid #ddd;
  background: #fff;
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  outline: none;

  &:focus {
    border: 1px solid #68b8ea;
    background: #e6f6ff;
  }

  &::placeholder {
    color: #7a7a7a;
  }
`,Y6=y.div`
  display: flex;
  gap: 0.9375rem;
  justify-content: center;
`;function c2({isOpen:a,onClose:i,onConfirm:o,onSuccess:l,currentTitle:f,recordData:d}){const[h,v]=w.useState(f||""),[m,g]=w.useState(!1),[b,S]=w.useState("");w.useEffect(()=>{v(f||"")},[f,a]);const j=async()=>{if(h.trim()&&h.trim()!==f)try{const A=await et.updateRecordTitle(d.record_id,h.trim());if(A.isSuccess)o(h.trim()),i(),l&&l(h.trim());else throw new Error(A.message||"제목 수정에 실패했습니다.")}catch(A){console.error("제목 수정 중 오류:",A),A.name==="TypeError"&&A.message.includes("fetch")?(console.log("네트워크 오류로 인해 목업 데이터로 처리합니다."),o(h.trim()),i(),l&&l(h.trim())):(A.message.includes("제목 수정에 실패했습니다")?S(A.message):S("제목 수정 중 오류가 발생했습니다. 다시 시도해주세요."),g(!0))}},_=()=>{i()},C=h.trim()!==f,E=h.trim().length>0;return a?c.jsxs(U6,{onClick:_,"data-modal":"open",children:[c.jsxs(H6,{onClick:A=>A.stopPropagation(),children:[c.jsxs(B6,{children:[c.jsx(P6,{children:"제목 수정"}),c.jsx(q6,{children:"새로운 제목을 입력해주세요"})]}),c.jsx(V6,{children:c.jsx(G6,{value:h,onChange:A=>v(A.target.value),placeholder:"제목을 입력하세요",autoFocus:!0})}),c.jsxs(Y6,{children:[c.jsx(_t,{variant:"secondary",onClick:_,children:"취소"}),c.jsx(_t,{variant:"primary",onClick:j,disabled:!E||!C,children:"수정"})]})]}),c.jsx(aa,{isOpen:m,onClose:()=>g(!1),title:"제목 수정 실패",message:b})]}):null}const F6=y.div`
  display: flex;
  width: 100%;
  max-width: 55rem;
  align-items: center;
  border-radius: 0.625rem;
  border: 1px solid var(--main-stroke, #bec8e3);
  background: var(--Main-bk, #f8faff);
  margin: 0 auto;
  margin-bottom: 0.5rem;
  height: 3.75rem;
  position: relative;
  overflow: visible;
  box-sizing: border-box;
  z-index: 1;
`,Ka=y.div`
  width: ${a=>a.$width||"1.25rem"};
  flex-shrink: 0;
  box-sizing: border-box;
`,X6=y.div`
  display: flex;
  width: 2.1875rem;
  height: 3.75rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: #707070;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  box-sizing: border-box;
`,Z6=y.div`
  display: flex;
  width: 14.375rem;
  height: 3.75rem;
  padding: 0 1.25rem 0 0;
  align-items: center;
  flex-shrink: 0;
  box-sizing: border-box;
`,K6=y.div`
  color: #313131;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,Q6=y.div`
  display: flex;
  width: 7.5rem;
  height: 3.75rem;
  align-items: center;
  color: #313131;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  flex-shrink: 0;
  box-sizing: border-box;
`,I6=y.div`
  display: flex;
  width: 11.25rem;
  height: 3.75rem;
  padding: 0 1.25rem 0 0;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  box-sizing: border-box;
`,J6=y.div`
  color: #313131;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,W6=y.div`
  display: flex;
  width: 7.5rem;
  height: 3.75rem;
  padding: 0 1.25rem 0 0;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  box-sizing: border-box;
`,e7=y.div`
  color: #313131;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,t7=y.button`
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-shrink: 0;
  z-index: 1;
  min-width: 1.5rem;
  max-width: 1.5rem;
`,n7=y.div`
  position: fixed;
  top: ${a=>a.$top}px;
  right: ${a=>a.$right}px;
  display: inline-flex;
  padding: 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.9375rem;
  border-radius: 0.625rem;
  background: #ffffff;
  box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.19);
  z-index: 99999;
  backdrop-filter: blur(0);
  isolation: isolate;
  min-width: 9.0625rem;
`,pf=y.div`
  display: flex;
  width: 9.0625rem;
  align-items: center;
  gap: 0.625rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(49, 49, 49, 0.1);
  }
`,yf=y.img`
  width: 1.25rem;
  height: 1.25rem;
`,vf=y.span`
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.125rem;
`;function a7({id:a,order:i,title:o,date:l,location:f,folder:d,recordData:h,onRowClick:v,onTitleUpdate:m,onFolderUpdate:g}){const[b,S]=w.useState(!1),[j,_]=w.useState(!1),[C,E]=w.useState(!1),[A,D]=w.useState(!1),[H,z]=w.useState(""),[K,Z]=w.useState({top:0,right:0}),ee=w.useRef(null),P=w.useRef(null);w.useEffect(()=>{const re=J=>{ee.current&&!ee.current.contains(J.target)&&!P.current.contains(J.target)&&S(!1)},O=()=>{if(b&&P.current){const J=P.current.getBoundingClientRect(),le=145,de=120;let R=J.bottom+window.scrollY+8,q=window.innerWidth-J.right;J.bottom+de>window.innerHeight&&(R=J.top+window.scrollY-de-8),J.right-le<0&&(q=window.innerWidth-J.left),Z({top:R,right:q})}};return b&&(document.addEventListener("mousedown",re),window.addEventListener("scroll",O),window.addEventListener("resize",O)),()=>{document.removeEventListener("mousedown",re),window.removeEventListener("scroll",O),window.removeEventListener("resize",O)}},[b]);const I=()=>{if(!b&&P.current){const re=P.current.getBoundingClientRect(),O=145,J=120;let le=re.bottom+window.scrollY+8,de=window.innerWidth-re.right;re.bottom+J>window.innerHeight&&(le=re.top+window.scrollY-J-8),re.right-O<0&&(de=window.innerWidth-re.left),Z({top:le,right:de})}S(!b)},ne=re=>{console.log(`${re} 클릭`),S(!1),re==="다운로드"?window.navigation&&window.navigation.navigateToExtractPdf&&window.navigation.navigateToExtractPdf(a,o):re==="폴더 변경"?_(!0):re==="제목 수정"&&E(!0)};w.useEffect(()=>{(j||C)&&S(!1)},[j,C]);const ce=(re,O)=>{console.log(`폴더 변경: ${d} → ${re}`),console.log(`변경할 레코드 ID: ${a}`),console.log(`새로운 폴더 ID: ${O}`),g&&g(a,re,O)},pe=re=>{console.log(`제목 변경: ${o} → ${re}`),console.log(`변경할 레코드 ID: ${a}`),m&&m(a,re)},se=re=>{z(`"${re}" 폴더로 이동되었습니다.`),D(!0)},xe=re=>{z(`"${re}"로 제목이 수정되었습니다.`),D(!0)},be=re=>{re.target.closest("button")||re.target.closest('[role="button"]')||v&&v()};return c.jsxs(F6,{onClick:be,style:{cursor:"pointer",zIndex:b?50:1},children:[c.jsx(Ka,{$width:"1.25rem"}),c.jsx(X6,{children:i}),c.jsx(Ka,{$width:"3.12rem"}),c.jsx(Z6,{children:c.jsx(K6,{children:o})}),c.jsx(Ka,{$width:"0.62rem"}),c.jsx(Q6,{children:l}),c.jsx(Ka,{$width:"0.62rem"}),c.jsx(I6,{children:c.jsx(J6,{children:f})}),c.jsx(Ka,{$width:"0.62rem"}),c.jsx(W6,{children:c.jsx(e7,{children:d})}),c.jsx(Ka,{$width:"3.12rem"}),c.jsxs(t7,{ref:P,onClick:I,style:{zIndex:b?51:1},children:[c.jsx("img",{src:l2,alt:"설정",style:{width:"1.5rem",height:"1.5rem"}}),b&&c.jsxs(n7,{ref:ee,$top:K.top,$right:K.right,children:[c.jsxs(pf,{onClick:()=>ne("다운로드"),children:[c.jsx(yf,{src:o2,alt:"다운로드"}),c.jsx(vf,{children:"다운로드"})]}),c.jsxs(pf,{onClick:()=>ne("제목 수정"),children:[c.jsx(yf,{src:R6,alt:"제목 수정"}),c.jsx(vf,{children:"제목 수정"})]}),c.jsxs(pf,{onClick:()=>ne("폴더 변경"),children:[c.jsx(yf,{src:_6,alt:"폴더 변경"}),c.jsx(vf,{children:"폴더 변경"})]})]})]}),c.jsx(Ka,{$width:"1.25rem"}),j&&Jo.createPortal(c.jsx(s2,{isOpen:j,onClose:()=>_(!1),onConfirm:ce,onSuccess:se,currentFolder:d,recordId:a,recordData:h}),document.body),C&&Jo.createPortal(c.jsx(c2,{isOpen:C,onClose:()=>E(!1),onConfirm:pe,onSuccess:xe,currentTitle:o,recordData:h}),document.body),A&&Jo.createPortal(c.jsx(oi,{isOpen:A,onClose:()=>D(!1),title:"작업 완료",message:H}),document.body)]})}const r7=y.div`
  flex: 1;
  overflow-y: auto;
`,i7=y.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
`;function l7({onNavigateToRecordDetail:a}){const[i,o]=w.useState([]),[l,f]=w.useState(!1),d=(m,g)=>{o(b=>b.map(S=>S.record_id===m?{...S,title:g}:S))},h=async(m,g,b)=>{try{const S=await et.updateRecordDrawer(m,b);S.isSuccess?(o(j=>j.map(_=>_.record_id===m?{..._,drawer:g}:_)),console.log(`폴더 변경 성공: ${g}`)):console.error("폴더 변경 실패:",S.message)}catch(S){console.error("폴더 변경 중 오류:",S)}},v=async()=>{f(!0);try{const m=await et.getRecentRecords();if(console.log("API 응답 데이터:",m),m&&m.data&&m.data.records&&Array.isArray(m.data.records)){const g=m.data.records.map(b=>({...b,title:b.record_title,drawer:b.drawer_title}));console.log("매핑된 데이터:",g),o(g)}else console.log("데이터 구조가 올바르지 않음:",m),o([])}catch(m){window.handleApiError(m,"오류가 발생했습니다. 메인 페이지로 이동합니다.")}finally{f(!1)}};return w.useEffect(()=>{v()},[]),c.jsx(r7,{children:l?c.jsx("div",{style:{textAlign:"center",padding:"2rem"},children:"응답 중입니다..."}):i.length===0?c.jsx(i7,{children:"기록이 없습니다"}):c.jsxs(c.Fragment,{children:[c.jsx(A6,{}),i.map((m,g)=>c.jsx(a7,{id:m.record_id,order:g+1,title:m.title,date:new Date(m.occurred_at).toLocaleDateString("ko-KR",{year:"numeric",month:"numeric",day:"numeric"}),location:m.location,folder:m.drawer,recordData:m,onRowClick:()=>{console.log(m.record_id),a("recent",m.record_id)},onTitleUpdate:d,onFolderUpdate:h},m.record_id))]})})}const o7="data:image/svg+xml,%3csvg%20width='19'%20height='18'%20viewBox='0%200%2019%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_308_2562)'%3e%3cpath%20d='M14%206.75H5C3.34315%206.75%202%208.09315%202%209.75V14.25C2%2015.9069%203.34315%2017.25%205%2017.25H14C15.6569%2017.25%2017%2015.9069%2017%2014.25V9.75C17%208.09315%2015.6569%206.75%2014%206.75Z'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%203.75C10.3284%203.75%2011%203.07843%2011%202.25C11%201.42157%2010.3284%200.75%209.5%200.75C8.67157%200.75%208%201.42157%208%202.25C8%203.07843%208.67157%203.75%209.5%203.75Z'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%203.75V6.75M7.25%2012.75V11.25M11.75%2011.25V12.75'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_308_2562'%3e%3crect%20width='18'%20height='18'%20fill='white'%20transform='translate(0.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",s7="data:image/svg+xml,%3csvg%20width='19'%20height='18'%20viewBox='0%200%2019%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_457_3706)'%3e%3cpath%20d='M14%206.75H5C3.34315%206.75%202%208.09315%202%209.75V14.25C2%2015.9069%203.34315%2017.25%205%2017.25H14C15.6569%2017.25%2017%2015.9069%2017%2014.25V9.75C17%208.09315%2015.6569%206.75%2014%206.75Z'%20stroke='%23ACACAC'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%203.75C10.3284%203.75%2011%203.07843%2011%202.25C11%201.42157%2010.3284%200.75%209.5%200.75C8.67157%200.75%208%201.42157%208%202.25C8%203.07843%208.67157%203.75%209.5%203.75Z'%20stroke='%23ACACAC'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%203.75V6.75M7.25%2012.75V11.25M11.75%2011.25V12.75'%20stroke='%23ACACAC'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_457_3706'%3e%3crect%20width='18'%20height='18'%20fill='white'%20transform='translate(0.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",c7="data:image/svg+xml,%3csvg%20width='19'%20height='18'%20viewBox='0%200%2019%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2%2013.5C2%2012.345%202%2011.7675%202.26025%2011.343C2.40575%2011.1052%202.60525%2010.9058%202.843%2010.7603C3.26675%2010.5%203.845%2010.5%205%2010.5C6.155%2010.5%206.7325%2010.5%207.157%2010.7603C7.39475%2010.9058%207.59425%2011.1052%207.73975%2011.343C8%2011.7667%208%2012.345%208%2013.5C8%2014.655%208%2015.2325%207.73975%2015.6578C7.59425%2015.8948%207.39475%2016.0942%207.157%2016.2397C6.73325%2016.5%206.155%2016.5%205%2016.5C3.845%2016.5%203.2675%2016.5%202.843%2016.2397C2.60551%2016.0945%202.40581%2015.8951%202.26025%2015.6578C2%2015.2325%202%2014.655%202%2013.5ZM11%2013.5C11%2012.345%2011%2011.7675%2011.2603%2011.343C11.4058%2011.1052%2011.6052%2010.9058%2011.843%2010.7603C12.2667%2010.5%2012.845%2010.5%2014%2010.5C15.155%2010.5%2015.7325%2010.5%2016.1578%2010.7603C16.3948%2010.9058%2016.5942%2011.1052%2016.7397%2011.343C17%2011.7667%2017%2012.345%2017%2013.5C17%2014.655%2017%2015.2325%2016.7397%2015.6578C16.5942%2015.8948%2016.3948%2016.0942%2016.1578%2016.2397C15.7325%2016.5%2015.155%2016.5%2014%2016.5C12.845%2016.5%2012.2675%2016.5%2011.843%2016.2397C11.6055%2016.0945%2011.4058%2015.8951%2011.2603%2015.6578C11%2015.2325%2011%2014.655%2011%2013.5ZM2%204.5C2%203.345%202%202.7675%202.26025%202.343C2.40575%202.10525%202.60525%201.90575%202.843%201.76025C3.26675%201.5%203.845%201.5%205%201.5C6.155%201.5%206.7325%201.5%207.157%201.76025C7.39475%201.90575%207.59425%202.10525%207.73975%202.343C8%202.76675%208%203.345%208%204.5C8%205.655%208%206.2325%207.73975%206.657C7.59425%206.89475%207.39475%207.09425%207.157%207.23975C6.73325%207.5%206.155%207.5%205%207.5C3.845%207.5%203.2675%207.5%202.843%207.23975C2.60543%207.09428%202.40572%206.89457%202.26025%206.657C2%206.23325%202%205.655%202%204.5ZM11%204.5C11%203.345%2011%202.7675%2011.2603%202.343C11.4058%202.10525%2011.6052%201.90575%2011.843%201.76025C12.2667%201.5%2012.845%201.5%2014%201.5C15.155%201.5%2015.7325%201.5%2016.1578%201.76025C16.3948%201.90575%2016.5942%202.10525%2016.7397%202.343C17%202.76675%2017%203.345%2017%204.5C17%205.655%2017%206.2325%2016.7397%206.657C16.5942%206.89475%2016.3948%207.09425%2016.1578%207.23975C15.7325%207.5%2015.155%207.5%2014%207.5C12.845%207.5%2012.2675%207.5%2011.843%207.23975C11.6054%207.09428%2011.4057%206.89457%2011.2603%206.657C11%206.23325%2011%205.655%2011%204.5Z'%20stroke='%237A7A7A'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",u7=y.div`
  display: flex;
  width: 100%;
  max-width: 50rem;
  padding: 3.125rem 2.5rem 2.5rem 2.5rem;
  align-items: center;
  gap: 2.5rem;
  border-radius: 1.25rem;
  border: 2px solid
    ${a=>a.$isSelectionMode?a.$isSelected?"var(--seconday, #688ae0)":"var(--5, #E9E9E9)":"var(--seconday, #688ae0)"};
  background: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
  cursor: ${a=>a.$isSelectionMode?"pointer":"default"};
  transition: all 0.2s ease;

  &:hover {
    ${a=>a.$isSelectionMode&&!a.$isSelected&&`
      border-color: var(--seconday, #688ae0);
    `}
  }
`,f7=y.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,d7=y.div`
  color: ${a=>a.$isSelectionMode&&!a.$isSelected?"var(--30, #ACACAC)":"var(--80, #313131)"};
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  margin-bottom: 1.25rem;
`,l1=y.div`
  color: ${a=>a.$isSelectionMode&&!a.$isSelected?"var(--30, #ACACAC)":"var(--50, #7a7a7a)"};
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  margin-bottom: 0.3rem;
`,o1=y.span`
  color: ${a=>a.$isSelectionMode&&!a.$isSelected?"var(--30, #ACACAC)":"var(--80, #313131)"};
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
`;y.div`
  color: ${a=>a.$isSelectionMode&&!a.$isSelected?"var(--30, #ACACAC)":"var(--50, #7a7a7a)"};
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
`;const h7=y.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,xf=y.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,bf=y.span`
  color: ${a=>a.$isPrimary?"#fff":"var(--50, #7a7a7a)"};
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
`;function m7({incident:a,isSelectionMode:i=!1,isSelected:o=!1,onSelect:l,onPdfDownload:f}){const d=Ut(),h=()=>{i&&l&&l(a.drawer_id)},v=()=>{window.navigation.navigateToSummary&&window.navigation.navigateToSummary(a.drawer_id,a.name)},m=()=>{f&&f(a.drawer_id)},g=()=>{d(`/ai-helper/${a.drawer_id}`,{state:{drawerName:a.name}})};return c.jsxs(u7,{$isSelectionMode:i,$isSelected:o,onClick:h,children:[c.jsxs(f7,{children:[c.jsx(d7,{$isSelectionMode:i,$isSelected:o,children:a.name}),c.jsxs(l1,{$isSelectionMode:i,$isSelected:o,children:["생성 날짜"," ",c.jsx(o1,{$isSelectionMode:i,$isSelected:o,children:a.date})]}),c.jsxs(l1,{$isSelectionMode:i,$isSelected:o,children:["기록 갯수"," ",c.jsx(o1,{$isSelectionMode:i,$isSelected:o,children:a.record_amt})]})]}),!i&&c.jsxs(h7,{children:[c.jsx(tr,{disabled:a.record_amt===0,onClick:g,children:c.jsxs(xf,{children:[c.jsx("img",{src:a.record_amt===0?s7:o7,alt:"AI Helper"}),c.jsx(bf,{$isPrimary:a.record_amt!==0,children:"AI 도우미"})]})}),c.jsx(tr,{variant:"secondary",onClick:v,disabled:a.record_amt===0,children:c.jsxs(xf,{children:[c.jsx("img",{src:c7,alt:"Gathering"}),c.jsx(bf,{$isPrimary:!1,children:"모아보기"})]})}),c.jsx(tr,{variant:"secondary",disabled:a.record_amt===0,onClick:m,children:c.jsxs(xf,{children:[c.jsx("img",{src:o2,alt:"Download"}),c.jsx(bf,{$isPrimary:!1,children:"타임라인 추출"})]})})]})]})}const g7=y.div`
  display: flex;
  width: 100%;
  max-width: 53.8rem;
  padding: 0.62rem 2.5rem 0.62rem 2.5rem;
  align-items: center;
  justify-content: space-between;
`,p7=y.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,y7=y.div`
  color: #000;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
`,v7=y.div`
  color: var(--seconday, #688ae0);
  margin-left: 1.75rem;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
`,x7=y.span`
  color: var(--50, #7a7a7a);
  text-align: right;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
`,b7=y.div`
  display: flex;
  gap: 0.9375rem;
`;function w7({selectedCount:a,onCancel:i,onDelete:o}){return c.jsxs(g7,{children:[c.jsxs(p7,{children:[c.jsx(y7,{children:"삭제할 폴더를 선택하세요"}),c.jsx(v7,{children:a}),c.jsx(x7,{children:"개 선택됨"})]}),c.jsxs(b7,{children:[c.jsx(_t,{variant:"secondary",onClick:i,children:"취소"}),c.jsx(_t,{variant:"primary",onClick:o,disabled:a===0,children:"삭제"})]})]})}const S7="/assets/deleteCheckIcon-Kuu4UjGm.svg",C7=y.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`,j7=y.div`
  display: flex;
  width: 23.75rem;
  padding: 3.75rem 0 3.125rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  flex-shrink: 0;
  border-radius: 1.875rem;
  background: #fff;
`,E7=y.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  text-align: center;
`,T7=y.h2`
  color: var(--80, #313131);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
  margin: 0;
`,A7=y.p`
  color: var(--30, #acacac);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  margin: 0;
`,R7=y.div`
  width: 9.375rem;
  height: 9.375rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,_7=y.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`,M7=y.div`
  display: flex;
  gap: 0.625rem;
  justify-content: center;
`;function vd({isOpen:a,onClose:i,onConfirm:o,title:l="이 항목을 삭제할까요?",subtitle:f="삭제된 항목은 복구할 수 없습니다"}){return a?c.jsx(C7,{onClick:i,"data-modal":"open",children:c.jsxs(j7,{onClick:d=>d.stopPropagation(),children:[c.jsxs(E7,{children:[c.jsx(T7,{children:l}),c.jsx(A7,{children:f})]}),c.jsx(R7,{children:c.jsx(_7,{src:S7,alt:"삭제 확인 아이콘"})}),c.jsxs(M7,{children:[c.jsx(_t,{variant:"secondary",onClick:i,children:"취소"}),c.jsx(_t,{variant:"primary",onClick:o,children:"삭제"})]})]})}):null}y.div`
  position: absolute;
  left: calc(50% + 24.09375rem);
`;y.button`
  width: 2.5rem;
  height: 2.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    opacity: 0.8;
  }
`;y.div`
  position: absolute;
  top: 100%;
  right: 0;
  display: inline-flex;
  padding: 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.9375rem;
  border-radius: 0.625rem;
  background: #ffffff;
  box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.19);
  z-index: 9999;
  margin-top: 0.5rem;
  backdrop-filter: blur(0);
  isolation: isolate;
`;y.div`
  display: flex;
  width: 9.0625rem;
  align-items: center;
  gap: 0.625rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(49, 49, 49, 0.1);
  }
`;y.img`
  width: 1.25rem;
  height: 1.25rem;
`;y.span`
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.125rem;
`;const O7=y.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
  align-items: center;
  padding-bottom: 2rem;
`,D7=y.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
`;function z7({triggerFolderDelete:a,onFolderDeleteTriggered:i,refreshTrigger:o,onFolderDeleteSuccess:l}){const[f,d]=w.useState([]),[h,v]=w.useState(!1),[m,g]=w.useState(!1),[b,S]=w.useState([]),[j,_]=w.useState(!1),[C,E]=w.useState(!1),[A,D]=w.useState(!1),[H,z]=w.useState(""),[K,Z]=w.useState(""),ee=async se=>{try{const xe=await et.downloadPdf(se);if(!xe||!(xe instanceof Blob))throw new Error("유효하지 않은 PDF 데이터입니다.");const be="timeline.pdf",re=window.URL.createObjectURL(xe),O=document.createElement("a");O.href=re,O.download=be,document.body.appendChild(O),O.click(),document.body.removeChild(O),window.URL.revokeObjectURL(re),z("타임라인 PDF가 성공적으로 다운로드되었습니다."),E(!0)}catch(xe){console.error("PDF 다운로드 실패:",xe),Z("타임라인 PDF 다운로드에 실패했습니다. 다시 시도해주세요."),D(!0)}},P=async()=>{v(!0);try{const se=await et.getDrawersList();if(console.log("API 응답 데이터:",se),se&&se.data&&se.data.drawers&&Array.isArray(se.data.drawers)){const xe=se.data.drawers.map(be=>({...be,record_amt:be.record_count,date:be.create_at}));d(xe)}else d([])}catch(se){window.handleApiError(se,"오류가 발생했습니다. 메인 페이지로 이동합니다.")}finally{v(!1)}};w.useEffect(()=>{P()},[]),w.useEffect(()=>{o>0&&P()},[o]),w.useEffect(()=>{a&&(g(!0),S([]),i())},[a,i]);const I=se=>{S(xe=>xe.includes(se)?xe.filter(be=>be!==se):[...xe,se])},ne=()=>{g(!1),S([])},ce=()=>{b.length>0&&_(!0)},pe=async()=>{try{const se=await et.deleteDrawers(b);if(se.isSuccess)d(xe=>xe.filter(be=>!b.includes(be.drawer_id))),console.log("삭제 성공:",b),z(`${b.length}개의 폴더가 삭제되었습니다.`),E(!0),l&&l(b.length);else throw new Error(se.message||"폴더 삭제에 실패했습니다.")}catch{Z("폴더 삭제에 실패했습니다. 다시 시도해주세요."),D(!0)}finally{_(!1),g(!1),S([])}};return c.jsxs(c.Fragment,{children:[c.jsx(O7,{children:h?c.jsx("div",{style:{textAlign:"center",padding:"2rem"},children:"응답 중입니다..."}):f.length===0?c.jsx(D7,{children:"서랍이 없습니다"}):c.jsxs(c.Fragment,{children:[m&&c.jsx(w7,{selectedCount:b.length,onCancel:ne,onDelete:ce}),f.map(se=>c.jsx(m7,{incident:se,isSelectionMode:m,isSelected:b.includes(se.drawer_id),onSelect:I,onPdfDownload:ee},se.drawer_id))]})}),c.jsx(vd,{isOpen:j,onClose:()=>_(!1),onConfirm:pe,selectedCount:b.length}),c.jsx(oi,{isOpen:C,onClose:()=>E(!1),title:"폴더 삭제 완료",message:H}),c.jsx(aa,{isOpen:A,onClose:()=>D(!1),title:"폴더 삭제 실패",message:K})]})}const k7=y.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`,L7=y.div`
  background: #ffffff;
  border-radius: 1.25rem;
  padding: 3.125rem;
  width: 90%;
  max-width: 22rem;
  display: flex;
  flex-direction: column;
  gap: 3.125rem;
  box-shadow: 0 0.25rem 1.875rem 0 rgba(0, 0, 0, 0.08);
`,N7=y.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  align-items: center;
  text-align: center;
`,$7=y.h2`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  margin: 0;
`,U7=y.p`
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  margin: 0;
`,H7=y.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  width: 100%;
  align-items: center;
`,B7=y.input`
  width: 100%;
  padding: 0.625rem 0.625rem;
  border-radius: 0.625rem;
  border: 1px solid #ddd;
  background: #fff;
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  outline: none;

  &:focus {
    border: 1px solid #68b8ea;
    background: #e6f6ff;
  }

  &::placeholder {
    color: #7a7a7a;
  }
`,P7=y.div`
  display: flex;
  gap: 0.9375rem;
  justify-content: center;
`;function q7({isOpen:a,onClose:i,onConfirm:o}){const[l,f]=w.useState("");w.useEffect(()=>{a&&f("")},[a]);const d=()=>{l.trim()&&(console.log(`폴더 추가: ${l.trim()}`),o(l.trim()),i())},h=()=>{i()},v=l.trim().length>0;return a?c.jsx(k7,{onClick:h,"data-modal":"open",children:c.jsxs(L7,{onClick:m=>m.stopPropagation(),children:[c.jsxs(N7,{children:[c.jsx($7,{children:"폴더 추가"}),c.jsx(U7,{children:"새로운 폴더명을 입력해주세요"})]}),c.jsx(H7,{children:c.jsx(B7,{value:l,onChange:m=>f(m.target.value),placeholder:"새로운 폴더명을 입력하세요",autoFocus:!0})}),c.jsxs(P7,{children:[c.jsx(_t,{variant:"secondary",onClick:h,children:"취소"}),c.jsx(_t,{variant:"primary",onClick:d,disabled:!v,children:"추가"})]})]})}):null}const V7="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.16663%2010.8332H4.99996C4.76385%2010.8332%204.56607%2010.7532%204.40663%2010.5932C4.24718%2010.4332%204.16718%2010.2354%204.16663%209.99984C4.16607%209.76428%204.24607%209.56651%204.40663%209.40651C4.56718%209.24651%204.76496%209.16651%204.99996%209.16651H9.16663V4.99984C9.16663%204.76373%209.24663%204.56595%209.40663%204.40651C9.56663%204.24706%209.76441%204.16706%209.99996%204.16651C10.2355%204.16595%2010.4336%204.24595%2010.5941%204.40651C10.7547%204.56706%2010.8344%204.76484%2010.8333%204.99984V9.16651H15C15.2361%209.16651%2015.4341%209.24651%2015.5941%209.40651C15.7541%209.56651%2015.8339%209.76428%2015.8333%209.99984C15.8327%2010.2354%2015.7527%2010.4335%2015.5933%2010.594C15.4339%2010.7546%2015.2361%2010.8343%2015%2010.8332H10.8333V14.9998C10.8333%2015.236%2010.7533%2015.434%2010.5933%2015.594C10.4333%2015.754%2010.2355%2015.8337%209.99996%2015.8332C9.76441%2015.8326%209.56663%2015.7526%209.40663%2015.5932C9.24663%2015.4337%209.16663%2015.236%209.16663%2014.9998V10.8332Z'%20fill='%237A7A7A'/%3e%3c/svg%3e",G7="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.83325%2017.5C5.37492%2017.5%204.9827%2017.3369%204.65659%2017.0108C4.33048%2016.6847%204.16714%2016.2922%204.16659%2015.8333V5C3.93048%205%203.7327%204.92%203.57325%204.76C3.41381%204.6%203.33381%204.40222%203.33325%204.16667C3.3327%203.93111%203.4127%203.73333%203.57325%203.57333C3.73381%203.41333%203.93159%203.33333%204.16659%203.33333H7.49992C7.49992%203.09722%207.57992%202.89944%207.73992%202.74C7.89992%202.58056%208.0977%202.50056%208.33325%202.5H11.6666C11.9027%202.5%2012.1008%202.58%2012.2608%202.74C12.4208%202.9%2012.5005%203.09778%2012.4999%203.33333H15.8333C16.0694%203.33333%2016.2674%203.41333%2016.4274%203.57333C16.5874%203.73333%2016.6671%203.93111%2016.6666%204.16667C16.666%204.40222%2016.586%204.60028%2016.4266%204.76083C16.2671%204.92139%2016.0694%205.00111%2015.8333%205V15.8333C15.8333%2016.2917%2015.6702%2016.6842%2015.3441%2017.0108C15.018%2017.3375%2014.6255%2017.5006%2014.1666%2017.5H5.83325ZM8.33325%2014.1667C8.56937%2014.1667%208.76742%2014.0867%208.92742%2013.9267C9.08742%2013.7667%209.16714%2013.5689%209.16659%2013.3333V7.5C9.16659%207.26389%209.08659%207.06611%208.92659%206.90667C8.76659%206.74722%208.56881%206.66722%208.33325%206.66667C8.0977%206.66611%207.89992%206.74611%207.73992%206.90667C7.57992%207.06722%207.49992%207.265%207.49992%207.5V13.3333C7.49992%2013.5694%207.57992%2013.7675%207.73992%2013.9275C7.89992%2014.0875%208.0977%2014.1672%208.33325%2014.1667ZM11.6666%2014.1667C11.9027%2014.1667%2012.1008%2014.0867%2012.2608%2013.9267C12.4208%2013.7667%2012.5005%2013.5689%2012.4999%2013.3333V7.5C12.4999%207.26389%2012.4199%207.06611%2012.2599%206.90667C12.0999%206.74722%2011.9021%206.66722%2011.6666%206.66667C11.431%206.66611%2011.2333%206.74611%2011.0733%206.90667C10.9133%207.06722%2010.8333%207.265%2010.8333%207.5V13.3333C10.8333%2013.5694%2010.9133%2013.7675%2011.0733%2013.9275C11.2333%2014.0875%2011.431%2014.1672%2011.6666%2014.1667Z'%20fill='%237A7A7A'/%3e%3c/svg%3e",Y7=y.div`
  background: #ffffff;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`,F7=y.div`
  max-width: 60rem;
  margin: 0 auto;
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
`,X7=y.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8.38rem;
  margin-bottom: 2.5rem;
  flex-shrink: 0;
  width: 100%;
`,Z7=y.div`
  display: flex;
  gap: 0;
  justify-content: center;
  align-items: center;
  position: relative;
`,K7=y.div`
  position: absolute;
  left: calc(50% + 24.09375rem);
`,Q7=y.button`
  width: 2.5rem;
  height: 2.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    opacity: 0.8;
  }
`,I7=y.div`
  position: absolute;
  top: 100%;
  right: 0;
  display: inline-flex;
  padding: 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.9375rem;
  border-radius: 0.625rem;
  background: #ffffff;
  box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.19);
  z-index: 9999;
  margin-top: 0.5rem;
  backdrop-filter: blur(0);
  isolation: isolate;
`,s1=y.div`
  display: flex;
  width: 9.0625rem;
  align-items: center;
  gap: 0.625rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(49, 49, 49, 0.1);
  }
`,c1=y.img`
  width: 1.25rem;
  height: 1.25rem;
`,u1=y.span`
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.125rem;
`;function J7({initialTab:a="recent",onNavigateToMain:i,onNavigateToRecordDetail:o}){const l=Ut();gn();const[f,d]=w.useState(a),[h,v]=w.useState(!1),[m,g]=w.useState(!1),[b,S]=w.useState(!1),[j,_]=w.useState(!1),[C,E]=w.useState(!1),[A,D]=w.useState(!1),[H,z]=w.useState(""),[K,Z]=w.useState(""),[ee,P]=w.useState(0),I=w.useRef(null),ne=re=>{z(`${re}개의 폴더가 삭제되었습니다.`),E(!0)},ce=re=>{d(re);const O=`/drawer?tab=${re}`;l(O,{replace:!0})},pe=()=>{v(!h)},se=re=>{v(!1),re==="폴더 추가"?g(!0):re==="폴더 삭제"&&_(!0)},xe=async re=>{try{const O=await et.createDrawer(re);if(O.isSuccess)z(`"${re}" 폴더가 생성되었습니다.`),E(!0),P(J=>J+1);else throw new Error(O.message||"폴더 생성에 실패했습니다.")}catch(O){Z("폴더 생성에 실패했습니다. 다시 시도해주세요."),D(!0),console.error("폴더 생성 실패:",O)}finally{g(!1)}},be=()=>{console.log("폴더 삭제 확인"),S(!1)};return w.useEffect(()=>{const re=O=>{I.current&&!I.current.contains(O.target)&&v(!1)};return h&&document.addEventListener("mousedown",re),()=>{document.removeEventListener("mousedown",re)}},[h]),c.jsxs(Y7,{children:[c.jsx(jt,{currentPage:"drawer"}),c.jsxs(F7,{children:[c.jsxs(X7,{children:[c.jsxs(Z7,{children:[c.jsx(e1,{selected:f==="recent",onClick:()=>ce("recent"),children:"최근 기록"}),c.jsx(e1,{selected:f==="incident",onClick:()=>ce("incident"),children:"사건별 기록"})]}),f==="incident"&&c.jsxs(K7,{ref:I,children:[c.jsx(Q7,{onClick:pe,children:c.jsx("img",{src:l2,alt:"Settings"})}),h&&c.jsxs(I7,{children:[c.jsxs(s1,{onClick:()=>se("폴더 추가"),children:[c.jsx(c1,{src:V7,alt:"폴더 추가"}),c.jsx(u1,{children:"폴더 추가"})]}),c.jsxs(s1,{onClick:()=>se("폴더 삭제"),children:[c.jsx(c1,{src:G7,alt:"폴더 삭제"}),c.jsx(u1,{children:"폴더 삭제"})]})]})]})]}),f==="recent"&&c.jsx(l7,{onNavigateToMain:i,onNavigateToRecordDetail:o}),f==="incident"&&c.jsx(z7,{onNavigateToMain:i,triggerFolderDelete:j,onFolderDeleteTriggered:()=>_(!1),refreshTrigger:ee,onFolderDeleteSuccess:ne})]}),c.jsx(q7,{isOpen:m,onClose:()=>g(!1),onConfirm:xe}),c.jsx(vd,{isOpen:b,onClose:()=>S(!1),onConfirm:be,selectedCount:0}),c.jsx(oi,{isOpen:C,onClose:()=>E(!1),title:"폴더 생성 완료",message:H}),c.jsx(aa,{isOpen:A,onClose:()=>D(!1),title:"폴더 생성 실패",message:K})]})}const ds="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.00002%204.21094L12.7895%2010.0004L7.00002%2015.7899'%20stroke='black'%20stroke-width='1.05263'%20stroke-linecap='round'/%3e%3c/svg%3e",W7=y.button`
  position: fixed;
  top: 5rem; /* 헤더 높이(4rem) + 여백(1rem) */
  left: 2rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 1px solid var(--main-stroke, #bec8e3);
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background: var(--5, #f5f5f5);
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`,e4=y.img`
  width: 1.25rem;
  height: 1.25rem;
  transform: rotate(180deg); /* x축 회전 (180도) */
`;function Nn({onClick:a}){return c.jsx(W7,{onClick:a,children:c.jsx(e4,{src:ds,alt:"뒤로가기"})})}const f1="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.5%2017.5V13.9583L13.5%202.97917C13.6667%202.82639%2013.8508%202.70833%2014.0525%202.625C14.2542%202.54167%2014.4658%202.5%2014.6875%202.5C14.9092%202.5%2015.1244%202.54167%2015.3333%202.625C15.5422%202.70833%2015.7228%202.83333%2015.875%203L17.0208%204.16667C17.1875%204.31944%2017.3092%204.5%2017.3858%204.70833C17.4625%204.91667%2017.5006%205.125%2017.5%205.33333C17.5%205.55556%2017.4619%205.7675%2017.3858%205.96917C17.3097%206.17083%2017.1881%206.35472%2017.0208%206.52083L6.04167%2017.5H2.5ZM14.6667%206.5L15.8333%205.33333L14.6667%204.16667L13.5%205.33333L14.6667%206.5Z'%20fill='%23688AE0'/%3e%3c/svg%3e",d1=y.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`,h1=y.div`
  width: 55rem;
  margin: 0 auto;
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;y.div`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-weight: 700;
`;const t4=y.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`,n4=y.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
  margin-top: 4.5rem;
`,a4=y.div`
  color: var(--30, #acacac);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  white-space: pre;
`,r4=y.div`
  color: var(--70, #4a4a4a);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
`,i4=y.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 500;
`,l4=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  margin-top: 2rem;
  align-self: stretch;
  border-radius: 1.875rem;
  background: #fbfbfb;
  padding: 2rem;
  height: calc(100vh - 20rem);
  overflow-y: auto;
`,o4=y.div`
  display: flex;
  flex-direction: column;
  gap: 1.78rem;
  width: 100%;
`,On=y.div`
  display: grid;
  grid-template-columns: 1fr;
  min-height: 2.5rem;
  column-gap: 0;
`,Dn=y.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`,zn=y.label`
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: #313131;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  min-width: 5rem;
`,m1=y.div`
  display: flex;
  width: 34.6875rem;
  align-items: center;
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  color: #313131;
`,g1=y.div`
  display: flex;
  align-items: center;
  gap: 0.62rem;
`,s4=y.div`
  display: flex;
  align-items: center;
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  color: #313131;
`,p1=y.img`
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
`,c4=y.div`
  display: flex;
  width: 34.6875rem;
  align-items: center;
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  color: #313131;
  white-space: pre-wrap;
`,Fo=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  flex: 1;
`,Xo=y.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: var(--70, #4a4a4a);
  border-radius: 1rem;
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  color: white;
`;y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;y.div`
  padding: 0.5rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 1rem;
  background: var(--70, #4a4a4a);
  color: white;
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
`;const u4=y.div`
  display: flex;
  gap: 0.5rem;
`,f4=y.div`
  padding: 0.5rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: ${a=>a.$isHighSeverity?"1.875rem":"1rem"};
  background: ${a=>a.$isHighSeverity?"#FF6D6D":"#4a4a4a"};
  color: white;
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
`;y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: flex-start;
  width: 37rem;
`;const d4=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: flex-start;
  width: 34.6875rem;
`,h4=y.div`
  width: 16rem;
  height: 12rem;
  border-radius: 0.5rem;
  background: #f5f5f5;
  border: 1px solid #e0e0e0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`,m4=y.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,g4=y.div`
  font-size: 3rem;
  color: #4a4a4a;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,p4=y.div`
  font-size: 2rem;
  color: #4a4a4a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 0.5rem;
`,y1=y.div`
  font-size: 0.75rem;
  color: #4a4a4a;
  text-align: center;
  max-width: 90%;
  word-break: break-word;
`,y4={0:"낮음",1:"보통",2:"높음"};function v4({previousPage:a,record_id:i}){const o=Ut(),[l,f]=w.useState(null),[d,h]=w.useState(!0),[v,m]=w.useState(!1),[g,b]=w.useState(!1),[S,j]=w.useState(!1),[_,C]=w.useState(!1),[E,A]=w.useState(null),[D,H]=w.useState(!1),[z,K]=w.useState(!1),[Z,ee]=w.useState(""),[P,I]=w.useState(""),ne=w.useRef(null),ce=()=>{switch(a){case"recent":return"최근 기록";case"incident":return"모아보기";default:return"모아보기"}},pe=()=>{const V=ce(),Y=l?.drawer_name,ue=l?.title;return Y&&ue?`${V}   >   ${Y}   >   ${ue}`:Y?`${V}   >   ${Y}`:ue?`${V}   >   ${ue}`:V},se=()=>{m(!0)},xe=()=>{m(!1)},be=async V=>{try{const Y=await et.updateRecordTitle(i,V);if(Y.isSuccess)f(ue=>({...ue,title:V})),m(!1),ee("제목이 수정되었습니다."),H(!0);else throw new Error(Y.message||"제목 수정에 실패했습니다.")}catch(Y){console.error("제목 수정 중 오류:",Y),I("제목 수정 중 오류가 발생했습니다."),K(!0)}},re=()=>{b(!0)},O=()=>{b(!1)},J=async()=>{try{const V=await et.deleteRecord(i);if(V.isSuccess){if(window.navigation.navigateToDrawer){const Y=a==="summary"?"incident":"recent";window.navigation.navigateToDrawer(Y)}}else throw new Error(V.message||"레코드 삭제에 실패했습니다.")}catch(V){console.error("레코드 삭제 중 오류:",V),I("레코드 삭제 중 오류가 발생했습니다."),K(!0)}},le=()=>{window.navigation.navigateToChatView&&window.navigation.navigateToChatView(i,l?.title||"제목 없음",l?.created_at,a==="summary"?l?.drawer_name:null)},de=()=>{window.navigation.navigateToExtractPdf&&window.navigation.navigateToExtractPdf(i,l?.title||"제목 없음",a==="summary"?l?.drawer_name:null)},R=()=>{j(!0)},q=()=>{j(!1)},te=async(V,Y)=>{try{console.log("새로운 폴더 이름:",V),console.log("새로운 폴더 ID:",Y);const ue=await et.updateRecordDrawer(i,Y);if(ue.isSuccess)Se(),j(!1),ee("폴더가 변경되었습니다."),H(!0);else throw new Error(ue.message||"폴더 변경에 실패했습니다.")}catch(ue){console.error("폴더 변경 중 오류:",ue),I("폴더 변경 중 오류가 발생했습니다."),K(!0)}},ae=V=>{console.log("RecordDetailPage - handleFileClick 호출:",V),A({filename:V.filename,type:V.type,url:V.view_url||V.s3_url,mimeType:V.mimeType}),C(!0)},ie=()=>{C(!1),A(null)},Se=async()=>{try{h(!0);const V=await et.getRecordDetail(i);if(console.log("API 응답 데이터:",V),V&&V.isSuccess&&V.data){const Y=V.data,ue={...Y,drawer_name:Y.drawer};console.log("매핑된 데이터:",ue),f(ue)}else throw new Error("기록 데이터를 찾을 수 없습니다.")}catch(V){window.handleApiError(V,"오류가 발생했습니다. 메인 페이지로 이동합니다.")}finally{h(!1)}};w.useEffect(()=>{Se()},[i]);const B=V=>{const Y=new Date(V),ue=Y.getFullYear().toString().slice(-2),Ce=String(Y.getMonth()+1).padStart(2,"0"),he=String(Y.getDate()).padStart(2,"0"),fe=String(Y.getHours()).padStart(2,"0"),ge=String(Y.getMinutes()).padStart(2,"0");return`${ue}-${Ce}-${he} ${fe}:${ge}`};return d?c.jsxs(d1,{children:[c.jsx(jt,{currentPage:"record-detail"}),c.jsx(h1,{children:c.jsx(i4,{children:"로딩 중..."})})]}):c.jsxs(d1,{children:[c.jsx(jt,{currentPage:"record-detail"}),c.jsx(Nn,{onClick:()=>o(-1)}),c.jsxs(h1,{children:[c.jsxs(n4,{children:[c.jsx(a4,{children:pe()}),c.jsx(r4,{children:l?.title||"제목 없음"})]}),c.jsxs(t4,{children:[c.jsx(_t,{variant:"secondary",style:{borderRadius:"0.5rem",border:"1px solid var(--5, #E9E9E9)",background:"#FFF",color:"var(--50, #7A7A7A)",textAlign:"center",fontFamily:"Pretendard",fontSize:"0.875rem",fontStyle:"normal",fontWeight:"500",lineHeight:"1.25rem"},onClick:re,children:"기록 삭제"}),c.jsx(_t,{variant:"secondary",style:{borderRadius:"0.5rem",border:"1px solid var(--BP-Gradation, #68B8EA)",background:"#FFF",color:"var(--seconday, #688AE0)",textAlign:"center",fontFamily:"Pretendard",fontSize:"0.875rem",fontStyle:"normal",fontWeight:"500",lineHeight:"1.25rem"},onClick:le,children:"채팅 보기"}),c.jsx(_t,{variant:"secondary",style:{borderRadius:"0.5rem",border:"1px solid var(--BP-Gradation, #68B8EA)",background:"#FFF",color:"var(--seconday, #688AE0)",textAlign:"center",fontFamily:"Pretendard",fontSize:"0.875rem",fontStyle:"normal",fontWeight:"500",lineHeight:"1.25rem",padding:"0.75rem 1.5rem"},onClick:de,children:"PDF 추출"})]}),c.jsx(l4,{ref:ne,children:c.jsxs(o4,{children:[c.jsx(On,{children:c.jsxs(Dn,{children:[c.jsx(zn,{children:"제목"}),c.jsxs(g1,{children:[c.jsx(s4,{children:l?.title||"제목 없음"}),c.jsx(p1,{src:f1,alt:"제목 편집",onClick:se})]})]})}),c.jsx(On,{children:c.jsxs(Dn,{children:[c.jsx(zn,{children:"카테고리"}),c.jsx(Fo,{children:l?.category&&c.jsx(Xo,{children:l.category})})]})}),c.jsx(On,{children:c.jsxs(Dn,{children:[c.jsx(zn,{children:"가해자"}),c.jsx(Fo,{children:l?.assailant?.map((V,Y)=>c.jsx(Xo,{children:V},Y))})]})}),c.jsx(On,{children:c.jsxs(Dn,{children:[c.jsx(zn,{children:"저장 폴더"}),c.jsxs(g1,{children:[c.jsx(Fo,{children:l?.drawer_name&&c.jsx(Xo,{children:l.drawer_name})}),c.jsx(p1,{src:f1,alt:"폴더 편집",onClick:R})]})]})}),c.jsx(On,{children:c.jsxs(Dn,{children:[c.jsx(zn,{children:"심각도"}),c.jsx(u4,{children:l?.severity!==void 0&&c.jsx(f4,{$isHighSeverity:l.severity>=2,children:l.severity!==null?y4[l.severity]:"심각도 정보 없음"})})]})}),c.jsx(On,{children:c.jsxs(Dn,{children:[c.jsx(zn,{children:"발생일시"}),c.jsx(m1,{children:l?.occurred_at?B(l.occurred_at):"발생일시 정보 없음"})]})}),c.jsx(On,{children:c.jsxs(Dn,{children:[c.jsx(zn,{children:"목격자"}),c.jsx(Fo,{children:l?.witness?.map((V,Y)=>c.jsx(Xo,{children:V},Y))})]})}),c.jsx(On,{children:c.jsxs(Dn,{children:[c.jsx(zn,{children:"발생 장소"}),c.jsx(m1,{children:l?.location||"발생 장소 정보 없음"})]})}),c.jsx(On,{children:c.jsxs(Dn,{children:[c.jsx(zn,{children:"발생 정황"}),c.jsx(c4,{children:l?.content||"발생 정황 정보 없음"})]})}),c.jsx(On,{children:c.jsxs(Dn,{children:[c.jsx(zn,{children:"자료"}),c.jsx(d4,{children:l?.evidences?.map((V,Y)=>{const ue=Ye=>{const Qe=Ye.split(".").pop()?.toLowerCase(),_e=["jpg","jpeg","png","gif","bmp","webp"],it=["mp4","avi","mov","wmv","flv","webm"],F=["mp3","wav","m4a","aac","ogg"];return _e.includes(Qe)?"IMAGE":it.includes(Qe)?"VIDEO":F.includes(Qe)?"AUDIO":"FILE"},Ce=V.type,he=ue(V.filename),fe=Ce||he,ge=fe==="PHOTO"||fe==="IMAGE",qe=fe==="VIDEO",ut=fe==="AUDIO",an=fe==="FILE";return console.log(`Evidence ${Y}:`,{apiType:Ce,extensionType:he,finalType:fe,filename:V.filename,s3_url:V.s3_url,isImage:ge,isVideo:qe,isAudio:ut,isFile:an}),c.jsxs(h4,{onClick:()=>ae(V),style:{cursor:"pointer"},children:[ge&&c.jsx(m4,{src:V.view_url||V.s3_url,alt:V.filename,onError:Ye=>{console.error("Image failed to load:",Ye.target.src),Ye.target.style.display="none"},onLoad:()=>{console.log("Image loaded successfully:",V.view_url||V.s3_url)}}),qe&&c.jsx("video",{src:V.view_url||V.s3_url,style:{width:"100%",height:"100%",objectFit:"cover"},onError:Ye=>{console.error("Video failed to load:",Ye.target.src),Ye.target.style.display="none"},onLoad:()=>{console.log("Video loaded successfully:",V.view_url||V.s3_url)}}),ut&&c.jsxs(g4,{children:["🎵",c.jsx(y1,{children:V.filename})]}),an&&c.jsxs(p4,{children:["📄",c.jsx(y1,{children:V.filename})]})]},Y)})})]})})]})})]}),c.jsx(c2,{isOpen:v,onClose:xe,onConfirm:be,currentTitle:l?.title,recordData:l}),c.jsx(vd,{isOpen:g,onClose:O,onConfirm:J,title:"이 기록을 삭제할까요?",subtitle:"삭제하면 되돌릴 수 없어요"}),c.jsx(s2,{isOpen:S,onClose:q,onConfirm:te,currentFolder:l?.drawer_name,recordId:i,recordData:l}),c.jsx(pd,{isOpen:_,onClose:ie,file:E,fileUrl:E?.view_url||E?.s3_url||E?.url||""}),c.jsx(oi,{isOpen:D,onClose:()=>H(!1),title:"작업 완료",message:Z}),c.jsx(aa,{isOpen:z,onClose:()=>K(!1),title:"작업 실패",message:P})]})}const v1=y.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`,x1=y.div`
  width: 55rem;
  margin: 0 auto;
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  padding: 2rem;
`,x4=y.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
  margin-top: 4.5rem;
`,b4=y.div`
  color: var(--30, #acacac);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  white-space: pre;
`,w4=y.div`
  color: var(--70, #4a4a4a);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
`,S4=y.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #fbfbfb;
  border-radius: 1.875rem;
  padding: 2rem;
  overflow-y: auto;
  margin-top: 2rem;
  gap: 0.62rem;
`,C4=y.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0.935rem 0;
`,j4=y.div`
  color: var(--30, #acacac);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  margin-bottom: 0.5rem;
`,E4=y.div`
  color: ${({isAssistant:a})=>a?"var(--seconday, #688AE0)":"var(--80, #313131)"};
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
  min-width: 4rem;
  flex-shrink: 0;
`,T4=y.div`
  color: ${({isAssistant:a})=>a?"var(--seconday, #688AE0)":"var(--80, #313131)"};
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1rem;
  align-self: stretch;
  white-space: pre-wrap;
  flex: 1;
  display: flex;
  flex-direction: column;
`,A4=y.div`
  color: var(--30, #acacac);
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  margin-top: 0.31rem;
  font-weight: 400;
`,R4=y.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 500;
`,_4=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: flex-start;
  width: 34.6875rem;
  margin-bottom: 0.5rem;
`,M4=y.div`
  width: 16rem;
  height: 12rem;
  border-radius: 0.5rem;
  background: #f5f5f5;
  border: 1px solid #e0e0e0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
  }
`,O4=y.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,D4=y.div`
  font-size: 3rem;
  color: #4a4a4a;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,z4=y.div`
  font-size: 2rem;
  color: #4a4a4a;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;function k4({record_id:a,pageTitle:i,created_at:o,drawerName:l}){const f=Ut(),[d,h]=w.useState(!0),[v,m]=w.useState(null),[g,b]=w.useState(!1),[S,j]=w.useState(null),_=z=>{const K=new Date(z),Z=K.getFullYear(),ee=K.getMonth()+1,P=K.getDate();return`${Z}년 ${ee}월 ${P}일 작성했어요`},C=z=>{switch(z){case"user":return"사용자";case"assistant":return"숨쉬어";default:return"알 수 없음"}},E=z=>{if(!z)return"";try{const[K,Z]=z.split(":"),ee=new Date;return ee.setHours(parseInt(K,10)),ee.setMinutes(parseInt(Z,10)),ee.toLocaleTimeString("ko-KR",{hour:"numeric",minute:"2-digit",hour12:!0})}catch(K){return console.error("시간 형식 변환 오류:",K),z}},A=z=>{j({filename:z.filename,type:z.type,url:z.url}),b(!0)},D=()=>{b(!1),j(null)},H=async()=>{try{h(!0);const z=await et.getChatList(a);if(console.log("API 응답 데이터:",z),z&&z.data)m(z);else throw new Error("채팅 데이터를 찾을 수 없습니다.")}catch(z){window.handleApiError(z,"오류가 발생했습니다. 메인 페이지로 이동합니다.")}finally{h(!1)}};return w.useEffect(()=>{H()},[a]),d?c.jsxs(v1,{children:[c.jsx(jt,{currentPage:"chat-view"}),c.jsx(x1,{children:c.jsx(R4,{children:"채팅 내역을 불러오는 중..."})})]}):c.jsxs(v1,{children:[c.jsx(jt,{currentPage:"chat-view"}),c.jsx(Nn,{onClick:()=>f(-1)}),c.jsxs(x1,{children:[c.jsxs(x4,{children:[c.jsx(b4,{children:l?`모아보기   >   ${l}   >   ${i}   >   채팅 보기`:`${i}   >   채팅 보기`}),c.jsx(w4,{children:_(o)})]}),c.jsx(S4,{children:v?.data?.messages?.map((z,K)=>{const Z=K===0||K>0&&z.message_date!==v.data.messages[K-1].message_date;return c.jsxs("div",{children:[Z&&c.jsx(j4,{children:z.message_date}),c.jsxs(C4,{children:[c.jsx(E4,{isAssistant:z.role==="assistant",children:C(z.role)}),c.jsxs(T4,{isAssistant:z.role==="assistant",children:[z.evidences&&z.evidences.length>0&&c.jsx(_4,{children:z.evidences.map((ee,P)=>{const I=le=>{const de=le.split(".").pop()?.toLowerCase(),R=["jpg","jpeg","png","gif","bmp","webp"],q=["mp4","avi","mov","wmv","flv","webm"],te=["mp3","wav","m4a","aac","ogg"];return R.includes(de)?"IMAGE":q.includes(de)?"VIDEO":te.includes(de)?"AUDIO":"FILE"},ne=ee.type,ce=ee.contentType,pe=I(ee.filename),se=ce?.startsWith("image/")?"IMAGE":ce?.startsWith("video/")?"VIDEO":ce?.startsWith("audio/")?"AUDIO":"FILE",xe=ne||se,be=xe==="PHOTO"||xe==="IMAGE",re=xe==="VIDEO",O=xe==="AUDIO",J=xe==="FILE";return console.log(`Evidence ${P}:`,{apiType:ne,contentType:ce,extensionType:pe,finalType:xe,filename:ee.filename,url:ee.url,isImage:be,isVideo:re,isAudio:O,isFile:J}),c.jsxs(M4,{onClick:()=>A(ee),children:[be&&c.jsx(O4,{src:ee.url,alt:ee.filename,onError:le=>{console.error("Image failed to load:",le.target.src),le.target.style.display="none"},onLoad:()=>{console.log("Image loaded successfully:",ee.url)}}),re&&c.jsx("video",{src:ee.url,style:{width:"100%",height:"100%",objectFit:"cover"},onError:le=>{console.error("Video failed to load:",le.target.src),le.target.style.display="none"},onLoad:()=>{console.log("Video loaded successfully:",ee.url)}}),O&&c.jsx(D4,{children:"🎵"}),J&&c.jsx(z4,{children:"📄"})]},P)})}),c.jsx("div",{children:z.content}),z.role==="user"&&c.jsx(A4,{children:E(z.message_time)})]})]})]},K)})})]}),c.jsx(pd,{isOpen:g,onClose:D,file:S,fileUrl:S?.url})]})}const L4="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.5%205.5C10.5%205.22386%2010.2761%205%2010%205C9.72386%205%209.5%205.22386%209.5%205.5L10%205.5L10.5%205.5ZM9.64645%2015.4136C9.84171%2015.6088%2010.1583%2015.6088%2010.3536%2015.4136L13.5355%2012.2316C13.7308%2012.0363%2013.7308%2011.7198%2013.5355%2011.5245C13.3403%2011.3292%2013.0237%2011.3292%2012.8284%2011.5245L10%2014.3529L7.17157%2011.5245C6.97631%2011.3292%206.65973%2011.3292%206.46447%2011.5245C6.2692%2011.7198%206.2692%2012.0363%206.46447%2012.2316L9.64645%2015.4136ZM10%205.5L9.5%205.5L9.5%209.02991L10%209.02991L10.5%209.02991L10.5%205.5L10%205.5ZM10%209.02991L9.5%209.02991L9.5%2015.06L10%2015.06L10.5%2015.06L10.5%209.02991L10%209.02991Z'%20fill='%237A7A7A'/%3e%3c/svg%3e",N4="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='11.5'%20cy='11.5'%20r='5.5'%20stroke='%23688AE0'%20stroke-width='2'/%3e%3cline%20x1='16.4142'%20y1='16'%20x2='19'%20y2='18.5858'%20stroke='%23688AE0'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",b1=y.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`,w1=y.div`
  width: 55rem;
  margin: 0 auto;
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  padding: 2rem;
`,$4=y.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
  margin-top: 4.5rem;
`,U4=y.div`
  color: var(--30, #acacac);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  white-space: pre;
`,H4=y.div`
  color: var(--70, #4a4a4a);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
`,B4=y.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 500;
`,P4=y.div`
  display: flex;
  width: 100%;
  padding: 1.5625rem 1.875rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.9375rem;
  border-radius: 1.25rem;
  background: #fbfbfb;
  margin-top: 2rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 1rem;
  }
`,wf=y.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  flex-wrap: wrap;
`,Sf=y.div`
  color: var(--50, #7a7a7a);
  text-align: left;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  min-width: 4rem;
`,S1=y.div`
  color: var(--80, #313131);
  text-align: left;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  flex: 1;
  word-wrap: break-word;
  overflow-wrap: break-word;
`,q4=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,V4=y.div`
  display: flex;
  padding: 0.3125rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1.875rem;
  background: var(--70, #4a4a4a);
  color: white;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 500;
`,G4=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  padding: 1rem 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
`,Y4=y.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--5, #f5f5f5);
  }

  img {
    width: 1rem;
    height: 1rem;
  }
`,F4=y.div`
  display: flex;
  width: 10.625rem;
  height: 2rem;
  padding: 0.25rem 0.5rem;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-bottom: 2px solid var(--seconday, #688ae0);
`,X4=y.input`
  border: none;
  outline: none;
  background: transparent;
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem;
  flex: 1;
  margin-right: 0.5rem;

  &::placeholder {
    color: var(--10, #ddd);
  }
`,Z4=y.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`,K4=y.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 55rem;
  margin-top: 1rem;
  gap: 0.94rem;
  max-height: 30rem; /* 최대 높이 설정 */
  overflow-y: auto; /* 세로 스크롤 활성화 */
  padding-right: 0.5rem; /* 스크롤바 공간 확보 */
`,Q4=y.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10rem;
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`,I4=y.div`
  position: absolute;
  left: 1rem; /* MarkerCol 중앙과 일치 */
  width: 2px;
  background: var(--BP-Gradation, #68b8ea);
  z-index: 0;
`,J4=y.div`
  display: flex;
  align-items: center;
  width: 100%;
`,W4=y.div`
  position: relative;
  width: 2rem; /* 축 영역 고정 너비 */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`,e8=y.div`
  width: 0.8125rem;
  height: 0.8125rem;
  border-radius: 50%;
  border: 2px solid var(--BP-Gradation, #68b8ea);
  background: ${({$filled:a})=>a?"var(--BP-Gradation, #68b8ea)":"#fff"};
  z-index: 1;
`,t8=y.div`
  color: var(--BP-Gradation, #68b8ea);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  text-align: left;
  width: 8rem;
  margin-left: 2.19rem;
  flex-shrink: 0;
`,n8=y.div`
  display: flex;
  padding: 1.25rem 1.875rem;
  align-items: center;
  gap: 0.5rem;
  border-radius: 1.25rem;
  border: 2px solid var(--10, #ddd);
  background: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
  flex: 1;
  margin-left: 2.19rem; /* 날짜와 카드 사이 간격만 2.19rem로 고정 */

  &:hover {
    border-color: var(--BP-Gradation, #68b8ea);
  }
`,a8=y.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`,r8=y.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,i8=y.div`
  display: flex;
  padding: 0.3125rem 0.625rem;
  justify-content: center;
  align-items: center;
  border-radius: 1.875rem;
  border: 1px solid var(--5, #e9e9e9);
  background: ${a=>a.$isHighSeverity?"#EB7070":"#fff"};
  color: ${a=>a.$isHighSeverity?"var(--1, #F2F2F2)":"var(--50, #7a7a7a)"};
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`,l8=y.div`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
`,o8=y.div`
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
`,s8=y.img`
  width: 1.23rem;
  height: 1.23rem;
`;function c8({folderId:a,folderName:i}){const[o,l]=w.useState(!0),[f,d]=w.useState(null),[h,v]=w.useState([]),[m,g]=w.useState(""),[b,S]=w.useState("oldest"),j=w.useRef(null),_=w.useRef([]),[C,E]=w.useState({top:0,height:0}),A=(I,ne)=>{ne&&(_.current[I]=ne)},D=()=>`모아보기   >   ${i||"폴더명"}`,H=w.useCallback(async()=>{try{l(!0);const I=await et.getHelpai(a);if(console.log("API 응답 데이터:",I),I&&I.isSuccess&&I.data){const ne={drawer_name:I.data.drawer_name,assailant:I.data.assailant,record_count:I.data.record_count,summary:I.data.summary};d(ne)}else d(null)}catch(I){window.handleApiError(I,"오류가 발생했습니다. 메인 페이지로 이동합니다.")}finally{l(!1)}},[a]),z=w.useCallback(async(I="")=>{try{const ne=await et.getTimeline(a,I);console.log("타임라인 API 응답 데이터:",ne),ne&&ne.isSuccess&&ne.data?v(ne.data.timelines||[]):v([])}catch(ne){window.handleApiError(ne,"오류가 발생했습니다. 메인 페이지로 이동합니다.")}},[a]),K=()=>{const I=m.trim();z(I)},Z=()=>{S(I=>I==="oldest"?"newest":"oldest")};if(w.useEffect(()=>{H(),z()},[H,z]),w.useLayoutEffect(()=>{if(j.current)if(_.current.length>=2){const I=j.current.getBoundingClientRect(),ne=_.current[0].getBoundingClientRect(),ce=_.current[_.current.length-1].getBoundingClientRect(),pe=ne.top-I.top+ne.height/2,se=ce.top-ne.top+(ce.height-ne.height)/2;E({top:pe,height:se})}else E({top:0,height:0})},[h,o]),o)return c.jsxs(b1,{children:[c.jsx(jt,{currentPage:"summary"}),c.jsx(w1,{children:c.jsx(B4,{children:"요약 데이터를 불러오는 중..."})})]});const ee=I=>{const ne=new Date(I),ce=ne.getFullYear(),pe=String(ne.getMonth()+1).padStart(2,"0"),se=String(ne.getDate()).padStart(2,"0");return`${ce}.${pe}.${se}`},P=h.sort((I,ne)=>{const ce=new Date(I.occurred_at),pe=new Date(ne.occurred_at);return b==="oldest"?ce-pe:pe-ce});return _.current=[],c.jsxs(b1,{children:[c.jsx(jt,{currentPage:"summary"}),c.jsx(Nn,{onClick:()=>{window.navigation.navigateToDrawer&&window.navigation.navigateToDrawer("incident")}}),c.jsxs(w1,{children:[c.jsxs($4,{children:[c.jsx(U4,{children:D()}),c.jsx(H4,{children:f?.drawer_name||"폴더명"})]}),c.jsxs(P4,{children:[c.jsxs(wf,{children:[c.jsx(Sf,{children:"가해자"}),c.jsx(q4,{children:f?.assailant?.map((I,ne)=>c.jsx(V4,{children:I},ne))})]}),c.jsxs(wf,{children:[c.jsx(Sf,{children:"기록 갯수"}),c.jsxs(S1,{children:[f?.record_count||0,"개"]})]}),c.jsxs(wf,{children:[c.jsx(Sf,{children:"요약"}),c.jsx(S1,{children:f?.summary||"요약 정보가 없습니다."})]})]}),c.jsxs(G4,{children:[c.jsxs(Y4,{onClick:Z,children:[c.jsx("img",{src:L4,alt:"정렬"}),c.jsx("span",{children:b==="oldest"?"오래된 순":"최신순"})]}),c.jsxs(F4,{children:[c.jsx(X4,{type:"text",placeholder:"검색어를 입력하세요",value:m,onChange:I=>g(I.target.value),onKeyPress:I=>{I.key==="Enter"&&K()}}),c.jsx(Z4,{onClick:K,children:c.jsx("img",{src:N4,alt:"검색"})})]})]}),P.length>0?c.jsxs(K4,{ref:j,children:[P.length>=2&&c.jsx(I4,{style:{top:C.top,height:C.height}}),P.map((I,ne)=>c.jsxs(J4,{children:[c.jsx(W4,{children:c.jsx(e8,{ref:ce=>A(ne,ce),$filled:b==="oldest"?ne===0:ne===P.length-1})}),c.jsx(t8,{children:ee(I.occurred_at)}),c.jsxs(n8,{onClick:()=>{window.navigation.navigateToRecordDetail&&window.navigation.navigateToRecordDetail("summary",I.record_id)},children:[c.jsxs(a8,{children:[c.jsxs(r8,{children:[c.jsx(i8,{$isHighSeverity:I.severity===2,children:I.category}),c.jsx(l8,{children:I.title})]}),c.jsx(o8,{children:I.summary})]}),c.jsx(s8,{src:ds,alt:"더보기"})]})]},I.record_id))]}):c.jsx(Q4,{children:"검색 결과가 없습니다."})]})]})}const u8="/assets/ContentProveIcon-Mx1dvyA1.svg",f8="/assets/ConsultantIcon-ysQk3iPb.svg",d8=y.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`,h8=y.div`
  width: 57.125rem;
  margin: 0 auto;
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  padding: 2rem;
`,m8=y.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
  margin-top: 4.5rem;
`,g8=y.div`
  color: var(--30, #acacac);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  white-space: pre;
`,p8=y.div`
  color: var(--70, #4a4a4a);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
`,y8=y.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`,C1=y.div`
  display: flex;
  width: 100%;
  padding: 1.875rem;
  justify-content: flex-end;
  align-items: center;
  gap: 0.625rem;
  background: #fff;
  border-radius: 1.25rem;
  border: 1px solid var(--main-stroke, #bec8e3);
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 1px 3px 10px 0 rgba(0, 0, 0, 0.15);
  }
`,j1=y.img`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
`,E1=y.div`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
`,T1=y.div`
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
  white-space: pre-line;
`,v8=y.span`
  color: var(--seconday, #688ae0);
`;function x8({recordId:a,recordName:i,drawerName:o}){const l=Ut(),[f,d]=w.useState(!1),[h,v]=w.useState(!1),[m,g]=w.useState(""),[b,S]=w.useState(""),j=()=>o?`모아보기   >   ${o}   >   ${i||"기록명"}   >   자료 내려받기`:`${i||"기록명"}   >   자료 내려받기`,_=async C=>{if(C==="내용 증명 받기")l(`/get-content-prove/${a}`,{state:{recordName:i}});else if(C==="상담 자료 받기")try{console.log("상담 자료 PDF 다운로드 시작:",a);const E=await et.createConsultationPdf(a);if(console.log("상담 자료 PDF 응답:",E),E instanceof Blob){const A=window.URL.createObjectURL(E),D=document.createElement("a");D.href=A,D.download="consult.pdf",document.body.appendChild(D),D.click(),document.body.removeChild(D),window.URL.revokeObjectURL(A),g("상담 자료 PDF가 성공적으로 다운로드되었습니다."),d(!0)}else g("상담 자료가 성공적으로 생성되었습니다."),d(!0)}catch(E){console.error("상담 자료 생성 중 오류:",E),S("상담 자료 생성에 실패했습니다. 다시 시도해주세요."),v(!0)}};return c.jsxs(d8,{children:[c.jsx(jt,{currentPage:"extract-pdf"}),c.jsx(Nn,{onClick:()=>l(-1)}),c.jsxs(h8,{children:[c.jsxs(m8,{children:[c.jsx(g8,{children:j()}),c.jsx(p8,{children:"자료 내려받기"})]}),c.jsxs(y8,{children:[c.jsxs(C1,{onClick:()=>_("내용 증명 받기"),children:[c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.62rem",flex:1},children:[c.jsx(E1,{children:"내용 증명 받기"}),c.jsxs(T1,{children:["내용증명은"," ",c.jsx(v8,{children:"내가 상대방에게 보낸 말을 공식적으로 증명해 주는 제도"}),"입니다.",`
`,"작성자는 같은 문서를 3부 준비해 발신인/ 수신인/ 우체국이 각각 보관합니다.",`
`,"이 기록은 '내가 이런 요구/주장을 했다'는 강력한 증거가 되며,",`
`,"법원이나 경찰에 제출하면 신빙성을 높여주는 자료로 활용됩니다."]})]}),c.jsx(j1,{src:ds,alt:"화살표"})]}),c.jsxs(C1,{onClick:()=>_("상담 자료 받기"),children:[c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.62rem",flex:1},children:[c.jsx(E1,{children:"상담 자료 받기"}),c.jsx(T1,{children:"기록한 자료를 바탕으로 상담을 진행할 수 있도록 PDF 형식으로 자료를 만들어 드립니다."})]}),c.jsx(j1,{src:ds,alt:"화살표"})]})]})]}),c.jsx(oi,{isOpen:f,onClose:()=>d(!1),title:"상담 자료 생성 완료",message:m}),c.jsx(aa,{isOpen:h,onClose:()=>v(!1),title:"상담 자료 생성 실패",message:b})]})}const b8=y.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
`,w8=y.div`
  width: 59rem;
  margin: 0 auto;
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-bottom: 1rem;
  box-sizing: border-box;
  padding-left: 1rem;
  padding-right: 1rem;
`,S8=y.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
  margin-top: 6.44rem;
  margin-bottom: 2rem;
`,C8=y.div`
  color: var(--30, #acacac);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  white-space: pre;
`,j8=y.div`
  color: var(--70, #4a4a4a);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
`;y.div`
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
  text-align: left;
  white-space: pre-line;
  margin-top: 0.63rem;
`;y.span`
  color: var(--seconday, #688ae0);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
`;const E8=y.div`
  width: 100%;
  margin-top: 1.4rem;
  display: flex;
  gap: 2.5rem;
  align-items: center;
  justify-content: center;
`,A1=y.div`
  width: 26.25rem;
  height: 8.375rem;
  flex-shrink: 0;
  border-radius: 1.25rem;
  border: ${a=>a.$selected?"3px solid var(--seconday, #688AE0)":"1px solid var(--main-stroke, #BEC8E3)"};
  background: var(--Main-bk, #f8faff);
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 1px 3px 10px 0 rgba(0, 0, 0, 0.15);
  }
`,R1=y.div`
  color: ${a=>a.$hasSelection&&!a.$selected?"var(--10, #DDD)":"#000"};
  text-align: left;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
  margin-bottom: 0.94rem;
  margin-left: 1.88rem;
`,_1=y.div`
  color: ${a=>a.$hasSelection&&!a.$selected?"var(--10, #DDD)":"#000"};
  text-align: left;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  margin-left: 1.88rem;
`,T8=y.div`
  width: 100%;
  margin-top: 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`,A8=y.div`
  display: flex;
  align-items: center;
  gap: 1.06rem;
  width: 100%;
  height: 2.75rem;
  margin-bottom: 1.38rem;
`,R8=y.img`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
`,_8=y.div`
  color: #e44343;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
  white-space: pre-line;
`,M8=y.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin-bottom: 0.8rem;
`,O8=y.div`
  color: #000;
  text-align: left;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  white-space: nowrap;
  width: 8rem;
  flex-shrink: 0;
`,xd=y.input`
  display: flex;
  width: 34.6875rem;
  max-width: 34.6875rem;
  padding: 0.625rem 0.9375rem;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.625rem;
  border: 1px solid ${a=>a.$isInvalid?"#ff6b6b":"#ddd"};
  background: ${a=>a.$isInvalid?"#fff5f5":"#fff"};
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  outline: none;

  &:focus {
    border: 1px solid ${a=>a.$isInvalid?"#ff6b6b":"#68b8ea"};
    background: ${a=>a.$isInvalid?"#fff5f5":"#e6f6ff"};
  }

  &:disabled {
    background: #f5f5f5;
    color: #666;
  }

  &:read-only {
    background: #f5f5f5;
    color: #666;
    cursor: not-allowed;
  }
`,D8=y.button`
  display: flex;
  width: 5.875rem;
  height: 2.375rem;
  padding: 0.56rem 1rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.5rem;
  border: 1px solid var(--seconday, #688ae0);
  background: linear-gradient(
    267deg,
    var(--Color, #68b8ea) -99.74%,
    #688ae0 37.78%,
    #8c68e0 177.79%
  );
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(104, 138, 224, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`,z8=y.div`
  display: flex;
  align-items: center;
  gap: 1.88rem;
`,k8=y.div`
  width: 100%;
`,L8=y.div`
  width: 100%;
`,M1=y.div`
  color: #000;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  font-family: Pretendard;
`,N8=y.div`
  width: 100%;
  margin-top: 5rem;
  display: flex;
  justify-content: center;
`,bd=({label:a,children:i})=>c.jsxs(M8,{children:[c.jsx(O8,{children:a}),i]}),Zo=({label:a,value:i,onChange:o,placeholder:l,readOnly:f,isInvalid:d})=>c.jsx(bd,{label:a,children:c.jsx(xd,{type:"text",value:i,onChange:o,placeholder:l,readOnly:f,$isInvalid:d})}),O1=({value:a,onChange:i,onSearch:o,placeholder:l})=>c.jsx(bd,{label:"주소",children:c.jsxs(z8,{children:[c.jsx(xd,{type:"text",value:a,onChange:i,placeholder:l,readOnly:!0}),c.jsx(D8,{onClick:o,children:"주소 찾기"})]})}),D1=({value:a,onChange:i,isInvalid:o,placeholder:l})=>c.jsx(bd,{label:"전화번호",children:c.jsx(xd,{type:"text",value:a,onChange:i,placeholder:l,$isInvalid:o})});function $8({recordId:a,recordName:i}){const o=Ut(),[l,f]=w.useState(null),[d,h]=w.useState(!1),[v,m]=w.useState(!1),[g,b]=w.useState(!1),[S,j]=w.useState(""),[_,C]=w.useState(""),E=Ir.useRef(null),[A,D]=w.useState(""),[H,z]=w.useState(""),[K,Z]=w.useState(""),[ee,P]=w.useState(""),[I,ne]=w.useState(!0),[ce,pe]=w.useState(""),[se,xe]=w.useState(""),[be,re]=w.useState(""),[O,J]=w.useState(""),[le,de]=w.useState(!0);w.useEffect(()=>{const Y=document.createElement("script");return Y.src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js",Y.async=!0,document.head.appendChild(Y),()=>{const ue=document.querySelector(`script[src="${Y.src}"]`);ue&&document.head.removeChild(ue)}},[]);const R=()=>`${i||"기록명"}   >   자료 내려받기   >   내용 증명 받기`,q=Y=>{f(l===Y?null:Y),D(""),z(""),Z(""),P(""),pe(""),xe(""),re(""),J(""),ne(!0),de(!0)},te=Y=>{window.daum&&window.daum.Postcode?new window.daum.Postcode({oncomplete:function(ue){const Ce=ue.address,he=ue.zonecode,fe=`${Ce} [${he}]`;Y==="perpetrator"?z(fe):xe(fe)}}).open():(C("주소 검색 서비스를 불러오는 중입니다. 잠시 후 다시 시도해주세요."),b(!0))},ae=(Y,ue)=>{const he=Y.target.value.replace(/[^0-9]/g,"");if(he.length<=11){let fe=he;if(he.length>3&&(fe=he.slice(0,3)+"-"+he.slice(3)),he.length>7&&(fe=he.slice(0,3)+"-"+he.slice(3,7)+"-"+he.slice(7)),ue==="perpetrator"){P(fe);const ge=he.length===11&&he.startsWith("010");ne(ge)}else{J(fe);const ge=he.length===11&&he.startsWith("010");de(ge)}}},ie=()=>{h(!0)},Se=()=>{h(!1)},B=async()=>{console.log("내용증명 추출 확인됨"),h(!1);try{const Y=(he,fe)=>he?fe?`${he} ${fe}`:he:null,ue=l==="상대방의 주소를 알아요"?{sender_name:ce,sender_address:Y(se,be),sender_phone:null,receiver_name:A,receiver_address:Y(H,K),receiver_phone:null}:{sender_name:ce,sender_address:null,sender_phone:O,receiver_name:A,receiver_address:null,receiver_phone:ee};console.log("API 요청 데이터:",ue);const Ce=await et.createContentProvePdf(a,ue);if(console.log("API 응답 데이터:",Ce),Ce instanceof Blob){const he=window.URL.createObjectURL(Ce),fe=document.createElement("a");fe.href=he,fe.download="notice.pdf",document.body.appendChild(fe),fe.click(),document.body.removeChild(fe),window.URL.revokeObjectURL(he),j("내용증명 PDF가 성공적으로 다운로드되었습니다."),m(!0)}else j("내용증명이 성공적으로 생성되었습니다."),m(!0)}catch(Y){console.error("내용증명 생성 중 오류:",Y),C("내용증명 생성에 실패했습니다. 다시 시도해주세요."),b(!0)}},V=w.useMemo(()=>l==="상대방의 주소를 알아요"?A.trim()!==""&&H.trim()!==""&&K.trim()!==""&&ce.trim()!==""&&se.trim()!==""&&be.trim()!=="":l==="상대방의 주소를 몰라요"?A.trim()!==""&&I&&ee.trim()!==""&&ce.trim()!==""&&le&&O.trim()!=="":!1,[l,A,H,K,ce,se,be,ee,I,O,le]);return w.useEffect(()=>{V&&E.current&&setTimeout(()=>{E.current.scrollTo({top:E.current.scrollHeight,behavior:"smooth"})},100)},[V]),c.jsxs(b8,{children:[c.jsx(jt,{currentPage:"get-content-prove"}),c.jsx(Nn,{onClick:()=>o(-1)}),c.jsxs(w8,{ref:E,children:[c.jsxs(S8,{children:[c.jsx(C8,{children:R()}),c.jsx(j8,{children:"내용 증명 받기"})]}),c.jsxs(E8,{children:[c.jsxs(A1,{$selected:l==="상대방의 주소를 알아요",onClick:()=>q("상대방의 주소를 알아요"),children:[c.jsx(R1,{$selected:l==="상대방의 주소를 알아요",$hasSelection:l!==null,children:"상대방의 주소를 알아요"}),c.jsx(_1,{$selected:l==="상대방의 주소를 알아요",$hasSelection:l!==null,children:"우체국 내용 증명, 전자 내용 증명을 보낼 수 있어요"})]}),c.jsxs(A1,{$selected:l==="상대방의 주소를 몰라요",onClick:()=>q("상대방의 주소를 몰라요"),children:[c.jsx(R1,{$selected:l==="상대방의 주소를 몰라요",$hasSelection:l!==null,children:"상대방의 주소를 몰라요"}),c.jsx(_1,{$selected:l==="상대방의 주소를 몰라요",$hasSelection:l!==null,children:"상대방의 전화번호로 전자 내용 증명을 보낼 수 있어요"})]})]}),l&&c.jsxs(T8,{children:[c.jsxs(A8,{children:[c.jsx(R8,{src:i2,alt:"경고"}),c.jsxs(_8,{children:["내용증명 제출시 3부 모두 동일해야만 효력이 인정됩니다.",`
`,"작성 후 임의로 줄을 긋거나 수정할 수 없으므로, 제출 전 반드시 내용을 충분히 확인해 주십시오."]})]}),c.jsxs(k8,{children:[c.jsx(M1,{children:"가해자 정보"}),c.jsx(Zo,{label:"이름",value:A,onChange:Y=>D(Y.target.value),placeholder:"가해자 이름을 입력하세요"}),l==="상대방의 주소를 알아요"?c.jsxs(c.Fragment,{children:[c.jsx(O1,{value:H,onChange:Y=>z(Y.target.value),onSearch:()=>te("perpetrator"),placeholder:"주소 찾기를 통해 가해자의 주소를 입력하세요"}),c.jsx(Zo,{label:"상세 주소",value:K,onChange:Y=>Z(Y.target.value),placeholder:"상세 주소를 입력하세요 (동, 호수 등)"})]}):c.jsx(D1,{value:ee,onChange:Y=>ae(Y,"perpetrator"),isInvalid:!I&&ee.length>0,placeholder:"가해자 전화번호를 입력하세요 (예: 010-1234-5678)"})]}),c.jsxs(L8,{children:[c.jsx(M1,{children:"피해자 정보"}),c.jsx(Zo,{label:"이름",value:ce,onChange:Y=>pe(Y.target.value),placeholder:"피해자 이름을 입력하세요"}),l==="상대방의 주소를 알아요"?c.jsxs(c.Fragment,{children:[c.jsx(O1,{value:se,onChange:Y=>xe(Y.target.value),onSearch:()=>te("victim"),placeholder:"주소 찾기를 통해 피해자의 주소를 입력하세요"}),c.jsx(Zo,{label:"상세 주소",value:be,onChange:Y=>re(Y.target.value),placeholder:"상세 주소를 입력하세요 (동, 호수 등)"})]}):c.jsx(D1,{value:O,onChange:Y=>ae(Y,"victim"),isInvalid:!le&&O.length>0,placeholder:"피해자 전화번호를 입력하세요 (예: 010-1234-5678)"})]})]}),V&&c.jsx(N8,{children:c.jsx(tr,{onClick:ie,children:"내용 증명 받기"})})]}),c.jsx(r2,{isOpen:d,onClose:Se,onConfirm:B,title:"내용증명을 추출할까요?",subtitle:""}),c.jsx(oi,{isOpen:v,onClose:()=>m(!1),title:"내용증명 생성 완료",message:S}),c.jsx(aa,{isOpen:g,onClose:()=>b(!1),title:"내용증명 생성 실패",message:_})]})}const U8="/assets/lawyer1-GP9Hk7Fn.png",H8="/assets/lawyer2-_OCTtxJM.png",B8="/assets/lawyer3-BE_DKS-8.png",P8="/assets/lawyer4-Cl3AOR9W.png",q8="/assets/lawyer5-C1qu58Hc.png",V8="/assets/laweyer6-hyyy0Sh4.png",G8="/assets/lawyer7-DyyCM-9O.png",Y8="/assets/lawyer8-BbHypmwC.png",F8=y.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`,X8=y.div`
  width: 65rem;
  margin: 0 auto;
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-top: 6.31rem; /* 4rem (header) + 2rem (padding) + 0.31rem (additional margin) */
`,Z8=y.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
  align-items: flex-start;
  margin-bottom: 2rem;
`;y.div`
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`;const K8=y.h1`
  color: var(--70, #4a4a4a);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.5rem;
  margin: 0;
`,Q8=y.div`
  display: grid;
  grid-template-columns: repeat(4, 15.5rem);
  gap: 1rem;
  justify-content: flex-start;
`,I8=y.div`
  width: 13rem;
  height: 19.4375rem;
  display: flex;
  padding: 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.625rem;
  border: 1px solid var(--main-stroke, #bec8e3);
  background: var(--Main-bk, #f8faff);
`,J8=y.div`
  width: 100%;
  height: 100%;
  margin-bottom: 1.25rem;
  aspect-ratio: 1/1;
  border-radius: 0.3125rem;
  background: ${a=>`url(${a.src}) lightgray 0px -0.502px / 100% 106.667% no-repeat`};
  background-size: cover;
  background-position: center;
`,W8=y.div`
  display: flex;
  flex-direction: column;
  gap: 0.19rem;
  width: 100%;
`,eC=y.div`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.25rem;
`,tC=y.div`
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`,nC=y.div`
  display: inline-flex;
  padding: 0.25rem 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 1.875rem;
  border: 1px solid var(--5, #e9e9e9);
  background: #fff;
  color: var(--50, #7a7a7a);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  margin-top: 0.5rem;
  width: fit-content;
  white-space: nowrap;
`,aC=[{id:1,name:"김민수 변호사",lawFirm:"법무법인 한결",specialization:"형사 사건",image:U8},{id:2,name:"이서현 변호사",lawFirm:"법무법인 미래",specialization:"지적재산권·특허",image:H8},{id:3,name:"박준호 변호사",lawFirm:"법무법인 대륙아주",specialization:"이혼·가사 사건",image:B8},{id:4,name:"정다은 변호사",lawFirm:"법무법인 바른길",specialization:"지적재산권·특허",image:P8},{id:5,name:"최현우 변호사",lawFirm:"법무법인 해우",specialization:"부동산, 건설",image:q8},{id:6,name:"오지민 변호사",lawFirm:"법무법인 새빛",specialization:"노동, 재산",image:V8},{id:7,name:"한지수 변호사",lawFirm:"법무법인 정윤",specialization:"국제거래, 부채",image:G8},{id:8,name:"서강훈 변호사",lawFirm:"법무법인 다온",specialization:"형사, 마약",image:Y8}];function rC(){const a=Ut(),i=o=>{a("/lawyer-details",{state:{lawyerData:o}})};return c.jsxs(F8,{children:[c.jsx(jt,{currentPage:"lawyer"}),c.jsx(Nn,{onClick:()=>a(-1)}),c.jsxs(X8,{children:[c.jsx(Z8,{children:c.jsx(K8,{children:"변호사 상담"})}),c.jsx(Q8,{children:aC.map(o=>c.jsxs(I8,{onClick:()=>i(o),style:{cursor:"pointer"},children:[c.jsx(J8,{src:o.image}),c.jsxs(W8,{children:[c.jsx(eC,{children:o.name}),c.jsx(tC,{children:o.lawFirm}),c.jsx(nC,{children:o.specialization})]})]},o.id))})]})]})}const iC=y.div`
  width: 100%;
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
`,lC=y.div`
  width: 55rem;
  margin: 0 auto;
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,oC=y.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;
  justify-content: center;
`,z1=y.div`
  width: 18.5625rem;
  height: 23.125rem;
  flex-shrink: 0;
  border-radius: 1.25rem;
  border: 1px solid var(--main-stroke, #bec8e3);
  background: var(--Main-bk, #f8faff);
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 1px 3px 10px 0 rgba(0, 0, 0, 0.15);
  }
`,k1=y.img`
  width: 7.9375rem;
  height: 7.9375rem;
  margin-top: 3.69rem;
  margin-bottom: 2.81rem;
`,L1=y.div`
  color: var(--80, #313131);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  margin-bottom: 0.62rem;
`,N1=y.div`
  color: var(--70, #4a4a4a);
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
  white-space: pre-line;
  margin-bottom: 3.56rem;
`;function sC(){const a=Ut(),i=o=>{a(o==="변호사 매칭"?"/lawyer":"/consultant-connect")};return c.jsxs(iC,{children:[c.jsx(jt,{currentPage:"consultant"}),c.jsx(lC,{children:c.jsxs(oC,{children:[c.jsxs(z1,{onClick:()=>i("변호사 매칭"),children:[c.jsx(k1,{src:u8,alt:"변호사 매칭"}),c.jsx(L1,{children:"변호사 매칭"}),c.jsxs(N1,{children:["내 권리를 지키고,",`
`,"필요한 법적 도움을 받을 수 있어요"]})]}),c.jsxs(z1,{onClick:()=>i("상담사 매칭"),children:[c.jsx(k1,{src:f8,alt:"상담사 매칭"}),c.jsx(L1,{children:"상담사 매칭"}),c.jsxs(N1,{children:["심리적·신체적 회복을 돕는",`
`,"상담과 의료 지원을 받을 수 있어요"]})]})]})})]})}const cC="/assets/Consultant1-BcB-1Syn.svg",uC="/assets/Consultant2-Lb1SXS51.svg",fC="/assets/Consultant3-CORq5UIV.svg",dC="/assets/Consultant4-CPXrPqjx.svg",hC="/assets/Consultant5-CCgr6m-W.svg",mC="/assets/Consultant6-DE9F4LKo.svg",gC="/assets/Consultant7-DF3PLRzA.svg",pC="/assets/Consultant8-C1-j25nv.svg",yC=y.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`,vC=y.div`
  width: 65rem;
  margin: 0 auto;
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-top: 6.31rem; /* 4rem (header) + 2rem (padding) + 0.31rem (additional margin) */
`,xC=y.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
  align-items: flex-start;
  margin-bottom: 2rem;
`;y.div`
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`;const bC=y.h1`
  color: var(--70, #4a4a4a);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.5rem;
  margin: 0;
`,wC=y.div`
  display: grid;
  grid-template-columns: repeat(4, 15.5rem);
  gap: 1rem;
  justify-content: flex-start;
`,SC=y.div`
  width: 13rem;
  height: 19.4375rem;
  display: flex;
  padding: 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.625rem;
  border: 1px solid var(--main-stroke, #bec8e3);
  background: var(--Main-bk, #f8faff);
`,CC=y.div`
  width: 100%;
  height: 100%;
  margin-bottom: 1.25rem;
  aspect-ratio: 1/1;
  border-radius: 0.3125rem;
  background: ${a=>`url(${a.src}) lightgray 0px -0.502px / 100% 106.667% no-repeat`};
  background-size: cover;
  background-position: center;
`,jC=y.div`
  display: flex;
  flex-direction: column;
  gap: 0.19rem;
  width: 100%;
`,EC=y.div`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.25rem;
`,TC=y.div`
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`,AC=y.div`
  display: inline-flex;
  padding: 0.25rem 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 1.875rem;
  border: 1px solid var(--5, #e9e9e9);
  background: #fff;
  color: var(--50, #7a7a7a);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  margin-top: 0.5rem;
  width: fit-content;
  white-space: nowrap;
`,RC=[{id:1,name:"김하늘 상담사",organization:"경력 8년",specialization:"우울증·불안장애",image:cC},{id:2,name:"이민준 상담사",organization:"경력 12년",specialization:"커리어·직무 스트레스",image:uC},{id:3,name:"박소영 상담사",organization:"경력 5년",specialization:"청소년 상담",image:fC},{id:4,name:"최지훈 상담사",organization:"경력 10년",specialization:"부부 상담",image:dC},{id:5,name:"한예린 상담사",organization:"경력 5년",specialization:"대인관계",image:hC},{id:6,name:"정우진 상담사",organization:"경력 8년",specialization:"불안장애·스트레스",image:mC},{id:7,name:"윤채원 상담사",organization:"경력 12년",specialization:"대인관계",image:gC},{id:8,name:"강태호 상담사",organization:"경력 11년",specialization:"정신건강",image:pC}];function _C(){const a=Ut(),i=o=>{a("/consultant-details",{state:{consultantData:o}})};return c.jsxs(yC,{children:[c.jsx(jt,{currentPage:"consultant-connect"}),c.jsx(Nn,{onClick:()=>a(-1)}),c.jsxs(vC,{children:[c.jsx(xC,{children:c.jsx(bC,{children:"상담사 상담"})}),c.jsx(wC,{children:RC.map(o=>c.jsxs(SC,{onClick:()=>i(o),style:{cursor:"pointer"},children:[c.jsx(CC,{src:o.image}),c.jsxs(jC,{children:[c.jsx(EC,{children:o.name}),c.jsx(TC,{children:o.organization}),c.jsx(AC,{children:o.specialization})]})]},o.id))})]})]})}const MC=y.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`,OC=y.div`
  width: 55rem;
  margin: 0 auto;
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  padding: 2rem;
`,DC=y.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
  margin-top: 4.5rem;
`,zC=y.div`
  color: var(--30, #acacac);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  white-space: pre;
`,kC=y.div`
  color: var(--70, #4a4a4a);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
`,LC=y.div`
  display: flex;
  width: 51rem;
  padding: 2.5rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 1.25rem;
  border: 2px solid var(--main-stroke, #bec8e3);
  background: #fff;
  margin-top: 4.06rem;
`,NC=y.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,$C=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,UC=y.div`
  width: 12rem;
  height: 12rem;
  border-radius: 0.625rem;
  background: ${a=>`url(${a.src}) lightgray 0px -0.502px / 100% 106.667% no-repeat`};
  background-size: cover;
  background-position: center;
  border: 1px solid var(--main-stroke, #bec8e3);
`,HC=y.div`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  margin-bottom: 0.4rem;
`,BC=y.div`
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
  margin-bottom: 1.5rem;
`,cl=y.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.9rem;
`,ul=y.div`
  color: var(--30, #acacac);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
  min-width: 4rem;
  flex-shrink: 0;
`,Ko=y.div`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  flex: 1;
`,PC=y.div`
  display: flex;
  height: 1.875rem;
  padding: 0.3125rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1.875rem;
  border: 1px solid var(--5, #e9e9e9);
  background: #fff;
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  width: fit-content;
`;function qC(){const i=gn().state?.lawyerData,o=()=>i?`변호사 상담   >   ${i.name}`:"변호사 상담   >   변호사 상세정보",f=i?{1:{location:"서울특별시 서초구",contact:"02-1234-567",email:"kms@example.com",experience:"서울중앙지검 검사 출신, 8년 경력",specialization:"형사 사건"},2:{location:"서울특별시 종로구",contact:"02-2345-6789",email:"lsh@example.com",experience:"대법원 판사 출신, 12년 경력",specialization:"지적재산권·특허"},3:{location:"서울특별시 서초구",contact:"02-3456-7890",email:"pjh@example.com",experience:"가정법원 판사 출신, 10년 경력",specialization:"이혼·가사 사건"},4:{location:"서울특별시 마포구",contact:"02-4567-8901",email:"jdh@example.com",experience:"특허청 심사관 출신, 15년 경력",specialization:"지적재산권·특허"},5:{location:"서울특별시 송파구",contact:"02-5678-9012",email:"chw@example.com",experience:"국토교통부 공무원 출신, 11년 경력",specialization:"부동산·건설"},6:{location:"서울특별시 영등포구",contact:"02-6789-0123",email:"ojm@example.com",experience:"노동부 공무원 출신, 9년 경력",specialization:"노동·재산"},7:{location:"서울특별시 중구",contact:"02-7890-1234",email:"hjs@example.com",experience:"기획재정부 공무원 출신, 13년 경력",specialization:"국제거래·부채"},8:{location:"서울특별시 용산구",contact:"02-8901-2345",email:"skh@example.com",experience:"검찰청 검사 출신, 7년 경력",specialization:"형사·마약"}}[i.id]:{location:"서울특별시 서초구",contact:"02-1234-567",email:"kms@example.com",experience:"서울중앙지검 검사 출신, 8년 경력",specialization:"형사 사건"},d=Ut();return c.jsxs(MC,{children:[c.jsx(jt,{currentPage:"lawyer-details"}),c.jsx(Nn,{onClick:()=>d(-1)}),c.jsxs(OC,{children:[c.jsxs(DC,{children:[c.jsx(zC,{children:o()}),c.jsx(kC,{children:"변호사 상담"})]}),c.jsxs(LC,{children:[c.jsxs(NC,{children:[c.jsx(HC,{children:i?.name||"변호사 이름"}),c.jsx(BC,{children:i?.lawFirm||"법무법인"}),c.jsxs(cl,{children:[c.jsx(ul,{children:"위치"}),c.jsx(Ko,{children:f.location})]}),c.jsxs(cl,{children:[c.jsx(ul,{children:"연락처"}),c.jsx(Ko,{children:f.contact})]}),c.jsxs(cl,{children:[c.jsx(ul,{children:"이메일"}),c.jsx(Ko,{children:f.email})]}),c.jsxs(cl,{children:[c.jsx(ul,{children:"경력"}),c.jsx(Ko,{children:f.experience})]}),c.jsxs(cl,{children:[c.jsx(ul,{children:"전문 분야"}),c.jsx(PC,{children:f.specialization})]})]}),c.jsx($C,{children:c.jsx(UC,{src:i?.image||""})})]})]})]})}const VC=y.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`,GC=y.div`
  width: 55rem;
  margin: 0 auto;
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  padding: 2rem;
`,YC=y.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
  margin-top: 4.5rem;
`,FC=y.div`
  color: var(--30, #acacac);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  white-space: pre;
`,XC=y.div`
  color: var(--70, #4a4a4a);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
`,ZC=y.div`
  display: flex;
  width: 51rem;
  padding: 2.5rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 1.25rem;
  border: 2px solid var(--main-stroke, #bec8e3);
  background: #fff;
  margin-top: 4.06rem;
`,KC=y.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,QC=y.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,IC=y.div`
  width: 12rem;
  height: 12rem;
  border-radius: 0.625rem;
  background: ${a=>`url(${a.src}) lightgray 0px -0.502px / 100% 106.667% no-repeat`};
  background-size: cover;
  background-position: center;
  border: 1px solid var(--main-stroke, #bec8e3);
`,JC=y.div`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  margin-bottom: 0.4rem;
`,WC=y.div`
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
  margin-bottom: 1.5rem;
`,Xr=y.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.9rem;
`,Zr=y.div`
  color: var(--30, #acacac);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
  min-width: 4rem;
  flex-shrink: 0;
`,fl=y.div`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  flex: 1;
`,ej=y.div`
  display: flex;
  height: 1.875rem;
  padding: 0.3125rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1.875rem;
  border: 1px solid var(--5, #e9e9e9);
  background: #fff;
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  width: fit-content;
`;function tj(){const i=gn().state?.consultantData,o=()=>i?`상담사 매칭   >   ${i.name}`:"상담사 매칭   >   상담사 상세정보",f=i?{1:{experience:"8년",introduction:"마음 건강을 지키는 작은 습관부터 함께 찾아가요.",contact:"02-1234-567",email:"hskim92@example.com",consultationMethod:"온라인",consultationFee:"50,000원 / 시간",specialization:"우울증·불안장애"},2:{experience:"12년",introduction:"커리어와 직무 스트레스를 함께 해결해 나가요.",contact:"02-2345-6789",email:"lsh@example.com",consultationMethod:"대면",consultationFee:"60,000원 / 시간",specialization:"커리어·직무 스트레스"},3:{experience:"5년",introduction:"청소년의 마음을 이해하고 함께 성장해요.",contact:"02-3456-7890",email:"psy@example.com",consultationMethod:"온라인",consultationFee:"45,000원 / 시간",specialization:"청소년 상담·가족 상담"},4:{experience:"10년",introduction:"부부 관계 개선을 위한 전문적인 상담을 제공해요.",contact:"02-4567-8901",email:"couple@example.com",consultationMethod:"대면",consultationFee:"70,000원 / 시간",specialization:"부부 상담·가족 상담"},5:{experience:"5년",introduction:"대인관계 문제를 함께 해결해 나가요.",contact:"02-5678-9012",email:"relation@example.com",consultationMethod:"온라인",consultationFee:"40,000원 / 시간",specialization:"대인관계·자존감"},6:{experience:"8년",introduction:"불안과 스트레스를 함께 관리해 나가요.",contact:"02-6789-0123",email:"anxiety@example.com",consultationMethod:"온라인",consultationFee:"55,000원 / 시간",specialization:"불안장애·스트레스"},7:{experience:"12년",introduction:"건강한 대인관계를 위한 상담을 제공해요.",contact:"02-7890-1234",email:"social@example.com",consultationMethod:"대면",consultationFee:"65,000원 / 시간",specialization:"대인관계·사회성"},8:{experience:"11년",introduction:"정신건강 회복을 위한 전문적인 상담을 제공해요.",contact:"02-8901-2345",email:"mental@example.com",consultationMethod:"온라인",consultationFee:"75,000원 / 시간",specialization:"정신건강·트라우마"}}[i.id]:{experience:"8년",introduction:"마음 건강을 지키는 작은 습관부터 함께 찾아가요.",contact:"02-1234-567",email:"hskim92@example.com",consultationMethod:"온라인",consultationFee:"50,000원 / 시간",specialization:"우울증·불안장애"},d=Ut();return c.jsxs(VC,{children:[c.jsx(jt,{currentPage:"consultant-details"}),c.jsx(Nn,{onClick:()=>d(-1)}),c.jsxs(GC,{children:[c.jsxs(YC,{children:[c.jsx(FC,{children:o()}),c.jsx(XC,{children:"상담사 상담"})]}),c.jsxs(ZC,{children:[c.jsxs(KC,{children:[c.jsx(JC,{children:i?.name||"상담사 이름"}),c.jsxs(WC,{children:["경력 ",f.experience]}),c.jsxs(Xr,{children:[c.jsx(Zr,{children:"한 줄 소개"}),c.jsx(fl,{children:f.introduction})]}),c.jsxs(Xr,{children:[c.jsx(Zr,{children:"연락처"}),c.jsx(fl,{children:f.contact})]}),c.jsxs(Xr,{children:[c.jsx(Zr,{children:"이메일"}),c.jsx(fl,{children:f.email})]}),c.jsxs(Xr,{children:[c.jsx(Zr,{children:"상담 방식"}),c.jsx(fl,{children:f.consultationMethod})]}),c.jsxs(Xr,{children:[c.jsx(Zr,{children:"상담료"}),c.jsx(fl,{children:f.consultationFee})]}),c.jsxs(Xr,{children:[c.jsx(Zr,{children:"전문 분야"}),c.jsx(ej,{children:f.specialization})]})]}),c.jsx(QC,{children:c.jsx(IC,{src:i?.image||""})})]})]})]})}const $1=y.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`,U1=y.div`
  width: 55rem;
  margin: 0 auto;
  min-height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  padding: 2rem;
`,nj=y.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
  margin-top: 4.5rem;
`,aj=y.div`
  color: var(--30, #acacac);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  white-space: pre;
`,rj=y.div`
  color: var(--70, #4a4a4a);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
`,ij=y.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 500;
`,lj=y.div`
  display: flex;
  width: 100%;
  padding: 1.5625rem 1.875rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.9375rem;
  border-radius: 1.25rem;
  background: #fbfbfb;
  margin-top: 2rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 1rem;
  }
`,Cf=y.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  flex-wrap: wrap;
`,jf=y.div`
  color: var(--50, #7a7a7a);
  text-align: left;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  min-width: 4rem;
`,H1=y.div`
  color: var(--80, #313131);
  text-align: left;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  flex: 1;
  word-wrap: break-word;
  overflow-wrap: break-word;
`,oj=y.div`
  display: flex;
  gap: 0.5rem;
  flex: 1;
  flex-wrap: wrap;
`,sj=y.div`
  display: flex;
  padding: 0.3125rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1.875rem;
  background: var(--70, #4a4a4a);
  color: white;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 500;
`;y.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;y.div`
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
`;const cj=y.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6.25rem;
  align-self: stretch;
  margin-top: 2rem;
`,Ef=y.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  align-self: stretch;
`,Tf=y.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,Af=y.div`
  width: 0.3125rem;
  height: 1.375rem;
  background: var(--seconday, #688ae0);
`,Rf=y.div`
  color: var(--seconday, #688ae0);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
`,uj=y.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: 1.875rem;
  border: 1px solid var(--10, #ddd);
  background: #fff;
`,fj=y.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: 1.875rem;
  border: 1px solid var(--10, #ddd);
  background: #fff;
`,dj=y.div`
  display: flex;
  align-items: center;
  gap: 0.62rem;
`,hj=y.div`
  display: flex;
  padding: 0.3125rem 0.625rem;
  justify-content: center;
  align-items: center;
  border-radius: 1.875rem;
  background: #eb7070;
  color: white;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`,mj=y.div`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
`,gj=y.div`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
  margin-top: 0.62rem;
  white-space: pre-wrap;
`,pj=y.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-self: stretch;
`,yj=y.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-self: stretch;
`,B1=y.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: 1.875rem;
  border: 1px solid var(--10, #ddd);
  background: #fff;
`,P1=y.div`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
`,vj=y.div`
  display: flex;
  flex-direction: column;
  gap: 0.19rem;
  align-self: stretch;
  margin-top: 0.94rem;
`,_f=y.div`
  display: flex;
  align-items: flex-start;
  gap: 0.62rem;
`,Mf=y.div`
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
  width: 4.375rem;
  flex-shrink: 0;
`,Of=y.div`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
  flex: 1;
`,xj=y.a`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
  text-decoration: none;
  flex: 1;

  &:hover {
    text-decoration: underline;
  }
`,bj=y.div`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
  white-space: pre-wrap;
`,q1=y.span`
  color: var(--seconday, #688ae0);
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`,wj=y.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 4rem !important;
  padding-bottom: 2rem;
`;function Sj({drawerId:a,drawerName:i}){const o=Ut(),[l,f]=w.useState(i||""),[d,h]=w.useState(!0),[v,m]=w.useState(null);w.useEffect(()=>{f(i||"AI 도우미 폴더")},[a,i]);const g=async()=>{try{h(!0);const E=a||1;console.log("API 호출 시작, drawerId:",E);const A=await et.getHelpai(E);if(console.log("API 응답:",A),A&&A.isSuccess&&A.data){const D={...A.data,related_laws:A.data.related_laws?.laws||A.data.related_laws||[]};console.log("설정할 데이터:",D),m(D)}else console.log("응답이 유효하지 않음:",A),m(null)}catch(E){window.handleApiError(E,"오류가 발생했습니다. 메인 페이지로 이동합니다.")}finally{h(!1)}};w.useEffect(()=>{g()},[a]);const b=()=>`${l}   >   AI 도우미`,S=()=>{window.navigation.navigateToSummary&&window.navigation.navigateToSummary(a,i)},j=()=>{o("/consultant")},_=()=>{o(-1)},C=()=>((v?.care_guide||"")+`
당신의 선택은 과거의 아픔에 머무는 것이 아니라, 더 안전하고 밝은 내일을 향한 중요한 발걸음이에요.

앞으로도 같은 상황을 피하기 어려워 반복된다면, 그때마다 용기 내어 기록해 주세요.

이 기록들은 흩어지지 않고 당신을 지켜주는 든든한 증거가 될 거예요. 

숨쉬어 서비스는 사건 타임라인을 통해 상담 과정에서 내용을 한눈에 확인하실 수 있도록 정리해 드리고,
또한 변호사·상담사 연계 기능으로 법적·심리적 도움을 함께 이어드리고 있어요.
(서랍장에서는 사건별로 개별 내용증명과 상담 자료도 추출하실 수 있어요.)

앞으로도 같은 상황을 피하기 어려워 반복된다면, 그때마다 용기 내어 기록해 주세요.
이 기록들은 흩어지지 않고 당신을 지켜주는 든든한 증거가 될 거예요.`).split(/(사건 타임라인|변호사·상담사 연계 기능)/).map((z,K)=>z==="사건 타임라인"?c.jsx(q1,{onClick:S,children:z},K):z==="변호사·상담사 연계 기능"?c.jsx(q1,{onClick:j,children:z},K):z);return d?c.jsxs($1,{children:[c.jsx(jt,{currentPage:"ai-helper"}),c.jsx(U1,{children:c.jsx(ij,{children:"AI 도우미 데이터를 불러오는 중..."})})]}):c.jsxs($1,{children:[c.jsx(jt,{currentPage:"ai-helper"}),c.jsx(Nn,{onClick:()=>o(-1)}),c.jsxs(U1,{children:[c.jsxs(nj,{children:[c.jsx(aj,{children:b()}),c.jsx(rj,{children:l})]}),c.jsxs(lj,{children:[c.jsxs(Cf,{children:[c.jsx(jf,{children:"가해자"}),c.jsx(oj,{children:v?.assailant?.map((E,A)=>c.jsx(sj,{children:E},A))})]}),c.jsxs(Cf,{children:[c.jsx(jf,{children:"기록 횟수"}),c.jsxs(H1,{children:[v?.record_count||0,"개"]})]}),c.jsxs(Cf,{children:[c.jsx(jf,{children:"요약"}),c.jsx(H1,{children:v?.summary||"요약 정보가 없습니다."})]})]}),c.jsxs(cj,{children:[c.jsxs(Ef,{children:[c.jsxs(Tf,{children:[c.jsx(Af,{}),c.jsx(Rf,{children:"케어 가이드"})]}),c.jsx(uj,{children:c.jsx(bj,{children:C()})})]}),c.jsxs(Ef,{children:[c.jsxs(Tf,{children:[c.jsx(Af,{}),c.jsx(Rf,{children:"유사 법률 및 판례"})]}),c.jsx(pj,{children:v?.related_laws?.map((E,A)=>c.jsxs(fj,{children:[c.jsxs(dj,{children:[c.jsx(hj,{children:E.law_name}),c.jsx(mj,{children:E.article})]}),c.jsx(gj,{children:E.content})]},A))})]}),c.jsxs(Ef,{children:[c.jsxs(Tf,{children:[c.jsx(Af,{}),c.jsx(Rf,{children:"피해 상담 및 신고"})]}),c.jsx(yj,{children:v?.organizations&&v.organizations.length>0?v.organizations.map((E,A)=>c.jsxs(B1,{children:[c.jsx(P1,{children:E.name}),c.jsxs(vj,{children:[c.jsxs(_f,{children:[c.jsx(Mf,{children:"대표전화"}),c.jsx(Of,{children:E.phone})]}),c.jsxs(_f,{children:[c.jsx(Mf,{children:"상담 · 신고"}),c.jsx(Of,{children:E.description})]}),c.jsxs(_f,{children:[c.jsx(Mf,{children:"온라인"}),c.jsx(Of,{children:c.jsx(xj,{href:E.url,target:"_blank",rel:"noopener noreferrer",children:E.url})})]})]})]},A)):c.jsx(B1,{children:c.jsx(P1,{children:"상담 기관 정보가 없습니다."})})})]})]}),c.jsx(wj,{children:c.jsx(tr,{onClick:_,children:"목록으로"})})]})]})}const Cj="/assets/sadCloudIcon-DsuRvvg-.svg",jj=y.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1500;
`,Ej=y.div`
  display: flex;
  width: 21.125rem;
  padding: 3.75rem 0 1.875rem 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.25rem;
  border-radius: 1.875rem;
  background: #fff;
`,Tj=y.div`
  color: var(--80, #313131);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
`,Aj=y.div`
  color: var(--30, #acacac);
  text-align: center;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
`,Rj=y.div`
  width: 11.0625rem;
  height: 11.0625rem;
  aspect-ratio: 1 / 1;
  border-radius: 0.75rem;
  overflow: hidden;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`,_j=y.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;function Mj({onClose:a}){return c.jsx(jj,{"data-modal":"open",onClick:a,children:c.jsxs(Ej,{onClick:a,children:[c.jsx(Tj,{children:"아이쿠, 문제가 생겼어요"}),c.jsx(Aj,{children:"구름을 클릭해서 메인화면으로 돌아가요"}),c.jsx(Rj,{children:c.jsx(_j,{src:Cj,alt:"sad cloud"})})]})})}window.navigation={};let Df=!1;window.handleApiError=(a,i="API 호출 중 오류가 발생했습니다.")=>{if(Df){console.error("이미 에러 처리 중입니다:",i,a);return}Df=!0,console.error(i,a),setTimeout(()=>{Df=!1},1e3),window.showErrorModal&&window.showErrorModal()};function Oj(){const a=Ut(),i=gn(),[o,l]=w.useState(!1),[f,d]=w.useState(!1);w.useEffect(()=>{window.navigation.navigateToMain=()=>a("/"),window.navigation.navigateToChat=()=>a("/chat"),window.navigation.navigateToDrawer=(C="recent")=>a(`/drawer?tab=${C}`),window.navigation.navigateToLawyer=()=>a("/lawyer"),window.navigation.navigateToConsultant=()=>a("/consultant"),window.navigation.navigateToRecordDetail=(C,E)=>a(`/record/${E}`,{state:{previousPage:C}}),window.navigation.navigateToChatView=(C,E,A,D)=>a(`/chat-view/${C}`,{state:{pageTitle:E,created_at:A,drawerName:D}}),window.navigation.navigateToSummary=(C,E)=>a(`/summary/${C}`,{state:{folderName:E}}),window.navigation.navigateToExtractPdf=(C,E,A)=>a(`/extract-pdf/${C}`,{state:{recordName:E,drawerName:A}}),window.showErrorModal=()=>l(!0)},[a]),w.useEffect(()=>{const C=()=>{document.querySelector('[data-modal="open"]')&&window.history.go(1)};return window.addEventListener("popstate",C),()=>window.removeEventListener("popstate",C)},[i.pathname,a]);const h=()=>{const C=i.state||{};return c.jsx(x6,{onNavigateToMain:()=>a("/"),initialChatData:C.initialChatData||null})},v=()=>{const E=new URLSearchParams(i.search).get("tab")||"recent";return c.jsx(J7,{initialTab:E,onNavigateToMain:()=>a("/"),onNavigateToRecordDetail:(A,D)=>window.navigation.navigateToRecordDetail(A,D)})},m=()=>{const C=i.state||{},E=i.pathname.split("/").pop();return c.jsx(v4,{previousPage:C.previousPage||"main",record_id:Number(E)})},g=()=>{const C=i.state||{},E=i.pathname.split("/").pop();return c.jsx(k4,{record_id:Number(E),pageTitle:C.pageTitle,created_at:C.created_at,drawerName:C.drawerName})},b=()=>{const C=i.state||{},E=i.pathname.split("/").pop();return c.jsx(c8,{folderId:Number(E),folderName:C.folderName})},S=()=>{const{recordId:C}=Iu(),E=i.state||{};return c.jsx(x8,{recordId:C,recordName:E.recordName,drawerName:E.drawerName})},j=()=>{const{recordId:C}=Iu(),E=i.state||{};return c.jsx($8,{recordId:C,recordName:E.recordName})},_=()=>{const{drawerId:C}=Iu(),E=i.state||{};return c.jsx(Sj,{drawerId:C,drawerName:E.drawerName})};return c.jsxs(c.Fragment,{children:[c.jsxs(X5,{children:[c.jsx(kt,{path:"/",element:c.jsx(I3,{onNavigateToChat:C=>a("/chat",{state:{initialChatData:C}})})}),c.jsx(kt,{path:"/chat",element:c.jsx(h,{})}),c.jsx(kt,{path:"/drawer",element:c.jsx(v,{})}),c.jsx(kt,{path:"/record/:recordId",element:c.jsx(m,{})}),c.jsx(kt,{path:"/chat-view/:recordId",element:c.jsx(g,{})}),c.jsx(kt,{path:"/summary/:folderId",element:c.jsx(b,{})}),c.jsx(kt,{path:"/extract-pdf/:recordId",element:c.jsx(S,{})}),c.jsx(kt,{path:"/get-content-prove/:recordId",element:c.jsx(j,{})}),c.jsx(kt,{path:"/ai-helper/:drawerId",element:c.jsx(_,{})}),c.jsx(kt,{path:"/lawyer",element:c.jsx(rC,{})}),c.jsx(kt,{path:"/consultant",element:c.jsx(sC,{})}),c.jsx(kt,{path:"/consultant-connect",element:c.jsx(_C,{})}),c.jsx(kt,{path:"/lawyer-details",element:c.jsx(qC,{})}),c.jsx(kt,{path:"/consultant-details",element:c.jsx(tj,{})}),c.jsx(kt,{path:"*",element:c.jsx(Y5,{to:"/",replace:!0})})]}),o&&c.jsx(Mj,{onClose:()=>{l(!1),d(!0)}}),f&&!o&&c.jsx("div",{style:{display:"none"},children:(d(!1),window.navigation.navigateToMain&&window.navigation.navigateToMain(),null)})]})}function u2(a,i){return function(){return a.apply(i,arguments)}}const{toString:Dj}=Object.prototype,{getPrototypeOf:wd}=Object,{iterator:As,toStringTag:f2}=Symbol,Rs=(a=>i=>{const o=Dj.call(i);return a[o]||(a[o]=o.slice(8,-1).toLowerCase())})(Object.create(null)),Cn=a=>(a=a.toLowerCase(),i=>Rs(i)===a),_s=a=>i=>typeof i===a,{isArray:si}=Array,bl=_s("undefined");function El(a){return a!==null&&!bl(a)&&a.constructor!==null&&!bl(a.constructor)&&Xt(a.constructor.isBuffer)&&a.constructor.isBuffer(a)}const d2=Cn("ArrayBuffer");function zj(a){let i;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?i=ArrayBuffer.isView(a):i=a&&a.buffer&&d2(a.buffer),i}const kj=_s("string"),Xt=_s("function"),h2=_s("number"),Tl=a=>a!==null&&typeof a=="object",Lj=a=>a===!0||a===!1,rs=a=>{if(Rs(a)!=="object")return!1;const i=wd(a);return(i===null||i===Object.prototype||Object.getPrototypeOf(i)===null)&&!(f2 in a)&&!(As in a)},Nj=a=>{if(!Tl(a)||El(a))return!1;try{return Object.keys(a).length===0&&Object.getPrototypeOf(a)===Object.prototype}catch{return!1}},$j=Cn("Date"),Uj=Cn("File"),Hj=Cn("Blob"),Bj=Cn("FileList"),Pj=a=>Tl(a)&&Xt(a.pipe),qj=a=>{let i;return a&&(typeof FormData=="function"&&a instanceof FormData||Xt(a.append)&&((i=Rs(a))==="formdata"||i==="object"&&Xt(a.toString)&&a.toString()==="[object FormData]"))},Vj=Cn("URLSearchParams"),[Gj,Yj,Fj,Xj]=["ReadableStream","Request","Response","Headers"].map(Cn),Zj=a=>a.trim?a.trim():a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Al(a,i,{allOwnKeys:o=!1}={}){if(a===null||typeof a>"u")return;let l,f;if(typeof a!="object"&&(a=[a]),si(a))for(l=0,f=a.length;l<f;l++)i.call(null,a[l],l,a);else{if(El(a))return;const d=o?Object.getOwnPropertyNames(a):Object.keys(a),h=d.length;let v;for(l=0;l<h;l++)v=d[l],i.call(null,a[v],v,a)}}function m2(a,i){if(El(a))return null;i=i.toLowerCase();const o=Object.keys(a);let l=o.length,f;for(;l-- >0;)if(f=o[l],i===f.toLowerCase())return f;return null}const Ia=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,g2=a=>!bl(a)&&a!==Ia;function Zf(){const{caseless:a}=g2(this)&&this||{},i={},o=(l,f)=>{const d=a&&m2(i,f)||f;rs(i[d])&&rs(l)?i[d]=Zf(i[d],l):rs(l)?i[d]=Zf({},l):si(l)?i[d]=l.slice():i[d]=l};for(let l=0,f=arguments.length;l<f;l++)arguments[l]&&Al(arguments[l],o);return i}const Kj=(a,i,o,{allOwnKeys:l}={})=>(Al(i,(f,d)=>{o&&Xt(f)?a[d]=u2(f,o):a[d]=f},{allOwnKeys:l}),a),Qj=a=>(a.charCodeAt(0)===65279&&(a=a.slice(1)),a),Ij=(a,i,o,l)=>{a.prototype=Object.create(i.prototype,l),a.prototype.constructor=a,Object.defineProperty(a,"super",{value:i.prototype}),o&&Object.assign(a.prototype,o)},Jj=(a,i,o,l)=>{let f,d,h;const v={};if(i=i||{},a==null)return i;do{for(f=Object.getOwnPropertyNames(a),d=f.length;d-- >0;)h=f[d],(!l||l(h,a,i))&&!v[h]&&(i[h]=a[h],v[h]=!0);a=o!==!1&&wd(a)}while(a&&(!o||o(a,i))&&a!==Object.prototype);return i},Wj=(a,i,o)=>{a=String(a),(o===void 0||o>a.length)&&(o=a.length),o-=i.length;const l=a.indexOf(i,o);return l!==-1&&l===o},eE=a=>{if(!a)return null;if(si(a))return a;let i=a.length;if(!h2(i))return null;const o=new Array(i);for(;i-- >0;)o[i]=a[i];return o},tE=(a=>i=>a&&i instanceof a)(typeof Uint8Array<"u"&&wd(Uint8Array)),nE=(a,i)=>{const l=(a&&a[As]).call(a);let f;for(;(f=l.next())&&!f.done;){const d=f.value;i.call(a,d[0],d[1])}},aE=(a,i)=>{let o;const l=[];for(;(o=a.exec(i))!==null;)l.push(o);return l},rE=Cn("HTMLFormElement"),iE=a=>a.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(o,l,f){return l.toUpperCase()+f}),V1=(({hasOwnProperty:a})=>(i,o)=>a.call(i,o))(Object.prototype),lE=Cn("RegExp"),p2=(a,i)=>{const o=Object.getOwnPropertyDescriptors(a),l={};Al(o,(f,d)=>{let h;(h=i(f,d,a))!==!1&&(l[d]=h||f)}),Object.defineProperties(a,l)},oE=a=>{p2(a,(i,o)=>{if(Xt(a)&&["arguments","caller","callee"].indexOf(o)!==-1)return!1;const l=a[o];if(Xt(l)){if(i.enumerable=!1,"writable"in i){i.writable=!1;return}i.set||(i.set=()=>{throw Error("Can not rewrite read-only method '"+o+"'")})}})},sE=(a,i)=>{const o={},l=f=>{f.forEach(d=>{o[d]=!0})};return si(a)?l(a):l(String(a).split(i)),o},cE=()=>{},uE=(a,i)=>a!=null&&Number.isFinite(a=+a)?a:i;function fE(a){return!!(a&&Xt(a.append)&&a[f2]==="FormData"&&a[As])}const dE=a=>{const i=new Array(10),o=(l,f)=>{if(Tl(l)){if(i.indexOf(l)>=0)return;if(El(l))return l;if(!("toJSON"in l)){i[f]=l;const d=si(l)?[]:{};return Al(l,(h,v)=>{const m=o(h,f+1);!bl(m)&&(d[v]=m)}),i[f]=void 0,d}}return l};return o(a,0)},hE=Cn("AsyncFunction"),mE=a=>a&&(Tl(a)||Xt(a))&&Xt(a.then)&&Xt(a.catch),y2=((a,i)=>a?setImmediate:i?((o,l)=>(Ia.addEventListener("message",({source:f,data:d})=>{f===Ia&&d===o&&l.length&&l.shift()()},!1),f=>{l.push(f),Ia.postMessage(o,"*")}))(`axios@${Math.random()}`,[]):o=>setTimeout(o))(typeof setImmediate=="function",Xt(Ia.postMessage)),gE=typeof queueMicrotask<"u"?queueMicrotask.bind(Ia):typeof process<"u"&&process.nextTick||y2,pE=a=>a!=null&&Xt(a[As]),G={isArray:si,isArrayBuffer:d2,isBuffer:El,isFormData:qj,isArrayBufferView:zj,isString:kj,isNumber:h2,isBoolean:Lj,isObject:Tl,isPlainObject:rs,isEmptyObject:Nj,isReadableStream:Gj,isRequest:Yj,isResponse:Fj,isHeaders:Xj,isUndefined:bl,isDate:$j,isFile:Uj,isBlob:Hj,isRegExp:lE,isFunction:Xt,isStream:Pj,isURLSearchParams:Vj,isTypedArray:tE,isFileList:Bj,forEach:Al,merge:Zf,extend:Kj,trim:Zj,stripBOM:Qj,inherits:Ij,toFlatObject:Jj,kindOf:Rs,kindOfTest:Cn,endsWith:Wj,toArray:eE,forEachEntry:nE,matchAll:aE,isHTMLForm:rE,hasOwnProperty:V1,hasOwnProp:V1,reduceDescriptors:p2,freezeMethods:oE,toObjectSet:sE,toCamelCase:iE,noop:cE,toFiniteNumber:uE,findKey:m2,global:Ia,isContextDefined:g2,isSpecCompliantForm:fE,toJSONObject:dE,isAsyncFn:hE,isThenable:mE,setImmediate:y2,asap:gE,isIterable:pE};function Me(a,i,o,l,f){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=a,this.name="AxiosError",i&&(this.code=i),o&&(this.config=o),l&&(this.request=l),f&&(this.response=f,this.status=f.status?f.status:null)}G.inherits(Me,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:G.toJSONObject(this.config),code:this.code,status:this.status}}});const v2=Me.prototype,x2={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(a=>{x2[a]={value:a}});Object.defineProperties(Me,x2);Object.defineProperty(v2,"isAxiosError",{value:!0});Me.from=(a,i,o,l,f,d)=>{const h=Object.create(v2);return G.toFlatObject(a,h,function(m){return m!==Error.prototype},v=>v!=="isAxiosError"),Me.call(h,a.message,i,o,l,f),h.cause=a,h.name=a.name,d&&Object.assign(h,d),h};const yE=null;function Kf(a){return G.isPlainObject(a)||G.isArray(a)}function b2(a){return G.endsWith(a,"[]")?a.slice(0,-2):a}function G1(a,i,o){return a?a.concat(i).map(function(f,d){return f=b2(f),!o&&d?"["+f+"]":f}).join(o?".":""):i}function vE(a){return G.isArray(a)&&!a.some(Kf)}const xE=G.toFlatObject(G,{},null,function(i){return/^is[A-Z]/.test(i)});function Ms(a,i,o){if(!G.isObject(a))throw new TypeError("target must be an object");i=i||new FormData,o=G.toFlatObject(o,{metaTokens:!0,dots:!1,indexes:!1},!1,function(E,A){return!G.isUndefined(A[E])});const l=o.metaTokens,f=o.visitor||b,d=o.dots,h=o.indexes,m=(o.Blob||typeof Blob<"u"&&Blob)&&G.isSpecCompliantForm(i);if(!G.isFunction(f))throw new TypeError("visitor must be a function");function g(C){if(C===null)return"";if(G.isDate(C))return C.toISOString();if(G.isBoolean(C))return C.toString();if(!m&&G.isBlob(C))throw new Me("Blob is not supported. Use a Buffer instead.");return G.isArrayBuffer(C)||G.isTypedArray(C)?m&&typeof Blob=="function"?new Blob([C]):Buffer.from(C):C}function b(C,E,A){let D=C;if(C&&!A&&typeof C=="object"){if(G.endsWith(E,"{}"))E=l?E:E.slice(0,-2),C=JSON.stringify(C);else if(G.isArray(C)&&vE(C)||(G.isFileList(C)||G.endsWith(E,"[]"))&&(D=G.toArray(C)))return E=b2(E),D.forEach(function(z,K){!(G.isUndefined(z)||z===null)&&i.append(h===!0?G1([E],K,d):h===null?E:E+"[]",g(z))}),!1}return Kf(C)?!0:(i.append(G1(A,E,d),g(C)),!1)}const S=[],j=Object.assign(xE,{defaultVisitor:b,convertValue:g,isVisitable:Kf});function _(C,E){if(!G.isUndefined(C)){if(S.indexOf(C)!==-1)throw Error("Circular reference detected in "+E.join("."));S.push(C),G.forEach(C,function(D,H){(!(G.isUndefined(D)||D===null)&&f.call(i,D,G.isString(H)?H.trim():H,E,j))===!0&&_(D,E?E.concat(H):[H])}),S.pop()}}if(!G.isObject(a))throw new TypeError("data must be an object");return _(a),i}function Y1(a){const i={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(a).replace(/[!'()~]|%20|%00/g,function(l){return i[l]})}function Sd(a,i){this._pairs=[],a&&Ms(a,this,i)}const w2=Sd.prototype;w2.append=function(i,o){this._pairs.push([i,o])};w2.toString=function(i){const o=i?function(l){return i.call(this,l,Y1)}:Y1;return this._pairs.map(function(f){return o(f[0])+"="+o(f[1])},"").join("&")};function bE(a){return encodeURIComponent(a).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function S2(a,i,o){if(!i)return a;const l=o&&o.encode||bE;G.isFunction(o)&&(o={serialize:o});const f=o&&o.serialize;let d;if(f?d=f(i,o):d=G.isURLSearchParams(i)?i.toString():new Sd(i,o).toString(l),d){const h=a.indexOf("#");h!==-1&&(a=a.slice(0,h)),a+=(a.indexOf("?")===-1?"?":"&")+d}return a}class F1{constructor(){this.handlers=[]}use(i,o,l){return this.handlers.push({fulfilled:i,rejected:o,synchronous:l?l.synchronous:!1,runWhen:l?l.runWhen:null}),this.handlers.length-1}eject(i){this.handlers[i]&&(this.handlers[i]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(i){G.forEach(this.handlers,function(l){l!==null&&i(l)})}}const C2={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},wE=typeof URLSearchParams<"u"?URLSearchParams:Sd,SE=typeof FormData<"u"?FormData:null,CE=typeof Blob<"u"?Blob:null,jE={isBrowser:!0,classes:{URLSearchParams:wE,FormData:SE,Blob:CE},protocols:["http","https","file","blob","url","data"]},Cd=typeof window<"u"&&typeof document<"u",Qf=typeof navigator=="object"&&navigator||void 0,EE=Cd&&(!Qf||["ReactNative","NativeScript","NS"].indexOf(Qf.product)<0),TE=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",AE=Cd&&window.location.href||"http://localhost",RE=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Cd,hasStandardBrowserEnv:EE,hasStandardBrowserWebWorkerEnv:TE,navigator:Qf,origin:AE},Symbol.toStringTag,{value:"Module"})),Lt={...RE,...jE};function _E(a,i){return Ms(a,new Lt.classes.URLSearchParams,{visitor:function(o,l,f,d){return Lt.isNode&&G.isBuffer(o)?(this.append(l,o.toString("base64")),!1):d.defaultVisitor.apply(this,arguments)},...i})}function ME(a){return G.matchAll(/\w+|\[(\w*)]/g,a).map(i=>i[0]==="[]"?"":i[1]||i[0])}function OE(a){const i={},o=Object.keys(a);let l;const f=o.length;let d;for(l=0;l<f;l++)d=o[l],i[d]=a[d];return i}function j2(a){function i(o,l,f,d){let h=o[d++];if(h==="__proto__")return!0;const v=Number.isFinite(+h),m=d>=o.length;return h=!h&&G.isArray(f)?f.length:h,m?(G.hasOwnProp(f,h)?f[h]=[f[h],l]:f[h]=l,!v):((!f[h]||!G.isObject(f[h]))&&(f[h]=[]),i(o,l,f[h],d)&&G.isArray(f[h])&&(f[h]=OE(f[h])),!v)}if(G.isFormData(a)&&G.isFunction(a.entries)){const o={};return G.forEachEntry(a,(l,f)=>{i(ME(l),f,o,0)}),o}return null}function DE(a,i,o){if(G.isString(a))try{return(i||JSON.parse)(a),G.trim(a)}catch(l){if(l.name!=="SyntaxError")throw l}return(o||JSON.stringify)(a)}const Rl={transitional:C2,adapter:["xhr","http","fetch"],transformRequest:[function(i,o){const l=o.getContentType()||"",f=l.indexOf("application/json")>-1,d=G.isObject(i);if(d&&G.isHTMLForm(i)&&(i=new FormData(i)),G.isFormData(i))return f?JSON.stringify(j2(i)):i;if(G.isArrayBuffer(i)||G.isBuffer(i)||G.isStream(i)||G.isFile(i)||G.isBlob(i)||G.isReadableStream(i))return i;if(G.isArrayBufferView(i))return i.buffer;if(G.isURLSearchParams(i))return o.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),i.toString();let v;if(d){if(l.indexOf("application/x-www-form-urlencoded")>-1)return _E(i,this.formSerializer).toString();if((v=G.isFileList(i))||l.indexOf("multipart/form-data")>-1){const m=this.env&&this.env.FormData;return Ms(v?{"files[]":i}:i,m&&new m,this.formSerializer)}}return d||f?(o.setContentType("application/json",!1),DE(i)):i}],transformResponse:[function(i){const o=this.transitional||Rl.transitional,l=o&&o.forcedJSONParsing,f=this.responseType==="json";if(G.isResponse(i)||G.isReadableStream(i))return i;if(i&&G.isString(i)&&(l&&!this.responseType||f)){const h=!(o&&o.silentJSONParsing)&&f;try{return JSON.parse(i)}catch(v){if(h)throw v.name==="SyntaxError"?Me.from(v,Me.ERR_BAD_RESPONSE,this,null,this.response):v}}return i}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Lt.classes.FormData,Blob:Lt.classes.Blob},validateStatus:function(i){return i>=200&&i<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};G.forEach(["delete","get","head","post","put","patch"],a=>{Rl.headers[a]={}});const zE=G.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),kE=a=>{const i={};let o,l,f;return a&&a.split(`
`).forEach(function(h){f=h.indexOf(":"),o=h.substring(0,f).trim().toLowerCase(),l=h.substring(f+1).trim(),!(!o||i[o]&&zE[o])&&(o==="set-cookie"?i[o]?i[o].push(l):i[o]=[l]:i[o]=i[o]?i[o]+", "+l:l)}),i},X1=Symbol("internals");function dl(a){return a&&String(a).trim().toLowerCase()}function is(a){return a===!1||a==null?a:G.isArray(a)?a.map(is):String(a)}function LE(a){const i=Object.create(null),o=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let l;for(;l=o.exec(a);)i[l[1]]=l[2];return i}const NE=a=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());function zf(a,i,o,l,f){if(G.isFunction(l))return l.call(this,i,o);if(f&&(i=o),!!G.isString(i)){if(G.isString(l))return i.indexOf(l)!==-1;if(G.isRegExp(l))return l.test(i)}}function $E(a){return a.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(i,o,l)=>o.toUpperCase()+l)}function UE(a,i){const o=G.toCamelCase(" "+i);["get","set","has"].forEach(l=>{Object.defineProperty(a,l+o,{value:function(f,d,h){return this[l].call(this,i,f,d,h)},configurable:!0})})}let Zt=class{constructor(i){i&&this.set(i)}set(i,o,l){const f=this;function d(v,m,g){const b=dl(m);if(!b)throw new Error("header name must be a non-empty string");const S=G.findKey(f,b);(!S||f[S]===void 0||g===!0||g===void 0&&f[S]!==!1)&&(f[S||m]=is(v))}const h=(v,m)=>G.forEach(v,(g,b)=>d(g,b,m));if(G.isPlainObject(i)||i instanceof this.constructor)h(i,o);else if(G.isString(i)&&(i=i.trim())&&!NE(i))h(kE(i),o);else if(G.isObject(i)&&G.isIterable(i)){let v={},m,g;for(const b of i){if(!G.isArray(b))throw TypeError("Object iterator must return a key-value pair");v[g=b[0]]=(m=v[g])?G.isArray(m)?[...m,b[1]]:[m,b[1]]:b[1]}h(v,o)}else i!=null&&d(o,i,l);return this}get(i,o){if(i=dl(i),i){const l=G.findKey(this,i);if(l){const f=this[l];if(!o)return f;if(o===!0)return LE(f);if(G.isFunction(o))return o.call(this,f,l);if(G.isRegExp(o))return o.exec(f);throw new TypeError("parser must be boolean|regexp|function")}}}has(i,o){if(i=dl(i),i){const l=G.findKey(this,i);return!!(l&&this[l]!==void 0&&(!o||zf(this,this[l],l,o)))}return!1}delete(i,o){const l=this;let f=!1;function d(h){if(h=dl(h),h){const v=G.findKey(l,h);v&&(!o||zf(l,l[v],v,o))&&(delete l[v],f=!0)}}return G.isArray(i)?i.forEach(d):d(i),f}clear(i){const o=Object.keys(this);let l=o.length,f=!1;for(;l--;){const d=o[l];(!i||zf(this,this[d],d,i,!0))&&(delete this[d],f=!0)}return f}normalize(i){const o=this,l={};return G.forEach(this,(f,d)=>{const h=G.findKey(l,d);if(h){o[h]=is(f),delete o[d];return}const v=i?$E(d):String(d).trim();v!==d&&delete o[d],o[v]=is(f),l[v]=!0}),this}concat(...i){return this.constructor.concat(this,...i)}toJSON(i){const o=Object.create(null);return G.forEach(this,(l,f)=>{l!=null&&l!==!1&&(o[f]=i&&G.isArray(l)?l.join(", "):l)}),o}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([i,o])=>i+": "+o).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(i){return i instanceof this?i:new this(i)}static concat(i,...o){const l=new this(i);return o.forEach(f=>l.set(f)),l}static accessor(i){const l=(this[X1]=this[X1]={accessors:{}}).accessors,f=this.prototype;function d(h){const v=dl(h);l[v]||(UE(f,h),l[v]=!0)}return G.isArray(i)?i.forEach(d):d(i),this}};Zt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);G.reduceDescriptors(Zt.prototype,({value:a},i)=>{let o=i[0].toUpperCase()+i.slice(1);return{get:()=>a,set(l){this[o]=l}}});G.freezeMethods(Zt);function kf(a,i){const o=this||Rl,l=i||o,f=Zt.from(l.headers);let d=l.data;return G.forEach(a,function(v){d=v.call(o,d,f.normalize(),i?i.status:void 0)}),f.normalize(),d}function E2(a){return!!(a&&a.__CANCEL__)}function ci(a,i,o){Me.call(this,a??"canceled",Me.ERR_CANCELED,i,o),this.name="CanceledError"}G.inherits(ci,Me,{__CANCEL__:!0});function T2(a,i,o){const l=o.config.validateStatus;!o.status||!l||l(o.status)?a(o):i(new Me("Request failed with status code "+o.status,[Me.ERR_BAD_REQUEST,Me.ERR_BAD_RESPONSE][Math.floor(o.status/100)-4],o.config,o.request,o))}function HE(a){const i=/^([-+\w]{1,25})(:?\/\/|:)/.exec(a);return i&&i[1]||""}function BE(a,i){a=a||10;const o=new Array(a),l=new Array(a);let f=0,d=0,h;return i=i!==void 0?i:1e3,function(m){const g=Date.now(),b=l[d];h||(h=g),o[f]=m,l[f]=g;let S=d,j=0;for(;S!==f;)j+=o[S++],S=S%a;if(f=(f+1)%a,f===d&&(d=(d+1)%a),g-h<i)return;const _=b&&g-b;return _?Math.round(j*1e3/_):void 0}}function PE(a,i){let o=0,l=1e3/i,f,d;const h=(g,b=Date.now())=>{o=b,f=null,d&&(clearTimeout(d),d=null),a(...g)};return[(...g)=>{const b=Date.now(),S=b-o;S>=l?h(g,b):(f=g,d||(d=setTimeout(()=>{d=null,h(f)},l-S)))},()=>f&&h(f)]}const hs=(a,i,o=3)=>{let l=0;const f=BE(50,250);return PE(d=>{const h=d.loaded,v=d.lengthComputable?d.total:void 0,m=h-l,g=f(m),b=h<=v;l=h;const S={loaded:h,total:v,progress:v?h/v:void 0,bytes:m,rate:g||void 0,estimated:g&&v&&b?(v-h)/g:void 0,event:d,lengthComputable:v!=null,[i?"download":"upload"]:!0};a(S)},o)},Z1=(a,i)=>{const o=a!=null;return[l=>i[0]({lengthComputable:o,total:a,loaded:l}),i[1]]},K1=a=>(...i)=>G.asap(()=>a(...i)),qE=Lt.hasStandardBrowserEnv?((a,i)=>o=>(o=new URL(o,Lt.origin),a.protocol===o.protocol&&a.host===o.host&&(i||a.port===o.port)))(new URL(Lt.origin),Lt.navigator&&/(msie|trident)/i.test(Lt.navigator.userAgent)):()=>!0,VE=Lt.hasStandardBrowserEnv?{write(a,i,o,l,f,d){const h=[a+"="+encodeURIComponent(i)];G.isNumber(o)&&h.push("expires="+new Date(o).toGMTString()),G.isString(l)&&h.push("path="+l),G.isString(f)&&h.push("domain="+f),d===!0&&h.push("secure"),document.cookie=h.join("; ")},read(a){const i=document.cookie.match(new RegExp("(^|;\\s*)("+a+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove(a){this.write(a,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function GE(a){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(a)}function YE(a,i){return i?a.replace(/\/?\/$/,"")+"/"+i.replace(/^\/+/,""):a}function A2(a,i,o){let l=!GE(i);return a&&(l||o==!1)?YE(a,i):i}const Q1=a=>a instanceof Zt?{...a}:a;function ar(a,i){i=i||{};const o={};function l(g,b,S,j){return G.isPlainObject(g)&&G.isPlainObject(b)?G.merge.call({caseless:j},g,b):G.isPlainObject(b)?G.merge({},b):G.isArray(b)?b.slice():b}function f(g,b,S,j){if(G.isUndefined(b)){if(!G.isUndefined(g))return l(void 0,g,S,j)}else return l(g,b,S,j)}function d(g,b){if(!G.isUndefined(b))return l(void 0,b)}function h(g,b){if(G.isUndefined(b)){if(!G.isUndefined(g))return l(void 0,g)}else return l(void 0,b)}function v(g,b,S){if(S in i)return l(g,b);if(S in a)return l(void 0,g)}const m={url:d,method:d,data:d,baseURL:h,transformRequest:h,transformResponse:h,paramsSerializer:h,timeout:h,timeoutMessage:h,withCredentials:h,withXSRFToken:h,adapter:h,responseType:h,xsrfCookieName:h,xsrfHeaderName:h,onUploadProgress:h,onDownloadProgress:h,decompress:h,maxContentLength:h,maxBodyLength:h,beforeRedirect:h,transport:h,httpAgent:h,httpsAgent:h,cancelToken:h,socketPath:h,responseEncoding:h,validateStatus:v,headers:(g,b,S)=>f(Q1(g),Q1(b),S,!0)};return G.forEach(Object.keys({...a,...i}),function(b){const S=m[b]||f,j=S(a[b],i[b],b);G.isUndefined(j)&&S!==v||(o[b]=j)}),o}const R2=a=>{const i=ar({},a);let{data:o,withXSRFToken:l,xsrfHeaderName:f,xsrfCookieName:d,headers:h,auth:v}=i;i.headers=h=Zt.from(h),i.url=S2(A2(i.baseURL,i.url,i.allowAbsoluteUrls),a.params,a.paramsSerializer),v&&h.set("Authorization","Basic "+btoa((v.username||"")+":"+(v.password?unescape(encodeURIComponent(v.password)):"")));let m;if(G.isFormData(o)){if(Lt.hasStandardBrowserEnv||Lt.hasStandardBrowserWebWorkerEnv)h.setContentType(void 0);else if((m=h.getContentType())!==!1){const[g,...b]=m?m.split(";").map(S=>S.trim()).filter(Boolean):[];h.setContentType([g||"multipart/form-data",...b].join("; "))}}if(Lt.hasStandardBrowserEnv&&(l&&G.isFunction(l)&&(l=l(i)),l||l!==!1&&qE(i.url))){const g=f&&d&&VE.read(d);g&&h.set(f,g)}return i},FE=typeof XMLHttpRequest<"u",XE=FE&&function(a){return new Promise(function(o,l){const f=R2(a);let d=f.data;const h=Zt.from(f.headers).normalize();let{responseType:v,onUploadProgress:m,onDownloadProgress:g}=f,b,S,j,_,C;function E(){_&&_(),C&&C(),f.cancelToken&&f.cancelToken.unsubscribe(b),f.signal&&f.signal.removeEventListener("abort",b)}let A=new XMLHttpRequest;A.open(f.method.toUpperCase(),f.url,!0),A.timeout=f.timeout;function D(){if(!A)return;const z=Zt.from("getAllResponseHeaders"in A&&A.getAllResponseHeaders()),Z={data:!v||v==="text"||v==="json"?A.responseText:A.response,status:A.status,statusText:A.statusText,headers:z,config:a,request:A};T2(function(P){o(P),E()},function(P){l(P),E()},Z),A=null}"onloadend"in A?A.onloadend=D:A.onreadystatechange=function(){!A||A.readyState!==4||A.status===0&&!(A.responseURL&&A.responseURL.indexOf("file:")===0)||setTimeout(D)},A.onabort=function(){A&&(l(new Me("Request aborted",Me.ECONNABORTED,a,A)),A=null)},A.onerror=function(){l(new Me("Network Error",Me.ERR_NETWORK,a,A)),A=null},A.ontimeout=function(){let K=f.timeout?"timeout of "+f.timeout+"ms exceeded":"timeout exceeded";const Z=f.transitional||C2;f.timeoutErrorMessage&&(K=f.timeoutErrorMessage),l(new Me(K,Z.clarifyTimeoutError?Me.ETIMEDOUT:Me.ECONNABORTED,a,A)),A=null},d===void 0&&h.setContentType(null),"setRequestHeader"in A&&G.forEach(h.toJSON(),function(K,Z){A.setRequestHeader(Z,K)}),G.isUndefined(f.withCredentials)||(A.withCredentials=!!f.withCredentials),v&&v!=="json"&&(A.responseType=f.responseType),g&&([j,C]=hs(g,!0),A.addEventListener("progress",j)),m&&A.upload&&([S,_]=hs(m),A.upload.addEventListener("progress",S),A.upload.addEventListener("loadend",_)),(f.cancelToken||f.signal)&&(b=z=>{A&&(l(!z||z.type?new ci(null,a,A):z),A.abort(),A=null)},f.cancelToken&&f.cancelToken.subscribe(b),f.signal&&(f.signal.aborted?b():f.signal.addEventListener("abort",b)));const H=HE(f.url);if(H&&Lt.protocols.indexOf(H)===-1){l(new Me("Unsupported protocol "+H+":",Me.ERR_BAD_REQUEST,a));return}A.send(d||null)})},ZE=(a,i)=>{const{length:o}=a=a?a.filter(Boolean):[];if(i||o){let l=new AbortController,f;const d=function(g){if(!f){f=!0,v();const b=g instanceof Error?g:this.reason;l.abort(b instanceof Me?b:new ci(b instanceof Error?b.message:b))}};let h=i&&setTimeout(()=>{h=null,d(new Me(`timeout ${i} of ms exceeded`,Me.ETIMEDOUT))},i);const v=()=>{a&&(h&&clearTimeout(h),h=null,a.forEach(g=>{g.unsubscribe?g.unsubscribe(d):g.removeEventListener("abort",d)}),a=null)};a.forEach(g=>g.addEventListener("abort",d));const{signal:m}=l;return m.unsubscribe=()=>G.asap(v),m}},KE=function*(a,i){let o=a.byteLength;if(o<i){yield a;return}let l=0,f;for(;l<o;)f=l+i,yield a.slice(l,f),l=f},QE=async function*(a,i){for await(const o of IE(a))yield*KE(o,i)},IE=async function*(a){if(a[Symbol.asyncIterator]){yield*a;return}const i=a.getReader();try{for(;;){const{done:o,value:l}=await i.read();if(o)break;yield l}}finally{await i.cancel()}},I1=(a,i,o,l)=>{const f=QE(a,i);let d=0,h,v=m=>{h||(h=!0,l&&l(m))};return new ReadableStream({async pull(m){try{const{done:g,value:b}=await f.next();if(g){v(),m.close();return}let S=b.byteLength;if(o){let j=d+=S;o(j)}m.enqueue(new Uint8Array(b))}catch(g){throw v(g),g}},cancel(m){return v(m),f.return()}},{highWaterMark:2})},Os=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",_2=Os&&typeof ReadableStream=="function",JE=Os&&(typeof TextEncoder=="function"?(a=>i=>a.encode(i))(new TextEncoder):async a=>new Uint8Array(await new Response(a).arrayBuffer())),M2=(a,...i)=>{try{return!!a(...i)}catch{return!1}},WE=_2&&M2(()=>{let a=!1;const i=new Request(Lt.origin,{body:new ReadableStream,method:"POST",get duplex(){return a=!0,"half"}}).headers.has("Content-Type");return a&&!i}),J1=64*1024,If=_2&&M2(()=>G.isReadableStream(new Response("").body)),ms={stream:If&&(a=>a.body)};Os&&(a=>{["text","arrayBuffer","blob","formData","stream"].forEach(i=>{!ms[i]&&(ms[i]=G.isFunction(a[i])?o=>o[i]():(o,l)=>{throw new Me(`Response type '${i}' is not supported`,Me.ERR_NOT_SUPPORT,l)})})})(new Response);const e9=async a=>{if(a==null)return 0;if(G.isBlob(a))return a.size;if(G.isSpecCompliantForm(a))return(await new Request(Lt.origin,{method:"POST",body:a}).arrayBuffer()).byteLength;if(G.isArrayBufferView(a)||G.isArrayBuffer(a))return a.byteLength;if(G.isURLSearchParams(a)&&(a=a+""),G.isString(a))return(await JE(a)).byteLength},t9=async(a,i)=>{const o=G.toFiniteNumber(a.getContentLength());return o??e9(i)},n9=Os&&(async a=>{let{url:i,method:o,data:l,signal:f,cancelToken:d,timeout:h,onDownloadProgress:v,onUploadProgress:m,responseType:g,headers:b,withCredentials:S="same-origin",fetchOptions:j}=R2(a);g=g?(g+"").toLowerCase():"text";let _=ZE([f,d&&d.toAbortSignal()],h),C;const E=_&&_.unsubscribe&&(()=>{_.unsubscribe()});let A;try{if(m&&WE&&o!=="get"&&o!=="head"&&(A=await t9(b,l))!==0){let Z=new Request(i,{method:"POST",body:l,duplex:"half"}),ee;if(G.isFormData(l)&&(ee=Z.headers.get("content-type"))&&b.setContentType(ee),Z.body){const[P,I]=Z1(A,hs(K1(m)));l=I1(Z.body,J1,P,I)}}G.isString(S)||(S=S?"include":"omit");const D="credentials"in Request.prototype;C=new Request(i,{...j,signal:_,method:o.toUpperCase(),headers:b.normalize().toJSON(),body:l,duplex:"half",credentials:D?S:void 0});let H=await fetch(C,j);const z=If&&(g==="stream"||g==="response");if(If&&(v||z&&E)){const Z={};["status","statusText","headers"].forEach(ne=>{Z[ne]=H[ne]});const ee=G.toFiniteNumber(H.headers.get("content-length")),[P,I]=v&&Z1(ee,hs(K1(v),!0))||[];H=new Response(I1(H.body,J1,P,()=>{I&&I(),E&&E()}),Z)}g=g||"text";let K=await ms[G.findKey(ms,g)||"text"](H,a);return!z&&E&&E(),await new Promise((Z,ee)=>{T2(Z,ee,{data:K,headers:Zt.from(H.headers),status:H.status,statusText:H.statusText,config:a,request:C})})}catch(D){throw E&&E(),D&&D.name==="TypeError"&&/Load failed|fetch/i.test(D.message)?Object.assign(new Me("Network Error",Me.ERR_NETWORK,a,C),{cause:D.cause||D}):Me.from(D,D&&D.code,a,C)}}),Jf={http:yE,xhr:XE,fetch:n9};G.forEach(Jf,(a,i)=>{if(a){try{Object.defineProperty(a,"name",{value:i})}catch{}Object.defineProperty(a,"adapterName",{value:i})}});const W1=a=>`- ${a}`,a9=a=>G.isFunction(a)||a===null||a===!1,O2={getAdapter:a=>{a=G.isArray(a)?a:[a];const{length:i}=a;let o,l;const f={};for(let d=0;d<i;d++){o=a[d];let h;if(l=o,!a9(o)&&(l=Jf[(h=String(o)).toLowerCase()],l===void 0))throw new Me(`Unknown adapter '${h}'`);if(l)break;f[h||"#"+d]=l}if(!l){const d=Object.entries(f).map(([v,m])=>`adapter ${v} `+(m===!1?"is not supported by the environment":"is not available in the build"));let h=i?d.length>1?`since :
`+d.map(W1).join(`
`):" "+W1(d[0]):"as no adapter specified";throw new Me("There is no suitable adapter to dispatch the request "+h,"ERR_NOT_SUPPORT")}return l},adapters:Jf};function Lf(a){if(a.cancelToken&&a.cancelToken.throwIfRequested(),a.signal&&a.signal.aborted)throw new ci(null,a)}function ep(a){return Lf(a),a.headers=Zt.from(a.headers),a.data=kf.call(a,a.transformRequest),["post","put","patch"].indexOf(a.method)!==-1&&a.headers.setContentType("application/x-www-form-urlencoded",!1),O2.getAdapter(a.adapter||Rl.adapter)(a).then(function(l){return Lf(a),l.data=kf.call(a,a.transformResponse,l),l.headers=Zt.from(l.headers),l},function(l){return E2(l)||(Lf(a),l&&l.response&&(l.response.data=kf.call(a,a.transformResponse,l.response),l.response.headers=Zt.from(l.response.headers))),Promise.reject(l)})}const D2="1.11.0",Ds={};["object","boolean","number","function","string","symbol"].forEach((a,i)=>{Ds[a]=function(l){return typeof l===a||"a"+(i<1?"n ":" ")+a}});const tp={};Ds.transitional=function(i,o,l){function f(d,h){return"[Axios v"+D2+"] Transitional option '"+d+"'"+h+(l?". "+l:"")}return(d,h,v)=>{if(i===!1)throw new Me(f(h," has been removed"+(o?" in "+o:"")),Me.ERR_DEPRECATED);return o&&!tp[h]&&(tp[h]=!0,console.warn(f(h," has been deprecated since v"+o+" and will be removed in the near future"))),i?i(d,h,v):!0}};Ds.spelling=function(i){return(o,l)=>(console.warn(`${l} is likely a misspelling of ${i}`),!0)};function r9(a,i,o){if(typeof a!="object")throw new Me("options must be an object",Me.ERR_BAD_OPTION_VALUE);const l=Object.keys(a);let f=l.length;for(;f-- >0;){const d=l[f],h=i[d];if(h){const v=a[d],m=v===void 0||h(v,d,a);if(m!==!0)throw new Me("option "+d+" must be "+m,Me.ERR_BAD_OPTION_VALUE);continue}if(o!==!0)throw new Me("Unknown option "+d,Me.ERR_BAD_OPTION)}}const ls={assertOptions:r9,validators:Ds},kn=ls.validators;let nr=class{constructor(i){this.defaults=i||{},this.interceptors={request:new F1,response:new F1}}async request(i,o){try{return await this._request(i,o)}catch(l){if(l instanceof Error){let f={};Error.captureStackTrace?Error.captureStackTrace(f):f=new Error;const d=f.stack?f.stack.replace(/^.+\n/,""):"";try{l.stack?d&&!String(l.stack).endsWith(d.replace(/^.+\n.+\n/,""))&&(l.stack+=`
`+d):l.stack=d}catch{}}throw l}}_request(i,o){typeof i=="string"?(o=o||{},o.url=i):o=i||{},o=ar(this.defaults,o);const{transitional:l,paramsSerializer:f,headers:d}=o;l!==void 0&&ls.assertOptions(l,{silentJSONParsing:kn.transitional(kn.boolean),forcedJSONParsing:kn.transitional(kn.boolean),clarifyTimeoutError:kn.transitional(kn.boolean)},!1),f!=null&&(G.isFunction(f)?o.paramsSerializer={serialize:f}:ls.assertOptions(f,{encode:kn.function,serialize:kn.function},!0)),o.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?o.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:o.allowAbsoluteUrls=!0),ls.assertOptions(o,{baseUrl:kn.spelling("baseURL"),withXsrfToken:kn.spelling("withXSRFToken")},!0),o.method=(o.method||this.defaults.method||"get").toLowerCase();let h=d&&G.merge(d.common,d[o.method]);d&&G.forEach(["delete","get","head","post","put","patch","common"],C=>{delete d[C]}),o.headers=Zt.concat(h,d);const v=[];let m=!0;this.interceptors.request.forEach(function(E){typeof E.runWhen=="function"&&E.runWhen(o)===!1||(m=m&&E.synchronous,v.unshift(E.fulfilled,E.rejected))});const g=[];this.interceptors.response.forEach(function(E){g.push(E.fulfilled,E.rejected)});let b,S=0,j;if(!m){const C=[ep.bind(this),void 0];for(C.unshift(...v),C.push(...g),j=C.length,b=Promise.resolve(o);S<j;)b=b.then(C[S++],C[S++]);return b}j=v.length;let _=o;for(S=0;S<j;){const C=v[S++],E=v[S++];try{_=C(_)}catch(A){E.call(this,A);break}}try{b=ep.call(this,_)}catch(C){return Promise.reject(C)}for(S=0,j=g.length;S<j;)b=b.then(g[S++],g[S++]);return b}getUri(i){i=ar(this.defaults,i);const o=A2(i.baseURL,i.url,i.allowAbsoluteUrls);return S2(o,i.params,i.paramsSerializer)}};G.forEach(["delete","get","head","options"],function(i){nr.prototype[i]=function(o,l){return this.request(ar(l||{},{method:i,url:o,data:(l||{}).data}))}});G.forEach(["post","put","patch"],function(i){function o(l){return function(d,h,v){return this.request(ar(v||{},{method:i,headers:l?{"Content-Type":"multipart/form-data"}:{},url:d,data:h}))}}nr.prototype[i]=o(),nr.prototype[i+"Form"]=o(!0)});let i9=class z2{constructor(i){if(typeof i!="function")throw new TypeError("executor must be a function.");let o;this.promise=new Promise(function(d){o=d});const l=this;this.promise.then(f=>{if(!l._listeners)return;let d=l._listeners.length;for(;d-- >0;)l._listeners[d](f);l._listeners=null}),this.promise.then=f=>{let d;const h=new Promise(v=>{l.subscribe(v),d=v}).then(f);return h.cancel=function(){l.unsubscribe(d)},h},i(function(d,h,v){l.reason||(l.reason=new ci(d,h,v),o(l.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]}unsubscribe(i){if(!this._listeners)return;const o=this._listeners.indexOf(i);o!==-1&&this._listeners.splice(o,1)}toAbortSignal(){const i=new AbortController,o=l=>{i.abort(l)};return this.subscribe(o),i.signal.unsubscribe=()=>this.unsubscribe(o),i.signal}static source(){let i;return{token:new z2(function(f){i=f}),cancel:i}}};function l9(a){return function(o){return a.apply(null,o)}}function o9(a){return G.isObject(a)&&a.isAxiosError===!0}const Wf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Wf).forEach(([a,i])=>{Wf[i]=a});function k2(a){const i=new nr(a),o=u2(nr.prototype.request,i);return G.extend(o,nr.prototype,i,{allOwnKeys:!0}),G.extend(o,i,null,{allOwnKeys:!0}),o.create=function(f){return k2(ar(a,f))},o}const ct=k2(Rl);ct.Axios=nr;ct.CanceledError=ci;ct.CancelToken=i9;ct.isCancel=E2;ct.VERSION=D2;ct.toFormData=Ms;ct.AxiosError=Me;ct.Cancel=ct.CanceledError;ct.all=function(i){return Promise.all(i)};ct.spread=l9;ct.isAxiosError=o9;ct.mergeConfig=ar;ct.AxiosHeaders=Zt;ct.formToJSON=a=>j2(G.isHTMLForm(a)?new FormData(a):a);ct.getAdapter=O2.getAdapter;ct.HttpStatusCode=Wf;ct.default=ct;const{Axios:u9,AxiosError:f9,CanceledError:d9,isCancel:h9,CancelToken:m9,VERSION:g9,all:p9,Cancel:y9,isAxiosError:v9,spread:x9,toFormData:b9,AxiosHeaders:w9,HttpStatusCode:S9,formToJSON:C9,getAdapter:j9,mergeConfig:E9}=ct;(()=>{if(typeof window>"u")return;const a=i=>{try{if(!i)return;if(i instanceof FormData){const o={};return i.forEach((l,f)=>{l instanceof File?o[f]={filename:l.name,size:l.size,type:l.type}:o[f]=l}),{formData:o}}if(typeof i=="string")try{return JSON.parse(i)}catch{return i}return i}catch{return"[body 로깅 실패]"}};if(!window.__FETCH_LOGGED__){const i=window.fetch.bind(window);window.fetch=(o,l={})=>{try{let f="GET",d="",h;typeof o=="string"?(d=o,f=l&&l.method||"GET",h=a(l&&l.body)):o&&typeof o=="object"&&"url"in o&&(d=o.url,f=o.method||"GET",h="[Request body omitted]"),console.log("[API 요청(fetch)]",{method:f.toUpperCase(),url:d,body:h})}catch(f){console.warn("[API 로깅(fetch) 실패]",f)}return i(o,l)},window.__FETCH_LOGGED__=!0}window.__AXIOS_LOGGED__||(ct.interceptors.request.use(i=>{try{const o=(i.method||"GET").toUpperCase(),l=i.baseURL?`${i.baseURL.replace(/\/$/,"")}${i.url}`:i.url;let f=a(i.data);console.log("[API 요청(axios)]",{method:o,url:l,body:f})}catch(o){console.warn("[API 로깅(axios) 실패]",o)}return i},i=>Promise.reject(i)),window.__AXIOS_LOGGED__=!0)})();n5.createRoot(document.getElementById("root")).render(c.jsx(w.StrictMode,{children:c.jsx(px,{children:c.jsx(Oj,{})})}));
