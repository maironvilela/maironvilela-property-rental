/* eslint-disable @typescript-eslint/no-unused-vars */
import { CreatePropertyDTO } from '@modules/properties/dtos/CreatePropertyDTO';
import { getRepository, Repository } from 'typeorm';


import { FindAllPropertiesDTO } from '../../../dtos/FindAllPropertiesDTO';
import { IPropertiesRepository } from '../../../repositories/IPropertiesRepository';
import { Property } from '../entities/Property';

export class PropertiesRepository implements IPropertiesRepository {

  private repository: Repository<Property>;


  constructor() {

    this.repository = getRepository(Property);

  }


  async findAll({ page, size }: FindAllPropertiesDTO): Promise<Property[]> {

    const properties = await this.repository.find();
    return properties;
  }


  async save({ price, isSale, isLocation, specifications, description, propertyType, address }: CreatePropertyDTO): Promise<Property> {

    const property = this.repository.create({
      price, isSale, isLocation, specifications, description, propertyType, address
    });

    const propertySave = await this.repository.save(property);

    return propertySave;

  }
}
