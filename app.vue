<template>
  <NuxtLayout>
    <v-app>
      <v-container>
        <v-row>
          <v-col>
            <v-btn class="float-right" @click="toggleTheme">
              <div v-if="theme.global.name.value === 'lightTheme'">Dark</div>
              <div v-else>Light</div>
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" lg="3" md="3" sm="12" xs="12">
            <section-block>
              <template v-slot:content>
                <nav class="navigation d-flex flex-column">
                  <a href="#match">MATCH ?</a>
                </nav>
              </template>
            </section-block>
          </v-col>
          <v-col cols="12" lg="9" md="9" sm="12" xs="12">
            <section-block id="match" class="mb-8">
              <template v-slot:title>
                <section-title-item title="Compétence"></section-title-item>
              </template>
              <template v-slot:subtitle>
                <h1>Est-ce que y'a <span>MATCH</span> ?</h1>
              </template>
              <template v-slot:content>
                <p>
                  <strong>Tentez <span>l’expérience</span> !</strong> Je vous
                  invite à faire part des compétences recherchées pour votre
                  projet. Remplissez le champ ci-dessous et découvrez si il y a
                  match entre nous 💙
                </p>
              </template>
              <template v-slot:extra-content>
                <autocomplete-default
                  label="Compétence"
                  v-model="selected"
                  :items="languages"
                  :loading="load"
                  @click-input.once="load = true"
                />

                <div class="competence d-flex">
                  <chip-default
                    class="mr-4"
                    v-for="language in selected"
                    :key="language"
                    size="large"
                    :active="true"
                    :text="language"
                  />
                </div>
              </template>
            </section-block>
          </v-col>
        </v-row>

        <Teleport to="body">
          <div v-if="match">
            <modal-blur-block>
              <template v-slot:content>
                <animation-congratulation :congratulation-text="match" />
              </template>
            </modal-blur-block>
          </div>
        </Teleport>
      </v-container>
    </v-app>
  </NuxtLayout>
</template>

<script setup>
import { useTheme } from "vuetify";
import ChipDefault from "./components/chip/ChipDefault.vue";
import AutocompleteDefault from "./components/controls/AutocompleteDefault.vue";

// Switch Theme
const theme = useTheme();
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark
    ? "lightTheme"
    : "darkTheme";
}

// Data
const languages = [
  "JavaScript",
  "Vue Js",
  "PHP",
  "Symfony",
  "NuxtJS",
  "Vuetify",
  "Storybook",
  "Tailwind",
  "Doctrine",
  "API Platform",
  "MySQL",
  "PostgreSQL",
  "Git",
  "Docker",
  "Cypress",
  "Cucumber",
  "BDD",
  "TDD",
  "API Rest",
  "HTML",
  "CSS/SASS",
];
const selected = ref([]);

// Handle Match Skills
const match = ref(null);
const load = ref(false);

watch(selected, () => {
  // Update 'match' when 'selected' is updated
  match.value = selected.value[selected.value.length - 1];
  setTimeout(() => {
    match.value = null;
  }, 2000);

  // Stop the 'loading' when 'selected' is updated
  load.value = false;
});
</script>

<style lang="scss">
* {
  font-family: "Poppins", sans-serif;
}

body,
html {
  scroll-behavior: smooth;
}

.navigation {
  position: sticky;
  top: 24px;
}

.competence {
  flex-wrap: wrap;
  row-gap: 0.5rem;
}

strong {
  font-weight: 500;
}

span {
  color: $blue-main;
}
</style>
