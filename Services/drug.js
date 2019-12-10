const drugModel = require('../Model/drug');

module.exports = {
async createDrug (Drug) {
  let result = await drugModel.create(Drug);
  if(result) {
    return {
      data: result,
      message: "Drug successfully created!"
};
  }
return "Error creating new Drug"
},

async getAllDrug()  {
  let Drug = await drugModel.find();
  if(Drug)  return Drug;
  return "Error fetching Drugs from db"
},

async getDrugById(drugId)  {
  let Drug = await drugModel.findOne(drugId);
  if(Drug) return Drug;
  return "Error fetching Drug from db";
},

async updateDrug(drugId, drug)  {
    let Drug = await drugModel.findByIdAndUpdate({drugId}, drug);
    if(Drug)  return Drug;
    return "Error fetching Drugs from db"
  },
};