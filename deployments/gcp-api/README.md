# Deploying to Google Cloud Functions

[Back to deployments/README.md](../README.md).

## Commands

#### `npm run deploy`

Deploy function to Google Cloud Functions.

This command is shorthand for `../node_modules/.bin/serverless deploy`.

## Things to note

- Using serverless-webpack plugin with a webpack.config.js rather than serverless-bundle as the latter is only really built to work with AWS deployments
- Not using serverless-offline as it also only works with AWS deployments
