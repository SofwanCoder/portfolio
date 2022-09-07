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
          <li class="nav-item">
            <a
              class="nav-link text-success d-none d-md-block"
              @click="booking.trigger"
              href="#"
            >
              Chat 💬
            </a>
            <!--  use modal for smaller screens instead          -->
            <a
              class="nav-link text-primary d-md-none"
              data-bs-toggle="modal"
              data-bs-target="#bookingModal"
              href="#"
            >
              Chat 💬
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- Modal for small screens because the styling on default google calendar is bad for small scrreens   -->
    <teleport to="body">
      <div
        class="modal fade"
        id="bookingModal"
        ref="bookingModal"
        tabindex="-1"
        aria-labelledby="bookingModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-fullscreen">
          <div class="modal-content">
            <div class="modal-header">
              <h6 class="modal-title" id="bookingModalLabel">Find a slot</h6>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <iframe
              class="modal-body w-100 h-100 p-0 m-0"
              :src="loadCalendar ? `https://bit.ly/SofwancoderOnCalender` : ''"
            >
            </iframe>
          </div>
        </div>
      </div>
    </teleport>
  </nav>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useBookingStore } from "@/stores/booking";
const booking = useBookingStore();

const loadCalendar = ref(false);
const bookingModal = ref<HTMLDivElement | null>();

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

onMounted(() => {
  bookingModal.value?.addEventListener("show.bs.modal", () => {
    loadCalendar.value = true;
  });
  bookingModal.value?.addEventListener("hide.bs.modal", () => {
    loadCalendar.value = false;
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
