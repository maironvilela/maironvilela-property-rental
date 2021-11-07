/*
  Necessário refatorar nome da classe
*/
import { inject, injectable } from 'tsyringe';
import { Property } from '@modules/properties/infra/mysql/entities/Property';
import { IPropertiesRepository } from '../../repositories/IPropertiesRepository';


interface IRequest {
  page: number;
  size: number;
}

@injectable()
export class ListPropertiesUseCase {
  constructor(
    @inject('PropertiesRepository')
    private propertiesRepository: IPropertiesRepository) { }

  async execute({ page = 1, size = 10 }: IRequest): Promise<Property[]> {


    console.log('ListPropertiesUseCase');

    const properties = await this.propertiesRepository.findAll({ page, size });

    return properties;
  }
}
