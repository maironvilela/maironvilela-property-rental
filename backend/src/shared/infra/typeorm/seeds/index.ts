
import faker from 'faker';


import createConnection from '../';

async function create() {
  const connection = await createConnection();

  await connection.query('DROP DATABASE properties_rental');
  await connection.query('CREATE DATABASE properties_rental');



  await connection.query(' USE properties_rental');

  await connection.runMigrations();


  console.log('Criando endereços');

  for (let i = 1; i < 20; i++) {

    await connection.query(`
    INSERT INTO address(zip_code, street_address, number, complement, district, city, state)
    VALUES(
    ${faker.address.zipCode()},
    '${faker.address.streetName()}',
    ${Math.floor(Math.random() * (700 - 10600) + 10600)},
    '${faker.address.secondaryAddress()}',
    '${faker.address.country()}',
    '${faker.address.city()}',
    '${faker.address.state()}'
  ); `
    );
  }

  console.log('Criando');

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




}

create().then(() => {
  console.log('Admin user created');
});
