<script setup></script>

<template>
  <v-chip class="px-6" variant="outlined">
    <slot name="text"></slot>
  </v-chip>
</template>

<style scoped lang="scss">
.v-chip {
  padding: 0 1rem !important;
  background: rgb(0 0 0 / 24%);
  backdrop-filter: blur(7.5px);
  border: none;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
}
</style>
