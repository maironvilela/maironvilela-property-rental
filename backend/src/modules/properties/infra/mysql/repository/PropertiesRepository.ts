import { FindAllPropertiesDTO } from '../../../dtos/FindAllPropertiesDTO';
import { IPropertiesRepository } from '../../../repositories/IPropertiesRepository';
import { Property } from '../entities/Property';

export class PropertiesRepository implements IPropertiesRepository {
  async findAll({ page, size }: FindAllPropertiesDTO): Promise<Property[]> {

    const properties: Property[] = [];

    return properties;
  }
  async save(property: Property): Promise<Property> {

    return property;
  }
}
