import { Property } from '../../infra/mysql/entities/Property';
import { IPropertiesRepository } from '../../repositories/IPropertiesRepository';

export class CreatePropertiesUseCase {

  private propertiesRepository: IPropertiesRepository;

  constructor(propertiesRepository: IPropertiesRepository) {

    this.propertiesRepository = propertiesRepository;

  }

  async execute(property: Property): Promise<Property> {

    const result = await this.propertiesRepository.save(property);

    return result;
  }
}
