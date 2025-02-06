import axios from 'axios'
import { ref } from 'vue'

export let useFetchData = ()=>{
    const data = ref(null)
    const error = ref(null)
    const loading = ref(false)
    let response = ref(null)
    const load = async(url, method="GET", payload={}) => {
        loading.value = true;
        try{
            response = await axios(url, {
                method,
                data:payload,
                headers: {...(payload instanceof FormData ? { 'Content-Type': 'multipart/form-data' } : {}),}
            })
        }catch(err){
            error.value = err;
        }
        data.value = response.data;
        loading.value = false;

    }

    return { data, error, loading, load}
     
    
}