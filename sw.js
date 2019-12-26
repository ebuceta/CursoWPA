//Asignar nombre y Version de la Cache

const CACHE_NAME = 'v1_cache_Eduardo_Buceta_pwa';

// Archivos a Cachear en la aplicación

var urlsToCache = [
    './',
    './css/styles.css',
    './img/1.png',
    './img/2.png',
    './img/3.png',
    './img/4.png',
    './img/5.png',
    './img/6.png',
    './img/facebook.png',
    './img/instagram.png',
    './img/twitter.png',
    './img/favicon.png',
    './img/favicon-1024.png',
    './img/favicon-512.png',
    './img/favicon-384.png',
    './img/favicon-256.png',
    './img/favicon-192.png',
    './img/favicon-128.png',
    './img/favicon-96.png',
    './img/favicon-64.png',
    './img/favicon-32.png',
    './img/favicon-16.png'
];

//Evento de Installación
self.addEventListener('install', e =>
 {
    e.waitUntil(caches.open(CACHE_NAME)
        .then(cache => 
            {
                console.log('Cache Abierta');
                return cache.addAll(urlsToCache)
                .then(() => 
                {
                    self.skipWaiting();
                });
            })
        .catch(err => 
            {
                console.log('No se a registrado el cache', err);
            }));
});

//Evento de Activación
//Que la APP funcione sin conexion

self.addEventListener('activate', e => 
    {
        const cacheWhitelist = [CACHE_NAME];
        e.waitUntil(caches.keys()
            .then(cacheNames => 
                {
                    return Promise.all(cacheNames.map(cacheName => 
                        {
                            if (cacheWhitelist.indexOf(cacheName) === -1) 
                            {
                            //Borrar elementos innecesarios
                            console.log('Borrando Elementos innecesarios')
                            return caches.delete(cacheName);
                            }
                        }));
                })
            .then(() => 
                {
                self.clients.claim();
                }));
 });


//Evento Fech
self.addEventListener('fetch', e =>
    {
        e.respondWith(caches.match(e.request)
            .then(respons => 
                {
                    if(respons)
                        {
                            //Devuelvo datos desde Cache
                            return respons;
                        }
                return fetch(e.request);
                }));
    });
