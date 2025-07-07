self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("hp-kviz").then((cache) =>
      cache.addAll(["./", "./index.html", "./manifest.json"])
  return cache.addAll([
        "index.html",
        "manifest.json",
        "service-worker.js",
        "icon-192.png",
        "icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
