import{c as ct,g as lt}from"./_commonjsHelpers-Cpj98o6Y.js";import dt from"./footer-6PCkKIWa.js";import{_ as ft,I as pt,a as mt,av as k,b as s,w as m,F as bt,o as vt,V as R,ay as ht,az as gt,a8 as it}from"./index-CMThWAey.js";import{V as yt}from"./VContainer-DkrkuJpx.js";import{V as I,a as O}from"./VRow-BbOHvp1r.js";import"./VDivider-v-MMDXrU.js";const _t=""+new URL("嚴選食材BN-D9Dt2uGE.jpg",import.meta.url).href,wt=""+new URL("嚴選食材區塊_生菜-Brm6w74n.png",import.meta.url).href,kt=""+new URL("嚴選食材區塊_肉-VgGLWVfd.png",import.meta.url).href,xt=""+new URL("嚴選食材區塊_蛋-DSSs1M1g.png",import.meta.url).href,jt=""+new URL("嚴選食材區塊_牛奶-CM4SpmtI.png",import.meta.url).href,Ot=""+new URL("嚴選食材區塊_白飯-nPOZww5C.png",import.meta.url).href,St=""+new URL("嚴選食材區塊_豆漿-BCHiQAqO.png",import.meta.url).href,Mt=""+new URL("嚴選食材區塊_橄欖油-Dq1j0YKG.png",import.meta.url).href,Et=""+new URL("嚴選食材區塊_優格-CRy5xAJf.png",import.meta.url).href;var st={exports:{}};(function(K,ut){(function(w,u){K.exports=u()})(ct,function(){return function(w){function u(o){if(r[o])return r[o].exports;var c=r[o]={exports:{},id:o,loaded:!1};return w[o].call(c.exports,c,c.exports,u),c.loaded=!0,c.exports}var r={};return u.m=w,u.c=r,u.p="dist/",u(0)}([function(w,u,r){function o(n){return n&&n.__esModule?n:{default:n}}var c=Object.assign||function(n){for(var S=1;S<arguments.length;S++){var D=arguments[S];for(var U in D)Object.prototype.hasOwnProperty.call(D,U)&&(n[U]=D[U])}return n},h=r(1),x=(o(h),r(6)),a=o(x),b=r(7),i=o(b),d=r(8),l=o(d),v=r(9),E=o(v),z=r(10),Q=o(z),X=r(11),tt=o(X),et=r(14),J=o(et),A=[],Z=!1,g={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},q=function(){var n=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(n&&(Z=!0),Z)return A=(0,tt.default)(A,g),(0,Q.default)(A,g.once),A},B=function(){A=(0,J.default)(),q()},e=function(){A.forEach(function(n,S){n.node.removeAttribute("data-aos"),n.node.removeAttribute("data-aos-easing"),n.node.removeAttribute("data-aos-duration"),n.node.removeAttribute("data-aos-delay")})},t=function(n){return n===!0||n==="mobile"&&E.default.mobile()||n==="phone"&&E.default.phone()||n==="tablet"&&E.default.tablet()||typeof n=="function"&&n()===!0},f=function(n){g=c(g,n),A=(0,J.default)();var S=document.all&&!window.atob;return t(g.disable)||S?e():(g.disableMutationObserver||l.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),g.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",g.easing),document.querySelector("body").setAttribute("data-aos-duration",g.duration),document.querySelector("body").setAttribute("data-aos-delay",g.delay),g.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?q(!0):g.startEvent==="load"?window.addEventListener(g.startEvent,function(){q(!0)}):document.addEventListener(g.startEvent,function(){q(!0)}),window.addEventListener("resize",(0,i.default)(q,g.debounceDelay,!0)),window.addEventListener("orientationchange",(0,i.default)(q,g.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)(function(){(0,Q.default)(A,g.once)},g.throttleDelay)),g.disableMutationObserver||l.default.ready("[data-aos]",B),A)};w.exports={init:f,refresh:q,refreshHard:B}},function(w,u){},,,,,function(w,u){(function(r){function o(t,f,n){function S(p){var L=T,W=C;return T=C=void 0,$=p,j=t.apply(W,L)}function D(p){return $=p,_=setTimeout(Y,f),F?S(p):j}function U(p){var L=p-N,W=p-$,rt=f-L;return H?B(rt,V-W):rt}function G(p){var L=p-N,W=p-$;return N===void 0||L>=f||L<0||H&&W>=V}function Y(){var p=e();return G(p)?nt(p):void(_=setTimeout(Y,U(p)))}function nt(p){return _=void 0,y&&T?S(p):(T=C=void 0,j)}function at(){_!==void 0&&clearTimeout(_),$=0,T=N=C=_=void 0}function ot(){return _===void 0?j:nt(e())}function P(){var p=e(),L=G(p);if(T=arguments,C=this,N=p,L){if(_===void 0)return D(N);if(H)return _=setTimeout(Y,f),S(N)}return _===void 0&&(_=setTimeout(Y,f)),j}var T,C,V,j,_,N,$=0,F=!1,H=!1,y=!0;if(typeof t!="function")throw new TypeError(d);return f=b(f)||0,h(n)&&(F=!!n.leading,H="maxWait"in n,V=H?q(b(n.maxWait)||0,f):V,y="trailing"in n?!!n.trailing:y),P.cancel=at,P.flush=ot,P}function c(t,f,n){var S=!0,D=!0;if(typeof t!="function")throw new TypeError(d);return h(n)&&(S="leading"in n?!!n.leading:S,D="trailing"in n?!!n.trailing:D),o(t,f,{leading:S,maxWait:f,trailing:D})}function h(t){var f=typeof t>"u"?"undefined":i(t);return!!t&&(f=="object"||f=="function")}function x(t){return!!t&&(typeof t>"u"?"undefined":i(t))=="object"}function a(t){return(typeof t>"u"?"undefined":i(t))=="symbol"||x(t)&&g.call(t)==v}function b(t){if(typeof t=="number")return t;if(a(t))return l;if(h(t)){var f=typeof t.valueOf=="function"?t.valueOf():t;t=h(f)?f+"":f}if(typeof t!="string")return t===0?t:+t;t=t.replace(E,"");var n=Q.test(t);return n||X.test(t)?tt(t.slice(2),n?2:8):z.test(t)?l:+t}var i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d="Expected a function",l=NaN,v="[object Symbol]",E=/^\s+|\s+$/g,z=/^[-+]0x[0-9a-f]+$/i,Q=/^0b[01]+$/i,X=/^0o[0-7]+$/i,tt=parseInt,et=(typeof r>"u"?"undefined":i(r))=="object"&&r&&r.Object===Object&&r,J=(typeof self>"u"?"undefined":i(self))=="object"&&self&&self.Object===Object&&self,A=et||J||Function("return this")(),Z=Object.prototype,g=Z.toString,q=Math.max,B=Math.min,e=function(){return A.Date.now()};w.exports=c}).call(u,function(){return this}())},function(w,u){(function(r){function o(e,t,f){function n(y){var p=P,L=T;return P=T=void 0,N=y,V=e.apply(L,p)}function S(y){return N=y,j=setTimeout(G,t),$?n(y):V}function D(y){var p=y-_,L=y-N,W=t-p;return F?q(W,C-L):W}function U(y){var p=y-_,L=y-N;return _===void 0||p>=t||p<0||F&&L>=C}function G(){var y=B();return U(y)?Y(y):void(j=setTimeout(G,D(y)))}function Y(y){return j=void 0,H&&P?n(y):(P=T=void 0,V)}function nt(){j!==void 0&&clearTimeout(j),N=0,P=_=T=j=void 0}function at(){return j===void 0?V:Y(B())}function ot(){var y=B(),p=U(y);if(P=arguments,T=this,_=y,p){if(j===void 0)return S(_);if(F)return j=setTimeout(G,t),n(_)}return j===void 0&&(j=setTimeout(G,t)),V}var P,T,C,V,j,_,N=0,$=!1,F=!1,H=!0;if(typeof e!="function")throw new TypeError(i);return t=a(t)||0,c(f)&&($=!!f.leading,F="maxWait"in f,C=F?g(a(f.maxWait)||0,t):C,H="trailing"in f?!!f.trailing:H),ot.cancel=nt,ot.flush=at,ot}function c(e){var t=typeof e>"u"?"undefined":b(e);return!!e&&(t=="object"||t=="function")}function h(e){return!!e&&(typeof e>"u"?"undefined":b(e))=="object"}function x(e){return(typeof e>"u"?"undefined":b(e))=="symbol"||h(e)&&Z.call(e)==l}function a(e){if(typeof e=="number")return e;if(x(e))return d;if(c(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=c(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(v,"");var f=z.test(e);return f||Q.test(e)?X(e.slice(2),f?2:8):E.test(e)?d:+e}var b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i="Expected a function",d=NaN,l="[object Symbol]",v=/^\s+|\s+$/g,E=/^[-+]0x[0-9a-f]+$/i,z=/^0b[01]+$/i,Q=/^0o[0-7]+$/i,X=parseInt,tt=(typeof r>"u"?"undefined":b(r))=="object"&&r&&r.Object===Object&&r,et=(typeof self>"u"?"undefined":b(self))=="object"&&self&&self.Object===Object&&self,J=tt||et||Function("return this")(),A=Object.prototype,Z=A.toString,g=Math.max,q=Math.min,B=function(){return J.Date.now()};w.exports=o}).call(u,function(){return this}())},function(w,u){function r(b){var i=void 0,d=void 0;for(i=0;i<b.length;i+=1)if(d=b[i],d.dataset&&d.dataset.aos||d.children&&r(d.children))return!0;return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function c(){return!!o()}function h(b,i){var d=window.document,l=o(),v=new l(x);a=i,v.observe(d.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function x(b){b&&b.forEach(function(i){var d=Array.prototype.slice.call(i.addedNodes),l=Array.prototype.slice.call(i.removedNodes),v=d.concat(l);if(r(v))return a()})}Object.defineProperty(u,"__esModule",{value:!0});var a=function(){};u.default={isSupported:c,ready:h}},function(w,u){function r(d,l){if(!(d instanceof l))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(u,"__esModule",{value:!0});var c=function(){function d(l,v){for(var E=0;E<v.length;E++){var z=v[E];z.enumerable=z.enumerable||!1,z.configurable=!0,"value"in z&&(z.writable=!0),Object.defineProperty(l,z.key,z)}}return function(l,v,E){return v&&d(l.prototype,v),E&&d(l,E),l}}(),h=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,x=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,b=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,i=function(){function d(){r(this,d)}return c(d,[{key:"phone",value:function(){var l=o();return!(!h.test(l)&&!x.test(l.substr(0,4)))}},{key:"mobile",value:function(){var l=o();return!(!a.test(l)&&!b.test(l.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),d}();u.default=new i},function(w,u){Object.defineProperty(u,"__esModule",{value:!0});var r=function(c,h,x){var a=c.node.getAttribute("data-aos-once");h>c.position?c.node.classList.add("aos-animate"):typeof a<"u"&&(a==="false"||!x&&a!=="true")&&c.node.classList.remove("aos-animate")},o=function(c,h){var x=window.pageYOffset,a=window.innerHeight;c.forEach(function(b,i){r(b,a+x,h)})};u.default=o},function(w,u,r){function o(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(u,"__esModule",{value:!0});var c=r(12),h=o(c),x=function(a,b){return a.forEach(function(i,d){i.node.classList.add("aos-init"),i.position=(0,h.default)(i.node,b.offset)}),a};u.default=x},function(w,u,r){function o(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(u,"__esModule",{value:!0});var c=r(13),h=o(c),x=function(a,b){var i=0,d=0,l=window.innerHeight,v={offset:a.getAttribute("data-aos-offset"),anchor:a.getAttribute("data-aos-anchor"),anchorPlacement:a.getAttribute("data-aos-anchor-placement")};switch(v.offset&&!isNaN(v.offset)&&(d=parseInt(v.offset)),v.anchor&&document.querySelectorAll(v.anchor)&&(a=document.querySelectorAll(v.anchor)[0]),i=(0,h.default)(a).top,v.anchorPlacement){case"top-bottom":break;case"center-bottom":i+=a.offsetHeight/2;break;case"bottom-bottom":i+=a.offsetHeight;break;case"top-center":i+=l/2;break;case"bottom-center":i+=l/2+a.offsetHeight;break;case"center-center":i+=l/2+a.offsetHeight/2;break;case"top-top":i+=l;break;case"bottom-top":i+=a.offsetHeight+l;break;case"center-top":i+=a.offsetHeight/2+l}return v.anchorPlacement||v.offset||isNaN(b)||(d=b),i+d};u.default=x},function(w,u){Object.defineProperty(u,"__esModule",{value:!0});var r=function(o){for(var c=0,h=0;o&&!isNaN(o.offsetLeft)&&!isNaN(o.offsetTop);)c+=o.offsetLeft-(o.tagName!="BODY"?o.scrollLeft:0),h+=o.offsetTop-(o.tagName!="BODY"?o.scrollTop:0),o=o.offsetParent;return{top:h,left:c}};u.default=r},function(w,u){Object.defineProperty(u,"__esModule",{value:!0});var r=function(o){return o=o||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(o,function(c){return{node:c}})};u.default=r}])})})(st);var Lt=st.exports;const zt=lt(Lt),M=K=>(ht("data-v-256269d3"),K=K(),gt(),K),At={class:"background"},Nt=M(()=>k("h1",null,"玉美嚴選",-1)),Tt=M(()=>k("p",null," 生產過程每個環節皆採用最高安全與鮮度標準，採收前30天全面不施化學植物保護劑，徹底執行GAP的安全採收期，系統管理紀錄追溯 ",-1)),qt=M(()=>k("h1",null,"臺灣究好豬",-1)),Dt=M(()=>k("p",null," 產銷履歷牧場，可追溯來源，全程冷鏈，維持肉品的鮮度與品質 全台第一家取得「雙潔淨標章」的豬肉調理食品 ",-1)),Pt=M(()=>k("h1",null,"育承養生雞蛋",-1)),Ct=M(()=>k("p",null,[it(" 天然養生蛋，無藥物殘留，無抗生素"),k("br"),it(" 飼料中添加α胡蘿蔔素、綠茶、葉黃素... 天然飼料配方 ")],-1)),Vt=M(()=>k("h1",null,"光泉鮮乳",-1)),Ht=M(()=>k("p",null," 有CAS、TQF、鮮乳標章，三大重要的品質驗證標章，嚴選國內最專業的酪農戶合作，來源安心有保障 成分無調整，100%純天然原始風味 ",-1)),Rt=M(()=>k("h1",null,"台灣花蓮契作壽司米",-1)),It=M(()=>k("p",null," 堅持友善農耕，導入產銷履歷契作 詳實記錄栽種生產過程，保護環境 食安把關，吃有身分證的米最安心 ",-1)),Bt=M(()=>k("h1",null,"豆漿農",-1)),Ut=M(()=>k("p",null," 只用基本的天然食材，不需要化學添加物也可以煮出好味道。不含防腐劑、增稠劑、消泡劑等化學添加劑 ",-1)),$t=M(()=>k("h1",null,"義大利橄欖油",-1)),Ft=M(()=>k("p",null," 天然果實以冷壓方式榨取100%天然純淨的橄欖油，保存完整的天然營養素，不含添加物、鹽份，零膽固醇 ",-1)),Wt=M(()=>k("h1",null,"自製優格",-1)),Gt=M(()=>k("p",null," 活菌數多，成分單純，無添加物，熱量低，可加強蛋白質的吸收，提高鈣的吸收率，含大量益生菌，能促進腸胃蠕動，幫助消化，順暢排便 ",-1)),Yt={__name:"food",setup(K){return pt(()=>{zt.init({offset:120,delay:800,duration:400,once:!1})}),(ut,w)=>(vt(),mt(bt,null,[k("div",At,[s(yt,null,{default:m(()=>[s(I,null,{default:m(()=>[s(O,{cols:"12"},{default:m(()=>[s(R,{class:"foodBN",src:_t})]),_:1})]),_:1}),s(I,{"data-aos":"fade-up"},{default:m(()=>[s(O,{cols:"6"},{default:m(()=>[s(R,{src:wt})]),_:1}),s(O,{class:"text",cols:"6"},{default:m(()=>[Nt,Tt]),_:1})]),_:1}),s(I,{"data-aos":"fade-up"},{default:m(()=>[s(O,{class:"text",clos:"6"},{default:m(()=>[qt,Dt]),_:1}),s(O,{cols:"6"},{default:m(()=>[s(R,{src:kt})]),_:1})]),_:1}),s(I,null,{default:m(()=>[s(O,{cols:"6"},{default:m(()=>[s(R,{src:xt})]),_:1}),s(O,{class:"text",clos:"6"},{default:m(()=>[Pt,Ct]),_:1})]),_:1}),s(I,{"data-aos":"fade-up"},{default:m(()=>[s(O,{class:"text",clos:"6"},{default:m(()=>[Vt,Ht]),_:1}),s(O,{cols:"6"},{default:m(()=>[s(R,{src:jt})]),_:1})]),_:1}),s(I,{"data-aos":"fade-up"},{default:m(()=>[s(O,{cols:"6"},{default:m(()=>[s(R,{src:Ot})]),_:1}),s(O,{class:"text",clos:"6"},{default:m(()=>[Rt,It]),_:1})]),_:1}),s(I,{"data-aos":"fade-up"},{default:m(()=>[s(O,{class:"text",clos:"6"},{default:m(()=>[Bt,Ut]),_:1}),s(O,{cols:"6"},{default:m(()=>[s(R,{src:St})]),_:1})]),_:1}),s(I,{"data-aos":"fade-up"},{default:m(()=>[s(O,{cols:"6"},{default:m(()=>[s(R,{src:Mt})]),_:1}),s(O,{class:"text",clos:"6"},{default:m(()=>[$t,Ft]),_:1})]),_:1}),s(I,{"data-aos":"fade-up"},{default:m(()=>[s(O,{class:"text",clos:"6"},{default:m(()=>[Wt,Gt]),_:1}),s(O,{cols:"6"},{default:m(()=>[s(R,{src:Et})]),_:1})]),_:1})]),_:1})]),s(dt)],64))}},ee=ft(Yt,[["__scopeId","data-v-256269d3"]]);export{ee as default};
