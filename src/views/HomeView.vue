<template>
  <main>
    <div class="text-center">
      <img
        :src="image"
        height="250"
        width="250"
        style="object-fit: cover"
        class="rounded-circle"
        alt="Profile Image"
      />
    </div>
    <div class="text-center pt-4">
      <h1>Sofwan Lawal</h1>
      <h3>Engineer</h3>

      <div class="pt-3">
        <a
          href="https://github.com/sofwancoder"
          class="p-2"
          target="_self"
          title="SofwanCoder on Github"
        >
          <Github width="40" height="40" class="icon" />
        </a>
        <a
          href="https://twitter.com/sofwancoder"
          class="p-2"
          target="_self"
          title="SofwanCoder on Twitter"
        >
          <Twitter width="40" height="40" class="icon" />
        </a>
        <a
          href="https://linkedin.com/sofwancoder"
          class="p-2"
          target="_self"
          title="SofwanCoder on Linkedin"
        >
          <Linkedin width="40" height="40" class="icon" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCF2fWr1GsvCx_Xb_5yUv6WA"
          class="p-2"
          target="_self"
          title="SofwanCoder on Youtube"
        >
          <Youtube width="40" height="40" class="icon" />
        </a>
        <a
          href="https://drive.google.com/file/d/14QlnOzGHLHe-YEe2_z_vKBhRhPYNSQ9s/view"
          class="p-2"
          target="_self"
          title="View SofwanCoder's resume"
        >
          <Resume width="40" height="40" class="icon" />
        </a>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import image from "@/assets/profile.jpg";
import Github from "@/components/icons/Github.vue";
import Twitter from "@/components/icons/Twitter.vue";
import Linkedin from "@/components/icons/Linkedin.vue";
import Resume from "@/components/icons/Resume.vue";
import Youtube from "@/components/icons/Youtube.vue";
</script>
