import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3>Get In Touch</h3>
          <p>Email: <a href="mailto:cssachin83@gmail.com">cssachin83@gmail.com</a></p>
          <p>Phone: <a href="tel:8496001030">8496001030</a></p>
          <Link to="/contact-us" className="contact-us-link">Contact Us</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 MyPlatform. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
