// Importamos las funciones que vamos a usar
import { template } from '../utils.js';

// Template del Home page
export default (c) => {
  const div = document.createElement('div');
  // pegar codigo
  const page = `<div class="col-lg-5 col-md-6">
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">${c.name}</h3>
      
    </div>
    <div class="card-body">
      <div class="media mb-5">
        <img class="d-flex mr-5 rounded" src="${c.url}" alt="${c.name} logo" width="50%">
        <div class="media-body">
          <h5>${c.razon_social}</h5>
          <div class="text-muted small" >
            <p>${c.ruc}</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="h6">Actividad Comercial</div>
          <p>${c.actividad_comercial}</p>
        </div>
        <div class="col-12">
            <div class="h6">Dirección</div>
            <address>${c.direccion}</address>
          </div>
        <div class="col-6">
          <div class="h6">Sitio web</div>
          <p><a>${c.pag_web}</a></p>
        </div>
        <div class="col-6">
          <div class="h6">Teléfono</div>
          <p>${c.telefono}</p>
        </div>
      </div>
      <div class="h5">Acuerdos comerciales</div>
      <table>
          <tr>
            <th colspan="2" class="h6">Velocidad</th>
          </tr>
          <tr>
            <td>${c.velocidad[0].type}</td>
            <td>${c.velocidad[0].hours_max} máx</td>
          </tr>
          <tr>
              <td>${c.velocidad[1].type}</td>
              <td>${c.velocidad[1].hours_max} máx</td>
            </tr>
            <tr>
                <td>${c.velocidad[2].type}</td>
                <td>${c.velocidad[2].hours_max} máx</td>
              </tr>
              <tr>
                  <td>${c.velocidad[3].type}</td>
                  <td>${c.velocidad[3].hours_max} máx</td>
                </tr>
        </table>
    </div>
  </div>
</div>`;

  div.innerHTML = page;

  template(div);
};

