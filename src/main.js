import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { toolTipPlugin } from "./toolTipPlugin";

import "./assets/main.css";

const app = createApp(App).use(toolTipPlugin, {
  placement: "right",
  trigger: "click",
  hideOnClick: false,
});

app.use(router);

app.mount("#app");
