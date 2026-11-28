/* Service worker: guarda o curso para funcionar sem internet.
   A cada nova entrega, mude CACHE para forçar a atualização no aparelho. */
const CACHE = 'terra-e-gente-v9';
const FILES = ['./', './index.html', './termos.html', './privacidade.html', './manifest.webmanifest', './icons/favicon.svg',
  './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png', './icons/apple-touch-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  // página: tenta a rede primeiro (pega a versão nova), cai no cache se estiver offline
  if (req.mode === 'navigate') {
    const p = new URL(req.url).pathname, home = p.endsWith('/') || p.endsWith('/index.html');
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put(home ? './index.html' : req, c)); return r; })
      .catch(() => caches.match(home ? './index.html' : req).then(r => r || caches.match('./index.html'))));
    return;
  }
  e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => { const c = res.clone(); caches.open(CACHE).then(x => x.put(req, c)); return res; })));
});
