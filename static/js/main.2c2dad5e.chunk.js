(this.webpackJsonprisco=this.webpackJsonprisco||[]).push([[0],{192:function(e,a,n){"use strict";n.r(a);var t,r=n(0),l=n.n(r),c=n(30),o=n.n(c),i=(n(92),n(93),n(82)),u=n(14),s=n(22),m=n(69),d=n(70),h=n(84),b=n(85),f=(n(94),n(9)),p=n.n(f),E=n(72),v=n.n(E);p.a.defaults.global.defaultFontFamily="'PT Sans', sans-serif",p.a.defaults.global.legend.display=!1;var g=function(e){Object(b.a)(n,e);var a=Object(h.a)(n);function n(){var e;Object(m.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=a.call.apply(a,[this].concat(c))).chartRef=l.a.createRef(),e.buildChart=function(){var a=e.chartRef.current.getContext("2d"),n=e.props,r=n.data,l=n.labels,c=[];l.array.forEach((function(e){c.push(e)})),"undefined"!==typeof t&&t.destroy(),t=new p.a(a,{type:"line",data:{labels:c,datasets:[{label:"Sales",data:r,borderColor:"#6610f2"}],options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}],xAxes:[{ticks:{autoSkip:!1,type:"linear"}}]}}}})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.buildChart()}},{key:"componentDidUpdate",value:function(){this.buildChart()}},{key:"render",value:function(){return l.a.createElement("div",{className:v.a.graphContainer},l.a.createElement("canvas",{id:"myChart",ref:this.chartRef}))}}]),n}(r.Component),A=function(){var e=Object(r.useState)({}),a=Object(s.a)(e,2),n=(a[0],a[1]),t=Object(r.useState)({}),c=Object(s.a)(t,2),o=(c[0],c[1]),i=Object(r.useState)({}),u=Object(s.a)(i,2),m=u[0],d=u[1],h=Object(r.useState)({}),b=Object(s.a)(h,2),f=b[0],p=b[1];return Object(r.useEffect)((function(){fetch("http://127.0.0.1:5000/readings").then((function(e){return e.json().then((function(e){d(e)}))})),fetch("http://127.0.0.1:5000/time").then((function(e){return e.json().then((function(e){p(e)}))})),n({labels:f.times,datasets:[{label:"Energia [Watts]",data:m.reads,backgroundColor:["rgba(75, 192, 192, 0.6)"],borderWidth:4}]}),o({labels:[],datasets:[{label:"Energia [Watts]",data:[],backgroundColor:["rgba(75, 192, 192, 0.6)"],borderWidth:4}]})}),[]),console.log(m.reads),console.log(f.times),l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Consumo ilumina\xe7\xe3o da cabine no v\xf4o"),l.a.createElement("div",{style:{height:"600px",width:"800px"}},l.a.createElement(g,{data:m.reads,label:f.times})))},y=function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"ACTIVE PLANE"),l.a.createElement("p",null,"AAAAAAAA Ipsum Dolor Sit Amet"))},j=function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"404"),l.a.createElement("p",null,"AAAAABBBBBAAA"))},k=n(194),C=function(e){return l.a.createElement(k.a,null,e.children)},x=n(31),O=n(196),w=n(197),S=n(32);function B(){var e=Object(x.a)(["\n    .navbar {\n        background-color: #222;\n    }\n\n    .navbar-brand, .navbar-nav .nav-link {\n        color: #bbb;\n\n        &:hover {\n            color: white;\n        }\n    }\n"]);return B=function(){return e},e}var I=S.a.div(B()),N=function(){return l.a.createElement(I,null,l.a.createElement(O.a,{expand:"lg"},l.a.createElement(O.a.Brand,{href:"/risco/"},"Flight Analysis"),l.a.createElement(O.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(O.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(w.a,{className:"ml-auto"},l.a.createElement(w.a.Item,null,l.a.createElement(w.a.Link,{href:"/risco/"},"Home")),l.a.createElement(w.a.Item,null,l.a.createElement(w.a.Link,{href:"/risco/ActivePlane/"},"Flight Data Select"))))))},W=n(195),F=n(81),P=n.n(F);function R(){var e=Object(x.a)(["\n    .jumbo {\n        background: url(",");\n        background-size: cover;\n        color: #ccc;\n        height: 200px;\n        position: relative;\n        z-index: -2;\n    }\n\n    .overlay {\n        background-color: #000;\n        opacity: 0.6;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        z-index: -1;\n    }\n"]);return R=function(){return e},e}var D=S.a.div(R(),P.a),L=function(){return l.a.createElement(D,null,l.a.createElement(W.a,{fluid:!0,className:"jumbo"},l.a.createElement("div",{className:"overlay"}),l.a.createElement(k.a,null,l.a.createElement("h1",null,"Perfil de Consumo de Energia"))))};var z=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(N,null),l.a.createElement(L,null),l.a.createElement(C,null,l.a.createElement(i.a,null,l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/risco/",component:A}),l.a.createElement(u.a,{exact:!0,path:"/risco/ActivePlane/",component:y}),l.a.createElement(u.a,{component:j})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},72:function(e,a,n){e.exports={graphContainer:"LineGraph_graphContainer__2pkR-"}},81:function(e,a,n){e.exports=n.p+"static/media/airplaneImage.f82d535a.jpg"},87:function(e,a,n){e.exports=n(192)},92:function(e,a,n){},93:function(e,a,n){}},[[87,1,2]]]);
//# sourceMappingURL=main.2c2dad5e.chunk.js.map