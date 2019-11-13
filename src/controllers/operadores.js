
import  showOperadores  from '../views/operadores.js';
import {getOperadores} from '../model/operadores.js';

export default async () => {

  const listOperadores = await getOperadores();

  showOperadores(listOperadores);

}; 