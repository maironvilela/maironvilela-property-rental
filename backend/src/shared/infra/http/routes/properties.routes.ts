/**
 * @summary Bloco de código que contem as informações de rota do modulo Properties
 * @version: 1.0
 */

import { Router } from 'express';
import { CreatePropertiesController } from '../../../../modules/properties/useCases/createPropereties/CreatePropertiesController';
import { GetAllPropertiesController } from '../../../../modules/properties/useCases/getAllProperties/GetAllPropertiesController';

const getAllPropertiesController = new GetAllPropertiesController();

const createPropertiesController = new CreatePropertiesController();


export const propertiesRoutes = Router();

propertiesRoutes.get('/', getAllPropertiesController.handle);

propertiesRoutes.post('/', createPropertiesController.handle);


