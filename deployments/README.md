# Deployment using Serverless

[Back to README.md](../README.md).

In [`services/`](services) you will find examples of independent deployments to various cloud platforms. The purpose is to demonstrate using Serverless Framework to map a Next.js to any cloud target.

- [`aws-api/`](services/aws-api) – Deploys Next.js /pages/api to AWS Lambda
- [`azure-api/`](services/azure-api) – Deploys Next.js /pages/api to Azure Function Apps
- [`gcp-api/`](services/gcp-api) – Deploys Next.js /pages/api to Google Cloud Functions

Each of these packages have a shared dependency in Serverless Framework and therefore this directory has its own `package.json`. To ensure we only install Serverless Framework once, each subdirectory references the `node_modules` in this directory.
