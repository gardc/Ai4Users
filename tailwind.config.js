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
      sans: ["Source Sans Pro", "system-ui"],
    },
    extend: {
      colors: {
        'primary': "#DCEED1",
        'secondary': '#AAC0AA',
        'violet': '#736372',
        'beaver': '#A18276',
        'battleship-gray': '#7A918D',
        'sky-blue': '#8ECAE6',
        'prussian-blue': '#003049',
        'college-blue': '#012347',
        'darkblue':'#001731',
        'lightblue':'#394a5e',
        'lavaorange': '#f24922',
        'darkerorange':'#c14922',
        'grassgreen': '#4db862',
      },
      borderWidth: {
        '1': '1px', 
      },
      spacing: {
        '19/20': '95%',
      },
      height: {
        '350': '350px',
        '450': '450px',
      }
    },
  },
  plugins: [],
};
