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

    labels: [],
    datasets: [
        {
            data: [],
            backgroundColor: [],
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


//Au montage du composant
onMounted(async () => {
    await fetch('https://data.culture.gouv.fr/api/records/1.0/search/?dataset=etablissements-cinematographiques&q=&rows=5000&facet=region_administrative&facet=genre&facet=multiplexe&facet=zone_de_la_commune')
        //Réponse demandée en json
        .then(response => response.json())
        //récup de la réponse
        .then(response => {
            liste.value = response.records;
            console.log("response liste", liste);
            let setSp = new Set();
            liste.value.forEach((region) => {
                //console.log("....", region)
                setSp.add(region.fields.region_administrative);
            });
            //console.log("setSP", setSp)

            // Récupération des valeurs du set dans un tableau
            chartData.labels = Array.from(setSp);
            //Tri du tableau par ordre alphabétique
            chartData.labels.sort();
            //console.log("chartData labels", chartData.labels)


            //calcul du nombre de festival par région
            let cpt = [];

            //Parcours les libellés des régions
            chartData.labels.forEach(function (region) {
                //Initialisation du nombre pour une région donnée
                let nb = 0;
                //console.log('regions : ', region)
                //parcours de la liste
                liste.value.forEach((seance) => {
                    //si c'est la bonne spécialité
                    //on compte +1
                    console.log('seance :', seance)
                    if (region == seance.fields.region_administrative) {
                        nb += seance.fields.nombre_de_films_inedits;
                    }

                });
                //on place le nb de villageois de cette spécialité
                //dans le tableau de comptage
                cpt.push(nb);
            });
            //on transfert le tableau de comptage dans les data
            chartData.datasets[0].data = cpt;

            // console.log("chartData data", chartData.datasets[0].data)

            //Calcul des couleurs et bordures
            let bgColor = [];
            let bdColor = [];

            //pour chaque valeur existante
            cpt.forEach(function (val) {
                //on calcul la couleur du secteur
                let c1 = couleur(0, 255, 0);
                let c2 = couleur(0, 255, 0);
                let c3 = couleur(0, 255, 0);
                let tr = 0.5;

                //couleur avec transparence
                let color = "rgba(" + [c1, c2, c3, tr].join(",") + ")";
                bgColor.push(color);

                //Bordure sans transparence
                let border = "rgba(" + [c1, c2, c3].join(",") + ")";
                bdColor.push(color);

            });
            // console.log("bgColor", bgColor);
            // console.log("bdColor", bdColor);

            //chargement des couleurs et des bordures
            chartData.datasets[0].backgroundColor = bgColor;
            chartData.datasets[0].borderColor = bdColor;

            console.log("chartData", chartData)

        })
        .catch(error => console.log('erreur Ajax'))
})

const couleur = (min, max) => {
    return Math.floor(Math.random() * (max - min));
};
</script>

<template>
    <div>
        <Doughnut :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId"
            :dataset-id-key="datasetIdKey" :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width"
            :height="height" />
    </div>
</template>