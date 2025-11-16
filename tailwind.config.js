/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        apple: {
          dark: '#1d1d1f',
          darker: '#000000',
          gray: {
            50: '#f5f5f7',
            100: '#e8e8ed',
            200: '#d2d2d7',
            300: '#b0b0b5',
            400: '#86868b',
            500: '#6e6e73',
            600: '#515154',
            700: '#424245',
            800: '#1d1d1f',
            900: '#000000',
          },
          blue: {
            50: '#e8f1ff',
            100: '#d4e4ff',
            200: '#a9caff',
            300: '#7eafff',
            400: '#5395ff',
            500: '#007aff',
            600: '#0062cc',
            700: '#004a99',
            800: '#003166',
            900: '#001933',
          },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#e8e8ed",
            a: {
              color: "#007aff",
              "&:hover": {
                color: "#5395ff",
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
