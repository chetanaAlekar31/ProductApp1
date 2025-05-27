import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Cart.css';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/cart')
      .then(res => setCartItems(res.data))
      .catch(err => console.error('Error fetching cart:', err));
  }, []);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <div className="cart-grid">
        {cartItems.map((item, idx) => (
          <div key={idx} className="cart-card">
            <img src={item.image} alt={item.title} />
            <div className="cart-info">
              <h4>{item.title}</h4>
              <p className="cart-price">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        Total: ${total.toFixed(2)}
      </div>
    </div>
  );
}

export default Cart;
