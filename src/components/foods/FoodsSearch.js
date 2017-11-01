import React from 'react';
import Axios from 'axios';

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
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="search"
            onChange={this.handleChange}
            value={this.state.search}
          />
          <select
            onChange={this.handleMeal}
            value={this.state.meal}>
            <option>Meal Time</option>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
            <option>Snack</option>
          </select>
          <button>submit</button>
        </form>
        {this.state.foods && this.state.foods.map((food, i) => {
          return (
            <div key={i} onClick={() => this.addFood(food)}>
              <div>{food.meal}</div>
              <div>
                <p>{food.name}</p>
                <p>{food.calories}</p>
              </div>
              <div>
                <p>Carbs = {food.carbs}g</p>
                <p>Fat = {food.fat}g</p>
                <p>Protein = {food.protein}g</p>
                <p>Per{food.per}g</p>
              </div>
              <div>
                <button>Add</button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

}






export default FoodsSearch;
