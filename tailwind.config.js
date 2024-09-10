/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'sm' : '375px',
      'md' : '768px',
      'lg' : '1440px'
    },
    extend: {
      colors:{
        'ratingLightGrey': 'hsl(217, 12%, 63%)',
        'ratingDarkBlue': 'hsl(213, 19%, 18%)',
        'ratingVeryDarkBlue' : 'hsl(216, 12%, 8%)',
        'ratingCustomBlue' : 'rgb(51, 58, 68)',
        'ratingOrange' : 'hsl(25, 97%, 53%)'
      }
    },
    fontFamily:{
      "Overpass": ['Overpass']
    }
  },
  plugins: [],
}

