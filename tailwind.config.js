module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        'verde': '#398378'
      },
      "fontFamily": {
        'Roboto': ['Roboto', 'sans-serif'],
        'Montserrat': ['Montserrat', 'sans-serif']
      },
      fontSize: {
        'test': 'calc(32.57143px + 1.07143vw)'
      },
      "screens": {
        "big": '1700px'
      },
      backgroundImage: {
        'accueil': ["url('../assets/img/img_accueil.jpg')"]
      },
    },


  },
  plugins: [],
}