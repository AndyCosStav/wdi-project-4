import React from 'react';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import Auth from '../../lib/Auth';


class DaysShow extends React.Component {

  state = {
    day: null
  }

  getFoods() {
    Axios.get(`/api/days/${this.props.match.params.date}`, {
      headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState({ day: res.data }))
      .catch(err => console.log(err));
  }
  componentDidMount() {
    this.getFoods();
  }

  deleteFood = (foodId) => {
    Axios
      .delete(`/api/days/${this.props.match.params.date}/foods/${foodId}`, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
      })
      .then(() => this.setState(prevState => {
        const foods = this.state.day.foods.filter(food => food.id !== foodId);
        const day = { ...prevState.day, foods };
        return { day };
      }))
      .catch(err => console.log(err));
  }

  renderMeals = (meal, i) => {
    return (
      <div key={i}>
        <h2>{meal}</h2>

        {
          this.state.day && this.state.day.foods.filter(food => {
            return food.meal === meal;
          }).map(food => {
            return(
              <div key={food.id}>
                <p>
                  {
                    `${food.name}: ${food.calories}Kcal, Protein = ${food.protein}g,
                    Carbs = ${food.carbs}g, Fat = ${food.fat}g`
                  }
                </p>
                {
                  Auth.isAuthenticated() &&
                    <button className="delete-Button" onClick={() => this.deleteFood(food.id)}>
                      Delete Food
                    </button>
                }
              </div>
            );
          })
        }
      </div>
    );
  }

  render() {
    const meals = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];

    return (
      <section>
        { meals.map((meal, i) => this.renderMeals(meal, i)) }

        {
          this.state.day ?
            <div>
              <h2>Totals:</h2>
              <ul>
                <li>Calories: {this.state.day.totals.calories}</li>
              </ul>
            </div>
            :
            <p>Loading totals...</p>
        }
      </section>
    );
  }
}

export default withRouter(DaysShow);
