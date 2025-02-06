import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './SignUp.css';

const SignUp = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInput = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };

    const validateForm = () => {
        let formErrors = {};
        if (!data.name) formErrors.name = "Name is required";
        if (!data.email) formErrors.email = "Email is required";
        if (!data.password) formErrors.password = "Password is required";
        else if (data.password.length < 6) formErrors.password = "Password must be at least 6 characters long";
        return formErrors;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formErrors = validateForm();
        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            try {
                // Example of an API request to sign up (replace URL with your backend API)
                // const response = await axios.post('YOUR_API_URL', data);
                // if (response.status === 200) {
                    // Handle success response (e.g., redirect, show success message)
                    const getData = JSON.parse(localStorage.getItem("users") || "[]");
                    getData.push(data);
                    localStorage.setItem("users", JSON.stringify(getData));
                    alert("Signup Successful!");
                    navigate("/login");
                // }
            } catch (error) {
                console.error("Error during signup", error);
                alert("An error occurred during signup.");
            }
        }
    };

    return (
        <div>
            <Navbar />
            <div className="signup-container">
                <div className="signup-form">
                    <h2 className="signup-heading">Create Your Account</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={data.name}
                            onChange={handleInput}
                        />
                        {errors.name && <span className="error-message">{errors.name}</span>}

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={data.email}
                            onChange={handleInput}
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={data.password}
                            onChange={handleInput}
                        />
                        {errors.password && <span className="error-message">{errors.password}</span>}

                        <p className="signup-text">
                            Already have an account? <a href="/login">Login</a>
                        </p>
                        <button type="submit" className="signup-button">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
