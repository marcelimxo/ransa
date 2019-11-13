import profileView from '../views/perfil-cliente.js';
import {singleClient} from '../model/clientes.js';

export default async (client)=>{

  const client_ = client.charAt(0).toUpperCase() + client.slice(1);

  console.log('client_ :', client_);

  const theClient = await singleClient(client_);

  console.log('hola',theClient);
  profileView();
};