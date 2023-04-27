/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      boxShadow: {
        'view-1': '0 0 100px rgba(216, 108, 166,0.6)',
        'view-2': '0 0 100px rgba(58, 66, 159,0.7)',
        'people-1': '0 0 50px rgba(246, 98, 62,0.6)',
        'people-2': '0 0 50px rgba(241, 156, 175,0.6)',
        'people-3': '0 0 50px rgba(172, 181, 214,0.6)',

      },
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    },
  },
  plugins: [],
};
