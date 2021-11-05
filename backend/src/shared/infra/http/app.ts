import 'dotenv/config';
import 'reflect-metadata';

import express, {
  NextFunction,
  Request, Response
} from 'express';
import 'express-async-errors';
import cors from 'cors';

import AppError from '../../error/AppError';


export const app = express();
app.use(express.json());
app.use(cors());

app.get('/', async (request, response) => {
  return response.json({ message: 'Property Rental' });
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
