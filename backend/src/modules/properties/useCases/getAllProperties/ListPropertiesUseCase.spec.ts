import 'reflect-metadata';

import { IPropertiesRepository } from '../../repositories/IPropertiesRepository';
import { PropertiesRepositoryFake } from '../../repositories/fake/PropertiesRepositoryFake';
import { ListPropertiesUseCase } from './ListPropertiesUseCase';
import { getPropertyInTest } from '../createProperties/CreatePropertiesUseCase.spec';


/**
  * @description Teste que valida a criação de um registro de imóvel
*/
describe('List Properties', () => {

  let propertiesRepository: IPropertiesRepository;
  let listPropertiesUseCase: ListPropertiesUseCase;



  beforeEach(() => {
    propertiesRepository = new PropertiesRepositoryFake;
    listPropertiesUseCase = new ListPropertiesUseCase(propertiesRepository);
  });


  /**
  * @description Teste que valida o retorno de uma lista de imóveis
*/
  it('should be able to return a listing of properties ', async () => {

    const size = 5;
    const page = 1;

    // Salva 10 registros no banco de dados
    for (let i = 0; i < 10; i++) {
      await propertiesRepository.save(getPropertyInTest());
    }

    const result = await listPropertiesUseCase.execute({ page, size });

    // Valida a quantidade de retorno da lista que deve ser o valor definido na constante "size"
    expect(result.length).toEqual(size);


  });
});



