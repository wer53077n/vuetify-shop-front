import{_ as B,u as F,a5 as I,E as g,a6 as V,w as o,ax as N,o as b,b as a,d as t,aJ as R,aH as x,R as u,a8 as m,ac as U,aK as A,ab as D,a9 as M,aa as q,a7 as P,ay as z,az as E,av as H}from"./index-DAjhxkpu.js";import{c as J,a as _,u as K,e as C}from"./vee-validate.esm-DHpjM5UJ.js";import{v as L,_ as j}from"./register-DXSJ_lMn.js";import{V as G}from"./VContainer-CSb9r1Q3.js";import{a as c,V as w}from"./VRow-D_RdKOeF.js";import{V as O}from"./VForm-CYAZqKOl.js";const Q=n=>(z("data-v-980644d5"),n=n(),E(),n),W=Q(()=>H("h1",{class:"text-center"},"登入",-1)),X={__name:"login",setup(n){const k=N(),y=F(),p=I(),r=g(!1),f=g("register"),S=J({account:_().required("使用者帳號必填").min(4,"使用者帳號長度不符").max(20,"使用者帳號長度不符").test("isAlphanumeric","使用者帳號格式錯誤",l=>L.isAlphanumeric(l)),password:_().required("使用者密碼必填").min(4,"使用者密碼長度不符").max(20,"使用者密碼長度不符")}),{handleSubmit:$,isSubmitting:v}=K({validationSchema:S}),i=C("account"),d=C("password"),T=$(async(l,{emit:e})=>{const s=await y.login(l);s==="登入成功"?(p({text:s,snackbarProps:{color:"green"}}),k.push("/"),e("close-dialog")):p({text:s,snackbarProps:{color:"red"}})}),h=l=>{f.value=l,r.value=!0};return(l,e)=>(b(),V(G,null,{default:o(()=>[a(w,null,{default:o(()=>[a(c,{cols:"12"},{default:o(()=>[W]),_:1}),a(c,{cols:"12"},{default:o(()=>[a(O,{disabled:t(v),onSubmit:R(t(T),["prevent"])},{default:o(()=>[a(x,{label:"帳號",minlength:"4",maxlength:"20",counter:"",modelValue:t(i).value.value,"onUpdate:modelValue":e[0]||(e[0]=s=>t(i).value.value=s),"error-messages":t(i).errorMessage.value},null,8,["modelValue","error-messages"]),a(x,{label:"密碼",minlength:"4",maxlength:"20",counter:"",type:"password",modelValue:t(d).value.value,"onUpdate:modelValue":e[1]||(e[1]=s=>t(d).value.value=s),"error-messages":t(d).errorMessage.value},null,8,["modelValue","error-messages"]),a(w,null,{default:o(()=>[a(c,{class:"py-8"},{default:o(()=>[a(u,{type:"submit",color:"#971A07",loading:t(v),elevation:"0",onClick:e[2]||(e[2]=s=>l.$emit("close-dialog"))},{default:o(()=>[m("登入")]),_:1},8,["loading"]),a(u,{type:"button",color:"gray",class:"ms-5",onClick:e[3]||(e[3]=s=>l.$emit("close-dialog"))},{default:o(()=>[m("取消")]),_:1}),a(u,{type:"button",class:"novip ml-5",onClick:e[4]||(e[4]=s=>h("register")),elevation:"0"},{default:o(()=>[m(" 還不是梅室會員 ")]),_:1})]),_:1})]),_:1}),a(U,{modelValue:t(r),"onUpdate:modelValue":e[7]||(e[7]=s=>A(r)?r.value=s:null),"max-width":"400px"},{default:o(()=>[t(f)==="register"?(b(),V(D,{key:0},{default:o(()=>[a(M,{class:"headline"}),a(u,{class:"text-right ml-3",icon:"mdi-close",variant:"text",onClick:e[5]||(e[5]=s=>r.value=!1)}),a(q,null,{default:o(()=>[a(j,{onCloseDialog:e[6]||(e[6]=s=>r.value=!1)})]),_:1})]),_:1})):P("",!0)]),_:1},8,["modelValue"])]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1})]),_:1}))}},te=B(X,[["__scopeId","data-v-980644d5"]]);export{te as default};
