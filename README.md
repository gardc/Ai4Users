# AI4Users - Sick leave duration prediction prototype
The motivation for our project is to help customers design, prototype, and evaluate
tools that give non-experts a better understanding of AI applications. We want to
turn the design knowledge we gain into practical design principles that will make
it easier to create and use responsible AI in public services. Many of these public
services are today found online, for example, services related to taxes, unemploy-
ment, and student loans. We aim to improve AI intelligibility and accountability for an AI
model suggesting the expected total duration of sick leave. 

## Table of Contents

1. [Description](#description)
2. [Project Structure](#project-structure)
3. [Installation](#installation)
4. [Configuration](#configuration)
5. [Running the NextJS Server](#running-the-nextjs-server)
6. [Testing](#testing)
7. [Usage](#usage)
8. [Deployment](#deployment)
9. [Contributing](#contributing)

## Description

In this project we developed a web application that addresses the case of ensuring AI accountability and intelligibility in an online public service using an AI model to estimate the total duration of sick leave.

## Project Structure
Here are the major folders and files, and a short description of them:
- `__tests__`: Jest tests.
    - ...
- `public`: Assets that are available publicly.
    - ...
- `src`:
    - `components`: Reusable React components.
        - ...
    - `db`:
        - `models`: Database models (using mongoose).
            - `feedback.ts`: Describes the feedback data model.
        - `dbConnect.js`: Provides database connection logic and the `dbConnect()` .function.
    - `pages`: User accessible pages and API routes.
        - `api`: API routes publicly available through HTTP calls.
            - ...
        - ...
    - `styles`: 
        - `globals.css`: Global CSS file used on every page.
    - `util`: Utility.
        - `sendApiRequest.ts`: Function for sending API requests.
- `.gitlab-ci.yml`: Specifies the GitLab continous integration pipleline.
- `README.md`: This file.
- `jest.config.mjs`: Configuration file for the Jest testing framework.
- `next-i18next.config.js`: Configuration file for i18next.
- `next.config.js`: Configuration file for Next.js.
- `package.json`: Specifies the Node.js package and its dependencies.
- `postcss.config.js`: Configuration file for PostCSS used in relation to Tailwind CSS.
- `tailwind.config.js`: Configuration file for Tailwind CSS.
- `tsconfig.json`: Configuration file for TypeScript.

## Prerequisites

Before setting up this project, ensure that you have the following software, tools, or libraries installed:

- Node.js (version 12.0 or higher).
- Docker (Docker Desktop on macOS and Windows).

Optional:
- Python (version 3.7 or higher), if you wish to run the Sandbox server locally.


## Installation

1. To run locally, in the project directory run:

```bash
npm install
```
2. Then, run the development server
```bash
npm run dev
```

This runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. 


## Configuration
1. Create a `.env.local` and a `.env.test` file in the project's root directory to store environment variables:
```bash
touch .env.local
touch .env.test
```
2. In the two .env files, add the following configuration settings:
```bash
MONGODB_URI="<your mongoDB connection URI>"
SANDBOX_URI="<sandbox API URI, e.g. http://0.0.0.0>"
```
These environment variables provides the NextJS app information about how to communicate with the database and the AI sandbox server.

## Running the NextJS Server
1. Make sure the configured MongoDB is available and accessible.
2. Start the AI sandbox server [AI Sandbox Readme](sandbox-server/README.md).
3. Run the following commands to build and start the production server:
```
npm run build
npm run start
```

4. The NextJS project should now be accessible at `http://localhost:3000`. Make sure the AI server is running in order for the sandbox functionality to work.

## Testing
There is currently one unit test which tests the feedback API route. In order to test, do the following:
1. Make sure you created the `.env.test` file as described in [Configuration](#configuration).
2. Then run the tests through Jest by running:
```
npm run test
```


## Usage

The user will first be met by a usergroup login, divided between citizens and casehandlers. The casehandler login will lead to a dead page, while the citizen login will lead to the sickleave prediciton flow. This will take the user through mutliple steps where they are provided with information about their rights and how the AI system works. Here they are giving the option to consent or not to the use of the AI system. 


![Image of sandbox](/img/sanbox.png)
![Image of consent](/img/consent.png)


## Deployment

To deploy the Next.js app you can use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Contributing

This project is made by a bachelor group from informatics as a part of our bachelor thesis. 


