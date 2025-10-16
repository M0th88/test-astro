module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Nueva paleta de colores basada en la tarjeta
        'brand': {
          'primary': '#4a4a4a', // Gris oscuro de fondo
          'secondary': '#333333', // Un gris un poco más claro
          'accent': '#d93644',   // Rojo del logo
          'text': '#ffffff',      // Color de texto principal
        },
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Roboto Slab", "serif"],
      },
    },
  },
  plugins: [],
};