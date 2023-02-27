/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'backgroundColor' : '#fffaf9',
      'primary' : '#579bb1',
      'secondary' : '#e07a5f',
      'tertiary' : '#f8f4ea',
      'quaternary' : '#f8f4ea',

    },},
  },
  plugins: [],
}
