import{_ as h,a5 as b,E as V,o as l,a as i,b as a,w as o,av as m,F as v,e as g,az as x,ad as d,ax as w,ay as I}from"./index-C8wmJ89v.js";import{b as p}from"./route-block-B_A1xBdJ.js";import{V as S}from"./VContainer-C4umLoXl.js";import{V as A,a as u}from"./VRow-PQ6rGUBA.js";import{V as D}from"./VDivider-CRlyjCJs.js";import{V as B}from"./VDataTable-CRoUFqQr.js";import"./VPagination-OCRkvI3L.js";import"./VSelect-HJBOfzQk.js";import"./VList-B9Iiz-P7.js";import"./VMenu-BpEziw3s.js";const C=r=>(w("data-v-47bf49a5"),r=r(),I(),r),q={class:"background"},E=C(()=>m("h1",{class:"text-center"},"訂單管理",-1)),_={__name:"orders",setup(r){const{apiAuth:f}=x(),y=b(),n=V([]),k=[{title:"編號",key:"_id"},{title:"帳號",key:"user.account"},{title:"日期",key:"createdAt",value:t=>new Date(t.createdAt).toLocaleString()},{title:"商品",key:"cart",sortable:!1},{title:"金額",key:"price",value:t=>t.cart.reduce((s,e)=>s+e.quantity*e.p_id.price,0)},{title:"編輯",align:"center",sortable:!1,key:"action"}];return(async()=>{var t,s;try{const{data:e}=await f.get("/order/all");n.value.push(...e.result)}catch(e){console.log(e),y({text:((s=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:s.message)||"發生錯誤",snackbarProps:{color:"red"}})}})(),(t,s)=>(l(),i("div",q,[a(S,null,{default:o(()=>[a(A,null,{default:o(()=>[a(u,{cols:"12"},{default:o(()=>[E]),_:1}),a(D),a(u,{cols:"10"},{default:o(()=>[a(B,{items:n.value,headers:k,class:"pa-7"},{"item.cart":o(e=>[m("ul",null,[(l(!0),i(v,null,g(e.item.cart,c=>(l(),i("li",{key:c._id},d(c.p_id.name)+" * "+d(c.quantity),1))),128))])]),_:2},1032,["items"])]),_:1})]),_:1})]),_:1})]))}};typeof p=="function"&&p(_);const K=h(_,[["__scopeId","data-v-47bf49a5"]]);export{K as default};
