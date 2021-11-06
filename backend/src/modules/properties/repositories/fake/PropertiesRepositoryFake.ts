/**
   * @summary Repositório fake para testes unitários
   * @version: 1.0
*/

import { v4 as uuidv4 } from 'uuid';

import { FindAllPropertiesDTO } from '../../dtos/FindAllPropertiesDTO';
import { Property } from '../../infra/mysql/entities/Property';
import { IPropertiesRepository } from '../IPropertiesRepository';

export class PropertiesRepositoryFake implements IPropertiesRepository {

  private properties: Property[] = [];


  async save(property: Property): Promise<Property> {

    property.id = uuidv4();
    property.createdAt = new Date();
    property.updatedAt = new Date();

    const nextIndice = this.properties.push(property);

    return this.properties[nextIndice - 1];
  }


  async findAll({ page, size }: FindAllPropertiesDTO): Promise<Property[]> {

    const initialRecord = (page - 1) * size;


    return this.properties.slice(initialRecord, size);
  }
}
