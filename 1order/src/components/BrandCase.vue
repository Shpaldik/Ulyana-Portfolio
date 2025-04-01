<template>
    <section class="animate-fadeIn font-[aa-stetica] text-gray-800">
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

        <h1 class="text-xl sm:text-2xl lg:text-3xl font-semibold border-b-4 border-red-700 block pb-2 text-center mt-10 mx-auto">
            {{ caseTitle }}
        </h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4">
        <img 
          v-for="(img, index) in images" 
          :key="index" 
          :src="img" 
          class="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl" 
        />
      </div>
    </section>
</template>
  
  <script setup>

  import { ref, onMounted} from "vue";
  import { useRoute } from "vue-router";
  
  const route = useRoute();
  const caseId = route.params.id;
  
  const caseTitles = {
  "1": "Разработка лого для бренда молочной продукции",
  "2": "Разработка лого для бренда рыбной продукции",
  "3": "Разработка идеи для создания бренда мороженого",
  "4": "Разработка лого для бренда уходовой косметики",
  "5": "Разработка логотипа для бренда мебели и домашнего уюта",
  "6": "Ребрендинг логотипа косметики",
  "7": "Разработка логотипа спортивного питания",
  "8": "Разработка логотипа пива",
  "9": "Разработка логотипа для бренда кормов для животных",
  "10": "Разработка логотипа новой коллекции бренда одежды"
};

  
  const caseTitle = ref(caseTitles[caseId] || "Фирменный кейс");
  const images = ref([]);
  

  const allImages = import.meta.glob("/public/brand/case*/**/*.{jpg,png,svg}", { eager: true });
  
  onMounted(() => {
    images.value = Object.keys(allImages)
      .filter(path => path.includes(`/case${caseId}/`)) 
      .map(path => allImages[path].default);
  });


</script>
  