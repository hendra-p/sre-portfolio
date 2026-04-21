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
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
