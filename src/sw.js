console.log("IN sw.js")

workbox.skipWaiting();
workbox.clientsClaim();

workbox.routing.registerRoute(
    new RegExp('https:.*min\.(css|js)'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'cdn-cache'
    })
  )

  workbox.routing.registerRoute(
    new RegExp('/.*:4567.*\.json'),
    workbox.strategies.networkFirst()
  )

workbox.precaching.precacheAndRoute(self.__precacheManifest || [])