<script setup>
defineProps({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
});
</script>

<template>
  <h1>
    {{ firstName }} <span>{{ lastName }}</span>
  </h1>
</template>

<style scoped lang="scss">
h1 {
  font-size: 4rem;
  font-weight: 600;
  text-transform: capitalize;

  span {
    text-transform: capitalize;
    color: #f2f5f8;
    -webkit-text-stroke: 1.5px #000;
    -webkit-font-smoothing: antialiased;
  }
}

.v-theme--darkTheme {
  span {
    text-transform: capitalize;
    color: #292929;
    -webkit-text-stroke: 1px #fff;
  }
}
</style>
