/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}","*",
  ],
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'yellow': '#ffff46',
        'coffee': '#301c10',
        'skin': '#fefae0',
        'green': '#C5FAD5',
        'black': '#000000',
        'white': '#ffffff',
        'orange':'#fb8500'
      },
      screens: {
        '3xl' : {'max':'1920px'},

        '2xl': {'max': '1550px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1300px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '900px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '725px'},
        // => @media (max-width: 639px) { ... }
      },
    extend: {},
  },
  plugins: [],
}

