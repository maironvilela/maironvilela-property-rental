import { Property } from '@modules/properties/infra/mysql/entities/Property';
import { IPropertiesRepository } from '@modules/properties/repositories/IPropertiesRepository';
import AppError from '../../../../shared/error/AppError';
import { inject, injectable } from 'tsyringe';


interface IRequest {
  id: string | undefined;
}

@injectable()
export class FindPropertyByIdUseCase {

  constructor(
    @inject('PropertiesRepository')
    private propertiesRepository: IPropertiesRepository) { }

  async execute({ id }: IRequest): Promise<Property | undefined> {

    if (!id) {
      throw new AppError('ID Invalido', 400);
    }
    const property = await this.propertiesRepository.findById(id);

    if (!property) {
      throw new AppError('Usuário Não Encontrado', 400);
    }

    return property;

  }


}
