(function(t){function e(e){for(var a,o,c=e[0],i=e[1],l=e[2],s=0,d=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);f&&f(e);while(d.length)d.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},r={app:0},u=[];function c(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-2b2530f7":"9f8785ff","chunk-2d22bcc3":"8a5d2bb6","chunk-5ef15002":"cf6924d0","chunk-702712f2":"f75d03cb","chunk-ab282d12":"14b31e7c","chunk-118a77c4":"0d13483c","chunk-14fbcbca":"ff8a6569","chunk-36e2c478":"e81f8b85","chunk-3ad254fa":"00d19581"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-2b2530f7":1,"chunk-5ef15002":1,"chunk-702712f2":1,"chunk-118a77c4":1,"chunk-14fbcbca":1,"chunk-36e2c478":1,"chunk-3ad254fa":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-2b2530f7":"fd79da1b","chunk-2d22bcc3":"31d6cfe0","chunk-5ef15002":"9c475140","chunk-702712f2":"71f72053","chunk-ab282d12":"31d6cfe0","chunk-118a77c4":"a79db7e7","chunk-14fbcbca":"6e697bf8","chunk-36e2c478":"fcf3dc4d","chunk-3ad254fa":"998563fb"}[t]+".css",r=i.p+a,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var l=u[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===a||s===r))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],s=l.getAttribute("data-href");if(s===a||s===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||r,u=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=a,delete o[t],f.parentNode.removeChild(f),n(u)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var u=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(t);var d=new Error;l=function(e){s.onerror=s.onload=null,clearTimeout(f);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}r[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=s;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1dff":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return r}));var a={},o={},r={app:{appName:"Spotnik",appLogoImage:n("ed29")},layout:{isRTL:!1,skin:"dark",routerTransition:"zoom-fade",type:"vertical",contentWidth:"full",menu:{hidden:!1,isCollapsed:!0},navbar:{type:"sticky",backgroundColor:"",PanelTitleBackgroundColor:"primary"},footer:{type:"sticky"},customizer:!0,enableScrollToTop:!0}}},4131:function(t,e,n){},4360:function(t,e,n){"use strict";var a=n("2b0e"),o=n("2f62"),r=n("1dff"),u={namespaced:!0,state:{windowWidth:0,shallShowOverlay:!1},getters:{currentBreakPoint:function(t){var e=t.windowWidth;return e>=r["a"].xl?"xl":e>=r["a"].lg?"lg":e>=r["a"].md?"md":e>=r["a"].sm?"sm":"xs"}},mutations:{UPDATE_WINDOW_WIDTH:function(t,e){t.windowWidth=e},TOGGLE_OVERLAY:function(t,e){t.shallShowOverlay=void 0!==e?e:!t.shallShowOverlay}},actions:{}},c=(n("ac1f"),n("466d"),{namespaced:!0,state:{layout:{isRTL:r["c"].layout.isRTL,skin:localStorage.getItem("spotnik-skin")||r["c"].layout.skin,routerTransition:r["c"].layout.routerTransition,type:r["c"].layout.type,contentWidth:r["c"].layout.contentWidth,menu:{hidden:r["c"].layout.menu.hidden},navbar:{type:r["c"].layout.navbar.type,backgroundColor:r["c"].layout.navbar.backgroundColor,PanelTitleBackgroundColor:r["c"].layout.navbar.PanelTitleBackgroundColor},footer:{type:r["c"].layout.footer.type}}},getters:{},mutations:{TOGGLE_RTL:function(t){t.layout.isRTL=!t.layout.isRTL,document.documentElement.setAttribute("dir",t.layout.isRTL?"rtl":"ltr")},UPDATE_SKIN:function(t,e){t.layout.skin=e,localStorage.setItem("spotnik-skin",e),"dark"===e?document.body.classList.add("dark-layout"):document.body.className.match("dark-layout")&&document.body.classList.remove("dark-layout")},UPDATE_ROUTER_TRANSITION:function(t,e){t.layout.routerTransition=e},UPDATE_LAYOUT_TYPE:function(t,e){t.layout.type=e},UPDATE_CONTENT_WIDTH:function(t,e){t.layout.contentWidth=e},UPDATE_NAV_MENU_HIDDEN:function(t,e){t.layout.menu.hidden=e},UPDATE_NAVBAR_CONFIG:function(t,e){Object.assign(t.layout.navbar,e)},UPDATE_FOOTER_CONFIG:function(t,e){Object.assign(t.layout.footer,e)}},actions:{}}),i={namespaced:!0,state:{isVerticalMenuCollapsed:r["c"].layout.menu.isCollapsed},getters:{},mutations:{UPDATE_VERTICAL_MENU_COLLAPSED:function(t,e){t.isVerticalMenuCollapsed=e}},actions:{}};a["default"].use(o["a"]);e["a"]=new o["a"].Store({modules:{app:u,appConfig:c,verticalMenu:i},strict:Object({NODE_ENV:"production",VUE_APP_ACCESS_TOKEN:"pk.eyJ1IjoiZmFyaGFkbmF3YWIiLCJhIjoiY2wyYjdzbzg4MGF4aTNqbGY1YTFkbm5hOSJ9.4H3MemKeDkpmaXFqGwZkdQ",BASE_URL:"/"}).DEV})},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a,o,r=n("2b0e"),u=n("51c2"),c=n("dbbe"),i=n("5f5b"),l=n("e009"),s=n("ed09"),d=n("a18c"),f=n("4360"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-100",class:[t.skinClasses],attrs:{id:"app"}},[n(t.layout,{tag:"component"},[n("router-view")],1)],1)},m=[],b=(n("d3b7"),n("3ca3"),n("ddb0"),n("498a"),n("a9e3"),n("fb6a"),n("1dff")),h=n("04b0"),y=n("b8f2"),g=n("16ce"),k=function(){return n.e("chunk-5ef15002").then(n.bind(null,"03d1"))},v=function(){return Promise.all([n.e("chunk-ab282d12"),n.e("chunk-3ad254fa")]).then(n.bind(null,"2607"))},T=function(){return n.e("chunk-2d22bcc3").then(n.bind(null,"f102"))},O={components:{LayoutHorizontal:v,LayoutVertical:k,LayoutFull:T},computed:{layout:function(){return"full"===this.$route.meta.layout?"layout-full":"layout-".concat(this.contentLayoutType)},contentLayoutType:function(){return this.$store.state.appConfig.layout.type}},beforeCreate:function(){for(var t=["primary","secondary","success","info","warning","danger","light","dark"],e=0,n=t.length;e<n;e++)b["b"][t[e]]=Object(g["a"])("--".concat(t[e]),document.documentElement).value.trim();for(var a=["xs","sm","md","lg","xl"],o=0,r=a.length;o<r;o++)b["a"][a[o]]=Number(Object(g["a"])("--breakpoint-".concat(a[o]),document.documentElement).value.slice(0,-2));var u=b["c"].layout.isRTL;document.documentElement.setAttribute("dir",u?"rtl":"ltr")},setup:function(){var t=Object(y["a"])(),e=t.skin,n=t.skinClasses;"dark"===e.value&&document.body.classList.add("dark-layout"),Object(h["provideToast"])({hideProgressBar:!0,closeOnClick:!1,closeButton:!1,icon:!1,timeout:3e3,transition:"Vue-Toastification__fade"}),f["a"].commit("app/UPDATE_WINDOW_WIDTH",window.innerWidth);var a=Object(g["b"])(),o=a.width;return Object(s["watch"])(o,(function(t){f["a"].commit("app/UPDATE_WINDOW_WIDTH",t)})),{skinClasses:n}}},C=O,E=n("2877"),_=Object(E["a"])(C,p,m,!1,null,null,null),A=_.exports,P=(n("b0c0"),n("5530")),N=n("0a35"),j={name:"FeatherIcon",functional:!0,props:{icon:{required:!0,type:[String,Object]},size:{type:String,default:"14"},badge:{type:[String,Object,Number],default:null},badgeClasses:{type:[String,Object,Array],default:"badge-primary"}},render:function(t,e){var n=e.props,a=e.data,o=t(N[n.icon],Object(P["a"])({props:{size:n.size}},a));if(!n.badge)return o;var r=t("span",{staticClass:"badge badge-up badge-pill",class:n.badgeClasses},[n.badge]);return t("span",{staticClass:"feather-icon position-relative"},[o,r])}},D=j,L=(n("8bd0"),Object(E["a"])(D,a,o,!1,null,null,null)),w=L.exports;r["default"].component(w.name,w);var I=n("2b88"),U=n.n(I);r["default"].use(U.a);var S=n("6c42");n("cc0f");r["default"].use(S["default"],{hideProgressBar:!0,closeOnClick:!1,closeButton:!1,icon:!1,timeout:3e3,transition:"Vue-Toastification__fade"}),r["default"].use(u["a"]),r["default"].use(c["a"]),r["default"].use(i["a"]),r["default"].use((function(){r["default"].directive("ripple",l["a"])})),r["default"].use(s["default"]),n("4131"),n("78a7"),r["default"].config.productionTip=!1,new r["default"]({router:d["a"],store:f["a"],render:function(t){return t(A)}}).$mount("#app")},"602d4":function(t,e,n){},"78a7":function(t,e,n){},"8bd0":function(t,e,n){"use strict";n("602d4")},a18c:function(t,e,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0");var a=n("2b0e"),o=n("8c4f");a["default"].use(o["a"]);var r=new o["a"]({mode:"history",base:"/",scrollBehavior:function(){return{x:0,y:0}},routes:[{path:"/home",name:"home",component:function(){return Promise.all([n.e("chunk-ab282d12"),n.e("chunk-118a77c4"),n.e("chunk-36e2c478")]).then(n.bind(null,"9553"))},meta:{pageTitle:"Home",breadcrumb:[{text:"Home",active:!0}]}},{path:"/environment",name:"environment",component:function(){return Promise.all([n.e("chunk-ab282d12"),n.e("chunk-118a77c4"),n.e("chunk-14fbcbca")]).then(n.bind(null,"52ff"))},meta:{pageTitle:"Environment",breadcrumb:[{text:"Environment Page",active:!0}]}},{path:"/",name:"login",component:function(){return n.e("chunk-702712f2").then(n.bind(null,"a55b"))},meta:{layout:"full"}},{path:"/error-404",name:"error-404",component:function(){return n.e("chunk-2b2530f7").then(n.bind(null,"d80f"))},meta:{layout:"full"}},{path:"*",redirect:"error-404"}]});r.afterEach((function(){var t=document.getElementById("loading-bg");t&&(t.style.display="none")})),e["a"]=r},b8f2:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n("ed09"),o=n("4360");function r(){var t=Object(a["computed"])({get:function(){return o["a"].state.verticalMenu.isVerticalMenuCollapsed},set:function(t){o["a"].commit("verticalMenu/UPDATE_VERTICAL_MENU_COLLAPSED",t)}}),e=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.isRTL},set:function(t){o["a"].commit("appConfig/TOGGLE_RTL",t)}}),n=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.skin},set:function(t){o["a"].commit("appConfig/UPDATE_SKIN",t)}}),r=Object(a["computed"])((function(){return"bordered"===n.value?"bordered-layout":"semi-dark"===n.value?"semi-dark-layout":null})),u=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.routerTransition},set:function(t){o["a"].commit("appConfig/UPDATE_ROUTER_TRANSITION",t)}}),c=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.type},set:function(t){o["a"].commit("appConfig/UPDATE_LAYOUT_TYPE",t)}});Object(a["watch"])(c,(function(t){"horizontal"===t&&"semi-dark"===n.value&&(n.value="light")}));var i=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.contentWidth},set:function(t){o["a"].commit("appConfig/UPDATE_CONTENT_WIDTH",t)}}),l=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.menu.hidden},set:function(t){o["a"].commit("appConfig/UPDATE_NAV_MENU_HIDDEN",t)}}),s=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.navbar.backgroundColor},set:function(t){o["a"].commit("appConfig/UPDATE_NAVBAR_CONFIG",{backgroundColor:t})}}),d=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.navbar.PanelTitleBackgroundColor},set:function(t){o["a"].commit("appConfig/UPDATE_NAVBAR_CONFIG",{PanelTitleBackgroundColor:t})}}),f=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.navbar.type},set:function(t){o["a"].commit("appConfig/UPDATE_NAVBAR_CONFIG",{type:t})}}),p=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.footer.type},set:function(t){o["a"].commit("appConfig/UPDATE_FOOTER_CONFIG",{type:t})}});return{isVerticalMenuCollapsed:t,isRTL:e,skin:n,skinClasses:r,routerTransition:u,navbarBackgroundColor:s,navbarType:f,navbarPanelTitleBackgroundColor:d,footerType:p,layoutType:c,contentWidth:i,isNavMenuHidden:l}}},cc0f:function(t,e,n){},ed29:function(t,e,n){t.exports=n.p+"img/logo.36f34a9f.svg"}});
//# sourceMappingURL=app.5954522f.js.map