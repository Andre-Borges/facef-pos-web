## Módulo de Desenvolvimento Mobile (React Native) - Uni-FACEF.

- Instagram fake onde é possivel tirar uma foto e postar a mesma.

<h1 align="center">
  <img src="readme-assets/app.png" />
</h1>

## Instalação / Configuração

- Pré-requisitos: Para rodar o projeto react-native em seu celular ou emulador você precisa de algumas
  configurações mais especificas, recomendo este link
  (https://react-native.rocketseat.dev/) caso ainda não possua as configurações recomendadas em sua maquina.

1. Instale
   [Git](http://git-scm.com/downloads) e
   [NodeJS](http://nodejs.org/download/),
   caso você não os tenha ainda.

2. Instale todas as dependências:

   ```sh
   $ npm install
   ```

3. Inicie o server que contem algumas "postagens":

   ```sh
   $ npx json-server server.json -d 1000 -w
   ```

4. E finalmente rode:

   ```sh
   $ react-native run-android (Android)
   ou
   $ react-native run-ios (IOS)
   ```
