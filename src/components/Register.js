import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Reusing the same CSS for consistent styling

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating registration logic
    if (!name || !email || !password) {
      setError('All fields are required.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    // Simulate API call to register the user
    const userData = { name, email, password };
    console.log('User registered successfully:', userData);

    // After successful registration, navigate to the dashboard
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Register</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
            Register
          </button>
        </form>
        <p className="switch-auth">
          Already have an account?{' '}
          <span onClick={() => navigate('/')} className="link">
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
