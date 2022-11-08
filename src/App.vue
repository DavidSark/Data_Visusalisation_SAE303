<script setup lang="ts">

import MenuHeader from './components/menuHeader.vue';


</script>

<template>
  <div>
    <div class="bg-[url('assets/img/final.jpg')] bg-cover ">
      <MenuHeader class="md:hidden"></MenuHeader>
      <MenuHeader class="hidden md:block"></MenuHeader>
    </div>
    <!-- <img class=" md:hidden" src="./assets/img/accueil_00.jpg" alt="image d'une salle de cinema" /> -->
    <!-- <img class="hidden md:block " src="./assets/img/accueil_01.jpg" alt="image d'une salle de cinema" /> -->
  </div>
  <RouterView />
</template>

