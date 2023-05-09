# AI4Users
The motivation for our project is to help customers design, prototype, and evaluate
tools that give non-experts a better understanding of AI applications. We want to
turn the design knowledge we gain into practical design principles that will make
it easier to create and use responsible AI in public services. Many of these public
services are today found online, for example, services related to taxes, unemploy-
ment, and student loans. We aim to improve AI intelligibility and accountability for an AI
model suggesting the expected total duration of sick leave. 

## Table of Contents

1. [Description](#description)
3. [Installation](#installation)
4. [Configuration](#configuration)
5. [Usage](#usage)
7. [Contributing](#contributing)
9. [Acknowledgements](#acknowledgements)

## Description

In this project we developed a web application that addresses the case of ensuring AI accountability and intelligibility in an online public service using an AI model to estimate the total duration of sick leave.

## Prerequisites

Before installing this project, ensure that you have the following software, tools, or libraries installed:

- Node.js (version 12.0 or higher)
- MongoDB (version 4.0 or higher)
- Python (version 3.7 or higher)
- Pipenv (version 2018.11.26 or higher)


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
1. Create a `.env` file in the project's root directory to store environment variables:
```
touch .env
```
2. Open the `.env` file and add the following configuration settings:
```bash
MONGODB_URI="mongodb://localhost:27017"
```

## Running the Services
1. Start the MongoDB service:
```
mongod
```
2. In a separate terminal, navigate to the project's root directory and build the project then start the Node.js server:
```
next build
npm start
```
3. Start the AI service (link til python README.md)

4. The prototype should now be accessible at `http://localhost:3000`. The backend service and AI model server should also be running.

## Testing
There is currently one unit test which tests the feedback API route. In order to test, do the following:
1. Create a `.env.test` file and include 
```bash
MONGODB_URI="mongodb://localhost:27017"
```
2. Then run 
```
npm run test
```


## Usage

The user will first be met by a usergroup login, divided between citizens and casehandlers. The casehandler login will lead to a dead page, while the citizen login will lead to the sickleave prediciton flow. This will take the user through mutliple steps where they are provided with information about their rights and how the AI system works. Here they are giving the option to consent or not to the use of the AI system. 


![Image of sandbox](public/sanbox.png)
![Image of consent](public/consent.png)


## Deployment

To deploy the Next.js app you can use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Contributing

This project is made by a bachelor group from informatics as a part of our bachelor thesis. 


## Acknowledgements

_Include any acknowledgements or credits for third-party tools, libraries, or individuals who have contributed to the project._

