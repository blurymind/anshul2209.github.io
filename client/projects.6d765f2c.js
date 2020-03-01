import{S as e,i as t,s as r,e as n,a as o,t as s,b as a,f as i,d as c,c as u,g as f,h as l,m as h,j as d,k as p,l as m,n as v,o as g,q as x,p as y,r as E,u as w,v as b,w as S,x as j,y as A,z as C,A as R,B as N,C as T}from"./client.046aa174.js";import{S as k}from"./SectionHeader.e0c5b4d4.js";function D(e){let t,r,g,x,y,E=(e[0]||"Loading...")+"";return{c(){t=n("div"),r=n("i"),g=o(),x=n("div"),y=s(E),this.h()},l(e){t=a(e,"DIV",{class:!0});var n=i(t);r=a(n,"I",{class:!0,style:!0}),i(r).forEach(c),g=u(n),x=a(n,"DIV",{class:!0});var o=i(x);y=f(o,E),o.forEach(c),n.forEach(c),this.h()},h(){l(r,"class","fa fa-spinner fa-spin"),h(r,"font-size","108px"),l(x,"class","loading svelte-1wmlfcj"),l(t,"class","loader svelte-1wmlfcj")},m(e,n){d(e,t,n),p(t,r),p(t,g),p(t,x),p(x,y)},p(e,[t]){1&t&&E!==(E=(e[0]||"Loading...")+"")&&m(y,E)},i:v,o:v,d(e){e&&c(t)}}}function O(e,t,r){let{loaderText:n}=t;return e.$set=(e=>{"loaderText"in e&&r(0,n=e.loaderText)}),[n]}class B extends e{constructor(e){super(),t(this,e,O,D,r,{loaderText:0})}}var P=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}},I=Object.prototype.toString;function L(e){return"[object Array]"===I.call(e)}function U(e){return void 0===e}function q(e){return null!==e&&"object"==typeof e}function $(e){return"[object Function]"===I.call(e)}function z(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),L(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var V={isArray:L,isArrayBuffer:function(e){return"[object ArrayBuffer]"===I.call(e)},isBuffer:function(e){return null!==e&&!U(e)&&null!==e.constructor&&!U(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:q,isUndefined:U,isDate:function(e){return"[object Date]"===I.call(e)},isFile:function(e){return"[object File]"===I.call(e)},isBlob:function(e){return"[object Blob]"===I.call(e)},isFunction:$,isStream:function(e){return q(e)&&$(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:z,merge:function e(){var t={};function r(r,n){"object"==typeof t[n]&&"object"==typeof r?t[n]=e(t[n],r):t[n]=r}for(var n=0,o=arguments.length;n<o;n++)z(arguments[n],r);return t},deepMerge:function e(){var t={};function r(r,n){"object"==typeof t[n]&&"object"==typeof r?t[n]=e(t[n],r):t[n]="object"==typeof r?e({},r):r}for(var n=0,o=arguments.length;n<o;n++)z(arguments[n],r);return t},extend:function(e,t,r){return z(t,function(t,n){e[n]=r&&"function"==typeof t?P(t,r):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}};function F(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var H=function(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(V.isURLSearchParams(t))n=t.toString();else{var o=[];V.forEach(t,function(e,t){null!=e&&(V.isArray(e)?t+="[]":e=[e],V.forEach(e,function(e){V.isDate(e)?e=e.toISOString():V.isObject(e)&&(e=JSON.stringify(e)),o.push(F(t)+"="+F(e))}))}),n=o.join("&")}if(n){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e};function _(){this.handlers=[]}_.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},_.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},_.prototype.forEach=function(e){V.forEach(this.handlers,function(t){null!==t&&e(t)})};var M=_,G=function(e,t,r){return V.forEach(r,function(r){e=r(e,t)}),e},X=function(e){return!(!e||!e.__CANCEL__)},J=function(e,t){V.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})},K=function(e,t,r,n,o){return function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}(new Error(e),t,r,n,o)},W=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Q=V.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=V.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},Y=V.isStandardBrowserEnv()?{write:function(e,t,r,n,o,s){var a=[];a.push(e+"="+encodeURIComponent(t)),V.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),V.isString(n)&&a.push("path="+n),V.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},Z=function(e){return new Promise(function(t,r){var n=e.data,o=e.headers;V.isFormData(n)&&delete o["Content-Type"];var s=new XMLHttpRequest;if(e.auth){var a=e.auth.username||"",i=e.auth.password||"";o.Authorization="Basic "+btoa(a+":"+i)}var c,u,f=(c=e.baseURL,u=e.url,c&&!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(u)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(c,u):u);if(s.open(e.method.toUpperCase(),H(f,e.params,e.paramsSerializer),!0),s.timeout=e.timeout,s.onreadystatechange=function(){if(s&&4===s.readyState&&(0!==s.status||s.responseURL&&0===s.responseURL.indexOf("file:"))){var n,o,a,i,c,u="getAllResponseHeaders"in s?(n=s.getAllResponseHeaders(),c={},n?(V.forEach(n.split("\n"),function(e){if(i=e.indexOf(":"),o=V.trim(e.substr(0,i)).toLowerCase(),a=V.trim(e.substr(i+1)),o){if(c[o]&&W.indexOf(o)>=0)return;c[o]="set-cookie"===o?(c[o]?c[o]:[]).concat([a]):c[o]?c[o]+", "+a:a}}),c):c):null,f={data:e.responseType&&"text"!==e.responseType?s.response:s.responseText,status:s.status,statusText:s.statusText,headers:u,config:e,request:s};!function(e,t,r){var n=r.config.validateStatus;!n||n(r.status)?e(r):t(K("Request failed with status code "+r.status,r.config,null,r.request,r))}(t,r,f),s=null}},s.onabort=function(){s&&(r(K("Request aborted",e,"ECONNABORTED",s)),s=null)},s.onerror=function(){r(K("Network Error",e,null,s)),s=null},s.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(K(t,e,"ECONNABORTED",s)),s=null},V.isStandardBrowserEnv()){var l=Y,h=(e.withCredentials||Q(f))&&e.xsrfCookieName?l.read(e.xsrfCookieName):void 0;h&&(o[e.xsrfHeaderName]=h)}if("setRequestHeader"in s&&V.forEach(o,function(e,t){void 0===n&&"content-type"===t.toLowerCase()?delete o[t]:s.setRequestHeader(t,e)}),V.isUndefined(e.withCredentials)||(s.withCredentials=!!e.withCredentials),e.responseType)try{s.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&s.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&s.upload&&s.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){s&&(s.abort(),r(e),s=null)}),void 0===n&&(n=null),s.send(n)})},ee={"Content-Type":"application/x-www-form-urlencoded"};function te(e,t){!V.isUndefined(e)&&V.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var re,ne={adapter:("undefined"!=typeof XMLHttpRequest?re=Z:"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process)&&(re=Z),re),transformRequest:[function(e,t){return J(t,"Accept"),J(t,"Content-Type"),V.isFormData(e)||V.isArrayBuffer(e)||V.isBuffer(e)||V.isStream(e)||V.isFile(e)||V.isBlob(e)?e:V.isArrayBufferView(e)?e.buffer:V.isURLSearchParams(e)?(te(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):V.isObject(e)?(te(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};ne.headers={common:{Accept:"application/json, text/plain, */*"}},V.forEach(["delete","get","head"],function(e){ne.headers[e]={}}),V.forEach(["post","put","patch"],function(e){ne.headers[e]=V.merge(ee)});var oe=ne;function se(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var ae=function(e){return se(e),e.headers=e.headers||{},e.data=G(e.data,e.headers,e.transformRequest),e.headers=V.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),V.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||oe.adapter)(e).then(function(t){return se(e),t.data=G(t.data,t.headers,e.transformResponse),t},function(t){return X(t)||(se(e),t&&t.response&&(t.response.data=G(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})},ie=function(e,t){t=t||{};var r={},n=["url","method","params","data"],o=["headers","auth","proxy"],s=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];V.forEach(n,function(e){void 0!==t[e]&&(r[e]=t[e])}),V.forEach(o,function(n){V.isObject(t[n])?r[n]=V.deepMerge(e[n],t[n]):void 0!==t[n]?r[n]=t[n]:V.isObject(e[n])?r[n]=V.deepMerge(e[n]):void 0!==e[n]&&(r[n]=e[n])}),V.forEach(s,function(n){void 0!==t[n]?r[n]=t[n]:void 0!==e[n]&&(r[n]=e[n])});var a=n.concat(o).concat(s),i=Object.keys(t).filter(function(e){return-1===a.indexOf(e)});return V.forEach(i,function(n){void 0!==t[n]?r[n]=t[n]:void 0!==e[n]&&(r[n]=e[n])}),r};function ce(e){this.defaults=e,this.interceptors={request:new M,response:new M}}ce.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=ie(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[ae,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},ce.prototype.getUri=function(e){return e=ie(this.defaults,e),H(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},V.forEach(["delete","get","head","options"],function(e){ce.prototype[e]=function(t,r){return this.request(V.merge(r||{},{method:e,url:t}))}}),V.forEach(["post","put","patch"],function(e){ce.prototype[e]=function(t,r,n){return this.request(V.merge(n||{},{method:e,url:t,data:r}))}});var ue=ce;function fe(e){this.message=e}fe.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},fe.prototype.__CANCEL__=!0;var le=fe;function he(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new le(e),t(r.reason))})}he.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},he.source=function(){var e;return{token:new he(function(t){e=t}),cancel:e}};var de=he;function pe(e){var t=new ue(e),r=P(ue.prototype.request,t);return V.extend(r,ue.prototype,t),V.extend(r,t),r}var me=pe(oe);me.Axios=ue,me.create=function(e){return pe(ie(me.defaults,e))},me.Cancel=le,me.CancelToken=de,me.isCancel=X,me.all=function(e){return Promise.all(e)},me.spread=function(e){return function(t){return e.apply(null,t)}};var ve=me,ge=me;ve.default=ge;var xe=ve;function ye(e,t,r){const n=e.slice();return n[10]=t[r],n}function Ee(e,t,r){const n=e.slice();return n[7]=t[r],n}function we(e){let t;const r=new B({});return{c(){g(r.$$.fragment)},l(e){y(r.$$.fragment,e)},m(e,n){E(r,e,n),t=!0},p:v,i(e){t||(S(r.$$.fragment,e),t=!0)},o(e){w(r.$$.fragment,e),t=!1},d(e){j(r,e)}}}function be(e){let t,r,m,g,x,y,E,w,b=e[1],S=[];for(let t=0;t<b.length;t+=1)S[t]=je(Ee(e,b,t));return{c(){t=n("div");for(let e=0;e<S.length;e+=1)S[e].c();r=o(),m=n("div"),g=n("a"),x=n("i"),y=o(),E=n("span"),w=s("Checkout more projects on Github"),this.h()},l(e){t=a(e,"DIV",{class:!0});var n=i(t);for(let e=0;e<S.length;e+=1)S[e].l(n);n.forEach(c),r=u(e),m=a(e,"DIV",{class:!0});var o=i(m);g=a(o,"A",{href:!0,class:!0});var s=i(g);x=a(s,"I",{class:!0,style:!0}),i(x).forEach(c),y=u(s),E=a(s,"SPAN",{});var l=i(E);w=f(l,"Checkout more projects on Github"),l.forEach(c),s.forEach(c),o.forEach(c),this.h()},h(){l(t,"class","card-wrapper svelte-6huxxf"),l(x,"class","fa fa-github svelte-6huxxf"),h(x,"color","#211F1F"),l(g,"href","https://github.com/anshul2209"),l(g,"class","mediaWrapper svelte-6huxxf"),l(m,"class","allProjects svelte-6huxxf")},m(e,n){d(e,t,n);for(let e=0;e<S.length;e+=1)S[e].m(t,null);d(e,r,n),d(e,m,n),p(m,g),p(g,x),p(g,y),p(g,E),p(E,w)},p(e,r){if(15&r){let n;for(b=e[1],n=0;n<b.length;n+=1){const o=Ee(e,b,n);S[n]?S[n].p(o,r):(S[n]=je(o),S[n].c(),S[n].m(t,null))}for(;n<S.length;n+=1)S[n].d(1);S.length=b.length}},i:v,o:v,d(e){e&&c(t),T(S,e),e&&c(r),e&&c(m)}}}function Se(e){let t,r,o=e[10]+"";return{c(){t=n("span"),r=s(o),this.h()},l(e){t=a(e,"SPAN",{class:!0});var n=i(t);r=f(n,o),n.forEach(c),this.h()},h(){l(t,"class","svelte-6huxxf")},m(e,n){d(e,t,n),p(t,r)},p(e,t){2&t&&o!==(o=e[10]+"")&&m(r,o)},d(e){e&&c(t)}}}function je(e){let t,r,v,g,x,y,E,w,b,S,j,A,C,k,D,O,B,P,I,L,U,q,$,z,V,F,H,_,M,G,X,J,K,W=e[7].name+"",Q=e[7].description+"",Y=e[7].topics,Z=[];for(let t=0;t<Y.length;t+=1)Z[t]=Se(ye(e,Y,t));return{c(){t=n("div"),r=n("div"),v=n("div"),g=n("div"),x=n("img"),E=o(),w=n("div"),b=n("span"),S=s(W),j=o(),A=n("p"),C=s(Q),k=o(),D=n("div"),O=n("span"),B=n("i"),P=o(),I=n("div"),L=n("a"),U=n("i"),q=s("Demo"),z=o(),V=n("a"),F=n("i"),H=s("GitHub"),M=o(),G=n("div");for(let e=0;e<Z.length;e+=1)Z[e].c();J=o(),this.h()},l(e){t=a(e,"DIV",{class:!0});var n=i(t);r=a(n,"DIV",{class:!0});var o=i(r);v=a(o,"DIV",{class:!0});var s=i(v);g=a(s,"DIV",{class:!0});var l=i(g);x=a(l,"IMG",{src:!0,alt:!0,class:!0}),l.forEach(c),E=u(s),w=a(s,"DIV",{class:!0});var h=i(w);b=a(h,"SPAN",{class:!0});var d=i(b);S=f(d,W),d.forEach(c),j=u(h),A=a(h,"P",{class:!0});var p=i(A);C=f(p,Q),p.forEach(c),h.forEach(c),s.forEach(c),k=u(o),D=a(o,"DIV",{class:!0});var m=i(D);O=a(m,"SPAN",{class:!0});var y=i(O);B=a(y,"I",{class:!0,"aria-hidden":!0,style:!0}),i(B).forEach(c),y.forEach(c),P=u(m),I=a(m,"DIV",{class:!0});var R=i(I);L=a(R,"A",{target:!0,href:!0,class:!0});var N=i(L);U=a(N,"I",{class:!0,style:!0}),i(U).forEach(c),q=f(N,"Demo"),N.forEach(c),z=u(R),V=a(R,"A",{target:!0,href:!0,class:!0});var T=i(V);F=a(T,"I",{class:!0,style:!0}),i(F).forEach(c),H=f(T,"GitHub"),T.forEach(c),R.forEach(c),M=u(m),G=a(m,"DIV",{class:!0});var $=i(G);for(let e=0;e<Z.length;e+=1)Z[e].l($);$.forEach(c),m.forEach(c),o.forEach(c),J=u(n),n.forEach(c),this.h()},h(){x.src!==(y=e[2][e[7].name].cover)&&l(x,"src",y),l(x,"alt","project"),l(x,"class","svelte-6huxxf"),l(g,"class","imageSection svelte-6huxxf"),l(b,"class","title svelte-6huxxf"),l(A,"class","description svelte-6huxxf"),l(w,"class","details svelte-6huxxf"),l(v,"class","card svelte-6huxxf"),l(B,"class","fa fa-times-circle"),l(B,"aria-hidden","true"),h(B,"font-size","24px"),l(O,"class","svelte-6huxxf"),l(U,"class","fa fa-external-link svelte-6huxxf"),h(U,"font-size","48px"),l(L,"target","_blank"),l(L,"href",$=e[7].homepage),l(L,"class","svelte-6huxxf"),l(F,"class","fa fa-github svelte-6huxxf"),h(F,"font-size","48px"),l(V,"target","_blank"),l(V,"href",_=e[7].svn_url),l(V,"class","svelte-6huxxf"),l(I,"class","links svelte-6huxxf"),l(G,"class","tags svelte-6huxxf"),l(D,"class","card_flip svelte-6huxxf"),l(r,"class",X=R(e[0]?"inside inside-reset":"inside")+" svelte-6huxxf"),l(t,"class","outside svelte-6huxxf")},m(n,o){d(n,t,o),p(t,r),p(r,v),p(v,g),p(g,x),p(v,E),p(v,w),p(w,b),p(b,S),p(w,j),p(w,A),p(A,C),p(r,k),p(r,D),p(D,O),p(O,B),p(D,P),p(D,I),p(I,L),p(L,U),p(L,q),p(I,z),p(I,V),p(V,F),p(V,H),p(D,M),p(D,G);for(let e=0;e<Z.length;e+=1)Z[e].m(G,null);p(t,J),K=N(O,"click",e[3])},p(e,t){if(2&t&&x.src!==(y=e[2][e[7].name].cover)&&l(x,"src",y),2&t&&W!==(W=e[7].name+"")&&m(S,W),2&t&&Q!==(Q=e[7].description+"")&&m(C,Q),2&t&&$!==($=e[7].homepage)&&l(L,"href",$),2&t&&_!==(_=e[7].svn_url)&&l(V,"href",_),2&t){let r;for(Y=e[7].topics,r=0;r<Y.length;r+=1){const n=ye(e,Y,r);Z[r]?Z[r].p(n,t):(Z[r]=Se(n),Z[r].c(),Z[r].m(G,null))}for(;r<Z.length;r+=1)Z[r].d(1);Z.length=Y.length}1&t&&X!==(X=R(e[0]?"inside inside-reset":"inside")+" svelte-6huxxf")&&l(r,"class",X)},d(e){e&&c(t),T(Z,e),K()}}}function Ae(e){let t,r,s,f,l,h,p;document.title=t=Ce;const m=new k({props:{title:Ce}}),v=[be,we],A=[];function R(e,t){return e[1]?0:1}return l=R(e),h=A[l]=v[l](e),{c(){r=o(),g(m.$$.fragment),s=o(),f=n("section"),h.c()},l(e){x('[data-svelte="svelte-1az6e94"]',document.head).forEach(c),r=u(e),y(m.$$.fragment,e),s=u(e),f=a(e,"SECTION",{});var t=i(f);h.l(t),t.forEach(c)},m(e,t){d(e,r,t),E(m,e,t),d(e,s,t),d(e,f,t),A[l].m(f,null),p=!0},p(e,[r]){(!p||0&r)&&t!==(t=Ce)&&(document.title=t);let n=l;(l=R(e))===n?A[l].p(e,r):(C(),w(A[n],1,1,()=>{A[n]=null}),b(),(h=A[l])||(h=A[l]=v[l](e)).c(),S(h,1),h.m(f,null))},i(e){p||(S(m.$$.fragment,e),S(h),p=!0)},o(e){w(m.$$.fragment,e),w(h),p=!1},d(e){e&&c(r),j(m,e),e&&c(s),e&&c(f),A[l].d()}}}const Ce="Projects";function Re(e,t,r){let n=!1;const o=[158177168,92606922,73320743,82116410,234808378,112024297];let s=null;return A(async function(){const e=await xe.get("https://api.github.com/users/anshul2209/repos",{headers:{Accept:"application/vnd.github.mercy-preview+json"}});r(1,s=e.data.filter(e=>o.includes(e.id)))}),[n,s,{PUBGrankpredictor:{id:158177168,cover:"pubg.jpg"},Chatter:{id:92606922,cover:"chatter.png"},"React-Card-Layout-App":{id:73320743,cover:"cards.png"},"React-TaskR-App":{id:82116410,cover:"taskr.png"},"Human-Activity-Tracker":{id:234808378,cover:"activity.jpg"},"lazy-load":{id:112024297,cover:"lazyloader.gif"}},function(e){r(0,n=!0)}]}export default class extends e{constructor(e){super(),t(this,e,Re,Ae,r,{})}}