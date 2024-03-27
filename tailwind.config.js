/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          50: "#fafaf8",
          100: "#f4f4f2",
          200: "#ececea",
          300: "#dddddc",
          400: "#babab8",
          500: "#9b9b99",
          600: "#727270",
          700: "#5e5e5d",
          800: "#3f3f3e",
          900: "#1f1f1d",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            p: { fontSize: "15px", marginTop: "0px", marginBottom: "0px" },
            li: { fontSize: "15px", marginTop: "2px", marginBottom: "2px" },
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
            "blockquote p": { fontStyle: "normal", fontWeight: "400" },
            blockquote: {
              color: theme("colors.gray.700"),
              paddingTop: theme("padding.1"),
              paddingBottom: theme("padding.1"),
              paddingRight: theme("padding.2"),
              backgroundColor: theme("colors.gray.50"),
            },
            "code::before": { content: "none" },
            "code::after": { content: "none" },
            code: {
              color: theme("colors.gray.800"),
              backgroundColor: theme("colors.gray.100"),
              padding: "2px 4px",
              borderRadius: "2px",
              fontSize: "0.8em",
              fontWeight: "500",
            },
            img: {
              borderRadius: theme("borderRadius.sm"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
