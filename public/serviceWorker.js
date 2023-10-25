const ROBPOT_WEB_CACHE = "robot-web-cache";

importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.0.0/workbox-sw.js');

self.addEventListener("activate", function (event) {
  console.log("ServiceWorker activated.");
});

workbox.core.clientsClaim();
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: ROBPOT_WEB_CACHE
  })
);
