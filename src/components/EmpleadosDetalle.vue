<template>
    <div class="container">
        <h1 class="my-5" v-if="id > 0">Detalle del empleado {{this.id}}</h1>
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
        <!-- <button @click="redirectHome" class="btn btn-danger mt-3">Volver</button> -->
    </div>
</template>

<script>
import ServiceEmpleados from './../services/ServiceEmpleados'
const service = new ServiceEmpleados();

export default {
    name: 'EmpleadosDetalle',

    data() {
        return {
            empleado: null
        };
    },

    props:['id'],

    mounted() {
        if(this.id > 0){
            this.loadEmpleado();  
        }
    },

    watch: {
        id(newVal, oldVal){
            if(newVal != oldVal){
                this.loadEmpleado()
            }
        }
    },

    methods: {
        redirectHome(){
            this.$router.push("/oficio/"+this.empleado.oficio)
        },

        loadEmpleado(){
            service.findByOne(this.id).then(response => {
                console.log(response);
                this.empleado = response;                
            })
        }
    }
};
</script>

<style scoped>

</style>