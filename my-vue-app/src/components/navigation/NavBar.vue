<script setup>
import { ref } from "vue";
import NavLink from "./NavLink.vue";
import DropdownMenu from "../generic/DropdownMenu.vue";

const props = defineProps({
  navOptions: {
    type: Array,
    default: () => [],
  },
  dropdownOptions: {
    type: Array,
    default: () => [],
  },
});

const activeHref = ref(props.navOptions[0].href);

function setActive(href) {
  activeHref.value = href;
}
</script>

<template>
  <nav class="bg-custom-dark-grey">
    <ul
      class="mx-auto flex h-[67px] max-w-[1600px] items-center justify-evenly"
    >
      <NavLink
        v-for="option in navOptions"
        :key="option.href"
        :text="option.text"
        :href="option.href"
        :active="activeHref === option.href"
        @click="setActive(option.href)"
      />
      <DropdownMenu text="Download my CV" :options="dropdownOptions" />
    </ul>
  </nav>
</template>
