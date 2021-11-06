/*
  Descrição do arquivo
*/
import { container } from 'tsyringe';
import { PropertiesRepository } from '../../modules/properties/infra/mysql/repository/PropertiesRepository';
import { IPropertiesRepository } from '../../modules/properties/repositories/IPropertiesRepository';


container.registerSingleton<IPropertiesRepository>(
  'PropertiesRepository',
  PropertiesRepository
);
