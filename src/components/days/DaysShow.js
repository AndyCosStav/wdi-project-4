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

    render() {
      console.log(this.state);
      return (
        <section>
          {this.state.day && this.state.day.foods.map(food => {

            return(
              <div key={food.id}>
                <p> {food.name}
                  { ' ' }
                  {food.calories}Kcal
                  Protein = {food.protein}g
                  { ' ' }
                  Carbs = {food.carbs}g
                  { ' ' }
                  Fat = {food.fat}g
                  { ' ' }
                  Per{food.qty} g
                </p>
                {Auth.isAuthenticated() && <button className="delete-Button" onClick={() => this.deleteFood(food.id)}>
              Delete Food</button>}
              </div>

            );
          })}
        </section>
      );
    }



}











export default withRouter(DaysShow);
