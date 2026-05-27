/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/hooks/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        background: '#07090d',
        surface: {
          1: '#11151b',
          2: '#161b22',
          3: '#1c2128',
        },
        accent: {
          muted: '#7c8ea3',
          soft: '#94a3b8',
          light: '#b6beca',
        },
        text: {
          primary: '#f3f4f6',
          secondary: '#d1d5db',
          tertiary: '#9ca3af',
        },
        border: 'rgba(255, 255, 255, 0.06)',
      },
      backgroundColor: {
        main: '#07090d',
        card: '#11151b',
        elevated: '#161b22',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.3)',
        'card': '0 8px 24px rgba(0, 0, 0, 0.2)',
        'hover': '0 12px 28px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
      },
    },
  },
  plugins: [],
}