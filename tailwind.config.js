/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
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
