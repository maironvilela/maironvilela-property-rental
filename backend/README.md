<h1 align="center">
    <img alt="Open Food" src="https://user-images.githubusercontent.com/4884154/140832989-a3163f52-e0b3-41b5-a9f1-257c294a191d.jpg" />
    <br>
 </h1>
<hr>

<p align="center">
  <a href="#sobre-o-projeto">Sobre o Projeto </a>|
  <a href="#tecnologias-e-ferramentas">Tecnologias e Ferramentas </a>|
  <a href="#como-utilizar">Como Utilizar </a>|
  <a href="#documentação">Documentação </a>

  <hr>
 </p>

 ## Sobre o Projeto

Stay Home é um projeto que tem como objetivo realizar o gerenciamento de locação e venda de imoveis

## Tecnologias e Ferramentas

 - [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
 - [TypeScript](https://www.typescriptlang.org/)
 - [NodeJS](https://nodejs.org/en/)
 - [Docker](https://www.docker.com/)
 - [Docker-compose](https://github.com/docker/compose)
 - [Tsyringe](https://www.npmjs.com/package/tsyringe)
 - [Swagger](https://swagger.io/)
 - [Express](https://expressjs.com/pt-br/)
 - [Jest](https://jestjs.io/pt-BR/)
 - [supertest](https://www.npmjs.com/package/supertest)
 - [Prettier](https://prettier.io/)
 - [ESLint](https://eslint.org/)
 - [Faker](https://www.npmjs.com/package/faker/)
 - [Express Validator](https://express-validator.github.io/docs/)


## Como utilizar

Para clonar e executar a aplicação, é necessário ter instalado as seguintes ferramentas:
- [NodeJS](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)

```bash
# Realize o clone do repositorio
$ git clone https://github.com/maironvilela/open-food.git

# navegue ate o diretório backend
$ cd backend

# Instale as dependencias
$ yarn install

# Renomeio o arquivo ".env.example" para ".env" e informe os valores das variaveis de ambiente:
# SERVER_PORT: Porta em que o servidor ouvira as requisições
# DB_HOST: IP do banco de dados MongoDB
# DB_PORT: Porta do banco de dados MongoDB
# DB_NAME: Nome da base de dados que armazenará as coleções
# DB_USER: usuario do banco de dados
# DB_PASS: Senha do banco de dados
# REDIS_HOST: IP do banco de dados Redis
# REDIS_PORT: Porta do banco de dados Redis

$ mv .env.example .env

# Crie os containers do Mongo e do Redis através do docker-compose
$ make up

# Execute o projetos
$ yarn dev

```
## Documentação
Para acessar a documentação da API, após "rodar" o projeto, acesse a seguinte url: http://localhost:3333/api-docs/

![swagger-product-id](https://user-images.githubusercontent.com/4884154/135371194-924832ac-7cfa-428b-bcf8-24aadb698523.png)

![swagger-product](https://user-images.githubusercontent.com/4884154/135371054-dad211a1-6ef7-48cd-8f91-5f491fbd72ec.png)
