import React from 'react';
import Axios from 'axios';
import FoodsSearch from './FoodsSearch';
import Auth from '../../lib/Auth';
import '../../scss/components/foods/FoodsNew.scss';


class FoodsNew extends React.Component {
  state = {
    foods: [],
    date: ''
  }

  handleChange = ({ target: { value }}) => {
    this.setState({ date: value });
  }

  addFood = chosenFood => {
    // receive food from search
    this.setState(prevState => {
      const foods = prevState.foods.concat(chosenFood);
      return { foods };
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    // send form to `POST /api/days/:date/food`
    Axios.post(`/api/days/${this.state.date}/food`, { date: this.state.date, foods: this.state.foods }, {
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
            {this.state.foods.map((food, i) => <li key={i}>{food.name}</li>)}
          </ul>
        </section>
        <button onClick={this.handleSubmit}>Upload Foods</button>
      </section>
    );
  }
}

export default FoodsNew;
