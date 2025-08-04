<script setup>
import { defineProps } from "vue";

const props = defineProps({
  certificationData: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div>
    <a
      v-for="(cert, idx) in certificationData"
      :key="idx"
      :href="cert.url"
      target="_blank"
      rel="noopener"
      class="bg-custom-grey mx-auto mb-[20px] flex max-w-[580px] items-center rounded-[10px] px-[18px] py-[14px]"
    >
      <div class="text-left">
        <div class="flex items-center text-[1.5rem] font-bold">
          <div>
            <h3 class="mr-[10px] inline leading-[1rem]">{{ cert.title }}</h3>
            <span class="inline font-normal text-custom-light-grey">{{
              cert.issuer
            }}</span>
          </div>
        </div>
        <div>
          <span class="font-[1.15rem] text-custom-light-grey"
            >Completed {{ cert.completed }}</span
          >
        </div>
      </div>
      <div class="align-center ml-auto flex">
        <img v-if="cert.logoUrl" :src="cert.logoUrl" :alt="cert.title" />
      </div>
    </a>
  </div>
</template>
