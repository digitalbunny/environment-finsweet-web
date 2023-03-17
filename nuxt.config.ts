// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    app: {
        head: {
            viewport: "minimum-scale=1, initial-scale=1, width=device-width",
            title: "Dakik Expeditions",
            meta: [
                { name: "author", content: "Gordian Basili" },
                { name: "description", content: "" },
                { name: "keywords", content: "" }
            ],
        }
    },
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
    css: [
        "@/assets/css/main.css",
    ]
})