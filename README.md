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

**Modo dark**(versão Web) desenvolvido no [NLW Return](https://lp.rocketseat.com.br/nlw-return)

![Feedget modo dark](.github/dark-mode.gif)

## A milha extra

- [x] O modo **dark** ou **light** seja selecionado automaticamente baseado nas configurações do usuário. (Observação: no meu Ubuntu 20.04 LTS com Gnome o Google Chrome não segue o modo do sistema. Já o Firefox funciona perfeitamente)

![Feedget modo light](.github/light-mode.gif)

- [x] O projeto também foi atualizado para usar um **banco de dados Postgres** com um arquivo docker compose para facilitar o setup do ambiente de desenvolvimento.

- [x] O design do e-mail foi melhorado. O texto foi centralizado e o título, comentário e screenshot separados. O tamanho da imagem foi ajustado para caber dentro da largura especificada para o o corpo do e-mail de 660px. Para um design mais avançado e personalizado com informações do cliente pode ser usado o [handlebars](https://handlebarsjs.com/))

![E-mail template](.github/email-template.gif)

- [x] Dashboard de feedbacks: aqui foi desenvolvido apenas como demonstração do uso do React Context para compartilhar a informação dos feedbacks entre o Widget e o Dashboard. Em uma aplicação real a página de Dashboard seria autenticada e os dados viriam de uma chamada externa à uma api.

## 🚀 Como executar

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone https://github.com/rafaelreisramos/nlw-return-impulse.git
$ cd nlw-return-impulse
```

- É necessário que você tenha o [Docker Compose](https://docs.docker.com/compose/install/) instalado.
- Para verificar o envio do e-mail e completar os dados necessários das variáveis de ambiente sugiro a criação de uma conta no [Mailtrap](https://mailtrap.io/).

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
