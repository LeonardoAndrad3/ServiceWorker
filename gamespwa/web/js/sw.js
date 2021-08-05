self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('static-v1')
            .then(cache => cache.add('../icons/images2.jpeg'))
    );
});

self.addEventListener('activate', e => {});

self.addEventListener('fetch', fethEvent => {
    console.log('Fazendo fetch...')
    console.log(fethEvent.request.url)
    const rep =  new URL(fethEvent.request.url)
    if(req.url.pathname == "../icons/images1.jpeg"){
        fetchEvent.respondWith(caches.match('../icons/images2.jpeg'))
    }
});