import createTemplatePedidos from '../views/pedidos.js';
import {getOrders, batchInsert } from '../model/pedidos.js';

export default async () => {

  const pedidos = await getOrders();

  console.log('pedidos', pedidos)

  console.log('batch', batchInsert)

  createTemplatePedidos(pedidos);

};