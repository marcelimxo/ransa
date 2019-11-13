import profileView from '../views/perfil-operador.js';
import {singleOperador} from '../model/operadores.js';

export default async (client)=>{

  const client_ = client.charAt(0).toUpperCase() + client.slice(1);

  const theClient = await singleOperador(client_);

  console.log(theClient);

  profileView(theClient);
};