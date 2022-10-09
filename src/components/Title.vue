<template>
    <Title>
      <slot></slot>
    </Title>
  </template>
  
  <script setup lang="ts">
  import { h, useCssModule } from "vue";
  const props = defineProps<{
    lever?: "1" | "2" | "3" | "4" | "5" | "6";
    color?: string;
  }>();
  let { lever = "1", color = "white" } = props;
  let style = useCssModule();
  let Title = h("h" + lever, { class: style.title });
  let fontSize = (2 * (6 - Number(lever))) / 10 + 1.2 + "rem";
  </script>
  
  <style module>
  .title {
    padding: .9rem 0;
    font-size: v-bind(fontSize);
    color: v-bind(color);
  }
  </style>
  