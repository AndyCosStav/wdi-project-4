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
      <div className="list-group" >
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
            <div key={i} onClick={() => this.addFood(food)} id="results" className="list-group-item list-group-item-action flex-column align-items-start active">
              <h3>{food.meal}</h3>
              <p>{food.name}
                {food.calories}kcal


                Carbs = {food.carbs}g
                Fat = {food.fat}g
                Protein = {food.protein}g
                Per{food.per}g</p>

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
