import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        <div style={styles.navbar}>
          <Link to="/" className="link-button">Home</Link>
          <Link to="/login" className="link-button">Login</Link>
          <Link to="/register" className="link-button">Register</Link>
        </div>

        {/* Route Handling */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

// Home Component
const Home = () => (
  <div style={styles.container}>
    <h1 style={styles.header}>Welcome to the App</h1>
  </div>
);

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    padding: '10px',
    backgroundColor: '#f8f9fa',
    marginBottom: '20px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
    backgroundColor: '#f0f8ff',
  },
  header: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
};

export default App;
