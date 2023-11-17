<script setup>
import { useThemeSwitch } from "@/composables/useThemeSwitch";

const { theme } = useThemeSwitch();
</script>

<template>
  <div>
    <div class="lines" :class="{ dark: theme.global.current.value.dark }">
      <div class="line line-1"></div>
      <div class="line line-2"></div>
      <div class="line line-3"></div>
      <div class="line line-4"></div>
    </div>
    <NuxtPage> </NuxtPage>
  </div>
</template>

<style lang="scss">
* {
  font-family: "Poppins", sans-serif;
}

body,
html {
  scroll-behavior: smooth;
}

.lines {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;

  .line {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-right: 1px solid #dcdfe2;

    &::before {
      content: "";
      position: absolute;
      top: -80px;
      right: -1px;
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
      width: 1px;
      height: 80px;
      -webkit-animation: bgLine 8s linear infinite;
      animation: bgLine 8s linear infinite;
    }
  }

  .line-1 {
    width: 20%;
  }
  .line-2 {
    width: 40%;
    &::before {
      animation-delay: 2s;
    }
  }
  .line-3 {
    width: 60%;
    &::before {
      animation-delay: 4s;
    }
  }
  .line-4 {
    width: 80%;
    &::before {
      animation-delay: 6s;
    }
  }
}

@keyframes bgLine {
  0% {
    top: -80px;
  }
  100% {
    top: 100%;
  }
}

.dark {
  .line {
    border-color: rgba(255, 255, 255, 0.2) !important;
  }
  &::before {
    background: linear-gradient(
      transparent,
      rgba(255, 255, 255, 0.7)
    ) !important;
  }
}
</style>
