<script setup>
//import des éléments utiles de vue
import { reactive, ref, onMounted } from 'vue';
//import composable
import { getSeances } from '../composables/services.js'
// Import d'un graphique type doughnut
import { Doughnut } from 'vue-chartjs'
// import des objets du graphique de la bibliothèque ChartJS
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

//propriétés du graphique utilisés dans le template (props)
// on définit pour chacune son type de données et sa valeur par défaut
// on peut utiliser une grande variété de types, voire des objets

const propChart = defineProps({
    chartId: { type: String, default: 'doughnut-chart' },
    datasetIdKey: { type: String, default: 'label' },
    width: { type: Number, default: 500 },
    height: { type: Number, default: 500 },
    cssClasses: { type: String, default: '' },
    styles: { type: Object, default: () => { } },
    plugins: { type: Object, default: () => { } },

    //données du graphe

})
const chartData = reactive({

    labels: ['val', 'val'],
    datasets: [
        {
            data: [4, 5],
            backgroundColor: ['blue', 'red'],
            borderColor: [],
            borderWidth: 1
        }
    ]

})

const chartOptions = reactive({
    responsive: true,
    maintainAspectRatio: false
})

//null au départ (important)
let liste = ref(null);

//liste des spécialités
let lstSpecialite = [];

//tableau nb de villageois par specialité
let lstNb = [];

//Au montage du composant
onMounted(async () => {
    await fetch('https://data.culture.gouv.fr/api/records/1.0/search/?dataset=etablissements-cinematographiques')
        //Réponse demandée en json
        .then(response => response.json())
        //récup de la réponse
        .then(response => {
            liste = response;
            //On vérifie dans la console l'obtention des résultats
            console.log("response liste", liste);

            let setSp = new Set();

            liste.forEach((seance) => {
                setSp.add(seance.fields)
            })
            console.log("setSp contenu : ", setSp);
            // Récupération des valeurs du set dans un tableau
            chartData.labels = Array.from(setSp);
            //Tri du tableau par ordre alphabétique
            chartData.labels.sort();
        })
        .catch(error => console.log('erreur Ajax'))
})
</script>

<template>
    <div>
        <Doughnut :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId"
            :dataset-id-key="datasetIdKey" :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width"
            :height="height" />
    </div>
</template>