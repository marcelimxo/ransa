const getClients = () => {
  return  firebase.firestore().collection('Clients').get().then((docs) => {
    return docs.docs.map(el => el.data());

  });
};

export {getClients};