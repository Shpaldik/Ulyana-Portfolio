<template>
  <footer class="bg-black font-[aa-stetica] text-white py-6 animate-fadeIn">
    <div class="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-6 md:gap-0">
      <div class="w-full md:w-auto flex flex-col items-center md:items-start md:border-l border-[#7f1d1d] md:pl-4">
        <h1 class="text-lg font-semibold pb-2 md:pb-0 text-center md:text-left">
          Контакты для связи
        </h1>
        <a href="https://www.instagram.com/tdq.i?igsh=MTRmNzEyd2RtNGwzeA==" target="_blank" class="flex items-center gap-3 mt-3 text-gray-200 hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
          <img class="w-8 h-8" src="/public/icons/insta.svg" alt="Instagram">
          <span class="text-sm md:text-base">tdq.i</span>
        </a>
      </div>

    </div>
  </footer>
</template>

<style scoped>
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-in-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }


  footer a:hover {
    transform: scale(1.05);
  }
  
  footer h1 {
    font-size: 1.125rem; 
  }

  footer a span {
    transition: color 0.3s ease-in-out;
  }

  footer a:hover span {
    color: white; 
  }
</style>

