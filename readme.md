This project was done for students learning microservices

## Introduction

A simple drug-store api to demonstrate how node serverless api works

### Pre-requisite

Ensure nodejs is installed on your machine
Ensure you have a working AWS developer's account
Install serverless CLI on your machine

## Available Scripts

In the project directory, you can run:

### `npm api`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm deploy`

deploy the serverless api to the aws cloud service


### available 5 endpoints:

/  get http (for the base url)
/drug   post http (for creating a new drug into the db(mongodb))
/drugs   post http (get all available drugs)
/drug/drugId   post http (get a drug by id)
/drug-update/drugId   put http (to update a drug (mongodb))