(this.webpackJsonprisco=this.webpackJsonprisco||[]).push([[0],{192:function(e,n,a){"use strict";a.r(n);var t,r=a(0),l=a.n(r),o=a(30),c=a.n(o),i=(a(92),a(93),a(82)),u=a(14),s=a(22),m=a(69),d=a(70),b=a(84),h=a(85),f=(a(94),a(9)),p=a.n(f),E=a(72),v=a.n(E);p.a.defaults.global.defaultFontFamily="'PT Sans', sans-serif",p.a.defaults.global.legend.display=!1;var g=function(e){Object(h.a)(a,e);var n=Object(b.a)(a);function a(){var e;Object(m.a)(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=n.call.apply(n,[this].concat(o))).chartRef=l.a.createRef(),e.buildChart=function(){var n=e.chartRef.current.getContext("2d"),a=e.props,r=a.data,l=a.labels,o=[];void 0!=l&&Object.keys(l).forEach((function(e){o.push(l[e])})),console.log(o),console.log(l),console.log(r),"undefined"!==typeof t&&t.destroy(),t=new p.a(n,{type:"line",data:{labels:o,datasets:[{label:"Sales",data:r,borderColor:"#6610f2"}],options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}],xAxes:[{ticks:{autoSkip:!1,type:"linear"}}]}}}})},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.buildChart()}},{key:"componentDidUpdate",value:function(){this.buildChart()}},{key:"render",value:function(){return l.a.createElement("div",{className:v.a.graphContainer},l.a.createElement("canvas",{id:"myChart",ref:this.chartRef}))}}]),a}(r.Component),A=function(){var e=Object(r.useState)({}),n=Object(s.a)(e,2),a=(n[0],n[1]),t=Object(r.useState)({}),o=Object(s.a)(t,2),c=(o[0],o[1]),i=Object(r.useState)({}),u=Object(s.a)(i,2),m=u[0],d=u[1],b=Object(r.useState)({}),h=Object(s.a)(b,2),f=h[0],p=h[1];return Object(r.useEffect)((function(){fetch("http://127.0.0.1:5000/readings").then((function(e){return e.json().then((function(e){d(e)}))})),fetch("http://127.0.0.1:5000/time").then((function(e){return e.json().then((function(e){p(e)}))})),a({labels:f.times,datasets:[{label:"Energia [Watts]",data:m.reads,backgroundColor:["rgba(75, 192, 192, 0.6)"],borderWidth:4}]}),c({labels:[],datasets:[{label:"Energia [Watts]",data:[],backgroundColor:["rgba(75, 192, 192, 0.6)"],borderWidth:4}]})}),[]),console.log(m),console.log(f),l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Consumo ilumina\xe7\xe3o da cabine no v\xf4o"),l.a.createElement("div",{style:{height:"600px",width:"800px"}},l.a.createElement(g,{data:m,label:f})))},j=function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"ACTIVE PLANE"),l.a.createElement("p",null,"AAAAAAAA Ipsum Dolor Sit Amet"))},k=function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"404"),l.a.createElement("p",null,"AAAAABBBBBAAA"))},y=a(194),C=function(e){return l.a.createElement(y.a,null,e.children)},O=a(31),x=a(196),w=a(197),S=a(32);function B(){var e=Object(O.a)(["\n    .navbar {\n        background-color: #222;\n    }\n\n    .navbar-brand, .navbar-nav .nav-link {\n        color: #bbb;\n\n        &:hover {\n            color: white;\n        }\n    }\n"]);return B=function(){return e},e}var I=S.a.div(B()),N=function(){return l.a.createElement(I,null,l.a.createElement(x.a,{expand:"lg"},l.a.createElement(x.a.Brand,{href:"/risco/"},"Flight Analysis"),l.a.createElement(x.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(x.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(w.a,{className:"ml-auto"},l.a.createElement(w.a.Item,null,l.a.createElement(w.a.Link,{href:"/risco/"},"Home")),l.a.createElement(w.a.Item,null,l.a.createElement(w.a.Link,{href:"/risco/ActivePlane/"},"Flight Data Select"))))))},W=a(195),F=a(81),P=a.n(F);function R(){var e=Object(O.a)(["\n    .jumbo {\n        background: url(",");\n        background-size: cover;\n        color: #ccc;\n        height: 200px;\n        position: relative;\n        z-index: -2;\n    }\n\n    .overlay {\n        background-color: #000;\n        opacity: 0.6;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        z-index: -1;\n    }\n"]);return R=function(){return e},e}var D=S.a.div(R(),P.a),L=function(){return l.a.createElement(D,null,l.a.createElement(W.a,{fluid:!0,className:"jumbo"},l.a.createElement("div",{className:"overlay"}),l.a.createElement(y.a,null,l.a.createElement("h1",null,"Perfil de Consumo de Energia"))))};var z=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(N,null),l.a.createElement(L,null),l.a.createElement(C,null,l.a.createElement(i.a,null,l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/risco/",component:A}),l.a.createElement(u.a,{exact:!0,path:"/risco/ActivePlane/",component:j}),l.a.createElement(u.a,{component:k})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},72:function(e,n,a){e.exports={graphContainer:"LineGraph_graphContainer__2pkR-"}},81:function(e,n,a){e.exports=a.p+"static/media/airplaneImage.f82d535a.jpg"},87:function(e,n,a){e.exports=a(192)},92:function(e,n,a){},93:function(e,n,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.a3b4158b.chunk.js.map