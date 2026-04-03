# Pinterest clone : My React Assignment

## Submitted by:
- Name: Kinley Pem
- Student ID: 02250354
- Module: WEB101
- Assignment: PA1

## What I Chose To Build

I recreated a Pinterest style image board. I chose Pinterest because it's built entirely around reusable components every pin card looks the same but has different content. This perfectly shows what we learned about reusable components in React.

## What My Website Does

- Displays 9 pins in a responsive grid layout
- Each pin shows an image, title, author name, and like count
- Hover over any pin image to see "Save" button and menu button (just like real Pinterest)
- Cards lift slightly when you hover over them
- Search bar at the top (visual only - shows I understand the layout)
- Layout changes from 1 to 5 columns depending on screen size

## My Component Structure
- App.jsx
  - Header
    - Logo
    - Search Bar
    - Icons
      - user menu
      - notifications
  - Pin Grid
    - PinCard.jsx *(REUSABLE - used 9+ times)*
      - Image with hover buttons
      - Pin title
      - Author info
      - Like count and share icon

### Why This Structure Works
- **PinCard is reusable** - I only wrote it once but used it 9 times
- **Single Responsibility** - PinCard only handles displaying one pin
- **Easy to add more pins** - Just add data to the pins array

## Where My Data Comes From

I created a hardcoded array called `pins` in App.jsx. Each pin has:
- `id` - unique number for React keys
- `image` - URL from picsum.photos (free placeholder images)
- `title` - description of the image
- `author` - username of who posted it
- `likes` - how many likes (with k for thousands and M for millions)

I chose hardcoded data because the assignment said "provide the data source for your reusable components"  this clearly illustrates how parents pass data to children using props.

## Third-Party Dependencies

**React 18**
: Required for the assignment

**Vite**
: Build tool (Create React App is deprecated)

**No other packages** - All CSS is written by me from scratch by refering some websites for help.

## References

CSS-Tricks. (2021). *A complete guide to CSS Grid*. Retrieved from https://css-tricks.com/snippets/css/complete-guide-grid/

W3Schools. (n.d.). *CSS hover selector*. Retrieved from https://www.w3schools.com/css/css_hover.asp

React.dev. (2024). *Passing props to a component*. Retrieved from https://react.dev/learn/passing-props-to-a-component

React.dev. (2024). *Rendering lists*. Retrieved from https://react.dev/learn/rendering-lists

MDN Web Docs. (2023). *Position - CSS: Cascading Style Sheets*. Retrieved from https://developer.mozilla.org/en-US/docs/Web/CSS/position

Pinterest. (n.d.). *Pinterest homepage*. Retrieved from https://www.pinterest.com

Vite.js. (2024). *Vite guide*. Retrieved from https://vitejs.dev/guide/

## How to Run My Project

```bash
# 1. Go to project folder
cd 02250354_WEB101_PA1

# 2. Install dependencies
npm install

# 3. Start the server
npm run dev

# 4. Open the link (usually http://localhost:5173) 
```

## Responsive Design Breakpoints

I made the grid work on all screen sizes:

Screen size less than 768px - 1 column for mobile phones

Screen size between 768px and 1024px - 2 columns for tablets

Screen size greater than 1024px - 3 columns for desktops

I used CSS Grid with media queries to achieve this. The images resize automatically.


## Interactive Features I Added

Hover effect on cards - Card lifts up when mouse hovers over it

Save button appears on hover - Like real Pinterest, you see Save when hovering over an image

Button color changes on hover - Save button gets darker when hovered

Search bar focus effect - Changes color when you click on it

## What I Learned From This Assignment

Reusable components save time - Writing PinCard once and reusing it was much faster than copying HTML

Props make components flexible - Same component can show completely different content

CSS Grid is great for responsive layouts - Much cleaner than using floats or flexbox for grids

Hover effects improve UX - Small interactions make the site feel more professional

Media queries are powerful - One layout can work on phones, tablets, and desktops

## Testing I Did

I tested my project on different browsers and devices to make sure everything works.

**Chrome on my laptop (1920x1080)** - Good, shows 3 columns

**Chrome mobile view (iPhone SE size)** - Good, shows 1 column and the buttons work

**Chrome tablet view (iPad size)** - Good, shows 2 columns

**Firefox desktop** - Works fine, no issues

**Edge desktop** - Works fine, no issues

**Hover effects** - The Save button appears when I hover over images

**Responsive breakpoints** - The columns change correctly when I resize my browser window

## Why I Chose Pinterest

I picked Pinterest for a few reasons.

Every pin on Pinterest looks the same but has different content. This made it perfect for showing that I understand reusable components in React. I can make one PinCard component and use it over and over again.

The design is simple enough that I could finish it before the deadline but it still looks good.

Pinterest has hover effects like the Save button that appears when you hover over an image. This let me add some interactive features without making the code too complicated.

I use Pinterest myself sometimes, so I already knew how it should look and behave.

Most of the layout is just a grid of images, which CSS Grid handles easily. I didn't need to learn anything too advanced to make it work.

## Files I Created For This Assignment

Here are all the files I made for this project:

**src/App.jsx** 
This is my main component. It has the header, the search bar, and the grid layout. I also stored all my pin data here in an array.

**src/App.css** 
This file has all my styles. I wrote the CSS for the header, the grid, the pin cards, and the responsive breakpoints for mobile, tablet, and desktop.

**src/components/PinCard.jsx** 
This is my reusable component. It takes in props like image, title, author, and likes and displays a single pin. I used this component six times in App.jsx.

**src/main.jsx** 
I didn't change this file. It came with the Vite template and it just renders the App component to the page.

**README.md** 
This file - documenting my project and explaining what I did.

## What I Would Add With More Time

Actual search functionality (currently visual only)

Save button that actually saves something

More pins with different categories

Clicking on a pin to open a larger view

But for this assignment, I met all the requirements: React, reusable components, responsive design, data source, and proper documentation.

## Declaration

I understand all the code I wrote for this assignment. I can explain how props work, how the .map() function loops through the pins array, and how media queries make the layout responsive. This is my own work.

Date: 03/04/2026