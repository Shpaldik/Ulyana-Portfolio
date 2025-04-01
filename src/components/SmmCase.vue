<template>
    <section class="animate-fadeIn font-[aa-stetica] text-gray-800">
        <header class="sticky top-0 z-50 bg-white shadow-md">
          <div class="container mx-auto py-4 px-4 md:px-6">
            <router-link
              to="/main"
              class="text-[#7f1d1d] hover:underline text-base font-medium"
            >
              <img src="/public/arrow.svg" alt="exit" width="40">
            </router-link>
          </div>
        </header>

      <section class="mt-10 mx-4 font-[aa-stetica]">
        <h1 class="text-xl sm:text-2xl lg:text-3xl font-semibold border-b-4 border-red-700 pb-2 text-center">
          {{ caseTitle }}
        </h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4">
          <img 
            v-for="(img, index) in images" 
            :key="index" 
            :src="img" 
            class="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-none" 
          />

        </div>
      </section>
    </section>
</template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router";
  
  const route = useRoute();
  const caseId = route.params.id;
  
  const caseTitles = {
    "1": "Оформление историй",
    "2": "Создание постов",

  };
  
  const caseTitle = ref(caseTitles[caseId] || "SMM-Кейс");
  const images = ref([]);
  

  const allImages = import.meta.glob("/public/smm/case*/**/*.{jpg,png,svg}", { eager: true });
  
  onMounted(() => {
    images.value = Object.keys(allImages)
      .filter(path => path.includes(`/case${caseId}/`))
      .map(path => path.replace("/public", ""));
  });
  

  const isMenuOpen = ref(false);
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  </script>
  