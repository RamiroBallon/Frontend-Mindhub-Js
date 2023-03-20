const queryString = location.search;//accedemos a las propiedad location del document
const params = new URLSearchParams(queryString);//interfaz que nos va a permitir a travez de metodos poder acceder y poder obtener los querystring de un sitio web/ruta, los valores consultas que se hacen al sitio web
const eventoId = params.get("id");//devuelve una cadena
// const numeroEventoId = parseInt(eventoId); //convierte de cadena a numero

console.log('queryString:', queryString)
console.log('params:', params)
console.log('eventoId:', eventoId)


// const evento = data.events.find(evento => evento._id == numeroEventoId);
// const evento = data.events.find(evento => evento._id.toString() === eventoId);
const evento = data.events.find(evento => evento._id == eventoId);
console.log('evento', evento)

contenedorCardsDetalladas(evento);

// contenedorCardsDetalladas(evento ? evento : null);

// if (eventoId !== null) {
//     const evento = data.events.find(evento => evento._id == eventoId);
//     contenedorCardsDetalladas(evento);
//   } else {
//     // Manejo del caso en que no hay un ID en la URL
//   }


function contenedorCardsDetalladas(evento) {
    let container = document.getElementById('contenedorCardsDetalladas');
    let card = '';
    card += `<div class="card card-details">
    <img src="./assets/Concierto de musica1.jpg" class="card-img-top img-fluid image" alt="...">
    <div class="card-body card-body-details">
        <h5 class="card-title name">${evento.name}</h5>
        <p class="description">${evento.description}</p>
        <div class="detalles">
            <p class="category">Category:${evento.category}</p>
            <p class="place">Place:${evento.place}</p>
            <p class="capacity">Capacity:${evento.capacity}</p>
            <p class="assistance">Assistance or stimate:${evento.assistance}</p>
            <p class="date">Date:${evento.date}</p>
        </div>
        <p class="price">Price: $${evento.price}</p>     
    
    <a href="index.html" class="volver" title="volver"><i class="fa-solid fa-xmark"></i></a>
</div>`;
    container.innerHTML = card;
}


// const dataEvents = data.events; 
// console.log("dataEvents:", dataEvents)
// const queryString = location.search;
// const params = new URLSearchParams(queryString);
// const eventoId = params.get('id');



// const element = dataEvents.find((element) => element._id == eventoId);

// // contenedorCardsDetalladas(evento);

// let paintCard = document.querySelectorAll("contenedorCardsDetalladas");

// paintCard.innerHTML += `
//               <div class="card" style="width: 18rem;">
//                 <img src="${element.image}" class="card-img-top" alt="">
//                   <div class="card-body">
//                     <h5 class="card-title">${element.name}</h5>
//                     <h6 class="cardCategories">${element.category}</h6>
//                      <p class="card-text">${element.description}</p>
//                      <div class="moreDetails">
//                      <div class="moreDetails1">
//                      <h6>Date:</h6>
//                      <p class="card-text">${element.date}</p>
//                      </div>
//                      <div class="moreDetails2">
//                      <h6>Place:</h6>
//                      <p class="card-text">${element.place}</p> 
//                      </div>   
//                      </div>              
//                   </div>
//              </div>`;











































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










