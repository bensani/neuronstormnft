module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          default: "#0c174b",
        },
        green: {
          default: "#46FC6F",
          lightgreen:"#39AB53"
        },
        grey: {
          default: "#A5A4A1",
        },
        Offwhite: {
          default: "#D3CFC3",
        },
        white: {
          light: "#FBFAF5",
        },
      
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
