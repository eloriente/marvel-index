# Marvel Character Guide

### Description

This project consists of a web application for the visualization of the first 50 Marvel Comics characters and their detailed information and the first 20 comics in which they appeared that we get from the official API.

### How to start up

_Important! Before starting, the keys to the Marvel API should be defined following the [env example file](./.env.example). In case you do not have a password go to [developer.marvel.com](https://developer.marvel.com/documentation/getting_started)_

To start with the startup of the project on your computer you should make sure that you have all the Node packages installed, if not please go to your terminal and run the following command `npm install` or `yarn install`.

Once the packages have been installed, run the command `npm run dev` or `yarn dev` to upload your project to the path [localhost:5173](http://localhost:5173/).

### Project architecture

For this project, a hexagonal architecture has been followed to improve efficiency in the face of technology changes by facilitating the migration of business logic without affecting the process.

### Project structure

Inside the src folder we will find the following structure according to a hexagonal architecture.

- [Core](./src/core/): It contains the pure and independent business logic of the Front-end used.
- [Adapters](./src/adapters/): They act as bridges between the business logic and the outside world.
- [UI](./src/ui/): Business logic presentation layer, in this case using React. In case another technology will be used there could be variations in the structure.

### Important external packages used

- [Typescript](https://www.typescriptlang.org/): Programming language used throughout the project.
- [Vite](https://vite.dev/): As a React application packager.
- [Vitest](https://vitest.dev/): Used for application testing.
- [md5](https://github.com/pvorb/node-md5#readme): Package used for the generation of the hash necessary for the consumption of the Marvel API.
