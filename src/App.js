import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import DashboardLayoutBasic from './components/DashboardLayoutBasic';
import Logout from './components/Logout'; // Ensure Logout component is correctly imported

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashboardLayoutBasic />} />
        <Route path="/logout" element={<Logout />} />  {/* Add Logout Route */}
      </Routes>
    </Router>
  );
}

export default App;
