/**
  @summary  Bloco de código responsável por carregar os arquivos de rota da aplicação de acordo com o modulo
**/

import { Router } from 'express';
import { propertiesRoutes } from './properties.routes';

export const router = Router();

router.use('/api/properties', propertiesRoutes);
