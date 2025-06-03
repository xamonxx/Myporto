/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,css}" // ini penting!
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        animate: {
          '0%': {
            transform: 'translateY(0) rotate(0deg)',
            opacity: '1',
            borderRadius: '0'
          },
          '100%': {
            transform: 'translateY(-1000px) rotate(720deg)',
            opacity: '0',
            borderRadius: '50%'
          }
        }
      },
      animation: {
        bubble: 'animate 25s linear infinite',
        'bubble-12': 'animate 12s linear infinite',
        'bubble-18': 'animate 18s linear infinite',
        'bubble-35': 'animate 35s linear infinite',
        'bubble-45': 'animate 45s linear infinite',
        'bubble-11': 'animate 11s linear infinite',
      }
    },
  },
  plugins: [],
};