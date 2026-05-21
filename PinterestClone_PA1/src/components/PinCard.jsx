// REUSABLE PIN CARD COMPONENT
// This component receives data through props and displays a single pin
// I use this same component for every pin in my grid

function PinCard({ id, image, title, author, likes, isLiked, onLike }) {
  return (
    <div className="pin-card">
      {/* Image container with enhanced hover effects */}
      <div className="pin-image-container">
        <img src={image} alt={title} />

        {/* Enhanced action buttons */}
        <div className="pin-actions-overlay">
          <button className="save-btn" title="Save this pin">
            Save
          </button>
          <button
            className={`like-btn ${isLiked ? "liked" : ""}`}
            onClick={() => onLike(id)}
            title={isLiked ? "Remove from likes" : "Like this pin"}
          >
            {isLiked ? "❤️" : "🤍"}
          </button>
          <button className="share-btn" title="Share this pin">
            ↗️
          </button>
        </div>
      </div>

      {/* Pin information section */}
      <div className="pin-info">
        <div className="pin-title">{title}</div>
        <div className="pin-actions">
          <span className="author-name">{author}</span>
          <span className="like-count">💕 {likes}</span>
        </div>
      </div>
    </div>
  );
}

export default PinCard;
