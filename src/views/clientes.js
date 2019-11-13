// Importamos las funciones que vamos a usar
import { template } from '../utils.js';

const clientsContainer = document.createElement('section');

// Mostrar clientes
const createTemplateCard = (list, container) => {

  container.innerHTML= '';

  let allCards =  document.createElement('div');
  list.forEach(ourData => {

    const cardDiv = document.createElement('div');
   
    cardDiv.innerHTML = `<div class="card p-3">
    <a href="javascript:void(0)" class="mb-3">
      <img src="${ourData.url}" alt="logo de ${ourData.name}" class="rounded">
    </a>
    <div class="d-flex align-items-center px-2">
      <div>
        <div>${ourData.name}</div>
        <small class="d-block text-muted">12 days ago</small>
      </div>
      <div class="ml-auto text-muted">
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

  container.appendChild(allCards);

  return container;
};

// Template del Home page
export default  (clients) => {
  
  const all =  createTemplateCard(clients, clientsContainer);

  const div = document.createElement('div');
  // pegar codigo
  const clientsPage = `<div class="my-3 my-md-5">
  <div class="container">
    <div class="page-header">
      <h1 class="page-title">
        Gallery
      </h1>
      <div class="page-subtitle">Clientes</div>
      <div class="page-options d-flex">
        <select class="form-control custom-select w-auto">
          <option value="asc">Newest</option>
          <option value="desc">Oldest</option>
        </select>
        <div class="input-icon ml-2">
          <span class="input-icon-addon">
            <i class="fe fe-search"></i>
          </span>
          <input type="text" class="form-control w-10" placeholder="Search photo">
        </div>
      </div>
    </div>
    <div id="clients-list" class="row row-cards">
    </div>
  </div>
</div>`;

  div.innerHTML = clientsPage;

  div.querySelector('#clients-list').appendChild(all);

  template(div);
};


