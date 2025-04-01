<template>
    <header class="sticky top-0 z-50 bg-white font-[aa-stetica] shadow-md">
        <div class="container mx-auto flex items-center py-4 px-6">
            <nav class="hidden lg:flex justify-center gap-10 text-gray-800 font-normal text-base font-[aa-stetica]">
                <a href="#about" class="hover:text-[#7f1d1d]  transition">Обо мне</a>
                <a href="#cases" class="hover:text-[#7f1d1d] transition">Кейсы</a>
                <a href="#contacts" class="hover:text-[#7f1d1d] transition">Контакты</a>
            </nav>

            <button @click="toggleMenu" class="lg:hidden text-gray-800">
                <svg v-if="!isMenuOpen" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                <svg v-else class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <nav v-if="isMenuOpen" class="absolute top-full left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-4 text-base font-normal font-[aa-stetica] xl:hidden animate-slideIn">
            <a href="#about" class="hover:text-red-700 transition">Обо мне</a>
            <a href="#cases" class="hover:text-red-700 transition">Кейсы</a>
            <a href="#contacts" class="hover:text-red-700 transition">Контакты</a>
        </nav>
    </header>
</template>

<script setup>
import { ref, watch } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

watch(isMenuOpen, (isOpen) => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
});
</script>

<style scoped>
.animate-slideIn {
    animation: slideIn 0.3s ease-in-out;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
