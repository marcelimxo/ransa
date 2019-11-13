// Importamos las funciones que vamos a usar
import { template } from '../utils.js';
import operadores from '../controllers/operadores.js';

const operadoresContainer = document.createElement('section');

// Mostrar clientes
const createTemplateCard = (list, container) => {

  container.innerHTML= '';

  let allCards =  document.createElement('div');
  list.forEach(ourData => {

    const cardDiv = document.createElement('div');
   
    cardDiv.innerHTML = `<div class="card p-3">
    <a class="mb-3">
      <img src="${ourData.url}" alt="logo de ${ourData.name}" class="rounded">
    </a>
    <div class=" d-flex align-items-center px-2 text text-card">
      <div>
        <div class="ml-auto text-muted"> ${ourData.name}</div>
      </div>
    </div>
  </div>`;

    cardDiv.classList.add('col-sm-6');
    cardDiv.classList.add('col-lg-4');
    cardDiv.setAttribute('id', `${ourData.name}`);

    allCards.appendChild(cardDiv);

    allCards.querySelector(`#${ourData.name}`).addEventListener('click', (e)=>{

      const client = e.currentTarget.id;
      window.location.hash = (`${window.location.hash}/${client.toLowerCase()}`);
    });
  });

  allCards.classList.add('card-group');

  container.appendChild(allCards);

  return container;
};

// Template del operadores 
export default  (operadores) => {
  
  const all =  createTemplateCard(operadores,operadoresContainer);

  const div = document.createElement('div');

  div.setAttribute('id', 'operadores-list');

  div.appendChild(all);

  template(div);
};

