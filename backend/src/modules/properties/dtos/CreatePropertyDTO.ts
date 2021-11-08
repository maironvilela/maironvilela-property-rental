/**
   * @summary DTO com as informações do imóvel para persistir no banco de dados
*/

import { Address } from '../infra/mysql/entities/Address';
import { Specification } from '../infra/mysql/entities/Specification';

export class CreatePropertyDTO {

  description: string;
  propertyType: string;
  price: number;
  isLocation: boolean;
  isSale: boolean;
  specifications: Specification[];
  address: Address;

}
