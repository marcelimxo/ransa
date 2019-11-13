// Importamos las funciones que vamos a usar
import { template } from '../utils.js';

// Template del Home page
export default (c2) => {
  const c = {};
  Object.keys(c2).forEach(k => {
    const val = c2[k];
    if (typeof val === 'object') {
      const innerVal = {};
      c[k.replace(/-/g,'_')] = innerVal;
      Object.keys(val).forEach(k2 => {
        innerVal[k2.replace(/-/g,'_')] = val[k2];
      });
    } else {
      c[k.replace(/-/g,'_')] = c2[k];
    }
  });
  //const c = { ...c2, cost_waiting_time_per_minute: c2['cost-waiting-time-per-minute']}
  const {name, tipos_de_envio, horario_de_atencion} = c;
  const div = document.createElement('div');
  
  const typeEnv = [];

  const type_env = Object.keys(tipos_de_envio).forEach(el =>{
    const name = el.replace('_',' ');
    typeEnv.push(name);
  });

  const namerize =(name)=>{
    const realName = name.replace('-',' a ');
    return realName;
  };

  // pegar codigo
  const page = `

  <div class="col-lg-12 col-md-12">
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">${name}</h3>
    </div>
    <div class="card-body">
      <div class="media mb-5">
        <img
          class="d-flex mr-5 rounded"
          src="${c.url}"
          alt="${c.name} logo"
          width="10%"
        />
        <div class="media-body">
          <h5>${c.razon_social}</h5>
          <div class="text-muted small">
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
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Tipos de Entregas</h3>
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
                  ${typeEnv[0]}
                </th>
                <th
                  class="sorting"
                  tabindex="0"
                  aria-controls="DataTables_Table_0"
                  rowspan="1"
                  colspan="1"
                >
                  ${typeEnv[1]}
                </th>
                <th
                  class="sorting"
                  tabindex="0"
                  aria-controls="DataTables_Table_0"
                  rowspan="1"
                  colspan="1"
                >
                  ${typeEnv[2]}
                </th>
                <th
                  class="sorting"
                  tabindex="0"
                  aria-controls="DataTables_Table_0"
                  rowspan="1"
                  colspan="1"
                >
                  ${typeEnv[3]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr role="row" class="odd">
                <td class="sorting_1">
                  <label class="custom-switch" disabled="">
                    <input
                      type="checkbox"
                      name="custom-switch-checkbox"
                      class="custom-switch-input"
                      disabled
                      checked
                    />
                    <span class="custom-switch-indicator"></span>
                  </label>
                </td>
                <td class="sorting_1">
                  <label class="custom-switch" disabled="">
                    <input
                      type="checkbox"
                      name="custom-switch-checkbox"
                      class="custom-switch-input"
                      disabled
                      checked
                    />
                    <span class="custom-switch-indicator"></span>
                  </label>
                </td>
                <td class="sorting_1">
                  <label class="custom-switch" disabled="">
                    <input
                      type="checkbox"
                      name="custom-switch-checkbox"
                      class="custom-switch-input"
                      disabled
                      
                    />
                    <span class="custom-switch-indicator"></span>
                  </label>
                </td>
                <td class="sorting_1">
                  <label class="custom-switch" disabled="">
                    <input
                      type="checkbox"
                      name="custom-switch-checkbox"
                      class="custom-switch-input"
                      disabled
                      
                    />
                    <span class="custom-switch-indicator"></span>
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
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
                    ${namerize(horario_de_atencion[0].dia)}
                  </td>
                  <td class="sorting_1">
                      ${horario_de_atencion[0].inicio}
                    </td>
                    <td class="sorting_1">
                    ${horario_de_atencion[0].final}
                  </td>
                </tr>
                <tr role="row" class="even">
                <td class="sorting_1">
                ${namerize(horario_de_atencion[1].dia)}
              </td>
              <td class="sorting_1">
                  ${horario_de_atencion[1].inicio}
                </td>
                <td class="sorting_1">
                ${horario_de_atencion[1].final}
              </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  </div>
  <div class="card">
      <div class="card-header">
        <h3 class="card-title">Costos de Express</h3>
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
                    Desde
                  </th>
                  <th
                    class="sorting"
                    tabindex="0"
                    aria-controls="DataTables_Table_0"
                    rowspan="1"
                    colspan="1"
                  >
                    Hasta
                  </th>
                  <th
                    class="sorting"
                    tabindex="0"
                    aria-controls="DataTables_Table_0"
                    rowspan="1"
                    colspan="1"
                  >
                    Tarifa
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr role="row" class="odd">
                  <td class="sorting_1">
                    5
                  </td>
                  <td class="sorting_1">
                      5
                    </td>
                    <td class="sorting_1">
                    S/ 6.30
                  </td>
                </tr>
                <tr role="row" class="even">
                    <td class="sorting_1">
                        5
                      </td>
                      <td class="sorting_1">
                          +
                        </td>
                        <td class="sorting_1">
                        S/ 1.15 x km
                      </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      

  </div>
</div>

  `;

  div.innerHTML = page;

  template(div);
};

