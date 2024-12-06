import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session/token (example for localStorage)
    localStorage.removeItem('userToken');
    console.log('User logged out successfully!');

    // Optionally, clear other session data if needed (e.g., user info)
    // localStorage.removeItem('userInfo');

    // Redirect to the login page
    navigate('/login');
  };

  // Automatically trigger logout when the component mounts
  useEffect(() => {
    handleLogout();
  }, []);

  return (
    <div>
      <h2>Logging out...</h2>
      <p>You will be redirected to the login page.</p>
    </div>
  );
};

export default Logout;
