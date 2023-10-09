//loader
let body = document.querySelector('.hidden');
let loader = document.querySelector('.loader');

document.addEventListener('DOMContentLoaded',function(){
    setTimeout(function(){
        loader.className = 'hide';
        body.classList.remove('hidden');
    },1000)
    
    // console.log('ola');
    
})

function redirectToBebidas(){
    window.location.href = 'bebidas.html';
}

function redirectToHamburguesas(){
    window.location.href = 'hamburguesas.html';
}

function redirectToPerros(){
    window.location.href = 'perros.html';
}