module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#75E6DA',
          secondary: '#0FCFEC',
          accent: '#05445E',
          neutral: '#969696',
          'base-100': '#ffffff',
        },
      },
      //'dark',
      'cupcake',
    ],
  },
};
