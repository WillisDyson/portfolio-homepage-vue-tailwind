<script setup>
import SkillGrid from "./SkillGrid.vue";
import SkillList from "./SkillList.vue";

import { defineProps } from "vue";
const props = defineProps({
  skillCardData: {
    type: Object,
    required: true,
  },
  skillGridData: {
    type: Array,
    required: true,
  },
  skillListData: {
    type: Array,
    default: () => [],
  },
  showGrid: {
    type: Boolean,
    default: false,
  },
  showList: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="m-[10px] w-full rounded-[12px] bg-custom-very-dark-grey p-[35px_45px_45px] text-left"
  >
    <h3
      class="skill-title relative mb-[15px] inline-block text-[1.8rem] font-bold leading-[2.35rem]"
    >
      {{ skillCardData.title }}
    </h3>
    <p class="text-custom-light-grey mb-[25px] text-[1.2rem] leading-[1.6rem]">
      {{ skillCardData.description }}
    </p>
    <h4 class="mb-[20px] text-center font-bold">Main skills</h4>
    <SkillGrid v-if="showGrid" :skillGridData="skillGridData" />
    <SkillList v-if="showList" :skillListData="skillListData" />
  </div>
</template>

<style scoped>
.skill-title::before {
  content: "";
  background-color: #00cf6e;
  border-radius: 999px;
  display: inline-block;
  flex-shrink: 0;
  height: 26px;
  left: -16px;
  position: absolute;
  top: 8.5px;
  width: 3.5px;
}
</style>
