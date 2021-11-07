/**
    @summary Arquivo responsável pelas configurações de injeção de dependência
**/


import { container } from 'tsyringe';
import { PropertiesRepository } from '../../modules/properties/infra/mysql/repository/PropertiesRepository';
import { IPropertiesRepository } from '../../modules/properties/repositories/IPropertiesRepository';


container.registerSingleton<IPropertiesRepository>(
  'PropertiesRepository',
  PropertiesRepository
);
