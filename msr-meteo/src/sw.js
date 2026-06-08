// =============================================================================
// MSR 2026 — Service Worker
// =============================================================================
const CACHE = 'msr-v1';

self.addEventListener('install', e => { self.skipWaiting(); });

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = e.request.url;
  // API meteo sempre da rete (dati freschi)
  if (url.includes('open-meteo.com') ||
      url.includes('api.met.no')     ||
      url.includes('smhi.se')        ||
      url.includes('opendata-download')) {
    return;
  }
  e.respondWith(
    fetch(e.request)
      .then(r => {
        if (r && r.status === 200) {
          const clone = r.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return r;
      })
      .catch(() => caches.match(e.request))
  );
});
