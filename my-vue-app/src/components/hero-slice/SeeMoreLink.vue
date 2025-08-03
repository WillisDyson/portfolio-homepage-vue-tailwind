<script setup>
const h1textData = {
  name: "Willis Dyson",
  imageurl: "images/down-arrow.png",
};
</script>

<template>
  <a class="block mt-[160px]" href="#skills">
    <span class="relative font-bold text-[1.44rem] top-[0] hover:top-[10px]">Everything you need to know about me</span>
    <img class="relative more-info__image top-[0] hover:top-[15px]" alt="" :src="h1textData.imageurl">
  </a>
</template>
