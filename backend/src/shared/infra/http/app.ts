
import 'reflect-metadata';
import 'dotenv/config';

import '../../container';


import cors from 'cors';
import swaggerFile from '../../../swagger.json';
import swaggerUi from 'swagger-ui-express';

import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { router } from './routes';
import AppError from '../../error/AppError';

import createConnection from '../typeorm';

import '../typeorm';



createConnection();

export const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(express.json());
app.use(cors());
app.use(router);


app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode)
      .json({ error: err.message });
  }

  return response
    .status(500)
    .json({ error: `Internal Server Error ${err.message}` });
});
