<script setup>
import { reactive, ref, onMounted } from 'vue';

//import d'un graphique typeLineChart
import { Line } from 'vue-chartjs'

//import des objets du graphique de la bibliothèque chartjs
//voir la documentation pour descriptif des éléments 
import {
    Chart as ChartJS, Title, Tooltip, Legend, PointElement, LineElement, LineController,
    CategoryScale, LinearScale, Filler
} from 'chart.js'

//éléments utilisés par notre graphique registration pour vue-chart
ChartJS.register(Title, Tooltip, Legend, PointElement, LineElement, LineController, CategoryScale, LinearScale, Filler)

//propriétés du graphique utilisés dans le template (props)
// on définit pour chacune son type de données et sa valeur par défaut
// on peut utiliser une grande variété de types, voire des objets

const propChart = defineProps({
    chartId: { type: String, default: 'line-chart' },
    datasetIdKey: { type: String, default: 'label' },
    width: { type: Number, default: 200 },
    height: { type: Number, default: 100 },
    cssClasses: { type: String, default: '' },
    styles: { type: Object, default: () => { } },
    plugins: { type: Object, default: () => { } },

    //données du graphe

})

//données injectée dans le graphique 
let chartData = reactive({
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai'],
    //valeurs des données du graphique
    //elles seront écrasées par les donnée réelle provenant de l'api
    datasets: [
        {
            //etiquette du jeu de données à projeter
            label: '2019',
            //valeurs des données (statiques pour pour l'exemple)
            data: [],
            borderColor: 'rgba(255,0,0,0.5)',
            tension: 0.5,
            fill: true,
            backgroundColor: 'rgba(227, 227, 227,0.2)',
            pointBackgroundColor: '#fff', //couleur de fond du point
            pointBorderColor: '#ffb88c', //bordure entourant le point
            pointHoverBackgoundColor: '#ffb88c', //couleur de fond du point au passage de la souris
            pointHoverBorderColor: '#fff', //bordure entourant le point au passage de la souris 
            pointRadius: 4, //rayon du point 
            pointHoverRadius: 6, //rayon du point au passage de la souris
        },
        {
            //etiquette du jeu de données à projeter
            label: '2020',
            //valeurs des données (statiques pour pour l'exemple)
            data: [],
            borderColor: 'rgba(0,0,255,0.5)',
            tension: 0.5,
            fill: true,
            backgroundColor: 'rgba(227, 227, 227,0.2)',
            pointBackgroundColor: '#fff', //couleur de fond du point
            pointBorderColor: '#ffb88c', //bordure entourant le point
            pointHoverBackgoundColor: '#ffb88c', //couleur de fond du point au passage de la souris
            pointHoverBorderColor: '#fff', //bordure entourant le point au passage de la souris 
            pointRadius: 4, //rayon du point 
            pointHoverRadius: 6, //rayon du point au passage de la souris
        },
    ]
})

//option du graphique 
let chartOptions = reactive({
    //aspect responsive du graphique 
    responsive: true,
    //les plugins
    plugins: {
        //titre du graphique
        title: {
            //affichage
            display: true,
            //libellé du graphique 
            text: 'Comparatif des entrées totales de chaques régions entre 2019 & 2020 - ',
            color: "black",
            //police de test
            font: {
                size: 16
            }
        }
    },

    scales: {
        //axe des ordonnées 
        y: {
            ticks: {
                font: {
                    size: 8
                }
            }
        },
        //axe des abscisses
        x: {
            ticks: {
                font: {
                    size: 8
                }
            }
        }
    },
})

//montage du composant chargement des données 
//liste contiendra le résultat de la requete 
let liste = ref()
onMounted(async () => {
    let request = "https://data.culture.gouv.fr/api/records/1.0/search/"
        + "?dataset=etablissements-cinematographiques"
        + "&q=&rows=3000"
        + "&sort=entrees_2020"

    await fetch(request)
        //réponse demandé en JSON
        .then(response => response.json())
        //recupération de la réponse
        .then(response => {
            liste.value = new Array(response);
            //on vérifie dans la console l'obtention des résultats
            console.log("reponse ", liste.value);
            //récupération du nombres de valeurs retournées
            chartOptions.plugins.title.text += liste.value[0].nhits + " réponses"
            //chargement des labels (axe des ordonnées)
            //création d'un set pour valeurs uniques
            let setLabels = new Set()
            //parcours des valeurs, récupération des années
            liste.value[0].records.forEach((el) => {
                setLabels.add(el.fields.region_administrative)
            })
            //transmission des valeurs du set aux labels 
            chartData.labels = Array.from(setLabels)
            //tri des labels par ordre croissant
            chartData.labels.sort()

            //calcul des valeurs par labels 
            //comptage pour l'année 2020
            let cpt2020 = []
            //comptage pour l'année 2019
            let cpt2019 = []

            //parcours des labels 
            chartData.labels.forEach((label) => {
                //parcours des données
                //compteurs pour un labels
                let nb2020 = 0
                let nb2019 = 0
                //parcours des valeurs
                liste.value[0].records.forEach((el) => {
                    //si c'est le bon label
                    if (label == el.fields.region_administrative) {
                        //comptage des valeurs
                        nb2020 += el.fields.entrees_2019
                        nb2019 += el.fields.entrees_2020
                    }
                })
                cpt2020.push(nb2020)
                cpt2019.push(nb2019)
            })
            //chargement des données
            //mise à jour des tableaux
            chartData.datasets[0].data = cpt2020
            chartData.datasets[1].data = cpt2019
        })
        .catch(error => console.log('erreur Ajax', error))
})

</script>


<template>
    <main>

        <Line :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
            :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height">

        </Line>
    </main>
</template>