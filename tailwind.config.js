/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "sm":"480px",
      }
    },
    fontFamily:{
      sora:['Sora', 'sans-serif']
    }
  },
  plugins: [],
}
