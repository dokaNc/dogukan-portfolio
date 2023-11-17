<script setup>
defineProps({
  links: {
    type: Array,
  },
});
</script>

<template>
  <nav class="top-nav">
    <a v-for="link in links" :key="link.name" :href="link.href" target="_blank">
      {{ link.name }}
    </a>
  </nav>
</template>

<style scoped lang="scss">
.top-nav {
  position: relative;
  float: right;
  display: flex;
  gap: 1.5rem;
  top: -1px;

  a {
    font-family: "Source Code Pro", monospace;
    text-transform: uppercase;
    text-decoration: none;
    color: #000;
    transition: all 0.5s;

    &:hover {
      color: $blue-main;
      transition: all 0.5s;

      &::before {
        content: "";
        position: absolute;
        background: #000;
        height: 4px;
        width: 25px;
        animation: run 0.3s;
        transition: all 0.5s;
      }
    }
  }
}

@keyframes run {
  0% {
    width: 0;
  }
  100% {
    width: 25px;
  }
}
.v-theme--darkTheme {
  .top-nav {
    a {
      color: #fff;

      &:hover {
        color: $blue-main;
        &::before {
          background: #fff;
        }
      }
    }
  }
}
</style>
