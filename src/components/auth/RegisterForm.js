import React from 'react';
import '../../scss/components/auth/RegisterForm.scss';


const RegisterForm = ({ handleChange, handleSubmit, user, errors }) => {
  return (
    <div id="registerImg">
      <div id="registerBox">
        <form onSubmit={handleSubmit}>
          <div className={errors.firstname ? 'form-group has-error' : 'form-group'}>
            <img src="./assets/dinnerandy.png" className="logo"/>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              onChange={handleChange}
              value={user.firstname}
              className="form-control"
            />
            {errors.firstname && <small className="has-error">{errors.firstname}</small>}
          </div>
          <div className={errors.lastname ? 'form-group has-error' : 'form-group'}>
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              onChange={handleChange}
              value={user.lastname}
              className="form-control"
            />
            {errors.lastname && <small className="has-error">{errors.lastname}</small>}
          </div>
          <div className={errors.username ? 'form-group has-error' : 'form-group'}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={user.username}
              className="form-control"
            />
            {errors.username && <small className="has-error">{errors.username}</small>}
          </div>
          <div className={errors.email ? 'form-group has-error' : 'form-group'}>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={user.email}
              className="form-control"
            />
            {errors.email && <small className="has-error">{errors.email}</small>}
          </div>
          <div className={errors.password ? 'form-group has-error' : 'form-group'}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={user.password}
              className="form-control"
            />
            {errors.password && <small className="has-error">{errors.password}</small>}
          </div>
          <div className={errors.passwordConfirmation ? 'form-group has-error' : 'form-group'}>
            <input
              type="password"
              name="passwordConfirmation"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={user.passwordConfirmation}
              className="form-control"
            />
            {errors.passwordConfirmation && <small className="has-error">{errors.passwordConfirmation}</small>}
          </div>

          <button className="btn btn-primary registerBtn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
