// Importamos las funciones que vamos a usar
import { template } from '../utils.js';

// Template del Home page
const showHome = () => {
  const div = document.createElement('div');
  div.setAttribute('class','row');
  div.setAttribute('class','row-cards');
  const homePage = `

  <div class="row row-cards">

  <div class="col-lg-6">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Efectividad 2019</h3>
      </div>
      <div class="card-body">
          <img src="https://user-images.githubusercontent.com/50186958/68808759-67585980-0638-11ea-9937-21dd97c8ccdd.png" alt="Grafico">
        </div>
      
      </div>
    </div>

    <div class="col-lg-6">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Volumen de pedidos</h3>
          </div>
          <div class="card-body">
              <img src="https://user-images.githubusercontent.com/50186958/68808836-940c7100-0638-11ea-82e8-cf758f7ac036.png" alt="Grafico">
            </div>
          
          </div>
        </div>
    
    
  </div>

  `;
  div.innerHTML = homePage;
  template(div);
};
// Exporta las funciones
export default showHome;

