import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify, ThemeDefinition } from "vuetify";
// import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import Vue3Lottie from "vue3-lottie";
import {
  VApp,
  VBtn,
  VAvatar,
  VImg,
  VChip,
  VAutocomplete,
  VAlert,
  VTextField,
  VTextarea,
  VForm,
  VContainer,
  VRow,
  VCol,
} from "vuetify/components";

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#292929",
  },
};

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#f2f5f8",
  },
};

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    components: {
      VApp,
      VBtn,
      VAvatar,
      VImg,
      VChip,
      VAutocomplete,
      VAlert,
      VTextField,
      VTextarea,
      VForm,
      VContainer,
      VRow,
      VCol,
    },
    directives,
    theme: {
      defaultTheme: "darkTheme",
      themes: {
        darkTheme,
        lightTheme,
      },
    },
  });
  app.vueApp.use(vuetify).use(Vue3Lottie);
});
