/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        P1: "#E93119",
        P2: "#ED6335",
        P3: "#ECAE7D",
        P4: "#8DB5AD",
        P5: "#026D81",
        P6: "#064B72",
        Q1: "#0E0818",
        Q2: "#140E20",
        Q3: "#1D152D",
        Q4: "#22133A",
        Q5: "#2C114F",
      },
    },
  },
  plugins: [],
};
