<script setup>
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import { onMounted, ref } from "vue";

const props = defineProps({
  text: { type: String, required: true },
});

onMounted(() => {
  tippy(tooltip.value.parentNode, {
    content: props.text,
  });
});

const tooltip = ref(null);
</script>
<template>
  <span ref="tooltip"></span>
</template>
