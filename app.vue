<template>
  <NuxtLayout>
    <v-app>
      <v-container>
        <v-row>
          <v-btn> Button </v-btn>
        </v-row>
      </v-container>
    </v-app>
  </NuxtLayout>
</template>

<script setup>
const colorMode = useColorMode();
console.log(colorMode);
</script>

<style lang="scss">
body {
  transition: all 0.2s;
}

.light-mode body {
  background-color: #f2f5f8;
  color: #000;

  .card {
    background-color: #fff;
  }
}
.dark-mode body {
  background-color: #292929;
  color: #fff;

  .card {
    background-color: #1f1f1f;
  }
}
</style>
