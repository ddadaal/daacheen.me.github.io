(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[464],{7700:function(e,t,n){Promise.resolve().then(n.t.bind(n,6417,23)),Promise.resolve().then(n.t.bind(n,9436,23)),Promise.resolve().then(n.t.bind(n,3497,23)),Promise.resolve().then(n.t.bind(n,1478,23)),Promise.resolve().then(n.t.bind(n,8924,23)),Promise.resolve().then(n.bind(n,2834)),Promise.resolve().then(n.bind(n,6707)),Promise.resolve().then(n.t.bind(n,7379,23)),Promise.resolve().then(n.bind(n,7890)),Promise.resolve().then(n.bind(n,6091)),Promise.resolve().then(n.bind(n,1763)),Promise.resolve().then(n.bind(n,3303)),Promise.resolve().then(n.bind(n,9958)),Promise.resolve().then(n.bind(n,7573))},7573:function(e,t,n){"use strict";n.r(t),n.d(t,{ArticleList:function(){return o}});var r=n(9953),s=n(635),a=n.n(s),i=n(2091),l=n.n(i),c=n(9958),d=n(7385);let o=e=>{let{articles:t,pageNum:n,totalPages:s,tagCounts:i,articleCount:o}=e;return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"lg:hidden max-w-full my-4",children:(0,r.jsx)(c.SearchBar,{showTags:!0,tagCounts:i,articleCount:o})}),(0,r.jsx)("div",{className:"space-y-8",children:t.map(e=>(0,r.jsx)(d.i,{article:e},e.id))}),(0,r.jsx)("div",{className:"flex justify-center w-full my-4",children:(0,r.jsx)("div",{className:"join flex-wrap",children:Array.from({length:s},(e,t)=>t+1).map(e=>(0,r.jsx)(l(),{href:"/articles/".concat(e),children:(0,r.jsx)("button",{className:a()("join-item","btn",{"btn-active":e===n}),children:e})},e))})})]})}},9958:function(e,t,n){"use strict";n.r(t),n.d(t,{SearchBar:function(){return N},SearchCard:function(){return y},TagsCard:function(){return v},WebsiteCard:function(){return g}});var r=n(9953),s=n(635),a=n.n(s),i=n(2091),l=n.n(i),c=n(3328),d=n(9873),o=n(9094),u=n(5583),h=n(3636),x=n(1711),m=n.n(x);let f=e=>{let{href:t,children:n,target:s}=e;return(0,r.jsx)(l(),{className:"link link-hover flex items-center my-1 space-x-1",href:t,target:s,children:n})},g=()=>(0,r.jsx)("div",{className:"card card-bordered bg-base-100 shadow-xl",children:(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsxs)("h2",{className:"card-title",children:[(0,r.jsx)(o.ssk,{})," ddadaal.me | ",(0,r.jsx)(h.Vd,{id:"blogIntro.subtitle"})]}),(0,r.jsx)("p",{children:(0,r.jsx)(h.Vd,{id:"blogIntro.description2"})}),(0,r.jsxs)("div",{children:[(0,r.jsxs)(f,{href:"https://github.com/ddadaal/ddadaal.me",target:"_blank",children:[(0,r.jsx)(o.tvD,{}),(0,r.jsx)("span",{children:(0,r.jsx)(h.Vd,{id:"blogIntro.sourceCode"})})]}),(0,r.jsxs)(f,{href:"/rss.xml",target:"_blank",children:[(0,r.jsx)(o.FZ6,{})," ",(0,r.jsx)("span",{children:"RSS"})]}),(0,r.jsxs)(f,{href:"/feedback",children:[(0,r.jsx)(o.ajU,{}),(0,r.jsx)("span",{children:(0,r.jsx)(h.Vd,{id:"blogIntro.feedback"})})]})]})]})}),j=e=>{let{tagCounts:t}=e,n=(0,h.QT)();return(0,r.jsx)("div",{className:"flex flex-wrap gap-2",children:t.map(e=>{let{tag:t,count:s}=e;return(0,r.jsxs)(l(),{href:{pathname:"/articles/search",query:{query:t}},className:"rounded-box p-1 text-sm text-base-content bg-base-200 hover:bg-base-300 transition",children:[(0,u.M)(n.currentLanguage.id,t),(0,r.jsx)("div",{className:"badge badge-outline badge-accent text-accent-content ml-1 p-1",children:s})]},t)})})},v=e=>{let{tagCounts:t}=e;return(0,r.jsx)("div",{className:"card card-bordered bg-base-100 shadow-xl",children:(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsxs)("h2",{className:"card-title",children:[(0,r.jsx)(o.YxP,{}),(0,r.jsx)(h.Vd,{id:"tagsCard.title"})]}),(0,r.jsx)(j,{tagCounts:t})]})})},b=e=>(0,r.jsx)("input",{type:"text",className:"input input-bordered w-full",name:"query",autoComplete:"off",...e}),p=e=>{var t;let{placeholder:n}=e,s=(0,c.useSearchParams)(),a=null!==(t=s.get("query"))&&void 0!==t?t:void 0,[i,l]=(0,d.useState)(a);return(0,d.useEffect)(()=>{l(a)},[a]),(0,r.jsx)(b,{placeholder:n,value:i,onChange:e=>{l(e.target.value)}})},N=e=>{let{articleCount:t,showTags:n,tagCounts:s}=e,i=(0,h.QT)(),l=(0,c.useRouter)(),u=i.translateToString("search.inputPlaceholder",[t]);return(0,r.jsxs)("div",{className:a()("form-control my-2",{[m().search_bar]:n}),children:[(0,r.jsxs)("form",{className:"input-group",action:"/articles/search",method:"GET",onSubmit:e=>{e.preventDefault(),l.push("/articles/search?query="+encodeURIComponent(e.currentTarget.query.value))},children:[(0,r.jsx)(d.Suspense,{fallback:(0,r.jsx)(b,{placeholder:u}),children:(0,r.jsx)(p,{placeholder:u})}),(0,r.jsx)("button",{type:"submit",className:"btn btn-square",children:(0,r.jsx)(o.U41,{})})]}),n?(0,r.jsx)("div",{className:a()("hidden p-4 border border-neutral",m().search_bar_tags),children:(0,r.jsx)(j,{tagCounts:s})}):void 0]})},y=e=>{let{articleCount:t,tagCounts:n,showTags:s}=e;return(0,r.jsx)("div",{className:"card card-bordered bg-base-100 shadow-xl",children:(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsxs)("h2",{className:"card-title",children:[(0,r.jsx)(o.U41,{}),(0,r.jsx)(h.Vd,{id:"search.cardTitle"})]}),(0,r.jsx)("div",{children:(0,r.jsx)(N,{articleCount:t,showTags:s,tagCounts:n})})]})})}},6091:function(e,t,n){"use strict";n.r(t),n.d(t,{ArticleFrontmatter:function(){return m}});var r=n(9953),s=n(635),a=n.n(s),i=n(2091),l=n.n(i),c=n(7822),d=n(9094),o=n(8375),u=n(5583),h=n(3636),x=n(5908);let m=e=>{var t;let{articleId:n,info:s,className:i,langVersions:m}=e,f=(0,h.QT)();return(0,r.jsxs)("div",{className:a()("flex flex-wrap gap-3 my-2 text-sm",i),children:[s.tags?(0,r.jsxs)("div",{className:"flex flex-wrap gap-1 items-center",children:[(0,r.jsx)(d.fxx,{}),s.tags.map(e=>(0,r.jsx)(l(),{href:{pathname:"/articles/search",query:{query:e}},className:"badge badge-accent mx-0.5 text-accent-content",children:(0,u.M)(f.currentLanguage.id,e)},e))]}):void 0,(0,r.jsxs)("div",{className:"flex items-center",title:f.translateToString("articleFrontmatter.date"),children:[(0,r.jsx)(d.XdU,{}),(0,r.jsx)("span",{className:"mx-0.5",children:(0,x.o)((0,x.E)(s.date))})]}),s.last_updated?(0,r.jsxs)("div",{className:"flex items-center",title:f.translateToString("articleFrontmatter.lastUpdated"),children:[(0,r.jsx)(d.OS,{}),(0,r.jsx)("span",{className:"mx-0.5",children:(0,x.o)((0,x.E)(s.last_updated))})]}):void 0,(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(d.baU,{}),(0,r.jsx)("span",{className:"mx-0.5",children:(0,r.jsx)(h.Vd,{id:"articleFrontmatter.wordCount",args:[s.wordCount]})})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(d.qyc,{}),(0,r.jsx)("span",{className:"mx-0.5",children:(0,r.jsx)(h.Vd,{id:"articleFrontmatter.timeToRead",args:[Math.ceil(s.readingTime)]})})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(d.ssk,{}),(0,r.jsx)("span",{className:"mx-0.5 space-x-1",children:m.map(e=>{var a;return(0,r.jsx)(l(),{className:"link link-hover",href:(0,c.join)((0,o.k)({id:n,absolute_path:s.absolute_path}),e),children:null!==(t=null===(a=Object.values(h.Mj).find(t=>t.simplified===e))||void 0===a?void 0:a.name)&&void 0!==t?t:e},e)})})]})]})}},2834:function(e,t,n){"use strict";n.r(t),n.d(t,{ArticleImage:function(){return c}});var r=n(9953),s=n(6448),a=n.n(s),i=n(9235);let l=e=>{let{src:t,width:n}=e;return"".concat(t,"?width=").concat(n)},c=e=>{var t,n;let{src:s,imageSize:c,imageProps:d}=e;return(0,r.jsx)(i.ck,{alt:null!==(t=d.alt)&&void 0!==t?t:"",original:s,width:c.width,height:c.height,children:e=>{let{ref:t,open:i}=e;return(0,r.jsx)(a(),{ref:t,loader:l,onClick:i,alt:null!==(n=d.alt)&&void 0!==n?n:"",src:s,width:c.width,height:c.height,className:"cursor-zoom-in mx-auto"})}})}},7385:function(e,t,n){"use strict";n.d(t,{i:function(){return c}});var r=n(9953),s=n(2091),a=n.n(s),i=n(6091),l=n(3636);let c=e=>{var t;let{article:n}=e,s=(0,l.QT)(),c=null!==(t=n.langVersions.find(e=>e.lang===s.currentLanguage.id))&&void 0!==t?t:n.langVersions[0];return(0,r.jsxs)("div",{children:[(0,r.jsx)(a(),{className:"text-3xl my-2 link link-hover block break-words",href:"/articles/".concat(n.id),children:c.title}),(0,r.jsx)(i.ArticleFrontmatter,{articleId:n.id,info:c,langVersions:n.langVersions.map(e=>e.lang)}),(0,r.jsx)("div",{className:"break-words",children:c.excerpt})]})}},6707:function(e,t,n){"use strict";n.r(t),n.d(t,{ArticleToc:function(){return c}});var r=n(9953),s=n(9873),a=n(852),i=n(3636);let l=e=>{let{entry:{depth:t,value:n,children:s,id:a}}=e;return(0,r.jsxs)("li",{className:"w-full text-sm",children:[(0,r.jsx)("a",{className:"transition hover:bg-base-300 rounded w-full flex p-1","data-tocid":a,href:"#"+a,children:n}),t<=3&&s&&s.length>0?(0,r.jsx)("ul",{className:"pl-2 border-l border-neutral",children:s.map(e=>(0,r.jsx)(l,{entry:e},e.id))}):void 0]})},c=e=>{let{toc:t}=e;return(0,s.useEffect)(()=>{let e=Array.from(document.querySelectorAll("[data-tocid]"));if(0===e.length)return;let t=0,n=n=>{t!==n&&(e[t].classList.remove("active"),t=n,e[n].classList.add("active"))},r=()=>{for(let r=0;r<e.length-1;r++){var t;if((t=document.getElementById(e[r+1].getAttribute("data-tocid")))&&t.getBoundingClientRect().top>=2){n(r);return}}n(e.length-1)};return e[0].classList.add("active"),window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[]),(0,r.jsxs)("div",{className:"px-1 sticky top-24 max-h-[60vh] overflow-auto",children:[(0,r.jsxs)("div",{className:"flex space-x-1 items-center py-2",children:[(0,r.jsx)(a.nEk,{}),(0,r.jsx)("span",{children:(0,r.jsx)(i.Vd,{id:"articlePage.toc"})})]}),(0,r.jsx)("ul",{className:"pl-2 border-l border-neutral",children:t.map(e=>(0,r.jsx)(l,{entry:e},e.id))})]})}},1763:function(e,t,n){"use strict";n.r(t),n.d(t,{CommentPanelWithCurrentLanguage:function(){return o}});var r=n(9953);n(7923);var s=n(7535),a=n.n(s),i=n(9873),l=n(9094),c=n(3636);let d=e=>{let[t,n]=i.useState(!0),s=i.useRef(!0);return(0,i.useEffect)(()=>{if(s.current){s.current=!1;return}n(!1)},[e.language]),(0,i.useEffect)(()=>{t||n(!0)}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("h2",{className:"text-2xl font-bold mb-2 flex items-center",children:[(0,r.jsx)(l.OdJ,{}),(0,r.jsx)("span",{className:"mx-2",children:(0,r.jsx)(c.Vd,{id:"comments.title"})})]}),t?(0,r.jsx)(a(),{options:{clientID:"5640259688bc3d72b807",clientSecret:"bbe26de2fca2ea86e49a98e883caf9ff3102c4ff",repo:"ddadaal.me.github.io",owner:"ddadaal",admin:["ddadaal"],language:e.language,title:"[COMMENT] ".concat(e.articleTitle),id:e.articleId.substring(0,50),distractionFreeMode:!1}}):void 0]})},o=e=>{let t=(0,c.QT)(),n=(0,c.G3)(t.currentLanguage.id);return(0,r.jsx)(d,{...e,language:n.gitalkLangId})}},7890:function(e,t,n){"use strict";n.r(t),n.d(t,{Gallery:function(){return r.ri}});var r=n(9235)},4375:function(e,t,n){"use strict";n.r(t),n.d(t,{LocalizedArticleLink:function(){return l}});var r=n(9953),s=n(2091),a=n.n(s),i=n(3636);let l=e=>{let{basePath:t,className:n,children:s}=e,l=(0,i.QT)(),c=(0,i.G3)(l.currentLanguage.id);return(0,r.jsx)(a(),{href:t+"/"+c.simplified,className:n,children:s})}},3303:function(e,t,n){"use strict";n.r(t),n.d(t,{RelatedArticles:function(){return c}});var r=n(9953),s=n(9094),a=n(4375),i=n(8375),l=n(3636);let c=e=>{let{relatedArticles:t}=e,n=(0,l.QT)();if(0!==t.length)return(0,r.jsxs)("div",{children:[(0,r.jsxs)("h2",{className:"text-2xl font-bold mb-2 flex items-center",children:[(0,r.jsx)(s.Z1Y,{}),(0,r.jsx)("span",{className:"mx-2",children:(0,r.jsx)(l.Vd,{id:"articlePage.relatedArticles.text"})})]}),(0,r.jsx)("div",{className:"flex flex-wrap gap-2",children:t.map(e=>{var t;let s=null!==(t=e.langVersions.find(e=>e.lang===(0,l.G3)(n.currentLanguage.id).simplified))&&void 0!==t?t:e.langVersions[0];return(0,r.jsx)("div",{className:"card w-96 bg-base-100 shadow-lg hover:shadow-xl transition",children:(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsx)("span",{className:"text-sm",children:s.time}),(0,r.jsx)(a.LocalizedArticleLink,{basePath:(0,i.k)(e),children:(0,r.jsx)("h2",{className:"card-title",children:s.title})}),(0,r.jsx)("p",{children:s.excerpt})]})},e.id)})})]})}},8375:function(e,t,n){"use strict";n.d(t,{k:function(){return r}});let r=e=>{var t;return null!==(t=e.absolute_path)&&void 0!==t?t:"/articles/".concat(e.id)}},5583:function(e,t,n){"use strict";n.d(t,{M:function(){return a}});var r=n(3636),s=JSON.parse('[{"tag":"problem-investigation","cn":"问题探究","en":"Problem Investigation"},{"tag":"project","cn":"我的项目","en":"My Projects"},{"tag":"code-trick","cn":"代码技巧","en":"Code Tricks"},{"tag":"web-frontend","cn":"Web前端","en":"Web Front-end"},{"tag":"thoughts","cn":"看法","en":"Thoughts"},{"tag":"hands-on","cn":"上手","en":"Hands On"},{"tag":"blog","cn":"博客","en":"Blog"},{"tag":"math","cn":"数学","en":"Math"},{"tag":"interview-experiences","cn":"面试经验","en":"Interview Experiences"},{"tag":"annual-summary","cn":"年度总结","en":"Annual Summary"},{"tag":"in-class","cn":"课内","en":"In Class"},{"tag":"Microsoft","cn":"微软","en":"Microsoft"},{"tag":"life","cn":"生活","en":"Life"},{"tag":"editor","cn":"编辑器","en":"Editor"},{"tag":"wearables","cn":"可穿戴设备","en":"Wearables"}]');function a(e,t){var n;let a=s.find(e=>e.tag===t);return null!==(n=null==a?void 0:a[(0,r.G3)(e).simplified])&&void 0!==n?n:t}},5707:function(e,t,n){"use strict";n.r(t),n.d(t,{Localized:function(){return i},Provider:function(){return l},prefix:function(){return d},useI18n:function(){return c}});var r=n(958),s=n(1946);let a=(0,r.o)(s.yX),i=a.Localized,l=a.Provider,c=a.useI18n,d=a.prefix},3636:function(e,t,n){"use strict";n.d(t,{G3:function(){return s.G3},Mj:function(){return s.Mj},O4:function(){return r.prefix},QT:function(){return r.useI18n},Vd:function(){return r.Localized},al:function(){return s.al},zt:function(){return r.Provider}});var r=n(5707),s=n(1946)},1946:function(e,t,n){"use strict";n.d(t,{G3:function(){return a},Mj:function(){return s},al:function(){return i},yX:function(){return r}});let r={"zh-CN":()=>n.e(827).then(n.t.bind(n,9827,19)).then(e=>e.default),"en-US":()=>n.e(746).then(n.t.bind(n,7746,19)).then(e=>e.default)},s={"zh-CN":{gitalkLangId:"zh-CN",simplified:"cn",langStrings:["cn","zh-CN","zh"],htmlLang:"zh-CN",name:"简体中文",icon:()=>"\uD83C\uDDE8\uD83C\uDDF3 "},"en-US":{gitalkLangId:"en",simplified:"en",langStrings:["en","en-US"],htmlLang:"en-US",name:"English",icon:()=>"\uD83C\uDDFA\uD83C\uDDF8 "}},a=e=>s[e],i="zh-CN";Object.keys(s)},5908:function(e,t,n){"use strict";n.d(t,{E:function(){return a},o:function(){return s}});var r=n(4036);function s(e){return e.toFormat("yyyy-MM-dd HH:mm:ss 'UTC'Z")}function a(e){return r.ou.fromSQL(e,{zone:"Asia/Shanghai"})}},8924:function(){},1711:function(e){e.exports={search_bar:"search_search_bar__LAozX",search_bar_tags:"search_search_bar_tags__KA4tj"}},3328:function(e,t,n){e.exports=n(988)}},function(e){e.O(0,[309,975,344,301,813,647,609,861,159,890,744],function(){return e(e.s=7700)}),_N_E=e.O()}]);