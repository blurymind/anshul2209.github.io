function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function s(){return Object.create(null)}function r(e){e.forEach(n)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function l(e,n,s,r){return e[1]&&r?t(s.ctx.slice(),e[1](r(n))):s.ctx}function c(e){return null==e?"":e}function i(e,t){e.appendChild(t)}function f(e,t,n){e.insertBefore(t,n||null)}function u(e){e.parentNode.removeChild(e)}function h(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function p(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function m(){return d(" ")}function g(){return d("")}function v(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function $(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function b(e){return Array.from(e.childNodes)}function y(e,t,n,s){for(let s=0;s<e.length;s+=1){const r=e[s];if(r.nodeName===t){let t=0;for(;t<r.attributes.length;){const e=r.attributes[t];n[e.name]?t++:r.removeAttribute(e.name)}return e.splice(s,1)[0]}}return s?function(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}(t):p(t)}function E(e,t){for(let n=0;n<e.length;n+=1){const s=e[n];if(3===s.nodeType)return s.data=""+t,e.splice(n,1)[0]}return d(t)}function _(e){return E(e," ")}function S(e,t){t=""+t,e.data!==t&&(e.data=t)}function w(e,t,n,s){e.style.setProperty(t,n,s?"important":"")}function A(e,t,n){e.classList[n?"add":"remove"](t)}function x(e,t=document.body){return Array.from(t.querySelectorAll(e))}let P;function k(e){P=e}function j(){if(!P)throw new Error("Function called outside component initialization");return P}function L(e){j().$$.on_mount.push(e)}function R(){const e=j();return(t,n)=>{const s=e.$$.callbacks[t];if(s){const r=function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(t,n);s.slice().forEach(t=>{t.call(e,r)})}}}const C=[],q=[],D=[],V=[],N=Promise.resolve();let O=!1;function I(e){D.push(e)}let U=!1;const H=new Set;function z(){if(!U){U=!0;do{for(let e=0;e<C.length;e+=1){const t=C[e];k(t),B(t.$$)}for(C.length=0;q.length;)q.pop()();for(let e=0;e<D.length;e+=1){const t=D[e];H.has(t)||(H.add(t),t())}D.length=0}while(C.length);for(;V.length;)V.pop()();O=!1,U=!1,H.clear()}}function B(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(I)}}const F=new Set;let T;function J(){T={r:0,c:[],p:T}}function K(){T.r||r(T.c),T=T.p}function M(e,t){e&&e.i&&(F.delete(e),e.i(t))}function G(e,t,n,s){if(e&&e.o){if(F.has(e))return;F.add(e),T.c.push(()=>{F.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}}function W(e,t){const n={},s={},r={$$scope:1};let o=e.length;for(;o--;){const a=e[o],l=t[o];if(l){for(const e in a)e in l||(s[e]=1);for(const e in l)r[e]||(n[e]=l[e],r[e]=1);e[o]=l}else for(const e in a)r[e]=1}for(const e in s)e in n||(n[e]=void 0);return n}function X(e){return"object"==typeof e&&null!==e?e:{}}function Y(e){e&&e.c()}function Q(e,t){e&&e.l(t)}function Z(e,t,s){const{fragment:a,on_mount:l,on_destroy:c,after_update:i}=e.$$;a&&a.m(t,s),I(()=>{const t=l.map(n).filter(o);c?c.push(...t):r(t),e.$$.on_mount=[]}),i.forEach(I)}function ee(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function te(e,t){-1===e.$$.dirty[0]&&(C.push(e),O||(O=!0,N.then(z)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ne(t,n,o,a,l,c,i=[-1]){const f=P;k(t);const u=n.props||{},h=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:l,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:s(),dirty:i};let p=!1;h.ctx=o?o(t,u,(e,n,...s)=>{const r=s.length?s[0]:n;return h.ctx&&l(h.ctx[e],h.ctx[e]=r)&&(h.bound[e]&&h.bound[e](r),p&&te(t,e)),n}):[],h.update(),p=!0,r(h.before_update),h.fragment=!!a&&a(h.ctx),n.target&&(n.hydrate?h.fragment&&h.fragment.l(b(n.target)):h.fragment&&h.fragment.c(),n.intro&&M(t.$$.fragment),Z(t,n.target,n.anchor),z()),k(f)}class se{$destroy(){ee(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}const re=[];function oe(t,n=e){let s;const r=[];function o(e){if(a(t,e)&&(t=e,s)){const e=!re.length;for(let e=0;e<r.length;e+=1){const n=r[e];n[1](),re.push(n,t)}if(e){for(let e=0;e<re.length;e+=2)re[e][0](re[e+1]);re.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(a,l=e){const c=[a,l];return r.push(c),1===r.length&&(s=n(o)||e),a(t),()=>{const e=r.indexOf(c);-1!==e&&r.splice(e,1),0===r.length&&(s(),s=null)}}}}const ae={},le=()=>({});function ce(e,t,n){const s=e.slice();return s[2]=t[n],s}function ie(e){let t,n,s,r,o,a,l,h,g,v=e[2].label+"";return{c(){t=p("li"),n=p("i"),r=m(),o=p("a"),a=d(v),g=m(),this.h()},l(e){var s=b(t=y(e,"LI",{class:!0}));b(n=y(s,"I",{class:!0,"aria-hidden":!0})).forEach(u),r=_(s);var l=b(o=y(s,"A",{id:!0,href:!0,class:!0}));a=E(l,v),l.forEach(u),g=_(s),s.forEach(u),this.h()},h(){$(n,"class",s=c(e[2].icon)+" svelte-zqn53r"),$(n,"aria-hidden","true"),$(o,"id",l=e[2].label),$(o,"href",h=e[2].href),$(o,"class","svelte-zqn53r"),A(o,"selected",e[0]===e[2].segment),$(t,"class","svelte-zqn53r")},m(e,s){f(e,t,s),i(t,n),i(t,r),i(t,o),i(o,a),i(t,g)},p(e,t){3&t&&A(o,"selected",e[0]===e[2].segment)},d(e){e&&u(t)}}}function fe(t){let n,s,r,o,a,l,c,g,v,S,w,A=t[1],x=[];for(let e=0;e<A.length;e+=1)x[e]=ie(ce(t,A,e));return{c(){n=p("nav"),s=p("div"),r=p("h2"),o=d("Anshul "),a=p("br"),l=d("Bansal"),c=m(),g=p("h4"),v=d("Full Stack Developer"),S=m(),w=p("ul");for(let e=0;e<x.length;e+=1)x[e].c();this.h()},l(e){var t=b(n=y(e,"NAV",{class:!0})),i=b(s=y(t,"DIV",{class:!0})),f=b(r=y(i,"H2",{class:!0}));o=E(f,"Anshul "),a=y(f,"BR",{}),l=E(f,"Bansal"),f.forEach(u),c=_(i);var h=b(g=y(i,"H4",{class:!0}));v=E(h,"Full Stack Developer"),h.forEach(u),i.forEach(u),S=_(t);var p=b(w=y(t,"UL",{class:!0}));for(let e=0;e<x.length;e+=1)x[e].l(p);p.forEach(u),t.forEach(u),this.h()},h(){$(r,"class","name svelte-zqn53r"),$(g,"class","title svelte-zqn53r"),$(s,"class","logo svelte-zqn53r"),$(w,"class","svelte-zqn53r"),$(n,"class","svelte-zqn53r")},m(e,t){f(e,n,t),i(n,s),i(s,r),i(r,o),i(r,a),i(r,l),i(s,c),i(s,g),i(g,v),i(n,S),i(n,w);for(let e=0;e<x.length;e+=1)x[e].m(w,null)},p(e,[t]){if(3&t){let n;for(A=e[1],n=0;n<A.length;n+=1){const s=ce(e,A,n);x[n]?x[n].p(s,t):(x[n]=ie(s),x[n].c(),x[n].m(w,null))}for(;n<x.length;n+=1)x[n].d(1);x.length=A.length}},i:e,o:e,d(e){e&&u(n),h(x,e)}}}function ue(e,t,n){let{segment:s}=t;const r=[{segment:void 0,label:"About",href:".",icon:"fa fa-user"},{segment:"projects",label:"Projects",href:"projects",icon:"fa fa-laptop"},{segment:"videos",label:"Videos",href:"videos",icon:"fa fa-video-camera"},{segment:"awards",label:"Awards",href:"awards",icon:"fa fa-star-o"},{segment:"skills",label:"Skills",href:"skills",icon:"fa fa-bar-chart"},{segment:"contact",label:"Contact",href:"contact",icon:"fa fa-phone"},{segment:"blog",label:"Blog Posts",href:"blog",icon:"fa fa-rss-square"}];return e.$set=(e=>{"segment"in e&&n(0,s=e.segment)}),[s,r]}class he extends se{constructor(e){super(),ne(this,e,ue,fe,a,{segment:0})}}function pe(e,t,n){const s=e.slice();return s[7]=t[n],s}function de(e){let t,n,s,r,o,a,l,h,g,v=e[7].label+"";return{c(){t=p("li"),n=p("i"),r=m(),o=p("a"),a=d(v),g=m(),this.h()},l(e){var s=b(t=y(e,"LI",{class:!0}));b(n=y(s,"I",{class:!0,"aria-hidden":!0})).forEach(u),r=_(s);var l=b(o=y(s,"A",{id:!0,href:!0,class:!0}));a=E(l,v),l.forEach(u),g=_(s),s.forEach(u),this.h()},h(){$(n,"class",s=c(e[7].icon)+" svelte-1t6eyke"),$(n,"aria-hidden","true"),$(o,"id",l=e[7].label),$(o,"href",h=e[7].href),$(o,"class","svelte-1t6eyke"),A(o,"selected",e[0]===e[7].segment),$(t,"class","svelte-1t6eyke")},m(e,s){f(e,t,s),i(t,n),i(t,r),i(t,o),i(o,a),i(t,g)},p(e,t){9&t&&A(o,"selected",e[0]===e[7].segment)},d(e){e&&u(t)}}}function me(t){let n,s,o,a,l,g,A,x,P,k,j,L,R,C,q,D,V,N=t[3],O=[];for(let e=0;e<N.length;e+=1)O[e]=de(pe(t,N,e));return{c(){n=p("nav"),s=p("div"),o=p("h2"),a=d("Anshul Bansal"),l=m(),g=p("h4"),A=d("Full Stack Developer"),x=m(),P=p("ul");for(let e=0;e<O.length;e+=1)O[e].c();j=m(),L=p("div"),R=p("i"),C=m(),q=p("div"),D=d(t[2]),this.h()},l(e){var r=b(n=y(e,"NAV",{class:!0})),c=b(s=y(r,"DIV",{class:!0})),i=b(o=y(c,"H2",{class:!0}));a=E(i,"Anshul Bansal"),i.forEach(u),l=_(c);var f=b(g=y(c,"H4",{class:!0}));A=E(f,"Full Stack Developer"),f.forEach(u),c.forEach(u),x=_(r);var h=b(P=y(r,"UL",{class:!0}));for(let e=0;e<O.length;e+=1)O[e].l(h);h.forEach(u),r.forEach(u),j=_(e);var p=b(L=y(e,"DIV",{class:!0,style:!0}));b(R=y(p,"I",{class:!0})).forEach(u),C=_(p);var d=b(q=y(p,"DIV",{class:!0}));D=E(d,t[2]),d.forEach(u),p.forEach(u),this.h()},h(){$(o,"class","name svelte-1t6eyke"),$(g,"class","title svelte-1t6eyke"),$(s,"class","logo svelte-1t6eyke"),$(P,"class","svelte-1t6eyke"),$(n,"class",k=c(t[1]?"visible":"hidden")+" svelte-1t6eyke"),$(R,"class","fa fa-bars"),$(q,"class","label svelte-1t6eyke"),$(L,"class","nav_bar svelte-1t6eyke"),w(L,"z-index",t[1]?1:2)},m(e,r){f(e,n,r),i(n,s),i(s,o),i(o,a),i(s,l),i(s,g),i(g,A),i(n,x),i(n,P);for(let e=0;e<O.length;e+=1)O[e].m(P,null);f(e,j,r),f(e,L,r),i(L,R),i(L,C),i(L,q),i(q,D),V=[v(n,"click",t[5]),v(R,"click",t[4])]},p(e,[t]){if(9&t){let n;for(N=e[3],n=0;n<N.length;n+=1){const s=pe(e,N,n);O[n]?O[n].p(s,t):(O[n]=de(s),O[n].c(),O[n].m(P,null))}for(;n<O.length;n+=1)O[n].d(1);O.length=N.length}2&t&&k!==(k=c(e[1]?"visible":"hidden")+" svelte-1t6eyke")&&$(n,"class",k),4&t&&S(D,e[2]),2&t&&w(L,"z-index",e[1]?1:2)},i:e,o:e,d(e){e&&u(n),h(O,e),e&&u(j),e&&u(L),r(V)}}}function ge(e,t,n){let{segment:s}=t,{isVisible:r}=t;const o=R(),a=[{segment:void 0,label:"About",href:".",icon:"fa fa-user"},{segment:"projects",label:"Projects",href:"projects",icon:"fa fa-laptop"},{segment:"videos",label:"Videos",href:"videos",icon:"fa fa-video-camera"},{segment:"awards",label:"Awards",href:"awards",icon:"fa fa-star-o"},{segment:"skills",label:"Skills",href:"skills",icon:"fa fa-bar-chart"},{segment:"contact",label:"Contact",href:"contact",icon:"fa fa-phone"},{segment:"blog",label:"Blog Posts",href:"blog",icon:"fa fa-rss-square"}];let l=a[0].label;return e.$set=(e=>{"segment"in e&&n(0,s=e.segment),"isVisible"in e&&n(1,r=e.isVisible)}),[s,r,l,a,function(){o("toggle")},function(){event.target.id&&n(2,l=event.target.id),o("toggle")}]}class ve extends se{constructor(e){super(),ne(this,e,ge,me,a,{segment:0,isVisible:1})}}function $e(e){let t,n,s,r,o,a,i,h,d,g;const E=new he({props:{segment:e[0]}}),S=new ve({props:{segment:e[0],isVisible:e[1]}});S.$on("toggle",e[2]);const w=e[4].default,A=function(e,t,n,s){if(e){const r=l(e,t,n,s);return e[0](r)}}(w,e,e[3],null);return{c(){t=p("div"),Y(E.$$.fragment),n=m(),s=p("div"),Y(S.$$.fragment),r=m(),o=p("div"),i=m(),h=p("main"),A&&A.c(),this.h()},l(e){var a=b(t=y(e,"DIV",{class:!0}));Q(E.$$.fragment,a),a.forEach(u),n=_(e);var l=b(s=y(e,"DIV",{class:!0}));Q(S.$$.fragment,l),l.forEach(u),r=_(e),b(o=y(e,"DIV",{class:!0})).forEach(u),i=_(e);var c=b(h=y(e,"MAIN",{class:!0}));A&&A.l(c),c.forEach(u),this.h()},h(){$(t,"class","is-desktop svelte-he71qp"),$(s,"class","is-mobile svelte-he71qp"),$(o,"class",a=c(e[1]?"overlay":"")+" svelte-he71qp"),$(h,"class","svelte-he71qp")},m(a,l){f(a,t,l),Z(E,t,null),f(a,n,l),f(a,s,l),Z(S,s,null),f(a,r,l),f(a,o,l),f(a,i,l),f(a,h,l),A&&A.m(h,null),d=!0,g=v(o,"click",e[2])},p(e,[t]){const n={};1&t&&(n.segment=e[0]),E.$set(n);const s={};1&t&&(s.segment=e[0]),2&t&&(s.isVisible=e[1]),S.$set(s),(!d||2&t&&a!==(a=c(e[1]?"overlay":"")+" svelte-he71qp"))&&$(o,"class",a),A&&A.p&&8&t&&A.p(l(w,e,e[3],null),function(e,t,n,s){if(e[2]&&s){const r=e[2](s(n));if("object"==typeof t.dirty){const e=[],n=Math.max(t.dirty.length,r.length);for(let s=0;s<n;s+=1)e[s]=t.dirty[s]|r[s];return e}return t.dirty|r}return t.dirty}(w,e[3],t,null))},i(e){d||(M(E.$$.fragment,e),M(S.$$.fragment,e),M(A,e),d=!0)},o(e){G(E.$$.fragment,e),G(S.$$.fragment,e),G(A,e),d=!1},d(e){e&&u(t),ee(E),e&&u(n),e&&u(s),ee(S),e&&u(r),e&&u(o),e&&u(i),e&&u(h),A&&A.d(e),g()}}}function be(e,t,n){let{segment:s}=t,r=!1;let{$$slots:o={},$$scope:a}=t;return e.$set=(e=>{"segment"in e&&n(0,s=e.segment),"$$scope"in e&&n(3,a=e.$$scope)}),[s,r,function(e){n(1,r=!r)},a,o]}class ye extends se{constructor(e){super(),ne(this,e,be,$e,a,{segment:0})}}function Ee(e){let t,n,s=e[1].stack+"";return{c(){t=p("pre"),n=d(s)},l(e){var r=b(t=y(e,"PRE",{}));n=E(r,s),r.forEach(u)},m(e,s){f(e,t,s),i(t,n)},p(e,t){2&t&&s!==(s=e[1].stack+"")&&S(n,s)},d(e){e&&u(t)}}}function _e(t){let n,s,r,o,a,l,c,h,v,w=t[1].message+"";document.title=n=t[0];let A=t[2]&&t[1].stack&&Ee(t);return{c(){s=m(),r=p("h1"),o=d(t[0]),a=m(),l=p("p"),c=d(w),h=m(),A&&A.c(),v=g(),this.h()},l(e){x('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(u),s=_(e);var n=b(r=y(e,"H1",{class:!0}));o=E(n,t[0]),n.forEach(u),a=_(e);var i=b(l=y(e,"P",{class:!0}));c=E(i,w),i.forEach(u),h=_(e),A&&A.l(e),v=g(),this.h()},h(){$(r,"class","svelte-8od9u6"),$(l,"class","svelte-8od9u6")},m(e,t){f(e,s,t),f(e,r,t),i(r,o),f(e,a,t),f(e,l,t),i(l,c),f(e,h,t),A&&A.m(e,t),f(e,v,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&S(o,e[0]),2&t&&w!==(w=e[1].message+"")&&S(c,w),e[2]&&e[1].stack?A?A.p(e,t):((A=Ee(e)).c(),A.m(v.parentNode,v)):A&&(A.d(1),A=null)},i:e,o:e,d(e){e&&u(s),e&&u(r),e&&u(a),e&&u(l),e&&u(h),A&&A.d(e),e&&u(v)}}}function Se(e,t,n){let{status:s}=t,{error:r}=t;return e.$set=(e=>{"status"in e&&n(0,s=e.status),"error"in e&&n(1,r=e.error)}),[s,r,!1]}class we extends se{constructor(e){super(),ne(this,e,Se,_e,a,{status:0,error:1})}}function Ae(e){let n,s;const r=[e[4].props];var o=e[4].component;function a(e){let n={};for(let e=0;e<r.length;e+=1)n=t(n,r[e]);return{props:n}}if(o)var l=new o(a());return{c(){l&&Y(l.$$.fragment),n=g()},l(e){l&&Q(l.$$.fragment,e),n=g()},m(e,t){l&&Z(l,e,t),f(e,n,t),s=!0},p(e,t){const s=16&t?W(r,[X(e[4].props)]):{};if(o!==(o=e[4].component)){if(l){J();const e=l;G(e.$$.fragment,1,0,()=>{ee(e,1)}),K()}o?(Y((l=new o(a())).$$.fragment),M(l.$$.fragment,1),Z(l,n.parentNode,n)):l=null}else o&&l.$set(s)},i(e){s||(l&&M(l.$$.fragment,e),s=!0)},o(e){l&&G(l.$$.fragment,e),s=!1},d(e){e&&u(n),l&&ee(l,e)}}}function xe(e){let t;const n=new we({props:{error:e[0],status:e[1]}});return{c(){Y(n.$$.fragment)},l(e){Q(n.$$.fragment,e)},m(e,s){Z(n,e,s),t=!0},p(e,t){const s={};1&t&&(s.error=e[0]),2&t&&(s.status=e[1]),n.$set(s)},i(e){t||(M(n.$$.fragment,e),t=!0)},o(e){G(n.$$.fragment,e),t=!1},d(e){ee(n,e)}}}function Pe(e){let t,n,s,r;const o=[xe,Ae],a=[];function l(e,t){return e[0]?0:1}return t=l(e),n=a[t]=o[t](e),{c(){n.c(),s=g()},l(e){n.l(e),s=g()},m(e,n){a[t].m(e,n),f(e,s,n),r=!0},p(e,r){let c=t;(t=l(e))===c?a[t].p(e,r):(J(),G(a[c],1,1,()=>{a[c]=null}),K(),(n=a[t])||(n=a[t]=o[t](e)).c(),M(n,1),n.m(s.parentNode,s))},i(e){r||(M(n),r=!0)},o(e){G(n),r=!1},d(e){a[t].d(e),e&&u(s)}}}function ke(e){let n;const s=[{segment:e[2][0]},e[3].props];let r={$$slots:{default:[Pe]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)r=t(r,s[e]);const o=new ye({props:r});return{c(){Y(o.$$.fragment)},l(e){Q(o.$$.fragment,e)},m(e,t){Z(o,e,t),n=!0},p(e,[t]){const n=12&t?W(s,[4&t&&{segment:e[2][0]},8&t&&X(e[3].props)]):{};83&t&&(n.$$scope={dirty:t,ctx:e}),o.$set(n)},i(e){n||(M(o.$$.fragment,e),n=!0)},o(e){G(o.$$.fragment,e),n=!1},d(e){ee(o,e)}}}function je(e,t,n){let{stores:s}=t,{error:r}=t,{status:o}=t,{segments:a}=t,{level0:l}=t,{level1:c=null}=t;var i,f;return i=ae,f=s,j().$$.context.set(i,f),e.$set=(e=>{"stores"in e&&n(5,s=e.stores),"error"in e&&n(0,r=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,a=e.segments),"level0"in e&&n(3,l=e.level0),"level1"in e&&n(4,c=e.level1)}),[r,o,a,l,c,s]}class Le extends se{constructor(e){super(),ne(this,e,je,ke,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const Re=[],Ce=[{js:()=>import("./index.6e3dfda7.js"),css:["index.6e3dfda7.css","client.edf33b4e.css"]},{js:()=>import("./experience.417e5af0.js"),css:["client.edf33b4e.css"]},{js:()=>import("./projects.c5830c40.js"),css:["projects.c5830c40.css","client.edf33b4e.css","SectionHeader.4278293f.css"]},{js:()=>import("./contact.20a856e8.js"),css:["contact.20a856e8.css","client.edf33b4e.css","SectionHeader.4278293f.css"]},{js:()=>import("./awards.410e604c.js"),css:["awards.410e604c.css","client.edf33b4e.css","SectionHeader.4278293f.css"]},{js:()=>import("./skills.06f3f39e.js"),css:["skills.06f3f39e.css","client.edf33b4e.css","SectionHeader.4278293f.css"]},{js:()=>import("./videos.33d23677.js"),css:["videos.33d23677.css","client.edf33b4e.css","SectionHeader.4278293f.css"]},{js:()=>import("./blog.54be08d0.js"),css:["blog.54be08d0.css","client.edf33b4e.css","SectionHeader.4278293f.css"]}],qe=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/experience\/?$/,parts:[{i:1}]},{pattern:/^\/projects\/?$/,parts:[{i:2}]},{pattern:/^\/contact\/?$/,parts:[{i:3}]},{pattern:/^\/awards\/?$/,parts:[{i:4}]},{pattern:/^\/skills\/?$/,parts:[{i:5}]},{pattern:/^\/videos\/?$/,parts:[{i:6}]},{pattern:/^\/blog\/?$/,parts:[{i:7}]}];const De="undefined"!=typeof __SAPPER__&&__SAPPER__;let Ve,Ne,Oe,Ie=!1,Ue=[],He="{}";const ze={page:oe({}),preloading:oe(null),session:oe(De&&De.session)};let Be,Fe;ze.session.subscribe(async e=>{if(Be=e,!Ie)return;Fe=!0;const t=Ye(new URL(location.href)),n=Ne={},{redirect:s,props:r,branch:o}=await tt(t);n===Ne&&await et(s,o,r,t.page)});let Te,Je=null;let Ke,Me=1;const Ge="undefined"!=typeof history?history:{pushState:(e,t,n)=>{},replaceState:(e,t,n)=>{},scrollRestoration:""},We={};function Xe(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,n,s=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[n]&&(t[n]=[t[n]]),"object"==typeof t[n]?t[n].push(s):t[n]=s}),t}function Ye(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(De.baseUrl))return null;let t=e.pathname.slice(De.baseUrl.length);if(""===t&&(t="/"),!Re.some(e=>e.test(t)))for(let n=0;n<qe.length;n+=1){const s=qe[n],r=s.pattern.exec(t);if(r){const n=Xe(e.search),o=s.parts[s.parts.length-1],a=o.params?o.params(r):{},l={host:location.host,path:t,query:n,params:a};return{href:e.href,route:s,match:r,page:l}}}}function Qe(){return{x:pageXOffset,y:pageYOffset}}async function Ze(e,t,n,s){if(t)Ke=t;else{const e=Qe();We[Ke]=e,t=Ke=++Me,We[Ke]=n?e:{x:0,y:0}}Ke=t,Ve&&ze.preloading.set(!0);const r=Je&&Je.href===e.href?Je.promise:tt(e);Je=null;const o=Ne={},{redirect:a,props:l,branch:c}=await r;if(o===Ne&&(await et(a,c,l,e.page),document.activeElement&&document.activeElement.blur(),!n)){let e=We[t];if(s){const t=document.getElementById(s.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}We[Ke]=e,e&&scrollTo(e.x,e.y)}}async function et(e,t,n,s){if(e)return function(e,t={replaceState:!1}){const n=Ye(new URL(e,document.baseURI));return n?(Ge[t.replaceState?"replaceState":"pushState"]({id:Ke},"",e),Ze(n,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(ze.page.set(s),ze.preloading.set(!1),Ve)Ve.$set(n);else{n.stores={page:{subscribe:ze.page.subscribe},preloading:{subscribe:ze.preloading.subscribe},session:ze.session},n.level0={props:await Oe};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)st(e.nextSibling);st(e),st(t)}Ve=new Le({target:Te,props:n,hydrate:!0})}Ue=t,He=JSON.stringify(s.query),Ie=!0,Fe=!1}async function tt(e){const{route:t,page:n}=e,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},a={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(r&&(r.statusCode!==e||r.location!==t))throw new Error("Conflicting redirects");r={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};let l;Oe||(Oe=De.preloaded[0]||le.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Be));let c=1;try{const r=JSON.stringify(n.query),i=t.pattern.exec(n.path);let f=!1;l=await Promise.all(t.parts.map(async(t,l)=>{const u=s[l];if(function(e,t,n,s){if(s!==He)return!0;const r=Ue[e];return!!r&&(t!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(l,u,i,r)&&(f=!0),o.segments[c]=s[l+1],!t)return{segment:u};const h=c++;if(!Fe&&!f&&Ue[l]&&Ue[l].part===t.i)return Ue[l];f=!1;const{default:p,preload:d}=await function(e){const t="string"==typeof e.css?[]:e.css.map(nt);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(Ce[t.i]);let m;return m=Ie||!De.preloaded[l+1]?d?await d.call(a,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},Be):{}:De.preloaded[l+1],o[`level${h}`]={component:p,props:m,segment:u,match:i,part:t.i}}))}catch(e){o.error=e,o.status=500,l=[]}return{redirect:r,props:o,branch:l}}function nt(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,n)=>{const s=document.createElement("link");s.rel="stylesheet",s.href=t,s.onload=(()=>e()),s.onerror=n,document.head.appendChild(s)})}function st(e){e.parentNode.removeChild(e)}function rt(e){const t=Ye(new URL(e,document.baseURI));if(t)return Je&&e===Je.href||function(e,t){Je={href:e,promise:t}}(e,tt(t)),Je.promise}let ot;function at(e){clearTimeout(ot),ot=setTimeout(()=>{lt(e)},20)}function lt(e){const t=it(e.target);t&&"prefetch"===t.rel&&rt(t.href)}function ct(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=it(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,s=String(n?t.href.baseVal:t.href);if(s===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=Ye(r);if(o){Ze(o,null,t.hasAttribute("sapper-noscroll"),r.hash),e.preventDefault(),Ge.pushState({id:Ke},"",r.href)}}function it(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function ft(e){if(We[Ke]=Qe(),e.state){const t=Ye(new URL(location.href));t?Ze(t,e.state.id):location.href=location.href}else(function(e){Ke=e})(Me=Me+1),Ge.replaceState({id:Ke},"",location.href)}!function(e){var t;"scrollRestoration"in Ge&&(Ge.scrollRestoration="manual"),t=e.target,Te=t,addEventListener("click",ct),addEventListener("popstate",ft),addEventListener("touchstart",lt),addEventListener("mousemove",at),Promise.resolve().then(()=>{const{hash:e,href:t}=location;Ge.replaceState({id:Me},"",t);const n=new URL(location.href);if(De.error)return function(e){const{host:t,pathname:n,search:s}=location,{session:r,preloaded:o,status:a,error:l}=De;Oe||(Oe=o&&o[0]),et(null,[],{error:l,status:a,session:r,level0:{props:Oe},level1:{props:{status:a,error:l},component:we},segments:o},{host:t,path:n,query:Xe(s),params:{}})}();const s=Ye(n);return s?Ze(s,Me,!0,e):void 0})}({target:document.querySelector("#sapper")});export{c as A,v as B,h as C,se as S,m as a,y as b,_ as c,u as d,p as e,b as f,E as g,$ as h,ne as i,f as j,i as k,S as l,w as m,e as n,Y as o,Q as p,x as q,Z as r,a as s,d as t,G as u,K as v,M as w,ee as x,L as y,J as z};
