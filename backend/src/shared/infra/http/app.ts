import 'dotenv/config';
import 'reflect-metadata';

import express, {
  NextFunction,
  Request, Response
} from 'express';
import 'express-async-errors';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../../../swagger.json';
import AppError from '../../error/AppError';
import { router } from './routes';



export const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(express.json());
app.use(cors());
app.use(router);

app.get('/', async (request, response) => {
  return response.json({ message: ' Rental' });
});


app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode)
      .json({ error: err.message });
  }

  return response
    .status(500)
    .json({ error: `Internal Server Error ${err.message}` });
});
