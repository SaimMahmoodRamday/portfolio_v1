/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0f1e',
        surface: '#0d1424',
        cyan: {
          400: '#00d4ff',
          500: '#00d4ff'
        },
        ivory: '#f0ece4',
        text: {
          primary: '#e8edf5',
          muted: '#6b7fa3'
        }
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        syne: ['Syne', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
        sans: ['"DM Sans"', 'sans-serif']
      },
      animation: {
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'blink': 'blink 1s steps(1) infinite'
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '50.01%, 100%': { opacity: '0' }
        }
      }
    }
  },
  plugins: []
}
