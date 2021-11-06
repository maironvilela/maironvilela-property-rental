/**
   * @summary Testes unitários para validar as regras de negocio para persistir um imóvel
*/

import faker from 'faker';


import { Property } from '../../infra/mysql/entities/Property';
import { IPropertiesRepository } from '../../repositories/IPropertiesRepository';
import { PropertiesRepositoryFake } from '../../repositories/fake/PropertiesRepositoryFake';
import { CreatePropertiesUseCase } from './CreatePropertiesUseCase';


/**
  * @description Teste que valida a criação de um registro de imóvel com sucesso
*/
describe('Create Properties', () => {

  let propertiesRepository: IPropertiesRepository;
  let createPropertiesUseCase: CreatePropertiesUseCase;



  beforeEach(() => {

    propertiesRepository = new PropertiesRepositoryFake;
    createPropertiesUseCase = new CreatePropertiesUseCase(propertiesRepository);

  });

  /**
     * @description Valida a persistência de um imóvel
   */
  it('should be able to create a new properties', async () => {

    const property = getPropertyInTest();
    const result = await createPropertiesUseCase.execute(property);


    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('createdAt');
    expect(result).toHaveProperty('updatedAt');

  });

});



/**
  * @description Retorna um imóvel com dados fictícios utilizando a biblioteca faker. Constante e exportada para utilização nos demais testes de que necessita da criação de um imóvel
*/
export const getPropertyInTest = () => {
  const property = new Property();

  property.price = faker.datatype.number();
  property.isSale = faker.datatype.boolean();
  property.isLocation = faker.datatype.boolean();

  return property;
};
