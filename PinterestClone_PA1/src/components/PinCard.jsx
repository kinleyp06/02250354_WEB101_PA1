// REUSABLE PIN CARD COMPONENT
// This component receives data through props and displays a single pin
// I use this same component for every pin in my grid

function PinCard({ image, title, author, likes }) {
  return (
    <div className="pin-card">
      
      {/* Image container - holds the pin image and hover button */}
      <div className="pin-image-container">
        <img src={image} alt={title} />
        {/* Save button only appears when hovering over the image */}
        <button className="save-btn">Save</button>
      </div>
      
      {/* Pin information section */}
      <div className="pin-info">
        <div className="pin-title">{title}</div>
        <div className="pin-actions">
          <span className="author-name">{author}</span>
          <span className="like-count">💓 {likes}</span>
        </div>
      </div>
      
    </div>
  )
}

export default PinCard