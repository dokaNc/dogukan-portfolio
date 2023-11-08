<template>
  <v-btn
    class="float-right"
    v-for="locale in availableLocales"
    :key="locale.code"
    @click.prevent.stop="setLocale(locale.code)"
    href="#"
  >
    {{ locale.name }}
  </v-btn>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>
