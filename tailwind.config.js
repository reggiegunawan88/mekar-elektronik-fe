/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFF',
        black: '#000000',
        lightblue: '#D6EDF6',
        orange: '#F2994A',
        main: {
          primary: '#61C7B5',
          darker: '#3E8CB9',
          lighter: '#87CDE9',
          subtle: '#D6EDF6'
        },
        error: {
          1: '#ED2323',
          2: '#D12B2B',
          3: '#FF5C5C',
          4: '#FF8080'
        },
        warning: {
          1: '#FACC14',
          2: '#E5B800',
          3: '#FDDD48',
          4: '#FDED72'
        },
        info: {
          1: '#3868B0',
          2: '#2C528B',
          3: '#5B8AD0',
          4: '#9DBFF9'
        },
        success: {
          1: '#06C270',
          2: '#05A660',
          3: '#39D98A',
          4: '#57EBA1'
        },
        light: {
          1: '#DDE5E9',
          2: '#EBEBF0',
          3: '#F2F2F5',
          4: '#FAFAFC'
        },
        // font color
        dark: {
          1: '#3A3A3C',
          2: '#6B7588',
          3: '#8F90A6',
          4: '#C7C9D9'
        }
      },
      fontSize: {
        '4xs': '0.25rem', // 8px
        '3xs': '0.5rem', // 8px
        xxs: '0.625rem', // 10px
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
        '6xl': '3.75rem', // 60px
        '7xl': '4.5rem', // 72px
        '8xl': '6rem', // 96px
        '9xl': '8rem' // 144px
      }
    }
  },
  plugins: []
};
