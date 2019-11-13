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



  const ref02 = firebase.firestore().collection('Orders').doc('BAT000002');
  batch.set(ref02,{
    codigo: 'BAT000002',
    asignacion: {automatico: true},
    cliente: 'Claro',
    date_created: new Date(2019, 10, 14, 15, 30, 25),
    date_programm: new Date(2019, 10, 14, 15, 45, 12),
    total_km: 10,
    status: 'buscando',
    delivery_type: 'express',
    car_type: 3,
    operator:'Glovo',
    destinos:{
      destino:{
        coordenadas:{
          longitud: new firebase.firestore.GeoPoint(3,4)
        },
        correo:'dayana02@gmail.com',
        direccion:'Av.Santa anita, Mz G lot-15',
        persona_contactos:'SAC Minka',                                              
        telefono: 996234543,
      },
      origen:{
        coordenadas:{
          longitud: new firebase.firestore.GeoPoint(1,2) 
        },
        correo: 'lucia@hotmail.com',
        direccion:'Av.Santa cruz # 3245',
        personal_contactos:'Lucia',
        telefono: 985456345,
      },
    },
  });

  const ref03 = firebase.firestore().collection('Orders').doc('BAT000003');
  batch.set(ref03,{
    codigo: 'BAT000003',
    asignacion: {automatico: true},
    cliente: 'Claro',
    date_created: new Date(2019, 10, 14, 10, 33, 30),
    date_programm: new Date(2019, 10, 14, 15, 11, 12),
    total_km: 7,
    status: 'buscando',
    delivery_type: 'express',
    car_type: 3,
    operator:'Urbaner',
    destinos:{
      destino:{
        coordenadas:{
          longitud: new firebase.firestore.GeoPoint(8,10)
        },
        correo:'lupo@gmail.com',
        direccion:'Av.Catalina #3452',
        persona_contactos:'Lupo',
        telefono: 956734123,
      },
      origen:{
        coordenadas:{
          longitud: new firebase.firestore.GeoPoint(11,34) 
        },
        correo:'jua01@hotmail.com',
        direccion:'Av.san juan # 987',
        personal_contactos: 'Juan',
        telefono:954628456,
      },
    },
  });

  const ref04 = firebase.firestore().collection('Orders').doc('BAT000004');
  batch.set(ref04,{
    codigo: 'BAT000004',
    asignacion: {automatico: true},
    cliente: 'Claro',
    date_created: new Date(2019, 10, 12, 18, 20, 30),
    date_programm: new Date(2019, 10, 12, 20, 10, 12),
    total_km: 5,
    status: 'fallido',
    delivery_type: 'express',
    car_type: 2,
    operator:'Glovo',
    destinos:{
      destino:{
        coordenadas:{
          longitud: new firebase.firestore.GeoPoint(23,45)
        },
        correo:'diana123@gmail.com',
        direccion:'Av, Miguel Grau #54',
        persona_contactos: 'Diana',
        telefono: 964734564,
      },
      origen:{
        coordenadas:{
          longitud: new firebase.firestore.GeoPoint(1,2) 
        },
        correo:'maryori@gmail.com',
        direccion:'v Jesus Maria',
        personal_contactos: 'Maria',
        telefono: 986564234
      },
    },
  });

  const ref05 = firebase.firestore().collection('Orders').doc('BAT000005');
  batch.set(ref05,{
    codigo: 'BAT000005',
    asignacion: {automatico: true},
    cliente: 'Claro',
    date_created:  new Date(2019, 10, 11, 14, 10, 14),
    date_programm: new Date(2019, 10, 13, 15, 10, 12),
    total_km: 5,
    status: 'fallido',
    delivery_type: 'sameday',
    car_type: 2,
    operator:'Glovo',
    destinos:{
      destino:{
        coordenadas:{
          longitud: new firebase.firestore.GeoPoint(3,4)
        },
        correo:'marcelo@hotmail.com',
        direccion:'Av.Barranco #879',
        persona_contactos:'Marcelo',
        telefono: 987345287,
      },
      origen:{
        coordenadas:{
          longitud: new firebase.firestore.GeoPoint(1,2) 
        },
        correo: 'giovana23@gmail.com',
        direccion:'Av.Javier Prado #675',
        personal_contactos: 'Giovana',
        telefono:4563245,
      },
    },
  });

  const ref06 = firebase.firestore().collection('Orders').doc('BAT000006');
  batch.set(ref06,{
    codigo: 'BAT000006',
    asignacion: {manual: true},
    cliente: 'Claro',
    date_created:  new Date(2019, 10, 14, 15, 10, 39),
    date_programm: new Date(programado),
    total_km: 6,
    status: 'buscando',
    delivery_type: 'programado',
    car_type: 1,
    operator:'Urbaner',
    destinos:{
      destino:{
        coordenadas:{
          longitud: new firebase.firestore.GeoPoint(3,4)
        },
        correo:'lucas123@hotmail.com',
        direccion:'Av. Ate-vitarte ',
        persona_contactos:'lucas',
        telefono:987564345,
      },
      origen:{
        coordenadas:{
          longitud: new firebase.firestore.GeoPoint(1,2) 
        },
        correo:'carlos23@hotmail.com',
        direccion:'Av.Centro de lima',
        personal_contactos:'Carlos',
        telefono:987345231,
      },
    },
  }); 

  const ref07 = firebase.firestore().collection('Orders').doc('BAT000007');
  batch.set(ref07,{
    asignacion: {automatico: true},
    codigo: 'BAT000007',
    cliente: 'Claro',
    date_created:  new Date(2019, 10, 14, 15, 30, 12),
    date_programm: new Date(2019, 10, 14, 15, 10, 12),
    total_km: 3,
    status: 'por entregar',
    delivery_type: 'express',
    car_type: 1,
    operator:'Urbaner',
    destinos:{
      destino:{
        coordenadas:{
          longitud: new firebase.firestore.GeoPoint(3,4)
        },
        correo:'carmen43*@hotmail.com',
        direccion:'Av.Canta Callao 1590',
        persona_contactos:'Carmen',
        telefono:987345231,
      },
      origen:{
        coordenadas:{
          longitud: new firebase.firestore.GeoPoint(1,2) 
        },
        correo:'lucas34@gmail.com',
        direccion:'Av.Magdalena  # 1585',
        personal_contactos:'Lucas',
        telefono:945342765,
      },
    },
  });
  
  const ref08 = firebase.firestore().collection('Orders').doc('BAT000008');
  batch.set(ref08,{
    codigo: 'BAT000008',
    asignacion: {automatico: true},
    cliente: 'Claro',
    date_created:  new Date(2019, 10, 15, 17, 30, 20),
    date_programm: new Date(2019, 10, 16, 15, 10, 12),
    total_km: 3,
    status: 'por entregar',
    delivery_type: 'next day',
    car_type: 2,
    operator:'Urbaner',
    destinos:{
      destino:{
        coordenadas:{
          longitud: new firebase.firestore.GeoPoint(3,4)
        },
        correo:'sara325@hotmail.com',
        direccion:'Av.Villa el Salvador',
        persona_contactos:'Sara',
        telefono:987564345
      },
      origen:{
        coordenadas:{
          longitud: new firebase.firestore.GeoPoint(1,2) 
        },
  
        correo:'jorge_453@hotmail.com',
        direccion:'Av.San Juan De Miraflores #456',
        personal_contactos:'Jorge',
        telefono:967534234,
      },
    },
  });

  // Commit the batch
  batch.commit().then(function () {
    console.log('entro mucha data');
  });
};



export  {Order, getOrders, batchInsert};
    