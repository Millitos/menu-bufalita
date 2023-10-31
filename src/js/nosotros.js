//loader
let body = document.querySelector('.hidden');
let loader = document.querySelector('.loader');

//funcion que carga el loader
document.addEventListener('DOMContentLoaded',function(){
    setTimeout(function(){
        loader.className = 'hide';
        body.classList.remove('hidden');
        body.setProperty('background-image', 'url(../../../build/img/fondo.jpg)');
        

    },1000)
    

})

// document.addEventListener('DOMContentLoaded',function(){
//     body.setProperty('background-image', 'url(../../../build/img/underConstruction.jpg)');
// })