(this.webpackJsonpspekit=this.webpackJsonpspekit||[]).push([[0],{13:function(n,t,e){"use strict";(function(n){var o=e(0),r=e(19),c=e(8),i=e(5),a=e(20),u=e(1);t.a=function(t){var e=t.updateBombCount,s=t.won,f=t.lost,b=t.setLost,d=t.structure,p=t.width,l=t.height,j=Object(o.useRef)([]),x=Object(a.a)(),O=function(t,e){var o=Object(i.a)(e,t,p),r=[e-1,e,e+1],c=[t-1,t,t+1];for(var a in r){var u=function(t){var e=Object(i.a)(r[a],c[t],p);if(e===o||r[a]<0||c[t]<0||c[t]>=l||r[a]>=p)return"continue";var u=j.current[e];n((function(){return null===u||void 0===u?void 0:u.click()}))};for(var s in c)u(s)}};return Object(u.jsx)(r.a,{width:x,children:null===d||void 0===d?void 0:d.map((function(n){var t=n.i,o=n.j,r=n.value,a=Object(i.a)(o,t,p);return Object(u.jsx)(c.c,{ref:function(n){j.current[a]=n},row:t,column:o,hasMine:"B"===r,value:r,won:s,lost:f,setLost:b,updateBombCount:e,revealNeighborhood:O},"".concat(t,"_").concat(o))}))})}}).call(this,e(27).setImmediate)},19:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var o,r=e(2),c=e(3).a.div(o||(o=Object(r.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: ",";\n"])),(function(n){return n.width}))},20:function(n,t,e){"use strict";var o=e(6);t.a=function(){switch(Object(o.a)()){case"SMALL":return"352px";case"MEDIUM":return"516px";default:return"970px"}}},25:function(n,t,e){},30:function(n,t,e){"use strict";e.r(t);var o,r,c,i,a=e(0),u=e.n(a),s=e(15),f=e.n(s),b=(e(25),e.p+"static/media/logo.6ce24c58.svg"),d=e(2),p=e(3),l=p.a.main(o||(o=Object(d.a)(["\n  width: 100%;\n  text-align: center;\n"]))),j=p.a.h1(r||(r=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  margin: 0;\n  padding: 16px 0;\n  width: 100%;\n"]))),x=p.a.section(c||(c=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  color: white;\n"]))),O=p.a.img(i||(i=Object(d.a)(["\n  pointer-events: none;\n\n  @media (prefers-reduced-motion: no-preference) {\n      animation: App-logo-spin infinite 20s linear;\n  }\n\n  @keyframes App-logo-spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"]))),v=e(8),h=e(1),m=function(){return Object(h.jsxs)(l,{children:[Object(h.jsxs)(j,{children:["Modern React Minesweeper ",Object(h.jsx)(O,{width:"64",src:b,alt:"react logo"})]}),Object(h.jsx)(x,{children:Object(h.jsx)(v.d,{})})]})},g=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,34)).then((function(t){var e=t.getCLS,o=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;e(n),o(n),r(n),c(n),i(n)}))};f.a.render(Object(h.jsx)(u.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root")),g()},5:function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"a",(function(){return r}));var o=function(n,t){return{i:Math.floor(n/t),j:n%t}},r=function(n,t,e){return Number.parseInt(n)+Number.parseInt(t)*e}},6:function(n,t,e){"use strict";var o=e(33);t.a=function(){var n=Object(o.a)("(min-width:980px)"),t=Object(o.a)("(max-width:596px)");return n?"LARGE":t?"SMALL":"MEDIUM"}},8:function(n,t,e){"use strict";e.d(t,"a",(function(){return i.a})),e.d(t,"d",(function(){return h})),e.d(t,"c",(function(){return k})),e.d(t,"b",(function(){return B}));var o,r,c,i=e(13),a=e(4),u=e(0),s=e.n(u),f=e(5),b=function(n,t,e,o){var r,c,i=Object(f.b)(t,e),a=i.i,u=i.j,s=[a-1,a,a+1],b=[u-1,u,u+1];for(var d in s)for(var p in b){var l;s[d]<0||b[p]<0||b[p]>=e||s[d]>=o||n[r=Object(f.a)(b[p],s[d],e)]&&"B"!==(null===(l=n[r])||void 0===l?void 0:l.value)&&(c=n[r].value,n[r].value=c?c+1:1)}},d=e(2),p=e(3),l=p.a.div(o||(o=Object(d.a)(["\n  margin: 20px 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 600;\n"]))),j=e(6),x=function(){switch(Object(j.a)()){case"SMALL":return 36;case"MEDIUM":return 52;default:return 99}},O=function(){switch(Object(j.a)()){case"SMALL":return 11;case"MEDIUM":return 16;default:return 30}},v=e(1),h=function(){var n=x(),t=O(),e=Object(u.useState)(1),o=Object(a.a)(e,2),r=o[0],c=o[1],s=Object(u.useState)(n),f=Object(a.a)(s,2),d=f[0],p=f[1],j=Object(u.useState)(n),h=Object(a.a)(j,2),m=h[0],g=h[1],w=Object(u.useState)(!1),k=Object(a.a)(w,2),M=k[0],L=k[1],S=Object(u.useState)(!1),C=Object(a.a)(S,2),y=C[0],D=C[1],I=Object(u.useState)(!1),A=Object(a.a)(I,2),E=A[0],U=A[1],F=Object(u.useMemo)((function(){return function(n,t,e){for(var o,r=Array.from({length:n*t},(function(n,e){return{i:Math.floor(e/t),j:e%t,value:""}})),c=0;c<e;)"B"!==r[o=Math.floor(Math.random()*n*t)].value&&(r[o].value="B",b(r,o,t,n),c+=1);return r}(16,t,n)}),[r,n,t]),N=Object(u.useCallback)((function(){p(n),g(n),D(!1),L(!1)}),[p,D,n]);Object(u.useEffect)((function(){N()}),[N,t]);return Object(v.jsxs)("div",{children:[Object(v.jsxs)(l,{children:[Object(v.jsxs)("div",{children:["Bombs left: ",d]}),Object(v.jsx)(B,{won:M,lost:y,mouseDown:E,restartGame:function(){c((function(){return r+1})),N()}}),Object(v.jsx)("div",{children:y?"You lost!":M?"You won!":"Attempt #".concat(r)})]}),Object(v.jsx)("div",{onMouseDown:function(){return U(!0)},onMouseUp:function(){return U(!1)},children:Object(v.jsx)(i.a,{bombCount:d,updateBombCount:function(n,t){var e=n?-1:1;p(d+e),t&&(g(m+e),m+e===0&&L(!0))},won:M,lost:y,setLost:D,structure:F,width:t,HEIGHT:16})})]})},m=function(n){return"".concat("/minesweeper-react","/").concat(n)},g=p.a.div(r||(r=Object(d.a)(["\n  flex: 1 1 32px;\n  width: 32px;\n  height: 32px;\n  background-image: url(",");\n  background-position: 0 -78px;\n\n  &.unclicked {\n    background-position: 0 -78px;\n  }\n\n  &.bomb {\n    background-position: ","\n  }\n\n  &.mistakenBomb {\n    background-position: -96px -78px;\n  }\n  \n  &.zero {\n    background-position: 0 -46px;\n  }\n\n  &.flag {\n    background-position: -32px -78px;\n  }\n\n  &.one {\n    background-position: -32px -46px;\n  }\n\n  &.two {\n    background-position: -64px -46px;\n  }\n\n  &.three {\n    background-position: -96px -46px;\n  }\n\n  &.four {\n    background-position: -128px -46px;\n  }\n\n  &.five {\n    background-position: -160px -46px;\n  }\n\n  &.six {\n    background-position: -192px -46px;\n  }\n\n  &.seven {\n    background-position: -224px -46px;\n  }\n\n  &.eigth {\n    background-position: -256px -46px;\n  }\n"])),m("sprite200.gif"),(function(n){return n.mistakeWasHere?"-64px -78px":"-128px -78px;"})),w=Object.freeze({0:"zero",1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eigth",B:"bomb",MB:"mistakenBomb",F:"flag",U:"unclicked"}),k=s.a.forwardRef((function(n,t){var e=n.hasMine,o=n.value,r=n.won,c=n.lost,i=n.setLost,s=n.updateBombCount,f=n.row,b=n.column,d=n.revealNeighborhood,p=Object(u.useState)(!1),l=Object(a.a)(p,2),j=l[0],x=l[1],O=Object(u.useState)(!1),h=Object(a.a)(O,2),m=h[0],k=h[1],M=Object(u.useState)("U"),B=Object(a.a)(M,2),L=B[0],S=B[1];Object(u.useEffect)((function(){c?"F"===L?e||S("MB"):S(o||0):(S("U"),x(!1),k(!1))}),[c,e,S,o]);return Object(v.jsx)(g,{ref:t,onClick:function(n){n.preventDefault(),j||c||r||"F"===L||(x(!0),e?(S("B"),i(!0)):S(o||0),""===o&&d(f,b))},onContextMenu:function(n){if(n.preventDefault(),!(j||c||r)){var t=!m;s(t,e),k(t),S(t?"F":"U")}},mistakeWasHere:e&&j,className:"row".concat(f+1,"_column").concat(b+1," ").concat(w[L]),"data-testid":"minefield"})})),M=p.a.div(c||(c=Object(d.a)(["\n  background-image: url(",");\n  background-position: "," -110px;\n  width: 52px;\n  height: 52px;\n"])),m("sprite200.gif"),(function(n){return n.startPosition})),B=function(n){var t=n.won,e=n.lost,o=n.mouseDown,r=n.restartGame,c=t?"-208px":e?"-156px":o?"-104px":"0";return Object(v.jsx)(M,{startPosition:c,onClick:function(){return r()}})}}},[[30,1,2]]]);
//# sourceMappingURL=main.a3ede96c.chunk.js.map