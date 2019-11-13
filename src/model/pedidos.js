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

const insertOrder = ()=>{
  return firebase.firestore().collection('Orders').doc('BAT000002').set({
    name: 'Los Angeles',
    state: 'CA',
    country: 'USA'
  })
    .then(function() {
      console.log('Document successfully written!');
    })
    .catch(function(error) {
      console.error('Error writing document: ', error);
    });
};

const batchInsert = ()=>{
  // Set the value of 'NYC'
  const ref01 = firebase.firestore().collection('Orders').doc('BAT000001');

  console.log('ref01 :', ref01);

  firebase.firestore().collection('Orders').batch().set(ref01, {
    asignacion: {automatico: true},
    client: 'Claro',
    date_created: firebase.firestore.FieldValue.serverTimestamp().now(),
    total_km: 8,
    status: 'buscando',
    delivery_type: 'express',
    car_type: 3,
  });

  // Commit the batch
  firebase.firestore().collection('Orders').batch().commit().then(function () {
    console.log('entro mucha data');
  });
};



export  {Order, getOrders, insertOrder, batchInsert};
