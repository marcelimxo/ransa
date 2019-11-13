/* eslint-disable no-unused-vars */

// Importamos todas las funciones que vamos a usar
import homeController from './controllers/home.js';
import clientsController from './controllers/clientes.js';
import clientProfileController from './controllers/perfil-cliente.js';
import pedidosController from './controllers/pedidos.js';
import { redirect } from './utils.js';

export default () => {
  // Creamos nuestro router

  const routerSwitch = () => {

    // Obtenemos la dirección de la página actual
    const { hash, href } = window.location;
    const currentRoute = hash.replace('#', '');

    const currentClient = href.split('/');

    const client = currentClient[currentClient.length - 1];

    let next;
    switch (currentRoute) {
    case '/home':
      next = homeController;
      break;

    case '/clients':
      next = clientsController;
      break;

    case `/clients/${client}`:
      next = clientProfileController(client);
      break;
    case '/pedidos':
      next = pedidosController;
      break;
    case '':
      redirect('home');
      return;
    default:
      document.getElementById('root').innerHTML = '404 not found';
      break;
    }

    next && next();
  };

  window.onload = () => routerSwitch();
  
  // Cambiamos la vista
  window.addEventListener('hashchange', () => {
    routerSwitch();
  });

  routerSwitch();
};
