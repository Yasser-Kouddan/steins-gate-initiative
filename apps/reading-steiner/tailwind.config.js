/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './constants/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        steiner: {
          charcoal: '#121212',
          orange: '#FF8C00',
          blue: '#0053A1',
        },
      },
      fontFamily: {
        mono: ['SpaceMono', 'monospace'],
        sans: ['System'],
      },
    },
  },
  plugins: [],
};
