import{S as e,i as t,s as l,e as s,a,t as r,b as c,f as o,d as n,c as i,g as h,h as u,j as f,k as d,n as m,o as v,q as g,p as w,m as p,r as b,w as k,u as y,x as E,C as I}from"./client.cef2e976.js";import{S as C}from"./SectionHeader.8cb80284.js";function S(e,t,l){const s=e.slice();return s[1]=t[l],s}function $(e,t,l){const s=e.slice();return s[1]=t[l],s}function A(e){let t,l,v,g,w,p,b,k,y=e[1].title+"";return{c(){t=s("div"),l=s("iframe"),w=a(),p=s("h3"),b=r(y),k=a(),this.h()},l(e){t=c(e,"DIV",{class:!0});var s=o(t);l=c(s,"IFRAME",{title:!0,width:!0,height:!0,src:!0,frameborder:!0,allow:!0,allowfullscreen:!0,class:!0}),o(l).forEach(n),w=i(s),p=c(s,"H3",{class:!0});var a=o(p);b=h(a,y),a.forEach(n),k=i(s),s.forEach(n),this.h()},h(){u(l,"title",v=e[1].title),u(l,"width","450"),u(l,"height","250"),l.src!==(g=e[1].url)&&u(l,"src",g),u(l,"frameborder","0"),u(l,"allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),l.allowFullscreen=!0,u(l,"class","svelte-10g2vrk"),u(p,"class","svelte-10g2vrk"),u(t,"class","video-container svelte-10g2vrk")},m(e,s){f(e,t,s),d(t,l),d(t,w),d(t,p),d(p,b),d(t,k)},p:m,d(e){e&&n(t)}}}function D(e){let t,l,v,g,w,p,b,k,y=e[1].title+"";return{c(){t=s("div"),l=s("iframe"),w=a(),p=s("h3"),b=r(y),k=a(),this.h()},l(e){t=c(e,"DIV",{class:!0});var s=o(t);l=c(s,"IFRAME",{title:!0,width:!0,height:!0,src:!0,frameborder:!0,allow:!0,allowfullscreen:!0,class:!0}),o(l).forEach(n),w=i(s),p=c(s,"H3",{class:!0});var a=o(p);b=h(a,y),a.forEach(n),k=i(s),s.forEach(n),this.h()},h(){u(l,"title",v=e[1].title),u(l,"width","450"),u(l,"height","250"),l.src!==(g=e[1].url)&&u(l,"src",g),u(l,"frameborder","0"),u(l,"allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),l.allowFullscreen=!0,u(l,"class","svelte-10g2vrk"),u(p,"class","svelte-10g2vrk"),u(t,"class","video-container svelte-10g2vrk")},m(e,s){f(e,t,s),d(t,l),d(t,w),d(t,p),d(p,b),d(t,k)},p:m,d(e){e&&n(t)}}}function T(e){let t,l,m,T,V,j,x,F,H,X,G,M,O,R,Y,_,z,B,L,N,P;document.title=t=U;const q=new C({props:{title:U}});let Q=e[0].technical,W=[];for(let t=0;t<Q.length;t+=1)W[t]=A($(e,Q,t));let J=e[0].nontechnical,K=[];for(let t=0;t<J.length;t+=1)K[t]=D(S(e,J,t));return{c(){l=a(),v(q.$$.fragment),m=a(),T=s("section"),V=s("h2"),j=r("Some technical talks"),x=a(),F=s("div");for(let e=0;e<W.length;e+=1)W[e].c();H=a(),X=s("h2"),G=r("And some not so technical ones..."),M=a(),O=s("div");for(let e=0;e<K.length;e+=1)K[e].c();R=a(),Y=s("div"),_=s("a"),z=s("i"),B=a(),L=s("span"),N=r("Checkout my YouTube channel"),this.h()},l(e){g('[data-svelte="svelte-1az6e94"]',document.head).forEach(n),l=i(e),w(q.$$.fragment,e),m=i(e),T=c(e,"SECTION",{class:!0});var t=o(T);V=c(t,"H2",{class:!0});var s=o(V);j=h(s,"Some technical talks"),s.forEach(n),x=i(t),F=c(t,"DIV",{class:!0});var a=o(F);for(let e=0;e<W.length;e+=1)W[e].l(a);a.forEach(n),H=i(t),X=c(t,"H2",{class:!0});var r=o(X);G=h(r,"And some not so technical ones..."),r.forEach(n),M=i(t),O=c(t,"DIV",{class:!0});var u=o(O);for(let e=0;e<K.length;e+=1)K[e].l(u);u.forEach(n),R=i(t),Y=c(t,"DIV",{class:!0});var f=o(Y);_=c(f,"A",{target:!0,href:!0,class:!0});var d=o(_);z=c(d,"I",{class:!0,style:!0}),o(z).forEach(n),B=i(d),L=c(d,"SPAN",{class:!0});var v=o(L);N=h(v,"Checkout my YouTube channel"),v.forEach(n),d.forEach(n),f.forEach(n),t.forEach(n),this.h()},h(){u(V,"class","svelte-10g2vrk"),u(F,"class","video-wrapper svelte-10g2vrk"),u(X,"class","svelte-10g2vrk"),u(O,"class","video-wrapper svelte-10g2vrk"),u(z,"class","fa fa-youtube"),p(z,"color","#c4302b"),p(z,"font-size","36px"),u(L,"class","svelte-10g2vrk"),u(_,"target","_blank"),u(_,"href","https://www.youtube.com/channel/UCDv2X3kXDJ05qCg9EaKCpQw"),u(_,"class","mediaWrapper"),u(Y,"class","youtube-channel svelte-10g2vrk"),u(T,"class","svelte-10g2vrk")},m(e,t){f(e,l,t),b(q,e,t),f(e,m,t),f(e,T,t),d(T,V),d(V,j),d(T,x),d(T,F);for(let e=0;e<W.length;e+=1)W[e].m(F,null);d(T,H),d(T,X),d(X,G),d(T,M),d(T,O);for(let e=0;e<K.length;e+=1)K[e].m(O,null);d(T,R),d(T,Y),d(Y,_),d(_,z),d(_,B),d(_,L),d(L,N),P=!0},p(e,[l]){if((!P||0&l)&&t!==(t=U)&&(document.title=t),1&l){let t;for(Q=e[0].technical,t=0;t<Q.length;t+=1){const s=$(e,Q,t);W[t]?W[t].p(s,l):(W[t]=A(s),W[t].c(),W[t].m(F,null))}for(;t<W.length;t+=1)W[t].d(1);W.length=Q.length}if(1&l){let t;for(J=e[0].nontechnical,t=0;t<J.length;t+=1){const s=S(e,J,t);K[t]?K[t].p(s,l):(K[t]=D(s),K[t].c(),K[t].m(O,null))}for(;t<K.length;t+=1)K[t].d(1);K.length=J.length}},i(e){P||(k(q.$$.fragment,e),P=!0)},o(e){y(q.$$.fragment,e),P=!1},d(e){e&&n(l),E(q,e),e&&n(m),e&&n(T),I(W,e),I(K,e)}}}const U="Videos";function V(e){return[{technical:[{title:"Microfrontends and Web Components",url:"https://www.youtube.com/embed/Md9eu-9_Ric"},{title:"Predicting the winner in a game of PUBG",url:"https://www.youtube.com/embed/pGj1xsTU0Ow"},{title:"Globalisation Of OLX Code Base",url:"https://www.youtube.com/embed/Xu8Cj78I4FY"}],nontechnical:[{title:"Identifying Your Leadership Style",url:"https://www.youtube.com/embed/_w3GaXCh7Zw"},{title:"Ice Breaker Speech",url:"https://www.youtube.com/embed/8Rv1elN_vuA"},{title:"Let's Team Up",url:"https://www.youtube.com/embed/wwQSU3TztiU"}]}]}export default class extends e{constructor(e){super(),t(this,e,V,T,l,{})}}