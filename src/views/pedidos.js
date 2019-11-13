import { template } from '../utils.js';
export default () => {
  const viewPedidos = `
 <div id="containerPedido">pedido</div>
     `;
  const divElement = document.createElement('section');
  divElement.innerHTML = viewPedidos;
  const box = divElement.querySelector('#containerPedido');
  box.innerHTML = '';
  template(divElement);
};
