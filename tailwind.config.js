module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: { 50: "#f0f1f4", 900: "#263238" },
        blue: {
          100: "#bdd0fb",
          200: "#aac3f7",
          800: "#1555b6",
          A100: "#91b3fa",
          A200: "#407bff",
          "800_01": "#1556b7",
        },
        indigo: { A100: "#7d97f4", A700: "#4042e2" },
        red: { 400: "#b55b52" },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        amber: { 400: "#eccb23", "400_35": "#eccb2335", "400_7c": "#eccb237c" },
        gray: {
          100: "#f5f5f5",
          200: "#ebebeb",
          300: "#e0e0e0",
          500: "#a19c9c",
          600: "#8c8585",
          "200_01": "#f0f0f0",
          "300_01": "#e6e6e6",
          "100_01": "#f1f2f4",
        },
        white: { A700: "#ffffff" },
      },
      fontFamily: { inter: "Inter" },
      boxShadow: {
        bs: "0px 4px  4px 0px #0000003f",
        bs1: "4px 4px  4px 0px #0000003f",
        bs2: "5px 4px  4px 0px #0000003f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
