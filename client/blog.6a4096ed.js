import{S as e,i as t,s,e as a,a as r,t as l,b as o,f as i,c,g as n,d as h,h as p,j as u,k as m,B as g,n as d,o as f,q as v,p as y,r as b,w,u as x,x as S,C as E,E as k}from"./client.f3f9dc1d.js";import{S as q}from"./SectionHeader.a95cac9e.js";function P(e,t,s){const a=e.slice();return a[1]=t[s],a}function M(e){let t,s,f,v,y,b,w,x,S,E,k,q,P,M,$,j,T,A=e[1].title+"",G=e[1].subtitle+"";return{c(){t=a("a"),s=a("li"),f=a("img"),y=r(),b=a("div"),w=a("h2"),x=l(A),S=r(),E=a("p"),k=l(G),q=r(),P=a("div"),M=l("Read More..."),$=r(),this.h()},l(e){t=o(e,"A",{href:!0,target:!0,class:!0});var a=i(t);s=o(a,"LI",{class:!0});var r=i(s);f=o(r,"IMG",{src:!0,alt:!0,class:!0}),y=c(r),b=o(r,"DIV",{class:!0});var l=i(b);w=o(l,"H2",{});var p=i(w);x=n(p,A),p.forEach(h),S=c(l),E=o(l,"P",{class:!0});var u=i(E);k=n(u,G),u.forEach(h),q=c(l),P=o(l,"DIV",{class:!0});var m=i(P);M=n(m,"Read More..."),m.forEach(h),l.forEach(h),r.forEach(h),$=c(a),a.forEach(h),this.h()},h(){f.src!==(v=e[1].cover)&&p(f,"src",v),p(f,"alt","blog-image"),p(f,"class","svelte-fq1scx"),p(E,"class","svelte-fq1scx"),p(P,"class","read-more svelte-fq1scx"),p(b,"class","details svelte-fq1scx"),p(s,"class","post svelte-fq1scx"),p(t,"href",j=e[1].url),p(t,"target","_blank"),p(t,"class","svelte-fq1scx")},m(e,a){u(e,t,a),m(t,s),m(s,f),m(s,y),m(s,b),m(b,w),m(w,x),m(b,S),m(b,E),m(E,k),m(b,q),m(b,P),m(P,M),m(t,$),T=g(t,"click",I)},p:d,d(e){e&&h(t),T()}}}function $(e){let t,s,l,n,g,d,k,$,I;document.title=t=j;const T=new q({props:{title:j}});let A=e[0],G=[];for(let t=0;t<A.length;t+=1)G[t]=M(P(e,A,t));return{c(){s=r(),f(T.$$.fragment),l=r(),n=a("section"),g=a("img"),k=r(),$=a("ul");for(let e=0;e<G.length;e+=1)G[e].c();this.h()},l(e){v('[data-svelte="svelte-1az6e94"]',document.head).forEach(h),s=c(e),y(T.$$.fragment,e),l=c(e),n=o(e,"SECTION",{class:!0});var t=i(n);g=o(t,"IMG",{class:!0,src:!0,alt:!0}),k=c(t),$=o(t,"UL",{class:!0});var a=i($);for(let e=0;e<G.length;e+=1)G[e].l(a);a.forEach(h),t.forEach(h),this.h()},h(){p(g,"class","logo svelte-fq1scx"),g.src!==(d="medium_logo.png")&&p(g,"src","medium_logo.png"),p(g,"alt","Medium"),p($,"class","svelte-fq1scx"),p(n,"class","svelte-fq1scx")},m(e,t){u(e,s,t),b(T,e,t),u(e,l,t),u(e,n,t),m(n,g),m(n,k),m(n,$);for(let e=0;e<G.length;e+=1)G[e].m($,null);I=!0},p(e,[s]){if((!I||0&s)&&t!==(t=j)&&(document.title=t),1&s){let t;for(A=e[0],t=0;t<A.length;t+=1){const a=P(e,A,t);G[t]?G[t].p(a,s):(G[t]=M(a),G[t].c(),G[t].m($,null))}for(;t<G.length;t+=1)G[t].d(1);G.length=A.length}},i(e){I||(w(T.$$.fragment,e),I=!0)},o(e){x(T.$$.fragment,e),I=!1},d(e){e&&h(s),S(T,e),e&&h(l),e&&h(n),E(G,e)}}}const j="Blog Posts";function I(e){e.currentTarget.href&&k("click","blog_links",e.currentTarget.href)}function T(e){return[[{title:"Human Activity Tracker System",subtitle:"Have you ever wondered how the smartphones and fitness watches know when you are running, walking, cycling or just have been lethargic for a while . This post is aimed at demystify this and a walkthrough to build a system which can accurately detect the activity using some of the sensor data from the accelerometer and gyro meter in particular.",url:"https://medium.com/analytics-vidhya/human-activity-tracker-system-2435b532b05e",cover:"activity.jpg"},{title:"Deploying Sapper PWA using Github Pages: Step by Step Tutorial ( Part 1)",subtitle:"Let's say you are done with the development of your application made using Svelte and Sapper and want to host it somewhere free of cost. Here is how to deploy your static Sapper PWA application using Github Pages.",url:"https://medium.com/@hiiamanshul/deploying-sapper-pwa-using-github-pages-step-by-step-tutorial-part-1-1e9828dfe4de",cover:"sveltesapper.jpeg"},{title:"Deploying Sapper PWA using Github Pages: Step by Step Tutorial ( Part 2)",subtitle:"Add custom domain to the website",url:"https://medium.com/@hiiamanshul/deploying-sapper-pwa-using-github-pages-step-by-step-tutorial-part-2-d2efd92b2244",cover:"sveltesapper.jpeg"},{title:"Implementing the Micro-frontend using Web Components at OLX",subtitle:"From Monolith to Microapps",url:"https://medium.com/@hiiamanshul/implementing-the-micro-frontend-using-web-components-at-olx-14b16127b14d",cover:"olxapp.png"}]]}export default class extends e{constructor(e){super(),t(this,e,T,$,s,{})}}
