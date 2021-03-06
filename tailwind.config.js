module.exports = {
  content: ["./index.html", "./public/**/*.html", "./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'PokeballAndCards': "url('../public/img/PokeballAndCards.jpg')",
        'PokemonCristal': "url('../public/img/PokemonCristal.png')",
        'PokemonLegendArceus': "url('../public/img/PokemonLegendArceus.jpg')",
        'LetsGoPikachuAndEevee': "url('../public/img/LetsGoPikachuAndEevee.png')",
        'PokemonSwordShield': "url('../public/img/PokemonSwordShield.png')",
        'UserPicture': "url('../public/img/UserPicture.jpg')",
        'MeowthMoney': "url('../public/img/MeowthMoney.jpg')",
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