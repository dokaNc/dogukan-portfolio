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
            <section-block class="mb-8">
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
                  :items="languages"
                  label="Compétence"
                  v-model="selected"
                />

                <div class="competence d-flex">
                  <chip-default
                    class="mr-4"
                    v-for="language in selected"
                    size="large"
                    :active="true"
                    :text="language"
                  />
                </div>
              </template>
            </section-block>
          </v-col>
        </v-row>

        <Teleport to="body" :disabled="false">
          <modal-blur-block>
            <template v-slot:content>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
                dolore hic fugit iusto voluptatum laborum enim eaque a
                consectetur, itaque, repudiandae asperiores optio illum libero
                culpa perspiciatis cumque reiciendis soluta?
              </p>
            </template>
          </modal-blur-block>
        </Teleport>
      </v-container>
    </v-app>
  </NuxtLayout>
</template>

<script setup>
import { useTheme } from "vuetify";
import ChipDefault from "./components/chip/ChipDefault.vue";
import AutocompleteDefault from "./components/controls/AutocompleteDefault.vue";

onMounted(() => {
  console.log(theme.global.name.value);
});

// Switch Theme
const theme = useTheme();
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark
    ? "lightTheme"
    : "darkTheme";
}

// Autocomplete & Chip
const languages = ["Symfony", "Vue Js", "PHP", "JavaScript"];
const selected = ref([]);

// Scroll Active Link
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

strong {
  font-weight: 500;
}

span {
  color: $blue-main;
}
</style>
