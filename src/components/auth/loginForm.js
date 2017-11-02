import React from 'react';

import '../../scss/components/auth/LoginForm.scss';


const LoginForm = ({ handleChange, handleSubmit, credentials, error}) => {
  return (
    <div id="loginImg">
      <div id="loginBox">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <img src="./assets/dinnerandy.png" className="logo"/>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={credentials.email}
              className="form-control"
            />
          </div>
          <div className="form-group" >
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={credentials.password}
              className="form-control"
            />
            {error && <small className="has-error">{error}</small>}
          </div>

          <button className="btn btn-primary loginBtn">Login</button>
        </form>
      </div>
    </div>
  );
};




export default LoginForm;
