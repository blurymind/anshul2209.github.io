function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function l(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function d(){return h(" ")}function m(){return h("")}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t){return Array.from(t.childNodes)}function v(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;for(;e<s.attributes.length;){const t=s.attributes[e];n[t.name]?e++:s.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):p(e)}function b(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return h(e)}function y(t){return b(t," ")}function _(t,e){e=""+e,t.data!==e&&(t.data=e)}function E(t,e,n){t.classList[n?"add":"remove"](e)}function S(t,e=document.body){return Array.from(e.querySelectorAll(t))}let x;function w(t){x=t}function A(){if(!x)throw new Error("Function called outside component initialization");return x}function P(t){A().$$.on_mount.push(t)}const L=[],R=[],C=[],j=[],k=Promise.resolve();let O=!1;function N(t){C.push(t)}let q=!1;const U=new Set;function I(){if(!q){q=!0;do{for(let t=0;t<L.length;t+=1){const e=L[t];w(e),H(e.$$)}for(L.length=0;R.length;)R.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];U.has(e)||(U.add(e),e())}C.length=0}while(L.length);for(;j.length;)j.pop()();O=!1,q=!1,U.clear()}}function H(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}const D=new Set;let B;function T(){B={r:0,c:[],p:B}}function J(){B.r||s(B.c),B=B.p}function V(t,e){t&&t.i&&(D.delete(t),t.i(e))}function K(t,e,n,r){if(t&&t.o){if(D.has(t))return;D.add(t),B.c.push(()=>{D.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function M(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],c=e[o];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)s[t]||(n[t]=c[t],s[t]=1);t[o]=c}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function z(t){return"object"==typeof t&&null!==t?t:{}}function F(t){t&&t.c()}function G(t,e){t&&t.l(e)}function W(t,e,r){const{fragment:a,on_mount:c,on_destroy:l,after_update:i}=t.$$;a&&a.m(e,r),N(()=>{const e=c.map(n).filter(o);l?l.push(...e):s(e),t.$$.on_mount=[]}),i.forEach(N)}function X(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(t,e){-1===t.$$.dirty[0]&&(L.push(t),O||(O=!0,k.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Q(e,n,o,a,c,l,i=[-1]){const u=x;w(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:i};let h=!1;p.ctx=o?o(e,f,(t,n,...r)=>{const s=r.length?r[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=s)&&(p.bound[t]&&p.bound[t](s),h&&Y(e,t)),n}):[],p.update(),h=!0,s(p.before_update),p.fragment=!!a&&a(p.ctx),n.target&&(n.hydrate?p.fragment&&p.fragment.l($(n.target)):p.fragment&&p.fragment.c(),n.intro&&V(e.$$.fragment),W(e,n.target,n.anchor),I()),w(u)}class Z{$destroy(){X(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const tt=[];function et(e,n=t){let r;const s=[];function o(t){if(a(e,t)&&(e=t,r)){const t=!tt.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),tt.push(n,e)}if(t){for(let t=0;t<tt.length;t+=2)tt[t][0](tt[t+1]);tt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,c=t){const l=[a,c];return s.push(l),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(l);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const nt={},rt=()=>({});function st(e){let n,r,s,o,a,c,f,m,_,S,x,w,A,P,L,R,C,j,k,O,N,q,U,I,H,D,B,T,J;return{c(){n=p("nav"),r=p("ul"),s=p("li"),o=p("a"),a=h("Home"),c=d(),f=p("li"),m=p("a"),_=h("About"),S=d(),x=p("li"),w=p("a"),A=h("Awards"),P=d(),L=p("li"),R=p("a"),C=h("Skills"),j=d(),k=p("li"),O=p("a"),N=h("Resume"),q=d(),U=p("li"),I=p("a"),H=h("Contact"),D=d(),B=p("li"),T=p("a"),J=h("Blog"),this.h()},l(t){var e=$(n=v(t,"NAV",{class:!0})),l=$(r=v(e,"UL",{class:!0})),i=$(s=v(l,"LI",{class:!0})),p=$(o=v(i,"A",{href:!0,class:!0}));a=b(p,"Home"),p.forEach(u),i.forEach(u),c=y(l);var h=$(f=v(l,"LI",{class:!0})),d=$(m=v(h,"A",{href:!0,class:!0}));_=b(d,"About"),d.forEach(u),h.forEach(u),S=y(l);var g=$(x=v(l,"LI",{class:!0})),E=$(w=v(g,"A",{href:!0,class:!0}));A=b(E,"Awards"),E.forEach(u),g.forEach(u),P=y(l);var V=$(L=v(l,"LI",{class:!0})),K=$(R=v(V,"A",{href:!0,class:!0}));C=b(K,"Skills"),K.forEach(u),V.forEach(u),j=y(l);var M=$(k=v(l,"LI",{class:!0})),z=$(O=v(M,"A",{href:!0,class:!0}));N=b(z,"Resume"),z.forEach(u),M.forEach(u),q=y(l);var F=$(U=v(l,"LI",{class:!0})),G=$(I=v(F,"A",{href:!0,class:!0}));H=b(G,"Contact"),G.forEach(u),F.forEach(u),D=y(l);var W=$(B=v(l,"LI",{class:!0})),X=$(T=v(W,"A",{rel:!0,href:!0,class:!0}));J=b(X,"Blog"),X.forEach(u),W.forEach(u),l.forEach(u),e.forEach(u),this.h()},h(){g(o,"href","."),g(o,"class","svelte-xn0nap"),E(o,"selected",void 0===e[0]),g(s,"class","svelte-xn0nap"),g(m,"href","about"),g(m,"class","svelte-xn0nap"),E(m,"selected","about"===e[0]),g(f,"class","svelte-xn0nap"),g(w,"href","awards"),g(w,"class","svelte-xn0nap"),E(w,"selected","awards"===e[0]),g(x,"class","svelte-xn0nap"),g(R,"href","skills"),g(R,"class","svelte-xn0nap"),E(R,"selected","skills"===e[0]),g(L,"class","svelte-xn0nap"),g(O,"href","resume"),g(O,"class","svelte-xn0nap"),E(O,"selected","resume"===e[0]),g(k,"class","svelte-xn0nap"),g(I,"href","contact"),g(I,"class","svelte-xn0nap"),E(I,"selected","contact"===e[0]),g(U,"class","svelte-xn0nap"),g(T,"rel","prefetch"),g(T,"href","blog"),g(T,"class","svelte-xn0nap"),E(T,"selected","blog"===e[0]),g(B,"class","svelte-xn0nap"),g(r,"class","svelte-xn0nap"),g(n,"class","svelte-xn0nap")},m(t,e){i(t,n,e),l(n,r),l(r,s),l(s,o),l(o,a),l(r,c),l(r,f),l(f,m),l(m,_),l(r,S),l(r,x),l(x,w),l(w,A),l(r,P),l(r,L),l(L,R),l(R,C),l(r,j),l(r,k),l(k,O),l(O,N),l(r,q),l(r,U),l(U,I),l(I,H),l(r,D),l(r,B),l(B,T),l(T,J)},p(t,[e]){1&e&&E(o,"selected",void 0===t[0]),1&e&&E(m,"selected","about"===t[0]),1&e&&E(w,"selected","awards"===t[0]),1&e&&E(R,"selected","skills"===t[0]),1&e&&E(O,"selected","resume"===t[0]),1&e&&E(I,"selected","contact"===t[0]),1&e&&E(T,"selected","blog"===t[0])},i:t,o:t,d(t){t&&u(n)}}}function ot(t,e,n){let{segment:r}=e;return t.$set=(t=>{"segment"in t&&n(0,r=t.segment)}),[r]}class at extends Z{constructor(t){super(),Q(this,t,ot,st,a,{segment:0})}}function ct(t){let e,n,r;const s=new at({props:{segment:t[0]}}),o=t[2].default,a=function(t,e,n,r){if(t){const s=c(t,e,n,r);return t[0](s)}}(o,t,t[1],null);return{c(){F(s.$$.fragment),e=d(),n=p("main"),a&&a.c(),this.h()},l(t){G(s.$$.fragment,t),e=y(t);var r=$(n=v(t,"MAIN",{class:!0}));a&&a.l(r),r.forEach(u),this.h()},h(){g(n,"class","svelte-ivvc7y")},m(t,o){W(s,t,o),i(t,e,o),i(t,n,o),a&&a.m(n,null),r=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),s.$set(n),a&&a.p&&2&e&&a.p(c(o,t,t[1],null),function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if("object"==typeof e.dirty){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(o,t[1],e,null))},i(t){r||(V(s.$$.fragment,t),V(a,t),r=!0)},o(t){K(s.$$.fragment,t),K(a,t),r=!1},d(t){X(s,t),t&&u(e),t&&u(n),a&&a.d(t)}}}function lt(t,e,n){let{segment:r}=e,{$$slots:s={},$$scope:o}=e;return t.$set=(t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,o=t.$$scope)}),[r,o,s]}class it extends Z{constructor(t){super(),Q(this,t,lt,ct,a,{segment:0})}}function ut(t){let e,n,r=t[1].stack+"";return{c(){e=p("pre"),n=h(r)},l(t){var s=$(e=v(t,"PRE",{}));n=b(s,r),s.forEach(u)},m(t,r){i(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&_(n,r)},d(t){t&&u(e)}}}function ft(e){let n,r,s,o,a,c,f,E,x,w=e[1].message+"";document.title=n=e[0];let A=e[2]&&e[1].stack&&ut(e);return{c(){r=d(),s=p("h1"),o=h(e[0]),a=d(),c=p("p"),f=h(w),E=d(),A&&A.c(),x=m(),this.h()},l(t){S('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(u),r=y(t);var n=$(s=v(t,"H1",{class:!0}));o=b(n,e[0]),n.forEach(u),a=y(t);var l=$(c=v(t,"P",{class:!0}));f=b(l,w),l.forEach(u),E=y(t),A&&A.l(t),x=m(),this.h()},h(){g(s,"class","svelte-8od9u6"),g(c,"class","svelte-8od9u6")},m(t,e){i(t,r,e),i(t,s,e),l(s,o),i(t,a,e),i(t,c,e),l(c,f),i(t,E,e),A&&A.m(t,e),i(t,x,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&_(o,t[0]),2&e&&w!==(w=t[1].message+"")&&_(f,w),t[2]&&t[1].stack?A?A.p(t,e):((A=ut(t)).c(),A.m(x.parentNode,x)):A&&(A.d(1),A=null)},i:t,o:t,d(t){t&&u(r),t&&u(s),t&&u(a),t&&u(c),t&&u(E),A&&A.d(t),t&&u(x)}}}function pt(t,e,n){let{status:r}=e,{error:s}=e;return t.$set=(t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)}),[r,s,!1]}class ht extends Z{constructor(t){super(),Q(this,t,pt,ft,a,{status:0,error:1})}}function dt(t){let n,r;const s=[t[4].props];var o=t[4].component;function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}if(o)var c=new o(a());return{c(){c&&F(c.$$.fragment),n=m()},l(t){c&&G(c.$$.fragment,t),n=m()},m(t,e){c&&W(c,t,e),i(t,n,e),r=!0},p(t,e){const r=16&e?M(s,[z(t[4].props)]):{};if(o!==(o=t[4].component)){if(c){T();const t=c;K(t.$$.fragment,1,0,()=>{X(t,1)}),J()}o?(F((c=new o(a())).$$.fragment),V(c.$$.fragment,1),W(c,n.parentNode,n)):c=null}else o&&c.$set(r)},i(t){r||(c&&V(c.$$.fragment,t),r=!0)},o(t){c&&K(c.$$.fragment,t),r=!1},d(t){t&&u(n),c&&X(c,t)}}}function mt(t){let e;const n=new ht({props:{error:t[0],status:t[1]}});return{c(){F(n.$$.fragment)},l(t){G(n.$$.fragment,t)},m(t,r){W(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(V(n.$$.fragment,t),e=!0)},o(t){K(n.$$.fragment,t),e=!1},d(t){X(n,t)}}}function gt(t){let e,n,r,s;const o=[mt,dt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=o[e](t),{c(){n.c(),r=m()},l(t){n.l(t),r=m()},m(t,n){a[e].m(t,n),i(t,r,n),s=!0},p(t,s){let l=e;(e=c(t))===l?a[e].p(t,s):(T(),K(a[l],1,1,()=>{a[l]=null}),J(),(n=a[e])||(n=a[e]=o[e](t)).c(),V(n,1),n.m(r.parentNode,r))},i(t){s||(V(n),s=!0)},o(t){K(n),s=!1},d(t){a[e].d(t),t&&u(r)}}}function $t(t){let n;const r=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[gt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);const o=new it({props:s});return{c(){F(o.$$.fragment)},l(t){G(o.$$.fragment,t)},m(t,e){W(o,t,e),n=!0},p(t,[e]){const n=12&e?M(r,[4&e&&{segment:t[2][0]},8&e&&z(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n)},i(t){n||(V(o.$$.fragment,t),n=!0)},o(t){K(o.$$.fragment,t),n=!1},d(t){X(o,t)}}}function vt(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:c}=e,{level1:l=null}=e;var i,u;return i=nt,u=r,A().$$.context.set(i,u),t.$set=(t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,l=t.level1)}),[s,o,a,c,l,r]}class bt extends Z{constructor(t){super(),Q(this,t,vt,$t,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const yt=[/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],_t=[{js:()=>import("./index.596d2a07.js"),css:["index.596d2a07.css","client.31a82cdf.css"]},{js:()=>import("./contact.6168447b.js"),css:["client.31a82cdf.css"]},{js:()=>import("./awards.3d559d0c.js"),css:["awards.3d559d0c.css","client.31a82cdf.css"]},{js:()=>import("./resume.634b7ba0.js"),css:["client.31a82cdf.css"]},{js:()=>import("./skills.84daff2a.js"),css:["client.31a82cdf.css"]},{js:()=>import("./about.89aaceef.js"),css:["about.89aaceef.css","client.31a82cdf.css"]},{js:()=>import("./index.38af593d.js"),css:["index.38af593d.css","client.31a82cdf.css"]},{js:()=>import("./[slug].c2847f59.js"),css:["[slug].c2847f59.css","client.31a82cdf.css"]}],Et=(t=>[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/contact\/?$/,parts:[{i:1}]},{pattern:/^\/awards\/?$/,parts:[{i:2}]},{pattern:/^\/resume\/?$/,parts:[{i:3}]},{pattern:/^\/skills\/?$/,parts:[{i:4}]},{pattern:/^\/about\/?$/,parts:[{i:5}]},{pattern:/^\/blog\/?$/,parts:[{i:6}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:7,params:e=>({slug:t(e[1])})}]}])(decodeURIComponent);const St="undefined"!=typeof __SAPPER__&&__SAPPER__;let xt,wt,At,Pt=!1,Lt=[],Rt="{}";const Ct={page:et({}),preloading:et(null),session:et(St&&St.session)};let jt,kt;Ct.session.subscribe(async t=>{if(jt=t,!Pt)return;kt=!0;const e=Bt(new URL(location.href)),n=wt={},{redirect:r,props:s,branch:o}=await Kt(e);n===wt&&await Vt(r,o,s,e.page)});let Ot,Nt=null;let qt,Ut=1;const It="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Ht={};function Dt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Bt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(St.baseUrl))return null;let e=t.pathname.slice(St.baseUrl.length);if(""===e&&(e="/"),!yt.some(t=>t.test(e)))for(let n=0;n<Et.length;n+=1){const r=Et[n],s=r.pattern.exec(e);if(s){const n=Dt(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:c}}}}function Tt(){return{x:pageXOffset,y:pageYOffset}}async function Jt(t,e,n,r){if(e)qt=e;else{const t=Tt();Ht[qt]=t,e=qt=++Ut,Ht[qt]=n?t:{x:0,y:0}}qt=e,xt&&Ct.preloading.set(!0);const s=Nt&&Nt.href===t.href?Nt.promise:Kt(t);Nt=null;const o=wt={},{redirect:a,props:c,branch:l}=await s;if(o===wt&&(await Vt(a,l,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Ht[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}Ht[qt]=t,t&&scrollTo(t.x,t.y)}}async function Vt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Bt(new URL(t,document.baseURI));return n?(It[e.replaceState?"replaceState":"pushState"]({id:qt},"",t),Jt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Ct.page.set(r),Ct.preloading.set(!1),xt)xt.$set(n);else{n.stores={page:{subscribe:Ct.page.subscribe},preloading:{subscribe:Ct.preloading.subscribe},session:Ct.session},n.level0={props:await At};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)zt(t.nextSibling);zt(t),zt(e)}xt=new bt({target:Ot,props:n,hydrate:!0})}Lt=e,Rt=JSON.stringify(r.query),Pt=!0,kt=!1}async function Kt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};let c;At||(At=St.preloaded[0]||rt.call(a,{host:n.host,path:n.path,query:n.query,params:{}},jt));let l=1;try{const s=JSON.stringify(n.query),i=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Rt)return!0;const s=Lt[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,i,s)&&(u=!0),o.segments[l]=r[c+1],!e)return{segment:f};const p=l++;if(!kt&&!u&&Lt[c]&&Lt[c].part===e.i)return Lt[c];u=!1;const{default:h,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Mt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(_t[e.i]);let m;return m=Pt||!St.preloaded[c+1]?d?await d.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},jt):{}:St.preloaded[c+1],o[`level${p}`]={component:h,props:m,segment:f,match:i,part:e.i}}))}catch(t){o.error=t,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}function Mt(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=(()=>t()),r.onerror=n,document.head.appendChild(r)})}function zt(t){t.parentNode.removeChild(t)}function Ft(t){const e=Bt(new URL(t,document.baseURI));if(e)return Nt&&t===Nt.href||function(t,e){Nt={href:t,promise:e}}(t,Kt(e)),Nt.promise}let Gt;function Wt(t){clearTimeout(Gt),Gt=setTimeout(()=>{Xt(t)},20)}function Xt(t){const e=Qt(t.target);e&&"prefetch"===e.rel&&Ft(e.href)}function Yt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=Qt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Bt(s);if(o){Jt(o,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),It.pushState({id:qt},"",s.href)}}function Qt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Zt(t){if(Ht[qt]=Tt(),t.state){const e=Bt(new URL(location.href));e?Jt(e,t.state.id):location.href=location.href}else(function(t){qt=t})(Ut=Ut+1),It.replaceState({id:qt},"",location.href)}!function(t){var e;"scrollRestoration"in It&&(It.scrollRestoration="manual"),e=t.target,Ot=e,addEventListener("click",Yt),addEventListener("popstate",Zt),addEventListener("touchstart",Xt),addEventListener("mousemove",Wt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;It.replaceState({id:Ut},"",e);const n=new URL(location.href);if(St.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:c}=St;At||(At=o&&o[0]),Vt(null,[],{error:c,status:a,session:s,level0:{props:At},level1:{props:{status:a,error:c},component:ht},segments:o},{host:e,path:n,query:Dt(r),params:{}})}();const r=Bt(n);return r?Jt(r,Ut,!0,t):void 0})}({target:document.querySelector("#sapper")});export{Z as S,d as a,v as b,y as c,u as d,p as e,$ as f,b as g,g as h,Q as i,i as j,l as k,f as l,_ as m,t as n,P as o,S as q,a as s,h as t};