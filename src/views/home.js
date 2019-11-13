// Importamos las funciones que vamos a usar
import { template } from '../utils.js';

// Template del Home page
const showHome = () => {
  const div = document.createElement('div');
  const homePage = `
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img class="d-block w-100" src="https://www.ransa.biz/wp-content/uploads/2019/08/2.jpg" alt="First slide">
    Y ahora resolvemos el tramo de la última milla en la distribución.
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://www.ransa.biz/wp-content/uploads/2019/08/16.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://www.ransa.biz/wp-content/uploads/2019/08/13.jpg" alt="Third slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://www.ransa.biz/wp-content/uploads/2019/04/Web-Carrusel_Mapa-LAT-4.jpg" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  `;
  div.innerHTML = homePage;
  template(div);
};
// Exporta las funciones
export default showHome;

