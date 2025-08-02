<script setup>
const props = defineProps({
    text: {
        type: String,
        required: true
    },
    options: {
        type: Array,
        required: true
    }
});
</script>

<template>
    <div class="flex column align-start bg-[#03874b] rounded-[18px] outline-[2px] outline-transparent" tabindex="0" role="combobox">
        <div class="flex items-center px-[22px] py-[7.5px] hover:cursor-pointer">
            <span>{{ text }}</span>
            <svg class="ml-[10px] relative top-[0.5px]" xmlns="http://www.w3.org/2000/svg" width="10.634" height="6.454" viewBox="0 0 10.634 6.454">
                <path id="Icon_awesome-chevron-up" data-name="Icon awesome-chevron-up" d="M6.128,8.854l4.733,4.733a.584.584,0,0,1,0,.827l-.552.552a.584.584,0,0,1-.826,0L5.715,11.216,1.947,14.967a.584.584,0,0,1-.826,0l-.552-.552a.584.584,0,0,1,0-.827L5.3,8.854A.584.584,0,0,1,6.128,8.854Z" transform="translate(-0.398 -8.683)" fill="#fff"></path>
            </svg>

        </div>
        <ul class="hidden bg-white overflow-hidden text-left transition-all duration-800 max-w-full">
            <li v-for="option in options" :key="option.href">
                <a :href="option.href">{{ option.text }}</a>
            </li>
        </ul>
    </div>
</template>