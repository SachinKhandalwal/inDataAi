import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import AddProduct from './components/AddProduct/AddProduct';
import PurchaseProduct from './components/PurchaseProduct/PurchaseProduct';
import Invoice from './components/Invoice/Invoice';
import ContactUs from './components/ContactUs/ContactUs'; // Import the ContactUs component

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/products" element={<PurchaseProduct />} />
        <Route path="/invoice" element={<Invoice />} /> {/* New Invoice Page */}
        <Route path="/contact-us" element={<ContactUs />} /> {/* New Contact Us Page */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
