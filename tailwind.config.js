/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        pallet: {
          text: '#000000',
          background: '#ffffff',
          primary: '#00a3a3',
          secondary: '#aff0fd',
          accent: '#5600b8'
        }
      }
    },
  },
  plugins: [],
}

