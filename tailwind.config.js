/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        piruz: '#04eed2', 
        purple:'#53079d',
        gray:'#808080',
        black:"#101828",
        lightBlack:"#444",

      },
    },
    screens: {
      'max-2xl': { 'max': '1800px' }, 
    },
  },
  plugins: [],
}