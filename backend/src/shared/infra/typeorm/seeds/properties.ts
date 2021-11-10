
import faker from 'faker';
import { createConnection } from 'typeorm';


(async function () {

  console.log('## Criando imovel ##');

  const connection = await createConnection();

  for (let i = 1; i < 20; i++) {

    console.log(`VALUES(
      '${faker.lorem.sentence()}',
      ${faker.finance.amount()},
      ${faker.datatype.boolean()},
      ${faker.datatype.boolean()},
      ${i % 2 == 0 ? 'casa' : 'apartamento'},
      ${i})`
    );

    await connection.query(`
    INSERT INTO properties(description, price, is_sale, is_location, property_type, address_id)
    VALUES(
      '${faker.lorem.sentence()}',
      ${faker.finance.amount()},
      ${faker.datatype.boolean()},
      ${faker.datatype.boolean()},
      'Casa',
      ${i});`
    );
  }



  await connection.close();


})().then(() => console.log('Imovel created'));
