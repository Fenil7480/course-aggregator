/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'cursive': ['Audiowide', 'cursive'],
      },
      fontSize: {
        '4xl': '2.5rem',
        'base': '1.125',
      },
      colors: {
        blue: {
          '800': '#091C45',
          '600': '#0549FF',
          '400': '#97B3FF',
          '300': '#DCE2FF',
          '200': '#F3F6FF',
        },
        white: {
          '100': '#ffffff'
        },
        pink: {
          '400': '#FF458B'
        }
      }
    },
  },
  plugins: [],
}
