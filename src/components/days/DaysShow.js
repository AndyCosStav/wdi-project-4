import React from 'react';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import Auth from '../../lib/Auth';
import '../../scss/components/days/DaysShow.scss';

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
        <h2 className="eatenFood" >{meal}</h2>

        {
          this.state.day && this.state.day.foods.filter(food => {
            return food.meal === meal;
          }).map(food => {
            return(
              <div key={food.id} className="row">
                <p className="eatenFood">
                  {
                    `${food.name}: ${food.calories}Kcal, Protein = ${food.protein}g,
                    Carbs = ${food.carbs}g, Fat = ${food.fat}g`
                  }
                </p>
                {
                  Auth.isAuthenticated() &&
                    <button className="btn btn-sm btn-primary delete" onClick={() => this.deleteFood(food.id)}>
                      Delete
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
              <h4 className="eatenFood">You have Consumed:</h4>
              <ul>
                <li>Calories: {this.state.day.totals.calories}kcal</li>
                <li>Protein: {this.state.day.totals.protein}g</li>
                <li>Carbs: {this.state.day.totals.carbs}g</li>
                <li>Fat: {this.state.day.totals.fat}g</li>
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
