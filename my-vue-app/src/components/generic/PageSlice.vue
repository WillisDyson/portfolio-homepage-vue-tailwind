<script setup>
const props = defineProps({
  background: { type: String, default: "" },
  
});
</script>

<template>
  <section :class="['py-[100px]', background]">
    <slot />
  </section>
</template>
