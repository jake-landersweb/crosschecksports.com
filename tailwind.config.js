module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'sm': "5px",
        "md": "10px",
        "lg": "20px",
      },
      colors: {
        bg: {
          DEFAULT: "#fff",
          800: "#F7F7FC",
          700: "#F0F0F7"
        },
        main: {
          DEFAULT: "#7bc5d6",
          400: "#3AA3BB",
        },
        pn: "#ffcb06",
        txt: {
          DEFAULT: "#3B414E",
          500: "#4F5769",
          600: "#606A80",
          700: "#7F899F",
          inv: "#fff",
        },
      },
    },
  },
  plugins: [],
}
