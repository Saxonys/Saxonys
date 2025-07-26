/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0f1c',
        'bg-secondary': '#111827',
        'accent-primary': '#3b82f6',
        'accent-secondary': '#10b981',
        'text-primary': '#f3f4f6',
        'text-secondary': '#9ca3af',
        'border-color': 'rgba(255, 255, 255, 0.1)',
        'card-bg': 'rgba(17, 24, 39, 0.7)',
        'success': '#10b981',
        'warning': '#f59e0b',
        'error': '#ef4444'
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'blink': 'blink 1s step-end infinite',
        'spin': 'spin 1s linear infinite',
        'shimmer': 'shimmer 2s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      }
    }
  },
  plugins: []
} 