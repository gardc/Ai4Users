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
    fontFamily: {
      'sans' : ['Source Sans Pro', 'system-ui'],
    },
    extend: {
      colors: {
      'backgroundColor' : '#fffaf9',
      'backgroundColor2': '#f8f8f8', 
    },},
  },
  plugins: [],
}
