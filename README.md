# Deploying Next.js to cloud platforms

This repository provides an example of how you might deploy a Next.js application to Amazon Web Services, Microsoft Azure or Google Cloud Platform.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Firstly, lets install dependencies and run the Next.js development server.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## About the architecture

In the root directory is a Next.js project. You'll find the usual `package.json`, `pages/`, `public/`, `styles/`, etc. You'll even find an API built with Next.js in `pages/api/`. In development, all you need to care about is running Next.js in dev mode. No orchestration of cloud platforms or offline/local infrastructure is needed to develop locally. This does mean that development env is not equal to deployment target but that is the case with functions in general unless each development environment is deployed in the cloud.

To deploy the application into the cloud we have a Serverless Framework application in the `deployments/` directory. [Read the deployments/README.md](deployments/README.md) there to get an understanding for how deployments work.

### What is demonstrated in this example

- How to deploy Next.js /pages/api to AWS, Azure and GCP
- How to architect multiple backend APIs as FaaS with Serverless Framework

### What is not demonstrated in this example

- How to deploy the main Next.js app, as a static site or otherwise
- How to setup CI/CD for multiple deployment targets

## Other resources

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Next.js GitHub repository](https://github.com/vercel/next.js/)
- [Serverless Framework](https://www.serverless.com/)
- [Structuring Serverless Framework applications](https://www.serverless.com/blog/structuring-a-real-world-serverless-app)
