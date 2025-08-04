<script setup>
const props = defineProps({
  text: { type: String, default: "" },
});
</script>

<template>
  <h2 class="text-[2.625rem] normal mb-[50px] px-[25px]">{{ text }}</h2>
</template>
