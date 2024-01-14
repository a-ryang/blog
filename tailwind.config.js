/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          10: "#fefefe",
          50: "#f8f9fa",
          100: "#f1f3f5",
          200: "#e9ecef",
          300: "#dee2e6",
          400: "#ced4da",
          500: "#adb5bd",
          600: "#868e96",
          700: "#495057",
          800: "#343a40",
          900: "#212529",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            p: { fontSize: "15px" },
            li: { fontSize: "15px" },
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
            "blockquote p": { fontStyle: "normal" },
            blockquote: {
              paddingTop: theme("padding.1"),
              paddingBottom: theme("padding.1"),
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
