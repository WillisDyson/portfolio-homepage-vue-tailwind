<script setup>
const h1textData = {
  name: "Willis Dyson",
  image: { url: "images/wave.png", alt: "Waving hand" },
};
</script>

<template>
  <a href="#skills">
    <span class="more-info__text">Everything you need to know about me</span>
    <svg
      class="more-info-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 33 33"
    >
      <g transform="translate(-1.5 -1.5)">
        <path
          class="more-info-icon__stroke"
          data-name="Path 2"
          d="M33,18A15,15,0,1,1,18,3,15,15,0,0,1,33,18Z"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        ></path>
        <path
          class="more-info-icon__stroke"
          data-name="Path 3"
          d="M12,18l6,6,6-6m-6-6V24"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        ></path>
      </g>
    </svg>
  </a>
</template>
