<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light p-4">
    <div class="container">
      <router-link class="navbar-brand fw-bolder fs-2" to="/">
        <img src="@/assets/logo.png" alt="logo" height="90" width="200" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://blog.sofwancoder.com">Blog</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              style="color: steelblue"
              target="_blank"
              href="https://bit.ly/SofwanCoderOnResume"
            >
              Resume
            </a>
          </li>
          <li class="nav-item" ref="calendarBooking">
            <a class="nav-link text-success" @click="booking.trigger" href="#">
              Chat 💬
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { useBookingStore } from "@/stores/booking";
const booking = useBookingStore();

const calendarBookingTarget = document.createElement("div");
const target = calendarBookingTarget;
target.insertAdjacentElement = (where, element: HTMLButtonElement) => {
  booking.register(element);
  return element;
};
window.addEventListener("load", () => {
  (window as any).calendar.schedulingButton.load({
    url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ35rsoy-zqs7ljuFLaGDe3AmUabNbjBCfBuXS8CFUrbHqte_6iWEkMvdjaaf88idmAP3fXXGj6u?gv=true",
    color: "#039BE5",
    label: "Book an appointment",
    target,
  });
});
</script>

<style lang="scss" scoped>
.navbar-brand {
  &:hover {
    color: #f00;
  }
}
</style>
