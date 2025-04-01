<template>
  <section class="animate-fadeIn font-[aa-stetica] text-gray-800">

    <section class="mt-10" id="cases">
      <div class="flex items-center">
        <h1 class="text-xl font-[AA Stetica] font-light sm:text-2xl lg:text-3xl border-b-2 border-[#7f1d1d] inline-block pb-1">
          Кейсы
        </h1>
        <img src="/public/icons/arrow.svg" alt="Arrow" class="hidden sm:block w-10">
      </div>

      <div class="mt-10">
        <h2 class="text-lg font-medium text-[#7f1d1d]">SMM-ПРОДВИЖЕНИЕ</h2>
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="15"
          :breakpoints="{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }"
          navigation
          pagination
          class="mt-5"
        >
        <swiper-slide v-for="card in smmCases" :key="card.id">
          <router-link :to="'/case/smm/' + card.id">
            <aside
              class="justify-center items-center relative w-full h-80 rounded-lg shadow-md transition-transform duration-500 hover:scale-105 cursor-pointer overflow-hidden"
            >
              <div
                class="absolute inset-0 bg-cover bg-center"
                :style="{ backgroundImage: `url(${card.image})` }"
              ></div>
              <div class="absolute inset-0 bg-black/50 flex flex-col justify-center items-center p-4">
                <h2 class="text-2xl font-bold text-white drop-shadow-md">{{ card.title }}</h2>
                <p class="text-lg text-gray-200 mt-2 drop-shadow-md">{{ card.description }}</p>
              </div>
            </aside>
          </router-link>
      </swiper-slide>

        </swiper>
      </div>

      <div class="mt-10">
        <h2 class="text-lg font-medium text-[#7f1d1d]">ФИРМЕННЫЙ СТИЛЬ/БРЕНДИНГ</h2>
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="15"
          :breakpoints="{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }"
          navigation
          pagination
          class="mt-5"
        >
        <swiper-slide v-for="card in brandCases" :key="card.id">
          <router-link :to="'/case/brand/' + card.id">
            <aside class="relative w-full h-80 rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-500 hover:scale-105">
              <div :style="{ backgroundImage: `url(${card.image})` }" class="absolute inset-0 bg-cover bg-center brightness-75"></div>
              <div class="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center text-white">
                <h2 class="text-2xl font-bold mb-2 drop-shadow-lg">{{ card.title }}</h2>
                <p class="text-sm mb-4 drop-shadow-md">{{ card.description }}</p>
              </div>
            </aside>
          </router-link>
        </swiper-slide>
        </swiper>
      </div>
    </section>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { ref } from "vue";

const modules = ref([Navigation, Pagination]);

const smmCases = ref([
  {
    id: 1,
    title: "Кейс 1",
    description: "Истории для бренда одежды",
    image: "/mainsmm/1.svg",
  },
  {
    id: 2,
    title: "Кейс 2",
    description: "Посты для бренда одежды",
    image: "/mainsmm/2.svg",
  }
]);

const brandCases = ref([
  {
    id: 1,
    title: "Кейс 1",
    description: "Разработка лого для бренда молочной продукции",
    image: "/brandmain/milk.svg",
  },
  {
    id: 2,
    title: "Кейс 2",
    description: "Разработка лого для бренда рыбной продукции",
    image: "/brandmain/fish.svg",
  },
  {
    id: 3,
    title: "Кейс 3",
    description: "Разработка идеи для создания бренда мороженого",
    image: "/brandmain/icecream.svg",
  },
  {
    id: 4,
    title: "Кейс 4",
    description: "Разработка лого для бренда уходовой косметики",
    image: "/brandmain/kosmetica.svg",
  },
  {
    id: 5,
    title: "Кейс 5",
    description: "Разработка логотипа для бренда мебели и домашнего уюта",
    image: "/brandmain/furniture.svg",
  },
  {
    id: 6,
    title: "Кейс 6",
    description: "Ребрендинг логотипа косметики",
    image: "/brandmain/cosmetics.svg",
  },
  {
    id: 7,
    title: "Кейс 7",
    description: "Разработка логотипа спортивного питания",
    image: "/brandmain/sport.svg",
  },
  {
    id: 8,
    title: "Кейс 8",
    description: "Разработка логотипа пива",
    image: "/brandmain/beer.svg",
  },
  {
    id: 9,
    title: "Кейс 9",
    description: "Разработка логотипа для бренда кормов для животных",
    image: "/brandmain/petfood.svg",
  },
  {
    id: 10,
    title: "Кейс 10",
    description: "Разработка логотипа новой коллекции бренда одежды",
    image: "/brandmain/clothes.svg",
  },
]);

</script>
