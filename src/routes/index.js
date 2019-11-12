
// Importamos todas las funciones que vamos a usar
import registerController from '../controllers/register.js';
import homeController from '../controllers/home.js';
import profileController from '../controllers/profile.js';
import { redirect } from '../utils.js';

export default () => {
  // Creamos nuestro router
  const routerSwitch = async () => {
    const routesWithoutAuth = ['/login', '/register'];
    // Obtenemos la dirección de la página actual
    const { hash } = window.location;
    const currentRoute = hash.replace('#', '');
    let next;
    switch (currentRoute) {
      case '/login':
        next = loginController;
        break;
      case '/register':
        next = registerController;
        break;
      case '/home':
        next = homeController;
        break;
      case '/profile':
        next = profileController;
        break;

      case '':
        redirect('home');
        return;
      default:
        document.getElementById('root').innerHTML = '404 not found';
        break;
    }

  window.onload = () => routerSwitch();

  // Cambiamos la vista
  window.addEventListener('hashchange', () => {
    routerSwitch();
  });
};