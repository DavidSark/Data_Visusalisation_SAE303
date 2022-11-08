<script setup >
import { ref } from 'vue'
import VerticalBarChart from '../components/VerticalBarChart.vue';
import AreaChart from '../components/AreaChart.vue';
// pour le menu -> 
const menuVisible = ref(true);
</script>

<template>
    <div>
        <!-- Menu -->
        <div class="bg-[url('assets/img/final.jpg')] bg-cover ">
            <!-- Menu responsive -->
            <div class="overflow-y-hidden bg-black h-full w-full fixed " :class="{ hidden: menuVisible }">
                <div class="flex justify-end mt-6">
                    <button v-if="!menuVisible" v-on:click="menuVisible = !menuVisible" class="mx-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class=" h-8 w-8 text-white" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <ul class="m-8 font-inter leading-extra-loose font-Montserrat flex flex-col text-center text-xl ">
                    <li class="mb-7">
                        <router-link class="text-white no-underline hover:text-jaune-0" to="/">
                            <p class="">Accueil</p>
                        </router-link>
                    </li>
                    <li class="mb-7">
                        <router-link class="text-white no-underline hover:text-jaune-0" to="/barchart">
                            <p class="">Bar Hori</p>
                        </router-link>
                    </li>
                    <li class="mb-7">
                        <router-link class="text-white  no-underline hover:text-jaune-0" to="/linechart">
                            <p class="">Line</p>
                        </router-link>
                    </li>
                    <li class="mb-7">
                        <router-link class=" text-white no-underline hover:text-jaune-0" to="/verticalbarchart">
                            <p class="">Bar</p>
                        </router-link>
                    </li>
                    <li class="mb-7">
                        <router-link class="text-white no-underline hover:text-jaune-0" to="/doughnutchart">
                            <p class="">Pie</p>
                        </router-link>
                    </li>

                    <li class="mb-7">
                        <router-link class="text-white no-underline hover:text-jaune-0" to="/map">
                            <p class="">Map</p>
                        </router-link>
                    </li>

                </ul>
            </div>

            <!-- Menu desktop -->
            <div class="mx-10 ">
                <div class="hidden md:flex justify-between items-center pt-10">
                    <div class="">
                        <RouterLink to="/">
                            <img class="w-20 lg:w-32" src="../assets/img/logo_2.svg" alt="logo du site" />
                        </RouterLink>
                    </div>

                    <div class=" hidden md:flex items-center space-x-6 font-Montserrat text-xl lg:text-2xl">
                        <router-link class="" to="/barchart">
                            <p class="text-white hover:border-b hover:border-verde font-semibold">Bar Hori</p>
                        </router-link>
                        <router-link to="/linechart">
                            <p class="text-white hover:border-b hover:border-verde font-semibold">Line</p>
                        </router-link>
                        <router-link class=" shrink-0" to="/verticalbarchart">
                            <p class="text-white hover:border-b hover:border-verde font-semibold">Bar</p>
                        </router-link>
                        <router-link class="shrink-0" to="/doughnutchart">
                            <p class="text-white hover:border-b hover:border-verde font-semibold">Pie</p>
                        </router-link>
                        <router-link to="/map">
                            <p class="text-white hover:border-b hover:border-verde font-semibold">Map</p>
                        </router-link>
                    </div>
                </div>
            </div>

            <div class="md:hidden">
                <div class="flex items-center justify-between">
                    <div></div>
                    <button v-on:click="menuVisible = !menuVisible" class="mx-4 mt-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20"
                            fill="currentColor" :class="{ hidden: !menuVisible }">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>

                </div>

            </div>
            <div
                class="mt-44 pb-80 md:pb-52 md:mt-20 lg:pb-40 2xl:mt-52 2xl:pb-96 flex text-center items-center justify-center ">
                <RouterLink to="/">
                    <p
                        class="text-5xl md:text-7xl 2xl:text-9xl tracking-widest text-white font-Montserrat font-bold inline">
                        Régions & séances de cinéma</p>
                    <p class="text-white md:text-2xl 2xl:text-3xl">Les données du cinéma</p>
                    <!-- <img class="" src="../assets/img/logo.svg" alt="logo du site" /> -->
                    <div class="w-12 h-1 rounded-full mx-auto my-6 bg-white"></div>
                </RouterLink>
            </div>
        </div>

        <!-- article 1  -->

        <div class="px-10 mt-10 lg:flex lg:justify-center lg:flex-col lg:px-56 xl:px-96 lg:mt-20">
            <h2 class="font-Montserrat text-xl lg:text-2xl xl:text-4xl leading-tight font-semibold">Trop souvent
                certains cinémas ne proposent pas de séances pour regarder les films que l'on veut absolument voir.
            </h2>


            <div class="text-sm lg:text-xl leading-normal mt-10">
                <p>
                    Sur la période de 2020, on retrouve les régions qui ont les cinémas qui ont proposaient le plus de
                    séances au cours de l'année.
                </p>
                <VerticalBarChart class="mt-4" />
                <p class="text-xs">Source : <a
                        href="https://data.culture.gouv.fr/explore/dataset/etablissements-cinematographiques/api/"
                        target="_blank">
                        data.culture.gouv.fr</a>
                </p>
                <p class="mt-10">
                    L'Île-de-France est la région qui a proposé le plus de séances de cinéma dans toute la France. Il
                    est intéressant de noter que la région d'Auvergne - Rhône-Alpes est en deuxième position. Ce qui
                    peut paraître surprenant car elle possède le plus de cinéma en France.
                </p>
                <AreaChart class="mt-4"></AreaChart>
                <p class="text-xs">Source : <a
                        href="https://data.culture.gouv.fr/explore/dataset/etablissements-cinematographiques/api/"
                        target="_blank">
                        data.culture.gouv.fr</a>
                </p>
                <p class="mt-10">
                    En effet la région Auvergne - Rhône-Alpes possède 323 cinémas tandis que l'Île-de-France en dispose
                    de 310.
                </p>

            </div>
        </div>
        <div class="bg-gray-700 w-4/5 my-10 h-1 rounded-full mx-auto md:my-8"></div>
        <div class="bg-gray-300">
            <div class="mx-3 pb-3 pt-4  lg:flex lg:justify-evenly">
                <div class="flex flex-col lg:flex-row lg:space-x-11 lg:text-2xl">
                    <router-link class="" to="/barchart">
                        <p class="text-gray-700 hover:border-b inline hover:border-verde font-semibold">Bar Hori</p>
                    </router-link>
                    <router-link to="/linechart">
                        <p class="text-gray-700 hover:border-b inline hover:border-verde font-semibold">Line</p>
                    </router-link>
                    <router-link class=" shrink-0" to="/verticalbarchart">
                        <p class="text-gray-700 hover:border-b inline hover:border-verde font-semibold">Bar</p>
                    </router-link>
                    <router-link class="shrink-0" to="/doughnutchart">
                        <p class="text-gray-700 hover:border-b inline hover:border-verde font-semibold">Pie</p>
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
</template>