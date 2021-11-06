import { FindAllPropertiesDTO } from '../../dtos/FindAllPropertiesDTO';
import { Property } from '../../infra/mysql/entities/Property';
import { IPropertiesRepository } from '../IPropertiesRepository';

export class PropertiesRepositoryFake implements IPropertiesRepository {

  private properties: Property[] = [];


  async save(property: Property): Promise<Property> {

    const nextIndice = this.properties.push(property);

    return this.properties[nextIndice - 1];
  }


  async findAll({ page, size }: FindAllPropertiesDTO): Promise<Property[]> {

    const initialRecord = (page - 1) * size;


    return this.properties.slice(initialRecord, size);
  }
}
