/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f7f5',
          100: '#e8ebe5',
          200: '#d4dace',
          300: '#b5c0ab',
          400: '#a8b89a',
          500: '#8b9a7c',
          600: '#6d7a61',
          700: '#576250',
          800: '#485143',
          900: '#3d4439',
        },
        slate: {
          blue: {
            50: '#f4f6f8',
            100: '#e3e8ec',
            200: '#c9d2db',
            300: '#a3b3c2',
            400: '#7a8fa3',
            500: '#5e7388',
            600: '#4d5f73',
            700: '#424f5e',
            800: '#3a444f',
            900: '#333b44',
          },
        },
        accent: {
          50: '#fdf8f3',
          100: '#f9ede0',
          200: '#f2d9c0',
          300: '#e9bf97',
          400: '#d4a574',
          500: '#c78a4e',
          600: '#b97342',
          700: '#9a5b38',
          800: '#7c4a33',
          900: '#653e2c',
        },
        neutral: {
          bg: '#F8F9FA',
          text: '#2D3748',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
