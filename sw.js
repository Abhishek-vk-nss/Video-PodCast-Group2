self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/',              // homepage
        '/index.html',    // main HTML page
        '/manifest.json', // your manifest file
        '/icon-192.jpg',  // app icon small
        '/icon-512.jpg'   // app icon large
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
