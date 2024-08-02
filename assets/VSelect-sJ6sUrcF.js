import{p as q,S as Y,aQ as Me,m as oe,aZ as Le,l as ke,g as Q,L as ne,aD as Se,c as V,as as He,ai as Ve,A as Ge,t as F,h as Z,b as r,bp as Ue,z as R,E as le,aE as rl,O as L,a0 as ye,bi as Ke,F as te,a2 as X,bq as cl,aN as qe,a_ as $e,aL as de,X as dl,n as vl,br as ge,aq as fe,aB as Ce,ak as fl,f as Ie,bs as Ne,y as ml,a4 as We,bt as je,bu as ve,bv as hl,bw as se,H as J,bc as we,bx as be,by as Qe,x as Xe,aY as Te,i as yl,j as gl,bz as bl,k as pl,bA as kl,bB as Sl,W as Ye,q as Vl,bC as Cl,s as Il,v as xl,bD as Pl,bE as wl,bF as Tl,bG as Al,bH as El,B as ie,a1 as Bl,bI as pe,bJ as Dl,bK as Je,am as Fl,bL as Ae,b0 as Ee,bl as Ze,bM as Rl,bN as Ol,bO as Be,P as De,G as me,bP as _l,ae as zl,aP as Ml,af as Ll,M as Hl,C as ce,I as Gl,bQ as Ul,bR as Kl,U as ql,bS as $l,aG as Fe,bT as Nl,a8 as Wl}from"./index-B6C-OAFi.js";import{m as jl,b as Ql,V as Xl,a as Re}from"./VList-BCYrwt2R.js";const el=Symbol.for("vuetify:selection-control-group"),ll=q({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:Y,trueIcon:Y,ripple:{type:[Boolean,Object],default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:Me},...oe(),...Le(),...ke()},"SelectionControlGroup"),Yl=q({...ll({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");Q()({name:"VSelectionControlGroup",props:Yl(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:l}=s;const n=ne(e,"modelValue"),o=Se(),y=V(()=>e.id||`v-selection-control-group-${o}`),f=V(()=>e.name||y.value),a=new Set;return He(el,{modelValue:n,forceUpdate:()=>{a.forEach(t=>t())},onForceUpdate:t=>{a.add(t),Ve(()=>{a.delete(t)})}}),Ge({[e.defaultsTarget]:{color:F(e,"color"),disabled:F(e,"disabled"),density:F(e,"density"),error:F(e,"error"),inline:F(e,"inline"),modelValue:n,multiple:V(()=>!!e.multiple||e.multiple==null&&Array.isArray(n.value)),name:f,falseIcon:F(e,"falseIcon"),trueIcon:F(e,"trueIcon"),readonly:F(e,"readonly"),ripple:F(e,"ripple"),type:F(e,"type"),valueComparator:F(e,"valueComparator")}}),Z(()=>{var t;return r("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(t=l.default)==null?void 0:t.call(l)])}),{}}});const tl=q({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...oe(),...ll()},"VSelectionControl");function Jl(e){const s=qe(el,void 0),{densityClasses:l}=$e(e),n=ne(e,"modelValue"),o=V(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),y=V(()=>e.falseValue!==void 0?e.falseValue:!1),f=V(()=>!!e.multiple||e.multiple==null&&Array.isArray(n.value)),a=V({get(){const x=s?s.modelValue.value:n.value;return f.value?de(x).some(g=>e.valueComparator(g,o.value)):e.valueComparator(x,o.value)},set(x){if(e.readonly)return;const g=x?o.value:y.value;let d=g;f.value&&(d=x?[...de(n.value),g]:de(n.value).filter(i=>!e.valueComparator(i,o.value))),s?s.modelValue.value=d:n.value=d}}),{textColorClasses:t,textColorStyles:k}=dl(V(()=>{if(!(e.error||e.disabled))return a.value?e.color:e.baseColor})),{backgroundColorClasses:w,backgroundColorStyles:C}=vl(V(()=>a.value&&!e.error&&!e.disabled?e.color:e.baseColor)),m=V(()=>a.value?e.trueIcon:e.falseIcon);return{group:s,densityClasses:l,trueValue:o,falseValue:y,model:a,textColorClasses:t,textColorStyles:k,backgroundColorClasses:w,backgroundColorStyles:C,icon:m}}const Oe=Q()({name:"VSelectionControl",directives:{Ripple:Ue},inheritAttrs:!1,props:tl(),emits:{"update:modelValue":e=>!0},setup(e,s){let{attrs:l,slots:n}=s;const{group:o,densityClasses:y,icon:f,model:a,textColorClasses:t,textColorStyles:k,backgroundColorClasses:w,backgroundColorStyles:C,trueValue:m}=Jl(e),x=Se(),g=R(!1),d=R(!1),i=le(),p=V(()=>e.id||`input-${x}`),P=V(()=>!e.disabled&&!e.readonly);o==null||o.onForceUpdate(()=>{i.value&&(i.value.checked=a.value)});function E(S){P.value&&(g.value=!0,ge(S.target,":focus-visible")!==!1&&(d.value=!0))}function T(){g.value=!1,d.value=!1}function H(S){S.stopPropagation()}function W(S){if(!P.value){i.value&&(i.value.checked=a.value);return}e.readonly&&o&&fe(()=>o.forceUpdate()),a.value=S.target.checked}return Z(()=>{var G,N;const S=n.label?n.label({label:e.label,props:{for:p.value}}):e.label,[_,$]=rl(l),D=r("input",L({ref:i,checked:a.value,disabled:!!e.disabled,id:p.value,onBlur:T,onFocus:E,onInput:W,"aria-disabled":!!e.disabled,"aria-label":e.label,type:e.type,value:m.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},$),null);return r("div",L({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":g.value,"v-selection-control--focus-visible":d.value,"v-selection-control--inline":e.inline},y.value,e.class]},_,{style:e.style}),[r("div",{class:["v-selection-control__wrapper",t.value],style:k.value},[(G=n.default)==null?void 0:G.call(n,{backgroundColorClasses:w,backgroundColorStyles:C}),ye(r("div",{class:["v-selection-control__input"]},[((N=n.input)==null?void 0:N.call(n,{model:a,textColorClasses:t,textColorStyles:k,backgroundColorClasses:w,backgroundColorStyles:C,inputNode:D,icon:f.value,props:{onFocus:E,onBlur:T,id:p.value}}))??r(te,null,[f.value&&r(X,{key:"icon",icon:f.value},null),D])]),[[Ke("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),S&&r(cl,{for:p.value,onClick:H},{default:()=>[S]})])}),{isFocused:g,input:i}}}),Zl=q({indeterminate:Boolean,indeterminateIcon:{type:Y,default:"$checkboxIndeterminate"},...tl({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),et=Q()({name:"VCheckboxBtn",props:Zl(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,s){let{slots:l}=s;const n=ne(e,"indeterminate"),o=ne(e,"modelValue");function y(t){n.value&&(n.value=!1)}const f=V(()=>n.value?e.indeterminateIcon:e.falseIcon),a=V(()=>n.value?e.indeterminateIcon:e.trueIcon);return Z(()=>{const t=Ce(Oe.filterProps(e),["modelValue"]);return r(Oe,L(t,{modelValue:o.value,"onUpdate:modelValue":[k=>o.value=k,y],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:f.value,trueIcon:a.value,"aria-checked":n.value?"mixed":void 0}),l)}),{}}});function lt(e){let{selectedElement:s,containerElement:l,isRtl:n,isHorizontal:o}=e;const y=re(o,l),f=nl(o,n,l),a=re(o,s),t=al(o,s),k=a*.4;return f>t?t-k:f+y<t+a?t-y+a+k:f}function tt(e){let{selectedElement:s,containerElement:l,isHorizontal:n}=e;const o=re(n,l),y=al(n,s),f=re(n,s);return y-o/2+f/2}function _e(e,s){const l=e?"scrollWidth":"scrollHeight";return(s==null?void 0:s[l])||0}function nt(e,s){const l=e?"clientWidth":"clientHeight";return(s==null?void 0:s[l])||0}function nl(e,s,l){if(!l)return 0;const{scrollLeft:n,offsetWidth:o,scrollWidth:y}=l;return e?s?y-o+n:n:l.scrollTop}function re(e,s){const l=e?"offsetWidth":"offsetHeight";return(s==null?void 0:s[l])||0}function al(e,s){const l=e?"offsetLeft":"offsetTop";return(s==null?void 0:s[l])||0}const at=Symbol.for("vuetify:v-slide-group"),ol=q({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:at},nextIcon:{type:Y,default:"$next"},prevIcon:{type:Y,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...oe(),...fl({mobile:null}),...Ie(),...Ne({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),ze=Q()({name:"VSlideGroup",props:ol(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:l}=s;const{isRtl:n}=ml(),{displayClasses:o,mobile:y}=We(e),f=je(e,e.symbol),a=R(!1),t=R(0),k=R(0),w=R(0),C=V(()=>e.direction==="horizontal"),{resizeRef:m,contentRect:x}=ve(),{resizeRef:g,contentRect:d}=ve(),i=hl(),p=V(()=>({container:m.el,duration:200,easing:"easeOutQuart"})),P=V(()=>f.selected.value.length?f.items.value.findIndex(u=>u.id===f.selected.value[0]):-1),E=V(()=>f.selected.value.length?f.items.value.findIndex(u=>u.id===f.selected.value[f.selected.value.length-1]):-1);if(se){let u=-1;J(()=>[f.selected.value,x.value,d.value,C.value],()=>{cancelAnimationFrame(u),u=requestAnimationFrame(()=>{if(x.value&&d.value){const v=C.value?"width":"height";k.value=x.value[v],w.value=d.value[v],a.value=k.value+1<w.value}if(P.value>=0&&g.el){const v=g.el.children[E.value];H(v,e.centerActive)}})})}const T=R(!1);function H(u,v){let b=0;v?b=tt({containerElement:m.el,isHorizontal:C.value,selectedElement:u}):b=lt({containerElement:m.el,isHorizontal:C.value,isRtl:n.value,selectedElement:u}),W(b)}function W(u){if(!se||!m.el)return;const v=re(C.value,m.el),b=nl(C.value,n.value,m.el);if(!(_e(C.value,m.el)<=v||Math.abs(u-b)<16)){if(C.value&&n.value&&m.el){const{scrollWidth:B,offsetWidth:A}=m.el;u=B-A-u}C.value?i.horizontal(u,p.value):i(u,p.value)}}function S(u){const{scrollTop:v,scrollLeft:b}=u.target;t.value=C.value?b:v}function _(u){if(T.value=!0,!(!a.value||!g.el)){for(const v of u.composedPath())for(const b of g.el.children)if(b===v){H(b);return}}}function $(u){T.value=!1}let D=!1;function G(u){var v;!D&&!T.value&&!(u.relatedTarget&&((v=g.el)!=null&&v.contains(u.relatedTarget)))&&U(),D=!1}function N(){D=!0}function j(u){if(!g.el)return;function v(b){u.preventDefault(),U(b)}C.value?u.key==="ArrowRight"?v(n.value?"prev":"next"):u.key==="ArrowLeft"&&v(n.value?"next":"prev"):u.key==="ArrowDown"?v("next"):u.key==="ArrowUp"&&v("prev"),u.key==="Home"?v("first"):u.key==="End"&&v("last")}function U(u){var b,I;if(!g.el)return;let v;if(!u)v=be(g.el)[0];else if(u==="next"){if(v=(b=g.el.querySelector(":focus"))==null?void 0:b.nextElementSibling,!v)return U("first")}else if(u==="prev"){if(v=(I=g.el.querySelector(":focus"))==null?void 0:I.previousElementSibling,!v)return U("last")}else u==="first"?v=g.el.firstElementChild:u==="last"&&(v=g.el.lastElementChild);v&&v.focus({preventScroll:!0})}function O(u){const v=C.value&&n.value?-1:1,b=(u==="prev"?-v:v)*k.value;let I=t.value+b;if(C.value&&n.value&&m.el){const{scrollWidth:B,offsetWidth:A}=m.el;I+=B-A}W(I)}const ae=V(()=>({next:f.next,prev:f.prev,select:f.select,isSelected:f.isSelected})),ee=V(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!y.value;case!0:return a.value||Math.abs(t.value)>0;case"mobile":return y.value||a.value||Math.abs(t.value)>0;default:return!y.value&&(a.value||Math.abs(t.value)>0)}}),h=V(()=>Math.abs(t.value)>1),c=V(()=>{if(!m.value)return!1;const u=_e(C.value,m.el),v=nt(C.value,m.el);return u-v-Math.abs(t.value)>1});return Z(()=>r(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!C.value,"v-slide-group--has-affixes":ee.value,"v-slide-group--is-overflowing":a.value},o.value,e.class],style:e.style,tabindex:T.value||f.selected.value.length?-1:0,onFocus:G},{default:()=>{var u,v,b;return[ee.value&&r("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!h.value}],onMousedown:N,onClick:()=>h.value&&O("prev")},[((u=l.prev)==null?void 0:u.call(l,ae.value))??r(we,null,{default:()=>[r(X,{icon:n.value?e.nextIcon:e.prevIcon},null)]})]),r("div",{key:"container",ref:m,class:"v-slide-group__container",onScroll:S},[r("div",{ref:g,class:"v-slide-group__content",onFocusin:_,onFocusout:$,onKeydown:j},[(v=l.default)==null?void 0:v.call(l,ae.value)])]),ee.value&&r("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!c.value}],onMousedown:N,onClick:()=>c.value&&O("next")},[((b=l.next)==null?void 0:b.call(l,ae.value))??r(we,null,{default:()=>[r(X,{icon:n.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:f.selected,scrollTo:O,scrollOffset:t,focus:U}}}),ul=Symbol.for("vuetify:v-chip-group"),ot=q({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Me},...ol(),...oe(),...Ne({selectedClass:"v-chip--selected"}),...Ie(),...ke(),...Qe({variant:"tonal"})},"VChipGroup");Q()({name:"VChipGroup",props:ot(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:l}=s;const{themeClasses:n}=Xe(e),{isSelected:o,select:y,next:f,prev:a,selected:t}=je(e,ul);return Ge({VChip:{color:F(e,"color"),disabled:F(e,"disabled"),filter:F(e,"filter"),variant:F(e,"variant")}}),Z(()=>{const k=ze.filterProps(e);return r(ze,L(k,{class:["v-chip-group",{"v-chip-group--column":e.column},n.value,e.class],style:e.style}),{default:()=>{var w;return[(w=l.default)==null?void 0:w.call(l,{isSelected:o,select:y,next:f,prev:a,selected:t.value})]}})}),{}}});const ut=q({activeClass:String,appendAvatar:String,appendIcon:Y,closable:Boolean,closeIcon:{type:Y,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:Y,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:Te(),onClickOnce:Te(),...yl(),...oe(),...Le(),...gl(),...bl(),...pl(),...kl(),...Sl(),...Ie({tag:"span"}),...ke(),...Qe({variant:"tonal"})},"VChip"),it=Q()({name:"VChip",directives:{Ripple:Ue},props:ut(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,s){let{attrs:l,emit:n,slots:o}=s;const{t:y}=Ye(),{borderClasses:f}=Vl(e),{colorClasses:a,colorStyles:t,variantClasses:k}=Cl(e),{densityClasses:w}=$e(e),{elevationClasses:C}=Il(e),{roundedClasses:m}=xl(e),{sizeClasses:x}=Pl(e),{themeClasses:g}=Xe(e),d=ne(e,"modelValue"),i=wl(e,ul,!1),p=Tl(e,l),P=V(()=>e.link!==!1&&p.isLink.value),E=V(()=>!e.disabled&&e.link!==!1&&(!!i||e.link||p.isClickable.value)),T=V(()=>({"aria-label":y(e.closeLabel),onClick(S){S.preventDefault(),S.stopPropagation(),d.value=!1,n("click:close",S)}}));function H(S){var _;n("click",S),E.value&&((_=p.navigate)==null||_.call(p,S),i==null||i.toggle())}function W(S){(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),H(S))}return()=>{const S=p.isLink.value?"a":e.tag,_=!!(e.appendIcon||e.appendAvatar),$=!!(_||o.append),D=!!(o.close||e.closable),G=!!(o.filter||e.filter)&&i,N=!!(e.prependIcon||e.prependAvatar),j=!!(N||o.prepend),U=!i||i.isSelected.value;return d.value&&ye(r(S,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":E.value,"v-chip--filter":G,"v-chip--pill":e.pill},g.value,f.value,U?a.value:void 0,w.value,C.value,m.value,x.value,k.value,i==null?void 0:i.selectedClass.value,e.class],style:[U?t.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:p.href.value,tabindex:E.value?0:void 0,onClick:H,onKeydown:E.value&&!P.value&&W},{default:()=>{var O;return[Al(E.value,"v-chip"),G&&r(El,{key:"filter"},{default:()=>[ye(r("div",{class:"v-chip__filter"},[o.filter?r(ie,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},o.filter):r(X,{key:"filter-icon",icon:e.filterIcon},null)]),[[Bl,i.isSelected.value]])]}),j&&r("div",{key:"prepend",class:"v-chip__prepend"},[o.prepend?r(ie,{key:"prepend-defaults",disabled:!N,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},o.prepend):r(te,null,[e.prependIcon&&r(X,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&r(pe,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),r("div",{class:"v-chip__content","data-no-activator":""},[((O=o.default)==null?void 0:O.call(o,{isSelected:i==null?void 0:i.isSelected.value,selectedClass:i==null?void 0:i.selectedClass.value,select:i==null?void 0:i.select,toggle:i==null?void 0:i.toggle,value:i==null?void 0:i.value.value,disabled:e.disabled}))??e.text]),$&&r("div",{key:"append",class:"v-chip__append"},[o.append?r(ie,{key:"append-defaults",disabled:!_,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},o.append):r(te,null,[e.appendIcon&&r(X,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&r(pe,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),D&&r("button",L({key:"close",class:"v-chip__close",type:"button"},T.value),[o.close?r(ie,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},o.close):r(X,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Ke("ripple"),E.value&&e.ripple,null]])}}}),st=q({id:String,...Ce(Dl({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:Je}}),["absolute"])},"VMenu"),rt=Q()({name:"VMenu",props:st(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:l}=s;const n=ne(e,"modelValue"),{scopeId:o}=Fl(),y=Se(),f=V(()=>e.id||`v-menu-${y}`),a=le(),t=qe(Ae,null),k=R(0);He(Ae,{register(){++k.value},unregister(){--k.value},closeParents(d){setTimeout(()=>{!k.value&&!e.persistent&&(d==null||d&&!Rl(d,a.value.contentEl))&&(n.value=!1,t==null||t.closeParents())},40)}});async function w(d){var P,E,T;const i=d.relatedTarget,p=d.target;await fe(),n.value&&i!==p&&((P=a.value)!=null&&P.contentEl)&&((E=a.value)!=null&&E.globalTop)&&![document,a.value.contentEl].includes(p)&&!a.value.contentEl.contains(p)&&((T=be(a.value.contentEl)[0])==null||T.focus())}J(n,d=>{d?(t==null||t.register(),document.addEventListener("focusin",w,{once:!0})):(t==null||t.unregister(),document.removeEventListener("focusin",w))});function C(d){t==null||t.closeParents(d)}function m(d){var i,p,P;if(!e.disabled)if(d.key==="Tab"||d.key==="Enter"&&!e.closeOnContentClick){if(d.key==="Enter"&&(d.target instanceof HTMLTextAreaElement||d.target instanceof HTMLInputElement&&d.target.closest("form")))return;d.key==="Enter"&&d.preventDefault(),Ol(be((i=a.value)==null?void 0:i.contentEl,!1),d.shiftKey?"prev":"next",T=>T.tabIndex>=0)||(n.value=!1,(P=(p=a.value)==null?void 0:p.activatorEl)==null||P.focus())}else["Enter"," "].includes(d.key)&&e.closeOnContentClick&&(n.value=!1,t==null||t.closeParents())}function x(d){var p;if(e.disabled)return;const i=(p=a.value)==null?void 0:p.contentEl;i&&n.value?d.key==="ArrowDown"?(d.preventDefault(),Be(i,"next")):d.key==="ArrowUp"&&(d.preventDefault(),Be(i,"prev")):["ArrowDown","ArrowUp"].includes(d.key)&&(n.value=!0,d.preventDefault(),setTimeout(()=>setTimeout(()=>x(d))))}const g=V(()=>L({"aria-haspopup":"menu","aria-expanded":String(n.value),"aria-owns":f.value,onKeydown:x},e.activatorProps));return Z(()=>{const d=Ee.filterProps(e);return r(Ee,L({ref:a,id:f.value,class:["v-menu",e.class],style:e.style},d,{modelValue:n.value,"onUpdate:modelValue":i=>n.value=i,absolute:!0,activatorProps:g.value,"onClick:outside":C,onKeydown:m},o),{activator:l.activator,default:function(){for(var i=arguments.length,p=new Array(i),P=0;P<i;P++)p[P]=arguments[P];return r(ie,{root:"VMenu"},{default:()=>{var E;return[(E=l.default)==null?void 0:E.call(l,...p)]}})}})}),Ze({id:f,ΨopenChildren:k},a)}}),ct=q({renderless:Boolean,...oe()},"VVirtualScrollItem"),dt=Q()({name:"VVirtualScrollItem",inheritAttrs:!1,props:ct(),emits:{"update:height":e=>!0},setup(e,s){let{attrs:l,emit:n,slots:o}=s;const{resizeRef:y,contentRect:f}=ve(void 0,"border");J(()=>{var a;return(a=f.value)==null?void 0:a.height},a=>{a!=null&&n("update:height",a)}),Z(()=>{var a,t;return e.renderless?r(te,null,[(a=o.default)==null?void 0:a.call(o,{itemRef:y})]):r("div",L({ref:y,class:["v-virtual-scroll__item",e.class],style:e.style},l),[(t=o.default)==null?void 0:t.call(o)])})}}),vt=-1,ft=1,he=100,mt=q({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function ht(e,s){const l=We(),n=R(0);De(()=>{n.value=parseFloat(e.itemHeight||0)});const o=R(0),y=R(Math.ceil((parseInt(e.height)||l.height.value)/(n.value||16))||1),f=R(0),a=R(0),t=le(),k=le();let w=0;const{resizeRef:C,contentRect:m}=ve();De(()=>{C.value=t.value});const x=V(()=>{var c;return t.value===document.documentElement?l.height.value:((c=m.value)==null?void 0:c.height)||parseInt(e.height)||0}),g=V(()=>!!(t.value&&k.value&&x.value&&n.value));let d=Array.from({length:s.value.length}),i=Array.from({length:s.value.length});const p=R(0);let P=-1;function E(c){return d[c]||n.value}const T=_l(()=>{const c=performance.now();i[0]=0;const u=s.value.length;for(let v=1;v<=u-1;v++)i[v]=(i[v-1]||0)+E(v-1);p.value=Math.max(p.value,performance.now()-c)},p),H=J(g,c=>{c&&(H(),w=k.value.offsetTop,T.immediate(),O(),~P&&fe(()=>{se&&window.requestAnimationFrame(()=>{ee(P),P=-1})}))});Ve(()=>{T.clear()});function W(c,u){const v=d[c],b=n.value;n.value=b?Math.min(n.value,u):u,(v!==u||b!==n.value)&&(d[c]=u,T())}function S(c){return c=me(c,0,s.value.length-1),i[c]||0}function _(c){return yt(i,c)}let $=0,D=0,G=0;J(x,(c,u)=>{u&&(O(),c<u&&requestAnimationFrame(()=>{D=0,O()}))});function N(){if(!t.value||!k.value)return;const c=t.value.scrollTop,u=performance.now();u-G>500?(D=Math.sign(c-$),w=k.value.offsetTop):D=c-$,$=c,G=u,O()}function j(){!t.value||!k.value||(D=0,G=0,O())}let U=-1;function O(){cancelAnimationFrame(U),U=requestAnimationFrame(ae)}function ae(){if(!t.value||!x.value)return;const c=$-w,u=Math.sign(D),v=Math.max(0,c-he),b=me(_(v),0,s.value.length),I=c+x.value+he,B=me(_(I)+1,b+1,s.value.length);if((u!==vt||b<o.value)&&(u!==ft||B>y.value)){const A=S(o.value)-S(b),z=S(B)-S(y.value);Math.max(A,z)>he?(o.value=b,y.value=B):(b<=0&&(o.value=b),B>=s.value.length&&(y.value=B))}f.value=S(o.value),a.value=S(s.value.length)-S(y.value)}function ee(c){const u=S(c);!t.value||c&&!u?P=c:t.value.scrollTop=u}const h=V(()=>s.value.slice(o.value,y.value).map((c,u)=>({raw:c,index:u+o.value})));return J(s,()=>{d=Array.from({length:s.value.length}),i=Array.from({length:s.value.length}),T.immediate(),O()},{deep:!0}),{containerRef:t,markerRef:k,computedItems:h,paddingTop:f,paddingBottom:a,scrollToIndex:ee,handleScroll:N,handleScrollend:j,handleItemResize:W}}function yt(e,s){let l=e.length-1,n=0,o=0,y=null,f=-1;if(e[l]<s)return l;for(;n<=l;)if(o=n+l>>1,y=e[o],y>s)l=o-1;else if(y<s)f=o,n=o+1;else return y===s?o:n;return f}const gt=q({items:{type:Array,default:()=>[]},renderless:Boolean,...mt(),...oe(),...zl()},"VVirtualScroll"),bt=Q()({name:"VVirtualScroll",props:gt(),setup(e,s){let{slots:l}=s;const n=Ml("VVirtualScroll"),{dimensionStyles:o}=Ll(e),{containerRef:y,markerRef:f,handleScroll:a,handleScrollend:t,handleItemResize:k,scrollToIndex:w,paddingTop:C,paddingBottom:m,computedItems:x}=ht(e,F(e,"items"));return Hl(()=>e.renderless,()=>{function g(){var p,P;const i=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";y.value===document.documentElement?(document[i]("scroll",a,{passive:!0}),document[i]("scrollend",t)):((p=y.value)==null||p[i]("scroll",a,{passive:!0}),(P=y.value)==null||P[i]("scrollend",t))}Gl(()=>{y.value=Ul(n.vnode.el,!0),g(!0)}),Ve(g)}),Z(()=>{const g=x.value.map(d=>r(dt,{key:d.index,renderless:e.renderless,"onUpdate:height":i=>k(d.index,i)},{default:i=>{var p;return(p=l.default)==null?void 0:p.call(l,{item:d.raw,index:d.index,...i})}}));return e.renderless?r(te,null,[r("div",{ref:f,class:"v-virtual-scroll__spacer",style:{paddingTop:ce(C.value)}},null),g,r("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:ce(m.value)}},null)]):r("div",{ref:y,class:["v-virtual-scroll",e.class],onScrollPassive:a,onScrollend:t,style:[o.value,e.style]},[r("div",{ref:f,class:"v-virtual-scroll__container",style:{paddingTop:ce(C.value),paddingBottom:ce(m.value)}},[g])])}),{scrollToIndex:w}}});function pt(e,s){const l=R(!1);let n;function o(a){cancelAnimationFrame(n),l.value=!0,n=requestAnimationFrame(()=>{n=requestAnimationFrame(()=>{l.value=!1})})}async function y(){await new Promise(a=>requestAnimationFrame(a)),await new Promise(a=>requestAnimationFrame(a)),await new Promise(a=>requestAnimationFrame(a)),await new Promise(a=>{if(l.value){const t=J(l,()=>{t(),a()})}else a()})}async function f(a){var w,C;if(a.key==="Tab"&&((w=s.value)==null||w.focus()),!["PageDown","PageUp","Home","End"].includes(a.key))return;const t=(C=e.value)==null?void 0:C.$el;if(!t)return;(a.key==="Home"||a.key==="End")&&t.scrollTo({top:a.key==="Home"?0:t.scrollHeight,behavior:"smooth"}),await y();const k=t.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(a.key==="PageDown"||a.key==="Home"){const m=t.getBoundingClientRect().top;for(const x of k)if(x.getBoundingClientRect().top>=m){x.focus();break}}else{const m=t.getBoundingClientRect().bottom;for(const x of[...k].reverse())if(x.getBoundingClientRect().bottom<=m){x.focus();break}}}return{onListScroll:o,onListKeydown:f}}const kt=q({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:Y,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...jl({itemChildren:!1})},"Select"),St=q({...kt(),...Ce(Kl({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...ql({transition:{component:Je}})},"VSelect"),It=Q()({name:"VSelect",props:St(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,s){let{slots:l}=s;const{t:n}=Ye(),o=le(),y=le(),f=le(),a=ne(e,"menu"),t=V({get:()=>a.value,set:h=>{var c;a.value&&!h&&((c=y.value)!=null&&c.ΨopenChildren)||(a.value=h)}}),{items:k,transformIn:w,transformOut:C}=Ql(e),m=ne(e,"modelValue",[],h=>w(h===null?[null]:de(h)),h=>{const c=C(h);return e.multiple?c:c[0]??null}),x=V(()=>typeof e.counterValue=="function"?e.counterValue(m.value):typeof e.counterValue=="number"?e.counterValue:m.value.length),g=$l(),d=V(()=>m.value.map(h=>h.value)),i=R(!1),p=V(()=>t.value?e.closeText:e.openText);let P="",E;const T=V(()=>e.hideSelected?k.value.filter(h=>!m.value.some(c=>e.valueComparator(c,h))):k.value),H=V(()=>e.hideNoData&&!T.value.length||e.readonly||(g==null?void 0:g.isReadonly.value)),W=V(()=>{var h;return{...e.menuProps,activatorProps:{...((h=e.menuProps)==null?void 0:h.activatorProps)||{},"aria-haspopup":"listbox"}}}),S=le(),{onListScroll:_,onListKeydown:$}=pt(S,o);function D(h){e.openOnClear&&(t.value=!0)}function G(){H.value||(t.value=!t.value)}function N(h){var I,B;if(!h.key||e.readonly||g!=null&&g.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(h.key)&&h.preventDefault(),["Enter","ArrowDown"," "].includes(h.key)&&(t.value=!0),["Escape","Tab"].includes(h.key)&&(t.value=!1),h.key==="Home"?(I=S.value)==null||I.focus("first"):h.key==="End"&&((B=S.value)==null||B.focus("last"));const c=1e3;function u(A){const z=A.key.length===1,M=!A.ctrlKey&&!A.metaKey&&!A.altKey;return z&&M}if(e.multiple||!u(h))return;const v=performance.now();v-E>c&&(P=""),P+=h.key.toLowerCase(),E=v;const b=k.value.find(A=>A.title.toLowerCase().startsWith(P));if(b!==void 0){m.value=[b];const A=T.value.indexOf(b);se&&window.requestAnimationFrame(()=>{var z;A>=0&&((z=f.value)==null||z.scrollToIndex(A))})}}function j(h){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!h.props.disabled)if(e.multiple){const u=m.value.findIndex(b=>e.valueComparator(b.value,h.value)),v=c??!~u;if(~u){const b=v?[...m.value,h]:[...m.value];b.splice(u,1),m.value=b}else v&&(m.value=[...m.value,h])}else{const u=c!==!1;m.value=u?[h]:[],fe(()=>{t.value=!1})}}function U(h){var c;(c=S.value)!=null&&c.$el.contains(h.relatedTarget)||(t.value=!1)}function O(){var h;i.value&&((h=o.value)==null||h.focus())}function ae(h){i.value=!0}function ee(h){if(h==null)m.value=[];else if(ge(o.value,":autofill")||ge(o.value,":-webkit-autofill")){const c=k.value.find(u=>u.title===h);c&&j(c)}else o.value&&(o.value.value="")}return J(t,()=>{if(!e.hideSelected&&t.value&&m.value.length){const h=T.value.findIndex(c=>m.value.some(u=>e.valueComparator(u.value,c.value)));se&&window.requestAnimationFrame(()=>{var c;h>=0&&((c=f.value)==null||c.scrollToIndex(h))})}}),J(()=>e.items,(h,c)=>{t.value||i.value&&!c.length&&h.length&&(t.value=!0)}),Z(()=>{const h=!!(e.chips||l.chip),c=!!(!e.hideNoData||T.value.length||l["prepend-item"]||l["append-item"]||l["no-data"]),u=m.value.length>0,v=Fe.filterProps(e),b=u||!i.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return r(Fe,L({ref:o},v,{modelValue:m.value.map(I=>I.props.value).join(", "),"onUpdate:modelValue":ee,focused:i.value,"onUpdate:focused":I=>i.value=I,validationValue:m.externalValue,counterValue:x.value,dirty:u,class:["v-select",{"v-select--active-menu":t.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":m.value.length,"v-select--selection-slot":!!l.selection},e.class],style:e.style,inputmode:"none",placeholder:b,"onClick:clear":D,"onMousedown:control":G,onBlur:U,onKeydown:N,"aria-label":n(p.value),title:n(p.value)}),{...l,default:()=>r(te,null,[r(rt,L({ref:y,modelValue:t.value,"onUpdate:modelValue":I=>t.value=I,activator:"parent",contentClass:"v-select__content",disabled:H.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:O},W.value),{default:()=>[c&&r(Xl,L({ref:S,selected:d.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:I=>I.preventDefault(),onKeydown:$,onFocusin:ae,onScrollPassive:_,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var I,B,A;return[(I=l["prepend-item"])==null?void 0:I.call(l),!T.value.length&&!e.hideNoData&&(((B=l["no-data"])==null?void 0:B.call(l))??r(Re,{title:n(e.noDataText)},null)),r(bt,{ref:f,renderless:!0,items:T.value},{default:z=>{var Pe;let{item:M,index:ue,itemRef:K}=z;const xe=L(M.props,{ref:K,key:ue,onClick:()=>j(M,null)});return((Pe=l.item)==null?void 0:Pe.call(l,{item:M,index:ue,props:xe}))??r(Re,L(xe,{role:"option"}),{prepend:il=>{let{isSelected:sl}=il;return r(te,null,[e.multiple&&!e.hideSelected?r(et,{key:M.value,modelValue:sl,ripple:!1,tabindex:"-1"},null):void 0,M.props.prependAvatar&&r(pe,{image:M.props.prependAvatar},null),M.props.prependIcon&&r(X,{icon:M.props.prependIcon},null)])}})}}),(A=l["append-item"])==null?void 0:A.call(l)]}})]}),m.value.map((I,B)=>{function A(K){K.stopPropagation(),K.preventDefault(),j(I,!1)}const z={"onClick:close":A,onKeydown(K){K.key!=="Enter"&&K.key!==" "||(K.preventDefault(),K.stopPropagation(),A(K))},onMousedown(K){K.preventDefault(),K.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},M=h?!!l.chip:!!l.selection,ue=M?Nl(h?l.chip({item:I,index:B,props:z}):l.selection({item:I,index:B})):void 0;if(!(M&&!ue))return r("div",{key:I.value,class:"v-select__selection"},[h?l.chip?r(ie,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:I.title}}},{default:()=>[ue]}):r(it,L({key:"chip",closable:e.closableChips,size:"small",text:I.title,disabled:I.props.disabled},z),null):ue??r("span",{class:"v-select__selection-text"},[I.title,e.multiple&&B<m.value.length-1&&r("span",{class:"v-select__selection-comma"},[Wl(",")])])])})]),"append-inner":function(){var z;for(var I=arguments.length,B=new Array(I),A=0;A<I;A++)B[A]=arguments[A];return r(te,null,[(z=l["append-inner"])==null?void 0:z.call(l,...B),e.menuIcon?r(X,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),Ze({isFocused:i,menu:t,select:j},o)}});export{et as V,It as a,it as b,rt as c,Zl as m};
