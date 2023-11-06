<template>
  <div
    @mouseover="hover = true"
    @mouseleave="hover = false"
    @click="hover = true"
  >
    <v-chip class="ml-6" variant="outlined" :class="{ active: hover }">
      2022 - 2023
    </v-chip>
    <h3 class="mt-1">Développeur Full Stack</h3>
    <h4>@ Apave - Paris</h4>
    <!-- <p class="mt-2">en savoir plus</p> -->
  </div>
</template>

<script setup>
const hover = ref(false);
</script>

<style scoped lang="scss">
.v-chip {
  color: $light-grey-main;
  transition: all 0.4s;
  overflow: unset;
  left: 8px;
  height: 1.7rem;

  &.v-chip--variant-outlined {
    border-style: dashed;
  }

  &.active {
    color: $blue-main;
    font-weight: 500;
    transition: all 0.4s;
  }

  &::before {
    content: "";
    position: absolute;
    border-top: 1px dashed;
    width: 25px;
    left: -28px;
  }

  &::after {
    content: "";
    position: absolute;
    left: -36px;
    height: 7px;
    width: 7px;
    background-color: #000;
    border-radius: 50%;
  }
}

h3,
h4,
p {
  left: 30px;
  position: relative;
  font-weight: 400;

  + h4 {
    color: $light-grey-main;
    font-size: 0.9rem;
  }

  + p {
    font-size: 0.6rem;
    font-weight: 600;
  }
}

// Dark Mode
.v-theme--darkTheme {
  .v-chip {
    color: $dark-grey-main;

    &::after {
      background-color: #fff;
    }

    &.active {
      color: $blue-main;
      font-weight: 500;
      transition: all 0.4s;
    }
  }

  h4 {
    color: $dark-grey-main;
  }
}
</style>
