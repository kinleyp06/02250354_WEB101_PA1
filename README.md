# Product Gallery - React Web Page Recreation

## Student Information
- Student Number: [YOUR STUDENT NUMBER]
- Module: WEB101
- Assignment: PA1

## Chosen Webpage
I recreated a product listing grid similar to e-commerce websites like Amazon or eBay. 
The page displays products in a card layout with images, prices, and "Add to Cart" buttons.

## Functionality Achieved
1. **Product Display** - Shows 6 different products with images, names, prices, and descriptions
2. **Responsive Design** - Layout automatically adjusts:
   - Mobile phones (<768px): 1 card per row
   - Tablets (768px-1024px): 2 cards per row  
   - Desktop (>1024px): 3 cards per row
3. **Interactive Elements** - Cards lift up on hover, buttons change color on hover
4. **Reusable Components** - ProductCard component is used 6 times with different data

## Component Structure (Hierarchy)

App (main component)
├── Header (inside App JSX)
├── ProductGrid (inside App JSX)
│ └── ProductCard (REUSABLE - used 6 times)
│ ├── Image
│ ├── Product Name
│ ├── Price
│ ├── Description
│ └── Button
└── Footer (inside App JSX)


## Data Source
I created a hardcoded array of product objects inside `App.jsx`. Each object contains:
- `id` (unique identifier)
- `name` (product name)
- `price` (product price as string)
- `image` (URL to product image)
- `description` (short product description)

## Third-Party Dependencies
- **React 18** - JavaScript library for building user interfaces
- **Vite** - Build tool (replaces deprecated Create React App)
- No other external libraries - all CSS is custom written

## How to Install and Run
```bash
# 1. Navigate to project folder
cd 02190108_WEB101_PA1

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser to the URL shown (usually http://localhost:5173)

What I Learned
How to create reusable components with props

How to use .map() to render lists dynamically

How to make responsive layouts with CSS Grid and Media Queries

Component-based architecture in React

Browser Testing
I tested this on:

Chrome (Desktop + Mobile view)

Firefox (Desktop)

Edge (Desktop)

All worked correctly with responsive layout functioning as expected.

text

---

## ✅ Quick Setup Instructions

1. **Create the project:**
```bash
npm create vite@latest YOURSTUDENTNUMBER_WEB101_PA1 -- --template react
cd YOURSTUDENTNUMBER_WEB101_PA1
Delete the existing files in src/ folder

Create these files with the code above:

src/App.jsx

src/App.css

Create folder src/components/

src/components/ProductCard.jsx