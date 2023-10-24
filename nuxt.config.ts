// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/color-mode',
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({ autoImport: true }))
            })
        },
    ],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @use "@/assets/scss/_colors.scss" as *;
                        @use "@/assets/scss/_fonts.scss" as *;
                    `,
                },
            },
        },
    },
    $development: {
        routeRules: {
            '/': { prerender: true },
        },
    },
})
