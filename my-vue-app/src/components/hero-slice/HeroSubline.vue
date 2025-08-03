<script setup>
const sublineData = {
  roles: ["Front End UI Developer", "Web Accessibility Lead"],
  location: "Leeds, UK",
  image: { url: "images/uk.png", alt: "UK flag" },
};
</script>

<template>
  <p class="inline-block text-[2.75rem] font-extralight leading-[3.68rem]">
    I'm a
    <em class="text-custom-bright-green font-bold not-italic">{{
      sublineData.roles[0]
    }}</em>
    and
    <em class="text-custom-bright-green font-bold not-italic">{{
      sublineData.roles[1]
    }}</em>
    based in
    {{ sublineData.location }}
    <img
      class="relative top-[10px] ml-[4px] inline h-[56px] w-[56px]"
      :src="sublineData.image.url"
      :alt="sublineData.image.alt"
    />
  </p>
</template>
