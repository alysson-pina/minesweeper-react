(this.webpackJsonpspekit=this.webpackJsonpspekit||[]).push([[0],{11:function(A,e,n){"use strict";(function(A){var c=n(0),i=n(15),t=n(7),u=n(5),a=n(1);e.a=function(e){var n=e.bombCount,r=e.setBombCount,o=e.lost,s=e.setLost,d=e.structure,v=e.width,j=e.height,m=Object(c.useRef)([]),y=function(A){return r(n+(A?-1:1))},q=function(e,n){var c=Object(u.a)(n,e,v),i=[n-1,n,n+1],t=[e-1,e,e+1];for(var a in i){var r=function(e){var n=Object(u.a)(i[a],t[e],v);if(n===c||i[a]<0||t[e]<0||t[e]>=j||i[a]>=v)return"continue";var r=m.current[n];A((function(){return r.click()}))};for(var o in t)r(o)}};return Object(a.jsx)(i.a,{children:null===d||void 0===d?void 0:d.map((function(A){var e=A.i,n=A.j,c=A.value,i=Object(u.a)(n,e,v);return Object(a.jsx)(t.b,{ref:function(A){m.current[i]=A},row:e,column:n,hasMine:"B"===c,value:c,lost:o,setLost:s,updateBombCount:y,revealNeighborhood:q},"".concat(e,"_").concat(n))}))})}}).call(this,n(25).setImmediate)},15:function(A,e,n){"use strict";n.d(e,"a",(function(){return t}));var c,i=n(3),t=n(4).a.div(c||(c=Object(i.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 970px;\n"])))},23:function(A,e,n){},24:function(A,e,n){},29:function(A,e,n){"use strict";n.r(e);var c=n(0),i=n.n(c),t=n(14),u=n.n(t),a=(n(23),n.p+"static/media/logo.6ce24c58.svg"),r=(n(24),n(7)),o=n(1),s=function(){return Object(o.jsxs)("main",{className:"App",children:[Object(o.jsxs)("h1",{children:["Modern React Minesweeper ",Object(o.jsx)("img",{width:"64",src:a,className:"App-logo",alt:"react logo"})]}),Object(o.jsx)("section",{className:"App-header",children:Object(o.jsx)(r.c,{})})]})},d=function(A){A&&A instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,t=e.getLCP,u=e.getTTFB;n(A),c(A),i(A),t(A),u(A)}))};u.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(s,{})}),document.getElementById("root")),d()},5:function(A,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return i}));var c=function(A,e){return{i:Math.floor(A/e),j:A%e}},i=function(A,e,n){return Number.parseInt(A)+Number.parseInt(e)*n}},7:function(A,e,n){"use strict";n.d(e,"a",(function(){return u.a})),n.d(e,"c",(function(){return p})),n.d(e,"b",(function(){return O}));var c,i,t,u=n(11),a=n(2),r=n(0),o=n.n(r),s=n(5),d=function(A,e,n,c){var i,t,u=Object(s.b)(e,n),a=u.i,r=u.j,o=[a-1,a,a+1],d=[r-1,r,r+1];for(var v in o)for(var j in d){var m;o[v]<0||d[j]<0||d[j]>=n||o[v]>=c||A[i=Object(s.a)(d[j],o[v],n)]&&"B"!==(null===(m=A[i])||void 0===m?void 0:m.value)&&(t=A[i].value,A[i].value=t?t+1:1)}},v=n(3),j=n(4),m=j.a.div(c||(c=Object(v.a)(["\n  margin: 20px 0;\n  display: flex;\n  justify-content: space-between;\n"]))),y=j.a.div(i||(i=Object(v.a)(['\n  background-image: url("data:image/png;base64,R0lGODlhIAG2APcAAP//////AP8A//8AAAD//wD/AAAA/wAAAHQASEgASEgAdAAAewAAdAAASABInHS//0ic3wB0v5zf/3S/3wB0nAB7e7///5zfv7//3wB7AL//v4CAAHt7AN/fnP//v///37+cSP/fnL90AN+cSP+/dJxIAHsAAHQAAEgAAJxISMDAwL29vYCAgHt7e////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAIAG2AAAI/wAPCBxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFiwoBAMDIsaPHjyBDihxJ8oBGggNSqlzJUqVCEyYEwpQZ88DMhC1zskSos+eAlzVvCq3J02fOokZ3HkzaEinTlE6fAqVJ1SbRgScHPl051WrVm1GZhk3adWjVsUbR+lTbk61Ot0cTmvVKl2BWqAek5v05ECzduQLxVtUrmC5hvoER/w16tTBevX4fi61reLJjvodRYras2O9czzXvbia7lyDor40718zcdzVnzaYZny2tdXRaypJJn95L+nLi3opz3y68GzBd0cKb8lY82zjXgjfXLjcYve302sRlYw/ucrlyv79tf/+/Gju88ufhzStFf106++baZyMXv757+daz31d+e/2+e/v9LabZZckpBV571h04mHXsPfcfgfQ5CCB8FGK1kXfMFaQcagptKCBOSnEIYoMhLlWih9TFh2FZVxlnkIcoanhiiS+W6CJ02s1XWI3s3TgggD5ul91sPAIY448Q7ohjfjQuSVmQ6iGZoZRUjgikiilWpeOUQmaooIz6fVnlfR3OqN+YKy504JFOZrkQjE2iyWaUbap51ZZlhkmeiXoyFKOYXaJZZJJckhmonQgBSueifBoZ56GGdiUQnlYOSdmgqhEJ5pWayvkoo3N+yKibxe3p6ZmQphnWfYDORemq+F3/uqmlgHoIpaq4Yiqok5F9KuqvuqYa7KizZiorq6FdGOqfphbrZp4THuussNMS+yy110baKKHQclupl81e++q24PrZpKK5SntqtOsqmW2673ZaLbypLntuuHWOOyyw895qK5bz2ksiqiJaG2up3XJHMK4Cc6ruh/r2CzCa/to4cb2+wrmwc74aV/HA7GK88L/yijifQ302lLK5SqKb3nYoO+ruQWuGHO/DP+asssyFbnqzuMra7HOd0P48tLZO6cyywj1ruzDSOMMs9dJKvxmty5SJhiyThn6Wmn+vxcpaYurx5xuG/PVadly7iah2bWufx13c9YGtW7JkH6yipW5//y122AsCBxvacZ0Nmd+Hd63d23mPTZvj1d096YVb80vq4vhuFbLmM3POpedwhep1yYRLhylpp982+eUFy4U56aCTi3qxs0tZe5e3V/7xVqE/GvvqtPU9eIUcD57434IjP5yxjhdotrHCwy095K4lH/htN2mtN9exRp9345PtRj3dEtq9vPGAP/m69OBbv9/5ykuXfdAzF2l01U93T7SV90+tf9H+AyDU7BdA/u0vaQek2Z3o17QCYg1kDvnSA6+Gr6qRDn9Cs2DUXsZBq7Wsgg4EoXwYWD9c7c5biVLRCY1VK4vBzkxCI9nDNBZDF87Q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");\n  background-position: ',";\n  width: 52px;\n  height: 52px;\n"])),(function(A){return A.mouseDown?"-104px -110px":A.lost?"-156px -110px":"0 -110px"})),q=n(1),p=function(){var A=Object(r.useState)(1),e=Object(a.a)(A,2),n=e[0],c=e[1],i=Object(r.useState)(99),t=Object(a.a)(i,2),o=t[0],s=t[1],v=Object(r.useState)(!1),j=Object(a.a)(v,2),p=j[0],f=j[1],l=Object(r.useState)(!1),O=Object(a.a)(l,2),Z=O[0],x=O[1],b=Object(r.useMemo)((function(){return function(A,e,n){for(var c,i=Array.from({length:A*e},(function(A,n){return{i:Math.floor(n/e),j:n%e,value:""}})),t=0;t<n;)"B"!==i[c=Math.floor(Math.random()*A*e)].value&&(i[c].value="B",d(i,c,e,A),t+=1);return i}(16,30,o)}),[n]);return Object(q.jsxs)("div",{children:[Object(q.jsxs)(m,{children:[Object(q.jsxs)("div",{children:["Bombs left: ",o]}),Object(q.jsx)(y,{lost:p,mouseDown:Z,onClick:function(){s(99),c(n+1),f(!1)}}),Object(q.jsx)("div",{children:p?"You lost!":"Attempt #".concat(n)})]}),Object(q.jsx)("div",{onMouseDown:function(){console.log("mousedown"),x(!0)},onMouseUp:function(){return x(!1)},children:Object(q.jsx)(u.a,{bombCount:o,setBombCount:s,lost:p,setLost:f,structure:b,width:30,height:16})})]})},f=j.a.div(t||(t=Object(v.a)(['\n  flex: 1 1 32px;\n  width: 32px;\n  height: 32px;\n  background-image: url("data:image/png;base64,R0lGODlhIAG2APcAAP//////AP8A//8AAAD//wD/AAAA/wAAAHQASEgASEgAdAAAewAAdAAASABInHS//0ic3wB0v5zf/3S/3wB0nAB7e7///5zfv7//3wB7AL//v4CAAHt7AN/fnP//v///37+cSP/fnL90AN+cSP+/dJxIAHsAAHQAAEgAAJxISMDAwL29vYCAgHt7e////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAIAG2AAAI/wAPCBxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFiwoBAMDIsaPHjyBDihxJ8oBGggNSqlzJUqVCEyYEwpQZ88DMhC1zskSos+eAlzVvCq3J02fOokZ3HkzaEinTlE6fAqVJ1SbRgScHPl051WrVm1GZhk3adWjVsUbR+lTbk61Ot0cTmvVKl2BWqAek5v05ECzduQLxVtUrmC5hvoER/w16tTBevX4fi61reLJjvodRYras2O9czzXvbia7lyDor40718zcdzVnzaYZny2tdXRaypJJn95L+nLi3opz3y68GzBd0cKb8lY82zjXgjfXLjcYve302sRlYw/ucrlyv79tf/+/Gju88ufhzStFf106++baZyMXv757+daz31d+e/2+e/v9LabZZckpBV571h04mHXsPfcfgfQ5CCB8FGK1kXfMFaQcagptKCBOSnEIYoMhLlWih9TFh2FZVxlnkIcoanhiiS+W6CJ02s1XWI3s3TgggD5ul91sPAIY448Q7ohjfjQuSVmQ6iGZoZRUjgikiilWpeOUQmaooIz6fVnlfR3OqN+YKy504JFOZrkQjE2iyWaUbap51ZZlhkmeiXoyFKOYXaJZZJJckhmonQgBSueifBoZ56GGdiUQnlYOSdmgqhEJ5pWayvkoo3N+yKibxe3p6ZmQphnWfYDORemq+F3/uqmlgHoIpaq4Yiqok5F9KuqvuqYa7KizZiorq6FdGOqfphbrZp4THuussNMS+yy110baKKHQclupl81e++q24PrZpKK5SntqtOsqmW2673ZaLbypLntuuHWOOyyw895qK5bz2ksiqiJaG2up3XJHMK4Cc6ruh/r2CzCa/to4cb2+wrmwc74aV/HA7GK88L/yijifQ302lLK5SqKb3nYoO+ruQWuGHO/DP+asssyFbnqzuMra7HOd0P48tLZO6cyywj1ruzDSOMMs9dJKvxmty5SJhiyThn6Wmn+vxcpaYurx5xuG/PVadly7iah2bWufx13c9YGtW7JkH6yipW5//y122AsCBxvacZ0Nmd+Hd63d23mPTZvj1d096YVb80vq4vhuFbLmM3POpedwhep1yYRLhylpp982+eUFy4U56aCTi3qxs0tZe5e3V/7xVqE/GvvqtPU9eIUcD57434IjP5yxjhdotrHCwy095K4lH/htN2mtN9exRp9345PtRj3dEtq9vPGAP/m69OBbv9/5ykuXfdAzF2l01U93T7SV90+tf9H+AyDU7BdA/u0vaQek2Z3o17QCYg1kDvnSA6+Gr6qRDn9Cs2DUXsZBq7Wsgg4EoXwYWD9c7c5biVLRCY1VK4vBzkxCI9nDNBZDF87Q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");\n  background-position: 0 -78px;\n\n  &.unclicked {\n    background-position: 0 -78px;\n  }\n\n  &.bomb {\n    background-position: ',"\n  }\n\n  &.mistakenBomb {\n    background-position: -96px -78px;\n  }\n  \n  &.zero {\n    background-position: 0 -46px;\n  }\n\n  &.flag {\n    background-position: -32px -78px;\n  }\n\n  &.one {\n    background-position: -32px -46px;\n  }\n\n  &.two {\n    background-position: -64px -46px;\n  }\n\n  &.three {\n    background-position: -96px -46px;\n  }\n\n  &.four {\n    background-position: -128px -46px;\n  }\n\n  &.five {\n    background-position: -160px -46px;\n  }\n\n  &.six {\n    background-position: -192px -46px;\n  }\n\n  &.seven {\n    background-position: -224px -46px;\n  }\n\n  &.eigth {\n    background-position: -256px -46px;\n  }\n"])),(function(A){return A.mistakeWasHere?"-64px -78px":"-128px -78px;"})),l=Object.freeze({0:"zero",1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eigth",B:"bomb",MB:"mistakenBomb",F:"flag",U:"unclicked"}),O=o.a.forwardRef((function(A,e){var n=A.hasMine,c=A.value,i=A.lost,t=A.setLost,u=A.updateBombCount,o=A.row,s=A.column,d=A.revealNeighborhood,v=Object(r.useState)(!1),j=Object(a.a)(v,2),m=j[0],y=j[1],p=Object(r.useState)(!1),O=Object(a.a)(p,2),Z=O[0],x=O[1],b=Object(r.useState)("U"),z=Object(a.a)(b,2),W=z[0],h=z[1];Object(r.useEffect)((function(){i?"F"===W?n||h("MB"):h(c||0):(h("U"),y(!1),x(!1))}),[i,n,h,c]);return Object(q.jsx)(f,{ref:e,onClick:function(A){A.preventDefault(),m||i||"F"===W||(y(!0),n?(h("B"),t(!0)):h(c||0),""===c&&d(o,s))},onContextMenu:function(A){if(A.preventDefault(),!m&&!i){var e=!Z;u(e),x(e),h(e?"F":"U")}},mistakeWasHere:n&&m,className:"row".concat(o+1,"_column").concat(s+1," ").concat(l[W]),"data-testid":"minefield"})}))}},[[29,1,2]]]);
//# sourceMappingURL=main.7775a88f.chunk.js.map