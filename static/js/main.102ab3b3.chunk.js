(this["webpackJsonpcovid-poland-2"]=this["webpackJsonpcovid-poland-2"]||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(34),i=n.n(r),s=(n(71),n(14)),o=n(28),l=n.n(o),j=n(37),u=n(12),d=n(164),h=n(168),b=n(172),x=n(171),f=n(167),O=n(169),m=n(158),p=n(170),v=n(166),g=n(165),y=n(161),w=n(159),S=n(160),k=n(156),z=n(1),P=[{id:"date",label:"Data (M/D/R)",minWidth:100},{id:"casesTotal",label:"Zara\u017conych og\xf3\u0142em",align:"center",minWidth:100,format:function(e){return e.toLocaleString()}},{id:"more",label:"Wi\u0119cej o",minWidth:90,align:"right",color:"#123123",format:function(e){return e.toLocaleString("en-US")}}];var C=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(30),i=Object(u.a)(r,2),o=i[0],C=i[1],W="https://disease.sh/v3/covid-19/historical/pl?lastdays=".concat(o+1);Object(a.useEffect)((function(){var e=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(W).then((function(e){return e.json()})).then((function(e){return Object.entries(e.timeline.cases)})).then((function(e){return c(e.reverse().map((function(e){return{date:e[0],cases:e[1]}})))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[o]);var I=Object(s.a)(n);I.pop();var F=I.map((function(e,t){var a=e.date,c=e.cases;return function(e,t,n){return{date:e,casesTotal:t,more:n}}(a,c,c-n[t+1].cases)})),L=Object(a.useState)(0),R=Object(u.a)(L,2),A=R[0],D=R[1],E=Object(a.useState)(10),H=Object(u.a)(E,2),T=H[0],B=H[1];return Object(z.jsxs)(d.a,{sx:{maxWidth:"450px",overflow:"hidden",margin:"30px auto"},children:[Object(z.jsxs)(g.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center",margin:"10px"},children:[Object(z.jsxs)(v.a,{variant:"h6",sx:{marginRight:"10px"},children:["Historyczne dane dla ostatnich"," "]}),Object(z.jsx)(g.a,{sx:{maxWidth:120},children:Object(z.jsxs)(S.a,{fullWidth:!0,children:[Object(z.jsx)(y.a,{id:"demo-simple-select-label",children:"Dni"}),Object(z.jsxs)(k.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:o,label:"Age",onChange:function(e){var t=e.target.value;C(t)},children:[Object(z.jsx)(w.a,{value:7,children:"7"}),Object(z.jsx)(w.a,{value:10,children:"10"}),Object(z.jsx)(w.a,{value:14,children:"14"}),Object(z.jsx)(w.a,{value:20,children:"20"}),Object(z.jsx)(w.a,{value:30,children:"30"}),Object(z.jsx)(w.a,{value:60,children:"60"})]})]})})]}),Object(z.jsx)(f.a,{sx:{maxHeight:440},children:Object(z.jsxs)(h.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(z.jsx)(O.a,{children:Object(z.jsx)(p.a,{children:P.map((function(e){return Object(z.jsx)(x.a,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)}))})}),Object(z.jsx)(b.a,{children:F.slice(A*T,A*T+T).map((function(e){return Object(z.jsx)(p.a,{hover:!0,role:"checkbox",tabIndex:-1,children:P.map((function(t){var n=e[t.id];return Object(z.jsx)(x.a,{align:t.align,children:t.format&&"number"===typeof n?t.format(n):n},t.id)}))},e.date)}))})]})}),Object(z.jsx)(m.a,{rowsPerPageOptions:[7,10,14,20,21,28,31,100],component:"div",count:F.length,rowsPerPage:T,page:A,onPageChange:function(e,t){D(t)},onRowsPerPageChange:function(e){B(+e.target.value),D(0)}})]})},W=n(173),I=n(174);function F(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(u.a)(r,2),s=i[0],o=i[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries/pl?strict=true").then((function(e){return e.json()})).then((function(e){c(e.todayCases),o(e.cases)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(z.jsx)(W.a,{color:"primary",sx:{width:275,textAlign:"center",margin:"20px auto"},children:Object(z.jsxs)(I.a,{children:[Object(z.jsx)(v.a,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:0!==n?"Ilo\u015b\u0107 nowych przypadk\xf3w dzisiaj":"Jeszcze nie ma oficjalnych danych"}),Object(z.jsx)(v.a,{variant:"h5",component:"div",children:0!==n?n:""}),Object(z.jsx)(v.a,{sx:{mb:1.5},color:"text.secondary",children:0!==n?"Zara\u017conych":""}),Object(z.jsxs)(v.a,{variant:"body2",children:["Stan zara\u017conych na dzisiaj",Object(z.jsx)("br",{}),s.toLocaleString()]})]})})}var L=n(66),R=n.n(L),A=n(77),D=n.n(A),E=n(78),H=n.n(E),T=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){var e=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/pl?lastdays=31").then((function(e){return e.json()})).then((function(e){return Object.entries(e.timeline.cases)})).then((function(e){return c(e.map((function(e){return{date:e[0],cases:e[1]}})))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var r=Object(s.a)(n);r.shift();var i={title:{text:"30dniowe zestawienie zaka\u017ce\u0144",style:{fontSize:28,fontFamily:"Roboto"}},xAxis:{categories:r.map((function(e){return e.date}))},yAxis:{title:{text:"Zaka\u017cenia"}},series:[{name:"zaka\u017cenia",data:r.map((function(e,t){return e.cases-n[t].cases}))}],chart:{style:{fontFamily:"Roboto",fontSize:18,color:"white"}}};return H()(R.a),Object(z.jsx)("div",{children:Object(z.jsx)(D.a,{highcharts:R.a,options:i})})},B=n(163);var J=function(){return Object(z.jsx)("div",{children:Object(z.jsxs)(B.a,{container:!0,spacing:2,xs:12,lg:10,alignSelf:"center",mx:"auto",minHeight:"100vh",alignItems:"center",item:!0,children:[Object(z.jsxs)(B.a,{item:!0,xs:12,lg:8,children:[Object(z.jsx)(v.a,{variant:"h1",align:"center",my:4,children:"Covid Polska"}),Object(z.jsx)(F,{}),Object(z.jsx)(W.a,{children:Object(z.jsx)(T,{})})]}),Object(z.jsx)(B.a,{item:!0,xs:12,lg:4,children:Object(z.jsx)(C,{})})]})})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,175)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(z.jsx)(c.a.StrictMode,{children:Object(z.jsx)(J,{})}),document.getElementById("root")),Z()},71:function(e,t,n){}},[[103,1,2]]]);
//# sourceMappingURL=main.102ab3b3.chunk.js.map