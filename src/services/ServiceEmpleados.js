import Global from "@/Global";
import axios from "axios";

export default class ServiceEmpleados{

    getEmpleados(){
        return new Promise(function(resolve){
            var request = Global.url + "api/empleados";
            axios.get(request).then(response => {
                resolve(response.data)
            })
        })
    }

    findByOne(id){
        return new Promise(function(resolve){
            var request = Global.url + "api/empleados/" + id;
            console.log(request)
            axios.get(request).then(response => {
                resolve(response.data)
            })
        })
    }
}