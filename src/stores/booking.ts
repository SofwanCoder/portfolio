import { defineStore } from "pinia";

export const useBookingStore = defineStore({
  id: "booking",
  state: () => ({
    bookingTrigger: {} as HTMLButtonElement,
  }),
  getters: {
    getBookingTrigger: (state) => state.bookingTrigger,
  },
  actions: {
    trigger() {
      this.bookingTrigger?.click?.();
    },
    register(element: HTMLButtonElement) {
      this.bookingTrigger = element;
    },
  },
});
