/**
   * @summary Testes de integração para validar as chamadas a API do modulo Properties para a listagem dos registros
   *
*/

import 'reflect-metadata';

import { IPropertiesRepository } from '../../repositories/IPropertiesRepository';
import { PropertiesRepositoryFake } from '../../repositories/fake/PropertiesRepositoryFake';

import { getPropertyInTest } from '../createProperties/CreatePropertiesUseCase.spec';
import { FindPropertyByIdUseCase } from './FindPropertyByIdUseCase';
import { Property } from '@modules/properties/infra/mysql/entities/Property';
import AppError from '@shared/error/AppError';


/**
  * @description Teste que valida a criação de um registro de imóvel
*/
describe('Find  Properties by id', () => {

  let propertiesRepository: IPropertiesRepository;
  let findPropertyByIdUseCase: FindPropertyByIdUseCase;



  beforeEach(() => {
    propertiesRepository = new PropertiesRepositoryFake;
    findPropertyByIdUseCase = new FindPropertyByIdUseCase(propertiesRepository);

  });

  /**
    * @description Teste que valida o retorno de um imóvel pelo seu id
  **/
  it('should be able to return a property by its id  ', async () => {

    const property = await propertiesRepository.save(getPropertyInTest());

    const result = await findPropertyByIdUseCase.execute({ id: property.id });

    // Valida a quantidade de retorno da lista que deve ser o valor definido na constante "size"
    expect(result).toBeInstanceOf(Property);

  });

  it('should not be able to return a property with invalid ID  ', async () => {


    expect(findPropertyByIdUseCase.execute({
      id: 'invalid_id',
    })).rejects.toBeInstanceOf(AppError);

  });
});



