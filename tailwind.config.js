/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    container:{
    width:'80%',
    margin:'auto',
    },
    colors: {
      primary: '#1abc9c',
      secondary: '#2c3e50',
      white: "#ffff",
      black:'#000',
      gray:'#dee2e6',
      semiblack:'#212529'
    },
    extend: {
      screens: {
        'max-sm': {'max': '639px'}, // Custom screen size for less than 640px
      },
    },
  },
  plugins: [],
}

