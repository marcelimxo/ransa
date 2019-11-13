import { template }from '../utils.js';

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

