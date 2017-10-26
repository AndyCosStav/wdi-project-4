const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({

  exercise: { type: String, required: true },
  reps: { type: Number, required: true },
  sets: { type: Number, required: true },
  weight: { type: Number, required: true }

});

module.exports = exerciseSchema;
