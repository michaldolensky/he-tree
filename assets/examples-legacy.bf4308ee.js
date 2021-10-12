!function(){var e=document.createElement("style");e.innerHTML=".tree6 .tree-node{border:1px solid #ccc;padding:0 5px}.tree7:not(.he-tree-dragging) .tree-node-outer:hover{background:#ccc}.tree7:not(.he-tree-dragging) .tree-node-outer:hover .tree-node:not(.tree-placeholder){background:#ccc;border-color:#ccc}.tree7 .tree-node:not(.tree-placeholder){border:1px solid #ccc;padding:3px 10px;background:#ffbe00}.tree8 .tree-node{border:1px solid #ccc;padding:2px 5px}\n",document.head.appendChild(e),System.register(["./vendor-legacy.95c2d8ab.js","./index-legacy.d3df9ce4.js"],(function(e){"use strict";var t,d,n,o,x,l,a,r,c,i,h,p,u,s,g,k,b,f;return{setters:[function(e){t=e.j,d=e.s,n=e.X,o=e.Y,x=e.Z,l=e._,a=e.k,r=e.v,c=e.n,i=e.t,h=e.p,p=e.w,u=e.A,s=e.u,g=e.y,k=e.V,b=e.z},function(e){f=e.u}],execute:function(){var C=e("default",t({components:{BaseTree:d,Draggable:n},setup(){f("Examples")},data:()=>({treeData1:[{text:"node 1",children:[{text:"node 1-1"},{text:"node 1-2"},{text:"node 1-3"},{text:"node 1-4"},{text:"node 1-5"},{text:"node 1-6"},{text:"node 1-7"},{text:"node 1-8"},{text:"node 1-9"},{text:"node 1-10"},{text:"node 1-11"},{text:"node 1-12"}]},{text:"node 2",children:[{text:"node 2-1"},{text:"node 2-2"},{text:"node 2-3"},{text:"node 2-4"},{text:"node 2-5"},{text:"node 2-6"},{text:"node 2-7"},{text:"node 2-8"},{text:"node 2-9"},{text:"node 2-10"},{text:"node 2-11"},{text:"node 2-12"}]},{text:"node 3"},{text:"node 4"},{text:"node 4",droppable:!1},{text:"node 5",children:[{text:"node 1"},{text:"node 2",children:[{text:"node 3"},{text:"node 4"}]},{text:"node 2",droppable:!1,children:[{text:"node 3"},{text:"node 4"}]},{text:"node 2",children:[{text:"node 3"},{text:"node 4",droppable:!1}]},{text:"node 3"},{text:"node 4"},{text:"node 3"},{text:"node 4"},{text:"node 3"},{text:"node 4"},{text:"node 3"},{text:"node 4"}]}],treeData2:[{text:"node 1",children:[{text:"node 1-1"},{text:"node 1-2"},{text:"node 1-3"},{text:"node 1-4"},{text:"node 1-5"},{text:"node 1-6"},{text:"node 1-7"},{text:"node 1-8"},{text:"node 1-9"},{text:"node 1-10"},{text:"node 1-11"},{text:"node 1-12"}]},{text:"node 2",children:[{text:"node 2-1"},{text:"node 2-2"},{text:"node 2-3"},{text:"node 2-4"},{text:"node 2-5"},{text:"node 2-6"},{text:"node 2-7"},{text:"node 2-8"},{text:"node 2-9"},{text:"node 2-10"},{text:"node 2-11"},{text:"node 2-12"}]},{text:"node 3"},{text:"node 4"},{text:"node 4",droppable:!1},{text:"node 5",children:[{text:"node 1"},{text:"node 2",children:[{text:"node 3"},{text:"node 4"}]},{text:"node 2",droppable:!1,children:[{text:"node 3"},{text:"node 4"}]},{text:"node 2",children:[{text:"node 3"},{text:"node 4",droppable:!1}]},{text:"node 3"},{text:"node 4"},{text:"node 3"},{text:"node 4"},{text:"node 3"},{text:"node 4"},{text:"node 3"},{text:"node 4"}]},{text:"node 1",children:[{text:"node 1-1"},{text:"node 1-2"},{text:"node 1-3"},{text:"node 1-4"},{text:"node 1-5"},{text:"node 1-6"},{text:"node 1-7"},{text:"node 1-8"},{text:"node 1-9"},{text:"node 1-10"},{text:"node 1-11"},{text:"node 1-12"}]},{text:"node 2",children:[{text:"node 2-1"},{text:"node 2-2"},{text:"node 2-3"},{text:"node 2-4"},{text:"node 2-5"},{text:"node 2-6"},{text:"node 2-7"},{text:"node 2-8"},{text:"node 2-9"},{text:"node 2-10"},{text:"node 2-11"},{text:"node 2-12"}]},{text:"node 3"},{text:"node 4"},{text:"node 4",droppable:!1},{text:"node 5",children:[{text:"node 1"},{text:"node 2",children:[{text:"node 3"},{text:"node 4"}]},{text:"node 2",droppable:!1,children:[{text:"node 3"},{text:"node 4"}]},{text:"node 2",children:[{text:"node 3"},{text:"node 4",droppable:!1}]},{text:"node 3"},{text:"node 4"},{text:"node 3"},{text:"node 4"},{text:"node 3"},{text:"node 4"},{text:"node 3"},{text:"node 4"}]},{text:"node 1",children:[{text:"node 1-1"},{text:"node 1-2"},{text:"node 1-3"},{text:"node 1-4"},{text:"node 1-5"},{text:"node 1-6"},{text:"node 1-7"},{text:"node 1-8"},{text:"node 1-9"},{text:"node 1-10"},{text:"node 1-11"},{text:"node 1-12"}]},{text:"node 2",children:[{text:"node 2-1"},{text:"node 2-2"},{text:"node 2-3"},{text:"node 2-4"},{text:"node 2-5"},{text:"node 2-6"},{text:"node 2-7"},{text:"node 2-8"},{text:"node 2-9"},{text:"node 2-10"},{text:"node 2-11"},{text:"node 2-12"}]},{text:"node 3"},{text:"node 4"},{text:"node 4",droppable:!1},{text:"node 5",children:[{text:"node 1"},{text:"node 2",children:[{text:"node 3"},{text:"node 4"}]},{text:"node 2",droppable:!1,children:[{text:"node 3"},{text:"node 4"}]},{text:"node 2",children:[{text:"node 3"},{text:"node 4",droppable:!1}]},{text:"node 3"},{text:"node 4"},{text:"node 3"},{text:"node 4"},{text:"node 3"},{text:"node 4"},{text:"node 3"},{text:"node 4"}]},{text:"node 1",children:[{text:"node 1-1"},{text:"node 1-2"},{text:"node 1-3"},{text:"node 1-4"},{text:"node 1-5"},{text:"node 1-6"},{text:"node 1-7"},{text:"node 1-8"},{text:"node 1-9"},{text:"node 1-10"},{text:"node 1-11"},{text:"node 1-12"}]},{text:"node 2",children:[{text:"node 2-1"},{text:"node 2-2"},{text:"node 2-3"},{text:"node 2-4"},{text:"node 2-5"},{text:"node 2-6"},{text:"node 2-7"},{text:"node 2-8"},{text:"node 2-9"},{text:"node 2-10"},{text:"node 2-11"},{text:"node 2-12"}]},{text:"node 3"},{text:"node 4"},{text:"node 4",droppable:!1},{text:"node 5",children:[{text:"node 1"},{text:"node 2",children:[{text:"node 3"},{text:"node 4"}]},{text:"node 2",droppable:!1,children:[{text:"node 3"},{text:"node 4"}]},{text:"node 2",children:[{text:"node 3"},{text:"node 4",droppable:!1}]},{text:"node 3"},{text:"node 4"},{text:"node 3"},{text:"node 4"},{text:"node 3"},{text:"node 4"},{text:"node 3"},{text:"node 4"}]}],flatData1:[{text:"node 1",id:1,parent_id:2},{text:"node 2",id:2},{text:"node 3",id:3,parent_id:2},{text:"node 233"},{text:"node 233"},{text:"node 233"},{text:"node 233"}],treeData3:[{text:"node 3",$folded:!0}],treeData4:[{text:"node 4",$folded:!0}],treeData5:[{text:"node 1",children:[{text:"node 1-1"},{text:"node 1-2"},{text:"node 1-3"},{text:"node 1-4"},{text:"node 1-5"},{text:"node 1-6"},{text:"node 1-7"},{text:"node 1-8"},{text:"node 1-9"},{text:"node 1-10"},{text:"node 1-11"},{text:"node 1-12"}]},{text:"node 2",children:[{text:"node 2-1"},{text:"node 2-2"},{text:"node 2-3"},{text:"node 2-4"},{text:"node 2-5"},{text:"node 2-6"},{text:"node 2-7"},{text:"node 2-8"},{text:"node 2-9"},{text:"node 2-10"},{text:"node 2-11"},{text:"node 2-12"}]},{text:"node 3"},{text:"node 4"},{text:"node 4",droppable:!1},{text:"node 5",children:[{text:"node 1"},{text:"node 2",children:[{text:"node 3"},{text:"node 4"}]},{text:"node 2",droppable:!1,children:[{text:"node 3"},{text:"node 4"}]},{text:"node 2",children:[{text:"node 3"},{text:"node 4",droppable:!1}]},{text:"node 3"},{text:"node 4"},{text:"node 3"},{text:"node 4"},{text:"node 3"},{text:"node 4"},{text:"node 3"},{text:"node 4"}]}],treeData6:[{text:"node 1",children:[{text:"node 1-1"},{text:"node 1-2"},{text:"node 1-3"},{text:"node 1-4"},{text:"node 1-5"},{text:"node 1-6"},{text:"node 1-7"},{text:"node 1-8"},{text:"node 1-9"},{text:"node 1-10"},{text:"node 1-11"},{text:"node 1-12"}]},{text:"node 2",children:[{text:"node 2-1"},{text:"node 2-2"},{text:"node 2-3"},{text:"node 2-4"},{text:"node 2-5"},{text:"node 2-6"},{text:"node 2-7"},{text:"node 2-8"},{text:"node 2-9"},{text:"node 2-10"},{text:"node 2-11"},{text:"node 2-12"}]},{text:"node 3"},{text:"node 4"},{text:"node 4",droppable:!1},{text:"node 5",children:[{text:"node 1"},{text:"node 2",children:[{text:"node 3"},{text:"node 4"}]},{text:"node 2",droppable:!1,children:[{text:"node 3"},{text:"node 4"}]},{text:"node 2",children:[{text:"node 3"},{text:"node 4",droppable:!1}]},{text:"node 3"},{text:"node 4"},{text:"node 3"},{text:"node 4"},{text:"node 3"},{text:"node 4"},{text:"node 3"},{text:"node 4"}]}],treeData7:[{text:"node 1",children:[{text:"node 1-1"},{text:"node 1-2"},{text:"node 1-3"},{text:"node 1-4"},{text:"node 1-5"},{text:"node 1-6"},{text:"node 1-7"},{text:"node 1-8"},{text:"node 1-9"},{text:"node 1-10"},{text:"node 1-11"},{text:"node 1-12"}]},{text:"node 2",children:[{text:"node 2-1"},{text:"node 2-2"},{text:"node 2-3"},{text:"node 2-4"},{text:"node 2-5"},{text:"node 2-6"},{text:"node 2-7"},{text:"node 2-8"},{text:"node 2-9"},{text:"node 2-10"},{text:"node 2-11"},{text:"node 2-12"}]},{text:"node 3"},{text:"node 4"},{text:"node 4",droppable:!1},{text:"node 5",children:[{text:"node 1"},{text:"node 2",children:[{text:"node 3"},{text:"node 4"}]},{text:"node 2",droppable:!1,children:[{text:"node 3"},{text:"node 4"}]},{text:"node 2",children:[{text:"node 3"},{text:"node 4",droppable:!1}]},{text:"node 3"},{text:"node 4"},{text:"node 3"},{text:"node 4"},{text:"node 3"},{text:"node 4"},{text:"node 3"},{text:"node 4"}]}],treeData8:[{text:"node 1",children:[{text:"node 1-1"},{text:"node 1-2"},{text:"node 1-3"},{text:"node 1-4"},{text:"node 1-5"},{text:"node 1-6"},{text:"node 1-7"},{text:"node 1-8"},{text:"node 1-9"},{text:"node 1-10"},{text:"node 1-11"},{text:"node 1-12"}]},{text:"node 2",children:[{text:"node 2-1"},{text:"node 2-2"},{text:"node 2-3"},{text:"node 2-4"},{text:"node 2-5"},{text:"node 2-6"},{text:"node 2-7"},{text:"node 2-8"},{text:"node 2-9"},{text:"node 2-10"},{text:"node 2-11"},{text:"node 2-12"}]},{text:"node 3"},{text:"node 4"},{text:"node 4",droppable:!1},{text:"node 5",children:[{text:"node 1"},{text:"node 2",children:[{text:"node 3"},{text:"node 4"}]},{text:"node 2",droppable:!1,children:[{text:"node 3"},{text:"node 4"}]},{text:"node 2",children:[{text:"node 3"},{text:"node 4",droppable:!1}]},{text:"node 3"},{text:"node 4"},{text:"node 3"},{text:"node 4"},{text:"node 3"},{text:"node 4"},{text:"node 3"},{text:"node 4"}]}],childrenLoader:async e=>{if(await o(l(100,1e3)),3===e.$level)return[];let t=l(2,5);const d=[];for(let n=0;n<t;n++)d.push({text:`node_${x(3).toLowerCase()}`});return d}})}));const m={class:"examples"},$=i("h1",{class:"text-2xl mt-8 font-bold"},[b("Examples"),i("a",{class:"text-sm ml-4 text-primary-500",href:"https://github.com/phphe/he-tree/blob/master/packages/website/src/views/examples.vue"},"source")],-1),D={class:"grid grid-cols-4 gap-4 mt-4"},y=i("h3",{class:"text-xl"},"Base",-1),v=["onClick"],V=["onUpdate:modelValue","onChange"],U=b(" "),L=i("h3",{class:"text-xl"},"Flat Data",-1),_=["onClick"],w=["onUpdate:modelValue","onChange"],z=b(" "),F=i("div",{class:"mt-4"},null,-1),S=i("h3",null,"Virtualization",-1),A=["onClick"],T=["onUpdate:modelValue","onChange"],E=b(" "),j=i("div",{class:"mt-4"},null,-1),B=i("h3",null,"Children Lazy Loading",-1),H=["onClick"],M=["onUpdate:modelValue","onChange"],R=b(" "),X={class:"col-2"},Y=i("h3",null,"Drag & Drop",-1),Z=["onClick"],q=["onUpdate:modelValue","onChange"],G=b(" "),I=i("h3",{class:"mt-4"},"Edge Scroll",-1),J=["onClick"],K=["onUpdate:modelValue","onChange"],N=b(" "),O=i("h3",{class:"mt-4"},"RTL",-1),P=["onClick"],Q=["onUpdate:modelValue","onChange"],W=b(" "),ee={class:"col-3"},te=i("h3",null,"Style",-1),de=["onClick"],ne=["onUpdate:modelValue","onChange"],oe=b(" "),xe=i("br",null,null,-1),le=["onClick"],ae=["onUpdate:modelValue","onChange"],re=b(" "),ce=i("h3",{class:"mt-4"},"Custome Trigger",-1),ie=i("button",{class:"drag-trigger",style:{"margin-right":".5em"}},"drag",-1),he=["onClick"],pe=["onUpdate:modelValue","onChange"],ue=b(" ");C.render=function(e,t,d,n,o,x){const l=a("BaseTree"),b=a("Draggable");return r(),c("div",m,[$,i("div",D,[i("div",null,[y,i("button",{class:"text-primary-500",onClick:t[0]||(t[0]=t=>e.$refs.tree1.unfoldAll())},"unfold all"),i("button",{class:"text-primary-500 ml-2",onClick:t[1]||(t[1]=t=>e.$refs.tree1.foldAll())},"fold all"),h(l,{treeData:e.treeData1,ref:"tree1"},{default:p((({node:e,index:t,tree:d})=>[e.$children.length>0?(r(),c("b",{key:0,onClick:t=>e.$folded=!e.$folded},u(e.$folded?"+":"-")+" ",9,v)):s("",!0),g(i("input",{type:"checkbox","onUpdate:modelValue":t=>e.$checked=t,onChange:t=>d.updateChecked(e)},null,40,V),[[k,e.$checked]]),U,i("span",null,u(e.text),1)])),_:1},8,["treeData"])]),i("div",null,[L,h(l,{flatData:e.flatData1},{default:p((({node:e,index:t,tree:d})=>[e.$children.length>0?(r(),c("b",{key:0,onClick:t=>e.$folded=!e.$folded},u(e.$folded?"+":"-")+" ",9,_)):s("",!0),g(i("input",{type:"checkbox","onUpdate:modelValue":t=>e.$checked=t,onChange:t=>d.updateChecked(e)},null,40,w),[[k,e.$checked]]),z,i("span",null,u(e.text),1)])),_:1},8,["flatData"]),F,S,h(l,{treeData:e.treeData2,virtualization:"",style:{height:"400px",overflow:"auto"},ref:"tree2"},{default:p((({node:e,index:t,tree:d})=>[e.$children.length>0?(r(),c("b",{key:0,onClick:t=>e.$folded=!e.$folded},u(e.$folded?"+":"-")+" ",9,A)):s("",!0),g(i("input",{type:"checkbox","onUpdate:modelValue":t=>e.$checked=t,onChange:t=>d.updateChecked(e)},null,40,T),[[k,e.$checked]]),E,i("span",null,u(e.text),1)])),_:1},8,["treeData"]),j,B,i("button",{class:"text-primary-500",onClick:t[2]||(t[2]=t=>e.$refs.tree3.unfoldAll())},"unfold all"),i("button",{class:"text-primary-500 ml-4",onClick:t[3]||(t[3]=t=>e.$refs.tree3.foldAll())},"fold all"),h(l,{treeData:e.treeData3,virtualization:"",style:{height:"200px",overflow:"auto"},childrenLoader:e.childrenLoader,childrenLazyLoading:"",ref:"tree3"},{default:p((({node:e,index:t,tree:d})=>[i("b",{onClick:t=>d.toggleFold(e)},u(e.$folded?"+":"-")+" ",9,H),g(i("input",{type:"checkbox","onUpdate:modelValue":t=>e.$checked=t,onChange:t=>d.updateChecked(e)},null,40,M),[[k,e.$checked]]),R,i("span",null,u(e.text),1)])),_:1},8,["treeData","childrenLoader"])]),i("div",X,[Y,h(b,{treeData:e.treeData4,virtualization:"",style:{height:"200px",overflow:"auto"},childrenLoader:e.childrenLoader,childrenLazyLoading:""},{default:p((({node:e,index:t,tree:d})=>[i("b",{onClick:t=>d.toggleFold(e)},u(e.$folded?"+":"-")+" ",9,Z),g(i("input",{type:"checkbox","onUpdate:modelValue":t=>e.$checked=t,onChange:t=>d.updateChecked(e)},null,40,q),[[k,e.$checked]]),G,i("span",null,u(e.text)+u(e.$childrenLoading?"-loading":""),1)])),_:1},8,["treeData","childrenLoader"]),I,h(b,{treeData:e.treeData5,virtualization:"",style:{height:"200px",overflow:"auto"},edgeScroll:""},{default:p((({node:e,index:t,tree:d})=>[i("b",{onClick:t=>d.toggleFold(e)},u(e.$folded?"+":"-")+" ",9,J),g(i("input",{type:"checkbox","onUpdate:modelValue":t=>e.$checked=t,onChange:t=>d.updateChecked(e)},null,40,K),[[k,e.$checked]]),N,i("span",null,u(e.text),1)])),_:1},8,["treeData"]),O,h(b,{treeData:e.treeData5,virtualization:"",style:{height:"300px",overflow:"auto"},edgeScroll:"",rtl:"",gap:6},{default:p((({node:e,index:t,tree:d})=>[i("b",{onClick:t=>d.toggleFold(e)},u(e.$folded?"+":"-")+" ",9,P),g(i("input",{type:"checkbox","onUpdate:modelValue":t=>e.$checked=t,onChange:t=>d.updateChecked(e)},null,40,Q),[[k,e.$checked]]),W,i("span",null,u(e.text),1)])),_:1},8,["treeData"])]),i("div",ee,[te,h(b,{class:"tree6",treeData:e.treeData6,virtualization:"",style:{height:"300px",overflow:"auto"},edgeScroll:"",gap:6},{default:p((({node:e,index:t,tree:d})=>[i("b",{onClick:t=>d.toggleFold(e)},u(e.$folded?"+":"-")+" ",9,de),g(i("input",{type:"checkbox","onUpdate:modelValue":t=>e.$checked=t,onChange:t=>d.updateChecked(e)},null,40,ne),[[k,e.$checked]]),oe,i("span",null,u(e.text),1)])),_:1},8,["treeData"]),xe,h(b,{class:"tree7",treeData:e.treeData7,virtualization:"",style:{height:"300px",overflow:"auto"},edgeScroll:"",gap:6},{default:p((({node:e,index:t,tree:d})=>[i("b",{onClick:t=>d.toggleFold(e)},u(e.$folded?"+":"-")+" ",9,le),g(i("input",{type:"checkbox","onUpdate:modelValue":t=>e.$checked=t,onChange:t=>d.updateChecked(e)},null,40,ae),[[k,e.$checked]]),re,i("span",null,u(e.text),1)])),_:1},8,["treeData"]),ce,h(b,{class:"tree8",treeData:e.treeData8,virtualization:"",style:{height:"500px",overflow:"auto"},triggerClass:"drag-trigger",edgeScroll:"",gap:6},{default:p((({node:e,index:t,tree:d})=>[ie,i("b",{onClick:t=>d.toggleFold(e)},u(e.$folded?"+":"-")+" ",9,he),g(i("input",{type:"checkbox","onUpdate:modelValue":t=>e.$checked=t,onChange:t=>d.updateChecked(e)},null,40,pe),[[k,e.$checked]]),ue,i("span",null,u(e.text),1)])),_:1},8,["treeData"])])])])}}}}))}();