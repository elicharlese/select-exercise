import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/context/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0B0C14',
        'primary-blue': '#0CA6E9',
        'card-bg': '#0D0E17',
        'card-border': '#1C1D29',
      },
      boxShadow: {
        'primary-btn': '1px 1px 0 0 rgba(255, 255, 255, 0.3) inset, 0 1px 0 0 #0085C0, 0 2px 8px 0 rgba(0, 0, 0, 0.16)',
        'testimonial': '0 0 10px 0 rgba(0, 0, 0, 0.7), 0 0 0 1px #000000',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'scroll-down': {
          '0%': {
            transform: 'translateY(-100%)'
          },
          '100%': {
            transform: 'translateY(0)'
          }
        },
        'scroll-up': {
          '0%': {
            transform: 'translateY(0)'
          },
          '100%': {
            transform: 'translateY(-100%)'
          }
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'scroll-down': 'scroll-down 20s linear infinite',
        'scroll-up': 'scroll-up 20s linear infinite'
      }
    },
  },
  plugins: [],
} satisfies Config;
