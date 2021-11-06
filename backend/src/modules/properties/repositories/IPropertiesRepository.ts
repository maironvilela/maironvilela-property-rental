/**
   * @summary Conjunto de funções que devem ser implementadas para iterações com o banco de dados para gerenciamento do modulo "Properties"
   * @version: 1.0
*/

import { FindAllPropertiesDTO } from '../dtos/FindAllPropertiesDTO';
import { Property } from '../infra/mysql/entities/Property';



export interface IPropertiesRepository {

  /**
   * @description Função que realiza a busca paginada de vários imóveis
   * @param page Pagina que deseja realizar a busca no banco de dados { page: 2 }
   * @param size Quantidade de registros que deseja buscar no banco de dados { size:1 }
   * @returns retorna uma lista de imóveis com a quantidade de registros informado no parâmetro 'size'
   * @Example findAll( { recordsPerPage: 10, page: 2 } )
   */
  findAll(data: FindAllPropertiesDTO): Promise<Property[]>;


  /**
 * @description Função que salva o registro de um imóvel no banco de dados
 * @param property informações do imóvel que deseja salvar
  * @returns retorna as informações do imóvel salvo
 * @Example const result = await this.propertiesRepository.save(property);

 */
  save(property: Property): Promise<Property>

}
