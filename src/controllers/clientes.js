
/* eslint-disable no-console */
/* import { addUserPhotoToStorage } from '../models/users.js';
import { profilePageView } from '../views/profile.js'; */

import  showClients  from '../views/clientes.js';
import {getClients} from '../model/clientes.js';

export default async () => {

  const listClients = await getClients();

  console.log('hola');

  showClients(listClients);

}; 