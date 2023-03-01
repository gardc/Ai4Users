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
      'primary' : '#579bb1',
      'secondary' : '#e07a5f',
      'tertiary' : '#f8f4ea',
      'quaternary' : '#f8f4ea',

    },},
  },
  plugins: [],
}
