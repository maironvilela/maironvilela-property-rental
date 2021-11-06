/**
 * @summary  Bloco de codigo responsável por carregar os arquivos de rota da aplicação de acordo com o modulo
 * @version: 1.0
 */

import { Router } from 'express';
import { propertiesRoutes } from './properties.routes';

export const router = Router();

router.use('/api/properties', propertiesRoutes);
