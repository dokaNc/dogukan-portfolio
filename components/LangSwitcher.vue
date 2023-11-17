<script setup>
const { locale, locales, setLocaleCookie } = useI18n();

const localePath = useLocaleRoute();

const currentLang = ref("EN");

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});

onMounted(() => {
  locale.value === "fr-FR"
    ? (currentLang.value = "EN")
    : (currentLang.value = "FR");
});
</script>

<template>
  <div class="theme-container shadow-dark">
    <v-btn class="float-right">
      <NuxtLink
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="localePath('/', locale.code)"
        >{{ currentLang }}</NuxtLink
      >
    </v-btn>
  </div>
</template>

<style scoped lang="scss">
.theme-container {
  position: fixed;
  bottom: 65px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  z-index: 3;
}

.theme-container:hover {
  opacity: 0.8;
}

button {
  background: #292929;
  border-radius: 50px;

  a {
    text-decoration: none;
  }

  a:-webkit-any-link {
    color: #fff;
  }
}

.v-theme--darkTheme {
  button {
    background-color: #f2f5f8;

    a:-webkit-any-link {
      color: #000;
    }
  }
}
</style>
