<script setup>
import NavLink from './NavLink.vue';
import NavCvDropdown from './NavCvDropdown.vue';

</script>

<template>
    <nav>
        <ul class="flex items-center justify-evenly bg-custom-dark-gray h-[63px]">
            <NavLink text="About" href="#about"/>
            <NavLink text="Skills" href="#skills"/>
            <NavLink text="Certifications" href="#certifs"/>
            <NavLink text="Career & Education" href="#career"/>
            <NavLink text="Projects" href="#work"/>
            <NavLink text="Social Media & Contact" href="#contact"/>
            <NavCvDropdown/>  
        </ul>
    </nav>
</template>
