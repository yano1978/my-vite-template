import { defineAsyncComponent } from "vue";

export function toolTipPlugin(app) {
  app.component(
    "ToolTip",
    defineAsyncComponent(() => import("./ToolTip.vue"))
  );
}
