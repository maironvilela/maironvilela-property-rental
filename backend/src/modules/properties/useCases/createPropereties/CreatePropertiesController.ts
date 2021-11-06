import { Request, Response } from 'express';
import { CreatePropertiesUseCase } from './CreatePropertiesUseCase';

export class CreatePropertiesController {

  async handle(request: Request, response: Response): Promise<Response> {

    const createPropertiesUseCase = new CreatePropertiesUseCase();


    createPropertiesUseCase.execute();


    return response.json('CreatePropertiesController');
  }

}
