

import { IPropertiesRepository } from '../../repositories/IPropertiesRepository';
import { PropertiesRepositoryFake } from '../../repositories/fake/PropertiesRepositoryFake';
import { GetAllPropertiesUseCase } from '../getAllProperties/GetAllPropertiesUseCase';
import { getPropertyInTest } from '../createProperties/CreateProperties.spec';


/**
  * @description Teste que valida a criação de um registro de imóvel
*/
describe('List Properties', () => {

  let propertiesRepository: IPropertiesRepository;
  let getAllPropertiesUseCase: GetAllPropertiesUseCase;



  beforeEach(() => {
    propertiesRepository = new PropertiesRepositoryFake;
    getAllPropertiesUseCase = new GetAllPropertiesUseCase(propertiesRepository);
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

    const result = await getAllPropertiesUseCase.execute({ page, size });

    // Valida a quantidade de retorno da lista que deve ser o valor definido na constante "size"
    expect(result.length).toEqual(size);


  });
});



