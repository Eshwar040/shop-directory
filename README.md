# Shop Directory App

A React application for browsing shops and items across different categories.

## Features

- **Categories**: 8 categories (Electricals, Electronics, Clothing, etc.)
- **Shops**: 4 shops per category (32 total shops)
- **Items**: 10 items per shop (320 total items)
- **Search**: Search for shops or items by name
- **Filter**: Filter by category
- **Sort**: Sort by distance or average price
- **Responsive**: Mobile-friendly design

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

- **Search**: Use the search bar to find specific shops or items
- **Filter**: Select a category to view shops in that category
- **Sort**: Choose to sort by distance (km) or average price
- **Search Type**: Filter search results to show only shops, only items, or both

## Project Structure

```
shop-directory/
├── public/
│   └── index.html
├── src/
│   ├── App.js          # Main component
│   ├── App.css         # Styles
│   ├── data.js         # Dummy data
│   └── index.js        # Entry point
├── package.json
└── README.md
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner