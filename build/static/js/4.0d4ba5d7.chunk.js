(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{47:function(e,t,c){e.exports={item:"QuoteItem_item__2dOvb"}},48:function(e,t,c){e.exports={list:"QuoteList_list__3pzcl",sorting:"QuoteList_sorting__rL6H1"}},49:function(e,t,c){e.exports={noquotes:"NoQuotesFound_noquotes__3DIYb"}},52:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(2),i=c(8),o=c(47),r=c.n(o),a=c(1),u=function(e){return Object(a.jsxs)("li",{className:r.a.item,children:[Object(a.jsxs)("figure",{children:[Object(a.jsx)("blockquote",{children:Object(a.jsx)("p",{children:e.text})}),Object(a.jsx)("figcaption",{children:e.author})]}),Object(a.jsx)(i.b,{className:"btn",to:"/quotes/".concat(e.id),children:"View Fullscreen"})]})},d=c(48),j=c.n(d),l=function(e){var t,c,i=Object(n.h)(),o=Object(n.i)(),r="asc"===new URLSearchParams(o.search).get("sort"),d=(t=e.quotes,c=r,t.sort((function(e,t){return c?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(a.jsxs)(s.Fragment,{children:[Object(a.jsx)("div",{className:j.a.sorting,children:Object(a.jsxs)("button",{onClick:function(){i.push("".concat(o.pathname,"?sort=").concat(r?"desc":"asc"))},children:["Soort ",r?"Descending":"Ascending"]})}),Object(a.jsx)("ul",{className:j.a.list,children:d.map((function(e){return Object(a.jsx)(u,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},b=c(49),h=c.n(b),x=function(){return Object(a.jsxs)("div",{className:h.a.noquotes,children:[Object(a.jsx)("p",{children:"No quotes found!"}),Object(a.jsx)(i.b,{className:"btn",to:"/new-quote",children:"Add a Quote"})]})},O=c(15),p=c(35),f=c(36);t.default=function(){var e=Object(p.a)(f.b,!0),t=e.sendRequest,c=e.status,n=e.data,i=e.error;return Object(s.useEffect)((function(){t()}),[t]),"pending"===c?Object(a.jsx)("div",{className:"centered",children:Object(a.jsx)(O.a,{})}):i?Object(a.jsx)("p",{className:"centered focused",children:i}):"completed"!==c||n&&0!==n.length?Object(a.jsx)(l,{quotes:n}):Object(a.jsx)(x,{})}}}]);
//# sourceMappingURL=4.0d4ba5d7.chunk.js.map