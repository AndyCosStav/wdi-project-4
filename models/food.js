const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({

  meal: { type: String },
  name: { type: String },
  calories: { type: Number },
  protein: { type: Number},
  fat: { type: Number },
  carbs: { type: Number },
  qty: { type: Number}

});

module.exports = foodSchema;
