!function(){var e=document.createElement("style");e.innerHTML=".v-heading a{position:absolute;left:-1rem;--tw-text-opacity: 1;color:rgba(59,130,246,var(--tw-text-opacity));text-decoration:none;bottom:-1px;display:none;width:18px}.v-heading a:hover{visibility:visible;text-decoration:underline}.v-heading:hover a{display:inline-block}.docs-view .prose{max-width:unset}\n",document.head.appendChild(e),System.register(["./vendor-legacy.95c2d8ab.js"],(function(e){"use strict";var t,n,i,o,r,s,l,a,c,u;return{setters:[function(e){t=e.l,n=e.v,i=e.E,o=e.w,r=e.x,s=e.y,l=e.n,a=e.u,c=e.J,u=e.z}],execute:function(){const d=["href"],h=[u("#")];const p={props:{level:{type:Number}},render:function(e,u,p,v,f,m){const g=t("anchor");return n(),i(c("h"+p.level),{class:"v-heading relative"},{default:o((()=>[r(e.$slots,"default"),p.level>1?s((n(),l("a",{key:0,href:"#"+e.$attrs.id},h,8,d)),[[g]]):a("",!0)])),_:3})}};e("_",{components:{vheading:p},methods:{resolveHref(e){if(e.match(/^[\w-_]+:/))return e;let t=e.replace(".md","");if(!t.startsWith("/")&&!t.includes("//")&&!t.startsWith("#")){t=function(e,t){var n=e.split("/"),i=t.split("/"),o=[];for(let r=0,s=n.length;r<s;r++)if(".."==n[r])o.pop();else{if("."==n[r])continue;o.push(n[r])}for(let r=0,s=i.length;r<s;r++)if(".."==i[r])o.pop();else{if("."==i[r])continue;o.push(i[r])}return o.join("/")}(this.$route.path.replace(/\/[^\/]*$/,""),t)}let n=t.split("#");return 2===n.length&&(t=n[0]+"#"+n[1].toLowerCase()),t}}})}}}))}();
