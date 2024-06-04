


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'show': {
          '0%': {
            opacity: 0,
            scale: "50%"
          },
          '25%': {
            opacity: 1,
            scale: "100%"
          }
        }
      },
      animation: {
        'show': 'show 0.5s ease-in-out'
      },
    
      fontFamily:{
        eldenRing: ['EldenRing', 'sans-serif'],
        roboto: ['Roboto Slab', 'sans-serif']
      }

    },
  },
  plugins: [],
}

