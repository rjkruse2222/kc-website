/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003067',
        'primary-blue': '#003067',
        'dark-blue': '#003067',
        'light-blue': '#9bd9e4',
        'text-dark': '#333333',
        'text-gray': '#666666',
      },
      fontFamily: {
        sans: ['Open Sans', 'Arial', 'Helvetica', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
