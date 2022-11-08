<script setup >
import { ref } from 'vue'
import BarChart from '../components/BarChart.vue';
import LineChart from '../components/LineChart.vue';

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
                        Cinéma & crise </p>
                    <p class="text-white md:text-2xl 2xl:text-3xl">Les données du cinéma</p>
                    <!-- <img class="" src="../assets/img/logo.svg" alt="logo du site" /> -->
                    <div class="w-12 h-1 rounded-full mx-auto my-6 bg-white"></div>
                </RouterLink>
            </div>
        </div>

        <!-- article 1  -->

        <div class="px-10 mt-10 lg:flex lg:justify-center lg:flex-col lg:px-56 xl:px-96 lg:mt-20">
            <h2 class="font-Montserrat text-xl lg:text-2xl xl:text-4xl leading-tight font-semibold">

                Le cinéma a toujours été un divertissement apprécié de tous. <br />
                Que ce soit par passion
                pour l'univers cinématographique ou simplement pour passer du temps entre amis ou en famille,
                le cinéma a toujours su attirer son public.
            </h2>


            <div class="text-sm lg:text-xl leading-normal mt-10">
                <p class="mt-10">Et pour preuve, on recense un total de plus de <span class="font-bold">212 millions
                    </span>
                    d'entrées dans un cinéma dans
                    toutes les régions de France pour l'année de <span class="font-bold">2019</span>.
                </p>
                <p>
                    La région Ile-de-France recense même le plus d'entrées dans les cinémas avec plus de <span
                        class="font-bold">43 millions d'enregistrements.
                    </span>
                </p>
                <p>
                    On distingue bien l'impact qu'a le cinéma dans un pays comme la France.
                </p>
                <BarChart class="mt-4" />
                <p class="text-xs">Source : <a
                        href="https://data.culture.gouv.fr/explore/dataset/etablissements-cinematographiques/api/"
                        target="_blank">
                        data.culture.gouv.fr</a>
                </p>

                <p class="mt-10">Cela dit, le cinéma et le monde audiovisuel ne sont pas à l'abri de tous dangers.
                    Et pour cause, pour l'année suivante, donc 2020, les entrées ont énormément chuté.
                </p>

                <LineChart class="mt-4" />
                <p class="text-xs">Source : <a
                        href="https://data.culture.gouv.fr/explore/dataset/etablissements-cinematographiques/api/"
                        target="_blank">
                        data.culture.gouv.fr</a>
                </p>

                <p class="mt-10">Et on se rend très vite compte de la différence entre ces deux années.
                    La région d'Île de France, qui était à plus de <span class="font-bold">43 millions</span> d'entrées
                    pour 2019,
                    passe à moins de <span class="font-bold">20 millions</span> pour l'année de 2020.
                    Cela n'est pas un hasard puisque cette baisse conséquente est due à la pandémie qui
                    a eu lui entre le 17 mars 2020 et le 3 mai 2021.
                    La crise sanitaire a provoqué une chute énorme des ventes d'entrées dans les cinémas en France.
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