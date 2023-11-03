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
    :loading="props.loading"
    :label="props.label"
    :items="props.data"
    :model-value="props.selected"
    @input="$emit('updateInput')"
    @click.once="$emit('clickInput')"
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
  loading: {
    type: Boolean,
  },
});

const emit = defineEmits(["updateInput", "clickInput"]);
</script>

<style scoped lang="scss">
.v-field__input {
  padding-bottom: 8px !important;
}

.v-input__details {
  display: none !important;
}
</style>
