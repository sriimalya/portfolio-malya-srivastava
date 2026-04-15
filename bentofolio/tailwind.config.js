/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"Outfit"', 'sans-serif'],
      },
      colors: {
        // Dark mode palette
        terminal: {
          deep: '#0A0A0B',
          surface: '#141416',
          elevated: '#1A1A1E',
        },
        glass: {
          fill: 'rgba(255, 255, 255, 0.03)',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(225, 255, 74, 0.25)',
        },
        lime: {
          electric: '#E1FF4A',
          wash: 'rgba(225, 255, 74, 0.08)',
          shadow: 'rgba(225, 255, 74, 0.10)',
          deep: '#3D5200',
          tint: 'rgba(61, 82, 0, 0.06)',
        },
        ink: {
          primary: '#E8E8ED',
          secondary: '#71717A',
          muted: '#52525B',
          dark: '#18181B',
          medium: '#52525B',
          faded: '#A1A1AA',
        },
        // Light mode
        canvas: {
          light: '#F4F4F5',
          white: '#FFFFFF',
        },
        'light-glass': {
          fill: 'rgba(0, 0, 0, 0.02)',
          border: 'rgba(0, 0, 0, 0.06)',
          'border-hover': 'rgba(30, 30, 30, 0.15)',
        },
      },
      borderRadius: {
        bento: '1rem',
      },
      animation: {
        'cursor-blink': 'cursorBlink 1s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        cursorBlink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
      },
      backdropBlur: {
        glass: '12px',
      },
      maxWidth: {
        container: '1400px',
      },
    },
  },
  plugins: [],
}