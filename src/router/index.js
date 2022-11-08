import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import MapView from '../views/MapView.vue'
import BarchartView from '../views/BarChartView.vue'
import LineChartView from '../views/LineChartView.vue'
import VerticalBarChartView from '../views/VerticalBarChartView.vue'
import DoughnutChartView from '../views/DoughnutChartView.vue'
import Article1View from '../views/Article1View.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/map', name: 'Map', component: MapView },
    { path: '/barchart', name: 'BarchartView', component: BarchartView },
    { path: '/linechart', name: 'LineChartView', component: LineChartView },
    { path: '/verticalbarchart', name: 'VerticalBarChartView', component: VerticalBarChartView },
    { path: '/doughnutchart', name: 'DoughnutChartView', component: DoughnutChartView },
    { path: '/article1', name: 'Article1View', component: Article1View },
  ]
})

export default router
