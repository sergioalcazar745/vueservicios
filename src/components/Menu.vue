<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/coches" class="nav-link">Coches</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Oficios
                        </a>
                        <ul class="dropdown-menu">
                            <li v-for="oficio in oficios" :key="oficio"><router-link :to="'/oficio/' + oficio" class="dropdown-item">{{oficio}}</router-link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import axios from 'axios';
import Global from './../Global';
export default {
    name: 'MenuComponent',
    data() {
        return {
            oficios: []
        };
    },

    mounted() {
        this.loadOficios()
    },

    methods: {
        loadOficios(){
            var request = Global.url + "api/Empleados/oficios";

            axios.get(request).then(response => {
                this.oficios = response.data
            })
        }
    }
};
</script>

<style scoped>

</style>