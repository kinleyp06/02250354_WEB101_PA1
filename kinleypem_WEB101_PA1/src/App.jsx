// Importing my reusable pin component
import PinCard from './components/PinCard'
// Importing the CSS file for styling
import './App.css'

// Main App component - this is the parent that holds everything
function App() {
  
  // DATA SOURCE - creating an array of pin objects
  // Each pin needs an id, image, title, author, and like count
  // I used picsum.photos for free placeholder images
  const pins = [
    {
      id: 1,
      image: "https://i.pinimg.com/736x/d6/3a/85/d63a85972c46c388d6ded49aaa748d78.jpg",
      title: "ALCHEMY OF SOUL POSTER",
      author: "Kdrama Lover",
      likes: "1.5M"
    },
    {
      id: 2,
      image: "https://i.pinimg.com/1200x/12/84/a1/1284a1e0ca5ee708c0eef4662323589b.jpg",
      title: "The Great Wall of China",
      author: "Travellers' story",
      likes: "85k"
    },
    {
      id: 3,
      image: "https://i.pinimg.com/736x/cb/04/1b/cb041bab6b5b3b1b327411b7bcfe2c12.jpg",
      title: "The Summer I Turned Pretty",
      author: "Great movies",
      likes: "2.1k"
    },
    {
      id: 4,
      image: "https://i.pinimg.com/1200x/82/35/ce/8235cea867da62c679f7f7603545c320.jpg",
      title: "Statue of Liberty",
      author: "Newyorkers",
      likes: "567k"
    },
    {
      id: 5,
      image: "https://i.pinimg.com/736x/7c/c3/c3/7cc3c324161eee4b465bbd919b8ffb5f.jpg",
      title: "LA City",
      author: "City Explorer",
      likes: "3.4k"
    },
    {
      id: 6,
      image: "https://i.pinimg.com/736x/8a/e3/5f/8ae35fce091021189b0fcd5793d955b9.jpg",
      title: "Northen Lights",
      author: "Beautyof Earth",
      likes: "945k"
    }
  ]

  // Rendering the page structure
  return (
    <div className="app">
      
      {/* Header section with logo and search bar */}
      <header className="header">
        <div className="logo">
          <span className="pin-icon">📍</span>
          <h1>PinBoard</h1>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search for ideas..." />
        </div>
      </header>
      
      {/* Grid container for all pins */}
      {/* Using .map() to loop through the pins array and create a PinCard for each one */}
      <main className="pin-grid">
        {pins.map(pin => (
          <PinCard 
            key={pin.id}           // key helps React identify each pin
            image={pin.image}      // passing image URL as prop
            title={pin.title}      // passing title as prop
            author={pin.author}    // passing author name as prop
            likes={pin.likes}      // passing like count as prop
          />
        ))}
      </main>
    </div>
  )
}

export default App