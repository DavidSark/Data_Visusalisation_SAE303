module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        'verde': '#398378',
        'rojo': '#EF5881'
      },
      "fontFamily": {
        'Roboto': ['Roboto', 'sans-serif'],
        'Montserrat': ['Montserrat', 'sans-serif']
      },
      fontSize: {
        'test': 'calc(32.57143px + 1.07143vw)'
      },
      screens: {
        'mid': '1440px',
      },
      backgroundImage: {
        'accueil': ["url('../assets/img/final.jpg')"]
      },
    },


  },
  plugins: [],
}
