/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: ["./index.html", "./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            keyframes: {
                shine: {
                    "0%": { "background-position": "100%" },
                    "100%": { "background-position": "-100%" },
                },
            },
            animation: {
                shine: "shine 5s linear infinite",
            },
        },
    },
    plugins: [],
});
