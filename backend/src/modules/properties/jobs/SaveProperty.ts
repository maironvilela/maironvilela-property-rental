
import { getRepository } from 'typeorm';
import { Property } from '../infra/mysql/entities/Property';

import createConnection from '../../../shared/infra/typeorm/index';


interface DataProps {
  property: Property,
}

export default {
  key: 'SaveProperty',

  async handle({ property }: DataProps) {

    const connection = await createConnection();

    const repository = getRepository(Property);


    const propertyCreate = repository.create({
      ...property
    });

    const propertySave = await repository.save(propertyCreate);



    await connection.close().then(() => {
      console.log(`___ IMÓVEL ${propertySave.id} ADICIONADO ___`);
    });

  }
};
