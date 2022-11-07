<template>
    <div class="container">
        <h1>Home {{saludo}}</h1>
    </div>
</template>

<script>
import ServiceEjemplo from './../services/ServiceEjemplo'
const service = new ServiceEjemplo();

export default {
    name: 'HomeComponent',
    data() {
        return {
            saludo: ""
        };
    },

    mounted() {
        this.saludo = service.getSaludo("Alumno")
    }
};
</script>

<style scoped>

</style>