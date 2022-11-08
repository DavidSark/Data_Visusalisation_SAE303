import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import MapView from '../views/MapView.vue'
import BarchartView from '../views/BarChartView.vue'
import LineChartView from '../views/LineChartView.vue'
import VerticalBarChartView from '../views/VerticalBarChartView.vue'
import AreaChartView from '../views/AreaChartView.vue'
import DoughnutChartView from '../views/DoughnutChartView.vue'
import CinemaCrise from '../views/Cinema&Crise.vue'
import RegionsSeances from '../views/Regions&seances.vue'
import FilmsInedits from '../views/FilmsInedits.vue'
import GraphFiltre from '../views/GraphFiltreView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/map', name: 'Map', component: MapView },
    { path: '/barchart', name: 'BarchartView', component: BarchartView },
    { path: '/linechart', name: 'LineChartView', component: LineChartView },
    { path: '/verticalbarchart', name: 'VerticalBarChartView', component: VerticalBarChartView },
    { path: '/areachart', name: 'AreaChartView', component: AreaChartView },
    { path: '/doughnutchart', name: 'DoughnutChartView', component: DoughnutChartView },
    { path: '/cinema&crise', name: 'CinemaCrise', component: CinemaCrise },
    { path: '/regions&seances', name: 'RegionsSeances', component: RegionsSeances },
    { path: '/filmsinedits', name: 'FilmsInedits', component: FilmsInedits },
    { path: '/graphfiltre', name: 'GraphFiltre', component: GraphFiltre },
  ]
})

export default router
