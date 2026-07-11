/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07070B',
          900: '#0A0A0F',
          800: '#111118',
          700: '#181822',
          600: '#22222E',
          500: '#33333F',
        },
        mist: {
          100: '#F4F4F7',
          300: '#C7C7D1',
          500: '#8B8B96',
          700: '#57575F',
        },
        cyan: {
          DEFAULT: '#22D3EE',
          soft: '#67E8F9',
          dim: '#0E7490',
        },
        violet: {
          DEFAULT: '#A78BFA',
          soft: '#C4B5FD',
          dim: '#6D28D9',
        },
        amber: {
          DEFAULT: '#FB923C',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'signal-gradient': 'linear-gradient(120deg, #22D3EE 0%, #A78BFA 55%, #FB923C 100%)',
        'signal-gradient-soft': 'linear-gradient(120deg, rgba(34,211,238,0.15) 0%, rgba(167,139,250,0.15) 55%, rgba(251,146,60,0.12) 100%)',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(34, 211, 238, 0.35)',
        'glow-violet': '0 0 40px -8px rgba(167, 139, 250, 0.35)',
      },
    },
  },
  plugins: [],
};
