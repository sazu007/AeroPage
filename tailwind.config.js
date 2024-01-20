/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        container:"1320px"
      },
      fontFamily:{
        'Roboto': ['Roboto', 'sans-serif'],
        'ABeeZee': ['ABeeZee', 'sans-serif'],
        'REM': ['REM', 'sans-serif'],
      }

    },
  },
  plugins: [],
}