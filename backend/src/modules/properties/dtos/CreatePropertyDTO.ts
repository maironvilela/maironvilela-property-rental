/**
   * @summary DTO com as informações do imóvel para persistir no banco de dados
*/

import { Address } from '../infra/mysql/entities/Address';
import { PropertyImages } from '../infra/mysql/entities/PropertyImages';
import { Specifications } from '../infra/mysql/entities/Specifications';

export class CreatePropertyDTO {

  description: string;
  propertyType: string;
  salePrice: number;
  rentalPrice: number;
  isLocation: boolean;
  isSale: boolean;
  specifications: Specifications[];
  address: Address;
  propertyImages: PropertyImages[];
  aboutTheProperty: string

}
