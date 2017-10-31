const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({

  name: { type: String },
  reps: { type: Number },
  sets: { type: Number },
  weight: { type: Number }

});

module.exports = exerciseSchema;
