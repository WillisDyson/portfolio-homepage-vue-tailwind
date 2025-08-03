<script setup>
import { ref } from "vue";
import NavLink from "./NavLink.vue";
import DropdownMenu from "../generic/DropdownMenu.vue";

const navOptions = [
  { text: "About", href: "#about" },
  { text: "Skills", href: "#skills" },
  { text: "Certifications", href: "#certifs" },
  { text: "Career & Education", href: "#career" },
  { text: "Projects", href: "#work" },
  { text: "Social Media & Contact", href: "#contact" },
];

const dropdownOptions = [
  {
    text: "Screen-friendly PDF",
    href: "/assets/willis-dyson__cv-july-2025-interactive.pdf",
  },
  {
    text: "Print-friendly PDF",
    href: "/assets/willis-dyson__cv-july-2025-print.pdf",
  },
];

const activeHref = ref(navOptions[0].href);

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
