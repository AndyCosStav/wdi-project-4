const mongoose = require('mongoose');
const foodSchema = require('./food');
const exerciseSchema = require('./exercise');

const daySchema = new mongoose.Schema({
  date: { type: String, required: true },
  foodEaten: [ foodSchema ],
  exerciseDone: [ exerciseSchema ]
});

daySchema.virtual('totals')
  .get(function getTotals() {
    const calories = this.foodEaten.reduce((sum, food) => sum + food.calories, 0);
    const protein = this.foodEaten.reduce((sum, food) => sum + food.protein, 0);
    const fat = this.foodEaten.reduce((sum, food) => sum + food.fat, 0);
    const carbs = this.foodEaten.reduce((sum, food) => sum + food.carbs, 0);
    return { calories, protein, fat, carbs };
  });

module.exports = daySchema;
