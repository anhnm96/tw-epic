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
    },
  },
  plugins: [],
}
