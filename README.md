# Projeto 4Pawn-app

# Contexto

Projeto criado por mim feito com TypeScript, Sequelize, NestJS, React. Neste projeto utilizando os princípios SOLID da Programação Orientada a Objeto, e microsserviços, foi-se feito uma API para um site Front-end feito em React com Typescript, onde o usuário faz um Login que se autenticado na API, recebe um token JWT que o permite acesso ao site por um certo período, permitindo ver, os animais que estão sendo doados, permite adotá-los, alterar seu e-mail ou senha e caso você possuir permissão de Administrador(validado pelo Passport com Nest) pode adicionar novos animais para doação, editar o peso, ano, status de adoção e imagem do animal. O Back-end foi feito utilizando padrão microsserviços com a API separada em Infra(HTTP e BD) e aplicação em si ambos sendo servidos com interfaces (Injeção de dependências), desta forma é facilmente manutenível, caso for desejado alterar o banco de Dados, ou adicionar funções novas, basta acessar o diretório correto e realizar a alteração. O Front-end da mesma forma do back-end, segue um padrão muito popular e de fácil manutenção (Atomic design), permitindo facilmente a reutilização dos Componentes e fácil manutenção ou adição de novos conteúdos para a página.

## Técnologias usadas

Front-end:

> Desenvolvido usando: React, CSS3, HTML5, TypeScript, Bootstrap, Craco, Axios, Atomic Design.

Back-end:

> Desenvolvido usando: NodeJS, NestJS, MYSQL, Sequelize, TypeScript, POO, Jwt, SOLID, Jest, Passport, Class Validator, Microsserviços.

## Executando aplicação

- Para rodar a aplicação:

  ```bash
  cd 4Pawn-app/ && docker-compose up -d --build
  ```

Api rodando em http://localhost:3001/ e front rodando em http://localhost:3000/
