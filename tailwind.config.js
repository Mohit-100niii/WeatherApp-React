// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx}",
    
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  content: [
        "./src/**/*.{js,jsx}",
        
      ],
  theme: {
    extend: {
      keyframes: {
        disappear: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'disappear': 'disappear 1.5s infinite',
      },
    },
  },
  variants: {},
  plugins: [],
};