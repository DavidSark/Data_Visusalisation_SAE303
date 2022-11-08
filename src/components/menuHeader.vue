<script setup lang="ts">
import { ref } from 'vue'
const menuVisible = ref(true);
</script>

<template>
    <div>
        <!-- Menu responsive -->
        <div class="overflow-y-hidden bg-black h-full w-full fixed " :class="{ hidden: menuVisible }">
            <div class="flex justify-end mt-6">
                <button v-if="!menuVisible" v-on:click="menuVisible = !menuVisible" class="mx-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class=" h-8 w-8 text-white" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
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
                    DATAMA</p>
                <p class="text-white md:text-2xl 2xl:text-3xl">Les données du cinéma </p>
                <!-- <img class="" src="../assets/img/logo.svg" alt="logo du site" /> -->
                <div class="w-12 h-1 rounded-full mx-auto my-6 bg-white"></div>
            </RouterLink>
        </div>


    </div>
</template>