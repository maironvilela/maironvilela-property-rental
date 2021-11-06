import { v4 as uuidv4 } from 'uuid';


export class Property {

  id?: string;
  price: number;
  isLocation: boolean;
  isSale: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor(id: string, price: number, isLocation: boolean, isSale: boolean) {

    this.id = uuidv4();
    this.price = price;
    this.isLocation = isLocation;
    this.isSale = isSale;
    this.createdAt = new Date();
    this.updatedAt = new Date();

  }
}
