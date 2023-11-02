let GlobalData; //Variable global que guarda los elementos del json

//loader
let body = document.querySelector('.hidden');
let loader = document.querySelector('.loader');

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        loader.className = 'hide'; //desp de 1seg oculto el loader aggdole la clase hide
        body.classList.remove('hidden'); //dsp de 1seg quita hidden del body
    }, 1000)

    // console.log('ola');
    conexion();

})

function conexion() {

    const url = '/docs/json/bebidas.json';

    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            //console.log(data);
            cargarBebidas(data);
            GlobalData = data;
        })
        .catch((error => {
            console.log(error);
        }))
}

const containerProductos = document.querySelector('.productos-container');

function cargarBebidas(data) {
    // console.log(data);
    containerProductos.innerHTML = "";
    data.forEach((dat) => {
        const div = document.createElement('div');
        div.classList.add('col-12', 'col-lg-6', 'col-md-6', 'col-xxl-4');
        div.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
                            <div class="row g-0">
                                <div class="col-4">
                                    <img src="${dat.imagen}" class="img-fluid rounded-start" alt="${dat.nombre}">
                                </div>
                                <div class="col-8">
                                    <div class="card-body">
                                        <h5 class="card-title">${dat.nombre}</h5>
                                        <p class="card-text">${dat.Precio}</p>
                                    </div>
                                </div>
                            </div>
                        </div>`;

        containerProductos.appendChild(div);
    })
}

// Función para desplazarse hacia arriba de manera suave
function scrollToTop() {
    //función predeterminada en JavaScript que se utiliza para desplazar la ventana actual del navegador a una posición específica en la página
    //se utiliza para controlar el desplazamiento de la ventana del navegador.
    window.scrollTo({
        top: 0, //coordenada vertical en px, 0 pone al inicio de la parte superior
        behavior: "smooth"
    });
}

window.onscroll = function () {
    var scrollTopButton = document.querySelector(".scroll-to-top"); //tomo el elemento al cual le voy a quitar o poner el display
    //obtiene la cantidad de píxeles por los que se ha desplazado la página verticalmente
    if (document.documentElement.scrollTop > 150) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
};

//botones que filtran*****

//función para mostrar solo gaseosas
const btnGaseosas = document.querySelector(".btnGaseosas");
const linkGaseosas = document.querySelector(".linkGaseosas");


function cargarGaseosas(GlobalData) {
    containerProductos.innerHTML = "";
    for (let i = 0; i <= 14 - 1; i++) { //Recorre hasta el agua
        const div = document.createElement('div');
        div.classList.add('col-12', 'col-lg-6', 'col-md-6', 'col-xxl-4');
        div.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
                             <div class="row g-0">
                                 <div class="col-4">
                                     <img src="${GlobalData[i].imagen}" class="img-fluid rounded-start" alt="${GlobalData[i].nombre}">
    
                                 </div>
                                 <div class="col-8">
                                     <div class="card-body">
                                         <h5 class="card-title">${GlobalData[i].nombre}</h5>
                                         <p class="card-text">${GlobalData[i].Precio}</p>
                                     </div>
                                 </div>
                             </div>
                         </div>`;

        containerProductos.appendChild(div);
    }
}

btnGaseosas.addEventListener('click', function () {
    cargarGaseosas(GlobalData);
    
});

linkGaseosas.addEventListener('click',function(){
    cargarGaseosas(GlobalData);
});

//funcion para mostrar solo jugos
const btnJugos = document.querySelector(".btnJugos");
const linkJugos = document.querySelector(".linkJugos");

function cargarJugos(GlobalData){
    containerProductos.innerHTML = "";
    for (let i = 14; i <= 23-1; i++) { //Recorre hasta el agua
        const div = document.createElement('div');
        div.classList.add('col-12', 'col-lg-6', 'col-md-6', 'col-xxl-4');
        div.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
                             <div class="row g-0">
                                 <div class="col-4">
                                     <img src="${GlobalData[i].imagen}" class="img-fluid rounded-start" alt="${GlobalData[i].nombre}">
    
                                 </div>
                                 <div class="col-8">
                                     <div class="card-body">
                                         <h5 class="card-title">${GlobalData[i].nombre}</h5>
                                         <p class="card-text">${GlobalData[i].Precio}</p>
                                     </div>
                                 </div>
                             </div>
                         </div>`;

        containerProductos.appendChild(div);
    }
}

btnJugos.addEventListener('click', function () {
    cargarJugos(GlobalData);
});

linkJugos.addEventListener('click',function(){
    cargarJugos(GlobalData);
})

//funcion para mostrar todos nuevamente
const btnTodos = document.querySelector(".btnTodos");
const linkTodos = document.querySelector(".linkTodos");

btnTodos.addEventListener('click',function(){
    cargarBebidas(GlobalData); //envio a la función principal los elementos del json guardados en la var global
});

linkTodos.addEventListener('click',function(){
    cargarBebidas(GlobalData);
})

const hTodos = document.querySelector(".hTodos");
const hGaseosas = document.querySelector(".hGaseosas");
const hJugos = document.querySelector(".hJugos");


// Función para manejar el clic en botones
function manejarClicBoton(elemento) {
    // Eliminar la clase 'clickeado' de todos los botones y enlaces
    hTodos.classList.remove("clickeado");
    hGaseosas.classList.remove("clickeado");
    hJugos.classList.remove("clickeado");
  
    // Agregar la clase 'clickeado' al botón o enlace clickeado
    elemento.classList.add("clickeado");
}

linkTodos.addEventListener('click',function(){
    manejarClicBoton(hTodos);
})
linkGaseosas.addEventListener('click',function(){
    manejarClicBoton(hGaseosas);
})
linkJugos.addEventListener('click',function(){
    manejarClicBoton(hJugos);
})
