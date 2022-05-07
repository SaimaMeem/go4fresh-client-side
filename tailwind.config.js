
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
    "./node_modules/flowbite/**/*.js"
  ],
  plugins: [
    require('tw-elements/dist/plugin'),
    require('flowbite/plugin')
  ],
  theme: {
    extend: {
      fontFamily: {
        'headings': ['Bebas Neue', 'cursive'],
      },
      colors: {
        'dark-blue': '#0e293b',
        'darker-blue': '#091b26',
        'off-white': '#EEECEA',
        'off-white-darker': '#dedddc',
        'pastel-green': '#00a14b',
        'pastel-green-dark': '#019144',
        'pastel-green-darker': '#006b32',
        'red': '#ed1c24',
        'light-red': '#f25a5f',
        'yellow': '#FFDE17',
        'light-yellow': '#fae45f',
        'dark-yellow': '#f5d307',
        'orange': '#FF914D',
        'light-orange': '#f59d67',
        'lavender': '#cb6ce6',
        'light-lavender': '#d191e3',
      }
    },
  }
}
