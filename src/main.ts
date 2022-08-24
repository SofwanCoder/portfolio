import { createApp } from "vue";
import { createPinia } from "pinia";
import VueGtag from "vue-gtag";

import "@/styles/index.scss";
import "bootstrap";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.config.globalProperties.window = window;
app.use(createPinia());
app.use(router);
app.use(
  VueGtag,
  {
    config: { id: "G-56L8G4QM38" },
  },
  router
);

app.mount("#app");
