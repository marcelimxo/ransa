const Order = (Claro, call) => {
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

  // Primero creamos la referencia al documento
  const ref01 = firebase.firestore().collection('Orders').doc('BAT000001');
  // Despues, seteamos cada referencia
  batch.set(ref01, {
    asignacion: {automatico: true},
    client: 'Claro',
    date_created: new Date(2019, 10, 14, 11, 15, 11),
    total_km: 8,
    status: 'buscando',
    delivery_type: 'express',
    car_type: 3,
  });

  const ref02 = firebase.firestore().collection('Orders').doc('BAT000002');
  batch.set(ref02,{
    asignacion: {automatico: true},
    cliente: 'Claro',
    date_created: new Date(2019, 10, 14, 15, 30, 25),
    total_km: 10,
    status: 'buscando',
    delivery_type: 'express',
    car_type: 3,
  });

  const ref03 = firebase.firestore().collection('Orders').doc('BAT000003');
  batch.set(ref03,{
    asignacion: {automatico: true},
    cliente: 'Claro',
    date_created: new Date(2019, 10, 14, 10, 33, 30),
    total_km: 7,
    status: 'buscando',
    delivery_type: 'express',
    car_type: 3,
  });

  const ref04 = firebase.firestore().collection('Orders').doc('BAT000004');
  batch.set(ref04,{
    asignacion: {automatico: true},
    cliente: 'Claro',
    date_created: new Date(2019, 10, 12, 18, 20, 30),
    total_km: 5,
    status: 'fallido',
    delivery_type: 'express',
    car_type: 2,
    operator:'Glovo',
  });

  const ref05 = firebase.firestore().collection('Orders').doc('BAT000005');
  batch.set(ref05,{
    asignacion: {automatico: true},
    cliente: 'Claro',
    date_created:  new Date(2019, 10, 11, 14, 10, 14),
    total_km: 5,
    status: 'fallido',
    delivery_type: 'sameday',
    car_type: 2,
    operator:'Glovo',
  });

  const ref06 = firebase.firestore().collection('Orders').doc('BAT000006');
  batch.set(ref06,{
    asignacion: {manual: true},
    cliente: 'Claro',
    date_created:  new Date(2019, 10, 14, 15, 10, 39),
    total_km: 6,
    status: 'buscando',
    delivery_type: 'programado',
    car_type: 1,
    operator:'Urbaner',
  }); 

  const ref07 = firebase.firestore().collection('Orders').doc('BAT000007');
  batch.set(ref07,{
    asignacion: {automatico: true},
    cliente: 'Claro',
    date_created:  new Date(2019, 10, 14, 15, 30, 12),
    total_km: 3,
    status: 'por entregar',
    delivery_type: 'express',
    car_type: 1,
    operator:'Urbaner',
  });
  
  const ref08 = firebase.firestore().collection('Orders').doc('BAT000008');
  batch.set(ref08,{
    asignacion: {automatico: true},
    cliente: 'Claro',
    date_created:  new Date(2019, 10, 15, 17, 30, 20),
    total_km: 3,
    status: 'por entregar',
    delivery_type: 'next day',
    car_type: 2,
    operator:'Urbaner',
  });

  // Commit the batch
  batch.commit().then(function () {
    console.log('entro mucha data');
  });
};



export  {Order, getOrders, batchInsert};
