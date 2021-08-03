(this.webpackJsonpspekit=this.webpackJsonpspekit||[]).push([[0],{17:function(n,e,t){"use strict";t.d(e,"b",(function(){return r})),t.d(e,"a",(function(){return c}));var r=function(n,e){return{i:Math.floor(n/e),j:n%e}},c=function(n,e,t){return Number.parseInt(n)+Number.parseInt(e)*t}},21:function(n,e,t){"use strict";var r=t(86);e.a=function(){var n=Object(r.a)("(min-width:980px)"),e=Object(r.a)("(max-width:596px)");return n?"LARGE":e?"SMALL":"MEDIUM"}},23:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r=16},29:function(n,e,t){"use strict";t.d(e,"a",(function(){return a.a})),t.d(e,"d",(function(){return w})),t.d(e,"c",(function(){return L})),t.d(e,"b",(function(){return S})),t.d(e,"e",(function(){return R}));var r,c,i,o,a=t(40),s=t(9),u=t(0),l=t.n(u),d=t(23),b=t(17),j=function(n,e){for(var t,r=Array.from({length:d.a*n},(function(e,t){return{i:Math.floor(t/n),j:t%n,value:""}})),c=0;c<e;)"B"!==r[t=Math.floor(Math.random()*d.a*n)].value&&(r[t].value="B",f(r,t,n),c+=1);return r},f=function(n,e,t){var r,c,i=Object(b.b)(e,t),o=i.i,a=i.j,s=[o-1,o,o+1],u=[a-1,a,a+1];for(var l in s)for(var j in u){var f;s[l]<0||u[j]<0||u[j]>=t||s[l]>=d.a||n[r=Object(b.a)(u[j],s[l],t)]&&"B"!==(null===(f=n[r])||void 0===f?void 0:f.value)&&(c=n[r].value,n[r].value=c?c+1:1)}},x=t(5),h=t(6),p=h.a.div(r||(r=Object(x.a)(["\n  margin: 20px 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 600;\n"]))),O=t(21),v=function(){switch(Object(O.a)()){case"SMALL":return 36;case"MEDIUM":return 52;default:return 99}},g=function(){switch(Object(O.a)()){case"SMALL":return 11;case"MEDIUM":return 16;default:return 30}},m=t(2),w=function(){var n=v(),e=g(),t=Object(u.useState)(1),r=Object(s.a)(t,2),c=r[0],i=r[1],o=Object(u.useState)(n),l=Object(s.a)(o,2),d=l[0],b=l[1],f=Object(u.useState)(n),x=Object(s.a)(f,2),h=x[0],O=x[1],w=Object(u.useState)(!1),k=Object(s.a)(w,2),M=k[0],y=k[1],L=Object(u.useState)(!1),B=Object(s.a)(L,2),C=B[0],A=B[1],D=Object(u.useState)(!1),E=Object(s.a)(D,2),U=E[0],R=E[1],I=Object(u.useState)(j(e,n)),F=Object(s.a)(I,2),P=F[0],q=F[1],T=Object(u.useCallback)((function(){b(n),O(n),A(!1),y(!1)}),[b,A,y,n]);Object(u.useEffect)((function(){q(j(e,n)),T()}),[n,T,e]);var z=function(){i((function(){return c+1})),q(j(e,n)),T()};return Object(m.jsxs)("div",{children:[Object(m.jsxs)(p,{children:[Object(m.jsxs)("div",{children:["Bombs left: ",d]}),Object(m.jsx)(S,{won:M,lost:C,mouseDown:U,restartGame:z}),Object(m.jsx)("div",{children:C?"You lost!":M?"You won!":"Attempt #".concat(c)})]}),Object(m.jsx)("div",{onMouseDown:function(){return R(!0)},onMouseUp:function(){return R(!1)},children:Object(m.jsx)(a.a,{bombCount:d,updateBombCount:function(n,e){var t=n?-1:1;b(d+t),e&&(O(h+t),h+t===0&&d+t===0&&y(!0))},won:M,lost:C,setLost:A,structure:P,width:e,restartGame:z})})]})},k=function(n){return"".concat("/minesweeper-react","/").concat(n)},M=h.a.div(c||(c=Object(x.a)(["\n  flex: 1 1 32px;\n  width: 32px;\n  height: 32px;\n  background-image: url(",");\n  background-position: 0 -78px;\n\n  &.unclicked {\n    background-position: 0 -78px;\n  }\n\n  &.bomb {\n    background-position: ","\n  }\n\n  &.mistakenBomb {\n    background-position: -96px -78px;\n  }\n  \n  &.zero {\n    background-position: 0 -46px;\n  }\n\n  &.flag {\n    background-position: -32px -78px;\n  }\n\n  &.one {\n    background-position: -32px -46px;\n  }\n\n  &.two {\n    background-position: -64px -46px;\n  }\n\n  &.three {\n    background-position: -96px -46px;\n  }\n\n  &.four {\n    background-position: -128px -46px;\n  }\n\n  &.five {\n    background-position: -160px -46px;\n  }\n\n  &.six {\n    background-position: -192px -46px;\n  }\n\n  &.seven {\n    background-position: -224px -46px;\n  }\n\n  &.eigth {\n    background-position: -256px -46px;\n  }\n"])),k("sprite200.gif"),(function(n){return n.mistakeWasHere?"-64px -78px":"-128px -78px;"})),y=Object.freeze({0:"zero",1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eigth",B:"bomb",MB:"mistakenBomb",F:"flag",U:"unclicked"}),L=l.a.forwardRef((function(n,e){var t=n.hasMine,r=n.value,c=n.won,i=n.lost,o=n.setLost,a=n.updateBombCount,l=n.row,d=n.column,b=n.revealNeighborhood,j=Object(u.useState)(!1),f=Object(s.a)(j,2),x=f[0],h=f[1],p=Object(u.useState)(!1),O=Object(s.a)(p,2),v=O[0],g=O[1],w=Object(u.useState)("U"),k=Object(s.a)(w,2),L=k[0],B=k[1];Object(u.useEffect)((function(){i?"F"===L?t||B("MB"):B(r||0):(B("U"),h(!1),g(!1))}),[i,t,B,r]);return Object(m.jsx)(M,{tabIndex:0,ref:e,onClick:function(n){n.preventDefault(),x||i||c||"F"===L||(n.target.focus(),h(!0),t?(B("B"),o(!0)):B(r||0),""===r&&b(l,d))},onContextMenu:function(n){if(n.preventDefault(),!(x||i||c)){var e=!v;n.target.focus(),a(e,t),g(e),B(e?"F":"U")}},mistakeWasHere:t&&x,className:"row".concat(l+1,"_column").concat(d+1," ").concat(y[L]),"data-testid":"minefield"})})),B=h.a.div(i||(i=Object(x.a)(["\n  background-image: url(",");\n  background-position: "," -110px;\n  width: 52px;\n  height: 52px;\n"])),k("sprite200.gif"),(function(n){return n.startPosition})),S=function(n){var e=n.won,t=n.lost,r=n.mouseDown,c=n.restartGame,i=e?"-208px":t?"-156px":r?"-104px":"0";return Object(m.jsx)(B,{startPosition:i,onClick:function(){return c()}})},C=t(88),A=t(89),D=t(91),E=t(90),U=Object(h.a)(E.a)(o||(o=Object(x.a)(["\n  backgroundColor: '#f5f5f9';\n  color: 'rgba(0, 0, 0, 0.87)';\n  fontSize: 12rem;\n  border: '1px solid #dadde9';\n"]))),R=function(){return Object(m.jsx)("div",{children:Object(m.jsx)(U,{title:Object(m.jsxs)(l.a.Fragment,{children:[Object(m.jsx)(C.a,{color:"inherit",variant:"h6",children:"How To Play"}),Object(m.jsx)(C.a,{color:"inherit",variant:"overline",children:Object(m.jsx)("b",{children:Object(m.jsx)("u",{children:"Desktop"})})}),Object(m.jsx)(C.a,{color:"inherit",variant:"subtitle2",children:"Mouse"}),Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:[Object(m.jsx)("b",{children:"Left click"})," to reveal an empty square"]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("b",{children:"Righ click"})," to mark/unmark a flag on a square"]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("b",{children:"Click"})," on the smiley face to reset the game"]})]}),Object(m.jsx)(C.a,{color:"inherit",variant:"subtitle2",children:"Keyboard"}),Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:[Object(m.jsx)("b",{children:"Use the arrow keys"})," to go up, down, left or right from the current square"]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("b",{children:"Press space"})," on the selected square to mark/unmark a flag on it"]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("b",{children:"Press C or Enter"})," on the selected square to reveal it"]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("b",{children:"Press R"})," to reset the game"]})]}),Object(m.jsx)(A.a,{}),Object(m.jsx)(C.a,{color:"inherit",variant:"overline",children:Object(m.jsx)("b",{children:Object(m.jsx)("u",{children:"Mobile"})})}),Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:[Object(m.jsx)("b",{children:"Single Tap"})," to reveal an empty square"]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("b",{children:"Long Tap"})," to mark/unmark a flag on a square"]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("b",{children:"Tap"})," on the smiley face to reset the game"]})]})]}),children:Object(m.jsx)(D.a,{children:"How To Play"})})})}},37:function(n,e,t){"use strict";t.d(e,"b",(function(){return r})),t.d(e,"a",(function(){return c}));var r=function(n){return new MouseEvent("contextmenu",{bubbles:!0,cancelable:!1,view:window,button:2,buttons:0,clientX:null===n||void 0===n?void 0:n.getBoundingClientRect().x,clientY:null===n||void 0===n?void 0:n.getBoundingClientRect().y})},c=Object.freeze(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"])},40:function(n,e,t){"use strict";(function(n){var r=t(9),c=t(0),i=t(44),o=t(29),a=t(17),s=t(45),u=t(23),l=t(37),d=t(46),b=t(2);e.a=function(e){var t=e.updateBombCount,j=e.won,f=e.lost,x=e.setLost,h=e.structure,p=e.width,O=e.restartGame,v=Object(c.useRef)([]),g=Object(s.a)(),m=function(e,t){var r=Object(a.a)(t,e,p),c=[t-1,t,t+1],i=[e-1,e,e+1];for(var o in c){var s=function(e){var t=Object(a.a)(c[o],i[e],p);if(t===r||c[o]<0||i[e]<0||i[e]>=u.a||c[o]>=p)return"continue";var s=v.current[t];n((function(){return null===s||void 0===s?void 0:s.click()}))};for(var l in i)s(l)}};return Object(c.useEffect)((function(){var n;null===v||void 0===v||null===(n=v.current[0])||void 0===n||n.focus()}),[]),Object(b.jsx)(i.a,{width:g,onKeyDown:function(n){var e=Object(d.a)(n,p),t=Object(r.a)(e,1)[0],c=v.current[t];if("Space"===n.code){var i=Object(l.b)(c);null===c||void 0===c||c.dispatchEvent(i)}else"KeyC"===n.code||"Enter"===n.code?null===c||void 0===c||c.click():l.a.indexOf(n.code)>=0?function(n,e){var t,r=0;switch(e){case"ArrowLeft":r=-1;break;case"ArrowRight":r=1;break;case"ArrowUp":r=-p;break;case"ArrowDown":r=p}var c=n+r,i=null===v||void 0===v?void 0:v.current.length;c<0&&(c+=i-1),c>=i&&(c-=i-1),null===v||void 0===v||null===(t=v.current[c])||void 0===t||t.focus()}(t,n.code):"KeyR"===n.code&&O()},children:null===h||void 0===h?void 0:h.map((function(n){var e=n.i,r=n.j,c=n.value,i=Object(a.a)(r,e,p);return Object(b.jsx)(o.c,{ref:function(n){v.current[i]=n},row:e,column:r,hasMine:"B"===c,value:c,won:j,lost:f,setLost:x,updateBombCount:t,revealNeighborhood:m},"".concat(e,"_").concat(r))}))})}}).call(this,t(63).setImmediate)},44:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r,c=t(5),i=t(6).a.div(r||(r=Object(c.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: ",";\n"])),(function(n){return n.width}))},45:function(n,e,t){"use strict";var r=t(21);e.a=function(){switch(Object(r.a)()){case"SMALL":return"352px";case"MEDIUM":return"516px";default:return"970px"}}},46:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var r=t(9),c=t(17),i=function(n,e){var t,i;if(n&&n.target&&(n.target.classList.forEach((function(n){var e=n.match(/row(\d{1,2})_column(\d{1,2})/);if(e){var c=Object(r.a)(e,3);t=c[1],i=c[2]}})),t&&i)){var o=t-1,a=i-1;return[Object(c.a)(a,o,e),t,a]}}},61:function(n,e,t){},68:function(n,e,t){"use strict";t.r(e);var r,c,i,o,a,s,u=t(0),l=t.n(u),d=t(11),b=t.n(d),j=(t(61),t.p+"static/media/logo.6ce24c58.svg"),f=t(5),x=t(6),h=x.a.main(r||(r=Object(f.a)(["\n  width: 100%;\n  text-align: center;\n"]))),p=x.a.h1(c||(c=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  margin: 0;\n  padding: 16px 0;\n  width: 100%;\n"]))),O=x.a.div(i||(i=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  margin: 0;\n  padding: 16px 0;\n  width: 100%;\n"]))),v=(x.a.h1(o||(o=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  margin: 0;\n  padding: 16px 0;\n  width: 100%;\n"]))),x.a.section(a||(a=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  color: white;\n"])))),g=x.a.img(s||(s=Object(f.a)(["\n  pointer-events: none;\n\n  @media (prefers-reduced-motion: no-preference) {\n      animation: App-logo-spin infinite 20s linear;\n  }\n\n  @keyframes App-logo-spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"]))),m=t(29),w=t(2),k=function(){return Object(w.jsxs)(h,{children:[Object(w.jsxs)(O,{children:[Object(w.jsxs)(p,{children:["Modern React Minesweeper ",Object(w.jsx)(g,{width:"64",src:j,alt:"react logo"})]}),Object(w.jsx)(m.e,{})]}),Object(w.jsx)(v,{children:Object(w.jsx)(m.d,{})})]})},M=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,92)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),r(n),c(n),i(n),o(n)}))};b.a.render(Object(w.jsx)(l.a.StrictMode,{children:Object(w.jsx)(k,{})}),document.getElementById("root")),M()}},[[68,1,2]]]);
//# sourceMappingURL=main.36a4c99e.chunk.js.map