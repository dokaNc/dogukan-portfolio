<script setup>
const props = defineProps({
  text: {
    type: String,
  },
  active: {
    type: Boolean,
  },
});
</script>

<template>
  <v-chip class="px-6" variant="outlined" :class="{ active: active }">
    {{ props.text }}
  </v-chip>
</template>

<style scoped lang="scss">
.v-chip {
  color: $light-grey-main;
  transition: all 0.4s;

  &.v-chip--variant-outlined {
    border-style: dashed;
  }

  &.active {
    color: $blue-main;
    font-weight: 500;
    transition: all 0.4s;
  }
}

// Dark Mode
.v-theme--darkTheme {
  .v-chip {
    color: $dark-grey-main;

    &.active {
      color: $blue-main;
      font-weight: 500;
      transition: all 0.4s;
    }
  }
}
</style>
