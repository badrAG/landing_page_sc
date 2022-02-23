const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      body: ["Montserrat", "Arial", "sans-serif"],
    },
    backgroundImage: {
      'hero': "url('https://storeno.b-cdn.net/stores/2-2022/1645555359021.png')",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      purple: colors.purple,
      pink: colors.pink,
      fuchsia:colors.fuchsia,
      teal: colors.teal,
      blue: colors.blue,
      primary: {
        default: "#da0037",
        dark: "#171717",
      },
      secondary:{
        default:"#ff0000"
      }
    },
  },
  plugins: [],
}
