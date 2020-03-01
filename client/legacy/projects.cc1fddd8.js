import{_ as e,a as t,b as n,c as r,i as o,s as a,d as s,S as i,f as c,e as u,t as f,j as l,k as h,g as d,h as p,l as m,m as v,v as g,n as x,o as y,r as E,u as w,p as b,w as S,x as j,q as A,y as C,z as R,A as N,B as T,C as k,D,E as O,F as B,G as I,H as P,I as L,J as U,K as q}from"./client.5c461c96.js";import{S as $}from"./SectionHeader.a84a0880.js";function z(e){var t,n,r,o,a,s=(e[0]||"Loading...")+"";return{c:function(){t=c("div"),n=c("i"),r=u(),o=c("div"),a=f(s),this.h()},l:function(e){t=l(e,"DIV",{class:!0});var i=h(t);n=l(i,"I",{class:!0,style:!0}),h(n).forEach(d),r=p(i),o=l(i,"DIV",{class:!0});var c=h(o);a=m(c,s),c.forEach(d),i.forEach(d),this.h()},h:function(){v(n,"class","fa fa-spinner fa-spin"),g(n,"font-size","108px"),v(o,"class","loading svelte-1wmlfcj"),v(t,"class","loader svelte-1wmlfcj")},m:function(e,s){x(e,t,s),y(t,n),y(t,r),y(t,o),y(o,a)},p:function(e,t){1&E(t,1)[0]&&s!==(s=(e[0]||"Loading...")+"")&&w(a,s)},i:b,o:b,d:function(e){e&&d(t)}}}function V(e,t,n){var r=t.loaderText;return e.$set=function(e){"loaderText"in e&&n(0,r=e.loaderText)},[r]}var F=function(c){function u(e){var i;return t(this,u),i=n(this,r(u).call(this)),o(s(i),e,V,z,a,{loaderText:0}),i}return e(u,i),u}(),H=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},_=Object.prototype.toString;function M(e){return"[object Array]"===_.call(e)}function G(e){return void 0===e}function J(e){return null!==e&&"object"===S(e)}function X(e){return"[object Function]"===_.call(e)}function K(e,t){if(null!=e)if("object"!==S(e)&&(e=[e]),M(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var W={isArray:M,isArrayBuffer:function(e){return"[object ArrayBuffer]"===_.call(e)},isBuffer:function(e){return null!==e&&!G(e)&&null!==e.constructor&&!G(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:J,isUndefined:G,isDate:function(e){return"[object Date]"===_.call(e)},isFile:function(e){return"[object File]"===_.call(e)},isBlob:function(e){return"[object Blob]"===_.call(e)},isFunction:X,isStream:function(e){return J(e)&&X(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:K,merge:function e(){var t={};function n(n,r){"object"===S(t[r])&&"object"===S(n)?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)K(arguments[r],n);return t},deepMerge:function e(){var t={};function n(n,r){"object"===S(t[r])&&"object"===S(n)?t[r]=e(t[r],n):"object"===S(n)?t[r]=e({},n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)K(arguments[r],n);return t},extend:function(e,t,n){return K(t,function(t,r){e[r]=n&&"function"==typeof t?H(t,n):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}};function Q(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Y=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(W.isURLSearchParams(t))r=t.toString();else{var o=[];W.forEach(t,function(e,t){null!=e&&(W.isArray(e)?t+="[]":e=[e],W.forEach(e,function(e){W.isDate(e)?e=e.toISOString():W.isObject(e)&&(e=JSON.stringify(e)),o.push(Q(t)+"="+Q(e))}))}),r=o.join("&")}if(r){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e};function Z(){this.handlers=[]}Z.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},Z.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},Z.prototype.forEach=function(e){W.forEach(this.handlers,function(t){null!==t&&e(t)})};var ee=Z,te=function(e,t,n){return W.forEach(n,function(n){e=n(e,t)}),e},ne=function(e){return!(!e||!e.__CANCEL__)},re=function(e,t){W.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})},oe=function(e,t,n,r,o){return function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}(new Error(e),t,n,r,o)},ae=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],se=W.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=W.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0},ie=W.isStandardBrowserEnv()?{write:function(e,t,n,r,o,a){var s=[];s.push(e+"="+encodeURIComponent(t)),W.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),W.isString(r)&&s.push("path="+r),W.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},ce=function(e){return new Promise(function(t,n){var r=e.data,o=e.headers;W.isFormData(r)&&delete o["Content-Type"];var a=new XMLHttpRequest;if(e.auth){var s=e.auth.username||"",i=e.auth.password||"";o.Authorization="Basic "+btoa(s+":"+i)}var c,u,f=(c=e.baseURL,u=e.url,c&&!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(u)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(c,u):u);if(a.open(e.method.toUpperCase(),Y(f,e.params,e.paramsSerializer),!0),a.timeout=e.timeout,a.onreadystatechange=function(){if(a&&4===a.readyState&&(0!==a.status||a.responseURL&&0===a.responseURL.indexOf("file:"))){var r,o,s,i,c,u="getAllResponseHeaders"in a?(r=a.getAllResponseHeaders(),c={},r?(W.forEach(r.split("\n"),function(e){if(i=e.indexOf(":"),o=W.trim(e.substr(0,i)).toLowerCase(),s=W.trim(e.substr(i+1)),o){if(c[o]&&ae.indexOf(o)>=0)return;c[o]="set-cookie"===o?(c[o]?c[o]:[]).concat([s]):c[o]?c[o]+", "+s:s}}),c):c):null,f={data:e.responseType&&"text"!==e.responseType?a.response:a.responseText,status:a.status,statusText:a.statusText,headers:u,config:e,request:a};!function(e,t,n){var r=n.config.validateStatus;!r||r(n.status)?e(n):t(oe("Request failed with status code "+n.status,n.config,null,n.request,n))}(t,n,f),a=null}},a.onabort=function(){a&&(n(oe("Request aborted",e,"ECONNABORTED",a)),a=null)},a.onerror=function(){n(oe("Network Error",e,null,a)),a=null},a.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(oe(t,e,"ECONNABORTED",a)),a=null},W.isStandardBrowserEnv()){var l=ie,h=(e.withCredentials||se(f))&&e.xsrfCookieName?l.read(e.xsrfCookieName):void 0;h&&(o[e.xsrfHeaderName]=h)}if("setRequestHeader"in a&&W.forEach(o,function(e,t){void 0===r&&"content-type"===t.toLowerCase()?delete o[t]:a.setRequestHeader(t,e)}),W.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),e.responseType)try{a.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&a.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&a.upload&&a.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){a&&(a.abort(),n(e),a=null)}),void 0===r&&(r=null),a.send(r)})},ue={"Content-Type":"application/x-www-form-urlencoded"};function fe(e,t){!W.isUndefined(e)&&W.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var le,he={adapter:("undefined"!=typeof XMLHttpRequest?le=ce:"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process)&&(le=ce),le),transformRequest:[function(e,t){return re(t,"Accept"),re(t,"Content-Type"),W.isFormData(e)||W.isArrayBuffer(e)||W.isBuffer(e)||W.isStream(e)||W.isFile(e)||W.isBlob(e)?e:W.isArrayBufferView(e)?e.buffer:W.isURLSearchParams(e)?(fe(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):W.isObject(e)?(fe(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};he.headers={common:{Accept:"application/json, text/plain, */*"}},W.forEach(["delete","get","head"],function(e){he.headers[e]={}}),W.forEach(["post","put","patch"],function(e){he.headers[e]=W.merge(ue)});var de=he;function pe(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var me=function(e){return pe(e),e.headers=e.headers||{},e.data=te(e.data,e.headers,e.transformRequest),e.headers=W.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),W.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||de.adapter)(e).then(function(t){return pe(e),t.data=te(t.data,t.headers,e.transformResponse),t},function(t){return ne(t)||(pe(e),t&&t.response&&(t.response.data=te(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})},ve=function(e,t){t=t||{};var n={},r=["url","method","params","data"],o=["headers","auth","proxy"],a=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];W.forEach(r,function(e){void 0!==t[e]&&(n[e]=t[e])}),W.forEach(o,function(r){W.isObject(t[r])?n[r]=W.deepMerge(e[r],t[r]):void 0!==t[r]?n[r]=t[r]:W.isObject(e[r])?n[r]=W.deepMerge(e[r]):void 0!==e[r]&&(n[r]=e[r])}),W.forEach(a,function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])});var s=r.concat(o).concat(a),i=Object.keys(t).filter(function(e){return-1===s.indexOf(e)});return W.forEach(i,function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])}),n};function ge(e){this.defaults=e,this.interceptors={request:new ee,response:new ee}}ge.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=ve(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[me,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},ge.prototype.getUri=function(e){return e=ve(this.defaults,e),Y(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},W.forEach(["delete","get","head","options"],function(e){ge.prototype[e]=function(t,n){return this.request(W.merge(n||{},{method:e,url:t}))}}),W.forEach(["post","put","patch"],function(e){ge.prototype[e]=function(t,n,r){return this.request(W.merge(r||{},{method:e,url:t,data:n}))}});var xe=ge;function ye(e){this.message=e}ye.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},ye.prototype.__CANCEL__=!0;var Ee=ye;function we(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new Ee(e),t(n.reason))})}we.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},we.source=function(){var e;return{token:new we(function(t){e=t}),cancel:e}};var be=we;function Se(e){var t=new xe(e),n=H(xe.prototype.request,t);return W.extend(n,xe.prototype,t),W.extend(n,t),n}var je=Se(de);je.Axios=xe,je.create=function(e){return Se(ve(je.defaults,e))},je.Cancel=Ee,je.CancelToken=be,je.isCancel=ne,je.all=function(e){return Promise.all(e)},je.spread=function(e){return function(t){return e.apply(null,t)}};var Ae=je,Ce=je;Ae.default=Ce;var Re=Ae;function Ne(e,t,n){var r=e.slice();return r[10]=t[n],r}function Te(e,t,n){var r=e.slice();return r[7]=t[n],r}function ke(e){var t,n=new F({});return{c:function(){j(n.$$.fragment)},l:function(e){C(n.$$.fragment,e)},m:function(e,r){R(n,e,r),t=!0},p:b,i:function(e){t||(k(n.$$.fragment,e),t=!0)},o:function(e){N(n.$$.fragment,e),t=!1},d:function(e){D(n,e)}}}function De(e){for(var t,n,r,o,a,s,i,E,w=e[1],S=[],j=0;j<w.length;j+=1)S[j]=Be(Te(e,w,j));return{c:function(){t=c("div");for(var e=0;e<S.length;e+=1)S[e].c();n=u(),r=c("div"),o=c("a"),a=c("i"),s=u(),i=c("span"),E=f("Checkout more projects on Github"),this.h()},l:function(e){t=l(e,"DIV",{class:!0});for(var c=h(t),u=0;u<S.length;u+=1)S[u].l(c);c.forEach(d),n=p(e),r=l(e,"DIV",{class:!0});var f=h(r);o=l(f,"A",{href:!0,class:!0});var v=h(o);a=l(v,"I",{class:!0,style:!0}),h(a).forEach(d),s=p(v),i=l(v,"SPAN",{});var g=h(i);E=m(g,"Checkout more projects on Github"),g.forEach(d),v.forEach(d),f.forEach(d),this.h()},h:function(){v(t,"class","card-wrapper svelte-6huxxf"),v(a,"class","fa fa-github svelte-6huxxf"),g(a,"color","#211F1F"),v(o,"href","https://github.com/anshul2209"),v(o,"class","mediaWrapper svelte-6huxxf"),v(r,"class","allProjects svelte-6huxxf")},m:function(e,c){x(e,t,c);for(var u=0;u<S.length;u+=1)S[u].m(t,null);x(e,n,c),x(e,r,c),y(r,o),y(o,a),y(o,s),y(o,i),y(i,E)},p:function(e,n){if(15&n){var r;for(w=e[1],r=0;r<w.length;r+=1){var o=Te(e,w,r);S[r]?S[r].p(o,n):(S[r]=Be(o),S[r].c(),S[r].m(t,null))}for(;r<S.length;r+=1)S[r].d(1);S.length=w.length}},i:b,o:b,d:function(e){e&&d(t),L(S,e),e&&d(n),e&&d(r)}}}function Oe(e){var t,n,r=e[10]+"";return{c:function(){t=c("span"),n=f(r),this.h()},l:function(e){t=l(e,"SPAN",{class:!0});var o=h(t);n=m(o,r),o.forEach(d),this.h()},h:function(){v(t,"class","svelte-6huxxf")},m:function(e,r){x(e,t,r),y(t,n)},p:function(e,t){2&t&&r!==(r=e[10]+"")&&w(n,r)},d:function(e){e&&d(t)}}}function Be(e){for(var t,n,r,o,a,s,i,E,b,S,j,A,C,R,N,T,k,D,O,B,U,q,$,z,V,F,H,_,M,G,J,X,K,W=e[7].name+"",Q=e[7].description+"",Y=e[7].topics,Z=[],ee=0;ee<Y.length;ee+=1)Z[ee]=Oe(Ne(e,Y,ee));return{c:function(){t=c("div"),n=c("div"),r=c("div"),o=c("div"),a=c("img"),i=u(),E=c("div"),b=c("span"),S=f(W),j=u(),A=c("p"),C=f(Q),R=u(),N=c("div"),T=c("span"),k=c("i"),D=u(),O=c("div"),B=c("a"),U=c("i"),q=f("Demo"),z=u(),V=c("a"),F=c("i"),H=f("GitHub"),M=u(),G=c("div");for(var e=0;e<Z.length;e+=1)Z[e].c();X=u(),this.h()},l:function(e){t=l(e,"DIV",{class:!0});var s=h(t);n=l(s,"DIV",{class:!0});var c=h(n);r=l(c,"DIV",{class:!0});var u=h(r);o=l(u,"DIV",{class:!0});var f=h(o);a=l(f,"IMG",{src:!0,alt:!0,class:!0}),f.forEach(d),i=p(u),E=l(u,"DIV",{class:!0});var v=h(E);b=l(v,"SPAN",{class:!0});var g=h(b);S=m(g,W),g.forEach(d),j=p(v),A=l(v,"P",{class:!0});var x=h(A);C=m(x,Q),x.forEach(d),v.forEach(d),u.forEach(d),R=p(c),N=l(c,"DIV",{class:!0});var y=h(N);T=l(y,"SPAN",{class:!0});var w=h(T);k=l(w,"I",{class:!0,"aria-hidden":!0,style:!0}),h(k).forEach(d),w.forEach(d),D=p(y),O=l(y,"DIV",{class:!0});var I=h(O);B=l(I,"A",{target:!0,href:!0,class:!0});var P=h(B);U=l(P,"I",{class:!0,style:!0}),h(U).forEach(d),q=m(P,"Demo"),P.forEach(d),z=p(I),V=l(I,"A",{target:!0,href:!0,class:!0});var L=h(V);F=l(L,"I",{class:!0,style:!0}),h(F).forEach(d),H=m(L,"GitHub"),L.forEach(d),I.forEach(d),M=p(y),G=l(y,"DIV",{class:!0});for(var $=h(G),_=0;_<Z.length;_+=1)Z[_].l($);$.forEach(d),y.forEach(d),c.forEach(d),X=p(s),s.forEach(d),this.h()},h:function(){a.src!==(s=e[2][e[7].name].cover)&&v(a,"src",s),v(a,"alt","project"),v(a,"class","svelte-6huxxf"),v(o,"class","imageSection svelte-6huxxf"),v(b,"class","title svelte-6huxxf"),v(A,"class","description svelte-6huxxf"),v(E,"class","details svelte-6huxxf"),v(r,"class","card svelte-6huxxf"),v(k,"class","fa fa-times-circle"),v(k,"aria-hidden","true"),g(k,"font-size","24px"),v(T,"class","svelte-6huxxf"),v(U,"class","fa fa-external-link svelte-6huxxf"),g(U,"font-size","48px"),v(B,"target","_blank"),v(B,"href",$=e[7].homepage),v(B,"class","svelte-6huxxf"),v(F,"class","fa fa-github svelte-6huxxf"),g(F,"font-size","48px"),v(V,"target","_blank"),v(V,"href",_=e[7].svn_url),v(V,"class","svelte-6huxxf"),v(O,"class","links svelte-6huxxf"),v(G,"class","tags svelte-6huxxf"),v(N,"class","card_flip svelte-6huxxf"),v(n,"class",J=I(e[0]?"inside inside-reset":"inside")+" svelte-6huxxf"),v(t,"class","outside svelte-6huxxf")},m:function(s,c){x(s,t,c),y(t,n),y(n,r),y(r,o),y(o,a),y(r,i),y(r,E),y(E,b),y(b,S),y(E,j),y(E,A),y(A,C),y(n,R),y(n,N),y(N,T),y(T,k),y(N,D),y(N,O),y(O,B),y(B,U),y(B,q),y(O,z),y(O,V),y(V,F),y(V,H),y(N,M),y(N,G);for(var u=0;u<Z.length;u+=1)Z[u].m(G,null);y(t,X),K=P(T,"click",e[3])},p:function(e,t){if(2&t&&a.src!==(s=e[2][e[7].name].cover)&&v(a,"src",s),2&t&&W!==(W=e[7].name+"")&&w(S,W),2&t&&Q!==(Q=e[7].description+"")&&w(C,Q),2&t&&$!==($=e[7].homepage)&&v(B,"href",$),2&t&&_!==(_=e[7].svn_url)&&v(V,"href",_),2&t){var r;for(Y=e[7].topics,r=0;r<Y.length;r+=1){var o=Ne(e,Y,r);Z[r]?Z[r].p(o,t):(Z[r]=Oe(o),Z[r].c(),Z[r].m(G,null))}for(;r<Z.length;r+=1)Z[r].d(1);Z.length=Y.length}1&t&&J!==(J=I(e[0]?"inside inside-reset":"inside")+" svelte-6huxxf")&&v(n,"class",J)},d:function(e){e&&d(t),L(Z,e),K()}}}function Ie(e){var t,n,r,o,a,s,i;document.title=t=Pe;var f=new $({props:{title:Pe}}),m=[De,ke],v=[];function g(e,t){return e[1]?0:1}return a=g(e),s=v[a]=m[a](e),{c:function(){n=u(),j(f.$$.fragment),r=u(),o=c("section"),s.c()},l:function(e){A('[data-svelte="svelte-1az6e94"]',document.head).forEach(d),n=p(e),C(f.$$.fragment,e),r=p(e),o=l(e,"SECTION",{});var t=h(o);s.l(t),t.forEach(d)},m:function(e,t){x(e,n,t),R(f,e,t),x(e,r,t),x(e,o,t),v[a].m(o,null),i=!0},p:function(e,n){var r=E(n,1)[0];(!i||0&r)&&t!==(t=Pe)&&(document.title=t);var c=a;(a=g(e))===c?v[a].p(e,r):(B(),N(v[c],1,1,function(){v[c]=null}),T(),(s=v[a])||(s=v[a]=m[a](e)).c(),k(s,1),s.m(o,null))},i:function(e){i||(k(f.$$.fragment,e),k(s),i=!0)},o:function(e){N(f.$$.fragment,e),N(s),i=!1},d:function(e){e&&d(n),D(f,e),e&&d(r),e&&d(o),v[a].d()}}}var Pe="Projects";function Le(e,t,n){var r=!1,o=[158177168,92606922,73320743,82116410,234808378,112024297],a=null;function s(){return(s=U(q.mark(function e(){var t,r;return q.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={Accept:"application/vnd.github.mercy-preview+json"},e.next=3,Re.get("https://api.github.com/users/anshul2209/repos",{headers:t});case 3:r=e.sent,n(1,a=r.data.filter(function(e){return o.includes(e.id)}));case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}return O(function(){return s.apply(this,arguments)}),[r,a,{PUBGrankpredictor:{id:158177168,cover:"pubg.jpg"},Chatter:{id:92606922,cover:"chatter.png"},"React-Card-Layout-App":{id:73320743,cover:"cards.png"},"React-TaskR-App":{id:82116410,cover:"taskr.png"},"Human-Activity-Tracker":{id:234808378,cover:"activity.jpg"},"lazy-load":{id:112024297,cover:"lazyloader.gif"}},function(e){n(0,r=!0)}]}export default(function(c){function u(e){var i;return t(this,u),i=n(this,r(u).call(this)),o(s(i),e,Le,Ie,a,{}),i}return e(u,i),u}());