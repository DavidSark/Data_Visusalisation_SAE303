<script setup lang="ts">
import MenuHeader from '../components/menuHeader.vue';

</script>

<template>
  <div>
    <div>
      <div class="bg-[url('assets/img/final.jpg')] bg-cover ">
        <MenuHeader class="md:hidden"></MenuHeader>
        <MenuHeader class="hidden md:block"></MenuHeader>
      </div>
      <!-- <img class=" md:hidden" src="./assets/img/accueil_00.jpg" alt="image d'une salle de cinema" /> -->
      <!-- <img class="hidden md:block " src="./assets/img/accueil_01.jpg" alt="image d'une salle de cinema" /> -->
    </div>


    <div class="bg-gray-300 pt-16  md:pb-4">
      <div>
        <p class="font-Montserrat text-gray-700 text-2xl text-center font-bold">Les articles</p>
        <div class="w-12 h-1 rounded-full mx-auto my-6 bg-gray-700"></div>

        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          <!--Card 1-->
          <div class="rounded overflow-hidden shadow-lg">
            <RouterLink to="/cinema&crise">
              <img class="w-full" src="../assets/img/img_card_00.jpg" alt="image d'un cinema">
              <div class="px-6 py-4">
                <p class="text-gray-700 text-base font-Montserrat">
                  De 2019 à 2020 les cinémas ont connu une baisse significative de leur revenus.
                  Et ce n'est pas un hasard.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#cinema</span>
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#données</span>
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#france</span>
              </div>
            </RouterLink>
          </div>
          <!--Card 2-->
          <div class="rounded overflow-hidden shadow-lg">
            <RouterLink to="/regions&seances">
              <img class="w-full" src="../assets/img/img_card_01.jpg" alt="River">
              <div class="px-6 py-4">
                <p class="text-gray-700 text-base">
                  Quelles régions mets à dispositions le plus de séance de cinéma en France ?
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#cinema</span>
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#france</span>
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#données</span>
              </div>
            </RouterLink>
          </div>

          <!--Card 3-->
          <div class="rounded overflow-hidden shadow-lg">
            <RouterLink to="/filmsinedits">
              <img class="w-full" src="../assets/img/img_card_02.jpg" alt="Forest">
            </RouterLink>

            <RouterLink to="/filmsinedits">
              <div class="px-6 py-4">
                <p class="text-gray-700 text-base">
                  L'exclusivité est un point important dans le cinéma!
                  Découvrez les régions qui en profite le plus dès maintenant.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#données</span>
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#france</span>
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#cinema</span>
              </div>
            </RouterLink>
          </div>
        </div>

        <div class="bg-white">
          <div class="md:flex md:justify-between md:items-center">
            <div class="pt-12 md:pt-0 bg-gray-300 md:w-1/2 md:bg-white md:pb-0">
              <img src="../assets/img/img_card_00.jpg" />
            </div>

            <div class="mx-3 md:w-1/2  ">
              <p class="text-center font-medium text-2xl text-gray-700 font-Montserrat pt-12 md:pt-0 lg:text-4xl">À
                propos
              </p>
              <div class="w-6 h-1 rounded-full mx-auto my-4 bg-gray-700"></div>
              <p class="text-gray-700 lg:text-2xl mb-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                sodales
                tempus
                lacus.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales tempus lacus.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Ut sodales tempus lacus.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-700 w-4/5 h-1 rounded-full mx-auto md:my-8"></div>
      <div class="bg-gray-300">
        <div class="mx-3 pb-3 pt-4  lg:flex lg:justify-evenly">
          <div class="flex flex-col lg:flex-row lg:space-x-11 lg:text-2xl">
            <router-link class="" to="/barchart">
              <p class="text-gray-700 hover:border-b inline hover:border-verde font-semibold">BarChart Hori</p>
            </router-link>
            <router-link to="/linechart">
              <p class="text-gray-700 hover:border-b inline hover:border-verde font-semibold">LineChart</p>
            </router-link>
            <router-link class=" shrink-0" to="/verticalbarchart">
              <p class="text-gray-700 hover:border-b inline hover:border-verde font-semibold">BarChart</p>
            </router-link>
            <router-link class="shrink-0" to="/doughnutchart">
              <p class="text-gray-700 hover:border-b inline hover:border-verde font-semibold">PieChart</p>
            </router-link>
            <router-link class="shrink-0" to="/areachart">
              <p class="text-gray-700 hover:border-b inline hover:border-verde font-semibold">AreaChart</p>
            </router-link>
            <router-link class="shrink-0" to="/graphfiltre">
              <p class="text-gray-700 hover:border-b inline hover:border-verde font-semibold">Graph&Filtre</p>
            </router-link>
            <router-link to="/map">
              <p class="text-gray-700 hover:border-b inline-block hover:border-verde font-semibold">Map</p>
            </router-link>
          </div>

          <div class="flex lg:flex-row justify-center space-x-4 mb-4">
            <img class="w-6" src="../assets/img/facebook.svg" alt="icone facebook" />
            <img class="w-6" src="../assets/img/twitter.svg" alt="icone twitter" />
            <img class="w-6" src="../assets/img/instagram.svg" alt="icone instagram" />
            <img class="w-6" src="../assets/img/twitch.svg" alt="icone twitch" />
          </div>
        </div>
        <p class="mt-3 text-center font-Montserrat text-xs text-gray-700">Créée par David Sarkissian</p>
      </div>
    </div>
  </div>

</template>


