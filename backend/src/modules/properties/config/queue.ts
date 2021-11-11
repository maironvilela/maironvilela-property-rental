/**
 * @summary   Registra a função que será executada pela fila que será responsável por salvar as informações no banco de dados.
   @version: 1.0
 */

import 'reflect-metadata';

import { savePropertyQueue } from '../lib/Queue';
import saveProperty from '../jobs/SaveProperty';

savePropertyQueue.process(async (job) => {
  saveProperty.handle(job.data);
});
