import{p as I,m as W,f as X,g as R,h as E,b as a,i as ie,j as ue,k as le,l as oe,n as ne,t as A,q as ce,s as de,v as se,x as ve,y as me,z as p,c as b,A as ge,V as fe,B as Y,C as U,D as be,E as L,G as he,H as M,I as ye,J as Ve,K as ke,L as xe,M as _e,N as Se,O as D,P as Te,Q as Be,R as w,S as Ce,T as we,U as Ne,W as pe,X as Ie,Y as Pe,Z as He,$ as Le,a0 as Ae,a1 as De,a2 as Re,a3 as z,_ as Ee,a4 as $e,u as Ue,a5 as Me,r as Z,o as f,a as P,d as T,a6 as k,w as n,F,e as j,a7 as B,a8 as C,a9 as G,aa as J,ab as K,ac as Fe,ad as H}from"./index-DAjhxkpu.js";import Ye from"./login-BtqmC58Y.js";import{_ as je}from"./register-DXSJ_lMn.js";import{u as ze,V as Q,a as ee,b as We}from"./VList-Cjttm4-y.js";import{V as Xe,a as qe}from"./VNavigationDrawer-89EM7C0Z.js";import{V as Oe}from"./VContainer-CSb9r1Q3.js";import{V as Ze}from"./VMenu-DgC9EtdG.js";import"./vee-validate.esm-DHpjM5UJ.js";import"./VRow-D_RdKOeF.js";import"./VForm-CYAZqKOl.js";import"./VDivider-BRRe0oW-.js";const Ge=I({text:String,...W(),...X()},"VToolbarTitle"),Je=R()({name:"VToolbarTitle",props:Ge(),setup(e,d){let{slots:t}=d;return E(()=>{const h=!!(t.default||t.text||e.text);return a(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var c;return[h&&a("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(c=t.default)==null?void 0:c.call(t)])]}})}),{}}}),Ke=[null,"prominent","default","comfortable","compact"],re=I({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Ke.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ie(),...W(),...ue(),...le(),...X({tag:"header"}),...oe()},"VToolbar"),te=R()({name:"VToolbar",props:re(),setup(e,d){var y;let{slots:t}=d;const{backgroundColorClasses:h,backgroundColorStyles:c}=ne(A(e,"color")),{borderClasses:o}=ce(e),{elevationClasses:v}=de(e),{roundedClasses:m}=se(e),{themeClasses:V}=ve(e),{rtlClasses:x}=me(),r=p(!!(e.extended||(y=t.extension)!=null&&y.call(t))),g=b(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),s=b(()=>r.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return ge({VBtn:{variant:"text"}}),E(()=>{var N;const u=!!(e.title||t.title),l=!!(t.image||e.image),_=(N=t.extension)==null?void 0:N.call(t);return r.value=!!(e.extended||_),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},h.value,o.value,v.value,m.value,V.value,x.value,e.class],style:[c.value,e.style]},{default:()=>[l&&a("div",{key:"image",class:"v-toolbar__image"},[t.image?a(Y,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(fe,{key:"image-img",cover:!0,src:e.image},null)]),a(Y,{defaults:{VTabs:{height:U(g.value)}}},{default:()=>{var $,i,S;return[a("div",{class:"v-toolbar__content",style:{height:U(g.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[($=t.prepend)==null?void 0:$.call(t)]),u&&a(Je,{key:"title",text:e.title},{text:t.title}),(i=t.default)==null?void 0:i.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(S=t.append)==null?void 0:S.call(t)])])]}}),a(Y,{defaults:{VTabs:{height:U(s.value)}}},{default:()=>[a(be,null,{default:()=>[r.value&&a("div",{class:"v-toolbar__extension",style:{height:U(s.value)}},[_])]})]})]})}),{contentHeight:g,extensionHeight:s}}}),Qe=I({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function et(e){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=d;let h=0,c=0;const o=L(null),v=p(0),m=p(0),V=p(0),x=p(!1),r=p(!1),g=b(()=>Number(e.scrollThreshold)),s=b(()=>he((g.value-v.value)/g.value||0)),y=()=>{const u=o.value;if(!u||t&&!t.value)return;h=v.value,v.value="window"in u?u.pageYOffset:u.scrollTop;const l=u instanceof Window?document.documentElement.scrollHeight:u.scrollHeight;if(c!==l){c=l;return}r.value=v.value<h,V.value=Math.abs(v.value-g.value)};return M(r,()=>{m.value=m.value||v.value}),M(x,()=>{m.value=0}),ye(()=>{M(()=>e.scrollTarget,u=>{var _;const l=u?document.querySelector(u):window;l&&l!==o.value&&((_=o.value)==null||_.removeEventListener("scroll",y),o.value=l,o.value.addEventListener("scroll",y,{passive:!0}))},{immediate:!0})}),Ve(()=>{var u;(u=o.value)==null||u.removeEventListener("scroll",y)}),t&&M(t,y,{immediate:!0}),{scrollThreshold:g,currentScroll:v,currentThreshold:V,isScrollActive:x,scrollRatio:s,isScrollingUp:r,savedScroll:m}}const tt=I({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...re(),...ke(),...Qe(),height:{type:[Number,String],default:64}},"VAppBar"),at=R()({name:"VAppBar",props:tt(),emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:t}=d;const h=L(),c=xe(e,"modelValue"),o=b(()=>{var S;const i=new Set(((S=e.scrollBehavior)==null?void 0:S.split(" "))??[]);return{hide:i.has("hide"),fullyHide:i.has("fully-hide"),inverted:i.has("inverted"),collapse:i.has("collapse"),elevate:i.has("elevate"),fadeImage:i.has("fade-image")}}),v=b(()=>{const i=o.value;return i.hide||i.fullyHide||i.inverted||i.collapse||i.elevate||i.fadeImage||!c.value}),{currentScroll:m,scrollThreshold:V,isScrollingUp:x,scrollRatio:r}=et(e,{canScroll:v}),g=b(()=>o.value.hide||o.value.fullyHide),s=b(()=>e.collapse||o.value.collapse&&(o.value.inverted?r.value>0:r.value===0)),y=b(()=>e.flat||o.value.fullyHide&&!c.value||o.value.elevate&&(o.value.inverted?m.value>0:m.value===0)),u=b(()=>o.value.fadeImage?o.value.inverted?1-r.value:r.value:void 0),l=b(()=>{var q,O;const i=Number(((q=h.value)==null?void 0:q.contentHeight)??e.height),S=Number(((O=h.value)==null?void 0:O.extensionHeight)??0);return g.value?m.value<V.value||o.value.fullyHide?i+S:i:i+S});_e(b(()=>!!e.scrollBehavior),()=>{Te(()=>{g.value?o.value.inverted?c.value=m.value>V.value:c.value=x.value||m.value<V.value:c.value=!0})});const{ssrBootStyles:_}=ze(),{layoutItemStyles:N,layoutIsReady:$}=Se({id:e.name,order:b(()=>parseInt(e.order,10)),position:A(e,"location"),layoutSize:l,elementSize:p(void 0),active:c,absolute:A(e,"absolute")});return E(()=>{const i=te.filterProps(e);return a(te,D({ref:h,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...N.value,"--v-toolbar-image-opacity":u.value,height:void 0,..._.value},e.style]},i,{collapse:s.value,flat:y.value}),t)}),$}}),lt=I({...Be({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),ot=R()({name:"VAppBarNavIcon",props:lt(),setup(e,d){let{slots:t}=d;return E(()=>a(w,D(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),nt=I({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:Ce,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...W(),...we({location:"top end"}),...le(),...X(),...oe(),...Ne({transition:"scale-rotate-transition"})},"VBadge"),ae=R()({name:"VBadge",inheritAttrs:!1,props:nt(),setup(e,d){const{backgroundColorClasses:t,backgroundColorStyles:h}=ne(A(e,"color")),{roundedClasses:c}=se(e),{t:o}=pe(),{textColorClasses:v,textColorStyles:m}=Ie(A(e,"textColor")),{themeClasses:V}=Pe(),{locationStyles:x}=He(e,!0,r=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(r)?+(e.offsetY??0):["left","right"].includes(r)?+(e.offsetX??0):0));return E(()=>{const r=Number(e.content),g=!e.max||isNaN(r)?e.content:r<=+e.max?r:`${e.max}+`,[s,y]=Le(d.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return a(e.tag,D({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},y,{style:e.style}),{default:()=>{var u,l;return[a("div",{class:"v-badge__wrapper"},[(l=(u=d.slots).default)==null?void 0:l.call(u),a(Ae,{transition:e.transition},{default:()=>{var _,N;return[De(a("span",D({class:["v-badge__badge",V.value,t.value,c.value,v.value],style:[h.value,m.value,e.inline?{}:x.value],"aria-atomic":"true","aria-label":o(e.label,r),"aria-live":"polite",role:"status"},s),[e.dot?void 0:d.slots.badge?(N=(_=d.slots).badge)==null?void 0:N.call(_):e.icon?a(z,{icon:e.icon},null):g]),[[Re,e.modelValue]])]}})])]}})}),{}}}),st=""+new URL("umemuro-background-D1NpyZYF.jpg",import.meta.url).href,rt={key:1,class:"d-flex justify-center align-center"},it={__name:"default",setup(e){const{mobile:d}=$e(),t=Ue(),h=Me(),c=L(!1),o=L(!1),v=L("login"),m=b(()=>[{to:"/#food",title:"嚴選食材",icon:null,show:!0},{to:"/#menu",title:"好料菜單",icon:null,show:!0},{to:"/#map",title:"梅室在哪",icon:null,show:!0},{to:"/reserve",title:"預約服務",icon:null,show:!0},{to:"/shop",title:"梅室週邊",icon:null,show:!0},{to:"/cart",icon:"mdi-cart",show:!0}]),V=b(()=>[{to:"/admin",title:"管理者系統",icon:"mdi-account-cog",show:!t.isAdmin},{to:"/orders",title:"訂單查詢",icon:"mdi-list-box",show:!0}]),x=async()=>{await t.logout(),h({text:"登出成功",snackbarProps:{color:"green"}})},r=g=>{v.value=g,o.value=!0};return(g,s)=>{const y=Z("router-link"),u=Z("router-view");return f(),P(F,null,[T(d)?(f(),k(Xe,{key:0,modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=l=>c.value=l)},{default:n(()=>[a(Q,{nav:""},{default:n(()=>[(f(!0),P(F,null,j(m.value,l=>(f(),k(ee,{key:l.to,to:l.to},{prepend:n(()=>[a(z,null,{default:n(()=>[C(H(l.icon),1)]),_:2},1024)]),append:n(()=>[l.to==="/cart"&&T(t).cart>0?(f(),k(ae,{key:0,color:"error",content:T(t).cart,inline:""},null,8,["content"])):B("",!0)]),default:n(()=>[a(We,null,{default:n(()=>[C(H(l.title),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:1})]),_:1},8,["modelValue"])):B("",!0),a(at,{image:st,elevation:0},{default:n(()=>[a(Oe,{class:"d-flex justify-center"},{default:n(()=>[T(d)?(f(),k(ot,{key:0,onClick:s[1]||(s[1]=l=>c.value=!0)})):(f(),P("div",rt,[(f(!0),P(F,null,j(m.value,l=>(f(),k(y,{key:l.to,to:l.to},{default:n(()=>[a(w,{"prepend-icon":l.icon,class:"nav-link","text-center":""},{default:n(()=>[C(H(l.title)+" ",1),l.to==="/cart"?(f(),k(ae,{key:0,color:"red",content:T(t).cart,floating:""},null,8,["content"])):B("",!0)]),_:2},1032,["prepend-icon"])]),_:2},1032,["to"]))),128)),a(Ze,{"open-on-hover":""},{activator:n(({props:l})=>[T(t).isLogin?(f(),k(w,D({key:0,color:"#971a07"},l,{class:"nav-link"}),{default:n(()=>[C(" 會員中心 ")]),_:2},1040)):B("",!0)]),default:n(()=>[a(Q,null,{default:n(()=>[(f(!0),P(F,null,j(V.value,l=>(f(),k(ee,{key:l.to},{default:n(()=>[a(y,{to:l.to},{default:n(()=>[a(w,{class:"nav-link","text-center":""},{prepend:n(()=>[a(z,null,{default:n(()=>[C(H(l.icon),1)]),_:2},1024)]),default:n(()=>[C(" "+H(l.title),1)]),_:2},1024)]),_:2},1032,["to"])]),_:2},1024))),128)),T(t).isLogin?(f(),k(w,{key:0,"prepend-icon":"mdi-account-arrow-right",onClick:x,class:"nav-link"},{default:n(()=>[C(" 登出 ")]),_:1})):B("",!0)]),_:1})]),_:1}),T(t).isLogin?B("",!0):(f(),k(w,{key:0,onClick:s[2]||(s[2]=l=>r("login")),class:"nav-link"},{default:n(()=>[C(" 登入/註冊 ")]),_:1}))]))]),_:1})]),_:1}),a(Fe,{modelValue:o.value,"onUpdate:modelValue":s[7]||(s[7]=l=>o.value=l),"max-width":"400px"},{default:n(()=>[v.value==="register"?(f(),k(K,{key:0},{default:n(()=>[a(G,{class:"headline"}),a(w,{class:"text-right ml-3",icon:"mdi-close",variant:"text",onClick:s[3]||(s[3]=l=>o.value=!1)}),a(J,null,{default:n(()=>[a(je,{onCloseDialog:s[4]||(s[4]=l=>o.value=!1)})]),_:1})]),_:1})):B("",!0),v.value==="login"?(f(),k(K,{key:1},{default:n(()=>[a(G,{class:"headline"}),a(w,{class:"text-right ml-3",icon:"mdi-close",variant:"text",onClick:s[5]||(s[5]=l=>o.value=!1)}),a(J,null,{default:n(()=>[a(Ye,{onCloseDialog:s[6]||(s[6]=l=>o.value=!1)})]),_:1})]),_:1})):B("",!0)]),_:1},8,["modelValue"]),a(qe,null,{default:n(()=>[a(u)]),_:1})],64)}}},kt=Ee(it,[["__scopeId","data-v-556c11ad"]]);export{kt as default};
