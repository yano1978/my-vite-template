import { defineAsyncComponent } from "vue";
import { defu } from "defu";
export const tooltipOptionsInject = Symbol();

export function toolTipPlugin(app, options) {
  options = defu(options, {
    arrow: false,
    ...options,
  });

  app.provide(tooltipOptionsInject, options);
  app.component(
    "ToolTip",
    defineAsyncComponent(() => import("./ToolTip.vue"))
  );
}
