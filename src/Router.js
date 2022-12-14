import { createRouter, createWebHistory } from 'vue-router';
import EmpleadosOficio from './components/EmpleadosOficio';
import EmpleadosDetalle from './components/EmpleadosDetalle.vue';
import HomeComponent from './components/Home.vue';
import CochesComponent from './components/CochesComponent.vue'

const routes = [
    {
        path: "/", component: HomeComponent
    },

    {
        path: "/oficio/:nombre", component: EmpleadosOficio
    },

    {
        path: "/detalles/:id", component: EmpleadosDetalle
    },

    {
        path: "/coches", component: CochesComponent
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;