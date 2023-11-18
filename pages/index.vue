<script setup>
import AutocompleteDefault from "@/components/control/AutocompleteDefault.vue";
import FormDefault from "@/components/control/form/FormDefault.vue";
import TextNumber from "@/components/misc/TextNumber.vue";
import FullnameTitle from "@/components/misc/FullnameTitle.vue";
import leftNav from "~/components/navigation/LeftNav.vue";
import ToggleMenu from "~/components/navigation/ToggleMenu.vue";
import TopNav from "~/components/navigation/TopNav.vue";
import avatar from "@/assets/images/avatar.jpg";

const { locale } = useI18n();
const nav = reactive([
  { href: "about", active: true },
  { href: "experience", active: false },
  { href: "skill", active: false },
  { href: "contact", active: false },
]);
const topNav = reactive([
  { name: "GitHub", href: "https://github.com/dokaNc" },
  { name: "Linkedin", href: "https://www.linkedin.com/in/dogukan-cirpan/" },
]);
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
const expPro = reactive([
  {
    startDate: "Oct. 2022",
    endDate: "Dec. 2023",
    job: "Développeur Full Stack",
    company: "Apave",
    type: "CDD",
    city: "Île-de-France",
    description:
      "J'ai mis en place l'environnement de développement front pour la nouvelle version de l'application avec Vue 3 et Storybook. J'ai développé de nouvelles fonctionnalités, réalisé l'intégration BDD et TDD, rédigé des tests fonctionnels et unitaires (E2E). J'ai également développé l'API Rest de l'application avec Symfony et API Platform, ainsi que de nouvelles fonctionnalités pour l'ancienne version avec PHP 7.3 et une migration vers 8.1. J'ai effectué des requêtes SQL complexes (MySQL) et participé à des code reviews et l'utilisation de Docker, Git BitBucket, Jira.",
    active: false,
    show: false,
  },
  {
    startDate: "Mar. 2020",
    endDate: "Juil. 2022",
    job: "Développeur Full Stack",
    company: "France Bois Service",
    type: "CDI",
    city: "Hauts-De-France",
    description:
      "J'ai conçu une interface avec Vue 3 et mis en place une API Rest performante avec Symfony 6 x API Platform 3, assurant des fonctionnalités sécurisées et des performances optimales. Mon travail a inclus l'intégration de fonctionnalités avancées telles que la gestion des commandes et la traçabilité des stocks. En collaborant étroitement avec les équipes internes, j'ai compris les besoins métier, et fourni des solutions adaptées. J'ai également garanti la scalabilité, la sécurité et la maintenance à long terme.",
    active: false,
    show: false,
  },
  {
    startDate: "Dec. 2019",
    endDate: "Ferv. 2020",
    job: "Développeur PHP / WordPress",
    company: "Hello Courtier",
    type: "Freelance",
    city: "Paris, Île-de-France",
    description:
      "J'ai optimisé l'application web en refondant les pages principales, améliorant les performances avec une optimisation PageSpeed et retravailler le responsive global de l'appli. J'ai également assuré la migration de l'application vers un nouvel hébergeur tout en fournissant un accompagnement client.",
    active: false,
    show: false,
  },
]);
const expEdu = reactive([
  {
    startDate: "Janv. 2020",
    endDate: "Nov. 2020",
    job: "Développeur PHP / Symfony",
    company: "OP",
    type: "Etudiant",
    city: "Paris, Île-de-France",
    description:
      "J'ai créé des blogs et sites communautaires à from scratch en utilisant PHP et la programmation orientée objet (POO). De plus, j'ai développé des API avec PHP et Symfony. Par ailleurs, j'ai apporté des améliorations significatives à des applications existantes utilisant PHP et Symfony tout au long de ce cursus.",
    active: false,
    show: false,
  },
]);
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

const experienceWord = computed(() => {
  return locale.value === "fr-FR"
    ? "<strong>Tentez <span>l'expérience</span> !</strong>"
    : "<strong>Try the <span>experience</span>!</strong>";
});

// Navigation ACTIVE on Scroll
onMounted(() => {
  // simple function to use for callback in the intersection observer
  const changeNav = (entries, observer) => {
    entries.forEach((entry) => {
      // verify the element is intersecting
      if (entry.isIntersecting) {
        // remove old active class
        document.querySelector(".active").classList.remove("active");
        document.querySelector(".turn").classList.remove("turn");
        // get id of the intersecting section
        var id = entry.target.getAttribute("id");
        // find matching link & add appropriate class
        const newLink = document.querySelector(
          `[href="/${locale.value}#${id}"]`
        );

        newLink.querySelector(".link").classList.add("active");
        newLink.querySelector(".circle").classList.add("turn");
      }
    });
  };

  // init the observer
  const options = {
    threshold: 1,
  };

  const observer = new IntersectionObserver(changeNav, options);

  // target the elements to be observed
  const sections = document.querySelectorAll(".default-block");
  sections.forEach((section) => {
    observer.observe(section);
  });
});
</script>

<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col class="pb-0">
          <toggle-menu>
            <template v-slot:top-content>
              <h3>{{ $t("toggleMenu.phone") }}:</h3>
              <p>+33 6 84 22 66 29</p>
              <h3 class="mt-8">{{ $t("toggleMenu.email") }}:</h3>
              <p>dogukan.crp@gmail.com</p>
              <h3 class="mt-8 mb-1">{{ $t("toggleMenu.tools") }}:</h3>
              <div class="d-flex list">
                <ul>
                  <li>Vue 3</li>
                  <li>Nuxt 3</li>
                  <li>Pinia</li>
                  <li>Vuetify</li>
                </ul>
                <ul>
                  <li>SCSS</li>
                  <li>i18n</li>
                  <li>Email JS</li>
                  <li>Git</li>
                </ul>
              </div>
            </template>
            <template v-slot:bot-content>
              <p>© 2023 Dogukan CIRPAN.</p>
            </template>
          </toggle-menu>
          <top-nav class="mr-6" :links="topNav" />
          <theme-switcher />
          <lang-switcher />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <fullname-title firstName="Dogukan" lastName="Cirpan" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="3" md="12" sm="12" xs="12">
          <section-block
            :style="{
              backgroundColor: '#632fff',
              position: 'sticky',
              top: '20px',
            }"
          >
            <template v-slot:content>
              <left-nav :links="nav" />
            </template>
          </section-block>
        </v-col>
        <v-col cols="12" lg="9" md="12" sm="12" xs="12">
          <section-block
            v-for="item in nav"
            :key="item"
            :id="`${item.href}`"
            ref="targets"
            class="mb-8 default-block"
            :avatar="item.href === 'about'"
          >
            <template v-slot:avatar>
              <avatar-circle v-if="item.href === 'about'" :src="avatar" />
            </template>
            <template v-slot:title>
              <section-title-item
                :title="$t(`${item.href}.title`)"
              ></section-title-item>
            </template>
            <template v-slot:subtitle>
              <h1
                v-html="
                  $t(`${item.href}.subtitle`, { word: '<span>MATCH</span>' })
                "
              ></h1>
            </template>
            <template v-slot:content>
              <p
                v-html="$t(`${item.href}.content`, { word: experienceWord })"
              ></p>
            </template>
            <template v-slot:extra-content>
              <div
                v-if="item.href === 'skill'"
                class="skill d-flex flex-column"
              >
                <autocomplete-default
                  :label="$t(`${item.href}.title`)"
                  v-model="selected"
                  :items="languages"
                  :loading="load"
                  @click-input.once="load = true"
                />

                <div class="skill-list d-flex">
                  <chip-default
                    class="mr-4"
                    v-for="language in selected"
                    :key="language"
                    size="large"
                    :active="true"
                    :text="language"
                  />
                </div>
              </div>

              <div v-if="item.href === 'experience'">
                <timeline first-icon="💼" second-icon="🎓">
                  <template v-slot:content-first>
                    <timeline-item :experiences="expPro" />
                  </template>
                  <template v-slot:content-second>
                    <timeline-item :experiences="expEdu" />
                  </template>
                </timeline>
              </div>

              <div class="text-number d-flex" v-if="item.href === 'about'">
                <text-number
                  v-for="content in $tm(`${item.href}.extraContent`)"
                  :key="content"
                  :number="content.number"
                  :title="content.title.loc.source"
                />
              </div>

              <div v-if="item.href === 'contact'">
                <form-default />
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
</template>

<style lang="scss">
.top-content {
  h3 {
    font-family: "Source Code Pro", monospace !important;
    text-transform: uppercase !important;
    font-weight: 400;
    font-size: 1rem;
  }

  p {
    font-size: 1.3rem;
    font-weight: 500;
  }

  ul {
    padding-left: 1.2rem;
    font-weight: 500;
  }

  .list {
    gap: 2rem;
  }
}

.text-number {
  gap: 3rem;

  @media (max-width: 660px) {
    flex-direction: column !important;
  }
}

.navigation {
  position: sticky;
  top: 24px;
}

.skill {
  gap: 0.6rem;

  .skill-list {
    flex-wrap: wrap;
    row-gap: 0.5rem;
  }
}

strong {
  font-weight: 500;
}

span {
  color: $blue-main;
}
</style>
