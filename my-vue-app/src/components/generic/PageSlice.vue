<script setup>
const props = defineProps({
  background: { type: String, default: "" },
});
</script>

<template>
  <section :class="['py-[100px]', `bg-${background}`]"></section>
</template>
