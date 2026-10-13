// Service worker: la app abre sin conexión y se actualiza sola cuando la hay (red primero, caché de respaldo).
const C='patras-v2';
const PRE=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','https://unpkg.com/peerjs@1.5.4/dist/peerjs.min.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(PRE)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 const u=new URL(e.request.url),ours=u.origin===location.origin||u.hostname==='unpkg.com';
 if(!ours)return; // señalización de PeerJS y demás: nunca por caché
 e.respondWith(fetch(e.request).then(r=>{if(r.ok){const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp))}return r}).catch(()=>caches.match(e.request,{ignoreSearch:true})));
});
