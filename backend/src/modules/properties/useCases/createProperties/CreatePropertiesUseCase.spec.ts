/**
   * @summary Testes unitários para validar as regras de negocio para persistir um imóvel
*/
import 'reflect-metadata';
import faker from 'faker';


import { Property } from '../../infra/mysql/entities/Property';
import { IPropertiesRepository } from '../../repositories/IPropertiesRepository';
import { PropertiesRepositoryFake } from '../../repositories/fake/PropertiesRepositoryFake';
import { CreatePropertiesUseCase } from './CreatePropertiesUseCase';
import { Specification } from '@modules/properties/infra/mysql/entities/Specification';
import { Address } from '@modules/properties/infra/mysql/entities/Address';


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
    expect(result).toHaveProperty('propertyType');
    expect(result).toHaveProperty('address');
    expect(result).toHaveProperty('created_at');
    expect(result).toHaveProperty('updated_at');
    expect(result.specifications.length).toEqual(5);

  });

});

/**
  * @description Retorna um imóvel com dados fictícios utilizando a biblioteca faker. Constante é exportada para utilização nos demais testes de que necessita da criação de uma instância de imóvel
*/
export const getPropertyInTest = () => {
  const property = new Property();
  const address = new Address();

  const specifications: Specification[] = [];

  for (let i = 0; i < 5; i++) {

    specifications.push({
      name: faker.lorem.word(),
      description: faker.lorem.paragraph()
    });

  }

  address.zipCode = faker.address.zipCode();
  address.streetAddress = faker.address.streetName();
  address.number = property.price = faker.datatype.number();
  address.complement = faker.address.secondaryAddress();
  address.district = faker.address.county();
  address.city = faker.address.city();
  address.state = faker.address.state();

  property.description = faker.lorem.word(3);
  property.price = faker.datatype.number();
  property.isSale = faker.datatype.boolean();
  property.isLocation = faker.datatype.boolean();
  property.specifications = specifications;
  property.propertyType = 'casa';
  property.address = address;

  return property;
};
