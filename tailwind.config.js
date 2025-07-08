/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        // Light theme colors (default)
        'background-light': 'hsl(0 0% 100%)',
        'foreground-light': 'hsl(222 89% 11%)',
        'card-light': 'hsl(0 0% 100%)',
        'card-foreground-light': 'hsl(222 89% 11%)',
        'primary-light': 'hsl(222 89% 11%)',
        'primary-foreground-light': 'hsl(0 0% 100%)',
        'muted-light': 'hsl(210 40% 96.1%)',
        'muted-foreground-light': 'hsl(215 20% 45%)',
        'accent-light': 'hsl(210 40% 96.1%)',
        'accent-foreground-light': 'hsl(222 89% 11%)',
        'border-light': 'hsl(214 32% 91%)',

        // Dark theme colors (applied via 'dark:' prefix)
        'background-dark': 'hsl(222 89% 11%)',
        'foreground-dark': 'hsl(210 40% 98%)',
        'card-dark': 'hsl(222 89% 11%)',
        'card-foreground-dark': 'hsl(210 40% 98%)',
        'primary-dark': 'hsl(210 40% 98%)',
        'primary-foreground-dark': 'hsl(222 89% 11%)',
        'muted-dark': 'hsl(217 33% 17%)',
        'muted-foreground-dark': 'hsl(215 20% 65%)',
        'accent-dark': 'hsl(217 33% 17%)',
        'accent-foreground-dark': 'hsl(210 40% 98%)',
        'border-dark': 'hsl(217 33% 17%)',
      },
    },
  },
  plugins: [],
};
