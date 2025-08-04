<script setup>
import { defineProps } from "vue";

const props = defineProps({
  heroImgData: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <img
    class="mx-auto mb-[27px] block h-[207px] w-[207px] rounded-full"
    :src="heroImgData.url"
    :alt="heroImgData.alt"
  />
</template>
