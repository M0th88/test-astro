module.exports = {
  darkMode: 'class', // ⬅️ Agrega esto
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        linknet: {
          DEFAULT: "#0d3b66",
          light: "#fafafa",
          accent: "#f4d35e",
        }
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
};