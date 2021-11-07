/**
    @summary  Classe utilizada para tratamento de erros na resposta da API
**/

class AppError {
  public readonly message: string;
  public statusCode: number;

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
