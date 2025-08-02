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
    <div
        class="group flex flex-col self-start bg-[#03874b] mt-[16px] rounded-[18px] outline outline-2 outline-transparent overflow-hidden
               hover:bg-[#006b3b] focus:bg-[#006b3b] focus-visible:bg-[#006b3b] focus-within:bg-[#006b3b]"
        tabindex="0"
        role="combobox"
    >
        <div
            class="flex items-center px-[22px] py-[7.5px] hover:cursor-pointer
                   hover:bg-[#006b3b] focus:bg-[#006b3b] focus-visible:bg-[#006b3b] focus-within:bg-[#006b3b]"
        >
            <span>{{ text }}</span>
            <svg
                class="ml-[10px] relative top-[0.5px] transition-transform duration-300 rotate-180
                       group-hover:rotate-0 group-focus:rotate-0 group-focus-visible:rotate-0 group-focus-within:rotate-0"
                xmlns="http://www.w3.org/2000/svg"
                width="10.634"
                height="6.454"
                viewBox="0 0 10.634 6.454"
            >
                <path id="Icon_awesome-chevron-up" data-name="Icon awesome-chevron-up" d="M6.128,8.854l4.733,4.733a.584.584,0,0,1,0,.827l-.552.552a.584.584,0,0,1-.826,0L5.715,11.216,1.947,14.967a.584.584,0,0,1-.826,0l-.552-.552a.584.584,0,0,1,0-.827L5.3,8.854A.584.584,0,0,1,6.128,8.854Z" transform="translate(-0.398 -8.683)" fill="#fff"></path>
            </svg>
        </div>
        <ul
            class="hidden flex-col bg-white overflow-hidden text-left transition-all duration-800 max-w-full
                   group-hover:flex group-focus:flex group-focus-visible:flex group-focus-within:flex"
        >
            <li
                v-for="option in options"
                :key="option.href"
                class="text-[#101010] px-[22px] py-[12px] decoration-none hover:bg-[#f0f0f0] focus:bg-[#f0f0f0] focus-visible:bg-[#f0f0f0] focus-within:bg-[#f0f0f0]"
            >
                <a :href="option.href">{{ option.text }}</a>
            </li>
        </ul>
    </div>
</template>