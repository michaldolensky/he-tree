var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,i=(t,o,a)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a,r=(e,t)=>{for(var o in t||(t={}))s.call(t,o)&&i(e,o,t[o]);if(a)for(var o of a(t))n.call(t,o)&&i(e,o,t[o]);return e},l=(e,a)=>t(e,o(a));"undefined"!=typeof require&&require;export function __vite_legacy_guard(){import("data:text/javascript,")}import{c,a as u,r as h,b as d,m,g as p,d as f,o as b,e as y,f as v,h as _,i as g,j as w,s as k,k as E,l as $,n as x,p as P,w as L,q as I,t as A,u as V,F as C,v as D,x as B,y as M,z as S,A as T,B as O,C as z,D as R,E as H,G as j,T as N,H as G,I as q,J as U,K as W,L as F,M as K,N as Y,O as J,P as Q,Q as X,R as Z,S as ee,U as te}from"./vendor.92220208.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const oe={},ae=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in oe)return;oe[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":"modulepreload",t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e())):e()};const se=[...[{name:"6db004dbaedf4e5784f248bfbbf25c95",path:"/pro-plugin",meta:{locale:"en",alternate:{en:"/pro-plugin",zh:"/zh/pro-plugin"},fromMarkdown:!0},component:()=>ae((()=>import("./6db004dbaedf4e5784f248bfbbf25c95.8b96e73c.js")),["assets/6db004dbaedf4e5784f248bfbbf25c95.8b96e73c.js","assets/DocTemplateBase.3230dea8.js","assets/DocTemplateBase.0aaf2ebb.css","assets/vendor.92220208.js"])},{name:"0452ec218fa58e31b65e27668556ebf6",path:"/zh/pro-plugin",meta:{locale:"zh",alternate:{en:"/pro-plugin",zh:"/zh/pro-plugin"},fromMarkdown:!0},component:()=>ae((()=>import("./0452ec218fa58e31b65e27668556ebf6.02f4d101.js")),["assets/0452ec218fa58e31b65e27668556ebf6.02f4d101.js","assets/DocTemplateBase.3230dea8.js","assets/DocTemplateBase.0aaf2ebb.css","assets/vendor.92220208.js"])},{name:"bd5b80e6d4151126cf317aa95373f03c",path:"/v1/api",meta:{locale:"en",alternate:{en:"/v1/api",zh:"/zh/v1/api"},fromMarkdown:!0},component:()=>ae((()=>import("./bd5b80e6d4151126cf317aa95373f03c.da2c1d91.js")),["assets/bd5b80e6d4151126cf317aa95373f03c.da2c1d91.js","assets/DocTemplateBase.3230dea8.js","assets/DocTemplateBase.0aaf2ebb.css","assets/vendor.92220208.js"])},{name:"8ad65299c634049f551a465a053f67bd",path:"/v1/guide",meta:{locale:"en",alternate:{en:"/v1/guide",zh:"/zh/v1/guide"},fromMarkdown:!0},component:()=>ae((()=>import("./8ad65299c634049f551a465a053f67bd.7b4c5c5f.js")),["assets/8ad65299c634049f551a465a053f67bd.7b4c5c5f.js","assets/DocTemplateBase.3230dea8.js","assets/DocTemplateBase.0aaf2ebb.css","assets/vendor.92220208.js"])},{name:"b32937653ee2e0496387531df72863f0",path:"/zh/v1/api",meta:{locale:"zh",alternate:{en:"/v1/api",zh:"/zh/v1/api"},fromMarkdown:!0},component:()=>ae((()=>import("./b32937653ee2e0496387531df72863f0.093741fb.js")),["assets/b32937653ee2e0496387531df72863f0.093741fb.js","assets/DocTemplateBase.3230dea8.js","assets/DocTemplateBase.0aaf2ebb.css","assets/vendor.92220208.js"])},{name:"c7967f78a598bb1d55c32377e6d33e2b",path:"/zh/v1/guide",meta:{locale:"zh",alternate:{en:"/v1/guide",zh:"/zh/v1/guide"},fromMarkdown:!0},component:()=>ae((()=>import("./c7967f78a598bb1d55c32377e6d33e2b.a10728a7.js")),["assets/c7967f78a598bb1d55c32377e6d33e2b.a10728a7.js","assets/DocTemplateBase.3230dea8.js","assets/DocTemplateBase.0aaf2ebb.css","assets/vendor.92220208.js"])}],{name:"home",path:"/",component:()=>ae((()=>import("./home.4d49101f.js")),["assets/home.4d49101f.js","assets/home.d136bcd9.css","assets/vendor.92220208.js"])},{name:"examples",path:"/examples",component:()=>ae((()=>import("./examples.c3bcbab8.js")),["assets/examples.c3bcbab8.js","assets/examples.12493bc2.css","assets/vendor.92220208.js"])},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>ae((()=>import("./NotFound.82b34f80.js")),["assets/NotFound.82b34f80.js","assets/vendor.92220208.js"]),meta:{i18n:!1}}],ne=c({history:u(),routes:se}),ie=h(Math.random().toString()),re=()=>{ie.value=Math.random().toString()},le=d({tableOfContents:{visible:!1,value:[]}});const ce="production";var ue=d({ENV:ce,IS_DEVLOPMENT:false,IS_PRODUCTION:true,API_BASE_URL:p().__IS_GENERATED__?"/api":"//localhost:8000/api",API_TIMEOUT:2e4,ANALYTICS_ID:"G-L74NT4DL5X",APP_NAME:"he-tree",LOCALE:"en"});const he=f({locale:ue.LOCALE,fallbackLocale:ue.LOCALE,messages:{en:{Languages:"Languages",Home:"Home",Works:"Works",About:"About",Guide:"Guide",API:"API","Pro Plugin":"Pro Plugin",Examples:"Examples","Get Started":"Get Started","More Examples":"More Examples"},zh:{Languages:"语言",Home:"首页",Works:"作品",About:"关于",Guide:"使用指南",API:"API","Pro Plugin":"Pro插件",Examples:"例子","Get Started":"快速开始","More Examples":"更多例子"}}});function de(e,t){if(e.meta.alternate)return{path:e.meta.alternate[t],params:r({},e.params),query:r({},e.query),hash:e.hash};const o=b(e,["name","params","query","hash"]);return t===he.global.fallbackLocale?(o.params&&(o.params=r({},o.params),delete o.params.locale),o.name=o.name.replace(/\.i18n$/,"")):(o.params||(o.params={}),o.params.locale=t,o.name.match(/\.i18n$/)||(o.name=o.name+".i18n")),o}var me=h(null),pe=w({components:{BaseTree:k},props:{to:{type:Object}},data:()=>({submenu:me,realTo:null}),computed:{submenuVisible(){return!!this.submenu&&(this.realTo&&this.realTo.path===this.$route.path.replace(/\/$/,""))}},methods:{onResolve(e){this.realTo=e.bind.to}}});const fe={key:0,class:"docs-submenu flex-grow h-0 overflow-y-auto mb-1 text-sm"},be={class:"pl-2"},ye=["href"];pe.render=function(e,t,o,a,s,n){const i=E("Anchor"),r=E("BaseTree"),l=$("anchor");return D(),x(C,null,[P(i,I({class:"DocsMenuItem",to:e.to},e.$attrs,{onResolved:e.onResolve}),{default:L((()=>[B(e.$slots,"default")])),_:3},16,["to","onResolved"]),e.submenuVisible?(D(),x("div",fe,[A("div",be,[P(r,{treeData:e.submenu,indent:8,gap:8},{default:L((({node:e,tree:t})=>[M(A("a",{href:"#"+e.id},[S(T(e.name),1)],8,ye),[[l]])])),_:1},8,["treeData"])])])):V("",!0)],64)};var ve=w({components:{DocsMenuItem:pe},setup(e){const t=function(){const e=(e=1920,t=1080)=>({innerWidth:p().innerWidth||e,innerHeight:p().innerHeight||t}),t=h(e()),o=()=>{t.value=e()};return y((()=>{o(),v(window,"resize",o)})),_((()=>{g(window,"resize",o)})),t}(),o=O((()=>t.value.innerWidth<760));return{routeViewKey:ie,reloadRouteView:re,sm:o}},data:()=>({state:le,sidebarVisible:!1,year:(new Date).getFullYear(),config:ue}),watch:{},async created(){},mounted(){},methods:{switchLocale(e){!function(e,t,o){let a=de(o,e);t.push(a)}(e,this.$router,this.$route)}}});const _e={class:"default-layout fixed w-full h-full flex"},ge={class:"flex-grow overflow-y-auto overflow-x-hidden px-4 flex flex-col"},we={class:"main-menu mt-2 text-gray-600 h-0 flex-grow flex flex-col pb-4"},ke={class:"shadow rounded text-sm"},Ee=S("English"),$e=S("简体中文"),xe=S("Github"),Pe={class:"main-right flex-grow overflow-auto"},Le={class:"px-6 main-body"};ve.render=function(e,t,o,a,s,n){const i=E("Icon"),r=E("Anchor"),l=E("DocsMenuItem"),c=E("Popup"),u=E("router-view"),h=E("Btn");return D(),x("div",_e,[M(A("div",{class:R(["main-sidebar flex-shrink-0 w-56 h-full overflow-hidden flex flex-col",{"fixed bg-white z-10 border-r-2":e.sm}])},[e.sm?(D(),x("div",{key:0,class:"text-center p-2 bg-gray-50 pointer",onClick:t[0]||(t[0]=t=>e.sidebarVisible=!1)},[P(i,{name:"arrow_back"})])):V("",!0),A("div",ge,[P(r,{class:"main-title text-2xl text-gray-700 py-4 font-semibold",to:{name:"home"}},{default:L((()=>[A("span",null,T(e.config.APP_NAME),1)])),_:1}),A("div",we,[P(l,{class:"main-menu-item",to:{path:"/v1/guide"}},{default:L((()=>[S(T(e.$t("Guide")),1)])),_:1}),P(l,{class:"main-menu-item",to:{path:"/v1/api"}},{default:L((()=>[S(T(e.$t("API")),1)])),_:1}),P(r,{class:"main-menu-item",to:"/pro-plugin"},{default:L((()=>[S(T(e.$t("Pro Plugin")),1)])),_:1}),P(r,{class:"main-menu-item",to:"/examples"},{default:L((()=>[S(T(e.$t("Examples")),1)])),_:1}),P(c,{class:"main-menu-item",caret:"",menu:"",hover:""},{card:L((()=>[A("div",ke,[P(r,{class:"block py-2 px-3 hover:bg-gray-100",onClick:t[1]||(t[1]=t=>e.switchLocale("en"))},{default:L((()=>[Ee])),_:1}),P(r,{class:"block py-2 px-3 hover:bg-gray-100",onClick:t[2]||(t[2]=t=>e.switchLocale("zh"))},{default:L((()=>[$e])),_:1})])])),default:L((()=>[S(T(e.$t("Languages")),1)])),_:1}),P(r,{class:"main-menu-item",to:"https://github.com/phphe/he-tree"},{default:L((()=>[xe])),_:1})])])],2),[[z,!e.sm||e.sidebarVisible]]),A("div",Pe,[A("div",Le,[P(u,{key:e.routeViewKey})])]),e.sm?(D(),H(h,{key:0,class:"fixed bottom-5 right-2 h-10",color:"primary",paddingClass:"px-2",onClick:t[3]||(t[3]=t=>e.sidebarVisible=!e.sidebarVisible)},{default:L((()=>[P(i,{name:"menu"})])),_:1})):V("",!0)])};var Ie=w({props:{},data:()=>({locales:he.global.availableLocales.slice()}),computed:{hrefItems(){return this.$route.name&&!1!==this.$route.meta.i18n?this.locales.map((e=>({locale:e,href:location.origin+this.$router.resolve(de(this.$route,e)).href}))):[]}},mounted(){const e=()=>{document.documentElement&&document.documentElement.setAttribute("lang",he.global.locale)};e(),this.$watch((()=>he.global.locale),e)}});const Ae=["href","hreflang"];Ie.render=function(e,t,o,a,s,n){return D(),H(N,{to:"head"},[(D(!0),x(C,null,j(e.hrefItems,(e=>(D(),x("link",{rel:"alternate",href:e.href,hreflang:e.locale},null,8,Ae)))),256))])};var Ve=w({data:()=>({visible:!1,progress:0}),created(){let e=!1;this.$router.afterEach(((t,o,a)=>{e?this.complete():(e=!0,this.$router.beforeEach(((e,t)=>{this.show()})))}))},methods:{show(){clearTimeout(this._tm2);const e=()=>{this.progress<.95&&(this.visible=!0,this._tm=setTimeout((()=>{this.progress+=.05,e()}),200*Math.random()+10))};e()},complete(){clearTimeout(this._tm),this.progress=1,this._tm2=setTimeout((()=>{this.visible=!1}),300)}}});const Ce={class:"page-progress-bar relative fixed top-0 w-full left-0"},De={class:"overflow-hidden h-1 mb-4 text-xs flex bg-primary-200"};Ve.render=function(e,t,o,a,s,n){return e.visible?(D(),H(N,{key:0,to:"body"},[A("div",Ce,[A("div",De,[A("div",{class:"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-500",style:G({width:100*e.progress+"%"})},null,4)])])])):V("",!0)};const Be=d({title:"",description:"",keywords:"",author:""});try{for(const e of["title",'meta[name="description"]','meta[name="keywords"]','meta[name="author"]']){const t=document.head.querySelector(e);t&&t.remove()}}catch(We){}const Me=(Se="title",(e,t)=>{Be[Se]=e;const o=t||q();if(!o)throw new Error(`HTMLHead use ${Se}: the second argument is required when called outside of setup`);_((()=>{Be[Se]===e&&(Be[Se]="")}),o)});var Se;var Te=w({components:{default_layout:ve,I18n:Ie,PageProgressBar:Ve,HTMLHead:function(){return P(N,{to:"head"},{default:()=>[Be.title&&P("title",null,[Be.title]),Be.description&&P("meta",{name:"description",content:Be.description},null),Be.keywords&&P("meta",{name:"keywords",content:Be.keywords},null),Be.author&&P("meta",{name:"author",content:Be.author},null)]})}},data:()=>({routeReady:!1}),computed:{layout(){let{layout:e}=this.$route.meta;return"unset"!==e&&this.routeReady?(e=e||"default",`${e}_layout`):"router-view"}},created(){const e=this.$watch("$route",(()=>{this.routeReady=!0,e()}))}});Te.render=function(e,t,o,a,s,n){const i=E("I18n"),r=E("PageProgressBar"),l=E("HTMLHead");return D(),x(C,null,[P(i),(D(),H(U(e.layout))),P(r),P(l)],64)};const Oe=K.create({baseURL:ue.API_BASE_URL,timeout:ue.API_TIMEOUT||2e4,withCredentials:!1});Oe.interceptors.response.use((e=>e.data));const ze={mounted(e){v(e,"click",(t=>{const o=e.getAttribute("href");if(o&&o.startsWith("#")){let e=document.getElementById(o.substr(1));e||(e=document.getElementsByName(o.substr(1))[0]),e&&null!=e.scrollIntoView&&(t.preventDefault(),e.scrollIntoView({behavior:"smooth"}),history.pushState(null,"",o))}}))}};var Re=w({props:{name:{type:String},size:{type:Number,default:20}}});const He={class:"icon inline-flex items-center"},je=S("​");Re.render=function(e,t,o,a,s,n){return D(),x("span",He,[je,A("span",{class:"icon-icon material-icons",style:G({"font-size":e.size+"px"})},T(e.$props.name),5)])};var Ne=w({inheritAttrs:!1,props:{external:{type:Boolean,default:null},underline:{type:Boolean},i18n:{type:Boolean,default:!0},smooth:{type:Boolean,default:!0},storeState:{type:Boolean,default:!0}},emits:{resolved:null},computed:{isExternal(){if(null!=this.external)return Boolean(this.external);const{to:e}=this.$attrs;return Boolean(Y(e)&&e.match(/^(http(s)?:)?\/\//))},i18nEnabled(){return!!this.$i18n&&this.i18n},props(){const e={bind:r({},this.$attrs),is:"a",onlyHash:!1},t=this.$attrs.to||this.$attrs.href;if(this.isExternal)e.bind.href=t;else if(t){let o=t;if(Y(o)&&"#"===o[0])e.bind.href=o,e.onlyHash=!0;else if(Y(o)&&o.match(/^[\w-_]+:/))e.bind.href=o;else{if(this.i18nEnabled&&this.$i18n.locale!==this.$i18n.fallbackLocale){let t=this.$router.resolve(o);if(t.meta.alternate)o={path:t.meta.alternate[this.$i18n.locale],params:t.params,query:t.query,hash:t.hash};else{let e=o;e.name||(e=b(this.$router.resolve(e),["name","query","hash","params"])),e.name.match(/\.i18n(\b|$)/)||(o=l(r({},e),{name:e.name+".i18n",params:l(r({},e.params),{locale:this.$i18n.locale}),query:r({},e.query||{})}))}e.bind.to=o}"_blank"===this.$attrs.target?e.bind.href=this.$router.resolve(this.$attrs.to).href:e.is="router-link"}}return"a"===e.is&&delete e.bind.to,e}},watch:{props:{immediate:!0,handler(e){this.$emit("resolved",e)}}},methods:{onclick(e){if(this.props.onlyHash){const t=this.props.bind.href;let o=document.getElementById(t.substr(1));o||(o=document.getElementsByName(t.substr(1))[0]),o&&null!=o.scrollIntoView&&(this.smooth&&(e.preventDefault(),o.scrollIntoView({behavior:"smooth"})),this.storeState&&history.pushState(null,"",t))}}}});Ne.render=function(e,t,o,a,s,n){return D(),H(U(e.props.is),I({class:"anchor cursor-pointer"},e.props.bind,{class:e.underline?"hover:underline focus:underline":"no-underline",onClick:e.onclick}),{default:L((()=>[B(e.$slots,"default")])),_:3},16,["class","onClick"])};var Ge=w({components:{Icon:Re},props:{mode:{type:String,default:"new"},minWidth100:{type:Boolean,default:!1},persistent:{type:Boolean},hover:{type:Boolean},autoOpen:{type:Boolean,default:!0},nowrap:{type:Boolean},space:{type:Number,default:5},caret:{type:Boolean},menu:{type:Boolean},transition:{type:String,default:"fade"}},data:()=>({cardStyle:{},localVisible:!1}),mounted(){this.$watch("localVisible",((e,t)=>{if(e!=t)if(e||(this._showByHover=!1,this._showByClick=!1),e){this._onDocCick=e=>this.onDocumentClick(e),v(document,"click",this._onDocCick,!0),this._onUserInput=e=>{this.localVisible&&this.updateCardPosition()},this.onParentsScroll();const e=["click","mousedown","mouseup","keydown","touchstart","touchend","touchmove","touchcancel","resize","scroll"];this._offUserInput=J([window],e,this._onUserInput),this._offGlobalListner=()=>{g(document,"click",this._onDocCick,!0),this._offUserInput(),this.offParentsScroll()},this.cardStyle={visibility:"hidden"},this.$nextTick((()=>{this.$refs,this.updateCardPosition()}))}else this._offGlobalListner&&(this._offGlobalListner(),this._offGlobalListner=null)}),{immediate:!0})},beforeUnmount(){this._offGlobalListner&&(this._offGlobalListner(),this._offGlobalListner=null)},methods:{show(){this.localVisible=!0},close(){this.localVisible=!1},onDocumentClick(e){const t=e.target,{card:o}=this.$refs;this.$refs.activator!==t&&!Q(t,this.$refs.activator)&&(!o||o!==t&&!Q(t,o))?(this.persistent||(this.localVisible=!1),this.$emit("click-outside",{nativeEvent:e,vm:this})):this.$emit("click-inside",{nativeEvent:e,vm:this})},onclickActivator(e){this.$emit("click-activator",{nativeEvent:e,vm:this}),this.autoOpen&&(this.hover?this._showByHover?this.localVisible&&(this._showByHover=!1,this._showByClick=!0):(this.localVisible=!this.localVisible,this.localVisible&&(this._showByClick=!0)):this.localVisible=!this.localVisible)},onMouseEnter(e){this.hover&&(this._cancelCloseDelayily(),this.localVisible||(this._showByHover=!0),this.show())},onMouseLeave(e){this.hover&&!this._showByClick&&this._closeDelayily()},_closeDelayily(){this._timeoutID=setTimeout((()=>this.close()),150)},_cancelCloseDelayily(){clearTimeout(this._timeoutID),this._timeoutID=null},onclickCard(e){this.menu&&this.close(),this.$emit("click-card",{nativeEvent:e,vm:this})},updateCardPosition(){this._updateCardPosition()},_updateCardPosition(){const{space:e}=this,t=X(this.$refs.activator),o=this.$refs.activator.offsetWidth,a=this.$refs.activator.offsetHeight,s=t.x+o,n=window.innerWidth-t.x-25,i=t.y,r=window.innerHeight-t.y-a;this.cardStyle={top:`${t.y+a+e}px`,left:`${t.x}px`},this.minWidth100&&(this.cardStyle.minWidth=`${o}px`),this.$nextTick((()=>{const{card:o}=this.$refs;if(!o)return;const{offsetWidth:l,offsetHeight:c}=o,u={};this.minWidth100&&(u.width=`${l}px`);let h={};h.x=n>l||s<l?t.x:s-l,h.y=r>c||i<c?t.y+a+e:t.y-e-c,u.left=`${h.x}px`,u.top=`${h.y}px`,this.cardStyle=u}))},onParentsScroll(){const e=[];let t=this.$refs.activator.parentElement;for(;t;)e.push(t),t=t.parentElement;const o=()=>{this.localVisible&&this.updateCardPosition()};e.forEach((e=>v(e,"scroll",o))),this._offParentsScroll=()=>{e.forEach((e=>g(e,"scroll",o)))}},offParentsScroll(){this._offParentsScroll&&(this._offParentsScroll(),this._offParentsScroll=null)}}});Ge.render=function(e,t,o,a,s,n){const i=E("Icon");return D(),x(C,null,[A("div",I({class:["popup popup-activator cursor-pointer",e.caret?"inline-flex items-center":"inline-block"],ref:"activator",onClick:t[0]||(t[0]=(...t)=>e.onclickActivator&&e.onclickActivator(...t)),onMouseenter:t[1]||(t[1]=(...t)=>e.onMouseEnter&&e.onMouseEnter(...t)),onMouseleave:t[2]||(t[2]=(...t)=>e.onMouseLeave&&e.onMouseLeave(...t))},e.$attrs),[B(e.$slots,"default"),e.caret?(D(),H(i,{key:0,class:R(["caret popup-caret relative transition",{"transform rotate-180":e.localVisible}]),name:"arrow_drop_down"},null,8,["class"])):V("",!0)],16),(D(),H(N,{to:"body"},[P(Z,{name:e.transition},{default:L((()=>["new"!==e.mode||e.localVisible?M((D(),x("div",{key:0,class:R(["popup-card bg-white",[{"popup-card-nowrap":e.nowrap}]]),ref:"card",onClick:t[3]||(t[3]=(...t)=>e.onclickCard&&e.onclickCard(...t)),style:G(e.cardStyle),onMouseenter:t[4]||(t[4]=t=>e._cancelCloseDelayily()),onMouseleave:t[5]||(t[5]=(...t)=>e.onMouseLeave&&e.onMouseLeave(...t))},[B(e.$slots,"card")],38)),[[z,"new"===e.mode||e.localVisible]]):V("",!0)])),_:3},8,["name"])]))],64)};const qe=te(Te);var Ue;!function(e){let t=0;e.afterEach((()=>{if(location.hash){const e=++t,o=decodeURIComponent(location.hash.substr(1));W((()=>{const a=()=>document.getElementById(o)||document.getElementsByName(o)[0];F((()=>Boolean(a())),60,333).promise.then((()=>{if(e!==t)return;const o=a();setTimeout((()=>{o.scrollIntoView&&o.scrollIntoView()}),100)}))}))}}))}(ne),qe.use(he),(Ue=ne).getRoutes().forEach((e=>{if(e.path&&!(e=>Boolean(e.meta.locale))(e)&&!1!==e.meta.i18n){const t=`/:locale${e.path}`.replace(/\/$/,""),o=m(e,(e=>{}));o.components=e.components,o.path=t,o.name=`${o.name}.i18n`,Ue.addRoute(o)}})),Ue.beforeEach(((e,t)=>{if(e.params.locale&&!he.global.availableLocales.includes(e.params.locale))return{name:"NotFound"}})),Ue.afterEach(((e,t,o)=>{if(o)return;const a=e.params.locale||e.meta.locale||(Array.isArray(he.global.fallbackLocale)?he.global.fallbackLocale[0]:he.global.fallbackLocale);a!==he.global.locale&&(he.global.locale=a)})),Oe.interceptors.request.use((function(e){return e.baseURL=e.baseURL+"/"+he.global.locale,e}),(function(e){return Promise.reject(e)})),function(e){e.directive("anchor",ze)}(qe),(e=>{e.component("Icon",Re),e.component("Anchor",Ne),e.component("Popup",Ge)})(qe),function(e,t){t?(e.use(ee,{config:{id:t}}),console.log("Google analytics enabled")):console.log("Google analytics not enabled because of empty track ID")}(qe,ue.ANALYTICS_ID),qe.use(ne),qe.mount("#app");export{ue as c,me as d,Me as u};