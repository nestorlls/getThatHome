/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: 'rgba(244, 143, 177, 1)', // Color primario
      secondary: 'rgba(255, 193, 227, 1)', // Color secundario
      tertiary: 'rgba(191, 95, 130, 1)', // Color terciario
      lightPrimary: 'rgba(244, 143, 177, 0.15)', // Color primario claro
      dark: '#373737', // Color oscuro
      mediumDark: '#616161', // Color medio oscuro
      light: '#8E8E8E', // Color claro
      lightDark: 'rgba(97, 97, 97, 0.15)', // Color oscuro claro
      background: '#F5F5F6', // Color de fondo
      backgroundLight: '#E1E2E1', // Color de fondo claro
      white: '#FFFFFF', // Color de texto
      error: '#FF0000', // Color de error;
      success: '#008000', // Color de exito
      warning: '#FFA500', // Color de advertencia
      info: '#1779D4', // Color de informacion
    },
    fontSize: {
      headline1: [
        '6rem',
        { fontWeight: 300, lineHeight: '5.5rem', letterSpacing: '-0.03125rem' },
      ],
      headline2: [
        '4rem',
        { fontWeight: 300, lineHeight: '5.5rem', letterSpacing: '-0.03125rem' },
      ],
      headline3: ['3rem', { fontWeight: 400, lineHeight: '4rem' }],
      headline4: [
        '2.25rem',
        { fontWeight: 400, lineHeight: '3rem', letterSpacing: '0.01563rem' },
      ],
      headline5: ['1.5rem', { fontWeight: 400, lineHeight: '2rem' }],
      headline6: [
        '1.25rem',
        { fontWeight: 500, lineHeight: '1.75rem', letterSpacing: '0.00938rem' },
      ],
      subtitle1: [
        '1rem',
        { fontWeight: 400, lineHeight: '1.5rem', letterSpacing: '0.00938rem' },
      ],
      subtitle2: [
        '0.875rem',
        { fontWeight: 500, lineHeight: '1.25rem', letterSpacing: '0.00625rem' },
      ],
      body1: [
        '1rem',
        { fontWeight: 400, lineHeight: '1.5rem', letterSpacing: '0.03125rem' },
      ],
      body2: [
        '0.875rem',
        { fontWeight: 400, lineHeight: '1.25rem', letterSpacing: '0.01563rem' },
      ],
      button: [
        '0.875rem',
        {
          fontWeight: 500,
          lineHeight: '1.25rem',
          letterSpacing: '0.07813rem',
        },
      ],
      caption: [
        '0.75rem',
        {
          fontWeight: 400,
          lineHeight: '1rem',
          letterSpacing: '0.025rem',
        },
      ],
      overline: [
        '0.625rem',
        {
          fontWeight: 400,
          lineHeight: '1rem',
          letterSpacing: '0.09375rem',
        },
      ],
    },
    boxShadow: {
      box: '0px 5px 10px 0px rgba(0, 0, 0, 0.20)',
      card: '0px 20px 30px 0px rgba(0, 0, 0, 0.20)',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    animation: {
      fadeIn: 'fadeIn 1s ease-in-out',
    },
  },
  plugins: [],
};
