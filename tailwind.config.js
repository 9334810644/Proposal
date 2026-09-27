/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          blush: "#FFDEE9",
          blushLight: "#FFF0F3",
          blushDark: "#F687B3",
          pink: "#FBCFE8",
          deepPink: "#EC4899",
          cream: "#FFFDF9",
          creamWarm: "#FDF8F0",
          creamCard: "rgba(255, 255, 255, 0.75)",
          babyBlue: "#BAE6FD",
          babyBlueLight: "#E0F2FE",
          lavender: "#E9D5FF",
          lavenderLight: "#F5EEFD",
          lavenderDark: "#A855F7",
          peach: "#FED7AA",
          peachLight: "#FFF4E6",
          gold: "#FDE68A",
          rose: "#FDA4AF",
        }
      },
      fontFamily: {
        romantic: ['"Dancing Script"', '"Caveat"', 'cursive'],
        handwriting: ['"Caveat"', 'cursive'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'float-reverse': 'floatReverse 5s ease-in-out infinite',
        'heartbeat-gentle': 'heartbeat 2s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(10px) rotate(4deg)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.08)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.08)' },
          '70%': { transform: 'scale(1)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 12px rgba(244, 114, 182, 0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 24px rgba(244, 114, 182, 0.8))' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      boxShadow: {
        'pastel-soft': '0 10px 30px -10px rgba(244, 114, 182, 0.15)',
        'pastel-card': '0 20px 40px -15px rgba(236, 72, 153, 0.12), 0 0 1px 1px rgba(255, 255, 255, 0.8)',
        'pastel-button': '0 12px 25px -6px rgba(244, 114, 182, 0.35)',
        'pastel-glow': '0 0 35px rgba(251, 207, 232, 0.6)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
