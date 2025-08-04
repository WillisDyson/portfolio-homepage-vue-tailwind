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
      class="mb-6 block"
    >
      <div>
        <div>
          <h3>{{ cert.title }}</h3>
          <span>{{ cert.issuer }}</span>
        </div>
        <div>
          <small>Completed {{ cert.completed }}</small>
        </div>
      </div>
      <div>
        <img v-if="cert.logoUrl" :src="cert.logoUrl" :alt="cert.title" />
      </div>
    </a>
  </div>
</template>
