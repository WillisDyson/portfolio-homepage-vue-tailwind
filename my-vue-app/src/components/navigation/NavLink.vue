<script setup>
import { defineProps } from "vue";
const props = defineProps({
  text: { type: String, required: true },
  href: { type: String, required: true },
  active: { type: Boolean, default: false },
});
</script>

<template>
  <li>
    <a
      :href="href"
      :style="active ? 'color: #00CF6E;' : ''"
      class="mx-[10px] border-b-2 border-transparent text-[1.125rem] font-normal no-underline transition-all duration-300"
    >
      {{ text }}
    </a>
  </li>
</template>
