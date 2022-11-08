<script setup lang="ts">
import MenuHeader from './components/menuHeader.vue';



</script>

<template>
  <div>
    <div class="bg-black h-56 md:hidden">
      <MenuHeader class="md:hidden"></MenuHeader>
    </div>
    <img class="absolute -z-10 " src="../src/assets/img/cinema.jpg" alt="image d'une salle de cinema" />
    <MenuHeader class="hidden md:block"></MenuHeader>
  </div>
  <RouterView />
</template>

