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
        home: 'url("../assets/Hero.svg")',
        aboutUs: 'url("../assets/AboutUs.svg")',
        borney: 'url("../assets/Borney.svg")',
        elsa: 'url("../assets/Elsa.svg")',
        geourge: 'url("../assets/Geourge.svg")',
        testimonials: 'url("../assets/Testimonials.svg")',
        cta: 'url("../assets/CTA.svg")',
      },

      colors: {
        red: '#FF0000',
        orange: '#FCA600',
        gray: '#484848',
        platinum: '#E2E2E2',
        antiflash: '#F1F1F1',
        chinesesilver: '#CCCCCC',
        chineseblack: '#121212'
      },

      fontFamily: {
        poppins: 'var(--font-poppins)',
        bebas: 'var(--font-bebas)'
      },

      animation: {
        slideDownFade: 'slide 0.5s ease-in'
      },

      keyframes: {
        slide: { 
            '0%': { opacity: 0, transform: 'translateY(-2px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' }
         }
      }
    },
  },
  plugins: [],
}
