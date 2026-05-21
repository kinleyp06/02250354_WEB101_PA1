import { useState } from "react";
import PinCard from "./components/PinCard";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [likedPins, setLikedPins] = useState(new Set());

  // ADVANCED DATA WITH CATEGORIES
  const pins = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/736x/d6/3a/85/d63a85972c46c388d6ded49aaa748d78.jpg",
      title: "ALCHEMY OF SOUL POSTER",
      author: "Kdrama Lover",
      likes: "1.5M",
      category: "entertainment",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/1200x/12/84/a1/1284a1e0ca5ee708c0eef4662323589b.jpg",
      title: "The Great Wall of China",
      author: "Travellers' story",
      likes: "85k",
      category: "travel",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/736x/cb/04/1b/cb041bab6b5b3b1b327411b7bcfe2c12.jpg",
      title: "The Summer I Turned Pretty",
      author: "Great movies",
      likes: "2.1k",
      category: "entertainment",
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/1200x/82/35/ce/8235cea867da62c679f7f7603545c320.jpg",
      title: "Statue of Liberty",
      author: "Newyorkers",
      likes: "567k",
      category: "travel",
    },
    {
      id: 5,
      image:
        "https://i.pinimg.com/736x/7c/c3/c3/7cc3c324161eee4b465bbd919b8ffb5f.jpg",
      title: "LA City",
      author: "City Explorer",
      likes: "3.4k",
      category: "travel",
    },
    {
      id: 6,
      image:
        "https://i.pinimg.com/736x/8a/e3/5f/8ae35fce091021189b0fcd5793d955b9.jpg",
      title: "Northern Lights",
      author: "Beautyof Earth",
      likes: "945k",
      category: "nature",
    },
  ];

  // FILTER LOGIC
  const filteredPins = pins.filter((pin) => {
    const matchesSearch =
      pin.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pin.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || pin.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // LIKE TOGGLE FUNCTION
  const toggleLike = (pinId) => {
    setLikedPins((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(pinId)) {
        newSet.delete(pinId);
      } else {
        newSet.add(pinId);
      }
      return newSet;
    });
  };

  return (
    <div className="app">
      {/* ENHANCED HEADER */}
      <header className="header">
        <div className="logo">
          <span className="pin-icon">📌</span>
          <h1>PinBoard</h1>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for ideas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="liked-counter">❤️ {likedPins.size} Saved</div>
      </header>

      {/* CATEGORY FILTERS */}
      <nav className="category-filter">
        <button
          className={`filter-btn ${selectedCategory === "all" ? "active" : ""}`}
          onClick={() => setSelectedCategory("all")}
        >
          All
        </button>
        <button
          className={`filter-btn ${selectedCategory === "travel" ? "active" : ""}`}
          onClick={() => setSelectedCategory("travel")}
        >
          Travel
        </button>
        <button
          className={`filter-btn ${selectedCategory === "entertainment" ? "active" : ""}`}
          onClick={() => setSelectedCategory("entertainment")}
        >
          Entertainment
        </button>
        <button
          className={`filter-btn ${selectedCategory === "nature" ? "active" : ""}`}
          onClick={() => setSelectedCategory("nature")}
        >
          Nature
        </button>
      </nav>

      {/* PIN GRID */}
      <main className="pin-grid">
        {filteredPins.length > 0 ? (
          filteredPins.map((pin) => (
            <PinCard
              key={pin.id}
              id={pin.id}
              image={pin.image}
              title={pin.title}
              author={pin.author}
              likes={pin.likes}
              isLiked={likedPins.has(pin.id)}
              onLike={toggleLike}
            />
          ))
        ) : (
          <div className="no-results">
            <p>No pins found. Try a different search!</p>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>&copy; 2026 PinBoard. Built with React & Vite</p>
      </footer>
    </div>
  );
}

export default App;
