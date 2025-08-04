<script setup>
import { defineProps } from "vue";
const props = defineProps({
  projectData: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <a
    class="bg-custom-grey m-[25px] flex w-[44%] flex-col overflow-hidden rounded-[23px] text-left outline outline-[2px] outline-transparent transition-all duration-200 hover:outline-custom-bright-green"
    :href="projectData.pageUrl"
    target="_blank"
  >
    <div class="p-[16px_23px]">
      <div>
        <small
          v-for="(tag, index) in projectData.tags"
          :key="index"
          :class="projectData.tagsClass[index] + ' custom-tag'"
        >
          {{ tag }}
        </small>
      </div>
      <h3 class="mt-[10px] text-[1.25rem] font-bold leading-[1.2]">
        {{ projectData.name }}
      </h3>
    </div>
    <div
      :class="
        projectData.backgroundImage + ' mt-auto h-[348px] bg-cover bg-center'
      "
      role="presentation"
      aria-hidden="true"
    ></div>
  </a>
</template>
