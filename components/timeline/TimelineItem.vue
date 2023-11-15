<script setup>
defineProps({
  experiences: {
    type: Array,
  },
});
</script>

<template>
  <div
    v-for="exp in experiences"
    :key="exp.company"
    @mouseover="exp.active = true"
    @mouseleave="exp.active = false"
    @click="exp.active = true"
  >
    <v-chip class="ml-6" variant="outlined" :class="{ active: exp.active }">
      {{ exp.startDate }} - {{ exp.endDate }}
    </v-chip>
    <h3 class="mt-1">{{ exp.job }}</h3>
    <h4>@ {{ exp.company }} - {{ exp.type }} - {{ exp.city }}</h4>
    <div @click="exp.show = !exp.show" class="mt-2">
      <p v-if="exp.show">{{ $t("timeline.showLess") }}</p>
      <p v-else>{{ $t("timeline.showMore") }}</p>
    </div>
    <Transition>
      <div class="show" v-if="exp.show">
        {{ exp.description }}
      </div>
    </Transition>
  </div>
</template>

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

.show {
  left: 30px;
  position: relative;
  width: 70%;
  margin-top: 15px;
  font-size: 0.8rem;
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
}

p {
  cursor: pointer !important;
  font-size: 0.7rem;
  font-weight: 600;
  color: $light-grey-main;
  transition: all 0.4s;

  &:hover {
    color: $blue-main;
    transition: all 0.4s;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
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

  h4,
  p {
    color: $dark-grey-main;
  }

  p {
    &:hover {
      color: $blue-main;
      transition: all 0.4s;
    }
  }
}
</style>
