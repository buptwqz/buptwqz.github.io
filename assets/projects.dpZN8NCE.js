import{T as L,u as C,l as B,e as S,f as T}from"./app.C63hCeL4.js";import{_ as V}from"./YunComment.vue_vue_type_style_index_0_lang.DI8nccdU.js";import{_ as N}from"./YunSponsor.vue_vue_type_style_index_0_lang.C8fLCbJ9.js";import{f as h,P as n,O as t,Z as Y,S as s,X as w,r as P,c as v,R as _,V as j,F as p,$,N as b,U as R,e as F,u as k,y as g,a3 as x,W as I}from"./framework.DBZiiW_D.js";import{u as z}from"./chunks/@vueuse/motion.mfumzmzq.js";import{c as H}from"./index.BRXJGymZ.js";import"./chunks/dayjs.CCYrSalk.js";import{u as M}from"./chunks/vue-i18n.C9-DimC-.js";import"./chunks/vue-router.Coxe9doJ.js";import"./chunks/pinia.BBqn2ZBt.js";import"./chunks/nprogress.BahbDzmd.js";import"./index.C5okkQwF.js";const U=["href"],D=h({__name:"YunProjectLinkItem",props:{item:{}},setup(f){return(e,l)=>(t(),n("a",{class:"yun-project-link-item inline-flex items-center justify-center flex-1 p-2 h-full text-white",href:e.item.url,target:"_blank",style:Y({"--c-brand":e.item.color})},[s("div",{class:w(e.item.icon)},null,2)],12,U))}}),W={key:0,class:"mt-4"},E=["href"],J={text:"lg",font:"bold",m:"2"},O=["innerHTML"],X={flex:"~ center",class:"absolute left-0 right-0 bottom-0 h-10"},Z=h({__name:"YunProjectCard",props:{i:{},project:{}},setup(f){const e=f,l=P();z(l,{initial:{opacity:0,y:50},enter:{opacity:1,y:0,transition:{delay:e.i*50,type:"spring",ease:H.easeIn,damping:8,duration:400}}});const u=v(()=>{const o={color:e.project.textColor};if(e.project.color&&(typeof e.project.gradient>"u"||e.project.gradient)){const c=new L(e.project.color);o["--un-gradient-stops"]=`${c.spin(55).toHexString()}, ${e.project.color}`,o.color||(o.color=c.isDark()?"white":"black")}else o.backgroundColor=e.project.color||"rgba(255,255,255,0.9)",o.color||(o.color="black");return o}),r=v(()=>e.project.github?`https://github.com/${e.project.github}`:`https://github.com/YunYouJun/${e.project.name}`),m=v(()=>e.project.npm?`https://www.npmjs.com/package/${e.project.npm}`:""),i=v(()=>e.project.url||r.value),d=v(()=>[{url:i.value,icon:"i-ri-global-line",color:"#6eb7f9"},{url:e.project.docs,icon:"i-ri-book-line",color:"#443ed1"},{url:r.value,icon:"i-ri-github-line",color:"black"},{url:m.value,icon:"i-ri-npmjs-line",color:"red"}]);return(o,c)=>{const a=D;return t(),n("div",{ref_key:"cardRef",ref:l,flex:"~ col center",class:"m-2 w-90 transform rounded shadow-md grayscale-30",bg:"opacity-80 gradient-to-br",p:"x-2 b-12",hover:"shadow-lg grayscale-0",style:Y(u.value)},[o.project.emoji?(t(),n("div",W,j(o.project.emoji),1)):_("v-if",!0),s("a",{href:i.value,target:"_blank",class:"text-unset"},[s("h2",J,j(o.project.name||"忘记叫啥了"),1)],8,E),s("small",{class:"block",p:"2",text:"center",innerHTML:o.project.desc||"说点什么好呢"},null,8,O),s("div",X,[(t(!0),n(p,null,$(d.value,y=>(t(),n(p,{key:y.icon},[y.url?(t(),b(a,{key:0,item:y},null,8,["item"])):_("v-if",!0)],64))),128))])],4)}}}),q={class:"w-full flex justify-center",text:"xl",font:"black",m:"b-2 t-4"},A=h({__name:"YunProjectCollection",props:{title:{},projects:{}},setup(f){return(e,l)=>{const u=Z;return t(),n(p,null,[s("div",q,j(e.title),1),(t(!0),n(p,null,$(e.projects,(r,m)=>(t(),b(u,{key:m,project:r,i:m},null,8,["project","i"]))),128))],64)}}}),G=h({__name:"YunProjectToggleButton",props:{active:{type:Boolean}},setup(f){return(e,l)=>(t(),n("button",{class:w(["bg-white-90 m-2 inline-flex items-center justify-center rounded px-2 gap-2 h-8",{"bg-blue-500 text-white":e.active,"hover:bg-$va-c-bg-soft":!e.active}])},[R(e.$slots,"default")],2))}}),K={flex:"~ col center"},Q={class:"mb-3 text-2xl"},ee={flex:"~ wrap",justify:"center"},te={class:"inline-flex"},oe={class:"inline-flex"},ne={flex:"~ wrap",justify:"center"},re=h({__name:"YunProjects",setup(f){const e=C(),{t:l}=M(),u=F(e.value.projects),r=P("all");return(m,i)=>{const d=G,o=A;return t(),n("div",K,[s("h2",Q,j(k(e).title||k(l)("title.projects")),1),s("div",ee,[g(d,{active:r.value==="all",onClick:i[0]||(i[0]=c=>r.value="all")},{default:x(()=>i[1]||(i[1]=[I(" 全部 ")])),_:1},8,["active"]),(t(!0),n(p,null,$(u,(c,a)=>(t(),b(d,{key:a,active:a===r.value,onClick:y=>r.value=a},{default:x(()=>[s("span",te,j(c.emoji),1),s("span",oe,j(c.title),1)]),_:2},1032,["active","onClick"]))),128))]),s("div",ne,[(t(!0),n(p,null,$(u,(c,a)=>(t(),n(p,{key:a},[r.value==="all"||r.value===a?(t(),b(o,{key:0,title:c.title,projects:u[a].collection},null,8,["title","projects"])):_("v-if",!0)],64))),128))])])}}}),se={flex:"~ col"},ve=h({__name:"projects",setup(f){const e=B(),l=C();return(u,r)=>{const m=re,i=N,d=V,o=S,c=T;return t(),n(p,null,[g(o,null,{default:x(()=>[s("div",se,[g(m),_(" <YunLayoutLeft /> "),_(" <RouterView /> "),_(" <YunLayoutRight /> "),g(i,{class:"mt-4"}),k(e).comment.enable&&k(l).comment!==!1?(t(),b(d,{key:0,class:"max-w-4xl m-auto"})):_("v-if",!0)])]),_:1}),g(c)],64)}}});export{ve as default};
