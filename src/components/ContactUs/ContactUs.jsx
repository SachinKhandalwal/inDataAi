import React, { useState } from "react";
import { init, send } from "emailjs-com";
import "./ContactUs.css";
import Navbar from "../Navbar/Navbar";

// Initialize EmailJS with your user ID
init("YOUR_USER_ID"); // Replace with your EmailJS User ID

const ContactUs = () => {
  const [emailSent, setEmailSent] = useState(false);

  const handleContactSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const message = {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      message: formData.get("message"),
    };

    // Replace with your actual Service ID and Template ID
    send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", message)
      .then(() => {
        setEmailSent(true); // Show success message
        event.target.reset(); // Reset form after successful submission
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
      });
  };

  return (
    <div className="contact-us-page">
      <Navbar />
      <div className="contact-us-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleContactSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            defaultValue="Sachin Kandalwal"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            defaultValue="cssachin83@gmail.com"
          />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
          {emailSent && (
            <p className="email-success-message">
              Your message has been sent successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
