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
  <div class="theme-container shadow-dark">
    <v-btn @click="toggleTheme">
      <div v-if="theme.global.name.value === 'lightTheme'">🌑</div>
      <div v-else>🌙</div>
    </v-btn>
  </div>
</template>

<style scoped lang="scss">
.theme-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  z-index: 1;
}

.theme-container:hover {
  opacity: 0.8;
}

button {
  background-color: #292929;
  border-radius: 50px;
}

.v-theme--darkTheme {
  button {
    background-color: #f2f5f8;
  }
}
</style>
