(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[214],{6824:function(e,n,r){Promise.resolve().then(r.bind(r,9958)),Promise.resolve().then(r.bind(r,4138))},9958:function(e,n,r){"use strict";r.r(n),r.d(n,{SearchBar:function(){return N},SearchCard:function(){return y},TagsCard:function(){return b},WebsiteCard:function(){return j}});var t=r(9953),s=r(635),a=r.n(s),i=r(2091),l=r.n(i),c=r(3328),d=r(9873),o=r(9094),u=r(5583),h=r(3636),x=r(1711),m=r.n(x);let f=e=>{let{href:n,children:r,target:s}=e;return(0,t.jsx)(l(),{className:"link link-hover flex items-center my-1 space-x-1",href:n,target:s,children:r})},j=()=>(0,t.jsx)("div",{className:"card card-bordered bg-base-100 shadow-xl",children:(0,t.jsxs)("div",{className:"card-body",children:[(0,t.jsxs)("h2",{className:"card-title",children:[(0,t.jsx)(o.ssk,{})," ddadaal.me | ",(0,t.jsx)(h.Vd,{id:"blogIntro.subtitle"})]}),(0,t.jsx)("p",{children:(0,t.jsx)(h.Vd,{id:"blogIntro.description2"})}),(0,t.jsxs)("div",{children:[(0,t.jsxs)(f,{href:"https://github.com/ddadaal/ddadaal.me",target:"_blank",children:[(0,t.jsx)(o.tvD,{}),(0,t.jsx)("span",{children:(0,t.jsx)(h.Vd,{id:"blogIntro.sourceCode"})})]}),(0,t.jsxs)(f,{href:"/rss.xml",target:"_blank",children:[(0,t.jsx)(o.FZ6,{})," ",(0,t.jsx)("span",{children:"RSS"})]}),(0,t.jsxs)(f,{href:"/feedback",children:[(0,t.jsx)(o.ajU,{}),(0,t.jsx)("span",{children:(0,t.jsx)(h.Vd,{id:"blogIntro.feedback"})})]})]})]})}),g=e=>{let{tagCounts:n}=e,r=(0,h.QT)();return(0,t.jsx)("div",{className:"flex flex-wrap gap-2",children:n.map(e=>{let{tag:n,count:s}=e;return(0,t.jsxs)(l(),{href:{pathname:"/articles/search",query:{query:n}},className:"rounded-box p-1 text-sm text-base-content bg-base-200 hover:bg-base-300 transition",children:[(0,u.M)(r.currentLanguage.id,n),(0,t.jsx)("div",{className:"badge badge-outline badge-accent text-accent-content ml-1 p-1",children:s})]},n)})})},b=e=>{let{tagCounts:n}=e;return(0,t.jsx)("div",{className:"card card-bordered bg-base-100 shadow-xl",children:(0,t.jsxs)("div",{className:"card-body",children:[(0,t.jsxs)("h2",{className:"card-title",children:[(0,t.jsx)(o.YxP,{}),(0,t.jsx)(h.Vd,{id:"tagsCard.title"})]}),(0,t.jsx)(g,{tagCounts:n})]})})},p=e=>(0,t.jsx)("input",{type:"text",className:"input input-bordered w-full",name:"query",autoComplete:"off",...e}),v=e=>{var n;let{placeholder:r}=e,s=(0,c.useSearchParams)(),a=null!==(n=s.get("query"))&&void 0!==n?n:void 0,[i,l]=(0,d.useState)(a);return(0,d.useEffect)(()=>{l(a)},[a]),(0,t.jsx)(p,{placeholder:r,value:i,onChange:e=>{l(e.target.value)}})},N=e=>{let{articleCount:n,showTags:r,tagCounts:s}=e,i=(0,h.QT)(),l=(0,c.useRouter)(),u=i.translateToString("search.inputPlaceholder",[n]);return(0,t.jsxs)("div",{className:a()("form-control my-2",{[m().search_bar]:r}),children:[(0,t.jsxs)("form",{className:"input-group",action:"/articles/search",method:"GET",onSubmit:e=>{e.preventDefault(),l.push("/articles/search?query="+encodeURIComponent(e.currentTarget.query.value))},children:[(0,t.jsx)(d.Suspense,{fallback:(0,t.jsx)(p,{placeholder:u}),children:(0,t.jsx)(v,{placeholder:u})}),(0,t.jsx)("button",{type:"submit",className:"btn btn-square",children:(0,t.jsx)(o.U41,{})})]}),r?(0,t.jsx)("div",{className:a()("hidden p-4 border border-neutral",m().search_bar_tags),children:(0,t.jsx)(g,{tagCounts:s})}):void 0]})},y=e=>{let{articleCount:n,tagCounts:r,showTags:s}=e;return(0,t.jsx)("div",{className:"card card-bordered bg-base-100 shadow-xl",children:(0,t.jsxs)("div",{className:"card-body",children:[(0,t.jsxs)("h2",{className:"card-title",children:[(0,t.jsx)(o.U41,{}),(0,t.jsx)(h.Vd,{id:"search.cardTitle"})]}),(0,t.jsx)("div",{children:(0,t.jsx)(N,{articleCount:n,showTags:s,tagCounts:r})})]})})}},4138:function(e,n,r){"use strict";r.r(n),r.d(n,{ArticleSearchPage:function(){return p}});var t=r(9953),s=r(635),a=r.n(s),i=r(1253),l=r(2091),c=r.n(l),d=r(3328),o=r(9873),u=r(9094),h=r(9958),x=r(7385),m=r(3636),f=r(5908);let j=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=parseInt(e);return isNaN(r)?n:r},g=["similarity","time","timeDesc"],b=(0,m.O4)("search.order."),p=e=>{var n,r;let{index:s,articleListInfos:l,articleCount:p,tagCounts:v}=e,N=(0,m.QT)(),[y]=(0,o.useState)(()=>i.Z.loadJSON(s,{fields:["title","content","tags"]})),C=Object.fromEntries((0,d.useSearchParams)().entries()),w=(0,d.usePathname)(),_=null!==(n=C.query)&&void 0!==n?n:"",k=j(null!==(r=C.page)&&void 0!==r?r:"1",1),S=C.order;S&&g.includes(S)||(S=g[0]);let T=y.search(_);T.sort((e,n)=>{if("similarity"===S)return e.score-n.score;let r=e=>{var n;let r=l.find(n=>n.id===e.id);return null!==(n=r.langVersions.find(e=>e.lang===N.currentLanguage.id))&&void 0!==n?n:r.langVersions[0]},t=r(e),s=r(n),a=(0,f.E)(t.date).toMillis()-(0,f.E)(s.date).toMillis();return"time"===S?a:-a});let V=Math.ceil(T.length/5);return(0,t.jsxs)("div",{className:"p-2",children:[(0,t.jsx)("div",{className:"lg:hidden max-w-full my-4",children:(0,t.jsx)(h.SearchBar,{showTags:!0,tagCounts:v,articleCount:p})}),(0,t.jsxs)("div",{className:"flex justify-between py-2",children:[(0,t.jsxs)("h1",{className:"text-3xl flex items-center",children:[(0,t.jsx)(m.Vd,{id:"search.title",args:[(0,t.jsx)("span",{className:"pr-2 font-bold",children:_},"query")]}),"(",T.length,")"]}),(0,t.jsxs)("div",{className:"dropdown dropdown-end",children:[(0,t.jsxs)("label",{tabIndex:0,className:"btn m-1",children:[(0,t.jsx)(u.roE,{}),(0,t.jsx)(m.Vd,{id:b(S)})]}),(0,t.jsx)("ul",{tabIndex:0,className:"dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52",children:g.map(e=>(0,t.jsx)("li",{children:(0,t.jsx)(c(),{href:{pathname:w,query:{...C,order:e}},children:(0,t.jsx)(m.Vd,{id:b(e)})})},e))})]})]}),(0,t.jsx)("div",{className:"space-y-6",children:T.slice(5*(k-1),5*k).map(e=>{let n=l.find(n=>n.id===e.id);return(0,t.jsx)(x.i,{article:n},n.id)})}),(0,t.jsx)("div",{className:"flex justify-center w-full my-2",children:(0,t.jsx)("div",{className:"join flex-wrap",children:Array.from({length:V},(e,n)=>n+1).map(e=>(0,t.jsx)(c(),{href:{pathname:w,query:{...C,page:e}},children:(0,t.jsx)("button",{className:a()("join-item","btn",{"btn-active":e===k}),children:e})},e))})})]})}},6091:function(e,n,r){"use strict";r.r(n),r.d(n,{ArticleFrontmatter:function(){return m}});var t=r(9953),s=r(635),a=r.n(s),i=r(2091),l=r.n(i),c=r(7822),d=r(9094),o=r(8375),u=r(5583),h=r(3636),x=r(5908);let m=e=>{var n;let{articleId:r,info:s,className:i,langVersions:m}=e,f=(0,h.QT)();return(0,t.jsxs)("div",{className:a()("flex flex-wrap gap-3 my-2 text-sm",i),children:[s.tags?(0,t.jsxs)("div",{className:"flex flex-wrap gap-1 items-center",children:[(0,t.jsx)(d.fxx,{}),s.tags.map(e=>(0,t.jsx)(l(),{href:{pathname:"/articles/search",query:{query:e}},className:"badge badge-accent mx-0.5 text-accent-content",children:(0,u.M)(f.currentLanguage.id,e)},e))]}):void 0,(0,t.jsxs)("div",{className:"flex items-center",title:f.translateToString("articleFrontmatter.date"),children:[(0,t.jsx)(d.XdU,{}),(0,t.jsx)("span",{className:"mx-0.5",children:(0,x.o)((0,x.E)(s.date))})]}),s.last_updated?(0,t.jsxs)("div",{className:"flex items-center",title:f.translateToString("articleFrontmatter.lastUpdated"),children:[(0,t.jsx)(d.OS,{}),(0,t.jsx)("span",{className:"mx-0.5",children:(0,x.o)((0,x.E)(s.last_updated))})]}):void 0,(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)(d.baU,{}),(0,t.jsx)("span",{className:"mx-0.5",children:(0,t.jsx)(h.Vd,{id:"articleFrontmatter.wordCount",args:[s.wordCount]})})]}),(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)(d.qyc,{}),(0,t.jsx)("span",{className:"mx-0.5",children:(0,t.jsx)(h.Vd,{id:"articleFrontmatter.timeToRead",args:[Math.ceil(s.readingTime)]})})]}),(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)(d.ssk,{}),(0,t.jsx)("span",{className:"mx-0.5 space-x-1",children:m.map(e=>{var a;return(0,t.jsx)(l(),{className:"link link-hover",href:(0,c.join)((0,o.k)({id:r,absolute_path:s.absolute_path}),e),children:null!==(n=null===(a=Object.values(h.Mj).find(n=>n.simplified===e))||void 0===a?void 0:a.name)&&void 0!==n?n:e},e)})})]})]})}},7385:function(e,n,r){"use strict";r.d(n,{i:function(){return c}});var t=r(9953),s=r(2091),a=r.n(s),i=r(6091),l=r(3636);let c=e=>{var n;let{article:r}=e,s=(0,l.QT)(),c=null!==(n=r.langVersions.find(e=>e.lang===s.currentLanguage.id))&&void 0!==n?n:r.langVersions[0];return(0,t.jsxs)("div",{children:[(0,t.jsx)(a(),{className:"text-3xl my-2 link link-hover block break-words",href:"/articles/".concat(r.id),children:c.title}),(0,t.jsx)(i.ArticleFrontmatter,{articleId:r.id,info:c,langVersions:r.langVersions.map(e=>e.lang)}),(0,t.jsx)("div",{className:"break-words",children:c.excerpt})]})}},8375:function(e,n,r){"use strict";r.d(n,{k:function(){return t}});let t=e=>{var n;return null!==(n=e.absolute_path)&&void 0!==n?n:"/articles/".concat(e.id)}},5583:function(e,n,r){"use strict";r.d(n,{M:function(){return a}});var t=r(3636),s=JSON.parse('[{"tag":"problem-investigation","cn":"问题探究","en":"Problem Investigation"},{"tag":"project","cn":"我的项目","en":"My Projects"},{"tag":"code-trick","cn":"代码技巧","en":"Code Tricks"},{"tag":"web-frontend","cn":"Web前端","en":"Web Front-end"},{"tag":"thoughts","cn":"看法","en":"Thoughts"},{"tag":"hands-on","cn":"上手","en":"Hands On"},{"tag":"blog","cn":"博客","en":"Blog"},{"tag":"math","cn":"数学","en":"Math"},{"tag":"interview-experiences","cn":"面试经验","en":"Interview Experiences"},{"tag":"annual-summary","cn":"年度总结","en":"Annual Summary"},{"tag":"in-class","cn":"课内","en":"In Class"},{"tag":"Microsoft","cn":"微软","en":"Microsoft"},{"tag":"life","cn":"生活","en":"Life"},{"tag":"editor","cn":"编辑器","en":"Editor"},{"tag":"wearables","cn":"可穿戴设备","en":"Wearables"}]');function a(e,n){var r;let a=s.find(e=>e.tag===n);return null!==(r=null==a?void 0:a[(0,t.G3)(e).simplified])&&void 0!==r?r:n}},5707:function(e,n,r){"use strict";r.r(n),r.d(n,{Localized:function(){return i},Provider:function(){return l},prefix:function(){return d},useI18n:function(){return c}});var t=r(958),s=r(1946);let a=(0,t.o)(s.yX),i=a.Localized,l=a.Provider,c=a.useI18n,d=a.prefix},3636:function(e,n,r){"use strict";r.d(n,{G3:function(){return s.G3},Mj:function(){return s.Mj},O4:function(){return t.prefix},QT:function(){return t.useI18n},Vd:function(){return t.Localized},al:function(){return s.al},zt:function(){return t.Provider}});var t=r(5707),s=r(1946)},1946:function(e,n,r){"use strict";r.d(n,{G3:function(){return a},Mj:function(){return s},al:function(){return i},yX:function(){return t}});let t={"zh-CN":()=>r.e(827).then(r.t.bind(r,9827,19)).then(e=>e.default),"en-US":()=>r.e(746).then(r.t.bind(r,7746,19)).then(e=>e.default)},s={"zh-CN":{gitalkLangId:"zh-CN",simplified:"cn",langStrings:["cn","zh-CN","zh"],htmlLang:"zh-CN",name:"简体中文",icon:()=>"\uD83C\uDDE8\uD83C\uDDF3 "},"en-US":{gitalkLangId:"en",simplified:"en",langStrings:["en","en-US"],htmlLang:"en-US",name:"English",icon:()=>"\uD83C\uDDFA\uD83C\uDDF8 "}},a=e=>s[e],i="zh-CN";Object.keys(s)},5908:function(e,n,r){"use strict";r.d(n,{E:function(){return a},o:function(){return s}});var t=r(4036);function s(e){return e.toFormat("yyyy-MM-dd HH:mm:ss 'UTC'Z")}function a(e){return t.ou.fromSQL(e,{zone:"Asia/Shanghai"})}},1711:function(e){e.exports={search_bar:"search_search_bar__LAozX",search_bar_tags:"search_search_bar_tags__KA4tj"}}},function(e){e.O(0,[309,813,806,159,890,744],function(){return e(e.s=6824)}),_N_E=e.O()}]);