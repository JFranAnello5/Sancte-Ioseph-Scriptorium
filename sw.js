/* Sancte Ioseph Scriptorium 0.7 — caché para uso sin conexión */
const V='sis-0.7';
const LOCAL=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/maskable-512.png','./icons/apple-touch-icon.png','./icons/favicon-32.png'];
const CDN=['https://cdn.jsdelivr.net/npm/abcjs@6.4.4/dist/abcjs-basic-min.js','https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'];
self.addEventListener('install',e=>{
  e.waitUntil((async()=>{
    const c=await caches.open(V);
    await c.addAll(LOCAL).catch(()=>{});
    await Promise.all(CDN.map(u=>fetch(u,{mode:'no-cors'}).then(r=>c.put(u,r)).catch(()=>{})));
    self.skipWaiting();
  })());
});
self.addEventListener('activate',e=>{
  e.waitUntil((async()=>{for(const k of await caches.keys())if(k!==V)await caches.delete(k);await self.clients.claim()})());
});
self.addEventListener('fetch',e=>{
  const q=e.request;if(q.method!=='GET')return;
  const u=new URL(q.url);
  if(q.mode==='navigate'||u.origin===location.origin){
    /* propio: primero la red (para recibir versiones nuevas), y si no hay conexión, la copia guardada */
    e.respondWith(fetch(q).then(r=>{const k=r.clone();caches.open(V).then(c=>c.put(q,k));return r}).catch(()=>caches.match(q).then(r=>r||caches.match('./index.html'))));
    return;
  }
  if(/cdn\.jsdelivr\.net|cdnjs\.cloudflare\.com/.test(u.host)){
    e.respondWith(caches.match(q).then(h=>h||fetch(q).then(r=>{const k=r.clone();caches.open(V).then(c=>c.put(q,k));return r})));
  }
});
