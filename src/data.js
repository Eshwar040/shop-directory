export const categories = [
  'Electricals', 'Electronics', 'Clothing', 'Printing/Xerox', 
  'Hardware tools', 'Groceries', 'Stationery', 'Bakery/Food'
];

export const shops = {
  'Electricals': [
    { id: 1, name: 'PowerMax Electric', distance: 1.2, avgPrice: 150, rating: 4.2 },
    { id: 2, name: 'Voltage Solutions', distance: 2.1, avgPrice: 120, rating: 4.0 },
    { id: 3, name: 'Electric Hub', distance: 0.8, avgPrice: 180, rating: 4.5 },
    { id: 4, name: 'Current Electronics', distance: 3.2, avgPrice: 140, rating: 4.1 }
  ],
  'Electronics': [
    { id: 5, name: 'TechWorld', distance: 1.5, avgPrice: 500, rating: 4.4 },
    { id: 6, name: 'Digital Store', distance: 2.3, avgPrice: 450, rating: 4.2 },
    { id: 7, name: 'Gadget Galaxy', distance: 1.1, avgPrice: 600, rating: 4.6 },
    { id: 8, name: 'ElectroMart', distance: 2.8, avgPrice: 480, rating: 4.3 }
  ],
  'Clothing': [
    { id: 9, name: 'Fashion Point', distance: 0.9, avgPrice: 800, rating: 4.3 },
    { id: 10, name: 'Style Studio', distance: 1.7, avgPrice: 650, rating: 4.1 },
    { id: 11, name: 'Trendy Threads', distance: 2.2, avgPrice: 750, rating: 4.4 },
    { id: 12, name: 'Wardrobe World', distance: 1.4, avgPrice: 700, rating: 4.2 }
  ],
  'Printing/Xerox': [
    { id: 13, name: 'Print Pro', distance: 0.6, avgPrice: 25, rating: 4.0 },
    { id: 14, name: 'Copy Center', distance: 1.3, avgPrice: 20, rating: 3.9 },
    { id: 15, name: 'Quick Print', distance: 2.0, avgPrice: 30, rating: 4.2 },
    { id: 16, name: 'Digital Prints', distance: 1.8, avgPrice: 22, rating: 4.1 }
  ],
  'Hardware tools': [
    { id: 17, name: 'Tool Master', distance: 2.5, avgPrice: 200, rating: 4.3 },
    { id: 18, name: 'Hardware Hub', distance: 1.6, avgPrice: 180, rating: 4.1 },
    { id: 19, name: 'Fix It Tools', distance: 3.1, avgPrice: 220, rating: 4.4 },
    { id: 20, name: 'Builder Supplies', distance: 2.2, avgPrice: 190, rating: 4.0 }
  ],
  'Groceries': [
    { id: 21, name: 'Fresh Market', distance: 0.7, avgPrice: 300, rating: 4.5 },
    { id: 22, name: 'Daily Needs', distance: 1.2, avgPrice: 280, rating: 4.2 },
    { id: 23, name: 'Super Store', distance: 1.9, avgPrice: 320, rating: 4.3 },
    { id: 24, name: 'Local Mart', distance: 0.5, avgPrice: 270, rating: 4.1 }
  ],
  'Stationery': [
    { id: 25, name: 'Paper Plus', distance: 1.1, avgPrice: 50, rating: 4.0 },
    { id: 26, name: 'Office Supplies', distance: 1.8, avgPrice: 45, rating: 3.9 },
    { id: 27, name: 'Study Corner', distance: 2.4, avgPrice: 55, rating: 4.2 },
    { id: 28, name: 'Write Right', distance: 1.5, avgPrice: 48, rating: 4.1 }
  ],
  'Bakery/Food': [
    { id: 29, name: 'Sweet Treats', distance: 0.8, avgPrice: 120, rating: 4.4 },
    { id: 30, name: 'Fresh Bakes', distance: 1.4, avgPrice: 100, rating: 4.2 },
    { id: 31, name: 'Tasty Bites', distance: 2.1, avgPrice: 140, rating: 4.5 },
    { id: 32, name: 'Food Corner', distance: 1.7, avgPrice: 110, rating: 4.3 }
  ]
};

export const items = {
  1: [
    { name: 'LED Bulbs', price: 150, rating: 4.2, image: 'https://via.placeholder.com/150x100/4CAF50/white?text=LED+Bulbs' },
    { name: 'Switches', price: 25, rating: 4.0, image: 'https://via.placeholder.com/150x100/2196F3/white?text=Switches' },
    { name: 'Wires', price: 80, rating: 4.3, image: 'https://via.placeholder.com/150x100/FF9800/white?text=Wires' },
    { name: 'Plugs', price: 35, rating: 4.1, image: 'https://via.placeholder.com/150x100/9C27B0/white?text=Plugs' },
    { name: 'Extension Cords', price: 120, rating: 4.4, image: 'https://via.placeholder.com/150x100/F44336/white?text=Extension' }
  ],
  5: [
    { name: 'Smartphones', price: 15000, rating: 4.4, image: 'https://via.placeholder.com/150x100/4CAF50/white?text=Phone' },
    { name: 'Laptops', price: 45000, rating: 4.5, image: 'https://via.placeholder.com/150x100/2196F3/white?text=Laptop' },
    { name: 'Tablets', price: 12000, rating: 4.2, image: 'https://via.placeholder.com/150x100/FF9800/white?text=Tablet' },
    { name: 'Headphones', price: 2500, rating: 4.3, image: 'https://via.placeholder.com/150x100/9C27B0/white?text=Headphone' },
    { name: 'Speakers', price: 3500, rating: 4.1, image: 'https://via.placeholder.com/150x100/F44336/white?text=Speaker' }
  ],
  9: [
    { name: 'T-Shirts', price: 500, rating: 4.2, image: 'https://via.placeholder.com/150x100/4CAF50/white?text=T-Shirt' },
    { name: 'Jeans', price: 1200, rating: 4.3, image: 'https://via.placeholder.com/150x100/2196F3/white?text=Jeans' },
    { name: 'Dresses', price: 1800, rating: 4.4, image: 'https://via.placeholder.com/150x100/FF9800/white?text=Dress' },
    { name: 'Shirts', price: 800, rating: 4.1, image: 'https://via.placeholder.com/150x100/9C27B0/white?text=Shirt' },
    { name: 'Jackets', price: 2500, rating: 4.5, image: 'https://via.placeholder.com/150x100/F44336/white?text=Jacket' }
  ],
  21: [
    { name: 'Rice', price: 80, rating: 4.3, image: 'https://via.placeholder.com/150x100/4CAF50/white?text=Rice' },
    { name: 'Wheat', price: 45, rating: 4.2, image: 'https://via.placeholder.com/150x100/2196F3/white?text=Wheat' },
    { name: 'Pulses', price: 120, rating: 4.1, image: 'https://via.placeholder.com/150x100/FF9800/white?text=Pulses' },
    { name: 'Oil', price: 150, rating: 4.4, image: 'https://via.placeholder.com/150x100/9C27B0/white?text=Oil' },
    { name: 'Sugar', price: 50, rating: 4.0, image: 'https://via.placeholder.com/150x100/F44336/white?text=Sugar' }
  ],
  29: [
    { name: 'Cakes', price: 350, rating: 4.5, image: 'https://via.placeholder.com/150x100/4CAF50/white?text=Cake' },
    { name: 'Pastries', price: 80, rating: 4.3, image: 'https://via.placeholder.com/150x100/2196F3/white?text=Pastry' },
    { name: 'Cookies', price: 120, rating: 4.2, image: 'https://via.placeholder.com/150x100/FF9800/white?text=Cookie' },
    { name: 'Muffins', price: 60, rating: 4.1, image: 'https://via.placeholder.com/150x100/9C27B0/white?text=Muffin' },
    { name: 'Donuts', price: 45, rating: 4.4, image: 'https://via.placeholder.com/150x100/F44336/white?text=Donut' }
  ]
};

// Generate sample items for remaining shops
for (let i = 2; i <= 32; i++) {
  if (!items[i]) {
    items[i] = [
      { name: `Item ${i}-1`, price: Math.floor(Math.random() * 500) + 50, rating: (Math.random() * 2 + 3).toFixed(1), image: `https://via.placeholder.com/150x100/4CAF50/white?text=Item+${i}-1` },
      { name: `Item ${i}-2`, price: Math.floor(Math.random() * 500) + 50, rating: (Math.random() * 2 + 3).toFixed(1), image: `https://via.placeholder.com/150x100/2196F3/white?text=Item+${i}-2` },
      { name: `Item ${i}-3`, price: Math.floor(Math.random() * 500) + 50, rating: (Math.random() * 2 + 3).toFixed(1), image: `https://via.placeholder.com/150x100/FF9800/white?text=Item+${i}-3` },
      { name: `Item ${i}-4`, price: Math.floor(Math.random() * 500) + 50, rating: (Math.random() * 2 + 3).toFixed(1), image: `https://via.placeholder.com/150x100/9C27B0/white?text=Item+${i}-4` },
      { name: `Item ${i}-5`, price: Math.floor(Math.random() * 500) + 50, rating: (Math.random() * 2 + 3).toFixed(1), image: `https://via.placeholder.com/150x100/F44336/white?text=Item+${i}-5` }
    ];
  }
}