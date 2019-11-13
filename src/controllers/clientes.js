
import  showClients  from '../views/clientes.js';
import {getClients} from '../model/clientes.js';

export default async () => {

  const listClients = await getClients();

  showClients(listClients);

}; 