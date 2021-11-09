/**
   * @summary Controller responsável pela listagem dos imóveis
**/


import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListPropertiesUseCase } from './ListPropertiesUseCase';
import { Property } from '@modules/properties/infra/mysql/entities/Property';

export class ListPropertiesController {


  /**
     * @description Função chamada pela rota para receber as chamadas a API. Recebe como query params, a pagina (page) e a quantidade de registro a ser exibida (size)
     * @param request request (express) da requisição
     * @param response response (express) da requisição
     * @returns retorna uma lista de imóveis
     * @Example propertiesRoutes.post('/', createPropertiesController.handle);
   */
  async handle(request: Request, response: Response): Promise<Response<Property[]>> {


    const { size, page } = request.query;



    const listPropertiesUseCase = container.resolve(ListPropertiesUseCase);


    const properties = await listPropertiesUseCase.execute({ page: Number(page), size: Number(size) });


    return response.status(200).json({ properties });
  }
}
