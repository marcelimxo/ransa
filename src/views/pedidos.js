// Importamos las funciones que vamos a usar
import { template } from '../utils.js';

const pedidosContainer = document.createElement('section');

// Mostrar clientes
const createTemplateCard = (list, container) => {

  container.innerHTML= '';

  let allPedidos =  document.createElement('div');
  list.forEach(ourData => {

    const pedidosDiv = document.createElement('div');
   
    pedidosDiv.innerHTML = `<div  class="">
    <div>EMPRESA : ${ourData.cliente}</div>
    <table class="table card-table table-striped table-vcenter">
                      <thead>
                      <tr class="color-table">
                      <th scope="col">CODIGO BATUTA</th>
                      <th scope="col">CÒDIGO OPERADOR MILLA</th>
                      <th scope="col">FECHA DE PEDIDO</th>
                      <th scope="col">PTO ORIGEN</th>
                      <th scope="col">PTO DESTINO</th>
                      <th scope="col">PTO ORIGEN</th>
                      <th scope="col">PTO ORIGEN</th>
                    </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td >${ourData.operator}</td>
                          <td>${ourData.date_created.toDate()}</td>
                          <td>${ourData.delivery_type}</td>
                          <td>${ourData.total}</td>
                          <td>${ourData.status}</td>
                        </tr>
                        </tbody>
                        </thead>
</div>
`;

    pedidosDiv.classList.add('col-sm-6');
    pedidosDiv.classList.add('col-lg-4');
    pedidosDiv.setAttribute('id', `${ourData.cliente}`);

    allPedidos.appendChild(pedidosDiv);

    allPedidos.querySelector(`#${ourData.cliente}`).addEventListener('click', (e)=>{

      const client = e.currentTarget.id;
      window.location.hash = (`${window.location.hash}/${client.toLowerCase()}`);
    });
  });

  allPedidos.classList.add('cuadro');

  container.appendChild(allPedidos);

  return container;
};

// Template del Home page
export default (clients) => {
  
  const all =  createTemplateCard(clients, pedidosContainer);

  const div = document.createElement('div');

  div.setAttribute('id', 'clients-list');

  div.appendChild(all);

  template(div);
};






