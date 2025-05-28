/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", ],
    darkMode: "dark",
    theme: {
        extend: {
            colors: {
                primary: "#fea928",
                secondary: "#ed9800",
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "3rem"
                }
            },
            fontFamily: {
                sans: ["DM Sans", 'sans-serif'],
                kalnia: ["Kalnia", 'serif'],
                playball: ["Playball", 'cursive'],
                mono: ["Roboto Mono", 'monospace']


            }
        },
    },
    plugins: [],
}