// tailwind.config.js
const {heroui} = require("@heroui/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    // Add your own custom paths here, like this:
    // ...
    // make sure it's pointing to the ROOT node_module
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      },
      borderRadius: {
        custom: '80px 12px 12px 12px',
      },
      fontFamily: {
        mont: ['var(--font-montserrat)'],
        source: ['var(--font-source-sans-3)'],
        inter: ['Inter'],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      fontSize: {
        h1: ['2rem', { lineHeight: '2.6rem', letterSpacing: '0%' }],
        h3: ['1.5rem', { lineHeight: '1.5rem', letterSpacing: '0%' }],
        h4: ['1.25rem', { lineHeight: '1.25rem', letterSpacing: '0%' }],
        h5: ['1.125rem', { lineHeight: '1.125rem', letterSpacing: '0%' }],
        h6: ['1rem', { lineHeight: '1rem', letterSpacing: '0%' }],
        h7: ['0.875rem', { lineHeight: '0.875rem', letterSpacing: '0%' }],
        body1: ['1.125rem', { lineHeight: '1.125rem', letterSpacing: '0%' }],
        body2: ['1rem', { lineHeight: '1rem', letterSpacing: '0%' }],
        body3: ['0.875rem', { lineHeight: '0.875rem', letterSpacing: '0%' }],
        body4: ['0.75rem', { lineHeight: '0.75rem', letterSpacing: '0%' }],
      },
      boxShadow: {
        'light-xs': '0px 2px 4px rgba(0, 0, 0, 0.08)', // Extra small shadow
        'light-sm': '0px 4px 6px rgba(0, 0, 0, 0.1)', // Small shadow
        'light-md': '0px 6px 12px rgba(0, 0, 0, 0.15)', // Medium shadow
        'light-lg': '0px 8px 16px rgba(0, 0, 0, 0.2)', // Large shadow
        'light-xl': '0px 10px 24px rgba(0, 0, 0, 0.25)', // Extra large shadow
        'gradient-shadow':
          '0 4px 6px 0 rgba(255, 255, 255, 0.00), 0 6px 10px 2px rgba(255, 255, 255, 0.44)',
        'light-xll': '0px 20px 24px -4px #15151514', // Extra large shadow
        'light-xlll': '2px 2px 16px 0px rgba(0, 0, 0, 0.20)',
        'light-xxl': '0px 1px 2px 0px rgba(21, 21, 21, 0.08), 0px 2px 4px 0px rgba(21, 21, 21, 0.08)',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    prefix: 'core', // prefix for themes variables
    defaultTheme: 'light', // default theme from the themes object
    defaultExtendTheme: 'light', // default theme to extend on custom themes
    themes: {
      light: {
        extend: 'light',
        layout: {
          boxShadow: {
            small: '0px 1px 2px 0px #15151514',
            large: '',
            medium: '',
          },
          disabledOpacity: '0.3', // opacity-[0.3]
          radius: {
            small: '2px', // rounded-small
            medium: '0.5rem', // rounded-medium
            large: '6px', // rounded-large
          },
          borderWidth: {
            small: '1px', // border-small
            medium: '1px', // border-medium
            large: '2px', // border-large
          },
        },
        colors: {
          primary: {
            DEFAULT: '#7F56D9',
            foreground: '#F3E8FF', // Set primary to your desired color
            '50': '#F3E8FF',
            '100': '#E9D5FF',
            '200': '#D8B4FE',
            '300': '#C084FC',
            '400': '#A855F7',
            '500': '#7F56D9', // This should match your desired color
            '600': '#E7EDFF',
            '700': '#718EBF', //used
            '800': '#D3CBFB', //used
            '900': '#3B0C7E',
          },
          secondary: {
            DEFAULT: '#AAB9C5',
            foreground: '#E0E1E2',
            '50': '#f4f4f4',
            '100': '#f4f4f4',
            '200': '#cdcdcd',
            '300': '#a7a7a7',
            '400': '#808080',
            '500': '#5a5a5a',
          },
          success: {
            DEFAULT: '#51BC51',
            foreground: '#E3FBE3',
            '50': '#D5F0D5',
            '100': '#51BC51',
            '200': '#1F7A1F',
            '300': '#C3E8C3',
            '400': '#2A702A',
            '500': '#31D06E',
            '600': '#498F49',
            '700': '#84ebb4',
            '800': '#1fc16b',
          },
          warning: {
            DEFAULT: '#EA9A3E',
            foreground: '#FFEFE5',
            '100': '#F0DFD5',
            '200': '#EA9A3E',
            '300': '#9A5B13',
            '400': '#FFF5E3',
            '500': '#E8D1C3',
            '600': '#ffdb43',
            '700': '#dfb400',
          },
          danger: {
            DEFAULT: '#A51818',
            foreground: '#FCE4E4',
            '50': '#F0D1D1',
            '100': '#EB6A6A',
            '200': '#A51818',
            '300': '#E8BABA',
            '400': '#fb3748',
            '500': '#d00416',
            '1000': '#FD5367',
          } ,
          background: {
            DEFAULT: '#FFFFFF',
            foreground: '#000000',
            '50': '#E0F5E8',
            '100': '#FFF6F1',
            '200': '#9A00EF',
            '300': '#FE7E8D',
            '400': '#67CC98',
            '500': '#FCBE74',
            '600': '#808080',
            '700': '#42A4EB',
            '800': '#88E2C9',
            '900': '#DFDFDF',
          },
          content1: {
            DEFAULT: '#FAFAFC',
            foreground: '#EDF5FD',
            '50': '#F5F7FA',  // used
            '100': '#8BA3CB', //used
            '200': '#718EBF', //used
            '300': '#4E585E',
            '400': '#FEDE00',
            '500': '#D9D9D9',
            '600': '#09B96D14',
            '700': '#FF507214',
            '800': '#3629B714',
            '900': '#FF5072',
            '1000': '#662CC4',
            '1001': '#09B96D',
            '1002': '#FE4A23',
            '1003': '#3629B7',
            '1004': '#662CC414',
            '1005': '#003569',
            '1006': '#E58600',
            '1007': '#FFFFFF',
            '1009': '#FF944F',
            '1010': '#F97316',
            '1011': '#FFEDD5',
            '1008': '#FF944F',
            '1012': '#004C99',
          } ,
          content2: {
            DEFAULT: '#8F90A6',
            foreground: '#EDF1F5',
            '50': '#E3E7EB', //c
            '100': '#DDE7EE',
            '200': '#CDD7E1',
            '300': '#9FA6AD',
            '400': '#636B74',
            '500': '#555E68',
            '600': '#32383E',
            '700': '#171A1C',
            '800': '#49525A',
            '900': '#EDF4FA',
            '1000': '#FB5812',
            '1001': '#BE1F9D',
            '1007': '#F1F5F9',
            '1003': '#1E293B',
            '1004': '#F8FAFC',
            '1005': '#0F172A',
            '1006': '#CBD5E1',
            '1002': '#FA651014'
          }
        },
      },
      dark: {
        layout: {},
        colors: {},
      },
    },
  }),
  ],
};






