/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f172a', // Slate 900
        surface: '#1e293b', // Slate 800
        primary: '#38bdf8', // Sky 400
        textMain: '#f8fafc', // Slate 50
        textMuted: '#94a3b8', // Slate 400
        
        // OpsMind Tokens
        card: "#0f172a",
        secondary: "#8b5cf6",
        accent: "#f97316",
        destructive: "#ef4444",
        success: "#10b981",
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
      },
      boxShadow: {
        'glow-primary': '0 0 15px rgba(56, 189, 248, 0.3)',
        'glow-secondary': '0 0 15px rgba(139, 92, 246, 0.3)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
