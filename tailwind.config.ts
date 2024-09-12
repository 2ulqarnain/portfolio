import type { Config } from "tailwindcss";

const config: Config = {
  darkMode:"class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fire: "#ff6918",
        electric: "#7309f8",
        cobalt: "#1a66ff",
      },
    },
  },
  plugins: [],
};
export default config;
