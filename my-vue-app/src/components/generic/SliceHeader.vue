<script setup>
const props = defineProps({
  text: { type: String, default: "" },
});
</script>

<template>
  <h2 class="normal mb-[50px] px-[25px] text-[2.625rem]">{{ text }}</h2>
</template>
