import{S as e,i as t,s as l,e as s,a,t as c,b as r,f as o,d as n,c as i,g as h,h as u,j as f,k as w,n as d,o as m,q as p,p as v,m as g,r as b,w as y,u as E,x as I,C}from"./client.046aa174.js";import{S}from"./SectionHeader.e0c5b4d4.js";function k(e,t,l){const s=e.slice();return s[1]=t[l],s}function $(e,t,l){const s=e.slice();return s[1]=t[l],s}function A(e){let t,l,m,p,v,g,b,y,E=e[1].title+"";return{c(){t=s("div"),l=s("iframe"),v=a(),g=s("h3"),b=c(E),y=a(),this.h()},l(e){t=r(e,"DIV",{class:!0});var s=o(t);l=r(s,"IFRAME",{title:!0,width:!0,height:!0,src:!0,frameborder:!0,allow:!0,allowfullscreen:!0,class:!0}),o(l).forEach(n),v=i(s),g=r(s,"H3",{class:!0});var a=o(g);b=h(a,E),a.forEach(n),y=i(s),s.forEach(n),this.h()},h(){u(l,"title",m=e[1].title),u(l,"width","450"),u(l,"height","250"),l.src!==(p=e[1].url)&&u(l,"src",p),u(l,"frameborder","0"),u(l,"allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),l.allowFullscreen=!0,u(l,"class","svelte-w39cr4"),u(g,"class","svelte-w39cr4"),u(t,"class","video-container svelte-w39cr4")},m(e,s){f(e,t,s),w(t,l),w(t,v),w(t,g),w(g,b),w(t,y)},p:d,d(e){e&&n(t)}}}function D(e){let t,l,m,p,v,g,b,y,E=e[1].title+"";return{c(){t=s("div"),l=s("iframe"),v=a(),g=s("h3"),b=c(E),y=a(),this.h()},l(e){t=r(e,"DIV",{class:!0});var s=o(t);l=r(s,"IFRAME",{title:!0,width:!0,height:!0,src:!0,frameborder:!0,allow:!0,allowfullscreen:!0,class:!0}),o(l).forEach(n),v=i(s),g=r(s,"H3",{class:!0});var a=o(g);b=h(a,E),a.forEach(n),y=i(s),s.forEach(n),this.h()},h(){u(l,"title",m=e[1].title),u(l,"width","450"),u(l,"height","250"),l.src!==(p=e[1].url)&&u(l,"src",p),u(l,"frameborder","0"),u(l,"allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),l.allowFullscreen=!0,u(l,"class","svelte-w39cr4"),u(g,"class","svelte-w39cr4"),u(t,"class","video-container svelte-w39cr4")},m(e,s){f(e,t,s),w(t,l),w(t,v),w(t,g),w(g,b),w(t,y)},p:d,d(e){e&&n(t)}}}function T(e){let t,l,d,T,V,j,x,F,H,X,G,M,O,R,Y,_,z,B,L,N,P;document.title=t=U;const q=new S({props:{title:U}});let Q=e[0].technical,W=[];for(let t=0;t<Q.length;t+=1)W[t]=A($(e,Q,t));let J=e[0].nontechnical,K=[];for(let t=0;t<J.length;t+=1)K[t]=D(k(e,J,t));return{c(){l=a(),m(q.$$.fragment),d=a(),T=s("section"),V=s("h2"),j=c("Some technical talks"),x=a(),F=s("div");for(let e=0;e<W.length;e+=1)W[e].c();H=a(),X=s("h2"),G=c("And some not so technical ones..."),M=a(),O=s("div");for(let e=0;e<K.length;e+=1)K[e].c();R=a(),Y=s("div"),_=s("a"),z=s("i"),B=a(),L=s("span"),N=c("Checkout my YouTube channel"),this.h()},l(e){p('[data-svelte="svelte-1az6e94"]',document.head).forEach(n),l=i(e),v(q.$$.fragment,e),d=i(e),T=r(e,"SECTION",{class:!0});var t=o(T);V=r(t,"H2",{class:!0});var s=o(V);j=h(s,"Some technical talks"),s.forEach(n),x=i(t),F=r(t,"DIV",{class:!0});var a=o(F);for(let e=0;e<W.length;e+=1)W[e].l(a);a.forEach(n),H=i(t),X=r(t,"H2",{class:!0});var c=o(X);G=h(c,"And some not so technical ones..."),c.forEach(n),M=i(t),O=r(t,"DIV",{class:!0});var u=o(O);for(let e=0;e<K.length;e+=1)K[e].l(u);u.forEach(n),R=i(t),Y=r(t,"DIV",{class:!0});var f=o(Y);_=r(f,"A",{target:!0,href:!0,class:!0});var w=o(_);z=r(w,"I",{class:!0,style:!0}),o(z).forEach(n),B=i(w),L=r(w,"SPAN",{class:!0});var m=o(L);N=h(m,"Checkout my YouTube channel"),m.forEach(n),w.forEach(n),f.forEach(n),t.forEach(n),this.h()},h(){u(V,"class","svelte-w39cr4"),u(F,"class","video-wrapper svelte-w39cr4"),u(X,"class","svelte-w39cr4"),u(O,"class","video-wrapper svelte-w39cr4"),u(z,"class","fa fa-youtube"),g(z,"color","#c4302b"),g(z,"font-size","36px"),u(L,"class","svelte-w39cr4"),u(_,"target","_blank"),u(_,"href","https://www.youtube.com/channel/UCDv2X3kXDJ05qCg9EaKCpQw"),u(_,"class","mediaWrapper"),u(Y,"class","youtube-channel svelte-w39cr4"),u(T,"class","svelte-w39cr4")},m(e,t){f(e,l,t),b(q,e,t),f(e,d,t),f(e,T,t),w(T,V),w(V,j),w(T,x),w(T,F);for(let e=0;e<W.length;e+=1)W[e].m(F,null);w(T,H),w(T,X),w(X,G),w(T,M),w(T,O);for(let e=0;e<K.length;e+=1)K[e].m(O,null);w(T,R),w(T,Y),w(Y,_),w(_,z),w(_,B),w(_,L),w(L,N),P=!0},p(e,[l]){if((!P||0&l)&&t!==(t=U)&&(document.title=t),1&l){let t;for(Q=e[0].technical,t=0;t<Q.length;t+=1){const s=$(e,Q,t);W[t]?W[t].p(s,l):(W[t]=A(s),W[t].c(),W[t].m(F,null))}for(;t<W.length;t+=1)W[t].d(1);W.length=Q.length}if(1&l){let t;for(J=e[0].nontechnical,t=0;t<J.length;t+=1){const s=k(e,J,t);K[t]?K[t].p(s,l):(K[t]=D(s),K[t].c(),K[t].m(O,null))}for(;t<K.length;t+=1)K[t].d(1);K.length=J.length}},i(e){P||(y(q.$$.fragment,e),P=!0)},o(e){E(q.$$.fragment,e),P=!1},d(e){e&&n(l),I(q,e),e&&n(d),e&&n(T),C(W,e),C(K,e)}}}const U="Videos";function V(e){return[{technical:[{title:"Microfrontends and Web Components",url:"https://www.youtube.com/embed/Md9eu-9_Ric"},{title:"Predicting the winner in a game of PUBG",url:"https://www.youtube.com/embed/pGj1xsTU0Ow"},{title:"Globalisation Of OLX Code Base",url:"https://www.youtube.com/embed/Xu8Cj78I4FY"}],nontechnical:[{title:"Identifying Your Leadership Style",url:"https://www.youtube.com/embed/_w3GaXCh7Zw"},{title:"Ice Breaker Speech",url:"https://www.youtube.com/embed/8Rv1elN_vuA"},{title:"Let's Team Up",url:"https://www.youtube.com/embed/wwQSU3TztiU"}]}]}export default class extends e{constructor(e){super(),t(this,e,V,T,l,{})}}