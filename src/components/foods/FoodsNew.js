import React from 'react';
import Axios from 'axios';
import FoodsSearch from './FoodsSearch';
import '../../scss/components/foods/FoodsNew.scss';


class FoodsNew extends React.Component {
  state = {
    foods: [],
    query: ''
  }

  handleChange = ({ target: { value }}) => {
    const query = value;
    this.setState({ query });
  }

  addFood = (chosenFood) => {
    // receive food from search
    // push into this.state.foods
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // send form to `POST /api/days/:date/food`
  }

  render() {
    console.log(this.state.foods);
    return (
      <section className="FoodsNew">
        <input
          type="text"
          name="date"
          placeholder="YYYY-MM-DD"
          onChange={this.handleChange}
          value={this.state.date}
        />
        {/* add select with breakfast/lunch/dinner/snack */}
        <FoodsSearch
          addFood={this.addFood}
          food={this.state.query}
        />
      </section>
    );
  }
}

export default FoodsNew;
