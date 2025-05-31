import React from 'react'; 
import { Link } from 'react-router-dom'; 

const SignupPage = () => {
  return (
    <div className="container page-container auth-page">
      <h1 className="page-title">Sign Up</h1>
      <form className="auth-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />
        </div>
        <button type="submit" className="submit-button">Sign Up</button>
      </form>
      <p className="auth-switch-text">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignupPage;