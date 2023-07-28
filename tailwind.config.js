/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        staat:["var(--font-staat)"]
      },
      colors:{
        "yoru":"#1d4ed8",
        "gekko":"#bef264",
        "barbie":"#ec4899",
        "bat":"#444"
      }
    },
  },
  plugins: [],
}
