<template>
  <v-autocomplete
    chips
    hide-selected
    clearable
    :hide-details="true"
    item-color="#000"
    no-data-text="Aucune compétence de disponibles"
    :label="props.label"
    :items="props.data"
    multiple
    variant="underlined"
    :model-value="props.selected"
    @input="$emit('update:props.selected', $event.target.value)"
  ></v-autocomplete>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
  },
  data: {
    type: Array,
  },
  selected: {
    type: String,
  },
});
</script>

<style scoped lang="scss">
.v-field__input {
  padding-bottom: 8px !important;
}

.v-input__details {
  display: none !important;
}
</style>
