if('serviceWorker' in navigator){
    console.log("Instalando nosso serviceWorker...")
    navigator.serviceWorker.register('/js/sw.js')
        .then(e => {
            console.log("sw.js instalado")
        })
        .catch(err => {
            console.log(err)
        });
    }