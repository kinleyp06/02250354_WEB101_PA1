# Pinterest Clone - PA1

## Aim and Objective

The objective of this project is to build a modern Pinterest-inspired web application that demonstrates:

- React component-based architecture
- State management and component lifecycle
- Responsive grid layout design
- Modern web development practices with Vite
- Building scalable, reusable UI components

## Technologies Used

### Frontend Framework & Tools

- **React 18** - UI library for building components
- **Vite** - Fast build tool and development server
- **JavaScript (ES6+)** - Modern JavaScript features
- **CSS3** - Styling with responsive design

### Development Tools

- **Node.js & npm** - Package management
- **ESLint** - Code quality and linting
- **Git & GitHub** - Version control

### Build & Runtime

- **ES Modules** - Modern module system

## Project Setup & Installation Steps

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

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

   - Application will open at `http://localhost:5173` (or similar Vite port)

4. **Build for Production**

   ```bash
   npm run build
   ```

5. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Project Structure

```
PinterestClone_PA1/
├── src/
│   ├── main.jsx              # Application entry point
│   ├── App.jsx               # Root component
│   ├── App.css               # App styling
│   ├── index.css             # Global styles
│   ├── components/
│   │   └── PinCard.jsx       # Individual pin card component
│   └── assets/               # Images and media files
├── public/                   # Static assets
├── index.html                # HTML template
├── package.json              # Project dependencies
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint rules
├── .gitignore                # Git ignore rules
└── README.md                 # This file
```

## Key Components

### `App.jsx`

- Main application component
- Manages pin data and layout
- Renders pin grid

### `PinCard.jsx`

- Reusable pin card component
- Displays individual pin information
- Handles pin interactions

## Features

- **Responsive Masonry Grid** - Pinterest-style layout that adapts to screen size
- **React Components** - Modular and reusable UI components
- **Mobile-Friendly** - Works seamlessly on desktop, tablet, and mobile
- **Fast Development** - Hot module replacement with Vite
- **Code Quality** - ESLint configuration for consistent code style

## Output

Running the application displays:

- A Pinterest-style masonry grid with pin cards
- Responsive layout that reflows based on screen size
- Interactive pin components with hover effects
- Smooth performance with React and Vite optimization

## How to Use

1. **Start the development server**

   ```bash
   npm run dev
   ```

2. **View in browser** at the provided localhost URL

3. **Browse pins** - Interact with the pin grid layout

4. **Make changes** - Vite will hot-reload automatically

## Available Scripts

```bash
npm run dev      # Start development server

```
## Repository

- **GitHub:** [https://github.com/kinleyp06/02250354_WEB101_PA1.git]

