<script setup>
const heroImgData = {
  url: "images/me.png",
  alt: "Photograph of Willis. He has short brown hair, glasses, and short facial hair. He is smiling while wearing a beige T-shirt and looking straight on at the camera.",
};
</script>

<template>
  <img
    class="mx-auto mb-[27px] block h-[207px] w-[207px] rounded-full"
    :src="heroImgData.url"
    :alt="heroImgData.alt"
  />
</template>
