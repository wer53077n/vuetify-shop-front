import{_ as b,u as w,ax as y,a5 as C,E as _,r as I,o as f,a6 as k,w as e,b as a,ab as A,V as B,a9 as E,a8 as p,ad as g,bZ as R,aa as T,aw as N,b6 as $,R as F,a as V,av as x,F as v,e as L,aA as M,O as U,ay as z,az as D}from"./index-DAjhxkpu.js";import{V as P,a as c}from"./VRow-D_RdKOeF.js";import{V as S}from"./VContainer-CSb9r1Q3.js";import G from"./footer-TEFfYrRW.js";import{V as O}from"./VPagination-D4qurJCT.js";import"./VDivider-BRRe0oW-.js";const Z={__name:"ProductCard",props:["_id","category","description","image","name","price","sell"],setup(s){const u=w(),m=y(),n=C(),d=s,o=_(!1),i=async()=>{if(!u.isLogin){m.push("/login");return}o.value=!0;const l=await u.addCart(d._id,1);n({text:l.text,snackbarProps:{color:l.color}}),o.value=!1};return(l,r)=>{const t=I("router-link");return f(),k(S,null,{default:e(()=>[a(A,{class:"pa-3"},{default:e(()=>[a(B,{src:s.image,center:"",height:"350"},null,8,["src"]),a(P,null,{default:e(()=>[a(c,null,{default:e(()=>[a(E,null,{default:e(()=>[a(t,{to:"/products/"+s._id},{default:e(()=>[p(g(s.name),1)]),_:1},8,["to"])]),_:1})]),_:1}),a(c,null,{default:e(()=>[a(R,null,{default:e(()=>[p("$"+g(s.price),1)]),_:1})]),_:1})]),_:1}),a(T,null,{default:e(()=>[p(g(s.description),1)]),_:1}),a(N,null,{default:e(()=>[a($),a(F,{color:"#971A07","prepend-icon":"mdi-cart",onClick:i,loading:o.value},{default:e(()=>[p("加入購物車")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})}}},j=b(Z,[["__scopeId","data-v-3dc6b1a1"]]),q=s=>(z("data-v-e5bfb0a1"),s=s(),D(),s),H={class:"background"},J=q(()=>x("h1",{class:"text-center"},"梅室週邊",-1)),h=20,K={__name:"shop",setup(s){const{api:u}=M(),m=C(),n=_(1),d=_(1),o=_([]),i=async()=>{var l,r;try{const{data:t}=await u.get("/product",{params:{itemsPerPage:h,page:n.value}});d.value=Math.ceil(t.result.total/h),o.value.splice(0,o.value.length,...t.result.data)}catch(t){console.log(t),m({text:((r=(l=t==null?void 0:t.response)==null?void 0:l.data)==null?void 0:r.message)||"發生錯誤",snackbarProps:{color:"red"}})}};return i(),(l,r)=>(f(),V(v,null,[x("div",H,[a(S,null,{default:e(()=>[a(P,null,{default:e(()=>[a(c,{cols:"12"},{default:e(()=>[J]),_:1}),(f(!0),V(v,null,L(o.value,t=>(f(),k(c,{cols:"12",md:"6",lg:"3",key:t._id},{default:e(()=>[a(j,U({ref_for:!0},t),null,16)]),_:2},1024))),128)),a(c,{cols:"12"},{default:e(()=>[a(O,{modelValue:n.value,"onUpdate:modelValue":[r[0]||(r[0]=t=>n.value=t),i],length:d.value,rounded:"circle"},null,8,["modelValue","length"])]),_:1})]),_:1})]),_:1})]),a(G)],64))}},ta=b(K,[["__scopeId","data-v-e5bfb0a1"]]);export{ta as default};
