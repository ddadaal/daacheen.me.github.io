(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[270],{2457:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return n}}),r(2552);let n=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2249:function(e,t){"use strict";function r(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},501:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"hasBasePath",{enumerable:!0,get:function(){return o}});let n=r(2620);function o(e){return(0,n.pathHasPrefix)(e,"")}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2098:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return P}});let n=r(1400),o=n._(r(9873)),u=r(1514),i=r(6669),a=r(2445),l=r(3950),c=r(2457),f=r(2626),s=r(6417),d=r(1870),p=r(2249),h=r(5409),y=r(5716),g=new Set;function b(e,t,r,n,o,u){if(!u&&!(0,i.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,u=t+"%"+r+"%"+o;if(g.has(u))return;g.add(u)}let a=u?e.prefetch(t,o):e.prefetch(t,r,n);Promise.resolve(a).catch(e=>{})}function m(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let v=o.default.forwardRef(function(e,t){let r,n;let{href:a,as:g,children:v,prefetch:P=null,passHref:_,replace:O,shallow:j,scroll:R,locale:E,onClick:x,onMouseEnter:C,onTouchStart:w,legacyBehavior:M=!1,...k}=e;r=v,M&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let L=!1!==P,I=null===P?y.PrefetchKind.AUTO:y.PrefetchKind.FULL,S=o.default.useContext(f.RouterContext),T=o.default.useContext(s.AppRouterContext),U=null!=S?S:T,N=!S,{href:A,as:W}=o.default.useMemo(()=>{if(!S){let e=m(a);return{href:e,as:g?m(g):e}}let[e,t]=(0,u.resolveHref)(S,a,!0);return{href:e,as:g?(0,u.resolveHref)(S,g):t||e}},[S,a,g]),D=o.default.useRef(A),z=o.default.useRef(W);M&&(n=o.default.Children.only(r));let $=M?n&&"object"==typeof n&&n.ref:t,[B,F,K]=(0,d.useIntersection)({rootMargin:"200px"}),q=o.default.useCallback(e=>{(z.current!==W||D.current!==A)&&(K(),z.current=W,D.current=A),B(e),$&&("function"==typeof $?$(e):"object"==typeof $&&($.current=e))},[W,$,A,K,B]);o.default.useEffect(()=>{U&&F&&L&&b(U,A,W,{locale:E},{kind:I},N)},[W,A,F,E,L,null==S?void 0:S.locale,U,N,I]);let H={ref:q,onClick(e){M||"function"!=typeof x||x(e),M&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),U&&!e.defaultPrevented&&function(e,t,r,n,u,a,l,c,f,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!f&&!(0,i.isLocalURL)(r)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[u?"replace":"push"](r,n,{shallow:a,locale:c,scroll:l}):t[u?"replace":"push"](n||r,{forceOptimisticNavigation:!s})};f?o.default.startTransition(h):h()}(e,U,A,W,O,j,R,E,N,L)},onMouseEnter(e){M||"function"!=typeof C||C(e),M&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),U&&(L||!N)&&b(U,A,W,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:I},N)},onTouchStart(e){M||"function"!=typeof w||w(e),M&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),U&&(L||!N)&&b(U,A,W,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:I},N)}};if((0,l.isAbsoluteUrl)(W))H.href=W;else if(!M||_||"a"===n.type&&!("href"in n.props)){let e=void 0!==E?E:null==S?void 0:S.locale,t=(null==S?void 0:S.isLocaleDomain)&&(0,p.getDomainLocale)(W,e,null==S?void 0:S.locales,null==S?void 0:S.domainLocales);H.href=t||(0,h.addBasePath)((0,c.addLocale)(W,e,null==S?void 0:S.defaultLocale))}return M?o.default.cloneElement(n,H):o.default.createElement("a",{...k,...H},r)}),P=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},366:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{requestIdleCallback:function(){return r},cancelIdleCallback:function(){return n}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1870:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return l}});let n=r(9873),o=r(366),u="function"==typeof IntersectionObserver,i=new Map,a=[];function l(e){let{rootRef:t,rootMargin:r,disabled:l}=e,c=l||!u,[f,s]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(u){if(c||f)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:u}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=i.get(n)))return t;let o=new Map,u=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:u,elements:o},a.push(r),i.set(r,t),t}(r);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),i.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!f){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,r,t,f,d.current]);let h=(0,n.useCallback)(()=>{s(!1)},[]);return[p,f,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});let r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function o(e){return r.test(e)?e.replace(n,"\\$&"):e}},2626:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return u}});let n=r(1400),o=n._(r(9873)),u=o.default.createContext(null)},2445:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return i},urlObjectKeys:function(){return a},formatWithValidation:function(){return l}});let n=r(1614),o=n._(r(9497)),u=/https?|ftp|gopher|file/;function i(e){let{auth:t,hostname:r}=e,n=e.protocol||"",i=e.pathname||"",a=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(o.urlQueryToSearchParams(l)));let f=e.search||l&&"?"+l||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||u.test(n))&&!1!==c?(c="//"+(c||""),i&&"/"!==i[0]&&(i="/"+i)):c||(c=""),a&&"#"!==a[0]&&(a="#"+a),f&&"?"!==f[0]&&(f="?"+f),""+n+c+(i=i.replace(/[?#]/g,encodeURIComponent))+(f=f.replace("#","%23"))+a}let a=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function l(e){return i(e)}},6818:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return u}});let n=r(9417),o=r(4291);function u(e,t,r){let u="",i=(0,o.getRouteRegex)(e),a=i.groups,l=(t!==e?(0,n.getRouteMatcher)(i)(t):"")||r;u=e;let c=Object.keys(a);return c.every(e=>{let t=l[e]||"",{repeat:r,optional:n}=a[e],o="["+(r?"...":"")+e+"]";return n&&(o=(t?"":"/")+"["+o+"]"),r&&!Array.isArray(t)&&(t=[t]),(n||e in l)&&(u=u.replace(o,r?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(u=""),{params:c,result:u}}},1812:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return n}});let r=/\/\[[^/]+?\](?=\/|$)/;function n(e){return r.test(e)}},6669:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return u}});let n=r(3950),o=r(501);function u(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},3738:function(e,t){"use strict";function r(e,t){let r={};return Object.keys(e).forEach(n=>{t.includes(n)||(r[n]=e[n])}),r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return r}})},2620:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"pathHasPrefix",{enumerable:!0,get:function(){return o}});let n=r(4590);function o(e,t){if("string"!=typeof e)return!1;let{pathname:r}=(0,n.parsePath)(e);return r===t||r.startsWith(t+"/")}},9497:function(e,t){"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,o]=e;Array.isArray(o)?o.forEach(e=>t.append(r,n(e))):t.set(r,n(o))}),t}function u(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o},assign:function(){return u}})},1514:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return s}});let n=r(9497),o=r(2445),u=r(3738),i=r(3950),a=r(2552),l=r(6669),c=r(1812),f=r(6818);function s(e,t,r){let s;let d="string"==typeof t?t:(0,o.formatWithValidation)(t),p=d.match(/^[a-zA-Z]{1,}:\/\//),h=p?d.slice(p[0].length):d,y=h.split("?");if((y[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+d+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,i.normalizeRepeatedSlashes)(h);d=(p?p[0]:"")+t}if(!(0,l.isLocalURL)(d))return r?[d]:d;try{s=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){s=new URL("/","http://n")}try{let e=new URL(d,s);e.pathname=(0,a.normalizePathTrailingSlash)(e.pathname);let t="";if((0,c.isDynamicRoute)(e.pathname)&&e.searchParams&&r){let r=(0,n.searchParamsToUrlQuery)(e.searchParams),{result:i,params:a}=(0,f.interpolateAs)(e.pathname,e.pathname,r);i&&(t=(0,o.formatWithValidation)({pathname:i,hash:e.hash,query:(0,u.omit)(r,a)}))}let i=e.origin===s.origin?e.href.slice(e.origin.length):e.href;return r?[i,t||i]:i}catch(e){return r?[d]:d}}},9417:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});let n=r(3950);function o(e){let{re:t,groups:r}=e;return e=>{let o=t.exec(e);if(!o)return!1;let u=e=>{try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},i={};return Object.keys(r).forEach(e=>{let t=r[e],n=o[t.pos];void 0!==n&&(i[e]=~n.indexOf("/")?n.split("/").map(e=>u(e)):t.repeat?[u(n)]:u(n))}),i}}},4291:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getRouteRegex:function(){return l},getNamedRouteRegex:function(){return f},getNamedMiddlewareRegex:function(){return s}});let n=r(210),o=r(3389),u="nxtP";function i(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function a(e){let t=(0,o.removeTrailingSlash)(e).slice(1).split("/"),r={},u=1;return{parameterizedRoute:t.map(e=>{if(!(e.startsWith("[")&&e.endsWith("]")))return"/"+(0,n.escapeStringRegexp)(e);{let{key:t,optional:n,repeat:o}=i(e.slice(1,-1));return r[t]={pos:u++,repeat:o,optional:n},o?n?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function l(e){let{parameterizedRoute:t,groups:r}=a(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function c(e,t){let r,a;let l=(0,o.removeTrailingSlash)(e).slice(1).split("/"),c=(r=97,a=1,()=>{let e="";for(let t=0;t<a;t++)e+=String.fromCharCode(r),++r>122&&(a++,r=97);return e}),f={};return{namedParameterizedRoute:l.map(e=>{if(!(e.startsWith("[")&&e.endsWith("]")))return"/"+(0,n.escapeStringRegexp)(e);{let{key:r,optional:n,repeat:o}=i(e.slice(1,-1)),a=r.replace(/\W/g,"");t&&(a=""+u+a);let l=!1;return(0===a.length||a.length>30)&&(l=!0),isNaN(parseInt(a.slice(0,1)))||(l=!0),l&&(a=c()),t?f[a]=""+u+r:f[a]=""+r,o?n?"(?:/(?<"+a+">.+?))?":"/(?<"+a+">.+?)":"/(?<"+a+">[^/]+?)"}}).join(""),routeKeys:f}}function f(e,t){let r=c(e,t);return{...l(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function s(e,t){let{parameterizedRoute:r}=a(e),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:o}=c(e,!1);return{namedRegex:"^"+o+(n?"(?:(/.*)?)":"")+"$"}}},3950:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{WEB_VITALS:function(){return r},execOnce:function(){return n},isAbsoluteUrl:function(){return u},getLocationOrigin:function(){return i},getURL:function(){return a},getDisplayName:function(){return l},isResSent:function(){return c},normalizeRepeatedSlashes:function(){return f},loadGetInitialProps:function(){return s},SP:function(){return d},ST:function(){return p},DecodeError:function(){return h},NormalizeError:function(){return y},PageNotFoundError:function(){return g},MissingStaticPage:function(){return b},MiddlewareNotFoundError:function(){return m}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),u=0;u<n;u++)o[u]=arguments[u];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,u=e=>o.test(e);function i(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function a(){let{href:e}=window.location,t=i();return e.substring(t.length)}function l(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function c(e){return e.finished||e.headersSent}function f(e){let t=e.split("?"),r=t[0];return r.replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function s(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await s(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&c(r))return n;if(!n){let t='"'+l(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.';throw Error(t)}return n}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class y extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class b extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class m extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}},9911:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(9873),o=Symbol.for("react.element"),u=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,l={},c=null,f=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(f=t.ref),t)u.call(t,n)&&!a.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===l[n]&&(l[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:f,props:l,_owner:i.current}}t.jsx=l,t.jsxs=l},9953:function(e,t,r){"use strict";e.exports=r(9911)},2091:function(e,t,r){e.exports=r(2098)},958:function(e,t,r){"use strict";r.d(t,{o:function(){return y}});var n=r(9873);function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e){return Error(`Id ${e} is not valid`)}let i=/(\{\})/,a=(e,t)=>{let r=e;for(let e of t.split(".")){if(void 0===r)throw u(t);r=r[e]}if("string"!=typeof r)throw u(t);return r};function l(){let e=(0,n.useContext)(s);if(!e)throw Error("Wrap the component with I18nProvider.");return e}let c=e=>e,f=e=>t=>e+t,s=n.createContext(void 0),d=async e=>"function"==typeof e?await e():e,p=({id:e,args:t})=>{let r=l();return(0,n.useMemo)(()=>r.translate(e,t),[e,t,r.currentLanguage])},h=()=>({Localized:p});function y(e){return o({},{id:c,Provider:({initialLanguage:t,children:r})=>{let[o,u]=(0,n.useState)(t),l=(0,n.useCallback)(async e=>{u({id:e.id,definitions:await d(e.definitions)})},[e]),c=(0,n.useCallback)(async t=>{let r=e[t];if(!r)throw Error(`No language with id ${t} is found.`);await l({id:t,definitions:r})},[e]),f=(0,n.useCallback)((e,t)=>(function(e,t){let r=e.split(i),n=0,o=!1;for(let e=1;e<r.length;e+=2)"object"==typeof t[n]&&(o=!0),r[e]=t[n++];return o?r:r.join("")})(a(o.definitions,e),t),[e,o]);return n.createElement(s.Provider,{value:{currentLanguage:o,setLanguageById:c,setLanguage:l,translate:f,translateToString:f}},r)},useI18n:l,prefix:f},h())}}}]);