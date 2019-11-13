const Order = (Claro, call) => {
  console.log('holaaaaa');
  firebase.firestore()
    .collection('Orders')
    .where('client-name', '==', Claro)
    .onSnapshot(querySnapshot => {
      const array = [];
      querySnapshot.forEach(doc => {
        array.push({ id: doc.id, ...doc.data() });
      });
      console.log(call(array));
      call(array);
    });
};

const getOrders = () => {
  return  firebase.firestore().collection('Orders').get().then((docs) => {
    return docs.docs.map(el => el.data());

  });
};

const batchInsert = ()=>{

  // Get a new write batch
  const batch = firebase.firestore().batch();

  /* 
  


5:
asignacion: {manual: true}
cliente-name: "claro"
codigo-batuta: "BAT0000006"
codigo-operador: "URBANER03"
detalle-de-entrega-final: "efectivo"
dimension: {alto: 14, ancho: 14, largo: 14}
fecha-de-entrega: uo {seconds: 1573830000, nanoseconds: 0}
fecha-de-pedido: uo {seconds: 1573675200, nanoseconds: 0}
km-recorridos: 6
status-de-entrega: "buscando"
tipo-de-pedido: "programado"
tipo-de-vehiculo: 1
__proto__: Object
6:
asignacion: {automatico: true}
cliente-namer: "claro"
codigo-batuta: "BAT0000007"
codigo-operador: "URBANER04"
detalle-de-la-entrega-final: "efectiva"
dimension: {alto: 13, ancho: 13, largo: 13}
fecha-de-entrega: uo {seconds: 1573854600, nanoseconds: 0}
fecha-de-pedido: uo {seconds: 1573761000, nanoseconds: 0}
km-recorridos: 3
status-de-entrega: "por entregar"
tarifa: 18.9
tipo-de-pedidos: "express"
tipo-de-vehiculo: 1
__proto__: Object
7:
client-name: "Claro"
detalle-de-entrega: "credito"
dimension: {alto: 30, ancho: 15, largo: 20}
estado: "pendiente"
fecha-de-pedido: uo {seconds: 1573616160, nanoseconds: 0}
horario-extraordinario: true
orden-de-entrega: uo {seconds: 1573655400, nanoseconds: 0}
order-type: "nextday"
tipo-vehiculo: "2"
ubicaciones: {destino: tl, origen: tl, ubigeo: "150141"}
zona-de-pedido: "1"
__proto__: Object
length: 8
__proto__: Array(0)

  */

  // Primero creamos la referencia al documento
  const ref01 = firebase.firestore().collection('Orders').doc('BAT000001');
  // Despues, seteamos cada referencia
  batch.set(ref01, {
    asignacion: {automatico: true},
    client: 'Claro',
    date_created: Date.now(),
    total_km: 8,
    status: 'buscando',
    delivery_type: 'express',
    car_type: 3,
  });
  const ref02 = firebase.firestore().collection('Orders').doc('BAT000002');
  batch.set(ref02,{
    asignacion: {automatico: true},
    cliente: 'Claro',
    date_created: Date.now(),
    total_km: 10,
    status: 'buscando',
    delivery_type: 'express',
    car_type: 3,
  });

  const ref03 = firebase.firestore().collection('Orders').doc('BAT000003');
  batch.set(ref03,{
    asignacion: {automatico: true},
    cliente: 'Claro',
    date_created: new Date(2019, 11, 10, 10, 33, 30),
    total_km: 7,
    status: 'buscando',
    delivery_type: 'express',
    car_type: 3,
  });
  const ref04 = firebase.firestore().collection('Orders').doc('BAT000004');
  batch.set(ref04,{
    asignacion: {automatico: true},
    cliente: 'Claro',
    date_created: new Date(2019, 11, 12, 18, 20, 30),
    total_km: 5,
    status: 'fallido',
    delivery_type: 'express',
    car_type: 2,
    operator:'Glovo'
  });
  const ref05 = firebase.firestore().collection('Orders').doc('BAT000005');
  batch.set(ref04,{
    asignacion: {automatico: true},
    cliente: 'Claro',
    date_created:  new Date(2019, 11, 10, 15, 10, 39),
    total_km: 5,
    status: 'fallido',
    delivery_type: 'sameday',
    car_type: 2,
    operator:'Glovo'
  });
      
  
  
  // estado: "entregado"



  

  
  // ubicaciones: {destino: tl, destino-ubigeo: 15064, origen: tl, origen-ubigeo: 15803}
  // zona-de-pedido: 1
  // __proto__: Object
    
  

  // Commit the batch
  batch.commit().then(function () {
    console.log('entro mucha data');
  });
};



export  {Order, getOrders, batchInsert};
