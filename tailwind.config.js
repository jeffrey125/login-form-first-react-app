module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './src/components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
        shake: 'shake 0.35s cubic-bezier(.36,.07,.19,.97) both;',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 100 },
        },
        shake: {
          '0%': {
            transform: 'translateX(0)',
          },

          '25%': {
            transform: 'translateX(5px)',
          },

          '50%': {
            transform: 'translateX(-5px)',
          },

          '75%': {
            transform: 'translateX(5px)',
          },

          '100%': {
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
