/**
   * @summary Testes de integração para validar as chamadas a API do modulo Properties
*/

import request from 'supertest';

import { app } from '../../../../shared/infra/http/app';
import { Connection } from 'typeorm';
import createConnection from '@shared/infra/typeorm';


let connection: Connection;


/**
  * @description Teste que valida a criação de um registro de imóvel com sucesso
  *
*/
describe('Create Properties Controller', () => {

  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });
  /**
     * @description Valida a persistência de um imóvel
   */
  it('should be able to create a new properties', async () => {


    const response = await request(app).post('/api/properties').send({

      description: 'Casa de frente para o mar',
      price: 600,
      isLocation: true,
      isSale: true

    });

    console.log(response.body);


    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('created_at');
    expect(response.body).toHaveProperty('updated_at');

  });

});



