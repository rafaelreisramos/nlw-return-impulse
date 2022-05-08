<h1 align="center">
    <img alt="Feedget" src=".github/cover.svg" />
</h1>

<br>

## 🧪 Tecnologias

Esse projeto foi desenvolvido usando as seguintes tecnologias:

- [React](https://reactjs.org)
- [Tailwindcss](https://tailwindcss.com/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)

## 🔖 Layout

Você pode visualizar o layout do projeto através do link abaixo:

- [Layout Web/Mobile](https://www.figma.com/community/file/1102912516166573468/Feedback-Widget)

Lembrando que você precisa ter uma conta no [Figma](http://figma.com/).

## 💻 Projeto

Feedget é um Widget de feedback.

Este foi um projeto desenvolvido durante a **[Next Level Return](https://lp.rocketseat.com.br/nlw-return)**, apresentada entre os dias
2 e 6 de Maio de 2022.

## A milha extra

- [x] O projeto tem uma branch **prefers-color-scheme** com as classes de css do tailwind ajustadas para que o modo **dark** ou **light** seja selecionado automaticamente baseado nas configurações do usuário.
- [x] O projeto também foi atualizado para usar um **banco de dados Postgres** com um arquivo docker compose para facilitar o setup do ambiente de desenvolvimento.
- [ ] **TODO**: Melhorar design do e-mail
- [ ] **TODO**: Dashboard de feedbacks

## 🚀 Como executar

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone https://github.com/rafaelreisramos/nlw-return-impulse.git
$ cd nlw-return-impulse
```

- É necessário que você tenha o [Docker Compose](https://docs.docker.com/compose/install/) instalado.
- Para verificar o envio do e-mail e completar os dados necessários das variáveis de ambiente é necessária a criação de uma conta no [Mailtrap](https://mailtrap.io/).

Para iniciar o projeto siga os passos abaixo:

```bash
# Instalar as dependências
$ npm install

# Para o projeto mobile é necessário instalar separadamente por ele ainda não
# estar integrado ao npm workspaces
$ cd mobile
mobile$ npm install

# Configurar o projeto do server
$ cd server

# Editar o arquivo .env com as variáveis de ambiente
server$ cp .env.example .env

# Iniciar o container com o banco de dados e criar as tabelas
server$ docker compose up -d
server$ npx prisma migrate dev

# Iniciar o server
server$ npm run dev

# Configurar o arquivo .env.local com as variáveis de ambiente
$ cd web
web$ cp .env.example .env.local

# Iniciar o projeto do app web
web$ npm run dev

# TODO: Iniciar o projeto mobile
$ cd mobile
mobile$ npm run start
```

O app estará disponível no seu browser pelo endereço http://localhost:3000.

O server irá expor a api em http://localhost:3333

O app mobile pode ser acessado lendo o código de barras exibido no console após a execução do comando de start. É necessário que você tenha o app [Apple Expo Go](https://itunes.apple.com/app/apple-store/id982107779) ou [Android Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www) instalado em seu celular.

## 📝 License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
