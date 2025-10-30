📁 Folder Files

This project was bootstrapped with Create React App
 using the TypeScript template.
It’s an interactive folder/file explorer interface built with React 19, Tailwind CSS, and React Testing Library.

🚀 Getting Started
1️⃣ Install dependencies
npm install

2️⃣ Start the development server
npm start


Runs the app in development mode.
Open http://localhost:3000
 to view it in your browser.

The page reloads automatically when you make edits, and lint errors are shown in the console.

📦 Available Scripts
npm start

Runs the app in development mode.

npm test

Launches the test runner using React Testing Library and Jest in watch mode.
See the testing documentation
 for more info.

npm run build

Builds the app for production into the build/ folder.
It bundles React in production mode and optimizes the build for best performance.

npm run eject

⚠️ Note: This is a one-way operation.
Ejecting copies all configuration files (Webpack, Babel, ESLint, etc.) into your project for full control.

🎨 Styling with Tailwind CSS

This project uses Tailwind CSS for fast, utility-first styling.
You can customize your theme in tailwind.config.js:

extend: {
  colors: {
    "light-gray-100": "#F5F5F5",
    "dark-gray-200": "#2C2C2C",
    primary: "#6366f1",
    accent: "#14b8a6",
  },
}


Use Tailwind classes directly in components:

<div className="bg-primary text-white p-4 rounded-lg shadow">
  Example styled component
</div>

🧩 Project Structure
src/
 ├── assets/           # SVGs and icons
 ├── components/       # Reusable components (Folder, Files, Filter, etc.)
 ├── data/             # Mock folder/file data
 ├── App.tsx           # Root application
 ├── index.tsx         # Entry point
 └── tailwind.css      # Tailwind base styles

🧪 Testing

This project uses React Testing Library and Jest DOM for unit and integration testing.

Run tests:

npm test

🌍 Deployment

After building (npm run build), deploy the contents of the build/ folder to:

Vercel

Netlify

GitHub Pages

Firebase Hosting

Refer to the Create React App Deployment Guide
 for details.

📚 Learn More

React Documentation

Tailwind CSS Docs

React Testing Library

Create React App Docs

🧑‍💻 Author

Braulin Pires
Built with ❤️ using React, TypeScript, and Tailwind CSS.