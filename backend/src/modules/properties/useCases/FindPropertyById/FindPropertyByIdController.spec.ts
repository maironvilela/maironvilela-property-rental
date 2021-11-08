/**
   * @summary Testes de integração para validar as chamadas a API do modulo Properties para a pesquisar um imóvel pelo seu id
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

  it('should be able to return a property by id', async () => {

    const response = await request(app).get('/api/properties?size=10&&page=1');

    const id = response.body.properties[0].id;

    const responseGetProperty = await request(app).get(`/api/properties/${id}`);

    expect(responseGetProperty.status).toEqual(200);


  });

  it('should not be able to return a property by invalid id', async () => {
    const response = await request(app).get('/api/properties/invalid_id');
    expect(response.status).toEqual(400);
  });


});


