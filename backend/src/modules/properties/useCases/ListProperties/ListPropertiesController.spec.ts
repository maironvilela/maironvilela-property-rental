/**
   * @summary Testes de integração para validar as chamadas a API do modulo Properties para a listagem dos imóveis
*/

import faker from 'faker';

import { app } from '@shared/infra/http/app';
import request from 'supertest';
import createConnection from '@shared/infra/typeorm/index';
import { Connection } from 'typeorm';

let connection: Connection;


describe('List Properties Controller', () => {

  beforeAll(async () => {

    connection = await createConnection();
    await connection.runMigrations();


    // Realiza a criações de vários registros no banco de dados de teste

    await connection.query(`
    INSERT INTO address(zip_code,street_address,number,complement,district,city,state)
    VALUES(
      '30514000',
     'Avenida Padre Jose Maurício',
      250,
      'Casa A',
      'Vista Alegre',
      'Belo Horizonte',
      'MG')`
    );



    for (let i = 1; i <= 20; i++) {
      await connection.query(`
      INSERT INTO properties(description, price, is_sale, is_location, property_type, address_id)
      VALUES(
      '${faker.lorem.sentence()}',
      ${faker.finance.amount()},
      ${faker.datatype.boolean()},
      ${faker.datatype.boolean()},
      'casa',
        '1')`
      );

    }

  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });


  /**
    * @description Teste que valida o retorno de todos os registros dos imóveis da API
  **/

  it('should be able to return a listing of properties', async () => {

    const response = await request(app).get('/api/properties?size=10&&page=1');


    expect(response.body.properties.length).toEqual(10);
    expect(response.body.properties[0]).toHaveProperty('address');


  });
});


