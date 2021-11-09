<h1 align="center">
    <img alt="Open Food" src="https://user-images.githubusercontent.com/4884154/140832989-a3163f52-e0b3-41b5-a9f1-257c294a191d.jpg" />
    <br>
 </h1>
<hr>

<p align="center">
  <a href="#sobre-o-projeto">Sobre o Projeto </a>|  
    <a href="#diagramas">Diagramas </a>
  <a href="#tecnologias-e-ferramentas">Tecnologias e Ferramentas </a>|
   <a href="#como-utilizar">Como Utilizar </a>|
  <a href="#documentação">Documentação </a>|
  <a href="#testes-unitários-e-de-integração">Testes Unitários e de Integração </a>|
  <a href="#protrotipo">Prototipo </a>

  <hr>
 </p>

 ## Sobre o Projeto

Stay Home é um projeto fullstack que tem como objetivo realizar o gerenciamento de locação e venda de imóveis

## Tecnologias e Ferramentas

### Back-end
 
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



### Front-end

 - [NextJS](https://nextjs.org)
  - [TypeScript](https://www.typescriptlang.org/)
 - [Axios](https://github.com/axios/axios)
 - [Chakra](https://chakra-ui.com)
 - [SASS](https://sass-lang.com)
 - [Prettier](https://prettier.io/)
 - [ESLint](https://eslint.org/)
 - [Figma](https://www.figma.com/file/2DQtli5BuCnqFj5IoyajI9/imobiliaria?node-id=0%3A1)

 ## Diagramas 

 ### Diagrama ER

 ![diagrama ER](https://user-images.githubusercontent.com/4884154/140836985-6fc2a790-b6dc-428a-8b47-e8479150e06f.png)

 ## Como utilizar

Para clonar e executar a aplicação, é necessário ter instalado as seguintes ferramentas:
- [NodeJS](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)

### Back-End

```bash
# Realize o clone do repositorio
$ git clone https://github.com/maironvilela/property-rental.git

# navegue ate o diretório backend
$ cd backend

# Instale as dependencias
$ yarn install

# Renomeio o arquivo ".env.example" para ".env" e informe os valores das variaveis de ambiente:
# SERVER_PORT: Porta em que o servidor ouvira as requisições
# DB_HOST: IP do banco de dados mysql
# DB_PORT: Porta do banco de dados mysql
# DB_NAME: Nome da base de dados que 
# DB_USER: usuário do banco de dados
# DB_PASS: Senha do banco de dados
 

$ mv .env.example .env

# Renomeie o arquivo ormconfig.example.json para ormconfig.json e altere as informações de acesso ao banco de dados se necessário

$ mv ormconfig.example.json ormconfig.example.json

# Crie o containers do Mysql através do docker-compose
$ make up

# Cria as tabelas do banco de dados rodando as migrations do typeorm
$ make run
 
```

> Observação 01: Como não há nenhuma informação sensívels nos arquivos de configuração do banco de dados e das variavéis de ambiente, mantive as informações 

> Observação 02: Necessário realizar a criação do banco de dados com o nome definido nos arquivos de configuração


### Front-End

```bash
# navegue ate o diretório front-end. (Pressupondo que esteja no diretório back-end)
$ cd ../frontend

# Instale as dependencias
$ yarn install

```

> Observação: URL de acesso ao sistema via browser: http://localhost:3333


## Documentação
Para acessar a documentação da API, após "rodar" o projeto, acesse a seguinte url: http://localhost:3333/api-docs/

![swagger page 1](https://user-images.githubusercontent.com/4884154/140834970-361f0f31-7b68-4fa8-a302-fea19ce267ba.png)


### Rota GET
![suagget page get](https://user-images.githubusercontent.com/4884154/140835071-00747a46-4dcc-4f87-9c03-8396614566e5.png)

### Rota POST
![swagger page - post](https://user-images.githubusercontent.com/4884154/140835144-ca85359d-1961-4e68-a8f8-0a960deca22c.png)

### Rota GET/ID
> Pendente implementação da documentação
### Rota DELETE/ID
> Pendente implementação da documentação
> Pendente implementação do endpoint

### Rota UPDATE/ID
> Pendente implementação da documentação
> Pendente implementação do endpoint


## Testes Unitários e de Integração

Todo sistema foi desenvolvido utilizando o metodo TDD (Test Driven Development). Utilizando as bibliotecas Jest e Supertest

Script os testes unitários 

```bash
  yarn test
````


![Testes unitarios](https://user-images.githubusercontent.com/4884154/140837278-e9ae51fa-6b10-4853-bc14-7dd6aa283c04.png)


### Protrotipo
> Em Desenvolvimento

O prototipo do layout do sistema foi desenvolvido utilizando a ferramenta Figma

https://www.figma.com/file/2DQtli5BuCnqFj5IoyajI9/imobiliaria?node-id=0%3A1


 #### Pagina Home
 > Em Desenvolvimento.
 > Pendente integração com API

 ![figma - home](https://user-images.githubusercontent.com/4884154/140838269-52e9604d-70e0-4118-b97a-6b253abc1aad.png)

  ####  Pesquisa de Imóvel
  > Em Desenvolvimento.
  > Pendente integração com API

![figma - pesquisa](https://user-images.githubusercontent.com/4884154/140838430-888c1efe-b7af-4d2b-9f6c-fb6669ea77b8.png)


#### Pagina Detalhes Imóvel 
> Pendente

![figma - detalhes](https://user-images.githubusercontent.com/4884154/140838496-dec19863-c4cb-4e8c-b539-945683bf3fcc.png)

#### Pagina Cadastro Imovel 
> Pendente

 

 

 
