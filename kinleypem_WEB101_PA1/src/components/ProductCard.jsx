// REUSABLE PRODUCT CARD COMPONENT
// This is like a "blueprint" or "stamp" - I can use it many times with different data
// It receives data through "props" (short for properties) from the parent component (App.jsx)

// The { } curly braces is "destructuring" - it extracts each prop into a variable
// Without destructuring: function ProductCard(props) then use props.name
// With destructuring: directly use name, price, etc.
function ProductCard({ name, price, image, description }) {
  
  // Each card has the SAME STRUCTURE but DIFFERENT CONTENT
  // This is what makes it REUSABLE - the template stays the same, only data changes
  return (
    <div className="product-card">  {/* card container */}
      
      {/* PRODUCT IMAGE - dynamically changes based on the image prop passed in */}
      <img src={image} alt={name} />  {/* alt text uses product name for accessibility */}
      
      {/* PRODUCT NAME - changes based on name prop */}
      <h3>{name}</h3>
      
      {/* PRODUCT PRICE - changes based on price prop */}
      <p className="price">{price}</p>  {/* className="price" for special styling */}
      
      {/* PRODUCT DESCRIPTION - changes based on description prop */}
      <p className="description">{description}</p>
      
      {/* BUTTON - this is the same for every card (interactive element) */}
      {/* In a real app, clicking this would add item to shopping cart */}
      <button className="buy-btn">Add to Cart</button>
      
    </div>
  )
}

// EXPORTING so App.jsx can import and use this component
export default ProductCard