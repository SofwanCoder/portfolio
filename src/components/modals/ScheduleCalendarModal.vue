<template>
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
            :src="activated ? `https://bit.ly/SofwancoderOnCalender` : ''"
          >
          </iframe>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import { onMounted, ref, inject, watch } from "vue";
import { Modal } from "bootstrap";

const bookingModal = ref<HTMLDivElement | null>();

const props = defineProps({
  activated: Boolean,
});

const hideCalendar = inject("hideCalendar", () => null);
const showCalendar = inject("showCalendar", () => null);

watch(
  () => props.activated,
  () => Modal.getOrCreateInstance(bookingModal.value as HTMLDivElement)?.show()
);

onMounted(() => {
  bookingModal.value?.addEventListener("show.bs.modal", () => {
    showCalendar();
  });
  bookingModal.value?.addEventListener("hide.bs.modal", () => {
    hideCalendar();
  });
});
</script>
