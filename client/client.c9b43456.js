function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function s(){return Object.create(null)}function r(e){e.forEach(n)}function o(e){return"function"==typeof e}function l(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(e,n,s,r){return e[1]&&r?t(s.ctx.slice(),e[1](r(n))):s.ctx}function c(e){return null==e?"":e}function i(e,t){e.appendChild(t)}function u(e,t,n){e.insertBefore(t,n||null)}function f(e){e.parentNode.removeChild(e)}function p(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function h(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function m(){return d(" ")}function g(){return d("")}function $(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function b(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function v(e){return Array.from(e.childNodes)}function y(e,t,n,s){for(let s=0;s<e.length;s+=1){const r=e[s];if(r.nodeName===t){let t=0;for(;t<r.attributes.length;){const e=r.attributes[t];n[e.name]?t++:r.removeAttribute(e.name)}return e.splice(s,1)[0]}}return s?function(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}(t):h(t)}function E(e,t){for(let n=0;n<e.length;n+=1){const s=e[n];if(3===s.nodeType)return s.data=""+t,e.splice(n,1)[0]}return d(t)}function _(e){return E(e," ")}function S(e,t){t=""+t,e.data!==t&&(e.data=t)}function w(e,t,n,s){e.style.setProperty(t,n,s?"important":"")}function x(e,t,n){e.classList[n?"add":"remove"](t)}function A(e,t=document.body){return Array.from(t.querySelectorAll(e))}let P;function L(e){P=e}function R(){if(!P)throw new Error("Function called outside component initialization");return P}function j(e){R().$$.on_mount.push(e)}function k(){const e=R();return(t,n)=>{const s=e.$$.callbacks[t];if(s){const r=function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(t,n);s.slice().forEach(t=>{t.call(e,r)})}}}const C=[],q=[],N=[],O=[],I=Promise.resolve();let V=!1;function D(e){N.push(e)}let U=!1;const H=new Set;function B(){if(!U){U=!0;do{for(let e=0;e<C.length;e+=1){const t=C[e];L(t),T(t.$$)}for(C.length=0;q.length;)q.pop()();for(let e=0;e<N.length;e+=1){const t=N[e];H.has(t)||(H.add(t),t())}N.length=0}while(C.length);for(;O.length;)O.pop()();V=!1,U=!1,H.clear()}}function T(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(D)}}const J=new Set;let z;function K(){z={r:0,c:[],p:z}}function M(){z.r||r(z.c),z=z.p}function F(e,t){e&&e.i&&(J.delete(e),e.i(t))}function G(e,t,n,s){if(e&&e.o){if(J.has(e))return;J.add(e),z.c.push(()=>{J.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}}function W(e,t){const n={},s={},r={$$scope:1};let o=e.length;for(;o--;){const l=e[o],a=t[o];if(a){for(const e in l)e in a||(s[e]=1);for(const e in a)r[e]||(n[e]=a[e],r[e]=1);e[o]=a}else for(const e in l)r[e]=1}for(const e in s)e in n||(n[e]=void 0);return n}function X(e){return"object"==typeof e&&null!==e?e:{}}function Y(e){e&&e.c()}function Q(e,t){e&&e.l(t)}function Z(e,t,s){const{fragment:l,on_mount:a,on_destroy:c,after_update:i}=e.$$;l&&l.m(t,s),D(()=>{const t=a.map(n).filter(o);c?c.push(...t):r(t),e.$$.on_mount=[]}),i.forEach(D)}function ee(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function te(e,t){-1===e.$$.dirty[0]&&(C.push(e),V||(V=!0,I.then(B)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ne(t,n,o,l,a,c,i=[-1]){const u=P;L(t);const f=n.props||{},p=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:i};let h=!1;p.ctx=o?o(t,f,(e,n,...s)=>{const r=s.length?s[0]:n;return p.ctx&&a(p.ctx[e],p.ctx[e]=r)&&(p.bound[e]&&p.bound[e](r),h&&te(t,e)),n}):[],p.update(),h=!0,r(p.before_update),p.fragment=!!l&&l(p.ctx),n.target&&(n.hydrate?p.fragment&&p.fragment.l(v(n.target)):p.fragment&&p.fragment.c(),n.intro&&F(t.$$.fragment),Z(t,n.target,n.anchor),B()),L(u)}class se{$destroy(){ee(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}const re=[];function oe(t,n=e){let s;const r=[];function o(e){if(l(t,e)&&(t=e,s)){const e=!re.length;for(let e=0;e<r.length;e+=1){const n=r[e];n[1](),re.push(n,t)}if(e){for(let e=0;e<re.length;e+=2)re[e][0](re[e+1]);re.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(l,a=e){const c=[l,a];return r.push(c),1===r.length&&(s=n(o)||e),l(t),()=>{const e=r.indexOf(c);-1!==e&&r.splice(e,1),0===r.length&&(s(),s=null)}}}}const le={},ae=()=>({});function ce(e,t,n){const s=e.slice();return s[2]=t[n],s}function ie(e){let t,n,s,r,o,l=e[2].label+"";return{c(){t=h("li"),n=h("a"),s=d(l),this.h()},l(e){var r=v(t=y(e,"LI",{class:!0})),o=v(n=y(r,"A",{id:!0,href:!0,class:!0}));s=E(o,l),o.forEach(f),r.forEach(f),this.h()},h(){b(n,"id",r=e[2].label),b(n,"href",o=e[2].href),b(n,"class","svelte-jcaq3k"),x(n,"selected",e[0]===e[2].segment),b(t,"class","svelte-jcaq3k")},m(e,r){u(e,t,r),i(t,n),i(n,s)},p(e,t){3&t&&x(n,"selected",e[0]===e[2].segment)},d(e){e&&f(t)}}}function ue(t){let n,s,r,o,l,a,c=t[1],g=[];for(let e=0;e<c.length;e+=1)g[e]=ie(ce(t,c,e));return{c(){n=h("nav"),s=h("ul");for(let e=0;e<g.length;e+=1)g[e].c();r=m(),o=h("li"),l=h("a"),a=d("Blog"),this.h()},l(e){var t=v(n=y(e,"NAV",{class:!0})),c=v(s=y(t,"UL",{class:!0}));for(let e=0;e<g.length;e+=1)g[e].l(c);r=_(c);var i=v(o=y(c,"LI",{class:!0})),u=v(l=y(i,"A",{rel:!0,href:!0,class:!0}));a=E(u,"Blog"),u.forEach(f),i.forEach(f),c.forEach(f),t.forEach(f),this.h()},h(){b(l,"rel","prefetch"),b(l,"href","blog"),b(l,"class","svelte-jcaq3k"),x(l,"selected","blog"===t[0]),b(o,"class","svelte-jcaq3k"),b(s,"class","svelte-jcaq3k"),b(n,"class","svelte-jcaq3k")},m(e,t){u(e,n,t),i(n,s);for(let e=0;e<g.length;e+=1)g[e].m(s,null);i(s,r),i(s,o),i(o,l),i(l,a)},p(e,[t]){if(3&t){let n;for(c=e[1],n=0;n<c.length;n+=1){const o=ce(e,c,n);g[n]?g[n].p(o,t):(g[n]=ie(o),g[n].c(),g[n].m(s,r))}for(;n<g.length;n+=1)g[n].d(1);g.length=c.length}1&t&&x(l,"selected","blog"===e[0])},i:e,o:e,d(e){e&&f(n),p(g,e)}}}function fe(e,t,n){let{segment:s}=t;const r=[{segment:void 0,label:"Home",href:"."},{segment:"about",label:"About",href:"about"},{segment:"awards",label:"Awards",href:"awards"},{segment:"skills",label:"Skills",href:"skills"},{segment:"resume",label:"Resume",href:"resume"},{segment:"contact",label:"Contact",href:"contact"}];return e.$set=(e=>{"segment"in e&&n(0,s=e.segment)}),[s,r]}class pe extends se{constructor(e){super(),ne(this,e,fe,ue,l,{segment:0})}}function he(e,t,n){const s=e.slice();return s[7]=t[n],s}function de(e){let t,n,s,r,o,l=e[7].label+"";return{c(){t=h("li"),n=h("a"),s=d(l),this.h()},l(e){var r=v(t=y(e,"LI",{class:!0})),o=v(n=y(r,"A",{id:!0,href:!0,class:!0}));s=E(o,l),o.forEach(f),r.forEach(f),this.h()},h(){b(n,"id",r=e[7].label),b(n,"href",o=e[7].href),b(n,"class","svelte-1pob7ps"),x(n,"selected",e[0]===e[7].segment),b(t,"class","svelte-1pob7ps")},m(e,r){u(e,t,r),i(t,n),i(n,s)},p(e,t){9&t&&x(n,"selected",e[0]===e[7].segment)},d(e){e&&f(t)}}}function me(t){let n,s,o,l,a,g,A,P,L,R,j,k,C,q,N=t[3],O=[];for(let e=0;e<N.length;e+=1)O[e]=de(he(t,N,e));return{c(){n=h("nav"),s=h("ul");for(let e=0;e<O.length;e+=1)O[e].c();o=m(),l=h("li"),a=h("a"),g=d("Blog"),P=m(),L=h("div"),R=h("i"),j=m(),k=h("div"),C=d(t[2]),this.h()},l(e){var r=v(n=y(e,"NAV",{class:!0})),c=v(s=y(r,"UL",{class:!0}));for(let e=0;e<O.length;e+=1)O[e].l(c);o=_(c);var i=v(l=y(c,"LI",{class:!0})),u=v(a=y(i,"A",{rel:!0,href:!0,class:!0}));g=E(u,"Blog"),u.forEach(f),i.forEach(f),c.forEach(f),r.forEach(f),P=_(e);var p=v(L=y(e,"DIV",{class:!0,style:!0}));v(R=y(p,"I",{class:!0})).forEach(f),j=_(p);var h=v(k=y(p,"DIV",{class:!0}));C=E(h,t[2]),h.forEach(f),p.forEach(f),this.h()},h(){b(a,"rel","prefetch"),b(a,"href","blog"),b(a,"class","svelte-1pob7ps"),x(a,"selected","blog"===t[0]),b(l,"class","svelte-1pob7ps"),b(s,"class","svelte-1pob7ps"),b(n,"class",A=c(t[1]?"visible":"hidden")+" svelte-1pob7ps"),b(R,"class","fa fa-bars"),b(k,"class","label svelte-1pob7ps"),b(L,"class","nav_bar svelte-1pob7ps"),w(L,"z-index",t[1]?1:2)},m(e,r){u(e,n,r),i(n,s);for(let e=0;e<O.length;e+=1)O[e].m(s,null);i(s,o),i(s,l),i(l,a),i(a,g),u(e,P,r),u(e,L,r),i(L,R),i(L,j),i(L,k),i(k,C),q=[$(n,"click",t[5]),$(R,"click",t[4])]},p(e,[t]){if(9&t){let n;for(N=e[3],n=0;n<N.length;n+=1){const r=he(e,N,n);O[n]?O[n].p(r,t):(O[n]=de(r),O[n].c(),O[n].m(s,o))}for(;n<O.length;n+=1)O[n].d(1);O.length=N.length}1&t&&x(a,"selected","blog"===e[0]),2&t&&A!==(A=c(e[1]?"visible":"hidden")+" svelte-1pob7ps")&&b(n,"class",A),4&t&&S(C,e[2]),2&t&&w(L,"z-index",e[1]?1:2)},i:e,o:e,d(e){e&&f(n),p(O,e),e&&f(P),e&&f(L),r(q)}}}function ge(e,t,n){let{segment:s}=t,{isVisible:r}=t;const o=k(),l=[{segment:void 0,label:"Home",href:"."},{segment:"about",label:"About",href:"about"},{segment:"awards",label:"Awards",href:"awards"},{segment:"skills",label:"Skills",href:"skills"},{segment:"resume",label:"Resume",href:"resume"},{segment:"contact",label:"Contact",href:"contact"}];let a=l[0].label;return e.$set=(e=>{"segment"in e&&n(0,s=e.segment),"isVisible"in e&&n(1,r=e.isVisible)}),[s,r,a,l,function(){o("toggle")},function(){event.target.id&&n(2,a=event.target.id),o("toggle")}]}class $e extends se{constructor(e){super(),ne(this,e,ge,me,l,{segment:0,isVisible:1})}}function be(e){let t,n,s,r,o,l,i,p,d,g;const E=new pe({props:{segment:e[0]}}),S=new $e({props:{segment:e[0],isVisible:e[1]}});S.$on("toggle",e[2]);const w=e[4].default,x=function(e,t,n,s){if(e){const r=a(e,t,n,s);return e[0](r)}}(w,e,e[3],null);return{c(){t=h("div"),Y(E.$$.fragment),n=m(),s=h("div"),Y(S.$$.fragment),r=m(),o=h("div"),i=m(),p=h("main"),x&&x.c(),this.h()},l(e){var l=v(t=y(e,"DIV",{class:!0}));Q(E.$$.fragment,l),l.forEach(f),n=_(e);var a=v(s=y(e,"DIV",{class:!0}));Q(S.$$.fragment,a),a.forEach(f),r=_(e),v(o=y(e,"DIV",{class:!0})).forEach(f),i=_(e);var c=v(p=y(e,"MAIN",{class:!0}));x&&x.l(c),c.forEach(f),this.h()},h(){b(t,"class","is-desktop svelte-w96diu"),b(s,"class","is-mobile svelte-w96diu"),b(o,"class",l=c(e[1]?"overlay":"")+" svelte-w96diu"),b(p,"class","svelte-w96diu")},m(l,a){u(l,t,a),Z(E,t,null),u(l,n,a),u(l,s,a),Z(S,s,null),u(l,r,a),u(l,o,a),u(l,i,a),u(l,p,a),x&&x.m(p,null),d=!0,g=$(o,"click",e[2])},p(e,[t]){const n={};1&t&&(n.segment=e[0]),E.$set(n);const s={};1&t&&(s.segment=e[0]),2&t&&(s.isVisible=e[1]),S.$set(s),(!d||2&t&&l!==(l=c(e[1]?"overlay":"")+" svelte-w96diu"))&&b(o,"class",l),x&&x.p&&8&t&&x.p(a(w,e,e[3],null),function(e,t,n,s){if(e[2]&&s){const r=e[2](s(n));if("object"==typeof t.dirty){const e=[],n=Math.max(t.dirty.length,r.length);for(let s=0;s<n;s+=1)e[s]=t.dirty[s]|r[s];return e}return t.dirty|r}return t.dirty}(w,e[3],t,null))},i(e){d||(F(E.$$.fragment,e),F(S.$$.fragment,e),F(x,e),d=!0)},o(e){G(E.$$.fragment,e),G(S.$$.fragment,e),G(x,e),d=!1},d(e){e&&f(t),ee(E),e&&f(n),e&&f(s),ee(S),e&&f(r),e&&f(o),e&&f(i),e&&f(p),x&&x.d(e),g()}}}function ve(e,t,n){let{segment:s}=t,r=!1;let{$$slots:o={},$$scope:l}=t;return e.$set=(e=>{"segment"in e&&n(0,s=e.segment),"$$scope"in e&&n(3,l=e.$$scope)}),[s,r,function(e){n(1,r=!r)},l,o]}class ye extends se{constructor(e){super(),ne(this,e,ve,be,l,{segment:0})}}function Ee(e){let t,n,s=e[1].stack+"";return{c(){t=h("pre"),n=d(s)},l(e){var r=v(t=y(e,"PRE",{}));n=E(r,s),r.forEach(f)},m(e,s){u(e,t,s),i(t,n)},p(e,t){2&t&&s!==(s=e[1].stack+"")&&S(n,s)},d(e){e&&f(t)}}}function _e(t){let n,s,r,o,l,a,c,p,$,w=t[1].message+"";document.title=n=t[0];let x=t[2]&&t[1].stack&&Ee(t);return{c(){s=m(),r=h("h1"),o=d(t[0]),l=m(),a=h("p"),c=d(w),p=m(),x&&x.c(),$=g(),this.h()},l(e){A('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),s=_(e);var n=v(r=y(e,"H1",{class:!0}));o=E(n,t[0]),n.forEach(f),l=_(e);var i=v(a=y(e,"P",{class:!0}));c=E(i,w),i.forEach(f),p=_(e),x&&x.l(e),$=g(),this.h()},h(){b(r,"class","svelte-8od9u6"),b(a,"class","svelte-8od9u6")},m(e,t){u(e,s,t),u(e,r,t),i(r,o),u(e,l,t),u(e,a,t),i(a,c),u(e,p,t),x&&x.m(e,t),u(e,$,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&S(o,e[0]),2&t&&w!==(w=e[1].message+"")&&S(c,w),e[2]&&e[1].stack?x?x.p(e,t):((x=Ee(e)).c(),x.m($.parentNode,$)):x&&(x.d(1),x=null)},i:e,o:e,d(e){e&&f(s),e&&f(r),e&&f(l),e&&f(a),e&&f(p),x&&x.d(e),e&&f($)}}}function Se(e,t,n){let{status:s}=t,{error:r}=t;return e.$set=(e=>{"status"in e&&n(0,s=e.status),"error"in e&&n(1,r=e.error)}),[s,r,!1]}class we extends se{constructor(e){super(),ne(this,e,Se,_e,l,{status:0,error:1})}}function xe(e){let n,s;const r=[e[4].props];var o=e[4].component;function l(e){let n={};for(let e=0;e<r.length;e+=1)n=t(n,r[e]);return{props:n}}if(o)var a=new o(l());return{c(){a&&Y(a.$$.fragment),n=g()},l(e){a&&Q(a.$$.fragment,e),n=g()},m(e,t){a&&Z(a,e,t),u(e,n,t),s=!0},p(e,t){const s=16&t?W(r,[X(e[4].props)]):{};if(o!==(o=e[4].component)){if(a){K();const e=a;G(e.$$.fragment,1,0,()=>{ee(e,1)}),M()}o?(Y((a=new o(l())).$$.fragment),F(a.$$.fragment,1),Z(a,n.parentNode,n)):a=null}else o&&a.$set(s)},i(e){s||(a&&F(a.$$.fragment,e),s=!0)},o(e){a&&G(a.$$.fragment,e),s=!1},d(e){e&&f(n),a&&ee(a,e)}}}function Ae(e){let t;const n=new we({props:{error:e[0],status:e[1]}});return{c(){Y(n.$$.fragment)},l(e){Q(n.$$.fragment,e)},m(e,s){Z(n,e,s),t=!0},p(e,t){const s={};1&t&&(s.error=e[0]),2&t&&(s.status=e[1]),n.$set(s)},i(e){t||(F(n.$$.fragment,e),t=!0)},o(e){G(n.$$.fragment,e),t=!1},d(e){ee(n,e)}}}function Pe(e){let t,n,s,r;const o=[Ae,xe],l=[];function a(e,t){return e[0]?0:1}return t=a(e),n=l[t]=o[t](e),{c(){n.c(),s=g()},l(e){n.l(e),s=g()},m(e,n){l[t].m(e,n),u(e,s,n),r=!0},p(e,r){let c=t;(t=a(e))===c?l[t].p(e,r):(K(),G(l[c],1,1,()=>{l[c]=null}),M(),(n=l[t])||(n=l[t]=o[t](e)).c(),F(n,1),n.m(s.parentNode,s))},i(e){r||(F(n),r=!0)},o(e){G(n),r=!1},d(e){l[t].d(e),e&&f(s)}}}function Le(e){let n;const s=[{segment:e[2][0]},e[3].props];let r={$$slots:{default:[Pe]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)r=t(r,s[e]);const o=new ye({props:r});return{c(){Y(o.$$.fragment)},l(e){Q(o.$$.fragment,e)},m(e,t){Z(o,e,t),n=!0},p(e,[t]){const n=12&t?W(s,[4&t&&{segment:e[2][0]},8&t&&X(e[3].props)]):{};83&t&&(n.$$scope={dirty:t,ctx:e}),o.$set(n)},i(e){n||(F(o.$$.fragment,e),n=!0)},o(e){G(o.$$.fragment,e),n=!1},d(e){ee(o,e)}}}function Re(e,t,n){let{stores:s}=t,{error:r}=t,{status:o}=t,{segments:l}=t,{level0:a}=t,{level1:c=null}=t;var i,u;return i=le,u=s,R().$$.context.set(i,u),e.$set=(e=>{"stores"in e&&n(5,s=e.stores),"error"in e&&n(0,r=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,l=e.segments),"level0"in e&&n(3,a=e.level0),"level1"in e&&n(4,c=e.level1)}),[r,o,l,a,c,s]}class je extends se{constructor(e){super(),ne(this,e,Re,Le,l,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const ke=[/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],Ce=[{js:()=>import("./index.0ab2d18a.js"),css:["index.0ab2d18a.css","client.c9b43456.css"]},{js:()=>import("./contact.5b3f30b3.js"),css:["client.c9b43456.css"]},{js:()=>import("./awards.923190e9.js"),css:["awards.923190e9.css","client.c9b43456.css"]},{js:()=>import("./resume.96522acc.js"),css:["client.c9b43456.css"]},{js:()=>import("./skills.c6ff8a2b.js"),css:["client.c9b43456.css"]},{js:()=>import("./about.2dfac38b.js"),css:["about.2dfac38b.css","client.c9b43456.css"]},{js:()=>import("./index.727be869.js"),css:["index.727be869.css","client.c9b43456.css"]},{js:()=>import("./[slug].b96bd6f5.js"),css:["[slug].b96bd6f5.css","client.c9b43456.css"]}],qe=(e=>[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/contact\/?$/,parts:[{i:1}]},{pattern:/^\/awards\/?$/,parts:[{i:2}]},{pattern:/^\/resume\/?$/,parts:[{i:3}]},{pattern:/^\/skills\/?$/,parts:[{i:4}]},{pattern:/^\/about\/?$/,parts:[{i:5}]},{pattern:/^\/blog\/?$/,parts:[{i:6}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:7,params:t=>({slug:e(t[1])})}]}])(decodeURIComponent);const Ne="undefined"!=typeof __SAPPER__&&__SAPPER__;let Oe,Ie,Ve,De=!1,Ue=[],He="{}";const Be={page:oe({}),preloading:oe(null),session:oe(Ne&&Ne.session)};let Te,Je;Be.session.subscribe(async e=>{if(Te=e,!De)return;Je=!0;const t=Ye(new URL(location.href)),n=Ie={},{redirect:s,props:r,branch:o}=await tt(t);n===Ie&&await et(s,o,r,t.page)});let ze,Ke=null;let Me,Fe=1;const Ge="undefined"!=typeof history?history:{pushState:(e,t,n)=>{},replaceState:(e,t,n)=>{},scrollRestoration:""},We={};function Xe(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,n,s=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[n]&&(t[n]=[t[n]]),"object"==typeof t[n]?t[n].push(s):t[n]=s}),t}function Ye(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(Ne.baseUrl))return null;let t=e.pathname.slice(Ne.baseUrl.length);if(""===t&&(t="/"),!ke.some(e=>e.test(t)))for(let n=0;n<qe.length;n+=1){const s=qe[n],r=s.pattern.exec(t);if(r){const n=Xe(e.search),o=s.parts[s.parts.length-1],l=o.params?o.params(r):{},a={host:location.host,path:t,query:n,params:l};return{href:e.href,route:s,match:r,page:a}}}}function Qe(){return{x:pageXOffset,y:pageYOffset}}async function Ze(e,t,n,s){if(t)Me=t;else{const e=Qe();We[Me]=e,t=Me=++Fe,We[Me]=n?e:{x:0,y:0}}Me=t,Oe&&Be.preloading.set(!0);const r=Ke&&Ke.href===e.href?Ke.promise:tt(e);Ke=null;const o=Ie={},{redirect:l,props:a,branch:c}=await r;if(o===Ie&&(await et(l,c,a,e.page),document.activeElement&&document.activeElement.blur(),!n)){let e=We[t];if(s){const t=document.getElementById(s.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}We[Me]=e,e&&scrollTo(e.x,e.y)}}async function et(e,t,n,s){if(e)return function(e,t={replaceState:!1}){const n=Ye(new URL(e,document.baseURI));return n?(Ge[t.replaceState?"replaceState":"pushState"]({id:Me},"",e),Ze(n,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(Be.page.set(s),Be.preloading.set(!1),Oe)Oe.$set(n);else{n.stores={page:{subscribe:Be.page.subscribe},preloading:{subscribe:Be.preloading.subscribe},session:Be.session},n.level0={props:await Ve};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)st(e.nextSibling);st(e),st(t)}Oe=new je({target:ze,props:n,hydrate:!0})}Ue=t,He=JSON.stringify(s.query),De=!0,Je=!1}async function tt(e){const{route:t,page:n}=e,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},l={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(r&&(r.statusCode!==e||r.location!==t))throw new Error("Conflicting redirects");r={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};let a;Ve||(Ve=Ne.preloaded[0]||ae.call(l,{host:n.host,path:n.path,query:n.query,params:{}},Te));let c=1;try{const r=JSON.stringify(n.query),i=t.pattern.exec(n.path);let u=!1;a=await Promise.all(t.parts.map(async(t,a)=>{const f=s[a];if(function(e,t,n,s){if(s!==He)return!0;const r=Ue[e];return!!r&&(t!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(a,f,i,r)&&(u=!0),o.segments[c]=s[a+1],!t)return{segment:f};const p=c++;if(!Je&&!u&&Ue[a]&&Ue[a].part===t.i)return Ue[a];u=!1;const{default:h,preload:d}=await function(e){const t="string"==typeof e.css?[]:e.css.map(nt);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(Ce[t.i]);let m;return m=De||!Ne.preloaded[a+1]?d?await d.call(l,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},Te):{}:Ne.preloaded[a+1],o[`level${p}`]={component:h,props:m,segment:f,match:i,part:t.i}}))}catch(e){o.error=e,o.status=500,a=[]}return{redirect:r,props:o,branch:a}}function nt(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,n)=>{const s=document.createElement("link");s.rel="stylesheet",s.href=t,s.onload=(()=>e()),s.onerror=n,document.head.appendChild(s)})}function st(e){e.parentNode.removeChild(e)}function rt(e){const t=Ye(new URL(e,document.baseURI));if(t)return Ke&&e===Ke.href||function(e,t){Ke={href:e,promise:t}}(e,tt(t)),Ke.promise}let ot;function lt(e){clearTimeout(ot),ot=setTimeout(()=>{at(e)},20)}function at(e){const t=it(e.target);t&&"prefetch"===t.rel&&rt(t.href)}function ct(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=it(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,s=String(n?t.href.baseVal:t.href);if(s===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=Ye(r);if(o){Ze(o,null,t.hasAttribute("sapper-noscroll"),r.hash),e.preventDefault(),Ge.pushState({id:Me},"",r.href)}}function it(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function ut(e){if(We[Me]=Qe(),e.state){const t=Ye(new URL(location.href));t?Ze(t,e.state.id):location.href=location.href}else(function(e){Me=e})(Fe=Fe+1),Ge.replaceState({id:Me},"",location.href)}!function(e){var t;"scrollRestoration"in Ge&&(Ge.scrollRestoration="manual"),t=e.target,ze=t,addEventListener("click",ct),addEventListener("popstate",ut),addEventListener("touchstart",at),addEventListener("mousemove",lt),Promise.resolve().then(()=>{const{hash:e,href:t}=location;Ge.replaceState({id:Fe},"",t);const n=new URL(location.href);if(Ne.error)return function(e){const{host:t,pathname:n,search:s}=location,{session:r,preloaded:o,status:l,error:a}=Ne;Ve||(Ve=o&&o[0]),et(null,[],{error:a,status:l,session:r,level0:{props:Ve},level1:{props:{status:l,error:a},component:we},segments:o},{host:t,path:n,query:Xe(s),params:{}})}();const s=Ye(n);return s?Ze(s,Fe,!0,e):void 0})}({target:document.querySelector("#sapper")});export{se as S,m as a,y as b,_ as c,f as d,h as e,v as f,E as g,b as h,ne as i,u as j,i as k,p as l,S as m,e as n,j as o,A as q,l as s,d as t};