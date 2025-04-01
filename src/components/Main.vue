<template>
    <section class="font-[aa-stetica]">
      <div class="mt-10 mx-4 sm:mx-8 md:mx-20 lg:mx-40">
        <Header />
        <router-view />
        <About id="about" class="mt-10" />
        <Cases id="projects" class="mt-10" />
      </div>
      <Footer id="contacts" class="mt-10" />
    </section>
</template>
  
<script setup>
  import Header from "./Header.vue";
  import About from "./About.vue";
  import Cases from "./Cases.vue";
  import Footer from "./Footer.vue";
</script>
  