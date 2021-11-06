import { Request, Response } from 'express';
import { GetAllPropertiesUseCase } from './GetAllPropertiesUseCase';

export class GetAllPropertiesController {


  async handle(request: Request, response: Response): Promise<Response> {

    const getAllPropertiesUseCase = new GetAllPropertiesUseCase();

    getAllPropertiesUseCase.execute();

    return response.status(200).json('GetAllPropertiesController');
  }
}
