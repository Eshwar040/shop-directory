import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { shops, items } from '../data';

function ShopDetails() {
  const { shopId } = useParams();
  const navigate = useNavigate();
  const [cart, setCart] = useState({});

  const shop = Object.values(shops).flat().find(s => s.id === parseInt(shopId));
  const shopItems = items[parseInt(shopId)] || [];

  if (!shop) {
    return <div className="error">Shop not found</div>;
  }

  const addToCart = (item) => {
    setCart(prev => ({
      ...prev,
      [item.name]: (prev[item.name] || 0) + 1
    }));
  };

  const removeFromCart = (item) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[item.name] > 1) {
        newCart[item.name]--;
      } else {
        delete newCart[item.name];
      }
      return newCart;
    });
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, count) => sum + count, 0);
  };

  const getTotalPrice = () => {
    return shopItems.reduce((total, item) => {
      const quantity = cart[item.name] || 0;
      return total + (item.price * quantity);
    }, 0);
  };

  const getCartItems = () => {
    return shopItems.filter(item => cart[item.name]).map(item => ({
      ...item,
      quantity: cart[item.name]
    }));
  };

  return (
    <div className="shop-page">
      <div className="shop-header">
        <button onClick={() => navigate(-1)} className="back-btn">←</button>
        <h1>{shop.name}</h1>
      </div>

      <div className="shop-info">
        <span className="rating">★ {shop.rating}</span>
        <span className="distance">{shop.distance} km</span>
        <span className="price">₹{shop.avgPrice} for two</span>
      </div>

      <div className="menu-items">
        {shopItems.map((item, index) => (
          <div key={index} className="menu-item">
            <div className="item-details">
              <h3>{item.name}</h3>
              <p className="item-price">₹{item.price}</p>
              <div className="item-rating">★ {item.rating}</div>
            </div>
            <div className="item-right">
              <img src={item.image} alt={item.name} />
              {cart[item.name] ? (
                <div className="quantity-control">
                  <button onClick={() => removeFromCart(item)}>-</button>
                  <span>{cart[item.name]}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
              ) : (
                <button className="add-btn" onClick={() => addToCart(item)}>ADD</button>
              )}
            </div>
          </div>
        ))}
      </div>

      {getTotalItems() > 0 && (
        <div className="cart-footer">
          <div className="cart-info">
            {getTotalItems()} items | ₹{getTotalPrice()}
          </div>
          <button 
            className="checkout-btn"
            onClick={() => navigate('/checkout', { state: { cartItems: getCartItems(), shop } })}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default ShopDetails;