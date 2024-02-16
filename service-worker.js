const CACHE_NAME = "estudiantes-app-cache-v1";
const urlsToCache = [
  "index2.html",
  "styles.css",
  "script.js",
  "icon.png",
  // Agrega cualquier otro recurso que desees cachear aquí
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
