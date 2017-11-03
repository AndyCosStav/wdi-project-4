import React from 'react';
import Axios from 'axios';
import FoodsSearch from './FoodsSearch';
import Auth from '../../lib/Auth';
import '../../scss/components/foods/FoodsNew.scss';


class FoodsNew extends React.Component {
  state = {
    food: {},
    date: ''
  }

  handleChange = ({ target: { value }}) => {
    this.setState({ date: value });
  }

  addFood = chosenFood => {
    // receive food from search
    this.setState({ food: chosenFood });
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
    console.log(food);
    return (
      <section className="FoodsNew">
        <div className="row">
          <div className="col-md-2">
            <input className="date"
              type="date"
              name="date"
              placeholder="YYYY-MM-DD"
              onChange={this.handleChange}
              value={this.state.date} />
          </div>
          <div className="col-md-6">
            <FoodsSearch
              addFood={this.addFood}
              handleSubmit={this.handleSubmit}
            />
          </div>
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
