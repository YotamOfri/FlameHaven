/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        VinaSans: ["Vina Sans", "cursive"],
      },
      objectPosition: {
        custom: "74% 0px ", // Adjust the pixel value as needed
      },
      spacing: {
        100: "500px",
        82: "345px",
        84: "380px",
      },
      colors: {
        accent: "#F67D7D",
        footerbg: "#232323",
      },
    },
  },
  plugins: [],
};
