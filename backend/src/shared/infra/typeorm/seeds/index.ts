
import { Property } from '@modules/properties/infra/mysql/entities/Property';
import { savePropertyQueue } from '../../../../modules/properties/lib/Queue';



import faker from 'faker';
import { Specifications } from '@modules/properties/infra/mysql/entities/Specifications';
import { Address } from '@modules/properties/infra/mysql/entities/Address';
import { PropertyImages } from '@modules/properties/infra/mysql/entities/PropertyImages';

import createConnection from '../index';
import { delay } from 'tsyringe';

export const getPropertyInTest = async (i: number) => {

  await new Promise(f => setTimeout(f, 5000));


  const property = new Property();
  const address = new Address();

  const specifications: Specifications[] = [];

  const propertyImages: PropertyImages[] = [];

  for (let i = 0; i < 5; i++) {

    specifications.push({
      name: faker.lorem.word(),
      description: faker.lorem.paragraph()
    });

    propertyImages.push({
      imageUrl: `http://placeimg.com/1024/${Math.floor(Math.random() * (700 - 500) + 500)}/nature`,
      isMainImage: i === 2 ? true : false
    });

  }

  address.zipCode = faker.address.zipCode();
  address.streetAddress = faker.address.streetName();
  address.number = property.price = faker.datatype.number();
  address.complement = faker.address.secondaryAddress();
  address.district = faker.address.county();
  address.city = faker.address.city();
  address.state = faker.address.state();

  property.description = faker.lorem.sentence().substring(1, 100);
  property.price = faker.datatype.number();
  property.isSale = faker.datatype.boolean();
  property.isLocation = faker.datatype.boolean();
  property.specifications = specifications;
  property.propertyType = i % 2 === 0 ? 'Casa' : 'Apartamento';
  property.address = address;
  property.propertyImages = propertyImages;
  return property;
};




(async function () {

  const connection = await createConnection();


  await connection.query('DROP DATABASE properties_rental');


  await connection.query('CREATE DATABASE properties_rental');

  await connection.query('USE properties_rental');


  await connection.runMigrations();

  await new Promise(f => setTimeout(f, 5000));


  await connection.runMigrations().then(async () => {

    for (let i = 1; i <= 600; i++) {
      const property = await getPropertyInTest(i);
      await savePropertyQueue.add({ property });
    }

  });

})();

