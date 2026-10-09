/* Network-first service worker: always tries for fresh content,
   falls back to the cached copy when offline. Bump VERSION to reset. */
const VERSION = "waypoint-v1";
const CORE = [
  "./", "index.html", "css/style.css", "js/app.js",
  "content/ai.js", "content/engineering.js", "content/finance.js",
  "content/aerospace.js", "content/cyber.js", "content/leadership.js",
  "manifest.webmanifest", "assets/icon.svg", "assets/icon-192.png", "assets/icon-512.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        if (res.ok && (new URL(e.request.url).origin === location.origin || e.request.url.includes("fonts.g"))) {
          const copy = res.clone();
          caches.open(VERSION).then((c) => c.put(e.request, copy));
        }
        return res;
      })
      .catch(() => caches.match(e.request).then((r) => r || caches.match("index.html")))
  );
});
