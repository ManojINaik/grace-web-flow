# Portfolio Website

This is a portfolio website built with Vite, React, Tailwind CSS, and various other technologies.

## Setup Instructions

To run this project on any machine, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd grace-web-flow
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview the production build:
   ```bash
   npm run preview
   ```

## Project Structure

- `src/`: Contains all source code
  - `app/`: Main application layout and styles
  - `components/`: React components
  - `fonts/`: Custom font definitions
  - `data/`: Data files for the portfolio
  - `lib/`: Utility functions and hooks

## Dependencies

This project uses:
- Vite for development and building
- React for UI components
- TailwindCSS for styling
- react-grid-layout-next for grid layouts
- lottie-web for animations
- react-fast-marquee for scrolling text
- next-themes for dark/light mode

## Notes

- The PostCSS configuration uses a CommonJS format (postcss.config.cjs)
- The project uses ES modules (type: "module" in package.json)

Originally adapted from a Next.js project and converted to work with Vite.
