// asignar un nombre y versio al cache
const CACHE_NAME = "v1_cache_pwa_todo";
const urlsToCache = [
  "./",
  "https://fonts.googleapis.com/css?family=Roboto&display=swap",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./favicon.ico",
];

// durante la fase de instalacion , generalmente se almacena en cache los archivos estaticos
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll(urlsToCache).then(() => self.skipWaiting())
    ).catch(err => console.log("Fallo el registro de cache", err))
  );
});

// una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexion
self.addEventListener("activate", (e) => {
  const cacheWhitelist = [CACHE_NAME];

  e.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            // Elimina lo que ya no se necesita en cache
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
       // Le indica al SW activar el cache actual
      .then(() => self.clients.claim())
  );
});

// cuando el navegador recupera una url
self.addEventListener("fetch", (e) => {
    // respoinderai con el objeto de caché o directamente con el recurso remoto
  e.respondWith(
    caches.match(e.request).then((res) => {
      if (res) {
        return res;
      }
      // he agregado una lógica para almacenar en caché las respuestas de las solicitudes de recursos remotos que sean válidas (código de respuesta 200 y tipo "basic"). Esto ayudará a mejorar el rendimiento y la disponibilidad de la aplicación cuando los usuarios estén offline o en conexiones de red lentas.
      return fetch(e.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        const responseToCache = response.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, responseToCache);
        });

        return response;
      });
    })
  );
});
