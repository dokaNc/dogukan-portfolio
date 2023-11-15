<script setup>
defineProps({
  number: {
    type: Number,
  },
  title: {
    type: String,
  },
});
</script>

<template>
  <div class="textnumber d-flex align-center">
    <p class="number">{{ number }}</p>
    <div class="text-block">
      <p class="plus">+</p>
      <p class="text">{{ title }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.textnumber {
  gap: 0.4rem;

  .number {
    font-size: 3.5rem;
    font-weight: 600;
    color: #fff;
    -webkit-text-stroke: 1.5px #000;
    -webkit-font-smoothing: antialiased;
  }

  .text-block {
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: bold;
    padding-bottom: 0.1rem;
  }
}

.v-theme--darkTheme {
  .number {
    color: #1f1f1f;
    -webkit-text-stroke: 1px #ffffff;
  }
}
</style>
