/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'green-primary': '#09772C',
        'green-dark': '#008236',
        'green-light': '#F7FFE8',
        lime: '#ADE544',
        'orange-cta': '#EC7436',
        'orange-text': '#73391A',
        dark: '#101828',
        body: '#364153',
        muted: '#4A5565',
        subtle: '#99A1AF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        content: '1201px',
      },
    },
  },
  plugins: [],
}
