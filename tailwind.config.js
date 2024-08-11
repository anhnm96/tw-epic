/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      screens: {
        sm: '520px',
        lg: '976px',
      },
      colors: {
        highlight: '#6202FF',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '4.5xl': ['2.625rem', '1.15'],
        '5.5xl': ['3.375rem', '1'],
      },
      keyframes: {
        'slide-top': {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'slide-left': {
          from: {
            opacity: '0',
            transform: 'translateX(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        'slide-top': 'slide-top 0.3s ease-out backwards',
        'slide-left': 'slide-left 0.3s ease-out backwards',
      },
    },
  },
  plugins: [],
}
