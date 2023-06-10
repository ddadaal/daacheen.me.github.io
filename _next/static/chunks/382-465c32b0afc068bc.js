(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[382],{1478:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{suspense:function(){return i},NoSSR:function(){return a}}),n(1400),n(9873);let r=n(3811);function i(){let e=Error(r.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=r.NEXT_DYNAMIC_NO_SSR_CODE,e}function a(e){let{children:t}=e;return t}},6091:function(e,t,n){"use strict";n.r(t),n.d(t,{ArticleFrontmatter:function(){return d}});var r=n(9953),i=n(2091),a=n.n(i),l=n(7822),s=n(9094),c=n(5583),o=n(3636),u=n(5908);let d=e=>{var t,n;let{articleId:i,info:d,langVersions:f}=e,h=(0,o.QT)();return(0,r.jsxs)("div",{className:"flex flex-wrap gap-3 my-2 text-sm",children:[d.tags?(0,r.jsxs)("div",{className:"flex flex-wrap gap-1 items-center",children:[(0,r.jsx)(s.fxx,{}),d.tags.map(e=>(0,r.jsx)("div",{className:"badge badge-accent mx-0.5 text-accent-content",children:(0,c.M)(h.currentLanguage.id,e)},e))]}):void 0,(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(s.XdU,{}),(0,r.jsx)("span",{className:"mx-0.5",children:(0,u.o)((0,u.E)(d.date))})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(s.baU,{}),(0,r.jsx)("span",{className:"mx-0.5",children:(0,r.jsx)(o.Vd,{id:"articleFrontmatter.wordCount",args:[d.wordCount]})})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(s.qyc,{}),(0,r.jsx)("span",{className:"mx-0.5",children:(0,r.jsx)(o.Vd,{id:"articleFrontmatter.timeToRead",args:[Math.ceil(d.readingTime)]})})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(s.ssk,{}),(0,r.jsx)("span",{className:"mx-0.5 space-x-1",children:f.map(e=>{var s;return(0,r.jsx)(a(),{className:"link link-hover",href:(0,l.join)(null!==(t=d.absolute_path)&&void 0!==t?t:"/articles/".concat(i),e),children:null!==(n=null===(s=Object.values(o.Mj).find(t=>t.simplified===e))||void 0===s?void 0:s.name)&&void 0!==n?n:e},e)})})]})]})}},2834:function(e,t,n){"use strict";n.r(t),n.d(t,{ArticleImage:function(){return c}});var r=n(9953),i=n(6448),a=n.n(i),l=n(7822);let s=e=>{let{src:t,width:n}=e;return"".concat(t,"?width=").concat(n)},c=e=>{var t;let{filePath:n,imageSize:i,imageProps:c}=e;return(0,r.jsx)(a(),{loader:s,alt:null!==(t=c.alt)&&void 0!==t?t:"",src:(0,l.join)("/articles/asset",n),width:i.width,height:i.height})}},6707:function(e,t,n){"use strict";n.r(t),n.d(t,{ArticleToc:function(){return s}});var r=n(9953),i=n(9873),a=n(852),l=n(3636);let s=e=>{let{toc:t}=e;return(0,i.useEffect)(()=>{let e=[],n=0,r=t=>{n!==t&&(e[n].classList.remove("active"),n=t,e[t].classList.add("active"))},i=()=>{for(let n=0;n<t.length-1;n++){var e;if((e=document.getElementById(t[n+1].id))&&e.getBoundingClientRect().top>=2){r(n);return}}r(t.length-1)};if(0!==t.length)return t.forEach(t=>{let n=document.getElementById("tocitem-".concat(t.id));n&&e.push(n)}),r(0),window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}},[t]),(0,r.jsx)("div",{className:"px-1 sticky top-24",children:(0,r.jsx)("ul",{className:"menu max-w-full overflow-auto",children:(0,r.jsxs)("li",{children:[(0,r.jsxs)("div",{className:"menu-title flex space-x-1 items-center py-2",children:[(0,r.jsx)(a.nEk,{}),(0,r.jsx)("span",{children:(0,r.jsx)(l.Vd,{id:"articlePage.toc"})})]}),(0,r.jsx)("ul",{className:"menu",children:t.map((e,t)=>(0,r.jsx)("li",{style:{paddingLeft:(e.depth-1)*4},children:(0,r.jsx)("a",{id:"tocitem-".concat(e.id),href:"#"+e.id,children:e.value})},t))})]})})})}},1763:function(e,t,n){"use strict";n.r(t),n.d(t,{CommentPanelWithCurrentLanguage:function(){return u}});var r=n(9953);n(7923);var i=n(7535),a=n.n(i),l=n(9873),s=n(9094),c=n(3636);let o=e=>{let[t,n]=l.useState(!0),i=l.useRef(!0);return(0,l.useEffect)(()=>{if(i.current){i.current=!1;return}n(!1)},[e.language]),(0,l.useEffect)(()=>{t||n(!0)}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("h2",{className:"text-2xl font-bold mb-2 flex items-center",children:[(0,r.jsx)(s.OdJ,{}),(0,r.jsx)("span",{className:"mx-2",children:(0,r.jsx)(c.Vd,{id:"comments.title"})})]}),t?(0,r.jsx)(a(),{options:{clientID:"5640259688bc3d72b807",clientSecret:"bbe26de2fca2ea86e49a98e883caf9ff3102c4ff",repo:"ddadaal.me.github.io",owner:"ddadaal",admin:["ddadaal"],language:e.language,title:"[COMMENT] ".concat(e.articleTitle),id:e.articleId.substring(0,50),distractionFreeMode:!1}}):void 0]})},u=e=>{let t=(0,c.QT)(),n=(0,c.G3)(t.currentLanguage.id);return(0,r.jsx)(o,{...e,language:n.gitalkLangId})}},3303:function(e,t,n){"use strict";n.r(t),n.d(t,{RelatedArticles:function(){return c}});var r=n(9953),i=n(2091),a=n.n(i),l=n(9094),s=n(3636);let c=e=>{let{relatedArticles:t}=e,n=(0,s.QT)();if(0!==t.length)return(0,r.jsxs)("div",{children:[(0,r.jsxs)("h2",{className:"text-2xl font-bold mb-2 flex items-center",children:[(0,r.jsx)(l.Z1Y,{}),(0,r.jsx)("span",{className:"mx-2",children:(0,r.jsx)(s.Vd,{id:"articlePage.relatedArticles.text"})})]}),(0,r.jsx)("div",{className:"flex flex-wrap gap-2",children:t.map(e=>{var t;let i=null!==(t=e.langVersions.find(e=>e.lang===(0,s.G3)(n.currentLanguage.id).simplified))&&void 0!==t?t:e.langVersions[0];return(0,r.jsx)("div",{className:"card w-96 bg-base-100 shadow-lg hover:shadow-xl transition",children:(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsx)("span",{className:"text-sm",children:i.time}),(0,r.jsx)(a(),{href:"/articles/".concat(e.id,"/").concat(i.lang),children:(0,r.jsx)("h2",{className:"card-title",children:i.title})}),(0,r.jsx)("p",{children:i.excerpt})]})},e.id)})})]})}},5583:function(e,t,n){"use strict";n.d(t,{M:function(){return a}});var r=n(3636),i=JSON.parse('[{"tag":"problem-investigation","cn":"问题探究","en":"Problem Investigation"},{"tag":"project","cn":"我的项目","en":"My Projects"},{"tag":"code-trick","cn":"代码技巧","en":"Code Tricks"},{"tag":"web-frontend","cn":"Web前端","en":"Web Front-end"},{"tag":"thoughts","cn":"看法","en":"Thoughts"},{"tag":"hands-on","cn":"上手","en":"Hands On"},{"tag":"blog","cn":"博客","en":"Blog"},{"tag":"math","cn":"数学","en":"Math"},{"tag":"interview-experiences","cn":"面试经验","en":"Interview Experiences"},{"tag":"annual-summary","cn":"年度总结","en":"Annual Summary"},{"tag":"in-class","cn":"课内","en":"In Class"},{"tag":"Microsoft","cn":"微软","en":"Microsoft"},{"tag":"life","cn":"生活","en":"Life"},{"tag":"editor","cn":"编辑器","en":"Editor"},{"tag":"wearables","cn":"可穿戴设备","en":"Wearables"}]');function a(e,t){var n;let a=i.find(e=>e.tag===t);return null!==(n=null==a?void 0:a[(0,r.G3)(e).simplified])&&void 0!==n?n:t}},5707:function(e,t,n){"use strict";n.r(t),n.d(t,{Localized:function(){return l},Provider:function(){return s},prefix:function(){return o},useI18n:function(){return c}});var r=n(958),i=n(1946);let a=(0,r.o)(i.yX),l=a.Localized,s=a.Provider,c=a.useI18n,o=a.prefix},3636:function(e,t,n){"use strict";n.d(t,{G3:function(){return i.G3},Mj:function(){return i.Mj},O4:function(){return r.prefix},QT:function(){return r.useI18n},Vd:function(){return r.Localized},al:function(){return i.al},zt:function(){return r.Provider}});var r=n(5707),i=n(1946)},1946:function(e,t,n){"use strict";n.d(t,{G3:function(){return a},Mj:function(){return i},al:function(){return l},yX:function(){return r}});let r={"zh-CN":()=>n.e(827).then(n.t.bind(n,9827,19)).then(e=>e.default),"en-US":()=>n.e(746).then(n.t.bind(n,7746,19)).then(e=>e.default)},i={"zh-CN":{gitalkLangId:"zh-CN",simplified:"cn",langStrings:["cn","zh-CN","zh"],htmlLang:"zh-CN",name:"简体中文",icon:()=>"\uD83C\uDDE8\uD83C\uDDF3 "},"en-US":{gitalkLangId:"en",simplified:"en",langStrings:["en","en-US"],htmlLang:"en-US",name:"English",icon:()=>"\uD83C\uDDFA\uD83C\uDDF8 "}},a=e=>i[e],l="zh-CN";Object.keys(i)},5908:function(e,t,n){"use strict";n.d(t,{E:function(){return a},o:function(){return i}});var r=n(4036);function i(e){return e.toFormat("yyyy-MM-dd HH:mm:ss 'UTC'Z")}function a(e){return r.ou.fromSQL(e,{zone:"Asia/Shanghai"})}},7923:function(){},8924:function(){},7822:function(e){!function(){"use strict";var t={114:function(e){function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function n(e,t){for(var n,r="",i=0,a=-1,l=0,s=0;s<=e.length;++s){if(s<e.length)n=e.charCodeAt(s);else if(47===n)break;else n=47;if(47===n){if(a===s-1||1===l);else if(a!==s-1&&2===l){if(r.length<2||2!==i||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2)){if(r.length>2){var c=r.lastIndexOf("/");if(c!==r.length-1){-1===c?(r="",i=0):i=(r=r.slice(0,c)).length-1-r.lastIndexOf("/"),a=s,l=0;continue}}else if(2===r.length||1===r.length){r="",i=0,a=s,l=0;continue}}t&&(r.length>0?r+="/..":r="..",i=2)}else r.length>0?r+="/"+e.slice(a+1,s):r=e.slice(a+1,s),i=s-a-1;a=s,l=0}else 46===n&&-1!==l?++l:l=-1}return r}var r={resolve:function(){for(var e,r,i="",a=!1,l=arguments.length-1;l>=-1&&!a;l--)l>=0?r=arguments[l]:(void 0===e&&(e=""),r=e),t(r),0!==r.length&&(i=r+"/"+i,a=47===r.charCodeAt(0));return(i=n(i,!a),a)?i.length>0?"/"+i:"/":i.length>0?i:"."},normalize:function(e){if(t(e),0===e.length)return".";var r=47===e.charCodeAt(0),i=47===e.charCodeAt(e.length-1);return(0!==(e=n(e,!r)).length||r||(e="."),e.length>0&&i&&(e+="/"),r)?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,n=0;n<arguments.length;++n){var i=arguments[n];t(i),i.length>0&&(void 0===e?e=i:e+="/"+i)}return void 0===e?".":r.normalize(e)},relative:function(e,n){if(t(e),t(n),e===n||(e=r.resolve(e))===(n=r.resolve(n)))return"";for(var i=1;i<e.length&&47===e.charCodeAt(i);++i);for(var a=e.length,l=a-i,s=1;s<n.length&&47===n.charCodeAt(s);++s);for(var c=n.length-s,o=l<c?l:c,u=-1,d=0;d<=o;++d){if(d===o){if(c>o){if(47===n.charCodeAt(s+d))return n.slice(s+d+1);if(0===d)return n.slice(s+d)}else l>o&&(47===e.charCodeAt(i+d)?u=d:0===d&&(u=0));break}var f=e.charCodeAt(i+d);if(f!==n.charCodeAt(s+d))break;47===f&&(u=d)}var h="";for(d=i+u+1;d<=a;++d)(d===a||47===e.charCodeAt(d))&&(0===h.length?h+="..":h+="/..");return h.length>0?h+n.slice(s+u):(s+=u,47===n.charCodeAt(s)&&++s,n.slice(s))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var n=e.charCodeAt(0),r=47===n,i=-1,a=!0,l=e.length-1;l>=1;--l)if(47===(n=e.charCodeAt(l))){if(!a){i=l;break}}else a=!1;return -1===i?r?"/":".":r&&1===i?"//":e.slice(0,i)},basename:function(e,n){if(void 0!==n&&"string"!=typeof n)throw TypeError('"ext" argument must be a string');t(e);var r,i=0,a=-1,l=!0;if(void 0!==n&&n.length>0&&n.length<=e.length){if(n.length===e.length&&n===e)return"";var s=n.length-1,c=-1;for(r=e.length-1;r>=0;--r){var o=e.charCodeAt(r);if(47===o){if(!l){i=r+1;break}}else -1===c&&(l=!1,c=r+1),s>=0&&(o===n.charCodeAt(s)?-1==--s&&(a=r):(s=-1,a=c))}return i===a?a=c:-1===a&&(a=e.length),e.slice(i,a)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!l){i=r+1;break}}else -1===a&&(l=!1,a=r+1);return -1===a?"":e.slice(i,a)},extname:function(e){t(e);for(var n=-1,r=0,i=-1,a=!0,l=0,s=e.length-1;s>=0;--s){var c=e.charCodeAt(s);if(47===c){if(!a){r=s+1;break}continue}-1===i&&(a=!1,i=s+1),46===c?-1===n?n=s:1!==l&&(l=1):-1!==n&&(l=-1)}return -1===n||-1===i||0===l||1===l&&n===i-1&&n===r+1?"":e.slice(n,i)},format:function(e){var t,n;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,n=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+n:t+"/"+n:n},parse:function(e){t(e);var n,r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var i=e.charCodeAt(0),a=47===i;a?(r.root="/",n=1):n=0;for(var l=-1,s=0,c=-1,o=!0,u=e.length-1,d=0;u>=n;--u){if(47===(i=e.charCodeAt(u))){if(!o){s=u+1;break}continue}-1===c&&(o=!1,c=u+1),46===i?-1===l?l=u:1!==d&&(d=1):-1!==l&&(d=-1)}return -1===l||-1===c||0===d||1===d&&l===c-1&&l===s+1?-1!==c&&(0===s&&a?r.base=r.name=e.slice(1,c):r.base=r.name=e.slice(s,c)):(0===s&&a?(r.name=e.slice(1,l),r.base=e.slice(1,c)):(r.name=e.slice(s,l),r.base=e.slice(s,c)),r.ext=e.slice(l,c)),s>0?r.dir=e.slice(0,s-1):a&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r,e.exports=r}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var a=n[e]={exports:{}},l=!0;try{t[e](a,a.exports,r),l=!1}finally{l&&delete n[e]}return a.exports}r.ab="//";var i=r(114);e.exports=i}()},6448:function(e,t,n){e.exports=n(2647)}}]);