import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems = [], shop = {} } = location.state || {};
  const [items, setItems] = useState(cartItems);

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const addItem = (targetItem) => {
    setItems(prev => prev.map(item => 
      item.name === targetItem.name 
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  const removeItem = (targetItem) => {
    setItems(prev => prev.map(item => 
      item.name === targetItem.name
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ).filter(item => item.quantity > 0));
  };

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
    navigate('/');
  };

  useEffect(() => {
    if (items.length === 0 && cartItems.length > 0) {
      navigate(`/shop/${shop.id}`);
    }
  }, [items.length, navigate, shop.id, cartItems.length]);

  if (!cartItems.length) {
    return (
      <div className="checkout-page">
        <div className="checkout-header">
          <button onClick={() => navigate(-1)} className="back-btn">←</button>
          <h1>Checkout</h1>
        </div>
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <button 
            className="back-to-shop-btn" 
            onClick={() => navigate(`/shop/${shop.id}`)}
          >
            Go back to {shop.name}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <button onClick={() => navigate(-1)} className="back-btn">←</button>
        <h1>Checkout</h1>
      </div>

      <div className="order-summary">
        <h2>{shop.name}</h2>
        <div className="order-items">
          {items.map((item, index) => (
            <div key={index} className="order-item">
              <div className="item-info">
                <span className="item-name">{item.name}</span>
                <div className="checkout-quantity-control">
                  <button onClick={() => removeItem(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addItem(item)}>+</button>
                </div>
              </div>
              <span className="item-total">₹{item.price * item.quantity}</span>
            </div>
          ))}
        </div>
        
        {items.length > 0 && (
          <>
            <div className="bill-details">
              <div className="bill-row">
                <span>Item Total</span>
                <span>₹{getTotalPrice()}</span>
              </div>
              <div className="bill-row">
                <span>Delivery Fee</span>
                <span>₹30</span>
              </div>
              <div className="bill-row total">
                <span>Total</span>
                <span>₹{getTotalPrice() + 30}</span>
              </div>
            </div>

            <button className="place-order-btn" onClick={handlePlaceOrder}>
              Place Order ₹{getTotalPrice() + 30}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Checkout;