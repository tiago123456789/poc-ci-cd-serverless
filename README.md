About project:
===============

This project is one poc(Proof of concept) where I create CI/CD with github actions to deploy application's serverless in environments: dev, staging and production.

The application flow:
======================

- When send code to branch **develop** or approved pull request made to **develop** github actions run tests and after deploy application in development environmet.
- After create pull request to branch **staging** and approved pull request made to **staging** github actions run tests and after deploy application in staging environment.
- After create pull request to branch **master** and approved pull request made to **master** github actions run tests and after deploy application in production environment.

Requirements:
==============

- Aws cli installed and configured with credentions needs to deploy application
- Serverless framework installed
- Node.js
- Npm

Instructions run poc locally:
=============================

- Clone the project
- Execute command **npm install** to install package needs to project running ok.
- Create *.env* file based in *.env.example* file
- Execute command: **npm test** to running tests
- Execute command: **npm run start:dev** to running application locally.