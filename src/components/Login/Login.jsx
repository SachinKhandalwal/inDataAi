import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);  // State to manage loading
    const navigate = useNavigate();

    const handleInput = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (data.email === "" || data.password === "") {
            alert("Please Enter All Details!");
        } else {
            setLoading(true);  // Start loading when submit is clicked
            const users = JSON.parse(localStorage.getItem("users") || "[]");
            const user = users.find((user) => user.email === data.email && user.password === data.password);
            
            setTimeout(() => {  // Simulating async API call delay
                setLoading(false);  // Stop loading after timeout

                if (user) {
                    alert("Login Successful!");
                    navigate("/home");  // Redirect to home page after successful login
                } else {
                    alert("Invalid Credentials!");
                }
            }, 2000); // Mocking a delay of 2 seconds
        }
    };

    return (
        <div>
            <Navbar />
            <div className="login-container">
                <div className="login-form">
                    <h2 className="login-heading">Login to Your Account</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={data.email}
                            onChange={handleInput}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={data.password}
                            onChange={handleInput}
                        />
                        <p className="login-text">
                            Don't have an account? <a href="/signup">Sign Up</a>
                        </p>
                        <button type="submit" className="login-button" disabled={loading}>
                            {loading ? "Logging in..." : "Log In"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
