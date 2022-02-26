module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './vueform.config.js', // or where `vueform.config.js` is located
    './node_modules/@vueform/vueform/themes/tailwind/**/*.vue',
    './node_modules/@vueform/vueform/themes/tailwind/**/*.js',
  ],
  theme: {
    extend: {
      form: (theme) => ({
        primary: '#07BF9B',
      })
    },
  },
  plugins: [
    require('@vueform/vueform/tailwind')
  ]
}
