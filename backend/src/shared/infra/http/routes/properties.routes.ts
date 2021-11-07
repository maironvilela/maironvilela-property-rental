/**
 * @summary Bloco de código que contem as informações de rota do modulo Properties
 * @version: 1.0
 */

import { Router } from 'express';
import { CreatePropertiesController } from '../../../../modules/properties/useCases/createProperties/CreatePropertiesController';
import { ListPropertiesController } from '../../../../modules/properties/useCases/ListProperties/ListPropertiesController';

const listPropertiesController = new ListPropertiesController();

const createPropertiesController = new CreatePropertiesController();


export const propertiesRoutes = Router();

propertiesRoutes.get('/', listPropertiesController.handle);

propertiesRoutes.post('/', createPropertiesController.handle);


