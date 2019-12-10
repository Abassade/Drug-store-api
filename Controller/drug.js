const serverless = require('serverless-http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const uuid = require('uuid/v4');

const dbConnection = require('../config/db');
const drugService = require('../Services/drug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//  base url to test the API
app.get('/', async (req, res) => {
   await res.send("<h2>Welcome to the Drug-Store API</h2>")
})

//  function for creating a new drug
app.post('/drug', async (req, res) => {
  try {
   await dbConnection();
   const data  = req.body;
   const {name, type, description, cost} = data;
 if(!data) {
     return "Please pass all required fields!"
  }
   const dataToSave = {name,type,description,cost,drugId:uuid()};
   let newDrug =  await drugService.newDrug(dataToSave);
   if (newDrug) {
     return res.status(200).send(
       newDrug
    )
   }
  } catch (error) {
    //  handle errors here
    console.log(error, "error!!");
  }
})

//  function for getting all drugs
app.get('drugs/', async (req, res) => {
try {
    await dbConnection();
    const allDrugs = await drugService.getAllDrug();
    if (allDrugs) {
      return res.status(200).send({
        data: allDrugs
      })
    }
  } catch (error) {
     //  handle errors here
     console.log(error, "error!!");
  }
})


//  function for getting a  drug by Id
app.get('drug/:drugId', async (req, res) => {
  try {
    await dbConnection();
    const {drugId} = req.params;
    const getDrug = await drugService.getDrugById({drugId});
    if (getDrug) {
      return res.status(200).send({
        data: getDrug
      })
    }
  } catch (error) {
     //  handle errors here
     console.log(error, "error!!");
  }
});

//  function for getting a  drug by Id
app.put('drug/:drugId', async (req, res) => {
    try {
      await dbConnection();
      const {drugId} = req.params;
      const drug = req.body;
      const getDrug = await drugService.updateDrug(drugId, drug);
      if (getDrug) {
        return res.status(200).send({
          data: getDrug
        })
      }
    } catch (error) {
       //  handle errors here
       console.log(error, "error!!");
    }
  });

module.exports.handler = serverless(app);
