<template>
  <section class="p-5 animate-fadeIn font-[aa-stetica] bg-gray-100 min-h-screen font-aa-stetica">
    <header class="sticky top-0 z-50 bg-white shadow-md">
          <div class="container mx-auto py-4 px-4 md:px-6">
            <router-link
              to="/home"
              class="text-[#7f1d1d] hover:underline text-base font-medium"
            >
              <img src="/public/arrow.svg" alt="exit" width="40">
            </router-link>
          </div>
    </header>
    
    <div v-if="isMenuOpen" class="fixed top-0 right-0 p-5 bg-white shadow-md animate-slideIn z-50 md:hidden">
      <router-link to="/home" class="block text-[#b22222] font-medium text-base mb-3" @click="toggleMenu">
        ← 
      </router-link>
    </div>
    <div class="max-w-screen-xl mx-auto mt-10 px-4 md:px-6">
      <h1 class="text-xl md:text-3xl font-medium text-gray-900 border-b-4 border-[#7f1d1d ] inline-block pb-2">
        Проект №1
      </h1>
      <div class="mt-8 flex flex-col md:flex-row gap-8">
        <div class="md:w-1/2 relative">
          <img
            src="/public/projects.gif"
            alt="Проект"
            class="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute bottom-2 right-2 bg-[#7f1d1d ] text-white px-3 py-1 rounded">
            Новый кейс
          </div>
        </div>
        <div class="md:w-1/2 flex flex-col justify-center">
          <p class="text-gray-700 leading-relaxed text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat, ipsum ac varius tincidunt.
          </p>
          <ul class="mt-5 space-y-2 text-gray-800 text-sm md:text-base">
            <li><span class="font-medium text-[#7f1d1d ]">Результат:</span> Увеличение продаж на 20%</li>
            <li><span class="font-medium text-[#7f1d1d ]">Технологии:</span> Vue.js, Tailwind CSS</li>
            <li><span class="font-medium text-[#7f1d1d ]">Период:</span> Январь - Март 2023</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=AA-Stetica:wght@300&display=swap');

.font-aa-stetica {
  font-family: 'AA-Stetica', sans-serif;
}

.animate-fadeIn {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-slideIn {
  animation: slideIn 0.3s ease-in-out;
}

@keyframes slideIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
