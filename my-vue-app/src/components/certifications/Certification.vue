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
      class="bg-custom-grey bottom-[0] mx-auto mb-[20px] flex max-w-[580px] items-center rounded-[10px] p-[14px_18px_14px_40px] outline outline-[2px] outline-transparent transition-all duration-200 hover:outline-custom-bright-green"
    >
      <div class="text-left">
        <div class="flex items-center text-[1.5rem] font-bold">
          <div>
            <h3 class="cert-title relative mr-[10px] inline leading-[1rem]">
              {{ cert.title }}
            </h3>
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
        <img v-if="cert.logoUrl" :src="cert.logoUrl" alt="" />
      </div>
    </a>
  </div>
</template>

<style scoped>
.cert-title::before {
  content: "";
  background-color: #00cf6e;
  border-radius: 999px;
  display: inline-block;
  flex-shrink: 0;
  height: 10px;
  left: -20px;
  position: absolute;
  top: 13px;
  width: 10px;
}
</style>
