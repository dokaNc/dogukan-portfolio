<script setup>
import emailjs from "@emailjs/browser";

const runtimeConfig = useRuntimeConfig();

const { t } = useI18n();

const form = ref(null);

const error = ref(false);
const success = ref(false);
const valid = ref(true);

const nameRules = ref([(v) => !!v || t("rules.nameRequired")]);
const emailRules = ref([
  (v) => !!v || t("rules.emailRequired"),
  (v) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v) || t("rules.emailValid"),
]);
const subjectRules = ref([(v) => !!v || t("rules.subjectRequired")]);
const messageRules = ref([(v) => !!v || t("rules.messageRequired")]);

function sendEmail(e) {
  emailjs
    .sendForm(
      runtimeConfig.public.EMAILJS_SERVICE_ID,
      runtimeConfig.public.EMAILJS_TEMPLATE_ID,
      form.value.$el,
      runtimeConfig.public.EMAILJS_YOUR_PUBLIC_KEY
    )
    .then(
      (result) => {
        success.value = true;
        error.value = false;
        form.value.$el.reset();
      },
      (error) => {
        error.value = true;
        success.value = false;
      }
    );
}
</script>

<template>
  <div class="alert mb-3">
    <v-alert v-if="success" dense text type="success">
      {{ $t("alert.messageSend") }}
    </v-alert>
    <v-alert v-if="error" dense text type="error">
      {{ $t("alert.error") }}
    </v-alert>
  </div>
  <v-form ref="form" v-model="valid" lazy-validation>
    <div class="form d-flex">
      <v-text-field
        variant="underlined"
        dense
        :label="$t('form.name')"
        name="name"
        :rules="nameRules"
        required
      ></v-text-field>
      <v-text-field
        variant="underlined"
        dense
        :label="$t('form.email')"
        name="email"
        :rules="emailRules"
        required
      ></v-text-field>
    </div>
    <v-text-field
      variant="underlined"
      dense
      :label="$t('form.subject')"
      name="subject"
      :rules="subjectRules"
      required
    ></v-text-field>
    <v-textarea
      variant="underlined"
      dense
      :label="$t('form.message')"
      name="message"
      :rules="messageRules"
      required
    ></v-textarea>
    <button
      class="default-btn mt-4"
      :disabled="!valid"
      @click.prevent="sendEmail"
      color="success"
    >
      {{ $t("button.send") }}
    </button>
  </v-form>
</template>

<style scoped lang="scss">
.form {
  gap: 2rem;
}

.default-btn {
  font-family: "Source Code Pro", monospace;
  background-color: #292929;
  color: #fff;
  border-radius: 25px;
  padding: 0.7rem 2.5rem;
  position: relative;

  &:disabled {
    opacity: 0.5;

    &:hover {
      opacity: 0.5;
    }
  }

  &:hover {
    opacity: 0.9;
  }
}

.v-theme--darkTheme {
  .default-btn {
    background-color: #f2f5f8;
    color: #292929;
    font-weight: 600;
  }
}
</style>
