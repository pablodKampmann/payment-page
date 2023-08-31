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
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'slide-down': 'slideDown 0.3s ease-out',
        'rotate-180': 'rotate-180 0.3s ease-in-out',
      },
      keyframes: {
        slideDown: {
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
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
} 
