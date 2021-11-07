/**
   * @summary Classe responsável por receber da classe CreatePropertiesController as informações do    imóvel para repassa-las para o Repositório para ser persistido
**/


import { inject, injectable } from 'tsyringe';

import { Property } from '../../infra/mysql/entities/Property';
import { IPropertiesRepository } from '../../repositories/IPropertiesRepository';


@injectable()
export class CreatePropertiesUseCase {


  constructor(@inject('PropertiesRepository') private propertiesRepository: IPropertiesRepository) { }

  /**
      * @description Função recebe uma instância de Property e repassa para o Repositorio para realizar a persistência das informações
      * @param property instância de Property recebida pelo Controller
      * @returns retorna o recurso do imóvel criado
      * @Example const result = await createPropertiesUseCase.execute(property);
  **/
  async execute(property: Property): Promise<Property> {

    const result = await this.propertiesRepository.save(property);

    return result;
  }
}
