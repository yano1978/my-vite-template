import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { myFirstPlugin } from "./myFirstPlugin";

import "./assets/main.css";

const app = createApp(App).use(myFirstPlugin, {
  option1: true,
});

app.use(router);

app.mount("#app");
