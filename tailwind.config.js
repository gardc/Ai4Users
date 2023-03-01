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
      },
    },
  },
  plugins: [],
};
