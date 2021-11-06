import { Request, Response } from 'express';

export class GetAllPropertiesController {

  async handle(request: Request, response: Response): Promise<Response> {

    const { size, page } = request.query;

    /*
    const getAllPropertiesUseCase = new GetAllPropertiesUseCase();

    getAllPropertiesUseCase.execute();
    */

    return response.status(200).json({ size, page });
  }
}
