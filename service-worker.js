!function(){"use strict";const e=["client/client.f06f7e4a.js","client/experience.5c45e64c.js","client/SectionHeader.e0c5b4d4.js","client/index.7c633e01.js","client/awards.6318abe6.js","client/blog.dc130df8.js","client/skills.3588e1e0.js","client/contact.6cce4bca.js","client/videos.ddb1778a.js","client/projects.6d765f2c.js","client/client.046aa174.js"].concat(["service-worker-index.html","CNAME","activity.jpg","ai_for_everyone.png","bg.png","brushstroke.png","cards.png","chatter.png","data_science_R.jpeg","favicon.png","giggle.gif","global.css","great-success.png","hello.gif","homelane.jpg","lazyloader.gif","logo-192.png","logo-512.png","manifest.json","profile_photo.jpg","pubg.jpg","skillsLogo/JupyterLogo.png","skillsLogo/Rlogo.png","skillsLogo/SagemakerLogo.png","skillsLogo/bootstrap.jpg","skillsLogo/css3Logo.jpg","skillsLogo/gitHubLogo.png","skillsLogo/herokuLogo.png","skillsLogo/html5.png","skillsLogo/jqueryLogo.gif","skillsLogo/nodeJsLogo.png","skillsLogo/pythonLogo.jpeg","skillsLogo/reactLogo.png","skillsLogo/sass.png","skillsLogo/svelteLogo.png","skillsLogo/svelteSapper.png","skillsLogo/vuejsLogo.png","skillsLogo/webpackLogo.png","taskr.png","udacity_ml.png"]),s=new Set(e);self.addEventListener("install",s=>{s.waitUntil(caches.open("cache1583082256702").then(s=>s.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const s of e)"cache1583082256702"!==s&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const o=new URL(e.request.url);o.protocol.startsWith("http")&&(o.hostname===self.location.hostname&&o.port!==self.location.port||(o.host===self.location.host&&s.has(o.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1583082256702").then(async s=>{try{const o=await fetch(e.request);return s.put(e.request,o.clone()),o}catch(o){const t=await s.match(e.request);if(t)return t;throw o}}))))})}();
