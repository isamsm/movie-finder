/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          defalt: {
            'purple': '#8C498A',
            'darker-purple': "#5E275C",
            'blue': '#1E2353',
            'grey': '#A4A4A4',
        }
      },
      fontFamily: {
        "sansita": ['Sansita Swashed', 'sans-serif']
      },
    },
  },
  plugins: [],
}

