import{p as b,m as p,bX as v,g as F,bY as V,E as h,h as y,b as R,bl as P}from"./index-B6C-OAFi.js";const k=b({...p(),...v()},"VForm"),C=F()({name:"VForm",props:k(),emits:{"update:modelValue":o=>!0,submit:o=>!0},setup(o,i){let{slots:n,emit:l}=i;const r=V(o),s=h();function f(t){t.preventDefault(),r.reset()}function u(t){const a=t,e=r.validate();a.then=e.then.bind(e),a.catch=e.catch.bind(e),a.finally=e.finally.bind(e),l("submit",a),a.defaultPrevented||e.then(c=>{var m;let{valid:d}=c;d&&((m=s.value)==null||m.submit())}),a.preventDefault()}return y(()=>{var t;return R("form",{ref:s,class:["v-form",o.class],style:o.style,novalidate:!0,onReset:f,onSubmit:u},[(t=n.default)==null?void 0:t.call(n,r)])}),P(r,s)}});export{C as V};
