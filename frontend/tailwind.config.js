/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",              // la plantilla raíz que Vite inyecta
    "./src/**/*.{js,jsx,ts,tsx}" // todos tus componentes React
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

