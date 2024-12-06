import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating login validation logic
    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }

    // Simulate backend validation
    if (email === 'test@example.com' && password === 'password') {
      console.log('Login successful!');
      navigate('/dashboard');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="login-button" type="submit">
            Login
          </button>
        </form>
        <p className="switch-auth">
          New user?{' '}
          <span onClick={() => navigate('/register')} className="link">
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
