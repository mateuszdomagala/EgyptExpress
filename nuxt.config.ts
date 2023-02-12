// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '@/assets/styles/base.css'
    ],
    app: {
        head: {
            title: "EgyptExpress",
            meta: [
                { name: "description", content: "EgyptExpress Travel was founded in 2003 to be one of the fast growing DMC in the destination" }
            ],
            link: [
                { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;700&display=swap" }
            ],
            htmlAttrs: {
                lang: 'en',
            }
        }
    }
})
