const mongoose = require('mongoose');
const foodSchema = require('./food');
const exerciseSchema = require('./exercise');

const daySchema = new mongoose.Schema({
  date: { type: String, required: true },
  foods: [ foodSchema ],
  exercises: [ exerciseSchema ]
});
//
daySchema.virtual('totals')
  .get(function getTotals() {
    const calories = this.foods.reduce((sum, food) => sum + food.calories * food.qty, 0);
    const protein = this.foods.reduce((sum, food) => sum + food.protein * food.qty, 0);
    const fat = this.foods.reduce((sum, food) => sum + food.fat * food.qty, 0);
    const carbs = this.foods.reduce((sum, food) => sum + food.carbs * food.qty, 0);
    return { calories, protein, fat, carbs };
  });

module.exports = daySchema;
