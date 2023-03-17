/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue"
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "2rem",
                    lg: "4rem",
                    xl: "5rem",
                    "2xl": "6rem",
                },
            },
            fontFamily: {
                inter: ["Inter"],
                roboto: ["Roboto"],
            },
            colors: {
                "primary-green": "#70C174",
                "secondary-green": "#BEF3C0",
                "mirage": {
                    DEFAULT: "#1d2130",
                    "50": "#f4f4f5", 
                    "100": "#e8e9ea", 
                    "200": "#c7c8cb", 
                    "300": "#a5a6ac", 
                    "400": "#61646e", 
                    "500": "#1d2130", 
                    "600": "#1a1e2b", 
                    "700": "#161924", 
                    "800": "#11141d", 
                    "900": "#0e1018"
                }
            },
        },
    },
    plugins: [
        require("@tailwindcss/line-clamp"),
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/typography")
    ],
}
