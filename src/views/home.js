// Importamos las funciones que vamos a usar
import { template } from '../utils.js';

// Template del Home page
const showHome = () => {
  const div = document.createElement('div');
  div.setAttribute('class','row');
  const homePage = `
  <div class="row-6 row-sm-4 row-lg-2>
  <div class="row">
  <div class="card">
    <div class="card-body text-center">
     <div class="h5">Cantidad de Pedidos</div>
      <div class="display-4 font-weight-bold mb-4">1052</div>
</div>
</div>
</div>
<div class="row">
<div class="card">
  <div class="card-body text-center">
   <div class="h5">% Pedidos Efectivos</div>
    <div class="display-4 font-weight-bold mb-4">850</div>
</div>
</div>
</div>
<div class="row">
<div class="card">
  <div class="card-body text-center">
   <div class="h5">Pedidos Fallidos </div>
    <div class="display-4 font-weight-bold mb-4">202</div>
</div>
</div>
</div>
<div class="row">
<div class="card">
  <div class="card-body text-center">
   <div class="h5">Monto Factura</div>
    <div class="display-4 font-weight-bold mb-4">4500</div>
</div>
</div>
</div>
</div>
<div>
<canvas id="myChart" width="400" height="400"></canvas>
</div>
<script>
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
</script>
`;
  div.innerHTML = homePage;
  template(div);
};
// Exporta las funciones
export default showHome;

