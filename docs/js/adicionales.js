//1.voy a crear una funcion que agg dinamicamente los adicionales
//2.voy a exportar la función con js modules a los respectivos js
//3.llamo la funcion dentro de un domcontentloaded
const btnAdicionales = document.querySelector('.btnAdic');

btnAdicionales.addEventListener('click',conexionAdicionales());

function conexionAdicionales(){

    const url = '/docs/json/adicionales.json';

    fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        addAdicionales(data);
    })
    .catch((error)=>{
        console.log(error);
    })
}

function addAdicionales(data){
    const tbody = document.querySelector(".tbody");

    data.forEach((dat)=>{
        const tr = document.createElement('tr');
        tr.innerHTML = `<td class="tdAdic">
                            <p>${dat.nombre}</p> 
                            <p><b>${dat.Precio}</b></p>
                        </td>`;

        tbody.appendChild(tr);
    })
};