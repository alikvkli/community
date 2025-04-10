/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    important: true,
    prefix: "",
    theme: {
        extend: {
            fontFamily: {
                vodafone: ["Vodafone", "sans-serif"],
            },
            colors:{
                'vf-red': '#e60000',
                'vf-icon-black': '#0D0D0D'
            }
        },
    }
};
