/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#E6F1F7",
          100: "#C2DCED",
          200: "#9FC7E1",
          300: "#81B1D4",
          400: "#6DA1CB",
          500: "#5E92C3",
          600: "#5585B7",
          700: "#4A74A5",
          800: "#416493",
          900: "#334872",
        },
        dark: {
          100: "#909193",
          200: "#76777a",
          300: "#5d5f62",
          400: "#45474b",
          500: "#2f3135",
          600: "#1a1c20",
        },
      },
    },
  },
  plugins: [],
};
