<script setup>
import { defineProps } from "vue";

const props = defineProps({
  careerData: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="w-1/2 self-start pb-[92px]">
    <img :src="careerData.logoUrl" alt="" />
  </div>

  <div class="w-1/2">
    <small class="text-custom-mid-grey text-[0.875rem] font-light">{{
      careerData.location
    }}</small>
    <h3 class="text-[1.563rem] font-bold">{{ careerData.title }}</h3>
    <span class="text-[1.563rem] text-custom-light-grey">{{
      careerData.dates
    }}</span>
    <div
      class="mx-auto mt-[6px] flex items-center justify-center"
      role="button"
      tabindex="0"
    >
      <span class="mr-[8px] text-[0.936rem] font-light text-custom-bright-green"
        >Read summary</span
      >
      <img src="/images/green-down-arrow.svg" alt="" />
    </div>
    <div>
      <p></p>
    </div>
    <div role="presentation">
      <!-- Vertical line -->
      <div
        class="mx-auto mt-[24px] h-[68px] w-[1px] border-none bg-[linear-gradient(transparent_33%,_#fff_0%)] bg-[length:1px_10px] bg-right bg-repeat-y"
        role="presentation"
      ></div>
      <!-- -->
    </div>
  </div>
</template>
