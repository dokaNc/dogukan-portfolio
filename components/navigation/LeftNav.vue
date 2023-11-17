<script setup>
const props = defineProps({
  links: {
    type: Array,
  },
});
</script>

<template>
  <nav class="navigation d-flex flex-column">
    <NuxtLink
      v-for="link in links"
      :key="link.href"
      :to="{ hash: `#${link.href}` }"
    >
      <span class="link" :class="{ active: link.active }">{{
        $t(`navigation.${link.href}`)
      }}</span>
      <span class="circle" :class="{ turn: link.active }"></span>
    </NuxtLink>
  </nav>
</template>

<style scoped lang="scss">
.navigation {
  gap: 1.5rem;

  .router-link-active {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .link {
    font-family: "Source Code Pro", monospace;
    color: $dark-grey-main;
    text-transform: uppercase;
    font-weight: 300;

    &.active {
      color: #fff;
      transition: all 0.2s;
    }
  }

  .circle {
    height: 7px;
    width: 7px;
    background-color: $dark-grey-main;
    border-radius: 50%;
    display: inline-block;
    margin-right: 6px;

    &.turn {
      border: 1px dashed #fff;
      height: 18px;
      width: 18px;
      margin-right: 0px;
      background: transparent;
      animation-name: rotate;
      animation-duration: 7s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      transition: all 0.2s;
    }
  }
}

// KEYFRAMES
@keyframes rotate {
  from {
    transform: rotate(-360deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
