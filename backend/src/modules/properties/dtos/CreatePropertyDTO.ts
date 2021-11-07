/**
   * @summary DTO com as informações do imóvel para persistir no banco de dados
*/

import { Specification } from '../infra/mysql/entities/Specification';

export class CreatePropertyDTO {

  description: string;
  price: number;
  isLocation: boolean;
  isSale: boolean;
  specifications: Specification[];

}
