import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './LandingPage.css';

const LandingPage = () => {
  const [randomImage, setRandomImage] = useState("");
  const navigate = useNavigate();

  // Generate a random image from an array of image URLs
  useEffect(() => {
    const images = [
      "https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-3d-rendered-e-commerce-illustration-image_3811627.jpg",
      // "https://5.imimg.com/data5/SELLER/Default/2021/10/YL/KC/NY/12354778/ecommerce-online-shopping-website.png"
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]); // Only set once when the component is mounted
  }, []); // Empty dependency array ensures it runs only once

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="landingPageContainer">
      <div className="contentContainer">
        <h1 className="headline">Discover the Future of E-Commerce</h1>
        <p className="subheadline">Explore innovative solutions and elevate your online experience.</p>
        <button className="loginButton" onClick={handleLoginClick}>
          Login
        </button>
      </div>
      <div className="imageContainer">
        <img src={randomImage} alt="Random" className="randomImage" />
      </div>
    </div>
  );
};

export default LandingPage;
