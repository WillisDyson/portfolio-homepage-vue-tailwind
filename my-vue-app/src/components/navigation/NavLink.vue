<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  text: { type: String, required: true },
  href: { type: String, required: true },
  active: { type: Boolean, default: false },
});
const emit = defineEmits(["click"]);
</script>

<template>
  <li>
    <a
      :href="href"
      :style="active ? 'color: #00CF6E;' : ''"
      class="mx-[10px] border-b-2 border-transparent text-[1.125rem] font-normal no-underline transition-all duration-300"
      @click.prevent="emit('click')"
    >
      {{ text }}
    </a>
  </li>
</template>
