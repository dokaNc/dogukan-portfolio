<script setup>
const { locale, locales, setLocaleCookie } = useI18n();

const localePath = useLocaleRoute();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>

<template>
  <v-btn class="float-right">
    <NuxtLink
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="localePath('/', locale.code)"
      >{{ locale.name }}</NuxtLink
    >
  </v-btn>
</template>
