const mongoose = require("mongoose");
const drugSchema = new mongoose.Schema (
  {
    drugId: { type: String },
    name: {type: String},
    type: {type: String},
    brandName: {type: String},
    description: {type: String},
    symptoms: { type: Array },
  },
  {timestamps: true}
); 

const drugModel = mongoose.model("Drug", drugSchema);
module.exports = drugModel;