(function(t){function e(e){for(var i,a,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(i=!1)}i&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},a={app:0},o={app:0},r=[];function s(t){return c.p+"js/"+({"group-views":"group-views"}[t]||t)+"."+{"group-views":"7590a70d"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"group-views":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var i="css/"+({"group-views":"group-views"}[t]||t)+"."+{"group-views":"a1e9c2c5"}[t]+".css",o=c.p+i,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var u=r[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===i||l===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===i||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var i=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete a[t],f.parentNode.removeChild(f),n(r)},f.href=o;var v=document.getElementsByTagName("head")[0];v.appendChild(f)})).then((function(){a[t]=0})));var i=o[t];if(0!==i)if(i)e.push(i[2]);else{var r=new Promise((function(e,n){i=o[t]=[e,n]}));e.push(i[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",d.name="ChunkLoadError",d.type=i,d.request=a,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/xiaofanslog/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"100c":function(t,e,n){"use strict";var i=n("416f"),a=n.n(i);a.a},"416f":function(t,e,n){},5042:function(t,e,n){"use strict";var i=n("e10f"),a=n.n(i);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{class:{"project-container-mobile":t.isMobile}},[t.isMobile&&t.defaultStatusInDevice?n("div",{staticClass:"drawer-bg",on:{click:t.openOrCloseLeft}}):t._e(),n("aside",[n("transition",{attrs:{name:"left"}},[t.defaultStatusInDevice?n("div",{class:{left:!t.isMobile,"left-in-mobile":t.isMobile}},[n("AsideNav")],1):t._e()])],1),n("main",[n("div",{staticClass:"right"},[t.isMobile?n("div",[n("span",{on:{click:t.openOrCloseLeft}},[n("icon-svg",{attrs:{svgId:"icon-test"}}),t._v("点我打开侧边栏 ")],1)]):t._e(),n("keep-alive",[n("router-view")],1)],1)])])])},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-container"},t._l(t.navList,(function(t,e){return n("nav-bar",{key:e,attrs:{navData:t}})})),1)},s=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-block"},[n("div",{ref:"title",staticClass:"nav-title",on:{click:t.goToSomeWhere}},[t._v(t._s(t.navData.title))]),t._l(t.navData.list,(function(t,e){return n("nav-item",{key:e,ref:"nav-item",refInFor:!0,attrs:{index:e,item:t}})}))],2)},u=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.classList,on:{click:t.activeNavBar}},[t._v(t._s(t.item.subtitle))])},d=[],f={name:"nav-item",props:["item","index"],methods:{activeNavBar:function(){this.classList.push("visble-line"),this.item.path&&this.$route.path!==this.item.path&&this.$router.push({path:this.item.path})},cancel:function(){this.classList=["nav-list"]}},data:function(){return{classList:["nav-list"]}},watch:{$route:function(t){t.path!==this.item.path&&this.classList.length>1&&this.cancel()}},created:function(){}},v=f,p=(n("f104"),n("2877")),h=Object(p["a"])(v,l,d,!1,null,"722456bc",null),m=h.exports,b={name:"nav-bar",components:{NavItem:m},props:["navData"],methods:{goToSomeWhere:function(){this.navData.path&&this.$router.push({path:this.navData.path})}},data:function(){return{chooseItemIndex:-1}},mounted:function(){}},g=b,_=(n("5042"),Object(p["a"])(g,c,u,!1,null,"b4d4ae9c",null)),y=_.exports,w=[{title:"介绍",path:"/",list:[]},{title:"js相关",list:[{subtitle:"generator",path:"/js/generator"}]},{title:"vue相关",list:[{subtitle:"简单讲讲initData()",path:"/vue/initData"},{subtitle:"computed和watch",path:"/vue/computedwatch"},{subtitle:"vue-router的小技巧",path:"/vue/vue-router"}]},{title:"组件",list:[{subtitle:"整体布局",path:"/components/layout"},{subtitle:"table",path:"/table"}]}],E=w,O={name:"aside-nav",components:{NavBar:y},data:function(){return{navList:E}}},C=O,L=(n("a22a"),Object(p["a"])(C,r,s,!1,null,"34a6d3a6",null)),x=L.exports,j=document,M=j.body,S=992,T={beforeMount:function(){var t=this.$_isMobile();t&&this.$store.dispatch("device/toggleDevice","mobile")},methods:{$_isMobile:function(){var t=M.getBoundingClientRect();return t.width-1<S}}},k={name:"app",components:{AsideNav:x},mixins:[T],computed:{isMobile:function(){return"mobile"===this.$store.state.device.device},defaultStatusInDevice:function(){return"desktop"===this.$store.state.device.device||this.$store.state.device.leftStatus}},methods:{openOrCloseLeft:function(){this.$store.dispatch("device/openOrCloseLeft")}}},D=k,$=(n("e998"),Object(p["a"])(D,a,o,!1,null,"6df74250",null)),N=$.exports,B=n("2f62"),I={namespaced:!0,state:{device:"desktop",leftStatus:!1},getters:{},mutations:{TOGGLE_DEVICE:function(t,e){t.device=e},OPEN_OR_CLOSE_LEFT:function(t,e){t.leftStatus=!t.leftStatus}},actions:{toggleDevice:function(t,e){var n=t.commit;n("TOGGLE_DEVICE",e)},openOrCloseLeft:function(t){var e=t.commit;t.state;e("OPEN_OR_CLOSE_LEFT")}}};i["a"].use(B["a"]);var P=new B["a"].Store({state:{},mutations:{},actions:{},modules:{device:I}}),A=(n("d3b7"),n("8c4f")),H=function(){return n.e("group-views").then(n.bind(null,"1e4b"))},z=function(){return n.e("group-views").then(n.bind(null,"f658"))},F=function(){return n.e("group-views").then(n.bind(null,"55c1"))},G=function(){return n.e("group-views").then(n.bind(null,"7b11"))},V=function(){return n.e("group-views").then(n.bind(null,"4bb5"))},R=function(){return n.e("group-views").then(n.bind(null,"cd01"))},q=function(){return n.e("group-views").then(n.bind(null,"f969"))};i["a"].use(A["a"]);var J=new A["a"]({routes:[{path:"/",component:H,alias:"/index"},{path:"/js/generator",component:z},{path:"/vue/initData",component:V},{path:"/vue/computedwatch",component:R},{path:"/vue/vue-router",component:q},{path:"/components/layout",component:G},{path:"/table",component:F,name:"styleTable"}]}),W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"svg",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":t.svgHref}})])},K=[];n("c975");!function(t){var e,n='<svg><symbol id="icon-icon-test" viewBox="0 0 1024 1024"><path d="M128 256h64V192H128zM320 256h576V192H320zM128 544h64v-64H128zM320 544h576v-64H320zM128 832h64v-64H128zM320 832h576v-64H320z" fill="#181818" ></path></symbol><symbol id="icon-icon-test1" viewBox="0 0 1024 1024"><path d="M960 512c0 97.76-28.704 185.216-85.664 263.264-56.96 78.016-130.496 131.84-220.64 161.856-10.304 1.824-18.368 0.448-22.848-4.032a22.4 22.4 0 0 1-7.2-17.504v-122.88c0-37.632-10.304-65.44-30.464-82.912a409.856 409.856 0 0 0 59.616-10.368 222.752 222.752 0 0 0 54.72-22.816c18.848-10.784 34.528-23.36 47.104-38.592 12.544-15.232 22.848-35.904 30.912-61.44 8.096-25.568 12.128-54.688 12.128-87.904 0-47.072-15.232-86.976-46.208-120.16 14.368-35.456 13.024-74.912-4.48-118.848-10.752-3.616-26.432-1.344-47.072 6.272a301.44 301.44 0 0 0-53.824 25.568l-21.984 13.888A407.776 407.776 0 0 0 512 280.16c-38.56 0-75.776 4.928-112.096 15.232a444.48 444.48 0 0 0-24.672-15.68c-10.336-6.272-26.464-13.888-48.896-22.432-21.952-8.96-39.008-11.232-50.24-8.064-17.024 43.936-18.368 83.424-4.032 118.848-30.496 33.632-46.176 73.536-46.176 120.608 0 33.216 4.032 62.336 12.128 87.456 8.032 25.12 18.368 45.76 30.496 61.44 12.544 15.68 28.224 28.704 47.072 39.04 18.848 10.304 37.216 17.92 54.72 22.816a409.6 409.6 0 0 0 59.648 10.368c-15.712 13.856-25.12 34.048-28.704 60.064a99.744 99.744 0 0 1-26.464 8.512 178.208 178.208 0 0 1-33.184 2.688c-13.024 0-25.568-4.032-38.144-12.544-12.544-8.512-23.296-20.64-32.256-36.32a97.472 97.472 0 0 0-28.256-30.496c-11.232-8.064-21.088-12.576-28.704-13.92l-11.648-1.792c-8.096 0-13.92 0.928-17.056 2.688-3.136 1.792-4.032 4.032-2.688 6.72 1.344 2.688 3.136 5.408 5.376 8.096 2.24 2.688 4.928 4.928 7.616 7.168l4.032 2.688c8.544 4.032 17.056 11.232 25.568 21.984 8.544 10.752 14.368 20.64 18.4 29.6l5.824 13.44c4.928 14.816 13.44 26.912 25.568 35.872 12.096 8.992 25.088 14.816 39.008 17.504 13.888 2.688 27.36 4.032 40.352 4.032 12.992 0 23.776-0.448 32.288-2.24l13.472-2.24c0 14.784 0 32.288 0.416 52.032 0 19.744 0.48 30.496 0.48 31.392a22.624 22.624 0 0 1-7.648 17.472c-4.928 4.48-12.992 5.824-23.296 4.032-90.144-30.048-163.68-83.84-220.64-161.888C92.256 697.216 64 609.312 64 512c0-81.152 20.192-156.064 60.096-224.672a445.184 445.184 0 0 1 163.232-163.232C355.936 84.192 430.816 64 512 64s156.064 20.192 224.672 60.096a445.184 445.184 0 0 1 163.232 163.232C939.808 355.488 960 430.848 960 512" fill="#000000" ></path></symbol><symbol id="icon-icon-test2" viewBox="0 0 1024 1024"><path d="M553.6 790.4l-44.8-44.8 233.6-233.6-233.6-233.6 44.8-44.8L832 512z" fill="#181818" ></path><path d="M192 480h576v64H192z" fill="#181818" ></path></symbol></svg>',i=(e=document.getElementsByTagName("script"))[e.length-1].getAttribute("data-injectcss");if(i&&!t.__iconfont__svg__cssinject__){t.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}!function(e){if(document.addEventListener)if(~["complete","loaded","interactive"].indexOf(document.readyState))setTimeout(e,0);else{var n=function t(){document.removeEventListener("DOMContentLoaded",t,!1),e()};document.addEventListener("DOMContentLoaded",n,!1)}else document.attachEvent&&(a=e,o=t.document,r=!1,(s=function(){try{o.documentElement.doScroll("left")}catch(e){return void setTimeout(s,50)}i()})(),o.onreadystatechange=function(){"complete"==o.readyState&&(o.onreadystatechange=null,i())});function i(){r||(r=!0,a())}var a,o,r,s}((function(){var t,e,i,a,o,r;(t=document.createElement("div")).innerHTML=n,n=null,(e=t.getElementsByTagName("svg")[0])&&(e.setAttribute("aria-hidden","true"),e.style.position="absolute",e.style.width=0,e.style.height=0,e.style.overflow="hidden",i=e,(a=document.body).firstChild?(o=i,(r=a.firstChild).parentNode.insertBefore(o,r)):a.appendChild(i))}))}(window);var U={name:"icon-svg",props:["svgId"],computed:{svgHref:function(){return"#icon-".concat(this.svgId)}}},Q=U,X=(n("7cd8"),Object(p["a"])(Q,W,K,!1,null,"2a1279e8",null)),Y=X.exports,Z={install:function(t){t.component("icon-svg",Y)}},tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-title"},[n("h1",[t._v(t._s(t.mainTitle))])])},et=[],nt={name:"main-view-title",props:["mainTitle"]},it=nt,at=(n("100c"),Object(p["a"])(it,tt,et,!1,null,"2b84df55",null)),ot=at.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v(t._s(t.subtitle))])])},st=[],ct={name:"subtitle",props:["subtitle"]},ut=ct,lt=Object(p["a"])(ut,rt,st,!1,null,"45a9ab29",null),dt=lt.exports;i["a"].config.productionTip=!1,i["a"].component("main-view-title",ot),i["a"].component("subtitle",dt),i["a"].use(Z),new i["a"]({store:P,router:J,render:function(t){return t(N)}}).$mount("#app")},"7cd8":function(t,e,n){"use strict";var i=n("e8ff"),a=n.n(i);a.a},a22a:function(t,e,n){"use strict";var i=n("e93c"),a=n.n(i);a.a},e10f:function(t,e,n){},e8ff:function(t,e,n){},e93c:function(t,e,n){},e998:function(t,e,n){"use strict";var i=n("f3b7"),a=n.n(i);a.a},f104:function(t,e,n){"use strict";var i=n("fd0d"),a=n.n(i);a.a},f3b7:function(t,e,n){},fd0d:function(t,e,n){}});
//# sourceMappingURL=app.ab71ceed.js.map