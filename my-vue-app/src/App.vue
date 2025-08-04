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
import Certification from "./components/certifications/Certification.vue";
import CareerItem from "./components/career/CareerItem.vue";
import ProjectItem from "./components/projects/ProjectItem.vue";

const skillsId = "skills";
const certifsId = "certifs";
const careerId = "career";
const workId = "work";

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
  url: "/images/me.png",
  alt: "Photograph of Willis. He has short brown hair, glasses, and short facial hair. He is smiling while wearing a beige T-shirt and looking straight on at the camera.",
};

const h1textData = {
  name: "Willis Dyson",
  image: { url: "/images/wave.png", alt: "Waving hand" },
};

const sublineData = {
  roles: ["Front End UI Developer", "Web Accessibility Lead"],
  location: "Leeds, UK",
  image: { url: "/images/uk.png", alt: "UK flag" },
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
  { src: "/images/html.png", text: "HTML" },
  { src: "/images/sass.png", text: "SASS (SCSS)" },
  { src: "/images/css.png", text: "CSS" },
  { src: "/images/js.png", text: "JavaScript" },
  { src: "/images/git.png", text: "Git" },
  { src: "/images/react.png", text: "React" },
  { src: "/images/tw.png", text: "Tailwind" },
  { src: "/images/vue.png", text: "Vue.js" },
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

const certificationData = [
  {
    url: "https://www.coursera.org/account/accomplishments/verify/10AO0SLYYNZD",
    title: "Introduction to Vue.js framework",
    issuer: "Codio",
    completed: "July 2025",
    logoUrl: "/images/codio.png",
  },
  {
    url: "https://www.coursera.org/account/accomplishments/verify/OBJXXKUK73GY",
    title: "Learn Tailwind CSS",
    issuer: "Scrimba",
    completed: "July 2025",
    logoUrl: "/images/scrimba.png",
  },
  {
    url: "https://www.coursera.org/account/accomplishments/verify/9HKUP9XT5HGW",
    title: "Advanced React",
    issuer: "Meta",
    completed: "April 2024",
    logoUrl: "/images/logo-Meta.png",
  },
  {
    url: "https://www.coursera.org/account/accomplishments/verify/F5ERDPRB6SEY",
    title: "React Basics",
    issuer: "Meta",
    completed: "January 2024",
    logoUrl: "/images/logo-Meta.png",
  },
  {
    url: "https://www.coursera.org/account/accomplishments/verify/GN4LFM5RTS4C",
    title: "Programming with JavaScript",
    issuer: "Meta",
    completed: "November 2023",
    logoUrl: "/images/logo-Meta.png",
  },
  {
    url: "https://courses.edx.org/certificates/1921f1cc711447a3aeed6edf61508c12",
    title: "Introduction to Web Accessibility",
    issuer: "W3C",
    completed: "September 2023",
    logoUrl: "/images/w3c-white.png",
  },
  {
    url: "https://www.credly.com/badges/802c6142-fd3a-41a2-84dd-8196f056d8a7/public_url",
    title: "AgilePM® Foundation",
    issuer: "APMG",
    completed: "October 2022",
    logoUrl: "/images/apmg-white.png",
  },
  {
    url: "https://www.coursera.org/account/accomplishments/verify/8D5L6K7CWHL4",
    title: "Foundations of User Experience (UX) Design",
    issuer: "Google",
    completed: "August 2021",
    logoUrl: "/images/google.png",
  },
];

const careerData = [
  {
    logoUrl: "/images/tcb.png",
    alt: "TopCashback",
    location: "Stafford, West Midlands, UK",
    title: "Front End UI Developer & Web Accessibility Lead",
    dates: "Current role since March 2025",
  },
  {
    logoUrl: "/images/tcb.png",
    alt: "TopCashback",
    location: "Stafford, West Midlands, UK",
    title: "Front End UI Developer",
    dates: "Feb 2022 - Mar 2025",
  },
  {
    logoUrl: "/images/ebuyer.png",
    alt: "Ebuyer",
    location: "Howden, East Yorkshire, UK",
    title: "UI Designer/Developer",
    dates: "May 2021 - Feb 2022",
  },
  {
    logoUrl: "/images/uoh.png",
    alt: "University of Huddersfield",
    location: "Huddersfield, West Yorkshire, UK",
    title: "1st Class Information & Communication Technology (BSc) Graduate",
    dates: "May 2021",
  },
  {
    logoUrl: "/images/tcb.png",
    alt: "TopCashback",
    location: "Stafford, West Midlands, UK",
    title: "UX Designer (12 months internship)",
    dates: "Jul 2019 – Sep 2020",
  },
];

const projectData = [
  {
    name: "Vue.js and Tailwind URL Shortener practice app",
    tags: ["Vue.js", "Tailwind", "API", "In progress"],
    tagsClass: ["tag-vuejs", "tag-tailwind", "tag-api", "tag-in-progress"],
    backgroundImage: "bg-[url(/images/vuetw.png)]",
    pageUrl: "https://willisdyson.dev/vuetw-proj",
  },
  {
    name: "Rolling Block – Accessibility services React app",
    tags: ["UX Design", "React", "API", "In progress"],
    tagsClass: ["tag-ux-design", "tag-react", "tag-api", "tag-in-progress"],
    backgroundImage: "bg-[url(/images/rb-tile.png)]",
    pageUrl: "https://willisdyson.dev/rolling-block",
  },
  {
    name: "Brand Pages Redesign – TopCashback",
    tags: ["Vanilla JS", "UX Design", "Accessibility"],
    tagsClass: ["tag-vanilla-js", "tag-ux-design", "tag-accessibility"],
    backgroundImage: "bg-[url(/images/merch-pages.png)]",
    pageUrl: "https://willisdyson.dev/brand-page-redesign",
  },
  {
    name: "Sitewide Navigation Redesign – TopCashback",
    tags: ["Vanilla JS", "UX Design"],
    tagsClass: ["tag-vanilla-js", "tag-ux-design"],
    backgroundImage: "bg-[url(/images/new-nav.png)]",
    pageUrl: "https://willisdyson.dev/nav-redesign",
  },
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
  <PageSlice background="bg-custom-striped" :id="skillsId">
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
  <PageSlice background="bg-custom-very-dark-grey" :id="certifsId">
    <SliceHeader text="Certifications" />
    <FlexColWrapper>
      <Certification :certificationData="certificationData" />
    </FlexColWrapper>
  </PageSlice>
  <PageSlice :id="careerId">
    <SliceHeader text="Career & Education" />
    <FlexRowWrapper class="max-w-[940px] flex-wrap">
      <CareerItem
        v-for="(item, index) in careerData"
        :key="index"
        :careerData="item"
      />
    </FlexRowWrapper>
  </PageSlice>
  <PageSlice background="bg-custom-very-dark-grey" :id="workId">
    <SliceHeader text="Projects" />
    <FlexRowWrapper class="m-[-25px] max-w-[940px] flex-wrap">
      <ProjectItem
        v-for="(project, index) in projectData"
        :key="index"
        :projectData="project"
      />
    </FlexRowWrapper>
  </PageSlice>
</template>
