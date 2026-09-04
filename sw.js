// The shell only. Trip data is never cached: a revoked link must stop working
// the moment it is revoked, and a plan that changed must not read as current.
//
// Nothing here writes the base path down. This file is copied verbatim into the
// build, so it cannot read `import.meta.env.BASE_URL`; instead every URL is
// resolved against the worker's own location, which *is* the base — the app is
// served from /loco-share/ and so is /loco-share/sw.js.
const SHELL = "loco-shell-v2";
const BASE = new URL("./", self.location.href).pathname; // "/loco-share/"
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"];
const PATHS = FILES.map((f) => new URL(f, self.location.href).pathname);

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(SHELL).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k !== SHELL).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});
self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== self.location.origin) return;
  if (!url.pathname.startsWith(BASE)) return;
  // Navigations: network first, so a new build lands immediately; the cached
  // shell is the offline fallback.
  if (e.request.mode === "navigate") {
    e.respondWith(fetch(e.request).catch(() => caches.match(`${BASE}index.html`)));
    return;
  }
  e.respondWith(
    caches.match(e.request).then((hit) =>
      hit ?? fetch(e.request).then((res) => {
        if (res.ok && (url.pathname.startsWith(`${BASE}assets/`) || PATHS.includes(url.pathname))) {
          const copy = res.clone();
          caches.open(SHELL).then((c) => c.put(e.request, copy));
        }
        return res;
      })
    ),
  );
});
