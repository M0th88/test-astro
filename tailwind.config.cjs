module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand': {
          'primary': '#4a4a4a',
          'secondary': '#333333',
          'accent': '#d93644',
          'text': '#ffffff',
        },
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],    // Para Títulos y Header
        serif: ["Roboto Slab", "serif"],      // Para Párrafos
      },
    },
  },
  plugins: [],
};