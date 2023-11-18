<script setup>
const props = defineProps({
  label: {
    type: String,
  },
  data: {
    type: Array,
  },
  selected: {
    type: Array,
  },
  loading: {
    type: Boolean,
  },
});
</script>

<template>
  <v-autocomplete
    chips
    hide-selected
    clearable
    multiple
    variant="underlined"
    item-color="#000"
    no-data-text="Aucune compétence de disponibles"
    :menu-props="{ closeOnContentClick: true }"
    :hide-details="true"
    :loading="loading"
    :label="label"
    :items="data"
    @click="$emit('clickInput')"
  ></v-autocomplete>
</template>

<style scoped lang="scss">
.v-field__input {
  padding-bottom: 8px !important;
}

.v-input__details {
  display: none !important;
}
</style>
