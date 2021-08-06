if('serviceWorker' in navigator){
    console.log("Instalando nosso serviceWorker...");
    navigator.serviceWorker.register('./sw.js')
        .then(e => {
            console.log("sw.js instalado")
        })
        .catch(err => {
            console.log(err)
        });
    }