<script setup>
const props = defineProps({
  title: {
    type: String,
  },
});
</script>

<template>
  <div class="title mb-4">
    <div class="title-back">{{ props.title }}</div>
    <div class="title-front d-flex align-center">{{ props.title }}</div>
  </div>
</template>

<style scoped lang="scss">
.title {
  position: relative;
  text-transform: uppercase;
  font-weight: 500;

  .title-front {
    position: absolute;
    font-size: 1rem;
    gap: 0.2rem;

    &::before {
      content: "//";
      font-size: 0.6rem;
    }
  }

  .title-back {
    font-size: 2rem;
    position: absolute;
    bottom: -30px;
    color: #fff;
    text-shadow:
      rgba(0, 0, 0, 0.35) 0px 0px 1px,
      rgba(0, 0, 0, 0.35) 0px 0px 1px,
      rgba(0, 0, 0, 0.35) 0px 0px 1px,
      rgba(0, 0, 0, 0.35) 0px 0px 1px,
      rgba(0, 0, 0, 0.35) 0px 0px 1px,
      rgba(0, 0, 0, 0.35) 0px 0px 1px;
    -webkit-font-smoothing: antialiased;
  }
}

.v-theme--darkTheme {
  .title-back {
    color: #1f1f1f;
    text-shadow:
      rgba(255, 255, 255, 0.1) 0px 0px 1px,
      rgba(255, 255, 255, 0.1) 0px 0px 1px,
      rgba(255, 255, 255, 0.1) 0px 0px 1px,
      rgba(255, 255, 255, 0.1) 0px 0px 1px,
      rgba(255, 255, 255, 0.1) 0px 0px 1px,
      rgba(255, 255, 255, 0.1) 0px 0px 1px;
  }
}
</style>
