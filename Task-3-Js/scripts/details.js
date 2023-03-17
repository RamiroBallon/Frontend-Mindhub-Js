const queryString = location.search;
const params = new URLSearchParams(queryString);
const eventoId = params.get('id');

console.log ('queryString:', queryString)
console.log ('params:', params)
console.log ('eventoId:', eventoId)

const evento = data.events.find(evento => evento._id == eventoId);

contenedorCardsDetalladas(evento);




















// ///////CONSTANTES CAPTURADAS Y VARIABLES////////////////
// console.log("cards details")
// const contenedor=document.getElementById('contenedorCardsDetalladas') /*getElementById(contenedor-cards)*/ 
// const events=data.events
// // const currentDate=data.currentDate
// const contenedorchecks = document.getElementById('category')
// const input = document.getElementById('input')


// console.log("index=>cards:", contenedor)
// console.log("data.js=>events:", events)
// console.log("currentDate:", currentDate)

// ///////EVENTOS////////////



// /////////////LLAMADAS A FUNCIONES///////////
// mostrarCardsDetalladas(events)
// console.log('mostrarCardsDetalladas', mostrarCardsDetalladas)


//////FUNCIONES////////////
//usando forEach
// function mostrarCardsDetalladas(arrayDatos){
//     let tarjetas = ''
//     arrayDatos.forEach(event => {
//         if (event._id == )
//         tarjetas += //toma la variable y le asigna cada tarjeta, sin esto no funciona
//         `<div class="card card-details">
//         <img src="./assets/Concierto de musica1.jpg" class="card-img-top img-fluid image" alt="...">
//         <div class="card-body card-body-details">
//             <h5 class="card-title name">${event.name}</h5>
//             <p class="description">${event.description}.</p>
//             <div class="detalles">
//                 <p class="category">Category:${event.category}</p>
//                 <p class="place">Place:${event.place}</p>
//                 <p class="capacity">Capacity:${event.capacity}</p>
//                 <p class="assistance">Assistance or stimate:${event.assistance}</p>
//                 <p class="date">Date:${event.date}</p>
//             </div>
//             <p class="price">Price: ${event.price}</p>     
//         </div>
//         <a href="index.html" class="volver" title="volver"><i class="fa-solid fa-xmark"></i></a>
//     </div>`
//     })
//     contenedor.innerHTML = tarjetas
// }










