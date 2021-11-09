/**
   * @summary Controller responsável busca de um imóvel pelo id
**/

import { Response, Request } from 'express';

import { Property } from '@modules/properties/infra/mysql/entities/Property';
import { container } from 'tsyringe';
import { FindPropertyByIdUseCase } from './FindPropertyByIdUseCase';



export class FindPropertyByIdController {
  /**
     * @description Função chamada pela rota para receber as chamadas a API. Recebe como query params, o id do imóvel que deseja pesquisar
     * @param request request (express) da requisição
     * @param response response (express) da requisição
     * @returns retorna um emóvel caso o mesmo seja encontrado
     * @Example propertiesRoutes.get('/:id', FindPropertyByIdController.handle);
   */
  async handle(request: Request, response: Response): Promise<Response<Property>> {
    const { id } = request.params;

    const findPropertiesByIdUseCase = container.resolve(FindPropertyByIdUseCase);


    const property = await findPropertiesByIdUseCase.execute({ id: String(id) });

    return response.status(200).json({ property });
  }
}
