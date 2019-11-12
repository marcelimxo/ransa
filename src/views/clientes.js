// Importamos las funciones que vamos a usar
import { template } from '../utils.js';

const clientsContainer = document.createElement('section');

// Mostrar clientes
const createTemplateCard = (list, container) => {
  let allCards = '';
  list.forEach(ourData => {

    const card = `<div> ${ourData.name} </div>`;
    allCards += card;
  }); 

  container.appendChild = allCards;
};

// Template del Home page
export default (clients) => {
  
  createTemplateCard(clients, clientsContainer);

  // pegar codigo
  const clientsPage = `<div> ${clientsContainer} </div>
    `;

  template(clientsPage);
};


