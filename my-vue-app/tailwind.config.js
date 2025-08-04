/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-striped":
          "repeating-linear-gradient(-45deg, #333, #333 200px, #444 200px, #444 400px)",
      },
      colors: {
        "custom-very-dark-grey": "#191919",
        "custom-dark-grey": "#1d1d1d",
        "custom-bright-green": "#00CF6E",
        "custom-light-grey": "#b4b4b4",
      },
      animation: {
        "fade-in": "fadeIn 1.4s forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
