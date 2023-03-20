///////CONSTANTES CAPTURADAS Y VARIABLESs////////////////
console.log("Eventos Pasados")
const contenedor=document.querySelector("#contenedor-cards") /*getElementById(contenedor-cards)*/ 
const events=data.events
const currentDate=data.currentDate
const contenedorchecks = document.getElementById('category')
const input = document.getElementById('input')


///////EVENTOS////////////

//evento del buscador
input.addEventListener('input', filtroCruzado)  // otro evento: keyup cuando presionan una tecla y la levantan ahi se escucha el evento y se ejecuta lo de abajo
console.log('escribiendo!')

//evento para los checkboxes
contenedorchecks.addEventListener('change',filtroCruzado)
console.log('estas seleccionando checks')


/////////////LLAMADAS A FUNCIONES///////////
mostrarCards(events)
crearCheckboxes(events)


//////FUNCIONES////////////
//usando forEach
function mostrarCards(arrayDatos){
    if(arrayDatos.length == 0){
        contenedor.innerHTML = "<h2 class='bg-danger text-white'>No hay coincidencias<h2>"
        return //corta la funcion
    } //aca podria poner un else en vez del return
    let tarjetas = ''
    arrayDatos.forEach(event => {
        if (event.date < currentDate) {
        tarjetas += //toma la variable y le asigna cada tarjeta, sin esto no funciona
        `<div class="col-3">
            <div class="card" style="width: 18rem;">
                <img src="${event.image}" class="card-img-top img-fluid" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text">${event.description}</p>
                    <div class="info-adicional">
                    <p>Date: ${event.date}</p>
                    <p>Place: ${event.place}</p>
                    <p>Category: ${event.category}</p>
                </div>
                    <p class="precio">Price: $${event.price}</p>
                    <a href="details.html?id=${event._id}" class="btn btn-primary">More info</a>
                </div>
            </div>
        </div>`
    }
    })
    contenedor.innerHTML = tarjetas
}

//funcion para filtrar/mostrar tarjetas segun el buscador  DEVUELVE UN ARRAY
function filtrarPorTexto(arrayDatos, texto){
    let arrayFiltrado = arrayDatos.filter(elemento => elemento.name.toLowerCase().includes(texto.toLowerCase()))
    return arrayFiltrado
} //arrayDatos es una variable, podria llamarse de cualquier manera

//funcion para crear los checks de categoria
function crearCheckboxes(arrayDatos){
    let checks = ''
    let categoriasRepetidas = arrayDatos.map(elemento => elemento.category)//.map un arrary de otro array. entra el array de eventos y sale el array de categorias, pero repetidas
    let categorias = new Set(categoriasRepetidas.sort((a,b)=>{ //devuelve las categorias pero no las repite //un set es un objeto o coleccion especial array que no admite elementos repetidos //sort para ordenar alfabeticamente 
        if(a>b){
            return 1
        }
        if(a<b){
            return -1
        }
        return 0
    }))
    categorias.forEach(categoria =>{
        checks += `<div>
        <label for="${categoria}">${categoria}</label>
        <input type="checkbox" class="valor" id="${categoria}" value="${categoria}">
    </div>`
    })
    contenedorchecks.innerHTML=checks
}

//funcion para filtrar segun el checkbox seleccionado  DEVUELVE UN ARRAY
function filtrarPorCategoria(arrayDatos){
    let checkboxes = document.querySelectorAll("input[type='checkbox']")
    console.log("checkboxes", checkboxes);
    //convertimos el NodeList a un array de checkboxes
    let arrayChecks = Array.from(checkboxes)
    console.log("arrayChecks",arrayChecks)
    let checkCheckeds = arrayChecks.filter(check => check.checked) //checket es un booleano. propiedad
    console.log("checkCheckeds", checkCheckeds); //consologea los checks que esten seleccionados
    if(checkCheckeds.length == 0){ //le agregamos un if para que me devuelva los objetos si no estan seleccionados los checks
        return arrayDatos
    }
    let checkValues = checkCheckeds.map(check => check.value)
    console.log("checkValues",checkValues);//devuelve un array de strings de los checkeds seleccionados
    let arrayFiltrado = arrayDatos.filter(elemento => checkValues.includes(elemento.category)) //comparo si las categorias coinciden con el cheked
    console.log(arrayFiltrado);//consologea un array con los objetos que coinciden con los checks seleccionados
    return arrayFiltrado
}

function filtroCruzado(){
    let arrayFiltrado1 = filtrarPorTexto(events, input.value)
    let arrayFiltradoPorCategoria = filtrarPorCategoria(arrayFiltrado1)
    mostrarCards(arrayFiltradoPorCategoria)
}



















// console.log("Script is working")
// const contenedorElementos=document.querySelector("#contenedor-cards") /*getElementById(contenedor-cards)*/ 
// const events=data.events
// const currentDate=data.currentDate


// console.log(contenedorElementos)
// console.log(events)
// console.log(currentDate)

// mostrarTarjetas(events, contenedorElementos)

// function mostrarTarjetas(arrayDatos, contenedor) {
//     let tarjetas = ""
//     for (let event of arrayDatos) {
//         if (event.date < currentDate) {
//             tarjetas += `<div class="col-3">
//             <div class="card" style="width: 18rem;">
//                 <img src="${event.image}" class="card-img-top img-fluid" alt="...">
//                 <div class="card-body">
//                     <h5 class="card-title">${event.name}</h5>
//                     <p class="card-text">${event.description}</p>
//                     <div class="info-adicional">
//                                 <p>Date: ${event.date}</p>
//                                 <p>Place: ${event.place}</p>
//                             </div>
//                     <p class="precio">Price: $${event.price}</p>
//                     <a href="details.html" class="btn btn-primary">More info</a>
//                 </div>
//             </div>
//         </div>`
//         }
//     }
//     contenedor.innerHTML=tarjetas
// }







// let eventosPasados= ""
// function pastEvent(events) {
//     for (let i=0; i < events.length; i++){
//         if (events[i].date<currentDate){
//             eventosPasados.push(events[i])
//         }
//     }
// }