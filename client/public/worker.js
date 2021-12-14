importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js'
);

var cacheName = 'fm-v1.1.1';

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches
            .open(cacheName)
            .then((cache) => cache.addAll(['/static/media', '/static/css']))
    );

    console.log('Ferocious Media app installed');
});

self.addEventListener('message', function (event) {
    if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});

workbox.setConfig({ debug: false });
workbox.googleAnalytics.initialize();
