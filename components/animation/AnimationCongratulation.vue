<template>
  <client-only>
    <Vue3Lottie :animationData="congratulationJSON" :width="350" />
  </client-only>
  <div class="congratulation">
    <h1>{{ $t("skill.animation.h1") }}</h1>
    <h2>
      {{ $t("skill.animation.h2") }}
      <span>{{ props.congratulationText }} !</span>
    </h2>
  </div>
</template>

<script setup>
import congratulationJSON from "./assets/lottiefiles/congratulation.json";

const props = defineProps({
  congratulationText: {
    type: String,
  },
});
</script>

<style scoped lang="scss">
.lottie-animation-container {
  animation: fadeOut 2s;
}

.congratulation {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  line-height: 1;
  animation: fadeOut 2s;

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-weight: 500;
  }
}

// KEYFRAMES
@keyframes fadeOut {
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
