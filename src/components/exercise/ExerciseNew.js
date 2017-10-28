import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';

import ExerciseForm from './ExerciseForm';

class ExerciseNew extends React.Component {
  state = {
    exercise: {
      name: '',
      reps: '',
      sets: '',
      weight: ''
    },
    errors: {}
  };

  handleChange = ({ target: { name, value } }) => {
    const exercise = Object.assign({}, this.state.exercise, { [name]: value });
    this.setState({ exercise });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .post('/api/exercise', this.state.exercise, {
        headers: {'Authorization': 'Bearer ' + Auth.getToken()}
      })
      .then(() => this.props.history.push('/'))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render() {
    return (
      <ExerciseForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        guitar={this.state.exercise}
        errors={this.state.errors}
      />
    );
  }
}

export default ExerciseNew;
