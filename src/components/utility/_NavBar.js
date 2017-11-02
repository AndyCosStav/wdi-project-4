import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../../lib/Auth';



const Navbar = ({ history }) => {

  function logout(e) {
    e.preventDefault();

    Auth.logout();
    history.push('/');
  }

  return(
    <nav className="navbar">
      <h1 className="navbar-brand"><Link to="/">LiftingLab 2.0</Link></h1>
      <div>
        {!Auth.isAuthenticated() && <Link to="/login" className="nav-item">Login</Link>}
        {!Auth.isAuthenticated() && <Link to="/register" className="nav-item">Register</Link>}
        {Auth.isAuthenticated() && <Link to="/days" className="nav-item">My Diary</Link>}
        {Auth.isAuthenticated() && <a href="#" onClick={logout} className="nav-item">Logout</a>}
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
