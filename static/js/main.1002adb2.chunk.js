(this["webpackJsonpbattle-tent"]=this["webpackJsonpbattle-tent"]||[]).push([[0],{123:function(e,t){},127:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),u=(n(88),n(12)),i=n(78),l=n(4),s=n(72),f=n(73),m=new(function(){function e(){Object(s.a)(this,e),this.isAuthenticated=!1}return Object(f.a)(e,[{key:"authenticate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};this.isAuthenticated=!0,setTimeout(e,100)}},{key:"signout",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};this.isAuthenticated=!1,setTimeout(e,100)}}]),e}());function p(e){return r.a.createElement("input",e)}var d=n(5),h=n(6),v=n(150);function b(){var e=Object(d.a)(["\n  && {\n    color: inherit;\n  }\n"]);return b=function(){return e},e}function E(e){var t=Object.assign({},e);return r.a.createElement(j,Object.assign({},t,{onClick:function(e){new Audio("assets/audio/sfx/plink.mp3").play(),t.onClick(e)}}))}var j=Object(h.a)(v.a)(b());function g(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n"]);return g=function(){return e},e}var y=h.a.div(g());function O(){var e=Object(d.a)(["\n  background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);\n  height: 100vh;\n"]);return O=function(){return e},e}var x=Object(h.a)(y)(O());function w(){var e=Object(a.useContext)(je);return r.a.createElement(x,null,r.a.createElement("header",null,r.a.createElement("div",null,"Welcome to"),r.a.createElement("h1",null,"Battle Tent")),r.a.createElement("main",null,r.a.createElement("h5",null,"What is your display name?"),r.a.createElement(p,{autoFocus:!0,placeholder:"...Trainer123"}),r.a.createElement(E,{onClick:function(){m.authenticate((function(){e(Ee.Lobby)}))}},"Enter")))}var k=n(13),C=n.n(k),P=n(22),B=n(149),S=n(128),L=n(147);function T(){var e=Object(d.a)(["\n  background: white;\n  padding: 24px;\n"]);return T=function(){return e},e}function A(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return A=function(){return e},e}function M(e){var t=e.shown,n=void 0===t||t,a=e.onClose,c=e.children;return r.a.createElement(W,{open:n,onClose:function(){new Audio("assets/audio/sfx/plink.mp3").play(),a()},closeAfterTransition:!0,BackdropComponent:L.a,BackdropProps:{timeout:500}},r.a.createElement(S.a,{in:n},r.a.createElement(G,null,c)))}var W=Object(h.a)(B.a)(A()),G=h.a.div(T()),z=n(148);function F(e){var t=e.size;return r.a.createElement(z.a,{size:t})}function I(){var e=Object(d.a)(["\n  background-image: linear-gradient(141deg,#ffab63 0%,#46bdca 51%,#4eb2d4 75%);\n  height: 100vh;\n  color: white;\n"]);return I=function(){return e},e}var J=Object(h.a)(y)(I());function _(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),i=Object(u.a)(o,2),l=i[0],s=i[1],f=Object(a.useContext)(je);function p(){return(p=Object(P.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.prev=1,e.next=4,fetch("");case 4:if(200===(t=e.sent).status){e.next=7;break}throw t;case 7:setTimeout((function(){return f(Ee.Battle)}),1500),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0),alert(e.t0);case 14:setTimeout((function(){return s(!1)}),1500);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function d(){return(d=Object(P.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.prev=1,e.next=4,fetch("");case 4:if(200===(t=e.sent).status){e.next=7;break}throw t;case 7:e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0),alert(e.t0);case 13:s(!1);case 14:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return r.a.createElement(J,null,r.a.createElement(q,{shown:n,onClose:function(){c(!1)}}),r.a.createElement("header",null,r.a.createElement("h1",null,"Battle Tent")),l?r.a.createElement(F,null):r.a.createElement("div",null,r.a.createElement(E,{onClick:function(){return p.apply(this,arguments)}},"Find match"),r.a.createElement(E,{disabled:!0,onClick:function(){c(!0),function(){d.apply(this,arguments)}()}},"Invite"),r.a.createElement(E,{onClick:function(){m.signout(),f(Ee.Login)}},"Change name")))}function q(e){var t=e.shown,n=e.onClose;return r.a.createElement(M,{shown:t,onClose:n},"Who do you want to invite?",r.a.createElement(p,null))}var D,N=n(79);!function(e){e[e.ChooseParty=0]="ChooseParty",e[e.ChooseMoves=1]="ChooseMoves"}(D||(D={}));var Q,U=n(77),V=n.n(U)()("http://127.0.0.1:3460");function Y(){return new Promise((function(e,t){setTimeout((function(){return e({data:R})}),2e3)}))}function $(){return new Promise((function(e,t){setTimeout((function(){return e({data:{name:"opponentUsername"}})}),2e3)}))}function H(e){return V.emit(Q.PlayerSelectsPokemon,e),new Promise((function(e,t){setTimeout((function(){return e({})}),2e3)}))}!function(e){e.PlayerSelectsPokemon="player_selects_pokemon"}(Q||(Q={}));var K={name:"Vine Whip",description:"long string",type:"Grass",power:40,accuracy:80,pp:10},R=[{ndex:"001",name:"Bulbasaur",types:["Poison","Grass"],image:"image-url",moves:[K],stats:{}},{ndex:"001",name:"Bulbasaur-2",types:["Poison","Grass"],image:"image-url",moves:[K],stats:{}},{ndex:"001",name:"Bulbasaur-3",types:["Poison","Grass"],image:"image-url",moves:[K],stats:{}}];function X(){var e=Object(d.a)(["\n  font-weight: bold;\n"]);return X=function(){return e},e}function Z(){var e=Object(d.a)(["\n  border: 1px solid white;\n  margin: 8px;\n"]);return Z=function(){return e},e}function ee(){var e=Object(d.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  margin: 16px;\n"]);return ee=function(){return e},e}var te=h.a.div(ee()),ne=h.a.div(Z()),ae=h.a.div(X());function re(e){var t=e.pokemonList,n=e.setActiveStep,c=Object(a.useState)([]),o=Object(u.a)(c,2),i=o[0],l=o[1];function s(){return(s=Object(P.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(i);case 2:(t=e.sent).error?(console.error(t.error),alert("and error occured!")):n(D.ChooseMoves);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",null,r.a.createElement("h5",null,"Choose your Pok\xe9mon"),r.a.createElement(te,null,t.map((function(e){var t=e.ndex,n=e.image,a=e.name,c=e.types;return r.a.createElement(ne,{onClick:function(){return function(e){var t=i.find((function(t){return t===e}))?i.filter((function(t){return t!==e})):[].concat(Object(N.a)(i),[e]);l(t)}(t)},key:t},r.a.createElement("img",{src:n,alt:a}),r.a.createElement(ae,null,r.a.createElement("div",null,a),r.a.createElement("div",null,c)))}))),r.a.createElement(E,{onClick:function(){return s.apply(this,arguments)}},"Battle"))}function ce(){return r.a.createElement("div",null,"ChooseMoves")}function oe(e){var t=e.shown,n=e.onClose,c=Object(a.useContext)(je);return r.a.createElement(M,{shown:t,onClose:n},"Do you really wish to quit?",r.a.createElement(E,{onClick:function(){c(Ee.Lobby)}},"Yes"),r.a.createElement(E,{onClick:n},"No"))}function ue(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: flex-start;\n"]);return ue=function(){return e},e}function ie(){var e=Object(d.a)(["\n  display: inline-block;\n  height: 32px;\n  width: 32px;\n  border-radius: 50%;\n  border: 2px solid white;\n  padding: 16px;\n"]);return ie=function(){return e},e}function le(){var e=Object(d.a)(["\n  display: flex;\n  justify-self: flex-start;\n  justify-content: space-between;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 16px;\n"]);return le=function(){return e},e}function se(){var e=Object(d.a)(["\n  background-image: linear-gradient(141deg,#1294a2 35%,#0a4861 75%);\n  justify-content: flex-start;\n  height: 100vh;\n  color: white;\n"]);return se=function(){return e},e}var fe=Object(h.a)(y)(se()),me=h.a.header(le()),pe=h.a.div(ie()),de=h.a.div(ue());function he(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),i=Object(u.a)(o,2),l=i[0],s=i[1],f=Object(a.useState)(D.ChooseParty),m=Object(u.a)(f,2),p=m[0],d=m[1],h=Object(a.useState)([]),v=Object(u.a)(h,2),b=v[0],j=v[1],g=Object(a.useState)(void 0),y=Object(u.a)(g,2),O=y[0],x=y[1];function w(){return k.apply(this,arguments)}function k(){return(k=Object(P.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$();case 3:t=e.sent,x(t.data),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function B(){return S.apply(this,arguments)}function S(){return(S=Object(P.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y();case 3:t=e.sent,j(t.data),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function L(){function e(){return r.a.createElement(re,{pokemonList:b,setActiveStep:d})}switch(p){case D.ChooseParty:return r.a.createElement(e,null);case D.ChooseMoves:return r.a.createElement(ce,null);default:return r.a.createElement(e,null)}}return Object(a.useEffect)((function(){c(!0),Promise.all([w(),B()]).finally((function(){return c(!1)}))}),[]),r.a.createElement(fe,null,r.a.createElement(oe,{shown:l,onClose:function(){s(!1)}}),r.a.createElement(me,null,r.a.createElement(de,null,r.a.createElement(pe,null),r.a.createElement("div",null,O&&O.name)),r.a.createElement(E,{onClick:function(){s(!0)}},"Quit")),r.a.createElement("main",null,n?r.a.createElement(F,null):r.a.createElement(L,null)))}function ve(){return r.a.createElement(i.a,null,r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/",component:be}),r.a.createElement(l.b,{path:"/about"},r.a.createElement("h3",null,"About")),r.a.createElement(l.a,{to:"/"})," "))}function be(){var e=Object(a.useState)(Ee.Login),t=Object(u.a)(e,2),n=t[0],c=t[1];function o(){switch(n){case Ee.Lobby:return r.a.createElement(_,null);case Ee.Battle:return r.a.createElement(he,null);default:return r.a.createElement(w,null)}}return r.a.createElement(je.Provider,{value:c},r.a.createElement(o,null))}var Ee,je=r.a.createContext((function(){}));function ge(){return r.a.createElement(r.a.StrictMode,null,r.a.createElement(ve,null))}!function(e){e[e.Login=0]="Login",e[e.Lobby=1]="Lobby",e[e.Battle=2]="Battle"}(Ee||(Ee={}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,t,n){e.exports=n(127)},88:function(e,t,n){}},[[83,1,2]]]);
//# sourceMappingURL=main.1002adb2.chunk.js.map