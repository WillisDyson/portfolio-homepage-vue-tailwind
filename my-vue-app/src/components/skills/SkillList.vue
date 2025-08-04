<script setup>
import { defineProps } from "vue";
const props = defineProps({
  skillListData: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <ul class="list-disc pl-[15px] pr-[5px]">
    <li
      class="text-[1.2rem] font-extralight"
      v-for="(item, idx) in skillListData"
      :key="idx"
    >
      {{ item.skill }}
    </li>
  </ul>
</template>
