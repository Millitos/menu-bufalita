//loader
let body = document.querySelector('.hidden');
let loader = document.querySelector('.loader');


//funcion que carga el loader
document.addEventListener('DOMContentLoaded',function(){
    setTimeout(function(){
        loader.className = 'hide';
        body.classList.remove('hidden');
        // addAdicionales();
    },1000)
    
    //funcion que hace la conexion con el archivo json
    conexion();
    
})


//de esta manera agg los cards a cada div que se va agg dinamicamente 
const div = document.querySelector('.dj');
// div.innerHTML = 'test'; //agg card

function conexion(){

    const url = '/docs/json/perrosCalientes.json';

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

//funcion para cargar dinamicamente los elementos del json
function cargarHamburguesas(data){
    const containerProductos = document.querySelector('.productos-container');
    // console.log(data);
    data.forEach((dat)=>{
        // console.log(dat);
        const div = document.createElement('div');
        div.classList.add('col-12','col-lg-6','col-md-6','col-xxl-4');

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
window.onscroll = function() {
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