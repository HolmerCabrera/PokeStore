module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'PokemonCristal': "url('../img/PokemonCristal.png')",
        'PokeballAndCards': "url('../img/PokeballAndCards.jpg')",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9',
      }),
      textColor: {
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9',
      },
      fontFamily: {
        Monserrat: ['Monserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}