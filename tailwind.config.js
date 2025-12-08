/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary - Soft Teal-Gray (calming, muted)
        sage: {
          50: '#f7fafa',
          100: '#e8f1f0',
          200: '#d4e4e2',
          300: '#a8c9c5',
          400: '#7db0aa',
          500: '#5d9993',
          600: '#4a7d78',
          700: '#3d6662',
          800: '#345451',
          900: '#2d4744',
        },
        // Secondary - Soft Blue-Gray (professional, gentle)
        slate: {
          blue: {
            50: '#f8fafb',
            100: '#eef2f5',
            200: '#dce4ea',
            300: '#b8c9d4',
            400: '#94afc0',
            500: '#7495a8',
            600: '#5d7a8c',
            700: '#4d6472',
            800: '#42535e',
            900: '#39464f',
          },
        },
        // Accent - Soft Coral (warm, inviting CTAs)
        accent: {
          50: '#fef7f6',
          100: '#fdeeed',
          200: '#facbc7',
          300: '#f5a49d',
          400: '#e8847b',
          500: '#d66b62',
          600: '#b85650',
          700: '#954642',
          800: '#7a3b38',
          900: '#66332f',
        },
        neutral: {
          bg: '#FAFBFC',
          text: '#3d4f5f',
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
