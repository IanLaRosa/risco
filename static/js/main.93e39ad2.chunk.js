(this.webpackJsonprisco=this.webpackJsonprisco||[]).push([[0],{195:function(e,a,t){"use strict";t.r(a);var n,r=t(0),l=t.n(r),o=t(33),c=t.n(o),i=(t(95),t(96),t(84)),u=t(16),s=t(20),m=t(71),d=t(72),h=t(86),b=t(88),p=(t(97),t(9)),f=t.n(p),E=t(74),v=t.n(E),g=t(14),A=t(87);f.a.defaults.global.defaultFontFamily="'PT Sans', sans-serif",f.a.defaults.global.legend.display=!1;var y=function(e){Object(b.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(m.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=a.call.apply(a,[this].concat(o))).chartRef=l.a.createRef(),e.buildChart=function(){var a=e.chartRef.current.getContext("2d"),t=e.props,r=t.data,l=t.labels;console.log(e.props),console.log(l),console.log(r),"undefined"!==typeof n&&n.destroy(),n=new f.a(a,{type:"line",data:{labels:l,datasets:[{label:"Sales",data:r,borderColor:"#6610f2"}],options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}],xAxes:[{ticks:{type:"linear"}}]}}}})},e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){this.buildChart()}},{key:"componentDidUpdate",value:function(){this.buildChart()}},{key:"render",value:function(){return l.a.createElement("div",{className:v.a.graphContainer},l.a.createElement("canvas",{id:"myChart",ref:this.chartRef}))}}]),t}(r.Component),j=function(){var e=Object(r.useState)({}),a=Object(s.a)(e,2),t=(a[0],a[1]),n=Object(r.useState)({}),o=Object(s.a)(n,2),c=(o[0],o[1]),i=Object(r.useState)({}),u=Object(s.a)(i,2),m=u[0],d=u[1],h=Object(r.useState)({}),b=Object(s.a)(h,2),p=b[0],f=b[1],E=Object(r.useState)({}),v=Object(s.a)(E,2),j=v[0],k=v[1],C=function(e){return k(e)};function O(){return l.a.createElement(A.a,{type:"checkbox",value:j,onChange:C},l.a.createElement(g.a,{value:"total"},"Total"),l.a.createElement(g.a,{value:"iluminacao"},"Ilumina\xe7\xe3o"),l.a.createElement(g.a,{value:"servidor"},"Wi-Fi"),l.a.createElement(g.a,{value:"rede"},"Computadores"),l.a.createElement(g.a,{value:"ar_cond"},"Ar Cond."),l.a.createElement(g.a,{value:"bancadas"},"Outros"))}return Object(r.useEffect)((function(){fetch("https://sheltered-island-28868.herokuapp.com/readings",{method:"post",body:JSON.stringify({column:j}),headers:{"Content-type":"application/json"}}).then((function(e){return e.json().then((function(e){d(e)}))})),fetch("https://sheltered-island-28868.herokuapp.com/time").then((function(e){return e.json(j).then((function(e){f(e)}))})),t({labels:p.times,datasets:[{label:"Energia [Watts]",data:m.reads,backgroundColor:["rgba(75, 192, 192, 0.6)"],borderWidth:4}]}),c({labels:[],datasets:[{label:"Energia [Watts]",data:[],backgroundColor:["rgba(75, 192, 192, 0.6)"],borderWidth:4}]})}),[]),console.log(m),console.log(p),l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Consumo de eletricidade da cabine no v\xf4o"),l.a.createElement("div",{style:{height:"600px",width:"800px"}},l.a.createElement(y,{data:m.reads,labels:p.times})),l.a.createElement(O,null))},k=function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"ACTIVE PLANE"),l.a.createElement("p",null,"AAAAAAAA Ipsum Dolor Sit Amet"))},C=function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"404"),l.a.createElement("p",null,"AAAAABBBBBAAA"))},O=t(197),x=function(e){return l.a.createElement(O.a,null,e.children)},w=t(35),S=t(199),B=t(200),I=t(36);function N(){var e=Object(w.a)(["\n    .navbar {\n        background-color: #222;\n    }\n\n    .navbar-brand, .navbar-nav .nav-link {\n        color: #bbb;\n\n        &:hover {\n            color: white;\n        }\n    }\n"]);return N=function(){return e},e}var W=I.a.div(N()),F=function(){return l.a.createElement(W,null,l.a.createElement(S.a,{expand:"lg"},l.a.createElement(S.a.Brand,{href:"/risco/"},"Flight Analysis"),l.a.createElement(S.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(S.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(B.a,{className:"ml-auto"},l.a.createElement(B.a.Item,null,l.a.createElement(B.a.Link,{href:"/risco/"},"Home")),l.a.createElement(B.a.Item,null,l.a.createElement(B.a.Link,{href:"/risco/ActivePlane/"},"Flight Data Select"))))))},P=t(198),R=t(83),D=t.n(R);function L(){var e=Object(w.a)(["\n    .jumbo {\n        background: url(",");\n        background-size: cover;\n        color: #ccc;\n        height: 200px;\n        position: relative;\n        z-index: -2;\n    }\n\n    .overlay {\n        background-color: #000;\n        opacity: 0.6;\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        z-index: -1;\n    }\n"]);return L=function(){return e},e}var T=I.a.div(L(),D.a),_=function(){return l.a.createElement(T,null,l.a.createElement(P.a,{fluid:!0,className:"jumbo"},l.a.createElement("div",{className:"overlay"}),l.a.createElement(O.a,null,l.a.createElement("h1",null,"Perfil de Consumo de Energia"))))};var z=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(F,null),l.a.createElement(_,null),l.a.createElement(x,null,l.a.createElement(i.a,null,l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/risco/",component:j}),l.a.createElement(u.a,{exact:!0,path:"/risco/ActivePlane/",component:k}),l.a.createElement(u.a,{component:C})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e,a,t){e.exports={graphContainer:"LineGraph_graphContainer__2pkR-"}},83:function(e,a,t){e.exports=t.p+"static/media/airplaneImage.f82d535a.jpg"},90:function(e,a,t){e.exports=t(195)},95:function(e,a,t){},96:function(e,a,t){}},[[90,1,2]]]);
//# sourceMappingURL=main.93e39ad2.chunk.js.map