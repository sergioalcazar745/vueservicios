<template>
    <div class="container">
        <h1 class="my-5">Coches</h1>
        <table class="table table-dark">
            <tbody v-html="getCoches"></tbody>
            <!-- <div>Loading</div> -->
        </table>
    </div>
</template>

<script>
import ServiceCoches from './../services/ServiceCoches'
const services = new ServiceCoches();

export default {
    name: 'CochesComponent',

    data() {
        return {
            coches: [],
            status: false
        };
    },

    computed: {
        getCoches(){
            var aux = ""
            for (var coche of this.coches) {
                aux += 
                    `
                    <tr>
                        <td>${coche.marca}</td>
                        <td>${coche.modelo}</td>
                        <td>${coche.conductor}</td>
                        <td><img src='${coche.imagen}'width="150"/></td>
                    </tr>
                    `
            }
            return aux
        } 
    },

    mounted() {
        this.loadCoches()
    },

    methods: {
        loadCoches(){
            services.getCoches().then(response => {
                this.coches = response;
                // this.status = true
            })
        }
    }
};
</script>

<style scoped>

</style>