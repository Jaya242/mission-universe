/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050816',
        bg2: '#0f172a',
        deep: '#1b1f3a',
        brand: {
          purple: '#6C63FF',
          blue: '#38BDF8',
          pink: '#F472B6'
        },
        dim: '#a3adc2'
      },
      fontFamily: {
        head: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)    rotate(-0.6deg)' },
          '50%':      { transform: 'translateY(-6px) rotate(0.6deg)'  }
        },
        spin40: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        },
        pulse2: {
          '0%, 100%': { opacity: '.3' },
          '50%': { opacity: '1' }
        },
        ping2: {
          '0%': { transform: 'scale(0.4)', opacity: '.9' },
          '100%': { transform: 'scale(2.6)', opacity: '0' }
        }
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'spin-slow': 'spin40 40s linear infinite',
        pulseline: 'pulse2 2s ease-in-out infinite',
        ping2: 'ping2 2.4s ease-out infinite'
      }
    }
  },
  plugins: []
}
