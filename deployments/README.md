# Deployment using Serverless

[Back to README.md](../README.md).

Here in this directory you will find examples of independent deployments to various cloud platforms. The purpose is to demonstrate using Serverless Framework to map a Next.js to any cloud target.

- [`aws-api/`](aws-api) – Deploys Next.js /pages/api to AWS Lambda
- [`azure-api/`](azure-api) – Deploys Next.js /pages/api to Azure Function Apps
- [`gcp-api/`](gcp-api) – Deploys Next.js /pages/api to Google Cloud Functions

Each of these packages have a shared dependency in Serverless Framework and therefore this directory has its own `package.json`. To ensure we only install Serverless Framework once, each subdirectory references the `node_modules` in this directory.
