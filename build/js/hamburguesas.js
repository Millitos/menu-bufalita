//loader
let body = document.querySelector('.hidden');
let loader = document.querySelector('.loader');

document.addEventListener('DOMContentLoaded',function(){
    setTimeout(function(){
        loader.className = 'hide';
        body.classList.remove('hidden');
    },2000)
    
    conexion();
    
})


//de esta manera agg los cards a cada div que se va agg dinamicamente 
const div = document.querySelector('.dj');
// div.innerHTML = 'test'; //agg card

function conexion(){

    const url = '../build/json/hamburguesas.json';

    fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        // console.log(data);
        cargarHamburguesas(data);
    })
    .catch((error=>{
        console.log(error);
    }))

}

function cargarHamburguesas(data){
    const containerProductos = document.querySelector('.productos-container');
    // console.log(data);
    data.forEach((dat)=>{
        console.log(dat);
        const div = document.createElement('div');
        div.classList.add('col-12','col-lg-4','col-md-6');

        div.innerHTML = `<div class="card" style="width: 100%;">
                            <div class="card-body">
                                <h4 class="card-title"><b>${dat.nombre}</b></h4>
                                <p class="card-text">${dat.ingredientes}</p>
                                <h4 class="card-title price"><b>${dat.Precio}</b> <a href="#" class="btn btn-danger priceBtn">Ver</a></h4>
                            </div>
                        </div>`;
        
        containerProductos.appendChild(div);
    })
}