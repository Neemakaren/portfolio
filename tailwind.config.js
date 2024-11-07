/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        backgroundImage: {
          'hero': "url('../assets/img-1.jpg')"
        }
      }
    },
    fontFamily: {
      Licorice: ['Licorice', 'cursive'],
      Cedarville: ['Cedarville', 'cursive']
    }
  },
  plugins: [],
}