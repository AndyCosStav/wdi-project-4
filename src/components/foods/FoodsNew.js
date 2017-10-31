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
      .then(res => console.log('OUR FODDDS', res)) // redirect to days show
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
        <button onClick={this.handleSubmit}>Upload Food</button>
      </section>
    );
  }
}

export default FoodsNew;
