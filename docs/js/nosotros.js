//loader
let body = document.querySelector('.hidden');
let loader = document.querySelector('.loader');

//funcion que carga el loader
document.addEventListener('DOMContentLoaded',function(){
    setTimeout(function(){
        loader.className = 'hide';
        body.classList.remove('hidden');
        body.style.setProperty('background-image', 'url(../../../docs/img/underConstruction.jpg)');
        
    },1000)
    

})

