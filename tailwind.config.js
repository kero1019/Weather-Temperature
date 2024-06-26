/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "background":"#f7d9a3",
        "white":"#ffffff",
        "gray":"#f1f1f1",
        "icon":"#d4b04a",
        "font-gray":"#959595",
      },
    },
  },
  plugins: [],
}