(this.webpackJsonprisco=this.webpackJsonprisco||[]).push([[0],{191:function(e,a,t){"use strict";t.r(a);var n,r=t(0),l=t.n(r),o=t(30),c=t.n(o),i=(t(92),t(93),t(82)),u=t(14),s=t(22),m=t(69),d=t(70),b=t(84),h=t(85),f=t(71),E=t(9),p=t.n(E);p.a.defaults.global.defaultFontFamily="'PT Sans', sans-serif",p.a.defaults.global.legend.display=!1;var v=function(e){Object(h.a)(t,e);var a=Object(b.a)(t);function t(){var e;Object(m.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=a.call.apply(a,[this].concat(o))).chartRef=l.a.createRef(),e.buildChart=function(){var a=e.chartRef.current.getContext("2d"),t=e.props,r=t.data,l=t.labels;"undefined"!==typeof n&&n.destroy(),n=new p.a(a,{type:"line",data:{labels:l,datasets:[{label:"Sales",data:r,fill:!1,borderColor:"#6610f2"}]}})},e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){this.buildChart()}},{key:"componentDidUpdate",value:function(){this.buildChart()}}]),t}(r.Component),g=function(){var e=Object(r.useState)({}),a=Object(s.a)(e,2),t=(a[0],a[1]),n=Object(r.useState)({}),o=Object(s.a)(n,2),c=o[0],i=o[1],u=Object(r.useState)({}),m=Object(s.a)(u,2),d=m[0],b=m[1],h=Object(r.useState)({}),E=Object(s.a)(h,2),p=E[0],g=E[1];return Object(r.useEffect)((function(){fetch("http://127.0.0.1:5000/readings").then((function(e){return e.json().then((function(e){b(e)}))})),fetch("http://127.0.0.1:5000/time").then((function(e){return e.json().then((function(e){g(e)}))})),t({labels:p.times,datasets:[{label:"Energia [Watts]",data:d.reads,backgroundColor:["rgba(75, 192, 192, 0.6)"],borderWidth:4}]}),i({labels:[],datasets:[{label:"Energia [Watts]",data:[],backgroundColor:["rgba(75, 192, 192, 0.6)"],borderWidth:4}]})}),[]),console.log(d.reads),console.log(p.times),l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Consumo ilumina\xe7\xe3o da cabine no v\xf4o"),l.a.createElement("div",{style:{height:"600px",width:"800px"}},l.a.createElement(v,{data:d.reads,label:p.times})),l.a.createElement("h1",null,"Consumo ar condicionado da cabine no v\xf4o"),l.a.createElement("div",{style:{height:"600px",width:"800px"}},l.a.createElement(f.a,{data:c,options:{responsive:!0}})),l.a.createElement("script",null))},A=function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"ACTIVE PLANE"),l.a.createElement("p",null,"AAAAAAAA Ipsum Dolor Sit Amet"))},j=function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"404"),l.a.createElement("p",null,"AAAAABBBBBAAA"))},y=t(193),k=function(e){return l.a.createElement(y.a,null,e.children)},O=t(31),w=t(195),x=t(196),C=t(32);function S(){var e=Object(O.a)(["\n    .navbar {\n        background-color: #222;\n    }\n\n    .navbar-brand, .navbar-nav .nav-link {\n        color: #bbb;\n\n        &:hover {\n            color: white;\n        }\n    }\n"]);return S=function(){return e},e}var B=C.a.div(S()),I=function(){return l.a.createElement(B,null,l.a.createElement(w.a,{expand:"lg"},l.a.createElement(w.a.Brand,{href:"/risco/"},"Flight Analysis"),l.a.createElement(w.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(w.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(x.a,{className:"ml-auto"},l.a.createElement(x.a.Item,null,l.a.createElement(x.a.Link,{href:"/risco/"},"Home")),l.a.createElement(x.a.Item,null,l.a.createElement(x.a.Link,{href:"/risco/ActivePlane/"},"Flight Data Select"))))))},W=t(194),F=t(81),N=t.n(F);function P(){var e=Object(O.a)(["\n    .jumbo {\n        background: url(",");\n        background-size: cover;\n        color: #ccc;\n        height: 200px;\n        position: relative;\n        z-index: -2;\n    }\n\n    .overlay {\n        background-color: #000;\n        opacity: 0.6;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        z-index: -1;\n    }\n"]);return P=function(){return e},e}var D=C.a.div(P(),N.a),z=function(){return l.a.createElement(D,null,l.a.createElement(W.a,{fluid:!0,className:"jumbo"},l.a.createElement("div",{className:"overlay"}),l.a.createElement(y.a,null,l.a.createElement("h1",null,"Perfil de Consumo de Energia"))))};var L=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(I,null),l.a.createElement(z,null),l.a.createElement(k,null,l.a.createElement(i.a,null,l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/risco/",component:g}),l.a.createElement(u.a,{exact:!0,path:"/risco/ActivePlane/",component:A}),l.a.createElement(u.a,{component:j})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},81:function(e,a,t){e.exports=t.p+"static/media/airplaneImage.f82d535a.jpg"},87:function(e,a,t){e.exports=t(191)},92:function(e,a,t){},93:function(e,a,t){}},[[87,1,2]]]);
//# sourceMappingURL=main.d48dda90.chunk.js.map