<template>
  <div class="blur">
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.blur {
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(7.5px);
  position: fixed;
  z-index: 999;
  height: 100%;
  width: 100%;
  animation: fadeOut 2s;

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
