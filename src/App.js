import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoryGrid from './components/CategoryGrid';
import CategoryPage from './components/CategoryPage';
import ShopDetails from './components/ShopDetails';
import Checkout from './components/Checkout';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1>Shop Directory</h1>
        </header>
        
        <Routes>
          <Route path="/" element={<CategoryGrid />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/shop/:shopId" element={<ShopDetails />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;