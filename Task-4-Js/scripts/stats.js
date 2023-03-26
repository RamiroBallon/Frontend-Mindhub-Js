const urlApi = "https://mindhub-xj03.onrender.com/api/amazing"
// let data = {}
let currentDate = []
let events = []
let error = 'ha ocurrido un error'

// async function getData() {
//     try {
//         const response = await fetch(urlApi)
//         // console.log('response:', response)
//         const data = await response.json()
//         // console.log('data.results:',data.events);

//         console.log('data:', data);
//         events = data.events;
//         currentDate = data.currentDate;

//         console.log('events:', events)
//         console.log('currentDate:', currentDate)


//     }
//     catch {
//         console.log(error);
//     }
// }
// getData()

async function obtenerPorcentajeAsistencia() {
  try {
    const response = await fetch(urlApi);
    const data = await response.json();
    events = data.events;
    currentDate = data.currentDate;

    ///////////TABLA 1///////////
    //obtengo los eventos pasados para calcular la asistencia
    const pastEvents = events.filter((evento) => {
      const eventDate = new Date(evento.date); //new Date() convierte las fechas de tipo string en objetos Date, se puede hacer igual como strings
      return eventDate < new Date(currentDate);
    });
    console.log("Eventos pasados:", pastEvents);

    // Calcular el porcentaje de asistencia para cada evento
    pastEvents.forEach((evento) => {
      const porcentajeAsistencia = (evento.assistance / evento.capacity) * 100;
      evento.porcentajeAsistencia = porcentajeAsistencia
      // console.log(`"${evento.name}" porcentaje de asistencia del ${porcentajeAsistencia.toFixed(2)}%.`);
    });

    //  Calcular el porcentaje de asistencia para cada evento con for
    //  for (let i = 0; i < events.length; i++) {
    //   const event = events[i]
    //   const porcentajeAsistencia = (event.assistance / event.capacity) * 100
    //   event.porcentajeAsistencia = porcentajeAsistencia
    //   // console.log(event)
    // }

    // Obtener el evento con el mayor y menor porcentaje de asistencia
    pastEvents.sort((a, b) => a.porcentajeAsistencia - b.porcentajeAsistencia)
    const lowestAttendanceEvent = pastEvents[0]
    pastEvents.sort((a, b) => b.porcentajeAsistencia - a.porcentajeAsistencia)
    const highestAttendanceEvent = pastEvents[0]

    // console.log('Porcentaje de asistencia:', events.map(event => `${event.name}: ${event.porcentajeAsistencia.toFixed(2)}%`).join(', '))
    // console.log('Evento con mayor porcentaje de asistencia:', highestAttendanceEvent.name, `(${highestAttendanceEvent.porcentajeAsistencia.toFixed(2)}%)`)
    // console.log('Evento con menor porcentaje de asistencia:', lowestAttendanceEvent.name, `(${lowestAttendanceEvent.porcentajeAsistencia.toFixed(2)}%)`)

    //obtener las capacidades de cada evento
    let capacidades = events.map((event) => {
      // return event.capacity;
      return { name: event.name, capacity: event.capacity };
    });
    // console.log('capacidades:', capacidades);

    //Evento con mayor capacidad
    events.sort((a, b) => b.capacity - a.capacity);
    const largestCapacityEvent = events[0];
    // console.log('Evento con mayor capacidad:', largestCapacityEvent.name, `(${largestCapacityEvent.capacity})`);





    //////////////////TABLA 2///////////////////////
    //Fila 1: CATEGORIAS
    //obtengo los eventos futuros
    const upcomingEvents = events.filter((evento) => {
      const eventDate = new Date(evento.date); //new Date() convierte las fechas de tipo string en objetos Date, se puede hacer igual como strings
      return eventDate > new Date(currentDate);
    });
    console.log("Eventos futuros:", upcomingEvents);

    //obtengo las categorias
    let categoriasU = upcomingEvents.map((event) => {
      return { name: event.name, categoria: event.category };
    });
    console.log('categorias eventos futuros:', categoriasU);

    // Obtener categorías sin repetir
    let categoriasSinRepetirEventosFuturos = [...new Set(categoriasU.map((categoria) => categoria.categoria))];
    //operador spread, operador de propagación (...) => convierte el Set de nuevo a un array
    //Los objetos Set son colecciones de valores únicos
    console.log('Categorías sin repetir(eventos futuros):', categoriasSinRepetirEventosFuturos);

    //ordenar categorias
    const categoriasSinRepetirOrdenadasUpcomingEvents = categoriasSinRepetirEventosFuturos.sort((a,b) => a.localeCompare(b)) //en lugar del operador '-' utilizo localeCompare, porque '-' esta ordenando en funcion a su valor numerico. localeCompare para comparar las cadenas de texto que rep. las categorias
    console.log('categoriasSinRepetirOrdenadasUpcomingEvents', categoriasSinRepetirOrdenadasUpcomingEvents)

    // //funcion para pintar las categorias
    // function UpcomingEventsCategory(categoriasSinRepetir) {
    //   const tablaCategorias = document.getElementById('tabla2');
    //   let filas = '';
    //   categoriasSinRepetir.forEach(categoria => {
    //     filas += `<tr><td>${categoria}</td></tr>`;
    //   });
    //   // for (let i = 0; i < categoriasSinRepetir.length; i++) {
    //   //   filas += `<tr><td>${categoriasSinRepetir[i]}</td></tr>`;
    //   // }
    //   tablaCategorias.innerHTML = filas
    // }
    // UpcomingEventsCategory(categoriasSinRepetir)


    //Fila 2: GANANCIAS

    // let gananciasPorCategoria = categorias.assistance * categorias.price
    // Agrupar los eventos por categoría y sumar las ganancias
let gananciasPorCategoriaUpcomingEvents = upcomingEvents.reduce((acumulador, event) => {
  if (!acumulador[event.category]) { 
    //si la categoria del evento actual no existe como propiedad del objeto 'acumulador' se crea un valor 0, luego se actualiza el valor de la propiedad sumandole el producto de price y estimate
    acumulador[event.category] = 0;
  }
  acumulador[event.category] += event.price * event.estimate;
  return acumulador;
}, {});

// Convertir el objeto en un array de objetos con las categorías y las ganancias
let gananciasPorCategoriaUpcomingEventsArray = Object.keys(gananciasPorCategoriaUpcomingEvents).map(categoria => {  
  //'object.keys'método que devuelve un array con las propiedades del objeto.
  return { categoria, ganancias: gananciasPorCategoriaUpcomingEvents[categoria] };
});

 //ordenar ganancias
 const gananciasCategoriaOrdenadasUpcomingEvents = gananciasPorCategoriaUpcomingEventsArray.sort((a,b) => a.categoria.localeCompare(b.categoria))
console.log('ganancias por categorias ordenadas de eventos futuros:', gananciasCategoriaOrdenadasUpcomingEvents);

  //  //funcion para pintar las ganancias
  //  function UpcomingEventsRevenues(gananciasPorCategoriaArray) {
  //   const tablaGanancias = document.getElementById('tabla2');
  //   let filas = '';
  //   gananciasPorCategoriaArray.forEach(ganancias => {
  //     filas += `<tr><td>${ganancias.ganancias}</td></tr>`;
  //   });
  
  //   tablaGanancias.innerHTML = filas
  // }
  // UpcomingEventsRevenues(gananciasPorCategoriaArray)


  //Fila 3: PORCENTAJE DE ASISTENCIA

  //porcentaje de asistencia manera 1
  let porcentajeAsistenciaEventosFuturos = upcomingEvents.reduce((acumulador, event) => {
    if (!acumulador[event.category]) { 
      //si la categoria del evento actual no existe como propiedad del objeto 'acumulador' se crea un valor 0, luego se actualiza el valor de la propiedad sumandole el producto de price y estimate
      acumulador[event.category] = { total: 0, count: 0 };
    }
    acumulador[event.category].total += (event.estimate / event.capacity) * 100;
    acumulador[event.category].count++; //cantidad de eventos de la categoria
    return acumulador;
  }, {});

  let porcentajeAsistenciaPromedioOrdenadoUpcomingEvents = {};
for (let categoria in porcentajeAsistenciaEventosFuturos) {
  let total = porcentajeAsistenciaEventosFuturos[categoria].total;
  let count = porcentajeAsistenciaEventosFuturos[categoria].count;
  porcentajeAsistenciaPromedioOrdenadoUpcomingEvents[categoria] = (total / count).toFixed(2);
}

  console.log('porcentajeAsistenciaPromedioOrdenadoUpcomingEvents:',porcentajeAsistenciaPromedioOrdenadoUpcomingEvents)





//   //porcentaje de asistencia manera 2
//   //objeto con la suma de la asistencia y la capacidad de cada categoría
// let sumasAsistenciaCapacidad = upcomingEvents.reduce((acumulador, event) => {
//   if (!acumulador[event.category]) {
//     acumulador[event.category] = { asistencia: 0, capacidad: 0 };
//   }
//   acumulador[event.category].asistencia += event.estimate;
//   acumulador[event.category].capacidad += event.capacity;
//   return acumulador;
// }, {});
// console.log('sumaAsistenciaCapacidad:',sumasAsistenciaCapacidad)

// //objeto con el promedio de asistencia de cada categoría
// let promediosAsistencia = {};
// Object.keys(sumasAsistenciaCapacidad).forEach((categoria) => {
//   promediosAsistencia[categoria] = ((sumasAsistenciaCapacidad[categoria].asistencia / sumasAsistenciaCapacidad[categoria].capacidad) * 100).toFixed(2);
// });

// console.log('promedioAsistencia',promediosAsistencia);







    //////////////////TABLA 3///////////////////////
    //Fila 1: CATEGORIAS
    //obtengo los eventos pasados
    const PastEvents = events.filter((evento) => {
      const eventDate = new Date(evento.date); //new Date() convierte las fechas de tipo string en objetos Date, se puede hacer igual como strings
      return eventDate < new Date(currentDate);
    });
    console.log("Eventos pasados:", PastEvents);

    //obtengo las categorias
    let categorias = PastEvents.map((event) => {
      return { name: event.name, categoria: event.category };
    });
    console.log('categorias:', categorias);

    // Obtener categorías sin repetir
    let categoriasSinRepetir = [...new Set(categorias.map((categoria) => categoria.categoria))];
    //operador spread, operador de propagación (...) => convierte el Set de nuevo a un array
    //Los objetos Set son colecciones de valores únicos
    console.log('Categorías sin repetir:', categoriasSinRepetir);

    //ordenar categorias
    const categoriasSinRepetirOrdenadas = categoriasSinRepetir.sort((a,b) => a.localeCompare(b)) //en lugar del operador '-' utilizo localeCompare, porque '-' esta ordenando en funcion a su valor numerico. localeCompare para comparar las cadenas de texto que rep. las categorias
    console.log('categoriasSinRepetirOrdenadas', categoriasSinRepetirOrdenadas)



    //Fila 2: GANANCIAS

    // let gananciasPorCategoria = categorias.assistance * categorias.price
    // Agrupar los eventos por categoría y sumar las ganancias
let gananciasPorCategoria = PastEvents.reduce((acumulador, event) => {
  if (!acumulador[event.category]) { 
    //si la categoria del evento actual no existe como propiedad del objeto 'acumulador' se crea un valor 0, luego se actualiza el valor de la propiedad sumandole el producto de price y estimate
    acumulador[event.category] = 0;
  }
  acumulador[event.category] += event.price * event.assistance;
  return acumulador;
}, {});

// Convertir el objeto en un array de objetos con las categorías y las ganancias
let gananciasPorCategoriaArray = Object.keys(gananciasPorCategoria).map(categoria => {  
  //'object.keys'método que devuelve un array con las propiedades del objeto.
  return { categoria, ganancias: gananciasPorCategoria[categoria] };
});

 //ordenar ganancias
 const gananciasCategoriaOrdenadas = gananciasPorCategoriaArray.sort((a,b) => a.categoria.localeCompare(b.categoria))
console.log('ganancias por categorias ordenadas:', gananciasCategoriaOrdenadas);



  //Fila 3: PORCENTAJE DE ASISTENCIA

  //porcentaje de asistencia manera 1
  let porcentajeAsistenciaEventosPasados = PastEvents.reduce((acumulador, event) => {
    if (!acumulador[event.category]) { 
      //si la categoria del evento actual no existe como propiedad del objeto 'acumulador' se crea un valor 0, luego se actualiza el valor de la propiedad sumandole el producto de price y estimate
      acumulador[event.category] = { total: 0, count: 0 };
    }
    acumulador[event.category].total += (event.assistance / event.capacity) * 100;
    acumulador[event.category].count++; //cantidad de eventos de la categoria
    return acumulador;
  }, {});

  let porcentajeAsistenciaPromedioOrdenado = {};
for (let categoria in porcentajeAsistenciaEventosPasados) {
  let total = porcentajeAsistenciaEventosPasados[categoria].total;
  let count = porcentajeAsistenciaEventosPasados[categoria].count;
  porcentajeAsistenciaPromedioOrdenado[categoria] = (total / count).toFixed(2);
}

  console.log('porcentajeAsistenciaPromedioOrdenado:',porcentajeAsistenciaPromedioOrdenado)




   //llamada a funciones
   //primer tabla
    eventsStatistics(highestAttendanceEvent, lowestAttendanceEvent, largestCapacityEvent)
    //Segunda tabla 
    upcomingEventsTable(categoriasSinRepetirOrdenadasUpcomingEvents, gananciasCategoriaOrdenadasUpcomingEvents, porcentajeAsistenciaPromedioOrdenadoUpcomingEvents);
    // //tercer tabla
    pastEventsTable(categoriasSinRepetirOrdenadas, gananciasCategoriaOrdenadas, porcentajeAsistenciaPromedioOrdenado);


  } catch (error) {
    console.log("Ha ocurrido un error al obtener los datos:", error);
  }
}
obtenerPorcentajeAsistencia();



//funcion para obtener los datos de la primer tabla
function eventsStatistics(highestAttendanceEvent, lowestAttendanceEvent, largestCapacityEvent) {
  const eventoMayorPorcentajeAsistencia = document.getElementById('highestAttendanceEvent');
  const eventoMenorPorcentajeAsistenica = document.getElementById('lowestAttendanceEvent');
  const eventoMayorCapacidad = document.getElementById('largestCapacityEvent');

  let tablaMayor = '';
  tablaMayor += `<td id="highestAttendanceEvent">${highestAttendanceEvent.name} (${highestAttendanceEvent.porcentajeAsistencia.toFixed(2)}%)</td>`;
  eventoMayorPorcentajeAsistencia.innerHTML = tablaMayor;

  let tablaMenor = '';
  tablaMenor += `<td id="lowestAttendanceEvent">${lowestAttendanceEvent.name} (${lowestAttendanceEvent.porcentajeAsistencia.toFixed(2)}%)</td>`;
  eventoMenorPorcentajeAsistenica.innerHTML = tablaMenor;

  let tablaMayorCapacidad = '';
  tablaMayorCapacidad += `<td id="largestCapacityEvent">${largestCapacityEvent.name} (${largestCapacityEvent.capacity})</td>`;
  eventoMayorCapacidad.innerHTML = tablaMayorCapacidad;
}


//funcion obtener y pintar las categorias (2da tabla)
   //funcion para pintar tabla 2 eventos futuros
   function upcomingEventsTable(categorias, ganancias, porcentaje) {
    let container = document.getElementById("tabla2");
    let tableBodyHTML = "";
    for (let i = 0; i < categorias.length; i++) {
      let ganancia = ganancias.find(ganancia => ganancia.categoria === categorias[i]).ganancias;
      tableBodyHTML += `<tr>
        <td class="t1">${categorias[i]}</td>
        <td class="t2">$${ganancia}</td>
        <td class="t3">${porcentaje[categorias[i]]}%</td>
      </tr>`;
    }
    container.innerHTML = tableBodyHTML;
  }


     //funcion para pintar tabla 3 eventos futuros
     function pastEventsTable(categorias, ganancias, porcentaje) {
      let container = document.getElementById("tabla3");
      let tableBodyHTML = "";
      for (let i = 0; i < categorias.length; i++) {
        let ganancia = ganancias.find(ganancia => ganancia.categoria === categorias[i]).ganancias;
        tableBodyHTML += `<tr>
          <td class="t1">${categorias[i]}</td>
          <td class="t2">$${ganancia}</td>
          <td class="t3">${porcentaje[categorias[i]]}%</td>
        </tr>`;
      }
      container.innerHTML = tableBodyHTML;
    }

















































  //array porcentajes de asistencia para cada evento
  // const porcentajeAsistencia = events.map((evento) => {
  //   return (evento.assistance / evento.capacity) * 100;
  // });

  // //evento con mayor y menor porcentaje de asistencia
  // const maxPercentage = Math.max(...porcentajeAsistencia);
  // const minPercentage = Math.min(...porcentajeAsistencia);

  // const highestAttendanceEvent = events.find((evento) => {
  //   return (evento.assistance / evento.capacity) * 100 === maxPercentage;
  // });

  // const lowestAttendanceEvent = events.find((evento) => {
  //   return (evento.assistance / evento.capacity) * 100 === minPercentage;
  // });

  // console.log(porcentajeAsistencia)
  // console.log(highestAttendanceEvent)

  // console.log('Evento con mayor porcentaje de asistencia:', highestAttendanceEvent.name, `(${maxPercentage.toFixed(2)}%)`);
  // console.log('Evento con menor porcentaje de asistencia:', lowestAttendanceEvent.name, `(${minPercentage.toFixed(2)}%)`);