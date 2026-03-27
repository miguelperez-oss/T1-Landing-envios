/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        red: {
          50: '#FEF4F4',
          400: '#F1B0A9',
          500: '#DB3B2B',
          600: '#E26153',
        },
        oxford: '#4C4C4C',
        gray: {
          100: '#F8F8F8',
          200: '#E7E7E7',
          400: '#9CA3AF',
          900: '#111827',
        },
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        container: '1018px',
        narrow: '721px',
      },
      boxShadow: {
        card: '0 0 25px 2px rgba(0,0,0,0.06)',
        hover: '0 20px 50px rgba(0,0,0,0.08)',
        float: '0 12px 40px rgba(0,0,0,0.10)',
        browser: '0 25px 80px -15px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.04)',
        logo: '0 4px 20px rgba(0,0,0,0.16)',
        panel: '0 20px 60px rgba(0,0,0,0.14)',
        'app-logo': '0 4px 16px rgba(0,0,0,0.10)',
        cliente: '0 4px 20px rgba(0,0,0,0.15)',
      },
      borderRadius: {
        btn: '18px',
        card: '24px',
        panel: '16px',
        logo: '14px',
      },
      height: {
        btn: '45px',
        header: '70px',
      },
      animation: {
        float: 'float 4.5s ease-in-out infinite',
        'float-slow': 'float-slow 5s ease-in-out infinite',
        'float-reverse': 'float-reverse 4s ease-in-out infinite',
        'halo-orbit': 'halo-orbit 22s linear infinite',
        'bm-slide': 'bm-slide 22s linear infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
        'scroll-up': 'scroll-up 12s linear infinite',
        fla: 'fla 4.2s ease-in-out infinite',
        flb: 'flb 4.6s ease-in-out infinite',
        flc: 'flc 4.0s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-7px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        'halo-orbit': {
          from: { transform: 'rotate(0deg) translateX(250px) rotate(0deg)' },
          to: { transform: 'rotate(360deg) translateX(250px) rotate(-360deg)' },
        },
        'bm-slide': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '0.55', transform: 'scale(1.05)' },
        },
        'scroll-up': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        fla: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        flb: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(-1deg)' },
        },
        flc: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(9px) rotate(0.5deg)' },
        },
      },
    },
  },
  plugins: [],
}
