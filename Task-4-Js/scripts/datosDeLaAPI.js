// const urlApi = "https://mindhub-xj03.onrender.com/api/amazing"
// // let data = {}
// let currentDate = []
// let events = []
// let error= 'ha ocurrido un error'
// let arrayEvents = [];


// async function getData() {
//     try {
//         const response = await fetch(urlApi)
//         // console.log('response:', response)
//         const data = await response.json()
//         // console.log('data.results:',data.events);

//         console.log('data:', data);
//         events = data.events;
//         currentDate = data.currentDate;

//         for (const event of events){
//                 arrayEvents.push(event)
//         }

//         console.log('events:', events)
//         console.log('currentDate:', currentDate)

//         mostrarCards(arrayEvents)
//         crearCheckboxes(events)
//     }
//     catch {
//         console.log(error);
//     }
// }
// getData()



// async function getDataPast() {
//     try {
//         const response = await fetch(urlApi)
//         // console.log('response:', response)
//         const data = await response.json()
//         // console.log('data.results:',data.events);

//         console.log('data:', data);
//         events = data.events;
//         currentDate = data.currentDate;

        // for (const event of events){
        //     if (event.date<currentDate){
        //         arrayEvents.push(event)
        //     }
        // }

//         console.log('events:', events)
//         console.log('currentDate:', currentDate)

//         mostrarCardsPasadas(arrayEvents)
//         crearCheckboxes(events)
//     }
//     catch {
//         console.log(error);
//     }
// }
// getDataPast()






