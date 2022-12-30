<template>
  <div class="about">
    <h1 class="text-center">Let's Talk</h1>

    <div class="fs-5">
      <p>Hi Techie</p>

      <p>
        I like to engage in technical Software Engineering conversation such as
        Frontend engineering, Backend engineering, Proxies, System design,
        Networking and Databases. I'm a fan of discussing highly complicated
        scalable systems and architecture.
      </p>

      <p>
        Have something in mind for us to discuss? an Idea? a good conversation?
        an honest code review? Yeah! why not. Find a free slot on my calender by
        using the button below.
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
