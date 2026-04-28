/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        paper: '#f3ede1',
        'paper-2': '#ebe3d3',
        'paper-deep': '#e3d9c5',
        ink: '#171411',
        'ink-2': '#2a2520',
        graphite: '#5b554d',
        pencil: '#8a8278',
        rule: 'rgba(23,20,17,0.18)',
        // legacy names mapped to monochrome so leftover refs still render correctly
        bg: '#f3ede1',
        surface: '#ebe3d3',
        ivory: '#171411',
        text: {
          primary: '#171411',
          muted: '#5b554d'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        playfair: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        syne: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        hand: ['Caveat', 'cursive']
      },
      boxShadow: {
        'paper': '0 1px 0 rgba(23,20,17,0.04), 0 8px 24px -12px rgba(23,20,17,0.18), 0 24px 48px -28px rgba(23,20,17,0.22)',
        'paper-lift': '0 2px 0 rgba(23,20,17,0.05), 0 18px 38px -18px rgba(23,20,17,0.28), 0 40px 70px -40px rgba(23,20,17,0.30)'
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
