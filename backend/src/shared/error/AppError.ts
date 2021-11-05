/**
 * @summary  Classe utilizada para tratamento de erros na resposta da API
 * @version: 1.0
 */

class AppError {
    // eslint-disable-next-line prettier/prettier
    public readonly message: string;
    public statusCode: number;

    constructor(message: string, statusCode = 400) {
        this.message = message;
        this.statusCode = statusCode;
    }
}

export default AppError;