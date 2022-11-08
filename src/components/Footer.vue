<template>
    <div>
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