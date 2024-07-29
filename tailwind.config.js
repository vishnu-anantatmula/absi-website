/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          950: '#183B61',
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
      screens: {
        800: '800px',
        900: '900px',
        1066: '1066px',
        1299: '1299px',
        1534: '1534px',
      },
      spacing: {
        '45/100': '45%',
        '1/5': '20%',
        '3/5': '60%',
        '1/4': '25%',
      },
    },
  },
  plugins: [],
};
