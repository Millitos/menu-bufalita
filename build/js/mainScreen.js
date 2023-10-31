//loader
let body = document.querySelector('.hidden');
let loader = document.querySelector('.loader');

document.addEventListener('DOMContentLoaded',function(){
    setTimeout(function(){
        loader.className = 'hide';
        body.classList.remove('hidden');
    },1000)
    
    
    
})

//funcion que redirige al menu
function redirectToMenu(){
    window.location.href = 'menu.html';
}

// https://www.brevo.com/es/blog/como-integrar-un-boton-de-whatsapp-en-tu-sitio-web-guia-2023/#:~:text=https%3A%2F%2Fwa.me%2F__&text=El%20enlace%20abre%20un%20chat,link%20donde%20consideres%20m%C3%A1s%20oportuno.
function redirectToDomicilios(){
    window.location.href = "https://api.whatsapp.com/send/?phone=573132635282";
}

function redirectToUbicacion(){
    window.location.href = 'ubicacion.html';
}

function redirectToNosotros(){
    window.location.href = 'nosotros.html';
}