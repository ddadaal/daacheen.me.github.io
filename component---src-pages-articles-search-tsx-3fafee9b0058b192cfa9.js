(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"b6l/":function(e,t,n){"use strict";n.r(t);n("Vd3H"),n("Z2Ku"),n("L9s1"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("HEwt"),n("OG14");var r=n("q1tI"),a=n.n(r),o=n("rI/i"),l=n("+uIY"),c=n("f6+g"),u=n("kdy/"),i=n("Wbzz"),s=n("BUe3"),m=n("GZI6"),f=n("53zH"),p=n("VsLj"),d=l.a.search;t.default=function(){var e=Object(f.c)(c.b),t=Object(f.c)(u.a),n=e.query,r=n.query,l=n.page,g=void 0===l?1:l,E=g-1,w=Array.from(t.articleIdMap.values());r&&(w=w.filter((function(e){return!!e.some((function(e){return e.frontmatter.title.toUpperCase().includes(r.toUpperCase())}))||!!e.some((function(e){return null!==e.frontmatter.tags&&e.frontmatter.tags.some((function(e){return t.getAllVariationsOfTag(e).some((function(e){return e.toUpperCase().includes(r.toUpperCase())}))}))}))}))),w.sort((function(e,t){return new Date(t[0].frontmatter.date).getTime()-new Date(e[0].frontmatter.date).getTime()}));var b=w.length,v=Math.ceil(b/5);return w=w.slice(5*E,5*E+5),a.a.createElement(m.a,null,a.a.createElement(p.a,{titleId:d.title}),a.a.createElement("h3",null,a.a.createElement(o.a,{id:d.title,replacements:[a.a.createElement("strong",{key:"query"},r)]})),a.a.createElement("small",null,a.a.createElement(o.a,{id:d.info,replacements:[b]})),a.a.createElement("hr",null),a.a.createElement(s.a,{ids:w.map((function(e){return e[0].frontmatter.id})),pageCount:v,pageIndex:g-1,toPage:function(e){var t="/articles/search?query="+encodeURIComponent(r||"")+"&page="+(e+1);return function(){return Object(i.navigate)(t)}}}))}}}]);
//# sourceMappingURL=component---src-pages-articles-search-tsx-3fafee9b0058b192cfa9.js.map