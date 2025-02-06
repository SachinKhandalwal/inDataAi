import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PurchaseProduct.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const PurchaseProduct = () => {
  const navigate = useNavigate();
  const [products] = useState([
    { id: 1, name: 'iPhone 15', price: 2000, description: 'Latest Apple iPhone 15 with A16 Bionic Chip.', image: 'https://www.trustedreviews.com/wp-content/uploads/sites/54/2024/11/Best-smartphone-2024.jpg' },
    { id: 2, name: 'Samsung Z Fold 6', price: 1500, description: 'Next-gen foldable smartphone with advanced multitasking.', image: 'https://www.savenearn.com.ph/cdn/shop/files/samsung-z-fold-6-silver-shadow-white-save-n-earn-03_800x.png' },
    { id: 3, name: 'OnePlus 12', price: 1200, description: 'Flagship performance with Hasselblad cameras.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2SDcYlfGLOtCxF8RjzJK8hL78DKbOkmORNg&s' },
  ]);

  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  const handlePurchase = (product) => {
    setSelectedProduct(product);
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const handleIncreaseQuantity = () => {
    const updatedCart = cart.map(item =>
      item.id === selectedProduct.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const handleDecreaseQuantity = () => {
    const updatedCart = cart.map(item =>
      item.id === selectedProduct.id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const handleCheckout = () => {
    setPurchaseSuccess(true); // Display success message after checkout
    setTimeout(() => {
      navigate('/invoice', { state: { cart } });
    }, 1500); // Navigate after success message disappears
  };

  return (
    <div className="purchase-container">
      <Navbar />
      <h2 className="page-title">Select Your Favorite Product</h2>
      <div className="product-list">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handlePurchase(product)}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <div className="product-description">{product.description}</div>
          </div>
        ))}
      </div>

      {/* Purchase Success Message */}
      <div className={`purchase-success ${purchaseSuccess ? 'visible' : ''}`}>
        Purchase Successful! 🎉
      </div>

      <div className="cart-summary">
        {cart.length > 0 && (
          <>
            <h3>Cart</h3>
            {cart.map((item, index) => (
              <div
                key={index}
                className="cart-item"
                style={{ transform: `rotateY(${Math.random() * 20 - 10}deg)` }}
              >
                <p>{item.name}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            ))}
            <button
              className="checkout-btn"
              onClick={handleCheckout}
              style={{
                transform: cart.length > 0 ? "scale(1.1)" : "scale(1)",
                transition: "transform 0.3s ease",
              }}
            >
              Checkout
            </button>
          </>
        )}
      </div>
      
    </div>
  );
};

export default PurchaseProduct;
