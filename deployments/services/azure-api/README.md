# Deploying to Azure Function Apps

[Back to deployments/README.md](../README.md).

## Commands

#### `npm start`

Start offline server for locally testing function.

This command is shorthand for `../node_modules/.bin/serverless offline`.

#### `npm run deploy`

Deploy function to Azure.

This command is shorthand for `../node_modules/.bin/serverless deploy`.

## Things to note

- Using serverless-webpack plugin with a webpack.config.js rather than serverless-bundle as the latter is only really built to work with AWS deployments
- It appears serverless-azure-functions comes with its own offline plugin built-in so we do not use serverless-offline plugin for Azure
