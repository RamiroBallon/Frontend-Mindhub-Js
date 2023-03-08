console.log("Script is working")
const contenedorElementos=document.querySelector("#contenedor-cards") /*getElementById(contenedor-cards)*/ 
const events=data.events
const currentDate=data.currentDate


console.log(contenedorElementos)
console.log(events)
console.log(currentDate)

mostrarTarjetas(events, contenedorElementos)

function mostrarTarjetas(arrayDatos, contenedor) {
    let tarjetas = ""
    for (let event of arrayDatos) {
        if (event.date < currentDate) {
            tarjetas += `<div class="col-3">
            <div class="card" style="width: 18rem;">
                <img src="${event.image}" class="card-img-top img-fluid" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text">${event.description}</p>
                    <div class="info-adicional">
                                <p>Date: ${event.date}</p>
                                <p>Place: ${event.place}</p>
                            </div>
                    <p class="precio">Price: $${event.price}</p>
                    <a href="details.html" class="btn btn-primary">More info</a>
                </div>
            </div>
        </div>`
        }
    }
    contenedor.innerHTML=tarjetas
}














// let eventosPasados= ""
// function pastEvent(events) {
//     for (let i=0; i < events.length; i++){
//         if (events[i].date<currentDate){
//             eventosPasados.push(events[i])
//         }
//     }
// }