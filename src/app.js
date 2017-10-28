import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/utility/Navbar';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import FoodsNew from './components/foods/FoodsNew';


class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="container">
          <header>
            <h1><Link to="/">LiftingLab 2.0</Link></h1>
            <h2>Eat BIG Lift HEAVY</h2>
            <Navbar />
            <hr />
          </header>
          <main>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/searchFood" component={FoodsNew} />
          </main>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
