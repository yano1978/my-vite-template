<script setup>
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import { onMounted, onUpdated, onUnmounted, ref } from "vue";

const tooltip = ref(null);
let tippyInstance = null;

const props = defineProps({
  text: { type: String, required: true },
});

function initTippy() {
  if (tippyInstance) {
    tippyInstance.destroy();
  }
  tippyInstance = tippy(tooltip.value.parentNode, {
    content: props.text,
  });
}

onMounted(initTippy);
onUpdated(initTippy);
onUnmounted(() => tippyInstance.destroy());
</script>
<template>
  <span ref="tooltip"></span>
</template>
