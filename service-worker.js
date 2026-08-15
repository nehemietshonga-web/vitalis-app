const CACHE_NAME = "vitalis-v2";

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => caches.delete(key))
      )
    )
  );

  self.clients.claim();
});

self.addEventListener("fetch", event => {
  // On laisse toutes les requêtes passer normalement.
  // Le service worker sert uniquement à rendre Vitalis installable.
});
