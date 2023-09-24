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