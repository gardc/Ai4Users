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
        'zinc': '#F4F4F5',
        'slate-light': '#F8FAFC',
        'prussian-blue': '#003049',
        'darkblue':'#001731',
        'sky-blue': '#8ECAE6',
        'lavaorange': '#f24922',
        'darkerorange':'#c14922',
      },
      borderWidth: {
        '1': '1px', 
      },
      spacing: {
        '55/100': '55%',
        '19/20': '95%',
      },
      height: {
        '350': '350px',
        '450': '450px',
      },
      spacing: {
        '9px': '9px',
      }
    },
  },
  plugins: [],
};
