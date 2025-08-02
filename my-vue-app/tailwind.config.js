/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        striped:
          "repeating-linear-gradient(-45deg,_#333,_#333_200px,_#444_200px,_#444_400px)",
      },
      colors: {
        "custom-dark-gray": "#1d1d1d",
      },
    },
  },
  plugins: [],
};
