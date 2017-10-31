import React from 'react';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import Auth from '../../lib/Auth';

class DaysShow extends React.Component {

    state = {
      day: null
    }


    componentDidMount() {
      Axios.get(`/api/days/${this.props.match.params.date}`, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
      })
        .then(res => this.setState({ day: res.data }))
        .catch(err => console.log(err));
    }

    render() {
      return (
        <section>
          {this.state.day && this.state.day.foods.map(food => {

            return(
              <p key={food.id}> {food.name}
                { ' ' }
                {food.calories}Kcal
                Protein = {food.protein}g
                { ' ' }
                Carbs = {food.carbs}g
                { ' ' }
                Fat = {food.fat}g
                { ' ' }
                Per{food.per} g
              </p>

            );
          })}
        </section>
      );
    }



}











export default withRouter(DaysShow);
