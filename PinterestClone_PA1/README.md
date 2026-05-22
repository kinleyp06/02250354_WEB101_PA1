# Pinterest Clone - PA1

## Aim and Objective

The objective of this project is to build a fully-featured Pinterest-inspired web application demonstrating:

-  React component-based architecture with advanced state management
-  Modern pink-themed UI with smooth animations and transitions
-  Advanced search and category filtering capabilities
-  Interactive pin interactions (like/save functionality)
-  Fully responsive design (mobile, tablet, desktop)
-  High-performance build with Vite
-  Scalable, reusable, and maintainable code structure

##  Key Features

### Advanced Functionality

- **Smart Search** - Real-time search across pin titles and authors
- **Category Filtering** - Filter pins by Travel, Entertainment, Nature, and more
- **Like System** - Save your favorite pins with persistent like counter
- **No Results State** - User-friendly message when no pins match filters
- **Multi-filter Support** - Combine search with category filters

### UI/UX Enhancements

- **Pink Theme** - Beautiful gradient-based pink color scheme throughout
- **Smooth Animations** - Hover effects, transitions, and micro-interactions
- **Action Overlay** - Save, Like, and Share buttons appear on hover
- **Responsive Grid** - Adapts from 1 to 4 columns based on screen size
- **Gradient Styling** - Modern gradient backgrounds and buttons

### Design Elements

- Smooth card lift effect on hover
- Image zoom animation on card hover
- Interactive button animations and scale effects
- Gradient overlays on action buttons
- Pink-themed color palette throughout
- Professional typography and spacing

## 🛠 Technologies Used

### Frontend Framework & Tools

- **React 18** - Modern UI library with Hooks
- **Vite** - Next-generation build tool with instant HMR
- **JavaScript (ES6+)** - Modern JavaScript features
- **CSS3** - Advanced styling with gradients, animations, and flexbox

### State Management

- **React Hooks** - useState for managing search, filters, and likes

### Development Tools

- **Node.js & npm** - Package management
- **ESLint** - Code quality and linting
- **Git & GitHub** - Version control

##  Project Setup & Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Git

### Installation Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/kinleyp06/02250354_WEB101_PA1.git
   cd PinterestClone_PA1
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start Development Server**

   ```bash
   npm run dev
   ```

   The application will open at `http://localhost:5173`

4. **Build for Production**

   ```bash
   npm run build
   ```

5. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Project Structure

<img src=Project Structure.png>

## Key Components

### `App.jsx` - Main Application

- Manages all application state (search, filters, likes)
- Implements filtering logic combining search term and category
- Handles like/save functionality
- Renders header, filters, grid, and footer
- **State Variables:**
  - `searchTerm` - Current search input
  - `selectedCategory` - Active category filter
  - `likedPins` - Set of liked pin IDs

### `PinCard.jsx` - Pin Display Component

- Displays individual pin with image, title, author, and likes
- Renders action overlay with Save, Like, and Share buttons
- Handles like toggle via parent callback
- Responsive and fully interactive
- **Props:**
  - `id` - Pin identifier
  - `image` - Image URL
  - `title` - Pin title
  - `author` - Pin author name
  - `likes` - Like count
  - `isLiked` - Like status
  - `onLike` - Callback function

## Color Scheme (Pink Theme)

| Element    | Color                  | Usage                           |
| ---------- | ---------------------- | ------------------------------- |
| Primary    | `#ff1493` (Deep Pink)  | Logo, buttons, accents          |
| Secondary  | `#ff69b4` (Hot Pink)   | Gradients, borders              |
| Accent     | `#ffb6d9` (Light Pink) | Borders, hover states           |
| Background | Linear gradients       | Page background, soft aesthetic |
| Text       | `#111` (Dark)          | Main content                    |

## 📱 Responsive Breakpoints

- **Mobile** - 1 column (< 768px)
- **Tablet** - 2 columns (768px - 1023px)
- **Desktop** - 3 columns (1024px - 1439px)
- **Large Screen** - 4 columns (1440px+)

## How to Use

1. **Start the Application**

   ```bash
   npm run dev
   ```

2. **Browse Pins** - Scroll through the responsive masonry grid

3. **Search** - Type in the search bar to find pins by title or author

4. **Filter by Category** - Click category buttons to filter pins

5. **Interact with Pins**
   - Hover over a pin to reveal action buttons
   - Click **Save** to save the pin
   - Click **🩷** to like/unlike a pin
   - Click **↗🔗** to share the pin
   - Watch the "Saved" counter update in real-time

6. **Combine Filters** - Search term works together with category filters

## Features Checklist

- [x] Responsive grid layout (1-4 columns)
- [x] Search functionality
- [x] Category filtering
- [x] Like/save system with counter
- [x] Hover animations and effects
- [x] Action overlay buttons
- [x] No results handling
- [x] Pink color theme
- [x] Modern gradient styling
- [x] Smooth transitions
- [x] Image zoom effect
- [x] Mobile-optimized
- [x] Footer section
- [x] Professional UI/UX

## Future Enhancements

- Add pin creation/editing functionality
- Implement local storage persistence
- Add user authentication
- Create board collections
- Add more filter options
- Implement infinite scroll
- Add social sharing features
- Create admin dashboard

## Available Scripts

```bash
npm run dev       # Start development server with HMR
npm run build     # Create optimized production build
npm run preview   # Preview production build
npm run lint      # Run ESLint for code quality
```

## Repository

- **GitHub:** [PRACTICAL ASSIGNMENT](https://github.com/kinleyp06/02250354_WEB101_PA1)




