/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        DEFAULT: '100%',
        lg: '1158px',
      },
    },
    fontFamily: {
      sans: ['Be Vietnam Pro', 'fb-Android', 'fb-Apple', 'fb-Win', 'fb-LR', 'sans-serif'],
    },
    screens: {
      sm: '375px',
      md: '600px',
      lg: '840px',
      w980: '980px',
      xl: '1710px',
    },
    extend: {
      animation: {
        'btn-x': 'nav-btn-close 0.5s ease-in-out reverse',
        feed: 'feed 10s infinite linear',
        'feed-item-1--md': 'feed-item-1--md 40s infinite',
        'feed-item-2--md': 'feed-item-2--md 40s infinite',
        'feed-item-3--md': 'feed-item-3--md 40s infinite',
        'feed-sm': 'feed-sm 40s ease-in-out forwards infinite',
        'nav-mob': 'nav-mob 0.5s ease-in-out forwards',
        'nav-mob-wrap': 'nav-mob-wrap 0.5s ease-in-out',
      },
      backgroundImage: {
        'nav-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0.33%, rgba(0, 0, 0, 0.599049) 99.79%)',
      },
      boxShadow: {
        btn: '0 .9375rem .9375rem -.625rem rgb(255, 159, 142)',
      },
      colors: {
        black: 'hsl(232, 12%, 13%)',
        blue: {
          DEFAULT: 'hsl(228, 39%, 23%)',
          0.5: 'hsla(228, 39%, 23%, 0.5)',
        },
        grey: {
          DEFAULT: 'hsl(0, 0%, 55%)',
          light: 'hsl(0, 0%, 98%)',
        },
        orange: {
          DEFAULT: 'hsl(12, 88%, 59%)',
          light: 'hsl(12, 92%, 72%)',
        },
        pink: {
          DEFAULT: 'hsl(13, 100%, 96%)',
          light: 'hsl(9, 54%, 97%)',
        },
        red: 'hsl(0, 88%, 59%)',
        white: {
          DEFAULT: 'hsl(0, 0%, 100%)',
          0.5: 'hsla(0, 0%, 100%, 0.5)',
        },
      },
      flex: {
        0: '0 0 auto',
      },
      fontSize: {
        base: ['1rem', '1.625'],
        blob: '178.6885%',
        h1: [
          '2.5rem',
          {
            fontWeight: '700',
            letterSpacing: '-.025em',
            lineHeight: '1.25',
          },
        ],
        'h2-lg': [
          '2.5rem',
          {
            fontWeight: '700',
            letterSpacing: '-.0178em',
            lineHeight: '1.1',
          },
        ],
        sm: ['.8125rem', '1.4615'],
      },
      keyframes: {
        feed: {
          '100%': {
            transform: 'translateX(-35.625rem)', // quote-block (feed-item) width + margin
          },
        },
        'nav-btn-close': {
          '100%': {
            transform: 'rotate(0deg)',
          },
        },
        'nav-mob': {
          '0%': {
            transform: 'scale(0)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        'nav-mob-wrap': {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        'feed-item-1--md': {
          '0%, 24.9999%': {
            order: 0,
          },
          '25%, 99.9999%': {
            order: 1,
          },
          '100%': {
            order: 0,
          },
        },
        'feed-item-2--md': {
          '0%, 49.9999%': {
            order: 0,
          },
          '50%, 99.9999%': {
            order: 1,
          },
          '100%': {
            order: 0,
          },
        },
        'feed-item-3--md': {
          '0%, 74.9999%': {
            order: 0,
          },
          '75%, 99.9999%': {
            order: 1,
          },
          '100%': {
            order: 0,
          },
        },
        'feed-sm': {
          '0% ,24%': {
            opacity: 1,
          },
          '0%, 24.9999%': {
            position: 'relative',
            'z-index': '1',
          },
          '25%, 100%': {
            opacity: 0,
            position: 'absolute',
            'z-index': '0',
          },
        },
      },
      letterSpacing: {
        h2: '.0206em',
        footer: '.0156em',
        form: '.0077em',
      },
      maxWidth: {
        87.5: '21.875rem',
      },
      spacing: {
        1.75: '.4375rem',
        3.25: '.8125rem',
        6.5: '1.625rem',
        7.25: '1.8125rem',
        7.5: '1.875rem',
        10.5: '2.625rem',
        11.75: '2.9375rem',
        12.5: '3.125rem',
        13.5: '3.375rem',
        15.5: '3.875rem',
        18: '4.5rem',
        27.5: '6.875rem',
        36.5: '9.125rem',
        113: '28.25rem',
        135: '33.75rem',
        '61em': '15.25em',
      },
      zIndex: {
        1: '1',
      },
    },
  },
};
