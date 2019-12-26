//REGISTRO DE: Service Worker
//Este código verifica si la API del service worker está disponible.
//Si está disponible, se registra el service worker de "./sw.js" una vez que se carga la página.

if('serviceWorker' in navigator)
{
    console.log('Puedes usar el Service Worker en tu navegador');
    navigator.serviceWorker.register('./sw.js')
                           .then(res => {
                               return console.log('Service Worker Cargado Correctamente', res);
                           })
                           .catch(err => {
                               return console.log('Service Worker no se a podido registrar', err);
                           });
}
else{
    console.log('NO Puedes usar el Service Worker en ESTE navegador')
}

//Scroll Suavizado
$(document).ready(function () {

    $("#menu a").click(function (e) {
        e.preventDefault();

        $("html, body").animate({

            scrollTop: $($(this).attr('href')).offset().top
        });

    })

});