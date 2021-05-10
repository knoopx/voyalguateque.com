module.exports = {
  mode: "jit",
  purge: ["src/**/*.{js,jsx,html}"],
  theme: {
    fontFamily: {
      sans: ["Avenir Next", "sans-serif"],
      serif: ["Adobe Caslon Pro Regular", "serif"],
    },
    extend: {
      colors: {
        gray: {
          100: "#f5f5f5",
          200: "#eeeeee",
          300: "#e0e0e0",
          400: "#bdbdbd",
          500: "#9e9e9e",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
      },
    },
  },
  corePlugins: {
    container: false,
  },
}
