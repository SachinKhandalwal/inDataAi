import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser(userData[0]); // Assuming the first user in the list is the logged-in one
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/"); // Redirect to the landing page
  };

  return (
    <div className="home-page">
      <Navbar />
      <div className="home-content">
        <h2>Welcome, {user ? user.name : "User"}!</h2>

        <div className="home-buttons">
          <button onClick={() => navigate("/add-product")} className="btn">
            Add Product
          </button>
          <button onClick={() => navigate("/products")} className="btn">
            Purchase Product
          </button>
        </div>

        <div>
          <button className="logout-btn" onClick={logout}>Logout</button>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
