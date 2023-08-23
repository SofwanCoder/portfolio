<template>
  <div class="about">
    <h1 class="display-6 fw-bold">Let's Talk</h1>

    <div class="fs-6">
      <p>Greetings!</p>

      <p>
        I have a strong inclination towards engaging in profound conversations
        centered around the realm of technical Software Engineering. This
        encompasses a broad spectrum of topics, including but not limited to
        Frontend Engineering, Backend Engineering, Proxies, System Design,
        Networking, and Databases.
      </p>

      <p>
        I hold a deep fascination for delving into intricate and highly scalable
        systems and architectures. If you possess a subject, an idea, or a
        concept that you believe warrants comprehensive exploration, I invite
        you to share it with me. Additionally, if you seek an earnest and
        meticulous system-design/code review, I am more than willing to provide
        my insights.
      </p>

      <p>
        To facilitate our interaction, I offer the convenience of scheduling a
        discussion at your convenience. Please utilize the button provided below
        to access my calendar and identify an available slot that aligns with
        your schedule.
      </p>

      <p class="fw-bold">
        I eagerly anticipate the opportunity to engage in enlightening
        discussions and collaborative exploration of the vast landscape of
        technical Software Engineering.
      </p>

      <div class="text-center">
        <button class="btn btn-dark btn-lg" @click="showCalendar">
          Book a free session
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject, onMounted } from "vue";
import { useRoute } from "vue-router";

const showCalendar = inject("showCalendar", () => null);

const route = useRoute();

// Show calendar when query param `schedule` is set to true
onMounted(() => {
  if (route.query.schedule) {
    showCalendar();
  }
});
</script>

<style lang="scss" scoped>
p {
  text-align: justify;
  text-justify: inter-word;
}
</style>
