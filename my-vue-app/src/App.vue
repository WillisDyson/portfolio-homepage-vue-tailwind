<script setup>
import PageSlice from "./components/generic/PageSlice.vue";
import HeroImage from "./components/hero-slice/HeroImage.vue";
import NavBar from "./components/navigation/NavBar.vue";
import H1Text from "./components/hero-slice/H1Text.vue";
import HeroSubline from "./components/hero-slice/HeroSubline.vue";
import SeeMoreLink from "./components/hero-slice/SeeMoreLink.vue";
import SliceHeader from "./components/generic/SliceHeader.vue";

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

const heroImgData = {
  url: "images/me.png",
  alt: "Photograph of Willis. He has short brown hair, glasses, and short facial hair. He is smiling while wearing a beige T-shirt and looking straight on at the camera.",
};

const h1textData = {
  name: "Willis Dyson",
  image: { url: "images/wave.png", alt: "Waving hand" },
};

const sublineData = {
  roles: ["Front End UI Developer", "Web Accessibility Lead"],
  location: "Leeds, UK",
  image: { url: "images/uk.png", alt: "UK flag" },
};

const seeMoreHref = "#skills";
</script>

<template>
  <NavBar :navOptions="navOptions" :dropdownOptions="dropdownOptions" />
  <PageSlice class="my-[60px] center-content">
    <HeroImage :heroImgData="heroImgData" />
    <H1Text :h1textData="h1textData" />
    <HeroSubline :sublineData="sublineData" />
    <SeeMoreLink :href="seeMoreHref" />
  </PageSlice>
  <PageSlice background="bg-custom-striped" >
    <SliceHeader text="Skills" />
  </PageSlice>
  <PageSlice background="bg-custom-very-dark-grey" />
</template>
