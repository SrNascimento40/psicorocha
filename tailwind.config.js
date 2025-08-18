/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fefcf8',
          100: '#fdf8f0',
          200: '#f9ede0',
          300: '#f4ddc7',
          400: '#edc8a3',
          500: '#e4b07d',
          600: '#d89654',
          700: '#c67d3b',
          800: '#a46332',
          900: '#85522c',
        },
        warm: {
          50: '#faf9f7',
          100: '#f5f2ed',
          200: '#e8e1d4',
          300: '#d9ccb8',
          400: '#c7b299',
          500: '#b5967d',
          600: '#a17c65',
          700: '#866553',
          800: '#6d5347',
          900: '#58453c',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
