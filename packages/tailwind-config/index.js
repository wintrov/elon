const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      transitionProperty: {
        width: 'width',
        height: 'height',
      },
      colors: {
        'brand': {
          '50': '#f5f6fd',
          '100': '#e6e6fa',
          '200': '#dbdbf9',
          '300': '#c0bff3',
          '400': '#9f9aeb',
          '500': '#7e71e1',
          '600': '#6952d5',
          '700': '#5940c1',
          '800': '#4a35a2',
          '900': '#3f2d85',
          '950': '#251b5a',
        },
        'brand-gray': {
          '50': '#f6f6f8',
          '100': '#ebebee',
          '200': '#dedee3',
          '300': '#c4c4cc',
          '400': '#a6a6b4',
          '500': '#9291a0',
          '600': '#828090',
          '700': '#767382',
          '800': '#63606d',
          '900': '#504f59',
          '950': '#343338',
        },
        'brand-info': {
          '50': '#f2f9fd',
          '100': '#e5f1fa',
          '200': '#c3e2f4',
          '300': '#8fcaea',
          '400': '#53afdd',
          '500': '#2c94cb',
          '600': '#1d77ac',
          '700': '#19608b',
          '800': '#185174',
          '900': '#1a4460',
          '950': '#112c40',
        },
        'brand-danger': {
          '50': '#fdf3f3',
          '100': '#fbe5e5',
          '200': '#f7c9c9',
          '300': '#f2afaf',
          '400': '#e98080',
          '500': '#db5858',
          '600': '#c73b3b',
          '700': '#a72e2e',
          '800': '#8b2929',
          '900': '#742828',
          '950': '#3e1111',
        },
        'brand-warn': {
          '50': '#fcfbea',
          '100': '#f8f7c9',
          '200': '#f2ec95',
          '300': '#eadb5a',
          '400': '#e3c82c',
          '500': '#d3b11f',
          '600': '#b68c18',
          '700': '#916617',
          '800': '#79511a',
          '900': '#67441c',
          '950': '#3c240c',
        },
        'brand-success': {
          '50': '#f1fcf2',
          '100': '#e5fae8',
          '200': '#c1f1c8',
          '300': '#90e59e',
          '400': '#58d06c',
          '500': '#32b548',
          '600': '#249537',
          '700': '#1f762f',
          '800': '#1e5d29',
          '900': '#1a4d24',
          '950': '#092a10',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwindcss-font-inter', {
      importFontFace: false,
    }),
    plugin(({ matchUtilities, theme, addVariant }) => {
      addVariant('progress-bar', '&::-webkit-progress-bar');
      addVariant('progress-value', '&::-webkit-progress-value');
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
};
