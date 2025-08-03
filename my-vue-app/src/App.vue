<script setup>
import PageSlice from "./components/generic/PageSlice.vue";
import HeroImage from "./components/hero-slice/HeroImage.vue";
import NavBar from "./components/navigation/NavBar.vue";
import H1Text from "./components/hero-slice/H1Text.vue";
import HeroSubline from "./components/hero-slice/HeroSubline.vue";
import SeeMoreLink from "./components/hero-slice/SeeMoreLink.vue";
</script>

<template>
  <NavBar />
  <PageSlice class="center-content my-[60px]">
    <HeroImage />
    <H1Text />
    <HeroSubline />
    <SeeMoreLink />
  </PageSlice>
  <PageSlice background="bg-custom-striped" />
  <PageSlice background="bg-custom-very-dark-grey" />
</template>
