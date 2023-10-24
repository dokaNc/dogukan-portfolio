<template>
  <div>
    <div class="theme">
      <select v-model="$colorMode.preference">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>

    <div class="card">
      <h3>Le moment !</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum harum
        itaque voluptatibus sed voluptatum cumque repudiandae ipsa dolores
        maxime saepe. Alias, repudiandae! Eos eum accusamus nisi ratione. Eius,
        reprehenderit dolor.
      </p>
    </div>
    <div class="card">
      <h3>Le moment !</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum harum
        itaque voluptatibus sed voluptatum cumque repudiandae ipsa dolores
        maxime saepe. Alias, repudiandae! Eos eum accusamus nisi ratione. Eius,
        reprehenderit dolor.
      </p>
    </div>
  </div>

  <button class="text">Accepter</button>
  <button @click="color = 'blue'">Bleu</button>
  <button @click="color = 'red'">Rouge</button>
</template>

<script setup>
const colorMode = useColorMode();
console.log(colorMode);
const color = ref("red");
</script>

<style lang="scss">
.text {
  color: v-bind(color);
}

.theme {
  float: right;
}
.card {
  width: 80%;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.07);
  margin-bottom: 1.5em;
  transition: all 0.2s;
}

body {
  transition: all 0.2s;
}

.light-mode body {
  background-color: #f2f5f8;
  color: #000;

  .card {
    background-color: #fff;
  }
}
.dark-mode body {
  background-color: #292929;
  color: #fff;

  .card {
    background-color: #1f1f1f;
  }
}
</style>
