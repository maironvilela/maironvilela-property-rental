/**
   * @summary Testes de integração para validar as chamadas a API para a criação dos registros
*/

import faker from 'faker';
import request from 'supertest';
import { Connection } from 'typeorm';

import { app } from '../../../../shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';
import { getPropertyInTest } from './CreatePropertiesUseCase.spec';


let connection: Connection;


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

    const property = getPropertyInTest();

    const response = await request(app).post('/api/properties').send(property);



    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('propertyType');
    expect(response.body).toHaveProperty('created_at');
    expect(response.body).toHaveProperty('updated_at');
    expect(response.body).toHaveProperty('specifications');
    expect(response.body).toHaveProperty('address');
    expect(response.body).toHaveProperty('propertyImages');
    expect(response.body.propertyImages.length).toEqual(5);
    expect(response.body.specifications.length).toEqual(5);
    expect(response.body.propertyImages[2].isMainImage).toEqual(true);



  });

  /**
 * @description Valida a exceção caso nao for informado a descrição do imóvel
**/
  it('should not be able to create a new property without the description property', async () => {


    const response = await request(app).post('/api/properties').send({

      description: '',
      price: 600,
      isLocation: true,
      isSale: true

    });

    const errors = response.body.errors;


    expect(response.status).toBe(400);
    expect(errors.length).toEqual(1);
    expect(errors[0].msg).toEqual('Invalid value');
    expect(errors[0].param).toEqual('description');



  });

  /**
 * @description Valida a exceção caso nao for informado o valor do imóvel
**/
  it('should not be able to create a new property without the price property', async () => {


    const response = await request(app).post('/api/properties').send({

      description: faker.lorem.paragraph(),
      isSale: faker.datatype.boolean(),
      isLocation: faker.datatype.boolean(),

    });

    const errors = response.body.errors;


    expect(response.status).toBe(400);
    expect(errors.length).toEqual(1);
    expect(errors[0].msg).toEqual('Invalid value');
    expect(errors[0].param).toEqual('price');

  });


  /**
 * @description Valida a exceção caso não for informado a disponibilidade para venda do imóvel
**/
  it('should not be able to create a new property without the isSale property', async () => {


    const response = await request(app).post('/api/properties').send({

      description: faker.lorem.paragraph(),
      price: faker.datatype.number(),
      isLocation: faker.datatype.boolean()

    });

    const errors = response.body.errors;


    expect(response.status).toBe(400);
    expect(errors.length).toEqual(1);
    expect(errors[0].msg).toEqual('Invalid value');
    expect(errors[0].param).toEqual('isSale');

  });



  /**
 * @description Valida a exceção caso não for informado a disponibilidade para locação do imóvel
**/
  it('should not be able to create a new property without the isLocation property', async () => {


    const response = await request(app).post('/api/properties').send({

      description: faker.lorem.paragraph(),
      price: faker.datatype.number(),
      isSale: faker.datatype.boolean(),

    });

    const errors = response.body.errors;


    expect(response.status).toBe(400);
    expect(errors.length).toEqual(1);
    expect(errors[0].msg).toEqual('Invalid value');
    expect(errors[0].param).toEqual('isLocation');

  });

});



