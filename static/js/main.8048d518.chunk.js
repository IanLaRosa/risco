(this.webpackJsonprisco=this.webpackJsonprisco||[]).push([[0],{187:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(30),c=t.n(l),o=(t(88),t(89),t(80)),i=t(13),u=t(22),s=t(47),m=function(){var e=Object(a.useState)({}),n=Object(u.a)(e,2),t=n[0],l=n[1],c=Object(a.useState)({}),o=Object(u.a)(c,2),i=o[0],m=o[1],b=Object(a.useState)({}),d=Object(u.a)(b,2),E=d[0],h=d[1],f=Object(a.useState)({}),p=Object(u.a)(f,2),v=p[0],g=p[1];Object(a.useEffect)((function(){fetch("http://localhost:5000/iluminatti").then((function(e){return e.json().then((function(e){h(e)}))}))}),[]),Object(a.useEffect)((function(){fetch("http://localhost:5000/time").then((function(e){return e.json().then((function(e){g(e)}))}))}),[]);return Object(a.useEffect)((function(){l({labels:v,datasets:[{label:"energia",data:E,backgroundColor:["rgba(75, 192, 192, 0.6)"],borderWidth:4}]}),m({labels:["b","b","b","b"],datasets:[{label:"rede",data:[123,3,32,10],backgroundColor:["rgba(75, 192, 192, 0.6)"],borderWidth:4}]})}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Lorem"),r.a.createElement("div",{style:{height:"600px",width:"800px"}},r.a.createElement(s.a,{data:t,options:{responsive:!0}})),r.a.createElement("h1",null,"Lorem2"),r.a.createElement("div",{style:{height:"600px",width:"800px"}},r.a.createElement(s.a,{data:i,options:{responsive:!0}})))},b=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"ACTIVE PLANE"),r.a.createElement("p",null,"AAAAAAAA Ipsum Dolor Sit Amet"))},d=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"404"),r.a.createElement("p",null,"AAAAABBBBBAAA"))},E=t(189),h=function(e){return r.a.createElement(E.a,null,e.children)},f=t(31),p=t(191),v=t(192),g=t(32);function A(){var e=Object(f.a)(["\n    .navbar {\n        background-color: #222;\n    }\n\n    .navbar-brand, .navbar-nav .nav-link {\n        color: #bbb;\n\n        &:hover {\n            color: white;\n        }\n    }\n"]);return A=function(){return e},e}var j=g.a.div(A()),k=function(){return r.a.createElement(j,null,r.a.createElement(p.a,{expand:"lg"},r.a.createElement(p.a.Brand,{href:"/risco/"},"Flight Analysis"),r.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(v.a,{className:"ml-auto"},r.a.createElement(v.a.Item,null,r.a.createElement(v.a.Link,{href:"/risco/"},"Home")),r.a.createElement(v.a.Item,null,r.a.createElement(v.a.Link,{href:"/risco/ActivePlane/"},"Flight Data Select"))))))},O=t(190),x=t(79),w=t.n(x);function y(){var e=Object(f.a)(["\n    .jumbo {\n        background: url(",");\n        background-size: cover;\n        color: #ccc;\n        height: 200px;\n        position: relative;\n        z-index: -2;\n    }\n\n    .overlay {\n        background-color: #000;\n        opacity: 0.6;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        z-index: -1;\n    }\n"]);return y=function(){return e},e}var B=g.a.div(y(),w.a),S=function(){return r.a.createElement(B,null,r.a.createElement(O.a,{fluid:!0,className:"jumbo"},r.a.createElement("div",{className:"overlay"}),r.a.createElement(E.a,null,r.a.createElement("h1",null,"Perfil de Consumo de Energia"))))};var I=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null),r.a.createElement(S,null),r.a.createElement(h,null,r.a.createElement(o.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/risco/",component:m}),r.a.createElement(i.a,{exact:!0,path:"/risco/ActivePlane/",component:b}),r.a.createElement(i.a,{component:d})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,n,t){e.exports=t.p+"static/media/airplaneImage.f82d535a.jpg"},83:function(e,n,t){e.exports=t(187)},88:function(e,n,t){},89:function(e,n,t){}},[[83,1,2]]]);
//# sourceMappingURL=main.8048d518.chunk.js.map