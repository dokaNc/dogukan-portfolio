<template>
  <div class="section-block d-flex flex-column px-14 py-16">
    <slot name="avatar"></slot>
    <slot name="title"></slot>
    <slot name="subtitle"></slot>
    <slot name="content"></slot>
    <slot name="extra-content"></slot>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.section-block {
  background-color: #fff;
  color: #000;
  box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.07);
  border-radius: 0.5rem;
  gap: 1rem;
  transition: all 0.2s;
}

.v-theme--darkTheme {
  .section-block {
    background-color: #1f1f1f;
    color: #fff;
  }
}
</style>
