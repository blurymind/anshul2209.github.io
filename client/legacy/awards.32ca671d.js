import{_ as a,a as n,b as t,c as e,i,s,d as r,S as c,f as o,e as l,t as f,j as h,k as u,h as d,l as g,g as m,m as p,n as v,o as b,p as $,x as j,q as y,y as I,z as k,r as w,C as E,A as _,D as A,I as D}from"./client.b265ace2.js";import{S}from"./SectionHeader.71760b57.js";function G(a,n,t){var e=a.slice();return e[1]=n[t],e}function C(a){var n,t,e,i,s,r,c,j=a[1].caption+"";return{c:function(){n=o("div"),t=o("img"),i=l(),s=o("div"),r=f(j),c=l(),this.h()},l:function(a){n=h(a,"DIV",{class:!0});var e=u(n);t=h(e,"IMG",{src:!0,alt:!0,class:!0}),i=d(e),s=h(e,"DIV",{class:!0});var o=u(s);r=g(o,j),o.forEach(m),c=d(e),e.forEach(m),this.h()},h:function(){t.src!==(e=a[1].link)&&p(t,"src",e),p(t,"alt",a[1].alt),p(t,"class","svelte-be5t6h"),p(s,"class","caption svelte-be5t6h"),p(n,"class","card svelte-be5t6h")},m:function(a,e){v(a,n,e),b(n,t),b(n,i),b(n,s),b(s,r),b(n,c)},p:$,d:function(a){a&&m(n)}}}function R(a){var n,t,e,i,s,r;document.title=n=V;for(var c=new S({props:{title:V}}),f=a[0],g=[],$=0;$<f.length;$+=1)g[$]=C(G(a,f,$));return{c:function(){t=l(),j(c.$$.fragment),e=l(),i=o("section"),s=o("div");for(var a=0;a<g.length;a+=1)g[a].c();this.h()},l:function(a){y('[data-svelte="svelte-1az6e94"]',document.head).forEach(m),t=d(a),I(c.$$.fragment,a),e=d(a),i=h(a,"SECTION",{});var n=u(i);s=h(n,"DIV",{class:!0});for(var r=u(s),o=0;o<g.length;o+=1)g[o].l(r);r.forEach(m),n.forEach(m),this.h()},h:function(){p(s,"class","card-wrapper svelte-be5t6h")},m:function(a,n){v(a,t,n),k(c,a,n),v(a,e,n),v(a,i,n),b(i,s);for(var o=0;o<g.length;o+=1)g[o].m(s,null);r=!0},p:function(a,t){var e=w(t,1)[0];if((!r||0&e)&&n!==(n=V)&&(document.title=n),1&e){var i;for(f=a[0],i=0;i<f.length;i+=1){var c=G(a,f,i);g[i]?g[i].p(c,e):(g[i]=C(c),g[i].c(),g[i].m(s,null))}for(;i<g.length;i+=1)g[i].d(1);g.length=f.length}},i:function(a){r||(E(c.$$.fragment,a),r=!0)},o:function(a){_(c.$$.fragment,a),r=!1},d:function(a){a&&m(t),A(c,a),a&&m(e),a&&m(i),D(g,a)}}}var V="Awards and Certifications";function x(a){return[[{link:"ai_for_everyone.png",alt:"AI for everyone",caption:"Gained insights in the basics of artificial intelligence and machine learning"},{link:"data_science_R.jpeg",alt:"Data Science in R",caption:"A deep dive into the data engineering aspect of machine learning using R"},{link:"udacity_ml.png",alt:"Udacity ML Project",caption:"Graduation certificate for the 3 months nanodegree program with udacity"},{link:"homelane.jpg",alt:"Homelane Young Gun",caption:"Awarded for being the top performer amongst the new joinees in the company"}]]}export default(function(o){function l(a){var c;return n(this,l),c=t(this,e(l).call(this)),i(r(c),a,x,R,s,{}),c}return a(l,c),l}());
