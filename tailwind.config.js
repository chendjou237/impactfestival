/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '',
        heading: '',
        lightHeading: '#ffffff',
        paragraph: '#8d8d8dff',
        lightParagraph: '#ffffff',
        hightlitenParagraph: '#7b6020',
        button: '#daa520',
        icon: '#daa520',
        lightBackground: '',
        background: '#1b1b1bff',
        navFocus: '#daa520',
      
      }
    },
  },
  plugins: [],
}
