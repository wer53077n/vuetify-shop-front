import{_ as h,a5 as y,E as V,a as l,b as a,w as s,o as n,av as u,F as k,e as x,aA as g,ad as d,ay as v,az as S}from"./index-DAjhxkpu.js";import{V as b}from"./VContainer-CSb9r1Q3.js";import{a as p,V as w}from"./VRow-D_RdKOeF.js";import{V as I}from"./VSheet-BsvkK7jc.js";import{V as A}from"./VDataTable-CjOn0ppH.js";import"./VPagination-D4qurJCT.js";import"./VSelect-bO0apoHE.js";import"./VList-Cjttm4-y.js";import"./VDivider-BRRe0oW-.js";import"./VMenu-DgC9EtdG.js";const B=o=>(v("data-v-262dae4e"),o=o(),S(),o),C={class:"background"},D=B(()=>u("h1",{class:"text-center pa-5"},"訂單查詢",-1)),j={__name:"orders",setup(o){const{apiAuth:_}=g(),m=y(),i=V([]),f=[{title:"編號",key:"_id"},{title:"日期",key:"createdAt",value:t=>new Date(t.createdAt).toLocaleString()},{title:"商品",key:"cart",sortable:!1},{title:"金額",key:"price",value:t=>t.cart.reduce((r,e)=>r+e.quantity*e.p_id.price,0)}];return(async()=>{var t,r;try{const{data:e}=await _.get("/order");i.value.push(...e.result)}catch(e){console.log(e),m({text:((r=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:r.message)||"發生錯誤",snackbarProps:{color:"red"}})}})(),(t,r)=>(n(),l("div",C,[a(b,null,{default:s(()=>[a(p,{cols:"12"},{default:s(()=>[D]),_:1}),a(I,{rounded:""},{default:s(()=>[a(w,{justify:"center",align:"center",class:"text-center"},{default:s(()=>[a(p,{cols:"12",class:"d-flex justify-center pa-10 text-center"},{default:s(()=>[a(A,{items:i.value,headers:f,class:"text-center"},{"item.cart":s(e=>[u("ul",null,[(n(!0),l(k,null,x(e.item.cart,c=>(n(),l("li",{key:c._id},d(c.p_id.name)+" * "+d(c.quantity),1))),128))])]),_:2},1032,["items"])]),_:1})]),_:1})]),_:1})]),_:1})]))}},J=h(j,[["__scopeId","data-v-262dae4e"]]);export{J as default};
