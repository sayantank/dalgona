module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Brigitka", "serif"],
    },
    extend: {
      colors: {
        primary: "#ddb98c",
        secondary: "#6a6054",
        tertiary: "#343332",
        quaternary: "#FBFBF2",
      },
      flex: {
        2: "2 2 0%",
      },
      height: {
        "80vh": "80vh",
      },
      minHeight: {
        "80vh": "80vh",
      },
      minWidth: {
        "3/4": "75%",
        full: "100%",
        "1/4": "25%",
      },
      maxWidth: {
        "9/10": "90%",
        "1/4": "25%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
