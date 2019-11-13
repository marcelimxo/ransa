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
    total_km: 8,
    status: 'buscando',
    delivery_type: 'express',
    car_type: 3,
  });
  // Commit the batch
  batch.commit().then(function () {
    console.log('entro mucha data');
  });
};



export  {Order, getOrders, batchInsert};
