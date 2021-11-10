
import faker from 'faker';
import { createConnection } from 'typeorm';



(async function () {

  console.log('## Criando enderços ##');

  const connection = await createConnection();


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
  await connection.close();


})().then(() => console.log('## Address created ##'));
