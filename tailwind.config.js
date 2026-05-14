/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0e1117',
        surface: '#141824',
        card: '#141824',
        primary: '#7c9fff',
        textMain: '#e8ecf5',
        textMuted: '#6b7c9d',
        secondary: '#a78bfa',
        success: '#4ade80',
        warning: '#fbbf24',
        destructive: '#f87171',
        accent: '#7c9fff',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(124, 159, 255, 0.15)',
        'glow-secondary': '0 0 20px rgba(167, 139, 250, 0.15)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
