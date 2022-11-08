import Global from "@/Global";
import axios from "axios";

export default class ServiceCoches {
    // getCoches = new Promise(function(resolve){
    //     var request = Global.urlCoches + "/webresources/coches";
    //     axios.get(request).then(response => {
    //         resolve(response.data)
    //     })
    // })

    getCoches(){
        return new Promise(function(resolve){
            var request = Global.urlCoches + "/webresources/coches";
            axios.get(request).then(response => {
                resolve(response.data)
            })
        })
    }
}