/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './index.js',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /^(bg|text|border|p|m|w|h)-/, // Pre-compiles background, text, borders, padding, margin, width, and height
    },
  ],
};
