/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'slide-down': 'slide-down 0.3s ease-out',
        'rotate-180': 'rotate-180 0.3s ease-out',
        'rotate-360-invert': 'rotate-360-invert 0.3s ease-out',
        'move-right': 'move-right 0.3s ease-out',
        'move-right-button': 'move-right-button 0.3s ease-out',
        'move-right-from-left': 'move-right-from-left 0.3s ease-out',
      },
      keyframes: {
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '25%': { opacity: '0.25', transform: 'translateY(-8px)' },
          '50%': { opacity: '0.5', transform: 'translateY(-5px)' },
          '75%': { opacity: '0.75', transform: 'translateY(-3px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'rotate-180': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-180deg)' },
        },
        'rotate-360-invert': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'move-right': {
          '0%': { transform: 'translateX(0%)', opacity: 1 },
          '50%': { transform: 'translateX(2%)', opacity: .5 },
          '100%': { transform: 'translateX(5%)', opacity: 0 },
        },
        'move-right-button': {
          '0%': { transform: 'translateX(0%)', opacity: 1 },
          '33%': { transform: 'translateX(10%)', opacity: .8 },
          '66%': { transform: 'translateX(20%)', opacity: .4 },
          '100%': { transform: 'translateX(40%)', opacity: 0 },
        },
        'move-right-from-left': {
          '0%': { transform: 'translateX(-20%)', opacity: 0 },
          '33%': { transform: 'translateX(-10%)', opacity: .4 },
          '66%': { transform: 'translateX(-5%)', opacity: .8 },
          '100%': { transform: 'translateX(0%)', opacity: 1 },
        }
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
} 
