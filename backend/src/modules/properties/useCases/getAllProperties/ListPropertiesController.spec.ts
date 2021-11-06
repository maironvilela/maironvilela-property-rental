import request from 'supertest';
import { app } from '@shared/infra/http/app';

describe('List Properties Controller', () => {

  it('should be able to return a listing of properties', async () => {

    const response = await request(app).get('/api/properties');

    console.log(response.status);

  });
});
