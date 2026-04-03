# Pinterest-Style PinBoard - My React Assignment

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
App.jsx
├── Header (logo, search bar, icons)
├── Pin Grid (uses .map() to loop through pins)
│ └── PinCard.jsx (REUSABLE COMPONENT - used 9 times)
│ ├── Image with hover buttons
│ ├── Pin title
│ ├── Author info
│ └── Like count and share icon


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
- `likes` - how many likes (with k for thousands)

I chose hardcoded data because the assignment said "provide the data source for your reusable components" - this clearly shows data flowing from parent to child via props.

## Third-Party Dependencies

| Package | Why I Used It |
|---------|---------------|
| React 18 | Required for the assignment |
| Vite | Build tool (Create React App is deprecated) |

**No other packages** - All CSS is written by me from scratch.

## How to Run My Project

```bash
# 1. Go to project folder
cd [YOUR_STUDENT_NUMBER]_WEB101_PA1

# 2. Install dependencies
npm install

# 3. Start the server
npm run dev

# 4. Open the link (usually http://localhost:5173)

Responsive Design Breakpoints
I made the grid work on all screen sizes:

Screen Size	Columns	What Device
< 640px	1 column	Small phones
640px - 900px	2 columns	Large phones / small tablets
900px - 1100px	3 columns	Tablets
1100px - 1400px	4 columns	Small desktops
> 1400px	5 columns	Large desktops
I used CSS Grid with multiple media queries to achieve this. The images resize automatically.

Interactive Features I Added
Hover effects on cards - Card lifts up when mouse hovers over it

Save button appears on hover - Like real Pinterest, you see Save when hovering over an image

Menu button appears on hover - Three dots menu button appears on bottom right

Button color changes on hover - Save button gets darker when hovered

Search bar focus effect - Changes color when you click on it

What I Learned From This Assignment
Reusable components save time - Writing PinCard once and reusing it was much faster than copying HTML

Props make components flexible - Same component can show completely different content

CSS Grid is great for responsive layouts - Much cleaner than using floats or flexbox for grids

Hover effects improve UX - Small interactions make the site feel more professional

Media queries are powerful - One layout can work on phones, tablets, and desktops

Testing I Did
Test	Result
Chrome desktop (1920x1080)	✅ 5 columns, looks good
Chrome mobile view (iPhone SE)	✅ 1 column, buttons work
Chrome tablet view (iPad)	✅ 3 columns, looks good
Firefox desktop	✅ Works correctly
Edge desktop	✅ Works correctly
Hover effects	✅ Save button appears
Responsive breakpoints	✅ Columns change at correct widths
Why Pinterest Was a Good Choice
Pinterest's entire design is based on reusable pin cards

Makes it very obvious I understand React components

Looks impressive but wasn't too hard to implement

Lots of hover effects to show interactivity

Files I Created For This Assignment
text
src/
├── App.jsx           - Main component with pin data
├── App.css           - All styles with responsive breakpoints
├── components/
│   └── PinCard.jsx   - Reusable pin component
└── main.jsx          - Entry point (from Vite template)
What I Would Add With More Time
Actual search functionality (currently visual only)

Save button that changes color when clicked

Infinite scroll to load more pins

Clicking on a pin to open a larger view

But for this assignment, I met all the requirements: React, reusable components, responsive design, data source, and proper documentation.

Declaration
I understand all the code I wrote for this assignment. I can explain how props work, how the .map() function loops through the pins array, and how media queries make the layout responsive. This is my own work.

Date: 03/04/2026
