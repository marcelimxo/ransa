// Importamos las funciones que vamos a usar
import { template } from '../utils.js';

const pedidosContainer = document.createElement('section');

// Mostrar clientes
const date = new Date('2019-06-01T00:00:00.000');
date.toLocaleString('en-US', {
  weekday: 'short', // "Sat"
  month: 'long', // "June"
  day: '2-digit', // "01"
  year: 'numeric' // "2019"
});

const createTemplateCard = (list, container) => {
  container.innerHTML= '';
  let allPedidos =  document.createElement('div');
  list.forEach(ourData => {
    const pedidosDiv = document.createElement('div'); a
    console.log(date);
    pedidosDiv.innerHTML = `<div  class="">
    <div>EMPRESA : ${ourData.cliente}</div>
    <table class="table card-table table-striped table-vcenter">
                      <thead>
                      <tr class="color-table">
                      <th scope="col">CODIGO BATUTA</th>
                      <th scope="col">CÒDIGO OPERADOR MILLA</th>
                      <th scope="col">FECHA DE CREACIÓN DE  PEDIDO</th>
                      <th scope="col">PTO ORIGEN</th>
                      <th scope="col">PTO DESTINO</th>
                      <th scope="col">DISTANCIA</th>
                      <th scope="col">TIPO DE PEDIDO</th>
                      <th scope="col">STATUS</th>
                    </tr>
                      </thead>
                      <tbody>
                        <tr>
                         <td >${ourData.codigo}</td>
                          <td >${ourData.operator}</td>
                          <td>${ourData.date_created.toDate()}</td>
                          <td >${ourData.destinos && ourData.destinos.origen && ourData.destinos.origen.direccion} 
                           Personal de contacto : ${ourData.destinos && ourData.destinos.origen && ourData.destinos.origen.personal_contactos}
                           Teléfono : ${ourData.destinos && ourData.destinos.origen && ourData.destinos.origen.telefono}
                           Correo: ${ourData.destinos && ourData.destinos.origen && ourData.destinos.origen.correo}</td>

                          <td >${ourData.destinos && ourData.destinos.destino && ourData.destinos.destino.direccion}
                          Personal de contacto: ${ourData.destinos && ourData.destinos.destino && ourData.destinos.destino.personal_contactos}
                          Teléfono : ${ourData.destinos && ourData.destinos.destino && ourData.destinos.destino.telefono}
                          Correo : ${ourData.destinos && ourData.destinos.destino && ourData.destinos.destino.correo}
                          </td>
                          <td>${ourData.total_km}Km</td>
                          <td>${ourData.delivery_type}</td>
                          <td  class="color-status">${ourData.status}</td>
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
export default (ped) => {
  

  const div = document.createElement('div');
  div.classList.add('col-lg-12');
  div.classList.add('col-md-12');

  // pegar codigo
  const page = `

  <div class="card">
      <div class="card-header">
        <h3 class="card-title">Horarios de Entregas</h3>
      </div>
  
      <div class="table-responsive">
        <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper no-footer">
          <div class="dataTables_length" id="DataTables_Table_0_length">
            <table
              class="table card-table table-vcenter text-nowrap datatable dataTable no-footer"
              id="DataTables_Table_0"
              role="grid"
              aria-describedby="DataTables_Table_0_info"
            >
              <thead>
                <tr role="row">
                  <th
                    class="sorting"
                    tabindex="0"
                    aria-controls="DataTables_Table_0"
                    rowspan="1"
                    colspan="1"
                  >
                    Días
                  </th>
                  <th
                    class="sorting"
                    tabindex="0"
                    aria-controls="DataTables_Table_0"
                    rowspan="1"
                    colspan="1"
                  >
                    Hora de inicio
                  </th>
                  <th
                    class="sorting"
                    tabindex="0"
                    aria-controls="DataTables_Table_0"
                    rowspan="1"
                    colspan="1"
                  >
                    Hora de cierre
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr role="row" class="odd">
                  <td class="sorting_1">
                    a
                  </td>
                  <td class="sorting_1">
                      a
                    </td>
                    <td class="sorting_1">
                    a
                  </td>
                </tr>
                <tr role="row" class="even">
                <td class="sorting_1">
                a
              </td>
              <td class="sorting_1">
                  a
                </td>
                <td class="sorting_1">
                a
              </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  </div>

  `;

  div.innerHTML = page;

  template(div);
};

