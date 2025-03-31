import type { Config } from 'tailwindcss';

const pxToRem = (px: number, base: number = 16): string => `${px / base}rem`;
const range = (start: number, end: number): number[] => {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/page/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/entities/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xl: { raw: '(min-width: 1921px) and (min-height: 1081px)' }, // 1920x1080 이상
        lg: { raw: '(min-width: 1920px) and (max-height: 1080px)' }, // 1920x1080
        sm: { raw: '(min-width: 1260px) and (max-height: 800px)' }, // 1260x800
      },
      colors: {
        primary: '#3246F8',
        subPrimary: '#4075C9',
        gray: '#232941',
        darkgray: '#292C3D', // lcas fix
        lightgray: '#8F94A9',
        whitegray: '#A2A6B7',
        bordergray: '#dedede',
        middlegray: '#4B4D55',
        dividegray: '#E4E6EE',
        backgray: '#F2F2F2', // lcas add
        textgray: '#9698A7', // lcas add
        cardgray: '#F9F9F9',
        blue: '#287eff',
        darkblue: '#191F38',
        lightblue: '#F2F3F6',
        middleblue: '#5258FB',
        grayblue: '#3A3A54',
        btnblue: '#366EFF',
        yellow: '#FDCE28',
        red: '#E04242',
        green: '#42E042',
        icongray: '#C5C7D2',
      },
      fontSize: {
        xs: ['0.70rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.2rem' }],
        lg: ['1.125rem', { lineHeight: '1.2rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2rem', { lineHeight: '2.25rem' }],
        '5xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '6xl': ['3rem', { lineHeight: '1' }],
        '7xl': ['3.75rem', { lineHeight: '1' }],
        '8xl': ['4.5rem', { lineHeight: '1' }],
      },
      backgroundImage: {
        // 기본 설정
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        ...range(1, 1000).reduce(
          (acc, px) => {
            acc[`${px}pxr`] = pxToRem(px);
            return acc;
          },
          {} as { [key: string]: string },
        ),
        ...range(1, 100).reduce(
          (acc, val) => {
            acc[`${val}vw`] = `${val}vw`;
            acc[`${val}vh`] = `${val}vh`;
            return acc;
          },
          {} as { [key: string]: string },
        ),
      },
      filter: {
        'custom-active': 'brightness(0) invert(1)', // 흰색 필터
        'custom-inactive': 'brightness(0.5) invert(0.5)', // 회색 필터
      },
      keyframes: {
        'underline-grow': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        'underline-grow': 'underline-grow 300ms ease-out',
      },
    },
  },
  plugins: [],
};

export default config;
