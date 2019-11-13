// Importamos las funciones que vamos a usar
import { template } from '../utils.js';

// Template del Home page
export default (c) => {
  const div = document.createElement('div');
  // pegar codigo
  const page = `
  
  <div class="col-lg-12 col-md-12">
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
  </div>
</div>
<div class="card">
    <div class="card-header">
      <h3 class="card-title">Acuerdos comerciales</h3>
    </div>
    <div class="table-responsive">
        <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper no-footer">
          <div class="dataTables_length" id="DataTables_Table_0_length">
          <thead>
            <tr role="row">
              <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" >${c.name}</th>
          </thead>
          <tbody>
          <tr role="row" class="odd">
              <td class="sorting_1"><span class="text-muted">001401</span></td>
              <td><a href="invoice.html" class="text-inherit">Design Works</a></td>
              <td>
                Carlson Limited
              </td>
              <td>
                87956621
              </td>
              <td>
                15 Dec 2017
              </td>
              <td>
                <span class="status-icon bg-success"></span> Paid
              </td>
              <td>$887</td>
              <td class="text-right">
                <a href="javascript:void(0)" class="btn btn-secondary btn-sm">Manage</a>
                <div class="dropdown">
                  <button class="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">Actions</button>
                </div>
              </td>
              <td>
                <a class="icon" href="javascript:void(0)">
                  <i class="fe fe-edit"></i>
                </a>
              </td>
            </tr><tr role="row" class="even">
              <td class="sorting_1"><span class="text-muted">001402</span></td>
              <td><a href="invoice.html" class="text-inherit">UX Wireframes</a></td>
              <td>
                Adobe
              </td>
              <td>
                87956421
              </td>
              <td>
                12 Apr 2017
              </td>
              <td>
                <span class="status-icon bg-warning"></span> Pending
              </td>
              <td>$1200</td>
              <td class="text-right">
                <a href="javascript:void(0)" class="btn btn-secondary btn-sm">Manage</a>
                <div class="dropdown">
                  <button class="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">Actions</button>
                </div>
              </td>
              <td>
                <a class="icon" href="javascript:void(0)">
                  <i class="fe fe-edit"></i>
                </a>
              </td>
            </tr><tr role="row" class="odd">
              <td class="sorting_1"><span class="text-muted">001403</span></td>
              <td><a href="invoice.html" class="text-inherit">New Dashboard</a></td>
              <td>
                Bluewolf
              </td>
              <td>
                87952621
              </td>
              <td>
                23 Oct 2017
              </td>
              <td>
                <span class="status-icon bg-warning"></span> Pending
              </td>
              <td>$534</td>
              <td class="text-right">
                <a href="javascript:void(0)" class="btn btn-secondary btn-sm">Manage</a>
                <div class="dropdown">
                  <button class="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">Actions</button>
                </div>
              </td>
              <td>
                <a class="icon" href="javascript:void(0)">
                  <i class="fe fe-edit"></i>
                </a>
              </td>
            </tr><tr role="row" class="even">
              <td class="sorting_1"><span class="text-muted">001404</span></td>
              <td><a href="invoice.html" class="text-inherit">Landing Page</a></td>
              <td>
                Salesforce
              </td>
              <td>
                87953421
              </td>
              <td>
                2 Sep 2017
              </td>
              <td>
                <span class="status-icon bg-secondary"></span> Due in 2 Weeks
              </td>
              <td>$1500</td>
              <td class="text-right">
                <a href="javascript:void(0)" class="btn btn-secondary btn-sm">Manage</a>
                <div class="dropdown">
                  <button class="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">Actions</button>
                </div>
              </td>
              <td>
                <a class="icon" href="javascript:void(0)">
                  <i class="fe fe-edit"></i>
                </a>
              </td>
            </tr><tr role="row" class="odd">
              <td class="sorting_1"><span class="text-muted">001405</span></td>
              <td><a href="invoice.html" class="text-inherit">Marketing Templates</a></td>
              <td>
                Printic
              </td>
              <td>
                87956621
              </td>
              <td>
                29 Jan 2018
              </td>
              <td>
                <span class="status-icon bg-danger"></span> Paid Today
              </td>
              <td>$648</td>
              <td class="text-right">
                <a href="javascript:void(0)" class="btn btn-secondary btn-sm">Manage</a>
                <div class="dropdown">
                  <button class="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">Actions</button>
                </div>
              </td>
              <td>
                <a class="icon" href="javascript:void(0)">
                  <i class="fe fe-edit"></i>
                </a>
              </td>
            </tr><tr role="row" class="even">
              <td class="sorting_1"><span class="text-muted">001406</span></td>
              <td><a href="invoice.html" class="text-inherit">Sales Presentation</a></td>
              <td>
                Tabdaq
              </td>
              <td>
                87956621
              </td>
              <td>
                4 Feb 2018
              </td>
              <td>
                <span class="status-icon bg-secondary"></span> Due in 3 Weeks
              </td>
              <td>$300</td>
              <td class="text-right">
                <a href="javascript:void(0)" class="btn btn-secondary btn-sm">Manage</a>
                <div class="dropdown">
                  <button class="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">Actions</button>
                </div>
              </td>
              <td>
                <a class="icon" href="javascript:void(0)">
                  <i class="fe fe-edit"></i>
                </a>
              </td>
            </tr><tr role="row" class="odd">
              <td class="sorting_1"><span class="text-muted">001407</span></td>
              <td><a href="invoice.html" class="text-inherit">Logo &amp; Print</a></td>
              <td>
                Apple
              </td>
              <td>
                87956621
              </td>
              <td>
                22 Mar 2018
              </td>
              <td>
                <span class="status-icon bg-success"></span> Paid Today
              </td>
              <td>$2500</td>
              <td class="text-right">
                <a href="javascript:void(0)" class="btn btn-secondary btn-sm">Manage</a>
                <div class="dropdown">
                  <button class="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">Actions</button>
                </div>
              </td>
              <td>
                <a class="icon" href="javascript:void(0)">
                  <i class="fe fe-edit"></i>
                </a>
              </td>
            </tr><tr role="row" class="even">
              <td class="sorting_1"><span class="text-muted">001408</span></td>
              <td><a href="invoice.html" class="text-inherit">Icons</a></td>
              <td>
                Tookapic
              </td>
              <td>
                87956621
              </td>
              <td>
                13 May 2018
              </td>
              <td>
                <span class="status-icon bg-success"></span> Paid Today
              </td>
              <td>$940</td>
              <td class="text-right">
                <a href="javascript:void(0)" class="btn btn-secondary btn-sm">Manage</a>
                <div class="dropdown">
                  <button class="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">Actions</button>
                </div>
              </td>
              <td>
                <a class="icon" href="javascript:void(0)">
                  <i class="fe fe-edit"></i>
                </a>
              </td>
            </tr><tr role="row" class="odd">
              <td class="sorting_1"><span class="text-muted">001409</span></td>
              <td><a href="invoice.html" class="text-inherit">Design Works</a></td>
              <td>
                Carlson Limited
              </td>
              <td>
                87956621
              </td>
              <td>
                15 Dec 2017
              </td>
              <td>
                <span class="status-icon bg-success"></span> Paid
              </td>
              <td>$887</td>
              <td class="text-right">
                <a href="javascript:void(0)" class="btn btn-secondary btn-sm">Manage</a>
                <div class="dropdown">
                  <button class="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">Actions</button>
                </div>
              </td>
              <td>
                <a class="icon" href="javascript:void(0)">
                  <i class="fe fe-edit"></i>
                </a>
              </td>
            </tr><tr role="row" class="even">
              <td class="sorting_1"><span class="text-muted">001410</span></td>
              <td><a href="invoice.html" class="text-inherit">UX Wireframes</a></td>
              <td>
                Adobe
              </td>
              <td>
                87956421
              </td>
              <td>
                12 Apr 2017
              </td>
              <td>
                <span class="status-icon bg-warning"></span> Pending
              </td>
              <td>$1200</td>
              <td class="text-right">
                <a href="javascript:void(0)" class="btn btn-secondary btn-sm">Manage</a>
                <div class="dropdown">
                  <button class="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">Actions</button>
                </div>
              </td>
              <td>
                <a class="icon" href="javascript:void(0)">
                  <i class="fe fe-edit"></i>
                </a>
              </td>
            </tr></tbody>
        </table><div class="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 1 to 10 of 16 entries</div><div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate"><a class="paginate_button previous disabled" aria-controls="DataTables_Table_0" data-dt-idx="0" tabindex="0" id="DataTables_Table_0_previous">Previous</a><span><a class="paginate_button current" aria-controls="DataTables_Table_0" data-dt-idx="1" tabindex="0">1</a><a class="paginate_button " aria-controls="DataTables_Table_0" data-dt-idx="2" tabindex="0">2</a></span><a class="paginate_button next" aria-controls="DataTables_Table_0" data-dt-idx="3" tabindex="0" id="DataTables_Table_0_next">Next</a></div></div>
        <script>
          require(['datatables', 'jquery'], function(datatable, $) {
                $('.datatable').DataTable();
              });
        </script>
      </div>

  </div>
  </div>
</div>
  
  `;

  div.innerHTML = page;

  template(div);
};

