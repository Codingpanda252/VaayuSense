import React from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  let window_cap = window.screen.width;
  let width = null;

  if (window_cap === 400) {
    width = "width-fac";
  }

  const history = useNavigate();

  const handleclick = () => {
    history("./launch"); // Corrected navigation syntax
  };

  return (
    <div className={`login-page ${width}`}>
      <h1 className='log'>Login</h1>

      <div className="input-container">
        <label className="label">Email</label>
        <input className="input" type="email" placeholder="Enter your email" />
      </div>

      <div className="input-container">
        <label className="label">Password</label>
        <input className="input" type="password" placeholder="Enter your password" />
      </div>

      <div className="forgot-password">
        <a href="#">Forgot password?</a>
      </div>

      <button className="login-button" onClick={handleclick}>Login</button>
    </div>
  );
}

export default Login;
