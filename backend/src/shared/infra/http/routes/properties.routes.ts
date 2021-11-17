/**
 * @summary Bloco de código que contem as informações de rota do modulo Properties
 * @version: 1.0
 */

import { Router } from 'express';
import { body } from 'express-validator';


import { CreatePropertiesController } from '../../../../modules/properties/useCases/CreateProperties/CreatePropertiesController';
import { ListPropertiesController } from '../../../../modules/properties/useCases/ListProperties/ListPropertiesController';
import { FindPropertyByIdController } from '../../../../modules/properties/useCases/FindPropertyById/FindPropertyByIdController';

const listPropertiesController = new ListPropertiesController();

const createPropertiesController = new CreatePropertiesController();

const findPropertyByIdController = new FindPropertyByIdController();


export const propertiesRoutes = Router();

propertiesRoutes.get('/', listPropertiesController.handle);
propertiesRoutes.get('/:id', findPropertyByIdController.handle);


propertiesRoutes.post('/', [
  body('description').notEmpty(),
  body('rentalPrice').notEmpty(),
  body('salePrice').notEmpty(),
  body('isSale').notEmpty(),
  body('isLocation').notEmpty(),
], createPropertiesController.handle);


