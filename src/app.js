import React from 'react';
import Axios from 'axios';
import ReactDOM from 'react-dom';

class App extends React.Component {

  componentDidMount() {
    Axios
      .get('/api/days')
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
  
  render() {
    return (
      <h1>WDI Project 4: MERN Stack App</h1>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
