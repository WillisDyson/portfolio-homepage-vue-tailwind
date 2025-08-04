<script setup>
import PageSlice from "./components/generic/PageSlice.vue";
import HeroImage from "./components/hero-slice/HeroImage.vue";
import NavBar from "./components/navigation/NavBar.vue";
import H1Text from "./components/hero-slice/H1Text.vue";
import HeroSubline from "./components/hero-slice/HeroSubline.vue";
import SeeMoreLink from "./components/hero-slice/SeeMoreLink.vue";
import SliceHeader from "./components/generic/SliceHeader.vue";
import FlexRowWrapper from "./components/generic/FlexRowWrapper.vue";
import FlexColWrapper from "./components/generic/FlexColWrapper.vue";
import SkillCard from "./components/skills/SkillCard.vue";

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

const skillCardData = [
  {
    title: "Front End Web Development",
    description:
      "Currently employed as Front End UI Developer & Web Accessibility Lead at TopCashback.",
  },
  {
    title: "UX Design",
    description:
      "As my current and past Web Development roles had a strong UX focus, I have developed solid UX Design skills.",
  },
  {
    title: "Web Accessibility",
    description:
      "Alongside my development duties, I am responsible for leading TopCashback's web accessibility initiatives.",
  },
];

const seeMoreHref = "#skills";

const skillGridData = [
  { src: "images/html.png", text: "HTML" },
  { src: "images/sass.png", text: "SASS (SCSS)" },
  { src: "images/css.png", text: "CSS" },
  { src: "images/js.png", text: "JavaScript" },
  { src: "images/git.png", text: "Git" },
  { src: "images/react.png", text: "React" },
  { src: "images/tw.png", text: "Tailwind" },
  { src: "images/vue.png", text: "Vue.js" },
];

const skillListDesignData = [
  { skill: "UI Design" },
  { skill: "User Research" },
  { skill: "UX Principles" },
  { skill: "Wireframing & Prototyping" },
  { skill: "A/B Testing" },
  { skill: "Data & Analytics" },
  { skill: "Adobe XD, Adobe Photoshop, Figma" },
];

const skillListAccessibilityData = [
  { skill: "Accessibility Audits" },
  { skill: "Leading Training Sessions" },
  { skill: "Guides & Documentation" },
  { skill: "W3C WCAG Fluency" },
  { skill: "Accessible Development & Design" },
];
</script>

<template>
  <NavBar :navOptions="navOptions" :dropdownOptions="dropdownOptions" />
  <PageSlice class="center-content my-[60px]">
    <HeroImage :heroImgData="heroImgData" />
    <H1Text :h1textData="h1textData" />
    <HeroSubline :sublineData="sublineData" />
    <SeeMoreLink :href="seeMoreHref" />
  </PageSlice>
  <PageSlice background="bg-custom-striped">
    <SliceHeader text="Skills" />
    <FlexRowWrapper>
      <SkillCard
        v-for="(card, idx) in skillCardData"
        :key="idx"
        :skillCardData="card"
        :skillGridData="skillGridData"
        :showGrid="idx === 0"
        :showList="idx === 1 || idx === 2"
        :skillListData="
          idx === 1
            ? skillListDesignData
            : idx === 2
              ? skillListAccessibilityData
              : []
        "
      />
    </FlexRowWrapper>
  </PageSlice>
</template>
