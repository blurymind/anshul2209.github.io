!function(){"use strict";const e=["client/client.a5333a3f.js","client/experience.05477eba.js","client/SectionHeader.79995db1.js","client/index.6fa1c8a9.js","client/awards.19759cd0.js","client/blog.0a530d52.js","client/skills.c69ac6d4.js","client/contact.8d6df0f8.js","client/videos.a657a79f.js","client/projects.59eb1cee.js","client/client.d2314a12.js"].concat(["service-worker-index.html","CNAME","activity.jpg","ai_for_everyone.png","bg.png","brushstroke.png","cards.png","chatter.png","data_science_R.jpeg","favicon.png","giggle.gif","global.css","great-success.png","hello.gif","homelane.jpg","lazyloader.gif","logo-192.png","logo-512.png","manifest.json","medium_logo.png","profile_photo.jpg","pubg.jpg","skillsLogo/JupyterLogo.png","skillsLogo/Rlogo.png","skillsLogo/SagemakerLogo.png","skillsLogo/bootstrap.jpg","skillsLogo/css3Logo.jpg","skillsLogo/gitHubLogo.png","skillsLogo/herokuLogo.png","skillsLogo/html5.png","skillsLogo/jqueryLogo.gif","skillsLogo/nodeJsLogo.png","skillsLogo/pythonLogo.jpeg","skillsLogo/reactLogo.png","skillsLogo/sass.png","skillsLogo/svelteLogo.png","skillsLogo/svelteSapper.png","skillsLogo/vuejsLogo.png","skillsLogo/webpackLogo.png","sveltesapper.jpeg","taskr.png","udacity_ml.png"]),s=new Set(e);self.addEventListener("install",s=>{s.waitUntil(caches.open("cache1583505944406").then(s=>s.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const s of e)"cache1583505944406"!==s&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const o=new URL(e.request.url);o.protocol.startsWith("http")&&(o.hostname===self.location.hostname&&o.port!==self.location.port||(o.host===self.location.host&&s.has(o.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1583505944406").then(async s=>{try{const o=await fetch(e.request);return s.put(e.request,o.clone()),o}catch(o){const t=await s.match(e.request);if(t)return t;throw o}}))))})}();
