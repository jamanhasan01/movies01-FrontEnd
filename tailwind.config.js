/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors:{
        mainClr:"#2563eb"
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"], // Enable light and dark themes
  },
}