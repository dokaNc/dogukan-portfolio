<script setup>
const props = defineProps({
  text: {
    type: String,
  },
});

const textLine = props.text;
const typeLine = ref("");

const typeEffect = () => {
  if (typeLine.value.length < textLine.length) {
    typeLine.value += textLine.charAt(typeLine.value.length);
    setTimeout(typeEffect, 150);
  } else {
    setTimeout(() => {
      typeLine.value = "";
      setTimeout(typeEffect, 150);
    }, 1000);
  }
};

typeEffect();
</script>

<template>
  <p v-html="typeLine" class="text"></p>
</template>

<style scoped lang="scss">
.text {
  color: #fff;
  font-family: "Source Code Pro", monospace;
  text-transform: uppercase;
  font-size: 0.75rem;
}
</style>
