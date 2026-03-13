import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#F5A200',
          dark: '#DC9200',
        },
        teal: {
          accent: '#2DC4B2',
        },
        surface: {
          base: '#0B0C0F',
          card: '#111318',
          secondary: '#1D2029',
        },
        border: {
          DEFAULT: '#252A35',
        },
      },
      fontFamily: {
        sans: [
          'SF Pro Display',
          'SF Pro',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'sans-serif',
        ],
      },
      borderRadius: {
        DEFAULT: '1.25rem',
      },
    },
  },
  plugins: [],
} satisfies Config
