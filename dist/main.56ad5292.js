!function(e){function t(t){for(var r,a,c=t[0],s=t[1],l=t[2],d=0,m=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(u&&u(t);m.length;)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={0:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=function(e){return a.p+"templates/"+({1:"src/routes/companies/Companies",2:"src/routes/contact/Contact",3:"src/routes/home/Home",4:"src/routes/news/News",5:"src/routes/notFound/NotFound",6:"src/routes/team/Team",9:"vendors~src/routes/home/Home",10:"vendors~src/routes/team/Team"}[e]||e)+"."+{1:"5de0f570",2:"e4cec4c1",3:"4389a5ac",4:"95dc68eb",5:"b1e72842",6:"b77c1b0b",9:"4ecb333a",10:"d897ed42"}[e]+".js"}(e);var s=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;i.push([67,7,8]),n()}({11:function(e,t,n){"use strict";var r=n(19);n.d(t,"a",(function(){return r.Link})),n.d(t,"b",(function(){return r.Router})),n.d(t,"c",(function(){return r.useLocation}))},125:function(e,t,n){var r={".":18,"./":18,"./index":18,"./index.js":18};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=125},132:function(e,t,n){"use strict";n.r(t),function(e){var r=n(0),o=n.n(r),i=n(34),a=n.n(i),c=n(60),s=n(26);if(t.default=s.a,"undefined"!=typeof document){var l=document.getElementById("root"),u=l.hasChildNodes()?a.a.hydrate:a.a.render,d=function(e){u(o.a.createElement(c.AppContainer,null,o.a.createElement(e,null)),l)};d(s.a),e&&e.hot&&e.hot.accept("./App",(function(){d(s.a)}))}}.call(this,n(133)(e))},14:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return u}));var r=n(20),o=n.n(r),i=n(0);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={isMobile:!0},l=function(e,t){switch(t.type){case"setDesktopLayout":return c(c({},e),{},{isMobile:!1});case"setMobileLayout":return c(c({},e),{},{isMobile:!0});default:return e}},u=n.n(i).a.createContext()},2:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={nearly_black:"#0b1500",grey_1:"#4f4f4f",grey_2:"rgba(79,79,79,.4)",grey_3:"#f3f4f1",grey_4:"#b6bdac",grey_5:"#dce0d4",charcoal_1:"#19160f",green_1:"#39452c",green_2:"#526041",white:"#ffffff",off_white:"#dce0d4"}},26:function(e,t,n){"use strict";var r=n(8),o=n.n(r),i=n(0),a=n.n(i),c=n(23),s=n(11),l=n(20),u=n.n(l),d=n(4),m=n(2),p=d.a.header.withConfig({displayName:"headerstyle__HeaderWrapper",componentId:"sc-194jji1-0"})(["background-color:",";position:fixed;top:0;left:0;width:100%;z-index:200;"],m.a.white),f=d.a.div.withConfig({displayName:"headerstyle__SiteHeader",componentId:"sc-194jji1-1"})(["align-items:center;display:flex;justify-content:center;max-width:1400px;margin:0 auto;padding:15px 60px;width:100%;height:50px;@media (min-width:641px){justify-content:space-between;height:63px;}@media (min-width:1400px){padding:15px 20px;}"]),h=d.a.button.withConfig({displayName:"headerstyle__Open",componentId:"sc-194jji1-2"})(["background:none;border:none;position:absolute;left:10px;top:14px;&:focus{outline:none;}"]),g=d.a.img.withConfig({displayName:"headerstyle__LogoImg",componentId:"sc-194jji1-3"})(["max-width:80px;@media (min-width:641px){max-width:120px;}"]),v=d.a.nav.withConfig({displayName:"headerstyle__Nav",componentId:"sc-194jji1-4"})(["&.desktop-nav{:hover a{color:",";}a:hover{color:",";}display:none;}@media (min-width:641px){&.desktop-nav{display:block;}}&.mobile-nav{background-color:",";display:flex;flex-direction:column;height:100%;left:-100%;padding:2em 0 2em 0;position:fixed;top:0;transition:transform 170ms ease-in-out;width:100%;z-index:100;a{font-size:2em;font-weight:300;padding:0 1em .618em 1em;}&.open{transform:translateX(100%);}}"],m.a.grey_2,m.a.grey_1,m.a.white),b=Object(d.a)(s.a).withConfig({displayName:"headerstyle__StyledLink",componentId:"sc-194jji1-5"})(["color:",";display:inline-block;font-size:18px;font-weight:500;padding:.618em;text-decoration:none;transition:color 170ms ease-in-out;"],m.a.nearly_black),y=d.a.button.withConfig({displayName:"headerstyle__Close",componentId:"sc-194jji1-6"})(["color:",";background-color:",";border:none;padding:1.5em;position:absolute;right:0;top:0;&:focus{outline:none;}"],m.a.grey_1,m.a.grey_3);n(13);function w(e){var t=e.nav.map((function(e){return a.a.createElement(b,{to:e.link,key:e.link},e.name)}));return a.a.createElement(v,{className:"desktop-nav"},t)}function x(e){var t=e.height,n=void 0===t?"15px":t,r=e.width,o=void 0===r?"15px":r,i=e.stroke,c=void 0===i?"black":i;return a.a.createElement("svg",{viewBox:"0 0 16 16",height:n,width:o},a.a.createElement("line",{fill:"none",stroke:c,strokeMiterlimit:"10",x1:"1.4",y1:"1.4",x2:"14.4",y2:"14.4"}),a.a.createElement("line",{fill:"none",stroke:c,strokeMiterlimit:"10",x1:"1.4",y1:"14.4",x2:"14.4",y2:"1.4"}))}function k(e){var t=e.handleClose,n=e.nav,r=e.showNav,o=n.map((function(e){return a.a.createElement(b,{to:e.link,key:e.link,onClick:t},e.name)}));return a.a.createElement(v,{className:"mobile-nav".concat(r?" open":"")},a.a.createElement(y,{"aria-label":"Close Nav Menu",title:"Close Nav Menu",onClick:t},a.a.createElement(x,null)),a.a.createElement(b,{to:"/",onClick:t},"Home"),o)}function j(e){var t=e.height,n=void 0===t?"24px":t,r=e.width,o=void 0===r?"18px":r,i=e.stroke,c=void 0===i?"black":i;return a.a.createElement("svg",{viewBox:"0 0 24 18",height:n,width:o},a.a.createElement("line",{fill:"none",stroke:c,strokeMiterlimit:"10",x1:"0",y1:"2",x2:"24",y2:"2"}),a.a.createElement("line",{fill:"none",stroke:c,strokeMiterlimit:"10",x1:"0",y1:"9",x2:"24",y2:"9"}),a.a.createElement("line",{fill:"none",stroke:c,strokeMiterlimit:"10",x1:"0",y1:"16",x2:"24",y2:"16"}))}w.defaultProps={nav:[]};var E=[{name:"Companies",link:"/companies"},{name:"Team",link:"/team"},{name:"News",link:"/news"},{name:"Contact",link:"/contact"}],O=n(14);function _(e){var t=e.width,n=void 0===t?"24":t,r=e.height,o=void 0===r?"24":r;return a.a.createElement("svg",{width:n,height:o,viewBox:"0 0 24 24"},a.a.createElement("path",{fill:"white",d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 18h-2v-8h2v8zm-1-12.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25z"}))}var N=Object(d.a)(f).withConfig({displayName:"Banner__StyledBanner",componentId:"bcqd25-0"})(["padding:30px;height:auto;color:#ffffff;background-color:",";font-size:1.1rem;max-width:100%;.icon-wrapper{padding-right:20px;height:24px;}.banner-text{margin:0;a{color:",";line-height:1.4;color:#ffffff;}}@media (min-width:641px){justify-content:center;height:auto;}@media (min-width:1400px){padding:40px;font-size:1.3rem;}"],m.a.green_1,m.a.nearly_black),C=function(e){var t=e.text,n=e.link;return a.a.createElement(N,null,a.a.createElement("div",{className:"icon-wrapper"},a.a.createElement(_,null)),a.a.createElement("p",{className:"banner-text"},a.a.createElement("a",{href:n},t)))};function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(){var e=Object(i.useContext)(O.a),t=e.store,n=e.dispatch,r=Object(i.useState)({showNav:!1,windowWidth:null}),c=o()(r,2),l=c[0],u=c[1];Object(i.useEffect)((function(){var e=function(){u(M(M({},l),{},{windowWidth:window.innerWidth}))};e(),window.onresize=function(){var t;clearTimeout(t),t=setTimeout(e,100)}}),[]),Object(i.useEffect)((function(){t.isMobile&&l.windowWidth>640?n({type:"setDesktopLayout"}):!t.isMobile&&l.windowWidth&&l.windowWidth<=640&&n({type:"setMobileLayout"})}),[l.windowWidth]);var d=function(){u(M(M({},l),{},{showNav:!l.showNav}))};return a.a.createElement(p,null,a.a.createElement(f,{id:"siteHeader"},t.isMobile&&a.a.createElement(h,{onClick:d,"aria-label":"hamburger menu",title:"hamburger menu"},a.a.createElement(j,{className:"hamburger-icon",width:24,height:18})),a.a.createElement(s.a,{to:"/"},a.a.createElement(g,{src:"/img/medici-ventures-logo.png",alt:"Medici Ventures Logo"})),t.isMobile?a.a.createElement(k,{handleClose:d,nav:E,showNav:l.showNav}):a.a.createElement(w,{nav:E})),a.a.createElement(C,{text:"Overstock Partners with Pelion Venture Partners to Oversee Medici Ventures’ Blockchain Assets",link:"https://investors.overstock.com/news-releases/news-release-details/overstock-partners-pelion-venture-partners-oversee-medici"}))}var F=d.a.footer.withConfig({displayName:"footerstyle__MainFooter",componentId:"sc-1pui8ac-0"})(["background:"," url(",") center right no-repeat;background-size:cover;color:",";flex-direction:column;padding:65px 0;display:flex;justify-content:center;.footer-logo-link{text-align:center;}a{color:",";}@media (min-width:1000px){align-items:center;background-size:contain;flex-direction:row;justify-content:left;padding:30px 0;}"],m.a.green_1,"/img/footer-blocks-green.png",m.a.white,m.a.grey_4),I=d.a.img.withConfig({displayName:"footerstyle__FooterLogo",componentId:"sc-1pui8ac-1"})(["max-height:34px;align-self:center;@media (min-width:1000px){margin:0 50px;max-height:23px;}@media (min-width:1201px){max-height:30px;}"]),L=d.a.nav.withConfig({displayName:"footerstyle__FooterNav",componentId:"sc-1pui8ac-2"})(['font-size:12px;padding:25px 0;display:flex;justify-content:center;a{margin:10px;text-decoration:none;:hover{text-decoration:underline;}}@media (min-width:451px){a{display:inline-block;position:relative;margin:20px;&:after{content:"";background-color:',";display:block;height:36px;position:absolute;top:-10px;right:-20px;;width:1px;}&:last-child:after{background:none;}}}"],m.a.grey_4),z=d.a.div.withConfig({displayName:"footerstyle__Copyright",componentId:"sc-1pui8ac-3"})(["font-size:16px;margin:0 50px;text-align:center;@media (min-width:1000px){margin-left:auto;}"]);function S(){var e=E.map((function(e){return a.a.createElement("a",{href:e.link,key:e.link},e.name)}));return a.a.createElement(F,null,a.a.createElement(s.a,{to:"/",className:"footer-logo-link"},a.a.createElement(I,{src:"/img/medici-logo-reversed.png",alt:"Medici Ventures Logo"})),a.a.createElement(L,null,e),a.a.createElement(z,null,"Copyright © Medici Ventures Inc. 2020"))}function D(e){return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e.location.pathname]),e.children}var H,B=function(e,t){return function(t,n){var r=e(t,n);return r}},W=(n(137),"undefined"!=typeof window?null===(H=window)||void 0===H?void 0:H.__INITIAL_STATE__:O.b),A=B(O.c,W,"Medici Global Context");t.a=function(){var e=Object(i.useReducer)(A,O.b),t=o()(e,2),n=t[0],r=t[1];return a.a.createElement(c.Root,null,a.a.createElement(O.a.Provider,{value:{store:n,dispatch:r}},a.a.createElement(T,null),a.a.createElement("div",{className:"content"},a.a.createElement(a.a.Suspense,{fallback:a.a.createElement("em",null,"Loading...")},a.a.createElement(s.b,{primary:!1},a.a.createElement(D,{path:"/"},a.a.createElement(c.Routes,{path:"*"}))))),a.a.createElement(S,null)))}},38:function(e,t,n){"use strict";n.r(t);var r=n(56),o=[{location:"../node_modules/react-static-plugin-reach-router",plugins:[],hooks:n.n(r)()({})},{location:"../node_modules/react-static-plugin-sitemap/dist",plugins:[],hooks:{}},{location:"../node_modules/react-static-plugin-styled-components",plugins:[],hooks:{}},{location:"..",plugins:[],hooks:{}}];t.default=o},54:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"notFoundTemplate",(function(){return b}));var r=n(6),o=n.n(r),i=n(7),a=n.n(i),c=n(0),s=n.n(c),l=n(9),u=n.n(l);Object(l.setHasBabelPlugin)();var d={loading:function(){return null},error:function(e){return console.error(e.error),s.a.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")},ignoreBabelRename:!0},m=u()(a()({id:"../src/routes/notFound/NotFound",load:function(){return Promise.all([n.e(5).then(n.bind(null,66))]).then((function(e){return e[0]}))},path:function(){return o.a.join(e,"../src/routes/notFound/NotFound")},resolve:function(){return 66},chunkName:function(){return"src/routes/notFound/NotFound"}}),d);m.template="../src/routes/notFound/NotFound";var p=u()(a()({id:"../src/routes/home/Home",load:function(){return Promise.all([Promise.all([n.e(9),n.e(3)]).then(n.bind(null,64))]).then((function(e){return e[0]}))},path:function(){return o.a.join(e,"../src/routes/home/Home")},resolve:function(){return 64},chunkName:function(){return"src/routes/home/Home"}}),d);p.template="../src/routes/home/Home";var f=u()(a()({id:"../src/routes/companies/Companies",load:function(){return Promise.all([n.e(1).then(n.bind(null,61))]).then((function(e){return e[0]}))},path:function(){return o.a.join(e,"../src/routes/companies/Companies")},resolve:function(){return 61},chunkName:function(){return"src/routes/companies/Companies"}}),d);f.template="../src/routes/companies/Companies";var h=u()(a()({id:"../src/routes/team/Team",load:function(){return Promise.all([Promise.all([n.e(10),n.e(6)]).then(n.bind(null,62))]).then((function(e){return e[0]}))},path:function(){return o.a.join(e,"../src/routes/team/Team")},resolve:function(){return 62},chunkName:function(){return"src/routes/team/Team"}}),d);h.template="../src/routes/team/Team";var g=u()(a()({id:"../src/routes/news/News",load:function(){return Promise.all([n.e(4).then(n.bind(null,65))]).then((function(e){return e[0]}))},path:function(){return o.a.join(e,"../src/routes/news/News")},resolve:function(){return 65},chunkName:function(){return"src/routes/news/News"}}),d);g.template="../src/routes/news/News";var v=u()(a()({id:"../src/routes/contact/Contact",load:function(){return Promise.all([n.e(2).then(n.bind(null,63))]).then((function(e){return e[0]}))},path:function(){return o.a.join(e,"../src/routes/contact/Contact")},resolve:function(){return 63},chunkName:function(){return"src/routes/contact/Contact"}}),d);v.template="../src/routes/contact/Contact",t.default={"../src/routes/notFound/NotFound":m,"../src/routes/home/Home":p,"../src/routes/companies/Companies":f,"../src/routes/team/Team":h,"../src/routes/news/News":g,"../src/routes/contact/Contact":v};var b="../src/routes/notFound/NotFound"}.call(this,"/")},67:function(e,t,n){n(68),n(123),e.exports=n(129)}});