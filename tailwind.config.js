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
        'roll-reveal': {
          from: { transform: 'rotate(12deg) scale(0)', opacity: '0' },
          to: { transform: 'rotate(0deg) scale(1)', opacity: '1' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
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
        // 'roll-reveal': `0.4s roll-reveal ${easings['--ease-spring-2']} backwards`,
        'roll-reveal': `0.4s roll-reveal linear( 0, .007, .029 2.2%, .118 4.7%, .625 14.4%, .826 19%, .902, .962, 1.008 26.1%, 1.041 28.7%, 1.064 32.1%, 1.07 36%, 1.061 40.5%, 1.015 53.4%, .999 61.6%, .995 71.2%, 1 ) backwards`,
        'fade-in': '0.4s fade-in ease-out backwards',
        'slide-top': 'slide-top 0.3s ease-out backwards',
        'slide-left': 'slide-left 0.3s ease-out backwards',
      },
    },
  },
  plugins: [],
}
