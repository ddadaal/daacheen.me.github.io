(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[844],{9693:function(n,t,e){Promise.resolve().then(e.bind(e,831))},831:function(n,t,e){"use strict";e.r(t),e.d(t,{Localized:function(){return o},Provider:function(){return a},prefix:function(){return l},useI18n:function(){return c}});var i=e(3043),r=e(7225);let u=(0,i.o)(r.yX),o=u.Localized,a=u.Provider,c=u.useI18n,l=u.prefix},7225:function(n,t,e){"use strict";e.d(t,{G3:function(){return u},Mj:function(){return r},al:function(){return o},yX:function(){return i}});let i={"zh-CN":()=>e.e(818).then(e.t.bind(e,4818,19)).then(n=>n.default),"en-US":()=>e.e(985).then(e.t.bind(e,8985,19)).then(n=>n.default)},r={"zh-CN":{gitalkLangId:"zh-CN",simplified:"cn",langStrings:["cn","zh-CN","zh"],htmlLang:"zh-CN",name:"简体中文",icon:()=>"\uD83C\uDDE8\uD83C\uDDF3 "},"en-US":{gitalkLangId:"en",simplified:"en",langStrings:["en","en-US"],htmlLang:"en-US",name:"English",icon:()=>"\uD83C\uDDFA\uD83C\uDDF8 "}},u=n=>r[n],o="zh-CN";Object.keys(r)},3043:function(n,t,e){"use strict";e.d(t,{o:function(){return p}});var i=e(7058);function r(){return(r=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n}).apply(this,arguments)}function u(n){return Error(`Id ${n} is not valid`)}let o=/(\{\})/,a=(n,t)=>{let e=n;for(let n of t.split(".")){if(void 0===e)throw u(t);e=e[n]}if("string"!=typeof e)throw u(t);return e};function c(){let n=(0,i.useContext)(f);if(!n)throw Error("Wrap the component with I18nProvider.");return n}let l=n=>n,s=n=>t=>n+t,f=i.createContext(void 0),d=async n=>"function"==typeof n?await n():n,g=({id:n,args:t})=>{let e=c();return(0,i.useMemo)(()=>e.translate(n,t),[n,t,e.currentLanguage])},h=()=>({Localized:g});function p(n){return r({},{id:l,Provider:({initialLanguage:t,children:e})=>{let[r,u]=(0,i.useState)(t),c=(0,i.useCallback)(async n=>{u({id:n.id,definitions:await d(n.definitions)})},[n]),l=(0,i.useCallback)(async t=>{let e=n[t];if(!e)throw Error(`No language with id ${t} is found.`);await c({id:t,definitions:e})},[n]),s=(0,i.useCallback)((n,t)=>(function(n,t){let e=n.split(o),i=0,r=!1;for(let n=1;n<e.length;n+=2)"object"==typeof t[i]&&(r=!0),e[n]=t[i++];return r?e:e.join("")})(a(r.definitions,n),t),[n,r]);return i.createElement(f.Provider,{value:{currentLanguage:r,setLanguageById:l,setLanguage:c,translate:s,translateToString:s}},e)},useI18n:c,prefix:s},h())}}},function(n){n.O(0,[158,660,744],function(){return n(n.s=9693)}),_N_E=n.O()}]);