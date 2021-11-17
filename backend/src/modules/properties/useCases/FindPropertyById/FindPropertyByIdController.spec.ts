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
      INSERT INTO properties(description,about_the_property, rental_price, sale_price, is_sale, is_location, property_type, address_id)
      VALUES(
      '${faker.lorem.sentence()}',
      '${faker.lorem.sentence()}',
      ${faker.finance.amount()},
      ${faker.finance.amount()},
      ${faker.datatype.boolean()},
      ${faker.datatype.boolean()},
      'casa',
        '1')`
      );
    }


    for (let i = 1; i <= 10; i++) {
      await connection.query(`
      INSERT INTO property_images(image_url,property_id, is_main_image)
      VALUES(
        '${faker.image.imageUrl()}',
        '1',
        ${i == 2 ? '1' : '0'}
       );`
      );
    }

    await connection.query(`
      INSERT INTO specifications(name,description, property_id)
      VALUES('quartos', '2', '1');`
    );
    await connection.query(`
    INSERT INTO specifications(name,description, property_id)
    VALUES('vagas', '3', '1');`
    );

    await connection.query(`
    INSERT INTO specifications(name,description, property_id)
    VALUES('área', '200', '1');`
    );




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

    console.log(responseGetProperty.body);


    // Válida o status da requisição
    expect(responseGetProperty.status).toEqual(200);

    expect(responseGetProperty.body.property).toHaveProperty('propertyImages');
    expect(responseGetProperty.body.property.propertyImages.length).toEqual(10);

    expect(responseGetProperty.body.property).toHaveProperty('aboutTheProperty');
    expect(responseGetProperty.body.property.aboutTheProperty).not.toBeNull();



    expect(responseGetProperty.body.property).toHaveProperty('address');
    expect(responseGetProperty.body.property.address).not.toBeNull();

    expect(responseGetProperty.body.property).toHaveProperty('specifications');
    expect(responseGetProperty.body.property.specifications.length).toEqual(3);



  });

  it('should not be able to return a property by invalid id', async () => {
    const response = await request(app).get('/api/properties/invalid_id');
    expect(response.status).toEqual(400);
  });


});


