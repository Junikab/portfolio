/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(6px)" },
                    "50%": { transform: "translateY(22px)" },
                },
                spinPulse: {
                    "0%": { transform: "rotate(0deg) scale(0.8)" },
                    "50%": { transform: "rotate(180deg) scale(1)" },
                    "100%": { transform: "rotate(360deg) scale(0.8)" },
                },
                zoomPulse: {
                    "0%, 100%": {
                        transform: "scale(0.84)",
                        opacity: "0.82",
                    },
                    "50%": {
                        transform: "scale(1)",
                        opacity: "1",
                    },
                },
            },
            animation: {
                float: "float 3s ease-in-out infinite",
                spinPulse: "spinPulse 15s ease-in-out infinite",
                zoomPulse: "zoomPulse 4.5s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};
