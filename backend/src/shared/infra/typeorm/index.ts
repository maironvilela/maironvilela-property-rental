/**
   * @summary Arquivo responsável por mantes a função que criará uma conexão com o banco de dados
**/


import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(


    Object.assign(defaultOptions, {
      host: process.env.NODE_ENV === 'test'
        ? process.env.DB_HOST_TEST
        : process.env.DB_HOST,

      database:
        process.env.NODE_ENV === 'test'
          ? process.env.DB_NAME_TEST
          : defaultOptions.database,
    })
  );
};
