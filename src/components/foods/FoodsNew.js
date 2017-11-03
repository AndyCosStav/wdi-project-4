import React from 'react';
import Axios from 'axios';
import FoodsSearch from './FoodsSearch';
import Auth from '../../lib/Auth';
import '../../scss/components/foods/FoodsNew.scss';


class FoodsNew extends React.Component {
  state = {
    food: {},
    date: '',
    search: '',
    meal: '',
    foods: []
  }

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value });
  }

  handleMealChange = ({ target: { value }}) => {
    this.setState(prevState => {
      const food = { ...prevState.food, meal: value };
      return { food };
    });
  }

  addFood = chosenFood => {
    this.setState(prevState => {
      const food = { ...prevState.food, ...chosenFood };
      return { food, search: '', foods: [] };
    });
  }

  handleFoodSearch = e => {
    e.preventDefault();
    // make Axios request to /api/fatsecret
    Axios
      .get(`/api/fatsecret?search=${this.state.search}`)
      .then(res => this.setState({ foods: res.data }))
      .catch(err => console.log(err));
  }

  handleSubmit = e => {
    e.preventDefault();
    // send form to `POST /api/days/:date/food`
    Axios.post(`/api/days/${this.state.date}/foods`, { food: this.state.food, date: this.state.date }, {
      headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.setState({ food: {} })) // redirect to days show
      .catch(err => console.log(err));
  }

  render() {
    const { food } = this.state;
    console.log(this.state);
    return (
      <section className="FoodsNew">
        <div className="row foods-search">
          <form onSubmit={this.handleFoodSearch}>
            <input className="date"
              type="date"
              name="date"
              placeholder="YYYY-MM-DD"
              onChange={this.handleChange}
              value={this.state.date} />

            <input className="foodBar"
              name="search"
              type="search"
              onChange={this.handleChange}
              value={this.state.search}
            />
            <select
              className="btn btn-lg btn-primary mealDrop"
              name="meal"
              onChange={this.handleMealChange}
              value={this.state.food.meal}>
              <option>Meal Time</option>
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Dinner</option>
              <option>Snack</option>
            </select>
            <button className="btn btn-primary searchFood">Search Foods</button>
          </form>
        </div>

        <div className="row foods-list">
          <FoodsSearch addFood={this.addFood} foods={this.state.foods} />
        </div>


        {
          food.name &&
            <section className="foodSelect">
              <h3>{food.name}</h3>
              <h5>{food.meal}</h5>
              <span>Macronutrients</span>
              <ul>
                <li>Calories: {food.calories}Kcal</li>
                <li>Protein: {food.protein}g</li>
                <li>Fat: {food.fat}g</li>
                <li>Carbs: {food.carbs}g</li>
              </ul>
            </section>

        }


        <button className="btn btn-primary" onClick={this.handleSubmit}>Upload Food</button>
      </section>

    );
  }
}

export default FoodsNew;
