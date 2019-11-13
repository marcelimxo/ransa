

const getClients = () => {
  return  firebase.firestore().collection('Clients').get().then((docs) => {
    return docs.docs.map(el => el.data());

  });
};


const singleClient = (client)=>{ 

  return firebase.firestore().collection('Clients').where('name', '==', client)
    .get()
    .then(doc => {
      return   doc.docs[0].data();
    })
    .catch(function(error) {
      console.log('Error getting documents: ', error);
    });

};


export { getClients, singleClient };