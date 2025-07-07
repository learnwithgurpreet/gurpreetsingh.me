/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg"],
  theme: {
    extend: {
      colors: {
        background: "hsl(222 89% 11%)",
        foreground: "hsl(210 40% 98%)",
        primary: {
          DEFAULT: "hsl(210 40% 98%)",
          foreground: "hsl(222 89% 11%)",
        },
        muted: {
          DEFAULT: "hsl(217 33% 17%)",
          foreground: "hsl(215 20% 65%)",
        },
        accent: {
          DEFAULT: "hsl(217 33% 17%)",
          foreground: "hsl(210 40% 98%)",
        },
        border: "hsl(217 33% 17%)",
        card: {
          DEFAULT: "hsl(222 89% 11%)",
          foreground: "hsl(210 40% 98%)",
        },
      },
    },
  },
  plugins: [],
};
