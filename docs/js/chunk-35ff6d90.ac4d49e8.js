(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35ff6d90"],{"03d1":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vertical-layout h-100",class:[e.layoutClasses],attrs:{"data-col":e.isNavMenuHidden?"1-column":null}},[a("b-navbar",{staticClass:"header-navbar navbar navbar-shadow align-items-center",class:[e.navbarTypeClass],attrs:{toggleable:!1,variant:e.navbarBackgroundColor}},[a("app-navbar",{attrs:{"toggle-vertical-menu-active":e.toggleCollapsed}})],1),a("vertical-nav-menu",{attrs:{"is-vertical-menu-active":e.isVerticalMenuActive,"toggle-vertical-menu-active":e.toggleVerticalMenuActive},scopedSlots:e._u([{key:"header",fn:function(t){return[e._t("vertical-menu-header",null,null,t)]}}],null,!0)}),a("div",{staticClass:"sidenav-overlay",class:e.overlayClasses,on:{click:function(t){e.isVerticalMenuActive=!1}}}),a("transition",{attrs:{name:e.routerTransition,mode:"out-in"}},[a(e.layoutContentRenderer,{key:"layout-content-renderer-left"===e.layoutContentRenderer?e.$route.meta.navActiveLink||e.$route.name:null,tag:"component",scopedSlots:e._u([{key:"breadcrumb",fn:function(){return[a("div")]},proxy:!0},e._l(e.$scopedSlots,(function(t,a){return{key:a,fn:function(t){return[e._t(a,null,null,t)]}}}))],null,!0)})],1),e._t("customizer")],2)},r=[],i=a("ed09"),s=a("62cb"),l=a("b8f2"),o=a("d0b9"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-content content",class:[{"show-overlay":e.$store.state.app.shallShowOverlay},e.$route.meta.contentClass]},[a("div",{staticClass:"content-overlay"}),a("div",{staticClass:"header-navbar-shadow"}),a("div",{staticClass:"content-wrapper",class:"boxed"===e.contentWidth?"container p-0":null},[e._t("breadcrumb",(function(){return[a("app-breadcrumb")]})),a("div",{staticClass:"content-body"},[a("transition",{attrs:{name:e.routerTransition,mode:"out-in"}},[e._t("default")],2)],1)],2)])},u=[],d=a("3033"),v={components:{AppBreadcrumb:d["a"]},setup:function(){var e=Object(l["a"])(),t=e.routerTransition,a=e.contentWidth;return{routerTransition:t,contentWidth:a}}},p=v,m=a("2877"),b=Object(m["a"])(p,c,u,!1,null,null,null),f=b.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-content content",class:[{"show-overlay":e.$store.state.app.shallShowOverlay},e.$route.meta.contentClass]},[a("div",{staticClass:"content-overlay"}),a("div",{staticClass:"header-navbar-shadow"}),a("transition",{attrs:{name:e.routerTransition,mode:"out-in"}},[a("div",{staticClass:"content-area-wrapper",class:"boxed"===e.contentWidth?"container p-0":null},[e._t("breadcrumb",(function(){return[a("app-breadcrumb")]})),a("portal-target",{attrs:{name:"content-renderer-sidebar-left",slim:""}}),a("div",{staticClass:"content-right"},[a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"content-body"},[e._t("default")],2)])])],2)])],1)},g=[],C={components:{AppBreadcrumb:d["a"]},setup:function(){var e=Object(l["a"])(),t=e.routerTransition,a=e.contentWidth;return{routerTransition:t,contentWidth:a}}},O=C,M=Object(m["a"])(O,h,g,!1,null,null,null),y=M.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-content content",class:[{"show-overlay":e.$store.state.app.shallShowOverlay},e.$route.meta.contentClass]},[a("div",{staticClass:"content-overlay"}),a("div",{staticClass:"header-navbar-shadow"}),a("transition",{attrs:{name:e.routerTransition,mode:"out-in"}},[a("div",{staticClass:"content-wrapper clearfix",class:"boxed"===e.contentWidth?"container p-0":null},[e._t("breadcrumb",(function(){return[a("app-breadcrumb")]})),a("div",{staticClass:"content-detached content-right"},[a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"content-body"},[e._t("default")],2)])]),a("portal-target",{attrs:{name:"content-renderer-sidebar-detached-left",slim:""}})],2)])],1)},j=[],V={components:{AppBreadcrumb:d["a"]},setup:function(){var e=Object(l["a"])(),t=e.routerTransition,a=e.contentWidth;return{routerTransition:t,contentWidth:a}}},_=V,k=Object(m["a"])(_,w,j,!1,null,null,null),A=k.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-menu menu-fixed menu-accordion menu-shadow",class:[{expanded:!e.isVerticalMenuCollapsed||e.isVerticalMenuCollapsed&&e.isMouseHovered},"semi-dark"===e.skin?"menu-dark":"menu-light"]},[a("div",{staticClass:"navbar-header expanded"},[e._t("header",(function(){return[a("ul",{staticClass:"nav navbar-nav flex-row"},[a("li",{staticClass:"nav-item mr-auto"},[a("b-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[a("span",{staticClass:"brand-logo"},[a("b-img",{attrs:{src:e.appLogoImage,alt:"logo"}})],1),a("h2",{staticClass:"brand-text"},[e._v(" "+e._s(e.appName)+" ")])])],1),a("li",{staticClass:"nav-item nav-toggle"},[a("b-link",{staticClass:"nav-link modern-nav-toggle"},[a("feather-icon",{staticClass:"d-block d-xl-none",attrs:{icon:"XIcon",size:"20"},on:{click:e.toggleVerticalMenuActive}}),a("feather-icon",{staticClass:"d-none d-xl-block collapse-toggle-icon",attrs:{icon:e.collapseTogglerIconFeather,size:"20"},on:{click:e.toggleCollapsed}})],1)],1)])]}),{toggleVerticalMenuActive:e.toggleVerticalMenuActive,toggleCollapsed:e.toggleCollapsed,collapseTogglerIcon:e.collapseTogglerIcon})],2),a("div",{staticClass:"shadow-bottom",class:{"d-block":e.shallShadowBottom}}),a("vue-perfect-scrollbar",{staticClass:"main-menu-content scroll-area",attrs:{settings:e.perfectScrollbarSettings,tagname:"ul"},on:{"ps-scroll-y":function(t){e.shallShadowBottom=t.srcElement.scrollTop>0}}},[a("vertical-nav-menu-items",{staticClass:"navigation navigation-main",attrs:{items:e.navMenuItems}})],1)],1)},I=[],T=a("e1d9"),N=a("9d63"),L=a.n(N),$=a("aa59"),B=a("4918"),H=a("1dff"),S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",e._l(e.items,(function(t){return a(e.resolveNavItemComponent(t),{key:t.header||t.title,tag:"component",attrs:{item:t}})})),1)},E=[],W=a("5959"),G=a("42cb"),z=a("185c"),P=Object(G["a"])(),R=P.t,q=Object(z["a"])(),D=q.canViewVerticalNavMenuHeader,F={props:{item:{type:Object,required:!0}},render:function(e){var t=e("span",{},R(this.item.header)),a=e("feather-icon",{props:{icon:"MoreHorizontalIcon",size:"18"}});return D(this.item)?e("li",{class:"navigation-header text-truncate"},[t,a]):e()}},U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.canViewVerticalNavMenuLink(e.item)?a("li",{staticClass:"nav-item",class:{active:e.isActive,disabled:e.item.disabled}},[a("b-link",e._b({staticClass:"d-flex align-items-center"},"b-link",e.linkProps,!1),[a("feather-icon",{attrs:{icon:e.item.icon||"CircleIcon"}}),a("span",{staticClass:"menu-title text-truncate"},[e._v(e._s(e.t(e.item.title)))]),e.item.tag?a("b-badge",{staticClass:"mr-1 ml-auto",attrs:{pill:"",variant:e.item.tagVariant||"primary"}},[e._v(" "+e._s(e.item.tag)+" ")]):e._e()],1)],1):e._e()},J=[],X=a("e98b");function K(e){var t=Object(i["ref"])(!1),a=Object(W["c"])(e),n=function(){t.value=Object(W["b"])(e)};return{isActive:t,linkProps:a,updateIsActive:n}}var Q={watch:{$route:{immediate:!0,handler:function(){this.updateIsActive()}}}},Y={components:{BLink:$["a"],BBadge:X["a"]},mixins:[Q],props:{item:{type:Object,required:!0}},setup:function(e){var t=K(e.item),a=t.isActive,n=t.linkProps,r=t.updateIsActive,i=Object(G["a"])(),s=i.t,l=Object(z["a"])(),o=l.canViewVerticalNavMenuLink;return{isActive:a,linkProps:n,updateIsActive:r,canViewVerticalNavMenuLink:o,t:s}}},Z=Y,ee=Object(m["a"])(Z,U,J,!1,null,null,null),te=ee.exports,ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.canViewVerticalNavMenuGroup(e.item)?a("li",{staticClass:"nav-item has-sub",class:{open:e.isOpen,disabled:e.item.disabled,"sidebar-group-active":e.isActive}},[a("b-link",{staticClass:"d-flex align-items-center",on:{click:function(){return e.updateGroupOpen(!e.isOpen)}}},[a("feather-icon",{attrs:{icon:e.item.icon||"CircleIcon"}}),a("span",{staticClass:"menu-title text-truncate"},[e._v(e._s(e.t(e.item.title)))]),e.item.tag?a("b-badge",{staticClass:"mr-1 ml-auto",attrs:{pill:"",variant:e.item.tagVariant||"primary"}},[e._v(" "+e._s(e.item.tag)+" ")]):e._e()],1),a("b-collapse",{staticClass:"menu-content",attrs:{tag:"ul"},model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}},e._l(e.item.children,(function(t){return a(e.resolveNavItemComponent(t),{key:t.header||t.title,ref:"groupChild",refInFor:!0,tag:"component",attrs:{item:t}})})),1)],1):e._e()},ne=[],re=a("5843"),ie=(a("d3b7"),a("4360"));function se(e){var t=Object(i["computed"])((function(){return ie["a"].state.verticalMenu.isVerticalMenuCollapsed}));Object(i["watch"])(t,(function(e){a.value||(e?r.value=!1:!e&&l.value&&(r.value=!0))}));var a=Object(i["inject"])("isMouseHovered");Object(i["watch"])(a,(function(e){t.value&&(r.value=e&&l.value)}));var n=Object(i["inject"])("openGroups");Object(i["watch"])(n,(function(t){var a=t[t.length-1];a===e.title||l.value||c(a)||(r.value=!1)}));var r=Object(i["ref"])(!1);Object(i["watch"])(r,(function(t){t&&n.value.push(e.title)}));var s=function(e){r.value=e},l=Object(i["ref"])(!1);Object(i["watch"])(l,(function(e){e&&t.value||(r.value=e)}));var o=function(){l.value=Object(W["a"])(e.children)},c=function(t){return e.children.some((function(e){return e.title===t}))};return{isOpen:r,isActive:l,updateGroupOpen:s,openGroups:n,isMouseHovered:a,updateIsActive:o}}var le={watch:{$route:{immediate:!0,handler:function(){this.updateIsActive()}}}},oe={name:"VerticalNavMenuGroup",components:{VerticalNavMenuHeader:F,VerticalNavMenuLink:te,BLink:$["a"],BBadge:X["a"],BCollapse:re["a"]},mixins:[le],props:{item:{type:Object,required:!0}},setup:function(e){var t=se(e.item),a=t.isOpen,n=t.isActive,r=t.updateGroupOpen,i=t.updateIsActive,s=Object(G["a"])(),l=s.t,o=Object(z["a"])(),c=o.canViewVerticalNavMenuGroup;return{resolveNavItemComponent:W["e"],isOpen:a,isActive:n,updateGroupOpen:r,updateIsActive:i,canViewVerticalNavMenuGroup:c,t:l}}},ce=oe,ue=Object(m["a"])(ce,ae,ne,!1,null,null,null),de=ue.exports,ve={components:{VerticalNavMenuHeader:F,VerticalNavMenuLink:te,VerticalNavMenuGroup:de},props:{items:{type:Array,required:!0}},setup:function(){return Object(i["provide"])("openGroups",Object(i["ref"])([])),{resolveNavItemComponent:W["e"]}}},pe=ve,me=Object(m["a"])(pe,S,E,!1,null,null,null),be=me.exports;function fe(e){var t=Object(i["computed"])({get:function(){return ie["a"].state.verticalMenu.isVerticalMenuCollapsed},set:function(e){ie["a"].commit("verticalMenu/UPDATE_VERTICAL_MENU_COLLAPSED",e)}}),a=Object(i["computed"])((function(){return e.isVerticalMenuActive?t.value?"unpinned":"pinned":"close"})),n=Object(i["ref"])(!1),r=function(e){n.value=e},s=function(){t.value=!t.value};return{isMouseHovered:n,isVerticalMenuCollapsed:t,collapseTogglerIcon:a,toggleCollapsed:s,updateMouseHovered:r}}var he={components:{VuePerfectScrollbar:L.a,VerticalNavMenuItems:be,BLink:$["a"],BImg:B["a"]},props:{isVerticalMenuActive:{type:Boolean,required:!0},toggleVerticalMenuActive:{type:Function,required:!0}},setup:function(e){var t=fe(e),a=t.isMouseHovered,n=t.isVerticalMenuCollapsed,r=t.collapseTogglerIcon,s=t.toggleCollapsed,o=t.updateMouseHovered,c=Object(l["a"])(),u=c.skin,d=Object(i["ref"])(!1);Object(i["provide"])("isMouseHovered",a);var v={maxScrollbarLength:60,wheelPropagation:!1},p=Object(i["computed"])((function(){return"unpinned"===r.value?"CircleIcon":"DiscIcon"})),m=H["c"].app,b=m.appName,f=m.appLogoImage;return{navMenuItems:T["a"],perfectScrollbarSettings:v,isVerticalMenuCollapsed:n,collapseTogglerIcon:r,toggleCollapsed:s,isMouseHovered:a,updateMouseHovered:o,collapseTogglerIconFeather:p,shallShadowBottom:d,skin:u,appName:b,appLogoImage:f}}},ge=he,Ce=(a("6e4d"),Object(m["a"])(ge,x,I,!1,null,null,null)),Oe=Ce.exports;function Me(e,t){var a=Object(i["ref"])(!0),n=function(){a.value=!a.value},r=Object(i["ref"])("xl"),s=Object(i["computed"])((function(){return ie["a"].state.verticalMenu.isVerticalMenuCollapsed})),l=Object(i["computed"])((function(){var n=[];return"xl"===r.value?(n.push("vertical-menu-modern"),n.push(s.value?"menu-collapsed":"menu-expanded")):(n.push("vertical-overlay-menu"),n.push(a.value?"menu-open":"menu-hide")),n.push("navbar-".concat(e.value)),"sticky"===t.value&&n.push("footer-fixed"),"static"===t.value&&n.push("footer-static"),"hidden"===t.value&&n.push("footer-hidden"),n}));Object(i["watch"])(r,(function(e){a.value="xl"===e}));var o=function(){window.innerWidth>=1200?r.value="xl":window.innerWidth>=992?r.value="lg":window.innerWidth>=768?r.value="md":window.innerWidth>=576?r.value="sm":r.value="xs"},c=Object(i["computed"])((function(){return"xl"!==r.value&&a.value?"show":null})),u=Object(i["computed"])((function(){return"sticky"===e.value?"fixed-top":"static"===e.value?"navbar-static-top":"hidden"===e.value?"d-none":"floating-nav"})),d=Object(i["computed"])((function(){return"static"===t.value?"footer-static":"hidden"===t.value?"d-none":""}));return{isVerticalMenuActive:a,toggleVerticalMenuActive:n,isVerticalMenuCollapsed:s,layoutClasses:l,overlayClasses:c,navbarTypeClass:u,footerTypeClass:d,resizeHandler:o}}var ye={watch:{$route:function(){this.$store.state.app.windowWidth<H["a"].xl&&(this.isVerticalMenuActive=!1)}}},we=a("cb50"),je={components:{AppNavbar:we["a"],AppFooter:s["a"],VerticalNavMenu:Oe,BNavbar:o["a"],LayoutContentRendererLeftDetached:A,LayoutContentRendererLeft:y,LayoutContentRendererDefault:f},mixins:[ye],computed:{layoutContentRenderer:function(){var e=this.$route.meta.contentRenderer;return"sidebar-left"===e?"layout-content-renderer-left":"sidebar-left-detached"===e?"layout-content-renderer-left-detached":"layout-content-renderer-default"}},setup:function(){var e=Object(l["a"])(),t=e.routerTransition,a=e.navbarBackgroundColor,n=e.navbarType,r=e.footerType,s=e.isNavMenuHidden,o=Me(n,r),c=o.isVerticalMenuActive,u=o.toggleVerticalMenuActive,d=o.isVerticalMenuCollapsed,v=o.layoutClasses,p=o.overlayClasses,m=o.resizeHandler,b=o.navbarTypeClass,f=o.footerTypeClass,h=fe({isVerticalMenuActive:c,toggleVerticalMenuActive:u}),g=h.toggleCollapsed;return m(),window.addEventListener("resize",m),Object(i["onUnmounted"])((function(){window.removeEventListener("resize",m)})),{isVerticalMenuActive:c,toggleVerticalMenuActive:u,isVerticalMenuCollapsed:d,overlayClasses:p,layoutClasses:v,navbarTypeClass:b,footerTypeClass:f,toggleCollapsed:g,routerTransition:t,navbarBackgroundColor:a,isNavMenuHidden:s}}},Ve=je,_e=(a("51c4"),Object(m["a"])(Ve,n,r,!1,null,null,null));t["default"]=_e.exports},"16b1":function(e,t,a){},"51c4":function(e,t,a){"use strict";a("16b1")},"6e4d":function(e,t,a){"use strict";a("fe4a")},fe4a:function(e,t,a){}}]);
//# sourceMappingURL=chunk-35ff6d90.ac4d49e8.js.map