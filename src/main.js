import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const myFirstPlugin = {
  install(app, options) {
    console.log("Hello plugin", options);
  },
};

const app = createApp(App).use(myFirstPlugin, {
  option1: true,
});

app.use(router);

app.mount("#app");
