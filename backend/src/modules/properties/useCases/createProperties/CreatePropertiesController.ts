import { Request, Response } from 'express';


export class CreatePropertiesController {

  async handle(request: Request, response: Response): Promise<Response> {


    return response.json('CreatePropertiesController');
  }

}
