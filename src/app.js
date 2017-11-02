import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/utility/Navbar';
import Routes from './components/utility/Routes';

import 'bootstrap-css-only';

import { BrowserRouter as Router, Route } from 'react-router-dom';




class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="container">
          <header>

            <Navbar/>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Routes />
          </header>
          <main>

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
