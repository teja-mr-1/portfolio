# DTU MSc CSE Portfolio Website

A responsive personal portfolio website showcasing DTU group projects, built with React, React Router, and Tailwind CSS.

## Project Structure

```
src/
├── pages/
│   ├── Home.jsx              # Landing page with hero section and project grid
│   └── ProjectDetail.jsx     # Detailed project page with all information
├── components/
│   └── ProjectCard.jsx       # Reusable project card component
├── data/
│   └── projectsData.js       # Sample DTU group projects data
├── App.jsx                   # Main app with routing configuration
├── index.css                 # Tailwind CSS imports and base styles
└── main.jsx                  # React entry point
```

## Features

✨ **Responsive Design**
- Fully responsive layout optimized for mobile, tablet, and desktop
- Mobile-first approach with Tailwind CSS

🎨 **Modern UI**
- Clean, minimalist, and professional design
- Gradient accents and smooth transitions
- Hover effects on interactive elements

📱 **Pages**
- **Home**: Hero section with introduction and project grid
- **Project Detail**: Comprehensive project information with embedded video demo

🔀 **Navigation**
- React Router for smooth page transitions
- Back navigation from project detail pages
- Related projects quick navigation

💻 **Components**
- `ProjectCard`: Reusable component for displaying project summaries
- Technology badges and project metadata

## Technologies Used

- **React 18**: Modern UI library with hooks
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and dev server
- **PostCSS & Autoprefixer**: CSS processing and browser compatibility

## Getting Started

### Prerequisites

- Node.js v24.13.0 or higher (installed via nvm)
- npm v11.6.2 or higher

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development Server

The development server runs on `http://localhost:5173` by default with Hot Module Replacement (HMR) enabled.

```bash
npm run dev
```

## Quick Start Guide

1. Ensure you have Node.js installed via nvm:
   ```bash
   source ~/.bashrc  # Reload shell to load nvm
   nvm use 24
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173`

## Project Structure Details

### Pages

#### `Home.jsx`
- Hero section with student introduction
- MSc CSE @ DTU Denmark display
- "DTU Group Projects" section with responsive grid
- Three project cards with quick navigation

#### `ProjectDetail.jsx`
- Full project information display
- Course name and semester
- Problem statement section
- "My Contribution" section
- Embedded demo video (YouTube iframe)
- Technologies used with styled badges
- GitHub repository link
- Navigation to other projects

### Components

#### `ProjectCard.jsx`
- Displays project title, course, and semester
- Short description
- Technology badges (shows 4 + count of remaining)
- "View Project" button with hover effects
- Responsive card layout

### Data Structure

Each project object contains:
```javascript
{
  id: number,
  title: string,
  shortDescription: string,
  course: string,
  semester: string,
  problemStatement: string,
  contribution: string,
  technologies: string[],
  videoUrl: string,
  githubUrl: string
}
```

## Styling

### Tailwind CSS Configuration

- Content paths configured for all JSX files
- Responsive breakpoints: `sm` (640px), `md` (768px), `lg` (1024px)
- Custom colors via Tailwind's color palette
- Spacing, sizing, and typography utilities

### Color Scheme

- Primary: Blue (`bg-blue-500`, `bg-blue-600`)
- Backgrounds: Gray (`bg-gray-50`, `bg-gray-100`, `bg-gray-900`)
- Text: Gray shades for hierarchy

## Customization

### Adding New Projects

Edit `src/data/projectsData.js` and add a new project object:

```javascript
{
  id: 4,
  title: "Your Project Title",
  shortDescription: "Short description...",
  course: "Course Name (Code)",
  semester: "Fall/Spring Year",
  problemStatement: "Problem description...",
  contribution: "Your contribution...",
  technologies: ["Tech1", "Tech2", "Tech3"],
  videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
  githubUrl: "https://github.com/username/repo",
}
```

### Modifying Student Info

Edit the hero section in `src/pages/Home.jsx`:
- Name in the main heading
- Degree and university information
- Introduction text

### Changing Colors

Edit `tailwind.config.js` to extend the theme or modify `src/index.css`.

## Browser Support

Tested and optimized for:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Build Commands

```bash
# Development with hot reload
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview

# Lint code
npm run lint
```

## Deployment

The production build is ready to deploy to any static hosting service:

```bash
npm run build
# Upload the 'dist' folder to your hosting service
```

Compatible with:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## Future Enhancements

- [ ] Dark mode toggle
- [ ] Blog or articles section
- [ ] Contact form with backend integration
- [ ] Skills showcase section
- [ ] Timeline for education and experience
- [ ] Filter projects by technology
- [ ] Search functionality
- [ ] Animations with Framer Motion

## License

This project is open source and available under the MIT License.

## Author

Teja Reddy
MSc Computer Science and Engineering
Technical University of Denmark (DTU)
