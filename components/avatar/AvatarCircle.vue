<script setup>
import ChipBlur from "@/components/chip/ChipBlur.vue";
import TextTypewriter from "@/components/animation/TextTypewriter.vue";

defineProps({
  src: {
    type: String,
  },
  alt: {
    type: String,
  },
});
</script>

<template>
  <chip-blur class="chip-avatar">
    <template v-slot:text>
      <text-typewriter text="Hello c'est Dogukan !" />
    </template>
  </chip-blur>
  <v-avatar size="256">
    <v-img :src="src" :alt="alt" />
  </v-avatar>
</template>

<style lang="scss">
.v-img__img--contain {
  position: relative;
  object-fit: cover !important;
  transform: scale(2.5);
  height: 90%;
}

.chip-avatar {
  position: absolute;
  z-index: 1;
  margin-top: 12.5rem;
}
</style>
