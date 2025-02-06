import React, { useState } from "react";
import "./AddProduct.css";
import Navbar from "../Navbar/Navbar";
import axios from "axios";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  const [products, setProducts] = useState([]);
  const [showPopup, setShowPopup] = useState(false); // Popup state for success message

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProduct({ ...product, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddProduct = async () => {
    if (product.name && product.price && product.description && product.image) {
      try {
        // POST request to backend
        await axios.post("http://localhost:8080/api/invoices/create", {
          description: product.name,
          amount: parseFloat(product.price),
        });

        // Show popup and reset the form
        setProducts([...products, product]);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
        setProduct({ name: "", price: "", description: "", image: "" });
      } catch (error) {
        alert("Failed to Add Product: " + error.response.data);
      }
    } else {
      alert("Please fill all fields and upload an image.");
    }
  };

  const handleRemoveProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const handleCheckout = (productName) => {
    alert(`You have successfully checked out "${productName}"`);
  };

  return (
    <div className="product-container">
      <Navbar />
      <h2>Add Product</h2>

      {/* Popup message for success */}
      {showPopup && (
        <div className="popup-message">
          <p>Product Added Successfully!</p>
        </div>
      )}

      <div className="product-form">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Product Price"
          value={product.price}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Product Description"
          value={product.description}
          onChange={handleChange}
        ></textarea>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <button onClick={handleAddProduct}>Add Product</button>

        {/* Display uploaded image */}
        {product.image && (
          <div className="image-preview">
            <img src={product.image} alt="Uploaded Preview" className="preview-image" />
          </div>
        )}
      </div>

      {/* Product List */}
      <div className="product-list">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            <div className="product-info">
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <div className="product-description">{item.description}</div>
              <div className="product-actions">
                <button
                  className="checkout-button"
                  onClick={() => handleCheckout(item.name)}
                >
                  Checkout
                </button>
                <button
                  className="remove-button"
                  onClick={() => handleRemoveProduct(index)}
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="product-image-container">
              <img src={item.image} alt={item.name} className="product-image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddProduct;
