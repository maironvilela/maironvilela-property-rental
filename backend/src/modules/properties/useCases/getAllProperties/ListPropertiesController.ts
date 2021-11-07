/**
   * @summary Controller responsável para listagem dos imóveis
**/


import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListPropertiesUseCase } from './ListPropertiesUseCase';

export class ListPropertiesController {

  async handle(request: Request, response: Response): Promise<Response> {


    const { size = 5, page = 1 } = request.query;


    const listPropertiesUseCase = container.resolve(ListPropertiesUseCase);

    console.log('### ListPropertiesController ###');


    const properties = await listPropertiesUseCase.execute({ page: Number(page), size: Number(size) });

    return response.status(200).json({ properties });
  }
}
