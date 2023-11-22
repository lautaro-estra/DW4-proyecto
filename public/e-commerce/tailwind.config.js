/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customBlue:'#41b3d3',
        customGreen:'#2ecc71',
        customRed :'#e74c3c',
      },
      fontFamily:{
        quicksand:['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

