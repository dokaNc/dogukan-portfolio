<script setup>
const active = ref(false);
const show = ref(false);

defineProps({
  startDate: {
    type: String,
  },
  endDate: {
    type: String,
  },
  job: {
    type: String,
  },
  company: {
    type: String,
  },
  type: {
    type: String,
  },
  city: {
    type: String,
  },
  description: {
    type: String,
  },
});
</script>

<template>
  <div
    @mouseover="active = true"
    @mouseleave="active = false"
    @click="active = true"
  >
    <v-chip class="ml-6" variant="outlined" :class="{ active: active }">
      {{ startDate }} - {{ endDate }}
    </v-chip>
    <h3 class="mt-1">{{ job }}</h3>
    <h4>@ {{ company }} - {{ type }} - {{ city }}</h4>
    <div @click="show = !show" class="mt-2">
      <p v-if="show">{{ $t("timeline.showLess") }}</p>
      <p v-else>{{ $t("timeline.showMore") }}</p>
    </div>
    <Transition>
      <div class="show" v-if="show">
        {{ description }}
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
