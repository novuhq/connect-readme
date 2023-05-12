/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        magenta: {
          100: '#F8A0C6',
          200: '#F0609E',
          300: '#F1418D',
          400: '#F5227D',
          500: '#E20062',
          600: '#AC003E',
          700: '#82002F',
          800: '#6F0028',
          900: '#4C001C'
        },
        pink: {
          100: '#FC7CE5',
          200: '#FD59E0',
          300: '#FD3EDB',
          400: '#FC1FD5',
          500: '#E300BB',
          600: '#B70097',
          700: '#930079',
          800: '#82006B',
          900: '#660254'
        },
        yellow: {
          100: '#F5E6B2',
          200: '#EDD88B',
          300: '#F6CA72',
          400: '#F9C55B',
          500: '#FCB932',
          600: '#FBAD11',
          700: '#E18802',
          800: '#C46C04',
          900: '#8F4908'
        },
        gray: {
          50: '#FDF7FC',
          100: '#F8EDF6',
          200: '#EBDBE9',
          300: '#D6C8D4',
          400: '#B5A8B3',
          500: '#4E484D',
          600: '#423D41',
          700: '#272627',
          800: '#151415',
          900: '#0E0D0E'
        }
      },
      fontFamily: {
        text: ['Nunito', 'sans-serif']
      }
    }
  },
  plugins: []
}
