//Service Worker

if('serviceWorker' in navigator){
    console.log('Puedes usar el Service Worker en tu navegador');
    navigator.serviceWorker.register('./sw.js')
                           .then(res => console.log('Service Worker Cargado Correctamente', res))
                           .catch(err => console.log('Service WOrker no se a podido registrar', err));
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