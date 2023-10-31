import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify, ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

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
    components,
    directives,
    theme: {
      defaultTheme: "lightTheme",
      themes: {
        darkTheme,
        lightTheme,
      },
    },
  });
  app.vueApp.use(vuetify);
});
