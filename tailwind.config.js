/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "background-gray": "#262626",
      'accent': "#00FCC6",
      "dark-card": "#0d0d0d",
      "btn-card": "#7f00ff",
      'red': "#d32f2f",
    },
  },
  plugins: [],
};
