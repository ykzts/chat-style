module.exports = {
  mode: 'jit',
  plugins: [require('@tailwindcss/forms')],
  purge: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}'
  ]
}
