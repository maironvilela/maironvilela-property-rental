/**
    @summary Implementação da interface IPropertiesRepositories: Responsável por realizar as interações com o banco de dados
**/


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

    const properties = await this.repository.find({
      skip: (page - 1) * size,
      take: size,
      relations: ['address', 'propertyImages']

    });
    return properties;
  }


  async save({ price,
    isSale,
    isLocation,
    specifications,
    description,
    propertyType,
    address,
    propertyImages,
  }: CreatePropertyDTO): Promise<Property> {

    const property = this.repository.create({
      price,
      isSale,
      isLocation,
      specifications,
      description,
      propertyType,
      address,
      propertyImages,
    });

    const propertySave = await this.repository.save(property);

    return propertySave;

  }

  async findById(id: string): Promise<Property | undefined> {

    const property = await this.repository.findOne({ id }, {
      relations: ['address', 'propertyImages', 'specifications']

    });

    return property;
  }

}
