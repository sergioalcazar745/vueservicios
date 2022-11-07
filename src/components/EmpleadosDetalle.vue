<template>
    <div class="container">
        <h1 class="my-5">Detalle del empleado {{this.$route.params.id}}</h1>
        <form v-if="empleado != null">
            <label class="form-label">Apellido</label>
            <input type="text" class="form-control" :value="empleado.apellido"/>
            <label class="form-label">Oficio</label>
            <input type="text" class="form-control" :value="empleado.oficio"/>
            <label class="form-label">Salario</label>
            <input type="text" class="form-control" :value="empleado.salario"/>
            <label class="form-label">Departamento</label>
            <input type="text" class="form-control" :value="empleado.departamento"/>
        </form>
        <button @click="redirectHome" class="btn btn-danger mt-3">Volver</button>
    </div>
</template>

<script>
import Global from '@/Global';
import axios from 'axios';
export default {
    name: 'EmpleadosDetalle',

    data() {
        return {
            empleado: null
        };
    },

    mounted() {
      this.loadEmpleado();  
    },

    methods: {
        redirectHome(){
            this.$router.push("/oficio/"+this.empleado.oficio)
        },

        loadEmpleado(){
            var request = Global.url + "api/empleados/" + this.$route.params.id;

            axios.get(request).then(response => {
                this.empleado = response.data
            })
        }
    }
};
</script>

<style scoped>

</style>