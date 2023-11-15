// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  ssr: true,
  // devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  build: {
    transpile: ["vuetify"],
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
  routeRules: {
    "/": { redirect: "/fr-FR" },
  },
  // 👇 Configure i18n module
  i18n: {
    // many locales as you want here.
    locales: [
      {
        code: "fr-FR",
        name: "Français",
        iso: "fr-FR",
        file: "fr-FR.js",
      },
      {
        code: "en-US",
        name: "English",
        iso: "en-US",
        file: "en-US.js",
      },
    ],
    // Tell Nuxt I18n to load translations asynchronously
    lazy: true,
    // Let Nuxt I18n know the root directory of our translations
    langDir: "lang",
    // Used when active locale is not explicitly defined
    defaultLocale: "fr-FR",
    strategy: "prefix",
    // Disabling automatic locale detection (see below)
    // detectBrowserLanguage: false,

    // 👇 Reference the Vue I18n config file
    vueI18n: "./i18n.config.ts",

    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n",
      redirectOn: "root",
    },
  },
});
