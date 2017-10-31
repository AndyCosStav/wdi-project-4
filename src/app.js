import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/utility/Navbar';
import Routes from './components/utility/Routes';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';




class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="container">
          <header>
            <h1><Link to="/">LiftingLab 2.0</Link></h1>
            <h2>Eat BIG Lift HEAVY</h2>
            <Navbar/>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <hr />
          </header>
          <main>
            <Routes />
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
