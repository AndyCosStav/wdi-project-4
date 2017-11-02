import React from 'react';
import Axios from 'axios';
import '../../scss/components/foods/FoodsSearch.scss';
class FoodsSearch extends React.Component {

  state = {
    meal: '',
    foods: [],
    search: ''
  }

  handleChange = ({ target: { value }}) => {
    this.setState({ search: value });
  }
  handleMeal = ({ target: { value }}) => {
    this.setState({ meal: value });

  }
  handleSubmit = e => {
    e.preventDefault();
    // make Axios request to /api/fatsecret
    Axios
      .get(`/api/fatsecret?search=${this.state.search}`)
      .then(res => this.setState({ foods: res.data}))
      .catch(err => console.log(err));
  }

  addFood = (food) => {
    const newFood = Object.assign(food, { meal: this.state.meal });
    this.props.addFood(newFood);
    this.setState({ foods: [], search: '' });
  }

  render() {
    console.log(this.state.foods);
    return (
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={this.handleSubmit}>
            <input className="foodBar"
              type="search"
              onChange={this.handleChange}
              value={this.state.search}
            />
            <select
              className="btn btn-lg btn-primary mealDrop"
              onChange={this.handleMeal}
              value={this.state.meal}>
              <option>Meal Time</option>
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Dinner</option>
              <option>Snack</option>
            </select>
            <button className="btn btn-primary searchFood">Search Foods</button>
          </form>
        </div>
        <div className="row">
          {this.state.foods && this.state.foods.map((food, i) => {
            return (
              <div key={i} onClick={() => this.addFood(food)} className="col-md-3 col-sm-6 days-wrapper">
                <div className="result">
                  <div>
                    <h3>{food.meal}</h3>
                    <h3>{food.name}</h3>
                    <p>{food.calories}kcal</p>
                    <p>Carbs = {food.carbs}g</p>
                    <p>Fat = {food.fat}g</p>
                    <p>Protein = {food.protein}g</p>
                    <p>Per{food.per}g</p>
                  </div>

                  <button className="btn btn-lg btn-primary">Add</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      // </div>
    );
  }

}






export default FoodsSearch;
