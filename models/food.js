const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({

  // meal: {type: String, required: true },
  // item: { type: String, required: true},
  calories: {type: Number, required: true },
  protein: {type: Number, required: true},
  fat: {type: Number, required: true },
  carbs: { type: Number, required: true }
  // qty: { type: Number, required: true }

});

// virtual for total

module.exports = foodSchema;
