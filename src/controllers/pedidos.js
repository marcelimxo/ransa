import viewPedidos from '../views/pedidos.js';
import {getOrders,  batchInsert} from '../model/pedidos.js';



export default async () => {


  const pedidos = await getOrders();

  console.log('pedidos :', pedidos);

  const lote = await batchInsert();

  console.log(pedidos, lote);

};