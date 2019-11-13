import profileView from '../views/perfil-cliente.js';
import {singleClient} from '../model/clientes.js';

export default async (client)=>{

  const client_ = client.charAt(0).toUpperCase() + client.slice(1);

  const theClient = await singleClient(client_);

  console.log(theClient);

  profileView(theClient);
};