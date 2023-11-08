<template>
  <div>
    🌐
    <button @click="onLocaleChanged">LANGUE</button>
    <!-- <select :value="locale" @change="onLocaleChanged">
      <option v-for="loc in locales" :key="loc" :value="loc">
        {{ loc }}
      </option>
    </select> -->
  </div>
</template>

<script setup>
// Get active locale and supported locales
const { locale, locales } = useI18n();

const router = useRouter();
const switchLocalePath = useSwitchLocalePath();

function onLocaleChanged(event) {
  router.push({ path: "/en-US" });
}
</script>
