module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            pre: false,
            code: false,
            'pre code': false,
            'code::before': false,
            'code::after': false
          }
        }
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
        // acc: "#001C55",
        // acc: "#FE6D73",
        'acc': "#2F3D54",
        // acc: "#001242",
        // acc: "#B5446E",
        // acc: "#BD8B9C",
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
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
