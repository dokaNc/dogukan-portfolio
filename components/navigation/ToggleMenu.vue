<script setup>
const open = ref(false);
</script>

<template>
  <button class="toggle-button" @click="open = !open">
    <span></span>
  </button>
  <div v-if="open" class="toggled-menu">
    <button @click="open = !open" class="close-button">X</button>
    <div class="top-content mt-6">
      <slot name="top-content"></slot>
    </div>
    <div class="bot-content">
      <slot name="bot-content"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.close-button {
  background-color: #fff;
  color: #000;
  width: 35px;
  height: 35px;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  float: right;
  transition: all 0.3s;

  &:hover {
    opacity: 0.8;
    transition: all 0.3s;
  }
}

.toggled-menu {
  color: #fff;
  padding: 1.5rem;
  width: 350px;
  height: 100%;
  background: #292929;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  box-shadow: 0 8px 9px 0 rgb(0 0 0 / 43%);
  transition: all 0.2s;

  .bot-content {
    color: $dark-grey-main;
    position: absolute;
    bottom: 45px;
  }

  @media (max-width: 600px) {
    width: 100%;
    transition: all 0.2s;
  }
}

.toggle-button {
  background-color: #292929;
  position: relative;
  top: -18px;
  width: 50px;
  height: 50px;
  border-bottom-right-radius: 0.5em 0.5em;
  border-bottom-left-radius: 0.5em 0.5em;
  float: right;
  transition: all 0.2s;

  &:hover {
    span {
      width: 10px;
      height: 10px;
      transform: translate(0, 30%);
      transition: all 0.2s;

      &::after {
        display: none;
      }

      &::before {
        display: none;
      }
    }
  }

  span {
    border-radius: 50%;
    width: 4px;
    height: 4px;
    display: inline-block;
    background: #fff;
    transition: all 0.2s;

    &::after {
      content: "";
      position: absolute;
      border-radius: 50%;
      width: 4px;
      height: 4px;
      display: inline-block;
      background: #fff;
      margin-left: 6px;
      transition: all 0.2s;
    }

    &::before {
      content: "";
      position: absolute;
      border-radius: 50%;
      width: 4px;
      height: 4px;
      display: inline-block;
      background: #fff;
      margin-left: -10px;
      transition: all 0.2s;
    }
  }
}

.v-theme--darkTheme {
  .close-button {
    background: #1f1f1f;
    color: #fff;
  }
  .toggled-menu {
    background: #f2f5f8;
    color: #000;

    .bot-content {
      color: $light-grey-main;
    }
  }

  .toggle-button {
    background-color: #f2f5f8;

    span {
      background-color: #292929;

      &::after {
        background-color: #292929;
      }

      &::before {
        background-color: #292929;
      }
    }
  }
}
</style>
