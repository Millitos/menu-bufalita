//loader
let body = document.querySelector('.hidden');
let loader = document.querySelector('.loader');

document.addEventListener('DOMContentLoaded',function(){
    setTimeout(function(){
        loader.className = 'hide';
        body.classList.remove('hidden');
    },2000)
    
    // console.log('ola');
    
})

//este archivo es el que se creaba previamente cuando se juntaban todos los js en uno solo