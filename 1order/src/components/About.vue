<template>
  <h1 class="mt-6 font-['AA Stetica'] font-light text-center text-3xl sm:text-4xl lg:text-5xl text-gray-800 border-b-2 border-red-700 pb-2 w-full" id="about">
    PORTFOLIO
  </h1>
  <section class="flex flex-col md:flex-col lg:flex-row items-center gap-3 p-4 animate-fadeIn">

    <img class="w-full md:w-80 h-60 md:h-80 lg:w-80 lg:h-96 rounded-lg transition-transform duration-500 hover:scale-105" src="/public/photo.svg" alt="">

    <main class="flex flex-col gap-8 w-full md:w-4/5">
      <section>
        <div class="flex items-center">
          <h1 class="text-xl font-['AA Stetica'] font-light sm:text-3xl lg:text-4xl font-bold text-gray-800 border-b-2 border-red-700 inline-block pb-1 uppercase md:text-left text-center">
            ОБО МНЕ
          </h1>
          <img src="/public/icons/arrow.svg" alt="" width="60">
        </div>

        <p class="mt-4 leading-relaxed text-gray-600 text-base font-['AA Stetica']">
          Привет, меня зовут Ульяна, и я многопрофильный специалист в сфере маркетинга и дизайна.
        </p>
        <ul class="mt-4 space-y-2 text-gray-700 text-sm font-['AA Stetica']">
          <li>Возраст: 19 лет</li>
          <li>Образование: Студентка 3-го курса по специальности программист-маркетолог (БрГТУ)</li>
        </ul>
      </section>

      <section>
        <div class="flex items-center">
          <h1 class="text-xl font-['AA Stetica'] font-light sm:text-3xl lg:text-4xl font-bold text-gray-800 border-b-2 border-red-700 inline-block pb-1 uppercase md:text-left text-center">
            НАВЫКИ
          </h1>
          <img src="/public/icons/arrow.svg" alt="" width="60">
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
          <div>
            <div class="flex gap-3 mt-2">
              <img src="/public/icons/ps.svg" alt="Photoshop" class="w-10 h-10 sm:w-12 sm:h-12">
              <img src="/public/icons/canva.svg" alt="Canva" class="w-10 h-10 sm:w-12 sm:h-12">
              <img src="/public/icons/figma.svg" alt="Figma" class="w-10 h-10 sm:w-12 sm:h-12">
              <img src="/public/icons/AI.svg" alt="Illustrator" class="w-10 h-10 sm:w-12 sm:h-12">
            </div>
          </div>
        </div>
      </section>
    </main>
  </section>
</template>

<style scoped>
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-in-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @media (max-width: 1020px) {
    section {
      align-items: start; /* Выравниваем элементы по левому краю */
    }
    img {
      height: a;
    }
    main {
      width: 90%;
    }
  }

  @media (max-width: 780px) {
    section {
      flex-direction: column; /* Фото сверху, информация снизу */
    }
    img {
      order: 1; /* Фото будет сверху */
    }
    main {
      order: 2; /* Информация будет снизу */
    }
  }

  @media (min-width: 400px) {
    section {
      flex-direction: row; /* Фото и информация в ряд */
    }
    img {
      order: 1; /* Фото слева */
    }
    main {
      order: 2; /* Информация справа */
    }
  }
</style>
