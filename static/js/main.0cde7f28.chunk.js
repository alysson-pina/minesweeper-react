(this.webpackJsonpspekit=this.webpackJsonpspekit||[]).push([[0],{11:function(n,t,e){"use strict";(function(n){var o=e(0),c=e(15),i=e(7),r=e(5),a=e(1);t.a=function(t){var e=t.bombCount,u=t.setBombCount,s=t.lost,b=t.setLost,p=t.structure,f=t.width,d=t.height,l=Object(o.useRef)([]),j=function(n){return u(e+(n?-1:1))},x=function(t,e){var o=Object(r.a)(e,t,f),c=[e-1,e,e+1],i=[t-1,t,t+1];for(var a in c){var u=function(t){var e=Object(r.a)(c[a],i[t],f);if(e===o||c[a]<0||i[t]<0||i[t]>=d||c[a]>=f)return"continue";var u=l.current[e];n((function(){return u.click()}))};for(var s in i)u(s)}};return Object(a.jsx)(c.a,{children:null===p||void 0===p?void 0:p.map((function(n){var t=n.i,e=n.j,o=n.value,c=Object(r.a)(e,t,f);return Object(a.jsx)(i.b,{ref:function(n){l.current[c]=n},row:t,column:e,hasMine:"B"===o,value:o,lost:s,setLost:b,updateBombCount:j,revealNeighborhood:x},"".concat(t,"_").concat(e))}))})}}).call(this,e(25).setImmediate)},15:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var o,c=e(3),i=e(4).a.div(o||(o=Object(c.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 970px;\n"])))},23:function(n,t,e){},24:function(n,t,e){},29:function(n,t,e){"use strict";e.r(t);var o=e(0),c=e.n(o),i=e(14),r=e.n(i),a=(e(23),e.p+"static/media/logo.6ce24c58.svg"),u=(e(24),e(7)),s=e(1),b=function(){return Object(s.jsxs)("main",{className:"App",children:[Object(s.jsxs)("h1",{children:["Modern React Minesweeper ",Object(s.jsx)("img",{width:"64",src:a,className:"App-logo",alt:"react logo"})]}),Object(s.jsx)("section",{className:"App-header",children:Object(s.jsx)(u.c,{})})]})},p=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,30)).then((function(t){var e=t.getCLS,o=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;e(n),o(n),c(n),i(n),r(n)}))};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root")),p()},5:function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"a",(function(){return c}));var o=function(n,t){return{i:Math.floor(n/t),j:n%t}},c=function(n,t,e){return Number.parseInt(n)+Number.parseInt(t)*e}},7:function(n,t,e){"use strict";e.d(t,"a",(function(){return r.a})),e.d(t,"c",(function(){return v})),e.d(t,"b",(function(){return O}));var o,c,i,r=e(11),a=e(2),u=e(0),s=e.n(u),b=e(5),p=function(n,t,e,o){var c,i,r=Object(b.b)(t,e),a=r.i,u=r.j,s=[a-1,a,a+1],p=[u-1,u,u+1];for(var f in s)for(var d in p){var l;s[f]<0||p[d]<0||p[d]>=e||s[f]>=o||n[c=Object(b.a)(p[d],s[f],e)]&&"B"!==(null===(l=n[c])||void 0===l?void 0:l.value)&&(i=n[c].value,n[c].value=i?i+1:1)}},f=e(3),d=e(4),l=d.a.div(o||(o=Object(f.a)(["\n  margin: 20px 0;\n  display: flex;\n  justify-content: space-between;\n"]))),j=d.a.div(c||(c=Object(f.a)(["\n  background-image: url('/sprite200.gif');\n  background-position: ",";\n  width: 52px;\n  height: 52px;\n"])),(function(n){return n.mouseDown?"-104px -110px":n.lost?"-156px -110px":"0 -110px"})),x=e(1),v=function(){var n=Object(u.useState)(1),t=Object(a.a)(n,2),e=t[0],o=t[1],c=Object(u.useState)(99),i=Object(a.a)(c,2),s=i[0],b=i[1],f=Object(u.useState)(!1),d=Object(a.a)(f,2),v=d[0],h=d[1],g=Object(u.useState)(!1),O=Object(a.a)(g,2),m=O[0],k=O[1],w=Object(u.useMemo)((function(){return function(n,t,e){for(var o,c=Array.from({length:n*t},(function(n,e){return{i:Math.floor(e/t),j:e%t,value:""}})),i=0;i<e;)"B"!==c[o=Math.floor(Math.random()*n*t)].value&&(c[o].value="B",p(c,o,t,n),i+=1);return c}(16,30,s)}),[e]);return Object(x.jsxs)("div",{children:[Object(x.jsxs)(l,{children:[Object(x.jsxs)("div",{children:["Bombs left: ",s]}),Object(x.jsx)(j,{lost:v,mouseDown:m,onClick:function(){b(99),o(e+1),h(!1)}}),Object(x.jsx)("div",{children:v?"You lost!":"Attempt #".concat(e)})]}),Object(x.jsx)("div",{onMouseDown:function(){console.log("mousedown"),k(!0)},onMouseUp:function(){return k(!1)},children:Object(x.jsx)(r.a,{bombCount:s,setBombCount:b,lost:v,setLost:h,structure:w,width:30,height:16})})]})},h=d.a.div(i||(i=Object(f.a)(["\n  flex: 1 1 32px;\n  width: 32px;\n  height: 32px;\n  background-image: url('/sprite200.gif');\n  background-position: 0 -78px;\n\n  &.unclicked {\n    background-position: 0 -78px;\n  }\n\n  &.bomb {\n    background-position: ","\n  }\n\n  &.mistakenBomb {\n    background-position: -96px -78px;\n  }\n  \n  &.zero {\n    background-position: 0 -46px;\n  }\n\n  &.flag {\n    background-position: -32px -78px;\n  }\n\n  &.one {\n    background-position: -32px -46px;\n  }\n\n  &.two {\n    background-position: -64px -46px;\n  }\n\n  &.three {\n    background-position: -96px -46px;\n  }\n\n  &.four {\n    background-position: -128px -46px;\n  }\n\n  &.five {\n    background-position: -160px -46px;\n  }\n\n  &.six {\n    background-position: -192px -46px;\n  }\n\n  &.seven {\n    background-position: -224px -46px;\n  }\n\n  &.eigth {\n    background-position: -256px -46px;\n  }\n"])),(function(n){return n.mistakeWasHere?"-64px -78px":"-128px -78px;"})),g=Object.freeze({0:"zero",1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eigth",B:"bomb",MB:"mistakenBomb",F:"flag",U:"unclicked"}),O=s.a.forwardRef((function(n,t){var e=n.hasMine,o=n.value,c=n.lost,i=n.setLost,r=n.updateBombCount,s=n.row,b=n.column,p=n.revealNeighborhood,f=Object(u.useState)(!1),d=Object(a.a)(f,2),l=d[0],j=d[1],v=Object(u.useState)(!1),O=Object(a.a)(v,2),m=O[0],k=O[1],w=Object(u.useState)("U"),B=Object(a.a)(w,2),M=B[0],C=B[1];Object(u.useEffect)((function(){c?"F"===M?e||C("MB"):C(o||0):(C("U"),j(!1),k(!1))}),[c,e,C,o]);return Object(x.jsx)(h,{ref:t,onClick:function(n){n.preventDefault(),l||c||"F"===M||(j(!0),e?(C("B"),i(!0)):C(o||0),""===o&&p(s,b))},onContextMenu:function(n){if(n.preventDefault(),!l&&!c){var t=!m;r(t),k(t),C(t?"F":"U")}},mistakeWasHere:e&&l,className:"row".concat(s+1,"_column").concat(b+1," ").concat(g[M]),"data-testid":"minefield"})}))}},[[29,1,2]]]);
//# sourceMappingURL=main.0cde7f28.chunk.js.map