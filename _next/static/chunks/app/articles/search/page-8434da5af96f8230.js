(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[214],{6824:function(e,n,r){Promise.resolve().then(r.bind(r,9958)),Promise.resolve().then(r.bind(r,4138))},9958:function(e,n,r){"use strict";r.r(n),r.d(n,{SearchBar:function(){return g},SearchCard:function(){return b},TagsCard:function(){return j},WebsiteCard:function(){return m}});var t=r(9953),s=r(635),a=r.n(s),i=r(2091),c=r.n(i),l=r(9094),d=r(5583),o=r(3636),u=r(1711),h=r.n(u);let x=e=>{let{href:n,children:r,target:s}=e;return(0,t.jsx)(c(),{className:"link link-hover flex items-center my-1 space-x-1",href:n,target:s,children:r})},m=()=>(0,t.jsx)("div",{className:"card card-bordered bg-base-100 shadow-xl",children:(0,t.jsxs)("div",{className:"card-body",children:[(0,t.jsxs)("h2",{className:"card-title",children:[(0,t.jsx)(l.ssk,{})," ddadaal.me | ",(0,t.jsx)(o.Vd,{id:"blogIntro.subtitle"})]}),(0,t.jsx)("p",{children:(0,t.jsx)(o.Vd,{id:"blogIntro.description2"})}),(0,t.jsxs)("div",{children:[(0,t.jsxs)(x,{href:"https://github.com/ddadaal/ddadaal.me",target:"_blank",children:[(0,t.jsx)(l.tvD,{}),(0,t.jsx)("span",{children:(0,t.jsx)(o.Vd,{id:"blogIntro.sourceCode"})})]}),(0,t.jsxs)(x,{href:"/rss",target:"_blank",children:[(0,t.jsx)(l.FZ6,{})," ",(0,t.jsx)("span",{children:"RSS"})]}),(0,t.jsxs)(x,{href:"/feedback",children:[(0,t.jsx)(l.ajU,{}),(0,t.jsx)("span",{children:(0,t.jsx)(o.Vd,{id:"blogIntro.feedback"})})]})]})]})}),f=e=>{let{tagCounts:n}=e,r=(0,o.QT)();return(0,t.jsx)("div",{className:"flex flex-wrap gap-2",children:n.map(e=>{let{tag:n,count:s}=e;return(0,t.jsxs)(c(),{href:{pathname:"/articles/search",query:{query:n}},className:"rounded-box p-1 text-sm text-base-content bg-base-200 hover:bg-base-300 transition",children:[(0,d.M)(r.currentLanguage.id,n),(0,t.jsx)("div",{className:"badge badge-outline badge-accent text-accent-content ml-1 p-1",children:s})]},n)})})},j=e=>{let{tagCounts:n}=e;return(0,t.jsx)("div",{className:"card card-bordered bg-base-100 shadow-xl",children:(0,t.jsxs)("div",{className:"card-body",children:[(0,t.jsxs)("h2",{className:"card-title",children:[(0,t.jsx)(l.YxP,{}),(0,t.jsx)(o.Vd,{id:"tagsCard.title"})]}),(0,t.jsx)(f,{tagCounts:n})]})})},g=e=>{let{articleCount:n,showTags:r,tagCounts:s}=e,i=(0,o.QT)();return(0,t.jsxs)("div",{className:a()("form-control my-2",{[h()["search-bar"]]:r}),children:[(0,t.jsxs)("form",{className:"input-group",action:"/articles/search",method:"GET",children:[(0,t.jsx)("input",{type:"text",placeholder:i.translateToString("search.inputPlaceholder",[n]),className:"input input-bordered w-full",name:"query"}),(0,t.jsx)("button",{type:"submit",className:"btn btn-square",children:(0,t.jsx)(l.U41,{})})]}),r?(0,t.jsx)("div",{id:"search_bar_tags",className:"hidden",children:(0,t.jsx)(f,{tagCounts:s})}):void 0]})},b=e=>{let{articleCount:n,tagCounts:r,showTags:s}=e;return(0,t.jsx)("div",{className:"card card-bordered bg-base-100 shadow-xl",children:(0,t.jsxs)("div",{className:"card-body",children:[(0,t.jsxs)("h2",{className:"card-title",children:[(0,t.jsx)(l.U41,{}),(0,t.jsx)(o.Vd,{id:"search.cardTitle"})]}),(0,t.jsx)("div",{children:(0,t.jsx)(g,{articleCount:n,showTags:s,tagCounts:r})})]})})}},4138:function(e,n,r){"use strict";r.r(n),r.d(n,{ArticleSearchPage:function(){return b}});var t=r(9953),s=r(635),a=r.n(s),i=r(1253),c=r(2091),l=r.n(c),d=r(3328),o=r(9873),u=r(9094),h=r(7385),x=r(3636),m=r(5908);let f=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=parseInt(e);return isNaN(r)?n:r},j=["similarity","time","timeDesc"],g=(0,x.O4)("search.order."),b=e=>{var n,r;let{index:s,articleListInfos:c}=e,b=(0,x.QT)(),[v]=(0,o.useState)(()=>i.Z.loadJSON(s,{fields:["title","content","tags"]})),p=Object.fromEntries((0,d.useSearchParams)().entries()),N=(0,d.usePathname)(),y=null!==(n=p.query)&&void 0!==n?n:"",C=f(null!==(r=p.page)&&void 0!==r?r:"1",1),k=p.order;k&&j.includes(k)||(k=j[0]);let w=v.search(y);w.sort((e,n)=>{if("similarity"===k)return e.score-n.score;let r=e=>{var n;let r=c.find(n=>n.id===e.id);return null!==(n=r.langVersions.find(e=>e.lang===b.currentLanguage.id))&&void 0!==n?n:r.langVersions[0]},t=r(e),s=r(n),a=(0,m.E)(t.date).toMillis()-(0,m.E)(s.date).toMillis();return"time"===k?a:-a});let _=Math.ceil(w.length/5);return(0,t.jsxs)("div",{className:"p-2",children:[(0,t.jsxs)("div",{className:"flex justify-between py-2",children:[(0,t.jsxs)("h1",{className:"text-3xl flex items-center",children:[(0,t.jsx)(x.Vd,{id:"search.title",args:[(0,t.jsx)("strong",{children:y},"query")]}),"(",w.length,")"]}),(0,t.jsxs)("div",{className:"dropdown dropdown-end",children:[(0,t.jsxs)("label",{tabIndex:0,className:"btn m-1",children:[(0,t.jsx)(u.roE,{}),(0,t.jsx)(x.Vd,{id:g(k)})]}),(0,t.jsx)("ul",{tabIndex:0,className:"dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52",children:j.map(e=>(0,t.jsx)("li",{children:(0,t.jsx)(l(),{href:{pathname:N,query:{...p,order:e}},children:(0,t.jsx)(x.Vd,{id:g(e)})})},e))})]})]}),(0,t.jsx)("div",{className:"space-y-6",children:w.slice(5*(C-1),5*C).map(e=>{let n=c.find(n=>n.id===e.id);return(0,t.jsx)(h.i,{article:n},n.id)})}),(0,t.jsx)("div",{className:"flex justify-center w-full my-2",children:(0,t.jsx)("div",{className:"join",children:Array.from({length:_},(e,n)=>n+1).map(e=>(0,t.jsx)(l(),{href:{pathname:N,query:{...p,page:e}},children:(0,t.jsx)("button",{className:a()("join-item","btn",{"btn-active":e===C}),children:e})},e))})})]})}},6091:function(e,n,r){"use strict";r.r(n),r.d(n,{ArticleFrontmatter:function(){return u}});var t=r(9953),s=r(2091),a=r.n(s),i=r(7822),c=r(9094),l=r(5583),d=r(3636),o=r(5908);let u=e=>{var n,r;let{articleId:s,info:u,langVersions:h}=e,x=(0,d.QT)();return(0,t.jsxs)("div",{className:"flex flex-wrap gap-3 my-2 text-sm",children:[u.tags?(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)(c.fxx,{}),u.tags.map(e=>(0,t.jsx)("div",{className:"badge badge-accent mx-0.5 text-accent-content",children:(0,l.M)(x.currentLanguage.id,e)},e))]}):void 0,(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)(c.XdU,{}),(0,t.jsx)("span",{className:"mx-0.5",children:(0,o.o)((0,o.E)(u.date))})]}),(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)(c.baU,{}),(0,t.jsx)("span",{className:"mx-0.5",children:(0,t.jsx)(d.Vd,{id:"articleFrontmatter.wordCount",args:[u.wordCount]})})]}),(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)(c.qyc,{}),(0,t.jsx)("span",{className:"mx-0.5",children:(0,t.jsx)(d.Vd,{id:"articleFrontmatter.timeToRead",args:[Math.ceil(u.readingTime)]})})]}),(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)(c.ssk,{}),(0,t.jsx)("span",{className:"mx-0.5 space-x-1",children:h.map(e=>{var c;return(0,t.jsx)(a(),{className:"link link-hover",href:(0,i.join)(null!==(n=u.absolute_path)&&void 0!==n?n:"/articles/".concat(s),e),children:null!==(r=null===(c=Object.values(d.Mj).find(n=>n.simplified===e))||void 0===c?void 0:c.name)&&void 0!==r?r:e},e)})})]})]})}},7385:function(e,n,r){"use strict";r.d(n,{i:function(){return l}});var t=r(9953),s=r(2091),a=r.n(s),i=r(6091),c=r(3636);let l=e=>{var n;let{article:r}=e,s=(0,c.QT)(),l=null!==(n=r.langVersions.find(e=>e.lang===s.currentLanguage.id))&&void 0!==n?n:r.langVersions[0];return(0,t.jsxs)("div",{children:[(0,t.jsx)(a(),{className:"text-3xl my-2 link link-hover block",href:"/articles/".concat(r.id),children:l.title}),(0,t.jsx)(i.ArticleFrontmatter,{articleId:r.id,info:l,langVersions:r.langVersions.map(e=>e.lang)}),(0,t.jsx)("div",{children:l.excerpt})]})}},5583:function(e,n,r){"use strict";r.d(n,{M:function(){return a}});var t=r(3636),s=JSON.parse('[{"tag":"problem-investigation","cn":"问题探究","en":"Problem Investigation"},{"tag":"project","cn":"我的项目","en":"My Projects"},{"tag":"code-trick","cn":"代码技巧","en":"Code Tricks"},{"tag":"web-frontend","cn":"Web前端","en":"Web Front-end"},{"tag":"thoughts","cn":"看法","en":"Thoughts"},{"tag":"hands-on","cn":"上手","en":"Hands On"},{"tag":"blog","cn":"博客","en":"Blog"},{"tag":"math","cn":"数学","en":"Math"},{"tag":"interview-experiences","cn":"面试经验","en":"Interview Experiences"},{"tag":"annual-summary","cn":"年度总结","en":"Annual Summary"},{"tag":"in-class","cn":"课内","en":"In Class"},{"tag":"Microsoft","cn":"微软","en":"Microsoft"},{"tag":"life","cn":"生活","en":"Life"},{"tag":"editor","cn":"编辑器","en":"Editor"},{"tag":"wearables","cn":"可穿戴设备","en":"Wearables"}]');function a(e,n){var r;let a=s.find(e=>e.tag===n);return null!==(r=null==a?void 0:a[(0,t.G3)(e).simplified])&&void 0!==r?r:n}},5707:function(e,n,r){"use strict";r.r(n),r.d(n,{Localized:function(){return i},Provider:function(){return c},prefix:function(){return d},useI18n:function(){return l}});var t=r(958),s=r(1946);let a=(0,t.o)(s.yX),i=a.Localized,c=a.Provider,l=a.useI18n,d=a.prefix},3636:function(e,n,r){"use strict";r.d(n,{G3:function(){return s.G3},Mj:function(){return s.Mj},O4:function(){return t.prefix},QT:function(){return t.useI18n},Vd:function(){return t.Localized},al:function(){return s.al},zt:function(){return t.Provider}});var t=r(5707),s=r(1946)},1946:function(e,n,r){"use strict";r.d(n,{G3:function(){return a},Mj:function(){return s},al:function(){return i},yX:function(){return t}});let t={"zh-CN":()=>r.e(827).then(r.t.bind(r,9827,19)).then(e=>e.default),"en-US":()=>r.e(746).then(r.t.bind(r,7746,19)).then(e=>e.default)},s={"zh-CN":{gitalkLangId:"zh-CN",simplified:"cn",langStrings:["cn","zh-CN","zh"],htmlLang:"zh-CN",name:"简体中文",icon:()=>"\uD83C\uDDE8\uD83C\uDDF3 "},"en-US":{gitalkLangId:"en",simplified:"en",langStrings:["en","en-US"],htmlLang:"en-US",name:"English",icon:()=>"\uD83C\uDDFA\uD83C\uDDF8 "}},a=e=>s[e],i="zh-CN";Object.keys(s)},5908:function(e,n,r){"use strict";r.d(n,{E:function(){return a},o:function(){return s}});var t=r(4036);function s(e){return e.toFormat("yyyy-MM-dd HH:mm:ss 'UTC'Z")}function a(e){return t.ou.fromSQL(e,{zone:"Asia/Shanghai"})}},1711:function(e){e.exports={"search-bar":"search_search-bar__V13d0",search_bar_tags:"search_search_bar_tags__KA4tj"}}},function(e){e.O(0,[309,270,813,779,159,890,744],function(){return e(e.s=6824)}),_N_E=e.O()}]);