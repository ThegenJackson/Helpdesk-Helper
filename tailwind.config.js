/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '500px',
    },
  },
  daisyui: {
    themes: ["cupcake", "dark"],
  },
  plugins: [require("daisyui")],
}

