<template>
    <div class="container">
        <h1 class="my-5">Empleados del oficio {{this.$route.params.nombre}}</h1>
        <table class="table">
            <thead>
                <th>Apellido</th>
                <th>Oficio</th>
                <th>Salario</th>
                <th>Departamento</th>
                <th>Accion</th>
            </thead>
            <tbody>
                <tr v-for="empleado in this.empleados" :key="empleado">
                    <td>{{empleado.apellido}}</td>
                    <td>{{empleado.oficio}}</td>
                    <td>{{empleado.salario}}</td>
                    <td>{{empleado.departamento}}</td>
                    <!-- <td><router-link :to="'/detalles/' + empleado.idEmpleado " class="btn btn-success">Detalle</router-link></td> -->
                    <td><button @click="this.id = empleado.idEmpleado" class="btn btn-success">Detalle</button></td>
                </tr>
            </tbody>
        </table>
        <EmpleadosDetalle :id="this.id"/>
    </div>
</template>

<script>
import axios from 'axios';
import Global from './../Global';
import EmpleadosDetalle from './EmpleadosDetalle.vue'
export default {
    name: 'EmpleadosOficio',

    components: {
        EmpleadosDetalle
    },

    data() {
        return {
            empleados: [],
            id: 0
        };
    },

    watch: {
        '$route.params.nombre'(next, old){
            if(next != old){
                this.loadEmpleados()
            }
        }
    },

    mounted(){
        this.loadEmpleados()
    },

    methods: {

        loadEmpleados(){
            this.id = 0;
            var request = Global.url + "api/Empleados/EmpleadosOficio/" + this.$route.params.nombre;

            axios.get(request).then(response => {
                this.empleados = response.data
            })
        },
    }
};
</script>

<style scoped>

</style>