
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

        'pastel-green': '#00a14b',
        'red': '#ed1c24',
        'yellow': '#ed1c24',
        'lavender': '#cb6ce6',
      }
    },
  }
}
