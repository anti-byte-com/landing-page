/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design System - Dark Obsidian Theme
        surface: '#0b0e16',
        'surface-container': '#161924',
        'surface-container-low': '#1c2031',
        'surface-container-high': '#12141d',
        'surface-container-highest': '#0f121a',
        'surface-container-lowest': '#0c0e16',
        'surface-bright': '#1a1d29',
        'surface-tint': '#3d4a75',
        
        // Functional Colors
        primary: '#6dfe9c',
        'primary-container': '#0b2f16',
        secondary: '#9392ff',
        tertiary: '#ffb95f',
        error: '#ff716c',
        
        // On colors (text)
        'on-surface': '#e7e8ed',
        'on-surface-variant': '#b0b3c4',
        'on-primary': '#021c0f',
        
        // Hover states
        'secondary-focus': '#a5a4ff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
