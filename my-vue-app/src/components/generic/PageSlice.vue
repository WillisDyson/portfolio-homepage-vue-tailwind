<script setup>
const props = defineProps({
  background: { type: String, default: "" },
});
const id = props.id || "";
</script>

<template>
  <section :class="['py-[100px] text-center', background]" :id="id">
    <slot />
  </section>
</template>
