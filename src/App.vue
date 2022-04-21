<template>
  <NavigationHeader />
  <div class="container py-5">
    <RouterView></RouterView>
  </div>
  <NavigationFooter />
</template>

<script lang="ts" setup>
import NavigationFooter from "@/components/layout/NavigationFooter.vue";
import NavigationHeader from "@/components/layout/NavigationHeader.vue";
</script>

<style scoped>
.container{
  flex-grow: 1 !important;
  max-height: 100%;
}
</style>
