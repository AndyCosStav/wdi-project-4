import React from 'react';
import Axios from 'axios';
import FoodsSearch from './FoodsSearch';
import Auth from '../../lib/Auth';
import '../../scss/components/foods/FoodsNew.scss';


class FoodsNew extends React.Component {
  state = {
    foodEaten: [],
    date: ''
  }

  handleChange = ({ target: { value }}) => {
    this.setState({ date: value });
  }

  addFood = chosenFood => {
    // receive food from search
    this.setState(prevState => {
      const foodEaten = prevState.foodEaten.concat(chosenFood);
      return { foodEaten };
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    // send form to `POST /api/days/:date/food`
    Axios.post(`/api/days/${this.state.date}/foods`, this.state, {
      headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
    })
      .then(res => console.log('OUR FODDDS', res))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state);
    return (
      <section className="FoodsNew">
        <input
          type="date"
          name="date"
          placeholder="YYYY-MM-DD"
          onChange={this.handleChange}
          value={this.state.date} />
        {/* add select with breakfast/lunch/dinner/snack */}
        <FoodsSearch
          addFood={this.addFood}
          handleSubmit={this.handleSubmit}
        />
        <section>
          <ul>
            {this.state.foodEaten.map((food, i) => <li style={{ width: '60%', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}} key={i}>{food.name}
              <p>Calories: {food.calories}Kcal</p>
              <p>Protein: {food.protein}g</p>
              <p>Carbs: {food.carbs}g</p>
              <p>Fat: {food.fat}g</p>
              <p> per: {food.per}g </p>
            </li>)}
          </ul>
        </section>
        <button onClick={this.handleSubmit}>Upload Foods</button>
      </section>
    );
  }
}

export default FoodsNew;
