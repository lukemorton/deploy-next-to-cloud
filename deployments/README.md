# Deployment using Serverless

This directory contains a Serverless Framework application [structured into services and libs](https://www.serverless.com/blog/structuring-a-real-world-serverless-app).

[Back to README.md](../README.md).

## Services

Services are our deployment targets.

In [`services/`](services) you will find examples of independent deployments to various cloud platforms. The purpose is to demonstrate using Serverless Framework to map a Next.js to any cloud target.

- [`aws-api/`](services/aws-api) – Deploys Next.js /pages/api to AWS Lambda
- [`azure-api/`](services/azure-api) – Deploys Next.js /pages/api to Azure Function Apps
- [`gcp-api/`](services/gcp-api) – Deploys Next.js /pages/api to Google Cloud Functions

Each of these packages have a shared dependency in Serverless Framework and therefore this directory has its own `package.json`. To ensure we only install Serverless Framework once, each subdirectory references the `node_modules` in this directory.

## Libraries

There is currently one library, [`next-to-sls/`](libs/next-to-sls), that has a small amount of code that can convert the various interfaces provided by cloud event handlers into Next.js compatible requests and responses.

This means in development, you can just use Next.js with /pages/api out of the box and when it comes to being deployed to a cloud platform, this library does the hardwork making sure the two play nicely together.

## Productionising this example

- Add deployment for main Next.js app with static assets (`next export`) or by running an instance of the app (`next start`)
- Smoke testing against each cloud platform via CI
- Ensure full compatibility for [Next Replica Request and Response](libs/next-to-sls/next-replicas) objects (currently incomplete and not fully tested)
