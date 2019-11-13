import viewPedidos from '../views/pedidos.js';
import {getOrders, insertOrder, batchInsert} from '../model/pedidos.js';



export default async () => {

  const newOrder = await insertOrder();

  const pedidos = await getOrders();

  const lote = await batchInsert();

  console.log(newOrder,pedidos, lote);

};