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
  const {name} = c;
  const div = document.createElement('div');


  const namerize =(name)=>{
    const realName = name.replace('-',' a ');
    return realName;
  };

  // pegar codigo
  const page = `

  <div class="col-lg-12 col-md-12">
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">${name}</h3> </div>
        <div class="card-body">
            <div class="media mb-5"> <img class="d-flex mr-5 rounded" src="${c.url}" alt="${c.name}logo" width="10%" />
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
                    <div class="h6">Dirección</div><address>${c.direccion}</address> </div>
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
</div>
  `;

  div.innerHTML = page;
  div.classList.add('row');
  div.classList.add('row-cards');

  template(div);
};

