/* eslint-disable @typescript-eslint/no-unused-vars */
import { getRepository, Repository } from 'typeorm';


import { FindAllPropertiesDTO } from '../../../dtos/FindAllPropertiesDTO';
import { IPropertiesRepository } from '../../../repositories/IPropertiesRepository';
import { Property } from '../entities/Property';

export class PropertiesRepository implements IPropertiesRepository {

  private repository: Repository<Property>;


  constructor() {

    this.repository = getRepository(Property);

  }


  //Alterar nome da função
  async findAll({ page, size }: FindAllPropertiesDTO): Promise<Property[]> {

    const properties = await this.repository.find();
    return properties;
  }


  async save({ price, isSale, isLocation, description }: Property): Promise<Property> {

    const property = this.repository.create({
      price, isSale, isLocation, description
    });

    const propertySave = await this.repository.save(property);

    return propertySave;

  }
}
