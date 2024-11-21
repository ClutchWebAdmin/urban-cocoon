/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        clutchBlue: {
          50: "#e1e3f5",
          100: "#c2c6eb",
          200: "#a0a7e0",
          300: "#7d88d5",
          400: "#5c6bca",
          500: "#3A4AAA",
          600: "#2e3f8e",
          700: "#253575",
          800: "#1b275b",
          900: "#111940",
          950: "var(--secondaryBlue)",
          1000: "var(--primaryBlue)",
        },
        urbanPurple: {
          50: '#f5f3ff', // Light lavender
          100: '#ede9fe', // Soft lilac
          200: '#ddd6fe', // Lavender mist
          300: '#c4b5fd', // Amethyst glow
          400: '#a78bfa', // Wisteria
          500: '#8b5cf6', // Royal purple
          600: '#7c3aed', // Deep orchid
          700: '#6d28d9', // Violet
          800: '#5b21b6', // Grape
          900: '#4c1d95', // Deep purple
          950: '#2a0e57', // Almost black
        },
      },
    },
  },
  plugins: [],
};
