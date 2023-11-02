let GlobalData; //Variable global que guarda los elementos del json

//loader
let body = document.querySelector('.hidden');
let loader = document.querySelector('.loader');


//funcion que carga el loader
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        loader.className = 'hide';
        body.classList.remove('hidden');
    }, 1000)

    //funcion que hace la conexion con el archivo json
    conexion();

})

function conexion() {

    const url = '/docs/json/salchipapas.json';

    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            // console.log(data);
            cargarSalchipapas(data);
            GlobalData = data;
        })
        .catch((error => {
            console.log(error);
        }))
}

const containerProductos = document.querySelector('.productos-container');

//funcion para cargar dinamicamente los elementos del json
function cargarSalchipapas(data) {
    containerProductos.innerHTML = "";
    // console.log(data);
    data.forEach((dat) => {
        // console.log(dat);
        const div = document.createElement('div');
        div.classList.add('col-12', 'col-lg-6', 'col-md-6', 'col-xxl-4');
        //estructura del card con el producto
        div.innerHTML = `<div class="card" style="width: 100%;">
                            <div class="card-body">
                                <h4 class="card-title "><b>${dat.nombre}</b></h4>
                                <p class="card-text ">${dat.ingredientes}</p>
                                <h4 class="card-title price"><b>${dat.Precio}</b> <a href="#" class="btn btn-danger priceBtn" data-bs-toggle="modal"
                                data-bs-target="#modal2">Ver</a></h4>
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


//La línea window.onscroll es un evento que se activa cuando ocurre un evento de desplazamiento en la ventana del navegador.
// La ventana (window) es el objeto global de JavaScript que representa la ventana actual del navegador. El evento onscroll 
//se utiliza para detectar cuándo el usuario realiza un desplazamiento vertical en la página web, es decir, cuando se desplaza hacia arriba o hacia abajo.
window.onscroll = function () {
    var scrollTopButton = document.querySelector(".scroll-to-top"); //tomo el elemento al cual le voy a quitar o poner el display
    //obtiene la cantidad de píxeles por los que se ha desplazado la página verticalmente
    if (document.documentElement.scrollTop > 150) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
};

//evento para llenar la info del btn ver
const prodContainer = document.querySelector(".productos-container");

prodContainer.addEventListener('click',function(e){
    e.preventDefault();
    //verifica que el elemento clickeado sea el btn, de otra manera lo saca de la función
    if(e.target.classList.contains('btn')){
        const title = e.target.parentElement.parentElement.children[0].children[0].innerHTML;
        const ingredientes = e.target.parentElement.parentElement.children[1].innerHTML;
        const precio = e.target.parentElement.parentElement.children[2].children[0].innerHTML;
        
        const titleTag = document.querySelector(".nombre");
        const ingredientesTag = document.querySelector(".ingredientes");
        const precioTag = document.querySelector(".priceVer");
        const comboPetTag = document.querySelector(".comboPet");
        const comboJugoTag = document.querySelector(".comboJugo");

        //le quito al precio el $ para poder sumarlo y lo multiplico por mil para que de el precio q es, le agg al final de nuevo$
        const precioNumbPet ='$'+(parseFloat(precio.substring(1)) + 3)*1000;
        const precioNumbPuntoPet = precioNumbPet.slice(0,3)+'.000'; //agg el punto
        const precioNumbJugo = '$'+(parseFloat(precio.substring(1)) + 6)*1000;
        const precioNumbPuntoJugo = precioNumbJugo.slice(0,3)+'.000';

        titleTag.innerHTML = title;
        ingredientesTag.innerHTML = ingredientes;
        precioTag.innerHTML = precio;
        comboPetTag.children[0].innerHTML = precioNumbPuntoPet;
        comboJugoTag.children[0].innerHTML = precioNumbPuntoJugo;
    }
})

//botones que filtran*****

//funcion para mostrar todos nuevamente
const btnTodos = document.querySelector(".btnTodos");
const linkTodos = document.querySelector(".linkTodos");

btnTodos.addEventListener('click',function(){
    cargarSalchipapas(GlobalData); //envio a la función principal los elementos del json guardados en la var global
});

linkTodos.addEventListener('click',function(){
    cargarSalchipapas(GlobalData);
})

//función para mostrar solo productos con salchicha y chorizo
const btnSalchichaChorizo = document.querySelector(".btnSalchichaChorizo");
const linkSalchichaChorizo = document.querySelector(".linkSalchichaChorizo");

function cargarSalchichasChorizos(GlobalData) {
    containerProductos.innerHTML = "";
    for (let i = 0; i <= 7 - 1; i++) { //Recorre hasta el agua
        const div = document.createElement('div');
        div.classList.add('col-12', 'col-lg-6', 'col-md-6', 'col-xxl-4');
        div.innerHTML = `<div class="card" style="width: 100%;">
                            <div class="card-body">
                                <h4 class="card-title "><b>${GlobalData[i].nombre}</b></h4>
                                <p class="card-text ">${GlobalData[i].ingredientes}</p>
                                <h4 class="card-title price"><b>${GlobalData[i].Precio}</b> <a href="#" class="btn btn-danger priceBtn" data-bs-toggle="modal"
                                data-bs-target="#modal2">Ver</a></h4>
                            </div>
                        </div>`;

        containerProductos.appendChild(div);
    }
}

btnSalchichaChorizo.addEventListener('click', function () {
    cargarSalchichasChorizos(GlobalData);
});

linkSalchichaChorizo.addEventListener('click',function(){
    cargarSalchichasChorizos(GlobalData);
});

//función para mostrar solo papas locas
const btnPapasLocas = document.querySelector(".btnPapasLocas");
const linkPapasLocas = document.querySelector(".linkPapasLocas");

function cargarPapasLocas(GlobalData) {
    containerProductos.innerHTML = "";
    for (let i = 7; i <= 13 - 1; i++) { //Recorre hasta el agua
        const div = document.createElement('div');
        div.classList.add('col-12', 'col-lg-6', 'col-md-6', 'col-xxl-4');
        div.innerHTML = `<div class="card" style="width: 100%;">
                            <div class="card-body">
                                <h4 class="card-title "><b>${GlobalData[i].nombre}</b></h4>
                                <p class="card-text ">${GlobalData[i].ingredientes}</p>
                                <h4 class="card-title price"><b>${GlobalData[i].Precio}</b> <a href="#" class="btn btn-danger priceBtn" data-bs-toggle="modal"
                                data-bs-target="#modal2">Ver</a></h4>
                            </div>
                        </div>`;

        containerProductos.appendChild(div);
    }
}

btnPapasLocas.addEventListener('click', function() {
    cargarPapasLocas(GlobalData);
});

linkPapasLocas.addEventListener('click',function(){
    cargarPapasLocas(GlobalData);
});

//función para mostrar solo desgranados
const btnDesgranados = document.querySelector(".btnDesgranados");
const linkDesgranados = document.querySelector(".linkDesgranados");

function cargarDesgranados(GlobalData) {
    containerProductos.innerHTML = "";
    for (let i = 13; i <= 15 - 1; i++) { //Recorre hasta el agua
        const div = document.createElement('div');
        div.classList.add('col-12', 'col-lg-6', 'col-md-6', 'col-xxl-4');
        div.innerHTML = `<div class="card" style="width: 100%;">
                            <div class="card-body">
                                <h4 class="card-title "><b>${GlobalData[i].nombre}</b></h4>
                                <p class="card-text ">${GlobalData[i].ingredientes}</p>
                                <h4 class="card-title price"><b>${GlobalData[i].Precio}</b> <a href="#" class="btn btn-danger priceBtn" data-bs-toggle="modal"
                                data-bs-target="#modal2">Ver</a></h4>
                            </div>
                        </div>`;

        containerProductos.appendChild(div);
    }
}

btnDesgranados.addEventListener('click', function() {
    cargarDesgranados(GlobalData);
});

linkDesgranados.addEventListener('click',function(){
    cargarDesgranados(GlobalData);
});

const hTodos = document.querySelector(".linkTodos");
const hSalchichaChorizo = document.querySelector(".linkSalchichaChorizo");
const hPapasLocas = document.querySelector(".linkPapasLocas");
const hDesgranados = document.querySelector(".linkDesgranados");
const hAdicionales = document.querySelector(".linkAdicionales");
const linkAdicionales = document.querySelector(".linkAdicionales");

// Función para manejar el clic en botones
function manejarClicBoton(elemento) {
    // Eliminar la clase 'clickeado' de todos los botones y enlaces
    hTodos.classList.remove("clickeado");
    hSalchichaChorizo.classList.remove("clickeado");
    hPapasLocas.classList.remove("clickeado");
    hDesgranados.classList.remove("clickeado");
    hAdicionales.classList.remove("clickeado");
  
    // Agregar la clase 'clickeado' al botón o enlace clickeado
    elemento.classList.add("clickeado");
}

linkTodos.addEventListener('click',function(){
    manejarClicBoton(hTodos);
})
linkSalchichaChorizo.addEventListener('click',function(){
    manejarClicBoton(hSalchichaChorizo);
})
linkPapasLocas.addEventListener('click',function(){
    manejarClicBoton(hPapasLocas);
})
linkDesgranados.addEventListener('click',function(){
    manejarClicBoton(hDesgranados);
})
linkAdicionales.addEventListener('click',function(){
    manejarClicBoton(hAdicionales);
})
