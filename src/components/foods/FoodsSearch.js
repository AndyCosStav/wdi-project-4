import React from 'react';
import Axios from 'axios';

class FoodsSearch extends React.Component {

  state = {
    foods: [],
    search: ''
  }

  handleChange = ({ target: { value }}) => {
    this.setState({ search: value });
  }

  handleSubmit = e => {
    e.preventDefault();
    // make Axios request to /api/fatsecret
    Axios
      .get(`/api/fatsecret?search=${this.state.search}`)
      .then(res => this.setState({ foods: res.data }))
      .catch(err => console.log(err));
  }

  addFood = (food) => {
    this.props.addFood(food);
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
          <button>submit</button>
        </form>
        {this.state.foods && this.state.foods.map((food, i) => {
          return (
            <div key={i} onClick={() => this.addFood(food)}>
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
