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
    for (let i = 1; i <= 20; i++) {
      await connection.query(`
      INSERT INTO properties(description,price,is_sale,is_location)
      VALUES(
        '${faker.lorem.sentence()}',
        ${faker.finance.amount()},
        ${faker.datatype.boolean()},
        ${faker.datatype.boolean()}
      )
        `);

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

    const response = await request(app).get('/api/properties');

    expect(response.body.properties.length).toEqual(20);

  });
});


