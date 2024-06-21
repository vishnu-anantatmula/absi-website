/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          950: '#57D0FC',
        },
        BrandRed: '#BF0101',
        BrandBlue: '#183B61',
        Copy: '#0F2B35',
        LogoGray: '#4E5059',
        PhBlue: '#0978A0',
        white: '#FFFFFF',
      },
      fontFamily: {
        hind: ['Hind', 'san-serif'],
        oxygen: ['Oxygen', 'san-serif'],
        maven: ['Maven Pro', 'san-serif'],
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
