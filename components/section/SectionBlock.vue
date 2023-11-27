<script setup>
defineProps({
  avatar: {
    type: Boolean,
    default: false,
  },
  padding: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div
    class="section-block d-flex flex-column"
    :class="{ 'px-14': padding, 'py-16': padding }"
  >
    <div class="avatar d-flex flex-row" v-if="avatar">
      <slot name="avatar"></slot>
      <div class="avatar-content d-flex flex-column">
        <slot name="title"></slot>
        <slot name="subtitle"></slot>
        <slot name="content"></slot>
      </div>
    </div>

    <div class="default d-flex flex-column" v-else>
      <slot name="title"></slot>
      <slot name="subtitle"></slot>
      <slot name="content"></slot>
    </div>

    <slot name="extra-content"></slot>
  </div>
</template>

<style scoped lang="scss">
.section-block {
  background-color: #fff;
  color: #000;
  box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.07);
  border-radius: 0.5rem;
  gap: 1rem;
  transition: all 0.2s;

  .avatar {
    gap: 2rem;

    @media (max-width: 660px) {
      flex-direction: column !important;
    }

    .avatar-content {
      gap: 1rem;
      padding: 1rem;

      @media (max-width: 660px) {
        padding: 0 !important;
      }
    }
  }

  .default {
    gap: 1rem;
  }
}

.v-theme--darkTheme {
  .section-block {
    background-color: #1f1f1f;
    color: #fff;
  }
}
</style>
