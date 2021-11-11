/**
 * @summary  Função que exporta uma instancia da classe Queue que é passada no construtor
 * o nome para a fila e as informações de conexão ao banco de dados redis
   @version: 1.0
*/

import Queue from 'bull';
import redis from '../../../shared/infra/redis';


import saveProperty from '../jobs/SaveProperty';


export const savePropertyQueue = new Queue(
  saveProperty.key,
  `redis:${redis.host}:${redis.port}`
);

