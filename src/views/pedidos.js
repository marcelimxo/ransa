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
    const pedidosDiv = document.createElement('div'); 
    console.log(date);
    pedidosDiv.innerHTML = `

    <div class="card"> <div class="card-header"> <h3 class="card-title">Pedido de ${ourData.cliente}- ${ourData.codigo}</h3> </div><div class="table-responsive"> <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper no-footer"> <div class="dataTables_length" id="DataTables_Table_0_length"> <table class="table card-table table-vcenter text-nowrap datatable dataTable no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info" > <thead> <tr role="row"> <th class="sorting" >CODIGO BATUTA</th> <th class="sorting" >CÒDIGO OPERADOR MILLA</th> <th class="sorting" >FECHA DE CREACIÓN DE PEDIDO</th> <th class="sorting" >PTO ORIGEN</th> <th class="sorting" >PTO DESTINO</th> <th class="sorting" >DISTANCIA</th> <th class="sorting" >TIPO DE PEDIDO</th> <th class="sorting" >STATUS</th> </tr></thead> <tbody> <tr role="row" class="odd"> <td >${ourData.codigo}</td><td >${ourData.operator}</td><td>${ourData.date_created.toDate()}</td><td >${ourData.destinos && ourData.destinos.origen && ourData.destinos.origen.direccion}Personal de contacto : ${ourData.destinos && ourData.destinos.origen && ourData.destinos.origen.personal_contactos}Teléfono : ${ourData.destinos && ourData.destinos.origen && ourData.destinos.origen.telefono}Correo: ${ourData.destinos && ourData.destinos.origen && ourData.destinos.origen.correo}</td><td >${ourData.destinos && ourData.destinos.destino && ourData.destinos.destino.direccion}Personal de contacto: ${ourData.destinos && ourData.destinos.destino && ourData.destinos.destino.personal_contactos}Teléfono : ${ourData.destinos && ourData.destinos.destino && ourData.destinos.destino.telefono}Correo : ${ourData.destinos && ourData.destinos.destino && ourData.destinos.destino.correo}</td><td>${ourData.total_km}Km</td><td>${ourData.delivery_type}</td><td class="color-status">${ourData.status}</td></tr></tbody> </table> </div></div></div></div>

`;

    pedidosDiv.classList.add('col-12');
    pedidosDiv.setAttribute('id', `${ourData.cliente}`);

    allPedidos.appendChild(pedidosDiv);

    
  });

  allPedidos.classList.add('cuadro');

  container.appendChild(allPedidos);

  return container;
};

// Template del Home page
export default  (ped) => {
  
  const all =  createTemplateCard(ped,pedidosContainer);

  const div = document.createElement('div');

  div.setAttribute('id', 'operadores-list');

  div.appendChild(all);

  template(div);
};

