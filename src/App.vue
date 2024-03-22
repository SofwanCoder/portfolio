<template>
  <NavigationHeader />
  <ScheduleBookingModal
    :activated="calendar"
    link="https://bit.ly/SofwancoderOnCalender"
    label="Schedule a session"
    :show="() => (calendar = true)"
    :hide="() => (calendar = false)"
  />
  <ScheduleBookingModal
    :activated="booking"
    link="https://topmate.io/sofwancoder"
    label="Book a session"
    :show="() => (booking = true)"
    :hide="() => (booking = false)"
  />
  <div class="container py-5">
    <RouterView></RouterView>
  </div>
  <NavigationFooter />
</template>

<script lang="ts" setup>
import NavigationFooter from "@/components/layout/NavigationFooter.vue";
import NavigationHeader from "@/components/layout/NavigationHeader.vue";
import ScheduleBookingModal from "@/components/modals/ScheduleBookingModal.vue";
import { provide, ref } from "vue";

const calendar = ref(false);
const booking = ref(false);

const toggleBooking = () => {
  booking.value = !booking.value;
};

const toggleCalendar = () => {
  calendar.value = !calendar.value;
};

provide("toggleBooking", toggleBooking);
provide("toggleCalendar", toggleCalendar);
</script>

<style scoped>
.container {
  flex-grow: 1 !important;
  max-height: 100%;
}
</style>
