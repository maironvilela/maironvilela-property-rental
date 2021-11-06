import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { GetAllPropertiesUseCase } from './ListPropertiesUseCase';

export class ListPropertiesController {

  async handle(request: Request, response: Response): Promise<Response> {

    const { size, page } = request.query;
    console.log('#### GetAllPropertiesController ### ');


    const getAllPropertiesUseCase = container.resolve(GetAllPropertiesUseCase);

    await getAllPropertiesUseCase.execute({ page: Number(page), size: Number(size) });

    return response.status(200).json({ size, page });
  }
}
