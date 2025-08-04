<script setup>
import { defineProps } from "vue";
const props = defineProps({
  skillGridData: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="m-[-10px] flex flex-wrap justify-center">
    <div
      v-for="(skill, idx) in skillGridData"
      :key="idx"
      class="m-[10px] flex w-[75px] flex-col"
    >
      <img class="rounded-[4px]" :alt="skill.text" :src="skill.src" />
      <span class="mt-[10px] text-center text-[0.75rem]">{{ skill.text }}</span>
    </div>
  </div>
</template>
