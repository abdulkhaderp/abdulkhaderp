(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,n,t){},16:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r),a=t(4),c=t.n(a),i=(t(15),t(16),t(5)),s=t(6),l=t(10),u=t(9),d=t(7),h=t.n(d),j=t(0),f=function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=n.call.apply(n,[this].concat(o))).state={result:"No result"},e.handleScan=function(n){n&&e.setState({result:n})},e.handleError=function(e){console.error(e)},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){navigator.getUserMedia?navigator.getUserMedia({video:!0},(function(e){}),(function(e){alert("The following error occurred when trying to access the camera: "+e)})):alert("Sorry, browser does not support camera access")}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(h.a,{delay:300,facingMode:"user",onError:this.handleError,onScan:this.handleScan,style:{width:"100%"}}),Object(j.jsx)("p",{children:this.state.result})]})}}]),t}(r.Component);var v=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h3",{children:"Sample PWA - QR Scanner"}),Object(j.jsx)("div",{className:"qr-div",children:Object(j.jsx)(f,{})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,27)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,a=n.getLCP,c=n.getTTFB;t(e),r(e),o(e),a(e),c(e)}))};c.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),p()}},[[26,1,2]]]);
//# sourceMappingURL=main.60ec3c66.chunk.js.map