<template>
  <div
    class="container d-flex align-baseline flex-md-row flex-sm-column flex-column mt-4"
  >
    <div class="timeline" v-if="firstIcon">
      <div class="icon mb-6">{{ firstIcon }}</div>
      <div class="content d-flex flex-column align-baseline">
        <slot name="content-first"></slot>
      </div>
    </div>

    <div class="timeline" v-if="secondIcon">
      <div class="icon mb-6">{{ secondIcon }}</div>
      <div class="content d-flex flex-column align-baseline">
        <slot name="content-second"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  firstIcon: {
    type: String,
  },
  secondIcon: {
    type: String,
  },
});
</script>

<style scoped lang="scss">
.container {
  gap: 3rem;
  transition: all 0.4s;

  @media (min-width: 960px) {
    gap: 7rem !important;
  }
}

.timeline {
  position: relative;
  flex: 0 1 50%;

  .icon {
    margin-left: 1.5rem;
    font-size: 1.3rem;
  }

  .content {
    row-gap: 2rem;
  }

  &::before {
    content: "";
    position: absolute;
    border-left: 1px dashed $light-grey-main;
    top: 0;
    bottom: 0;
  }
}

// Dark Mode
.v-theme--darkTheme {
  .timeline {
    &::before {
      border-color: $dark-grey-main;
    }
  }
}
</style>
