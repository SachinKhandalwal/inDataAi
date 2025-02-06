import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import Footer from '../Footer/Footer';


const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* Navbar */}
      <div className="navbar">
        <div className="logo" onClick={() => navigate("/")}>MyPlatform</div>
        <ul className="navList">
          <li><a href="/" className="navLink">Home</a></li>
          <li><a href="#" className="navLink">About</a></li>
          <li><a href="#" className="navLink">Services</a></li>
          <li><a href="#" className="navLink">Contact</a></li>
        </ul>
        <div className="auth-buttons">
          <button className="auth-button" onClick={() => navigate('/login')}>Login</button>
          <button className="auth-button" onClick={() => navigate('/signup')}>SignUp</button>
        </div>
      </div>
      

    </div>
  );
};

export default Navbar;
