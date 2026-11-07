/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { charcoal: '#0B0D0F', graphite: '#171A1D', orange: '#F28B32', paper: '#F4F4F2' },
      fontFamily: { display: ['Space Grotesk', 'sans-serif'], sans: ['DM Sans', 'sans-serif'] }
    }
  },
  plugins: []
};
