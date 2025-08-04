<script setup>
const props = defineProps({
  background: { type: String, default: "" },
  
});
</script>

<template>
  <section :class="['py-[100px] align-center', background]">
    <slot />
  </section>
</template>
