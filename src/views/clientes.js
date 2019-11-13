// Importamos las funciones que vamos a usar
import { template } from '../utils.js';

const clientsContainer = document.createElement('section');

// Mostrar clientes
const createTemplateCard = (list, container) => {

  let allCards = '';
  list.forEach(ourData => {

    const cardDiv = document.createElement('div');

    cardDiv.classList.add('col-sm-6');

    cardDiv.classList.add('col-lg-4');
    
    cardDiv.setAttribute('id', `${ourData.name}`);
   
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

    allCards += cardDiv; 
    
  }); 

  return container.appendChild = allCards;
};

// Template del Home page
export default  (clients) => {
  
  const all =  createTemplateCard(clients, clientsContainer);

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
    <div class="row row-cards">
      ${all}
    </div>
  </div>
</div>`;

  template(clientsPage);
};


