import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { categories, shops, items } from '../data';

function CategoryGrid() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('all');

  const handleCategoryClick = (category) => {
    navigate(`/category/${encodeURIComponent(category)}`);
  };

  const allShops = useMemo(() => {
    return Object.values(shops).flat();
  }, []);

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];
    
    let results = [];
    
    if (searchType === 'shops' || searchType === 'all') {
      const matchingShops = allShops.filter(shop =>
        shop.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      matchingShops.forEach(shop => {
        const category = Object.keys(shops).find(cat => 
          shops[cat].some(s => s.id === shop.id)
        );
        results.push({ type: 'shop', data: shop, category });
      });
    }
    
    if (searchType === 'items' || searchType === 'all') {
      const shopsWithItem = new Set();
      Object.entries(items).forEach(([shopId, shopItems]) => {
        const shop = allShops.find(s => s.id === parseInt(shopId));
        const category = Object.keys(shops).find(cat => 
          shops[cat].some(s => s.id === parseInt(shopId))
        );
        
        const hasMatchingItem = shopItems.some(item => {
          const itemName = typeof item === 'string' ? item : item.name;
          return itemName.toLowerCase().includes(searchTerm.toLowerCase());
        });
        
        if (hasMatchingItem && !shopsWithItem.has(shop.id)) {
          shopsWithItem.add(shop.id);
          results.push({ type: 'shop', data: shop, category, hasItem: true });
        }
      });
    }
    
    return results;
  }, [searchTerm, searchType, allShops]);

  return (
    <div className="home-page">
      {/* Search Section */}
      <div className="search-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for shops, items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="main-search-input"
          />
          <select 
            value={searchType} 
            onChange={(e) => setSearchType(e.target.value)}
            className="search-filter"
          >
            <option value="all">All</option>
            <option value="shops">Shops</option>
            <option value="items">Items</option>
          </select>
        </div>
      </div>

      {/* Search Results */}
      {searchTerm && (
        <div className="search-results">
          <h3>Search Results ({searchResults.length})</h3>
          {searchResults.length === 0 ? (
            <div className="no-results">No results found for "{searchTerm}"</div>
          ) : (
            <div className="results-grid">
              {searchResults.map((result, index) => (
                <div key={index} className="result-card shop">
                  <div className="shop-card" onClick={() => navigate(`/shop/${result.data.id}`)}>
                    <h4>{result.data.name}</h4>
                    <p className="category">{result.category}</p>
                    <div className="shop-details">
                      <span className="distance">{result.data.distance} km</span>
                      <span className="price">₹{result.data.avgPrice}</span>
                      <span className="rating">★ {result.data.rating}</span>
                    </div>
                    {result.hasItem && (
                      <div className="item-match">
                        <span className="match-indicator">Has "{searchTerm}"</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Categories Section - Only show when not searching */}
      {!searchTerm && (
        <div className="categories-section">
          <h2>What's on your mind?</h2>
          <div className="categories">
            {categories.map(category => (
              <div 
                key={category} 
                className="category-card"
                onClick={() => handleCategoryClick(category)}
              >
                <h3>{category}</h3>
                <p>Explore shops</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CategoryGrid;