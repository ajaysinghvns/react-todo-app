(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),r=n(6),o=n.n(r),a=(n(12),n(7)),s=n(5),u=(n(13),n(0)),j=function(t){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"todo-style",children:[Object(u.jsx)("i",{className:"fa fa-times","aria-hidden":"true",onClick:function(){t.onSelect(t.id)},children:"x"}),Object(u.jsx)("li",{children:t.text})]})})};var d=function(){var t=Object(c.useState)(""),e=Object(s.a)(t,2),n=e[0],i=e[1],r=Object(c.useState)([]),o=Object(s.a)(r,2),d=o[0],l=o[1],b=function(t){l((function(e){return e.filter((function(e,n){return n!==t}))}))};return Object(u.jsxs)("div",{className:"main_div",children:[Object(u.jsxs)("form",{action:"#",onSubmit:function(t){t.preventDefault(),l((function(t){return[].concat(Object(a.a)(t),[n])})),i("")},children:[Object(u.jsx)("input",{type:"text",onChange:function(t){i(t.target.value)},value:n,placeholder:"Add a Item",autoComplete:"off",required:!0}),Object(u.jsx)("button",{children:"+"})]}),Object(u.jsxs)("div",{className:"center_div",children:[Object(u.jsx)("h1",{children:"ToDo List"}),Object(u.jsx)("ol",{children:d.map((function(t,e){return Object(u.jsx)(j,{id:e,text:t,onSelect:b},e)}))})]})]})},l=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),r(t),o(t)}))};o.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),l()}},[[15,1,2]]]);
//# sourceMappingURL=main.315a9d89.chunk.js.map