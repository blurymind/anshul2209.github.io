import{_ as t,a,b as e,c as s,i as r,s as n,d as i,S as o,f as l,e as c,t as u,j as h,k as f,h as v,l as g,g as m,m as p,n as d,o as y,p as b,x as w,q as z,y as S,z as E,r as $,C as k,A as I,D as P,I as j}from"./client.f7caecdb.js";import{S as A}from"./SectionHeader.ff951365.js";function H(t,a,e){var s=t.slice();return s[1]=a[e],s}function M(t){var a,e,s,r,n,i,o,w,z,S,E,$,k,I,P,j=t[1].title+"",A=t[1].subtitle+"";return{c:function(){a=l("a"),e=l("li"),s=l("img"),n=c(),i=l("div"),o=l("h2"),w=u(j),z=c(),S=l("p"),E=u(A),$=c(),k=l("div"),I=u("Read More..."),P=c(),this.h()},l:function(t){a=h(t,"A",{href:!0,target:!0,class:!0});var r=f(a);e=h(r,"LI",{class:!0});var l=f(e);s=h(l,"IMG",{src:!0,alt:!0,class:!0}),n=v(l),i=h(l,"DIV",{class:!0});var c=f(i);o=h(c,"H2",{});var u=f(o);w=g(u,j),u.forEach(m),z=v(c),S=h(c,"P",{class:!0});var p=f(S);E=g(p,A),p.forEach(m),$=v(c),k=h(c,"DIV",{class:!0});var d=f(k);I=g(d,"Read More..."),d.forEach(m),c.forEach(m),l.forEach(m),P=v(r),r.forEach(m),this.h()},h:function(){s.src!==(r=t[1].cover)&&p(s,"src",r),p(s,"alt","blog-image"),p(s,"class","svelte-1g4rvzs"),p(S,"class","svelte-1g4rvzs"),p(k,"class","read-more svelte-1g4rvzs"),p(i,"class","details svelte-1g4rvzs"),p(e,"class","post svelte-1g4rvzs"),p(a,"href",t[1].url),p(a,"target","_blank"),p(a,"class","svelte-1g4rvzs")},m:function(t,r){d(t,a,r),y(a,e),y(e,s),y(e,n),y(e,i),y(i,o),y(o,w),y(i,z),y(i,S),y(S,E),y(i,$),y(i,k),y(k,I),y(a,P)},p:b,d:function(t){t&&m(a)}}}function D(t){var a,e,s,r,n,i,o,u;document.title=a=G;for(var g=new A({props:{title:G}}),b=t[0],D=[],T=0;T<b.length;T+=1)D[T]=M(H(t,b,T));return{c:function(){e=c(),w(g.$$.fragment),s=c(),r=l("section"),n=l("img"),i=c(),o=l("ul");for(var t=0;t<D.length;t+=1)D[t].c();this.h()},l:function(t){z('[data-svelte="svelte-1az6e94"]',document.head).forEach(m),e=v(t),S(g.$$.fragment,t),s=v(t),r=h(t,"SECTION",{class:!0});var a=f(r);n=h(a,"IMG",{class:!0,src:!0,alt:!0}),i=v(a),o=h(a,"UL",{class:!0});for(var l=f(o),c=0;c<D.length;c+=1)D[c].l(l);l.forEach(m),a.forEach(m),this.h()},h:function(){p(n,"class","logo svelte-1g4rvzs"),n.src!=="medium_logo.png"&&p(n,"src","medium_logo.png"),p(n,"alt","Medium"),p(o,"class","svelte-1g4rvzs"),p(r,"class","svelte-1g4rvzs")},m:function(t,a){d(t,e,a),E(g,t,a),d(t,s,a),d(t,r,a),y(r,n),y(r,i),y(r,o);for(var l=0;l<D.length;l+=1)D[l].m(o,null);u=!0},p:function(t,e){var s=$(e,1)[0];if((!u||0&s)&&a!==(a=G)&&(document.title=a),1&s){var r;for(b=t[0],r=0;r<b.length;r+=1){var n=H(t,b,r);D[r]?D[r].p(n,s):(D[r]=M(n),D[r].c(),D[r].m(o,null))}for(;r<D.length;r+=1)D[r].d(1);D.length=b.length}},i:function(t){u||(k(g.$$.fragment,t),u=!0)},o:function(t){I(g.$$.fragment,t),u=!1},d:function(t){t&&m(e),P(g,t),t&&m(s),t&&m(r),j(D,t)}}}var G="Blog Posts";function T(t){return[[{title:"Human Activity Tracker System",subtitle:"Have you ever wondered how the smartphones and fitness watches know when you are running, walking, cycling or just have been lethargic for a while . This post is aimed at demystify this and a walkthrough to build a system which can accurately detect the activity using some of the sensor data from the accelerometer and gyro meter in particular.",url:"https://medium.com/analytics-vidhya/human-activity-tracker-system-2435b532b05e",cover:"activity.jpg"},{title:"Deploying Sapper PWA using Github Pages: Step by Step Tutorial ( Part 1)",subtitle:"Let's say you are done with the development of your application made using Svelte and Sapper and want to host it somewhere free of cost. Here is how to deploy your static Sapper PWA application using Github Pages.",url:"https://medium.com/@hiiamanshul/deploying-sapper-pwa-using-github-pages-step-by-step-tutorial-part-1-1e9828dfe4de",cover:"sveltesapper.jpg"}]]}export default(function(l){function c(t){var o;return a(this,c),o=e(this,s(c).call(this)),r(i(o),t,T,D,n,{}),o}return t(c,o),c}());
