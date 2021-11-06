
/**
   * @summary Classe quie representa o modelo de dados de um imóvel no banco de dados
   * @version: 1.0
*/
export class Property {

  id?: string;
  price!: number;
  isLocation!: boolean;
  isSale!: boolean;
  createdAt?: Date;
  updatedAt?: Date;

}
