<script setup>
const h1textData = {
  name: "Willis Dyson",
  image: { url: "images/wave.png", alt: "Waving hand" },
};
</script>

<template>
  <h1
    class="mb-[70px] inline-block text-[2.75rem] font-extralight leading-[3.68rem]"
  >
    Hi, I'm
    <em class="text-custom-bright-green font-bold not-italic">
      {{ h1textData.name }}
    </em>
    <img
      class="relative top-[10px] ml-[4px] inline h-[56px] w-[56px]"
      :src="h1textData.image.url"
      :alt="h1textData.image.alt"
    />
  </h1>
</template>
