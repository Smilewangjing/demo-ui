<template>
  <button>{{ name }}</button>
</template>
<script lang="ts" setup>
import { computed, CSSProperties } from "vue";
import { createNamespace } from "@demo-ui/utils";
import { buttonProps } from "./button";
const bem = createNamespace("button");

defineOptions({
  name: "DButton",
});

const props = defineProps(buttonProps);
</script>
