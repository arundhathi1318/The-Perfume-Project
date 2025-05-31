import React from 'react';
import { Link } from 'react-router-dom'; 

const LoginPage = () => {
  return (
    <div className="container page-container auth-page">
      <h1 className="page-title">Login</h1>
      <form className="auth-form">
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit" className="submit-button">Login</button>
      </form>
      <p className="auth-switch-text">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default LoginPage;