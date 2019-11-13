import createTemplatePedidos from '../views/pedidos.js';
import {getOrders, } from '../model/pedidos.js';

export default async () => {
  const pedidos = await getOrders();
  createTemplatePedidos(pedidos);

};