module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Libre Baskerville", "serif"],
    },
    extend: {
      colors: {
        primary: "#ddb98c",
        secondary: "#6a6054",
        tertiary: "#343332",
      },
      minHeight: {
        "80vh": "80vh",
      },
      minWidth: {
        "3/4": "75%",
        full: "100%",
      },
      maxWidth: {
        "9/10": "90%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
