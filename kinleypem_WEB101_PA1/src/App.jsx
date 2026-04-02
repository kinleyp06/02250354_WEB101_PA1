// IMPORTING NECESSARY FILES
// ProductCard is a reusable component I created - it's like a template for each product
import ProductCard from './components/ProductCard'
// CSS file for styling everything on the page
import './App.css'

// MAIN APP COMPONENT - This is like the "container" that holds everything on the page
function App() {
  
  // DATA SOURCE FOR REUSABLE COMPONENTS
  // This is an array (list) of products. Each product is an object (a bundle of info)
  // I'm hardcoding this data because the assignment requires a data source
  // In a real app, this could come from a database or API
  const products = [
    { 
      id: 1,  // unique ID to help React track each product
      name: "Wireless Headphones", 
      price: "$49.99", 
      image: "https://picsum.photos/id/1/200",  // random placeholder image from picsum
      description: "Noise cancelling, 20hr battery" 
    },
    { 
      id: 2, 
      name: "Smart Watch", 
      price: "$199.99", 
      image: "https://picsum.photos/id/2/200", 
      description: "Track your fitness" 
    },
    { 
      id: 3, 
      name: "Laptop Stand", 
      price: "$29.99", 
      image: "https://picsum.photos/id/3/200", 
      description: "Ergonomic aluminum" 
    },
    { 
      id: 4, 
      name: "USB-C Cable", 
      price: "$12.99", 
      image: "https://picsum.photos/id/4/200", 
      description: "6ft, braided" 
    },
    { 
      id: 5, 
      name: "Mouse Pad", 
      price: "$9.99", 
      image: "https://picsum.photos/id/5/200", 
      description: "RGB lighting" 
    },
    { 
      id: 6, 
      name: "Webcam Cover", 
      price: "$5.99", 
      image: "https://picsum.photos/id/6/200", 
      description: "Privacy slider" 
    }
  ]

  // WHAT GETS DISPLAYED ON SCREEN (JSX - looks like HTML but it's JavaScript)
  return (
    <div className="app">  {/* main container with class name for styling */}
      
      {/* HEADER SECTION - shows title of my recreated webpage */}
      <header className="header">
        <h1>🛒 My Shop</h1>
        <p>Recreated Web Page - Product Gallery</p>
      </header>
      
      {/* PRODUCT GRID SECTION - .map() loops through each product and creates a card */}
      {/* This is where the REUSABLE COMPONENT is used multiple times */}
      {/* .map() is like saying "for each product in the list, do something" */}
      <main className="product-grid">
        {products.map(product => (
          // The ProductCard component is REUSABLE - I use it 6 times with different data
          // Each prop (name, price, image, description) passes data from parent to child
          <ProductCard 
            key={product.id}           // 'key' helps React identify which item changed
            name={product.name}        // passing product name as a prop
            price={product.price}      // passing price as a prop
            image={product.image}      // passing image URL as a prop
            description={product.description}  // passing description as a prop
          />
        ))}
      </main>

      {/* FOOTER SECTION - simple copyright notice */}
      <footer className="footer">
        <p>© 2025 - Responsive React Demo</p>
      </footer>
    </div>
  )
}

// EXPORTING so other files can use this App component
// Vite looks for this export to render the page
export default App