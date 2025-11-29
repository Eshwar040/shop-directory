import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { shops, items } from '../data';

function CategoryPage() {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('distance');
  const [searchType, setSearchType] = useState('all');

  const categoryShops = shops[categoryName] || [];

  const filteredResults = useMemo(() => {
    let results = [];

    if (searchTerm) {
      if (searchType === 'shops' || searchType === 'all') {
        const matchingShops = categoryShops.filter(shop =>
          shop.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        results.push(...matchingShops.map(shop => ({ type: 'shop', data: shop })));
      }
      
      if (searchType === 'items' || searchType === 'all') {
        categoryShops.forEach(shop => {
          const shopItems = items[shop.id] || [];
          const matchingItems = shopItems.filter(item => {
            const itemName = typeof item === 'string' ? item : item.name;
            return itemName.toLowerCase().includes(searchTerm.toLowerCase());
          });
          matchingItems.forEach(item => {
            const itemName = typeof item === 'string' ? item : item.name;
            results.push({
              type: 'item',
              data: { name: itemName, shop: shop }
            });
          });
        });
      }
    } else {
      results.push(...categoryShops.map(shop => ({ type: 'shop', data: shop })));
    }

    return results.sort((a, b) => {
      const aShop = a.type === 'shop' ? a.data : a.data.shop;
      const bShop = b.type === 'shop' ? b.data : b.data.shop;
      
      if (sortBy === 'distance') {
        return aShop.distance - bShop.distance;
      } else {
        return aShop.avgPrice - bShop.avgPrice;
      }
    });
  }, [categoryShops, searchTerm, sortBy, searchType]);

  return (
    <div className="category-page">
      <header className="header">
        <button onClick={() => navigate('/')} className="back-btn">← Back</button>
        <h1>{categoryName}</h1>
      </header>

      <div className="controls">
        <div className="search-section">
          <input
            type="text"
            placeholder="Search in this category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <select 
            value={searchType} 
            onChange={(e) => setSearchType(e.target.value)}
            className="search-type"
          >
            <option value="all">All</option>
            <option value="shops">Shops Only</option>
            <option value="items">Items Only</option>
          </select>
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="sort-select"
        >
          <option value="distance">Sort by Distance</option>
          <option value="avgPrice">Sort by Price</option>
        </select>
      </div>

      <div className="results">
        {filteredResults.length === 0 ? (
          <div className="no-results">No results found</div>
        ) : (
          filteredResults.map((result, index) => (
            <div key={index} className={`result-card ${result.type}`}>
              {result.type === 'shop' ? (
                <div className="shop-card" onClick={() => navigate(`/shop/${result.data.id}`)}>
                  <h3>{result.data.name}</h3>
                  <div className="shop-details">
                    <span className="distance">{result.data.distance} km</span>
                    <span className="price">Avg: ₹{result.data.avgPrice}</span>
                  </div>
                  <div className="items-preview">
                    <strong>Items available:</strong>
                    <div className="items-list">
                      {(items[result.data.id] || []).slice(0, 3).map((item, i) => (
                        <span key={i} className="item-tag">{typeof item === 'string' ? item : item.name}</span>
                      ))}
                      {(items[result.data.id] || []).length > 3 && (
                        <span className="more-items">+{(items[result.data.id] || []).length - 3} more</span>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="item-card">
                  <h4>{result.data.name}</h4>
                  <p className="shop-name">Available at: {result.data.shop.name}</p>
                  <div className="shop-details">
                    <span className="distance">{result.data.shop.distance} km</span>
                    <span className="price">Avg: ₹{result.data.shop.avgPrice}</span>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CategoryPage;