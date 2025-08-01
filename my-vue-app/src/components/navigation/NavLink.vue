<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    text: {
        type: String,
        required: true
    },
    href: {
        type: String,
        required: true
    }
});
</script>

<template>
    <li>
        <a :href="props.href">{{ props.text }}</a>
    </li>
</template>
