
const getOperadores = () => {
    return  firebase.firestore().collection('Proveedores').get().then((docs) => {
      return docs.docs.map(el => el.data());
  
    });
  };
  
  
  const singleOperador = (operador)=>{ 
  
    return firebase.firestore().collection('Proveedores').where('name', '==', operador)
      .get()
      .then(doc => {
        return   doc.docs[0].data();
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error);
      });
  
  };
  
  
  export { getOperadores, singleOperador };