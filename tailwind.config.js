/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-gray-100": "#f3f4f6",
        "dark-gray-600": "#4b5563",
        "dark-gray-800": "#1f2937",
      },
    },
  },
  plugins: [],
};
