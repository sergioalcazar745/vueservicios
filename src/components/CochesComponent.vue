<template>
    <div>
        <h1>Coches</h1>
        <table class="table table-dark">
            <tbody v-if="status" v-html="getCoches"></tbody>
            <div v-else>Loading</div>
        </table>
    </div>
</template>

<script>
import Global from './../Global';
import axios from "axios";
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
                        <td><img src='${coche.imagen}' width="150"/></td>
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
            var request = Global.url + "/webresources/coches";
            axios.get(request).then(response => {
                this.coches = response.data;
                this.status = true;
            })
        }
    }
};
</script>

<style scoped>

</style>