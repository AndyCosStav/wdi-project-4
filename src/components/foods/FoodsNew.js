import React from 'react';
import Axios from 'axios';
import FoodsSearch from './FoodsSearch';
class FoodsNew extends React.Component {
    state = {
      foods: [],
      query: ''
    }
    handleChange = ({ target: { value }}) => {
      const query = value;
      this.setState({ query });
    }
    handleSubmit = (e) => {
      e.preventDefault();
      Axios
        .get('http://localhost:4000/api/fatsecret?search=' + this.state.query )
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    render() {
      return (
        <FoodsSearch
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          food={this.state.query}
        />
      );
    }
}

export default FoodsNew;
