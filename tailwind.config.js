module.exports = {
  content: ["./src/index.html", "./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'PokemonCristal': "url('../img/PokemonCristal.png')",
        'PokeballAndCards': "url('../img/PokeballAndCards.jpg')",
        'PokemonLegendArceus': "url('../img/PokemonLegendArceus.jpg')",
        'LetsGoPikachuAndEevee': "url('../img/LetsGoPikachuAndEevee.png')",
        'PokemonSwordShield': "url('../img/PokemonSwordShield.png')",
        'UserPicture': "url('../img/UserPicture.jpg')",
        'MeowthMoney': "url('../img/MeowthMoney.jpg')",
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