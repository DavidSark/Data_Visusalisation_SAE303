<script setup >
import { ref } from 'vue'

import MapView from './MapView.vue';
import DoughnutChart from '../components/DoughnutChart.vue';
import GraphFiltre from '../components/GraphFiltre.vue';
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
                        <router-link class="text-white no-underline hover:text-jaune-0" to="/cinema&crise">
                            <p class="">Cinema & crise</p>
                        </router-link>
                    </li>
                    <li class="mb-7">
                        <router-link class="text-white  no-underline hover:text-jaune-0" to="/regions&seances">
                            <p class="">Régions et séance de cinéma</p>
                        </router-link>
                    </li>
                    <li class="mb-7">
                        <router-link class=" text-white no-underline hover:text-jaune-0" to="/filmsinedits">
                            <p class="">Films Inédits</p>
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
                        <router-link class="" to="/cinema&crise">
                            <p class="text-white hover:border-b hover:border-verde font-semibold">Cinema & crise</p>
                        </router-link>
                        <router-link to="/regions&seances">
                            <p class="text-white hover:border-b hover:border-verde font-semibold">Régions et séance de
                                cinéma</p>
                        </router-link>
                        <router-link class=" shrink-0" to="/filmsinedits">
                            <p class="text-white hover:border-b hover:border-verde font-semibold">Films inédits</p>
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
                        Films Inédits</p>
                    <p class="text-white md:text-2xl 2xl:text-3xl">Les données du cinéma</p>
                    <!-- <img class="" src="../assets/img/logo.svg" alt="logo du site" /> -->
                    <div class="w-12 h-1 rounded-full mx-auto my-6 bg-white"></div>
                </RouterLink>
            </div>
        </div>

        <!-- article 1  -->

        <div class="px-10 mt-10 lg:flex lg:justify-center lg:flex-col lg:px-56 xl:px-96 lg:mt-20">
            <h2 class="font-Montserrat text-xl lg:text-2xl xl:text-4xl leading-tight font-semibold">Les films inédits et
                les exclusivités sont des éléments importants pour un cinéma mais également pour un consommateur.
            </h2>


            <div class="text-sm lg:text-xl leading-normal mt-10">
                <p>
                    Les cinémas capablent d'engendrer des exclusivités se verront avoir un flux constant
                    de revenu car les consommateurs sauront où venir regarder tel ou tel film.
                </p>
                <DoughnutChart class="mt-4" />
                <p class="text-xs">Source : <a
                        href="https://data.culture.gouv.fr/explore/dataset/etablissements-cinematographiques/api/"
                        target="_blank">
                        data.culture.gouv.fr</a>
                </p>

                <p class="mt-10">On se rend bien compte que les exclusivités sont très présentes dans quatre régions de
                    France.
                    L'Auvergne - Rhône-Alpes compte <span class="font-bold">23 486</span> films inédits pour l'année
                    2020.
                    L'Île-de-France, elle, en compte <span class="font-bold">22 403</span>, suivie de la nouvelle
                    Aquitaine avec <span class="font-bold">20 552</span> films et enfin l'Occitanie avec <span
                        class="font-bold">17 520</span>.

                </p>
                <p class="mt-10">Pour vous aider à trouver un cinéma près de chez vous avec ses films inédits,
                    utilisez la carte ci-dessous ou le tableau pour filtrer les données:
                </p>
                <MapView class="mt-4" />
                <p class="text-xs">Source : <a
                        href="https://data.culture.gouv.fr/explore/dataset/etablissements-cinematographiques/api/"
                        target="_blank">
                        data.culture.gouv.fr</a>
                </p>
                <GraphFiltre></GraphFiltre>
            </div>
        </div>
        <div class="bg-gray-700 w-4/5 my-10 h-1 rounded-full mx-auto md:my-8"></div>
        <div class="bg-gray-300">
            <div class="mx-3 pb-3 pt-4  lg:flex lg:justify-evenly">
                <div class="flex flex-col lg:flex-row lg:space-x-11 lg:text-2xl">
                    <router-link class="" to="/barchart">
                        <p class="text-gray-700 hover:border-b inline hover:border-verde font-semibold">BarChart Hori
                        </p>
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
</template>