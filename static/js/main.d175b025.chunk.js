(this["webpackJsonpcorner-case-intern"]=this["webpackJsonpcorner-case-intern"]||[]).push([[0],{14:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var i=s(1),a=s.n(i),c=s(8),n=s.n(c),r=s(2),d=s(7),o=s(6),l=s(0);var m=function(e){var t=e.display,s=e.sideCard,a=e.setTodoList,c=e.todoList,n=e.sideCardIndex,m=e.mainCardIndex,j=Object(i.useState)(""),b=Object(r.a)(j,2),h=b[0],x=b[1],C={transform:t?"scaleY(1)":"scaleY(0)",margin:t?"15px 0px 15px 0px":"0px",maxHeight:t?"150px":"0px",opacity:t?"1":"0"};return Object(i.useEffect)((function(){s.isChecked?x("./Img/CircleChecked.svg"):s.isChecked||x("./Img/Circle.svg")}),[c]),Object(l.jsx)("div",{style:C,children:Object(l.jsxs)("div",{className:"side-card",style:C,children:[Object(l.jsx)("img",{src:h,alt:"check-box",onClick:function(){if(s.isChecked){if(s.isChecked){var e=Object(o.a)(c);e[m].sideCards[n].isChecked=!1,a(e),localStorage.setItem("todoList",JSON.stringify(c))}}else{var t=Object(o.a)(c);t[m].sideCards[n].isChecked=!0,a(t),localStorage.setItem("todoList",JSON.stringify(c))}}}),Object(l.jsxs)("p",{children:[s.name,s.link?Object(l.jsx)("a",Object(d.a)(Object(d.a)({style:{color:"#00A9A7",textDecoration:"none"},href:"mailto:"},s.link),{},{children:s.link})):""]})]})})};var j=function(e){var t=e.mainCardIndex,s=e.mainCard,a=e.todoList,c=e.setTodoList,n=Object(i.useState)(!1),d=Object(r.a)(n,2),o=d[0],j=d[1],b=Object(i.useState)("200px"),h=Object(r.a)(b,2),x=h[0],C=h[1],O=Object(i.useState)(!1),u=Object(r.a)(O,2),p=u[0],k=u[1];return Object(l.jsx)("div",{children:Object(l.jsxs)("li",{children:[Object(l.jsxs)("div",{className:"main-card",style:{margin:"0px 0px 0px 0px"},onClick:function(){o?o&&(j(!1),C("200px"),k(!1)):(j(!0),C("300px"),k(!0))},children:[Object(l.jsx)("h1",{children:s.number}),Object(l.jsx)("p",{children:s.name}),Object(l.jsx)("div",{className:"border",style:{width:x}})]}),a[t].sideCards.map((function(e,s){return Object(l.jsx)(m,{display:p,sideCard:e,setTodoList:c,todoList:a,sideCardIndex:s,mainCardIndex:t},s)}))]})})};var b=function(){var e=Object(i.useState)([{number:1,name:"Build test task",sideCards:[{name:"Create repository",isChecked:!1},{name:"Implement designs",isChecked:!1},{name:"Implement functionality",isChecked:!1}]},{number:2,name:"Submit your test task",sideCards:[{name:"Open email client",isChecked:!1},{name:"Sent link with information to ",link:"careers@cornercasetech.com",isChecked:!1}]},{number:3,name:"Participate in tech interview",sideCards:[{name:"Talk with HR",isChecked:!1},{name:"Talk with Tech Team",isChecked:!1}]},{number:4,name:"Receive answers",sideCards:[{name:"Receive anwsers",isChecked:!1},{name:"Start your IT career",isChecked:!1}]}]),t=Object(r.a)(e,2),s=t[0],a=t[1];return Object(i.useEffect)((function(){null===localStorage.getItem("todoList")?localStorage.setItem("todoList",JSON.stringify(s)):a(JSON.parse(localStorage.getItem("todoList")||"[]"))}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"CCT Lab Process"}),Object(l.jsx)("ul",{children:s.map((function(e,t){return Object(l.jsx)(j,{mainCardIndex:t,mainCard:e,todoList:s,setTodoList:a},t)}))})]})};s(14);n.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.d175b025.chunk.js.map