"use strict"; // Strikte syntax volgens protocol

// Constante met naam van de cache,
const CACHE_NAME = "todo-cache";

// Constante met alle files die ik wil cachen.
// HTML, Stylesheets, JS, Manifest en PNG
const urlsToCache = [
	"/",
	"/index.html",
	"/assets/css/main.min.css",
	"/assets/js/app.js",
	"/manifest.json",
	"/assets/icons/icon_48x48.png",
	"/assets/icons/icon_128x128.png",
	"/assets/icons/icon_144x144.png",
	"/assets/icons/icon_192x192.png",
	"/assets/icons/icon_512x512.png"
];

// Installeren Service Worker,
self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then((cache) => cache.addAll(urlsToCache))
	);
});

// Fetchen van events.
self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.match(event.request)
			.then((response) => response || fetch(event.request))
	);
});