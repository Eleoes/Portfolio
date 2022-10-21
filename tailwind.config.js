/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "sm":"480px",
      },
      dropShadow: {
        "3xl":"10px 5px 0px black",
      }
    },
    fontFamily:{
      sora:['Sora', 'sans-serif']
    }
  },
  plugins: [],
}
