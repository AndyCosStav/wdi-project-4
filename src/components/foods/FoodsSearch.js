import React from 'react';


class FoodsSearch extends React.Component {

  state = {
    foods: [],
    search: ''
  }

  handleChange = () => {
    // update the search on state
  }

  handleSubmit = () => {
    // make Axios request to /api/fatsecret
    // store results in state
  }

  addFood = (food) => {
    this.props.addFood(food);
    this.setState({ foods: [], search: '' });
  }

  render() {
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
                <p>{food.carbs}</p>
                <p>{food.fat}</p>
                <p>{food.protein}</p>
                <p>{food.per}g</p>
              </div>
              <div>
                <button>FSU</button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

}






export default FoodsSearch;
