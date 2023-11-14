<script setup>
defineProps({
  src: {
    type: String,
  },
  alt: {
    type: String,
  },
});
</script>

<template>
  <v-avatar size="256">
    <v-img :src="src" :alt="alt" />
  </v-avatar>
</template>

<style lang="scss">
.v-img__img--contain {
  object-fit: cover !important;
  transform: scale(2.5);
  height: 90%;
}
</style>
