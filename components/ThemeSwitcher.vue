<script setup>
import { useTheme } from "vuetify";

const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark
    ? "lightTheme"
    : "darkTheme";
}
</script>

<template>
  <v-btn class="float-right ml-2" @click="toggleTheme">
    <div v-if="theme.global.name.value === 'lightTheme'">🌑</div>
    <div v-else>🌙</div>
  </v-btn>
</template>

<style scoped lang="scss"></style>
