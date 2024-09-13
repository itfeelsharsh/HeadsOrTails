const CACHE_NAME = 'heads-or-tails-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/logo512.png', // App icons
  '/heads.png',   // Heads image
  '/tails.png',   // Tails image
  '/static/css/main.css', // CSS files
  '/static/js/bundle.js', // JS bundle
];

// Install the service worker and cache the necessary resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

// Intercept fetch requests and serve cached resources
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Update service worker when there are new assets
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
